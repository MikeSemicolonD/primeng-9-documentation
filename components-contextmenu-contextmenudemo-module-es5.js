function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-contextmenu-contextmenudemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/contextmenu/contextmenudemo.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/contextmenu/contextmenudemo.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_contextmenu_contextmenudemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ContextMenu</span>\n        <span>ContextMenu displays an overlay menu on right click of its target. This page has two menus, one for the document and one for the image. Note that \n        components like Table has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a special integration.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">    \n    <img #img src=\"assets/showcase/images/demo/sopranos/sopranos1.jpg\" alt=\"Logo\">\n\n    <p-contextMenu [global]=\"true\" [model]=\"items1\"></p-contextMenu>\n    \n    <p-contextMenu [target]=\"img\" [model]=\"items2\"></p-contextMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ContextMenuModule&#125; from 'primeng/contextmenu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>ContextMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>ContextMenu requires nested menuitems as its model and in its simplest form ContextMenu is attached to the document with global setting. .</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-contextMenu [global]=\"true\" [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n            <h3>Target</h3>\n            <p>ContextMenu can be attached to a particular element whose local template variable name is defined using the <i>target</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-contextMenu [target]=\"img\" [model]=\"items2\" &gt;&lt;/p-contextMenu&gt;\n\n&lt;img #img src=\"assets/showcase/images/primeng.svg\" alt=\"Logo\"&gt;\n</code>\n</pre>\n\n            <h3>Exclusive Integrations</h3>\n            <p>Some components like Table require special attention so they provide a different method to attach a context menu. Refer to \n            individual documentation of components with special integration like Table.</p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ContextMenuDemo &#123;\n\n    private items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>global</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Attaches the menu to document instead of a particular item.</td>\n                        </tr>\n                        <tr>\n                            <td>target</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Local template variable name of the element to attach the context menu.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>triggerEvent</td>\n                            <td>string</td>\n                            <td>contextmenu</td>\n                            <td>Event for which the menu must be displayed.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onShow</td>\n                            <td>-</td>\n                            <td>Callback to invoke when context menu is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>-</td>\n                            <td>Callback to invoke when context menu is hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event (optional): mouse event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>ui-contextmenu</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menu-list</td>\n                        <td>List element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem</td>\n                        <td>Menuitem element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-text</td>\n                        <td>Label of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-icon</td>\n                        <td>Icon of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-submenu-icon</td>\n                        <td>Arrow icon of a submenu.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/contextmenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-contextmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;img #img src=\"assets/showcase/images/demo/sopranos/sopranos1.jpg\" alt=\"Logo\"&gt;\n\n&lt;p-contextMenu [global]=\"true\" [model]=\"items1\"&gt;&lt;/p-contextMenu&gt;\n\n&lt;p-contextMenu [target]=\"img\" [model]=\"items2\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ContextMenuDemo &#123;\n\n    items: MenuItem[];\n    \n    items2: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items1 = [\n            &#123;\n                label: 'File',\n                icon: 'pi pi-fw pi-file',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator:true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'pi pi-fw pi-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'pi pi-fw pi-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'pi pi-fw pi-cog',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'pi pi-fw pi-tags',\n                        items: [\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;separator:true&#125;,\n            &#123;\n                label: 'Quit', icon: 'pi pi-fw pi-times'\n            &#125;\n        ];\n\n        this.items2 = [\n            &#123;\n                label: 'Family',\n                icon: 'pi pi-fw pi-users'\n            &#125;,\n            &#123;\n                label: 'Business',\n                icon: 'pi pi-fw pi-briefcase'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-contextmenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/contextmenu/contextmenudemo-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/showcase/components/contextmenu/contextmenudemo-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ContextMenuDemoRoutingModule */

  /***/
  function _src_app_showcase_components_contextmenu_contextmenudemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuDemoRoutingModule", function () {
      return ContextMenuDemoRoutingModule;
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


    var _contextmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contextmenudemo */
    "./src/app/showcase/components/contextmenu/contextmenudemo.ts");

    var ContextMenuDemoRoutingModule = /*#__PURE__*/_createClass(function ContextMenuDemoRoutingModule() {
      _classCallCheck(this, ContextMenuDemoRoutingModule);
    });

    ContextMenuDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _contextmenudemo__WEBPACK_IMPORTED_MODULE_3__["ContextMenuDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContextMenuDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/contextmenu/contextmenudemo.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/showcase/components/contextmenu/contextmenudemo.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ContextMenuDemoModule */

  /***/
  function _src_app_showcase_components_contextmenu_contextmenudemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuDemoModule", function () {
      return ContextMenuDemoModule;
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


    var _contextmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contextmenudemo */
    "./src/app/showcase/components/contextmenu/contextmenudemo.ts");
    /* harmony import */


    var _contextmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contextmenudemo-routing.module */
    "./src/app/showcase/components/contextmenu/contextmenudemo-routing.module.ts");
    /* harmony import */


    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/contextmenu */
    "./src/app/components/contextmenu/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var ContextMenuDemoModule = /*#__PURE__*/_createClass(function ContextMenuDemoModule() {
      _classCallCheck(this, ContextMenuDemoModule);
    });

    ContextMenuDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _contextmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContextMenuDemoRoutingModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]],
      declarations: [_contextmenudemo__WEBPACK_IMPORTED_MODULE_3__["ContextMenuDemo"]]
    })], ContextMenuDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/contextmenu/contextmenudemo.ts":
  /*!********************************************************************!*\
    !*** ./src/app/showcase/components/contextmenu/contextmenudemo.ts ***!
    \********************************************************************/

  /*! exports provided: ContextMenuDemo */

  /***/
  function _src_app_showcase_components_contextmenu_contextmenudemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuDemo", function () {
      return ContextMenuDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContextMenuDemo = /*#__PURE__*/function () {
      function ContextMenuDemo() {
        _classCallCheck(this, ContextMenuDemo);
      }

      return _createClass(ContextMenuDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items1 = [{
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'Project'
              }, {
                label: 'Other'
              }]
            }, {
              label: 'Open'
            }, {
              separator: true
            }, {
              label: 'Quit'
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
              label: 'Contents'
            }, {
              label: 'Search',
              icon: 'pi pi-fw pi-search',
              items: [{
                label: 'Text',
                items: [{
                  label: 'Workspace'
                }]
              }, {
                label: 'File'
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
          }, {
            separator: true
          }, {
            label: 'Quit',
            icon: 'pi pi-fw pi-times'
          }];
          this.items2 = [{
            label: 'Family',
            icon: 'pi pi-fw pi-users'
          }, {
            label: 'Business',
            icon: 'pi pi-fw pi-briefcase'
          }];
        }
      }]);
    }();

    ContextMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contextmenudemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/contextmenu/contextmenudemo.html"))["default"]
    })], ContextMenuDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-contextmenu-contextmenudemo-module-es5.js.map