(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputswitch-inputswitchdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputswitch/inputswitchdemo.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputswitch/inputswitchdemo.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputSwitch</span>\n        <span>InputSwitch is used to select a boolean value.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic - {{checked1}}</h3>\n    <p-inputSwitch [(ngModel)]=\"checked1\"></p-inputSwitch>\n\n    <h3>Labels - {{checked2}}</h3>\n    <p-inputSwitch [(ngModel)]=\"checked2\"></p-inputSwitch>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InputSwitchModule&#125; from 'primeng/inputswitch';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way binding to a boolean property is defined using the standard ngModel directive.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputSwitch [(ngModel)]=\"checked\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    checked: boolean;\n\n&#125;\n</code>\n</pre>\n\n            <p>As model is two-way binding enabled, setting the bound value as true displays the state as checked by default.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n   checked: boolean = true;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>InputSwitch can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputSwitch formControlName=\"enabled\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                          <td>tabindex</td>\n                          <td>number</td>\n                          <td>null</td>\n                          <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the input element.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input element.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component cannot be edited.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>onChange</td>\n                        <td>event.originalEvent: browser event<br>\n                            event.checked: checked state as a boolean</td>\n                        <td>Callback to invoke on state change.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputSwitch (onChange)=\"handleChange($event)\" [(ngModel)]=\"val\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n <pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    handleChange(e) &#123;\n        let isChecked = e.checked;\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-inputswitch</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputswitch-checked</td>\n                            <td>Container element in active state.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputswitch-slider</td>\n                            <td>Slider element behind the handle.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputswitch\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-inputswitch-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic - {{checked1}}&lt;/h3&gt;\n&lt;p-inputSwitch [(ngModel)]=\"checked1\"&gt;&lt;/p-inputSwitch&gt;\n\n&lt;h3&gt;Labels - &lt;span&gt; {{checked2}}&lt;/h3&gt;\n&lt;p-inputSwitch [(ngModel)]=\"checked2\"&gt;&lt;/p-inputSwitch&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class InputSwitchDemo &#123;\n\n    checked1: boolean = false;\n\n    checked2: boolean = true;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-inputswitch-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InputSwitchDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchDemoRoutingModule", function() { return InputSwitchDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inputswitchdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputswitchdemo */ "./src/app/showcase/components/inputswitch/inputswitchdemo.ts");




let InputSwitchDemoRoutingModule = class InputSwitchDemoRoutingModule {
};
InputSwitchDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _inputswitchdemo__WEBPACK_IMPORTED_MODULE_3__["InputSwitchDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], InputSwitchDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/inputswitch/inputswitchdemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/inputswitch/inputswitchdemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: InputSwitchDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchDemoModule", function() { return InputSwitchDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inputswitchdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputswitchdemo */ "./src/app/showcase/components/inputswitch/inputswitchdemo.ts");
/* harmony import */ var _inputswitchdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputswitchdemo-routing.module */ "./src/app/showcase/components/inputswitch/inputswitchdemo-routing.module.ts");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputswitch */ "./src/app/components/inputswitch/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let InputSwitchDemoModule = class InputSwitchDemoModule {
};
InputSwitchDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _inputswitchdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputSwitchDemoRoutingModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__["InputSwitchModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _inputswitchdemo__WEBPACK_IMPORTED_MODULE_4__["InputSwitchDemo"]
        ]
    })
], InputSwitchDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/inputswitch/inputswitchdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/inputswitch/inputswitchdemo.ts ***!
  \********************************************************************/
/*! exports provided: InputSwitchDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchDemo", function() { return InputSwitchDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputSwitchDemo = class InputSwitchDemo {
    constructor() {
        this.checked1 = false;
        this.checked2 = true;
    }
};
InputSwitchDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inputswitchdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputswitch/inputswitchdemo.html")).default
    })
], InputSwitchDemo);



/***/ })

}]);
//# sourceMappingURL=components-inputswitch-inputswitchdemo-module-es2015.js.map