function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-lightbox-lightboxdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/lightbox/lightboxdemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/lightbox/lightboxdemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_lightbox_lightboxdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Lightbox <span class=\"subitem\">Deprecated (Use Galleria instead)</span></span>\n        <span>LightBox is a modal overlay component to display images, videos, inline html content and iframes.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-lightbox [images]=\"images\"></p-lightbox>\n\n    <h3>Content</h3>\n    <p-lightbox type=\"content\">\n        <a class=\"group\" href=\"#\">\n            Watch Video\n        </a>\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen></iframe>\n    </p-lightbox>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;LightboxModule&#125; from 'primeng/lightbox';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Lightbox has two modes; <i>image</i> and <i>custom content</i> defined using type property. In image mode a collection of\n            images are required to display where an image object in the collection defines the source of the original image, thumbnail image and the title.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LightboxDemo &#123;\n\n    images: any[];\n\n    constructor() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Content mode is enabled by setting type property to \"content\", providing an anchor to open the lightbox and content to display inside lightbox.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox type=\"content\"&gt;\n    &lt;a class=\"group\" href=\"#\"&gt;\n        Watch Video\n    &lt;/a&gt;\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n            <h3>Effects</h3>\n            <p>The easing function to use between image transitions is \"ease-out\" by default and this can be customized using easing property. \n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values. Duration\n            of the effect can be changed using effectDuration option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-lightbox [images]=\"images\" easing=\"ease-in\" effectDuration=\"1500ms\"&gt;&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>images</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of images to display.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>image</td>\n                            <td>Type of the lightbox, valid values are \"image\" and \"content\".</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>easing</td>\n                            <td>string</td>\n                            <td>ease-out</td>\n                            <td>Easing to use for transition between images.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>string</td>\n                            <td>500ms</td>\n                            <td>Duration of the transition between the images.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnEscape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifices if pressing escape key should hide the lightbox.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-lightbox</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-nav-right</td>\n                            <td>Element to navigate to next image.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-nav-left</td>\n                            <td>Element to navigate to previous image.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-caption</td>\n                            <td>Caption element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-caption-text</td>\n                            <td>Text of caption.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-lightbox-close</td>\n                            <td>Close icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/lightbox\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-lightbox [images]=\"images\"&gt;&lt;/p-lightbox&gt;\n\n&lt;h3&gt;Content&lt;/h3&gt;\n&lt;p-lightbox type=\"content\"&gt;\n    &lt;a class=\"group\" href=\"#\"&gt;\n        Watch Video\n    &lt;/a&gt;\n    &lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;/p-lightbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LightboxDemo &#123;\n\n    images: any[];\n\n    constructor() &#123;\n        this.images = [];\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title:'Sopranos 1'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title:'Sopranos 2'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg', title:'Sopranos 3'&#125;);\n        this.images.push(&#123;source:'assets/showcase/images/demo/sopranos/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg', title:'Sopranos 4'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: LightboxDemoRoutingModule */

  /***/
  function _src_app_showcase_components_lightbox_lightboxdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightboxDemoRoutingModule", function () {
      return LightboxDemoRoutingModule;
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


    var _lightboxdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lightboxdemo */
    "./src/app/showcase/components/lightbox/lightboxdemo.ts");

    var LightboxDemoRoutingModule = /*#__PURE__*/_createClass(function LightboxDemoRoutingModule() {
      _classCallCheck(this, LightboxDemoRoutingModule);
    });

    LightboxDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _lightboxdemo__WEBPACK_IMPORTED_MODULE_3__["LightboxDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LightboxDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/lightbox/lightboxdemo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/lightbox/lightboxdemo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LightboxDemoModule */

  /***/
  function _src_app_showcase_components_lightbox_lightboxdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightboxDemoModule", function () {
      return LightboxDemoModule;
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


    var _lightboxdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lightboxdemo */
    "./src/app/showcase/components/lightbox/lightboxdemo.ts");
    /* harmony import */


    var _lightboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lightboxdemo-routing.module */
    "./src/app/showcase/components/lightbox/lightboxdemo-routing.module.ts");
    /* harmony import */


    var primeng_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/lightbox */
    "./src/app/components/lightbox/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var LightboxDemoModule = /*#__PURE__*/_createClass(function LightboxDemoModule() {
      _classCallCheck(this, LightboxDemoModule);
    });

    LightboxDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _lightboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["LightboxDemoRoutingModule"], primeng_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_lightboxdemo__WEBPACK_IMPORTED_MODULE_3__["LightboxDemo"]]
    })], LightboxDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/lightbox/lightboxdemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/lightbox/lightboxdemo.ts ***!
    \**************************************************************/

  /*! exports provided: LightboxDemo */

  /***/
  function _src_app_showcase_components_lightbox_lightboxdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightboxDemo", function () {
      return LightboxDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LightboxDemo = /*#__PURE__*/_createClass(function LightboxDemo() {
      _classCallCheck(this, LightboxDemo);

      this.images = [];
      this.images.push({
        source: 'assets/showcase/images/demo/sopranos/sopranos1.jpg',
        thumbnail: 'assets/showcase/images/demo/sopranos/sopranos1_small.jpg',
        title: 'Sopranos 1'
      });
      this.images.push({
        source: 'assets/showcase/images/demo/sopranos/sopranos2.jpg',
        thumbnail: 'assets/showcase/images/demo/sopranos/sopranos2_small.jpg',
        title: 'Sopranos 2'
      });
      this.images.push({
        source: 'assets/showcase/images/demo/sopranos/sopranos3.jpg',
        thumbnail: 'assets/showcase/images/demo/sopranos/sopranos3_small.jpg',
        title: 'Sopranos 3'
      });
      this.images.push({
        source: 'assets/showcase/images/demo/sopranos/sopranos4.jpg',
        thumbnail: 'assets/showcase/images/demo/sopranos/sopranos4_small.jpg',
        title: 'Sopranos 4'
      });
    });

    LightboxDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lightboxdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/lightbox/lightboxdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LightboxDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-lightbox-lightboxdemo-module-es5.js.map