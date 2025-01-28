(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chips-chipsdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chips/chipsdemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chips/chipsdemo.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Chips</span>\n        <span>Chips is used to enter multiple values on an inputfield.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation ui-fluid\">\n    <h3 class=\"first\">Basic</h3>\n    <p-chips [(ngModel)]=\"values1\"></p-chips>\n\n    <h3>Comma Separator</h3>\n    <p-chips [(ngModel)]=\"values2\" separator=\",\"></p-chips>\n    \n    <h3>Template</h3>\n    <p-chips [(ngModel)]=\"values3\">\n        <ng-template let-item pTemplate=\"item\">\n            {{item}} - (active) <span class=\"pi pi-user\" style=\"margin-right:2em; padding-bottom: 2px;vertical-align: middle;\"></span>\n        </ng-template>\n    </p-chips>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ChipsModule&#125; from 'primeng/chips';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Chips requires an array as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips [(ngModel)]=\"values\"&gt;&lt;/p-chips&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    values: string[];\n\n&#125;\n</code>\n</pre>\n            <h3>Model Driven Forms</h3>\n            <p>Chips can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips formControlName=\"cities\"&gt;&lt;/p-chips&gt;\n</code>\n</pre>\n\n            <h3>Custom Content</h3>\n            <p>A chip is customized using a <i>ng-template</i> element where the value is passed as the implicit variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chips [(ngModel)]=\"values\"&gt;\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"pi pi-user\"&gt;&lt;/i&gt;\n    &lt;/ng-template&gt;\n&lt;/p-chips&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>field</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the property to display on a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of entries allowed.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Advisory information to display on input.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                        <tr>\n                            <td>allowDuplicate</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to allow duplicate values or not.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>addOnTab</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to add an item on tab key press.</td>\n                        </tr>\n                        <tr>\n                            <td>addOnBlur</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to add an item when the input loses focus.</td>\n                        </tr>\n                        <tr>\n                            <td>separator</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Separator char to add an item when pressed in addition to the enter key. Currently only possible value is \",\"</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onAdd</td>\n                            <td>originalEvent: Browser event <br >\n                                value: Added item value\n                            </td>\n                            <td>Callback to invoke when a value is added.</td>\n                        </tr>\n                        <tr>\n                            <td>onRemove</td>\n                            <td>originalEvent: Browser event <br >\n                                value: Added item value\n                            </td>\n                            <td>Callback to invoke when a value is removed.</td>\n                        </tr>\n                        <tr>\n                            <td>onChipClick</td>\n                            <td>originalEvent: Browser event <br >\n                                value: Clicked item value\n                            </td>\n                            <td>Callback to invoke when a chip is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>originalEvent: Browser event</td>\n                            <td>Callback to invoke when a input is focused.</td>\n                        </tr>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>originalEvent: Browser event</td>\n                            <td>Callback to invoke when a input loses focus.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-chips</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token</td>\n                            <td>Chip element container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token-icon</td>\n                            <td>Icon of a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-token-label</td>\n                            <td>Label of a chip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chips-input-token</td>\n                            <td>Container of input element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chips\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-chips-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-chips [(ngModel)]=\"values1\" &gt;&lt;/p-chips&gt;\n\n&lt;h3&gt;Comma Separator&lt;/h3&gt;\n&lt;p-chips [(ngModel)]=\"values2\" separator=\",\"&gt;&lt;/p-chips&gt;\n\n&lt;h3&gt;ng-template&lt;/h3&gt;\n&lt;p-chips [(ngModel)]=\"values3\"&gt;\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\n        &#123;&#123;item&#125;&#125; - (active) &lt;i class=\"pi pi-user\" style=\"margin-right:2em; padding-bottom: 2px;vertical-align: middle\"&gt;&lt;/i&gt;\n    &lt;/ng-template&gt;\n&lt;/p-chips&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ChipsDemo &#123;\n\n    values1: string[];\n    \n    values2: string[];\n\n    values3: string[];\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-chips-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/chips/chipsdemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/chips/chipsdemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChipsDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemoRoutingModule", function() { return ChipsDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chipsdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chipsdemo */ "./src/app/showcase/components/chips/chipsdemo.ts");




let ChipsDemoRoutingModule = class ChipsDemoRoutingModule {
};
ChipsDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _chipsdemo__WEBPACK_IMPORTED_MODULE_3__["ChipsDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ChipsDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/chips/chipsdemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/chips/chipsdemo.module.ts ***!
  \***************************************************************/
/*! exports provided: ChipsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemoModule", function() { return ChipsDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chipsdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chipsdemo */ "./src/app/showcase/components/chips/chipsdemo.ts");
/* harmony import */ var _chipsdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chipsdemo-routing.module */ "./src/app/showcase/components/chips/chipsdemo-routing.module.ts");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chips */ "./src/app/components/chips/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");










let ChipsDemoModule = class ChipsDemoModule {
};
ChipsDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _chipsdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChipsDemoRoutingModule"],
            primeng_chips__WEBPACK_IMPORTED_MODULE_6__["ChipsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _chipsdemo__WEBPACK_IMPORTED_MODULE_4__["ChipsDemo"]
        ]
    })
], ChipsDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/chips/chipsdemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/chips/chipsdemo.ts ***!
  \********************************************************/
/*! exports provided: ChipsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDemo", function() { return ChipsDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChipsDemo = class ChipsDemo {
};
ChipsDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chipsdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chips/chipsdemo.html")).default
    })
], ChipsDemo);



/***/ })

}]);
//# sourceMappingURL=components-chips-chipsdemo-module-es2015.js.map