(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js ***!
  \******************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var conf = {
    comments: {
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] }
    ],
    folding: {
        offSide: true
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.pug',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' }
    ],
    keywords: [
        'append',
        'block',
        'case',
        'default',
        'doctype',
        'each',
        'else',
        'extends',
        'for',
        'if',
        'in',
        'include',
        'mixin',
        'typeof',
        'unless',
        'var',
        'when'
    ],
    tags: [
        'a',
        'abbr',
        'acronym',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'basefont',
        'bdi',
        'bdo',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'center',
        'cite',
        'code',
        'col',
        'colgroup',
        'command',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'font',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'keygen',
        'kbd',
        'label',
        'li',
        'link',
        'map',
        'mark',
        'menu',
        'meta',
        'meter',
        'nav',
        'noframes',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strike',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'tracks',
        'tt',
        'u',
        'ul',
        'video',
        'wbr'
    ],
    // we include these common regular expressions
    symbols: /[\+\-\*\%\&\|\!\=\/\.\,\:]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            // Tag or a keyword at start
            [
                /^(\s*)([a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        '$2@tags': {
                            cases: {
                                '@eos': ['', 'tag'],
                                '@default': ['', { token: 'tag', next: '@tag.$1' }]
                            }
                        },
                        '$2@keywords': ['', { token: 'keyword.$2' }],
                        '@default': ['', '']
                    }
                }
            ],
            // id
            [
                /^(\s*)(#[a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        '@eos': ['', 'tag.id'],
                        '@default': ['', { token: 'tag.id', next: '@tag.$1' }]
                    }
                }
            ],
            // class
            [
                /^(\s*)(\.[a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        '@eos': ['', 'tag.class'],
                        '@default': ['', { token: 'tag.class', next: '@tag.$1' }]
                    }
                }
            ],
            // plain text with pipe
            [/^(\s*)(\|.*)$/, ''],
            { include: '@whitespace' },
            // keywords
            [
                /[a-zA-Z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }
            ],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\d+/, 'number'],
            // strings:
            [/"/, 'string', '@string."'],
            [/'/, 'string', "@string.'"]
        ],
        tag: [
            [/(\.)(\s*$)/, [{ token: 'delimiter', next: '@blockText.$S2.' }, '']],
            [/\s+/, { token: '', next: '@simpleText' }],
            // id
            [
                /#[a-zA-Z_-][\w-]*/,
                {
                    cases: {
                        '@eos': { token: 'tag.id', next: '@pop' },
                        '@default': 'tag.id'
                    }
                }
            ],
            // class
            [
                /\.[a-zA-Z_-][\w-]*/,
                {
                    cases: {
                        '@eos': { token: 'tag.class', next: '@pop' },
                        '@default': 'tag.class'
                    }
                }
            ],
            // attributes
            [/\(/, { token: 'delimiter.parenthesis', next: '@attributeList' }]
        ],
        simpleText: [
            [/[^#]+$/, { token: '', next: '@popall' }],
            [/[^#]+/, { token: '' }],
            // interpolation
            [
                /(#{)([^}]*)(})/,
                {
                    cases: {
                        '@eos': [
                            'interpolation.delimiter',
                            'interpolation',
                            {
                                token: 'interpolation.delimiter',
                                next: '@popall'
                            }
                        ],
                        '@default': [
                            'interpolation.delimiter',
                            'interpolation',
                            'interpolation.delimiter'
                        ]
                    }
                }
            ],
            [/#$/, { token: '', next: '@popall' }],
            [/#/, '']
        ],
        attributeList: [
            [/\s+/, ''],
            [
                /(\w+)(\s*=\s*)("|')/,
                ['attribute.name', 'delimiter', { token: 'attribute.value', next: '@value.$3' }]
            ],
            [/\w+/, 'attribute.name'],
            [
                /,/,
                {
                    cases: {
                        '@eos': {
                            token: 'attribute.delimiter',
                            next: '@popall'
                        },
                        '@default': 'attribute.delimiter'
                    }
                }
            ],
            [/\)$/, { token: 'delimiter.parenthesis', next: '@popall' }],
            [/\)/, { token: 'delimiter.parenthesis', next: '@pop' }]
        ],
        whitespace: [
            [/^(\s*)(\/\/.*)$/, { token: 'comment', next: '@blockText.$1.comment' }],
            [/[ \t\r\n]+/, ''],
            [/<!--/, { token: 'comment', next: '@comment' }]
        ],
        blockText: [
            [
                /^\s+.*$/,
                {
                    cases: {
                        '($S2\\s+.*$)': { token: '$S3' },
                        '@default': { token: '@rematch', next: '@popall' }
                    }
                }
            ],
            [/./, { token: '@rematch', next: '@popall' }]
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, { token: 'comment', next: '@pop' }],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        string: [
            [
                /[^\\"'#]+/,
                {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }
            ],
            [
                /@escapes/,
                {
                    cases: {
                        '@eos': { token: 'string.escape', next: '@popall' },
                        '@default': 'string.escape'
                    }
                }
            ],
            [
                /\\./,
                {
                    cases: {
                        '@eos': {
                            token: 'string.escape.invalid',
                            next: '@popall'
                        },
                        '@default': 'string.escape.invalid'
                    }
                }
            ],
            // interpolation
            [
                /(#{)([^}]*)(})/,
                ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']
            ],
            [/#/, 'string'],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': { token: 'string' }
                    }
                }
            ]
        ],
        // Almost identical to above, except for escapes and the output token
        value: [
            [
                /[^\\"']+/,
                {
                    cases: {
                        '@eos': { token: 'attribute.value', next: '@popall' },
                        '@default': 'attribute.value'
                    }
                }
            ],
            [
                /\\./,
                {
                    cases: {
                        '@eos': { token: 'attribute.value', next: '@popall' },
                        '@default': 'attribute.value'
                    }
                }
            ],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'attribute.value', next: '@pop' },
                        '@default': { token: 'attribute.value' }
                    }
                }
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcHVnL3B1Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLFNBQVMsWUFBWSxpQ0FBaUM7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUMsWUFBWSxHQUFHO0FBQzNELFNBQVMsa0RBQWtEO0FBQzNELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0Q0FBNEM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0Q0FBNEM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5Q0FBeUM7QUFDN0UscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgb2ZmU2lkZTogdHJ1ZVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnB1ZycsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYXJyYXknLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnYXBwZW5kJyxcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkb2N0eXBlJyxcbiAgICAgICAgJ2VhY2gnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdleHRlbmRzJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbmNsdWRlJyxcbiAgICAgICAgJ21peGluJyxcbiAgICAgICAgJ3R5cGVvZicsXG4gICAgICAgICd1bmxlc3MnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3doZW4nXG4gICAgXSxcbiAgICB0YWdzOiBbXG4gICAgICAgICdhJyxcbiAgICAgICAgJ2FiYnInLFxuICAgICAgICAnYWNyb255bScsXG4gICAgICAgICdhZGRyZXNzJyxcbiAgICAgICAgJ2FyZWEnLFxuICAgICAgICAnYXJ0aWNsZScsXG4gICAgICAgICdhc2lkZScsXG4gICAgICAgICdhdWRpbycsXG4gICAgICAgICdiJyxcbiAgICAgICAgJ2Jhc2UnLFxuICAgICAgICAnYmFzZWZvbnQnLFxuICAgICAgICAnYmRpJyxcbiAgICAgICAgJ2JkbycsXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ2JvZHknLFxuICAgICAgICAnYnInLFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgJ2NhbnZhcycsXG4gICAgICAgICdjYXB0aW9uJyxcbiAgICAgICAgJ2NlbnRlcicsXG4gICAgICAgICdjaXRlJyxcbiAgICAgICAgJ2NvZGUnLFxuICAgICAgICAnY29sJyxcbiAgICAgICAgJ2NvbGdyb3VwJyxcbiAgICAgICAgJ2NvbW1hbmQnLFxuICAgICAgICAnZGF0YWxpc3QnLFxuICAgICAgICAnZGQnLFxuICAgICAgICAnZGVsJyxcbiAgICAgICAgJ2RldGFpbHMnLFxuICAgICAgICAnZGZuJyxcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdkbCcsXG4gICAgICAgICdkdCcsXG4gICAgICAgICdlbScsXG4gICAgICAgICdlbWJlZCcsXG4gICAgICAgICdmaWVsZHNldCcsXG4gICAgICAgICdmaWdjYXB0aW9uJyxcbiAgICAgICAgJ2ZpZ3VyZScsXG4gICAgICAgICdmb250JyxcbiAgICAgICAgJ2Zvb3RlcicsXG4gICAgICAgICdmb3JtJyxcbiAgICAgICAgJ2ZyYW1lJyxcbiAgICAgICAgJ2ZyYW1lc2V0JyxcbiAgICAgICAgJ2gxJyxcbiAgICAgICAgJ2gyJyxcbiAgICAgICAgJ2gzJyxcbiAgICAgICAgJ2g0JyxcbiAgICAgICAgJ2g1JyxcbiAgICAgICAgJ2g2JyxcbiAgICAgICAgJ2hlYWQnLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ2hncm91cCcsXG4gICAgICAgICdocicsXG4gICAgICAgICdodG1sJyxcbiAgICAgICAgJ2knLFxuICAgICAgICAnaWZyYW1lJyxcbiAgICAgICAgJ2ltZycsXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgICdpbnMnLFxuICAgICAgICAna2V5Z2VuJyxcbiAgICAgICAgJ2tiZCcsXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICdsaScsXG4gICAgICAgICdsaW5rJyxcbiAgICAgICAgJ21hcCcsXG4gICAgICAgICdtYXJrJyxcbiAgICAgICAgJ21lbnUnLFxuICAgICAgICAnbWV0YScsXG4gICAgICAgICdtZXRlcicsXG4gICAgICAgICduYXYnLFxuICAgICAgICAnbm9mcmFtZXMnLFxuICAgICAgICAnbm9zY3JpcHQnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ29sJyxcbiAgICAgICAgJ29wdGdyb3VwJyxcbiAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICdvdXRwdXQnLFxuICAgICAgICAncCcsXG4gICAgICAgICdwYXJhbScsXG4gICAgICAgICdwcmUnLFxuICAgICAgICAncHJvZ3Jlc3MnLFxuICAgICAgICAncScsXG4gICAgICAgICdycCcsXG4gICAgICAgICdydCcsXG4gICAgICAgICdydWJ5JyxcbiAgICAgICAgJ3MnLFxuICAgICAgICAnc2FtcCcsXG4gICAgICAgICdzY3JpcHQnLFxuICAgICAgICAnc2VjdGlvbicsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAnc21hbGwnLFxuICAgICAgICAnc291cmNlJyxcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICAnc3RyaWtlJyxcbiAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICdzdHlsZScsXG4gICAgICAgICdzdWInLFxuICAgICAgICAnc3VtbWFyeScsXG4gICAgICAgICdzdXAnLFxuICAgICAgICAndGFibGUnLFxuICAgICAgICAndGJvZHknLFxuICAgICAgICAndGQnLFxuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAndGZvb3QnLFxuICAgICAgICAndGgnLFxuICAgICAgICAndGhlYWQnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICd0cicsXG4gICAgICAgICd0cmFja3MnLFxuICAgICAgICAndHQnLFxuICAgICAgICAndScsXG4gICAgICAgICd1bCcsXG4gICAgICAgICd2aWRlbycsXG4gICAgICAgICd3YnInXG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1tcXCtcXC1cXCpcXCVcXCZcXHxcXCFcXD1cXC9cXC5cXCxcXDpdKy8sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gVGFnIG9yIGEga2V5d29yZCBhdCBzdGFydFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFxccyopKFthLXpBLVpfLV1bXFx3LV0qKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQyQHRhZ3MnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiBbJycsICd0YWcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogWycnLCB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B0YWcuJDEnIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckMkBrZXl3b3Jkcyc6IFsnJywgeyB0b2tlbjogJ2tleXdvcmQuJDInIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogWycnLCAnJ11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBpZFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFxccyopKCNbYS16QS1aXy1dW1xcdy1dKikvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogWycnLCAndGFnLmlkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJycsIHsgdG9rZW46ICd0YWcuaWQnLCBuZXh0OiAnQHRhZy4kMScgfV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBjbGFzc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFxccyopKFxcLlthLXpBLVpfLV1bXFx3LV0qKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiBbJycsICd0YWcuY2xhc3MnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnJywgeyB0b2tlbjogJ3RhZy5jbGFzcycsIG5leHQ6ICdAdGFnLiQxJyB9XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHBsYWluIHRleHQgd2l0aCBwaXBlXG4gICAgICAgICAgICBbL14oXFxzKikoXFx8LiopJC8sICcnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8ga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl8kXVtcXHckXSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCtcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nczpcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXCInXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCBcIkBzdHJpbmcuJ1wiXVxuICAgICAgICBdLFxuICAgICAgICB0YWc6IFtcbiAgICAgICAgICAgIFsvKFxcLikoXFxzKiQpLywgW3sgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQGJsb2NrVGV4dC4kUzIuJyB9LCAnJ11dLFxuICAgICAgICAgICAgWy9cXHMrLywgeyB0b2tlbjogJycsIG5leHQ6ICdAc2ltcGxlVGV4dCcgfV0sXG4gICAgICAgICAgICAvLyBpZFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8jW2EtekEtWl8tXVtcXHctXSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3RhZy5pZCcsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3RhZy5pZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBjbGFzc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXC5bYS16QS1aXy1dW1xcdy1dKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAndGFnLmNsYXNzJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndGFnLmNsYXNzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIFsvXFwoLywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAYXR0cmlidXRlTGlzdCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2ltcGxlVGV4dDogW1xuICAgICAgICAgICAgWy9bXiNdKyQvLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxuICAgICAgICAgICAgWy9bXiNdKy8sIHsgdG9rZW46ICcnIH1dLFxuICAgICAgICAgICAgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oI3spKFtefV0qKSh9KS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVycG9sYXRpb24uZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2ludGVycG9sYXRpb24uZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3BhbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8jJC8sIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcGFsbCcgfV0sXG4gICAgICAgICAgICBbLyMvLCAnJ11cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cmlidXRlTGlzdDogW1xuICAgICAgICAgICAgWy9cXHMrLywgJyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFx3KykoXFxzKj1cXHMqKShcInwnKS8sXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUubmFtZScsICdkZWxpbWl0ZXInLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0B2YWx1ZS4kMycgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xcdysvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvLC8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUuZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcGFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnYXR0cmlidXRlLmRlbGltaXRlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xcKSQvLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3BhbGwnIH1dLFxuICAgICAgICAgICAgWy9cXCkvLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXihcXHMqKShcXC9cXC8uKikkLywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGJsb2NrVGV4dC4kMS5jb21tZW50JyB9XSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvPCEtLS8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bjb21tZW50JyB9XVxuICAgICAgICBdLFxuICAgICAgICBibG9ja1RleHQ6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXlxccysuKiQvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJFMyXFxcXHMrLiokKSc6IHsgdG9rZW46ICckUzMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcGFsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvLi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wYWxsJyB9XVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1tePFxcLV0rLywgJ2NvbW1lbnQuY29udGVudCddLFxuICAgICAgICAgICAgWy8tLT4vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9bPFxcLV0vLCAnY29tbWVudC5jb250ZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1teXFxcXFwiJyNdKy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQGVzY2FwZXMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuZXNjYXBlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFxcXC4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcGFsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKCN7KShbXn1dKikofSkvLFxuICAgICAgICAgICAgICAgIFsnaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXInLCAnaW50ZXJwb2xhdGlvbicsICdpbnRlcnBvbGF0aW9uLmRlbGltaXRlciddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXCInXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFsbW9zdCBpZGVudGljYWwgdG8gYWJvdmUsIGV4Y2VwdCBmb3IgZXNjYXBlcyBhbmQgdGhlIG91dHB1dCB0b2tlblxuICAgICAgICB2YWx1ZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXlxcXFxcIiddKy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnYXR0cmlidXRlLnZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFxcXC4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIG5leHQ6ICdAcG9wYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2F0dHJpYnV0ZS52YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tcIiddLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9