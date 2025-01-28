(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputmask-inputmaskdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputmask/inputmaskdemo.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputmask/inputmaskdemo.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputMask</span>\n        <span>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-6 p-lg-4\">\n            <span>Basic</span>\n            <p-inputMask mask=\"99-999999\" [(ngModel)]=\"val1\" placeholder=\"99-999999\"></p-inputMask>\n        </div>\n        \n        <div class=\"p-col-12 p-md-6 p-lg-4\">\n            <span>SSN</span>\n            <p-inputMask mask=\"999-99-9999\" [(ngModel)]=\"val2\" placeholder=\"999-99-9999\"></p-inputMask>\n        </div>\n        \n        <div class=\"p-col-12 p-md-6 p-lg-4\">\n            <span>Date</span>\n            <p-inputMask mask=\"99/99/9999\" [(ngModel)]=\"val3\" placeholder=\"99/99/9999\" slotChar=\"mm/dd/yyyy\"></p-inputMask>\n        </div>\n        \n        <div class=\"p-col-12 p-md-6 p-lg-4\">\n            <span>Phone</span>\n            <p-inputMask mask=\"(999) 999-9999\" [(ngModel)]=\"val4\" placeholder=\"(999) 999-9999\"></p-inputMask>\n        </div>\n        \n        <div class=\"p-col-12 p-md-6 p-lg-4\">\n            <span>Phone Ext</span>\n            <p-inputMask mask=\"(999) 999-9999? x99999\" [(ngModel)]=\"val5\" placeholder=\"(999) 999-9999? x99999\"></p-inputMask>\n        </div>\n        \n        <div class=\"p-col-12 p-md-6 p-lg-4\">\n            <span>Serial Number</span>\n            <p-inputMask mask=\"a*-999-a999\" [(ngModel)]=\"val6\" placeholder=\"a*-999-a999\"></p-inputMask>\n        </div>\n    </div>\n    \n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InputMaskModule&#125; from 'primeng/inputmask';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Component is defined using p-inputMask element with a mask and two-way value binding is enabled with standard ngModel directive.</p>   \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-9999\"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n\n            <h3>Mask</h3>\n            <p>Mask format can be a combination of the the following built-in definitions.</p>\n            <ul>\n                <li>a - Alpha character (defaut: A-Z,a-z)</li>\n                <li>9 - Numeric character (0-9)</li>\n                <li>* - Alpha numberic character (A-Z,a-z,0-9)</li>\n            </ul>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"a*-999-a999\"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n            <p>You can also define your own regex pattern for alpha character</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-aa\" characterPattern=\"[А-Яа-я]\"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n            \n            <h3>SlotChar</h3>\n            <p>Underscore is the default placeholder for a mask and this can be customized using <i>slotChart</i> option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask [(ngModel)]=\"val\" mask=\"99-9999\" slotChar=\" \"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n            \n            <h3>Optional Values</h3>\n            <p>If the input does not complete the mask definition, it is cleared by default. Use <i>autoClear</i> property to control this behavior. In addition,\n            certain part of a mask can be made optional by using ? symbol where anything after the question mark becomes optional.</p>\n                        \n            <h3>Model Driven Forms</h3>\n            <p>InputMask can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputMask formControlName=\"username\" mask=\"(999) 999-9999? x99999\"&gt;&lt;/p-inputMask&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>text</td>\n                            <td>HTML5 input type</td>\n                        </tr>\n                        <tr>\n                            <td>mask</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Mask pattern.</td>\n                        </tr>\n                        <tr>\n                            <td>slotChar</td>\n                            <td>string</td>\n                            <td>_</td>\n                            <td>Placeholder character in mask, default is underscore.</td>\n                        </tr>\n                        <tr>\n                            <td>autoClear</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Clears the incomplete value on blur.</td>\n                        </tr>\n                        <tr>\n                            <td>unmask</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Advisory information to display on input.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Size of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Specifies tab order of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element value cannot be altered.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field is read-only.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                        <tr>\n                            <td>characterPattern</td>\n                            <td>string</td>\n                            <td>[A-Za-z]</td>\n                            <td>Regex pattern for alpha characters</td>\n                        </tr>\n                        <tr>\n                            <td>autoFocus</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, the input gets a focus automatically on load.</td>\n                        </tr>\n                        <tr>\n                            <td>autocomplete</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Used to define a string that autocomplete attribute the current element.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Used to define a string that labels the current element.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaRequired</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Used to indicate that user input is required on an element before a form can be submitted.</td>\n                        </tr>\n                        <tr>\n                            <td>title</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Title text of the input text.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input receives focus.</td>\n                        </tr> \n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input loses focus.</td>\n                        </tr>   \n                        <tr>\n                            <td>onComplete</td>\n                            <td>-</td>\n                            <td>Callback to invoke on when user completes the mask pattern.</td>\n                        </tr>\n                        <tr>\n                            <td>onInput</td>\n                            <td>-</td>\n                            <td>Callback to invoke on when the input field value is altered.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>focus</td>\n                            <td>-</td>\n                            <td>Applies focus to the input.</td>\n                        </tr> \n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Styling is same as <a href=\"#\" [routerLink]=\"['/inputtext']\">inputtext component</a>, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputmask\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-inputmask-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-6 p-lg-4\"&gt;\n        &lt;span&gt;Basic&lt;/span&gt;\n        &lt;p-inputMask mask=\"99-999999\" [(ngModel)]=\"val1\" placeholder=\"99-999999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-6 p-lg-4\"&gt;\n        &lt;span&gt;SSN&lt;/span&gt;\n        &lt;p-inputMask mask=\"999-99-9999\" [(ngModel)]=\"val2\" placeholder=\"999-99-9999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-6 p-lg-4\"&gt;\n        &lt;span&gt;Date&lt;/span&gt;\n        &lt;p-inputMask mask=\"99/99/9999\" [(ngModel)]=\"val3\" placeholder=\"99/99/9999\" slotChar=\"mm/dd/yyyy\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-6 p-lg-4\"&gt;\n        &lt;span&gt;Phone&lt;/span&gt;\n        &lt;p-inputMask mask=\"(999) 999-9999\" [(ngModel)]=\"val4\" placeholder=\"(999) 999-9999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-6 p-lg-4\"&gt;\n        &lt;span&gt;Phone Ext&lt;/span&gt;\n        &lt;p-inputMask mask=\"(999) 999-9999? x99999\" [(ngModel)]=\"val5\" placeholder=\"(999) 999-9999? x99999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-6 p-lg-4\"&gt;\n        &lt;span&gt;Serial Number&lt;/span&gt;\n        &lt;p-inputMask mask=\"a*-999-a999\" [(ngModel)]=\"val6\" placeholder=\"a*-999-a999\"&gt;&lt;/p-inputMask&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class InputMaskDemo &#123;\n\n    val1: string;\n\n    val2: string;\n\n    val3: string;\n\n    val4: string;\n\n    val5: string;\n    \n    val6: string;\n    \n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-inputmask-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>");

