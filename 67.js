(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js":
/*!****************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js ***!
  \****************************************************************************************************************************/
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
        lineComment: "'",
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>'],
        ['addhandler', 'end addhandler'],
        ['class', 'end class'],
        ['enum', 'end enum'],
        ['event', 'end event'],
        ['function', 'end function'],
        ['get', 'end get'],
        ['if', 'end if'],
        ['interface', 'end interface'],
        ['module', 'end module'],
        ['namespace', 'end namespace'],
        ['operator', 'end operator'],
        ['property', 'end property'],
        ['raiseevent', 'end raiseevent'],
        ['removehandler', 'end removehandler'],
        ['select', 'end select'],
        ['set', 'end set'],
        ['structure', 'end structure'],
        ['sub', 'end sub'],
        ['synclock', 'end synclock'],
        ['try', 'end try'],
        ['while', 'end while'],
        ['with', 'end with'],
        ['using', 'end using'],
        ['do', 'loop'],
        ['for', 'next']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '<', close: '>', notIn: ['string', 'comment'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#Region\\b'),
            end: new RegExp('^\\s*#End Region\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.vb',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.angle', open: '<', close: '>' },
        // Special bracket statement pairs
        // according to https://msdn.microsoft.com/en-us/library/tsw2a11z.aspx
        {
            token: 'keyword.tag-addhandler',
            open: 'addhandler',
            close: 'end addhandler'
        },
        { token: 'keyword.tag-class', open: 'class', close: 'end class' },
        { token: 'keyword.tag-enum', open: 'enum', close: 'end enum' },
        { token: 'keyword.tag-event', open: 'event', close: 'end event' },
        {
            token: 'keyword.tag-function',
            open: 'function',
            close: 'end function'
        },
        { token: 'keyword.tag-get', open: 'get', close: 'end get' },
        { token: 'keyword.tag-if', open: 'if', close: 'end if' },
        {
            token: 'keyword.tag-interface',
            open: 'interface',
            close: 'end interface'
        },
        { token: 'keyword.tag-module', open: 'module', close: 'end module' },
        {
            token: 'keyword.tag-namespace',
            open: 'namespace',
            close: 'end namespace'
        },
        {
            token: 'keyword.tag-operator',
            open: 'operator',
            close: 'end operator'
        },
        {
            token: 'keyword.tag-property',
            open: 'property',
            close: 'end property'
        },
        {
            token: 'keyword.tag-raiseevent',
            open: 'raiseevent',
            close: 'end raiseevent'
        },
        {
            token: 'keyword.tag-removehandler',
            open: 'removehandler',
            close: 'end removehandler'
        },
        { token: 'keyword.tag-select', open: 'select', close: 'end select' },
        { token: 'keyword.tag-set', open: 'set', close: 'end set' },
        {
            token: 'keyword.tag-structure',
            open: 'structure',
            close: 'end structure'
        },
        { token: 'keyword.tag-sub', open: 'sub', close: 'end sub' },
        {
            token: 'keyword.tag-synclock',
            open: 'synclock',
            close: 'end synclock'
        },
        { token: 'keyword.tag-try', open: 'try', close: 'end try' },
        { token: 'keyword.tag-while', open: 'while', close: 'end while' },
        { token: 'keyword.tag-with', open: 'with', close: 'end with' },
        // Other pairs
        { token: 'keyword.tag-using', open: 'using', close: 'end using' },
        { token: 'keyword.tag-do', open: 'do', close: 'loop' },
        { token: 'keyword.tag-for', open: 'for', close: 'next' }
    ],
    keywords: [
        'AddHandler',
        'AddressOf',
        'Alias',
        'And',
        'AndAlso',
        'As',
        'Async',
        'Boolean',
        'ByRef',
        'Byte',
        'ByVal',
        'Call',
        'Case',
        'Catch',
        'CBool',
        'CByte',
        'CChar',
        'CDate',
        'CDbl',
        'CDec',
        'Char',
        'CInt',
        'Class',
        'CLng',
        'CObj',
        'Const',
        'Continue',
        'CSByte',
        'CShort',
        'CSng',
        'CStr',
        'CType',
        'CUInt',
        'CULng',
        'CUShort',
        'Date',
        'Decimal',
        'Declare',
        'Default',
        'Delegate',
        'Dim',
        'DirectCast',
        'Do',
        'Double',
        'Each',
        'Else',
        'ElseIf',
        'End',
        'EndIf',
        'Enum',
        'Erase',
        'Error',
        'Event',
        'Exit',
        'False',
        'Finally',
        'For',
        'Friend',
        'Function',
        'Get',
        'GetType',
        'GetXMLNamespace',
        'Global',
        'GoSub',
        'GoTo',
        'Handles',
        'If',
        'Implements',
        'Imports',
        'In',
        'Inherits',
        'Integer',
        'Interface',
        'Is',
        'IsNot',
        'Let',
        'Lib',
        'Like',
        'Long',
        'Loop',
        'Me',
        'Mod',
        'Module',
        'MustInherit',
        'MustOverride',
        'MyBase',
        'MyClass',
        'NameOf',
        'Namespace',
        'Narrowing',
        'New',
        'Next',
        'Not',
        'Nothing',
        'NotInheritable',
        'NotOverridable',
        'Object',
        'Of',
        'On',
        'Operator',
        'Option',
        'Optional',
        'Or',
        'OrElse',
        'Out',
        'Overloads',
        'Overridable',
        'Overrides',
        'ParamArray',
        'Partial',
        'Private',
        'Property',
        'Protected',
        'Public',
        'RaiseEvent',
        'ReadOnly',
        'ReDim',
        'RemoveHandler',
        'Resume',
        'Return',
        'SByte',
        'Select',
        'Set',
        'Shadows',
        'Shared',
        'Short',
        'Single',
        'Static',
        'Step',
        'Stop',
        'String',
        'Structure',
        'Sub',
        'SyncLock',
        'Then',
        'Throw',
        'To',
        'True',
        'Try',
        'TryCast',
        'TypeOf',
        'UInteger',
        'ULong',
        'UShort',
        'Using',
        'Variant',
        'Wend',
        'When',
        'While',
        'Widening',
        'With',
        'WithEvents',
        'WriteOnly',
        'Xor'
    ],
    tagwords: [
        'If',
        'Sub',
        'Select',
        'Try',
        'Class',
        'Enum',
        'Function',
        'Get',
        'Interface',
        'Module',
        'Namespace',
        'Operator',
        'Set',
        'Structure',
        'Using',
        'While',
        'With',
        'Do',
        'Loop',
        'For',
        'Next',
        'Property',
        'Continue',
        'AddHandler',
        'RemoveHandler',
        'Event',
        'RaiseEvent',
        'SyncLock'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            // special ending tag-words
            [/next(?!\w)/, { token: 'keyword.tag-for' }],
            [/loop(?!\w)/, { token: 'keyword.tag-do' }],
            // usual ending tags
            [
                /end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/,
                { token: 'keyword.tag-$1' }
            ],
            // identifiers, tagwords, and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@tagwords': { token: 'keyword.tag-$0' },
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // Preprocessor directive
            [/^\s*#\w+/, 'keyword'],
            // numbers
            [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
            [/&0[0-7]+(@integersuffix)/, 'number.octal'],
            [/\d+(@integersuffix)/, 'number'],
            // date literal
            [/#.*#/, 'number'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // strings
            [/["\u201c\u201d]/, { token: 'string.quote', next: '@string' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/(\'|REM(?!\w)).*$/, 'comment']
        ],
        string: [
            [/[^"\u201c\u201d]+/, 'string'],
            [/["\u201c\u201d]{2}/, 'string.escape'],
            [/["\u201c\u201d]C?/, { token: 'string.quote', next: '@pop' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvdmIvdmIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksaUNBQWlDO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUNBQXFDLFlBQVksR0FBRztBQUM3RCxTQUFTLGtEQUFrRDtBQUMzRCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLGtEQUFrRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUyxnRUFBZ0U7QUFDekUsU0FBUyw2REFBNkQ7QUFDdEUsU0FBUyxnRUFBZ0U7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUywwREFBMEQ7QUFDbkUsU0FBUyx1REFBdUQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUyxtRUFBbUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUyxtRUFBbUU7QUFDNUUsU0FBUywwREFBMEQ7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUywwREFBMEQ7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUywwREFBMEQ7QUFDbkUsU0FBUyxnRUFBZ0U7QUFDekUsU0FBUyw2REFBNkQ7QUFDdEU7QUFDQSxTQUFTLGdFQUFnRTtBQUN6RSxTQUFTLHFEQUFxRDtBQUM5RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUNBQWlDLHlDQUF5QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixFQUFFO0FBQ2hDLG1DQUFtQyxzQ0FBc0M7QUFDekU7QUFDQTtBQUNBIiwiZmlsZSI6IjY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6IFwiJ1wiLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXSxcbiAgICAgICAgWyc8JywgJz4nXSxcbiAgICAgICAgWydhZGRoYW5kbGVyJywgJ2VuZCBhZGRoYW5kbGVyJ10sXG4gICAgICAgIFsnY2xhc3MnLCAnZW5kIGNsYXNzJ10sXG4gICAgICAgIFsnZW51bScsICdlbmQgZW51bSddLFxuICAgICAgICBbJ2V2ZW50JywgJ2VuZCBldmVudCddLFxuICAgICAgICBbJ2Z1bmN0aW9uJywgJ2VuZCBmdW5jdGlvbiddLFxuICAgICAgICBbJ2dldCcsICdlbmQgZ2V0J10sXG4gICAgICAgIFsnaWYnLCAnZW5kIGlmJ10sXG4gICAgICAgIFsnaW50ZXJmYWNlJywgJ2VuZCBpbnRlcmZhY2UnXSxcbiAgICAgICAgWydtb2R1bGUnLCAnZW5kIG1vZHVsZSddLFxuICAgICAgICBbJ25hbWVzcGFjZScsICdlbmQgbmFtZXNwYWNlJ10sXG4gICAgICAgIFsnb3BlcmF0b3InLCAnZW5kIG9wZXJhdG9yJ10sXG4gICAgICAgIFsncHJvcGVydHknLCAnZW5kIHByb3BlcnR5J10sXG4gICAgICAgIFsncmFpc2VldmVudCcsICdlbmQgcmFpc2VldmVudCddLFxuICAgICAgICBbJ3JlbW92ZWhhbmRsZXInLCAnZW5kIHJlbW92ZWhhbmRsZXInXSxcbiAgICAgICAgWydzZWxlY3QnLCAnZW5kIHNlbGVjdCddLFxuICAgICAgICBbJ3NldCcsICdlbmQgc2V0J10sXG4gICAgICAgIFsnc3RydWN0dXJlJywgJ2VuZCBzdHJ1Y3R1cmUnXSxcbiAgICAgICAgWydzdWInLCAnZW5kIHN1YiddLFxuICAgICAgICBbJ3N5bmNsb2NrJywgJ2VuZCBzeW5jbG9jayddLFxuICAgICAgICBbJ3RyeScsICdlbmQgdHJ5J10sXG4gICAgICAgIFsnd2hpbGUnLCAnZW5kIHdoaWxlJ10sXG4gICAgICAgIFsnd2l0aCcsICdlbmQgd2l0aCddLFxuICAgICAgICBbJ3VzaW5nJywgJ2VuZCB1c2luZyddLFxuICAgICAgICBbJ2RvJywgJ2xvb3AnXSxcbiAgICAgICAgWydmb3InLCAnbmV4dCddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNSZWdpb25cXFxcYicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqI0VuZCBSZWdpb25cXFxcYicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy52YicsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hcnJheScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnLCBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgLy8gU3BlY2lhbCBicmFja2V0IHN0YXRlbWVudCBwYWlyc1xuICAgICAgICAvLyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS90c3cyYTExei5hc3B4XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctYWRkaGFuZGxlcicsXG4gICAgICAgICAgICBvcGVuOiAnYWRkaGFuZGxlcicsXG4gICAgICAgICAgICBjbG9zZTogJ2VuZCBhZGRoYW5kbGVyJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctY2xhc3MnLCBvcGVuOiAnY2xhc3MnLCBjbG9zZTogJ2VuZCBjbGFzcycgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWVudW0nLCBvcGVuOiAnZW51bScsIGNsb3NlOiAnZW5kIGVudW0nIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1ldmVudCcsIG9wZW46ICdldmVudCcsIGNsb3NlOiAnZW5kIGV2ZW50JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQudGFnLWZ1bmN0aW9uJyxcbiAgICAgICAgICAgIG9wZW46ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBjbG9zZTogJ2VuZCBmdW5jdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWdldCcsIG9wZW46ICdnZXQnLCBjbG9zZTogJ2VuZCBnZXQnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1pZicsIG9wZW46ICdpZicsIGNsb3NlOiAnZW5kIGlmJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQudGFnLWludGVyZmFjZScsXG4gICAgICAgICAgICBvcGVuOiAnaW50ZXJmYWNlJyxcbiAgICAgICAgICAgIGNsb3NlOiAnZW5kIGludGVyZmFjZSdcbiAgICAgICAgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLW1vZHVsZScsIG9wZW46ICdtb2R1bGUnLCBjbG9zZTogJ2VuZCBtb2R1bGUnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctbmFtZXNwYWNlJyxcbiAgICAgICAgICAgIG9wZW46ICduYW1lc3BhY2UnLFxuICAgICAgICAgICAgY2xvc2U6ICdlbmQgbmFtZXNwYWNlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQudGFnLW9wZXJhdG9yJyxcbiAgICAgICAgICAgIG9wZW46ICdvcGVyYXRvcicsXG4gICAgICAgICAgICBjbG9zZTogJ2VuZCBvcGVyYXRvcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkLnRhZy1wcm9wZXJ0eScsXG4gICAgICAgICAgICBvcGVuOiAncHJvcGVydHknLFxuICAgICAgICAgICAgY2xvc2U6ICdlbmQgcHJvcGVydHknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctcmFpc2VldmVudCcsXG4gICAgICAgICAgICBvcGVuOiAncmFpc2VldmVudCcsXG4gICAgICAgICAgICBjbG9zZTogJ2VuZCByYWlzZWV2ZW50J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQudGFnLXJlbW92ZWhhbmRsZXInLFxuICAgICAgICAgICAgb3BlbjogJ3JlbW92ZWhhbmRsZXInLFxuICAgICAgICAgICAgY2xvc2U6ICdlbmQgcmVtb3ZlaGFuZGxlcidcbiAgICAgICAgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXNlbGVjdCcsIG9wZW46ICdzZWxlY3QnLCBjbG9zZTogJ2VuZCBzZWxlY3QnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy1zZXQnLCBvcGVuOiAnc2V0JywgY2xvc2U6ICdlbmQgc2V0JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQudGFnLXN0cnVjdHVyZScsXG4gICAgICAgICAgICBvcGVuOiAnc3RydWN0dXJlJyxcbiAgICAgICAgICAgIGNsb3NlOiAnZW5kIHN0cnVjdHVyZSdcbiAgICAgICAgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXN1YicsIG9wZW46ICdzdWInLCBjbG9zZTogJ2VuZCBzdWInIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC50YWctc3luY2xvY2snLFxuICAgICAgICAgICAgb3BlbjogJ3N5bmNsb2NrJyxcbiAgICAgICAgICAgIGNsb3NlOiAnZW5kIHN5bmNsb2NrJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctdHJ5Jywgb3BlbjogJ3RyeScsIGNsb3NlOiAnZW5kIHRyeScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXdoaWxlJywgb3BlbjogJ3doaWxlJywgY2xvc2U6ICdlbmQgd2hpbGUnIH0sXG4gICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy13aXRoJywgb3BlbjogJ3dpdGgnLCBjbG9zZTogJ2VuZCB3aXRoJyB9LFxuICAgICAgICAvLyBPdGhlciBwYWlyc1xuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctdXNpbmcnLCBvcGVuOiAndXNpbmcnLCBjbG9zZTogJ2VuZCB1c2luZycgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWRvJywgb3BlbjogJ2RvJywgY2xvc2U6ICdsb29wJyB9LFxuICAgICAgICB7IHRva2VuOiAna2V5d29yZC50YWctZm9yJywgb3BlbjogJ2ZvcicsIGNsb3NlOiAnbmV4dCcgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ0FkZEhhbmRsZXInLFxuICAgICAgICAnQWRkcmVzc09mJyxcbiAgICAgICAgJ0FsaWFzJyxcbiAgICAgICAgJ0FuZCcsXG4gICAgICAgICdBbmRBbHNvJyxcbiAgICAgICAgJ0FzJyxcbiAgICAgICAgJ0FzeW5jJyxcbiAgICAgICAgJ0Jvb2xlYW4nLFxuICAgICAgICAnQnlSZWYnLFxuICAgICAgICAnQnl0ZScsXG4gICAgICAgICdCeVZhbCcsXG4gICAgICAgICdDYWxsJyxcbiAgICAgICAgJ0Nhc2UnLFxuICAgICAgICAnQ2F0Y2gnLFxuICAgICAgICAnQ0Jvb2wnLFxuICAgICAgICAnQ0J5dGUnLFxuICAgICAgICAnQ0NoYXInLFxuICAgICAgICAnQ0RhdGUnLFxuICAgICAgICAnQ0RibCcsXG4gICAgICAgICdDRGVjJyxcbiAgICAgICAgJ0NoYXInLFxuICAgICAgICAnQ0ludCcsXG4gICAgICAgICdDbGFzcycsXG4gICAgICAgICdDTG5nJyxcbiAgICAgICAgJ0NPYmonLFxuICAgICAgICAnQ29uc3QnLFxuICAgICAgICAnQ29udGludWUnLFxuICAgICAgICAnQ1NCeXRlJyxcbiAgICAgICAgJ0NTaG9ydCcsXG4gICAgICAgICdDU25nJyxcbiAgICAgICAgJ0NTdHInLFxuICAgICAgICAnQ1R5cGUnLFxuICAgICAgICAnQ1VJbnQnLFxuICAgICAgICAnQ1VMbmcnLFxuICAgICAgICAnQ1VTaG9ydCcsXG4gICAgICAgICdEYXRlJyxcbiAgICAgICAgJ0RlY2ltYWwnLFxuICAgICAgICAnRGVjbGFyZScsXG4gICAgICAgICdEZWZhdWx0JyxcbiAgICAgICAgJ0RlbGVnYXRlJyxcbiAgICAgICAgJ0RpbScsXG4gICAgICAgICdEaXJlY3RDYXN0JyxcbiAgICAgICAgJ0RvJyxcbiAgICAgICAgJ0RvdWJsZScsXG4gICAgICAgICdFYWNoJyxcbiAgICAgICAgJ0Vsc2UnLFxuICAgICAgICAnRWxzZUlmJyxcbiAgICAgICAgJ0VuZCcsXG4gICAgICAgICdFbmRJZicsXG4gICAgICAgICdFbnVtJyxcbiAgICAgICAgJ0VyYXNlJyxcbiAgICAgICAgJ0Vycm9yJyxcbiAgICAgICAgJ0V2ZW50JyxcbiAgICAgICAgJ0V4aXQnLFxuICAgICAgICAnRmFsc2UnLFxuICAgICAgICAnRmluYWxseScsXG4gICAgICAgICdGb3InLFxuICAgICAgICAnRnJpZW5kJyxcbiAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgJ0dldCcsXG4gICAgICAgICdHZXRUeXBlJyxcbiAgICAgICAgJ0dldFhNTE5hbWVzcGFjZScsXG4gICAgICAgICdHbG9iYWwnLFxuICAgICAgICAnR29TdWInLFxuICAgICAgICAnR29UbycsXG4gICAgICAgICdIYW5kbGVzJyxcbiAgICAgICAgJ0lmJyxcbiAgICAgICAgJ0ltcGxlbWVudHMnLFxuICAgICAgICAnSW1wb3J0cycsXG4gICAgICAgICdJbicsXG4gICAgICAgICdJbmhlcml0cycsXG4gICAgICAgICdJbnRlZ2VyJyxcbiAgICAgICAgJ0ludGVyZmFjZScsXG4gICAgICAgICdJcycsXG4gICAgICAgICdJc05vdCcsXG4gICAgICAgICdMZXQnLFxuICAgICAgICAnTGliJyxcbiAgICAgICAgJ0xpa2UnLFxuICAgICAgICAnTG9uZycsXG4gICAgICAgICdMb29wJyxcbiAgICAgICAgJ01lJyxcbiAgICAgICAgJ01vZCcsXG4gICAgICAgICdNb2R1bGUnLFxuICAgICAgICAnTXVzdEluaGVyaXQnLFxuICAgICAgICAnTXVzdE92ZXJyaWRlJyxcbiAgICAgICAgJ015QmFzZScsXG4gICAgICAgICdNeUNsYXNzJyxcbiAgICAgICAgJ05hbWVPZicsXG4gICAgICAgICdOYW1lc3BhY2UnLFxuICAgICAgICAnTmFycm93aW5nJyxcbiAgICAgICAgJ05ldycsXG4gICAgICAgICdOZXh0JyxcbiAgICAgICAgJ05vdCcsXG4gICAgICAgICdOb3RoaW5nJyxcbiAgICAgICAgJ05vdEluaGVyaXRhYmxlJyxcbiAgICAgICAgJ05vdE92ZXJyaWRhYmxlJyxcbiAgICAgICAgJ09iamVjdCcsXG4gICAgICAgICdPZicsXG4gICAgICAgICdPbicsXG4gICAgICAgICdPcGVyYXRvcicsXG4gICAgICAgICdPcHRpb24nLFxuICAgICAgICAnT3B0aW9uYWwnLFxuICAgICAgICAnT3InLFxuICAgICAgICAnT3JFbHNlJyxcbiAgICAgICAgJ091dCcsXG4gICAgICAgICdPdmVybG9hZHMnLFxuICAgICAgICAnT3ZlcnJpZGFibGUnLFxuICAgICAgICAnT3ZlcnJpZGVzJyxcbiAgICAgICAgJ1BhcmFtQXJyYXknLFxuICAgICAgICAnUGFydGlhbCcsXG4gICAgICAgICdQcml2YXRlJyxcbiAgICAgICAgJ1Byb3BlcnR5JyxcbiAgICAgICAgJ1Byb3RlY3RlZCcsXG4gICAgICAgICdQdWJsaWMnLFxuICAgICAgICAnUmFpc2VFdmVudCcsXG4gICAgICAgICdSZWFkT25seScsXG4gICAgICAgICdSZURpbScsXG4gICAgICAgICdSZW1vdmVIYW5kbGVyJyxcbiAgICAgICAgJ1Jlc3VtZScsXG4gICAgICAgICdSZXR1cm4nLFxuICAgICAgICAnU0J5dGUnLFxuICAgICAgICAnU2VsZWN0JyxcbiAgICAgICAgJ1NldCcsXG4gICAgICAgICdTaGFkb3dzJyxcbiAgICAgICAgJ1NoYXJlZCcsXG4gICAgICAgICdTaG9ydCcsXG4gICAgICAgICdTaW5nbGUnLFxuICAgICAgICAnU3RhdGljJyxcbiAgICAgICAgJ1N0ZXAnLFxuICAgICAgICAnU3RvcCcsXG4gICAgICAgICdTdHJpbmcnLFxuICAgICAgICAnU3RydWN0dXJlJyxcbiAgICAgICAgJ1N1YicsXG4gICAgICAgICdTeW5jTG9jaycsXG4gICAgICAgICdUaGVuJyxcbiAgICAgICAgJ1Rocm93JyxcbiAgICAgICAgJ1RvJyxcbiAgICAgICAgJ1RydWUnLFxuICAgICAgICAnVHJ5JyxcbiAgICAgICAgJ1RyeUNhc3QnLFxuICAgICAgICAnVHlwZU9mJyxcbiAgICAgICAgJ1VJbnRlZ2VyJyxcbiAgICAgICAgJ1VMb25nJyxcbiAgICAgICAgJ1VTaG9ydCcsXG4gICAgICAgICdVc2luZycsXG4gICAgICAgICdWYXJpYW50JyxcbiAgICAgICAgJ1dlbmQnLFxuICAgICAgICAnV2hlbicsXG4gICAgICAgICdXaGlsZScsXG4gICAgICAgICdXaWRlbmluZycsXG4gICAgICAgICdXaXRoJyxcbiAgICAgICAgJ1dpdGhFdmVudHMnLFxuICAgICAgICAnV3JpdGVPbmx5JyxcbiAgICAgICAgJ1hvcidcbiAgICBdLFxuICAgIHRhZ3dvcmRzOiBbXG4gICAgICAgICdJZicsXG4gICAgICAgICdTdWInLFxuICAgICAgICAnU2VsZWN0JyxcbiAgICAgICAgJ1RyeScsXG4gICAgICAgICdDbGFzcycsXG4gICAgICAgICdFbnVtJyxcbiAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgJ0dldCcsXG4gICAgICAgICdJbnRlcmZhY2UnLFxuICAgICAgICAnTW9kdWxlJyxcbiAgICAgICAgJ05hbWVzcGFjZScsXG4gICAgICAgICdPcGVyYXRvcicsXG4gICAgICAgICdTZXQnLFxuICAgICAgICAnU3RydWN0dXJlJyxcbiAgICAgICAgJ1VzaW5nJyxcbiAgICAgICAgJ1doaWxlJyxcbiAgICAgICAgJ1dpdGgnLFxuICAgICAgICAnRG8nLFxuICAgICAgICAnTG9vcCcsXG4gICAgICAgICdGb3InLFxuICAgICAgICAnTmV4dCcsXG4gICAgICAgICdQcm9wZXJ0eScsXG4gICAgICAgICdDb250aW51ZScsXG4gICAgICAgICdBZGRIYW5kbGVyJyxcbiAgICAgICAgJ1JlbW92ZUhhbmRsZXInLFxuICAgICAgICAnRXZlbnQnLFxuICAgICAgICAnUmFpc2VFdmVudCcsXG4gICAgICAgICdTeW5jTG9jaydcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PztcXC4sOiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIGludGVnZXJzdWZmaXg6IC9VP1tESSVMJlNAXT8vLFxuICAgIGZsb2F0c3VmZml4OiAvW1IjRiFdPy8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gc3BlY2lhbCBlbmRpbmcgdGFnLXdvcmRzXG4gICAgICAgICAgICBbL25leHQoPyFcXHcpLywgeyB0b2tlbjogJ2tleXdvcmQudGFnLWZvcicgfV0sXG4gICAgICAgICAgICBbL2xvb3AoPyFcXHcpLywgeyB0b2tlbjogJ2tleXdvcmQudGFnLWRvJyB9XSxcbiAgICAgICAgICAgIC8vIHVzdWFsIGVuZGluZyB0YWdzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL2VuZFxccysoPyFmb3J8ZG8pKGFkZGhhbmRsZXJ8Y2xhc3N8ZW51bXxldmVudHxmdW5jdGlvbnxnZXR8aWZ8aW50ZXJmYWNlfG1vZHVsZXxuYW1lc3BhY2V8b3BlcmF0b3J8cHJvcGVydHl8cmFpc2VldmVudHxyZW1vdmVoYW5kbGVyfHNlbGVjdHxzZXR8c3RydWN0dXJlfHN1YnxzeW5jbG9ja3x0cnl8d2hpbGV8d2l0aHx1c2luZykvLFxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLnRhZy0kMScgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzLCB0YWd3b3JkcywgYW5kIGtleXdvcmRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAdGFnd29yZHMnOiB7IHRva2VuOiAna2V5d29yZC50YWctJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlXG4gICAgICAgICAgICBbL15cXHMqI1xcdysvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFxkK2UoW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhlW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8mSFswLTlhLWZdKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8mMFswLTddKyhAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbL1xcZCsoQGludGVnZXJzdWZmaXgpLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGF0ZSBsaXRlcmFsXG4gICAgICAgICAgICBbLyMuKiMvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvW1wiXFx1MjAxY1xcdTIwMWRdLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nJyB9XVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLyhcXCd8UkVNKD8hXFx3KSkuKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlwiXFx1MjAxY1xcdTIwMWRdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvW1wiXFx1MjAxY1xcdTIwMWRdezJ9LywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvW1wiXFx1MjAxY1xcdTIwMWRdQz8vLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==