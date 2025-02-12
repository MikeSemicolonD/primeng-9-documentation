(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-spinner-spinnerdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/spinner/spinnerdemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/spinner/spinnerdemo.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Spinner <span class=\"subitem\">Deprecated (Use InputNumber instead)</span></span>\n        <span>Spinner is an input component to provide a numerical input.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val1\"></p-spinner>\n\n    <h3>Min/Max</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"></p-spinner>\n\n    <h3>Step</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"></p-spinner>\n\n    <h3>Format Input</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val4\" [step]=\"0.25\" [formatInput]=\"true\"></p-spinner>\n    \n    <h3>Disabled</h3>\n    <p-spinner size=\"30\" [(ngModel)]=\"val5\" [disabled]=\"true\"></p-spinner>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SpinnerModule&#125; from 'primeng/spinner';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way value binding is defined using standard <i>ngModel</i> directive.</p>     \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner [(ngModel)]=\"val\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Spinner can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner formControlName=\"age\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Min-Max</h3>\n            <p>Boundaries are specified with <i>min</i> and <i>max</i> attributes.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Step</h3>\n            <p>Step factor is 1 by default and can be customized with step option. It is suggested to use the <i>precision</i> property \n                when a step is defined, in case precision is not configured the value would be calculated from the step. For example precision of 0.25 would be 2.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner [(ngModel)]=\"val\" [step]=\"0.25\" [precision]=\"2\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Formatting Input</h3>\n            <p>Enable formatInput property so that value entered is formatted at onblur event using <i>thousandSeparator</i> and <i>decimalSeparator</i> properties which retrieve their values from the user locale automatically. If you'd like to apply\n                certain separators, define the separators manually.\n            </p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-spinner [(ngModel)]=\"val\" [step]=\"0.25\" [formatInput]=\"true\" thousandSeparator=\",\" decimalSeparator=\".\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>step</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Step factor to increment/decrement the value.</td>\n                        </tr>\n                        <tr>\n                            <td>min</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Mininum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Hint text for the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>undefined</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>undefined</td>\n                            <td>When present, it specifies that the element should be read-only.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Size of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>decimalSeparator</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Separator character for decimals, defaults to settings at user locale.</td>\n                        </tr>\n                        <tr>\n                            <td>thousandSeparator</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Separator character for thousands, defaults to settings at user locale.</td>\n                        </tr>\n                        <tr>\n                            <td>formatInput</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, formats the user input at blur event.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                        <tr>\n                            <td>precision</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Number of digits in the decimal section.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Blur event</td>\n                            <td>Callback to invoke when input loses focus.</td>\n                        </tr>       \n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input gets focus.</td>\n                        </tr>                 \n                        <tr>\n                            <td>onChange</td>\n                            <td>event: Change event</td>\n                            <td>Callback to invoke on value change.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-spinner</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-spinner-up</td>\n                            <td>Up element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-spinner-down</td>\n                            <td>Down button</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/spinner\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val1\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Min/Max&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val2\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Step&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val3\" [step]=\"0.25\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Format Input&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val4\" [step]=\"0.25\" [formatInput]=\"true\"&gt;&lt;/p-spinner&gt;\n\n&lt;h3&gt;Disabled&lt;/h3&gt;\n&lt;p-spinner size=\"30\" [(ngModel)]=\"val5\" [disabled]=\"true\"&gt;&lt;/p-spinner&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SpinnerDemo &#123;\n\n    val1: number;\n\n    val2: number;\n\n    val3: number;\n\n    val4: number = 1000000.50;\n\n    val5: number = 100;\n    \n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>");

/***/ }),

/***/ "./src/app/showcase/components/spinner/spinnerdemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/spinner/spinnerdemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SpinnerDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemoRoutingModule", function() { return SpinnerDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _spinnerdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinnerdemo */ "./src/app/showcase/components/spinner/spinnerdemo.ts");




let SpinnerDemoRoutingModule = class SpinnerDemoRoutingModule {
};
SpinnerDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _spinnerdemo__WEBPACK_IMPORTED_MODULE_3__["SpinnerDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], SpinnerDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/spinner/spinnerdemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/spinner/spinnerdemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: SpinnerDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemoModule", function() { return SpinnerDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _spinnerdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinnerdemo */ "./src/app/showcase/components/spinner/spinnerdemo.ts");
/* harmony import */ var _spinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinnerdemo-routing.module */ "./src/app/showcase/components/spinner/spinnerdemo-routing.module.ts");
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/spinner */ "./src/app/components/spinner/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");




;





let SpinnerDemoModule = class SpinnerDemoModule {
};
SpinnerDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _spinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpinnerDemoRoutingModule"],
            primeng_spinner__WEBPACK_IMPORTED_MODULE_6__["SpinnerModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _spinnerdemo__WEBPACK_IMPORTED_MODULE_4__["SpinnerDemo"]
        ]
    })
], SpinnerDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/spinner/spinnerdemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/spinner/spinnerdemo.ts ***!
  \************************************************************/
/*! exports provided: SpinnerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDemo", function() { return SpinnerDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerDemo = class SpinnerDemo {
    constructor() {
        this.val4 = 1000000.5;
        this.val5 = 100;
    }
};
SpinnerDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./spinnerdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/spinner/spinnerdemo.html")).default
    })
], SpinnerDemo);



/***/ })

}]);
//# sourceMappingURL=components-spinner-spinnerdemo-module-es2015.js.map