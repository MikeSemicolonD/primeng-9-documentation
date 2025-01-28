(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-toolbar-toolbardemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/toolbar/toolbardemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/toolbar/toolbardemo.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Toolbar</span>\n        <span>Toolbar is a grouping component for buttons and other content.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toolbar>\n        <div class=\"ui-toolbar-group-left\">\n            <button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"></button>\n            <button pButton type=\"button\" label=\"Upload\" icon=\"pi pi-upload\" class=\"ui-button-success\"></button>\n                \n            <i class=\"ui-toolbar-separator pi pi-bars\" style=\"vertical-align: middle\"></i>\n            \n            <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton>\n        </div>\n        \n        <div class=\"ui-toolbar-group-right\">\n            <button pButton type=\"button\" icon=\"pi pi-search\"></button>\n            <button pButton type=\"button\" icon=\"pi pi-calendar\" class=\"ui-button-success\"></button>\n            <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"></button>\n        </div>\n   </p-toolbar>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ToolbarModule&#125; from 'primeng/toolbar';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Toolbar is a container component defined using p-toolbar element. Left aligned content is placed inside a div \n            having <i>.ui-toolbar-group-left</i> class and similarly <i>.ui-toolbar-group-right</i> for right alignment.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toolbar&gt;\n    &lt;div class=\"ui-toolbar-group-left\"&gt;\n        &lt;button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" label=\"Upload\" icon=\"pi pi-upload\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n            \n        &lt;i class=\"pi pi-bars\"&gt;&lt;/i&gt;\n        \n        &lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-toolbar-group-right\"&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-calendar\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/p-toolbar&gt;\n</code>\n</pre>\n            \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-toolbar</td>\n                            <td>Main container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-toolbar-group-left</td>\n                            <td>Left content container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-toolbar-group-right</td>\n                            <td>Right content container.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/toolbar\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-toolbar-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toolbar&gt;\n    &lt;div class=\"ui-toolbar-group-left\"&gt;\n        &lt;button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" label=\"Upload\" icon=\"pi pi-upload\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n            \n        &lt;i class=\"ui-toolbar-separator pi pi-bars\" style=\"vertical-align: middle\"&gt;&lt;/i&gt;\n        \n        &lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"ui-toolbar-group-right\"&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-calendar\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/p-toolbar&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-toolbar-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>");

/***/ }),

/***/ "./src/app/showcase/components/toolbar/toolbardemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/toolbar/toolbardemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ToolbarDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarDemoRoutingModule", function() { return ToolbarDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _toolbardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbardemo */ "./src/app/showcase/components/toolbar/toolbardemo.ts");




let ToolbarDemoRoutingModule = class ToolbarDemoRoutingModule {
};
ToolbarDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _toolbardemo__WEBPACK_IMPORTED_MODULE_3__["ToolbarDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ToolbarDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/toolbar/toolbardemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/toolbar/toolbardemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarDemoModule", function() { return ToolbarDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toolbardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbardemo */ "./src/app/showcase/components/toolbar/toolbardemo.ts");
/* harmony import */ var _toolbardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbardemo-routing.module */ "./src/app/showcase/components/toolbar/toolbardemo-routing.module.ts");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ "./src/app/components/toolbar/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/splitbutton */ "./src/app/components/splitbutton/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");










let ToolbarDemoModule = class ToolbarDemoModule {
};
ToolbarDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _toolbardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ToolbarDemoRoutingModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__["SplitButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _toolbardemo__WEBPACK_IMPORTED_MODULE_3__["ToolbarDemo"]
        ]
    })
], ToolbarDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/toolbar/toolbardemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/toolbar/toolbardemo.ts ***!
  \************************************************************/
/*! exports provided: ToolbarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarDemo", function() { return ToolbarDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarDemo = class ToolbarDemo {
    ngOnInit() {
        this.items = [
            { label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'pi pi-palette', routerLink: ['/theming'] }
        ];
    }
};
ToolbarDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./toolbardemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/toolbar/toolbardemo.html")).default,
        styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .ui-splitbutton {\n            margin-left: .25em;\n        }\n\n        :host ::ng-deep .ui-splitbutton button {\n            margin-right: 0;\n        }\n    "]
    })
], ToolbarDemo);



/***/ })

}]);
//# sourceMappingURL=components-toolbar-toolbardemo-module-es2015.js.map