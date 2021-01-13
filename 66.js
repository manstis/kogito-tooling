(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js":
/*!********************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ "../../node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    onEnterRules: [
        {
            // e.g. /** | */
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            afterText: /^\s*\*\/$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.IndentOutdent,
                appendText: ' * '
            }
        },
        {
            // e.g. /** ...|
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.None,
                appendText: ' * '
            }
        },
        {
            // e.g.  * ...|
            beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.None,
                appendText: '* '
            }
        },
        {
            // e.g.  */|
            beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.None,
                removeText: 1
            }
        }
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '`', close: '`', notIn: ['string', 'comment'] },
        { open: '/**', close: ' */', notIn: ['string'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*//\\s*#?region\\b'),
            end: new RegExp('^\\s*//\\s*#?endregion\\b')
        }
    }
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.ts',
    keywords: [
        // Should match the keys of textToKeywordObj in
        // https://github.com/microsoft/TypeScript/blob/master/src/compiler/scanner.ts
        'abstract',
        'any',
        'as',
        'asserts',
        'bigint',
        'boolean',
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'const',
        'constructor',
        'debugger',
        'declare',
        'default',
        'delete',
        'do',
        'else',
        'enum',
        'export',
        'extends',
        'false',
        'finally',
        'for',
        'from',
        'function',
        'get',
        'if',
        'implements',
        'import',
        'in',
        'infer',
        'instanceof',
        'interface',
        'is',
        'keyof',
        'let',
        'module',
        'namespace',
        'never',
        'new',
        'null',
        'number',
        'object',
        'package',
        'private',
        'protected',
        'public',
        'readonly',
        'require',
        'global',
        'return',
        'set',
        'static',
        'string',
        'super',
        'switch',
        'symbol',
        'this',
        'throw',
        'true',
        'try',
        'type',
        'typeof',
        'undefined',
        'unique',
        'unknown',
        'var',
        'void',
        'while',
        'with',
        'yield',
        'async',
        'await',
        'of'
    ],
    operators: [
        '<=',
        '>=',
        '==',
        '!=',
        '===',
        '!==',
        '=>',
        '+',
        '-',
        '**',
        '*',
        '/',
        '%',
        '++',
        '--',
        '<<',
        '</',
        '>>',
        '>>>',
        '&',
        '|',
        '^',
        '!',
        '~',
        '&&',
        '||',
        '??',
        '?',
        ':',
        '=',
        '+=',
        '-=',
        '*=',
        '**=',
        '/=',
        '%=',
        '<<=',
        '>>=',
        '>>>=',
        '&=',
        '|=',
        '^=',
        '@'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],
        common: [
            // identifiers and keywords
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ],
            [/[A-Z][\w\$]*/, 'type.identifier'],
            // [/[A-Z][\w\$]*/, 'identifier'],
            // whitespace
            { include: '@whitespace' },
            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
            [
                /\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
                { token: 'regexp', bracket: '@open', next: '@regexp' }
            ],
            // delimiters and operators
            [/[()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/!(?=([^=]|$))/, 'delimiter'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
            [/0[xX](@hexdigits)n?/, 'number.hex'],
            [/0[oO]?(@octaldigits)n?/, 'number.octal'],
            [/0[bB](@binarydigits)n?/, 'number.binary'],
            [/(@digits)n?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string_double'],
            [/'/, 'string', '@string_single'],
            [/`/, 'string', '@string_backtick']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        jsdoc: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        // We match regular expression quite precisely
        regexp: [
            [
                /(\{)(\d+(?:,\d*)?)(\})/,
                ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']
            ],
            [
                /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
                ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]
            ],
            [/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
            [/[()]/, 'regexp.escape.control'],
            [/@regexpctl/, 'regexp.escape.control'],
            [/[^\\\/]/, 'regexp'],
            [/@regexpesc/, 'regexp.escape'],
            [/\\\./, 'regexp.invalid'],
            [
                /(\/)([gimsuy]*)/,
                [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']
            ]
        ],
        regexrange: [
            [/-/, 'regexp.escape.control'],
            [/\^/, 'regexp.invalid'],
            [/@regexpesc/, 'regexp.escape'],
            [/[^\]]/, 'regexp'],
            [
                /\]/,
                {
                    token: 'regexp.escape.control',
                    next: '@pop',
                    bracket: '@close'
                }
            ]
        ],
        string_double: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        string_single: [
            [/[^\\']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/'/, 'string', '@pop']
        ],
        string_backtick: [
            [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
            [/[^\\`$]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/`/, 'string', '@pop']
        ],
        bracketCounting: [
            [/\{/, 'delimiter.bracket', '@bracketCounting'],
            [/\}/, 'delimiter.bracket', '@pop'],
            { include: 'common' }
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvdHlwZXNjcmlwdC90eXBlc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzZEO0FBQ3REO0FBQ1Asb0VBQW9FLElBQUksTUFBTTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdFQUFTO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0VBQVM7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3RUFBUztBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdFQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIseUVBQXlFLEVBQUUsY0FBYyxFQUFFO0FBQzNGO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCLG9CQUFvQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBLDJEQUEyRCxXQUFXO0FBQ3RFLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxzREFBc0Q7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFtRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksdURBQXVEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiO0FBQ0E7QUFDQSIsImZpbGUiOiI2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi4vZmlsbGVycy9tb25hY28tZWRpdG9yLWNvcmUuanMnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBvbkVudGVyUnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZS5nLiAvKiogfCAqL1xuICAgICAgICAgICAgYmVmb3JlVGV4dDogL15cXHMqXFwvXFwqXFwqKD8hXFwvKShbXlxcKl18XFwqKD8hXFwvKSkqJC8sXG4gICAgICAgICAgICBhZnRlclRleHQ6IC9eXFxzKlxcKlxcLyQvLFxuICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgaW5kZW50QWN0aW9uOiBsYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudE91dGRlbnQsXG4gICAgICAgICAgICAgICAgYXBwZW5kVGV4dDogJyAqICdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZS5nLiAvKiogLi4ufFxuICAgICAgICAgICAgYmVmb3JlVGV4dDogL15cXHMqXFwvXFwqXFwqKD8hXFwvKShbXlxcKl18XFwqKD8hXFwvKSkqJC8sXG4gICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uTm9uZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRUZXh0OiAnICogJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBlLmcuICAqIC4uLnxcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IC9eKFxcdHwoXFwgXFwgKSkqXFwgXFwqKFxcIChbXlxcKl18XFwqKD8hXFwvKSkqKT8kLyxcbiAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgIGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5Ob25lLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRleHQ6ICcqICdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZS5nLiAgKi98XG4gICAgICAgICAgICBiZWZvcmVUZXh0OiAvXihcXHR8KFxcIFxcICkpKlxcIFxcKlxcL1xccyokLyxcbiAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgIGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5Ob25lLFxuICAgICAgICAgICAgICAgIHJlbW92ZVRleHQ6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnLyoqJywgY2xvc2U6ICcgKi8nLCBub3RJbjogWydzdHJpbmcnXSB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqLy9cXFxccyojP3JlZ2lvblxcXFxiJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyovL1xcXFxzKiM/ZW5kcmVnaW9uXFxcXGInKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XG4gICAgZGVmYXVsdFRva2VuOiAnaW52YWxpZCcsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnRzJyxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAvLyBTaG91bGQgbWF0Y2ggdGhlIGtleXMgb2YgdGV4dFRvS2V5d29yZE9iaiBpblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi9tYXN0ZXIvc3JjL2NvbXBpbGVyL3NjYW5uZXIudHNcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2FueScsXG4gICAgICAgICdhcycsXG4gICAgICAgICdhc3NlcnRzJyxcbiAgICAgICAgJ2JpZ2ludCcsXG4gICAgICAgICdib29sZWFuJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnY29uc3RydWN0b3InLFxuICAgICAgICAnZGVidWdnZXInLFxuICAgICAgICAnZGVjbGFyZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlbGV0ZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VudW0nLFxuICAgICAgICAnZXhwb3J0JyxcbiAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW1wbGVtZW50cycsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnaW5mZXInLFxuICAgICAgICAnaW5zdGFuY2VvZicsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnaXMnLFxuICAgICAgICAna2V5b2YnLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ21vZHVsZScsXG4gICAgICAgICduYW1lc3BhY2UnLFxuICAgICAgICAnbmV2ZXInLFxuICAgICAgICAnbmV3JyxcbiAgICAgICAgJ251bGwnLFxuICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICdwYWNrYWdlJyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdyZWFkb25seScsXG4gICAgICAgICdyZXF1aXJlJyxcbiAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzdHJpbmcnLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ3N5bWJvbCcsXG4gICAgICAgICd0aGlzJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgJ3VuZGVmaW5lZCcsXG4gICAgICAgICd1bmlxdWUnLFxuICAgICAgICAndW5rbm93bicsXG4gICAgICAgICd2YXInLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgJ2FzeW5jJyxcbiAgICAgICAgJ2F3YWl0JyxcbiAgICAgICAgJ29mJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc8PScsXG4gICAgICAgICc+PScsXG4gICAgICAgICc9PScsXG4gICAgICAgICchPScsXG4gICAgICAgICc9PT0nLFxuICAgICAgICAnIT09JyxcbiAgICAgICAgJz0+JyxcbiAgICAgICAgJysnLFxuICAgICAgICAnLScsXG4gICAgICAgICcqKicsXG4gICAgICAgICcqJyxcbiAgICAgICAgJy8nLFxuICAgICAgICAnJScsXG4gICAgICAgICcrKycsXG4gICAgICAgICctLScsXG4gICAgICAgICc8PCcsXG4gICAgICAgICc8LycsXG4gICAgICAgICc+PicsXG4gICAgICAgICc+Pj4nLFxuICAgICAgICAnJicsXG4gICAgICAgICd8JyxcbiAgICAgICAgJ14nLFxuICAgICAgICAnIScsXG4gICAgICAgICd+JyxcbiAgICAgICAgJyYmJyxcbiAgICAgICAgJ3x8JyxcbiAgICAgICAgJz8/JyxcbiAgICAgICAgJz8nLFxuICAgICAgICAnOicsXG4gICAgICAgICc9JyxcbiAgICAgICAgJys9JyxcbiAgICAgICAgJy09JyxcbiAgICAgICAgJyo9JyxcbiAgICAgICAgJyoqPScsXG4gICAgICAgICcvPScsXG4gICAgICAgICclPScsXG4gICAgICAgICc8PD0nLFxuICAgICAgICAnPj49JyxcbiAgICAgICAgJz4+Pj0nLFxuICAgICAgICAnJj0nLFxuICAgICAgICAnfD0nLFxuICAgICAgICAnXj0nLFxuICAgICAgICAnQCdcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIGRpZ2l0czogL1xcZCsoXytcXGQrKSovLFxuICAgIG9jdGFsZGlnaXRzOiAvWzAtN10rKF8rWzAtN10rKSovLFxuICAgIGJpbmFyeWRpZ2l0czogL1swLTFdKyhfK1swLTFdKykqLyxcbiAgICBoZXhkaWdpdHM6IC9bWzAtOWEtZkEtRl0rKF8rWzAtOWEtZkEtRl0rKSovLFxuICAgIHJlZ2V4cGN0bDogL1soKXt9XFxbXFxdXFwkXFxefFxcLSorP1xcLl0vLFxuICAgIHJlZ2V4cGVzYzogL1xcXFwoPzpbYkJkRGZucnN0dndXbjBcXFxcXFwvXXxAcmVnZXhwY3RsfGNbQS1aXXx4WzAtOWEtZkEtRl17Mn18dVswLTlhLWZBLUZdezR9KS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtbL1t7fV0vLCAnZGVsaW1pdGVyLmJyYWNrZXQnXSwgeyBpbmNsdWRlOiAnY29tbW9uJyB9XSxcbiAgICAgICAgY29tbW9uOiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2Etel8kXVtcXHckXSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1tBLVpdW1xcd1xcJF0qLywgJ3R5cGUuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgLy8gWy9bQS1aXVtcXHdcXCRdKi8sICdpZGVudGlmaWVyJ10sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgZXhwcmVzc2lvbjogZW5zdXJlIGl0IGlzIHRlcm1pbmF0ZWQgYmVmb3JlIGJlZ2lubmluZyAob3RoZXJ3aXNlIGl0IGlzIGFuIG9wZWF0b3IpXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcLyg/PShbXlxcXFxcXC9dfFxcXFwuKStcXC8oW2dpbXN1eV0qKShcXHMqKShcXC58O3wsfFxcKXxcXF18XFx9fCQpKS8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3JlZ2V4cCcsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAcmVnZXhwJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1soKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbLyEoPz0oW149XXwkKSkvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BzeW1ib2xzLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVtlRV0oW1xcLStdPyhAZGlnaXRzKSk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8oQGRpZ2l0cylcXC4oQGRpZ2l0cykoW2VFXVtcXC0rXT8oQGRpZ2l0cykpPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF0oQGhleGRpZ2l0cyluPy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzBbb09dPyhAb2N0YWxkaWdpdHMpbj8vLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbYkJdKEBiaW5hcnlkaWdpdHMpbj8vLCAnbnVtYmVyLmJpbmFyeSddLFxuICAgICAgICAgICAgWy8oQGRpZ2l0cyluPy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nKFteJ1xcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nX2RvdWJsZSddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nX3NpbmdsZSddLFxuICAgICAgICAgICAgWy9gLywgJ3N0cmluZycsICdAc3RyaW5nX2JhY2t0aWNrJ11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy9cXC9cXCpcXCooPyFcXC8pLywgJ2NvbW1lbnQuZG9jJywgJ0Bqc2RvYyddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAganNkb2M6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudC5kb2MnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQuZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gV2UgbWF0Y2ggcmVndWxhciBleHByZXNzaW9uIHF1aXRlIHByZWNpc2VseVxuICAgICAgICByZWdleHA6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxceykoXFxkKyg/OixcXGQqKT8pKFxcfSkvLFxuICAgICAgICAgICAgICAgIFsncmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxcWykoXFxePykoPz0oPzpbXlxcXVxcXFxcXC9dfFxcXFwuKSspLyxcbiAgICAgICAgICAgICAgICBbJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHJlZ2V4cmFuZ2UnIH1dXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8oXFwoKShcXD86fFxcPz18XFw/ISkvLCBbJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXV0sXG4gICAgICAgICAgICBbL1soKV0vLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJ10sXG4gICAgICAgICAgICBbL0ByZWdleHBjdGwvLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJ10sXG4gICAgICAgICAgICBbL1teXFxcXFxcL10vLCAncmVnZXhwJ10sXG4gICAgICAgICAgICBbL0ByZWdleHBlc2MvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcXFwuLywgJ3JlZ2V4cC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcXC8pKFtnaW1zdXldKikvLFxuICAgICAgICAgICAgICAgIFt7IHRva2VuOiAncmVnZXhwJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9LCAna2V5d29yZC5vdGhlciddXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIHJlZ2V4cmFuZ2U6IFtcbiAgICAgICAgICAgIFsvLS8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvXFxeLywgJ3JlZ2V4cC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL0ByZWdleHBlc2MvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9bXlxcXV0vLCAncmVnZXhwJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcG9wJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BjbG9zZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ19kb3VibGU6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdfc2luZ2xlOiBbXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ19iYWNrdGljazogW1xuICAgICAgICAgICAgWy9cXCRcXHsvLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQGJyYWNrZXRDb3VudGluZycgfV0sXG4gICAgICAgICAgICBbL1teXFxcXGAkXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL2AvLCAnc3RyaW5nJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBicmFja2V0Q291bnRpbmc6IFtcbiAgICAgICAgICAgIFsvXFx7LywgJ2RlbGltaXRlci5icmFja2V0JywgJ0BicmFja2V0Q291bnRpbmcnXSxcbiAgICAgICAgICAgIFsvXFx9LywgJ2RlbGltaXRlci5icmFja2V0JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ2NvbW1vbicgfVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=