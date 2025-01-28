function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-support-support-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/support/support.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/support/support.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_support_supportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Support</span>\n        <span>Professional support for the open source innovation</span>\n    </div>\n</div>\n\n<div class=\"content-section support\">\n    <div class=\"support-image\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-md-6\">\n                <h3>PrimeNG PRO Support</h3>\n                <p>With PrimeNG PRO, it's easy to support, tune and add features to PrimeNG as if it were an in-house framework.</p>\n                <a class=\"home-button\" href=\"mailto:primeng@primetek.com.tr\">GET A QUOTE</a>\n            </div>\n            <div class=\"p-col-12 p-md-6\">\n                <img alt=\"PRO\" src=\"assets/showcase/images/home/icon-pro.svg\">\n            </div>\n        </div>\n    </div>\n    \n    <p>PrimeNG PRO is a term based commercial support service. With the exclusive services of Pro account, \n                    you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>\n                    \n    <h4>Standard PRO Services</h4>\n    <ul>\n        <li>Access to pro.primefaces.org</li>\n        <li>Response within 1 business day.</li>\n        <li>Defect patches.</li>\n        <li>Updates for a version of your choice to deliver changes.</li>\n        <li><a [routerLink]=\"['/setup']\">LTS license</a> included to access long-term support.</li>\n        <li>Unlimited number of cases.</li>\n        <li>Remote desktop connection.</li>\n        <li>Conference calls for discussions.</li>\n        <li>High priority to your issues.</li>\n        <li>Notifications about security updates.</li>\n    </ul>\n                \n    <h4>New Features (Optional)</h4>\t\t\t\n                \n    <p>New feature and enhancement requests are not available in core services and provided via an hour based model instead.  When you have a feature request we provide an estimate, if you confirm we deliver your request within an estimated timeframe and deduct the amount of work from your hours. These requests can be;</p>\n\n    <ul>\n        <li>New components.</li>\n        <li>New functionality to existing components.</li>\n        <li>Changing the way a certain functionality is implemented.</li>\n        <li>Accessibility improvements.</li>\n        <li>Proof of Concept implementations of a use case.</li>\n        <li>Code reviews to offer best practices.</li>\n    </ul>\n    \n    <p>You can purchase additional hours along with the subscription and also anytime during your subscription period. If your subscription term ends with unused hours, they will be added to your new subscription term in case you extend.</p>    \n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/support/support-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/support/support-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SupportRoutingModule */

  /***/
  function _src_app_showcase_components_support_supportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportRoutingModule", function () {
      return SupportRoutingModule;
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


    var _support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./support.component */
    "./src/app/showcase/components/support/support.component.ts");

    var SupportRoutingModule = /*#__PURE__*/_createClass(function SupportRoutingModule() {
      _classCallCheck(this, SupportRoutingModule);
    });

    SupportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SupportRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/support/support.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/showcase/components/support/support.component.ts ***!
    \******************************************************************/

  /*! exports provided: SupportComponent */

  /***/
  function _src_app_showcase_components_support_supportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
      return SupportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SupportComponent = /*#__PURE__*/_createClass(function SupportComponent() {
      _classCallCheck(this, SupportComponent);
    });

    SupportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./support.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/support/support.component.html"))["default"]
    })], SupportComponent);
    /***/
  },

  /***/
  "./src/app/showcase/components/support/support.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/showcase/components/support/support.module.ts ***!
    \***************************************************************/

  /*! exports provided: SupportModule */

  /***/
  function _src_app_showcase_components_support_supportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportModule", function () {
      return SupportModule;
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


    var _support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./support.component */
    "./src/app/showcase/components/support/support.component.ts");
    /* harmony import */


    var _support_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./support-routing.module */
    "./src/app/showcase/components/support/support-routing.module.ts");

    var SupportModule = /*#__PURE__*/_createClass(function SupportModule() {
      _classCallCheck(this, SupportModule);
    });

    SupportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_4__["SupportRoutingModule"]],
      declarations: [_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"]]
    })], SupportModule);
    /***/
  }
}]);
//# sourceMappingURL=components-support-support-module-es5.js.map