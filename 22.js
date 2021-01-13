(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js":
/*!********************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.js ***!
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

var EMPTY_ELEMENTS = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['{{!--', '--}}']
    },
    brackets: [
        ['<!--', '-->'],
        ['<', '>'],
        ['{{', '}}'],
        ['{', '}'],
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
        { open: '<', close: '>' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.Indent }
        }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/\{\{!--/, 'comment.block.start.handlebars', '@commentBlock'],
            [/\{\{!/, 'comment.start.handlebars', '@comment'],
            [/\{\{/, { token: '@rematch', switchTo: '@handlebarsInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@commentHtml'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/\{/, 'delimiter.html'],
            [/[^<{]+/] // text
        ],
        doctype: [
            [
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.comment'
                }
            ],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop']
        ],
        comment: [
            [/\}\}/, 'comment.end.handlebars', '@pop'],
            [/./, 'comment.content.handlebars']
        ],
        commentBlock: [
            [/--\}\}/, 'comment.block.end.handlebars', '@pop'],
            [/./, 'comment.content.handlebars']
        ],
        commentHtml: [
            [
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.comment'
                }
            ],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.otherTag'
                }
            ],
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
            [
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.script'
                }
            ],
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.scriptAfterType'
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.scriptAfterTypeEquals'
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.scriptWithCustomType.$S2'
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInEmbeddedState.scriptEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.style'
                }
            ],
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.styleAfterType'
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.styleAfterTypeEquals'
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInSimpleState.styleWithCustomType.$S2'
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
                /\{\{/,
                {
                    token: '@rematch',
                    switchTo: '@handlebarsInEmbeddedState.styleEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        handlebarsInSimpleState: [
            [/\{\{\{?/, 'delimiter.handlebars'],
            [/\}\}\}?/, { token: 'delimiter.handlebars', switchTo: '@$S2.$S3' }],
            { include: 'handlebarsRoot' }
        ],
        handlebarsInEmbeddedState: [
            [/\{\{\{?/, 'delimiter.handlebars'],
            [
                /\}\}\}?/,
                {
                    token: 'delimiter.handlebars',
                    switchTo: '@$S2.$S3',
                    nextEmbedded: '$S3'
                }
            ],
            { include: 'handlebarsRoot' }
        ],
        handlebarsRoot: [
            [/"[^"]*"/, 'string.handlebars'],
            [/[#/][^\s}]+/, 'keyword.helper.handlebars'],
            [/else\b/, 'keyword.helper.handlebars'],
            [/[\s]+/],
            [/[^}]/, 'variable.parameter.handlebars']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvaGFuZGxlYmFycy9oYW5kbGViYXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0VBQWdFLElBQUksTUFBTTtBQUMxRTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdFQUFTO0FBQ3ZDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSx3RUFBUztBQUM3QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCLGdCQUFnQixFQUFFO0FBQ2xCLGdCQUFnQixFQUFFLElBQUksK0RBQStEO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxxQ0FBcUM7QUFDckYsK0NBQStDLG9DQUFvQztBQUNuRixnREFBZ0QsdUNBQXVDO0FB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QUFDQSwwQkFBMEIsd0RBQXdEO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLEVBQUU7QUFDcEIsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLHNEQUFzRDtBQUMvRSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGdCQUFnQixFQUFFLEVBQUU7QUFDcEI7QUFDQSxtQkFBbUIsRUFBRSxFQUFFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcbnZhciBFTVBUWV9FTEVNRU5UUyA9IFtcbiAgICAnYXJlYScsXG4gICAgJ2Jhc2UnLFxuICAgICdicicsXG4gICAgJ2NvbCcsXG4gICAgJ2VtYmVkJyxcbiAgICAnaHInLFxuICAgICdpbWcnLFxuICAgICdpbnB1dCcsXG4gICAgJ2tleWdlbicsXG4gICAgJ2xpbmsnLFxuICAgICdtZW51aXRlbScsXG4gICAgJ21ldGEnLFxuICAgICdwYXJhbScsXG4gICAgJ3NvdXJjZScsXG4gICAgJ3RyYWNrJyxcbiAgICAnd2JyJ1xuXTtcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCRcXF5cXCZcXCpcXChcXClcXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcc10rKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWyd7eyEtLScsICctLX19J11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsnPCEtLScsICctLT4nXSxcbiAgICAgICAgWyc8JywgJz4nXSxcbiAgICAgICAgWyd7eycsICd9fSddLFxuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgb25FbnRlclJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KD8hKD86XCIgKyBFTVBUWV9FTEVNRU5UUy5qb2luKCd8JykgKyBcIikpKFxcXFx3W1xcXFx3XFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxuICAgICAgICAgICAgYWZ0ZXJUZXh0OiAvXjxcXC8oXFx3W1xcd1xcZF0qKVxccyo+JC9pLFxuICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgaW5kZW50QWN0aW9uOiBsYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudE91dGRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYmVmb3JlVGV4dDogbmV3IFJlZ0V4cChcIjwoPyEoPzpcIiArIEVNUFRZX0VMRU1FTlRTLmpvaW4oJ3wnKSArIFwiKSkoXFxcXHdbXFxcXHdcXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBsYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudCB9XG4gICAgICAgIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJycsXG4gICAgLy8gaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgWy9cXHtcXHshLS0vLCAnY29tbWVudC5ibG9jay5zdGFydC5oYW5kbGViYXJzJywgJ0Bjb21tZW50QmxvY2snXSxcbiAgICAgICAgICAgIFsvXFx7XFx7IS8sICdjb21tZW50LnN0YXJ0LmhhbmRsZWJhcnMnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFx7XFx7LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUucm9vdCcgfV0sXG4gICAgICAgICAgICBbLzwhRE9DVFlQRS8sICdtZXRhdGFnLmh0bWwnLCAnQGRvY3R5cGUnXSxcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50Lmh0bWwnLCAnQGNvbW1lbnRIdG1sJ10sXG4gICAgICAgICAgICBbLyg8KShcXHcrKShcXC8+KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnXV0sXG4gICAgICAgICAgICBbLyg8KShzY3JpcHQpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc2NyaXB0JyB9XV0sXG4gICAgICAgICAgICBbLyg8KShzdHlsZSkvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BzdHlsZScgfV1dLFxuICAgICAgICAgICAgWy8oPCkoWzpcXHddKykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxuICAgICAgICAgICAgWy8oPFxcLykoXFx3KykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxuICAgICAgICAgICAgWy88LywgJ2RlbGltaXRlci5odG1sJ10sXG4gICAgICAgICAgICBbL1xcey8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgWy9bXjx7XSsvXSAvLyB0ZXh0XG4gICAgICAgIF0sXG4gICAgICAgIGRvY3R5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFx7XFx7LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5jb21tZW50J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1tePl0rLywgJ21ldGF0YWcuY29udGVudC5odG1sJ10sXG4gICAgICAgICAgICBbLz4vLCAnbWV0YXRhZy5odG1sJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1xcfVxcfS8sICdjb21tZW50LmVuZC5oYW5kbGViYXJzJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQuaGFuZGxlYmFycyddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRCbG9jazogW1xuICAgICAgICAgICAgWy8tLVxcfVxcfS8sICdjb21tZW50LmJsb2NrLmVuZC5oYW5kbGViYXJzJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQuaGFuZGxlYmFycyddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRIdG1sOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xce1xcey8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUuY29tbWVudCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudC5odG1sJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW14tXSsvLCAnY29tbWVudC5jb250ZW50Lmh0bWwnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNvbnRlbnQuaHRtbCddXG4gICAgICAgIF0sXG4gICAgICAgIG90aGVyVGFnOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xce1xcey8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUub3RoZXJUYWcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFwvPz4vLCAnZGVsaW1pdGVyLmh0bWwnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSAvLyB3aGl0ZXNwYWNlXG4gICAgICAgIF0sXG4gICAgICAgIC8vIC0tIEJFR0lOIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdFxuICAgICAgICBzY3JpcHQ6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFx7XFx7LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc2NyaXB0QWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPFxcLykoc2NyaXB0XFxzKikoPikvLFxuICAgICAgICAgICAgICAgIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZVxuICAgICAgICBzY3JpcHRBZnRlclR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFx7XFx7LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zY3JpcHRBZnRlclR5cGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHNjcmlwdEFmdGVyVHlwZUVxdWFscyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLnRleHQvamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID1cbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xce1xcey8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUuc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiKFteXCJdKilcIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLycoW14nXSopJy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQudGV4dC9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGUgPSAkUzJcbiAgICAgICAgc2NyaXB0V2l0aEN1c3RvbVR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFx7XFx7LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zY3JpcHRXaXRoQ3VzdG9tVHlwZS4kUzInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC4kUzInLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICckUzInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzY3JpcHRFbWJlZGRlZDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXHtcXHsvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJbkVtYmVkZGVkU3RhdGUuc2NyaXB0RW1iZWRkZWQuJFMyJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnQHBvcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBFTkQgPHNjcmlwdD4gdGFncyBoYW5kbGluZ1xuICAgICAgICAvLyAtLSBCRUdJTiA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlXG4gICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xce1xcey8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUuc3R5bGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc3R5bGVBZnRlclR5cGUnXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQudGV4dC9jc3MnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8XFwvKShzdHlsZVxccyopKD4pLyxcbiAgICAgICAgICAgICAgICBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZVxuICAgICAgICBzdHlsZUFmdGVyVHlwZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXHtcXHsvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQGhhbmRsZWJhcnNJblNpbXBsZVN0YXRlLnN0eWxlQWZ0ZXJUeXBlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJywgJ0BzdHlsZUFmdGVyVHlwZUVxdWFscyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQudGV4dC9jc3MnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9XG4gICAgICAgIHN0eWxlQWZ0ZXJUeXBlRXF1YWxzOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xce1xcey8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luU2ltcGxlU3RhdGUuc3R5bGVBZnRlclR5cGVFcXVhbHMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIoW15cIl0qKVwiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzdHlsZVdpdGhDdXN0b21UeXBlLiQxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZC50ZXh0L2NzcycsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID0gJFMyXG4gICAgICAgIHN0eWxlV2l0aEN1c3RvbVR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFx7XFx7LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BoYW5kbGViYXJzSW5TaW1wbGVTdGF0ZS5zdHlsZVdpdGhDdXN0b21UeXBlLiRTMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQuJFMyJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHlsZUVtYmVkZGVkOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xce1xcey8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAaGFuZGxlYmFyc0luRW1iZWRkZWRTdGF0ZS5zdHlsZUVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ0Bwb3AnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBFTkQgPHN0eWxlPiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIGhhbmRsZWJhcnNJblNpbXBsZVN0YXRlOiBbXG4gICAgICAgICAgICBbL1xce1xce1xcez8vLCAnZGVsaW1pdGVyLmhhbmRsZWJhcnMnXSxcbiAgICAgICAgICAgIFsvXFx9XFx9XFx9Py8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuaGFuZGxlYmFycycsIHN3aXRjaFRvOiAnQCRTMi4kUzMnIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnaGFuZGxlYmFyc1Jvb3QnIH1cbiAgICAgICAgXSxcbiAgICAgICAgaGFuZGxlYmFyc0luRW1iZWRkZWRTdGF0ZTogW1xuICAgICAgICAgICAgWy9cXHtcXHtcXHs/LywgJ2RlbGltaXRlci5oYW5kbGViYXJzJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcfVxcfVxcfT8vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaGFuZGxlYmFycycsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQCRTMi4kUzMnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICckUzMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ2hhbmRsZWJhcnNSb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIGhhbmRsZWJhcnNSb290OiBbXG4gICAgICAgICAgICBbL1wiW15cIl0qXCIvLCAnc3RyaW5nLmhhbmRsZWJhcnMnXSxcbiAgICAgICAgICAgIFsvWyMvXVteXFxzfV0rLywgJ2tleXdvcmQuaGVscGVyLmhhbmRsZWJhcnMnXSxcbiAgICAgICAgICAgIFsvZWxzZVxcYi8sICdrZXl3b3JkLmhlbHBlci5oYW5kbGViYXJzJ10sXG4gICAgICAgICAgICBbL1tcXHNdKy9dLFxuICAgICAgICAgICAgWy9bXn1dLywgJ3ZhcmlhYmxlLnBhcmFtZXRlci5oYW5kbGViYXJzJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9