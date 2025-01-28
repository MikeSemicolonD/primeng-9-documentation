function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-progressbar-progressbardemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/progressbar/progressbardemo.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/progressbar/progressbardemo.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_progressbar_progressbardemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ProgressBar</span>\n        <span>ProgressBar is a process status indicator.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <h3 class=\"first\">Dynamic</h3>\n    <p-progressBar [value]=\"value\"></p-progressBar>\n\n    <h3>Static</h3>\n    <p-progressBar [value]=\"50\"></p-progressBar>\n\n    <h3>Indeterminate</h3>\n    <p-progressBar mode=\"indeterminate\" [style]=\"{'height': '6px'}\"></p-progressBar>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ProgressBarModule&#125; from 'primeng/progressbar';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ProgressBar has two modes; \"determinate\" and \"indeterminate\". Former requires a value between 0 and 100 to display the progress.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-progressBar [value]=\"value\"&gt;&lt;/p-progressBar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    value: number = 0;\n\n&#125;\n</code>\n</pre>\n\n            <p>Indeterminate has no such a requirement and is simple enabled using <i>mode</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-progressBar mode=\"indeterminate\"&gt;&lt;/p-progressBar&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Current value of the progress.</td>\n                        </tr>\n                        <tr>\n                            <td>showValue</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Show or hide progress bar value.</td>\n                        </tr>\n                        <tr>\n                            <td>unit</td>\n                            <td>string</td>\n                            <td>%</td>\n                            <td>Unit sign appended to the value.</td>\n                        </tr>\n                        <tr>\n                            <td>mode</td>\n                            <td>string</td>\n                            <td>determinate</td>\n                            <td>Defines the mode of the progress, valid values are \"determinate\" and \"indeterminate\".</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-progressbar</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progressbar-determinate</td>\n                            <td>Container element of a determinate progressbar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progressbar-indeterminate</td>\n                            <td>Container element of an indeterminate progressbar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progressbar-value</td>\n                            <td>Element whose width changes according to value.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progressbar-label</td>\n                            <td>Label element that displays the current value.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/progressbar\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-progressbar-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;h3 class=\"first\"&gt;Dynamic&lt;/h3&gt;\n&lt;p-progressBar [value]=\"value\"&gt;&lt;/p-progressBar&gt;\n\n&lt;h3&gt;Static&lt;/h3&gt;\n&lt;p-progressBar [value]=\"50\"&gt;&lt;/p-progressBar&gt;\n\n&lt;h3&gt;Indeterminate&lt;/h3&gt;\n&lt;p-progressBar mode=\"indeterminate\" [style]=\"&#123;'height': '6px'&#125;\"&gt;&lt;/p-progressBar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ProgressBarDemo &#123;\n\n    value: number = 0;\n\n    constructor(private messageService: MessageService) &#123;&#125;\n\n    ngOnInit() &#123;\n        let interval = setInterval(() => &#123;\n            this.value = this.value + Math.floor(Math.random() * 10) + 1;\n            if (this.value >= 100) &#123;\n                this.value = 100;\n                this.messageService.add(&#123;severity: 'info', summary: 'Success', detail: 'Process Completed'&#125;);\n                clearInterval(interval);\n            &#125;\n        &#125;, 2000);\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-progressbar-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/components/progressbar/progressbar.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/progressbar/progressbar.ts ***!
    \*******************************************************/

  /*! exports provided: ProgressBar, ProgressBarModule */

  /***/
  function _src_app_components_progressbar_progressbarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return ProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return ProgressBarModule;
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

    var ProgressBar = /*#__PURE__*/_createClass(function ProgressBar() {
      _classCallCheck(this, ProgressBar);

      this.showValue = true;
      this.unit = '%';
      this.mode = 'determinate';
    });

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressBar.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProgressBar.prototype, "showValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressBar.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "unit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "mode", void 0);
    ProgressBar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-progressBar',
      template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })], ProgressBar);

    var ProgressBarModule = /*#__PURE__*/_createClass(function ProgressBarModule() {
      _classCallCheck(this, ProgressBarModule);
    });

    ProgressBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [ProgressBar],
      declarations: [ProgressBar]
    })], ProgressBarModule);
    /***/
  },

  /***/
  "./src/app/components/progressbar/public_api.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/progressbar/public_api.ts ***!
    \******************************************************/

  /*! exports provided: ProgressBar, ProgressBarModule */

  /***/
  function _src_app_components_progressbar_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _progressbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./progressbar */
    "./src/app/components/progressbar/progressbar.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return _progressbar__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return _progressbar__WEBPACK_IMPORTED_MODULE_0__["ProgressBarModule"];
    });
    /***/

  },

  /***/
  "./src/app/showcase/components/progressbar/progressbardemo-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/showcase/components/progressbar/progressbardemo-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProgressBarDemoRoutingModule */

  /***/
  function _src_app_showcase_components_progressbar_progressbardemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarDemoRoutingModule", function () {
      return ProgressBarDemoRoutingModule;
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


    var _progressbardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progressbardemo */
    "./src/app/showcase/components/progressbar/progressbardemo.ts");

    var ProgressBarDemoRoutingModule = /*#__PURE__*/_createClass(function ProgressBarDemoRoutingModule() {
      _classCallCheck(this, ProgressBarDemoRoutingModule);
    });

    ProgressBarDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _progressbardemo__WEBPACK_IMPORTED_MODULE_3__["ProgressBarDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProgressBarDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/progressbar/progressbardemo.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/showcase/components/progressbar/progressbardemo.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProgressBarDemoModule */

  /***/
  function _src_app_showcase_components_progressbar_progressbardemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarDemoModule", function () {
      return ProgressBarDemoModule;
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


    var _progressbardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progressbardemo */
    "./src/app/showcase/components/progressbar/progressbardemo.ts");
    /* harmony import */


    var _progressbardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./progressbardemo-routing.module */
    "./src/app/showcase/components/progressbar/progressbardemo-routing.module.ts");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/progressbar */
    "./src/app/components/progressbar/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var ProgressBarDemoModule = /*#__PURE__*/_createClass(function ProgressBarDemoModule() {
      _classCallCheck(this, ProgressBarDemoModule);
    });

    ProgressBarDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _progressbardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProgressBarDemoRoutingModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]],
      declarations: [_progressbardemo__WEBPACK_IMPORTED_MODULE_3__["ProgressBarDemo"]]
    })], ProgressBarDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/progressbar/progressbardemo.ts":
  /*!********************************************************************!*\
    !*** ./src/app/showcase/components/progressbar/progressbardemo.ts ***!
    \********************************************************************/

  /*! exports provided: ProgressBarDemo */

  /***/
  function _src_app_showcase_components_progressbar_progressbardemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarDemo", function () {
      return ProgressBarDemo;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var ProgressBarDemo = /*#__PURE__*/function () {
      function ProgressBarDemo(messageService) {
        _classCallCheck(this, ProgressBarDemo);

        this.messageService = messageService;
        this.value = 0;
      }

      return _createClass(ProgressBarDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;

            if (_this.value >= 100) {
              _this.value = 100;

              _this.messageService.add({
                severity: 'info',
                summary: 'Success',
                detail: 'Process Completed'
              });

              clearInterval(interval);
            }
          }, 2000);
        }
      }]);
    }();

    ProgressBarDemo.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    ProgressBarDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progressbardemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/progressbar/progressbardemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], ProgressBarDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-progressbar-progressbardemo-module-es5.js.map