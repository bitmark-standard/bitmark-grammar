//
//  bit-utils.js
//
const R = require('ramda');  // uses R.slice

String.prototype.lastIndexOfEnd = function (string) {
  let io = this.lastIndexOf(string);
  return io == -1 ? -1 : io + string.length;
};
// Unescape [ and ]
const unescape_url = url => (url.replace(/&#91;/g, '[')).replace(/&#93;/g, ']');



class BitUtil {


  constructor(source) {
    this.source = source;
    this.srclen = source.length;
    this.OFF = 5;
    this.last_ctx_start = 0;
    this.last_ctx_stop = 0;
    this.current_bit = ''
    this.num_emo = 1;
  }

  count_char(text, ch) {
    return (text.match(new RegExp(ch, "g")) || []).length;
  }
  count_rechar(text, ch) {
    return (text.match(new RegExp('\\' + ch, "g")) || []).length;
  }
  count_opbra(text) {
    return (text.match(new RegExp('\\[', "g")) || []).length;
  }
  count_clbra(text) {
    return (text.match(new RegExp('\\]', "g")) || []).length;
  }
  nth_clbra_position(n) {
    let pos = -1;
    for (let i = 0; i < n; i++)
      pos = this.source.indexOf(']', pos + 1)
    return pos;
  }
  clbra_position_from(pos) {
    let p = pos;
    for (let i = 0; i < 10; i++) {  // for now it is 10 max
      p = this.source.indexOf(']', p + 1)
      if (pos < p)
        break;
      if (p < 0) {
        p = pos;
        break;
      }
    }
    let secret = 2;
    return p + secret;  // Watch this!!! May 4
  }
  // Bit text is not available till capture bit rule.
  set_currentbit(text) {
    this.current_bit = text
  }
  underscore_to_camelcase(text) {
    text = text.replace(/[\-_\s]+(.)?/g, (match, chr) => {
      return chr ? chr.toUpperCase() : '';
    });
    return text;
  }
  has_nonascii(string) {
    // This long regex doesn't work with Node JS
    //let regex = /[\u1F600-\u1F64F\u1F300-\u1F5FF\u1F680-\u1F6FF\u1F1E6-\u1F1FF\u2600-\u26FF\u2700-\u27BF\uFE00-\uFE0F\u1F900-\u1F9FF]/;
    //let s = "😀😅✊✌️";  // sample emoji
    let regex = /[^\x00-\x7F]+/;
    let m = string.match(regex);
    return m;
  }
  //
  getcode(ctx, could_end_with_any = false) {
    if (!ctx.children) {
      let off = 0;
      let stop = 0;

      if (ctx.stop === undefined) {
        stop = ctx._start.stop;  // this happens when there is an syntax error
      } else
        stop = ctx.stop.stop;
      if (this.srclen + this.OFF < stop)
        off = 0;
      this.last_ctx_start = ctx.start.start;
      this.last_ctx_stop = stop; //ctx._start.stop;

      let bk = 0;
      if (this.source.charAt(ctx.start.start + 1) === '[') {
        bk = 1;
        if (this.source.charAt(stop) !== ']')
          stop = this.clbra_position_from(ctx.start.start + 1);
      }
      else if (this.source.charAt(ctx.start.start) !== '[') {
        bk = -1;
      }
      let tmps = R.slice(ctx.start.start + bk, stop, this.source);
      let whole_thing = false;
      if (tmps.startsWith('[.') || could_end_with_any)
        whole_thing = true;

      let missing_cl = 0;
      let skip_tillop = 0;
      let bad_bracket_balance = this.count_rechar(tmps, '[') !== this.count_rechar(tmps, ']');
      if (tmps.startsWith('[') && bad_bracket_balance) {
        missing_cl = 1;  // unbalanced []
      }
      else if (this.count_rechar(tmps, '[') !== 0 && !tmps.startsWith('[') &&
        bad_bracket_balance) {
        // e.g. "p][?1 or "
        tmps = tmps.substr(tmps.indexOf('['), tmps.length);
        bk = missing_cl = 1;  // missig closing bracket
      }

      if (this.has_nonascii(tmps) !== null || missing_cl) {

        // exclude Item [%...]
        if (tmps.startsWith('[') && !tmps.startsWith('[%')) {
          let n_opcl = this.count_opbra(tmps);
          let n_clcl = this.count_clbra(tmps);

          if ((1 < n_opcl && n_clcl < n_opcl) || missing_cl) {
            let clpos = this.clbra_position_from(stop);
            tmps = R.slice(ctx.start.start + bk, clpos, this.source);
          }
          // interview, match etc will have a bunch of []
          if (!whole_thing) {
            let last_cl = tmps.lastIndexOf(']');
            tmps = tmps.substr(0, last_cl + 1);
          }
        }
      }
      else
        tmps = R.slice(ctx.start.start + bk, stop + off, this.source);
      return tmps;
    }
    else
      return this.getcode2(ctx);
  }

  // Gets text from tokens
  // Using ctx.children.join('') will break the output
  getcode2(ctx) {
    if (ctx && ctx.children) {
      const len = ctx.children.length;
      let text = '';
      for (let i = 0; i < len; i++)
        text = text + ctx.children[i].text;
      return text;
    }
    return '';
  }

  
  getstring_insidenl(ctx) {
    let tmps = 'no children';
    if (!ctx.children) {

      let stop;
      stop = ctx.stop === undefined ? ctx._start.stop : ctx.stop.stop;
      let start = ctx.start.start;
      if (this.source[start - 1] === '|') {
        // ENCLBARS (enclose in ||) then
        start -= 1;
        tmps = R.slice(start, stop, this.source);
      }
      else {
        // not ENCLBARS
        let nlat = this.source.indexOf(']\n', start);
        let nloff = 0;
        if (0 < nlat && (nlat - start) < 8) {  // 8 is a hack value
          nloff = (nlat - start) + 2;  // x]\n
        }
        else if (this.source[start - 1] != '\n') {
          if (this.source[start] === '\n') { 
            start++;
            while (this.source[stop] !== '\n')
              stop++;
          }
          else {
            if (this.source[start - 2] === '\n') { // source[start] is the 2nd char of a utf code
              // some emojis are 3 chars long
              start--; 
              nloff = 1;
              while (this.source[stop] !== '\n')
                stop++;
            }
          }
          while (this.source[start - nloff] != '\n')
            nloff++;
          nloff--;   // skip \n
          let sr = R.slice(start - nloff, stop + nloff, this.source);
          return sr;
        }
        let nloff0 = nloff, magic = 2;
        if (this.source[stop + nloff + magic] !== '\n')
          magic++;
        
        tmps = R.slice(start + nloff, stop + nloff + magic, this.source);
        let i = 0;
        while (tmps[i++].match(/[ \t\n\r]/))
          nloff++;
        if (nloff0 != nloff)
          tmps = R.slice(start + nloff, stop + nloff + magic, this.source);
      }
      return tmps;
    }
    return '';
  }  

  

  /*
   * Splits the source bitbook into each and every bit.
   * Returns an array of bit={offset:x, bit:text}
   * offset is useful to show in the error
   */
  split_bits() {

    let m = null;
    let fromTo = [], bitHeads = [];
    let matches;

    let regex = /(\[\.[^\]\.]+\])/sg;
    matches = this.source.matchAll(regex);  // all bit starts

    for (m of matches) {
      // Dont add if not the head doesnt start from 0th column
      if (m.index === 0 || this.source.charAt(m.index - 1) === '\n') {
        bitHeads.push(m[1]);
        fromTo.push(m.index);
      }
    }
    fromTo.push(this.source.length);

    let bits = [];
    for (let i = 0; i < fromTo.length - 1; i++) {
      let bit = {};
      bit.offset = fromTo[i];
      // Cant start with a newline!
      let nloff = this.source[fromTo[i]] === '\n' ? 1 : 0;
      let nloff2 = this.source[fromTo[i + 1]] !== '\n' ? 1 : 0;
      nloff2 = this.source[fromTo[i + 1]] == '[' ? -1 : nloff2;
      //bit.bit = this.source.substring(fromTo[i]+nloff, fromTo[i+1]+1+nloff2);
      // Do fromTo[i]-1 to include NL
      nloff = fromTo[i] === 0 ? 0 : -1;
      bit.bit = this.source.substring(fromTo[i] + nloff, fromTo[i + 1] + 1 + nloff2);
      bits.push(bit);
    }
    return bits; // array of bit={off:x, bit:text}
  }

  /*
   * Find all [.  ] ... [.  ]
   * Pick the one that has index < point && point < next bit start
   */
  get_error_line(source, line, column) {
    let lines = source.split('\n');
    return lines[parseInt(line) - 1];
  }

  // Returns the everything after the first [...]  
  get_bitbody(text) {

    const re = /^([^\[]*)\[([^\]]+)\]/;
    if (text.startsWith('[&'))
      re = /^\[&([^:]+):([^\]]+)\]/;

    let m = text.match(re);
    /*
      [
        0: '|| this is a comment ||\n[.assignment]',
  1: '|| this is a comment ||\n',
  2: '.assignment',
  3: index: 0,
  4: input: '|| this is a comment ||\n[.assignment]\n[!Read the following text.]\nOnce upon a time...',
  5: groups: undefined
     ]
    */
    if (m != null) {
      // m[0] holds the text from t[0] to the end of the first bit[]
      if (m[0].length === text.length)
        return m[2]; // for the case [&article: ...parapgraphs ....]
      else
        return text.substr(m[0].length, text.length - m[0].length);
    }
    return text;   // fallback for no bit
  }
  // for message and article
  get_bitbody_alt(text) {

    const re = /^([^\[]*)\[([^\]]+)\]/;
    if (text.startsWith('[&'))
      re = /^\[&([^:]+):([^\]]+)\]/;
    let lastcl = text.indexOf(']') + 1;
    if (lastcl === 0)
      lastcl = text.length - 1;
    // The bit name part is ignored in this alt version
    text = text.substr(lastcl, text.length - 1); // 5 for the Emoji hack
    return text;   // fallback for no bit
  }

  // Returns the text enclosed in []
  get_bit(text) {
    const re = /^[^\[]*\[([^\]]+)\]/;
    //let m = this.bit_code.match(re);
    let m = text.match(re);
    if (m != null)
      return m[1].trim();  // 
    return null;  // not bit
  }
  //
  get_bit_value(regex, text) {
    let m = text.match(regex);
    if (m && m != undefined) {
      return m[1].trim();
    }
    return '';
  }
  get_two_bit_values(regex, text) {
    let m = text.match(regex);
    if (m && m != undefined) {
      return [m[1].trim(), m[2].trim()];
    }
    return [];
  }
  
  // multiple results
  get_bit_value_multi(regex, text) {
    let array = [text.matchAll(regex)];
    return array;
  }
  // Get the content of the first [bitbody]
  // Return string have the 1st bit character.
  get_bracket_content(text) {
    const re = /^\[([^\]]+)\]/;
    let m = text.match(re);
    if (m)
      return m[1].trim();
    return text; // fallback
  }

  remove_close_bracket_and_follow(text) {
    if (-1 < text.indexOf('[')) {
      const re = /([^\]]+)\](\w|\W)*$/;
      let m = text.match(re);
      if (m)
        return m[1].trim();
    }
    return text;
  }

  // tailpattern e.g \n=+\n
  remove_tail(text, tailpattern) {
    const r = new RegExp('^\((\\w|\\W)+\)' + tailpattern);
    let m = text.match(r);
    if (m)
      return m[1];
    return text;
  }
  // Colon separated value
  // e.g. [@compatibility: none]
  get_bit_value_colonsep(regex, text) {
    let m = text.matchAll(regex);
    let val = m.next();
    if (val.value != undefined)
      return [val.value[1].trim(), val.value[2].trim()];
    return '';  // didnt match
  }

  // input: [.assignment:bitmark++&article:bitmark++]
  // output: [ bitmark++, article, bitmark++ ]
  get_bit_resource(code) {
    let con = this.get_bracket_content(code);
    let spl = con.split(/[:&]/)
    spl.shift();  // change takes place withint
    return spl;
  }

  // input: [.assignment:bitmark++&article:bitmark++]
  // output: [ .assignment, bitmark++, article, bitmark++ ]
  // Do  spl.shift() to drop 1st elem.
  get_splitted(bit_code) {
    let s = code.slice(1, -1); // remove [ and ]
    let spl = s.split(/[:&]/);
    return spl;  // an array
  };
  // e.g. [@progress:false]
  get_at_value(code) {
    let con = this.get_bracket_content(code);
    //let re = /@([^:]*)\s*:\s*([^\]]+)\s*/g;
    return con.split(':');
  }
  // [#string] -> returns string
  get_title(code) {

    if (code.startsWith('[#]'))
      return '';
    else if (code.startsWith('[#') && 1 < code.match(/\]/g).length) {
      // Remove the first [ and last ]
      let s = code.replace(/.$/, '').replace(/^\[#+/, '');
      return s.trim();
    }
    else {
      const re = /\[#+([^\]]*)\]/;
      let val = this.get_bit_value(re, code);
      return val;
    }
  }
  get_numhash(code) {
    const re = /(#+)/;
    const m = code.match(re);
    if (m)
      return m[1].length;
    return 0;
  }

  // [&image::https://...] or [&audio::https://...]
  get_url(code) {
    let cont = this.get_bracket_content(code);
    if (cont.indexOf('http') === -1) {
      let colon = cont.indexOf(':');
      let s1 = cont.substring(0, colon);
      let s2 = cont.substring(colon + 1);
      return [s1, unescape_url(s2)];
    }
    else {
      let vals = cont.split(':');
      return [vals[0], unescape_url(vals[1] + ':' + vals[2])]; // [image, url]
    }
  }
  // Returns an array
  get_url_in_text(text) {
    const re = /https?:\/\/([^\/\[\&\s]+)\/?/;
    let m = text.match(re);
    if (m)
      return [m[0], unescape_url(m[1])];  // 0=http.. 1=www.apple.com
    return null; // not found
  }

  // Extract the domain part of the url
  get_domain_from_url(url) {
    // https://([^/]+)/../....
    const re = /^https?:\/\/([^\/\[\&\s]+)\/?/;
    let m = url.match(re);
    if (m)
      return m[1];
    return null;
  }
  //
  get_wh_from_url(url) {
    const re = /([0-9]+)x([0-9]+)/;
    let filename = url.split('/').pop();;      // e.g. cat3_1024x1024.jpg
    let m = filename.match(re);
    if (m)
      return [m[1], m[2]];  // width, height
    return null;
  }
  // 
  get_caption_string(text) {
    const re = /\[@caption:([^\]]+)\]/;
    const m = text.match(re);
    if (m)
      return m[1];
    return null;
  }
  // 
  is_brackets_inside_stars(text) {
    const re = /\*+[^\[]*\[[^\]]+\].*\*+/;
    const m = text.match(re);
    if (m)
      return true;
    return false;
  }
  // Extracts JSON from arg text
  extract_json(text) {
    const start = text.indexOf('\n{');
    const end = text.lastIndexOfEnd('}');
    let result = text.substring(start, end);
    return result.trim();
  }

}

exports.BitUtil = BitUtil;
