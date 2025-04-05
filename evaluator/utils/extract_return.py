import regex

def find_return_paren(text):
    pattern = r'\breturn\s*\('
    match = regex.search(pattern, text)
    if match:
        return match.end()
    return None

def find_last_return_paren(text):
    pattern = r'>\s*\)'
    matches = list(regex.finditer(pattern, text))
    if matches:
        return matches[-1].start()
    return None

def extract_return_value(code):
    # Find the first 'return (' and the last '>)'
    start = find_return_paren(code)
    end = find_last_return_paren(code)

    if start is not None and end is not None:
        return code[start:end + 1]
    else:
        return code