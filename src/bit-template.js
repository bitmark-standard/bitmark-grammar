/* Bit JSON template.
{
'bitmark': '[.chapter][##Preface][@progress:false][@toc:false]',
'bit': {
'type': 'chapter',
      'number': '',
      'title': '',
      'level': 1,
      'toc': false,
      'progress': false,
      ...
    },
}
{'type': 'chapter', 'number': '', 'title': '', 'level': 1, 'toc': false, 'progress': false },

  /*
    [.match-picture]
    [!Name the animals on the pictures.]
    ===
    [&image::http://cdn.bitbook.education/books/com.firstpub.book98789/animals/cat.jpg]
    ==
    cat
    ===
    {
      'keyImage': {
      '@1x':'http://cdn.bitbook.education/books/com.firstpub.book98789/animals/cat.jpg',
      },
      'values': ['cat'], <== CAT
      'item': '',
      'instruction': '',
      'isCaseSensitive': false,
      'hint': '',
      'isExample': false,
      'example': '',
      'isLongAnswer': false
    }
*/
const JSON_BIT_TEMPLATES = {
  Regular_bit: {
    bitmark: '',
    bit: {
      type: '',
      format: 'bitmark--',
      body: '',
      // Other stuff should be added as needed.Below added 4/3/2021
      item: '',
      hint: '',
      isExample: false,
      example: '',
    }
  },
  LearningPath_bit: {
    bitmark: '',
    bit: {
      type: '',
      format: 'bitmark--',
      body: '',
      // Other stuff should be added as needed.Below added 4/3/2021
      item: '',
      hint: '',
      isExample: false,
      example: '',
      isTracked: true,
      isInfoOnly: false,
    }
  },
  Essay_bit: {
    bitmark: '',
    bit: {
      type: 'essay',
      format: 'bitmark--',
      instruction: '',
      partialAnswer: '',
      body: '',
      item: '',
      hint: '',
      isExample: false,
      example: '',
    }
  },
  // New 12/2/2020
  Article_bit: {
    bitmark: '',
    bit: {
      type: 'article',
      format: 'bitmark--',  // or bitmark-- or bitmark++
      body: '',
      // Other stuff should be added as needed
    }
  },
  // New 12/2/2020
  Message_bit: {
    bitmark: '',
    bit: {
      type: 'message',
      format: 'bitmark--',  // bitmark--, bitmark++, &image (+&audio etc), website
      body: '',
      // Other stuff should be added as needed
    }
  },
  // New 12/2/2020
  Res_website_link: {
    type: 'website-link',
    websiteLink: {
      siteName: '',  // 'apple( for www.apple.com
      url: ''
    },
  },
  Gap_bit: {
    type: 'gap',
    item: '',
    solutions: [],
    hint: '',
    instruction: '',
    isCaseSensitive: true,
    isExample: false,
    example: ''
  },
  Match_pair: { // regular match
    key: '',
    keyImage: {width: null, height: null, 'src': ''},  // Delete when not needed
    keyAudio: {format:'', src:''},  // Delete when not needed
    values: [], 
    item: '',
    hint: '',
    instruction: '',
    isCaseSensitive: true,
    isExample: false,
    example: '',
    isLongAnswer: false
  },
  Match_bit: {
    bitmark: '',
    bit: {
      type: 'match',
      format: 'bitmark--',
      item: '',
      heading: {},
      pairs: []  // here Match_pair(s) comes in
    }
  },
  /*Pair_heading: {
    forKeys: '',
    forValues: ''
  },*/
  MatchMatrix_bit: {
    bitmark: '',
    bit: {
      type: 'match-matrix',
      format: 'bitmark--',
      item: '',
      heading: {
        forKeys: '',   // heading key.
        forValues: []  // heading values.
      },
      matrix: []   // array of MatchMatrix_matrixelem
    }
  },
  MatchMatrix_matrixelem: {
    key: '',
    cells: [
      /*{
        item: ,
        instruction: ,
        values: []
        },
        {
        item: ,
        instruction: ,
        values: []
        },*/
    ],
    item: '',
    isCaseSensitive: true,
    hint: '',
    isExample: false,
    example: '',
    isLongAnswer: false,
  },
  // Element inside Match matrix cells
  MatchMatrix_cell: {
    item: '',
    instruction:'' ,
    values: []
  },
  
  Multi_choice_text: {
    bitmark: '',
    bit: {
      type: 'multiple-choice-text',
      format: 'bitmark--',
      body: '', // e.g.'The students {0} the {1} with the correct verb forms.',
      placeholders: {
	// e.g.{0}:placeholder
      }
    }
  },
  Mct_placeholder: {  //mct = multi-choice-text
    type: 'select',
    item: '',
    options: [
      /*
      {'text': 'd', 'hint': 'd', 'correct': true},
      {'text': 't', 'hint': 't', 'correct': false},
      {'text': 's', 'hint': 's', 'correct': false}
      */
    ],
    prefix: '',
    postfix: '',
    hint: '',
    instruction: '',
    isExample: false,
    example: ''
  },
  Mct_opt: {
    text: '',
    hint: '',
    isCorrect: false
  },
  Multi_choice: { // updated april 1,2021
    bitmark: '',
    bit: {
      type: 'multiple-choice',
      format: 'bitmark--',
      item: '',
      instruction: '',
      body: '',
      footer: '',
      hint: '',
      quizzes: [],  // previously 'choices'. contains a list of Mc_choice s
    }
  },
  Mc_quiz: { 
    item: '',
    instruction: '',
    choices: [],  // list of Mc_quiz_choice
    hint: '',
    isExample: false,
    example: ''
  },
  Mc_quiz_choice: {
    choice: '',
    item: '',
    isCorrect: true,  // true=+ false=-
    instruction: '',
    hint: '',
  },
  //
  Multi_choice_1: { // updated april 1,2021
    bitmark: '',
    bit: {
      type: 'multiple-choice-1',
      format: 'bitmark--',
      item: '',
      instruction: '',
      body: '',
      hint: '',
      choices: [],  // a list of Mc_quiz_choice
      isExample: false,
      example: '',
    }
  },
  //
  Multi_response: { // updated april 1,2021
    bitmark: '',
    bit: {
      type: 'multiple-response',
      format: 'bitmark--',
      item: '',
      instruction: '',
      body: '',
      footer: '',
      hint: '',
      quizzes: [],  // previously 'choices'. contains a list of Mr_response
    }
  },
  Mr_response: { 
    item: '',
    instruction: '',
    responses: [],  // list of Mc_quiz_choice
    hint: '',
    isExample: false,
    example: ''
  },
  Mr_resp_resp: {
    response: '',
    item: '',
    isCorrect: true,  // true=+ false=-
    instruction: '',
    hint: '',
  },      
  //
  Multi_response_1: { // updated april 1,2021
    bitmark: '',
    bit: {
      type: 'multiple-response-1',
      format: 'bitmark--',
      item: '',
      instruction: '',
      body: '',
      hint: '',
      responses: [],  // a list of Mr_resp_resp
      isExample: false,
      example: '',
    }
  },
  //
  Highlight_text: {
    bitmark: '',
    bit: {
      type: 'highlight',
      format: 'bitmark--',
      body: '',
      placeholders: {}
    }
  },
  Highlight_text_placeholder: {  
    type: 'select',
    item: '',
    texts: [ /* Highlight_text_text list  */ ],
    hint: '',
    instruction: '',
    isExample: false,
    example: ''
  },
  Highlight_placeholder: {  //mct = multi-choice-text
    type: 'highlight',
    item: '',
    texts: [], // list of Highlight_text_text
    prefix: '',
    postfix: '',
    hint: '',
    instruction: '',
    isExample: false,
    example: ''
  },  
  Highlight_text_text: {
    text: '',
    instruction: '',
    isHighlighted: false
  },
  True_false_1: {
    bitmark: '',
    bit: {
      type: '.true-false-1',
      format: 'bitmark--',
      item: '',
      lead: '',
      instruction: '',
      hint: '',
      statement: '',
      isCorrect: true,
      isExample: false,
    }
  },
  True_false: {
    bitmark: '',
    bit: {
      type: 'true-false',
      format: 'bitmark--',
      item: '',
      lead: '',
      instruction: '',
      hint: '',
      labelTrue: '',
      labelFalse: '',
      statements: [],  // list of True_false_stmt s
    },
  },
  True_false_stmt: {
    statement: '',
    isCorrect: false,
    isExample: false
  },
  // New 4/10/2021
  Interview_bit: {
    bitmark: '',
    bit: {
      type: 'interview',
      format: 'bitmark--',
      item: '',
      instruction: '',
      body: '',
      footer: '',
      hint: '',
      questions: []
    }
  },
  Interview_question: {
    item: '',
    question: '',
    instruction: '',
    hint: '',
    isExample: false,
    example: '',
    sampleSolution: '',
    partialAnswer: '',
    isShortAnswer: true
  },
  //
  Mark_bit: {
    bitmark: '',
    bit: {
      type: 'mark',
      format: 'bitmark--',
      item: '',
      instruction: '',
      hint: '',
      body: '',
      marks: {}
    }
  },
  Mark_element: {  // an elem in Mark_bit.marks
    item: '',
    text: '',
    richText: '',
    mark: '',
    instruction: '',
    hint: '',
    isExample: false
  },
  Chat_bit: {
    bitmark: '',
    bit: {
      type: 'chat',
      format: '',
      item: '',
      instruction: '',
      hint: '',
      initiator: {
        name: '',
        avatarImage:  {
	  width: null,
	  height: null,
	  alt: '',
	  src: ''
        }
      },
      partner: {
        name: '',
        avatarImage: {
	  width: null,
	  height: null,
	  alt: '',
	  src: ''
	}
      },
      chat: [
      ],
    }
  },
  Chat_element: {
    name: '',
    alt: '',
    text: '',
    initiator: false
  },
  Imageresource_element: {
    type: 'image',
    image: {
      width: null,
      height: null,
      src: '',
    }
  },
  Image_detail_element: {
    src: '',
    //'src2x':'http://cdn.bitmark.cloud/images/g67687687@2x.jpg',
    //'src3x': '',
    showInIndex: false,
    format: '',
    width: null,
    height: null,
    alt: '',
    caption: '',
    license: '',
    copyright: ''
  },
  ImageLink: {
    provider: '',
    url: ''
  },
  Videoresource: {
    format: '',
    width: null,
    height: null,
    src: '',
  },
  Video: {
    format: '',
    src: '',
    width: null,
    height: null,
    duration: '',
    mute: false,
    autoplay: false,
    allowSubtitles: false,
    showSubtitles: false,
    alt: '',
    license: '',
    copyright: '',
    posterImage: {
      src: '',
      format: '',
      width: null,
      height: null
    }
  },
  /*Thumnail: {
    src: '',
    format: '',
    width: null,
    height: null
  },*/
  VideoLink: {
    provider: '',
    url: '',
    width: null,
    height: null,
    duration: ''
    //thumbnails: [{ src: '', format: '', width: null, height: null }]
  },
  Sequence: {
    bitmark: '',
    bit: {
      type: 'sequence',
      format: 'bitmark--',
      instruction: '',
      body: '',
      elements: [],
      item: '',
      hint: '',
      isExample: false,
      example: ''
    }
  },
  Error_Info: {
    message: '',
    line: null,
    column: null, 
    errorLine: ''
  }  
};

exports.JSON_BIT_TEMPLATES = JSON_BIT_TEMPLATES;
