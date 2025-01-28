function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-keyfilter-keyfilterdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/keyfilter/keyfilterdemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/keyfilter/keyfilterdemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_keyfilter_keyfilterdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">KeyFilter</span>\n        <span>KeyFilter directive restricts user input based on a regular expression.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Filtering</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText pKeyFilter=\"int\" placeholder=\"Integers\">\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText pKeyFilter=\"num\" placeholder=\"Numbers\">\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText pKeyFilter=\"money\" placeholder=\"Money\">\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText pKeyFilter=\"hex\" placeholder=\"Hex\">\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText pKeyFilter=\"alpha\" placeholder=\"Alphabetic\">\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText pKeyFilter=\"alphanum\" placeholder=\"Alphanumeric\">\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText [pKeyFilter]=\"blockSpecial\" placeholder=\"Block # < > * !\">\n        </div>\n        <div class=\"p-col-12 p-md-4\">\n            <input type=\"text\" pInputText [pKeyFilter]=\"blockSpace\" placeholder=\"Block space key\">\n        </div>\n    </div>\n\n    <h3>Validation Mode</h3>\n    <form #form=\"ngForm\">\n        <label for=\"cc\" style=\"display:block;margin-bottom:4px\">Credit Card</label>\n        <input id=\"cc\" type=\"text\" name=\"cc\" [(ngModel)]=\"cc\" pInputText [pKeyFilter]=\"ccRegex\" [pValidateOnly]=\"true\" placeholder=\"1234-1234-1234-1234\" style=\"margin-right: .5em\">\n        <p-message severity=\"error\" text=\"Not a valid number\" [@errorState]=\"form.dirty && !form.valid ? 'visible' : 'hidden'\"></p-message>\n    </form>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;KeyFilterModule&#125; from 'primeng/keyfilter';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>KeyFilter directive is applied to an input text element using pKeyFilter attribute whose value is either a built-in regular expression name or a custom one.\n                Following input only accepts integers.</p>\n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" pKeyFilter=\"int\"&gt;\n</code>\n</pre>\n\n            <h3>Built-in Filters</h3>\n            <p>Commonly used cases have their own built-in shortcuts.</p>\n            <ul>\n                <li>pint: Positive integers</li>\n                <li>int: Integers</li>\n                <li>pnum: Positive numbers</li>\n                <li>num: Numbers</li>\n                <li>hex: Hexadecimal</li>\n                <li>email: Email</li>\n                <li>alpha: Alphabetic</li>\n                <li>alphanum: Alphanumeric</li>\n            </ul>\n\n            <h3>Custom Filter</h3>\n            <p>A custom filter is provided by binding a regular expression, here is an example that blocks special characters including \"< > * !\"</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;input type=\"text\" [pKeyFilter]=\"noSpecial\"&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class KeyFilterDemo &#123;\n\n     noSpecial: RegExp = /^[^&lt;&gt;*!]+$/\n\n&#125;\n</code>\n</pre>\n\n            <h3>Validate Mode</h3>\n            <p>Instead of blocking a single keypress, the alternative validation mode which is enabled with pValidateOnly property validates the whole input\n                with a built-in Angular validator.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;form #form=\"ngForm\"&gt; \n    &lt;label for=\"cc\"&gt;Credit Card&lt;/label&gt; \n    &lt;input id=\"cc\" type=\"text\" name=\"cc\" [(ngModel)]=\"cc\" pInputText [pKeyFilter]=\"ccRegex\" [pValidateOnly]=\"true\" placeholder=\"1234-1234-1234-1234\"&gt;\n    &lt;p-message severity=\"error\" text=\"Not a valid number\" [@errorState]=\"form.dirty && !form.valid ? 'visible' : 'hidden'\"&gt;&lt;/p-message&gt;\n&lt;/form&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>pValidateOnly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, instead of blocking keys, input is validated internally to test against the regular expression.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>This directive does not apply any styling.</p>\n            \n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/keyfilter\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-keyfilter-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Filtering&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText pKeyFilter=\"int\" placeholder=\"Integers\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText pKeyFilter=\"num\" placeholder=\"Numbers\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText pKeyFilter=\"money\" placeholder=\"Money\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText pKeyFilter=\"hex\" placeholder=\"Hex\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText pKeyFilter=\"alpha\" placeholder=\"Alphabetic\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText pKeyFilter=\"alphanum\" placeholder=\"Alphanumberic\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText [pKeyFilter]=\"blockSpecial\" placeholder=\"Block # &lt; &gt; * !\"&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;input type=\"text\" pInputText [pKeyFilter]=\"blockSpace\" placeholder=\"Block space key\"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Validation Mode&lt;/h3&gt;\n&lt;form #form=\"ngForm\"&gt;\n    &lt;label for=\"cc\" style=\"display:block;margin-bottom:4px\"&gt;Credit Card&lt;/label&gt;\n    &lt;input id=\"cc\" type=\"text\" name=\"cc\" [(ngModel)]=\"cc\" pInputText [pKeyFilter]=\"ccRegex\" [pValidateOnly]=\"true\" placeholder=\"1234-1234-1234-1234\" style=\"margin-right: .5em\"&gt;\n    &lt;p-message severity=\"error\" text=\"Not a valid number\" [@errorState]=\"form.dirty && !form.valid ? 'visible' : 'hidden'\"&gt;&lt;/p-message&gt;\n&lt;/form&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class KeyFilterDemo &#123;\n\n    blockSpecial: RegExp = /^[^&lt;&gt;*!]+$/ \n    \n    blockSpace: RegExp = /[^\\s]/; \n    \n    ccRegex: RegExp = /[0-9]&#123;4&#125;-[0-9]&#123;4&#125;-[0-9]&#123;4&#125;-[0-9]&#123;4&#125;$/; \n    \n    cc: string; \n    \n&#125;\n</code>\n</pre>\n\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-keyfilter-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n     </p-tabView >\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/keyfilter/keyfilterdemo-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/showcase/components/keyfilter/keyfilterdemo-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: KeyFilterDemoRoutingModule */

  /***/
  function _src_app_showcase_components_keyfilter_keyfilterdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyFilterDemoRoutingModule", function () {
      return KeyFilterDemoRoutingModule;
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


    var _keyfilterdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keyfilterdemo */
    "./src/app/showcase/components/keyfilter/keyfilterdemo.ts");

    var KeyFilterDemoRoutingModule = /*#__PURE__*/_createClass(function KeyFilterDemoRoutingModule() {
      _classCallCheck(this, KeyFilterDemoRoutingModule);
    });

    KeyFilterDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _keyfilterdemo__WEBPACK_IMPORTED_MODULE_3__["KeyFilterDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KeyFilterDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/keyfilter/keyfilterdemo.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/keyfilter/keyfilterdemo.module.ts ***!
    \***********************************************************************/

  /*! exports provided: KeyFilterDemoModule */

  /***/
  function _src_app_showcase_components_keyfilter_keyfilterdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyFilterDemoModule", function () {
      return KeyFilterDemoModule;
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


    var _keyfilterdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keyfilterdemo */
    "./src/app/showcase/components/keyfilter/keyfilterdemo.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/message */
    "./src/app/components/message/public_api.ts");
    /* harmony import */


    var _keyfilterdemo_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./keyfilterdemo-routing.module */
    "./src/app/showcase/components/keyfilter/keyfilterdemo-routing.module.ts");
    /* harmony import */


    var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/keyfilter */
    "./src/app/components/keyfilter/public_api.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var KeyFilterDemoModule = /*#__PURE__*/_createClass(function KeyFilterDemoModule() {
      _classCallCheck(this, KeyFilterDemoModule);
    });

    KeyFilterDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _keyfilterdemo_routing_module__WEBPACK_IMPORTED_MODULE_6__["KeyFilterDemoRoutingModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__["KeyFilterModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], primeng_message__WEBPACK_IMPORTED_MODULE_5__["MessageModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_9__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_10__["CodeHighlighterModule"]],
      declarations: [_keyfilterdemo__WEBPACK_IMPORTED_MODULE_3__["KeyFilterDemo"]]
    })], KeyFilterDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/keyfilter/keyfilterdemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/keyfilter/keyfilterdemo.ts ***!
    \****************************************************************/

  /*! exports provided: KeyFilterDemo */

  /***/
  function _src_app_showcase_components_keyfilter_keyfilterdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyFilterDemo", function () {
      return KeyFilterDemo;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var KeyFilterDemo = /*#__PURE__*/_createClass(function KeyFilterDemo() {
      _classCallCheck(this, KeyFilterDemo);

      this.blockSpecial = /^[^<>*#!]+$/;
      this.blockSpace = /[^\s]/;
      this.ccRegex = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    });

    KeyFilterDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./keyfilterdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/keyfilter/keyfilterdemo.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('errorState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-out'))])]
    })], KeyFilterDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-keyfilter-keyfilterdemo-module-es5.js.map