(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        blockComment: ['###', '###'],
        lineComment: '#'
    },
    folding: {
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    ignoreCase: false,
    tokenPostfix: '.mips',
    regEx: /\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,
    keywords: [
        '.data',
        '.text',
        'syscall',
        'trap',
        'add',
        'addu',
        'addi',
        'addiu',
        'and',
        'andi',
        'div',
        'divu',
        'mult',
        'multu',
        'nor',
        'or',
        'ori',
        'sll',
        'slv',
        'sra',
        'srav',
        'srl',
        'srlv',
        'sub',
        'subu',
        'xor',
        'xori',
        'lhi',
        'lho',
        'lhi',
        'llo',
        'slt',
        'slti',
        'sltu',
        'sltiu',
        'beq',
        'bgtz',
        'blez',
        'bne',
        'j',
        'jal',
        'jalr',
        'jr',
        'lb',
        'lbu',
        'lh',
        'lhu',
        'lw',
        'li',
        'la',
        'sb',
        'sh',
        'sw',
        'mfhi',
        'mflo',
        'mthi',
        'mtlo',
        'move'
    ],
    // we include these common regular expressions
    symbols: /[\.,\:]+/,
    escapes: /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/\$[a-zA-Z_]\w*/, 'variable.predefined'],
            [
                /[.a-zA-Z_]\w*/,
                {
                    cases: {
                        this: 'variable.predefined',
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }
            ],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // Comments
            [/#.*$/, 'comment'],
            // regular expressions
            ['///', { token: 'regexp', next: '@hereregexp' }],
            [/^(\s*)(@regEx)/, ['', 'regexp']],
            [/(\,)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            [/(\:)(\s*)(@regEx)/, ['delimiter', '', 'regexp']],
            // delimiters
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/0[0-7]+(?!\d)/, 'number.octal'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[,.]/, 'delimiter'],
            // strings:
            [/"""/, 'string', '@herestring."""'],
            [/'''/, 'string', "@herestring.'''"],
            [
                /"/,
                {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: '@string."' }
                    }
                }
            ],
            [
                /'/,
                {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: "@string.'" }
                    }
                }
            ]
        ],
        string: [
            [/[^"'\#\\]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/\./, 'string.escape.invalid'],
            [
                /#{/,
                {
                    cases: {
                        '$S2=="': {
                            token: 'string',
                            next: 'root.interpolatedstring'
                        },
                        '@default': 'string'
                    }
                }
            ],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ],
            [/#/, 'string']
        ],
        herestring: [
            [
                /("""|''')/,
                {
                    cases: {
                        '$1==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ],
            [/[^#\\'"]+/, 'string'],
            [/['"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\./, 'string.escape.invalid'],
            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/#/, 'string']
        ],
        comment: [
            [/[^#]+/, 'comment'],
            [/#/, 'comment']
        ],
        hereregexp: [
            [/[^\\\/#]+/, 'regexp'],
            [/\\./, 'regexp'],
            [/#.*$/, 'comment'],
            ['///[igm]*', { token: 'regexp', next: '@pop' }],
            [/\//, 'regexp']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbWlwcy9taXBzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AscUVBQXFFLElBQUksTUFBTTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBdUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLElBQUkseURBQXlEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcIyVcXF5cXCZcXCpcXChcXClcXD1cXCRcXC1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWycjIyMnLCAnIyMjJ10sXG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcbiAgICB9LFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyojcmVnaW9uXFxcXGInKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNlbmRyZWdpb25cXFxcYicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIGlnbm9yZUNhc2U6IGZhbHNlLFxuICAgIHRva2VuUG9zdGZpeDogJy5taXBzJyxcbiAgICByZWdFeDogL1xcLyg/IVxcL1xcLykoPzpbXlxcL1xcXFxdfFxcXFwuKSpcXC9baWdtXSovLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICcuZGF0YScsXG4gICAgICAgICcudGV4dCcsXG4gICAgICAgICdzeXNjYWxsJyxcbiAgICAgICAgJ3RyYXAnLFxuICAgICAgICAnYWRkJyxcbiAgICAgICAgJ2FkZHUnLFxuICAgICAgICAnYWRkaScsXG4gICAgICAgICdhZGRpdScsXG4gICAgICAgICdhbmQnLFxuICAgICAgICAnYW5kaScsXG4gICAgICAgICdkaXYnLFxuICAgICAgICAnZGl2dScsXG4gICAgICAgICdtdWx0JyxcbiAgICAgICAgJ211bHR1JyxcbiAgICAgICAgJ25vcicsXG4gICAgICAgICdvcicsXG4gICAgICAgICdvcmknLFxuICAgICAgICAnc2xsJyxcbiAgICAgICAgJ3NsdicsXG4gICAgICAgICdzcmEnLFxuICAgICAgICAnc3JhdicsXG4gICAgICAgICdzcmwnLFxuICAgICAgICAnc3JsdicsXG4gICAgICAgICdzdWInLFxuICAgICAgICAnc3VidScsXG4gICAgICAgICd4b3InLFxuICAgICAgICAneG9yaScsXG4gICAgICAgICdsaGknLFxuICAgICAgICAnbGhvJyxcbiAgICAgICAgJ2xoaScsXG4gICAgICAgICdsbG8nLFxuICAgICAgICAnc2x0JyxcbiAgICAgICAgJ3NsdGknLFxuICAgICAgICAnc2x0dScsXG4gICAgICAgICdzbHRpdScsXG4gICAgICAgICdiZXEnLFxuICAgICAgICAnYmd0eicsXG4gICAgICAgICdibGV6JyxcbiAgICAgICAgJ2JuZScsXG4gICAgICAgICdqJyxcbiAgICAgICAgJ2phbCcsXG4gICAgICAgICdqYWxyJyxcbiAgICAgICAgJ2pyJyxcbiAgICAgICAgJ2xiJyxcbiAgICAgICAgJ2xidScsXG4gICAgICAgICdsaCcsXG4gICAgICAgICdsaHUnLFxuICAgICAgICAnbHcnLFxuICAgICAgICAnbGknLFxuICAgICAgICAnbGEnLFxuICAgICAgICAnc2InLFxuICAgICAgICAnc2gnLFxuICAgICAgICAnc3cnLFxuICAgICAgICAnbWZoaScsXG4gICAgICAgICdtZmxvJyxcbiAgICAgICAgJ210aGknLFxuICAgICAgICAnbXRsbycsXG4gICAgICAgICdtb3ZlJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bXFwuLFxcOl0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJyRdfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbL1xcJFthLXpBLVpfXVxcdyovLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bLmEtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpczogJ3ZhcmlhYmxlLnByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICAvLyBDb21tZW50c1xuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICAgICAgICAgIFsnLy8vJywgeyB0b2tlbjogJ3JlZ2V4cCcsIG5leHQ6ICdAaGVyZXJlZ2V4cCcgfV0sXG4gICAgICAgICAgICBbL14oXFxzKikoQHJlZ0V4KS8sIFsnJywgJ3JlZ2V4cCddXSxcbiAgICAgICAgICAgIFsvKFxcLCkoXFxzKikoQHJlZ0V4KS8sIFsnZGVsaW1pdGVyJywgJycsICdyZWdleHAnXV0sXG4gICAgICAgICAgICBbLyhcXDopKFxccyopKEByZWdFeCkvLCBbJ2RlbGltaXRlcicsICcnLCAncmVnZXhwJ11dLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyc1xuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkK1tlRV0oW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkK1xcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMFswLTddKyg/IVxcZCkvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1ssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzOlxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nJywgJ0BoZXJlc3RyaW5nLlwiXCJcIiddLFxuICAgICAgICAgICAgWy8nJycvLCAnc3RyaW5nJywgXCJAaGVyZXN0cmluZy4nJydcIl0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nLlwiJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6IFwiQHN0cmluZy4nXCIgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIidcXCNcXFxcXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyN7LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1cIic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ3Jvb3QuaW50ZXJwb2xhdGVkc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXCInXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvIy8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBoZXJlc3RyaW5nOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcIlwiXCJ8JycnKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQxPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvW14jXFxcXCdcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9bJ1wiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8jey8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAncm9vdC5pbnRlcnBvbGF0ZWRzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy8jLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW14jXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy8jLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBoZXJlcmVnZXhwOiBbXG4gICAgICAgICAgICBbL1teXFxcXFxcLyNdKy8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAncmVnZXhwJ10sXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWycvLy9baWdtXSonLCB7IHRva2VuOiAncmVnZXhwJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9cXC8vLCAncmVnZXhwJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9