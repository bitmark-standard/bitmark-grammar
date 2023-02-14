/*
 *  main-diff.js
 *
 *
 *
 *
 *  process-direction
 *
 *  setvalue:
 *      1. capture the text starting after the <setvalue> and upto before next tag appears.
 *      2. concatnate all lines and remove \ before newline.
 *      3. split by the assign op =, :=, ?=, !=, +=, ::=
 *      4. Get three parts lhs assign-op rhs
 *   aliases: [
 *	{"lhs": "CC", "op":":=", "rhs": "g++"},
 *	("lhs": "CFLAGS", "op": "=", "rhs": "-c -Wall"},
 *       ...
 *   ],
 *
 *
 *
 */
import fs from 'fs';
import process from 'process';
import now from 'performance-now';
import {CMarkupGenerator} from '../../common/markup.mjs';
import '../../common/string_helpers.mjs';
import jsdiff from 'diff';
import libxmljs from "libxmljs";
import ramda_forEach from '@modkit/ramda-es6/es/forEach.js';
import {MarkupTags} from '../../common/MarkupTags.mjs';

import 'colors';
import jsdom from "jsdom";

let { JSDOM } = jsdom;
let USE_JSDOM = true;
const WRITEXMLFILE = 0;
const mydate = '';



let testData = {
  "name": "Modkit Round Trip Test Data",
  "description": "Tests that after markup is added to the DOM. The innerHTML of the element it is added to matches the original text output from markup.",
  "runner": "MarkupRoundTripTestRunner",
  "options": {},
  "tests": [
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A212_InfiniteBox.mkl",
      "input": "brain Brain;\nmotor Motor1 ;\nmotor Motor2 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"STRAIGHT\":{\"type\":\"event\"},\"DEBUG\":{\"type\":\"boolean\"},\"LEFT\":{\"type\":\"event\"},\"RIGHT\":{\"type\":\"event\"},\"i\":{\"type\":\"number\"},\"STRAIGHT_AND_LEFT\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nevent STRAIGHT;\nboolean DEBUG= false;\nevent LEFT;\nevent RIGHT;\nnumber i = 0;\nevent STRAIGHT_AND_LEFT;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::66px,123px\nwhen(STARTED){\n  DEBUG=false;\n  i=0;\n  forever{\n    broadcastAndWait(STRAIGHT_AND_LEFT);\n    Brain.LCD.clearScreen();\n    Brain.LCD.setCursor(0,0);\n    Brain.LCD.print(i);\n    i=(i+1);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::453px,124px\nwhen(STRAIGHT_AND_LEFT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"STRAIGHT_LEFT1\");\n  }else{\n    Motor1.spinFor(360,degrees);\n    Motor1.spinFor(-200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::844px,125px\nwhen(STRAIGHT_AND_LEFT){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(360,degrees);\n    Motor2.spinFor(200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A212_Path1_move.mkl",
      "input": "brain Brain;\nmotor Motor1 ;\nmotor Motor2 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"STRAIGHT\":{\"type\":\"event\"},\"DEBUG\":{\"type\":\"boolean\"},\"LEFT\":{\"type\":\"event\"},\"RIGHT\":{\"type\":\"event\"},\"FORWARD\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nevent STRAIGHT;\nboolean DEBUG= false;\nevent LEFT;\nevent RIGHT;\nevent FORWARD;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::54px,554px\nwhen(LEFT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"LEFT\");\n  }else{\n    Motor1.spinFor(-200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1141px,550px\nwhen(RIGHT){\n  if((DEBUG)){\n    Brain.LCD.print(\"RIGHT2\");\n  }else{\n    Motor2.spinFor(-200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::778px,563px\nwhen(RIGHT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"RIGHT\");\n  }else{\n    Motor1.spinFor(200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::421px,561px\nwhen(LEFT){\n  if((DEBUG)){\n    Brain.LCD.print(\"LEFT2\");\n  }else{\n    Motor2.spinFor(200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::206px,209px\nwhen(STARTED){\n  DEBUG=false;\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::620px,216px\nwhen(FORWARD){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"FORWARD\");\n  }else{\n    Motor1.spinFor(360,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1034px,226px\nwhen(FORWARD){\n  if((DEBUG)){\n    Brain.LCD.print(\"FORWARD\");\n  }else{\n    Motor2.spinFor(360,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A212_Path2_move.mkl",
      "input": "brain Brain;\nmotor Motor2 ;\nmotor Motor1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"STRAIGHT\":{\"type\":\"event\"},\"DEBUG\":{\"type\":\"boolean\"},\"LEFT\":{\"type\":\"event\"},\"RIGHT\":{\"type\":\"event\"},\"i\":{\"type\":\"number\"},\"FORWARD\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nevent STRAIGHT;\nboolean DEBUG= false;\nevent LEFT;\nevent RIGHT;\nnumber i = 0;\nevent FORWARD;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::56px,484px\nwhen(LEFT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"LEFT\");\n  }else{\n    Motor1.spinFor(-200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::420px,478px\nwhen(LEFT){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::777px,452px\nwhen(RIGHT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"RIGHT\");\n  }else{\n    Motor1.spinFor(200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1143px,478px\nwhen(RIGHT){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(-200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::962px,220px\nwhen(FORWARD){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(360,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::555px,199px\nwhen(FORWARD){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"STRAIGHT1\");\n  }else{\n    Motor1.spinFor(360,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::207px,109px\nwhen(STARTED){\n  DEBUG=false;\n  i=0;\n  while((i<3)){\n    broadcastAndWait(FORWARD);\n    broadcastAndWait(RIGHT);\n    broadcastAndWait(FORWARD);\n    broadcastAndWait(LEFT);\n    i=(i+1);\n  }\n  i=0;\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A212_Path3_move.mkl",
      "input": "brain Brain;\nmotor Motor1 ;\nmotor Motor2 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"STRAIGHT\":{\"type\":\"event\"},\"DEBUG\":{\"type\":\"boolean\"},\"LEFT\":{\"type\":\"event\"},\"RIGHT\":{\"type\":\"event\"},\"i\":{\"type\":\"number\"},\"FORWARD\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nevent STRAIGHT;\nboolean DEBUG= false;\nevent LEFT;\nevent RIGHT;\nnumber i = 0;\nevent FORWARD;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::54px,554px\nwhen(LEFT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"LEFT\");\n  }else{\n    Motor1.spinFor(-200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1141px,550px\nwhen(RIGHT){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(-200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::778px,563px\nwhen(RIGHT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"RIGHT\");\n  }else{\n    Motor1.spinFor(200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::421px,561px\nwhen(LEFT){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(200,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1142px,291px\nwhen(FORWARD){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(360,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::771px,273px\nwhen(FORWARD){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"STRAIGHT1\");\n  }else{\n    Motor1.spinFor(360,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::66px,123px\nwhen(STARTED){\n  Motor1.setVelocity(50,percent);\n  Motor2.setVelocity(50,percent);\n  DEBUG=false;\n  i=0;\n  repeat(3){\n    while((i<4)){\n      broadcastAndWait(FORWARD);\n      i=(i+1);\n    }\n    i=0;\n    broadcastAndWait(RIGHT);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_array6.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"firstArray\":{\"type\":\"number\",\"width\":\"6\"},\"indexNumber\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber[] firstArray = [0,0,0,0,0,0];\nnumber indexNumber = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::158px,128px\nwhen(STARTED){\n  indexNumber=0;\n  firstArray=[8,3,7,4,5,1];\n  Brain.LCD.print(\"Printing my array:\");\n  Brain.LCD.newLine();\n  while((indexNumber<6)){\n    Brain.LCD.print(firstArray[indexNumber]);\n    wait(1,seconds);\n    indexNumber=(indexNumber+1);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_countDown.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"count\":{\"type\":\"number\",\"width\":\"10\"},\"indexNumber\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber[] count = [0,0,0,0,0,0,0,0,0,0];\nnumber indexNumber = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::206px,173px\nwhen(STARTED){\n  indexNumber=0;\n  count=[9,8,7,6,5,4,3,2,1,0];\n  while((indexNumber<10)){\n    Brain.LCD.print(count[indexNumber]);\n    wait(1,seconds);\n    indexNumber=(indexNumber+1);\n  }\n  Brain.LCD.newLine();\n  Brain.LCD.print(\"Blast off!\");\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_countUp.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"count\":{\"type\":\"number\",\"width\":\"10\"},\"indexNumber\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber[] count = [0,0,0,0,0,0,0,0,0,0];\nnumber indexNumber = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::206px,173px\nwhen(STARTED){\n  indexNumber=9;\n  count=[9,8,7,6,5,4,3,2,1,0];\n  while((indexNumber>=0)){\n    Brain.LCD.print(count[indexNumber]);\n    wait(1,seconds);\n    indexNumber=(indexNumber-1);\n  }\n  Brain.LCD.newLine();\n  Brain.LCD.print(\"Blast off!\");\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_gridSequence.mkl",
      "input": "brain Brain;\nmotor Motor2 ;\nmotor Motor1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"array\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"i\":{\"type\":\"number\"},\"j\":{\"type\":\"number\"},\"GRID1\":{\"type\":\"event\"},\"GRID2\":{\"type\":\"event\"},\"GRID3\":{\"type\":\"event\"},\"GRID4\":{\"type\":\"event\"},\"GRID5\":{\"type\":\"event\"},\"GRID6\":{\"type\":\"event\"},\"GRID7\":{\"type\":\"event\"},\"GRID8\":{\"type\":\"event\"},\"GRID9\":{\"type\":\"event\"},\"FORWARD\":{\"type\":\"event\"},\"LEFT\":{\"type\":\"event\"},\"RIGHT\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber[][] array = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nnumber i = 0;\nnumber j = 0;\nevent GRID1;\nevent GRID2;\nevent GRID3;\nevent GRID4;\nevent GRID5;\nevent GRID6;\nevent GRID7;\nevent GRID8;\nevent GRID9;\nevent FORWARD;\nevent LEFT;\nevent RIGHT;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::23px,57px\nwhen(STARTED){\n  Brain.LCD.clearScreen();\n  Brain.LCD.setCursor(1,1);\n  Motor1.setVelocity(50,percent);\n  Motor2.setVelocity(50,percent);\n  /*this section of code prints the array*/\n  /*currently this is grid 6 */\n  array=[\n    [3,0,0,0,0],\n    [2,0,0,0,0],\n    [0,0,0,0,0],\n    [0,0,0,0,0],\n    [0,0,0,0,1]\n  ];\n  /*this part of the code prints the values stored in the array*/\n  i=0;\n  j=0;\n  while((i<5)){\n    while((j<5)){\n      Brain.LCD.print(array[i][j]);\n      j=j+1;\n    }\n    Brain.LCD.newLine();\n    j=0;\n    i=(i+1);\n  }\n  /*This code looks at specific parts of each of the 9 grids to determine what grid it is*/\n  /*Based on which grid is the match, it calls that specific grid path to move*/\n  if((array[0][0]==1)){\n    if((array[1][0]==0)){\n      broadcast(GRID1);\n      break;\n    }\n    if(array[4][3]==2){\n      broadcast(GRID5);\n      break;\n    }\n    if(array[2][4]==2){\n      broadcast(GRID4);\n      break;\n    }\n    if(array[0][2]==2){\n      broadcast(GRID3);\n      break;\n    }else{\n      broadcast(GRID2);\n      break;\n    }\n  }\n  if(array[0][0]==3){\n    if(array[1][2]==2){\n      broadcast(GRID9);\n      break;\n    }\n    if(array[3][4]==2){\n      broadcast(GRID7);\n      break;\n    }\n    if(array[2][3]==2){\n      broadcast(GRID8);\n      break;\n    }else{\n      broadcast(GRID6);\n      break;\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::423px,1708px\nwhen(RIGHT){\n  Motor1.spinFor(200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::775px,1716px\nwhen(RIGHT){\n  Motor2.spinFor(-200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::417px,1566px\nwhen(LEFT){\n  Motor1.spinFor(200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::772px,1580px\nwhen(LEFT){\n  Motor2.spinFor(-200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::415px,1447px\nwhen(FORWARD){\n  Motor1.spinFor(360,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::838px,484px\nwhen(GRID4){\n  Brain.LCD.print(\"GRID4\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1159px,480px\nwhen(GRID5){\n  Brain.LCD.print(\"GRID5\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::850px,938px\nwhen(GRID7){\n  Brain.LCD.print(\"GRID7\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1169px,933px\nwhen(GRID8){\n  Brain.LCD.print(\"GRID8\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1464px,502px\nwhen(GRID6){\n  Brain.LCD.print(\"GRID6\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1479px,928px\nwhen(GRID9){\n  Brain.LCD.print(\"GRID9\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1472px,35px\nwhen(GRID3){\n  Brain.LCD.print(\"GRID3\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1158px,41px\nwhen(GRID2){\n  Brain.LCD.print(\"GRID2\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::837px,26px\nwhen(GRID1){\n  Brain.LCD.print(\"GRID1\");\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(LEFT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(RIGHT);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n  broadcastAndWait(FORWARD);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::768px,1450px\nwhen(FORWARD){\n  Motor2.spinFor(360,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_mathArray.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"index\":{\"type\":\"number\"},\"firstArray\":{\"type\":\"number\",\"width\":\"6\"},\"indexElement\":{\"type\":\"number\"},\"mathArray\":{\"type\":\"number\",\"width\":\"3\"},\"sum\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\nnumber index = 0;\nnumber[] firstArray = [0,0,0,0,0,0];\nnumber indexElement = 0;\nnumber[] mathArray = [0,0,0];\nnumber sum = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::158px,128px\nwhen(STARTED){\n  mathArray=[5,1,3];\n  Brain.LCD.print(\"Printing my array:\");\n  Brain.LCD.newLine();\n  Brain.LCD.print(mathArray[0]+mathArray[1]+mathArray[2]);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::553px,381px\n\n\n\n\n\n\n\n\n\n\n//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_parkIt.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"parkingLot\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"openSpots\":{\"type\":\"number\"},\"i\":{\"type\":\"number\"},\"j\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\nnumber[][] parkingLot = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nnumber openSpots = 0;\nnumber i = 0;\nnumber j = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::212px,152px\nwhen(STARTED){\n  openSpots=0;\n  i=0;\n  j=0;\n  parkingLot=[\n    [0,0,0,0,0],\n    [0,2,1,1,2],\n    [0,1,1,2,1],\n    [0,0,0,0,0],\n    [0,1,2,2,1]\n  ];\n  while(i<5){\n    while(j<5){\n      if(parkingLot[i][j]==1){\n        openSpots=(openSpots+1);\n        j=j+1;\n      }else{\n        j=j+1;\n      }\n    }\n    i=i+1;\n    j=0;\n  }\n  Brain.LCD.print(\"Number of open\");\n  Brain.LCD.newLine();\n  Brain.LCD.print(\"parking spots: \");\n  Brain.LCD.print(openSpots);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_sadFace.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"smile\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"i\":{\"type\":\"number\"},\"j\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber[][] smile = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nnumber i = 0;\nnumber j = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::211px,146px\nwhen(STARTED){\n  smile=[\n    [0,1,0,1,0],\n    [2,0,0,0,2],\n    [0,0,0,0,0],\n    [0,1,1,1,0],\n    [1,0,0,0,1]\n  ];\n  i=0;\n  while((i<5)){\n    j=0;\n    while((j<5)){\n      if(smile[i][j]==2){\n        Brain.LCD.print(\"!\");\n      }\n      if(smile[i][j]==1){\n        Brain.LCD.print(\"*\");\n      }\n      if(smile[i][j]==0){\n        Brain.LCD.print(\" \");\n      }\n      j=(j+1);\n\n\n    }\n    Brain.LCD.newLine();\n    i=(i+1);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_smileyFace.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"smile\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"i\":{\"type\":\"number\"},\"j\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber[][] smile = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nnumber i = 0;\nnumber j = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::211px,146px\nwhen(STARTED){\n  smile=[\n    [0,1,0,1,0],\n    [0,0,0,0,0],\n    [0,0,0,0,0],\n    [1,0,0,0,1],\n    [0,1,1,1,0]\n  ];\n  i=0;\n  while((i<5)){\n    j=0;\n    while((j<5)){\n      if(smile[i][j]==1){\n        Brain.LCD.print(\"*\");\n      }else{\n        Brain.LCD.print(\" \");\n      }\n      j=(j+1);\n    }\n    Brain.LCD.newLine();\n    i=(i+1);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A213_spinningOut.mkl",
      "input": "brain Brain;\nmotor Motor2 ;\nmotor Motor1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"STRAIGHT\":{\"type\":\"event\"},\"DEBUG\":{\"type\":\"boolean\"},\"LEFT\":{\"type\":\"event\"},\"RIGHT\":{\"type\":\"event\"},\"stage\":{\"type\":\"number\"},\"step\":{\"type\":\"number\"},\"count\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nevent STRAIGHT;\nboolean DEBUG= false;\nevent LEFT;\nevent RIGHT;\nnumber stage = 0;\nnumber step = 0;\nnumber count = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::778px,563px\nwhen(RIGHT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"RIGHT\");\n  }else{\n    Motor1.spinFor(220,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::767px,22px\nwhen(LEFT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"LEFT2\");\n  }else{\n    Motor2.spinFor(220,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::304px,169px\nwhen(STARTED){\n  Motor1.setVelocity(50,percent);\n  Motor2.setVelocity(50,percent);\n  DEBUG=false;\n  while(stage<5){\n    while(count<2){\n      while(step<stage+1){\n        broadcastAndWait(STRAIGHT);\n        step=step+1;\n      }\n      broadcastAndWait(RIGHT);\n      step=0;\n      count=count+1;\n    }\n    count=0;\n    stage=stage+1;\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::774px,297px\nwhen(STRAIGHT){\n  if((DEBUG)){\n    Brain.LCD.newLine();\n    Brain.LCD.print(\"STRAIGHT1\");\n  }else{\n    Motor1.spinFor(370,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1132px,31px\nwhen(LEFT){\n  if((DEBUG)){\n  }else{\n    Motor1.spinFor(-220,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1139px,309px\nwhen(STRAIGHT){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(370,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1144px,576px\nwhen(RIGHT){\n  if((DEBUG)){\n  }else{\n    Motor2.spinFor(-220,degrees);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A222_oneColor.mkl",
      "input": "brain Brain;\nsignature SIG_1 ;\nsignature SIG_2 ;\nsignature SIG_3 ;\nsignature SIG_4 ;\nsignature SIG_5 ;\nsignature SIG_6 ;\nsignature SIG_7 ;\nvision Vision1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::158px,133px\nwhen(STARTED){\n  forever{\n    Brain.LCD.clearScreen();\n    Brain.LCD.setCursor(1,1);\n    Vision1.takeSnapshot(SIG_1);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see red!\");\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::82px,349px\n//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A222_sevenColors.mkl",
      "input": "brain Brain;\nsignature SIG_1 ;\nsignature SIG_2 ;\nsignature SIG_3 ;\nsignature SIG_4 ;\nsignature SIG_5 ;\nsignature SIG_6 ;\nsignature SIG_7 ;\nvision Vision1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::158px,133px\nwhen(STARTED){\n  forever{\n    Brain.LCD.clearScreen();\n    Brain.LCD.setCursor(1,1);\n    Vision1.takeSnapshot(SIG_1);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see red!\");\n    }\n    Vision1.takeSnapshot(SIG_2);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see blue!\");\n    }\n    Vision1.takeSnapshot(SIG_3);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see green!\");\n    }\n    Vision1.takeSnapshot(SIG_4);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see orange!\");\n    }\n    Vision1.takeSnapshot(SIG_5);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see pink!\");\n    }\n    Vision1.takeSnapshot(SIG_6);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see purple!\");\n    }\n    Vision1.takeSnapshot(SIG_7);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"I see yellow!\");\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::82px,349px\n//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A222_twoCodes.mkl",
      "input": "brain Brain;\nsignature SIG_1 ;\nsignature SIG_2 ;\nsignature SIG_3 ;\nsignature SIG_4 ;\nsignature SIG_5 ;\nsignature SIG_6 ;\nsignature SIG_7 ;\ncode REDBLUE ;\ncode REDPURPLE ;\nvision Vision1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::354px,232px\nwhen(STARTED){\n  forever{\n    Brain.LCD.clearScreen();\n    Brain.LCD.setCursor(0,0);\n    Vision1.takeSnapshot(REDBLUE);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"RED & BLUE\");\n    }\n    Vision1.takeSnapshot(REDPURPLE);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"RED & PURPLE\");\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A223_colorCombo.mkl",
      "input": "brain Brain;\nsignature SIG_1 ;\nsignature SIG_2 ;\nsignature SIG_3 ;\nsignature SIG_4 ;\nsignature SIG_5 ;\nsignature SIG_6 ;\nsignature SIG_7 ;\ncode GREENRED ;\ncode GREENBLUE ;\ncode GREENPINK ;\ncode REDBLUE ;\ncode REDPINK ;\ncode BLUEPINK ;\nvision Vision1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::354px,232px\nwhen(STARTED){\n  forever{\n    Brain.LCD.clearScreen();\n    Brain.LCD.setCursor(0,0);\n    Vision1.takeSnapshot(REDBLUE);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"That is the correct color code!\");\n      wait(1,seconds);\n    }\n    Vision1.takeSnapshot(GREENRED);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"One of those colors is not correct.\");\n      wait(1,seconds);\n    }\n    Vision1.takeSnapshot(REDPINK);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"One of those colors is not correct.\");\n      wait(1,seconds);\n    }\n    Vision1.takeSnapshot(GREENBLUE);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"One of those colors is not correct.\");\n      wait(1,seconds);\n    }\n    Vision1.takeSnapshot(BLUEPINK);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"One of those colors is not correct.\");\n      wait(1,seconds);\n    }\n    Vision1.takeSnapshot(GREENPINK);\n    if(Vision1.objects[0].exists){\n      Brain.LCD.print(\"Neither of those colors are in the code.\");\n      wait(1,seconds);\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A223_nearFar.mkl",
      "input": "brain Brain;\nsignature SIG_1 ;\nsignature SIG_2 ;\nsignature SIG_3 ;\nsignature SIG_4 ;\nsignature SIG_5 ;\nsignature SIG_6 ;\nsignature SIG_7 ;\nvision Vision1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::196px,184px\nwhen(STARTED){\n  forever{\n    Brain.LCD.clearScreen();\n    Brain.LCD.setCursor(1,1);\n    Vision1.takeSnapshot(SIG1);\n    if((Vision1.objects[0].width>0)){\n      Brain.LCD.print(Vision1.objects[0].width);\n    }\n    wait(1,seconds);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/A223_xAxisMove.mkl",
      "input": "brain Brain;\nsignature SIG_1 ;\nsignature SIG_2 ;\nsignature SIG_3 ;\nsignature SIG_4 ;\nsignature SIG_5 ;\nsignature SIG_6 ;\nsignature SIG_7 ;\nvision Vision1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::231px,162px\nwhen(STARTED){\n  forever{\n    Brain.LCD.clearScreen();\n    Brain.LCD.setCursor(1,1);\n    Vision1.takeSnapshot(SIG1);\n    if((Vision1.objects[0].centerX>0)){\n      Brain.LCD.print(Vision1.objects[0].centerX);\n    }\n    wait(1,seconds);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/P214_array.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"width\":{\"type\":\"number\"},\"height\":{\"type\":\"number\"},\"currentRow\":{\"type\":\"number\"},\"currentCol\":{\"type\":\"number\"},\"map\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"PRINTLCD\":{\"type\":\"event\"},\"INITALIZE\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber width = 0;\nnumber height = 0;\nnumber currentRow = 0;\nnumber currentCol = 0;\nnumber[][] map = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nevent PRINTLCD;\nevent INITALIZE;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::68px,66px\nwhen(STARTED){\n  broadcastAndWait(INITALIZE);\n  broadcastAndWait(PRINTLCD);\n\n\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::486px,75px\nwhen(PRINTLCD){\n  Brain.LCD.clearScreen();\n  Brain.LCD.setCursor(0,0);\n  while((currentRow<height)){\n    while((currentCol<width)){\n      if((map[currentRow][currentCol]==99)){\n        Brain.LCD.print(\"S\");\n      }\n      if((map[currentRow][currentCol]==2)){\n        Brain.LCD.print(\"G\");\n      }\n      if((map[currentRow][currentCol]==1)){\n        Brain.LCD.print(\"X\");\n      }\n      if((map[currentRow][currentCol]==0)){\n        Brain.LCD.print(\"0\");\n      }\n      if(((map[currentRow][currentCol]>2) and (map[currentRow][currentCol]<98))){\n        Brain.LCD.print(map[currentRow][currentCol]);\n      }\n      currentCol=currentCol+1;\n    }\n    Brain.LCD.newLine();\n    currentCol=0;\n    currentRow=currentRow+1;\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::65px,215px\nwhen(INITALIZE){\n  width=5;\n\n\n  height=5;\n\n\n  currentRow=0;\n\n\n  currentCol=0;\n\n\n  map=[\n    [0,0,0,0,0],\n    [0,1,99,1,0],\n    [1,1,1,1,0],\n    [0,0,0,0,0],\n    [0,0,2,0,0]\n  ];\n\n\n\n\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/P214_driveIt.mkl",
      "input": "brain Brain;\nmotor Motor1 ;\nmotor Motor2 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"width\":{\"type\":\"number\"},\"height\":{\"type\":\"number\"},\"currentRow\":{\"type\":\"number\"},\"currentCol\":{\"type\":\"number\"},\"map\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"PRINTLCD\":{\"type\":\"event\"},\"BUILDWF\":{\"type\":\"event\"},\"INITALIZE\":{\"type\":\"event\"},\"currentWave\":{\"type\":\"number\"},\"goalRow\":{\"type\":\"number\"},\"goalCol\":{\"type\":\"number\"},\"elementCount\":{\"type\":\"number\"},\"progressThroughGrid\":{\"type\":\"number\"},\"PATHFINDER\":{\"type\":\"event\"},\"sdvCol\":{\"type\":\"number\"},\"sdvRow\":{\"type\":\"number\"},\"COMPLETE\":{\"type\":\"event\"},\"atGoal\":{\"type\":\"boolean\"},\"north\":{\"type\":\"number\"},\"east\":{\"type\":\"number\"},\"south\":{\"type\":\"number\"},\"west\":{\"type\":\"number\"},\"directionToTravel\":{\"type\":\"number\"},\"FINDDIRECTION\":{\"type\":\"event\"},\"facing\":{\"type\":\"number\"},\"FORWARD\":{\"type\":\"event\"},\"LEFT\":{\"type\":\"event\"},\"RIGHT\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber width = 0;\nnumber height = 0;\nnumber currentRow = 0;\nnumber currentCol = 0;\nnumber[][] map = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nevent PRINTLCD;\nevent BUILDWF;\nevent INITALIZE;\nnumber currentWave = 0;\nnumber goalRow = 0;\nnumber goalCol = 0;\nnumber elementCount = 0;\nnumber progressThroughGrid = 0;\nevent PATHFINDER;\nnumber sdvCol = 0;\nnumber sdvRow = 0;\nevent COMPLETE;\nboolean atGoal= false;\nnumber north = 0;\nnumber east = 0;\nnumber south = 0;\nnumber west = 0;\nnumber directionToTravel = 0;\nevent FINDDIRECTION;\nnumber facing = 0;\nevent FORWARD;\nevent LEFT;\nevent RIGHT;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::8px,7px\nwhen(STARTED){\n  broadcastAndWait(INITALIZE);\n  broadcastAndWait(PRINTLCD);\n  wait(1,seconds);\n  broadcastAndWait(BUILDWF);\n  wait(1,seconds);\n  broadcastAndWait(PATHFINDER);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::-9px,491px\nwhen(PRINTLCD){\n  Brain.LCD.clearScreen();\n  Brain.LCD.setCursor(0,0);\n  currentRow=0;\n  while(currentRow<height){\n    currentCol=0;\n    while(currentCol<width){\n      if(map[currentRow][currentCol]==99){\n        Brain.LCD.print(\"S  \");\n        if((progressThroughGrid<1)){\n          sdvCol=currentCol;\n          sdvRow=currentRow;\n        }\n      }\n      if(map[currentRow][currentCol]==2){\n        Brain.LCD.print(\"G  \");\n        if((progressThroughGrid<1)){\n          goalCol=currentCol;\n          goalRow=currentRow;\n        }\n      }\n      if(map[currentRow][currentCol]==1){\n        Brain.LCD.print(\"X  \");\n      }\n      if(map[currentRow][currentCol]==0){\n        Brain.LCD.print(\"0  \");\n      }\n      if(map[currentRow][currentCol]==98){\n        Brain.LCD.print(\"*  \");\n      }\n      if(((map[currentRow][currentCol]>2) and (map[currentRow][currentCol]<98))){\n        Brain.LCD.print(map[currentRow][currentCol]);\n        Brain.LCD.print(\" \");\n        if(map[currentRow][currentCol]<10){\n          Brain.LCD.print(\" \");\n        }\n      }\n      currentCol=currentCol+1;\n    }\n    Brain.LCD.newLine();\n    currentRow=currentRow+1;\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1054px,18px\nwhen(BUILDWF){\n  while(progressThroughGrid<elementCount){\n    currentRow=0;\n    while(currentRow<height){\n      currentCol=0;\n      while(currentCol<width){\n        if(map[currentRow][currentCol]==currentWave){\n          if(currentRow>0){\n            if(map[currentRow-1][currentCol]==0){\n              map[currentRow-1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentRow<height-1){\n            if(map[currentRow+1][currentCol]==0){\n              map[currentRow+1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentCol>0){\n            if(map[currentRow][currentCol-1]==0){\n              map[currentRow][currentCol-1]=currentWave+1;\n            }\n          }\n          if(currentCol<width-1){\n            if(map[currentRow][currentCol+1]==0){\n              map[currentRow][currentCol+1]=currentWave+1;\n            }\n          }\n        }\n        currentCol=currentCol+1;\n      }\n      currentRow=currentRow+1;\n    }\n    currentWave=currentWave+1;\n    progressThroughGrid=progressThroughGrid+1;\n    wait(1,sec);\n    broadcastAndWait(PRINTLCD);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1647px,13px\nwhen(FINDDIRECTION){\n  if(sdvRow>0){\n    north=map[sdvRow-1][sdvCol];\n    if(north==1){\n      north=98;\n    }\n  }else{\n    north=98;\n  }\n  if(sdvRow<height-1){\n    south=map[sdvRow+1][sdvCol];\n    if(south==1){\n      south=98;\n    }\n  }else{\n    south=98;\n  }\n  if(sdvCol>0){\n    west=map[sdvRow][sdvCol-1];\n    if(west==1){\n      west=98;\n    }\n  }else{\n    west=98;\n  }\n  if(sdvCol<width-1){\n    east=map[sdvRow][sdvCol+1];\n    if(east==1){\n      east=98;\n    }\n  }else{\n    east=98;\n  }\n  if(north<=east){\n    if(north<=south){\n      if(north<=west){\n        directionToTravel=0;\n      }else{\n        directionToTravel=3;\n      }\n    }else{\n      if(south<=west){\n        directionToTravel=2;\n      }else{\n        directionToTravel=3;\n      }\n    }\n  }else{\n    if(east<=south){\n      if(east<=west){\n        directionToTravel=1;\n      }else{\n        directionToTravel=3;\n      }\n    }else{\n      if(south<=west){\n        directionToTravel=3;\n      }\n    }\n    broadcastAndWait(PRINTLCD);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::328px,22px\nwhen(COMPLETE){\n  if((sdvCol==goalCol)){\n    if((sdvRow==goalRow)){\n      atGoal=true;\n      wait(5,seconds);\n      Brain.LCD.print(\"Path complete!\");\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::676px,16px\nwhen(INITALIZE){\n  width=5;\n  height=5;\n  currentRow=0;\n  currentCol=0;\n  map=[\n    [0,0,0,0,0],\n    [0,1,99,1,0],\n    [1,1,1,1,0],\n    [0,0,0,0,0],\n    [0,0,2,0,0]\n  ];\n  currentWave=2;\n  elementCount=height*width;\n  goalRow=0;\n  goalCol=0;\n  sdvCol=0;\n  sdvRow=0;\n  atGoal=false;\n  north=98;\n  east=98;\n  south=98;\n  west=98;\n  directionToTravel=0;\n  facing=0;\n  Motor1.setVelocity(50,percent);\n  Motor2.setVelocity(50,percent);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1990px,11px\nwhen(PATHFINDER){\n  broadcastAndWait(COMPLETE);\n  while(not atGoal){\n    broadcastAndWait(PRINTLCD);\n    broadcastAndWait(FINDDIRECTION);\n    if(directionToTravel==0){\n      if(facing==0){\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==3){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==2){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==1){\n        broadcastAndWait(RIGHT);\n        broadcastAndWait(FORWARD);\n      }\n      map[sdvRow][sdvCol]=98;\n      sdvRow=sdvRow-1;\n      map[sdvRow][sdvCol]=99;\n      facing=0;\n    }\n    if(directionToTravel==1){\n      if(facing==1){\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==0){\n        broadcastAndWait(RIGHT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==3){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==2){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      map[sdvRow][sdvCol]=98;\n      sdvCol=sdvCol+1;\n      map[sdvRow][sdvCol]=99;\n      facing=1;\n    }\n    if(directionToTravel==2){\n      if(facing==2){\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==1){\n        broadcastAndWait(RIGHT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==0){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==3){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      map[sdvRow][sdvCol]=98;\n      sdvRow=sdvRow+1;\n      map[sdvRow][sdvCol]=99;\n      facing=2;\n    }\n    if(directionToTravel==3){\n      if(facing==3){\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==0){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==1){\n        broadcastAndWait(LEFT);\n        broadcastAndWait(LEFT);\n        broadcastAndWait(FORWARD);\n      }\n      if(facing==2){\n        broadcastAndWait(RIGHT);\n        broadcastAndWait(FORWARD);\n      }\n      map[sdvRow][sdvCol]=98;\n      sdvCol=sdvCol-1;\n      map[sdvRow][sdvCol]=99;\n      facing=3;\n    }\n    broadcastAndWait(COMPLETE);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::896px,1327px\nwhen(LEFT){\n  Motor1.spinFor(200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1233px,1334px\nwhen(LEFT){\n  Motor2.spinFor(-200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::895px,1455px\nwhen(RIGHT){\n  Motor1.spinFor(-200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1236px,1445px\nwhen(RIGHT){\n  Motor2.spinFor(200,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::889px,1211px\nwhen(FORWARD){\n  Motor1.spinFor(360,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1229px,1207px\nwhen(FORWARD){\n  Motor2.spinFor(360,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/P214_finding.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"width\":{\"type\":\"number\"},\"height\":{\"type\":\"number\"},\"currentRow\":{\"type\":\"number\"},\"currentCol\":{\"type\":\"number\"},\"map\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"PRINTLCD\":{\"type\":\"event\"},\"BUILDWF\":{\"type\":\"event\"},\"INITALIZE\":{\"type\":\"event\"},\"currentWave\":{\"type\":\"number\"},\"goalRow\":{\"type\":\"number\"},\"goalCol\":{\"type\":\"number\"},\"elementCount\":{\"type\":\"number\"},\"progressThroughGrid\":{\"type\":\"number\"},\"PATHFINDER\":{\"type\":\"event\"},\"sdvCol\":{\"type\":\"number\"},\"sdvRow\":{\"type\":\"number\"},\"COMPLETE\":{\"type\":\"event\"},\"atGoal\":{\"type\":\"boolean\"},\"north\":{\"type\":\"number\"},\"east\":{\"type\":\"number\"},\"south\":{\"type\":\"number\"},\"west\":{\"type\":\"number\"},\"directionToTravel\":{\"type\":\"number\"},\"FINDDIRECTION\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber width = 0;\nnumber height = 0;\nnumber currentRow = 0;\nnumber currentCol = 0;\nnumber[][] map = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nevent PRINTLCD;\nevent BUILDWF;\nevent INITALIZE;\nnumber currentWave = 0;\nnumber goalRow = 0;\nnumber goalCol = 0;\nnumber elementCount = 0;\nnumber progressThroughGrid = 0;\nevent PATHFINDER;\nnumber sdvCol = 0;\nnumber sdvRow = 0;\nevent COMPLETE;\nboolean atGoal= false;\nnumber north = 0;\nnumber east = 0;\nnumber south = 0;\nnumber west = 0;\nnumber directionToTravel = 0;\nevent FINDDIRECTION;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::8px,7px\nwhen(STARTED){\n  broadcastAndWait(INITALIZE);\n  broadcastAndWait(PRINTLCD);\n  wait(1,seconds);\n  broadcastAndWait(BUILDWF);\n  wait(1,seconds);\n  broadcastAndWait(PATHFINDER);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::-9px,491px\nwhen(PRINTLCD){\n  Brain.LCD.clearScreen();\n  Brain.LCD.setCursor(0,0);\n  currentRow=0;\n  while(currentRow<height){\n    currentCol=0;\n    while(currentCol<width){\n      if(map[currentRow][currentCol]==99){\n        Brain.LCD.print(\"S  \");\n        /* any new variable may be used in this conditional, but the goal is to set the starting location before changing the array*/\n        if((progressThroughGrid<1)){\n          sdvCol=currentCol;\n          sdvRow=currentRow;\n        }\n      }\n      if(map[currentRow][currentCol]==2){\n        Brain.LCD.print(\"G  \");\n        /* any new variable may be used in this conditional, but the goal is to set the goal before changing the array*/\n        if((progressThroughGrid<1)){\n          goalCol=currentCol;\n          goalRow=currentRow;\n        }\n      }\n      if(map[currentRow][currentCol]==1){\n        Brain.LCD.print(\"X  \");\n      }\n      if(map[currentRow][currentCol]==0){\n        Brain.LCD.print(\"0  \");\n      }\n      if(map[currentRow][currentCol]==98){\n        Brain.LCD.print(\"*  \");\n      }\n      if(((map[currentRow][currentCol]>2) and (map[currentRow][currentCol]<98))){\n        Brain.LCD.print(map[currentRow][currentCol]);\n        Brain.LCD.print(\" \");\n        if(map[currentRow][currentCol]<10){\n          Brain.LCD.print(\" \");\n        }\n      }\n      currentCol=currentCol+1;\n    }\n    Brain.LCD.newLine();\n    currentRow=currentRow+1;\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1054px,18px\nwhen(BUILDWF){\n  while(progressThroughGrid<elementCount){\n    currentRow=0;\n    while(currentRow<height){\n      currentCol=0;\n      while(currentCol<width){\n        if(map[currentRow][currentCol]==currentWave){\n          if(currentRow>0){\n            if(map[currentRow-1][currentCol]==0){\n              map[currentRow-1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentRow<height-1){\n            if(map[currentRow+1][currentCol]==0){\n              map[currentRow+1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentCol>0){\n            if(map[currentRow][currentCol-1]==0){\n              map[currentRow][currentCol-1]=currentWave+1;\n            }\n          }\n          if(currentCol<width-1){\n            if(map[currentRow][currentCol+1]==0){\n              map[currentRow][currentCol+1]=currentWave+1;\n            }\n          }\n        }\n        currentCol=currentCol+1;\n      }\n      currentRow=currentRow+1;\n    }\n    currentWave=currentWave+1;\n    progressThroughGrid=progressThroughGrid+1;\n    wait(1,sec);\n    broadcastAndWait(PRINTLCD);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1647px,13px\nwhen(FINDDIRECTION){\n  if(sdvRow>0){\n    north=map[sdvRow-1][sdvCol];\n    if(north==1){\n      north=98;\n    }\n  }else{\n    north=98;\n  }\n  if(sdvRow<height-1){\n    south=map[sdvRow+1][sdvCol];\n    if(south==1){\n      south=98;\n    }\n  }else{\n    south=98;\n  }\n  if(sdvCol>0){\n    west=map[sdvRow][sdvCol-1];\n    if(west==1){\n      west=98;\n    }\n  }else{\n    west=98;\n  }\n  if(sdvCol<width-1){\n    east=map[sdvRow][sdvCol+1];\n    if(east==1){\n      east=98;\n    }\n  }else{\n    east=98;\n  }\n  if(north<=east){\n    if(north<=south){\n      if(north<=west){\n        directionToTravel=0;\n      }else{\n        directionToTravel=3;\n      }\n    }else{\n      if(south<=west){\n        directionToTravel=2;\n      }else{\n        directionToTravel=3;\n      }\n    }\n  }else{\n    if(east<=south){\n      if(east<=west){\n        directionToTravel=1;\n      }else{\n        directionToTravel=3;\n      }\n    }else{\n      if(south<=west){\n        directionToTravel=3;\n      }\n    }\n    broadcastAndWait(PRINTLCD);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::328px,22px\nwhen(COMPLETE){\n  if((sdvCol==goalCol)){\n    if((sdvRow==goalRow)){\n      atGoal=true;\n      wait(5,seconds);\n      Brain.LCD.print(\"Path complete!\");\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::676px,16px\nwhen(INITALIZE){\n  width=5;\n  height=5;\n  currentRow=0;\n  currentCol=0;\n  map=[\n    [0,0,0,0,0],\n    [0,1,99,1,0],\n    [1,1,1,1,0],\n    [0,0,0,0,0],\n    [0,0,2,0,0]\n  ];\n  currentWave=2;\n  elementCount=height*width;\n  goalRow=0;\n  goalCol=0;\n  sdvCol=0;\n  sdvRow=0;\n  atGoal=false;\n  north=98;\n  east=98;\n  south=98;\n  west=98;\n  directionToTravel=0;\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1990px,11px\nwhen(PATHFINDER){\n  broadcastAndWait(COMPLETE);\n  while(not atGoal){\n    broadcastAndWait(PRINTLCD);\n    broadcastAndWait(FINDDIRECTION);\n    if(directionToTravel==0){\n      map[sdvRow][sdvCol]=98;\n      sdvRow=sdvRow-1;\n      map[sdvRow][sdvCol]=99;\n    }\n    if(directionToTravel==1){\n      map[sdvRow][sdvCol]=98;\n      sdvCol=sdvCol+1;\n      map[sdvRow][sdvCol]=99;\n    }\n    if(directionToTravel==2){\n      map[sdvRow][sdvCol]=98;\n      sdvRow=sdvRow+1;\n      map[sdvRow][sdvCol]=99;\n    }\n    if(directionToTravel==3){\n      map[sdvRow][sdvCol]=98;\n      sdvCol=sdvCol-1;\n      map[sdvRow][sdvCol]=99;\n    }\n    broadcastAndWait(COMPLETE);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/P214_planning.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"width\":{\"type\":\"number\"},\"height\":{\"type\":\"number\"},\"currentRow\":{\"type\":\"number\"},\"currentCol\":{\"type\":\"number\"},\"map\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"PRINTLCD\":{\"type\":\"event\"},\"BUILDWF\":{\"type\":\"event\"},\"INITALIZE\":{\"type\":\"event\"},\"currentWave\":{\"type\":\"number\"},\"goalRow\":{\"type\":\"number\"},\"goalCol\":{\"type\":\"number\"},\"elementCount\":{\"type\":\"number\"},\"progressThroughGrid\":{\"type\":\"number\"},\"PATHFINDER\":{\"type\":\"event\"},\"sdvCol\":{\"type\":\"number\"},\"sdvRow\":{\"type\":\"number\"},\"COMPLETE\":{\"type\":\"event\"},\"atGoal\":{\"type\":\"boolean\"},\"north\":{\"type\":\"number\"},\"east\":{\"type\":\"number\"},\"south\":{\"type\":\"number\"},\"west\":{\"type\":\"number\"},\"directionToTravel\":{\"type\":\"number\"},\"FINDDIRECTION\":{\"type\":\"event\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber width = 0;\nnumber height = 0;\nnumber currentRow = 0;\nnumber currentCol = 0;\nnumber[][] map = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nevent PRINTLCD;\nevent BUILDWF;\nevent INITALIZE;\nnumber currentWave = 0;\nnumber goalRow = 0;\nnumber goalCol = 0;\nnumber elementCount = 0;\nnumber progressThroughGrid = 0;\nevent PATHFINDER;\nnumber sdvCol = 0;\nnumber sdvRow = 0;\nevent COMPLETE;\nboolean atGoal= false;\nnumber north = 0;\nnumber east = 0;\nnumber south = 0;\nnumber west = 0;\nnumber directionToTravel = 0;\nevent FINDDIRECTION;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::8px,7px\nwhen(STARTED){\n  broadcastAndWait(INITALIZE);\n  broadcastAndWait(PRINTLCD);\n  wait(1,seconds);\n  broadcastAndWait(BUILDWF);\n  wait(1,seconds);\n  broadcastAndWait(PATHFINDER);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::-9px,491px\nwhen(PRINTLCD){\n  Brain.LCD.clearScreen();\n  Brain.LCD.setCursor(0,0);\n  currentRow=0;\n  while(currentRow<height){\n    currentCol=0;\n    while(currentCol<width){\n      if(map[currentRow][currentCol]==99){\n        Brain.LCD.print(\"S  \");\n        /* any new variable may be used in this conditional, but the goal is to set the starting location before changing the array*/\n        if((progressThroughGrid<1)){\n          sdvCol=currentCol;\n          sdvRow=currentRow;\n        }\n      }\n      if(map[currentRow][currentCol]==2){\n        Brain.LCD.print(\"G  \");\n        /* any new variable may be used in this conditional, but the goal is to set the goal before changing the array*/\n        if((progressThroughGrid<1)){\n          goalCol=currentCol;\n          goalRow=currentRow;\n        }\n      }\n      if(map[currentRow][currentCol]==1){\n        Brain.LCD.print(\"X  \");\n      }\n      if(map[currentRow][currentCol]==0){\n        Brain.LCD.print(\"0  \");\n      }\n      if(map[currentRow][currentCol]==98){\n        Brain.LCD.print(\"*  \");\n      }\n      if(((map[currentRow][currentCol]>2) and (map[currentRow][currentCol]<98))){\n        Brain.LCD.print(map[currentRow][currentCol]);\n        Brain.LCD.print(\" \");\n        if(map[currentRow][currentCol]<10){\n          Brain.LCD.print(\" \");\n        }\n      }\n      currentCol=currentCol+1;\n    }\n    Brain.LCD.newLine();\n    currentRow=currentRow+1;\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1054px,18px\nwhen(BUILDWF){\n  while(progressThroughGrid<elementCount){\n    currentRow=0;\n    while(currentRow<height){\n      currentCol=0;\n      while(currentCol<width){\n        if(map[currentRow][currentCol]==currentWave){\n          if(currentRow>0){\n            if(map[currentRow-1][currentCol]==0){\n              map[currentRow-1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentRow<height-1){\n            if(map[currentRow+1][currentCol]==0){\n              map[currentRow+1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentCol>0){\n            if(map[currentRow][currentCol-1]==0){\n              map[currentRow][currentCol-1]=currentWave+1;\n            }\n          }\n          if(currentCol<width-1){\n            if(map[currentRow][currentCol+1]==0){\n              map[currentRow][currentCol+1]=currentWave+1;\n            }\n          }\n        }\n        currentCol=currentCol+1;\n      }\n      currentRow=currentRow+1;\n    }\n    currentWave=currentWave+1;\n    progressThroughGrid=progressThroughGrid+1;\n    wait(1,sec);\n    broadcastAndWait(PRINTLCD);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1647px,13px\nwhen(FINDDIRECTION){\n  if(sdvRow>0){\n    north=map[sdvRow-1][sdvCol];\n    if(north==1){\n      north=98;\n    }\n  }else{\n    north=98;\n  }\n  if(sdvRow<height-1){\n    south=map[sdvRow+1][sdvCol];\n    if(south==1){\n      south=98;\n    }\n  }else{\n    south=98;\n  }\n  if(sdvCol>0){\n    west=map[sdvRow][sdvCol-1];\n    if(west==1){\n      west=98;\n    }\n  }else{\n    west=98;\n  }\n  if(sdvCol<width-1){\n    east=map[sdvRow][sdvCol+1];\n    if(east==1){\n      east=98;\n    }\n  }else{\n    east=98;\n  }\n  if(north<=east){\n    if(north<=south){\n      if(north<=west){\n        directionToTravel=0;\n      }else{\n        directionToTravel=3;\n      }\n    }else{\n      if(south<=west){\n        directionToTravel=2;\n      }else{\n        directionToTravel=3;\n      }\n    }\n  }else{\n    if(east<=south){\n      if(east<=west){\n        directionToTravel=1;\n      }else{\n        directionToTravel=3;\n      }\n    }else{\n      if(south<=west){\n        directionToTravel=3;\n      }\n    }\n    broadcastAndWait(PRINTLCD);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::328px,22px\nwhen(COMPLETE){\n  if((sdvCol==goalCol)){\n    if((sdvRow==goalRow)){\n      atGoal=true;\n      wait(5,seconds);\n      Brain.LCD.print(\"Path complete!\");\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::676px,16px\nwhen(INITALIZE){\n  width=5;\n  height=5;\n  currentRow=0;\n  currentCol=0;\n  map=[\n    [0,0,0,0,0],\n    [0,1,99,1,0],\n    [1,1,1,1,0],\n    [0,0,0,0,0],\n    [0,0,2,0,0]\n  ];\n  currentWave=2;\n  elementCount=height*width;\n  goalRow=0;\n  goalCol=0;\n  sdvCol=0;\n  sdvRow=0;\n  atGoal=false;\n  north=98;\n  east=98;\n  south=98;\n  west=98;\n  directionToTravel=0;\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::1990px,11px\nwhen(PATHFINDER){\n  broadcastAndWait(COMPLETE);\n  while(not atGoal){\n    broadcastAndWait(PRINTLCD);\n    broadcastAndWait(FINDDIRECTION);\n    if(directionToTravel==0){\n      map[sdvRow][sdvCol]=98;\n      sdvRow=sdvRow-1;\n      map[sdvRow][sdvCol]=99;\n    }\n    if(directionToTravel==1){\n      map[sdvRow][sdvCol]=98;\n      sdvCol=sdvCol+1;\n      map[sdvRow][sdvCol]=99;\n    }\n    if(directionToTravel==2){\n      map[sdvRow][sdvCol]=98;\n      sdvRow=sdvRow+1;\n      map[sdvRow][sdvCol]=99;\n    }\n    if(directionToTravel==3){\n      map[sdvRow][sdvCol]=98;\n      sdvCol=sdvCol-1;\n      map[sdvRow][sdvCol]=99;\n    }\n    broadcastAndWait(COMPLETE);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/pltw/P214_wavefront.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"width\":{\"type\":\"number\"},\"height\":{\"type\":\"number\"},\"currentRow\":{\"type\":\"number\"},\"currentCol\":{\"type\":\"number\"},\"map\":{\"type\":\"number\",\"width\":\"5\",\"height\":\"5\"},\"PRINTLCD\":{\"type\":\"event\"},\"BUILDWF\":{\"type\":\"event\"},\"INITALIZE\":{\"type\":\"event\"},\"currentWave\":{\"type\":\"number\"},\"elementCount\":{\"type\":\"number\"},\"progressThroughGrid\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber width = 0;\nnumber height = 0;\nnumber currentRow = 0;\nnumber currentCol = 0;\nnumber[][] map = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];\nevent PRINTLCD;\nevent BUILDWF;\nevent INITALIZE;\nnumber currentWave = 0;\nnumber elementCount = 0;\nnumber progressThroughGrid = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::8px,7px\nwhen(STARTED){\n  broadcastAndWait(INITALIZE);\n  broadcastAndWait(PRINTLCD);\n  wait(1,seconds);\n  broadcastAndWait(BUILDWF);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::-9px,491px\nwhen(PRINTLCD){\n  Brain.LCD.clearScreen();\n  Brain.LCD.setCursor(0,0);\n  currentRow=0;\n  while(currentRow<height){\n    currentCol=0;\n    while(currentCol<width){\n      if(map[currentRow][currentCol]==99){\n        /*Each symbol has 2 spaces after it to even out spacing*/\n        Brain.LCD.print(\"S  \");\n      }\n      if(map[currentRow][currentCol]==2){\n        Brain.LCD.print(\"G  \");\n      }\n      if(map[currentRow][currentCol]==1){\n        Brain.LCD.print(\"X  \");\n      }\n      if(map[currentRow][currentCol]==0){\n        Brain.LCD.print(\"0  \");\n      }\n      if(((map[currentRow][currentCol]>2) and (map[currentRow][currentCol]<98))){\n        Brain.LCD.print(map[currentRow][currentCol]);\n        Brain.LCD.print(\" \");\n        if(map[currentRow][currentCol]<10){\n          /*Anything less then 10 will need an extra space at the end to print the same as a double digit number*/\n          Brain.LCD.print(\" \");\n        }\n      }\n      currentCol=currentCol+1;\n    }\n    Brain.LCD.newLine();\n    currentRow=currentRow+1;\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::335px,29px\nwhen(INITALIZE){\n  width=5;\n  height=5;\n  currentRow=0;\n  currentCol=0;\n  map=[\n    [0,0,0,0,0],\n    [0,1,99,1,0],\n    [1,1,1,1,0],\n    [0,0,0,0,0],\n    [0,0,2,0,0]\n  ];\n  currentWave=2;\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::897px,15px\nwhen(BUILDWF){\n  elementCount=height*width;\n  while(progressThroughGrid<elementCount){\n    currentRow=0;\n    while(currentRow<height){\n      currentCol=0;\n      while(currentCol<width){\n        if(map[currentRow][currentCol]==currentWave){\n          if(currentRow>0){\n            if(map[currentRow-1][currentCol]==0){\n              map[currentRow-1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentRow<height-1){\n            if(map[currentRow+1][currentCol]==0){\n              map[currentRow+1][currentCol]=currentWave+1;\n            }\n          }\n          if(currentCol>0){\n            if(map[currentRow][currentCol-1]==0){\n              map[currentRow][currentCol-1]=currentWave+1;\n            }\n          }\n          if(currentCol<width-1){\n            if(map[currentRow][currentCol+1]==0){\n              map[currentRow][currentCol+1]=currentWave+1;\n            }\n          }\n        }\n        currentCol=currentCol+1;\n      }\n      currentRow=currentRow+1;\n    }\n    currentWave=currentWave+1;\n    progressThroughGrid=progressThroughGrid+1;\n    wait(1,sec);\n    broadcastAndWait(PRINTLCD);\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/validCodeA.mkl",
      "input": "when(S){\n   test = not not true;\n}",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/validCodeB.mkl",
      "input": "when(S){\n   if(not not true){\n   }\n}",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Controller/Modkit/Arcade Control.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor ClawMotor ;\nmotor ArmMotor ;\nmotor RightMotor ;\ncontroller Controller1;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::23px,87px\nwhen(STARTED){\n  while(true){\n    ArmMotor.setVelocity(50,percent);\n    ClawMotor.setVelocity(50,percent);\n    LeftMotor.setVelocity(((Controller1.Axis3.position(percent)+Controller1.Axis4.position(percent))/2),percent);\n    RightMotor.setVelocity(((Controller1.Axis3.position(percent)-Controller1.Axis4.position(percent))/2),percent);\n    LeftMotor.spin(forward);\n    RightMotor.spin(forward);\n    if(Controller1.ButtonUp.pressing()){\n      ArmMotor.spin(forward);\n    }else{\n      if(Controller1.ButtonDown.pressing()){\n        ArmMotor.spin(reverse);\n      }else{\n        ArmMotor.stop();\n      }\n    }\n    if(Controller1.ButtonA.pressing()){\n      ClawMotor.spin(forward);\n    }else{\n      if(Controller1.ButtonY.pressing()){\n        ClawMotor.spin(reverse);\n      }else{\n        ClawMotor.stop();\n      }\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Controller/Modkit/Tank Control.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor ClawMotor ;\nmotor ArmMotor ;\nmotor RightMotor ;\ncontroller Controller1;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::23px,87px\nwhen(STARTED){\n  while(true){\n    ArmMotor.setVelocity(50,percent);\n    ClawMotor.setVelocity(50,percent);\n    LeftMotor.setVelocity(Controller1.Axis3.position(percent),percent);\n    RightMotor.setVelocity(Controller1.Axis2.position(percent),percent);\n    LeftMotor.spin(forward);\n    RightMotor.spin(forward);\n    if(Controller1.ButtonUp.pressing()){\n      ArmMotor.spin(forward);\n    }else{\n      if(Controller1.ButtonDown.pressing()){\n        ArmMotor.spin(reverse);\n      }else{\n        ArmMotor.stop();\n      }\n    }\n    if(Controller1.ButtonA.pressing()){\n      ClawMotor.spin(forward);\n    }else{\n      if(Controller1.ButtonY.pressing()){\n        ClawMotor.spin(reverse);\n      }else{\n        ClawMotor.stop();\n      }\n    }\n  }\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Advanced Drive/Drive for Distance.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor RightMotor ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"wheelDiameterCM\":{\"type\":\"number\"},\"travelTargetCM\":{\"type\":\"number\"},\"circumference\":{\"type\":\"number\"},\"degreesToRotate\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber wheelDiameterCM = 0;\nnumber travelTargetCM = 0;\nnumber circumference = 0;\nnumber degreesToRotate = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::30px,90px\nwhen(STARTED){\n  wheelDiameterCM=6.37;\n  travelTargetCM=20;\n  circumference=(wheelDiameterCM*3.14);\n  degreesToRotate=((360*travelTargetCM)/circumference);\n  wait(2,seconds);\n  LeftMotor.setVelocity(50,percent);\n  RightMotor.setVelocity(50,percent);\n  LeftMotor.startRotateFor(degreesToRotate,degrees);\n  RightMotor.rotateFor(degreesToRotate,degrees);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Advanced Drive/Drive for Revolutions.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor RightMotor ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::-3px,68px\nwhen(STARTED){\n  wait(2,seconds);\n  LeftMotor.setVelocity(50,percent);\n  RightMotor.setVelocity(50,percent);\n  LeftMotor.startRotateTo(1,revolutions);\n  RightMotor.rotateFor(1,revolutions);\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic Drive/Drive Backward.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor RightMotor ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::28px,82px\nwhen(STARTED){\n  wait(2,seconds);\n  LeftMotor.setVelocity(50,percent);\n  RightMotor.setVelocity(50,percent);\n  LeftMotor.spin(reverse);\n  RightMotor.spin(reverse);\n  wait(3,seconds);\n  LeftMotor.stop();\n  RightMotor.stop();\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic Drive/Drive Forward.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor RightMotor ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::4px,64px\nwhen(STARTED){\n  wait(2,seconds);\n  LeftMotor.setVelocity(50,percent);\n  RightMotor.setVelocity(50,percent);\n  LeftMotor.spin(forward);\n  RightMotor.spin(forward);\n  wait(3,seconds);\n  LeftMotor.stop();\n  RightMotor.stop();\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic Drive/Point Turns.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor RightMotor ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::-3px,68px\nwhen(STARTED){\n  wait(2,seconds);\n  LeftMotor.setVelocity(50,percent);\n  RightMotor.setVelocity(50,percent);\n  LeftMotor.spin(forward);\n  RightMotor.spin(reverse);\n  wait(.750,seconds);\n  LeftMotor.stop();\n  RightMotor.stop();\n  wait(1,seconds);\n  LeftMotor.spin(reverse);\n  RightMotor.spin(forward);\n  wait(.750,seconds);\n  LeftMotor.stop();\n  RightMotor.stop();\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic Drive/Swing Turns.mkl",
      "input": "brain Brain;\nmotor LeftMotor ;\nmotor RightMotor ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::-3px,68px\nwhen(STARTED){\n  wait(2,seconds);\n  LeftMotor.setVelocity(50,percent);\n  RightMotor.setVelocity(50,percent);\n  LeftMotor.spin(forward);\n  wait(.750,seconds);\n  LeftMotor.stop();\n  wait(1,seconds);\n  RightMotor.spin(forward);\n  wait(.750,seconds);\n  RightMotor.stop();\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Screen/Modkit/Screen Press.mkl",
      "input": "brain Brain;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\n/* Global Variables */\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::25px,74px\nwhen(STARTED){\n  while(true){\n    if(Brain.Screen.pressing()){\n    Brain.Screen.clearScreen();\n    Brain.Screen.drawCircle(Brain.Screen.xPosition(),Brain.Screen.yPosition(),50);\n\n\n}\n\n\n}\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    },
    {
      "name": "samples/mkl-files/vex-projects/valid/vex/Sensors/Modkit/Limit/Limit Switch Counter.mkl",
      "input": "brain Brain;\nlimit Limit1 ;\n\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES-BEGIN::{\"pressedCounter\":{\"type\":\"number\"}}\n//VCS::AUTO-GENERATED::GLOBAL-VARIABLES\nnumber pressedCounter = 0;\n\n\n//VCS::AUTO-GENERATED::USER-CODE-BEGIN::11px,65px\nwhen(STARTED){\n\n\n\n\n  pressedCounter=0;\n\n\n  Brain.Screen.print(pressedCounter);\n  while(true){\n    if(Limit1.pressing()){\n      pressedCounter=(pressedCounter+1);\n      waitUntil((not Limit1.pressing()));\n}\n    Brain.Screen.clearLine();\n    Brain.Screen.print(pressedCounter);\n}\n}//VCS::AUTO-GENERATED::USER-CODE-END\n\n",
      "isValid": true,
      "language": "modkit",
      "startRule": "code"
    }
  ]
} 


let errfiles = [
];

  
let testfiles = [
  'samples/mkl-files/vex-projects/valid/pltw/A212_InfiniteBox.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A212_Path1_move.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A212_Path2_move.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A212_Path3_move.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_array6.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_countDown.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_countUp.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_gridSequence.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_mathArray.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_parkIt.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_sadFace.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_smileyFace.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A213_spinningOut.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A222_oneColor.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A222_sevenColors.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A222_twoCodes.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A223_colorCombo.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A223_nearFar.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/A223_xAxisMove.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/P214_array.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/P214_driveIt.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/P214_finding.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/P214_planning.mkl',
  'samples/mkl-files/vex-projects/valid/pltw/P214_wavefront.mkl',
  'samples/mkl-files/vex-projects/valid/validCodeA.mkl',
  'samples/mkl-files/vex-projects/valid/validCodeB.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Controller/Modkit/Arcade\ Control.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Controller/Modkit/Tank\ Control.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Advanced\ Drive/Drive\ for\ Distance.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Advanced\ Drive/Drive\ for\ Revolutions.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Drive\ Backward.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Drive\ Forward.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Point\ Turns.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Swing\ Turns.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Screen/Modkit/Screen\ Press.mkl',
  'samples/mkl-files/vex-projects/valid/vex/Sensors/Modkit/Limit/Limit\ Switch\ Counter.mkl',

];

/**
 *
 */
function build_dom_from_xml(xml) {
  let dom = null;
  if (USE_JSDOM)
    dom = new JSDOM(xml);
  else {
    // Clear DOM to start
    //window.document.removeChild(document.documentElement)
    let root = window.document.getElementById('root');
    if (root)
      window.document.removeChild(root.documentElement);
    dom = window.document.createElement('div');  // fake root tag
    dom.setAttribute("id", "root");
    dom.innerHTML = xml;
  }
  return dom;
}

/**/
function getCode(dom) {
  let code;

  if (USE_JSDOM) {
    if (dom) {
      code = dom.window.document.querySelector('code')
      code = code.textContent.replace(/\"(\'[^']*\')\"/g, "\$1");
/*      code = code.replace(/\/<\//g, '/&lt;/')
	.replace(/\/>\//g, '/&gt;/')
	.replace(/\/&\//g, '/&amp;/')
	.replace(/\/"\//g, '/&quot;/');
*/
      return code;
    }
    else
      return `<code>-----${this.path} Used JSON----</code>`
  }
  else {
    code = dom.querySelector('code')
    // code.innerHTML has all tags
    return code.innerHTML.replace(/<[^>]*>/g, "");
/*      .replace('&lt;', '<')
      .replace('&gt;', '>')
      .replace('&amp;', '&')
      .replace('&quot;', '"');
*/
    //.replace('"\'','\'').replace('\'"','\'');
  }
}  
/**/
function getElem(dom, elemname) {
  let code;
  if (USE_JSDOM) {
    code = dom.window.document.querySelector(elemname);
    return code.textContent;
  }
  else {
    // Will not support browser dom
  }
}  
function writeXml(filepath, xml) {
  fs.writeFileSync(filepath, xml);
}

/*
 */
function run_diff(filelist, debug) {
  
  var dbg = false;
  let text, opt = {}
  if (typeof debug !== 'undefined')
    dbg = debug;
  opt = {
    language: 'modkit',  // for now “C” or “C++”,
    tags: MarkupTags,
    source: '',
    prefix: '',
    startrule: 'code',  //'snippet-atomic', 
    errorhandling: suggest ? 'suggest' : 'isolate', 
  }
  let k=0;
  let get_diff = (filepath) => {

    //let orgtext = fs.readFileSync(filepath, 'utf8');
    let orgtext;
    if (testData.tests[k].name === filepath) {
      orgtext = testData.tests[k++].input;
    }
    else {
      console.error(`Error: the pathnames dont match ${filepath} and ${testData.tests[k].name}`);
      return;
    }
    let cmg = new CMarkupGenerator(opt, false, false);
    let t0=0, t1=0, t2=0;
    t0 = now();
    console.log(`==============WORKING ON ${filepath}===============`);
    console.log('ORGINAL:'+orgtext);

    let [err, alt] = cmg.__init__(orgtext, opt.startrule);
    if (err)
      throw err
    t1 = now()
    console.log(`__init__=${t1-t0}`);
    
    let result;
    t0 = now()
    result = cmg.query(null, '*');
    //console.log(`*** Result from QUERY=\n${result}`)
    
    t1 = now()
    console.log(`Time for the first query=${t1-t0}`);
    console.log(result);
    if (WRITEXMLFILE)
      writeXml(filepath+`.isol.${mydate}xml`, result);

    let dodiff = (result, expect) => {
      // Escape the chars interfere xml.
      //let xmlDoc = libxmljs.parseXmlString(xml);
      let diff = jsdiff.diffChars(result, expect);
      let nongrey = 0;
      diff.forEach(function(part) {
        // green for additions, red for deletions
        // grey for common parts
        let color = part.added ? 'green' : part.removed ? 'red' : 'grey';
        if (color !== 'grey') {
	  console.log(`\n=====Diff Part=====`);	  
	  console.log(part);	  
          nongrey++
	}
        process.stderr.write(part.value[color]);
      });
      console.log(`nongrey=${nongrey}`);
      if (0 < nongrey)  // 2 for green <code> and </code> addition
        throw `There are differences in ${nongrey} for ${filepath}`;
    };
    if (!WRITEXMLFILE) {
      let show_diff = (result) => {
	let dom = build_dom_from_xml(result);
	let text = getCode(dom);
	console.log(`########\n${text}\n########`);
	let expected = orgtext;//fs.readFileSync(filepath, 'utf8');
	dodiff(text, expected);
      };
      show_diff(result);
      
    }
  }; // get_diff
  ramda_forEach(get_diff, filelist);

}




var myArgs = process.argv.slice(0, process.argv.length)
console.log(myArgs);
var debug = false
var trace = false
var xml = false
var query = 'code,statement'
var lang_ext = '.mkl'
var querystar = true;
var suggest = false;
var startrule = 'code';

if (3 < myArgs.length) {
  for (let i=2; i<myArgs.length; i++) {
    if (myArgs[i] === '--debug')
      debug = true
    if (myArgs[i] === '--diff')
      diff = true
    if (myArgs[i] === '--trace')
      trace = true
    if (myArgs[i] === '--symmap')
      symmap = true
    if (myArgs[i] === '--markup')
      markup = true
    if (myArgs[i] === '--star')
      querystar = true
    if (myArgs[i] === '--suggest')
      suggest = true
    if (myArgs[i] === '--stmt')
      startrule = 'statement';
   
  }
}

//run_diff(errfiles, true);
run_diff(testfiles, true);



