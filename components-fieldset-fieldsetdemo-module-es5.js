function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-fieldset-fieldsetdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/fieldset/fieldsetdemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/fieldset/fieldsetdemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_fieldset_fieldsetdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Fieldset</span>\n        <span>Fieldset is a grouping component with the optional content toggle feature.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-fieldset legend=\"Godfather I\">\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n        kind and benevolent to those who give respect, \n        but given to ruthless violence whenever anything stands against the good of the family.\n    </p-fieldset>\n    <br>\n    <p-fieldset legend=\"Toggleable\" [toggleable]=\"true\">\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n        kind and benevolent to those who give respect, \n        but given to ruthless violence whenever anything stands against the good of the family.\n    </p-fieldset>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;FieldsetModule&#125; from 'primeng/fieldset';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Fieldset is defined with p-fieldset element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fieldset legend=\"Header\"&gt;\n    Content\n&lt;/p-fieldset&gt;\n</code>\n</pre>\n\n            <h3>Toggleable</h3>\n            <p>Content of the fieldset can be expanded and collapsed using <i>toggleable</i> option, default state is defined with collapsed option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fieldset legend=\"Header\" [toggleable]=\"true\"&gt;\n    Content\n&lt;/p-fieldset&gt;\n</code>\n</pre>\n\n            <h3>Custom Legend</h3>\n            <p>Legend content can be customized with <i>p-header</i> component.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fieldset&gt;\n    &lt;p-header&gt;Custom Legend Content&lt;/p-header&gt;\n    Content\n&lt;/p-fieldset&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of toggle animation can be customized using the <i>transitionOptions</i> property with a default value as <b>400ms cubic-bezier(0.86, 0, 0.07, 1)</b>, \n                example below disables the animation altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fieldset [transitionOptions]=\"'0ms'\"&gt;\n&lt;/p-fieldset&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>legend</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of the fieldset.</td>\n                        </tr>\n                        <tr>\n                            <td>toggleable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, content can toggled by clicking the legend.</td>\n                        </tr>\n                        <tr>\n                            <td>collapsed</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines the default visibility state of the content.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the fieldset.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the fieldset.</td>\n                        </tr>\n                        <tr>\n                            <td>transitionOptions</td>\n                            <td>string</td>\n                            <td>400ms cubic-bezier(0.86, 0, 0.07, 1)</td>\n                            <td>Transition options of the animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBeforeToggle</td>\n                            <td>event.originalEvent: browser event<br>\n                                event.collapsed: state as a boolean</td>\n                            <td>Callback to invoke before content toggle.</td>\n                        </tr>\n                        <tr>\n                            <td>onAfterToggle</td>\n                            <td>event.originalEvent: browser event<br>\n                                event.collapsed: state as a boolean</td>\n                            <td>Callback to invoke after content toggle.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-fieldset</td>\n                            <td>Fieldset element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-fieldset-toggleable</td>\n                            <td>Toggleable fieldset element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-fieldset-legend</td>\n                            <td>Legend element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-fieldset-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/fieldset\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-fieldset-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-fieldset legend=\"Godfather I\"&gt;\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n    kind and benevolent to those who give respect, \n    but given to ruthless violence whenever anything stands against the good of the family.\n&lt;/p-fieldset&gt;\n\n&lt;p-fieldset legend=\"Toggleable\" [toggleable]=\"true\"&gt;\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n    kind and benevolent to those who give respect, \n    but given to ruthless violence whenever anything stands against the good of the family.\n&lt;/p-fieldset&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-fieldset-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/fieldset/fieldsetdemo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/fieldset/fieldsetdemo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: FieldsetDemoRoutingModule */

  /***/
  function _src_app_showcase_components_fieldset_fieldsetdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldsetDemoRoutingModule", function () {
      return FieldsetDemoRoutingModule;
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


    var _fieldsetdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fieldsetdemo */
    "./src/app/showcase/components/fieldset/fieldsetdemo.ts");

    var FieldsetDemoRoutingModule = /*#__PURE__*/_createClass(function FieldsetDemoRoutingModule() {
      _classCallCheck(this, FieldsetDemoRoutingModule);
    });

    FieldsetDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _fieldsetdemo__WEBPACK_IMPORTED_MODULE_3__["FieldsetDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FieldsetDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/fieldset/fieldsetdemo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/fieldset/fieldsetdemo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: FieldsetDemoModule */

  /***/
  function _src_app_showcase_components_fieldset_fieldsetdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldsetDemoModule", function () {
      return FieldsetDemoModule;
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


    var _fieldsetdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fieldsetdemo */
    "./src/app/showcase/components/fieldset/fieldsetdemo.ts");
    /* harmony import */


    var _fieldsetdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fieldsetdemo-routing.module */
    "./src/app/showcase/components/fieldset/fieldsetdemo-routing.module.ts");
    /* harmony import */


    var primeng_fieldset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/fieldset */
    "./src/app/components/fieldset/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var FieldsetDemoModule = /*#__PURE__*/_createClass(function FieldsetDemoModule() {
      _classCallCheck(this, FieldsetDemoModule);
    });

    FieldsetDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fieldsetdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["FieldsetDemoRoutingModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_5__["FieldsetModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_fieldsetdemo__WEBPACK_IMPORTED_MODULE_3__["FieldsetDemo"]]
    })], FieldsetDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/fieldset/fieldsetdemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/fieldset/fieldsetdemo.ts ***!
    \**************************************************************/

  /*! exports provided: FieldsetDemo */

  /***/
  function _src_app_showcase_components_fieldset_fieldsetdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldsetDemo", function () {
      return FieldsetDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FieldsetDemo = /*#__PURE__*/_createClass(function FieldsetDemo() {
      _classCallCheck(this, FieldsetDemo);
    });

    FieldsetDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./fieldsetdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/fieldset/fieldsetdemo.html"))["default"]
    })], FieldsetDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-fieldset-fieldsetdemo-module-es5.js.map