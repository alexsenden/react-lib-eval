''.join([f"<li>{{{item.strip()}}}</li>" for item in re.findall(r'\w+', arg_value)])