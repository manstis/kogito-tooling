(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":
/*!*******************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: flattenDiagnosticMessageText, Adapter, LibFiles, DiagnosticsAdapter, SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, OccurrencesAdapter, DefinitionAdapter, ReferenceAdapter, OutlineAdapter, Kind, FormatHelper, FormatAdapter, FormatOnTypeAdapter, CodeActionAdaptor, RenameAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenDiagnosticMessageText", function() { return flattenDiagnosticMessageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibFiles", function() { return LibFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsAdapter", function() { return DiagnosticsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestAdapter", function() { return SuggestAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpAdapter", function() { return SignatureHelpAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickInfoAdapter", function() { return QuickInfoAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrencesAdapter", function() { return OccurrencesAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineAdapter", function() { return OutlineAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatHelper", function() { return FormatHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAdapter", function() { return FormatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatOnTypeAdapter", function() { return FormatOnTypeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionAdaptor", function() { return CodeActionAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameAdapter", function() { return RenameAdapter; });
/* harmony import */ var _lib_lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib.index.js */ "../../node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js");
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillers/monaco-editor-core.js */ "../../node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//#region utils copied from typescript to prevent loading the entire typescriptServices ---
var IndentStyle;
(function (IndentStyle) {
    IndentStyle[IndentStyle["None"] = 0] = "None";
    IndentStyle[IndentStyle["Block"] = 1] = "Block";
    IndentStyle[IndentStyle["Smart"] = 2] = "Smart";
})(IndentStyle || (IndentStyle = {}));
function flattenDiagnosticMessageText(diag, newLine, indent) {
    if (indent === void 0) { indent = 0; }
    if (typeof diag === 'string') {
        return diag;
    }
    else if (diag === undefined) {
        return '';
    }
    var result = '';
    if (indent) {
        result += newLine;
        for (var i = 0; i < indent; i++) {
            result += '  ';
        }
    }
    result += diag.messageText;
    indent++;
    if (diag.next) {
        for (var _i = 0, _a = diag.next; _i < _a.length; _i++) {
            var kid = _a[_i];
            result += flattenDiagnosticMessageText(kid, newLine, indent);
        }
    }
    return result;
}
function displayPartsToString(displayParts) {
    if (displayParts) {
        return displayParts.map(function (displayPart) { return displayPart.text; }).join('');
    }
    return '';
}
//#endregion
var Adapter = /** @class */ (function () {
    function Adapter(_worker) {
        this._worker = _worker;
    }
    // protected _positionToOffset(model: editor.ITextModel, position: monaco.IPosition): number {
    // 	return model.getOffsetAt(position);
    // }
    // protected _offsetToPosition(model: editor.ITextModel, offset: number): monaco.IPosition {
    // 	return model.getPositionAt(offset);
    // }
    Adapter.prototype._textSpanToRange = function (model, span) {
        var p1 = model.getPositionAt(span.start);
        var p2 = model.getPositionAt(span.start + span.length);
        var startLineNumber = p1.lineNumber, startColumn = p1.column;
        var endLineNumber = p2.lineNumber, endColumn = p2.column;
        return { startLineNumber: startLineNumber, startColumn: startColumn, endLineNumber: endLineNumber, endColumn: endColumn };
    };
    return Adapter;
}());

// --- lib files
var LibFiles = /** @class */ (function () {
    function LibFiles(_worker) {
        this._worker = _worker;
        this._libFiles = {};
        this._hasFetchedLibFiles = false;
        this._fetchLibFilesPromise = null;
    }
    LibFiles.prototype.isLibFile = function (uri) {
        if (!uri) {
            return false;
        }
        if (uri.path.indexOf('/lib.') === 0) {
            return !!_lib_lib_index_js__WEBPACK_IMPORTED_MODULE_0__["libFileSet"][uri.path.slice(1)];
        }
        return false;
    };
    LibFiles.prototype.getOrCreateModel = function (uri) {
        var model = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModel(uri);
        if (model) {
            return model;
        }
        if (this.isLibFile(uri) && this._hasFetchedLibFiles) {
            return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].createModel(this._libFiles[uri.path.slice(1)], 'javascript', uri);
        }
        return null;
    };
    LibFiles.prototype._containsLibFile = function (uris) {
        for (var _i = 0, uris_1 = uris; _i < uris_1.length; _i++) {
            var uri = uris_1[_i];
            if (this.isLibFile(uri)) {
                return true;
            }
        }
        return false;
    };
    LibFiles.prototype.fetchLibFilesIfNecessary = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._containsLibFile(uris)) {
                            // no lib files necessary
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._fetchLibFiles()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LibFiles.prototype._fetchLibFiles = function () {
        var _this = this;
        if (!this._fetchLibFilesPromise) {
            this._fetchLibFilesPromise = this._worker()
                .then(function (w) { return w.getLibFiles(); })
                .then(function (libFiles) {
                _this._hasFetchedLibFiles = true;
                _this._libFiles = libFiles;
            });
        }
        return this._fetchLibFilesPromise;
    };
    return LibFiles;
}());

// --- diagnostics --- ---
var DiagnosticCategory;
(function (DiagnosticCategory) {
    DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
    DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
    DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
    DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
})(DiagnosticCategory || (DiagnosticCategory = {}));
var DiagnosticsAdapter = /** @class */ (function (_super) {
    __extends(DiagnosticsAdapter, _super);
    function DiagnosticsAdapter(_libFiles, _defaults, _selector, worker) {
        var _this = _super.call(this, worker) || this;
        _this._libFiles = _libFiles;
        _this._defaults = _defaults;
        _this._selector = _selector;
        _this._disposables = [];
        _this._listener = Object.create(null);
        var onModelAdd = function (model) {
            if (model.getModeId() !== _selector) {
                return;
            }
            var handle;
            var changeSubscription = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model); }, 500);
            });
            _this._listener[model.uri.toString()] = {
                dispose: function () {
                    changeSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            _this._doValidate(model);
        };
        var onModelRemoved = function (model) {
            _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].setModelMarkers(model, _this._selector, []);
            var key = model.uri.toString();
            if (_this._listener[key]) {
                _this._listener[key].dispose();
                delete _this._listener[key];
            }
        };
        _this._disposables.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].onDidCreateModel(onModelAdd));
        _this._disposables.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].onWillDisposeModel(onModelRemoved));
        _this._disposables.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        _this._disposables.push({
            dispose: function () {
                for (var _i = 0, _a = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModels(); _i < _a.length; _i++) {
                    var model = _a[_i];
                    onModelRemoved(model);
                }
            }
        });
        var recomputeDiagostics = function () {
            // redo diagnostics when options change
            for (var _i = 0, _a = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModels(); _i < _a.length; _i++) {
                var model = _a[_i];
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics));
        _this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModels().forEach(onModelAdd);
        return _this;
    }
    DiagnosticsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnosticsAdapter.prototype._doValidate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var worker, promises, _a, noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics, allDiagnostics, diagnostics, relatedUris;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._worker(model.uri)];
                    case 1:
                        worker = _b.sent();
                        if (model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        promises = [];
                        _a = this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _a.noSyntaxValidation, noSemanticValidation = _a.noSemanticValidation, noSuggestionDiagnostics = _a.noSuggestionDiagnostics;
                        if (!noSyntaxValidation) {
                            promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
                        }
                        if (!noSemanticValidation) {
                            promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
                        }
                        if (!noSuggestionDiagnostics) {
                            promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        allDiagnostics = _b.sent();
                        if (!allDiagnostics || model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        diagnostics = allDiagnostics
                            .reduce(function (p, c) { return c.concat(p); }, [])
                            .filter(function (d) {
                            return (_this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) ===
                                -1;
                        });
                        relatedUris = diagnostics
                            .map(function (d) { return d.relatedInformation || []; })
                            .reduce(function (p, c) { return c.concat(p); }, [])
                            .map(function (relatedInformation) {
                            return relatedInformation.file ? _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(relatedInformation.file.fileName) : null;
                        });
                        return [4 /*yield*/, this._libFiles.fetchLibFilesIfNecessary(relatedUris)];
                    case 3:
                        _b.sent();
                        if (model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].setModelMarkers(model, this._selector, diagnostics.map(function (d) { return _this._convertDiagnostics(model, d); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    DiagnosticsAdapter.prototype._convertDiagnostics = function (model, diag) {
        var diagStart = diag.start || 0;
        var diagLength = diag.length || 1;
        var _a = model.getPositionAt(diagStart), startLineNumber = _a.lineNumber, startColumn = _a.column;
        var _b = model.getPositionAt(diagStart + diagLength), endLineNumber = _b.lineNumber, endColumn = _b.column;
        var tags = [];
        if (diag.reportsUnnecessary) {
            tags.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerTag"].Unnecessary);
        }
        if (diag.reportsDeprecated) {
            tags.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerTag"].Deprecated);
        }
        return {
            severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: flattenDiagnosticMessageText(diag.messageText, '\n'),
            code: diag.code.toString(),
            tags: tags,
            relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
        };
    };
    DiagnosticsAdapter.prototype._convertRelatedInformation = function (model, relatedInformation) {
        var _this = this;
        if (!relatedInformation) {
            return;
        }
        var result = [];
        relatedInformation.forEach(function (info) {
            var relatedResource = model;
            if (info.file) {
                var relatedResourceUri = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(info.file.fileName);
                relatedResource = _this._libFiles.getOrCreateModel(relatedResourceUri);
            }
            if (!relatedResource) {
                return;
            }
            var infoStart = info.start || 0;
            var infoLength = info.length || 1;
            var _a = relatedResource.getPositionAt(infoStart), startLineNumber = _a.lineNumber, startColumn = _a.column;
            var _b = relatedResource.getPositionAt(infoStart + infoLength), endLineNumber = _b.lineNumber, endColumn = _b.column;
            result.push({
                resource: relatedResource.uri,
                startLineNumber: startLineNumber,
                startColumn: startColumn,
                endLineNumber: endLineNumber,
                endColumn: endColumn,
                message: flattenDiagnosticMessageText(info.messageText, '\n')
            });
        });
        return result;
    };
    DiagnosticsAdapter.prototype._tsDiagnosticCategoryToMarkerSeverity = function (category) {
        switch (category) {
            case DiagnosticCategory.Error:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Error;
            case DiagnosticCategory.Message:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Info;
            case DiagnosticCategory.Warning:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Warning;
            case DiagnosticCategory.Suggestion:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Hint;
        }
        return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Info;
    };
    return DiagnosticsAdapter;
}(Adapter));

var SuggestAdapter = /** @class */ (function (_super) {
    __extends(SuggestAdapter, _super);
    function SuggestAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuggestAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.'];
        },
        enumerable: false,
        configurable: true
    });
    SuggestAdapter.prototype.provideCompletionItems = function (model, position, _context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var wordInfo, wordRange, resource, offset, worker, info, suggestions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wordInfo = model.getWordUntilPosition(position);
                        wordRange = new _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Range"](position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCompletionsAtPosition(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        suggestions = info.entries.map(function (entry) {
                            var _a;
                            var range = wordRange;
                            if (entry.replacementSpan) {
                                var p1 = model.getPositionAt(entry.replacementSpan.start);
                                var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                                range = new _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Range"](p1.lineNumber, p1.column, p2.lineNumber, p2.column);
                            }
                            var tags = [];
                            if (((_a = entry.kindModifiers) === null || _a === void 0 ? void 0 : _a.indexOf('deprecated')) !== -1) {
                                tags.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemTag.Deprecated);
                            }
                            return {
                                uri: resource,
                                position: position,
                                offset: offset,
                                range: range,
                                label: entry.name,
                                insertText: entry.name,
                                sortText: entry.sortText,
                                kind: SuggestAdapter.convertKind(entry.kind),
                                tags: tags
                            };
                        });
                        return [2 /*return*/, {
                                suggestions: suggestions
                            }];
                }
            });
        });
    };
    SuggestAdapter.prototype.resolveCompletionItem = function (item, token) {
        return __awaiter(this, void 0, void 0, function () {
            var myItem, resource, position, offset, worker, details;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myItem = item;
                        resource = myItem.uri;
                        position = myItem.position;
                        offset = myItem.offset;
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label)];
                    case 2:
                        details = _a.sent();
                        if (!details) {
                            return [2 /*return*/, myItem];
                        }
                        return [2 /*return*/, {
                                uri: resource,
                                position: position,
                                label: details.name,
                                kind: SuggestAdapter.convertKind(details.kind),
                                detail: displayPartsToString(details.displayParts),
                                documentation: {
                                    value: SuggestAdapter.createDocumentationString(details)
                                }
                            }];
                }
            });
        });
    };
    SuggestAdapter.convertKind = function (kind) {
        switch (kind) {
            case Kind.primitiveType:
            case Kind.keyword:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Keyword;
            case Kind.variable:
            case Kind.localVariable:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Variable;
            case Kind.memberVariable:
            case Kind.memberGetAccessor:
            case Kind.memberSetAccessor:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Field;
            case Kind.function:
            case Kind.memberFunction:
            case Kind.constructSignature:
            case Kind.callSignature:
            case Kind.indexSignature:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Function;
            case Kind.enum:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Enum;
            case Kind.module:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Module;
            case Kind.class:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Class;
            case Kind.interface:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Interface;
            case Kind.warning:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.File;
        }
        return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Property;
    };
    SuggestAdapter.createDocumentationString = function (details) {
        var documentationString = displayPartsToString(details.documentation);
        if (details.tags) {
            for (var _i = 0, _a = details.tags; _i < _a.length; _i++) {
                var tag = _a[_i];
                documentationString += "\n\n" + tagToString(tag);
            }
        }
        return documentationString;
    };
    return SuggestAdapter;
}(Adapter));

