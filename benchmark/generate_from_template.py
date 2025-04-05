import json
import os
import re
import regex

DEBUG = False

LIBRARIES = [
    "generic",
    "priceline_pcln-design-system",
    "themesberg_flowbite-react",
    "shopify_polaris",
    "carbon-design-system_carbon",
]

COMPONENTS = [
    "Accordion",
    "Alert",
    "Avatar",
    "Badge",
    "Button",
    "Card",
    "Checkbox",
    "Input",
    "Link",
    "List",
    "Modal",
    "ProgressBar",
    "RadioButton",
    "Select",
    "Spinner",
    "Tabs",
    "Text",
    "TextArea",
    "Toast",
    "Toggle",
]

TAG_REGEX = r"<\/?([a-zA-Z0-9]+)[\s\/>]"
WHITESPACE_REGEX = r"^\s*"
ARGS_REGEX = r"([a-zA-Z0-9]+)=\$(\{(?:[^{}]++|(?2))*\})"
NAMELESS_ARG_REGEX = r"\$(\{(?:[^{}]++|(?1))*\})"
ALPHANUMERIC_REGEX = r"[a-zA-Z0-9]+"
CLOSING_TAG_REGEX = r"\s*<\/"
COMPONENT_REGEX = r"<((?:[^<>]+|(?R))*)>"
ARG_REPLACE_REGEX = r"\${([a-zA-Z0-9]+)([^}]*)}"

path = ""


def save_implementation(output_dir, library, template_name, ground_truth):
    with open(f"{output_dir}/{library}/{template_name}.jsx", "w") as f:
        f.write(ground_truth)


def get_filename(path):
    return path.split("/")[-1].split(".")[0]


def get_implementations(library):
    global path
    implementation = {}

    implementation_files = os.listdir(f"{path}lib-implementations/{library}")
    for file in implementation_files:
        if file != "component-map.json" and file != "custom-mappers":
            with open(f"{path}lib-implementations/{library}/{file}", "r") as f:
                implementation[get_filename(file)] = f.read()

    return implementation


def get_component_map(library):
    global path
    with open(f"{path}lib-implementations/{library}/component-map.json", "r") as f:
        return json.load(f)


def get_templates():
    global path
    templates = []

    template_files = os.listdir(f"{path}templates")
    for file in template_files:
        with open(f"{path}templates/{file}", "r") as f:
            templates.append((f.read(), get_filename(file)))

    return templates


def get_custom_mappers(library):
    global path
    custom_mappers = {}

    custom_mapper_dir = f"{path}lib-implementations/{library}/custom-mappers"
    custom_mapper_files = os.listdir(custom_mapper_dir)
    for file in custom_mapper_files:
        with open(f"{custom_mapper_dir}/{file}", "r") as f:
            custom_mappers[get_filename(file)] = f.read()

    return custom_mappers


def get_arg_sub_regex(arg_name):
    return rf"\${{{arg_name}([^}}]*)}}"


def handle_custom_mapper(custom_mappers, tag_name, arg_name, arg_value):
    mapper_handle = f"{tag_name}_{arg_name}"
    if mapper_handle in custom_mappers:
        # Strip the outer {}
        arg_value = arg_value[1:-1]

        # String outer quotes if they exist
        if arg_value[0] == '"' or arg_value[0] == "'":
            arg_value = arg_value[1:-1]

        # Get the custom mapper function
        custom_mapper = custom_mappers[mapper_handle]
        arg_value = eval(custom_mapper)

    return arg_value


def handle_nested(nested_component, component_map, implementations, custom_mappers):
    # Regex gets the tag name
    tag_capture = re.search(TAG_REGEX, nested_component)
    if tag_capture and tag_capture.group(1) in COMPONENTS:
        tag_name = tag_capture.group(1)

        # Add the component implementation to the ground truth
        return handle_component(
            tag_name,
            nested_component,
            component_map,
            implementations[tag_name],
            implementations,
            custom_mappers,
        )
    return nested_component


