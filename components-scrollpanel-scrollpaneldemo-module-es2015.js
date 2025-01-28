(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-scrollpanel-scrollpaneldemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/scrollpanel/scrollpaneldemo.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/scrollpanel/scrollpaneldemo.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ScrollPanel</span>\n        <span>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <div class=\"p-grid\">\n        <div class=\"p-col-12 p-md-4\">\n            <p-scrollPanel [style]=\"{width: '100%', height: '200px'}\">\n                <div style=\"padding:1em;line-height:1.5\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through\n                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head\n                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands\n                    against the good of the family.\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's\n                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind\n                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the\n                    family.\n                </div>\n            </p-scrollPanel>\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <p-scrollPanel [style]=\"{width: '100%', height: '200px'}\" styleClass=\"custombar1\">\n                <div style=\"padding:1em;line-height:1.5\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through\n                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head\n                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands\n                    against the good of the family.\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's\n                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind\n                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the\n                    family.\n                </div>\n            </p-scrollPanel>\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <p-scrollPanel [style]=\"{width: '100%', height: '200px'}\" styleClass=\"custombar2\">\n                <div style=\"padding:1em;line-height:1.5;width:600px\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through\n                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head\n                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands\n                    against the good of the family.\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's\n                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind\n                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the\n                    family.\n                </div>\n            </p-scrollPanel>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ScrollPanelModule&#125; from 'primeng/scrollpanel';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ScrollPanel is defined with p-scrolPanel element having dimensions for the scrollable viewport.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\"&gt;\n    Content\n&lt;/p-scrollPanel&gt;\n</code>\n</pre>\n            <h3>Customization</h3>\n            <p>Look and feel can easily be customized, here is an example with a background and blue handle.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\" styleClass=\"custom\"&gt;\n    Content\n&lt;/p-scrollPanel&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n.custom .ui-scrollpanel-wrapper &#123;\n    border-right: 9px solid #f4f4f4; \n&#125;\n\n.custom .ui-scrollpanel-bar &#123;\n    background-color: #1976d2; \n    opacity: 1; \n    transition: background-color .3s; \n&#125;\n\n.custom .ui-scrollpanel-bar:hover &#123;\n    background-color: #135ba1;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-scrollpanel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-wrapper</td>\n                            <td>Wrapper of content section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-content</td>\n                            <td>Content section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-bar</td>\n                            <td>Scrollbar handle.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-bar-x</td>\n                            <td>Scrollbar handle of a horizontal bar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-bar-y</td>\n                            <td>Scrollbar handle of a vertical bar</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>refresh</td>\n                            <td>-</td>\n                            <td>Refreshes the position and size of the scrollbar.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollTop</td>\n                            <td>value: number</td>\n                            <td>Scrolls the top location to the given value.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n        <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panel\" class=\"btn-viewsource\" target=\"_blank\">\n            <span>View on GitHub</span>\n        </a>\n\n        <a href=\"https://stackblitz.com/edit/primeng-scrollpanel-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n            <span>Edit in StackBlitz</span>\n        </a>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-grid\"&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\"&gt;\n            &lt;div style=\"padding:1em;line-height:1.5\"&gt;\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head\n                of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from\n                the war, but does not intend to become part of his father's business. Through Michael's life the nature of\n                the family business becomes clear. The business of the family is just like the head of the family, kind and\n                benevolent to those who give respect, but given to ruthless violence whenever anything stands against the\n                good of the family.\n            &lt;/div&gt;\n        &lt;/p-scrollPanel&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\" styleClass=\"custombar1\"&gt;\n            &lt;div style=\"padding:1em;line-height:1.5\"&gt;\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head\n                of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from\n                the war, but does not intend to become part of his father's business. Through Michael's life the nature of\n                the family business becomes clear. The business of the family is just like the head of the family, kind and\n                benevolent to those who give respect, but given to ruthless violence whenever anything stands against the\n                good of the family.\n            &lt;/div&gt;\n        &lt;/p-scrollPanel&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\" styleClass=\"custombar2\"&gt;\n            &lt;div style=\"padding:1em;line-height:1.5;width:600px;\"&gt;\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head\n                of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from\n                the war, but does not intend to become part of his father's business. Through Michael's life the nature of\n                the family business becomes clear. The business of the family is just like the head of the family, kind and\n                benevolent to those who give respect, but given to ruthless violence whenever anything stands against the\n                good of the family.\n            &lt;/div&gt;\n        &lt;/p-scrollPanel&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './scrollpaneldemo.html',\n    styles: [`\n        .custombar1 .ui-scrollpanel-wrapper &#123;\n            border-right: 9px solid #f4f4f4;\n        &#125;\n            \n        .custombar1 .ui-scrollpanel-bar &#123;\n            background-color: #1976d2;\n            opacity: 1;\n            transition: background-color .3s;\n        &#125;\n            \n        .custombar1 .ui-scrollpanel-bar:hover &#123;\n            background-color: #135ba1;\n        &#125;\n            \n        .custombar2 .ui-scrollpanel-wrapper &#123;\n            border-right: 9px solid #757575;\n            border-bottom: 9px solid #757575;\n        &#125;\n            \n        .custombar2 .ui-scrollpanel-bar &#123;\n            background-color: #68C77D;\n            border-radius: 0;\n            opacity: 1;\n            transition: background-color .3s;\n        &#125;\n            \n        .custombar2:hover .ui-scrollpanel-bar &#123;\n            background-color: #46A55A;\n        &#125;\n    `],\n    encapsulation: ViewEncapsulation.None\n&#125;)\nexport class ScrollPanelDemo &#123;\n            \n&#125;    \n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-scrollpanel-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/scrollpanel/scrollpaneldemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/scrollpanel/scrollpaneldemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ScrollPanelDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollPanelDemoRoutingModule", function() { return ScrollPanelDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _scrollpaneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollpaneldemo */ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.ts");




let ScrollPanelDemoRoutingModule = class ScrollPanelDemoRoutingModule {
};
ScrollPanelDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _scrollpaneldemo__WEBPACK_IMPORTED_MODULE_3__["ScrollPanelDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ScrollPanelDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/scrollpanel/scrollpaneldemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: ScrollPanelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollPanelDemoModule", function() { return ScrollPanelDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _scrollpaneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollpaneldemo */ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.ts");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/scrollpanel */ "./src/app/components/scrollpanel/public_api.ts");
/* harmony import */ var _scrollpaneldemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollpaneldemo-routing.module */ "./src/app/showcase/components/scrollpanel/scrollpaneldemo-routing.module.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");








let ScrollPanelDemoModule = class ScrollPanelDemoModule {
};
ScrollPanelDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__["ScrollPanelModule"],
            _scrollpaneldemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScrollPanelDemoRoutingModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _scrollpaneldemo__WEBPACK_IMPORTED_MODULE_3__["ScrollPanelDemo"]
        ]
    })
], ScrollPanelDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/scrollpanel/scrollpaneldemo.ts ***!
  \********************************************************************/
