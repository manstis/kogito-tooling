(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/php/php.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/php/php.js ***!
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
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string'] },
        { open: '[', close: ']', notIn: ['string'] },
        { open: '(', close: ')', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*(#|//)region\\b'),
            end: new RegExp('^\\s*(#|//)endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/[^<]+/] // text
        ],
        doctype: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop']
        ],
        comment: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.otherTag' }],
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/] // whitespace
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.script' }],
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(script\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <script ... type
        scriptAfterType: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.scriptAfterType'
                }
            ],
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.scriptAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.scriptWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInEmbeddedState.scriptEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/<\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.style' }],
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(style\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <style ... type
        styleAfterType: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.styleAfterType'
                }
            ],
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.styleAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInSimpleState.styleWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [
                /<\?((php)|=)?/,
                {
                    token: '@rematch',
                    switchTo: '@phpInEmbeddedState.styleEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        phpInSimpleState: [
            [/<\?((php)|=)?/, 'metatag.php'],
            [/\?>/, { token: 'metatag.php', switchTo: '@$S2.$S3' }],
            { include: 'phpRoot' }
        ],
        phpInEmbeddedState: [
            [/<\?((php)|=)?/, 'metatag.php'],
            [
                /\?>/,
                {
                    token: 'metatag.php',
                    switchTo: '@$S2.$S3',
                    nextEmbedded: '$S3'
                }
            ],
            { include: 'phpRoot' }
        ],
        phpRoot: [
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@phpKeywords': { token: 'keyword.php' },
                        '@phpCompileTimeConstants': { token: 'constant.php' },
                        '@default': 'identifier.php'
                    }
                }
            ],
            [
                /[$a-zA-Z_]\w*/,
                {
                    cases: {
                        '@phpPreDefinedVariables': {
                            token: 'variable.predefined.php'
                        },
                        '@default': 'variable.php'
                    }
                }
            ],
            // brackets
            [/[{}]/, 'delimiter.bracket.php'],
            [/[\[\]]/, 'delimiter.array.php'],
            [/[()]/, 'delimiter.parenthesis.php'],
            // whitespace
            [/[ \t\r\n]+/],
            // comments
            [/(#|\/\/)$/, 'comment.php'],
            [/(#|\/\/)/, 'comment.php', '@phpLineComment'],
            // block comments
            [/\/\*/, 'comment.php', '@phpComment'],
            // strings
            [/"/, 'string.php', '@phpDoubleQuoteString'],
            [/'/, 'string.php', '@phpSingleQuoteString'],
            // delimiters
            [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,\@]/, 'delimiter.php'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float.php'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float.php'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.php'],
            [/0[0-7']*[0-7]/, 'number.octal.php'],
            [/0[bB][0-1']*[0-1]/, 'number.binary.php'],
            [/\d[\d']*/, 'number.php'],
            [/\d/, 'number.php']
        ],
        phpComment: [
            [/\*\//, 'comment.php', '@pop'],
            [/[^*]+/, 'comment.php'],
            [/./, 'comment.php']
        ],
        phpLineComment: [
            [/\?>/, { token: '@rematch', next: '@pop' }],
            [/.$/, 'comment.php', '@pop'],
            [/[^?]+$/, 'comment.php', '@pop'],
            [/[^?]+/, 'comment.php'],
            [/./, 'comment.php']
        ],
        phpDoubleQuoteString: [
            [/[^\\"]+/, 'string.php'],
            [/@escapes/, 'string.escape.php'],
            [/\\./, 'string.escape.invalid.php'],
            [/"/, 'string.php', '@pop']
        ],
        phpSingleQuoteString: [
            [/[^\\']+/, 'string.php'],
            [/@escapes/, 'string.escape.php'],
            [/\\./, 'string.escape.invalid.php'],
            [/'/, 'string.php', '@pop']
        ]
    },
    phpKeywords: [
        'abstract',
        'and',
        'array',
        'as',
        'break',
        'callable',
        'case',
        'catch',
        'cfunction',
        'class',
        'clone',
        'const',
        'continue',
        'declare',
        'default',
        'do',
        'else',
        'elseif',
        'enddeclare',
        'endfor',
        'endforeach',
        'endif',
        'endswitch',
        'endwhile',
        'extends',
        'false',
        'final',
        'for',
        'foreach',
        'function',
        'global',
        'goto',
        'if',
        'implements',
        'interface',
        'instanceof',
        'insteadof',
        'namespace',
        'new',
        'null',
        'object',
        'old_function',
        'or',
        'private',
        'protected',
        'public',
        'resource',
        'static',
        'switch',
        'throw',
        'trait',
        'try',
        'true',
        'use',
        'var',
        'while',
        'xor',
        'die',
        'echo',
        'empty',
        'exit',
        'eval',
        'include',
        'include_once',
        'isset',
        'list',
        'require',
        'require_once',
        'return',
        'print',
        'unset',
        'yield',
        '__construct'
    ],
    phpCompileTimeConstants: [
        '__CLASS__',
        '__DIR__',
        '__FILE__',
        '__LINE__',
        '__NAMESPACE__',
        '__METHOD__',
        '__FUNCTION__',
        '__TRAIT__'
    ],
    phpPreDefinedVariables: [
        '$GLOBALS',
        '$_SERVER',
        '$_GET',
        '$_POST',
        '$_FILES',
        '$_REQUEST',
        '$_SESSION',
        '$_ENV',
        '$_COOKIE',
        '$php_errormsg',
        '$HTTP_RAW_POST_DATA',
        '$http_response_header',
        '$argc',
        '$argv'
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};
// TESTED WITH
// <style type="text/css" >
//   .boo { background: blue;
//   <?=''?>
//   }
//   .boo { background: blue;  <?=''?>  }
// </style>
// <!--
// <?= '' ?>
// -->
// <?php
// // The next line contains a syntax error:
// __construct
// if () {
// 	return "The parser recovers from this type of syntax error";
// }
// ?>
// <html>
// <head>
// 	<title <?=''?>>Example page</title>
//   <style <?=''?>>
//     .boo { background: blue; <?=''?> }
//   </style>
// </head>
// <body>
// <script <?=''?> type<?=''?>=<?=''?>"text/javascript"<?=''?>>
// 	// Some PHP embedded inside JS
// 	// Generated <?=date('l, F jS, Y')?>
// 	var server_token = <?=rand(5, 10000)?>
// 	if (typeof server_token === 'number') {
// 		alert('token: ' + server_token);
// 	}
// </script>
// <div>
// Hello
// <? if (isset($user)) { ?>
// 	<b><?=$user?></b>
// <? } else { ?>
// 	<i>guest</i>
// <? } ?>
// !
// </div>
// <?php
// 	/* Example PHP file
// 	multiline comment
// 	*/
//  # Another single line comment
// 	$cards = array("ah", "ac", "ad", "as",
// 		"2h", "2c", "2d", "2s",
// 		"3h", "3c", "3d", "3s",
// 		"4h", "4c", "4d", "4s",
// 		"5h", "5c", "5d", "5s",
// 		"6h", "6c", "6d", "6s",
// 		"7h", "7c", "7d", "7s",
// 		"8h", "8c", "8d", "8s",
// 		"9h", "9c", "9d", "9s",
// 		"th", "tc", "td", "ts",
// 		"jh", "jc", "jd", "js",
// 		"qh", "qc", "qd", "qs",
// 		"kh", "kc", "kd", "ks");
// 	srand(time());
// 	for($i = 0; $i < 52; $i++) {
// 		$count = count($cards);
// 		$random = (rand()%$count);
// 		if($cards[$random] == "") {
// 			$i--;
// 		} else {
// 			$deck[] = $cards[$random];
// 			$cards[$random] = "";
// 		}
// 	}
// $_GET
// __CLASS__
// 	srand(time());
// 	$starting_point = (rand()%51);
// 	print("Starting point for cut cards is: $starting_point<p>");
// 	// display shuffled cards (EXAMPLE ONLY)
// 	for ($index = 0; $index < 52; $index++) {
// 		if ($starting_point == 52) { $starting_point = 0; }
// 		print("Uncut Point: <strong>$deck[$index]</strong> ");
// 		print("Starting Point: <strong>$deck[$starting_point]</strong><br>");
// 		$starting_point++;
// 	}
// ?>
// </body>
// </html>


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcGhwL3BocC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9FQUFvRSxJQUFJLE1BQU07QUFDOUU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksc0JBQXNCO0FBQ3BELFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsMkNBQTJDO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxxQ0FBcUM7QUFDckYsK0NBQStDLG9DQUFvQztBQUNuRixnREFBZ0QsdUNBQXVDO0FBQ3ZGLCtDQUErQyx1Q0FBdUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkRBQTJEO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJEQUEyRDtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDREQUE0RDtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwREFBMEQ7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsd0NBQXdDO0FBQ3hG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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakMsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcI1xcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJ10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqKCN8Ly8pcmVnaW9uXFxcXGInKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKigjfC8vKWVuZHJlZ2lvblxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnJyxcbiAgICAvLyBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5yb290JyB9XSxcbiAgICAgICAgICAgIFsvPCFET0NUWVBFLywgJ21ldGF0YWcuaHRtbCcsICdAZG9jdHlwZSddLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuaHRtbCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy8oPCkoXFx3KykoXFwvPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJ2RlbGltaXRlci5odG1sJ11dLFxuICAgICAgICAgICAgWy8oPCkoc2NyaXB0KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQHNjcmlwdCcgfV1dLFxuICAgICAgICAgICAgWy8oPCkoc3R5bGUpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc3R5bGUnIH1dXSxcbiAgICAgICAgICAgIFsvKDwpKFs6XFx3XSspLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcbiAgICAgICAgICAgIFsvKDxcXC8pKFxcdyspLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAb3RoZXJUYWcnIH1dXSxcbiAgICAgICAgICAgIFsvPC8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgWy9bXjxdKy9dIC8vIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgZG9jdHlwZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuY29tbWVudCcgfV0sXG4gICAgICAgICAgICBbL1tePl0rLywgJ21ldGF0YWcuY29udGVudC5odG1sJ10sXG4gICAgICAgICAgICBbLz4vLCAnbWV0YXRhZy5odG1sJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbLzxcXD8oKHBocCl8PSk/LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5jb21tZW50JyB9XSxcbiAgICAgICAgICAgIFsvLS0+LywgJ2NvbW1lbnQuaHRtbCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teLV0rLywgJ2NvbW1lbnQuY29udGVudC5odG1sJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5jb250ZW50Lmh0bWwnXVxuICAgICAgICBdLFxuICAgICAgICBvdGhlclRhZzogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUub3RoZXJUYWcnIH1dLFxuICAgICAgICAgICAgWy9cXC8/Pi8sICdkZWxpbWl0ZXIuaHRtbCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgXSxcbiAgICAgICAgLy8gLS0gQkVHSU4gPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xuICAgICAgICAvLyBBZnRlciA8c2NyaXB0XG4gICAgICAgIHNjcmlwdDogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc2NyaXB0JyB9XSxcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc2NyaXB0QWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPFxcLykoc2NyaXB0XFxzKikoPikvLFxuICAgICAgICAgICAgICAgIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZVxuICAgICAgICBzY3JpcHRBZnRlclR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPFxcPygocGhwKXw9KT8vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc2NyaXB0QWZ0ZXJUeXBlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJywgJ0BzY3JpcHRBZnRlclR5cGVFcXVhbHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9XG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZUVxdWFsczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC88XFw/KChwaHApfD0pPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zY3JpcHRBZnRlclR5cGVFcXVhbHMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIoW15cIl0qKVwiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvJyhbXiddKiknLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9ICRTMlxuICAgICAgICBzY3JpcHRXaXRoQ3VzdG9tVHlwZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC88XFw/KChwaHApfD0pPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcGhwSW5TaW1wbGVTdGF0ZS5zY3JpcHRXaXRoQ3VzdG9tVHlwZS4kUzInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC4kUzInLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICckUzInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzY3JpcHRFbWJlZGRlZDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC88XFw/KChwaHApfD0pPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcGhwSW5FbWJlZGRlZFN0YXRlLnNjcmlwdEVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ0Bwb3AnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdC8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gLS0gRU5EIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gLS0gQkVHSU4gPHN0eWxlPiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZVxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgWy88XFw/KChwaHApfD0pPy8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHBocEluU2ltcGxlU3RhdGUuc3R5bGUnIH1dLFxuICAgICAgICAgICAgWy90eXBlLywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BzdHlsZUFmdGVyVHlwZSddLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDxcXC8pKHN0eWxlXFxzKikoPikvLFxuICAgICAgICAgICAgICAgIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlXG4gICAgICAgIHN0eWxlQWZ0ZXJUeXBlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLzxcXD8oKHBocCl8PSk/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLnN0eWxlQWZ0ZXJUeXBlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJywgJ0BzdHlsZUFmdGVyVHlwZUVxdWFscyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQudGV4dC9jc3MnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9XG4gICAgICAgIHN0eWxlQWZ0ZXJUeXBlRXF1YWxzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLzxcXD8oKHBocCl8PSk/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLnN0eWxlQWZ0ZXJUeXBlRXF1YWxzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiKFteXCJdKilcIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvJyhbXiddKiknLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQudGV4dC9jc3MnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9ICRTMlxuICAgICAgICBzdHlsZVdpdGhDdXN0b21UeXBlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLzxcXD8oKHBocCl8PSk/LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BwaHBJblNpbXBsZVN0YXRlLnN0eWxlV2l0aEN1c3RvbVR5cGUuJFMyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC4kUzInLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICckUzInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlRW1iZWRkZWQ6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPFxcPygocGhwKXw9KT8vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHBocEluRW1iZWRkZWRTdGF0ZS5zdHlsZUVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ0Bwb3AnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBFTkQgPHN0eWxlPiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIHBocEluU2ltcGxlU3RhdGU6IFtcbiAgICAgICAgICAgIFsvPFxcPygocGhwKXw9KT8vLCAnbWV0YXRhZy5waHAnXSxcbiAgICAgICAgICAgIFsvXFw/Pi8sIHsgdG9rZW46ICdtZXRhdGFnLnBocCcsIHN3aXRjaFRvOiAnQCRTMi4kUzMnIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAncGhwUm9vdCcgfVxuICAgICAgICBdLFxuICAgICAgICBwaHBJbkVtYmVkZGVkU3RhdGU6IFtcbiAgICAgICAgICAgIFsvPFxcPygocGhwKXw9KT8vLCAnbWV0YXRhZy5waHAnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFw/Pi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ21ldGF0YWcucGhwJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAJFMyLiRTMycsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAncGhwUm9vdCcgfVxuICAgICAgICBdLFxuICAgICAgICBwaHBSb290OiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcGhwS2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC5waHAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQHBocENvbXBpbGVUaW1lQ29uc3RhbnRzJzogeyB0b2tlbjogJ2NvbnN0YW50LnBocCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyLnBocCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1skYS16QS1aX11cXHcqLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQHBocFByZURlZmluZWRWYXJpYWJsZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICd2YXJpYWJsZS5wcmVkZWZpbmVkLnBocCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndmFyaWFibGUucGhwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGJyYWNrZXRzXG4gICAgICAgICAgICBbL1t7fV0vLCAnZGVsaW1pdGVyLmJyYWNrZXQucGhwJ10sXG4gICAgICAgICAgICBbL1tcXFtcXF1dLywgJ2RlbGltaXRlci5hcnJheS5waHAnXSxcbiAgICAgICAgICAgIFsvWygpXS8sICdkZWxpbWl0ZXIucGFyZW50aGVzaXMucGhwJ10sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzXG4gICAgICAgICAgICBbLygjfFxcL1xcLykkLywgJ2NvbW1lbnQucGhwJ10sXG4gICAgICAgICAgICBbLygjfFxcL1xcLykvLCAnY29tbWVudC5waHAnLCAnQHBocExpbmVDb21tZW50J10sXG4gICAgICAgICAgICAvLyBibG9jayBjb21tZW50c1xuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudC5waHAnLCAnQHBocENvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLnBocCcsICdAcGhwRG91YmxlUXVvdGVTdHJpbmcnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcucGhwJywgJ0BwaHBTaW5nbGVRdW90ZVN0cmluZyddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyc1xuICAgICAgICAgICAgWy9bXFwrXFwtXFwqXFwlXFwmXFx8XFxeXFx+XFwhXFw9XFw8XFw+XFwvXFw/XFw7XFw6XFwuXFwsXFxAXS8sICdkZWxpbWl0ZXIucGhwJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdC5waHAnXSxcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0LnBocCddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUYnXSpbMC05YS1mQS1GXS8sICdudW1iZXIuaGV4LnBocCddLFxuICAgICAgICAgICAgWy8wWzAtNyddKlswLTddLywgJ251bWJlci5vY3RhbC5waHAnXSxcbiAgICAgICAgICAgIFsvMFtiQl1bMC0xJ10qWzAtMV0vLCAnbnVtYmVyLmJpbmFyeS5waHAnXSxcbiAgICAgICAgICAgIFsvXFxkW1xcZCddKi8sICdudW1iZXIucGhwJ10sXG4gICAgICAgICAgICBbL1xcZC8sICdudW1iZXIucGhwJ11cbiAgICAgICAgXSxcbiAgICAgICAgcGhwQ29tbWVudDogW1xuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudC5waHAnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXipdKy8sICdjb21tZW50LnBocCddLFxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQucGhwJ11cbiAgICAgICAgXSxcbiAgICAgICAgcGhwTGluZUNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvXFw/Pi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvLiQvLCAnY29tbWVudC5waHAnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXj9dKyQvLCAnY29tbWVudC5waHAnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXj9dKy8sICdjb21tZW50LnBocCddLFxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQucGhwJ11cbiAgICAgICAgXSxcbiAgICAgICAgcGhwRG91YmxlUXVvdGVTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcucGhwJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUucGhwJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZC5waHAnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLnBocCcsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgcGhwU2luZ2xlUXVvdGVTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZy5waHAnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZS5waHAnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkLnBocCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5waHAnLCAnQHBvcCddXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHBocEtleXdvcmRzOiBbXG4gICAgICAgICdhYnN0cmFjdCcsXG4gICAgICAgICdhbmQnLFxuICAgICAgICAnYXJyYXknLFxuICAgICAgICAnYXMnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2FsbGFibGUnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdjZnVuY3Rpb24nLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY2xvbmUnLFxuICAgICAgICAnY29uc3QnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnZGVjbGFyZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZWxzZWlmJyxcbiAgICAgICAgJ2VuZGRlY2xhcmUnLFxuICAgICAgICAnZW5kZm9yJyxcbiAgICAgICAgJ2VuZGZvcmVhY2gnLFxuICAgICAgICAnZW5kaWYnLFxuICAgICAgICAnZW5kc3dpdGNoJyxcbiAgICAgICAgJ2VuZHdoaWxlJyxcbiAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZmluYWwnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2ZvcmVhY2gnLFxuICAgICAgICAnZnVuY3Rpb24nLFxuICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgJ2dvdG8nLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW1wbGVtZW50cycsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnaW5zdGFuY2VvZicsXG4gICAgICAgICdpbnN0ZWFkb2YnLFxuICAgICAgICAnbmFtZXNwYWNlJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICdvbGRfZnVuY3Rpb24nLFxuICAgICAgICAnb3InLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3Jlc291cmNlJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAndHJhaXQnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAndXNlJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd4b3InLFxuICAgICAgICAnZGllJyxcbiAgICAgICAgJ2VjaG8nLFxuICAgICAgICAnZW1wdHknLFxuICAgICAgICAnZXhpdCcsXG4gICAgICAgICdldmFsJyxcbiAgICAgICAgJ2luY2x1ZGUnLFxuICAgICAgICAnaW5jbHVkZV9vbmNlJyxcbiAgICAgICAgJ2lzc2V0JyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAncmVxdWlyZScsXG4gICAgICAgICdyZXF1aXJlX29uY2UnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3ByaW50JyxcbiAgICAgICAgJ3Vuc2V0JyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgJ19fY29uc3RydWN0J1xuICAgIF0sXG4gICAgcGhwQ29tcGlsZVRpbWVDb25zdGFudHM6IFtcbiAgICAgICAgJ19fQ0xBU1NfXycsXG4gICAgICAgICdfX0RJUl9fJyxcbiAgICAgICAgJ19fRklMRV9fJyxcbiAgICAgICAgJ19fTElORV9fJyxcbiAgICAgICAgJ19fTkFNRVNQQUNFX18nLFxuICAgICAgICAnX19NRVRIT0RfXycsXG4gICAgICAgICdfX0ZVTkNUSU9OX18nLFxuICAgICAgICAnX19UUkFJVF9fJ1xuICAgIF0sXG4gICAgcGhwUHJlRGVmaW5lZFZhcmlhYmxlczogW1xuICAgICAgICAnJEdMT0JBTFMnLFxuICAgICAgICAnJF9TRVJWRVInLFxuICAgICAgICAnJF9HRVQnLFxuICAgICAgICAnJF9QT1NUJyxcbiAgICAgICAgJyRfRklMRVMnLFxuICAgICAgICAnJF9SRVFVRVNUJyxcbiAgICAgICAgJyRfU0VTU0lPTicsXG4gICAgICAgICckX0VOVicsXG4gICAgICAgICckX0NPT0tJRScsXG4gICAgICAgICckcGhwX2Vycm9ybXNnJyxcbiAgICAgICAgJyRIVFRQX1JBV19QT1NUX0RBVEEnLFxuICAgICAgICAnJGh0dHBfcmVzcG9uc2VfaGVhZGVyJyxcbiAgICAgICAgJyRhcmdjJyxcbiAgICAgICAgJyRhcmd2J1xuICAgIF0sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pL1xufTtcbi8vIFRFU1RFRCBXSVRIXG4vLyA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgPlxuLy8gICAuYm9vIHsgYmFja2dyb3VuZDogYmx1ZTtcbi8vICAgPD89Jyc/PlxuLy8gICB9XG4vLyAgIC5ib28geyBiYWNrZ3JvdW5kOiBibHVlOyAgPD89Jyc/PiAgfVxuLy8gPC9zdHlsZT5cbi8vIDwhLS1cbi8vIDw/PSAnJyA/PlxuLy8gLS0+XG4vLyA8P3BocFxuLy8gLy8gVGhlIG5leHQgbGluZSBjb250YWlucyBhIHN5bnRheCBlcnJvcjpcbi8vIF9fY29uc3RydWN0XG4vLyBpZiAoKSB7XG4vLyBcdHJldHVybiBcIlRoZSBwYXJzZXIgcmVjb3ZlcnMgZnJvbSB0aGlzIHR5cGUgb2Ygc3ludGF4IGVycm9yXCI7XG4vLyB9XG4vLyA/PlxuLy8gPGh0bWw+XG4vLyA8aGVhZD5cbi8vIFx0PHRpdGxlIDw/PScnPz4+RXhhbXBsZSBwYWdlPC90aXRsZT5cbi8vICAgPHN0eWxlIDw/PScnPz4+XG4vLyAgICAgLmJvbyB7IGJhY2tncm91bmQ6IGJsdWU7IDw/PScnPz4gfVxuLy8gICA8L3N0eWxlPlxuLy8gPC9oZWFkPlxuLy8gPGJvZHk+XG4vLyA8c2NyaXB0IDw/PScnPz4gdHlwZTw/PScnPz49PD89Jyc/PlwidGV4dC9qYXZhc2NyaXB0XCI8Pz0nJz8+PlxuLy8gXHQvLyBTb21lIFBIUCBlbWJlZGRlZCBpbnNpZGUgSlNcbi8vIFx0Ly8gR2VuZXJhdGVkIDw/PWRhdGUoJ2wsIEYgalMsIFknKT8+XG4vLyBcdHZhciBzZXJ2ZXJfdG9rZW4gPSA8Pz1yYW5kKDUsIDEwMDAwKT8+XG4vLyBcdGlmICh0eXBlb2Ygc2VydmVyX3Rva2VuID09PSAnbnVtYmVyJykge1xuLy8gXHRcdGFsZXJ0KCd0b2tlbjogJyArIHNlcnZlcl90b2tlbik7XG4vLyBcdH1cbi8vIDwvc2NyaXB0PlxuLy8gPGRpdj5cbi8vIEhlbGxvXG4vLyA8PyBpZiAoaXNzZXQoJHVzZXIpKSB7ID8+XG4vLyBcdDxiPjw/PSR1c2VyPz48L2I+XG4vLyA8PyB9IGVsc2UgeyA/PlxuLy8gXHQ8aT5ndWVzdDwvaT5cbi8vIDw/IH0gPz5cbi8vICFcbi8vIDwvZGl2PlxuLy8gPD9waHBcbi8vIFx0LyogRXhhbXBsZSBQSFAgZmlsZVxuLy8gXHRtdWx0aWxpbmUgY29tbWVudFxuLy8gXHQqL1xuLy8gICMgQW5vdGhlciBzaW5nbGUgbGluZSBjb21tZW50XG4vLyBcdCRjYXJkcyA9IGFycmF5KFwiYWhcIiwgXCJhY1wiLCBcImFkXCIsIFwiYXNcIixcbi8vIFx0XHRcIjJoXCIsIFwiMmNcIiwgXCIyZFwiLCBcIjJzXCIsXG4vLyBcdFx0XCIzaFwiLCBcIjNjXCIsIFwiM2RcIiwgXCIzc1wiLFxuLy8gXHRcdFwiNGhcIiwgXCI0Y1wiLCBcIjRkXCIsIFwiNHNcIixcbi8vIFx0XHRcIjVoXCIsIFwiNWNcIiwgXCI1ZFwiLCBcIjVzXCIsXG4vLyBcdFx0XCI2aFwiLCBcIjZjXCIsIFwiNmRcIiwgXCI2c1wiLFxuLy8gXHRcdFwiN2hcIiwgXCI3Y1wiLCBcIjdkXCIsIFwiN3NcIixcbi8vIFx0XHRcIjhoXCIsIFwiOGNcIiwgXCI4ZFwiLCBcIjhzXCIsXG4vLyBcdFx0XCI5aFwiLCBcIjljXCIsIFwiOWRcIiwgXCI5c1wiLFxuLy8gXHRcdFwidGhcIiwgXCJ0Y1wiLCBcInRkXCIsIFwidHNcIixcbi8vIFx0XHRcImpoXCIsIFwiamNcIiwgXCJqZFwiLCBcImpzXCIsXG4vLyBcdFx0XCJxaFwiLCBcInFjXCIsIFwicWRcIiwgXCJxc1wiLFxuLy8gXHRcdFwia2hcIiwgXCJrY1wiLCBcImtkXCIsIFwia3NcIik7XG4vLyBcdHNyYW5kKHRpbWUoKSk7XG4vLyBcdGZvcigkaSA9IDA7ICRpIDwgNTI7ICRpKyspIHtcbi8vIFx0XHQkY291bnQgPSBjb3VudCgkY2FyZHMpO1xuLy8gXHRcdCRyYW5kb20gPSAocmFuZCgpJSRjb3VudCk7XG4vLyBcdFx0aWYoJGNhcmRzWyRyYW5kb21dID09IFwiXCIpIHtcbi8vIFx0XHRcdCRpLS07XG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdCRkZWNrW10gPSAkY2FyZHNbJHJhbmRvbV07XG4vLyBcdFx0XHQkY2FyZHNbJHJhbmRvbV0gPSBcIlwiO1xuLy8gXHRcdH1cbi8vIFx0fVxuLy8gJF9HRVRcbi8vIF9fQ0xBU1NfX1xuLy8gXHRzcmFuZCh0aW1lKCkpO1xuLy8gXHQkc3RhcnRpbmdfcG9pbnQgPSAocmFuZCgpJTUxKTtcbi8vIFx0cHJpbnQoXCJTdGFydGluZyBwb2ludCBmb3IgY3V0IGNhcmRzIGlzOiAkc3RhcnRpbmdfcG9pbnQ8cD5cIik7XG4vLyBcdC8vIGRpc3BsYXkgc2h1ZmZsZWQgY2FyZHMgKEVYQU1QTEUgT05MWSlcbi8vIFx0Zm9yICgkaW5kZXggPSAwOyAkaW5kZXggPCA1MjsgJGluZGV4KyspIHtcbi8vIFx0XHRpZiAoJHN0YXJ0aW5nX3BvaW50ID09IDUyKSB7ICRzdGFydGluZ19wb2ludCA9IDA7IH1cbi8vIFx0XHRwcmludChcIlVuY3V0IFBvaW50OiA8c3Ryb25nPiRkZWNrWyRpbmRleF08L3N0cm9uZz4gXCIpO1xuLy8gXHRcdHByaW50KFwiU3RhcnRpbmcgUG9pbnQ6IDxzdHJvbmc+JGRlY2tbJHN0YXJ0aW5nX3BvaW50XTwvc3Ryb25nPjxicj5cIik7XG4vLyBcdFx0JHN0YXJ0aW5nX3BvaW50Kys7XG4vLyBcdH1cbi8vID8+XG4vLyA8L2JvZHk+XG4vLyA8L2h0bWw+XG4iXSwic291cmNlUm9vdCI6IiJ9