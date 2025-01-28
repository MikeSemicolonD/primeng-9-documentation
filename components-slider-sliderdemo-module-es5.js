function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slider-sliderdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/slider/sliderdemo.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/slider/sliderdemo.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_slider_sliderdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Slider</span>\n        <span>Slider is a component to provide input using dragging of a handle.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic: {{val1}}</h3>\n    <p-slider [(ngModel)]=\"val1\" [style]=\"{'width':'14em'}\"></p-slider>\n\n    <h3>Input: {{val2}}</h3>\n    <input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:14em\" readonly/>\n    <p-slider [(ngModel)]=\"val2\" [style]=\"{'width':'14em'}\"></p-slider>\n\n    <h3>Animate: {{val3}}</h3>\n    <p-slider [(ngModel)]=\"val3\" [style]=\"{'width':'14em'}\" [animate]=\"true\"></p-slider>\n\n    <h3>Step: {{val4}}</h3>\n    <p-slider [(ngModel)]=\"val4\" [style]=\"{'width':'14em'}\" [step]=\"20\"></p-slider>\n\n    <h3>Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}</h3>\n    <p-slider [(ngModel)]=\"rangeValues\" [style]=\"{'width':'14em'}\" [range]=\"true\"></p-slider>\n\n    <h3>Vertical: {{val5}}</h3>\n    <p-slider [(ngModel)]=\"val5\" [style]=\"{'height':'14em'}\" orientation=\"vertical\"></p-slider>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SliderModule&#125; from 'primeng/slider';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Two-way binding is defined using the standard <i>ngModel</i> directive.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    val: number;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Slider can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider formControlName=\"age\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Min-Max</h3>\n            <p>Boundaries are specified with <i>min</i> and <i>max</i> attributes.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Step</h3>\n            <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" [step]=\"10\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Range</h3>\n            <p>Range slider provides two handles to define two values. In this case, value binding should refer to an array.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    rangeValues: number[];\n\n&#125;\n</code>\n</pre>\n\n            <h3>Orientation</h3>\n            <p>Sliders supports two <i>orientation</i>, horizontal is the default and other alternative is vertical.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>animate</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, displays an animation on click of the slider bar.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>min</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Mininum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>100</td>\n                            <td>Maximum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>orientation</td>\n                            <td>string</td>\n                            <td>horizontal</td>\n                            <td>Orientation of the slider, valid values are horizontal and vertical.</td>\n                        </tr>\n                        <tr>\n                            <td>step</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Step factor to increment/decrement the value.</td>\n                        </tr>\n                        <tr>\n                            <td>range</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, allows two boundary values to be picked.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>\n                                event.originalEvent: Slide event <br />\n                                event.value: New value <br />\n                                event.values: Values in range mode <br />\n                            </td>\n                            <td>Callback to invoke on value change via slide.</td>\n                        </tr>\n                        <tr>\n                            <td>onSlideEnd</td>\n                            <td>\n                                event.originalEvent: Mouseup event<br />\n                                event.value: New value \n                            </td>\n                            <td>Callback to invoke when slide stops.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slider [(ngModel)]=\"val\" (onChange)=\"handleChange($event)\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nhandleChange(e) &#123;\n    //e.value is the new value\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-slider</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slider-handle</td>\n                            <td>Handle element</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slider\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-slider-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic: {{val1}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val1\" [style]=\"&#123;'width':'14em'&#125;\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Input: {{val2}}&lt;/h3&gt;\n&lt;input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:14em\"/&gt;\n&lt;p-slider [(ngModel)]=\"val2\" [style]=\"&#123;'width':'14em'&#125;\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Animate: {{val3}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val3\" [style]=\"&#123;'width':'14em'&#125;\" [animate]=\"true\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Step: {{val4}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val4\" [style]=\"&#123;'width':'14em'&#125;\" [step]=\"20\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"rangeValues\" [style]=\"&#123;'width':'14em'&#125;\" [range]=\"true\"&gt;&lt;/p-slider&gt;\n\n&lt;h3&gt;Vertical: {{val5}}&lt;/h3&gt;\n&lt;p-slider [(ngModel)]=\"val5\" [style]=\"&#123;'height':'14em'&#125;\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SliderDemo &#123;\n\n    val1: number;\n\n    val2: number = 50;\n\n    val3: number;\n\n    val4: number;\n\n    val5: number;\n\n    rangeValues: number[] = [20,80];\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-slider-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/slider/sliderdemo-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/showcase/components/slider/sliderdemo-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SliderDemoRoutingModule */

  /***/
  function _src_app_showcase_components_slider_sliderdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderDemoRoutingModule", function () {
      return SliderDemoRoutingModule;
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


    var _sliderdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sliderdemo */
    "./src/app/showcase/components/slider/sliderdemo.ts");

    var SliderDemoRoutingModule = /*#__PURE__*/_createClass(function SliderDemoRoutingModule() {
      _classCallCheck(this, SliderDemoRoutingModule);
    });

    SliderDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _sliderdemo__WEBPACK_IMPORTED_MODULE_3__["SliderDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SliderDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/slider/sliderdemo.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/showcase/components/slider/sliderdemo.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SliderDemoModule */

  /***/
  function _src_app_showcase_components_slider_sliderdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderDemoModule", function () {
      return SliderDemoModule;
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


    var _sliderdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sliderdemo */
    "./src/app/showcase/components/slider/sliderdemo.ts");
    /* harmony import */


    var _sliderdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sliderdemo-routing.module */
    "./src/app/showcase/components/slider/sliderdemo-routing.module.ts");
    /* harmony import */


    var primeng_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/slider */
    "./src/app/components/slider/public_api.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var SliderDemoModule = /*#__PURE__*/_createClass(function SliderDemoModule() {
      _classCallCheck(this, SliderDemoModule);
    });

    SliderDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _sliderdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SliderDemoRoutingModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_6__["SliderModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_sliderdemo__WEBPACK_IMPORTED_MODULE_4__["SliderDemo"]]
    })], SliderDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/slider/sliderdemo.ts":
  /*!**********************************************************!*\
    !*** ./src/app/showcase/components/slider/sliderdemo.ts ***!
    \**********************************************************/

  /*! exports provided: SliderDemo */

  /***/
  function _src_app_showcase_components_slider_sliderdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderDemo", function () {
      return SliderDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SliderDemo = /*#__PURE__*/_createClass(function SliderDemo() {
      _classCallCheck(this, SliderDemo);

      this.val2 = 50;
      this.rangeValues = [20, 80];
    });

    SliderDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sliderdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/slider/sliderdemo.html"))["default"]
    })], SliderDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-slider-sliderdemo-module-es5.js.map