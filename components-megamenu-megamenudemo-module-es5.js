function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-megamenu-megamenudemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/megamenu/megamenudemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/megamenu/megamenudemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_megamenu_megamenudemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">MegaMenu</span>\n        <span>MegaMenu displays submenus of root items together.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-megaMenu [model]=\"items\"></p-megaMenu>\n    \n    <h3>Vertical</h3>\n    <p-megaMenu [model]=\"items\" orientation=\"vertical\"></p-megaMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MegaMenuModule&#125; from 'primeng/megamenu';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>MegaMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>MegaMenu requires nested menuitems as its model where the items of a root menuitem is a two dimensional array to define columns in an overlay submenu.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MegaMenuItem,MenuItem&#125; from 'primeng/api';\n\nexport class MegaMenuDemo &#123;\n\n    items: MegaMenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'Videos', icon: 'pi pi-fw pi-video',\n                items: [\n                    [\n                        &#123;\n                            label: 'Video 1',\n                            items: [&#123;label: 'Video 1.1'&#125;, &#123;label: 'Video 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Video 2',\n                            items: [&#123;label: 'Video 2.1'&#125;, &#123;label: 'Video 2.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Video 3',\n                            items: [&#123;label: 'Video 3.1'&#125;, &#123;label: 'Video 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Video 4',\n                            items: [&#123;label: 'Video 4.1'&#125;, &#123;label: 'Video 4.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Users', icon: 'pi pi-fw pi-users',\n                items: [\n                    [\n                        &#123;\n                            label: 'User 1',\n                            items: [&#123;label: 'User 1.1'&#125;, &#123;label: 'User 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'User 2',\n                            items: [&#123;label: 'User 2.1'&#125;, &#123;label: 'User 2.2'&#125;]\n                        &#125;,\n                    ],\n                    [\n                        &#123;\n                            label: 'User 3',\n                            items: [&#123;label: 'User 3.1'&#125;, &#123;label: 'User 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'User 4',\n                            items: [&#123;label: 'User 4.1'&#125;, &#123;label: 'User 4.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'User 5',\n                            items: [&#123;label: 'User 5.1'&#125;, &#123;label: 'User 5.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'User 6',\n                            items: [&#123;label: 'User 6.1'&#125;, &#123;label: 'User 6.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Events', icon: 'pi pi-fw pi-calendar',\n                items: [\n                    [\n                        &#123;\n                            label: 'Event 1',\n                            items: [&#123;label: 'Event 1.1'&#125;, &#123;label: 'Event 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Event 2',\n                            items: [&#123;label: 'Event 2.1'&#125;, &#123;label: 'Event 2.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Event 3',\n                            items: [&#123;label: 'Event 3.1'&#125;, &#123;label: 'Event 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Event 4',\n                            items: [&#123;label: 'Event 4.1'&#125;, &#123;label: 'Event 4.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Settings', icon: 'pi pi-fw pi-cog',\n                items: [\n                    [\n                        &#123;\n                            label: 'Setting 1',\n                            items: [&#123;label: 'Setting 1.1'&#125;, &#123;label: 'Setting 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Setting 2',\n                            items: [&#123;label: 'Setting 2.1'&#125;, &#123;label: 'Setting 2.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Setting 3',\n                            items: [&#123;label: 'Setting 3.1'&#125;, &#123;label: 'Setting 3.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Technology 4',\n                            items: [&#123;label: 'Setting 4.1'&#125;, &#123;label: 'Setting 4.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;\n        ]\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Custom Content</h3>\n            <p>Custom content can be placed between p-megaMenu tags. Megamenu should be horizontal for custom content.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-megaMenu [model]=\"items\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\n    &lt;button pButton label=\"Logout\" icon=\"pi pi-sign-out\"&gt;&lt;/button&gt;\n&lt;/p-megaMenu&gt;\n</code>\n</pre>\n\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>orientation</td>\n                            <td>string</td>\n                            <td>horizontal</td>\n                            <td>Defines the orientation, valid values are horizontal and vertical.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>ui-megamenu</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menu-list</td>\n                        <td>List element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem</td>\n                        <td>Menuitem element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-text</td>\n                        <td>Label of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-icon</td>\n                        <td>Icon of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-submenu-icon</td>\n                        <td>Arrow icon of a submenu.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<h3>Dependencies</h3>\n<p>None.</p>\n</p-tabPanel>\n\n<p-tabPanel header=\"Source\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/megamenu\" class=\"btn-viewsource\" target=\"_blank\">\n        <span>View on GitHub</span>\n    </a>\n    <a href=\"https://stackblitz.com/edit/primeng-megamenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n        <span>Edit in StackBlitz</span>\n    </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MegaMenuItem,MenuItem&#125; from 'primeng/api';\n\nexport class MegaMenuDemo &#123;\n\n    items: MegaMenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'Videos', icon: 'pi pi-fw pi-video',\n                items: [\n                    [\n                        &#123;\n                            label: 'Video 1',\n                            items: [&#123;label: 'Video 1.1'&#125;, &#123;label: 'Video 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Video 2',\n                            items: [&#123;label: 'Video 2.1'&#125;, &#123;label: 'Video 2.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Video 3',\n                            items: [&#123;label: 'Video 3.1'&#125;, &#123;label: 'Video 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Video 4',\n                            items: [&#123;label: 'Video 4.1'&#125;, &#123;label: 'Video 4.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Users', icon: 'pi pi-fw pi-users',\n                items: [\n                    [\n                        &#123;\n                            label: 'User 1',\n                            items: [&#123;label: 'User 1.1'&#125;, &#123;label: 'User 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'User 2',\n                            items: [&#123;label: 'User 2.1'&#125;, &#123;label: 'User 2.2'&#125;]\n                        &#125;,\n                    ],\n                    [\n                        &#123;\n                            label: 'User 3',\n                            items: [&#123;label: 'User 3.1'&#125;, &#123;label: 'User 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'User 4',\n                            items: [&#123;label: 'User 4.1'&#125;, &#123;label: 'User 4.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'User 5',\n                            items: [&#123;label: 'User 5.1'&#125;, &#123;label: 'User 5.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'User 6',\n                            items: [&#123;label: 'User 6.1'&#125;, &#123;label: 'User 6.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Events', icon: 'pi pi-fw pi-calendar',\n                items: [\n                    [\n                        &#123;\n                            label: 'Event 1',\n                            items: [&#123;label: 'Event 1.1'&#125;, &#123;label: 'Event 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Event 2',\n                            items: [&#123;label: 'Event 2.1'&#125;, &#123;label: 'Event 2.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Event 3',\n                            items: [&#123;label: 'Event 3.1'&#125;, &#123;label: 'Event 3.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Event 4',\n                            items: [&#123;label: 'Event 4.1'&#125;, &#123;label: 'Event 4.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;,\n            &#123;\n                label: 'Settings', icon: 'pi pi-fw pi-cog',\n                items: [\n                    [\n                        &#123;\n                            label: 'Setting 1',\n                            items: [&#123;label: 'Setting 1.1'&#125;, &#123;label: 'Setting 1.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Setting 2',\n                            items: [&#123;label: 'Setting 2.1'&#125;, &#123;label: 'Setting 2.2'&#125;]\n                        &#125;,\n                        &#123;\n                            label: 'Setting 3',\n                            items: [&#123;label: 'Setting 3.1'&#125;, &#123;label: 'Setting 3.2'&#125;]\n                        &#125;\n                    ],\n                    [\n                        &#123;\n                            label: 'Technology 4',\n                            items: [&#123;label: 'Setting 4.1'&#125;, &#123;label: 'Setting 4.2'&#125;]\n                        &#125;\n                    ]\n                ]\n            &#125;\n        ]\n    &#125;\n&#125;\n</code>\n</pre>\n</p-tabPanel>\n<p-tabPanel header=\"StackBlitz\">\n    <ng-template pTemplate=\"content\">\n        <iframe src=\"https://stackblitz.com/edit/primeng-megamenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n    </ng-template>\n</p-tabPanel>\n</p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/megamenu/megamenudemo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/megamenu/megamenudemo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: MegaMenuDemoRoutingModule */

  /***/
  function _src_app_showcase_components_megamenu_megamenudemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MegaMenuDemoRoutingModule", function () {
      return MegaMenuDemoRoutingModule;
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


    var _megamenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./megamenudemo */
    "./src/app/showcase/components/megamenu/megamenudemo.ts");

    var MegaMenuDemoRoutingModule = /*#__PURE__*/_createClass(function MegaMenuDemoRoutingModule() {
      _classCallCheck(this, MegaMenuDemoRoutingModule);
    });

    MegaMenuDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _megamenudemo__WEBPACK_IMPORTED_MODULE_3__["MegaMenuDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MegaMenuDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/megamenu/megamenudemo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/megamenu/megamenudemo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: MegaMenuDemoModule */

  /***/
  function _src_app_showcase_components_megamenu_megamenudemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MegaMenuDemoModule", function () {
      return MegaMenuDemoModule;
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


    var _megamenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./megamenudemo */
    "./src/app/showcase/components/megamenu/megamenudemo.ts");
    /* harmony import */


    var _megamenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./megamenudemo-routing.module */
    "./src/app/showcase/components/megamenu/megamenudemo-routing.module.ts");
    /* harmony import */


    var primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/megamenu */
    "./src/app/components/megamenu/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var MegaMenuDemoModule = /*#__PURE__*/_createClass(function MegaMenuDemoModule() {
      _classCallCheck(this, MegaMenuDemoModule);
    });

    MegaMenuDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _megamenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["MegaMenuDemoRoutingModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__["MegaMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_megamenudemo__WEBPACK_IMPORTED_MODULE_3__["MegaMenuDemo"]]
    })], MegaMenuDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/megamenu/megamenudemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/megamenu/megamenudemo.ts ***!
    \**************************************************************/

  /*! exports provided: MegaMenuDemo */

  /***/
  function _src_app_showcase_components_megamenu_megamenudemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MegaMenuDemo", function () {
      return MegaMenuDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MegaMenuDemo = /*#__PURE__*/function () {
      function MegaMenuDemo() {
        _classCallCheck(this, MegaMenuDemo);
      }

      return _createClass(MegaMenuDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = [{
            label: 'Videos',
            icon: 'pi pi-fw pi-video',
            items: [[{
              label: 'Video 1',
              items: [{
                label: 'Video 1.1'
              }, {
                label: 'Video 1.2'
              }]
            }, {
              label: 'Video 2',
              items: [{
                label: 'Video 2.1'
              }, {
                label: 'Video 2.2'
              }]
            }], [{
              label: 'Video 3',
              items: [{
                label: 'Video 3.1'
              }, {
                label: 'Video 3.2'
              }]
            }, {
              label: 'Video 4',
              items: [{
                label: 'Video 4.1'
              }, {
                label: 'Video 4.2'
              }]
            }]]
          }, {
            label: 'Users',
            icon: 'pi pi-fw pi-users',
            items: [[{
              label: 'User 1',
              items: [{
                label: 'User 1.1'
              }, {
                label: 'User 1.2'
              }]
            }, {
              label: 'User 2',
              items: [{
                label: 'User 2.1'
              }, {
                label: 'User 2.2'
              }]
            }], [{
              label: 'User 3',
              items: [{
                label: 'User 3.1'
              }, {
                label: 'User 3.2'
              }]
            }, {
              label: 'User 4',
              items: [{
                label: 'User 4.1'
              }, {
                label: 'User 4.2'
              }]
            }], [{
              label: 'User 5',
              items: [{
                label: 'User 5.1'
              }, {
                label: 'User 5.2'
              }]
            }, {
              label: 'User 6',
              items: [{
                label: 'User 6.1'
              }, {
                label: 'User 6.2'
              }]
            }]]
          }, {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [[{
              label: 'Event 1',
              items: [{
                label: 'Event 1.1'
              }, {
                label: 'Event 1.2'
              }]
            }, {
              label: 'Event 2',
              items: [{
                label: 'Event 2.1'
              }, {
                label: 'Event 2.2'
              }]
            }], [{
              label: 'Event 3',
              items: [{
                label: 'Event 3.1'
              }, {
                label: 'Event 3.2'
              }]
            }, {
              label: 'Event 4',
              items: [{
                label: 'Event 4.1'
              }, {
                label: 'Event 4.2'
              }]
            }]]
          }, {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            items: [[{
              label: 'Setting 1',
              items: [{
                label: 'Setting 1.1'
              }, {
                label: 'Setting 1.2'
              }]
            }, {
              label: 'Setting 2',
              items: [{
                label: 'Setting 2.1'
              }, {
                label: 'Setting 2.2'
              }]
            }, {
              label: 'Setting 3',
              items: [{
                label: 'Setting 3.1'
              }, {
                label: 'Setting 3.2'
              }]
            }], [{
              label: 'Technology 4',
              items: [{
                label: 'Setting 4.1'
              }, {
                label: 'Setting 4.2'
              }]
            }]]
          }];
        }
      }]);
    }();

    MegaMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./megamenudemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/megamenu/megamenudemo.html"))["default"]
    })], MegaMenuDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-megamenu-megamenudemo-module-es5.js.map