/***/ }),

/***/ "./src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InputMaskDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDemoRoutingModule", function() { return InputMaskDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inputmaskdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputmaskdemo */ "./src/app/showcase/components/inputmask/inputmaskdemo.ts");




let InputMaskDemoRoutingModule = class InputMaskDemoRoutingModule {
};
InputMaskDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _inputmaskdemo__WEBPACK_IMPORTED_MODULE_3__["InputMaskDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], InputMaskDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/inputmask/inputmaskdemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/inputmask/inputmaskdemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: InputMaskDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDemoModule", function() { return InputMaskDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inputmaskdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputmaskdemo */ "./src/app/showcase/components/inputmask/inputmaskdemo.ts");
/* harmony import */ var _inputmaskdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputmaskdemo-routing.module */ "./src/app/showcase/components/inputmask/inputmaskdemo-routing.module.ts");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputmask */ "./src/app/components/inputmask/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let InputMaskDemoModule = class InputMaskDemoModule {
};
InputMaskDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _inputmaskdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputMaskDemoRoutingModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_6__["InputMaskModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _inputmaskdemo__WEBPACK_IMPORTED_MODULE_4__["InputMaskDemo"]
        ]
    })
], InputMaskDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/inputmask/inputmaskdemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/inputmask/inputmaskdemo.ts ***!
  \****************************************************************/
/*! exports provided: InputMaskDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDemo", function() { return InputMaskDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputMaskDemo = class InputMaskDemo {
};
InputMaskDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inputmaskdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputmask/inputmaskdemo.html")).default,
        styles: ["\n        .p-col-12 > span {\n            display: block;\n            margin-bottom: .5em;\n        }\n    "]
    })
], InputMaskDemo);



/***/ })

}]);
//# sourceMappingURL=components-inputmask-inputmaskdemo-module-es2015.js.map