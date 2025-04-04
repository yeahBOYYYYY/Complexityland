import re
import os

# Path to your preamble.sty file
preamble_path = r"E:\University\Exstra\Complexityland\main\Storage\.vscode\preamble.sty"
# Path to your Markdown root directory
markdown_root = r"E:\University\Exstra\Complexityland\main\Storage"

# Read the preamble file and extract macros
def load_macros(preamble_path):
    macros = {}
    with open(preamble_path, "r", encoding="utf-8") as f:
        for line in f:
            match = re.match(r"\\newcommand\{(\\\w+)\}(\[([0-9])\])?\{(.+)\}", line.strip())
            if match:
                macro_name = match.group(1)  # Macro name (e.g., \P, \lint, \cn)
                num_args = int(match.group(3)) if match.group(3) else 0  # Number of arguments
                macro_body = match.group(4)  # Macro replacement body
                
                # Store the macro in a dictionary
                macros[macro_name] = (num_args, macro_body)
    return macros

# Replace macros in a given LaTeX expression
def expand_macros(text, macros):
    for macro, (num_args, body) in macros.items():
        if num_args == 0:
            pattern = re.escape(macro) + r"(?![a-zA-Z])"  # Match macro not followed by a letter
            print(f"Pattern: {pattern}")
            print(f"Body: {body}")
            matches = re.findall(pattern, text)
            print(f"Matches: {matches}")
            for match in matches:
                text = text.replace(match, body)
        else:
            # Regex for macro with arguments
            pattern = "\\" + macro + (r"(\{.*?\})" * num_args)
            print(f"Pattern: {pattern}")
            matches = re.findall(pattern, text)

            for match in matches:
                # Extract arguments from match
                args = re.findall(r"\{(.*?)\}", match)
                expanded = body
                for i, arg in enumerate(args, start=1):
                    expanded = expanded.replace(f"#{i}", arg)
                
                text = text.replace(macro + "".join(match), expanded)

    return text

# Process all Markdown files
def process_markdown_files(root_dir, macros):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".md"):
                filepath = os.path.join(dirpath, filename)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                
                updated_content = expand_macros(content, macros)

                
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(updated_content)

# Load macros and process files
macros = load_macros(preamble_path)
process_markdown_files(markdown_root, macros)
print("Macro expansion completed!")