function tagToString(tag) {
    var tagLabel = "*@" + tag.name + "*";
    if (tag.name === 'param' && tag.text) {
        var _a = tag.text.split(' '), paramName = _a[0], rest = _a.slice(1);
        tagLabel += "`" + paramName + "`";
        if (rest.length > 0)
            tagLabel += " \u2014 " + rest.join(' ');
    }
    else if (tag.text) {
        tagLabel += " \u2014 " + tag.text;
    }
    return tagLabel;
}
var SignatureHelpAdapter = /** @class */ (function (_super) {
    __extends(SignatureHelpAdapter, _super);
    function SignatureHelpAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signatureHelpTriggerCharacters = ['(', ','];
        return _this;
    }
    SignatureHelpAdapter.prototype.provideSignatureHelp = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, info, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getSignatureHelpItems(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        ret = {
                            activeSignature: info.selectedItemIndex,
                            activeParameter: info.argumentIndex,
                            signatures: []
                        };
                        info.items.forEach(function (item) {
                            var signature = {
                                label: '',
                                parameters: []
                            };
                            signature.documentation = {
                                value: displayPartsToString(item.documentation)
                            };
                            signature.label += displayPartsToString(item.prefixDisplayParts);
                            item.parameters.forEach(function (p, i, a) {
                                var label = displayPartsToString(p.displayParts);
                                var parameter = {
                                    label: label,
                                    documentation: {
                                        value: displayPartsToString(p.documentation)
                                    }
                                };
                                signature.label += label;
                                signature.parameters.push(parameter);
                                if (i < a.length - 1) {
                                    signature.label += displayPartsToString(item.separatorDisplayParts);
                                }
                            });
                            signature.label += displayPartsToString(item.suffixDisplayParts);
                            ret.signatures.push(signature);
                        });
                        return [2 /*return*/, {
                                value: ret,
                                dispose: function () { }
                            }];
                }
            });
        });
    };
    return SignatureHelpAdapter;
}(Adapter));

// --- hover ------
var QuickInfoAdapter = /** @class */ (function (_super) {
    __extends(QuickInfoAdapter, _super);
    function QuickInfoAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickInfoAdapter.prototype.provideHover = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, info, documentation, tags, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getQuickInfoAtPosition(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        documentation = displayPartsToString(info.documentation);
                        tags = info.tags ? info.tags.map(function (tag) { return tagToString(tag); }).join('  \n\n') : '';
                        contents = displayPartsToString(info.displayParts);
                        return [2 /*return*/, {
                                range: this._textSpanToRange(model, info.textSpan),
                                contents: [
                                    {
                                        value: '```typescript\n' + contents + '\n```\n'
                                    },
                                    {
                                        value: documentation + (tags ? '\n\n' + tags : '')
                                    }
                                ]
                            }];
                }
            });
        });
    };
    return QuickInfoAdapter;
}(Adapter));

// --- occurrences ------
var OccurrencesAdapter = /** @class */ (function (_super) {
    __extends(OccurrencesAdapter, _super);
    function OccurrencesAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccurrencesAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getOccurrencesAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, entries.map(function (entry) {
                                return {
                                    range: _this._textSpanToRange(model, entry.textSpan),
                                    kind: entry.isWriteAccess
                                        ? _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].DocumentHighlightKind.Write
                                        : _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].DocumentHighlightKind.Text
                                };
                            })];
                }
            });
        });
    };
    return OccurrencesAdapter;
}(Adapter));

// --- definition ------
var DefinitionAdapter = /** @class */ (function (_super) {
    __extends(DefinitionAdapter, _super);
    function DefinitionAdapter(_libFiles, worker) {
        var _this = _super.call(this, worker) || this;
        _this._libFiles = _libFiles;
        return _this;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries, result, _i, entries_1, entry, uri, refModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getDefinitionAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        // Fetch lib files if necessary
                        return [4 /*yield*/, this._libFiles.fetchLibFilesIfNecessary(entries.map(function (entry) { return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName); }))];
                    case 3:
                        // Fetch lib files if necessary
                        _a.sent();
                        if (model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        result = [];
                        for (_i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                            entry = entries_1[_i];
                            uri = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName);
                            refModel = this._libFiles.getOrCreateModel(uri);
                            if (refModel) {
                                result.push({
                                    uri: uri,
                                    range: this._textSpanToRange(refModel, entry.textSpan)
                                });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return DefinitionAdapter;
}(Adapter));

// --- references ------
var ReferenceAdapter = /** @class */ (function (_super) {
    __extends(ReferenceAdapter, _super);
    function ReferenceAdapter(_libFiles, worker) {
        var _this = _super.call(this, worker) || this;
        _this._libFiles = _libFiles;
        return _this;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries, result, _i, entries_2, entry, uri, refModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getReferencesAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        // Fetch lib files if necessary
                        return [4 /*yield*/, this._libFiles.fetchLibFilesIfNecessary(entries.map(function (entry) { return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName); }))];
                    case 3:
                        // Fetch lib files if necessary
                        _a.sent();
                        if (model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        result = [];
                        for (_i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                            entry = entries_2[_i];
                            uri = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName);
                            refModel = this._libFiles.getOrCreateModel(uri);
                            if (refModel) {
                                result.push({
                                    uri: uri,
                                    range: this._textSpanToRange(refModel, entry.textSpan)
                                });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ReferenceAdapter;
}(Adapter));

// --- outline ------
var OutlineAdapter = /** @class */ (function (_super) {
    __extends(OutlineAdapter, _super);
    function OutlineAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlineAdapter.prototype.provideDocumentSymbols = function (model, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, worker, items, convert, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getNavigationBarItems(resource.toString())];
                    case 2:
                        items = _a.sent();
                        if (!items || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        convert = function (bucket, item, containerLabel) {
                            var result = {
                                name: item.text,
                                detail: '',
                                kind: (outlineTypeTable[item.kind] || _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable),
                                range: _this._textSpanToRange(model, item.spans[0]),
                                selectionRange: _this._textSpanToRange(model, item.spans[0]),
                                tags: [],
                                containerName: containerLabel
                            };
                            if (item.childItems && item.childItems.length > 0) {
                                for (var _i = 0, _a = item.childItems; _i < _a.length; _i++) {
                                    var child = _a[_i];
                                    convert(bucket, child, result.name);
                                }
                            }
                            bucket.push(result);
                        };
                        result = [];
                        items.forEach(function (item) { return convert(result, item); });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return OutlineAdapter;
}(Adapter));

var Kind = /** @class */ (function () {
    function Kind() {
    }
    Kind.unknown = '';
    Kind.keyword = 'keyword';
    Kind.script = 'script';
    Kind.module = 'module';
    Kind.class = 'class';
    Kind.interface = 'interface';
    Kind.type = 'type';
    Kind.enum = 'enum';
    Kind.variable = 'var';
    Kind.localVariable = 'local var';
    Kind.function = 'function';
    Kind.localFunction = 'local function';
    Kind.memberFunction = 'method';
    Kind.memberGetAccessor = 'getter';
    Kind.memberSetAccessor = 'setter';
    Kind.memberVariable = 'property';
    Kind.constructorImplementation = 'constructor';
    Kind.callSignature = 'call';
    Kind.indexSignature = 'index';
    Kind.constructSignature = 'construct';
    Kind.parameter = 'parameter';
    Kind.typeParameter = 'type parameter';
    Kind.primitiveType = 'primitive type';
    Kind.label = 'label';
    Kind.alias = 'alias';
    Kind.const = 'const';
    Kind.let = 'let';
    Kind.warning = 'warning';
    return Kind;
}());

var outlineTypeTable = Object.create(null);
outlineTypeTable[Kind.module] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Module;
outlineTypeTable[Kind.class] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Class;
outlineTypeTable[Kind.enum] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Enum;
outlineTypeTable[Kind.interface] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Property;
outlineTypeTable[Kind.variable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.const] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.variable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.function] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Function;
// --- formatting ----
var FormatHelper = /** @class */ (function (_super) {
    __extends(FormatHelper, _super);
    function FormatHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatHelper._convertOptions = function (options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: IndentStyle.Smart,
            NewLineCharacter: '\n',
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    };
    FormatHelper.prototype._convertTextChanges = function (model, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(model, change.span)
        };
    };
    return FormatHelper;
}(Adapter));

var FormatAdapter = /** @class */ (function (_super) {
    __extends(FormatAdapter, _super);
    function FormatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatAdapter.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, startOffset, endOffset, worker, edits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        startOffset = model.getOffsetAt({
                            lineNumber: range.startLineNumber,
                            column: range.startColumn
                        });
                        endOffset = model.getOffsetAt({
                            lineNumber: range.endLineNumber,
                            column: range.endColumn
                        });
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, FormatHelper._convertOptions(options))];
                    case 2:
                        edits = _a.sent();
                        if (!edits || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, edits.map(function (edit) { return _this._convertTextChanges(model, edit); })];
                }
            });
        });
    };
    return FormatAdapter;
}(FormatHelper));

var FormatOnTypeAdapter = /** @class */ (function (_super) {
    __extends(FormatOnTypeAdapter, _super);
    function FormatOnTypeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormatOnTypeAdapter.prototype, "autoFormatTriggerCharacters", {
        get: function () {
            return [';', '}', '\n'];
        },
        enumerable: false,
        configurable: true
    });
    FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits = function (model, position, ch, options, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, edits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, FormatHelper._convertOptions(options))];
                    case 2:
                        edits = _a.sent();
                        if (!edits || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, edits.map(function (edit) { return _this._convertTextChanges(model, edit); })];
                }
            });
        });
    };
    return FormatOnTypeAdapter;
}(FormatHelper));

