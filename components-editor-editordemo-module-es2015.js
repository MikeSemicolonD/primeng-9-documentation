(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-editor-editordemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/editor/editordemo.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/editor/editordemo.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Editor</span>\n        <span>Editor is rich text editor component based on Quill.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-editor [(ngModel)]=\"text1\" [style]=\"{'height':'320px'}\"></p-editor>\n    <p>Value: {{text1||'empty'}}</p>\n    \n    <button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text1=null\"></button>\n    \n    <hr style=\"border-top:0px;border-color:#dde3e6\">\n    \n    <h3>Custom Toolbar</h3>\n    <p-editor [(ngModel)]=\"text2\" [style]=\"{'height':'320px'}\">\n        <p-header>\n            <span class=\"ql-formats\">\n                <button class=\"ql-bold\" aria-label=\"Bold\"></button>\n                <button class=\"ql-italic\" aria-label=\"Italic\"></button>\n                <button class=\"ql-underline\" aria-label=\"Underline\"></button>\n            </span>\n        </p-header>\n    </p-editor>\n    <p>Value: {{text2||'empty'}}</p>\n    \n    <button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text2=null\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;EditorModule&#125; from 'primeng/editor';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined with ngModel.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-editor [(ngModel)]=\"text\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class EditorDemo &#123;\n    \n    text: string;\n        \n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Editor can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-editor formControlName=\"description\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\n</code>\n</pre>\n\n            <h3>Toolbar</h3>\n            <p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href=\"http://quilljs.com/docs/modules/toolbar/\">Quill documentation</a> for available controls.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\n    &lt;p-header&gt;\n        &lt;span class=\"ql-format-group\"&gt;\n            &lt;span title=\"Bold\" class=\"ql-format-button ql-bold\"&gt;&lt;/span&gt;\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\n            &lt;span title=\"Italic\" class=\"ql-format-button ql-italic\"&gt;&lt;/span&gt;\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\n            &lt;span title=\"Underline\" class=\"ql-format-button ql-underline\"&gt;&lt;/span&gt;\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\n            &lt;span title=\"Strikethrough\" class=\"ql-format-button ql-strike\"&gt;&lt;/span&gt;\n        &lt;/span&gt;\n    &lt;/p-header&gt;\n&lt;/p-editor&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the container.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the container.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Placeholder text to show when editor is empty.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to instantiate the editor to read-only mode.</td>\n                        </tr>\n                        <tr>\n                            <td>formats</td>\n                            <td>string[]</td>\n                            <td>null</td>\n                            <td>Whitelist of formats to display, see <a href=\"http://quilljs.com/docs/formats/\">here</a> for available options.</td>\n                        </tr>\n                        <tr>\n                            <td>modules</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Modules configuration of Editor, see <a href=\"https://quilljs.com/docs/modules/\">here</a> for available options.</td>\n                        </tr>\n                        <tr>\n                            <td>debug</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Shortcut for debug. Note debug is a static method and will affect other instances of Quill \n                                editors on the page. Only warning and error messages are enabled by default.</td>\n                        </tr>\n                        <tr>\n                            <td>bounds</td>\n                            <td>Element</td>\n                            <td>document.body</td>\n                            <td>DOM Element or a CSS selector for a DOM Element, within which the editor’s ui elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries..</td>\n                        </tr>\n                        <tr>\n                            <td>scrollingContainer</td>\n                            <td>Element</td>\n                            <td>null</td>\n                            <td>DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. \n                                Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling..</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onTextChange</td>\n                            <td>event.delta: Representation of the change.<br>\n                                event.source: Source of change. Will be either \"user\" or \"api\".<br>\n                                event.htmlValue: Current value as html.<br>\n                                event.textValue: Current value as text.<br></td>\n                            <td>Callback to invoke when the text of the editor is changed by the user.</td>\n                        </tr>\n                        <tr>\n                            <td>onSelectionChange</td>\n                            <td>event.range: Object with index and length keys indicating where the selection exists.<br>\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\n                            <td>Callback to invoke when selected text of editor changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onInit</td>\n                            <td>event.editor: Quill editor instance.<br>\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\n                            <td>Callback to invoke after editor is initialized.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <p>Refer to <a href=\"http://beta.quilljs.com/docs/api/#events\">Quill documentation</a> for more information.</p>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>getQuill</td>\n                            <td>-</td>\n                            <td>Returns the underlying quill instance.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-editor-container</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-editor-toolbar</td>\n                            <td>Toolbar of the editor</td>\n                        </tr>\n                        <tr>\n                            <td>ui-editor-content</td>\n                            <td>Editable area</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p><a href=\"http://quilljs.com\">Quill</a> Editor 1.0.</p>\n            <p>Resources of quill needs to be added to your application. Example setup with CLI is as follows;</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install quill --save\n</code>\n</pre>\n            <p>Add Quill to scripts in angular-cli.json</p>  \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n\"scripts\": [... \"../node_modules/quill/dist/quill.js\"],\n</code>\n</pre>\n            <p>Add Quill css to styles in angular-cli.json</p>  \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n\"styles\": [ ... \"../node_modules/quill/dist/quill.core.css\", \"../node_modules/quill/dist/quill.snow.css\"],\n</code> \n</pre>        \n\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/editor\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-editor-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-editor [(ngModel)]=\"text1\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\n&lt;p&gt;Value: &#123;&#123;text1||'empty'&#125;&#125;&lt;/p&gt;\n\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text1=null\"&gt;&lt;/button&gt;\n\n&lt;hr style=\"border-top:0px;border-color:#dde3e6\"&gt;\n\n&lt;h3&gt;Custom Toolbar&lt;/h3&gt;\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\n    &lt;p-header&gt;\n        &lt;span class=\"ql-formats\"&gt;\n            &lt;button class=\"ql-bold\" aria-label=\"Bold\"&gt;&lt;/button&gt;\n            &lt;button class=\"ql-italic\" aria-label=\"Italic\"&gt;&lt;/button&gt;\n            &lt;button class=\"ql-underline\" aria-label=\"Underline\"&gt;&lt;/button&gt;\n        &lt;/span&gt;\n    &lt;/p-header&gt;\n&lt;/p-editor&gt;\n&lt;p&gt;Value: &#123;&#123;text2||'empty'&#125;&#125;&lt;/p&gt;\n\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"pi pi-times\" (click)=\"text2=null\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\n\n@Component(&#123;\n    templateUrl: './editordemo.html'\n&#125;)\nexport class EditorDemo &#123;\n\n    text1: string = '&lt;div&gt;Hello World!&lt;/div&gt;&lt;div&gt;PrimeNG &lt;b&gt;Editor&lt;/b&gt; Rocks&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;';\n    \n    text2: string;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-editor-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/editor/editordemo-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/editor/editordemo-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditorDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemoRoutingModule", function() { return EditorDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editordemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editordemo */ "./src/app/showcase/components/editor/editordemo.ts");




let EditorDemoRoutingModule = class EditorDemoRoutingModule {
};
EditorDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _editordemo__WEBPACK_IMPORTED_MODULE_3__["EditorDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], EditorDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/editor/editordemo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/showcase/components/editor/editordemo.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditorDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemoModule", function() { return EditorDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _editordemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editordemo */ "./src/app/showcase/components/editor/editordemo.ts");
/* harmony import */ var _editordemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editordemo-routing.module */ "./src/app/showcase/components/editor/editordemo-routing.module.ts");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/editor */ "./src/app/components/editor/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");










let EditorDemoModule = class EditorDemoModule {
};
EditorDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _editordemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditorDemoRoutingModule"],
            primeng_editor__WEBPACK_IMPORTED_MODULE_6__["EditorModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _editordemo__WEBPACK_IMPORTED_MODULE_4__["EditorDemo"]
        ]
    })
], EditorDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/editor/editordemo.ts":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/editor/editordemo.ts ***!
  \**********************************************************/
/*! exports provided: EditorDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemo", function() { return EditorDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditorDemo = class EditorDemo {
    constructor() {
        this.text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    }
};
EditorDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editordemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/editor/editordemo.html")).default
    })
], EditorDemo);



/***/ })

}]);
//# sourceMappingURL=components-editor-editordemo-module-es2015.js.map