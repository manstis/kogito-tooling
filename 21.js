(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js":
/*!**************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js ***!
  \**************************************************************************************************************************************/
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
        lineComment: '#'
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
        { open: '"""', close: '"""', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"""', close: '"""' },
        { open: '"', close: '"' }
    ],
    folding: {
        offSide: true
    }
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.gql',
    keywords: [
        'null',
        'true',
        'false',
        'query',
        'mutation',
        'subscription',
        'extend',
        'schema',
        'directive',
        'scalar',
        'type',
        'interface',
        'union',
        'enum',
        'input',
        'implements',
        'fragment',
        'on'
    ],
    typeKeywords: ['Int', 'Float', 'String', 'Boolean', 'ID'],
    directiveLocations: [
        'SCHEMA',
        'SCALAR',
        'OBJECT',
        'FIELD_DEFINITION',
        'ARGUMENT_DEFINITION',
        'INTERFACE',
        'UNION',
        'ENUM',
        'ENUM_VALUE',
        'INPUT_OBJECT',
        'INPUT_FIELD_DEFINITION',
        'QUERY',
        'MUTATION',
        'SUBSCRIPTION',
        'FIELD',
        'FRAGMENT_DEFINITION',
        'FRAGMENT_SPREAD',
        'INLINE_FRAGMENT',
        'VARIABLE_DEFINITION'
    ],
    operators: ['=', '!', '?', ':', '&', '|'],
    // we include these common regular expressions
    symbols: /[=!?:&|]+/,
    // https://facebook.github.io/graphql/draft/#sec-String-Value
    escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // fields and argument names
            [
                /[a-z_][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'key.identifier'
                    }
                }
            ],
            // identify typed input variables
            [
                /[$][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'argument.identifier'
                    }
                }
            ],
            // to show class names nicely
            [
                /[A-Z][\w\$]*/,
                {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@default': 'type.identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],
            // @ annotations.
            // As an example, we emit a debugging log message on these tokens.
            // Note: message are supressed during the first load -- change some lines to see them.
            [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            [/"""/, { token: 'string', next: '@mlstring', nextEmbedded: 'markdown' }],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }]
        ],
        mlstring: [
            [/[^"]+/, 'string'],
            ['"""', { token: 'string', next: '@pop', nextEmbedded: '@pop' }]
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/#.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvZ3JhcGhxbC9ncmFwaHFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUywwREFBMEQ7QUFDbkUsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxpQkFBaUI7QUFDakIsMEJBQTBCLFNBQVMsMkNBQTJDLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1EQUFtRDtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLHFCQUFxQiwrREFBK0Q7QUFDcEY7QUFDQTtBQUNBLG1CQUFtQiwyREFBMkQ7QUFDOUU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFzRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCJcIlwiJywgY2xvc2U6ICdcIlwiXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIlwiXCInLCBjbG9zZTogJ1wiXCJcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG9mZlNpZGU6IHRydWVcbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICAvLyBTZXQgZGVmYXVsdFRva2VuIHRvIGludmFsaWQgdG8gc2VlIHdoYXQgeW91IGRvIG5vdCB0b2tlbml6ZSB5ZXRcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuZ3FsJyxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnbnVsbCcsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ3F1ZXJ5JyxcbiAgICAgICAgJ211dGF0aW9uJyxcbiAgICAgICAgJ3N1YnNjcmlwdGlvbicsXG4gICAgICAgICdleHRlbmQnLFxuICAgICAgICAnc2NoZW1hJyxcbiAgICAgICAgJ2RpcmVjdGl2ZScsXG4gICAgICAgICdzY2FsYXInLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAndW5pb24nLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgICdpbXBsZW1lbnRzJyxcbiAgICAgICAgJ2ZyYWdtZW50JyxcbiAgICAgICAgJ29uJ1xuICAgIF0sXG4gICAgdHlwZUtleXdvcmRzOiBbJ0ludCcsICdGbG9hdCcsICdTdHJpbmcnLCAnQm9vbGVhbicsICdJRCddLFxuICAgIGRpcmVjdGl2ZUxvY2F0aW9uczogW1xuICAgICAgICAnU0NIRU1BJyxcbiAgICAgICAgJ1NDQUxBUicsXG4gICAgICAgICdPQkpFQ1QnLFxuICAgICAgICAnRklFTERfREVGSU5JVElPTicsXG4gICAgICAgICdBUkdVTUVOVF9ERUZJTklUSU9OJyxcbiAgICAgICAgJ0lOVEVSRkFDRScsXG4gICAgICAgICdVTklPTicsXG4gICAgICAgICdFTlVNJyxcbiAgICAgICAgJ0VOVU1fVkFMVUUnLFxuICAgICAgICAnSU5QVVRfT0JKRUNUJyxcbiAgICAgICAgJ0lOUFVUX0ZJRUxEX0RFRklOSVRJT04nLFxuICAgICAgICAnUVVFUlknLFxuICAgICAgICAnTVVUQVRJT04nLFxuICAgICAgICAnU1VCU0NSSVBUSU9OJyxcbiAgICAgICAgJ0ZJRUxEJyxcbiAgICAgICAgJ0ZSQUdNRU5UX0RFRklOSVRJT04nLFxuICAgICAgICAnRlJBR01FTlRfU1BSRUFEJyxcbiAgICAgICAgJ0lOTElORV9GUkFHTUVOVCcsXG4gICAgICAgICdWQVJJQUJMRV9ERUZJTklUSU9OJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbJz0nLCAnIScsICc/JywgJzonLCAnJicsICd8J10sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPSE/OiZ8XSsvLFxuICAgIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL2dyYXBocWwvZHJhZnQvI3NlYy1TdHJpbmctVmFsdWVcbiAgICBlc2NhcGVzOiAvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlBLUZhLWZdezR9KS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGZpZWxkcyBhbmQgYXJndW1lbnQgbmFtZXNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2Etel9dW1xcdyRdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdrZXkuaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBpZGVudGlmeSB0eXBlZCBpbnB1dCB2YXJpYWJsZXNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvWyRdW1xcdyRdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdhcmd1bWVudC5pZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHRvIHNob3cgY2xhc3MgbmFtZXMgbmljZWx5XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tBLVpdW1xcd1xcJF0qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQHR5cGVLZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd0eXBlLmlkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sIHsgY2FzZXM6IHsgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLCAnQGRlZmF1bHQnOiAnJyB9IH1dLFxuICAgICAgICAgICAgLy8gQCBhbm5vdGF0aW9ucy5cbiAgICAgICAgICAgIC8vIEFzIGFuIGV4YW1wbGUsIHdlIGVtaXQgYSBkZWJ1Z2dpbmcgbG9nIG1lc3NhZ2Ugb24gdGhlc2UgdG9rZW5zLlxuICAgICAgICAgICAgLy8gTm90ZTogbWVzc2FnZSBhcmUgc3VwcmVzc2VkIGR1cmluZyB0aGUgZmlyc3QgbG9hZCAtLSBjaGFuZ2Ugc29tZSBsaW5lcyB0byBzZWUgdGhlbS5cbiAgICAgICAgICAgIFsvQFxccypbYS16QS1aX1xcJF1bXFx3XFwkXSovLCB7IHRva2VuOiAnYW5ub3RhdGlvbicsIGxvZzogJ2Fubm90YXRpb24gdG9rZW46ICQwJyB9XSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1wiXCJcIi8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQG1sc3RyaW5nJywgbmV4dEVtYmVkZGVkOiAnbWFya2Rvd24nIH1dLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmcnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIG1sc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnXCJcIlwiJywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=