function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-paginator-paginatordemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/paginator/paginatordemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/paginator/paginatordemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_paginator_paginatordemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Paginator</span>\n        <span>Paginator is a generic widget to display content in paged format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation ui-fluid\">\n    <p-paginator [rows]=\"10\" [totalRecords]=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"></p-paginator>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;PaginatorModule&#125; from 'primeng/paginator';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Paginator is defined using p-paginator element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n            <h3>Rows and TotalRecords</h3>\n            <p><i>rows</i> and <i>totalRecords</i> define how many pages the paginator should display. Paginator below will have 10 pages.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"100\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n            <h3>PageLinks</h3>\n            <p>PageLinks provide shortcuts to jump to a specific page, use <i>pageLinkSize</i> property to define the number of links to display. Default is 5.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"100\" pageLinkSize=\"3\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n            <h3>Rows Per Page</h3>\n            <p>Number of items per page can be changed by the user using a dropdown if you define <i>rowsPerPageOptions</i> as an array of possible values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n            <h3>CurrentPageReport</h3>\n            <p>Current page report item in the template displays information about the pagination state. Default value is (&#123;currentPage&#125; of &#123;totalPages&#125;)\n                whereas available placeholders are the following;\n            </p>\n            <ul>\n                <li>&#123;currentPage&#125;</li>\n                <li>&#123;totalPages&#125;</li>\n                <li>&#123;rows&#125;</li>\n                <li>&#123;first&#125;</li>\n                <li>&#123;last&#125;</li>\n                <li>&#123;totalRecords&#125;</li>\n            </ul>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Number of total records.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Data count to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>first</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Zero-relative number of the first row to be displayed.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinkSize</td>\n                            <td>number</td>\n                            <td>5</td>\n                            <td>Number of page links to display.</td>\n                        </tr>\n                        <tr>\n                            <td>rowsPerPageOptions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of integer/object values to display inside rows per page dropdown.\n                                A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,&#123;showAll:'All'&#125;] </td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>alwaysShow</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show it even there is only one page.</td>\n                        </tr>\n                        <tr>\n                            <td>templateLeft</td>\n                            <td>TemplateRef</td>\n                            <td>null</td>\n                            <td>Template instance to inject into the left side of the paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>templateRight</td>\n                            <td>TemplateRef</td>\n                            <td>null</td>\n                            <td>Template instance to inject into the right side of the paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>dropdownAppendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the dropdown overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>dropdownScrollHeight</td>\n                            <td>string</td>\n                            <td>200px</td>\n                            <td>Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>\n                        </tr>\n                        <tr>\n                            <td>currentPageReportTemplate</td>\n                            <td>string</td>\n                            <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>\n                            <td>Template of the current page report element. Available placeholders are\n                                &#123;currentPage&#125;,&#123;totalPages&#125;,&#123;rows&#125;,&#123;first&#125;,&#123;last&#125; and &#123;totalRecords&#125;\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>showCurrentPageReport</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display current page report.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onPageChange</td>\n                            <td>event.first: Index of first record <br>\n                                event.rows: Number of rows to display in new page <br>\n                                event.page: Index of the new page <br>\n                                event.pageCount: Total number of pages <br></td>\n                            <td>Callback to invoke when page changes, the event object contains information about the new state.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator [rows]=\"10\" totalRecords=\"100\" (onPageChange)=\"paginate($event)\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponent &#123;\n\n    paginate(event) &#123;\n        //event.first = Index of the first record\n        //event.rows = Number of rows to display in new page\n        //event.page = Index of the new page\n        //event.pageCount = Total number of pages\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-paginator</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-first</td>\n                            <td>First page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-prev</td>\n                            <td>Previous page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-pages</td>\n                            <td>Container of page links.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-page</td>\n                            <td>A page link.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-next</td>\n                            <td>Next page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-last</td>\n                            <td>Last page element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-paginator-rpp-options</td>\n                            <td>Rows per page dropdown.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/paginator\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-paginator-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-paginator [rows]=\"10\" [totalRecords]=\"120\" [rowsPerPageOptions]=\"[10,20,30]\"&gt;&lt;/p-paginator&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-paginator-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/paginator/paginatordemo-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/showcase/components/paginator/paginatordemo-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: PaginatorDemoRoutingModule */

  /***/
  function _src_app_showcase_components_paginator_paginatordemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorDemoRoutingModule", function () {
      return PaginatorDemoRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _paginatordemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paginatordemo */
    "./src/app/showcase/components/paginator/paginatordemo.ts");

    var PaginatorDemoRoutingModule = /*#__PURE__*/_createClass(function PaginatorDemoRoutingModule() {
      _classCallCheck(this, PaginatorDemoRoutingModule);
    });

    PaginatorDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _paginatordemo__WEBPACK_IMPORTED_MODULE_3__["PaginatorDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaginatorDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/paginator/paginatordemo.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/paginator/paginatordemo.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PaginatorDemoModule */

  /***/
  function _src_app_showcase_components_paginator_paginatordemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorDemoModule", function () {
      return PaginatorDemoModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _paginatordemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paginatordemo */
    "./src/app/showcase/components/paginator/paginatordemo.ts");
    /* harmony import */


    var _paginatordemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./paginatordemo-routing.module */
    "./src/app/showcase/components/paginator/paginatordemo-routing.module.ts");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/paginator */
    "./src/app/components/paginator/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var PaginatorDemoModule = /*#__PURE__*/_createClass(function PaginatorDemoModule() {
      _classCallCheck(this, PaginatorDemoModule);
    });

    PaginatorDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _paginatordemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["PaginatorDemoRoutingModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_paginatordemo__WEBPACK_IMPORTED_MODULE_3__["PaginatorDemo"]]
    })], PaginatorDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/paginator/paginatordemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/paginator/paginatordemo.ts ***!
    \****************************************************************/

  /*! exports provided: PaginatorDemo */

  /***/
  function _src_app_showcase_components_paginator_paginatordemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorDemo", function () {
      return PaginatorDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaginatorDemo = /*#__PURE__*/_createClass(function PaginatorDemo() {
      _classCallCheck(this, PaginatorDemo);
    });

    PaginatorDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./paginatordemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/paginator/paginatordemo.html"))["default"]
    })], PaginatorDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-paginator-paginatordemo-module-es5.js.map