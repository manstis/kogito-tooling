(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.js ***!
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
        { open: '"', close: '"', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.hcl',
    keywords: [
        'var',
        'local',
        'path',
        'for_each',
        'any',
        'string',
        'number',
        'bool',
        'true',
        'false',
        'null',
        'if ',
        'else ',
        'endif ',
        'for ',
        'in',
        'endfor'
    ],
    operators: [
        '=',
        '>=',
        '<=',
        '==',
        '!=',
        '+',
        '-',
        '*',
        '/',
        '%',
        '&&',
        '||',
        '!',
        '<',
        '>',
        '?',
        '...',
        ':'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    terraformFunctions: /(abs|ceil|floor|log|max|min|pow|signum|chomp|format|formatlist|indent|join|lower|regex|regexall|replace|split|strrev|substr|title|trimspace|upper|chunklist|coalesce|coalescelist|compact|concat|contains|distinct|element|flatten|index|keys|length|list|lookup|map|matchkeys|merge|range|reverse|setintersection|setproduct|setunion|slice|sort|transpose|values|zipmap|base64decode|base64encode|base64gzip|csvdecode|jsondecode|jsonencode|urlencode|yamldecode|yamlencode|abspath|dirname|pathexpand|basename|file|fileexists|fileset|filebase64|templatefile|formatdate|timeadd|timestamp|base64sha256|base64sha512|bcrypt|filebase64sha256|filebase64sha512|filemd5|filemd1|filesha256|filesha512|md5|rsadecrypt|sha1|sha256|sha512|uuid|uuidv5|cidrhost|cidrnetmask|cidrsubnet|tobool|tolist|tomap|tonumber|toset|tostring)/,
    terraformMainBlocks: /(module|data|terraform|resource|provider|variable|output|locals)/,
    tokenizer: {
        root: [
            // highlight main blocks
            [
                /^@terraformMainBlocks([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,
                ['type', '', 'string', '', 'string', '', '@brackets']
            ],
            // highlight all the remaining blocks
            [
                /(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,
                ['identifier', '', 'string', '', 'string', '', '@brackets']
            ],
            // highlight block
            [
                /(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)(=)(\{)/,
                ['identifier', '', 'string', '', 'operator', '', '@brackets']
            ],
            // terraform general highlight - shared with expressions
            { include: '@terraform' }
        ],
        terraform: [
            // highlight terraform functions
            [/@terraformFunctions(\()/, ['type', '@brackets']],
            // all other words are variables or keywords
            [
                /[a-zA-Z_]\w*-*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'variable'
                    }
                }
            ],
            { include: '@whitespace' },
            { include: '@heredoc' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'operator',
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\d[\d']*/, 'number'],
            [/\d/, 'number'],
            [/[;,.]/, 'delimiter'],
            // strings
            [/"/, 'string', '@string'],
            [/'/, 'invalid']
        ],
        heredoc: [
            [
                /<<[-]*\s*["]?([\w\-]+)["]?/,
                { token: 'string.heredoc.delimiter', next: '@heredocBody.$1' }
            ]
        ],
        heredocBody: [
            [
                /^([\w\-]+)$/,
                {
                    cases: {
                        '$1==$S2': [
                            {
                                token: 'string.heredoc.delimiter',
                                next: '@popall'
                            }
                        ],
                        '@default': 'string.heredoc'
                    }
                }
            ],
            [/./, 'string.heredoc']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
            [/#.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/\$\{/, { token: 'delimiter', next: '@stringExpression' }],
            [/[^\\"\$]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@popall']
        ],
        stringInsideExpression: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        stringExpression: [
            [/\}/, { token: 'delimiter', next: '@pop' }],
            [/"/, 'string', '@stringInsideExpression'],
            { include: '@terraform' }
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvaGNsL2hjbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFHQUFxRztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLGdEQUFnRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSSxtQ0FBbUM7QUFDdkQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuaGNsJyxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAndmFyJyxcbiAgICAgICAgJ2xvY2FsJyxcbiAgICAgICAgJ3BhdGgnLFxuICAgICAgICAnZm9yX2VhY2gnLFxuICAgICAgICAnYW55JyxcbiAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICdudW1iZXInLFxuICAgICAgICAnYm9vbCcsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ251bGwnLFxuICAgICAgICAnaWYgJyxcbiAgICAgICAgJ2Vsc2UgJyxcbiAgICAgICAgJ2VuZGlmICcsXG4gICAgICAgICdmb3IgJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2VuZGZvcidcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnPScsXG4gICAgICAgICc+PScsXG4gICAgICAgICc8PScsXG4gICAgICAgICc9PScsXG4gICAgICAgICchPScsXG4gICAgICAgICcrJyxcbiAgICAgICAgJy0nLFxuICAgICAgICAnKicsXG4gICAgICAgICcvJyxcbiAgICAgICAgJyUnLFxuICAgICAgICAnJiYnLFxuICAgICAgICAnfHwnLFxuICAgICAgICAnIScsXG4gICAgICAgICc8JyxcbiAgICAgICAgJz4nLFxuICAgICAgICAnPycsXG4gICAgICAgICcuLi4nLFxuICAgICAgICAnOidcbiAgICBdLFxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgdGVycmFmb3JtRnVuY3Rpb25zOiAvKGFic3xjZWlsfGZsb29yfGxvZ3xtYXh8bWlufHBvd3xzaWdudW18Y2hvbXB8Zm9ybWF0fGZvcm1hdGxpc3R8aW5kZW50fGpvaW58bG93ZXJ8cmVnZXh8cmVnZXhhbGx8cmVwbGFjZXxzcGxpdHxzdHJyZXZ8c3Vic3RyfHRpdGxlfHRyaW1zcGFjZXx1cHBlcnxjaHVua2xpc3R8Y29hbGVzY2V8Y29hbGVzY2VsaXN0fGNvbXBhY3R8Y29uY2F0fGNvbnRhaW5zfGRpc3RpbmN0fGVsZW1lbnR8ZmxhdHRlbnxpbmRleHxrZXlzfGxlbmd0aHxsaXN0fGxvb2t1cHxtYXB8bWF0Y2hrZXlzfG1lcmdlfHJhbmdlfHJldmVyc2V8c2V0aW50ZXJzZWN0aW9ufHNldHByb2R1Y3R8c2V0dW5pb258c2xpY2V8c29ydHx0cmFuc3Bvc2V8dmFsdWVzfHppcG1hcHxiYXNlNjRkZWNvZGV8YmFzZTY0ZW5jb2RlfGJhc2U2NGd6aXB8Y3N2ZGVjb2RlfGpzb25kZWNvZGV8anNvbmVuY29kZXx1cmxlbmNvZGV8eWFtbGRlY29kZXx5YW1sZW5jb2RlfGFic3BhdGh8ZGlybmFtZXxwYXRoZXhwYW5kfGJhc2VuYW1lfGZpbGV8ZmlsZWV4aXN0c3xmaWxlc2V0fGZpbGViYXNlNjR8dGVtcGxhdGVmaWxlfGZvcm1hdGRhdGV8dGltZWFkZHx0aW1lc3RhbXB8YmFzZTY0c2hhMjU2fGJhc2U2NHNoYTUxMnxiY3J5cHR8ZmlsZWJhc2U2NHNoYTI1NnxmaWxlYmFzZTY0c2hhNTEyfGZpbGVtZDV8ZmlsZW1kMXxmaWxlc2hhMjU2fGZpbGVzaGE1MTJ8bWQ1fHJzYWRlY3J5cHR8c2hhMXxzaGEyNTZ8c2hhNTEyfHV1aWR8dXVpZHY1fGNpZHJob3N0fGNpZHJuZXRtYXNrfGNpZHJzdWJuZXR8dG9ib29sfHRvbGlzdHx0b21hcHx0b251bWJlcnx0b3NldHx0b3N0cmluZykvLFxuICAgIHRlcnJhZm9ybU1haW5CbG9ja3M6IC8obW9kdWxlfGRhdGF8dGVycmFmb3JtfHJlc291cmNlfHByb3ZpZGVyfHZhcmlhYmxlfG91dHB1dHxsb2NhbHMpLyxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IG1haW4gYmxvY2tzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL15AdGVycmFmb3JtTWFpbkJsb2NrcyhbIFxcdF0qKShbXFx3LV0rfFwiW1xcdy1dK1wifCkoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKFsgXFx0XSopKFxceykvLFxuICAgICAgICAgICAgICAgIFsndHlwZScsICcnLCAnc3RyaW5nJywgJycsICdzdHJpbmcnLCAnJywgJ0BicmFja2V0cyddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGFsbCB0aGUgcmVtYWluaW5nIGJsb2Nrc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFx3K1sgXFx0XSspKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShbXFx3LV0rfFwiW1xcdy1dK1wifCkoWyBcXHRdKikoXFx7KS8sXG4gICAgICAgICAgICAgICAgWydpZGVudGlmaWVyJywgJycsICdzdHJpbmcnLCAnJywgJ3N0cmluZycsICcnLCAnQGJyYWNrZXRzJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBoaWdobGlnaHQgYmxvY2tcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxcdytbIFxcdF0rKShbIFxcdF0qKShbXFx3LV0rfFwiW1xcdy1dK1wifCkoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKD0pKFxceykvLFxuICAgICAgICAgICAgICAgIFsnaWRlbnRpZmllcicsICcnLCAnc3RyaW5nJywgJycsICdvcGVyYXRvcicsICcnLCAnQGJyYWNrZXRzJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB0ZXJyYWZvcm0gZ2VuZXJhbCBoaWdobGlnaHQgLSBzaGFyZWQgd2l0aCBleHByZXNzaW9uc1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcnJhZm9ybScgfVxuICAgICAgICBdLFxuICAgICAgICB0ZXJyYWZvcm06IFtcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCB0ZXJyYWZvcm0gZnVuY3Rpb25zXG4gICAgICAgICAgICBbL0B0ZXJyYWZvcm1GdW5jdGlvbnMoXFwoKS8sIFsndHlwZScsICdAYnJhY2tldHMnXV0sXG4gICAgICAgICAgICAvLyBhbGwgb3RoZXIgd29yZHMgYXJlIHZhcmlhYmxlcyBvciBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aX11cXHcqLSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BoZXJlZG9jJyB9LFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFxkK1tlRV0oW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZFtcXGQnXSovLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbL1xcZC8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXG4gICAgICAgICAgICBbLycvLCAnaW52YWxpZCddXG4gICAgICAgIF0sXG4gICAgICAgIGhlcmVkb2M6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPDxbLV0qXFxzKltcIl0/KFtcXHdcXC1dKylbXCJdPy8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsIG5leHQ6ICdAaGVyZWRvY0JvZHkuJDEnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgaGVyZWRvY0JvZHk6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihbXFx3XFwtXSspJC8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQxPT0kUzInOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcG9wYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLmhlcmVkb2MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZy5oZXJlZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy8jLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9cXCRcXHsvLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdFeHByZXNzaW9uJyB9XSxcbiAgICAgICAgICAgIFsvW15cXFxcXCJcXCRdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdJbnNpZGVFeHByZXNzaW9uOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nRXhwcmVzc2lvbjogW1xuICAgICAgICAgICAgWy9cXH0vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZ0luc2lkZUV4cHJlc3Npb24nXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJyYWZvcm0nIH1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9