(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.js ***!
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
    ]
};
var language = {
    tokenPostfix: '.tcl',
    specialFunctions: [
        'set',
        'unset',
        'rename',
        'variable',
        'proc',
        'coroutine',
        'foreach',
        'incr',
        'append',
        'lappend',
        'linsert',
        'lreplace'
    ],
    mainFunctions: [
        'if',
        'then',
        'elseif',
        'else',
        'case',
        'switch',
        'while',
        'for',
        'break',
        'continue',
        'return',
        'package',
        'namespace',
        'catch',
        'exit',
        'eval',
        'expr',
        'uplevel',
        'upvar'
    ],
    builtinFunctions: [
        'file',
        'info',
        'concat',
        'join',
        'lindex',
        'list',
        'llength',
        'lrange',
        'lsearch',
        'lsort',
        'split',
        'array',
        'parray',
        'binary',
        'format',
        'regexp',
        'regsub',
        'scan',
        'string',
        'subst',
        'dict',
        'cd',
        'clock',
        'exec',
        'glob',
        'pid',
        'pwd',
        'close',
        'eof',
        'fblocked',
        'fconfigure',
        'fcopy',
        'fileevent',
        'flush',
        'gets',
        'open',
        'puts',
        'read',
        'seek',
        'socket',
        'tell',
        'interp',
        'after',
        'auto_execok',
        'auto_load',
        'auto_mkindex',
        'auto_reset',
        'bgerror',
        'error',
        'global',
        'history',
        'load',
        'source',
        'time',
        'trace',
        'unknown',
        'unset',
        'update',
        'vwait',
        'winfo',
        'wm',
        'bind',
        'event',
        'pack',
        'place',
        'grid',
        'font',
        'bell',
        'clipboard',
        'destroy',
        'focus',
        'grab',
        'lower',
        'option',
        'raise',
        'selection',
        'send',
        'tk',
        'tkwait',
        'tk_bisque',
        'tk_focusNext',
        'tk_focusPrev',
        'tk_focusFollowsMouse',
        'tk_popup',
        'tk_setPalette'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' }
    ],
    escapes: /\\(?:[abfnrtv\\"'\[\]\{\};\$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    variables: /(?:\$+(?:(?:\:\:?)?[a-zA-Z_]\w*)+)/,
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@specialFunctions': {
                            token: 'keyword.flow',
                            next: '@specialFunc'
                        },
                        '@mainFunctions': 'keyword',
                        '@builtinFunctions': 'variable',
                        '@default': 'operator.scss'
                    }
                }
            ],
            [/\s+\-+(?!\d|\.)\w*|{\*}/, 'metatag'],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'operator'],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/\.(?!\d|\.)[\w\-]*/, 'operator.sql'],
            // numbers
            [/\d+(\.\d+)?/, 'number'],
            [/\d+/, 'number'],
            // delimiter
            [/;/, 'delimiter'],
            // strings
            [/"/, { token: 'string.quote', bracket: '@open', next: '@dstring' }],
            [/'/, { token: 'string.quote', bracket: '@open', next: '@sstring' }]
        ],
        dstring: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/[^\\$\[\]"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        sstring: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\$+(?:\:\:)?\{/, { token: 'identifier', next: '@nestedVariable' }],
            [/@variables/, 'type.identifier'],
            [/[^\\$\[\]']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/#.*\\$/, { token: 'comment', next: '@newlineComment' }],
            [/#.*(?!\\)$/, 'comment']
        ],
        newlineComment: [
            [/.*\\$/, 'comment'],
            [/.*(?!\\)$/, { token: 'comment', next: '@pop' }]
        ],
        nestedVariable: [
            [/[^\{\}\$]+/, 'type.identifier'],
            [/\}/, { token: 'identifier', next: '@pop' }]
        ],
        nestedCall: [
            [/\[/, { token: '@brackets', next: '@nestedCall' }],
            [/\]/, { token: '@brackets', next: '@pop' }],
            { include: 'root' }
        ],
        specialFunc: [
            [/"/, { token: 'string', next: '@dstring' }],
            [/'/, { token: 'string', next: '@sstring' }],
            [/\S+/, { token: 'type', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvdGNsL3RjbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUztBQUNUO0FBQ0EscUNBQXFDLEdBQUcsaUJBQWlCLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxHQUFHO0FBQ3JDO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSw0QkFBNEIsSUFBSSwrQ0FBK0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsbUJBQW1CLDREQUE0RDtBQUMvRSxtQkFBbUIsNERBQTREO0FBQy9FO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlELDRCQUE0QixJQUFJLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQXlEO0FBQzVFO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlELDRCQUE0QixJQUFJLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQXlEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUNBQWlDO0FBQzVEO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixnQkFBZ0IsSUFBSSxvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQsb0JBQW9CLG1DQUFtQztBQUN2RCxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQixvQ0FBb0M7QUFDdkQsbUJBQW1CLG9DQUFvQztBQUN2RCxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQSIsImZpbGUiOiI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgdG9rZW5Qb3N0Zml4OiAnLnRjbCcsXG4gICAgc3BlY2lhbEZ1bmN0aW9uczogW1xuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ3Vuc2V0JyxcbiAgICAgICAgJ3JlbmFtZScsXG4gICAgICAgICd2YXJpYWJsZScsXG4gICAgICAgICdwcm9jJyxcbiAgICAgICAgJ2Nvcm91dGluZScsXG4gICAgICAgICdmb3JlYWNoJyxcbiAgICAgICAgJ2luY3InLFxuICAgICAgICAnYXBwZW5kJyxcbiAgICAgICAgJ2xhcHBlbmQnLFxuICAgICAgICAnbGluc2VydCcsXG4gICAgICAgICdscmVwbGFjZSdcbiAgICBdLFxuICAgIG1haW5GdW5jdGlvbnM6IFtcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ3RoZW4nLFxuICAgICAgICAnZWxzZWlmJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdwYWNrYWdlJyxcbiAgICAgICAgJ25hbWVzcGFjZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdleGl0JyxcbiAgICAgICAgJ2V2YWwnLFxuICAgICAgICAnZXhwcicsXG4gICAgICAgICd1cGxldmVsJyxcbiAgICAgICAgJ3VwdmFyJ1xuICAgIF0sXG4gICAgYnVpbHRpbkZ1bmN0aW9uczogW1xuICAgICAgICAnZmlsZScsXG4gICAgICAgICdpbmZvJyxcbiAgICAgICAgJ2NvbmNhdCcsXG4gICAgICAgICdqb2luJyxcbiAgICAgICAgJ2xpbmRleCcsXG4gICAgICAgICdsaXN0JyxcbiAgICAgICAgJ2xsZW5ndGgnLFxuICAgICAgICAnbHJhbmdlJyxcbiAgICAgICAgJ2xzZWFyY2gnLFxuICAgICAgICAnbHNvcnQnLFxuICAgICAgICAnc3BsaXQnLFxuICAgICAgICAnYXJyYXknLFxuICAgICAgICAncGFycmF5JyxcbiAgICAgICAgJ2JpbmFyeScsXG4gICAgICAgICdmb3JtYXQnLFxuICAgICAgICAncmVnZXhwJyxcbiAgICAgICAgJ3JlZ3N1YicsXG4gICAgICAgICdzY2FuJyxcbiAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICdzdWJzdCcsXG4gICAgICAgICdkaWN0JyxcbiAgICAgICAgJ2NkJyxcbiAgICAgICAgJ2Nsb2NrJyxcbiAgICAgICAgJ2V4ZWMnLFxuICAgICAgICAnZ2xvYicsXG4gICAgICAgICdwaWQnLFxuICAgICAgICAncHdkJyxcbiAgICAgICAgJ2Nsb3NlJyxcbiAgICAgICAgJ2VvZicsXG4gICAgICAgICdmYmxvY2tlZCcsXG4gICAgICAgICdmY29uZmlndXJlJyxcbiAgICAgICAgJ2Zjb3B5JyxcbiAgICAgICAgJ2ZpbGVldmVudCcsXG4gICAgICAgICdmbHVzaCcsXG4gICAgICAgICdnZXRzJyxcbiAgICAgICAgJ29wZW4nLFxuICAgICAgICAncHV0cycsXG4gICAgICAgICdyZWFkJyxcbiAgICAgICAgJ3NlZWsnLFxuICAgICAgICAnc29ja2V0JyxcbiAgICAgICAgJ3RlbGwnLFxuICAgICAgICAnaW50ZXJwJyxcbiAgICAgICAgJ2FmdGVyJyxcbiAgICAgICAgJ2F1dG9fZXhlY29rJyxcbiAgICAgICAgJ2F1dG9fbG9hZCcsXG4gICAgICAgICdhdXRvX21raW5kZXgnLFxuICAgICAgICAnYXV0b19yZXNldCcsXG4gICAgICAgICdiZ2Vycm9yJyxcbiAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgICdoaXN0b3J5JyxcbiAgICAgICAgJ2xvYWQnLFxuICAgICAgICAnc291cmNlJyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAndHJhY2UnLFxuICAgICAgICAndW5rbm93bicsXG4gICAgICAgICd1bnNldCcsXG4gICAgICAgICd1cGRhdGUnLFxuICAgICAgICAndndhaXQnLFxuICAgICAgICAnd2luZm8nLFxuICAgICAgICAnd20nLFxuICAgICAgICAnYmluZCcsXG4gICAgICAgICdldmVudCcsXG4gICAgICAgICdwYWNrJyxcbiAgICAgICAgJ3BsYWNlJyxcbiAgICAgICAgJ2dyaWQnLFxuICAgICAgICAnZm9udCcsXG4gICAgICAgICdiZWxsJyxcbiAgICAgICAgJ2NsaXBib2FyZCcsXG4gICAgICAgICdkZXN0cm95JyxcbiAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgJ2dyYWInLFxuICAgICAgICAnbG93ZXInLFxuICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgJ3JhaXNlJyxcbiAgICAgICAgJ3NlbGVjdGlvbicsXG4gICAgICAgICdzZW5kJyxcbiAgICAgICAgJ3RrJyxcbiAgICAgICAgJ3Rrd2FpdCcsXG4gICAgICAgICd0a19iaXNxdWUnLFxuICAgICAgICAndGtfZm9jdXNOZXh0JyxcbiAgICAgICAgJ3RrX2ZvY3VzUHJldicsXG4gICAgICAgICd0a19mb2N1c0ZvbGxvd3NNb3VzZScsXG4gICAgICAgICd0a19wb3B1cCcsXG4gICAgICAgICd0a19zZXRQYWxldHRlJ1xuICAgIF0sXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH1cbiAgICBdLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXFxbXFxdXFx7XFx9O1xcJF18eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIHZhcmlhYmxlczogLyg/OlxcJCsoPzooPzpcXDpcXDo/KT9bYS16QS1aX11cXHcqKSspLyxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3BlY2lhbEZ1bmN0aW9ucyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQuZmxvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzcGVjaWFsRnVuYydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQG1haW5GdW5jdGlvbnMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5GdW5jdGlvbnMnOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ29wZXJhdG9yLnNjc3MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cXHMrXFwtKyg/IVxcZHxcXC4pXFx3Knx7XFwqfS8sICdtZXRhdGFnJ10sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbL1xcJCsoPzpcXDpcXDopP1xcey8sIHsgdG9rZW46ICdpZGVudGlmaWVyJywgbmV4dDogJ0BuZXN0ZWRWYXJpYWJsZScgfV0sXG4gICAgICAgICAgICBbL0B2YXJpYWJsZXMvLCAndHlwZS5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbL1xcLig/IVxcZHxcXC4pW1xcd1xcLV0qLywgJ29wZXJhdG9yLnNxbCddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQrKFxcLlxcZCspPy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlclxuICAgICAgICAgICAgWy87LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQG9wZW4nLCBuZXh0OiAnQGRzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy8nLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc3N0cmluZycgfV1cbiAgICAgICAgXSxcbiAgICAgICAgZHN0cmluZzogW1xuICAgICAgICAgICAgWy9cXFsvLCB7IHRva2VuOiAnQGJyYWNrZXRzJywgbmV4dDogJ0BuZXN0ZWRDYWxsJyB9XSxcbiAgICAgICAgICAgIFsvXFwkKyg/OlxcOlxcOik/XFx7LywgeyB0b2tlbjogJ2lkZW50aWZpZXInLCBuZXh0OiAnQG5lc3RlZFZhcmlhYmxlJyB9XSxcbiAgICAgICAgICAgIFsvQHZhcmlhYmxlcy8sICd0eXBlLmlkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvW15cXFxcJFxcW1xcXVwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcWy8sIHsgdG9rZW46ICdAYnJhY2tldHMnLCBuZXh0OiAnQG5lc3RlZENhbGwnIH1dLFxuICAgICAgICAgICAgWy9cXCQrKD86XFw6XFw6KT9cXHsvLCB7IHRva2VuOiAnaWRlbnRpZmllcicsIG5leHQ6ICdAbmVzdGVkVmFyaWFibGUnIH1dLFxuICAgICAgICAgICAgWy9AdmFyaWFibGVzLywgJ3R5cGUuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9bXlxcXFwkXFxbXFxdJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvIy4qXFxcXCQvLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAbmV3bGluZUNvbW1lbnQnIH1dLFxuICAgICAgICAgICAgWy8jLiooPyFcXFxcKSQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIG5ld2xpbmVDb21tZW50OiBbXG4gICAgICAgICAgICBbLy4qXFxcXCQvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy8uKig/IVxcXFwpJC8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIG5lc3RlZFZhcmlhYmxlOiBbXG4gICAgICAgICAgICBbL1teXFx7XFx9XFwkXSsvLCAndHlwZS5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbL1xcfS8sIHsgdG9rZW46ICdpZGVudGlmaWVyJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIG5lc3RlZENhbGw6IFtcbiAgICAgICAgICAgIFsvXFxbLywgeyB0b2tlbjogJ0BicmFja2V0cycsIG5leHQ6ICdAbmVzdGVkQ2FsbCcgfV0sXG4gICAgICAgICAgICBbL1xcXS8sIHsgdG9rZW46ICdAYnJhY2tldHMnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdyb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIHNwZWNpYWxGdW5jOiBbXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAZHN0cmluZycgfV0sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bzc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXFxTKy8sIHsgdG9rZW46ICd0eXBlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==