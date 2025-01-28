function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-defer-deferdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/defer/deferdemo.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/defer/deferdemo.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_defer_deferdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Defer</span>\n        <span>Defer directive postpones the loading the content that is initially not in viewport until it becomes visible on scroll. Think of\n        pDefer as a smart ngIf that lazily loads content when it becomes visible after page scroll. Scroll down to load the Table\n        which initiates a query that is not executed on initial page load to speed up load performance.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <div style=\"height:800px\">\n        Table is not loaded yet, scroll down to initialize it.\n    </div>\n\n    <p-toast></p-toast>\n\n    <div pDefer (onLoad)=\"initData()\">\n        <ng-template>\n            <p-table [value]=\"cars\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>Vin</th>\n                        <th>Year</th>\n                        <th>Brand</th>\n                        <th>Color</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-car>\n                    <tr>\n                        <td>{{car.vin}}</td>\n                        <td>{{car.year}}</td>\n                        <td>{{car.brand}}</td>\n                        <td>{{car.color}}</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </ng-template>\n    </div>\n\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DeferModule&#125; from 'primeng/defer';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDefer&gt;\n    &lt;ng-template&gt;\n       deferred content\n   &lt;/ng-template&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Callback</h3>\n            <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\n    &lt;ng-template&gt;\n        &lt;p-table [value]=\"cars\"&gt;\n        &lt;ng-template pTemplate=\"header\"&gt;\n            &lt;tr&gt;\n                &lt;th&gt;Vin&lt;/th&gt;\n                &lt;th&gt;Year&lt;/th&gt;\n                &lt;th&gt;Brand&lt;/th&gt;\n                &lt;th&gt;Color&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"body\" let-car&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-table&gt;\n    &lt;/ng-template&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nthis.cars = //initialize\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <p>Directive has no attributes.</p>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onLoad</td>\n                            <td>-</td>\n                            <td>Callback to invoke when deferred content is loaded.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Directive does not apply any styling to host.</p>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/defer\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-defer-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\n    &lt;ng-template&gt;\n        &lt;p-table [value]=\"cars\"&gt;\n            &lt;ng-template pTemplate=\"header\"&gt;\n                &lt;tr&gt;\n                    &lt;th&gt;Vin&lt;/th&gt;\n                    &lt;th&gt;Year&lt;/th&gt;\n                    &lt;th&gt;Brand&lt;/th&gt;\n                    &lt;th&gt;Color&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n            &lt;ng-template pTemplate=\"body\" let-car&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n        &lt;/p-table&gt;\n    &lt;/ng-template&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DeferDemo &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService, private messageService: MessageService)  &#123;&#125;\n\n    initData()  &#123;\n        this.messageService.add(&#123;severity:'success', summary:'Data Initialized', detail:'Render Completed'&#125;);\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n     &#125;\n &#125;\n</code>\n</pre>\n\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-defer-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n     </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/defer/deferdemo-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/defer/deferdemo-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DeferDemoRoutingModule */

  /***/
  function _src_app_showcase_components_defer_deferdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeferDemoRoutingModule", function () {
      return DeferDemoRoutingModule;
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


    var _deferdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deferdemo */
    "./src/app/showcase/components/defer/deferdemo.ts");

    var DeferDemoRoutingModule = /*#__PURE__*/_createClass(function DeferDemoRoutingModule() {
      _classCallCheck(this, DeferDemoRoutingModule);
    });

    DeferDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _deferdemo__WEBPACK_IMPORTED_MODULE_3__["DeferDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeferDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/defer/deferdemo.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/showcase/components/defer/deferdemo.module.ts ***!
    \***************************************************************/

  /*! exports provided: DeferDemoModule */

  /***/
  function _src_app_showcase_components_defer_deferdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeferDemoModule", function () {
      return DeferDemoModule;
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


    var _deferdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deferdemo */
    "./src/app/showcase/components/defer/deferdemo.ts");
    /* harmony import */


    var _deferdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./deferdemo-routing.module */
    "./src/app/showcase/components/defer/deferdemo-routing.module.ts");
    /* harmony import */


    var primeng_defer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/defer */
    "./src/app/components/defer/public_api.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/table */
    "./src/app/components/table/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var DeferDemoModule = /*#__PURE__*/_createClass(function DeferDemoModule() {
      _classCallCheck(this, DeferDemoModule);
    });

    DeferDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _deferdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["DeferDemoRoutingModule"], primeng_defer__WEBPACK_IMPORTED_MODULE_5__["DeferModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_deferdemo__WEBPACK_IMPORTED_MODULE_3__["DeferDemo"]]
    })], DeferDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/defer/deferdemo.ts":
  /*!********************************************************!*\
    !*** ./src/app/showcase/components/defer/deferdemo.ts ***!
    \********************************************************/

  /*! exports provided: DeferDemo */

  /***/
  function _src_app_showcase_components_defer_deferdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeferDemo", function () {
      return DeferDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var DeferDemo = /*#__PURE__*/function () {
      function DeferDemo(carService, messageService) {
        _classCallCheck(this, DeferDemo);

        this.carService = carService;
        this.messageService = messageService;
      }

      return _createClass(DeferDemo, [{
        key: "initData",
        value: function initData() {
          var _this = this;

          this.messageService.add({
            severity: 'success',
            summary: 'Data Initialized',
            detail: 'Render Completed'
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this.cars = cars;
          });
        }
      }]);
    }();

    DeferDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    DeferDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./deferdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/defer/deferdemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], DeferDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-defer-deferdemo-module-es5.js.map