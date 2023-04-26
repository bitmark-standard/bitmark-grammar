#
#  commonjs2es5js.py
#
#  usage: python commonjs2es5js.py commonjs-filename es5js-filename
#
import re
#defining the replace method
'''
① 
const R = require('ramda');
const Stack = require('./stack').Stack;
const but = require('./bit-utils');
const JSON_BIT_TEMPLATES = require('./bit-template.js').JSON_BIT_TEMPLATES;
===> 
import R_clone from 'ramda/es/clone.js';
import { Stack } from './stack.mjs';
import { BitUtil } from './bit-utils.mjs';
import { JSON_BIT_TEMPLATES } from './bit-template.mjs';

②
35c33
<   this.but = new but.BitUtil(source.trim());
---
>   this.but = new BitUtil(source.trim());
③
R.clone ==> R_clone
④
< exports.BitmarkListener = BitmarkListener;
---
> export {BitmarkListener};

'''
cjs_files = [
   "./bit-template.js",
   "./bit-utils.js",
   "./bitmark-listener.js",
   "./stack.js",
   "./index.js"
]

fromto_re = [
   {'from': "const\sR\s*=\s*require\('ramda'\);",
    "to": "import R_clone from 'ramda/es/clone.js';\nimport R_slice from 'ramda/es/slice.js';"},
   {"from": "const\sStack\s=\srequire\('./stack'\).Stack;",
    "to": "import { Stack } from './stack.mjs';"},
   {"from": "const\sbut\s=\srequire\('./bit-utils'\);",
    "to": "import { BitUtil } from './bit-utils.mjs';"},
   {"from": "const\sJSON_BIT_TEMPLATES\s=\srequire\('./bit-template.js'\).JSON_BIT_TEMPLATES;",
    "to": "import { JSON_BIT_TEMPLATES } from './bit-template.mjs';\n"},
   {"from": "R\.clone", "to": "R_clone"},
   {"from": "R\.slice", "to": "R_slice"},
   {"from": "exports\.([A-Za-z_0-9]+)\s*=\s*([A-Za-z_0-9]+)",
    "to": "export {\\1}"},
   {"from": "const\s(\w+)\s*=\s*require\('antlr4ts/(\w+).js'\)",
    "to": "import { \\2 } from './typescript-es6/antlr4es6/\\2.js'"},
   
   {"from": "const\s(\w+)\s*=\s*require\('antlr4ts/tree/\w+.js'\)",
    "to": "import { \\1 } from './typescript-es6/antlr4es6/tree/\\1.js'"},
   {"from": "const\s(\w+)\s=\srequire\('antlr4ts/atn/\w+.js'\)",
    "to": "import { \\1 } from './typescript-es6/antlr4es6/atn/\\1.js'"},
   {"from": "const\s(\w+)\s=\srequire\('\./typescript/\w+.js'\)",
    "to": "import { \\1 } from './typescript-es6/\\1.js'"},
   {"from": "const\s*(\w+)\s*=\srequire\('\./[A-Z]\w+/\w+.js'\)",
    "to": "import { \\1 } from './typescript-es6/\\1.js'"},
   {"from": "const\s*(\w+)\s*=\srequire\('\w+'\)",
    "to": "import { \\1 } from '\\1'"},
   {"from": "const\slistener\s*=\s*require\('\./bitmark\-listener\.js'\)",
    "to": "import { BitmarkListener } from './bitmark-listener.mjs'"},
   {"from": "const\s+bit_tmpl\s*=\s*require\('\./bit\-template\.js'\)",
    "to": "import { JSON_BIT_TEMPLATES } from './bit-template.mjs'"},
   {"from": "const\sbut\s=\srequire\('\./bit-utils.js'\)",
    "to": "import { BitUtil } from './bit-utils.mjs'"},

   {"from": "but\.BitUtil", "to": "BitUtil"},
   {"from": "bit_tmpl\.", "to": ""},
   {"from": "lexer:\s*(\w+)\.(\w+)", "to": "lexer: \\1"},
   {"from": "parser:\s*(\w+)\.(\w+)", "to": "parser: \\1"},
   {"from": "CharStreams.CharStreams", "to": "CharStreams"},
   {"from": "CommonTokenStream.CommonTokenStream", "to": "CommonTokenStream"},
   {"from": "new\slistener\.", "to": "new "},
   {"from": "extends\s+errorstrategy\.", "to": "extends "},
]



def replace_one(infile):
    
   #open the file
   outfile = re.sub(r'\.js', '.mjs', infile)
   with open(infile, "r+") as f1:
      with open(outfile, "w") as f2:
         tex = f1.read()
         for r in fromto_re:
            tex = re.sub(r['from'], r['to'], tex, flags=re.M)
         f2.write(tex)


               
#replace('./ooo', 'common_parser.g4', './ooo1', '<<<<<<common<<<<<<')

def replace(files):
   for file in files:
      replace_one(file)


if __name__ == '__main__':
   #import argparse
   #parser = argparse.ArgumentParser(description='Replaces from commonjs to es5js code')
   #parser.add_argument('filenames', nargs='+', help='Path of a file or a folder of files.')
   #args = parser.parse_args()
   #print(args.filenames)
   #replace(args.filenames)
   replace(cjs_files)