// --- code actions ------
var CodeActionAdaptor = /** @class */ (function (_super) {
    __extends(CodeActionAdaptor, _super);
    function CodeActionAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodeActionAdaptor.prototype.provideCodeActions = function (model, range, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, start, end, formatOptions, errorCodes, worker, codeFixes, actions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        start = model.getOffsetAt({
                            lineNumber: range.startLineNumber,
                            column: range.startColumn
                        });
                        end = model.getOffsetAt({
                            lineNumber: range.endLineNumber,
                            column: range.endColumn
                        });
                        formatOptions = FormatHelper._convertOptions(model.getOptions());
                        errorCodes = context.markers
                            .filter(function (m) { return m.code; })
                            .map(function (m) { return m.code; })
                            .map(Number);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions)];
                    case 2:
                        codeFixes = _a.sent();
                        if (!codeFixes || model.isDisposed()) {
                            return [2 /*return*/, { actions: [], dispose: function () { } }];
                        }
                        actions = codeFixes
                            .filter(function (fix) {
                            // Removes any 'make a new file'-type code fix
                            return fix.changes.filter(function (change) { return change.isNewFile; }).length === 0;
                        })
                            .map(function (fix) {
                            return _this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
                        });
                        return [2 /*return*/, {
                                actions: actions,
                                dispose: function () { }
                            }];
                }
            });
        });
    };
    CodeActionAdaptor.prototype._tsCodeFixActionToMonacoCodeAction = function (model, context, codeFix) {
        var edits = [];
        for (var _i = 0, _a = codeFix.changes; _i < _a.length; _i++) {
            var change = _a[_i];
            for (var _b = 0, _c = change.textChanges; _b < _c.length; _b++) {
                var textChange = _c[_b];
                edits.push({
                    resource: model.uri,
                    edit: {
                        range: this._textSpanToRange(model, textChange.span),
                        text: textChange.newText
                    }
                });
            }
        }
        var action = {
            title: codeFix.description,
            edit: { edits: edits },
            diagnostics: context.markers,
            kind: 'quickfix'
        };
        return action;
    };
    return CodeActionAdaptor;
}(FormatHelper));

// --- rename ----
var RenameAdapter = /** @class */ (function (_super) {
    __extends(RenameAdapter, _super);
    function RenameAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, fileName, offset, worker, renameInfo, renameLocations, edits, _i, renameLocations_1, renameLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        fileName = resource.toString();
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getRenameInfo(fileName, offset, {
                                allowRenameOfImportPath: false
                            })];
                    case 2:
                        renameInfo = _a.sent();
                        if (renameInfo.canRename === false) {
                            // use explicit comparison so that the discriminated union gets resolved properly
                            return [2 /*return*/, {
                                    edits: [],
                                    rejectReason: renameInfo.localizedErrorMessage
                                }];
                        }
                        if (renameInfo.fileToRename !== undefined) {
                            throw new Error('Renaming files is not supported.');
                        }
                        return [4 /*yield*/, worker.findRenameLocations(fileName, offset, 
                            /*strings*/ false, 
                            /*comments*/ false, 
                            /*prefixAndSuffix*/ false)];
                    case 3:
                        renameLocations = _a.sent();
                        if (!renameLocations || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        edits = [];
                        for (_i = 0, renameLocations_1 = renameLocations; _i < renameLocations_1.length; _i++) {
                            renameLocation = renameLocations_1[_i];
                            edits.push({
                                resource: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(renameLocation.fileName),
                                edit: {
                                    range: this._textSpanToRange(model, renameLocation.textSpan),
                                    text: newName
                                }
                            });
                        }
                        return [2 /*return*/, { edits: edits }];
                }
            });
        });
    };
    return RenameAdapter;
}(Adapter));



/***/ }),

/***/ "../../node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: libFileSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libFileSet", function() { return libFileSet; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
//
// **NOTE**: Do not edit directly! This file is generated using `npm run import-typescript`
//
/** Contains all the lib files */
var libFileSet = {};
libFileSet['lib.d.ts'] = true;
libFileSet['lib.dom.d.ts'] = true;
libFileSet['lib.dom.iterable.d.ts'] = true;
libFileSet['lib.es2015.collection.d.ts'] = true;
libFileSet['lib.es2015.core.d.ts'] = true;
libFileSet['lib.es2015.d.ts'] = true;
libFileSet['lib.es2015.generator.d.ts'] = true;
libFileSet['lib.es2015.iterable.d.ts'] = true;
libFileSet['lib.es2015.promise.d.ts'] = true;
libFileSet['lib.es2015.proxy.d.ts'] = true;
libFileSet['lib.es2015.reflect.d.ts'] = true;
libFileSet['lib.es2015.symbol.d.ts'] = true;
libFileSet['lib.es2015.symbol.wellknown.d.ts'] = true;
libFileSet['lib.es2016.array.include.d.ts'] = true;
libFileSet['lib.es2016.d.ts'] = true;
libFileSet['lib.es2016.full.d.ts'] = true;
libFileSet['lib.es2017.d.ts'] = true;
libFileSet['lib.es2017.full.d.ts'] = true;
libFileSet['lib.es2017.intl.d.ts'] = true;
libFileSet['lib.es2017.object.d.ts'] = true;
libFileSet['lib.es2017.sharedmemory.d.ts'] = true;
libFileSet['lib.es2017.string.d.ts'] = true;
libFileSet['lib.es2017.typedarrays.d.ts'] = true;
libFileSet['lib.es2018.asyncgenerator.d.ts'] = true;
libFileSet['lib.es2018.asynciterable.d.ts'] = true;
libFileSet['lib.es2018.d.ts'] = true;
libFileSet['lib.es2018.full.d.ts'] = true;
libFileSet['lib.es2018.intl.d.ts'] = true;
libFileSet['lib.es2018.promise.d.ts'] = true;
libFileSet['lib.es2018.regexp.d.ts'] = true;
libFileSet['lib.es2019.array.d.ts'] = true;
libFileSet['lib.es2019.d.ts'] = true;
libFileSet['lib.es2019.full.d.ts'] = true;
libFileSet['lib.es2019.object.d.ts'] = true;
libFileSet['lib.es2019.string.d.ts'] = true;
libFileSet['lib.es2019.symbol.d.ts'] = true;
libFileSet['lib.es2020.bigint.d.ts'] = true;
libFileSet['lib.es2020.d.ts'] = true;
libFileSet['lib.es2020.full.d.ts'] = true;
libFileSet['lib.es2020.intl.d.ts'] = true;
libFileSet['lib.es2020.promise.d.ts'] = true;
libFileSet['lib.es2020.string.d.ts'] = true;
libFileSet['lib.es2020.symbol.wellknown.d.ts'] = true;
libFileSet['lib.es5.d.ts'] = true;
libFileSet['lib.es6.d.ts'] = true;
libFileSet['lib.esnext.d.ts'] = true;
libFileSet['lib.esnext.full.d.ts'] = true;
libFileSet['lib.esnext.intl.d.ts'] = true;
libFileSet['lib.esnext.promise.d.ts'] = true;
libFileSet['lib.esnext.string.d.ts'] = true;
libFileSet['lib.scripthost.d.ts'] = true;
libFileSet['lib.webworker.d.ts'] = true;
libFileSet['lib.webworker.importscripts.d.ts'] = true;


/***/ }),

/***/ "../../node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: setupTypeScript, setupJavaScript, getJavaScriptWorker, getTypeScriptWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTypeScript", function() { return setupTypeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupJavaScript", function() { return setupJavaScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJavaScriptWorker", function() { return getJavaScriptWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeScriptWorker", function() { return getTypeScriptWorker; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "../../node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "../../node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js");
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillers/monaco-editor-core.js */ "../../node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
    typeScriptWorker = setupMode(defaults, 'typescript');
}
function setupJavaScript(defaults) {
    javaScriptWorker = setupMode(defaults, 'javascript');
}
function getJavaScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!javaScriptWorker) {
            return reject('JavaScript not registered!');
        }
        resolve(javaScriptWorker);
    });
}
function getTypeScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!typeScriptWorker) {
            return reject('TypeScript not registered!');
        }
        resolve(typeScriptWorker);
    });
}
function setupMode(defaults, modeId) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](modeId, defaults);
    var worker = function () {
        var uris = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uris[_i] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, uris);
    };
    var libFiles = new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["LibFiles"](worker);
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerCompletionItemProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SuggestAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerSignatureHelpProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SignatureHelpAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerHoverProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["QuickInfoAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDocumentHighlightProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OccurrencesAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDefinitionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](libFiles, worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerReferenceProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](libFiles, worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDocumentSymbolProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OutlineAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDocumentRangeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerOnTypeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatOnTypeAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerCodeActionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["CodeActionAdaptor"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerRenameProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["RenameAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnosticsAdapter"](libFiles, defaults, modeId, worker);
    return worker;
}


/***/ }),

