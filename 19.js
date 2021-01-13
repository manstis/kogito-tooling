(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js":
/*!************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.js ***!
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
    comments: {
        lineComment: '//',
        blockComment: ['(*', '*)']
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
        { open: '"', close: '"' }
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
            start: new RegExp('^\\s*//\\s*#region\\b|^\\s*\\(\\*\\s*#region(.*)\\*\\)'),
            end: new RegExp('^\\s*//\\s*#endregion\\b|^\\s*\\(\\*\\s*#endregion\\s*\\*\\)')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.fs',
    keywords: [
        'abstract',
        'and',
        'atomic',
        'as',
        'assert',
        'asr',
        'base',
        'begin',
        'break',
        'checked',
        'component',
        'const',
        'constraint',
        'constructor',
        'continue',
        'class',
        'default',
        'delegate',
        'do',
        'done',
        'downcast',
        'downto',
        'elif',
        'else',
        'end',
        'exception',
        'eager',
        'event',
        'external',
        'extern',
        'false',
        'finally',
        'for',
        'fun',
        'function',
        'fixed',
        'functor',
        'global',
        'if',
        'in',
        'include',
        'inherit',
        'inline',
        'interface',
        'internal',
        'land',
        'lor',
        'lsl',
        'lsr',
        'lxor',
        'lazy',
        'let',
        'match',
        'member',
        'mod',
        'module',
        'mutable',
        'namespace',
        'method',
        'mixin',
        'new',
        'not',
        'null',
        'of',
        'open',
        'or',
        'object',
        'override',
        'private',
        'parallel',
        'process',
        'protected',
        'pure',
        'public',
        'rec',
        'return',
        'static',
        'sealed',
        'struct',
        'sig',
        'then',
        'to',
        'true',
        'tailcall',
        'trait',
        'try',
        'type',
        'upcast',
        'use',
        'val',
        'void',
        'virtual',
        'volatile',
        'when',
        'while',
        'with',
        'yield'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\^%;\.,\/]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /[uU]?[yslnLI]?/,
    floatsuffix: /[fFmM]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // [< attributes >].
            [/\[<.*>\]/, 'annotation'],
            // Preprocessor directive
            [/^#(if|else|endif)/, 'keyword'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/0x[0-9a-fA-F]+LF/, 'number.float'],
            [/0x[0-9a-fA-F]+(@integersuffix)/, 'number.hex'],
            [/0b[0-1]+(@integersuffix)/, 'number.bin'],
            [/\d+(@integersuffix)/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"""/, 'string', '@string."""'],
            [/"/, 'string', '@string."'],
            // literal string
            [/\@"/, { token: 'string.quote', next: '@litstring' }],
            // characters
            [/'[^\\']'B?/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\(\*(?!\))/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^*(]+/, 'comment'],
            [/\*\)/, 'comment', '@pop'],
            [/\*/, 'comment'],
            [/\(\*\)/, 'comment'],
            [/\(/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [
                /("""|"B?)/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ]
        ],
        litstring: [
            [/[^"]+/, 'string'],
            [/""/, 'string.escape'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvZnNoYXJwL2ZzaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBNEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnKConLCAnKiknXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKi8vXFxcXHMqI3JlZ2lvblxcXFxifF5cXFxccypcXFxcKFxcXFwqXFxcXHMqI3JlZ2lvbiguKilcXFxcKlxcXFwpJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyovL1xcXFxzKiNlbmRyZWdpb25cXFxcYnxeXFxcXHMqXFxcXChcXFxcKlxcXFxzKiNlbmRyZWdpb25cXFxccypcXFxcKlxcXFwpJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmZzJyxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnYWJzdHJhY3QnLFxuICAgICAgICAnYW5kJyxcbiAgICAgICAgJ2F0b21pYycsXG4gICAgICAgICdhcycsXG4gICAgICAgICdhc3NlcnQnLFxuICAgICAgICAnYXNyJyxcbiAgICAgICAgJ2Jhc2UnLFxuICAgICAgICAnYmVnaW4nLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICdjb21wb25lbnQnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnY29uc3RyYWludCcsXG4gICAgICAgICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlbGVnYXRlJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2RvbmUnLFxuICAgICAgICAnZG93bmNhc3QnLFxuICAgICAgICAnZG93bnRvJyxcbiAgICAgICAgJ2VsaWYnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbmQnLFxuICAgICAgICAnZXhjZXB0aW9uJyxcbiAgICAgICAgJ2VhZ2VyJyxcbiAgICAgICAgJ2V2ZW50JyxcbiAgICAgICAgJ2V4dGVybmFsJyxcbiAgICAgICAgJ2V4dGVybicsXG4gICAgICAgICdmYWxzZScsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmdW4nLFxuICAgICAgICAnZnVuY3Rpb24nLFxuICAgICAgICAnZml4ZWQnLFxuICAgICAgICAnZnVuY3RvcicsXG4gICAgICAgICdnbG9iYWwnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnaW5jbHVkZScsXG4gICAgICAgICdpbmhlcml0JyxcbiAgICAgICAgJ2lubGluZScsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnaW50ZXJuYWwnLFxuICAgICAgICAnbGFuZCcsXG4gICAgICAgICdsb3InLFxuICAgICAgICAnbHNsJyxcbiAgICAgICAgJ2xzcicsXG4gICAgICAgICdseG9yJyxcbiAgICAgICAgJ2xhenknLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ21hdGNoJyxcbiAgICAgICAgJ21lbWJlcicsXG4gICAgICAgICdtb2QnLFxuICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgJ211dGFibGUnLFxuICAgICAgICAnbmFtZXNwYWNlJyxcbiAgICAgICAgJ21ldGhvZCcsXG4gICAgICAgICdtaXhpbicsXG4gICAgICAgICduZXcnLFxuICAgICAgICAnbm90JyxcbiAgICAgICAgJ251bGwnLFxuICAgICAgICAnb2YnLFxuICAgICAgICAnb3BlbicsXG4gICAgICAgICdvcicsXG4gICAgICAgICdvYmplY3QnLFxuICAgICAgICAnb3ZlcnJpZGUnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdwYXJhbGxlbCcsXG4gICAgICAgICdwcm9jZXNzJyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICdwdXJlJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdyZWMnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzZWFsZWQnLFxuICAgICAgICAnc3RydWN0JyxcbiAgICAgICAgJ3NpZycsXG4gICAgICAgICd0aGVuJyxcbiAgICAgICAgJ3RvJyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAndGFpbGNhbGwnLFxuICAgICAgICAndHJhaXQnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndXBjYXN0JyxcbiAgICAgICAgJ3VzZScsXG4gICAgICAgICd2YWwnLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICd2aXJ0dWFsJyxcbiAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgJ3doZW4nLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd5aWVsZCdcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFxeJTtcXC4sXFwvXSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgaW50ZWdlcnN1ZmZpeDogL1t1VV0/W3lzbG5MSV0/LyxcbiAgICBmbG9hdHN1ZmZpeDogL1tmRm1NXT8vLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBbPCBhdHRyaWJ1dGVzID5dLlxuICAgICAgICAgICAgWy9cXFs8Lio+XFxdLywgJ2Fubm90YXRpb24nXSxcbiAgICAgICAgICAgIC8vIFByZXByb2Nlc3NvciBkaXJlY3RpdmVcbiAgICAgICAgICAgIFsvXiMoaWZ8ZWxzZXxlbmRpZikvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzB4WzAtOWEtZkEtRl0rTEYvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzB4WzAtOWEtZkEtRl0rKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzBiWzAtMV0rKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuYmluJ10sXG4gICAgICAgICAgICBbL1xcZCsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiXCJcIi8sICdzdHJpbmcnLCAnQHN0cmluZy5cIlwiXCInXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXCInXSxcbiAgICAgICAgICAgIC8vIGxpdGVyYWwgc3RyaW5nXG4gICAgICAgICAgICBbL1xcQFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAbGl0c3RyaW5nJyB9XSxcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJ0I/LywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcKFxcKig/IVxcKSkvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW14qKF0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwqXFwpLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cXCovLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXChcXCpcXCkvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXCgvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXCJcIlwifFwiQj8pLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIGxpdHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiXCIvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9