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


//Error.stackTraceLimit = 5;

let errfiles = [
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.864.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.865.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.866.1.mkl',
];

  
let testfiles = [
  
  '../tests/test-121018/mkl-files/vex-projects/valid/validCodeA.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/validCodeB.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Sensors/Modkit/Limit/Limit\ Switch\ Counter.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Screen/Modkit/Screen\ Press.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Drive\ Backward.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Drive\ Forward.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Point\ Turns.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Motion/Modkit/Basic\ Drive/Swing\ Turns.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Motion/Modkit/Advanced\ Drive/Drive\ for\ Distance.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Motion/Modkit/Advanced\ Drive/Drive\ for\ Revolutions.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Controller/Modkit/Arcade\ Control.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/vex/Controller/Modkit/Tank\ Control.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A212_InfiniteBox.mkl',

  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A212_Path1_move.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A212_Path2_move.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A212_Path3_move.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_array6.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_countDown.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_countUp.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_gridSequence.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_mathArray.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_parkIt.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_sadFace.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_smileyFace.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A213_spinningOut.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A222_oneColor.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A222_sevenColors.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A222_twoCodes.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A223_colorCombo.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A223_nearFar.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/A223_xAxisMove.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/P214_array.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/P214_driveIt.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/P214_finding.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/P214_planning.mkl',
  '../tests/test-121018/mkl-files/vex-projects/valid/pltw/P214_wavefront.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/invalidCodeA.mkl',
  /*
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.862.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.863.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.864.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.865.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.866.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.866.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.867.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.868.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.868.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.869.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.870.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.870.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.871.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.872.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.872.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.873.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.874.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.874.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.875.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.876.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.877.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.877.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.878.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.879.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.880.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.881.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.882.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.883.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.884.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.885.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.885.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.886.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.886.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.887.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.888.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.889.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.890.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.891.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.892.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.892.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.893.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.894.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.895.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.895.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.896.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.897.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.897.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.898.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.899.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.899.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.900.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.901.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.902.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.903.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.904.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.905.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.906.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.907.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.908.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.916.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.919.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.920.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.921.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.922.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.922.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.923.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.924.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.926.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.928.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.931.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.933.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.934.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.938.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.952.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.953.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.955.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.957.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.959.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.960.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.961.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.963.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.964.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.965.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.966.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.967.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.968.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.969.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.970.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.972.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.973.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.974.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.976.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.977.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.978.1.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.978.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.979.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.981.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.982.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.983.mkl',
  '../tests/test-121018/mkl-files/vex-projects/invalid/generated/CodeLevelNonWhenStatementsAndComments/invalid-code-example 20181026.20.48.50.984.mkl',
  */
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
  let get_diff = (filepath) => {

    let orgtext = fs.readFileSync(filepath, 'utf8');
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
	let expected = fs.readFileSync(filepath, 'utf8');
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



