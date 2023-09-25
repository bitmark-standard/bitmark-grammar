"use strict";
exports.__esModule = true;
exports.JSON_BIT_TEMPLATES = void 0;
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
var JSON_BIT_TEMPLATES = {
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
            example: ''
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
            isInfoOnly: false
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
            example: ''
        }
    },
    // New 12/2/2020
    Article_bit: {
        bitmark: '',
        bit: {
            type: 'article',
            format: 'bitmark--',
            body: ''
        }
    },
    // New 12/2/2020
    Message_bit: {
        bitmark: '',
        bit: {
            type: 'message',
            format: 'bitmark--',
            body: ''
        }
    },
    // New 12/2/2020
    Res_website_link: {
        type: 'website-link',
        websiteLink: {
            siteName: '',
            url: ''
        }
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
    Match_pair: {
        key: '',
        keyImage: { width: null, height: null, 'src': '' },
        keyAudio: { format: '', src: '' },
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
            pairs: [] // here Match_pair(s) comes in
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
                forKeys: '',
                forValues: [] // heading values.
            },
            matrix: [] // array of MatchMatrix_matrixelem
        }
    },
    MatchMatrix_matrixelem: {
        key: '',
        cells: [
        /*{
          item: ,
          instruction: ,
          values:
          },
         : {
          item: ,
          instruction: ,
          values:
          },*/
        ],
        item: '',
        isCaseSensitive: true,
        hint: '',
        isExample: false,
        example: '',
        isLongAnswer: false
    },
    // Element inside Match matrix cells
    MatchMatrix_cell: {
        item: '',
        instruction: '',
        values: []
    },
    Multi_choice_text: {
        bitmark: '',
        bit: {
            type: 'multiple-choice-text',
            format: 'bitmark--',
            body: '',
            placeholders: {
            // e.g.{0}:placeholder
            }
        }
    },
    Mct_placeholder: {
        type: 'select',
        item: '',
        options: [
        /*
       : {'text': 'd', 'hint': 'd', 'correct': true},
       : {'text': 't', 'hint': 't', 'correct': false},
       : {'text': 's', 'hint': 's', 'correct': false}
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
    Multi_choice: {
        bitmark: '',
        bit: {
            type: 'multiple-choice',
            format: 'bitmark--',
            item: '',
            instruction: '',
            body: '',
            footer: '',
            hint: '',
            quizzes: []
        }
    },
    Mc_quiz: {
        item: '',
        instruction: '',
        choices: [],
        hint: '',
        isExample: false,
        example: ''
    },
    Mc_quiz_choice: {
        choice: '',
        item: '',
        isCorrect: true,
        instruction: '',
        hint: ''
    },
    //
    Multi_choice_1: {
        bitmark: '',
        bit: {
            type: 'multiple-choice-1',
            format: 'bitmark--',
            item: '',
            instruction: '',
            body: '',
            hint: '',
            choices: [],
            isExample: false,
            example: ''
        }
    },
    //
    Multi_response: {
        bitmark: '',
        bit: {
            type: 'multiple-response',
            format: 'bitmark--',
            item: '',
            instruction: '',
            body: '',
            footer: '',
            hint: '',
            quizzes: []
        }
    },
    Mr_response: {
        item: '',
        instruction: '',
        responses: [],
        hint: '',
        isExample: false,
        example: ''
    },
    Mr_resp_resp: {
        response: '',
        item: '',
        isCorrect: true,
        instruction: '',
        hint: ''
    },
    //
    Multi_response_1: {
        bitmark: '',
        bit: {
            type: 'multiple-response-1',
            format: 'bitmark--',
            item: '',
            instruction: '',
            body: '',
            hint: '',
            responses: [],
            isExample: false,
            example: ''
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
        texts: [ /* Highlight_text_text list  */],
        hint: '',
        instruction: '',
        isExample: false,
        example: ''
    },
    Highlight_placeholder: {
        type: 'highlight',
        item: '',
        texts: [],
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
            isExample: false
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
            statements: []
        }
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
    Mark_element: {
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
                avatarImage: {
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
            chat: []
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
            src: ''
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
        copyright: '',
    },
    Image_logos_element: {
	    type: 'image',
        image: {  /*Image_detail_element*/ },
	},
    ImageLink: {
        provider: '',
        url: ''
    },
    Videoresource: {
        format: '',
        width: null,
        height: null,
        src: ''
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
    MenuItem: {
        type: '',
        course: '',
        item: '',
        instruction: '',
        hint: '',
        isExample: false,
        example: ''
    },
    Error_Info: {
        message: '',
        line: null,
        column: null,
        errorLine: ''
    }
};
exports.JSON_BIT_TEMPLATES = JSON_BIT_TEMPLATES;
