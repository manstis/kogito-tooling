(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js":
/*!**************************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js ***!
  \**************************************************************************************************************************************************/
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
        ['(', ')'],
        ['begin', 'end'],
        ['case', 'endcase'],
        ['casex', 'endcase'],
        ['casez', 'endcase'],
        ['checker', 'endchecker'],
        ['class', 'endclass'],
        ['clocking', 'endclocking'],
        ['config', 'endconfig'],
        ['function', 'endfunction'],
        ['generate', 'endgenerate'],
        ['group', 'endgroup'],
        ['interface', 'endinterface'],
        ['module', 'endmodule'],
        ['package', 'endpackage'],
        ['primitive', 'endprimitive'],
        ['program', 'endprogram'],
        ['property', 'endproperty'],
        ['specify', 'endspecify'],
        ['sequence', 'endsequence'],
        ['table', 'endtable'],
        ['task', 'endtask']
    ],
    autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        offSide: false,
        markers: {
            start: new RegExp('^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|case(x|z)?|class|clocking|config|covergroup|function|generate|interface|module|package|primitive|property|program|sequence|specify|table|task)\\b'),
            end: new RegExp('^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endcase|endclass|endclocking|endconfig|endgroup|endfunction|endgenerate|endinterface|endmodule|endpackage|endprimitive|endproperty|endprogram|endsequence|endspecify|endtable|endtask)\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.sv',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        'accept_on',
        'alias',
        'always',
        'always_comb',
        'always_ff',
        'always_latch',
        'and',
        'assert',
        'assign',
        'assume',
        'automatic',
        'before',
        'begin',
        'bind',
        'bins',
        'binsof',
        'bit',
        'break',
        'buf',
        'bufif0',
        'bufif1',
        'byte',
        'case',
        'casex',
        'casez',
        'cell',
        'chandle',
        'checker',
        'class',
        'clocking',
        'cmos',
        'config',
        'const',
        'constraint',
        'context',
        'continue',
        'cover',
        'covergroup',
        'coverpoint',
        'cross',
        'deassign',
        'default',
        'defparam',
        'design',
        'disable',
        'dist',
        'do',
        'edge',
        'else',
        'end',
        'endcase',
        'endchecker',
        'endclass',
        'endclocking',
        'endconfig',
        'endfunction',
        'endgenerate',
        'endgroup',
        'endinterface',
        'endmodule',
        'endpackage',
        'endprimitive',
        'endprogram',
        'endproperty',
        'endspecify',
        'endsequence',
        'endtable',
        'endtask',
        'enum',
        'event',
        'eventually',
        'expect',
        'export',
        'extends',
        'extern',
        'final',
        'first_match',
        'for',
        'force',
        'foreach',
        'forever',
        'fork',
        'forkjoin',
        'function',
        'generate',
        'genvar',
        'global',
        'highz0',
        'highz1',
        'if',
        'iff',
        'ifnone',
        'ignore_bins',
        'illegal_bins',
        'implements',
        'implies',
        'import',
        'incdir',
        'include',
        'initial',
        'inout',
        'input',
        'inside',
        'instance',
        'int',
        'integer',
        'interconnect',
        'interface',
        'intersect',
        'join',
        'join_any',
        'join_none',
        'large',
        'let',
        'liblist',
        'library',
        'local',
        'localparam',
        'logic',
        'longint',
        'macromodule',
        'matches',
        'medium',
        'modport',
        'module',
        'nand',
        'negedge',
        'nettype',
        'new',
        'nexttime',
        'nmos',
        'nor',
        'noshowcancelled',
        'not',
        'notif0',
        'notif1',
        'null',
        'or',
        'output',
        'package',
        'packed',
        'parameter',
        'pmos',
        'posedge',
        'primitive',
        'priority',
        'program',
        'property',
        'protected',
        'pull0',
        'pull1',
        'pulldown',
        'pullup',
        'pulsestyle_ondetect',
        'pulsestyle_onevent',
        'pure',
        'rand',
        'randc',
        'randcase',
        'randsequence',
        'rcmos',
        'real',
        'realtime',
        'ref',
        'reg',
        'reject_on',
        'release',
        'repeat',
        'restrict',
        'return',
        'rnmos',
        'rpmos',
        'rtran',
        'rtranif0',
        'rtranif1',
        's_always',
        's_eventually',
        's_nexttime',
        's_until',
        's_until_with',
        'scalared',
        'sequence',
        'shortint',
        'shortreal',
        'showcancelled',
        'signed',
        'small',
        'soft',
        'solve',
        'specify',
        'specparam',
        'static',
        'string',
        'strong',
        'strong0',
        'strong1',
        'struct',
        'super',
        'supply0',
        'supply1',
        'sync_accept_on',
        'sync_reject_on',
        'table',
        'tagged',
        'task',
        'this',
        'throughout',
        'time',
        'timeprecision',
        'timeunit',
        'tran',
        'tranif0',
        'tranif1',
        'tri',
        'tri0',
        'tri1',
        'triand',
        'trior',
        'trireg',
        'type',
        'typedef',
        'union',
        'unique',
        'unique0',
        'unsigned',
        'until',
        'until_with',
        'untyped',
        'use',
        'uwire',
        'var',
        'vectored',
        'virtual',
        'void',
        'wait',
        'wait_order',
        'wand',
        'weak',
        'weak0',
        'weak1',
        'while',
        'wildcard',
        'wire',
        'with',
        'within',
        'wor',
        'xnor',
        'xor'
    ],
    builtin_gates: [
        'and',
        'nand',
        'nor',
        'or',
        'xor',
        'xnor',
        'buf',
        'not',
        'bufif0',
        'bufif1',
        'notif1',
        'notif0',
        'cmos',
        'nmos',
        'pmos',
        'rcmos',
        'rnmos',
        'rpmos',
        'tran',
        'tranif1',
        'tranif0',
        'rtran',
        'rtranif1',
        'rtranif0'
    ],
    operators: [
        // assignment operators
        '=',
        '+=',
        '-=',
        '*=',
        '/=',
        '%=',
        '&=',
        '|=',
        '^=',
        '<<=',
        '>>+',
        '<<<=',
        '>>>=',
        // conditional expression
        '?',
        ':',
        // Unary operators
        '+',
        '-',
        '!',
        '~',
        '&',
        '~&',
        '|',
        '~|',
        '^',
        '~^',
        '^~',
        //binary operators
        '+',
        '-',
        '*',
        '/',
        '%',
        '==',
        '!=',
        '===',
        '!==',
        '==?',
        '!=?',
        '&&',
        '||',
        '**',
        '<',
        '<=',
        '>',
        '>=',
        '&',
        '|',
        '^',
        '>>',
        '<<',
        '>>>',
        '<<<',
        // increment or decrement operator
        '++',
        '--',
        //binary logical operator
        '->',
        '<->',
        // binary set membership operator
        'inside',
        // binary distrubution operator
        'dist',
        '::',
        '+:',
        '-:',
        '*>',
        '&&&',
        '|->',
        '|=>',
        '#=#'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%#]+/,
    escapes: /%%|\\(?:[antvf\\"']|x[0-9A-Fa-f]{1,2}|[0-7]{1,3})/,
    identifier: /(?:[a-zA-Z_][a-zA-Z0-9_$\.]*|\\\S+ )/,
    systemcall: /[$][a-zA-Z0-9_]+/,
    timeunits: /s|ms|us|ns|ps|fs/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // module instances
            [
                /^(\s*)(@identifier)/,
                [
                    '',
                    {
                        cases: {
                            '@builtin_gates': {
                                token: 'keyword.$2',
                                next: '@module_instance'
                            },
                            '@keywords': { token: 'keyword.$2' },
                            '@default': {
                                token: 'identifier',
                                next: '@module_instance'
                            }
                        }
                    }
                ]
            ],
            // include statements
            [/^\s*`include/, { token: 'keyword.directive.include', next: '@include' }],
            // Preprocessor directives
            [/^\s*`\s*\w+/, 'keyword'],
            // identifiers and keywords
            { include: '@identifier_or_keyword' },
            // whitespace
            { include: '@whitespace' },
            // (* attributes *).
            [/\(\*.*\*\)/, 'annotation'],
            // Systemcall
            [/@systemcall/, 'variable.predefined'],
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
            // numbers
            { include: '@numbers' },
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            { include: '@strings' }
        ],
        identifier_or_keyword: [
            [
                /@identifier/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        numbers: [
            [/\d+?[\d_]*(?:\.[\d_]+)?[eE][\-+]?\d+/, 'number.float'],
            [/\d+?[\d_]*\.[\d_]+(?:\s*@timeunits)?/, 'number.float'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[dD]\s*[0-9xXzZ?]+?[0-9xXzZ?_]*/, 'number'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[bB]\s*[0-1xXzZ?]+?[0-1xXzZ?_]*/, 'number.binary'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[oO]\s*[0-7xXzZ?]+?[0-7xXzZ?_]*/, 'number.octal'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[hH]\s*[0-9a-fA-FxXzZ?]+?[0-9a-fA-FxXzZ?_]*/, 'number.hex'],
            [/1step/, 'number'],
            [/[\dxXzZ]+?[\dxXzZ_]*(?:\s*@timeunits)?/, 'number'],
            [/'[01xXzZ]+/, 'number']
        ],
        module_instance: [
            { include: '@whitespace' },
            [/(#?)(\()/, ['', { token: '@brackets', next: '@port_connection' }]],
            [/@identifier\s*[;={}\[\],]/, { token: '@rematch', next: '@pop' }],
            [/@symbols|[;={}\[\],]/, { token: '@rematch', next: '@pop' }],
            [/@identifier/, 'type'],
            [/;/, 'delimiter', '@pop']
        ],
        port_connection: [
            { include: '@identifier_or_keyword' },
            { include: '@whitespace' },
            [/@systemcall/, 'variable.predefined'],
            { include: '@numbers' },
            { include: '@strings' },
            [/[,]/, 'delimiter'],
            [/\(/, '@brackets', '@port_connection'],
            [/\)/, '@brackets', '@pop']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        strings: [
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        include: [
            [
                /(\s*)(")([\w*\/*]*)(.\w*)(")/,
                [
                    '',
                    'string.include.identifier',
                    'string.include.identifier',
                    'string.include.identifier',
                    { token: 'string.include.identifier', next: '@pop' }
                ]
            ],
            [
                /(\s*)(<)([\w*\/*]*)(.\w*)(>)/,
                [
                    '',
                    'string.include.identifier',
                    'string.include.identifier',
                    'string.include.identifier',
                    { token: 'string.include.identifier', next: '@pop' }
                ]
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc3lzdGVtdmVyaWxvZy9zeXN0ZW12ZXJpbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUMsWUFBWSxHQUFHO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVMsbURBQW1EO0FBQzVELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsSUFBSSxPQUFPLElBQUk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMENBQTBDLHNCQUFzQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdURBQXVEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0NBQW9DO0FBQ2pEO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsK0JBQStCLCtDQUErQztBQUM5RSw4QkFBOEIsR0FBRyxVQUFVLGtDQUFrQztBQUM3RSx5QkFBeUIsR0FBRyxVQUFVLGtDQUFrQztBQUN4RTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYSxvQ0FBb0M7QUFDakQsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ10sXG4gICAgICAgIFsnYmVnaW4nLCAnZW5kJ10sXG4gICAgICAgIFsnY2FzZScsICdlbmRjYXNlJ10sXG4gICAgICAgIFsnY2FzZXgnLCAnZW5kY2FzZSddLFxuICAgICAgICBbJ2Nhc2V6JywgJ2VuZGNhc2UnXSxcbiAgICAgICAgWydjaGVja2VyJywgJ2VuZGNoZWNrZXInXSxcbiAgICAgICAgWydjbGFzcycsICdlbmRjbGFzcyddLFxuICAgICAgICBbJ2Nsb2NraW5nJywgJ2VuZGNsb2NraW5nJ10sXG4gICAgICAgIFsnY29uZmlnJywgJ2VuZGNvbmZpZyddLFxuICAgICAgICBbJ2Z1bmN0aW9uJywgJ2VuZGZ1bmN0aW9uJ10sXG4gICAgICAgIFsnZ2VuZXJhdGUnLCAnZW5kZ2VuZXJhdGUnXSxcbiAgICAgICAgWydncm91cCcsICdlbmRncm91cCddLFxuICAgICAgICBbJ2ludGVyZmFjZScsICdlbmRpbnRlcmZhY2UnXSxcbiAgICAgICAgWydtb2R1bGUnLCAnZW5kbW9kdWxlJ10sXG4gICAgICAgIFsncGFja2FnZScsICdlbmRwYWNrYWdlJ10sXG4gICAgICAgIFsncHJpbWl0aXZlJywgJ2VuZHByaW1pdGl2ZSddLFxuICAgICAgICBbJ3Byb2dyYW0nLCAnZW5kcHJvZ3JhbSddLFxuICAgICAgICBbJ3Byb3BlcnR5JywgJ2VuZHByb3BlcnR5J10sXG4gICAgICAgIFsnc3BlY2lmeScsICdlbmRzcGVjaWZ5J10sXG4gICAgICAgIFsnc2VxdWVuY2UnLCAnZW5kc2VxdWVuY2UnXSxcbiAgICAgICAgWyd0YWJsZScsICdlbmR0YWJsZSddLFxuICAgICAgICBbJ3Rhc2snLCAnZW5kdGFzayddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgb2ZmU2lkZTogZmFsc2UsXG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeKD86XFxcXHMqfC4qKD8hXFxcXC9bXFxcXC9cXFxcKl0pW15cXFxcd10pKD86YmVnaW58Y2FzZSh4fHopP3xjbGFzc3xjbG9ja2luZ3xjb25maWd8Y292ZXJncm91cHxmdW5jdGlvbnxnZW5lcmF0ZXxpbnRlcmZhY2V8bW9kdWxlfHBhY2thZ2V8cHJpbWl0aXZlfHByb3BlcnR5fHByb2dyYW18c2VxdWVuY2V8c3BlY2lmeXx0YWJsZXx0YXNrKVxcXFxiJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ14oPzpcXFxccyp8LiooPyFcXFxcL1tcXFxcL1xcXFwqXSlbXlxcXFx3XSkoPzplbmR8ZW5kY2FzZXxlbmRjbGFzc3xlbmRjbG9ja2luZ3xlbmRjb25maWd8ZW5kZ3JvdXB8ZW5kZnVuY3Rpb258ZW5kZ2VuZXJhdGV8ZW5kaW50ZXJmYWNlfGVuZG1vZHVsZXxlbmRwYWNrYWdlfGVuZHByaW1pdGl2ZXxlbmRwcm9wZXJ0eXxlbmRwcm9ncmFtfGVuZHNlcXVlbmNlfGVuZHNwZWNpZnl8ZW5kdGFibGV8ZW5kdGFzaylcXFxcYicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5zdicsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnLCBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2FjY2VwdF9vbicsXG4gICAgICAgICdhbGlhcycsXG4gICAgICAgICdhbHdheXMnLFxuICAgICAgICAnYWx3YXlzX2NvbWInLFxuICAgICAgICAnYWx3YXlzX2ZmJyxcbiAgICAgICAgJ2Fsd2F5c19sYXRjaCcsXG4gICAgICAgICdhbmQnLFxuICAgICAgICAnYXNzZXJ0JyxcbiAgICAgICAgJ2Fzc2lnbicsXG4gICAgICAgICdhc3N1bWUnLFxuICAgICAgICAnYXV0b21hdGljJyxcbiAgICAgICAgJ2JlZm9yZScsXG4gICAgICAgICdiZWdpbicsXG4gICAgICAgICdiaW5kJyxcbiAgICAgICAgJ2JpbnMnLFxuICAgICAgICAnYmluc29mJyxcbiAgICAgICAgJ2JpdCcsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdidWYnLFxuICAgICAgICAnYnVmaWYwJyxcbiAgICAgICAgJ2J1ZmlmMScsXG4gICAgICAgICdieXRlJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY2FzZXgnLFxuICAgICAgICAnY2FzZXonLFxuICAgICAgICAnY2VsbCcsXG4gICAgICAgICdjaGFuZGxlJyxcbiAgICAgICAgJ2NoZWNrZXInLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY2xvY2tpbmcnLFxuICAgICAgICAnY21vcycsXG4gICAgICAgICdjb25maWcnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnY29uc3RyYWludCcsXG4gICAgICAgICdjb250ZXh0JyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2NvdmVyJyxcbiAgICAgICAgJ2NvdmVyZ3JvdXAnLFxuICAgICAgICAnY292ZXJwb2ludCcsXG4gICAgICAgICdjcm9zcycsXG4gICAgICAgICdkZWFzc2lnbicsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlZnBhcmFtJyxcbiAgICAgICAgJ2Rlc2lnbicsXG4gICAgICAgICdkaXNhYmxlJyxcbiAgICAgICAgJ2Rpc3QnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZWRnZScsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgICdlbmRjYXNlJyxcbiAgICAgICAgJ2VuZGNoZWNrZXInLFxuICAgICAgICAnZW5kY2xhc3MnLFxuICAgICAgICAnZW5kY2xvY2tpbmcnLFxuICAgICAgICAnZW5kY29uZmlnJyxcbiAgICAgICAgJ2VuZGZ1bmN0aW9uJyxcbiAgICAgICAgJ2VuZGdlbmVyYXRlJyxcbiAgICAgICAgJ2VuZGdyb3VwJyxcbiAgICAgICAgJ2VuZGludGVyZmFjZScsXG4gICAgICAgICdlbmRtb2R1bGUnLFxuICAgICAgICAnZW5kcGFja2FnZScsXG4gICAgICAgICdlbmRwcmltaXRpdmUnLFxuICAgICAgICAnZW5kcHJvZ3JhbScsXG4gICAgICAgICdlbmRwcm9wZXJ0eScsXG4gICAgICAgICdlbmRzcGVjaWZ5JyxcbiAgICAgICAgJ2VuZHNlcXVlbmNlJyxcbiAgICAgICAgJ2VuZHRhYmxlJyxcbiAgICAgICAgJ2VuZHRhc2snLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICdldmVudCcsXG4gICAgICAgICdldmVudHVhbGx5JyxcbiAgICAgICAgJ2V4cGVjdCcsXG4gICAgICAgICdleHBvcnQnLFxuICAgICAgICAnZXh0ZW5kcycsXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnZmluYWwnLFxuICAgICAgICAnZmlyc3RfbWF0Y2gnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2ZvcmNlJyxcbiAgICAgICAgJ2ZvcmVhY2gnLFxuICAgICAgICAnZm9yZXZlcicsXG4gICAgICAgICdmb3JrJyxcbiAgICAgICAgJ2Zvcmtqb2luJyxcbiAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgJ2dlbmVyYXRlJyxcbiAgICAgICAgJ2dlbnZhcicsXG4gICAgICAgICdnbG9iYWwnLFxuICAgICAgICAnaGlnaHowJyxcbiAgICAgICAgJ2hpZ2h6MScsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpZmYnLFxuICAgICAgICAnaWZub25lJyxcbiAgICAgICAgJ2lnbm9yZV9iaW5zJyxcbiAgICAgICAgJ2lsbGVnYWxfYmlucycsXG4gICAgICAgICdpbXBsZW1lbnRzJyxcbiAgICAgICAgJ2ltcGxpZXMnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2luY2RpcicsXG4gICAgICAgICdpbmNsdWRlJyxcbiAgICAgICAgJ2luaXRpYWwnLFxuICAgICAgICAnaW5vdXQnLFxuICAgICAgICAnaW5wdXQnLFxuICAgICAgICAnaW5zaWRlJyxcbiAgICAgICAgJ2luc3RhbmNlJyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgJ2ludGVyY29ubmVjdCcsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnaW50ZXJzZWN0JyxcbiAgICAgICAgJ2pvaW4nLFxuICAgICAgICAnam9pbl9hbnknLFxuICAgICAgICAnam9pbl9ub25lJyxcbiAgICAgICAgJ2xhcmdlJyxcbiAgICAgICAgJ2xldCcsXG4gICAgICAgICdsaWJsaXN0JyxcbiAgICAgICAgJ2xpYnJhcnknLFxuICAgICAgICAnbG9jYWwnLFxuICAgICAgICAnbG9jYWxwYXJhbScsXG4gICAgICAgICdsb2dpYycsXG4gICAgICAgICdsb25naW50JyxcbiAgICAgICAgJ21hY3JvbW9kdWxlJyxcbiAgICAgICAgJ21hdGNoZXMnLFxuICAgICAgICAnbWVkaXVtJyxcbiAgICAgICAgJ21vZHBvcnQnLFxuICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgJ25hbmQnLFxuICAgICAgICAnbmVnZWRnZScsXG4gICAgICAgICduZXR0eXBlJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICduZXh0dGltZScsXG4gICAgICAgICdubW9zJyxcbiAgICAgICAgJ25vcicsXG4gICAgICAgICdub3Nob3djYW5jZWxsZWQnLFxuICAgICAgICAnbm90JyxcbiAgICAgICAgJ25vdGlmMCcsXG4gICAgICAgICdub3RpZjEnLFxuICAgICAgICAnbnVsbCcsXG4gICAgICAgICdvcicsXG4gICAgICAgICdvdXRwdXQnLFxuICAgICAgICAncGFja2FnZScsXG4gICAgICAgICdwYWNrZWQnLFxuICAgICAgICAncGFyYW1ldGVyJyxcbiAgICAgICAgJ3Btb3MnLFxuICAgICAgICAncG9zZWRnZScsXG4gICAgICAgICdwcmltaXRpdmUnLFxuICAgICAgICAncHJpb3JpdHknLFxuICAgICAgICAncHJvZ3JhbScsXG4gICAgICAgICdwcm9wZXJ0eScsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAncHVsbDAnLFxuICAgICAgICAncHVsbDEnLFxuICAgICAgICAncHVsbGRvd24nLFxuICAgICAgICAncHVsbHVwJyxcbiAgICAgICAgJ3B1bHNlc3R5bGVfb25kZXRlY3QnLFxuICAgICAgICAncHVsc2VzdHlsZV9vbmV2ZW50JyxcbiAgICAgICAgJ3B1cmUnLFxuICAgICAgICAncmFuZCcsXG4gICAgICAgICdyYW5kYycsXG4gICAgICAgICdyYW5kY2FzZScsXG4gICAgICAgICdyYW5kc2VxdWVuY2UnLFxuICAgICAgICAncmNtb3MnLFxuICAgICAgICAncmVhbCcsXG4gICAgICAgICdyZWFsdGltZScsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAncmVnJyxcbiAgICAgICAgJ3JlamVjdF9vbicsXG4gICAgICAgICdyZWxlYXNlJyxcbiAgICAgICAgJ3JlcGVhdCcsXG4gICAgICAgICdyZXN0cmljdCcsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAncm5tb3MnLFxuICAgICAgICAncnBtb3MnLFxuICAgICAgICAncnRyYW4nLFxuICAgICAgICAncnRyYW5pZjAnLFxuICAgICAgICAncnRyYW5pZjEnLFxuICAgICAgICAnc19hbHdheXMnLFxuICAgICAgICAnc19ldmVudHVhbGx5JyxcbiAgICAgICAgJ3NfbmV4dHRpbWUnLFxuICAgICAgICAnc191bnRpbCcsXG4gICAgICAgICdzX3VudGlsX3dpdGgnLFxuICAgICAgICAnc2NhbGFyZWQnLFxuICAgICAgICAnc2VxdWVuY2UnLFxuICAgICAgICAnc2hvcnRpbnQnLFxuICAgICAgICAnc2hvcnRyZWFsJyxcbiAgICAgICAgJ3Nob3djYW5jZWxsZWQnLFxuICAgICAgICAnc2lnbmVkJyxcbiAgICAgICAgJ3NtYWxsJyxcbiAgICAgICAgJ3NvZnQnLFxuICAgICAgICAnc29sdmUnLFxuICAgICAgICAnc3BlY2lmeScsXG4gICAgICAgICdzcGVjcGFyYW0nLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICdzdHJvbmcnLFxuICAgICAgICAnc3Ryb25nMCcsXG4gICAgICAgICdzdHJvbmcxJyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzdXBlcicsXG4gICAgICAgICdzdXBwbHkwJyxcbiAgICAgICAgJ3N1cHBseTEnLFxuICAgICAgICAnc3luY19hY2NlcHRfb24nLFxuICAgICAgICAnc3luY19yZWplY3Rfb24nLFxuICAgICAgICAndGFibGUnLFxuICAgICAgICAndGFnZ2VkJyxcbiAgICAgICAgJ3Rhc2snLFxuICAgICAgICAndGhpcycsXG4gICAgICAgICd0aHJvdWdob3V0JyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAndGltZXByZWNpc2lvbicsXG4gICAgICAgICd0aW1ldW5pdCcsXG4gICAgICAgICd0cmFuJyxcbiAgICAgICAgJ3RyYW5pZjAnLFxuICAgICAgICAndHJhbmlmMScsXG4gICAgICAgICd0cmknLFxuICAgICAgICAndHJpMCcsXG4gICAgICAgICd0cmkxJyxcbiAgICAgICAgJ3RyaWFuZCcsXG4gICAgICAgICd0cmlvcicsXG4gICAgICAgICd0cmlyZWcnLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd0eXBlZGVmJyxcbiAgICAgICAgJ3VuaW9uJyxcbiAgICAgICAgJ3VuaXF1ZScsXG4gICAgICAgICd1bmlxdWUwJyxcbiAgICAgICAgJ3Vuc2lnbmVkJyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ3VudGlsX3dpdGgnLFxuICAgICAgICAndW50eXBlZCcsXG4gICAgICAgICd1c2UnLFxuICAgICAgICAndXdpcmUnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3ZlY3RvcmVkJyxcbiAgICAgICAgJ3ZpcnR1YWwnLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICd3YWl0JyxcbiAgICAgICAgJ3dhaXRfb3JkZXInLFxuICAgICAgICAnd2FuZCcsXG4gICAgICAgICd3ZWFrJyxcbiAgICAgICAgJ3dlYWswJyxcbiAgICAgICAgJ3dlYWsxJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3dpbGRjYXJkJyxcbiAgICAgICAgJ3dpcmUnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd3aXRoaW4nLFxuICAgICAgICAnd29yJyxcbiAgICAgICAgJ3hub3InLFxuICAgICAgICAneG9yJ1xuICAgIF0sXG4gICAgYnVpbHRpbl9nYXRlczogW1xuICAgICAgICAnYW5kJyxcbiAgICAgICAgJ25hbmQnLFxuICAgICAgICAnbm9yJyxcbiAgICAgICAgJ29yJyxcbiAgICAgICAgJ3hvcicsXG4gICAgICAgICd4bm9yJyxcbiAgICAgICAgJ2J1ZicsXG4gICAgICAgICdub3QnLFxuICAgICAgICAnYnVmaWYwJyxcbiAgICAgICAgJ2J1ZmlmMScsXG4gICAgICAgICdub3RpZjEnLFxuICAgICAgICAnbm90aWYwJyxcbiAgICAgICAgJ2Ntb3MnLFxuICAgICAgICAnbm1vcycsXG4gICAgICAgICdwbW9zJyxcbiAgICAgICAgJ3JjbW9zJyxcbiAgICAgICAgJ3JubW9zJyxcbiAgICAgICAgJ3JwbW9zJyxcbiAgICAgICAgJ3RyYW4nLFxuICAgICAgICAndHJhbmlmMScsXG4gICAgICAgICd0cmFuaWYwJyxcbiAgICAgICAgJ3J0cmFuJyxcbiAgICAgICAgJ3J0cmFuaWYxJyxcbiAgICAgICAgJ3J0cmFuaWYwJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgIC8vIGFzc2lnbm1lbnQgb3BlcmF0b3JzXG4gICAgICAgICc9JyxcbiAgICAgICAgJys9JyxcbiAgICAgICAgJy09JyxcbiAgICAgICAgJyo9JyxcbiAgICAgICAgJy89JyxcbiAgICAgICAgJyU9JyxcbiAgICAgICAgJyY9JyxcbiAgICAgICAgJ3w9JyxcbiAgICAgICAgJ149JyxcbiAgICAgICAgJzw8PScsXG4gICAgICAgICc+PisnLFxuICAgICAgICAnPDw8PScsXG4gICAgICAgICc+Pj49JyxcbiAgICAgICAgLy8gY29uZGl0aW9uYWwgZXhwcmVzc2lvblxuICAgICAgICAnPycsXG4gICAgICAgICc6JyxcbiAgICAgICAgLy8gVW5hcnkgb3BlcmF0b3JzXG4gICAgICAgICcrJyxcbiAgICAgICAgJy0nLFxuICAgICAgICAnIScsXG4gICAgICAgICd+JyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnfiYnLFxuICAgICAgICAnfCcsXG4gICAgICAgICd+fCcsXG4gICAgICAgICdeJyxcbiAgICAgICAgJ35eJyxcbiAgICAgICAgJ15+JyxcbiAgICAgICAgLy9iaW5hcnkgb3BlcmF0b3JzXG4gICAgICAgICcrJyxcbiAgICAgICAgJy0nLFxuICAgICAgICAnKicsXG4gICAgICAgICcvJyxcbiAgICAgICAgJyUnLFxuICAgICAgICAnPT0nLFxuICAgICAgICAnIT0nLFxuICAgICAgICAnPT09JyxcbiAgICAgICAgJyE9PScsXG4gICAgICAgICc9PT8nLFxuICAgICAgICAnIT0/JyxcbiAgICAgICAgJyYmJyxcbiAgICAgICAgJ3x8JyxcbiAgICAgICAgJyoqJyxcbiAgICAgICAgJzwnLFxuICAgICAgICAnPD0nLFxuICAgICAgICAnPicsXG4gICAgICAgICc+PScsXG4gICAgICAgICcmJyxcbiAgICAgICAgJ3wnLFxuICAgICAgICAnXicsXG4gICAgICAgICc+PicsXG4gICAgICAgICc8PCcsXG4gICAgICAgICc+Pj4nLFxuICAgICAgICAnPDw8JyxcbiAgICAgICAgLy8gaW5jcmVtZW50IG9yIGRlY3JlbWVudCBvcGVyYXRvclxuICAgICAgICAnKysnLFxuICAgICAgICAnLS0nLFxuICAgICAgICAvL2JpbmFyeSBsb2dpY2FsIG9wZXJhdG9yXG4gICAgICAgICctPicsXG4gICAgICAgICc8LT4nLFxuICAgICAgICAvLyBiaW5hcnkgc2V0IG1lbWJlcnNoaXAgb3BlcmF0b3JcbiAgICAgICAgJ2luc2lkZScsXG4gICAgICAgIC8vIGJpbmFyeSBkaXN0cnVidXRpb24gb3BlcmF0b3JcbiAgICAgICAgJ2Rpc3QnLFxuICAgICAgICAnOjonLFxuICAgICAgICAnKzonLFxuICAgICAgICAnLTonLFxuICAgICAgICAnKj4nLFxuICAgICAgICAnJiYmJyxcbiAgICAgICAgJ3wtPicsXG4gICAgICAgICd8PT4nLFxuICAgICAgICAnIz0jJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lI10rLyxcbiAgICBlc2NhcGVzOiAvJSV8XFxcXCg/OlthbnR2ZlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDJ9fFswLTddezEsM30pLyxcbiAgICBpZGVudGlmaWVyOiAvKD86W2EtekEtWl9dW2EtekEtWjAtOV8kXFwuXSp8XFxcXFxcUysgKS8sXG4gICAgc3lzdGVtY2FsbDogL1skXVthLXpBLVowLTlfXSsvLFxuICAgIHRpbWV1bml0czogL3N8bXN8dXN8bnN8cHN8ZnMvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBtb2R1bGUgaW5zdGFuY2VzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFxzKikoQGlkZW50aWZpZXIpLyxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbl9nYXRlcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLiQyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Btb2R1bGVfaW5zdGFuY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2lkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQG1vZHVsZV9pbnN0YW5jZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gaW5jbHVkZSBzdGF0ZW1lbnRzXG4gICAgICAgICAgICBbL15cXHMqYGluY2x1ZGUvLCB7IHRva2VuOiAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZScsIG5leHQ6ICdAaW5jbHVkZScgfV0sXG4gICAgICAgICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlc1xuICAgICAgICAgICAgWy9eXFxzKmBcXHMqXFx3Ky8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BpZGVudGlmaWVyX29yX2tleXdvcmQnIH0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vICgqIGF0dHJpYnV0ZXMgKikuXG4gICAgICAgICAgICBbL1xcKFxcKi4qXFwqXFwpLywgJ2Fubm90YXRpb24nXSxcbiAgICAgICAgICAgIC8vIFN5c3RlbWNhbGxcbiAgICAgICAgICAgIFsvQHN5c3RlbWNhbGwvLCAndmFyaWFibGUucHJlZGVmaW5lZCddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9XG4gICAgICAgIF0sXG4gICAgICAgIGlkZW50aWZpZXJfb3Jfa2V5d29yZDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9AaWRlbnRpZmllci8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsvXFxkKz9bXFxkX10qKD86XFwuW1xcZF9dKyk/W2VFXVtcXC0rXT9cXGQrLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9cXGQrP1tcXGRfXSpcXC5bXFxkX10rKD86XFxzKkB0aW1ldW5pdHMpPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvKD86XFxkKz9bXFxkX10qXFxzKik/J1tzU10/W2REXVxccypbMC05eFh6Wj9dKz9bMC05eFh6Wj9fXSovLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbLyg/OlxcZCs/W1xcZF9dKlxccyopPydbc1NdP1tiQl1cXHMqWzAtMXhYelo/XSs/WzAtMXhYelo/X10qLywgJ251bWJlci5iaW5hcnknXSxcbiAgICAgICAgICAgIFsvKD86XFxkKz9bXFxkX10qXFxzKik/J1tzU10/W29PXVxccypbMC03eFh6Wj9dKz9bMC03eFh6Wj9fXSovLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLyg/OlxcZCs/W1xcZF9dKlxccyopPydbc1NdP1toSF1cXHMqWzAtOWEtZkEtRnhYelo/XSs/WzAtOWEtZkEtRnhYelo/X10qLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMXN0ZXAvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbL1tcXGR4WHpaXSs/W1xcZHhYelpfXSooPzpcXHMqQHRpbWV1bml0cyk/LywgJ251bWJlciddLFxuICAgICAgICAgICAgWy8nWzAxeFh6Wl0rLywgJ251bWJlciddXG4gICAgICAgIF0sXG4gICAgICAgIG1vZHVsZV9pbnN0YW5jZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbLygjPykoXFwoKS8sIFsnJywgeyB0b2tlbjogJ0BicmFja2V0cycsIG5leHQ6ICdAcG9ydF9jb25uZWN0aW9uJyB9XV0sXG4gICAgICAgICAgICBbL0BpZGVudGlmaWVyXFxzKls7PXt9XFxbXFxdLF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL0BzeW1ib2xzfFs7PXt9XFxbXFxdLF0vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL0BpZGVudGlmaWVyLywgJ3R5cGUnXSxcbiAgICAgICAgICAgIFsvOy8sICdkZWxpbWl0ZXInLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHBvcnRfY29ubmVjdGlvbjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGlkZW50aWZpZXJfb3Jfa2V5d29yZCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgWy9Ac3lzdGVtY2FsbC8sICd2YXJpYWJsZS5wcmVkZWZpbmVkJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgWy9bLF0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1xcKC8sICdAYnJhY2tldHMnLCAnQHBvcnRfY29ubmVjdGlvbiddLFxuICAgICAgICAgICAgWy9cXCkvLCAnQGJyYWNrZXRzJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxccyopKFwiKShbXFx3KlxcLypdKikoLlxcdyopKFwiKS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLCBuZXh0OiAnQHBvcCcgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcXHMqKSg8KShbXFx3KlxcLypdKikoLlxcdyopKD4pLyxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsIG5leHQ6ICdAcG9wJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=