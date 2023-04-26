import re
#defining the replace method

def replace(file_path1, file_path2, file_path3, pattern, flags=0):
    
   #open the file
   with open(file_path1, "r+") as file1:
       with open(file_path2, "r+") as file2:
           contents1 = file1.read()
           contents2 = file2.read()
           new_contents = contents1.replace(pattern, contents2)
           with open(file_path3, "w+") as file3:
               file3.write(new_contents)
               
#replace('./ooo', 'common_parser.g4', './ooo1', '<<<<<<common<<<<<<')

def main(path1, path2, path3, pattern):
   replace(path1, path2, path3, pattern)


if __name__ == '__main__':
   import argparse
   parser = argparse.ArgumentParser(description='Replaces parser contents')
   parser.add_argument("path1")
   parser.add_argument("path2")
   parser.add_argument("path3")
   parser.add_argument("pattern")
   args = parser.parse_args()
   #print(args.path1)
   #print(args.path2)
   #print(args.path3)
   #print(args.pattern)
   replace(args.path1, args.path2, args.path3, args.pattern)

