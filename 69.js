(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js ***!
  \********************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
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
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        offSide: true
    }
};
var language = {
    tokenPostfix: '.yaml',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: ['true', 'True', 'TRUE', 'false', 'False', 'FALSE', 'null', 'Null', 'Null', '~'],
    numberInteger: /(?:0|[+-]?[0-9]+)/,
    numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
    numberOctal: /0o[0-7]+/,
    numberHex: /0x[0-9a-fA-F]+/,
    numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
    numberNaN: /\.(?:nan|Nan|NAN)/,
    numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Directive
            [/%[^ ]+.*$/, 'meta.directive'],
            // Document Markers
            [/---/, 'operators.directivesEnd'],
            [/\.{3}/, 'operators.documentEnd'],
            // Block Structure Indicators
            [/[-?:](?= )/, 'operators'],
            { include: '@anchor' },
            { include: '@tagHandle' },
            { include: '@flowCollections' },
            { include: '@blockStyle' },
            // Numbers
            [/@numberInteger(?![ \t]*\S+)/, 'number'],
            [/@numberFloat(?![ \t]*\S+)/, 'number.float'],
            [/@numberOctal(?![ \t]*\S+)/, 'number.octal'],
            [/@numberHex(?![ \t]*\S+)/, 'number.hex'],
            [/@numberInfinity(?![ \t]*\S+)/, 'number.infinity'],
            [/@numberNaN(?![ \t]*\S+)/, 'number.nan'],
            [/@numberDate(?![ \t]*\S+)/, 'number.date'],
            // Key:Value pair
            [/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/, ['type', 'white', 'operators', 'white']],
            { include: '@flowScalars' },
            // String nodes
            [
                /.+$/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }
            ]
        ],
        // Flow Collection: Flow Mapping
        object: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Flow Mapping termination
            [/\}/, '@brackets', '@pop'],
            // Flow Mapping delimiter
            [/,/, 'delimiter.comma'],
            // Flow Mapping Key:Value delimiter
            [/:(?= )/, 'operators'],
            // Flow Mapping Key:Value key
            [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, 'type'],
            // Start Flow Style
            { include: '@flowCollections' },
            { include: '@flowScalars' },
            // Scalar Data types
            { include: '@tagHandle' },
            { include: '@anchor' },
            { include: '@flowNumber' },
            // Other value (keyword or string)
            [
                /[^\},]+/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }
            ]
        ],
        // Flow Collection: Flow Sequence
        array: [
            { include: '@whitespace' },
            { include: '@comment' },
            // Flow Sequence termination
            [/\]/, '@brackets', '@pop'],
            // Flow Sequence delimiter
            [/,/, 'delimiter.comma'],
            // Start Flow Style
            { include: '@flowCollections' },
            { include: '@flowScalars' },
            // Scalar Data types
            { include: '@tagHandle' },
            { include: '@anchor' },
            { include: '@flowNumber' },
            // Other value (keyword or string)
            [
                /[^\],]+/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'string'
                    }
                }
            ]
        ],
        // First line of a Block Style
        multiString: [[/^( +).+$/, 'string', '@multiStringContinued.$1']],
        // Further lines of a Block Style
        //   Workaround for indentation detection
        multiStringContinued: [
            [
                /^( *).+$/,
                {
                    cases: {
                        '$1==$S2': 'string',
                        '@default': { token: '@rematch', next: '@popall' }
                    }
                }
            ]
        ],
        whitespace: [[/[ \t\r\n]+/, 'white']],
        // Only line comments
        comment: [[/#.*$/, 'comment']],
        // Start Flow Collections
        flowCollections: [
            [/\[/, '@brackets', '@array'],
            [/\{/, '@brackets', '@object']
        ],
        // Start Flow Scalars (quoted strings)
        flowScalars: [
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/'[^']*'/, 'string'],
            [/"/, 'string', '@doubleQuotedString']
        ],
        doubleQuotedString: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        // Start Block Scalar
        blockStyle: [[/[>|][0-9]*[+-]?$/, 'operators', '@multiString']],
        // Numbers in Flow Collections (terminate with ,]})
        flowNumber: [
            [/@numberInteger(?=[ \t]*[,\]\}])/, 'number'],
            [/@numberFloat(?=[ \t]*[,\]\}])/, 'number.float'],
            [/@numberOctal(?=[ \t]*[,\]\}])/, 'number.octal'],
            [/@numberHex(?=[ \t]*[,\]\}])/, 'number.hex'],
            [/@numberInfinity(?=[ \t]*[,\]\}])/, 'number.infinity'],
            [/@numberNaN(?=[ \t]*[,\]\}])/, 'number.nan'],
            [/@numberDate(?=[ \t]*[,\]\}])/, 'number.date']
        ],
        tagHandle: [[/\![^ ]*/, 'tag']],
        anchor: [[/[&*][^ ]+/, 'namespace']]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMveWFtbC95YW1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFNBQVMscUNBQXFDLFlBQVksR0FBRztBQUM3RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixFQUFFO0FBQ3RCLHNEQUFzRCxFQUFFO0FBQ3hEO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLDhCQUE4QjtBQUMzQyxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLGFBQWEsOEJBQThCO0FBQzNDLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQyxhQUFhLDBCQUEwQjtBQUN2QztBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHVDQUF1QztBQUN2Qyw0Q0FBNEM7QUFDNUMsdUNBQXVDO0FBQ3ZDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG9mZlNpZGU6IHRydWVcbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICB0b2tlblBvc3RmaXg6ICcueWFtbCcsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbJ3RydWUnLCAnVHJ1ZScsICdUUlVFJywgJ2ZhbHNlJywgJ0ZhbHNlJywgJ0ZBTFNFJywgJ251bGwnLCAnTnVsbCcsICdOdWxsJywgJ34nXSxcbiAgICBudW1iZXJJbnRlZ2VyOiAvKD86MHxbKy1dP1swLTldKykvLFxuICAgIG51bWJlckZsb2F0OiAvKD86MHxbKy1dP1swLTldKykoPzpcXC5bMC05XSspPyg/OmVbLStdWzEtOV1bMC05XSopPy8sXG4gICAgbnVtYmVyT2N0YWw6IC8wb1swLTddKy8sXG4gICAgbnVtYmVySGV4OiAvMHhbMC05YS1mQS1GXSsvLFxuICAgIG51bWJlckluZmluaXR5OiAvWystXT9cXC4oPzppbmZ8SW5mfElORikvLFxuICAgIG51bWJlck5hTjogL1xcLig/Om5hbnxOYW58TkFOKS8sXG4gICAgbnVtYmVyRGF0ZTogL1xcZHs0fS1cXGRcXGQtXFxkXFxkKFtUdCBdXFxkXFxkOlxcZFxcZDpcXGRcXGQoXFwuXFxkKyk/KCggP1srLV1cXGRcXGQ/KDpcXGRcXGQpPyl8Wik/KT8vLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2J0bmZyXFxcXFwiJ118WzAtN11bMC03XT98WzAtM11bMC03XXsyfSkvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50JyB9LFxuICAgICAgICAgICAgLy8gRGlyZWN0aXZlXG4gICAgICAgICAgICBbLyVbXiBdKy4qJC8sICdtZXRhLmRpcmVjdGl2ZSddLFxuICAgICAgICAgICAgLy8gRG9jdW1lbnQgTWFya2Vyc1xuICAgICAgICAgICAgWy8tLS0vLCAnb3BlcmF0b3JzLmRpcmVjdGl2ZXNFbmQnXSxcbiAgICAgICAgICAgIFsvXFwuezN9LywgJ29wZXJhdG9ycy5kb2N1bWVudEVuZCddLFxuICAgICAgICAgICAgLy8gQmxvY2sgU3RydWN0dXJlIEluZGljYXRvcnNcbiAgICAgICAgICAgIFsvWy0/Ol0oPz0gKS8sICdvcGVyYXRvcnMnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BhbmNob3InIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGFnSGFuZGxlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dDb2xsZWN0aW9ucycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BibG9ja1N0eWxlJyB9LFxuICAgICAgICAgICAgLy8gTnVtYmVyc1xuICAgICAgICAgICAgWy9AbnVtYmVySW50ZWdlcig/IVsgXFx0XSpcXFMrKS8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvQG51bWJlckZsb2F0KD8hWyBcXHRdKlxcUyspLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9AbnVtYmVyT2N0YWwoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbL0BudW1iZXJIZXgoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9AbnVtYmVySW5maW5pdHkoPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLmluZmluaXR5J10sXG4gICAgICAgICAgICBbL0BudW1iZXJOYU4oPyFbIFxcdF0qXFxTKykvLCAnbnVtYmVyLm5hbiddLFxuICAgICAgICAgICAgWy9AbnVtYmVyRGF0ZSg/IVsgXFx0XSpcXFMrKS8sICdudW1iZXIuZGF0ZSddLFxuICAgICAgICAgICAgLy8gS2V5OlZhbHVlIHBhaXJcbiAgICAgICAgICAgIFsvKFwiLio/XCJ8Jy4qPyd8Lio/KShbIFxcdF0qKSg6KSggfCQpLywgWyd0eXBlJywgJ3doaXRlJywgJ29wZXJhdG9ycycsICd3aGl0ZSddXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93U2NhbGFycycgfSxcbiAgICAgICAgICAgIC8vIFN0cmluZyBub2Rlc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8uKyQvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBGbG93IENvbGxlY3Rpb246IEZsb3cgTWFwcGluZ1xuICAgICAgICBvYmplY3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXG4gICAgICAgICAgICAvLyBGbG93IE1hcHBpbmcgdGVybWluYXRpb25cbiAgICAgICAgICAgIFsvXFx9LywgJ0BicmFja2V0cycsICdAcG9wJ10sXG4gICAgICAgICAgICAvLyBGbG93IE1hcHBpbmcgZGVsaW1pdGVyXG4gICAgICAgICAgICBbLywvLCAnZGVsaW1pdGVyLmNvbW1hJ10sXG4gICAgICAgICAgICAvLyBGbG93IE1hcHBpbmcgS2V5OlZhbHVlIGRlbGltaXRlclxuICAgICAgICAgICAgWy86KD89ICkvLCAnb3BlcmF0b3JzJ10sXG4gICAgICAgICAgICAvLyBGbG93IE1hcHBpbmcgS2V5OlZhbHVlIGtleVxuICAgICAgICAgICAgWy8oPzpcIi4qP1wifCcuKj8nfFteLFxce1xcW10rPykoPz06ICkvLCAndHlwZSddLFxuICAgICAgICAgICAgLy8gU3RhcnQgRmxvdyBTdHlsZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dDb2xsZWN0aW9ucycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93U2NhbGFycycgfSxcbiAgICAgICAgICAgIC8vIFNjYWxhciBEYXRhIHR5cGVzXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGFnSGFuZGxlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGFuY2hvcicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93TnVtYmVyJyB9LFxuICAgICAgICAgICAgLy8gT3RoZXIgdmFsdWUgKGtleXdvcmQgb3Igc3RyaW5nKVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXlxcfSxdKy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEZsb3cgQ29sbGVjdGlvbjogRmxvdyBTZXF1ZW5jZVxuICAgICAgICBhcnJheTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcbiAgICAgICAgICAgIC8vIEZsb3cgU2VxdWVuY2UgdGVybWluYXRpb25cbiAgICAgICAgICAgIFsvXFxdLywgJ0BicmFja2V0cycsICdAcG9wJ10sXG4gICAgICAgICAgICAvLyBGbG93IFNlcXVlbmNlIGRlbGltaXRlclxuICAgICAgICAgICAgWy8sLywgJ2RlbGltaXRlci5jb21tYSddLFxuICAgICAgICAgICAgLy8gU3RhcnQgRmxvdyBTdHlsZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZsb3dDb2xsZWN0aW9ucycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93U2NhbGFycycgfSxcbiAgICAgICAgICAgIC8vIFNjYWxhciBEYXRhIHR5cGVzXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGFnSGFuZGxlJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGFuY2hvcicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmbG93TnVtYmVyJyB9LFxuICAgICAgICAgICAgLy8gT3RoZXIgdmFsdWUgKGtleXdvcmQgb3Igc3RyaW5nKVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXlxcXSxdKy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEZpcnN0IGxpbmUgb2YgYSBCbG9jayBTdHlsZVxuICAgICAgICBtdWx0aVN0cmluZzogW1svXiggKykuKyQvLCAnc3RyaW5nJywgJ0BtdWx0aVN0cmluZ0NvbnRpbnVlZC4kMSddXSxcbiAgICAgICAgLy8gRnVydGhlciBsaW5lcyBvZiBhIEJsb2NrIFN0eWxlXG4gICAgICAgIC8vICAgV29ya2Fyb3VuZCBmb3IgaW5kZW50YXRpb24gZGV0ZWN0aW9uXG4gICAgICAgIG11bHRpU3RyaW5nQ29udGludWVkOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oICopLiskLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3BhbGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1svWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddXSxcbiAgICAgICAgLy8gT25seSBsaW5lIGNvbW1lbnRzXG4gICAgICAgIGNvbW1lbnQ6IFtbLyMuKiQvLCAnY29tbWVudCddXSxcbiAgICAgICAgLy8gU3RhcnQgRmxvdyBDb2xsZWN0aW9uc1xuICAgICAgICBmbG93Q29sbGVjdGlvbnM6IFtcbiAgICAgICAgICAgIFsvXFxbLywgJ0BicmFja2V0cycsICdAYXJyYXknXSxcbiAgICAgICAgICAgIFsvXFx7LywgJ0BicmFja2V0cycsICdAb2JqZWN0J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gU3RhcnQgRmxvdyBTY2FsYXJzIChxdW90ZWQgc3RyaW5ncylcbiAgICAgICAgZmxvd1NjYWxhcnM6IFtcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJ1teJ10qJy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bkb3VibGVRdW90ZWRTdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBkb3VibGVRdW90ZWRTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBTdGFydCBCbG9jayBTY2FsYXJcbiAgICAgICAgYmxvY2tTdHlsZTogW1svWz58XVswLTldKlsrLV0/JC8sICdvcGVyYXRvcnMnLCAnQG11bHRpU3RyaW5nJ11dLFxuICAgICAgICAvLyBOdW1iZXJzIGluIEZsb3cgQ29sbGVjdGlvbnMgKHRlcm1pbmF0ZSB3aXRoICxdfSlcbiAgICAgICAgZmxvd051bWJlcjogW1xuICAgICAgICAgICAgWy9AbnVtYmVySW50ZWdlcig/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlciddLFxuICAgICAgICAgICAgWy9AbnVtYmVyRmxvYXQoPz1bIFxcdF0qWyxcXF1cXH1dKS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvQG51bWJlck9jdGFsKD89WyBcXHRdKlssXFxdXFx9XSkvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbL0BudW1iZXJIZXgoPz1bIFxcdF0qWyxcXF1cXH1dKS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbL0BudW1iZXJJbmZpbml0eSg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5pbmZpbml0eSddLFxuICAgICAgICAgICAgWy9AbnVtYmVyTmFOKD89WyBcXHRdKlssXFxdXFx9XSkvLCAnbnVtYmVyLm5hbiddLFxuICAgICAgICAgICAgWy9AbnVtYmVyRGF0ZSg/PVsgXFx0XSpbLFxcXVxcfV0pLywgJ251bWJlci5kYXRlJ11cbiAgICAgICAgXSxcbiAgICAgICAgdGFnSGFuZGxlOiBbWy9cXCFbXiBdKi8sICd0YWcnXV0sXG4gICAgICAgIGFuY2hvcjogW1svWyYqXVteIF0rLywgJ25hbWVzcGFjZSddXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9