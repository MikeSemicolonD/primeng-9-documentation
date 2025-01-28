function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-terminal-terminaldemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/terminal/terminaldemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/terminal/terminaldemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_terminal_terminaldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Terminal</span>\n        <span>Terminal is a text based user interface. Enter \"date\" to display the current date.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"></p-terminal>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TerminalModule&#125; from 'primeng/terminal';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Commands are processed using observables via the TerminalService. Import this service into your component and subscribe\n            to commandHandler to process commands by sending replies with sendResponse function.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;TerminalService&#125; from 'primeng/components/terminal/terminalservice';\n\n@Component(&#123;\n    template: '&lt;p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"&gt;&lt;/p-terminal&gt;',\n    providers: [TerminalService]\n&#125;)\nexport class TerminalDemo &#123;\n    \n    constructor(private terminalService: TerminalService) &#123;\n        this.terminalService.commandHandler.subscribe(command => &#123;\n            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\n            this.terminalService.sendResponse(response);\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>welcomeMessage</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Initial text to display on terminal.</td>\n                        </tr>\n                        <tr>\n                            <td>prompt</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Prompt text for each command.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-terminal</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-terminal-content</td>\n                            <td>Content of terminal.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-terminal-content-prompt</td>\n                            <td>Prompt text.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-terminal-input</td>\n                            <td>Input element to enter commands.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/terminal\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-terminal-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n        <pre>\n        <code class=\"language-markup\" pCode ngNonBindable>\n        &lt;p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"&gt;&lt;/p-terminal&gt;\n        </code>\n        </pre>\n            \n        <pre>\n        <code class=\"language-typescript\" pCode ngNonBindable>\n        import &#123;Component&#125; from '@angular/core';\n        import &#123;TerminalService&#125; from 'primeng/components/terminal/terminalservice';\n        import &#123;Subscription&#125; from 'rxjs/Subscription';\n\n        @Component(&#123;\n            templateUrl: './terminaldemo.html',\n            providers: [TerminalService]\n        &#125;)\n        export class TerminalDemo &#123;\n\n            subscription: Subscription;\n            \n            constructor(private terminalService: TerminalService) &#123;\n                this.terminalService.commandHandler.subscribe(command => &#123;\n                    let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\n                    this.terminalService.sendResponse(response);\n                &#125;);\n            &#125;\n            \n            ngOnDestroy() &#123;\n                if (this.subscription) &#123;\n                    this.subscription.unsubscribe();\n                &#125;\n            &#125;\n        &#125;\n        </code>\n        </pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-terminal-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/terminal/terminaldemo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/terminal/terminaldemo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: TerminalDemoRoutingModule */

  /***/
  function _src_app_showcase_components_terminal_terminaldemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminalDemoRoutingModule", function () {
      return TerminalDemoRoutingModule;
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


    var _terminaldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terminaldemo */
    "./src/app/showcase/components/terminal/terminaldemo.ts");

    var TerminalDemoRoutingModule = /*#__PURE__*/_createClass(function TerminalDemoRoutingModule() {
      _classCallCheck(this, TerminalDemoRoutingModule);
    });

    TerminalDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _terminaldemo__WEBPACK_IMPORTED_MODULE_3__["TerminalDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TerminalDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/terminal/terminaldemo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/terminal/terminaldemo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TerminalDemoModule */

  /***/
  function _src_app_showcase_components_terminal_terminaldemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminalDemoModule", function () {
      return TerminalDemoModule;
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


    var _terminaldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terminaldemo */
    "./src/app/showcase/components/terminal/terminaldemo.ts");
    /* harmony import */


    var _terminaldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./terminaldemo-routing.module */
    "./src/app/showcase/components/terminal/terminaldemo-routing.module.ts");
    /* harmony import */


    var primeng_terminal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/terminal */
    "./src/app/components/terminal/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var TerminalDemoModule = /*#__PURE__*/_createClass(function TerminalDemoModule() {
      _classCallCheck(this, TerminalDemoModule);
    });

    TerminalDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terminaldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["TerminalDemoRoutingModule"], primeng_terminal__WEBPACK_IMPORTED_MODULE_5__["TerminalModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_terminaldemo__WEBPACK_IMPORTED_MODULE_3__["TerminalDemo"]]
    })], TerminalDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/terminal/terminaldemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/terminal/terminaldemo.ts ***!
    \**************************************************************/

  /*! exports provided: TerminalDemo */

  /***/
  function _src_app_showcase_components_terminal_terminaldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminalDemo", function () {
      return TerminalDemo;
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


    var _components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../components/terminal/terminalservice */
    "./src/app/components/terminal/terminalservice.ts");

    var TerminalDemo = /*#__PURE__*/function () {
      function TerminalDemo(terminalService) {
        var _this = this;

        _classCallCheck(this, TerminalDemo);

        this.terminalService = terminalService;
        this.subscription = this.terminalService.commandHandler.subscribe(function (command) {
          var response = command === 'date' ? new Date().toDateString() : 'Unknown command: ' + command;

          _this.terminalService.sendResponse(response);
        });
      }

      return _createClass(TerminalDemo, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    TerminalDemo.ctorParameters = function () {
      return [{
        type: _components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_2__["TerminalService"]
      }];
    };

    TerminalDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./terminaldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/terminal/terminaldemo.html"))["default"],
      providers: [_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_2__["TerminalService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_2__["TerminalService"]])], TerminalDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-terminal-terminaldemo-module-es5.js.map