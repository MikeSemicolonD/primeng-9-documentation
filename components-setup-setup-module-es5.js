function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-setup-setup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/setup/setup.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/setup/setup.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_setup_setupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Get Started</span>\n        <span>PrimeNG is a rich set of open source native Angular UI components.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <h3 style=\"margin-top:0px\">Download</h3>\n    <p>PrimeNG is available at npm, if you have an existing application run the following command to download it to your project.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install primeng --save\nnpm install primeicons --save\n</code>\n</pre>\n\n    <h3>Load Configuration</h3>\n    <p>PrimeNG is distributed in commonjs format, a module manager of your choice is required and this guide provides samples for SystemJS, WebPack and Angular CLI.</p>\n\n    <h3>Import</h3>\n    <p>UI components are configured as modules, once PrimeNG is downloaded and configured, modules and apis can be imported from 'primeng/*' shorthand in your application code. Documentation\n        of each component states the import path.\n    </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;AccordionModule&#125; from 'primeng/accordion';     //accordion and accordion tab\nimport &#123;MenuItem&#125; from 'primeng/api';                  //api\n</code>\n</pre>\n\n    <h3>Dependencies</h3>\n    <p>Majority of PrimeNG components (95%) are native and there are some exceptions having 3rd party dependencies. In addition, components require <a href=\"https://www.npmjs.com/package/primeicons\">PrimeIcons</a> for icons.</p>\n\n    <p>The css dependencies are as follows, Prime Icons, theme of your choice and structural css of components.</p>\n\n<pre>\n<code class=\"language-html\" pCode ngNonBindable>\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeicons/primeicons.css\" /&gt;\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/themes/nova-light/theme.css\" /&gt;\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/primeng.min.css\" /&gt;\n</code>\n</pre>\n    \n    <p>Here is the list of components with 3rd party dependencies.</p>\n\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Component</th>\n                    <th>Dependency</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Schedule</td>\n                    <td>FullCalendar 4.1.0</td>\n                </tr>\n                <tr>\n                    <td>Editor</td>\n                    <td>Quill Editor</td>\n                </tr>\n                <tr>\n                    <td>GMap</td>\n                    <td>Google Maps</td>\n                </tr>\n                <tr>\n                    <td>Charts</td>\n                    <td>Charts.js 2.7.x</td>\n                </tr>\n                <tr>\n                    <td>Captcha</td>\n                    <td>Google Recaptcha</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <h3>Animations</h3>\n    <p>Various components utilize angular animations to improve the user experience, starting with Angular 4 animations have their own module so you need\n    to import <i>BrowserAnimationsModule</i> to your application. If you prefer to disable animations globally, import <i>NoopAnimationsModule</i> instead.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install @angular/animations --save\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;BrowserModule&#125; from '@angular/platform-browser';\nimport &#123;BrowserAnimationsModule&#125; from '@angular/platform-browser/animations';\n\n@NgModule(&#123;\n    imports: [\n        BrowserModule,\n        BrowserAnimationsModule,\n        //...\n    ],\n    //...\n&#125;)\nexport class YourAppModule &#123; &#125;\n</code>\n</pre>\n\n    <h3>Angular CLI Integration</h3>\n    <p>Angular CLI is the official CLI tool for Angular. We strongly suggest using Angular CLI when starting an Angular project.</p>\n\n    <h4>Dependencies</h4>\n    <p>Add PrimeNG and PrimeIcons as dependencies.</p>\n<pre>\n<code class=\"language-js\" pCode ngNonBindable>\n\"dependencies\": &#123;\n  //...\n  \"primeng\": \"^8.0.0\",\n  \"primeicons\": \"^2.0.0\"\n&#125;,\n</code>\n</pre>\n\n    <h4>Styles Configuration</h4>\n    <p>Configure required styles at the styles section, example below uses the Nova Light theme.</p>\n<pre>\n<code class=\"language-js\" pCode ngNonBindable>\n\"styles\": [\n  \"node_modules/primeicons/primeicons.css\",\n  \"node_modules/primeng/resources/themes/nova-light/theme.css\",\n  \"node_modules/primeng/resources/primeng.min.css\",\n  //...\n],\n</code>\n</pre>\n\n    <p>That is all, you may now import PrimeNG components, for a working example visit the <a href=\"https://github.com/primefaces/primeng-quickstart-cli\">PrimeNG CLI QuickStart</a> sample at GitHub.</p>\n\n</div>\n";
    /***/
  },

  /***/
  "./src/app/components/codehighlighter/codehighlighter.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/codehighlighter/codehighlighter.ts ***!
    \***************************************************************/

  /*! exports provided: CodeHighlighter, CodeHighlighterModule */

  /***/
  function _src_app_components_codehighlighter_codehighlighterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function () {
      return CodeHighlighter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function () {
      return CodeHighlighterModule;
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

    var CodeHighlighter = /*#__PURE__*/function () {
      function CodeHighlighter(el) {
        _classCallCheck(this, CodeHighlighter);

        this.el = el;
      }

      return _createClass(CodeHighlighter, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
          }
        }
      }]);
    }();

    CodeHighlighter.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    CodeHighlighter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pCode]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], CodeHighlighter);

    var CodeHighlighterModule = /*#__PURE__*/_createClass(function CodeHighlighterModule() {
      _classCallCheck(this, CodeHighlighterModule);
    });

    CodeHighlighterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [CodeHighlighter],
      declarations: [CodeHighlighter]
    })], CodeHighlighterModule);
    /***/
  },

  /***/
  "./src/app/components/codehighlighter/public_api.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/codehighlighter/public_api.ts ***!
    \**********************************************************/

  /*! exports provided: CodeHighlighter, CodeHighlighterModule */

  /***/
  function _src_app_components_codehighlighter_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _codehighlighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./codehighlighter */
    "./src/app/components/codehighlighter/codehighlighter.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function () {
      return _codehighlighter__WEBPACK_IMPORTED_MODULE_0__["CodeHighlighter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function () {
      return _codehighlighter__WEBPACK_IMPORTED_MODULE_0__["CodeHighlighterModule"];
    });
    /***/

  },

  /***/
  "./src/app/showcase/components/setup/setup-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/showcase/components/setup/setup-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SetupRoutingModule */

  /***/
  function _src_app_showcase_components_setup_setupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupRoutingModule", function () {
      return SetupRoutingModule;
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


    var _setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./setup.component */
    "./src/app/showcase/components/setup/setup.component.ts");

    var SetupRoutingModule = /*#__PURE__*/_createClass(function SetupRoutingModule() {
      _classCallCheck(this, SetupRoutingModule);
    });

    SetupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SetupRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/setup/setup.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/setup/setup.component.ts ***!
    \**************************************************************/

  /*! exports provided: SetupComponent */

  /***/
  function _src_app_showcase_components_setup_setupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupComponent", function () {
      return SetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SetupComponent = /*#__PURE__*/_createClass(function SetupComponent() {
      _classCallCheck(this, SetupComponent);
    });

    SetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/setup/setup.component.html"))["default"]
    })], SetupComponent);
    /***/
  },

  /***/
  "./src/app/showcase/components/setup/setup.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/showcase/components/setup/setup.module.ts ***!
    \***********************************************************/

  /*! exports provided: SetupModule */

  /***/
  function _src_app_showcase_components_setup_setupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupModule", function () {
      return SetupModule;
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


    var _setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./setup.component */
    "./src/app/showcase/components/setup/setup.component.ts");
    /* harmony import */


    var _setup_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./setup-routing.module */
    "./src/app/showcase/components/setup/setup-routing.module.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var SetupModule = /*#__PURE__*/_createClass(function SetupModule() {
      _classCallCheck(this, SetupModule);
    });

    SetupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__["CodeHighlighterModule"], _setup_routing_module__WEBPACK_IMPORTED_MODULE_4__["SetupRoutingModule"]],
      declarations: [_setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"]]
    })], SetupModule);
    /***/
  }
}]);
//# sourceMappingURL=components-setup-setup-module-es5.js.map