/*! exports provided: ScrollPanelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollPanelDemo", function() { return ScrollPanelDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollPanelDemo = class ScrollPanelDemo {
};
ScrollPanelDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scrollpaneldemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/scrollpanel/scrollpaneldemo.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: ["\n        .custombar1 .ui-scrollpanel-wrapper {\n            border-right: 9px solid #f4f4f4;\n        }\n\n        .custombar1 .ui-scrollpanel-bar {\n            background-color: #1976d2;\n            opacity: 1;\n            transition: background-color .3s;\n        }\n\n        .custombar1 .ui-scrollpanel-bar:hover {\n            background-color: #135ba1;\n        }\n\n        .custombar2 .ui-scrollpanel-wrapper {\n            border-right: 9px solid #757575;\n            border-bottom: 9px solid #757575;\n        }\n\n        .custombar2 .ui-scrollpanel-bar {\n            background-color: #68C77D;\n            border-radius: 0;\n            opacity: 1;\n            transition: background-color .3s;\n        }\n\n        .custombar2:hover .ui-scrollpanel-bar {\n            background-color: #46A55A;\n        }\n    "]
    })
], ScrollPanelDemo);



/***/ })

}]);
//# sourceMappingURL=components-scrollpanel-scrollpaneldemo-module-es2015.js.map