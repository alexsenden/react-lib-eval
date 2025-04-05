import tree_sitter_javascript

from tree_sitter import Language, Parser

JS_LANGUAGE = Language(tree_sitter_javascript.language())

parser = Parser(JS_LANGUAGE)


def tokenize_code(code):
    tree = parser.parse(code.encode())
    tokens = []

    def traverse(node):
        if node.child_count == 0:
            tokens.append(node.text.decode())
        for child in node.children:
            traverse(child)

    traverse(tree.root_node)
    return tokens
