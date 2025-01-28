function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-panelmenu-panelmenudemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/panelmenu/panelmenudemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/panelmenu/panelmenudemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_panelmenu_panelmenudemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Menu - PanelMenu</span>\n        <span>PanelMenu is a hybrid of accordion-tree components.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-panelMenu [model]=\"items\" [style]=\"{'width':'300px'}\" [multiple]=\"false\"></p-panelMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;PanelMenuModule&#125; from 'primeng/panelmenu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>PanelMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>PanelMenu requires nested menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panelMenu [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class PanelMenuDemo &#123;\n  \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'pi pi-pw pi-file',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'User', icon: 'pi pi-fw pi-user-plus'&#125;,\n                            &#123;label: 'Filter', icon: 'pi pi-fw pi-filter'&#125;\n                        ]\n                    &#125;,\n                    &#123;label: 'Open', icon: 'pi pi-fw pi-external-link'&#125;,\n                    &#123;separator: true&#125;,\n                    &#123;label: 'Quit', icon: 'pi pi-fw pi-times'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'pi pi-fw pi-question',\n                items: [\n                    &#123;\n                        label: 'Contents',\n                        icon: 'pi pi-pi pi-bars'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'pi pi-pi pi-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'User',\n                                icon: 'pi pi-fw pi-file',\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'pi pi-fw pi-cog',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'pi pi-fw pi-tags',\n                        items: [\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Initial State</h3>\n            <p>MenuItem has an expanded property to control the visibility of a submenu, you may use this property to control the state from the menumodel.</p>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the toggle animation can be customized using the transitionOptions property with a default value as <b>400ms cubic-bezier(0.86, 0, 0.07, 1)</b>, \n                example below disables the animation altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n &lt;p-panelMenu [transitionOptions]=\"'0ms'\" [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether multiple tabs can be activated at the same time or not.</td>\n                        </tr>\n                        <tr>\n                            <td>transitionOptions</td>\n                            <td>string</td>\n                            <td>400ms cubic-bezier(0.86, 0, 0.07, 1)</td>\n                            <td>Transition options of the animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-panelmenu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panelmenu-header</td>\n                            <td>Accordion header of root submenu.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panelmenu-content</td>\n                            <td>Accordion content of root submenu.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu-list</td>\n                            <td>List element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panelmenu-icon</td>\n                            <td>Arrow icon of an accordion header.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panelmenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-panelmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panelMenu [model]=\"items\" [style]=\"&#123;'width':'300px'&#125;\"&gt;&lt;/p-panelMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class PanelMenuDemo &#123;\n  \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'pi pi-pw pi-file',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'User', icon: 'pi pi-fw pi-user-plus'&#125;,\n                            &#123;label: 'Filter', icon: 'pi pi-fw pi-filter'&#125;\n                        ]\n                    &#125;,\n                    &#123;label: 'Open', icon: 'pi pi-fw pi-external-link'&#125;,\n                    &#123;separator: true&#125;,\n                    &#123;label: 'Quit', icon: 'pi pi-fw pi-times'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'pi pi-fw pi-question',\n                items: [\n                    &#123;\n                        label: 'Contents',\n                        icon: 'pi pi-pi pi-bars'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'pi pi-pi pi-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'User',\n                                icon: 'pi pi-fw pi-file',\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'pi pi-fw pi-cog',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'pi pi-fw pi-tags',\n                        items: [\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-panelmenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: PanelMenuDemoRoutingModule */

  /***/
  function _src_app_showcase_components_panelmenu_panelmenudemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelMenuDemoRoutingModule", function () {
      return PanelMenuDemoRoutingModule;
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


    var _panelmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./panelmenudemo */
    "./src/app/showcase/components/panelmenu/panelmenudemo.ts");

    var PanelMenuDemoRoutingModule = /*#__PURE__*/_createClass(function PanelMenuDemoRoutingModule() {
      _classCallCheck(this, PanelMenuDemoRoutingModule);
    });

    PanelMenuDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _panelmenudemo__WEBPACK_IMPORTED_MODULE_3__["PanelMenuDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PanelMenuDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/panelmenu/panelmenudemo.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/panelmenu/panelmenudemo.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PanelMenuDemoModule */

  /***/
  function _src_app_showcase_components_panelmenu_panelmenudemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelMenuDemoModule", function () {
      return PanelMenuDemoModule;
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


    var _panelmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./panelmenudemo */
    "./src/app/showcase/components/panelmenu/panelmenudemo.ts");
    /* harmony import */


    var _panelmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./panelmenudemo-routing.module */
    "./src/app/showcase/components/panelmenu/panelmenudemo-routing.module.ts");
    /* harmony import */


    var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/panelmenu */
    "./src/app/components/panelmenu/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var PanelMenuDemoModule = /*#__PURE__*/_createClass(function PanelMenuDemoModule() {
      _classCallCheck(this, PanelMenuDemoModule);
    });

    PanelMenuDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _panelmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["PanelMenuDemoRoutingModule"], primeng_panelmenu__WEBPACK_IMPORTED_MODULE_5__["PanelMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_panelmenudemo__WEBPACK_IMPORTED_MODULE_3__["PanelMenuDemo"]]
    })], PanelMenuDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/panelmenu/panelmenudemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/panelmenu/panelmenudemo.ts ***!
    \****************************************************************/

  /*! exports provided: PanelMenuDemo */

  /***/
  function _src_app_showcase_components_panelmenu_panelmenudemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelMenuDemo", function () {
      return PanelMenuDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PanelMenuDemo = /*#__PURE__*/function () {
      function PanelMenuDemo() {
        _classCallCheck(this, PanelMenuDemo);
      }

      return _createClass(PanelMenuDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = [{
            label: 'File',
            icon: 'pi pi-pw pi-file',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'User',
                icon: 'pi pi-fw pi-user-plus'
              }, {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter'
              }]
            }, {
              label: 'Open',
              icon: 'pi pi-fw pi-external-link'
            }, {
              separator: true
            }, {
              label: 'Quit',
              icon: 'pi pi-fw pi-times'
            }]
          }, {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [{
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }, {
              label: 'Refresh',
              icon: 'pi pi-fw pi-refresh'
            }]
          }, {
            label: 'Help',
            icon: 'pi pi-fw pi-question',
            items: [{
              label: 'Contents',
              icon: 'pi pi-pi pi-bars'
            }, {
              label: 'Search',
              icon: 'pi pi-pi pi-search',
              items: [{
                label: 'Text',
                items: [{
                  label: 'Workspace'
                }]
              }, {
                label: 'User',
                icon: 'pi pi-fw pi-file'
              }]
            }]
          }, {
            label: 'Actions',
            icon: 'pi pi-fw pi-cog',
            items: [{
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [{
                label: 'Save',
                icon: 'pi pi-fw pi-save'
              }, {
                label: 'Update',
                icon: 'pi pi-fw pi-save'
              }]
            }, {
              label: 'Other',
              icon: 'pi pi-fw pi-tags',
              items: [{
                label: 'Delete',
                icon: 'pi pi-fw pi-minus'
              }]
            }]
          }];
        }
      }]);
    }();

    PanelMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./panelmenudemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/panelmenu/panelmenudemo.html"))["default"]
    })], PanelMenuDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-panelmenu-panelmenudemo-module-es5.js.map