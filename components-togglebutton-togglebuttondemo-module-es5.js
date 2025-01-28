function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-togglebutton-togglebuttondemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/togglebutton/togglebuttondemo.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/togglebutton/togglebuttondemo.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_togglebutton_togglebuttondemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ToggleButton</span>\n        <span>ToggleButton is used to select a boolean value using a button.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic - ({{checked1}})</h3>\n    <p-toggleButton [(ngModel)]=\"checked1\" [style]=\"{'width':'150px'}\"></p-toggleButton>\n\n    <h3>Customized - ({{checked2}})</h3>\n    <p-toggleButton [(ngModel)]=\"checked2\" onLabel=\"I confirm\" offLabel=\"I reject\" onIcon=\"pi pi-check\" offIcon=\"pi pi-times\" [style]=\"{'width':'150px'}\"></p-toggleButton>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ToggleButtonModule&#125; from 'primeng/togglebutton';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way binding to a boolean property is defined using the standard ngModel directive.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toggleButton [(ngModel)]=\"checked\"&gt;&lt;/p-toggleButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    checked: boolean;\n\n&#125;\n</code>\n</pre>\n\n            <p>As model is two-way binding enabled, setting the bound value as true displays the state as checked.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n   checked: boolean = true;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>ToggleButton can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toggleButton formControlName=\"agreed\"&gt;&lt;/p-toggleButton&gt;\n</code>\n</pre>\n\n            <h3>Labels</h3>\n            <p>Labels are customized using onLabel and <i>offLabel</i> properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toggleButton onLabel=\"I confirm\" offLabel=\"I reject\"\n            onIcon=\"pi pi-check\" offIcon=\"pi pi-times\" [(ngModel)]=\"val\"&gt;&lt;/p-toggleButton&gt;\n</code>\n</pre>\n\n            <h3>Icons</h3>\n            <p>Icon on a ToggleButton is specified with the <i>onIcon</i> and <i>offIcon</i> properties and position is customized using the <i>iconPos</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toggleButton onLabel=\"I confirm\" offLabel=\"I reject\" \n            onIcon=\"pi pi-check\" offIcon=\"pi pi-times\" iconPos=\"right\" [(ngModel)]=\"val\"&gt;&lt;/p-toggleButton&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                         <tr>\n                            <td>onLabel</td>\n                            <td>string</td>\n                            <td>Yes</td>\n                            <td>Label for the on state.</td>\n                        </tr>\n                        <tr>\n                            <td>offLabel</td>\n                            <td>string</td>\n                            <td>No</td>\n                            <td>Label for the off state.</td>\n                        </tr>\n                        <tr>\n                            <td>onIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon for the on state.</td>\n                        </tr>\n                        <tr>\n                            <td>offIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon for the off state.</td>\n                        </tr>\n                        <tr>\n                            <td>iconPos</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: browser event <br>\n                                event.checked: boolean value to represent checked state.</td>\n                            <td>Callback to invoke on state change.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toggleButton (onChange)=\"handleChange($event)\" [(ngModel)]=\"val\"&gt;\n</code>\n</pre>\n <pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    handleChange(e) &#123;\n        var isChecked = e.checked;\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-togglebutton</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-button-icon-left</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-button-icon-right</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-button-text</td>\n                            <td>Label element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/togglebutton\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-togglebutton-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic - ({{checked1}})&lt;/h3&gt;\n&lt;p-toggleButton [(ngModel)]=\"checked1\" [style]=\"&#123;'width':'150px'&#125;\"&gt;&lt;/p-toggleButton&gt;\n\n&lt;h3&gt;Customized - ({{checked2}})&lt;/h3&gt;\n&lt;p-toggleButton [(ngModel)]=\"checked2\" onLabel=\"I confirm\" offLabel=\"I reject\" onIcon=\"pi pi-check\" offIcon=\"pi pi-times\" [style]=\"&#123;'width':'150px'&#125;\"&gt;&lt;/p-toggleButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ToggleButtonDemo &#123;\n\n    checked1: boolean = false;\n\n    checked2: boolean = true;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-togglebutton-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/togglebutton/togglebuttondemo-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/showcase/components/togglebutton/togglebuttondemo-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ToggleButtonDemoRoutingModule */

  /***/
  function _src_app_showcase_components_togglebutton_togglebuttondemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleButtonDemoRoutingModule", function () {
      return ToggleButtonDemoRoutingModule;
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


    var _togglebuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./togglebuttondemo */
    "./src/app/showcase/components/togglebutton/togglebuttondemo.ts");

    var ToggleButtonDemoRoutingModule = /*#__PURE__*/_createClass(function ToggleButtonDemoRoutingModule() {
      _classCallCheck(this, ToggleButtonDemoRoutingModule);
    });

    ToggleButtonDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _togglebuttondemo__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ToggleButtonDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/togglebutton/togglebuttondemo.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/togglebutton/togglebuttondemo.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ToggleButtonDemoModule */

  /***/
  function _src_app_showcase_components_togglebutton_togglebuttondemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleButtonDemoModule", function () {
      return ToggleButtonDemoModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _togglebuttondemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./togglebuttondemo */
    "./src/app/showcase/components/togglebutton/togglebuttondemo.ts");
    /* harmony import */


    var _togglebuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./togglebuttondemo-routing.module */
    "./src/app/showcase/components/togglebutton/togglebuttondemo-routing.module.ts");
    /* harmony import */


    var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/togglebutton */
    "./src/app/components/togglebutton/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var ToggleButtonDemoModule = /*#__PURE__*/_createClass(function ToggleButtonDemoModule() {
      _classCallCheck(this, ToggleButtonDemoModule);
    });

    ToggleButtonDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _togglebuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToggleButtonDemoRoutingModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_6__["ToggleButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]],
      declarations: [_togglebuttondemo__WEBPACK_IMPORTED_MODULE_4__["ToggleButtonDemo"]]
    })], ToggleButtonDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/togglebutton/togglebuttondemo.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/showcase/components/togglebutton/togglebuttondemo.ts ***!
    \**********************************************************************/

  /*! exports provided: ToggleButtonDemo */

  /***/
  function _src_app_showcase_components_togglebutton_togglebuttondemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleButtonDemo", function () {
      return ToggleButtonDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToggleButtonDemo = /*#__PURE__*/_createClass(function ToggleButtonDemo() {
      _classCallCheck(this, ToggleButtonDemo);

      this.checked1 = false;
      this.checked2 = true;
    });

    ToggleButtonDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./togglebuttondemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/togglebutton/togglebuttondemo.html"))["default"]
    })], ToggleButtonDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-togglebutton-togglebuttondemo-module-es5.js.map