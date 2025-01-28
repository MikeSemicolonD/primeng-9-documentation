function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inplace-inplacedemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inplace/inplacedemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inplace/inplacedemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_inplace_inplacedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Inplace</span>\n        <span>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-inplace closable=\"closable\" [style]=\"{'min-height':'30px'}\">\n        <span pInplaceDisplay>\n            Click to Edit\n        </span>\n        <span pInplaceContent>\n            <input type=\"text\" value=\"PrimeNG\" pInputText>\n        </span>\n    </p-inplace>\n\n    <h3>Image</h3>\n    <p-inplace>\n        <span pInplaceDisplay>\n            <span class=\"pi pi-image\" style=\"vertical-align: middle; padding-bottom: .1em\"></span><span style=\"margin-left:4px\">View Picture</span>\n        </span>\n        <span pInplaceContent>\n            <img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\">\n        </span>\n    </p-inplace>\n\n    <h3>Data</h3>\n    <p-inplace>\n        <span pInplaceDisplay>\n            <span class=\"pi pi-table\" style=\"vertical-align: middle; padding-bottom: .1em\"></span><span style=\"margin-left:4px\">View Data</span>\n        </span>\n        <span pInplaceContent>\n            <p-table [value]=\"cars\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>Vin</th>\n                        <th>Year</th>\n                        <th>Brand</th>\n                        <th>Color</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-car>\n                    <tr>\n                        <td>{{car.vin}}</td>\n                        <td>{{car.year}}</td>\n                        <td>{{car.brand}}</td>\n                        <td>{{car.color}}</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </span>\n    </p-inplace>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InplaceModule&#125; from 'primeng/inplace';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Inplace requires two child components having <i>pInplaceDisplay</i> and <i>pInplaceOutput</i> attributes to define the content of each state.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inplace&gt;\n    &lt;span pInplaceDisplay&gt;\n        Click to Edit\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>active</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the content is displayed or not.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays a button to switch back to display mode.</td>\n                        </tr>\n                        <tr>\n                            <td>preventClick</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, instead of click events, the component can be controlled full programmatic with activate() and deactivate() functions.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>closeIcon</td>\n                            <td>string</td>\n                            <td>pi pi-times</td>\n                            <td>Icon of the close icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onActivate</td>\n                            <td>event.originalEvent: Click event</td>\n                            <td>Activates the content.</td>\n                        </tr>\n                        <tr>\n                            <td>onDeactivate</td>\n                            <td>event.originalEvent: Click event</td>\n                            <td>Deactivates the content.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>activate</td>\n                            <td>-</td>\n                            <td>Activates the content.</td>\n                        </tr>\n                        <tr>\n                            <td>deactivate</td>\n                            <td>-</td>\n                            <td>Deactivates the content.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-inplace</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inplace-display</td>\n                            <td>Display container</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inplace-content</td>\n                            <td>Content container</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inplace\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-inplace-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-inplace closable=\"closable\"&gt;\n    &lt;span pInplaceDisplay&gt;\n        Click to Edit\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n\n&lt;h3&gt;Image&lt;/h3&gt;\n&lt;p-inplace&gt;\n    &lt;span pInplaceDisplay&gt;\n        &lt;span class=\"pi pi-image\" style=\"vertical-align: middle; padding-bottom: .1em\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:4px\"&gt;View Picture&lt;/span&gt;\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\"&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n\n&lt;h3&gt;Data&lt;/h3&gt;\n&lt;p-inplace&gt;\n    &lt;span pInplaceDisplay&gt;\n        &lt;span class=\"pi pi-table\" style=\"vertical-align: middle; padding-bottom: .1em\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:4px\"&gt;View Data&lt;/span&gt;\n    &lt;/span&gt;\n    &lt;span pInplaceContent&gt;\n        &lt;p-table [value]=\"cars\"&gt;\n            &lt;ng-template pTemplate=\"header\"&gt;\n                &lt;tr&gt;\n                    &lt;th&gt;Vin&lt;/th&gt;\n                    &lt;th&gt;Year&lt;/th&gt;\n                    &lt;th&gt;Brand&lt;/th&gt;\n                    &lt;th&gt;Color&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n            &lt;ng-template pTemplate=\"body\" let-car&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n        &lt;/p-table&gt;\n    &lt;/span&gt;\n&lt;/p-inplace&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-inplace-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/inplace/inplacedemo-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/showcase/components/inplace/inplacedemo-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: InplaceDemoRoutingModule */

  /***/
  function _src_app_showcase_components_inplace_inplacedemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InplaceDemoRoutingModule", function () {
      return InplaceDemoRoutingModule;
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


    var _inplacedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inplacedemo */
    "./src/app/showcase/components/inplace/inplacedemo.ts");

    var InplaceDemoRoutingModule = /*#__PURE__*/_createClass(function InplaceDemoRoutingModule() {
      _classCallCheck(this, InplaceDemoRoutingModule);
    });

    InplaceDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _inplacedemo__WEBPACK_IMPORTED_MODULE_3__["InplaceDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InplaceDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/inplace/inplacedemo.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/showcase/components/inplace/inplacedemo.module.ts ***!
    \*******************************************************************/

  /*! exports provided: InplaceDemoModule */

  /***/
  function _src_app_showcase_components_inplace_inplacedemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InplaceDemoModule", function () {
      return InplaceDemoModule;
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


    var _inplacedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inplacedemo */
    "./src/app/showcase/components/inplace/inplacedemo.ts");
    /* harmony import */


    var _inplacedemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./inplacedemo-routing.module */
    "./src/app/showcase/components/inplace/inplacedemo-routing.module.ts");
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/inplace */
    "./src/app/components/inplace/public_api.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/table */
    "./src/app/components/table/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var InplaceDemoModule = /*#__PURE__*/_createClass(function InplaceDemoModule() {
      _classCallCheck(this, InplaceDemoModule);
    });

    InplaceDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inplacedemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["InplaceDemoRoutingModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_5__["InplaceModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_inplacedemo__WEBPACK_IMPORTED_MODULE_3__["InplaceDemo"]]
    })], InplaceDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/inplace/inplacedemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/inplace/inplacedemo.ts ***!
    \************************************************************/

  /*! exports provided: InplaceDemo */

  /***/
  function _src_app_showcase_components_inplace_inplacedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InplaceDemo", function () {
      return InplaceDemo;
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

    var InplaceDemo = /*#__PURE__*/function () {
      function InplaceDemo(carService) {
        _classCallCheck(this, InplaceDemo);

        this.carService = carService;
      }

      return _createClass(InplaceDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this.cars = cars;
          });
        }
      }]);
    }();

    InplaceDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    InplaceDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inplacedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inplace/inplacedemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], InplaceDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-inplace-inplacedemo-module-es5.js.map