(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tooltip-tooltipdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tooltip/tooltipdemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tooltip/tooltipdemo.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tooltip</span>\n        <span>Tooltip provides advisory information for a component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Positions</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\">                \n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\">\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\">\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\">\n        </div>\n    </div>\n    \n    <h3>Focus and Blur</h3>\n    <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\">\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TooltipModule&#125; from 'primeng/tooltip';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Tooltip is applied to an element with pTooltip directive where the value of the directive defines the text to display.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\"&gt;\n</code>\n</pre>\n\n            <h3>Position</h3>\n            <p>There are four choices to position the tooltip, default value is \"right\" and alternatives are \"top\", \"bottom\", \"left\". Position is \n            specified using <i>tooltipPosition</i> attribute.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\"&gt;\n</code>\n</pre>\n\n            <h3>Events</h3>\n            <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\"&gt;\n</code>\n</pre>\n\n            <h3>Delay</h3>\n            <p>Tooltip is displayed or hidden instantly by default however you may add delays using <i>showDelay</i> and <i>hideDelay</i> properties which accept a number value in terms of milliseconds.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pTooltip=\"Enter your username\" tooltipPosition=\"top\" tooltipEvent=\"focus\" showDelay=\"1000\" hideDelay=\"500\"&gt;\n</code>\n</pre>\n\n            <h3>Scrolling Containers</h3>\n            <p>When placed inside a scrolling container like an overflown div, tooltip must be appended to another element that has\n                relative positioning instead of document body which is the default.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div #container style=\"display:inline-block;position:relative\"&gt;\n    &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" [appendTo]=\"container\"&gt;\n&lt;/div&gt;\n</code>\n</pre>\n            \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>pTooltip</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipPosition</td>\n                            <td>string</td>\n                            <td>right</td>\n                            <td>Position of the tooltip, valid values are right, left, top and bottom.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipEvent</td>\n                            <td>string</td>\n                            <td>hover</td>\n                            <td>Event to show the tooltip, valid values are hover and focus.</td>\n                        </tr>\n                        <tr>\n                            <td>positionStyle</td>\n                            <td>string</td>\n                            <td>absolute</td>\n                            <td>Type of CSS position.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipDisabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>string</td>\n                            <td>any</td>\n                            <td>Target element to attach the overlay, valid values are \"body\", \"target\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>hideDelay</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Delay to hide the tooltip in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>showDelay</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Delay to show the tooltip in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>life</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Time to wait in milliseconds to hide the tooltip even it is active.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>escape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>By default the tooltip contents are rendered as text. Set to false to support html tags in the content.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipZIndex</td>\n                            <td>string</td>\n                            <td>auto</td>\n                            <td>Whether the z-index should be managed automatically to always go on top or have a fixed value.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-tooltip</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tooltip-arrow</td>\n                            <td>Arrow of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tooltip-text</td>\n                            <td>Text of the tooltip.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tooltip\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tooltip-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Positions&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"top\" placeholder=\"Top\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"bottom\" placeholder=\"Bottom\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        &lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" tooltipPosition=\"left\" placeholder=\"Left\"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Focus and Blur&lt;/h3&gt;\n&lt;input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\" style=\"margin-left:.5em\"&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tooltip-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n     </p-tabView >\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TooltipDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoRoutingModule", function() { return TooltipDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tooltipdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltipdemo */ "./src/app/showcase/components/tooltip/tooltipdemo.ts");




let TooltipDemoRoutingModule = class TooltipDemoRoutingModule {
};
TooltipDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _tooltipdemo__WEBPACK_IMPORTED_MODULE_3__["TooltipDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TooltipDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/tooltip/tooltipdemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/tooltip/tooltipdemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: TooltipDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoModule", function() { return TooltipDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tooltipdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltipdemo */ "./src/app/showcase/components/tooltip/tooltipdemo.ts");
/* harmony import */ var _tooltipdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltipdemo-routing.module */ "./src/app/showcase/components/tooltip/tooltipdemo-routing.module.ts");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ "./src/app/components/tooltip/public_api.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let TooltipDemoModule = class TooltipDemoModule {
};
TooltipDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tooltipdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["TooltipDemoRoutingModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _tooltipdemo__WEBPACK_IMPORTED_MODULE_3__["TooltipDemo"]
        ]
    })
], TooltipDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/tooltip/tooltipdemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/tooltip/tooltipdemo.ts ***!
  \************************************************************/
/*! exports provided: TooltipDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemo", function() { return TooltipDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TooltipDemo = class TooltipDemo {
};
TooltipDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tooltipdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tooltip/tooltipdemo.html")).default
    })
], TooltipDemo);



/***/ })

}]);
//# sourceMappingURL=components-tooltip-tooltipdemo-module-es2015.js.map