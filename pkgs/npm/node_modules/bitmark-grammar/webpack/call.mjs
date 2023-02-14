
import { BitmarkParser } from '../src/index.mjs';

$("#compile-button").bind("click", function(){
  let text = $("textarea#input_source").val();
  let parser = new BitmarkParser(text, {trace:false, debug:false});
  try {
    let obj = parser.parse();
    if (obj) {
      $("textarea#result").val(obj);
    }
  }
  catch(e) {
    $("textarea#result").val(e);    
  }
    
});

