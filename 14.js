(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
  \************************************************************************************************************************************/
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
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
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" },
        { open: '"', close: '"' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.cs',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'extern',
        'alias',
        'using',
        'bool',
        'decimal',
        'sbyte',
        'byte',
        'short',
        'ushort',
        'int',
        'uint',
        'long',
        'ulong',
        'char',
        'float',
        'double',
        'object',
        'dynamic',
        'string',
        'assembly',
        'is',
        'as',
        'ref',
        'out',
        'this',
        'base',
        'new',
        'typeof',
        'void',
        'checked',
        'unchecked',
        'default',
        'delegate',
        'var',
        'const',
        'if',
        'else',
        'switch',
        'case',
        'while',
        'do',
        'for',
        'foreach',
        'in',
        'break',
        'continue',
        'goto',
        'return',
        'throw',
        'try',
        'catch',
        'finally',
        'lock',
        'yield',
        'from',
        'let',
        'where',
        'join',
        'on',
        'equals',
        'into',
        'orderby',
        'ascending',
        'descending',
        'select',
        'group',
        'by',
        'namespace',
        'partial',
        'class',
        'field',
        'event',
        'method',
        'param',
        'property',
        'public',
        'protected',
        'internal',
        'private',
        'abstract',
        'sealed',
        'static',
        'struct',
        'readonly',
        'volatile',
        'virtual',
        'override',
        'params',
        'get',
        'set',
        'add',
        'remove',
        'operator',
        'true',
        'false',
        'implicit',
        'explicit',
        'interface',
        'enum',
        'null',
        'async',
        'await',
        'fixed',
        'sizeof',
        'stackalloc',
        'unsafe',
        'nameof',
        'when'
    ],
    namespaceFollows: ['namespace', 'using'],
    parenFollows: ['if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'],
    operators: [
        '=',
        '??',
        '||',
        '&&',
        '|',
        '^',
        '&',
        '==',
        '!=',
        '<=',
        '>=',
        '<<',
        '+',
        '-',
        '*',
        '/',
        '%',
        '!',
        '~',
        '++',
        '--',
        '+=',
        '-=',
        '*=',
        '/=',
        '%=',
        '&=',
        '|=',
        '^=',
        '<<=',
        '>>=',
        '>>',
        '=>'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // escape sequences
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /\@?[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@namespaceFollows': {
                            token: 'keyword.$0',
                            next: '@namespace'
                        },
                        '@keywords': {
                            token: 'keyword.$0',
                            next: '@qualified'
                        },
                        '@default': { token: 'identifier', next: '@qualified' }
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [
                /}/,
                {
                    cases: {
                        '$S2==interpolatedstring': {
                            token: 'string.quote',
                            next: '@pop'
                        },
                        '$S2==litinterpstring': {
                            token: 'string.quote',
                            next: '@pop'
                        },
                        '@default': '@brackets'
                    }
                }
            ],
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
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
            [/[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],
            [/0[bB][01_]+/, 'number.hex'],
            [/[0-9_]+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', next: '@string' }],
            [/\$\@"/, { token: 'string.quote', next: '@litinterpstring' }],
            [/\@"/, { token: 'string.quote', next: '@litstring' }],
            [/\$"/, { token: 'string.quote', next: '@interpolatedstring' }],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        qualified: [
            [
                /[a-zA-Z_][\w]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            [/\./, 'delimiter'],
            ['', '', '@pop']
        ],
        namespace: [
            { include: '@whitespace' },
            [/[A-Z]\w*/, 'namespace'],
            [/[\.=]/, 'delimiter'],
            ['', '', '@pop']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
            ['\\*/', 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litstring: [
            [/[^"]+/, 'string'],
            [/""/, 'string.escape'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litinterpstring: [
            [/[^"{]+/, 'string'],
            [/""/, 'string.escape'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        interpolatedstring: [
            [/[^\\"{]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        whitespace: [
            [/^[ \t\v\f]*#((r)|(load))(?=\s)/, 'directive.csx'],
            [/^[ \t\v\f]*#\w.*$/, 'namespace.cpp'],
            [/[ \t\v\f\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvY3NoYXJwL2NzaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9FQUFvRSxJQUFJLE1BQU07QUFDOUU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxTQUFTLG1EQUFtRDtBQUM1RCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUIseUNBQXlDO0FBQzVELHVCQUF1QixrREFBa0Q7QUFDekUscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIscURBQXFEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGVBQWUsSUFBSSxzREFBc0Q7QUFDekUsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGVBQWUsSUFBSSx5REFBeUQ7QUFDNUUsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcI1xcJFxcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNyZWdpb25cXFxcYicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqI2VuZHJlZ2lvblxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNzJyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnZXh0ZXJuJyxcbiAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgJ3VzaW5nJyxcbiAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAnZGVjaW1hbCcsXG4gICAgICAgICdzYnl0ZScsXG4gICAgICAgICdieXRlJyxcbiAgICAgICAgJ3Nob3J0JyxcbiAgICAgICAgJ3VzaG9ydCcsXG4gICAgICAgICdpbnQnLFxuICAgICAgICAndWludCcsXG4gICAgICAgICdsb25nJyxcbiAgICAgICAgJ3Vsb25nJyxcbiAgICAgICAgJ2NoYXInLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnZG91YmxlJyxcbiAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICdkeW5hbWljJyxcbiAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICdhc3NlbWJseScsXG4gICAgICAgICdpcycsXG4gICAgICAgICdhcycsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAnb3V0JyxcbiAgICAgICAgJ3RoaXMnLFxuICAgICAgICAnYmFzZScsXG4gICAgICAgICduZXcnLFxuICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICd1bmNoZWNrZWQnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkZWxlZ2F0ZScsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZm9yZWFjaCcsXG4gICAgICAgICdpbicsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdnb3RvJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgICd0cnknLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdsb2NrJyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgJ2Zyb20nLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ3doZXJlJyxcbiAgICAgICAgJ2pvaW4nLFxuICAgICAgICAnb24nLFxuICAgICAgICAnZXF1YWxzJyxcbiAgICAgICAgJ2ludG8nLFxuICAgICAgICAnb3JkZXJieScsXG4gICAgICAgICdhc2NlbmRpbmcnLFxuICAgICAgICAnZGVzY2VuZGluZycsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAnZ3JvdXAnLFxuICAgICAgICAnYnknLFxuICAgICAgICAnbmFtZXNwYWNlJyxcbiAgICAgICAgJ3BhcnRpYWwnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnZmllbGQnLFxuICAgICAgICAnZXZlbnQnLFxuICAgICAgICAnbWV0aG9kJyxcbiAgICAgICAgJ3BhcmFtJyxcbiAgICAgICAgJ3Byb3BlcnR5JyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAnaW50ZXJuYWwnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdhYnN0cmFjdCcsXG4gICAgICAgICdzZWFsZWQnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdyZWFkb25seScsXG4gICAgICAgICd2b2xhdGlsZScsXG4gICAgICAgICd2aXJ0dWFsJyxcbiAgICAgICAgJ292ZXJyaWRlJyxcbiAgICAgICAgJ3BhcmFtcycsXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ2FkZCcsXG4gICAgICAgICdyZW1vdmUnLFxuICAgICAgICAnb3BlcmF0b3InLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICdmYWxzZScsXG4gICAgICAgICdpbXBsaWNpdCcsXG4gICAgICAgICdleHBsaWNpdCcsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgJ2FzeW5jJyxcbiAgICAgICAgJ2F3YWl0JyxcbiAgICAgICAgJ2ZpeGVkJyxcbiAgICAgICAgJ3NpemVvZicsXG4gICAgICAgICdzdGFja2FsbG9jJyxcbiAgICAgICAgJ3Vuc2FmZScsXG4gICAgICAgICduYW1lb2YnLFxuICAgICAgICAnd2hlbidcbiAgICBdLFxuICAgIG5hbWVzcGFjZUZvbGxvd3M6IFsnbmFtZXNwYWNlJywgJ3VzaW5nJ10sXG4gICAgcGFyZW5Gb2xsb3dzOiBbJ2lmJywgJ2ZvcicsICd3aGlsZScsICdzd2l0Y2gnLCAnZm9yZWFjaCcsICd1c2luZycsICdjYXRjaCcsICd3aGVuJ10sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc9JyxcbiAgICAgICAgJz8/JyxcbiAgICAgICAgJ3x8JyxcbiAgICAgICAgJyYmJyxcbiAgICAgICAgJ3wnLFxuICAgICAgICAnXicsXG4gICAgICAgICcmJyxcbiAgICAgICAgJz09JyxcbiAgICAgICAgJyE9JyxcbiAgICAgICAgJzw9JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJzw8JyxcbiAgICAgICAgJysnLFxuICAgICAgICAnLScsXG4gICAgICAgICcqJyxcbiAgICAgICAgJy8nLFxuICAgICAgICAnJScsXG4gICAgICAgICchJyxcbiAgICAgICAgJ34nLFxuICAgICAgICAnKysnLFxuICAgICAgICAnLS0nLFxuICAgICAgICAnKz0nLFxuICAgICAgICAnLT0nLFxuICAgICAgICAnKj0nLFxuICAgICAgICAnLz0nLFxuICAgICAgICAnJT0nLFxuICAgICAgICAnJj0nLFxuICAgICAgICAnfD0nLFxuICAgICAgICAnXj0nLFxuICAgICAgICAnPDw9JyxcbiAgICAgICAgJz4+PScsXG4gICAgICAgICc+PicsXG4gICAgICAgICc9PidcbiAgICBdLFxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIC8vIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFxAP1thLXpBLVpfXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAbmFtZXNwYWNlRm9sbG93cyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQuJDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAbmFtZXNwYWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLiQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHF1YWxpZmllZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicsIG5leHQ6ICdAcXVhbGlmaWVkJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvfS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09aW50ZXJwb2xhdGVkc3RyaW5nJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLnF1b3RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHBvcCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1saXRpbnRlcnBzdHJpbmcnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdAYnJhY2tldHMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BzeW1ib2xzLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1swLTlfXSpcXC5bMC05X10rKFtlRV1bXFwtK10/XFxkKyk/W2ZGZERdPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMFtiQl1bMDFfXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9bMC05X10rLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXFwkXFxAXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BsaXRpbnRlcnBzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cXEBcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGxpdHN0cmluZycgfV0sXG4gICAgICAgICAgICBbL1xcJFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cbiAgICAgICAgXSxcbiAgICAgICAgcXVhbGlmaWVkOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVtcXHddKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cXC4vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWVzcGFjZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbL1tBLVpdXFx3Ki8sICduYW1lc3BhY2UnXSxcbiAgICAgICAgICAgIFsvW1xcLj1dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWycnLCAnJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgICAgJ2NvbW1lbnQnLCAnQHB1c2gnIF0sICAgIC8vIG5vIG5lc3RlZCBjb21tZW50cyA6LShcbiAgICAgICAgICAgIFsnXFxcXCovJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgbGl0c3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBsaXRpbnRlcnBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIntdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL3t7LywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvfX0vLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy97LywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdyb290LmxpdGludGVycHN0cmluZycgfV0sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBpbnRlcnBvbGF0ZWRzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJ7XSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL3t7LywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvfX0vLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy97LywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdyb290LmludGVycG9sYXRlZHN0cmluZycgfV0sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL15bIFxcdFxcdlxcZl0qIygocil8KGxvYWQpKSg/PVxccykvLCAnZGlyZWN0aXZlLmNzeCddLFxuICAgICAgICAgICAgWy9eWyBcXHRcXHZcXGZdKiNcXHcuKiQvLCAnbmFtZXNwYWNlLmNwcCddLFxuICAgICAgICAgICAgWy9bIFxcdFxcdlxcZlxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==