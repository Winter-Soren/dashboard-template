import os
import sys
import shutil

def convert_to_jsx(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.js'):
                js_file_path = os.path.join(root, file)
                jsx_file_path = os.path.join(root, file[:-3] + '.jsx')
                shutil.move(js_file_path, jsx_file_path)
                print(f"Converted: {js_file_path} -> {jsx_file_path}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python convert_to_jsx.py <folder_path>")
        sys.exit(1)

    folder_path = sys.argv[1]
    
    if not os.path.isdir(folder_path):
        print("Error: Invalid folder path.")
        sys.exit(1)

    convert_to_jsx(folder_path)
