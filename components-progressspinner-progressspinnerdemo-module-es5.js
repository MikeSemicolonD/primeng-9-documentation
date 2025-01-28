function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-progressspinner-progressspinnerdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/progressspinner/progressspinnerdemo.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/progressspinner/progressspinnerdemo.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_progressspinner_progressspinnerdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ProgressSpinner</span>\n        <span>ProgressSpinner is a process status indicator.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-progressSpinner></p-progressSpinner>\n\n    <h3>Custom</h3>\n    <p-progressSpinner [style]=\"{width: '50px', height: '50px'}\" strokeWidth=\"8\" fill=\"#EEEEEE\" animationDuration=\".5s\"></p-progressSpinner>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ProgressSpinnerModule&#125; from 'primeng/progressspinner';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ProgressSpinner is defined using p-progressSpinner element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-progressSpinner&gt;&lt;/p-progressSpinner&gt;\n</code>\n</pre>\n            <h3>Colors</h3>\n            <p>Colors of the spinner can be changed by overriding the keyframes animation</p>\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n@keyframes ui-progress-spinner-color &#123;\n    100%,\n    0% &#123;\n        stroke: #d62d20;\n    &#125;\n    40% &#123;\n        stroke: #0057e7;\n    &#125;\n    66% &#123;\n        stroke: #008744;\n    &#125;\n    80%,\n    90% &#123;\n        stroke: #ffa700;\n    &#125;\n&#125;\n</code>\n</pre>\n            \n\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>strokeWidth</td>\n                            <td>string</td>\n                            <td>2</td>\n                            <td>Width of the circle stroke.</td>\n                        </tr>\n                        <tr>\n                            <td>fill</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Color for the background of the circle.</td>\n                        </tr>\n                        <tr>\n                            <td>animationDuration</td>\n                            <td>string</td>\n                            <td>2s</td>\n                            <td>Duration of the rotate animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-progress-spinner</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progress-circle</td>\n                            <td>SVG element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progress-path</td>\n                            <td>Circle element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/progressspinner\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-progressspinner-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p-progressSpinner&gt;&lt;/p-progressSpinner&gt;\n\n&lt;h3&gt;Custom&lt;/h3&gt;\n&lt;p-progressSpinner [style]=\"&#123;width: '50px', height: '50px'&#125;\" strokeWidth=\"8\" fill=\"#EEEEEE\" animationDuration=\".5s\"&gt;&lt;/p-progressSpinner&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-progressspinner-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProgressSpinnerDemoRoutingModule */

  /***/
  function _src_app_showcase_components_progressspinner_progressspinnerdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDemoRoutingModule", function () {
      return ProgressSpinnerDemoRoutingModule;
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


    var _progressspinnerdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progressspinnerdemo */
    "./src/app/showcase/components/progressspinner/progressspinnerdemo.ts");

    var ProgressSpinnerDemoRoutingModule = /*#__PURE__*/_createClass(function ProgressSpinnerDemoRoutingModule() {
      _classCallCheck(this, ProgressSpinnerDemoRoutingModule);
    });

    ProgressSpinnerDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _progressspinnerdemo__WEBPACK_IMPORTED_MODULE_3__["ProgressSpinnerDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProgressSpinnerDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/progressspinner/progressspinnerdemo.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/showcase/components/progressspinner/progressspinnerdemo.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProgressSpinnerDemoModule */

  /***/
  function _src_app_showcase_components_progressspinner_progressspinnerdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDemoModule", function () {
      return ProgressSpinnerDemoModule;
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


    var _progressspinnerdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progressspinnerdemo */
    "./src/app/showcase/components/progressspinner/progressspinnerdemo.ts");
    /* harmony import */


    var _progressspinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./progressspinnerdemo-routing.module */
    "./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./src/app/components/progressspinner/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var ProgressSpinnerDemoModule = /*#__PURE__*/_createClass(function ProgressSpinnerDemoModule() {
      _classCallCheck(this, ProgressSpinnerDemoModule);
    });

    ProgressSpinnerDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _progressspinnerdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProgressSpinnerDemoRoutingModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_5__["ProgressSpinnerModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_progressspinnerdemo__WEBPACK_IMPORTED_MODULE_3__["ProgressSpinnerDemo"]]
    })], ProgressSpinnerDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/progressspinner/progressspinnerdemo.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/showcase/components/progressspinner/progressspinnerdemo.ts ***!
    \****************************************************************************/

  /*! exports provided: ProgressSpinnerDemo */

  /***/
  function _src_app_showcase_components_progressspinner_progressspinnerdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDemo", function () {
      return ProgressSpinnerDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgressSpinnerDemo = /*#__PURE__*/_createClass(function ProgressSpinnerDemo() {
      _classCallCheck(this, ProgressSpinnerDemo);
    });

    ProgressSpinnerDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progressspinnerdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/progressspinner/progressspinnerdemo.html"))["default"]
    })], ProgressSpinnerDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-progressspinner-progressspinnerdemo-module-es5.js.map