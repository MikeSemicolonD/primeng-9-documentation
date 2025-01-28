(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputtextarea-inputtextareademo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputtextarea/inputtextareademo.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputtextarea/inputtextareademo.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputTextarea</span>\n        <span>Inputtextarea add styling and autoResize functionality to standard textare element.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <textarea rows=\"5\" cols=\"30\" pInputTextarea></textarea>\n\n    <h3>Float Label</h3>\n    <span class=\"ui-float-label\">\n        <textarea id=\"float-input\" rows=\"5\" cols=\"30\" pInputTextarea></textarea>\n        <label for=\"float-input\">Summary</label>\n    </span>\n\n    <h3>AutoResize</h3>\n    <textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InputTextareaModule&#125; from 'primeng/inputtextarea';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>InputTextarea is applied to an input field with pInputTextarea directive.</p>\n                    \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;textarea pInputTextarea&gt;&lt;/textarea&gt;\n</code>\n</pre>\n\n            <h3>Model Binding</h3>\n            <p>A model can be bound using the standard ngModel directive.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;textarea pInputTextarea [(ngModel)]=\"property\"&gt;&lt;/textarea&gt;\n</code>\n</pre>\n\n            <h3>AutoResize</h3>\n            <p>In auto resize mode, textarea grows instead of displaying a scrollbar. When this feature is enabled, rows and cols properties\n            are required to be defined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;textarea [rows]=\"5\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"&gt;&lt;/textarea&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>autoResize</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, textarea size changes as being typed.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onResize</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when element is resized.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-inputtextarea</td>\n                            <td>Textarea element</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputtextarea\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-inputtextarea-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;textarea rows=\"5\" cols=\"30\" pInputTextarea&gt;&lt;/textarea&gt;\n\n&lt;h3&gt;AutoResize&lt;/h3&gt;\n&lt;textarea rows=\"5\" cols=\"30\" pInputTextarea autoResize=\"autoResize\"&gt;&lt;/textarea&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-inputtextarea-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>");

/***/ }),

/***/ "./src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: InputTextareaDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaDemoRoutingModule", function() { return InputTextareaDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inputtextareademo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputtextareademo */ "./src/app/showcase/components/inputtextarea/inputtextareademo.ts");




let InputTextareaDemoRoutingModule = class InputTextareaDemoRoutingModule {
};
InputTextareaDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _inputtextareademo__WEBPACK_IMPORTED_MODULE_3__["InputTextareaDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], InputTextareaDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/inputtextarea/inputtextareademo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/inputtextarea/inputtextareademo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InputTextareaDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaDemoModule", function() { return InputTextareaDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inputtextareademo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputtextareademo */ "./src/app/showcase/components/inputtextarea/inputtextareademo.ts");
/* harmony import */ var _inputtextareademo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputtextareademo-routing.module */ "./src/app/showcase/components/inputtextarea/inputtextareademo-routing.module.ts");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtextarea */ "./src/app/components/inputtextarea/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");








let InputTextareaDemoModule = class InputTextareaDemoModule {
};
InputTextareaDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inputtextareademo_routing_module__WEBPACK_IMPORTED_MODULE_4__["InputTextareaDemoRoutingModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__["InputTextareaModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _inputtextareademo__WEBPACK_IMPORTED_MODULE_3__["InputTextareaDemo"]
        ]
    })
], InputTextareaDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/inputtextarea/inputtextareademo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/inputtextarea/inputtextareademo.ts ***!
  \************************************************************************/
/*! exports provided: InputTextareaDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaDemo", function() { return InputTextareaDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputTextareaDemo = class InputTextareaDemo {
};
InputTextareaDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inputtextareademo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputtextarea/inputtextareademo.html")).default
    })
], InputTextareaDemo);



/***/ })

}]);
//# sourceMappingURL=components-inputtextarea-inputtextareademo-module-es2015.js.map