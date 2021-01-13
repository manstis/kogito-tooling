(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js ***!
  \**********************************************************************************************************************************/
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
    /*
     * `...` is allowed as an identifier.
     * $ is allowed in identifiers.
     * unary_<op> is allowed as an identifier.
     * <name>_= is allowed as an identifier.
     */
    wordPattern: /(unary_[@~!#%^&*()\-=+\\|:<>\/?]+)|([a-zA-Z_$][\w$]*?_=)|(`[^`]+`)|([a-zA-Z_$][\w$]*)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))'),
            end: new RegExp('^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))')
        }
    }
};
var language = {
    tokenPostfix: '.scala',
    // We can't easily add everything from Dotty, but we can at least add some of its keywords
    keywords: [
        'asInstanceOf',
        'catch',
        'class',
        'classOf',
        'def',
        'do',
        'else',
        'extends',
        'finally',
        'for',
        'foreach',
        'forSome',
        'if',
        'import',
        'isInstanceOf',
        'macro',
        'match',
        'new',
        'object',
        'package',
        'return',
        'throw',
        'trait',
        'try',
        'type',
        'until',
        'val',
        'var',
        'while',
        'with',
        'yield',
        // Dotty-specific:
        'given',
        'enum',
        'then'
    ],
    // Dotty-specific:
    softKeywords: ['as', 'export', 'extension', 'end', 'derives', 'on'],
    constants: ['true', 'false', 'null', 'this', 'super'],
    modifiers: [
        'abstract',
        'final',
        'implicit',
        'lazy',
        'override',
        'private',
        'protected',
        'sealed'
    ],
    // Dotty-specific:
    softModifiers: ['inline', 'opaque', 'open', 'transparent', 'using'],
    name: /(?:[a-z_$][\w$]*|`[^`]+`)/,
    type: /(?:[A-Z][\w$]*)/,
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/^\\%@#]+/,
    digits: /\d+(_+\d+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    // C# style strings
    escapes: /\\(?:[btnfr\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    fstring_conv: /[bBhHsScCdoxXeEfgGaAt]|[Tn](?:[HIklMSLNpzZsQ]|[BbhAaCYyjmde]|[RTrDFC])/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // strings
            [/\braw"""/, { token: 'string.quote', bracket: '@open', next: '@rawstringt' }],
            [/\braw"/, { token: 'string.quote', bracket: '@open', next: '@rawstring' }],
            [/\bs"""/, { token: 'string.quote', bracket: '@open', next: '@sstringt' }],
            [/\bs"/, { token: 'string.quote', bracket: '@open', next: '@sstring' }],
            [/\bf""""/, { token: 'string.quote', bracket: '@open', next: '@fstringt' }],
            [/\bf"/, { token: 'string.quote', bracket: '@open', next: '@fstring' }],
            [/"""/, { token: 'string.quote', bracket: '@open', next: '@stringt' }],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float', '@allowMethod'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, 'number.float', '@allowMethod'],
            [/0[xX](@hexdigits)[Ll]?/, 'number.hex', '@allowMethod'],
            [/(@digits)[fFdD]/, 'number.float', '@allowMethod'],
            [/(@digits)[lL]?/, 'number', '@allowMethod'],
            [/\b_\*/, 'key'],
            [/\b(_)\b/, 'keyword', '@allowMethod'],
            // identifiers and keywords
            [/\bimport\b/, 'keyword', '@import'],
            [/\b(case)([ \t]+)(class)\b/, ['keyword.modifier', 'white', 'keyword']],
            [/\bcase\b/, 'keyword', '@case'],
            [/\bva[lr]\b/, 'keyword', '@vardef'],
            [
                /\b(def)([ \t]+)((?:unary_)?@symbols|@name(?:_=)|@name)/,
                ['keyword', 'white', 'identifier']
            ],
            [/@name(?=[ \t]*:(?!:))/, 'variable'],
            [/(\.)(@name|@symbols)/, ['operator', { token: '@rematch', next: '@allowMethod' }]],
            [/([{(])(\s*)(@name(?=\s*=>))/, ['@brackets', 'white', 'variable']],
            [
                /@name/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@softKeywords': 'keyword',
                        '@modifiers': 'keyword.modifier',
                        '@softModifiers': 'keyword.modifier',
                        '@constants': {
                            token: 'constant',
                            next: '@allowMethod'
                        },
                        '@default': {
                            token: 'identifier',
                            next: '@allowMethod'
                        }
                    }
                }
            ],
            [/@type/, 'type', '@allowMethod'],
            // whitespace
            { include: '@whitespace' },
            // @ annotations.
            [/@[a-zA-Z_$][\w$]*(?:\.[a-zA-Z_$][\w$]*)*/, 'annotation'],
            // delimiters and operators
            [/[{(]/, '@brackets'],
            [/[})]/, '@brackets', '@allowMethod'],
            [/\[/, 'operator.square'],
            [/](?!\s*(?:va[rl]|def|type)\b)/, 'operator.square', '@allowMethod'],
            [/]/, 'operator.square'],
            [/([=-]>|<-|>:|<:|:>|<%)(?=[\s\w()[\]{},\."'`])/, 'keyword'],
            [/@symbols/, 'operator'],
            // delimiter: after number because of .\d floats
            [/[;,\.]/, 'delimiter'],
            // symbols
            [/'[a-zA-Z$][\w$]*(?!')/, 'attribute.name'],
            // characters
            [/'[^\\']'/, 'string', '@allowMethod'],
            [
                /(')(@escapes)(')/,
                ['string', 'string.escape', { token: 'string', next: '@allowMethod' }]
            ],
            [/'/, 'string.invalid']
        ],
        import: [
            [/;/, 'delimiter', '@pop'],
            [/^|$/, '', '@pop'],
            [/[ \t]+/, 'white'],
            [/[\n\r]+/, 'white', '@pop'],
            [/\/\*/, 'comment', '@comment'],
            [/@name|@type/, 'type'],
            [/[(){}]/, '@brackets'],
            [/[[\]]/, 'operator.square'],
            [/[\.,]/, 'delimiter']
        ],
        allowMethod: [
            [/^|$/, '', '@pop'],
            [/[ \t]+/, 'white'],
            [/[\n\r]+/, 'white', '@pop'],
            [/\/\*/, 'comment', '@comment'],
            [/(?==>[\s\w([{])/, 'keyword', '@pop'],
            [
                /(@name|@symbols)(?=[ \t]*[[({"'`]|[ \t]+(?:[+-]?\.?\d|\w))/,
                {
                    cases: {
                        '@keywords': { token: 'keyword', next: '@pop' },
                        '->|<-|>:|<:|<%': { token: 'keyword', next: '@pop' },
                        '@default': { token: '@rematch', next: '@pop' }
                    }
                }
            ],
            ['', '', '@pop']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        case: [
            [/\b_\*/, 'key'],
            [/\b(_|true|false|null|this|super)\b/, 'keyword', '@allowMethod'],
            [/\bif\b|=>/, 'keyword', '@pop'],
            [/`[^`]+`/, 'identifier', '@allowMethod'],
            [/@name/, 'variable', '@allowMethod'],
            [/:::?|\||@(?![a-z_$])/, 'keyword'],
            { include: '@root' }
        ],
        vardef: [
            [/\b_\*/, 'key'],
            [/\b(_|true|false|null|this|super)\b/, 'keyword'],
            [/@name/, 'variable'],
            [/:::?|\||@(?![a-z_$])/, 'keyword'],
            [/=|:(?!:)/, 'operator', '@pop'],
            [/$/, 'white', '@pop'],
            { include: '@root' }
        ],
        string: [
            [/[^\\"\n\r]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ]
        ],
        stringt: [
            [/[^\\"\n\r]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/"/, 'string']
        ],
        fstring: [
            [/@escapes/, 'string.escape'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/%%/, 'string'],
            [
                /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                ['metatag', 'keyword.modifier', 'number', 'metatag']
            ],
            [/(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/, ['metatag', 'number', 'metatag']],
            [/(%)([\-#+ 0,(])(@fstring_conv)/, ['metatag', 'keyword.modifier', 'metatag']],
            [/(%)(@fstring_conv)/, ['metatag', 'metatag']],
            [/./, 'string']
        ],
        fstringt: [
            [/@escapes/, 'string.escape'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/%%/, 'string'],
            [
                /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                ['metatag', 'keyword.modifier', 'number', 'metatag']
            ],
            [/(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/, ['metatag', 'number', 'metatag']],
            [/(%)([\-#+ 0,(])(@fstring_conv)/, ['metatag', 'keyword.modifier', 'metatag']],
            [/(%)(@fstring_conv)/, ['metatag', 'metatag']],
            [/./, 'string']
        ],
        sstring: [
            [/@escapes/, 'string.escape'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/./, 'string']
        ],
        sstringt: [
            [/@escapes/, 'string.escape'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/\$\$/, 'string'],
            [/(\$)([a-z_]\w*)/, ['operator', 'identifier']],
            [/\$\{/, 'operator', '@interp'],
            [/./, 'string']
        ],
        interp: [[/{/, 'operator', '@push'], [/}/, 'operator', '@pop'], { include: '@root' }],
        rawstring: [
            [/[^"]/, 'string'],
            [
                /"/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ]
        ],
        rawstringt: [
            [/[^"]/, 'string'],
            [/"(?=""")/, 'string'],
            [
                /"""/,
                {
                    token: 'string.quote',
                    bracket: '@close',
                    switchTo: '@allowMethod'
                }
            ],
            [/"/, 'string']
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2NhbGEvc2NhbGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrREFBK0Q7QUFDekYsd0JBQXdCLDhEQUE4RDtBQUN0Rix3QkFBd0IsNkRBQTZEO0FBQ3JGLHNCQUFzQiw0REFBNEQ7QUFDbEYseUJBQXlCLDZEQUE2RDtBQUN0RixzQkFBc0IsNERBQTREO0FBQ2xGLHFCQUFxQiw0REFBNEQ7QUFDakYsbUJBQW1CLDJEQUEyRDtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMENBQTBDO0FBQzdGLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHdDQUF3QztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLHNDQUFzQyxpQ0FBaUM7QUFDdkUsMkNBQTJDLGlDQUFpQztBQUM1RSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0Qix5QkFBeUIsbUJBQW1CO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgLypcbiAgICAgKiBgLi4uYCBpcyBhbGxvd2VkIGFzIGFuIGlkZW50aWZpZXIuXG4gICAgICogJCBpcyBhbGxvd2VkIGluIGlkZW50aWZpZXJzLlxuICAgICAqIHVuYXJ5XzxvcD4gaXMgYWxsb3dlZCBhcyBhbiBpZGVudGlmaWVyLlxuICAgICAqIDxuYW1lPl89IGlzIGFsbG93ZWQgYXMgYW4gaWRlbnRpZmllci5cbiAgICAgKi9cbiAgICB3b3JkUGF0dGVybjogLyh1bmFyeV9bQH4hIyVeJiooKVxcLT0rXFxcXHw6PD5cXC8/XSspfChbYS16QS1aXyRdW1xcdyRdKj9fPSl8KGBbXmBdK2ApfChbYS16QS1aXyRdW1xcdyRdKikvZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqLy9cXFxccyooPzooPzojP3JlZ2lvblxcXFxiKXwoPzo8ZWRpdG9yLWZvbGRcXFxcYikpJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyovL1xcXFxzKig/Oig/OiM/ZW5kcmVnaW9uXFxcXGIpfCg/OjwvZWRpdG9yLWZvbGQ+KSknKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNjYWxhJyxcbiAgICAvLyBXZSBjYW4ndCBlYXNpbHkgYWRkIGV2ZXJ5dGhpbmcgZnJvbSBEb3R0eSwgYnV0IHdlIGNhbiBhdCBsZWFzdCBhZGQgc29tZSBvZiBpdHMga2V5d29yZHNcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnYXNJbnN0YW5jZU9mJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NsYXNzT2YnLFxuICAgICAgICAnZGVmJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZXh0ZW5kcycsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmb3JlYWNoJyxcbiAgICAgICAgJ2ZvclNvbWUnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2lzSW5zdGFuY2VPZicsXG4gICAgICAgICdtYWNybycsXG4gICAgICAgICdtYXRjaCcsXG4gICAgICAgICduZXcnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ3BhY2thZ2UnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ3RyYWl0JyxcbiAgICAgICAgJ3RyeScsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ3ZhbCcsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd5aWVsZCcsXG4gICAgICAgIC8vIERvdHR5LXNwZWNpZmljOlxuICAgICAgICAnZ2l2ZW4nLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICd0aGVuJ1xuICAgIF0sXG4gICAgLy8gRG90dHktc3BlY2lmaWM6XG4gICAgc29mdEtleXdvcmRzOiBbJ2FzJywgJ2V4cG9ydCcsICdleHRlbnNpb24nLCAnZW5kJywgJ2Rlcml2ZXMnLCAnb24nXSxcbiAgICBjb25zdGFudHM6IFsndHJ1ZScsICdmYWxzZScsICdudWxsJywgJ3RoaXMnLCAnc3VwZXInXSxcbiAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2ZpbmFsJyxcbiAgICAgICAgJ2ltcGxpY2l0JyxcbiAgICAgICAgJ2xhenknLFxuICAgICAgICAnb3ZlcnJpZGUnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAnc2VhbGVkJ1xuICAgIF0sXG4gICAgLy8gRG90dHktc3BlY2lmaWM6XG4gICAgc29mdE1vZGlmaWVyczogWydpbmxpbmUnLCAnb3BhcXVlJywgJ29wZW4nLCAndHJhbnNwYXJlbnQnLCAndXNpbmcnXSxcbiAgICBuYW1lOiAvKD86W2Etel8kXVtcXHckXSp8YFteYF0rYCkvLFxuICAgIHR5cGU6IC8oPzpbQS1aXVtcXHckXSopLyxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL15cXFxcJUAjXSsvLFxuICAgIGRpZ2l0czogL1xcZCsoXytcXGQrKSovLFxuICAgIGhleGRpZ2l0czogL1tbMC05YS1mQS1GXSsoXytbMC05YS1mQS1GXSspKi8sXG4gICAgLy8gQyMgc3R5bGUgc3RyaW5nc1xuICAgIGVzY2FwZXM6IC9cXFxcKD86W2J0bmZyXFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIGZzdHJpbmdfY29udjogL1tiQmhIc1NjQ2RveFhlRWZnR2FBdF18W1RuXSg/OltISWtsTVNMTnB6WnNRXXxbQmJoQWFDWXlqbWRlXXxbUlRyREZDXSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1xcYnJhd1wiXCJcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHJhd3N0cmluZ3QnIH1dLFxuICAgICAgICAgICAgWy9cXGJyYXdcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHJhd3N0cmluZycgfV0sXG4gICAgICAgICAgICBbL1xcYnNcIlwiXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0Bzc3RyaW5ndCcgfV0sXG4gICAgICAgICAgICBbL1xcYnNcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQHNzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cXGJmXCJcIlwiXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0Bmc3RyaW5ndCcgfV0sXG4gICAgICAgICAgICBbL1xcYmZcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQGZzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cIlwiXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmd0JyB9XSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy8oQGRpZ2l0cylbZUVdKFtcXC0rXT8oQGRpZ2l0cykpP1tmRmREXT8vLCAnbnVtYmVyLmZsb2F0JywgJ0BhbGxvd01ldGhvZCddLFxuICAgICAgICAgICAgWy8oQGRpZ2l0cylcXC4oQGRpZ2l0cykoW2VFXVtcXC0rXT8oQGRpZ2l0cykpP1tmRmREXT8vLCAnbnVtYmVyLmZsb2F0JywgJ0BhbGxvd01ldGhvZCddLFxuICAgICAgICAgICAgWy8wW3hYXShAaGV4ZGlnaXRzKVtMbF0/LywgJ251bWJlci5oZXgnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVtmRmREXS8sICdudW1iZXIuZmxvYXQnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVtsTF0/LywgJ251bWJlcicsICdAYWxsb3dNZXRob2QnXSxcbiAgICAgICAgICAgIFsvXFxiX1xcKi8sICdrZXknXSxcbiAgICAgICAgICAgIFsvXFxiKF8pXFxiLywgJ2tleXdvcmQnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFsvXFxiaW1wb3J0XFxiLywgJ2tleXdvcmQnLCAnQGltcG9ydCddLFxuICAgICAgICAgICAgWy9cXGIoY2FzZSkoWyBcXHRdKykoY2xhc3MpXFxiLywgWydrZXl3b3JkLm1vZGlmaWVyJywgJ3doaXRlJywgJ2tleXdvcmQnXV0sXG4gICAgICAgICAgICBbL1xcYmNhc2VcXGIvLCAna2V5d29yZCcsICdAY2FzZSddLFxuICAgICAgICAgICAgWy9cXGJ2YVtscl1cXGIvLCAna2V5d29yZCcsICdAdmFyZGVmJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcYihkZWYpKFsgXFx0XSspKCg/OnVuYXJ5Xyk/QHN5bWJvbHN8QG5hbWUoPzpfPSl8QG5hbWUpLyxcbiAgICAgICAgICAgICAgICBbJ2tleXdvcmQnLCAnd2hpdGUnLCAnaWRlbnRpZmllciddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9AbmFtZSg/PVsgXFx0XSo6KD8hOikpLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbLyhcXC4pKEBuYW1lfEBzeW1ib2xzKS8sIFsnb3BlcmF0b3InLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQGFsbG93TWV0aG9kJyB9XV0sXG4gICAgICAgICAgICBbLyhbeyhdKShcXHMqKShAbmFtZSg/PVxccyo9PikpLywgWydAYnJhY2tldHMnLCAnd2hpdGUnLCAndmFyaWFibGUnXV0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BuYW1lLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bzb2Z0S2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG1vZGlmaWVycyc6ICdrZXl3b3JkLm1vZGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc29mdE1vZGlmaWVycyc6ICdrZXl3b3JkLm1vZGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAY29uc3RhbnRzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnY29uc3RhbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAYWxsb3dNZXRob2QnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BhbGxvd01ldGhvZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL0B0eXBlLywgJ3R5cGUnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIEAgYW5ub3RhdGlvbnMuXG4gICAgICAgICAgICBbL0BbYS16QS1aXyRdW1xcdyRdKig/OlxcLlthLXpBLVpfJF1bXFx3JF0qKSovLCAnYW5ub3RhdGlvbiddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7KF0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1t9KV0vLCAnQGJyYWNrZXRzJywgJ0BhbGxvd01ldGhvZCddLFxuICAgICAgICAgICAgWy9cXFsvLCAnb3BlcmF0b3Iuc3F1YXJlJ10sXG4gICAgICAgICAgICBbL10oPyFcXHMqKD86dmFbcmxdfGRlZnx0eXBlKVxcYikvLCAnb3BlcmF0b3Iuc3F1YXJlJywgJ0BhbGxvd01ldGhvZCddLFxuICAgICAgICAgICAgWy9dLywgJ29wZXJhdG9yLnNxdWFyZSddLFxuICAgICAgICAgICAgWy8oWz0tXT58PC18Pjp8PDp8Oj58PCUpKD89W1xcc1xcdygpW1xcXXt9LFxcLlwiJ2BdKS8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1s7LFxcLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzeW1ib2xzXG4gICAgICAgICAgICBbLydbYS16QS1aJF1bXFx3JF0qKD8hJykvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLygnKShAZXNjYXBlcykoJykvLFxuICAgICAgICAgICAgICAgIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BhbGxvd01ldGhvZCcgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxuICAgICAgICBdLFxuICAgICAgICBpbXBvcnQ6IFtcbiAgICAgICAgICAgIFsvOy8sICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9efCQvLCAnJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvWyBcXHRdKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9bXFxuXFxyXSsvLCAnd2hpdGUnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9AbmFtZXxAdHlwZS8sICd0eXBlJ10sXG4gICAgICAgICAgICBbL1soKXt9XS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvW1tcXF1dLywgJ29wZXJhdG9yLnNxdWFyZSddLFxuICAgICAgICAgICAgWy9bXFwuLF0vLCAnZGVsaW1pdGVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgYWxsb3dNZXRob2Q6IFtcbiAgICAgICAgICAgIFsvXnwkLywgJycsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1sgXFx0XSsvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvW1xcblxccl0rLywgJ3doaXRlJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvKD89PT5bXFxzXFx3KFt7XSkvLCAna2V5d29yZCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhAbmFtZXxAc3ltYm9scykoPz1bIFxcdF0qW1soe1wiJ2BdfFsgXFx0XSsoPzpbKy1dP1xcLj9cXGR8XFx3KSkvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJy0+fDwtfD46fDw6fDwlJzogeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWycnLCAnJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQHB1c2gnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNhc2U6IFtcbiAgICAgICAgICAgIFsvXFxiX1xcKi8sICdrZXknXSxcbiAgICAgICAgICAgIFsvXFxiKF98dHJ1ZXxmYWxzZXxudWxsfHRoaXN8c3VwZXIpXFxiLywgJ2tleXdvcmQnLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbL1xcYmlmXFxifD0+LywgJ2tleXdvcmQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9gW15gXStgLywgJ2lkZW50aWZpZXInLCAnQGFsbG93TWV0aG9kJ10sXG4gICAgICAgICAgICBbL0BuYW1lLywgJ3ZhcmlhYmxlJywgJ0BhbGxvd01ldGhvZCddLFxuICAgICAgICAgICAgWy86Ojo/fFxcfHxAKD8hW2Etel8kXSkvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHJvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgdmFyZGVmOiBbXG4gICAgICAgICAgICBbL1xcYl9cXCovLCAna2V5J10sXG4gICAgICAgICAgICBbL1xcYihffHRydWV8ZmFsc2V8bnVsbHx0aGlzfHN1cGVyKVxcYi8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICBbL0BuYW1lLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbLzo6Oj98XFx8fEAoPyFbYS16XyRdKS8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICBbLz18Oig/ITopLywgJ29wZXJhdG9yJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvJC8sICd3aGl0ZScsICdAcG9wJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcm9vdCcgfVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJcXG5cXHJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQGNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAYWxsb3dNZXRob2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmd0OiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXFxuXFxyXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiKD89XCJcIlwiKS8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCJcIlwiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLnF1b3RlJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BjbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQGFsbG93TWV0aG9kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGZzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5xdW90ZScsXG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXQ6ICdAY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BhbGxvd01ldGhvZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cXCRcXCQvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLyhcXCQpKFthLXpfXVxcdyopLywgWydvcGVyYXRvcicsICdpZGVudGlmaWVyJ11dLFxuICAgICAgICAgICAgWy9cXCRcXHsvLCAnb3BlcmF0b3InLCAnQGludGVycCddLFxuICAgICAgICAgICAgWy8lJS8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKCUpKFtcXC0jKyAwLChdKShcXGQrfFxcLlxcZCt8XFxkK1xcLlxcZCspKEBmc3RyaW5nX2NvbnYpLyxcbiAgICAgICAgICAgICAgICBbJ21ldGF0YWcnLCAna2V5d29yZC5tb2RpZmllcicsICdudW1iZXInLCAnbWV0YXRhZyddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8oJSkoXFxkK3xcXC5cXGQrfFxcZCtcXC5cXGQrKShAZnN0cmluZ19jb252KS8sIFsnbWV0YXRhZycsICdudW1iZXInLCAnbWV0YXRhZyddXSxcbiAgICAgICAgICAgIFsvKCUpKFtcXC0jKyAwLChdKShAZnN0cmluZ19jb252KS8sIFsnbWV0YXRhZycsICdrZXl3b3JkLm1vZGlmaWVyJywgJ21ldGF0YWcnXV0sXG4gICAgICAgICAgICBbLyglKShAZnN0cmluZ19jb252KS8sIFsnbWV0YXRhZycsICdtZXRhdGFnJ11dLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGZzdHJpbmd0OiBbXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIoPz1cIlwiXCIpLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIlwiXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQGNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAYWxsb3dNZXRob2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFwkXFwkLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oXFwkKShbYS16X11cXHcqKS8sIFsnb3BlcmF0b3InLCAnaWRlbnRpZmllciddXSxcbiAgICAgICAgICAgIFsvXFwkXFx7LywgJ29wZXJhdG9yJywgJ0BpbnRlcnAnXSxcbiAgICAgICAgICAgIFsvJSUvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyglKShbXFwtIysgMCwoXSkoXFxkK3xcXC5cXGQrfFxcZCtcXC5cXGQrKShAZnN0cmluZ19jb252KS8sXG4gICAgICAgICAgICAgICAgWydtZXRhdGFnJywgJ2tleXdvcmQubW9kaWZpZXInLCAnbnVtYmVyJywgJ21ldGF0YWcnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvKCUpKFxcZCt8XFwuXFxkK3xcXGQrXFwuXFxkKykoQGZzdHJpbmdfY29udikvLCBbJ21ldGF0YWcnLCAnbnVtYmVyJywgJ21ldGF0YWcnXV0sXG4gICAgICAgICAgICBbLyglKShbXFwtIysgMCwoXSkoQGZzdHJpbmdfY29udikvLCBbJ21ldGF0YWcnLCAna2V5d29yZC5tb2RpZmllcicsICdtZXRhdGFnJ11dLFxuICAgICAgICAgICAgWy8oJSkoQGZzdHJpbmdfY29udikvLCBbJ21ldGF0YWcnLCAnbWV0YXRhZyddXSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBzc3RyaW5nOiBbXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQGNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAYWxsb3dNZXRob2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFwkXFwkLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oXFwkKShbYS16X11cXHcqKS8sIFsnb3BlcmF0b3InLCAnaWRlbnRpZmllciddXSxcbiAgICAgICAgICAgIFsvXFwkXFx7LywgJ29wZXJhdG9yJywgJ0BpbnRlcnAnXSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBzc3RyaW5ndDogW1xuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1wiKD89XCJcIlwiKS8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCJcIlwiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLnF1b3RlJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BjbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQGFsbG93TWV0aG9kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xcJFxcJC8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvKFxcJCkoW2Etel9dXFx3KikvLCBbJ29wZXJhdG9yJywgJ2lkZW50aWZpZXInXV0sXG4gICAgICAgICAgICBbL1xcJFxcey8sICdvcGVyYXRvcicsICdAaW50ZXJwJ10sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgaW50ZXJwOiBbWy97LywgJ29wZXJhdG9yJywgJ0BwdXNoJ10sIFsvfS8sICdvcGVyYXRvcicsICdAcG9wJ10sIHsgaW5jbHVkZTogJ0Byb290JyB9XSxcbiAgICAgICAgcmF3c3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCJdLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5xdW90ZScsXG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXQ6ICdAY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BhbGxvd01ldGhvZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIHJhd3N0cmluZ3Q6IFtcbiAgICAgICAgICAgIFsvW15cIl0vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiKD89XCJcIlwiKS8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCJcIlwiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLnF1b3RlJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BjbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQGFsbG93TWV0aG9kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==