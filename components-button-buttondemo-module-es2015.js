(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-button-buttondemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/button/buttondemo.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/button/buttondemo.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Button</span>\n        <span>Button is an extension to standard input element with icons and theming.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Button Component</h3>\n    <p-button label=\"Click\"></p-button>\n    <p-button icon=\"pi pi-check\" label=\"Click\"></p-button>\n    <p-button icon=\"pi pi-check\" iconPos=\"right\" label=\"Click\"></p-button>\n    <p-button icon=\"pi pi-check\"></p-button>\n    <p-button icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"></p-button>\n\n    <h3>Button Directive</h3>\n    <button pButton type=\"button\"label=\"Click\"></button>\n    <button pButton type=\"button\" icon=\"pi pi-check\" label=\"Click\"></button>\n    <button pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"right\" label=\"Click\"></button>\n    <button pButton type=\"button\" icon=\"pi pi-check\"></button>\n    <button pButton type=\"button\" icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"></button>\n\n    <h3>Severity Buttons</h3>\n    <button pButton type=\"button\" label=\"Primary\"></button>\n    <button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-secondary\"></button>\n    <button pButton type=\"button\" label=\"Success\" class=\"ui-button-success\"></button>\n    <button pButton type=\"button\" label=\"Info\" class=\"ui-button-info\"></button>\n    <button pButton type=\"button\" label=\"Warning\" class=\"ui-button-warning\"></button>\n    <button pButton type=\"button\" label=\"Danger\" class=\"ui-button-danger\"></button>\n\n    <h3>Raised Buttons</h3>\n    <button pButton type=\"button\" label=\"Primary\" class=\"ui-button-raised\"></button>\n    <button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-raised ui-button-secondary\"></button>\n    <button pButton type=\"button\" label=\"Success\" class=\"ui-button-raised ui-button-success\"></button>\n    <button pButton type=\"button\" label=\"Info\" class=\"ui-button-raised ui-button-info\"></button>\n    <button pButton type=\"button\" label=\"Warning\" class=\"ui-button-raised ui-button-warning\"></button>\n    <button pButton type=\"button\" label=\"Danger\" class=\"ui-button-raised ui-button-danger\"></button>\n\n    <h3>Rounded Buttons</h3>\n    <button pButton type=\"button\" label=\"Primary\" class=\"ui-button-rounded\"></button>\n    <button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-rounded ui-button-secondary\"></button>\n    <button pButton type=\"button\" label=\"Success\" class=\"ui-button-rounded ui-button-success\"></button>\n    <button pButton type=\"button\" label=\"Info\" class=\"ui-button-rounded ui-button-info\"></button>\n    <button pButton type=\"button\" label=\"Warning\" class=\"ui-button-rounded ui-button-warning\"></button>\n    <button pButton type=\"button\" label=\"Danger\" class=\"ui-button-rounded ui-button-danger\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ButtonModule&#125; from 'primeng/button';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Button is either applies as a component using p-button element or a directive using pButton attribute. Directive enhances an existing button whereas \n                p-button is an element on its own.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" label=\"Click\" &gt;&lt;/button&gt;\n&lt;p-button label=\"Click\" &gt;&lt;/p-button&gt;\n</code>\n</pre>\n\n            <h3>Events</h3>\n            <p>Events are defined using standard notation in pButton and with on* prefix at p-button.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" label=\"Click\" (click)=\"handleClick($event)\"&gt;&lt;/button&gt;\n&lt;p-button label=\"Click\" (onClick)=\"handleClick($event)\"&gt;&lt;/p-button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class Model &#123;\n\n    handleClick() &#123;\n        //execute action\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Icons</h3>\n            <p>Icon on a button is specified with <i>icon</i> attribute and position is customized using <i>iconPos</i> attribute. Default\n            icon position is left. To display only an icon, leave label as undefined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"left\"&gt;&lt;/button&gt;\n&lt;p-button label=\"Click\" icon=\"pi pi-check\" iconPos=\"left\"&gt;&lt;/p-button&gt;\n</code>\n</pre>\n\n            <h3>Severity</h3>\n            <p>Different color options are available to define severity levels.</p>\n\n            <ul>\n                <li>.ui-button-secondary</li>\n                <li>.ui-button-success</li>\n                <li>.ui-button-info</li>\n                <li>.ui-button-warning</li>\n                <li>.ui-button-danger</li>\n            </ul>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" class=\"ui-button-info\"&gt;&lt;/button&gt;\n&lt;p-button label=\"Click\" styleClass=\"ui-button-info\"&gt;&lt;/p-button&gt;\n</code>\n</pre>\n\n            <h3>Raised and Rounded Buttons</h3>\n            <p>A button can be raised by having \"ui-button-raised\" style class and similarly borders can be made rounded using \"ui-button-rounded\" class.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton type=\"button\" class=\"ui-button-raised ui-button-rounded\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Properties of pButton</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the button.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the icon.</td>\n                        </tr>\n                        <tr>\n                            <td>iconPos</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>cornerStyleClass</td>\n                            <td>string</td>\n                            <td>ui-corner-all</td>\n                            <td>Defines the cornering of the button, valid replacements are top, left, right and button such as ui-corner-top.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Properties of p-button</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Type of the button.</td>\n                        </tr>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the button.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the icon.</td>\n                        </tr>\n                        <tr>\n                            <td>iconPos</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>onClick</td>\n                            <td>event</td>\n                            <td>null</td>\n                            <td>Callback to execute when button is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event</td>\n                            <td>null</td>\n                            <td>Callback to execute when button is focused.</td>\n                        </tr>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event</td>\n                            <td>null</td>\n                            <td>Callback to execute when button loses focus.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-button</td>\n                            <td>Button element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-button-icon</td>\n                            <td>Icon element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-button-text</td>\n                            <td>Label element of the button</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <ng-template pTemplate=\"content\">\n                <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/button\" class=\"btn-viewsource\" target=\"_blank\">\n                    <span>View on GitHub</span>\n                </a>\n                <a href=\"https://stackblitz.com/edit/primeng-button-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                    <span>Edit in StackBlitz</span>\n                </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Button Component&lt;/h3&gt;\n&lt;p-button label=\"Click\"&gt;&lt;/p-button&gt;\n&lt;p-button icon=\"pi pi-check\" label=\"Click\"&gt;&lt;/p-button&gt;\n&lt;p-button icon=\"pi pi-check\" iconPos=\"right\" label=\"Click\"&gt;&lt;/p-button&gt;\n&lt;p-button icon=\"pi pi-check\"&gt;&lt;/p-button&gt;\n&lt;p-button icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/p-button&gt;\n\n&lt;h3&gt;Button Directive&lt;/h3&gt;\n&lt;button pButton type=\"button\"label=\"Click\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" icon=\"pi pi-check\" label=\"Click\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"right\" label=\"Click\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" icon=\"pi pi-check\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/button&gt;\n\n&lt;h3&gt;Severity Buttons&lt;/h3&gt;\n&lt;button pButton type=\"button\" label=\"Primary\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Warning\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Danger\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\n\n&lt;h3&gt;Raised Buttons&lt;/h3&gt;\n&lt;button pButton type=\"button\" label=\"Primary\" class=\"ui-button-raised\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-raised ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Success\" class=\"ui-button-raised ui-button-success\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Info\" class=\"ui-button-raised ui-button-info\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Warning\" class=\"ui-button-raised ui-button-warning\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Danger\" class=\"ui-button-raised ui-button-danger\"&gt;&lt;/button&gt;\n\n&lt;h3&gt;Rounded Buttons&lt;/h3&gt;\n&lt;button pButton type=\"button\" label=\"Primary\" class=\"ui-button-rounded\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-rounded ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Success\" class=\"ui-button-rounded ui-button-success\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Info\" class=\"ui-button-rounded ui-button-info\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Warning\" class=\"ui-button-rounded ui-button-warning\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" label=\"Danger\" class=\"ui-button-rounded ui-button-danger\"&gt;&lt;/button&gt;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ButtonDemo &#123;\n\n    clicks: number = 0;\n\n    count() &#123;\n        this.clicks++;\n    &#125;\n&#125;\n</code>\n</pre>\n            </ng-template>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-button-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n     </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/button/buttondemo-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/button/buttondemo-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ButtonDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoRoutingModule", function() { return ButtonDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _buttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttondemo */ "./src/app/showcase/components/button/buttondemo.ts");




let ButtonDemoRoutingModule = class ButtonDemoRoutingModule {
};
ButtonDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _buttondemo__WEBPACK_IMPORTED_MODULE_3__["ButtonDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ButtonDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/button/buttondemo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/showcase/components/button/buttondemo.module.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoModule", function() { return ButtonDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _buttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttondemo */ "./src/app/showcase/components/button/buttondemo.ts");
/* harmony import */ var _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttondemo-routing.module */ "./src/app/showcase/components/button/buttondemo-routing.module.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ "./src/app/components/progressspinner/public_api.ts");









let ButtonDemoModule = class ButtonDemoModule {
};
ButtonDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ButtonDemoRoutingModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinnerModule"]
        ],
        declarations: [
            _buttondemo__WEBPACK_IMPORTED_MODULE_3__["ButtonDemo"]
        ]
    })
], ButtonDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/button/buttondemo.ts":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/button/buttondemo.ts ***!
  \**********************************************************/
/*! exports provided: ButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemo", function() { return ButtonDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonDemo = class ButtonDemo {
    constructor() {
        this.clicks = 0;
    }
    count() {
        this.clicks++;
    }
};
ButtonDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buttondemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/button/buttondemo.html")).default,
        styles: ["\n        :host ::ng-deep button {\n            margin-right: .5em;\n        }\n    "]
    })
], ButtonDemo);



/***/ })

}]);
//# sourceMappingURL=components-button-buttondemo-module-es2015.js.map