(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/java/java.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/java/java.js ***!
  \********************************************************************************************************************************/
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
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
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
        { open: "'", close: "'" },
        { open: '<', close: '>' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))'),
            end: new RegExp('^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.java',
    keywords: [
        'abstract',
        'continue',
        'for',
        'new',
        'switch',
        'assert',
        'default',
        'goto',
        'package',
        'synchronized',
        'boolean',
        'do',
        'if',
        'private',
        'this',
        'break',
        'double',
        'implements',
        'protected',
        'throw',
        'byte',
        'else',
        'import',
        'public',
        'throws',
        'case',
        'enum',
        'instanceof',
        'return',
        'transient',
        'catch',
        'extends',
        'int',
        'short',
        'try',
        'char',
        'final',
        'interface',
        'static',
        'void',
        'class',
        'finally',
        'long',
        'strictfp',
        'volatile',
        'const',
        'float',
        'native',
        'super',
        'while',
        'true',
        'false'
    ],
    operators: [
        '=',
        '>',
        '<',
        '!',
        '~',
        '?',
        ':',
        '==',
        '<=',
        '>=',
        '!=',
        '&&',
        '||',
        '++',
        '--',
        '+',
        '-',
        '*',
        '/',
        '&',
        '|',
        '^',
        '%',
        '<<',
        '>>',
        '>>>',
        '+=',
        '-=',
        '*=',
        '/=',
        '&=',
        '|=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '>>>='
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
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
            // @ annotations.
            [/@\s*[a-zA-Z_\$][\w\$]*/, 'annotation'],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, 'number.float'],
            [/0[xX](@hexdigits)[Ll]?/, 'number.hex'],
            [/0(@octaldigits)[Ll]?/, 'number.octal'],
            [/0[bB](@binarydigits)[Ll]?/, 'number.binary'],
            [/(@digits)[fFdD]/, 'number.float'],
            [/(@digits)[lL]?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@javadoc'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
            // [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        javadoc: [
            [/[^\/*]+/, 'comment.doc'],
            // [/\/\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(
            [/\/\*/, 'comment.doc.invalid'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvamF2YS9qYXZhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxrRUFBa0UsSUFBSSxNQUFNO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgLy8gdGhlIGRlZmF1bHQgc2VwYXJhdG9ycyBleGNlcHQgYEAkYFxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKi8vXFxcXHMqKD86KD86Iz9yZWdpb25cXFxcYil8KD86PGVkaXRvci1mb2xkXFxcXGIpKScpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqLy9cXFxccyooPzooPzojP2VuZHJlZ2lvblxcXFxiKXwoPzo8L2VkaXRvci1mb2xkPikpJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmphdmEnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdhYnN0cmFjdCcsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnbmV3JyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICdhc3NlcnQnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdnb3RvJyxcbiAgICAgICAgJ3BhY2thZ2UnLFxuICAgICAgICAnc3luY2hyb25pemVkJyxcbiAgICAgICAgJ2Jvb2xlYW4nLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnaWYnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICd0aGlzJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2RvdWJsZScsXG4gICAgICAgICdpbXBsZW1lbnRzJyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgICdieXRlJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICd0aHJvd3MnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2luc3RhbmNlb2YnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3RyYW5zaWVudCcsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdleHRlbmRzJyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICdzaG9ydCcsXG4gICAgICAgICd0cnknLFxuICAgICAgICAnY2hhcicsXG4gICAgICAgICdmaW5hbCcsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdsb25nJyxcbiAgICAgICAgJ3N0cmljdGZwJyxcbiAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgJ25hdGl2ZScsXG4gICAgICAgICdzdXBlcicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ2ZhbHNlJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc9JyxcbiAgICAgICAgJz4nLFxuICAgICAgICAnPCcsXG4gICAgICAgICchJyxcbiAgICAgICAgJ34nLFxuICAgICAgICAnPycsXG4gICAgICAgICc6JyxcbiAgICAgICAgJz09JyxcbiAgICAgICAgJzw9JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJyE9JyxcbiAgICAgICAgJyYmJyxcbiAgICAgICAgJ3x8JyxcbiAgICAgICAgJysrJyxcbiAgICAgICAgJy0tJyxcbiAgICAgICAgJysnLFxuICAgICAgICAnLScsXG4gICAgICAgICcqJyxcbiAgICAgICAgJy8nLFxuICAgICAgICAnJicsXG4gICAgICAgICd8JyxcbiAgICAgICAgJ14nLFxuICAgICAgICAnJScsXG4gICAgICAgICc8PCcsXG4gICAgICAgICc+PicsXG4gICAgICAgICc+Pj4nLFxuICAgICAgICAnKz0nLFxuICAgICAgICAnLT0nLFxuICAgICAgICAnKj0nLFxuICAgICAgICAnLz0nLFxuICAgICAgICAnJj0nLFxuICAgICAgICAnfD0nLFxuICAgICAgICAnXj0nLFxuICAgICAgICAnJT0nLFxuICAgICAgICAnPDw9JyxcbiAgICAgICAgJz4+PScsXG4gICAgICAgICc+Pj49J1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgZGlnaXRzOiAvXFxkKyhfK1xcZCspKi8sXG4gICAgb2N0YWxkaWdpdHM6IC9bMC03XSsoXytbMC03XSspKi8sXG4gICAgYmluYXJ5ZGlnaXRzOiAvWzAtMV0rKF8rWzAtMV0rKSovLFxuICAgIGhleGRpZ2l0czogL1tbMC05YS1mQS1GXSsoXytbMC05YS1mQS1GXSspKi8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aXyRdW1xcdyRdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gQCBhbm5vdGF0aW9ucy5cbiAgICAgICAgICAgIFsvQFxccypbYS16QS1aX1xcJF1bXFx3XFwkXSovLCAnYW5ub3RhdGlvbiddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy8oQGRpZ2l0cylbZUVdKFtcXC0rXT8oQGRpZ2l0cykpP1tmRmREXT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVxcLihAZGlnaXRzKShbZUVdW1xcLStdPyhAZGlnaXRzKSk/W2ZGZERdPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF0oQGhleGRpZ2l0cylbTGxdPy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzAoQG9jdGFsZGlnaXRzKVtMbF0/LywgJ251bWJlci5vY3RhbCddLFxuICAgICAgICAgICAgWy8wW2JCXShAYmluYXJ5ZGlnaXRzKVtMbF0/LywgJ251bWJlci5iaW5hcnknXSxcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpW2ZGZERdLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8oQGRpZ2l0cylbbExdPy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKlxcKig/IVxcLykvLCAnY29tbWVudC5kb2MnLCAnQGphdmFkb2MnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQHB1c2gnIF0sICAgIC8vIG5lc3RlZCBjb21tZW50IG5vdCBhbGxvd2VkIDotKFxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAgICAnY29tbWVudC5pbnZhbGlkJyBdLCAgICAvLyB0aGlzIGJyZWFrcyBibG9jayBjb21tZW50cyBpbiB0aGUgc2hhcGUgb2YgLyogLy8qL1xuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgLy9JZGVudGljYWwgY29weSBvZiBjb21tZW50IGFib3ZlLCBleGNlcHQgZm9yIHRoZSBhZGRpdGlvbiBvZiAuZG9jXG4gICAgICAgIGphdmFkb2M6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudC5kb2MnXSxcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgJ2NvbW1lbnQuZG9jJywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgY29tbWVudCBub3QgYWxsb3dlZCA6LShcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQuZG9jLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQuZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9