/***/ "../../node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillers/monaco-editor-core.js */ "../../node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var WorkerManager = /** @class */ (function () {
    function WorkerManager(modeId, defaults) {
        var _this = this;
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function () {
            return _this._updateExtraLibs();
        });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        this._configChangeListener.dispose();
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._updateExtraLibs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myToken, proxy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._worker) {
                            return [2 /*return*/];
                        }
                        myToken = ++this._updateExtraLibsToken;
                        return [4 /*yield*/, this._worker.getProxy()];
                    case 1:
                        proxy = _a.sent();
                        if (this._updateExtraLibsToken !== myToken) {
                            // avoid multiple calls
                            return [2 /*return*/];
                        }
                        proxy.updateExtraLibs(this._defaults.getExtraLibs());
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkerManager.prototype._getClient = function () {
        var _this = this;
        if (!this._client) {
            this._worker = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["editor"].createWebWorker({
                // module that exports the create() method and returns a `TypeScriptWorker` instance
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                keepIdleModels: true,
                // passed in to the create() method
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs(),
                    customWorkerPath: this._defaults.workerOptions.customWorkerPath
                }
            });
            var p = this._worker.getProxy();
            if (this._defaults.getEagerModelSync()) {
                p = p.then(function (worker) {
                    if (_this._worker) {
                        return _this._worker.withSyncedResources(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["editor"]
                            .getModels()
                            .filter(function (model) { return model.getModeId() === _this._modeId; })
                            .map(function (model) { return model.uri; }));
                    }
                    return worker;
                });
            }
            this._client = p;
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return this._getClient()
            .then(function (client) {
            _client = client;
        })
            .then(function (_) {
            if (_this._worker) {
                return _this._worker.withSyncedResources(resources);
            }
        })
            .then(function (_) { return _client; });
    };
    return WorkerManager;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS90eXBlc2NyaXB0L2xhbmd1YWdlRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL21hbnN0aXMvd29ya3NwYWNlcy9naXQvbWFuc3Rpcy9mb3Jrcy9rb2dpdG8tdG9vbGluZy9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC9saWIvbGliLmluZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9tYW5zdGlzL3dvcmtzcGFjZXMvZ2l0L21hbnN0aXMvZm9ya3Mva29naXRvLXRvb2xpbmcvbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL3R5cGVzY3JpcHQvdHNNb2RlLmpzIiwid2VicGFjazovLy8vaG9tZS9tYW5zdGlzL3dvcmtzcGFjZXMvZ2l0L21hbnN0aXMvZm9ya3Mva29naXRvLXRvb2xpbmcvbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL3R5cGVzY3JpcHQvd29ya2VyTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYixpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFFQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHFFQUFNO0FBQ3ZFO0FBQ0Esc0RBQXNELDRDQUE0QyxFQUFFO0FBQ3BHLG1EQUFtRCxrQkFBa0IsRUFBRTtBQUN2RTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxnQ0FBZ0MsZ0JBQWdCLEVBQUU7QUFDbEQ7QUFDQTtBQUNBLENBQUM7QUFDd0IiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBsaWJGaWxlU2V0IH0gZnJvbSAnLi9saWIvbGliLmluZGV4LmpzJztcbmltcG9ydCB7IGVkaXRvciwgbGFuZ3VhZ2VzLCBVcmksIFJhbmdlLCBNYXJrZXJUYWcsIE1hcmtlclNldmVyaXR5IH0gZnJvbSAnLi9maWxsZXJzL21vbmFjby1lZGl0b3ItY29yZS5qcyc7XG4vLyNyZWdpb24gdXRpbHMgY29waWVkIGZyb20gdHlwZXNjcmlwdCB0byBwcmV2ZW50IGxvYWRpbmcgdGhlIGVudGlyZSB0eXBlc2NyaXB0U2VydmljZXMgLS0tXG52YXIgSW5kZW50U3R5bGU7XG4oZnVuY3Rpb24gKEluZGVudFN0eWxlKSB7XG4gICAgSW5kZW50U3R5bGVbSW5kZW50U3R5bGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICBJbmRlbnRTdHlsZVtJbmRlbnRTdHlsZVtcIkJsb2NrXCJdID0gMV0gPSBcIkJsb2NrXCI7XG4gICAgSW5kZW50U3R5bGVbSW5kZW50U3R5bGVbXCJTbWFydFwiXSA9IDJdID0gXCJTbWFydFwiO1xufSkoSW5kZW50U3R5bGUgfHwgKEluZGVudFN0eWxlID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGRpYWcsIG5ld0xpbmUsIGluZGVudCkge1xuICAgIGlmIChpbmRlbnQgPT09IHZvaWQgMCkgeyBpbmRlbnQgPSAwOyB9XG4gICAgaWYgKHR5cGVvZiBkaWFnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZGlhZztcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGlmIChpbmRlbnQpIHtcbiAgICAgICAgcmVzdWx0ICs9IG5ld0xpbmU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnICAnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCArPSBkaWFnLm1lc3NhZ2VUZXh0O1xuICAgIGluZGVudCsrO1xuICAgIGlmIChkaWFnLm5leHQpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGRpYWcubmV4dDsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBraWQgPSBfYVtfaV07XG4gICAgICAgICAgICByZXN1bHQgKz0gZmxhdHRlbkRpYWdub3N0aWNNZXNzYWdlVGV4dChraWQsIG5ld0xpbmUsIGluZGVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGRpc3BsYXlQYXJ0cykge1xuICAgIGlmIChkaXNwbGF5UGFydHMpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlQYXJ0cy5tYXAoZnVuY3Rpb24gKGRpc3BsYXlQYXJ0KSB7IHJldHVybiBkaXNwbGF5UGFydC50ZXh0OyB9KS5qb2luKCcnKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuLy8jZW5kcmVnaW9uXG52YXIgQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgLy8gcHJvdGVjdGVkIF9wb3NpdGlvblRvT2Zmc2V0KG1vZGVsOiBlZGl0b3IuSVRleHRNb2RlbCwgcG9zaXRpb246IG1vbmFjby5JUG9zaXRpb24pOiBudW1iZXIge1xuICAgIC8vIFx0cmV0dXJuIG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcbiAgICAvLyB9XG4gICAgLy8gcHJvdGVjdGVkIF9vZmZzZXRUb1Bvc2l0aW9uKG1vZGVsOiBlZGl0b3IuSVRleHRNb2RlbCwgb2Zmc2V0OiBudW1iZXIpOiBtb25hY28uSVBvc2l0aW9uIHtcbiAgICAvLyBcdHJldHVybiBtb2RlbC5nZXRQb3NpdGlvbkF0KG9mZnNldCk7XG4gICAgLy8gfVxuICAgIEFkYXB0ZXIucHJvdG90eXBlLl90ZXh0U3BhblRvUmFuZ2UgPSBmdW5jdGlvbiAobW9kZWwsIHNwYW4pIHtcbiAgICAgICAgdmFyIHAxID0gbW9kZWwuZ2V0UG9zaXRpb25BdChzcGFuLnN0YXJ0KTtcbiAgICAgICAgdmFyIHAyID0gbW9kZWwuZ2V0UG9zaXRpb25BdChzcGFuLnN0YXJ0ICsgc3Bhbi5sZW5ndGgpO1xuICAgICAgICB2YXIgc3RhcnRMaW5lTnVtYmVyID0gcDEubGluZU51bWJlciwgc3RhcnRDb2x1bW4gPSBwMS5jb2x1bW47XG4gICAgICAgIHZhciBlbmRMaW5lTnVtYmVyID0gcDIubGluZU51bWJlciwgZW5kQ29sdW1uID0gcDIuY29sdW1uO1xuICAgICAgICByZXR1cm4geyBzdGFydExpbmVOdW1iZXI6IHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW46IHN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyOiBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW46IGVuZENvbHVtbiB9O1xuICAgIH07XG4gICAgcmV0dXJuIEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgQWRhcHRlciB9O1xuLy8gLS0tIGxpYiBmaWxlc1xudmFyIExpYkZpbGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpYkZpbGVzKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICAgICAgdGhpcy5fbGliRmlsZXMgPSB7fTtcbiAgICAgICAgdGhpcy5faGFzRmV0Y2hlZExpYkZpbGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZldGNoTGliRmlsZXNQcm9taXNlID0gbnVsbDtcbiAgICB9XG4gICAgTGliRmlsZXMucHJvdG90eXBlLmlzTGliRmlsZSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgICAgaWYgKCF1cmkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXJpLnBhdGguaW5kZXhPZignL2xpYi4nKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICEhbGliRmlsZVNldFt1cmkucGF0aC5zbGljZSgxKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgTGliRmlsZXMucHJvdG90eXBlLmdldE9yQ3JlYXRlTW9kZWwgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IGVkaXRvci5nZXRNb2RlbCh1cmkpO1xuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0xpYkZpbGUodXJpKSAmJiB0aGlzLl9oYXNGZXRjaGVkTGliRmlsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBlZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5fbGliRmlsZXNbdXJpLnBhdGguc2xpY2UoMSldLCAnamF2YXNjcmlwdCcsIHVyaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBMaWJGaWxlcy5wcm90b3R5cGUuX2NvbnRhaW5zTGliRmlsZSA9IGZ1bmN0aW9uICh1cmlzKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdXJpc18xID0gdXJpczsgX2kgPCB1cmlzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgdXJpID0gdXJpc18xW19pXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTGliRmlsZSh1cmkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgTGliRmlsZXMucHJvdG90eXBlLmZldGNoTGliRmlsZXNJZk5lY2Vzc2FyeSA9IGZ1bmN0aW9uICh1cmlzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY29udGFpbnNMaWJGaWxlKHVyaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gbGliIGZpbGVzIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2ZldGNoTGliRmlsZXMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMaWJGaWxlcy5wcm90b3R5cGUuX2ZldGNoTGliRmlsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5fZmV0Y2hMaWJGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoTGliRmlsZXNQcm9taXNlID0gdGhpcy5fd29ya2VyKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodykgeyByZXR1cm4gdy5nZXRMaWJGaWxlcygpOyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChsaWJGaWxlcykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9oYXNGZXRjaGVkTGliRmlsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLl9saWJGaWxlcyA9IGxpYkZpbGVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZldGNoTGliRmlsZXNQcm9taXNlO1xuICAgIH07XG4gICAgcmV0dXJuIExpYkZpbGVzO1xufSgpKTtcbmV4cG9ydCB7IExpYkZpbGVzIH07XG4vLyAtLS0gZGlhZ25vc3RpY3MgLS0tIC0tLVxudmFyIERpYWdub3N0aWNDYXRlZ29yeTtcbihmdW5jdGlvbiAoRGlhZ25vc3RpY0NhdGVnb3J5KSB7XG4gICAgRGlhZ25vc3RpY0NhdGVnb3J5W0RpYWdub3N0aWNDYXRlZ29yeVtcIldhcm5pbmdcIl0gPSAwXSA9IFwiV2FybmluZ1wiO1xuICAgIERpYWdub3N0aWNDYXRlZ29yeVtEaWFnbm9zdGljQ2F0ZWdvcnlbXCJFcnJvclwiXSA9IDFdID0gXCJFcnJvclwiO1xuICAgIERpYWdub3N0aWNDYXRlZ29yeVtEaWFnbm9zdGljQ2F0ZWdvcnlbXCJTdWdnZXN0aW9uXCJdID0gMl0gPSBcIlN1Z2dlc3Rpb25cIjtcbiAgICBEaWFnbm9zdGljQ2F0ZWdvcnlbRGlhZ25vc3RpY0NhdGVnb3J5W1wiTWVzc2FnZVwiXSA9IDNdID0gXCJNZXNzYWdlXCI7XG59KShEaWFnbm9zdGljQ2F0ZWdvcnkgfHwgKERpYWdub3N0aWNDYXRlZ29yeSA9IHt9KSk7XG52YXIgRGlhZ25vc3RpY3NBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEaWFnbm9zdGljc0FkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlhZ25vc3RpY3NBZGFwdGVyKF9saWJGaWxlcywgX2RlZmF1bHRzLCBfc2VsZWN0b3IsIHdvcmtlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB3b3JrZXIpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9saWJGaWxlcyA9IF9saWJGaWxlcztcbiAgICAgICAgX3RoaXMuX2RlZmF1bHRzID0gX2RlZmF1bHRzO1xuICAgICAgICBfdGhpcy5fc2VsZWN0b3IgPSBfc2VsZWN0b3I7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcyA9IFtdO1xuICAgICAgICBfdGhpcy5fbGlzdGVuZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgb25Nb2RlbEFkZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgaWYgKG1vZGVsLmdldE1vZGVJZCgpICE9PSBfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgdmFyIGNoYW5nZVN1YnNjcmlwdGlvbiA9IG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbCk7IH0sIDUwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lclttb2RlbC51cmkudG9TdHJpbmcoKV0gPSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuX2RvVmFsaWRhdGUobW9kZWwpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25Nb2RlbFJlbW92ZWQgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIGVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIF90aGlzLl9zZWxlY3RvciwgW10pO1xuICAgICAgICAgICAgdmFyIGtleSA9IG1vZGVsLnVyaS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKF90aGlzLl9saXN0ZW5lcltrZXldKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW2tleV0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5fbGlzdGVuZXJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goZWRpdG9yLm9uRGlkQ3JlYXRlTW9kZWwob25Nb2RlbEFkZCkpO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChlZGl0b3Iub25XaWxsRGlzcG9zZU1vZGVsKG9uTW9kZWxSZW1vdmVkKSk7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKGVkaXRvci5vbkRpZENoYW5nZU1vZGVsTGFuZ3VhZ2UoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBvbk1vZGVsUmVtb3ZlZChldmVudC5tb2RlbCk7XG4gICAgICAgICAgICBvbk1vZGVsQWRkKGV2ZW50Lm1vZGVsKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaCh7XG4gICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGVkaXRvci5nZXRNb2RlbHMoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICBvbk1vZGVsUmVtb3ZlZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlY29tcHV0ZURpYWdvc3RpY3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyByZWRvIGRpYWdub3N0aWNzIHdoZW4gb3B0aW9ucyBjaGFuZ2VcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBlZGl0b3IuZ2V0TW9kZWxzKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBvbk1vZGVsQWRkKG1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goX3RoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKHJlY29tcHV0ZURpYWdvc3RpY3MpKTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goX3RoaXMuX2RlZmF1bHRzLm9uRGlkRXh0cmFMaWJzQ2hhbmdlKHJlY29tcHV0ZURpYWdvc3RpY3MpKTtcbiAgICAgICAgZWRpdG9yLmdldE1vZGVscygpLmZvckVhY2gob25Nb2RlbEFkZCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkICYmIGQuZGlzcG9zZSgpOyB9KTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBbXTtcbiAgICB9O1xuICAgIERpYWdub3N0aWNzQWRhcHRlci5wcm90b3R5cGUuX2RvVmFsaWRhdGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdvcmtlciwgcHJvbWlzZXMsIF9hLCBub1N5bnRheFZhbGlkYXRpb24sIG5vU2VtYW50aWNWYWxpZGF0aW9uLCBub1N1Z2dlc3Rpb25EaWFnbm9zdGljcywgYWxsRGlhZ25vc3RpY3MsIGRpYWdub3N0aWNzLCByZWxhdGVkVXJpcztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihtb2RlbC51cmkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vZGVsIHdhcyBkaXNwb3NlZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLl9kZWZhdWx0cy5nZXREaWFnbm9zdGljc09wdGlvbnMoKSwgbm9TeW50YXhWYWxpZGF0aW9uID0gX2Eubm9TeW50YXhWYWxpZGF0aW9uLCBub1NlbWFudGljVmFsaWRhdGlvbiA9IF9hLm5vU2VtYW50aWNWYWxpZGF0aW9uLCBub1N1Z2dlc3Rpb25EaWFnbm9zdGljcyA9IF9hLm5vU3VnZ2VzdGlvbkRpYWdub3N0aWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub1N5bnRheFZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdvcmtlci5nZXRTeW50YWN0aWNEaWFnbm9zdGljcyhtb2RlbC51cmkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub1NlbWFudGljVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god29ya2VyLmdldFNlbWFudGljRGlhZ25vc3RpY3MobW9kZWwudXJpLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9TdWdnZXN0aW9uRGlhZ25vc3RpY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdvcmtlci5nZXRTdWdnZXN0aW9uRGlhZ25vc3RpY3MobW9kZWwudXJpLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKHByb21pc2VzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbERpYWdub3N0aWNzID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxEaWFnbm9zdGljcyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2RlbCB3YXMgZGlzcG9zZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc3RpY3MgPSBhbGxEaWFnbm9zdGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHsgcmV0dXJuIGMuY29uY2F0KHApOyB9LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfdGhpcy5fZGVmYXVsdHMuZ2V0RGlhZ25vc3RpY3NPcHRpb25zKCkuZGlhZ25vc3RpY0NvZGVzVG9JZ25vcmUgfHwgW10pLmluZGV4T2YoZC5jb2RlKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRVcmlzID0gZGlhZ25vc3RpY3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnJlbGF0ZWRJbmZvcm1hdGlvbiB8fCBbXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7IHJldHVybiBjLmNvbmNhdChwKTsgfSwgW10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVsYXRlZEluZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbGF0ZWRJbmZvcm1hdGlvbi5maWxlID8gVXJpLnBhcnNlKHJlbGF0ZWRJbmZvcm1hdGlvbi5maWxlLmZpbGVOYW1lKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2xpYkZpbGVzLmZldGNoTGliRmlsZXNJZk5lY2Vzc2FyeShyZWxhdGVkVXJpcyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9kZWwgd2FzIGRpc3Bvc2VkIGluIHRoZSBtZWFudGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIHRoaXMuX3NlbGVjdG9yLCBkaWFnbm9zdGljcy5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIF90aGlzLl9jb252ZXJ0RGlhZ25vc3RpY3MobW9kZWwsIGQpOyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5fY29udmVydERpYWdub3N0aWNzID0gZnVuY3Rpb24gKG1vZGVsLCBkaWFnKSB7XG4gICAgICAgIHZhciBkaWFnU3RhcnQgPSBkaWFnLnN0YXJ0IHx8IDA7XG4gICAgICAgIHZhciBkaWFnTGVuZ3RoID0gZGlhZy5sZW5ndGggfHwgMTtcbiAgICAgICAgdmFyIF9hID0gbW9kZWwuZ2V0UG9zaXRpb25BdChkaWFnU3RhcnQpLCBzdGFydExpbmVOdW1iZXIgPSBfYS5saW5lTnVtYmVyLCBzdGFydENvbHVtbiA9IF9hLmNvbHVtbjtcbiAgICAgICAgdmFyIF9iID0gbW9kZWwuZ2V0UG9zaXRpb25BdChkaWFnU3RhcnQgKyBkaWFnTGVuZ3RoKSwgZW5kTGluZU51bWJlciA9IF9iLmxpbmVOdW1iZXIsIGVuZENvbHVtbiA9IF9iLmNvbHVtbjtcbiAgICAgICAgdmFyIHRhZ3MgPSBbXTtcbiAgICAgICAgaWYgKGRpYWcucmVwb3J0c1VubmVjZXNzYXJ5KSB7XG4gICAgICAgICAgICB0YWdzLnB1c2goTWFya2VyVGFnLlVubmVjZXNzYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlhZy5yZXBvcnRzRGVwcmVjYXRlZCkge1xuICAgICAgICAgICAgdGFncy5wdXNoKE1hcmtlclRhZy5EZXByZWNhdGVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V2ZXJpdHk6IHRoaXMuX3RzRGlhZ25vc3RpY0NhdGVnb3J5VG9NYXJrZXJTZXZlcml0eShkaWFnLmNhdGVnb3J5KSxcbiAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogc3RhcnRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgc3RhcnRDb2x1bW46IHN0YXJ0Q29sdW1uLFxuICAgICAgICAgICAgZW5kTGluZU51bWJlcjogZW5kTGluZU51bWJlcixcbiAgICAgICAgICAgIGVuZENvbHVtbjogZW5kQ29sdW1uLFxuICAgICAgICAgICAgbWVzc2FnZTogZmxhdHRlbkRpYWdub3N0aWNNZXNzYWdlVGV4dChkaWFnLm1lc3NhZ2VUZXh0LCAnXFxuJyksXG4gICAgICAgICAgICBjb2RlOiBkaWFnLmNvZGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICByZWxhdGVkSW5mb3JtYXRpb246IHRoaXMuX2NvbnZlcnRSZWxhdGVkSW5mb3JtYXRpb24obW9kZWwsIGRpYWcucmVsYXRlZEluZm9ybWF0aW9uKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5fY29udmVydFJlbGF0ZWRJbmZvcm1hdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgcmVsYXRlZEluZm9ybWF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghcmVsYXRlZEluZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICByZWxhdGVkSW5mb3JtYXRpb24uZm9yRWFjaChmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgdmFyIHJlbGF0ZWRSZXNvdXJjZSA9IG1vZGVsO1xuICAgICAgICAgICAgaWYgKGluZm8uZmlsZSkge1xuICAgICAgICAgICAgICAgIHZhciByZWxhdGVkUmVzb3VyY2VVcmkgPSBVcmkucGFyc2UoaW5mby5maWxlLmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICByZWxhdGVkUmVzb3VyY2UgPSBfdGhpcy5fbGliRmlsZXMuZ2V0T3JDcmVhdGVNb2RlbChyZWxhdGVkUmVzb3VyY2VVcmkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZWxhdGVkUmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5mb1N0YXJ0ID0gaW5mby5zdGFydCB8fCAwO1xuICAgICAgICAgICAgdmFyIGluZm9MZW5ndGggPSBpbmZvLmxlbmd0aCB8fCAxO1xuICAgICAgICAgICAgdmFyIF9hID0gcmVsYXRlZFJlc291cmNlLmdldFBvc2l0aW9uQXQoaW5mb1N0YXJ0KSwgc3RhcnRMaW5lTnVtYmVyID0gX2EubGluZU51bWJlciwgc3RhcnRDb2x1bW4gPSBfYS5jb2x1bW47XG4gICAgICAgICAgICB2YXIgX2IgPSByZWxhdGVkUmVzb3VyY2UuZ2V0UG9zaXRpb25BdChpbmZvU3RhcnQgKyBpbmZvTGVuZ3RoKSwgZW5kTGluZU51bWJlciA9IF9iLmxpbmVOdW1iZXIsIGVuZENvbHVtbiA9IF9iLmNvbHVtbjtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZTogcmVsYXRlZFJlc291cmNlLnVyaSxcbiAgICAgICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IHN0YXJ0TGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogc3RhcnRDb2x1bW4sXG4gICAgICAgICAgICAgICAgZW5kTGluZU51bWJlcjogZW5kTGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IGVuZENvbHVtbixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBmbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGluZm8ubWVzc2FnZVRleHQsICdcXG4nKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5fdHNEaWFnbm9zdGljQ2F0ZWdvcnlUb01hcmtlclNldmVyaXR5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG4gICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5LkVycm9yOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXJTZXZlcml0eS5FcnJvcjtcbiAgICAgICAgICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5Lk1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtlclNldmVyaXR5LkluZm87XG4gICAgICAgICAgICBjYXNlIERpYWdub3N0aWNDYXRlZ29yeS5XYXJuaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXJTZXZlcml0eS5XYXJuaW5nO1xuICAgICAgICAgICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuU3VnZ2VzdGlvbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFya2VyU2V2ZXJpdHkuSGludDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWFya2VyU2V2ZXJpdHkuSW5mbztcbiAgICB9O1xuICAgIHJldHVybiBEaWFnbm9zdGljc0FkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IERpYWdub3N0aWNzQWRhcHRlciB9O1xudmFyIFN1Z2dlc3RBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWdnZXN0QWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWdnZXN0QWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3VnZ2VzdEFkYXB0ZXIucHJvdG90eXBlLCBcInRyaWdnZXJDaGFyYWN0ZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gWycuJ107XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUNvbXBsZXRpb25JdGVtcyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIF9jb250ZXh0LCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd29yZEluZm8sIHdvcmRSYW5nZSwgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBpbmZvLCBzdWdnZXN0aW9ucztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJbmZvID0gbW9kZWwuZ2V0V29yZFVudGlsUG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZFJhbmdlID0gbmV3IFJhbmdlKHBvc2l0aW9uLmxpbmVOdW1iZXIsIHdvcmRJbmZvLnN0YXJ0Q29sdW1uLCBwb3NpdGlvbi5saW5lTnVtYmVyLCB3b3JkSW5mby5lbmRDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldENvbXBsZXRpb25zQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5mbyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyA9IGluZm8uZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHdvcmRSYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkucmVwbGFjZW1lbnRTcGFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwMSA9IG1vZGVsLmdldFBvc2l0aW9uQXQoZW50cnkucmVwbGFjZW1lbnRTcGFuLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAyID0gbW9kZWwuZ2V0UG9zaXRpb25BdChlbnRyeS5yZXBsYWNlbWVudFNwYW4uc3RhcnQgKyBlbnRyeS5yZXBsYWNlbWVudFNwYW4ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBuZXcgUmFuZ2UocDEubGluZU51bWJlciwgcDEuY29sdW1uLCBwMi5saW5lTnVtYmVyLCBwMi5jb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKF9hID0gZW50cnkua2luZE1vZGlmaWVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluZGV4T2YoJ2RlcHJlY2F0ZWQnKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MucHVzaChsYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1UYWcuRGVwcmVjYXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogcmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGVudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQ6IGVudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRUZXh0OiBlbnRyeS5zb3J0VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogU3VnZ2VzdEFkYXB0ZXIuY29udmVydEtpbmQoZW50cnkua2luZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUucmVzb2x2ZUNvbXBsZXRpb25JdGVtID0gZnVuY3Rpb24gKGl0ZW0sIHRva2VuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteUl0ZW0sIHJlc291cmNlLCBwb3NpdGlvbiwgb2Zmc2V0LCB3b3JrZXIsIGRldGFpbHM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBteUl0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBteUl0ZW0udXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBteUl0ZW0ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBteUl0ZW0ub2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRDb21wbGV0aW9uRW50cnlEZXRhaWxzKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCwgbXlJdGVtLmxhYmVsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbXlJdGVtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogcmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRldGFpbHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogU3VnZ2VzdEFkYXB0ZXIuY29udmVydEtpbmQoZGV0YWlscy5raW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBkaXNwbGF5UGFydHNUb1N0cmluZyhkZXRhaWxzLmRpc3BsYXlQYXJ0cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50YXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBTdWdnZXN0QWRhcHRlci5jcmVhdGVEb2N1bWVudGF0aW9uU3RyaW5nKGRldGFpbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWdnZXN0QWRhcHRlci5jb252ZXJ0S2luZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSBLaW5kLnByaW1pdGl2ZVR5cGU6XG4gICAgICAgICAgICBjYXNlIEtpbmQua2V5d29yZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5LZXl3b3JkO1xuICAgICAgICAgICAgY2FzZSBLaW5kLnZhcmlhYmxlOlxuICAgICAgICAgICAgY2FzZSBLaW5kLmxvY2FsVmFyaWFibGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuVmFyaWFibGU7XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyVmFyaWFibGU6XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyR2V0QWNjZXNzb3I6XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyU2V0QWNjZXNzb3I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRmllbGQ7XG4gICAgICAgICAgICBjYXNlIEtpbmQuZnVuY3Rpb246XG4gICAgICAgICAgICBjYXNlIEtpbmQubWVtYmVyRnVuY3Rpb246XG4gICAgICAgICAgICBjYXNlIEtpbmQuY29uc3RydWN0U2lnbmF0dXJlOlxuICAgICAgICAgICAgY2FzZSBLaW5kLmNhbGxTaWduYXR1cmU6XG4gICAgICAgICAgICBjYXNlIEtpbmQuaW5kZXhTaWduYXR1cmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRnVuY3Rpb247XG4gICAgICAgICAgICBjYXNlIEtpbmQuZW51bTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5FbnVtO1xuICAgICAgICAgICAgY2FzZSBLaW5kLm1vZHVsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Nb2R1bGU7XG4gICAgICAgICAgICBjYXNlIEtpbmQuY2xhc3M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuQ2xhc3M7XG4gICAgICAgICAgICBjYXNlIEtpbmQuaW50ZXJmYWNlOlxuICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkludGVyZmFjZTtcbiAgICAgICAgICAgIGNhc2UgS2luZC53YXJuaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHk7XG4gICAgfTtcbiAgICBTdWdnZXN0QWRhcHRlci5jcmVhdGVEb2N1bWVudGF0aW9uU3RyaW5nID0gZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50YXRpb25TdHJpbmcgPSBkaXNwbGF5UGFydHNUb1N0cmluZyhkZXRhaWxzLmRvY3VtZW50YXRpb24pO1xuICAgICAgICBpZiAoZGV0YWlscy50YWdzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gZGV0YWlscy50YWdzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvblN0cmluZyArPSBcIlxcblxcblwiICsgdGFnVG9TdHJpbmcodGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnRhdGlvblN0cmluZztcbiAgICB9O1xuICAgIHJldHVybiBTdWdnZXN0QWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgU3VnZ2VzdEFkYXB0ZXIgfTtcbmZ1bmN0aW9uIHRhZ1RvU3RyaW5nKHRhZykge1xuICAgIHZhciB0YWdMYWJlbCA9IFwiKkBcIiArIHRhZy5uYW1lICsgXCIqXCI7XG4gICAgaWYgKHRhZy5uYW1lID09PSAncGFyYW0nICYmIHRhZy50ZXh0KSB7XG4gICAgICAgIHZhciBfYSA9IHRhZy50ZXh0LnNwbGl0KCcgJyksIHBhcmFtTmFtZSA9IF9hWzBdLCByZXN0ID0gX2Euc2xpY2UoMSk7XG4gICAgICAgIHRhZ0xhYmVsICs9IFwiYFwiICsgcGFyYW1OYW1lICsgXCJgXCI7XG4gICAgICAgIGlmIChyZXN0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0YWdMYWJlbCArPSBcIiBcXHUyMDE0IFwiICsgcmVzdC5qb2luKCcgJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhZy50ZXh0KSB7XG4gICAgICAgIHRhZ0xhYmVsICs9IFwiIFxcdTIwMTQgXCIgKyB0YWcudGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRhZ0xhYmVsO1xufVxudmFyIFNpZ25hdHVyZUhlbHBBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTaWduYXR1cmVIZWxwQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTaWduYXR1cmVIZWxwQWRhcHRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNpZ25hdHVyZUhlbHBUcmlnZ2VyQ2hhcmFjdGVycyA9IFsnKCcsICcsJ107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2lnbmF0dXJlSGVscEFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVTaWduYXR1cmVIZWxwID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBvZmZzZXQsIHdvcmtlciwgaW5mbywgcmV0O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldFNpZ25hdHVyZUhlbHBJdGVtcyhyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5mbyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lnbmF0dXJlOiBpbmZvLnNlbGVjdGVkSXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhcmFtZXRlcjogaW5mby5hcmd1bWVudEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZXM6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpZ25hdHVyZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLmRvY3VtZW50YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLmRvY3VtZW50YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUubGFiZWwgKz0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaXRlbS5wcmVmaXhEaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKHAuZGlzcGxheVBhcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50YXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGlzcGxheVBhcnRzVG9TdHJpbmcocC5kb2N1bWVudGF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUubGFiZWwgKz0gbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnNlcGFyYXRvckRpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUubGFiZWwgKz0gZGlzcGxheVBhcnRzVG9TdHJpbmcoaXRlbS5zdWZmaXhEaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5zaWduYXR1cmVzLnB1c2goc2lnbmF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNpZ25hdHVyZUhlbHBBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBTaWduYXR1cmVIZWxwQWRhcHRlciB9O1xuLy8gLS0tIGhvdmVyIC0tLS0tLVxudmFyIFF1aWNrSW5mb0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFF1aWNrSW5mb0FkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUXVpY2tJbmZvQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBRdWlja0luZm9BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlSG92ZXIgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBpbmZvLCBkb2N1bWVudGF0aW9uLCB0YWdzLCBjb250ZW50cztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRRdWlja0luZm9BdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZvIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50YXRpb24gPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpbmZvLmRvY3VtZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFncyA9IGluZm8udGFncyA/IGluZm8udGFncy5tYXAoZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gdGFnVG9TdHJpbmcodGFnKTsgfSkuam9pbignICBcXG5cXG4nKSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHMgPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpbmZvLmRpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKG1vZGVsLCBpbmZvLnRleHRTcGFuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2BgYHR5cGVzY3JpcHRcXG4nICsgY29udGVudHMgKyAnXFxuYGBgXFxuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZG9jdW1lbnRhdGlvbiArICh0YWdzID8gJ1xcblxcbicgKyB0YWdzIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUXVpY2tJbmZvQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgUXVpY2tJbmZvQWRhcHRlciB9O1xuLy8gLS0tIG9jY3VycmVuY2VzIC0tLS0tLVxudmFyIE9jY3VycmVuY2VzQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT2NjdXJyZW5jZXNBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9jY3VycmVuY2VzQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPY2N1cnJlbmNlc0FkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudEhpZ2hsaWdodHMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBlbnRyaWVzO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRPY2N1cnJlbmNlc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVudHJpZXMgfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UobW9kZWwsIGVudHJ5LnRleHRTcGFuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IGVudHJ5LmlzV3JpdGVBY2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuV3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxhbmd1YWdlcy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2NjdXJyZW5jZXNBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBPY2N1cnJlbmNlc0FkYXB0ZXIgfTtcbi8vIC0tLSBkZWZpbml0aW9uIC0tLS0tLVxudmFyIERlZmluaXRpb25BZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZWZpbml0aW9uQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZWZpbml0aW9uQWRhcHRlcihfbGliRmlsZXMsIHdvcmtlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB3b3JrZXIpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9saWJGaWxlcyA9IF9saWJGaWxlcztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEZWZpbml0aW9uQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURlZmluaXRpb24gPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBlbnRyaWVzLCByZXN1bHQsIF9pLCBlbnRyaWVzXzEsIGVudHJ5LCB1cmksIHJlZk1vZGVsO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldERlZmluaXRpb25BdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyaWVzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZldGNoIGxpYiBmaWxlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2xpYkZpbGVzLmZldGNoTGliRmlsZXNJZk5lY2Vzc2FyeShlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIFVyaS5wYXJzZShlbnRyeS5maWxlTmFtZSk7IH0pKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZldGNoIGxpYiBmaWxlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBlbnRyaWVzXzEgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGVudHJpZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpID0gVXJpLnBhcnNlKGVudHJ5LmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZNb2RlbCA9IHRoaXMuX2xpYkZpbGVzLmdldE9yQ3JlYXRlTW9kZWwodXJpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmTW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiB1cmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHJlZk1vZGVsLCBlbnRyeS50ZXh0U3BhbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmluaXRpb25BZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBEZWZpbml0aW9uQWRhcHRlciB9O1xuLy8gLS0tIHJlZmVyZW5jZXMgLS0tLS0tXG52YXIgUmVmZXJlbmNlQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVmZXJlbmNlQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWZlcmVuY2VBZGFwdGVyKF9saWJGaWxlcywgd29ya2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHdvcmtlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2xpYkZpbGVzID0gX2xpYkZpbGVzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJlZmVyZW5jZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVSZWZlcmVuY2VzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBvZmZzZXQsIHdvcmtlciwgZW50cmllcywgcmVzdWx0LCBfaSwgZW50cmllc18yLCBlbnRyeSwgdXJpLCByZWZNb2RlbDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRSZWZlcmVuY2VzQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW50cmllcyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGZXRjaCBsaWIgZmlsZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9saWJGaWxlcy5mZXRjaExpYkZpbGVzSWZOZWNlc3NhcnkoZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7IHJldHVybiBVcmkucGFyc2UoZW50cnkuZmlsZU5hbWUpOyB9KSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGZXRjaCBsaWIgZmlsZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgZW50cmllc18yID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBlbnRyaWVzXzJbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaSA9IFVyaS5wYXJzZShlbnRyeS5maWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmTW9kZWwgPSB0aGlzLl9saWJGaWxlcy5nZXRPckNyZWF0ZU1vZGVsKHVyaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogdXJpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShyZWZNb2RlbCwgZW50cnkudGV4dFNwYW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZWZlcmVuY2VBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBSZWZlcmVuY2VBZGFwdGVyIH07XG4vLyAtLS0gb3V0bGluZSAtLS0tLS1cbnZhciBPdXRsaW5lQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3V0bGluZUFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT3V0bGluZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT3V0bGluZUFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudFN5bWJvbHMgPSBmdW5jdGlvbiAobW9kZWwsIHRva2VuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgd29ya2VyLCBpdGVtcywgY29udmVydCwgcmVzdWx0O1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXROYXZpZ2F0aW9uQmFySXRlbXMocmVzb3VyY2UudG9TdHJpbmcoKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbXMgfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydCA9IGZ1bmN0aW9uIChidWNrZXQsIGl0ZW0sIGNvbnRhaW5lckxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAob3V0bGluZVR5cGVUYWJsZVtpdGVtLmtpbmRdIHx8IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IF90aGlzLl90ZXh0U3BhblRvUmFuZ2UobW9kZWwsIGl0ZW0uc3BhbnNbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25SYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgaXRlbS5zcGFuc1swXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOYW1lOiBjb250YWluZXJMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRJdGVtcyAmJiBpdGVtLmNoaWxkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gaXRlbS5jaGlsZEl0ZW1zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydChidWNrZXQsIGNoaWxkLCByZXN1bHQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0LnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGNvbnZlcnQocmVzdWx0LCBpdGVtKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gT3V0bGluZUFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IE91dGxpbmVBZGFwdGVyIH07XG52YXIgS2luZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLaW5kKCkge1xuICAgIH1cbiAgICBLaW5kLnVua25vd24gPSAnJztcbiAgICBLaW5kLmtleXdvcmQgPSAna2V5d29yZCc7XG4gICAgS2luZC5zY3JpcHQgPSAnc2NyaXB0JztcbiAgICBLaW5kLm1vZHVsZSA9ICdtb2R1bGUnO1xuICAgIEtpbmQuY2xhc3MgPSAnY2xhc3MnO1xuICAgIEtpbmQuaW50ZXJmYWNlID0gJ2ludGVyZmFjZSc7XG4gICAgS2luZC50eXBlID0gJ3R5cGUnO1xuICAgIEtpbmQuZW51bSA9ICdlbnVtJztcbiAgICBLaW5kLnZhcmlhYmxlID0gJ3Zhcic7XG4gICAgS2luZC5sb2NhbFZhcmlhYmxlID0gJ2xvY2FsIHZhcic7XG4gICAgS2luZC5mdW5jdGlvbiA9ICdmdW5jdGlvbic7XG4gICAgS2luZC5sb2NhbEZ1bmN0aW9uID0gJ2xvY2FsIGZ1bmN0aW9uJztcbiAgICBLaW5kLm1lbWJlckZ1bmN0aW9uID0gJ21ldGhvZCc7XG4gICAgS2luZC5tZW1iZXJHZXRBY2Nlc3NvciA9ICdnZXR0ZXInO1xuICAgIEtpbmQubWVtYmVyU2V0QWNjZXNzb3IgPSAnc2V0dGVyJztcbiAgICBLaW5kLm1lbWJlclZhcmlhYmxlID0gJ3Byb3BlcnR5JztcbiAgICBLaW5kLmNvbnN0cnVjdG9ySW1wbGVtZW50YXRpb24gPSAnY29uc3RydWN0b3InO1xuICAgIEtpbmQuY2FsbFNpZ25hdHVyZSA9ICdjYWxsJztcbiAgICBLaW5kLmluZGV4U2lnbmF0dXJlID0gJ2luZGV4JztcbiAgICBLaW5kLmNvbnN0cnVjdFNpZ25hdHVyZSA9ICdjb25zdHJ1Y3QnO1xuICAgIEtpbmQucGFyYW1ldGVyID0gJ3BhcmFtZXRlcic7XG4gICAgS2luZC50eXBlUGFyYW1ldGVyID0gJ3R5cGUgcGFyYW1ldGVyJztcbiAgICBLaW5kLnByaW1pdGl2ZVR5cGUgPSAncHJpbWl0aXZlIHR5cGUnO1xuICAgIEtpbmQubGFiZWwgPSAnbGFiZWwnO1xuICAgIEtpbmQuYWxpYXMgPSAnYWxpYXMnO1xuICAgIEtpbmQuY29uc3QgPSAnY29uc3QnO1xuICAgIEtpbmQubGV0ID0gJ2xldCc7XG4gICAgS2luZC53YXJuaW5nID0gJ3dhcm5pbmcnO1xuICAgIHJldHVybiBLaW5kO1xufSgpKTtcbmV4cG9ydCB7IEtpbmQgfTtcbnZhciBvdXRsaW5lVHlwZVRhYmxlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tb2R1bGVdID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuTW9kdWxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmNsYXNzXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLkNsYXNzO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmVudW1dID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuRW51bTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5pbnRlcmZhY2VdID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuSW50ZXJmYWNlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlckZ1bmN0aW9uXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLk1ldGhvZDtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJWYXJpYWJsZV0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5Qcm9wZXJ0eTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJHZXRBY2Nlc3Nvcl0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5Qcm9wZXJ0eTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5tZW1iZXJTZXRBY2Nlc3Nvcl0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5Qcm9wZXJ0eTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC52YXJpYWJsZV0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5jb25zdF0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5WYXJpYWJsZTtcbm91dGxpbmVUeXBlVGFibGVbS2luZC5sb2NhbFZhcmlhYmxlXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLnZhcmlhYmxlXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmZ1bmN0aW9uXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLkZ1bmN0aW9uO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmxvY2FsRnVuY3Rpb25dID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuRnVuY3Rpb247XG4vLyAtLS0gZm9ybWF0dGluZyAtLS0tXG52YXIgRm9ybWF0SGVscGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtYXRIZWxwZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybWF0SGVscGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgQ29udmVydFRhYnNUb1NwYWNlczogb3B0aW9ucy5pbnNlcnRTcGFjZXMsXG4gICAgICAgICAgICBUYWJTaXplOiBvcHRpb25zLnRhYlNpemUsXG4gICAgICAgICAgICBJbmRlbnRTaXplOiBvcHRpb25zLnRhYlNpemUsXG4gICAgICAgICAgICBJbmRlbnRTdHlsZTogSW5kZW50U3R5bGUuU21hcnQsXG4gICAgICAgICAgICBOZXdMaW5lQ2hhcmFjdGVyOiAnXFxuJyxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJDb21tYURlbGltaXRlcjogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJTZW1pY29sb25JbkZvclN0YXRlbWVudHM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUJlZm9yZUFuZEFmdGVyQmluYXJ5T3BlcmF0b3JzOiB0cnVlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlcktleXdvcmRzSW5Db250cm9sRmxvd1N0YXRlbWVudHM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyRnVuY3Rpb25LZXl3b3JkRm9yQW5vbnltb3VzRnVuY3Rpb25zOiB0cnVlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlck9wZW5pbmdBbmRCZWZvcmVDbG9zaW5nTm9uZW1wdHlQYXJlbnRoZXNpczogZmFsc2UsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyT3BlbmluZ0FuZEJlZm9yZUNsb3NpbmdOb25lbXB0eUJyYWNrZXRzOiBmYWxzZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJPcGVuaW5nQW5kQmVmb3JlQ2xvc2luZ1RlbXBsYXRlU3RyaW5nQnJhY2VzOiBmYWxzZSxcbiAgICAgICAgICAgIFBsYWNlT3BlbkJyYWNlT25OZXdMaW5lRm9yQ29udHJvbEJsb2NrczogZmFsc2UsXG4gICAgICAgICAgICBQbGFjZU9wZW5CcmFjZU9uTmV3TGluZUZvckZ1bmN0aW9uczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEZvcm1hdEhlbHBlci5wcm90b3R5cGUuX2NvbnZlcnRUZXh0Q2hhbmdlcyA9IGZ1bmN0aW9uIChtb2RlbCwgY2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiBjaGFuZ2UubmV3VGV4dCxcbiAgICAgICAgICAgIHJhbmdlOiB0aGlzLl90ZXh0U3BhblRvUmFuZ2UobW9kZWwsIGNoYW5nZS5zcGFuKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm1hdEhlbHBlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgRm9ybWF0SGVscGVyIH07XG52YXIgRm9ybWF0QWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9ybWF0QWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtYXRBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEZvcm1hdEFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCByYW5nZSwgb3B0aW9ucywgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBzdGFydE9mZnNldCwgZW5kT2Zmc2V0LCB3b3JrZXIsIGVkaXRzO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IHJhbmdlLmVuZExpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiByYW5nZS5lbmRDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRGb3JtYXR0aW5nRWRpdHNGb3JSYW5nZShyZXNvdXJjZS50b1N0cmluZygpLCBzdGFydE9mZnNldCwgZW5kT2Zmc2V0LCBGb3JtYXRIZWxwZXIuX2NvbnZlcnRPcHRpb25zKG9wdGlvbnMpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlZGl0cyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZWRpdHMubWFwKGZ1bmN0aW9uIChlZGl0KSB7IHJldHVybiBfdGhpcy5fY29udmVydFRleHRDaGFuZ2VzKG1vZGVsLCBlZGl0KTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtYXRBZGFwdGVyO1xufShGb3JtYXRIZWxwZXIpKTtcbmV4cG9ydCB7IEZvcm1hdEFkYXB0ZXIgfTtcbnZhciBGb3JtYXRPblR5cGVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtYXRPblR5cGVBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1hdE9uVHlwZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1hdE9uVHlwZUFkYXB0ZXIucHJvdG90eXBlLCBcImF1dG9Gb3JtYXRUcmlnZ2VyQ2hhcmFjdGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnOycsICd9JywgJ1xcbiddO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRm9ybWF0T25UeXBlQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZU9uVHlwZUZvcm1hdHRpbmdFZGl0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIGNoLCBvcHRpb25zLCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBlZGl0cztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0Rm9ybWF0dGluZ0VkaXRzQWZ0ZXJLZXlzdHJva2UocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0LCBjaCwgRm9ybWF0SGVscGVyLl9jb252ZXJ0T3B0aW9ucyhvcHRpb25zKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0cyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWRpdHMgfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGVkaXRzLm1hcChmdW5jdGlvbiAoZWRpdCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnRUZXh0Q2hhbmdlcyhtb2RlbCwgZWRpdCk7IH0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybWF0T25UeXBlQWRhcHRlcjtcbn0oRm9ybWF0SGVscGVyKSk7XG5leHBvcnQgeyBGb3JtYXRPblR5cGVBZGFwdGVyIH07XG4vLyAtLS0gY29kZSBhY3Rpb25zIC0tLS0tLVxudmFyIENvZGVBY3Rpb25BZGFwdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb2RlQWN0aW9uQWRhcHRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb2RlQWN0aW9uQWRhcHRvcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb2RlQWN0aW9uQWRhcHRvci5wcm90b3R5cGUucHJvdmlkZUNvZGVBY3Rpb25zID0gZnVuY3Rpb24gKG1vZGVsLCByYW5nZSwgY29udGV4dCwgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBzdGFydCwgZW5kLCBmb3JtYXRPcHRpb25zLCBlcnJvckNvZGVzLCB3b3JrZXIsIGNvZGVGaXhlcywgYWN0aW9ucztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IHJhbmdlLnN0YXJ0TGluZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHJhbmdlLnN0YXJ0Q29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IG1vZGVsLmdldE9mZnNldEF0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiByYW5nZS5lbmRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogcmFuZ2UuZW5kQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnMgPSBGb3JtYXRIZWxwZXIuX2NvbnZlcnRPcHRpb25zKG1vZGVsLmdldE9wdGlvbnMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGVzID0gY29udGV4dC5tYXJrZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5jb2RlOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uY29kZTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldENvZGVGaXhlc0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgc3RhcnQsIGVuZCwgZXJyb3JDb2RlcywgZm9ybWF0T3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlRml4ZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvZGVGaXhlcyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBhY3Rpb25zOiBbXSwgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9IH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyA9IGNvZGVGaXhlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGZpeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZXMgYW55ICdtYWtlIGEgbmV3IGZpbGUnLXR5cGUgY29kZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4LmNoYW5nZXMuZmlsdGVyKGZ1bmN0aW9uIChjaGFuZ2UpIHsgcmV0dXJuIGNoYW5nZS5pc05ld0ZpbGU7IH0pLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZml4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl90c0NvZGVGaXhBY3Rpb25Ub01vbmFjb0NvZGVBY3Rpb24obW9kZWwsIGNvbnRleHQsIGZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IGFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvZGVBY3Rpb25BZGFwdG9yLnByb3RvdHlwZS5fdHNDb2RlRml4QWN0aW9uVG9Nb25hY29Db2RlQWN0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCBjb250ZXh0LCBjb2RlRml4KSB7XG4gICAgICAgIHZhciBlZGl0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gY29kZUZpeC5jaGFuZ2VzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IF9hW19pXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBjaGFuZ2UudGV4dENoYW5nZXM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHRDaGFuZ2UgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgZWRpdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiBtb2RlbC51cmksXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0aGlzLl90ZXh0U3BhblRvUmFuZ2UobW9kZWwsIHRleHRDaGFuZ2Uuc3BhbiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0Q2hhbmdlLm5ld1RleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBhY3Rpb24gPSB7XG4gICAgICAgICAgICB0aXRsZTogY29kZUZpeC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVkaXQ6IHsgZWRpdHM6IGVkaXRzIH0sXG4gICAgICAgICAgICBkaWFnbm9zdGljczogY29udGV4dC5tYXJrZXJzLFxuICAgICAgICAgICAga2luZDogJ3F1aWNrZml4J1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIENvZGVBY3Rpb25BZGFwdG9yO1xufShGb3JtYXRIZWxwZXIpKTtcbmV4cG9ydCB7IENvZGVBY3Rpb25BZGFwdG9yIH07XG4vLyAtLS0gcmVuYW1lIC0tLS1cbnZhciBSZW5hbWVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZW5hbWVBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlbmFtZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUmVuYW1lQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZVJlbmFtZUVkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgbmV3TmFtZSwgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlLCBmaWxlTmFtZSwgb2Zmc2V0LCB3b3JrZXIsIHJlbmFtZUluZm8sIHJlbmFtZUxvY2F0aW9ucywgZWRpdHMsIF9pLCByZW5hbWVMb2NhdGlvbnNfMSwgcmVuYW1lTG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gcmVzb3VyY2UudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0UmVuYW1lSW5mbyhmaWxlTmFtZSwgb2Zmc2V0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93UmVuYW1lT2ZJbXBvcnRQYXRoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuYW1lSW5mbyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5hbWVJbmZvLmNhblJlbmFtZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2UgZXhwbGljaXQgY29tcGFyaXNvbiBzbyB0aGF0IHRoZSBkaXNjcmltaW5hdGVkIHVuaW9uIGdldHMgcmVzb2x2ZWQgcHJvcGVybHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0UmVhc29uOiByZW5hbWVJbmZvLmxvY2FsaXplZEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5hbWVJbmZvLmZpbGVUb1JlbmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5hbWluZyBmaWxlcyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmZpbmRSZW5hbWVMb2NhdGlvbnMoZmlsZU5hbWUsIG9mZnNldCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypzdHJpbmdzKi8gZmFsc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qY29tbWVudHMqLyBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypwcmVmaXhBbmRTdWZmaXgqLyBmYWxzZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5hbWVMb2NhdGlvbnMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlbmFtZUxvY2F0aW9ucyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIHJlbmFtZUxvY2F0aW9uc18xID0gcmVuYW1lTG9jYXRpb25zOyBfaSA8IHJlbmFtZUxvY2F0aW9uc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmFtZUxvY2F0aW9uID0gcmVuYW1lTG9jYXRpb25zXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogVXJpLnBhcnNlKHJlbmFtZUxvY2F0aW9uLmZpbGVOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgcmVuYW1lTG9jYXRpb24udGV4dFNwYW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmV3TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBlZGl0czogZWRpdHMgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFJlbmFtZUFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFJlbmFtZUFkYXB0ZXIgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy9cbi8vICoqTk9URSoqOiBEbyBub3QgZWRpdCBkaXJlY3RseSEgVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCB1c2luZyBgbnBtIHJ1biBpbXBvcnQtdHlwZXNjcmlwdGBcbi8vXG4vKiogQ29udGFpbnMgYWxsIHRoZSBsaWIgZmlsZXMgKi9cbmV4cG9ydCB2YXIgbGliRmlsZVNldCA9IHt9O1xubGliRmlsZVNldFsnbGliLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZG9tLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZG9tLml0ZXJhYmxlLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE1LmNvbGxlY3Rpb24uZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTUuY29yZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5nZW5lcmF0b3IuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTUuaXRlcmFibGUuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTUucHJvbWlzZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5wcm94eS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5yZWZsZWN0LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE1LnN5bWJvbC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5zeW1ib2wud2VsbGtub3duLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE2LmFycmF5LmluY2x1ZGUuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTYuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTYuZnVsbC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNy5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNy5mdWxsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE3LmludGwuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTcub2JqZWN0LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE3LnNoYXJlZG1lbW9yeS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNy5zdHJpbmcuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTcudHlwZWRhcnJheXMuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTguYXN5bmNnZW5lcmF0b3IuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTguYXN5bmNpdGVyYWJsZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOC5mdWxsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE4LmludGwuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTgucHJvbWlzZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOC5yZWdleHAuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTkuYXJyYXkuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTkuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTkuZnVsbC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOS5vYmplY3QuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTkuc3RyaW5nLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE5LnN5bWJvbC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAyMC5iaWdpbnQuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMjAuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMjAuZnVsbC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAyMC5pbnRsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDIwLnByb21pc2UuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMjAuc3RyaW5nLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDIwLnN5bWJvbC53ZWxsa25vd24uZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczUuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczYuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lc25leHQuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lc25leHQuZnVsbC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzbmV4dC5pbnRsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXNuZXh0LnByb21pc2UuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lc25leHQuc3RyaW5nLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuc2NyaXB0aG9zdC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLndlYndvcmtlci5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLndlYndvcmtlci5pbXBvcnRzY3JpcHRzLmQudHMnXSA9IHRydWU7XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IFdvcmtlck1hbmFnZXIgfSBmcm9tICcuL3dvcmtlck1hbmFnZXIuanMnO1xuaW1wb3J0ICogYXMgbGFuZ3VhZ2VGZWF0dXJlcyBmcm9tICcuL2xhbmd1YWdlRmVhdHVyZXMuanMnO1xuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi9maWxsZXJzL21vbmFjby1lZGl0b3ItY29yZS5qcyc7XG52YXIgamF2YVNjcmlwdFdvcmtlcjtcbnZhciB0eXBlU2NyaXB0V29ya2VyO1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwVHlwZVNjcmlwdChkZWZhdWx0cykge1xuICAgIHR5cGVTY3JpcHRXb3JrZXIgPSBzZXR1cE1vZGUoZGVmYXVsdHMsICd0eXBlc2NyaXB0Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBKYXZhU2NyaXB0KGRlZmF1bHRzKSB7XG4gICAgamF2YVNjcmlwdFdvcmtlciA9IHNldHVwTW9kZShkZWZhdWx0cywgJ2phdmFzY3JpcHQnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRKYXZhU2NyaXB0V29ya2VyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICghamF2YVNjcmlwdFdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnSmF2YVNjcmlwdCBub3QgcmVnaXN0ZXJlZCEnKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGphdmFTY3JpcHRXb3JrZXIpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVTY3JpcHRXb3JrZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCF0eXBlU2NyaXB0V29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdUeXBlU2NyaXB0IG5vdCByZWdpc3RlcmVkIScpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUodHlwZVNjcmlwdFdvcmtlcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXR1cE1vZGUoZGVmYXVsdHMsIG1vZGVJZCkge1xuICAgIHZhciBjbGllbnQgPSBuZXcgV29ya2VyTWFuYWdlcihtb2RlSWQsIGRlZmF1bHRzKTtcbiAgICB2YXIgd29ya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJpcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdXJpc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQuZ2V0TGFuZ3VhZ2VTZXJ2aWNlV29ya2VyLmFwcGx5KGNsaWVudCwgdXJpcyk7XG4gICAgfTtcbiAgICB2YXIgbGliRmlsZXMgPSBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5MaWJGaWxlcyh3b3JrZXIpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5TdWdnZXN0QWRhcHRlcih3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJTaWduYXR1cmVIZWxwUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5TaWduYXR1cmVIZWxwQWRhcHRlcih3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJIb3ZlclByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuUXVpY2tJbmZvQWRhcHRlcih3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudEhpZ2hsaWdodFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuT2NjdXJyZW5jZXNBZGFwdGVyKHdvcmtlcikpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlckRlZmluaXRpb25Qcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRlZmluaXRpb25BZGFwdGVyKGxpYkZpbGVzLCB3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJSZWZlcmVuY2VQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlJlZmVyZW5jZUFkYXB0ZXIobGliRmlsZXMsIHdvcmtlcikpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50U3ltYm9sUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5PdXRsaW5lQWRhcHRlcih3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkZvcm1hdEFkYXB0ZXIod29ya2VyKSk7XG4gICAgbGFuZ3VhZ2VzLnJlZ2lzdGVyT25UeXBlRm9ybWF0dGluZ0VkaXRQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkZvcm1hdE9uVHlwZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbGFuZ3VhZ2VzLnJlZ2lzdGVyQ29kZUFjdGlvblByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuQ29kZUFjdGlvbkFkYXB0b3Iod29ya2VyKSk7XG4gICAgbGFuZ3VhZ2VzLnJlZ2lzdGVyUmVuYW1lUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5SZW5hbWVBZGFwdGVyKHdvcmtlcikpO1xuICAgIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRpYWdub3N0aWNzQWRhcHRlcihsaWJGaWxlcywgZGVmYXVsdHMsIG1vZGVJZCwgd29ya2VyKTtcbiAgICByZXR1cm4gd29ya2VyO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZWRpdG9yIH0gZnJvbSAnLi9maWxsZXJzL21vbmFjby1lZGl0b3ItY29yZS5qcyc7XG52YXIgV29ya2VyTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb3JrZXJNYW5hZ2VyKG1vZGVJZCwgZGVmYXVsdHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fbW9kZUlkID0gbW9kZUlkO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb25maWdDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9zdG9wV29ya2VyKCk7IH0pO1xuICAgICAgICB0aGlzLl91cGRhdGVFeHRyYUxpYnNUb2tlbiA9IDA7XG4gICAgICAgIHRoaXMuX2V4dHJhTGlic0NoYW5nZUxpc3RlbmVyID0gdGhpcy5fZGVmYXVsdHMub25EaWRFeHRyYUxpYnNDaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl91cGRhdGVFeHRyYUxpYnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9zdG9wV29ya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbGllbnQgPSBudWxsO1xuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnQ2hhbmdlTGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9leHRyYUxpYnNDaGFuZ2VMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3N0b3BXb3JrZXIoKTtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl91cGRhdGVFeHRyYUxpYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBteVRva2VuLCBwcm94eTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2tlbiA9ICsrdGhpcy5fdXBkYXRlRXh0cmFMaWJzVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIuZ2V0UHJveHkoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUV4dHJhTGlic1Rva2VuICE9PSBteVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgbXVsdGlwbGUgY2FsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eS51cGRhdGVFeHRyYUxpYnModGhpcy5fZGVmYXVsdHMuZ2V0RXh0cmFMaWJzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9nZXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5fY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBlZGl0b3IuY3JlYXRlV2ViV29ya2VyKHtcbiAgICAgICAgICAgICAgICAvLyBtb2R1bGUgdGhhdCBleHBvcnRzIHRoZSBjcmVhdGUoKSBtZXRob2QgYW5kIHJldHVybnMgYSBgVHlwZVNjcmlwdFdvcmtlcmAgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogJ3ZzL2xhbmd1YWdlL3R5cGVzY3JpcHQvdHNXb3JrZXInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLl9tb2RlSWQsXG4gICAgICAgICAgICAgICAga2VlcElkbGVNb2RlbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gcGFzc2VkIGluIHRvIHRoZSBjcmVhdGUoKSBtZXRob2RcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczogdGhpcy5fZGVmYXVsdHMuZ2V0Q29tcGlsZXJPcHRpb25zKCksXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhTGliczogdGhpcy5fZGVmYXVsdHMuZ2V0RXh0cmFMaWJzKCksXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVdvcmtlclBhdGg6IHRoaXMuX2RlZmF1bHRzLndvcmtlck9wdGlvbnMuY3VzdG9tV29ya2VyUGF0aFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLl93b3JrZXIuZ2V0UHJveHkoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWZhdWx0cy5nZXRFYWdlck1vZGVsU3luYygpKSB7XG4gICAgICAgICAgICAgICAgcCA9IHAudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX3dvcmtlci53aXRoU3luY2VkUmVzb3VyY2VzKGVkaXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRNb2RlbHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1vZGVsKSB7IHJldHVybiBtb2RlbC5nZXRNb2RlSWQoKSA9PT0gX3RoaXMuX21vZGVJZDsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb2RlbCkgeyByZXR1cm4gbW9kZWwudXJpOyB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudDtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLmdldExhbmd1YWdlU2VydmljZVdvcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc291cmNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgcmVzb3VyY2VzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9jbGllbnQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDbGllbnQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgX2NsaWVudCA9IGNsaWVudDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX3dvcmtlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fd29ya2VyLndpdGhTeW5jZWRSZXNvdXJjZXMocmVzb3VyY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChfKSB7IHJldHVybiBfY2xpZW50OyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXb3JrZXJNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IFdvcmtlck1hbmFnZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=