def replace_arg(
    implementation,
    arg_name,
    arg_value,
    component_map,
    implementations,
    tag_name,
    custom_mappers,
):
    transformedArgName = "arg" + arg_name[0].upper() + arg_name[1:]
    if transformedArgName in implementation:
        # Check for nested components that need to be handled
        nested = regex.findall(COMPONENT_REGEX, arg_value)
        for nested_component in nested:
            nested_component = f"<{nested_component}>"
            arg_value = arg_value.replace(
                nested_component,
                handle_nested(
                    nested_component, component_map, implementations, custom_mappers
                ),
            )

        transformedArgRegex = get_arg_sub_regex(transformedArgName)
        extra_content = regex.search(transformedArgRegex, implementation).group(1)
        if extra_content != "":
            arg_value = arg_value[:-1] + extra_content + arg_value[-1]

        # Check for custom mappers
        arg_value = handle_custom_mapper(
            custom_mappers, tag_name, transformedArgName, arg_value
        )

        return regex.sub(transformedArgRegex, arg_value, implementation, count=1)

        # return implementation.replace(f"${{{transformedArgName}}}", arg_value)
    return regex.sub(
        ALPHANUMERIC_REGEX + rf"=\${{{transformedArgName}}}", "", implementation, count=1
    )


def handle_component(
    tag_name,
    template_line,
    component_map,
    implementation,
    implementations,
    custom_mappers,
):
    if DEBUG:
        print(f"Handling component: {tag_name}")
    
    # If the tag is a closing tag, replace the component name and return
    if regex.match(CLOSING_TAG_REGEX, template_line) != None:
        template_line = regex.sub(WHITESPACE_REGEX, "", template_line)
        return template_line.replace(tag_name, component_map[tag_name])

    # Replace the template tag name with the mapped tag name
    implementation = implementation.replace(
        f"<{tag_name} ", f"<{component_map[tag_name]} "
    )
    implementation = implementation.replace(
        f"<{tag_name}>", f"<{component_map[tag_name]}>"
    )
    implementation = implementation.replace(
        f"</{tag_name}>", f"</{component_map[tag_name]}>"
    )

    # Get the args from the template and substitute them into the implementation
    args_result = regex.findall(ARGS_REGEX, template_line)
    if DEBUG:
      print(f"Args result: {args_result}")
    for arg in args_result:
        arg_name = arg[0]
        arg_value = arg[1]
        implementation = replace_arg(
            implementation,
            arg_name,
            arg_value,
            component_map,
            implementations,
            tag_name,
            custom_mappers,
        )

    # Remove any unused props
    unused_args_result = regex.findall(ARGS_REGEX, implementation)
    for arg in unused_args_result:
        arg_name = arg[0]
        arg_value = arg[1]
        implementation = implementation.replace(f" {arg_name}=${arg_value}", "")

    # Remove any unused child (nameless) args
    implementation = regex.sub(NAMELESS_ARG_REGEX, "", implementation)

    return implementation


def generate_from_template(library, output_dir, path_prefix=""):
    if library not in LIBRARIES:
        raise ValueError(
            "Invalid library: {}. Options are: {}".format(library, LIBRARIES)
        )
        
    global path
    path = path_prefix

    implementations = get_implementations(library)
    component_map = get_component_map(library)
    custom_mappers = get_custom_mappers(library)
    templates = get_templates()

    os.makedirs(f"{output_dir}/{library}", exist_ok=True)

    for template, template_name in templates:
        if DEBUG:
            print(f"Generating {template_name} for library: {library}")
        ground_truth = ""
        template_lines = template.split("\n")
        for template_line in template_lines:
            # Regex gets the tag name
            tag_capture = re.search(TAG_REGEX, template_line)
            if tag_capture and tag_capture.group(1) in COMPONENTS:
                tag_name = tag_capture.group(1)

                # Add any leading whitespace to the ground truth
                ground_truth += re.search(WHITESPACE_REGEX, template_line).group(0)

                # Add the component implementation to the ground truth
                ground_truth += (
                    handle_component(
                        tag_name,
                        template_line,
                        component_map,
                        implementations[tag_name],
                        implementations,
                        custom_mappers,
                    )
                    + "\n"
                )
            else:
                # Add the line as is to the ground truth
                ground_truth += template_line + "\n"

        save_implementation(output_dir, library, template_name, ground_truth)
