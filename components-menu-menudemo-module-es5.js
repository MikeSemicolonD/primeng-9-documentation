function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-menudemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menu/menudemo.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menu/menudemo.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_menu_menudemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Menu</span>\n        <span>Menu is a navigation/command component that supports dynamic and static positioning.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-menu [model]=\"items\"></p-menu>\n\n    <h3>Popup</h3>\n    <p-menu #menu [popup]=\"true\" [model]=\"items\"></p-menu>\n    <button type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MenuModule&#125; from 'primeng/menu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>Menu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>Menu requires a collection of menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'New', icon: 'pi pi-fw pi-plus'&#125;,\n            &#123;label: 'Open', icon: 'pi pi-fw pi-download'&#125;,\n            &#123;label: 'Undo', icon: 'pi pi-fw pi-refresh'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>SubMenus</h3>\n            <p>Menu supports 1 level of nesting via subitems of an item.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'pi pi-fw pi-plus'&#125;,\n                &#123;label: 'Download', icon: 'pi pi-fw pi-download'&#125;\n            ]\n        &#125;,\n        &#123;\n            label: 'Edit',\n            items: [\n                &#123;label: 'Add User', icon: 'pi pi-fw pi-user-plus'&#125;,\n                &#123;label: 'Remove User', icon: 'pi pi-fw pi-user-minus'&#125;\n            ]\n        &#125;];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Popup Mode</h3>\n            <p>Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \n                    from the anchor element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menu #menu [popup]=\"true\" [model]=\"items\"&gt;&lt;/p-menu&gt;\n&lt;button type=\"button\" pButton icon=\"pi pi-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [popup]=\"true\" [model]=\"items\"&gt;&lt;/p-menu&gt;\n&lt;button type=\"button\" pButton icon=\"pi pi-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>       \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>popup</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if menu would displayed as a popup.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>225ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>195ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onShow</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when overlay menu is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when overlay menu is hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-menu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu-list</td>\n                            <td>List element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menu\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-menu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\n\n&lt;h3&gt;Popup&lt;/h3&gt;\n&lt;p-menu #menu [popup]=\"true\" [model]=\"items\"&gt;&lt;/p-menu&gt;\n&lt;button type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'pi pi-fw pi-plus'&#125;,\n                &#123;label: 'Download', icon: 'pi pi-fw pi-download'&#125;\n            ]\n        &#125;,\n        &#123;\n            label: 'Edit',\n            items: [\n                &#123;label: 'Add User', icon: 'pi pi-fw pi-user-plus'&#125;,\n                &#123;label: 'Remove User', icon: 'pi pi-fw pi-user-minus'&#125;\n            ]\n        &#125;];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-menu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/menu/menudemo-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/menu/menudemo-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: MenuDemoRoutingModule */

  /***/
  function _src_app_showcase_components_menu_menudemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuDemoRoutingModule", function () {
      return MenuDemoRoutingModule;
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


    var _menudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menudemo */
    "./src/app/showcase/components/menu/menudemo.ts");

    var MenuDemoRoutingModule = /*#__PURE__*/_createClass(function MenuDemoRoutingModule() {
      _classCallCheck(this, MenuDemoRoutingModule);
    });

    MenuDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _menudemo__WEBPACK_IMPORTED_MODULE_3__["MenuDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/menu/menudemo.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/showcase/components/menu/menudemo.module.ts ***!
    \*************************************************************/

  /*! exports provided: MenuDemoModule */

  /***/
  function _src_app_showcase_components_menu_menudemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuDemoModule", function () {
      return MenuDemoModule;
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


    var _menudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menudemo */
    "./src/app/showcase/components/menu/menudemo.ts");
    /* harmony import */


    var _menudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menudemo-routing.module */
    "./src/app/showcase/components/menu/menudemo-routing.module.ts");
    /* harmony import */


    var primeng_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/menu */
    "./src/app/components/menu/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var MenuDemoModule = /*#__PURE__*/_createClass(function MenuDemoModule() {
      _classCallCheck(this, MenuDemoModule);
    });

    MenuDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _menudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["MenuDemoRoutingModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_5__["MenuModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]],
      declarations: [_menudemo__WEBPACK_IMPORTED_MODULE_3__["MenuDemo"]]
    })], MenuDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/menu/menudemo.ts":
  /*!******************************************************!*\
    !*** ./src/app/showcase/components/menu/menudemo.ts ***!
    \******************************************************/

  /*! exports provided: MenuDemo */

  /***/
  function _src_app_showcase_components_menu_menudemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuDemo", function () {
      return MenuDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuDemo = /*#__PURE__*/function () {
      function MenuDemo() {
        _classCallCheck(this, MenuDemo);
      }

      return _createClass(MenuDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = [{
            label: 'File',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus'
            }, {
              label: 'Download',
              icon: 'pi pi-fw pi-download'
            }]
          }, {
            label: 'Edit',
            items: [{
              label: 'Add User',
              icon: 'pi pi-fw pi-user-plus'
            }, {
              label: 'Remove User',
              icon: 'pi pi-fw pi-user-minus'
            }]
          }];
        }
      }]);
    }();

    MenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menudemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menu/menudemo.html"))["default"]
    })], MenuDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-menu-menudemo-module-es5.js.map