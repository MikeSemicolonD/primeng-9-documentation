function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slidemenu-slidemenudemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/slidemenu/slidemenudemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/slidemenu/slidemenudemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_slidemenu_slidemenudemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Slide Menu</span>\n        <span>SlideMenu displays submenus with slide animation.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-slideMenu [model]=\"items\" [viewportHeight]=\"250\"></p-slideMenu>\n\n    <h3>Popup</h3>\n    <button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\n    <p-slideMenu #menu [model]=\"items\" [popup]=\"true\" [viewportHeight]=\"250\"></p-slideMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SlideMenuModule&#125; from 'primeng/slidemenu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>SlideMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>SlideMenu requires nested menuitems as its <i>model</i>.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu [model]=\"items\"&gt;&lt;/p-slideMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SlideMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Popup Mode</h3>\n            <p>SlideMenu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \n                    from the anchor element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Effects</h3>\n            <p>The easing function to use is \"ease-out\" by default and this can be customized using easing property. \n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu #menu [model]=\"items\" effectDuration=\"1000\" easing=\"ease-in\"&gt;&lt;/p-slideMenu&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>popup</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if menu would displayed as a popup.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>easing</td>\n                            <td>string</td>\n                            <td>ease-out</td>\n                            <td>Easing animation to use for sliding.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>any</td>\n                            <td>250</td>\n                            <td>Duration of the sliding animation in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>backLabel</td>\n                            <td>string</td>\n                            <td>Back</td>\n                            <td>Label of element to navigate back.</td>\n                        </tr>\n                        <tr>\n                            <td>menuWidth</td>\n                            <td>number</td>\n                            <td>180</td>\n                            <td>Width of the submenus.</td>\n                        </tr>\n                        <tr>\n                            <td>viewportHeight</td>\n                            <td>number</td>\n                            <td>175</td>\n                            <td>Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>225ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>195ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-slidemenu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-wrapper</td>\n                            <td>Wrapper of content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-backward</td>\n                            <td>Element to navigate to previous menu on click.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu-list</td>\n                            <td>List element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-submenu-icon</td>\n                            <td>Arrow icon of a submenu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slidemenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-slidemenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-slideMenu [model]=\"items\" [viewportHeight]=\"250\"&gt;&lt;/p-slideMenu&gt;\n\n&lt;h3&gt;Popup&lt;/h3&gt;\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\" [viewportHeight]=\"250\"&gt;&lt;/p-slideMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SlideMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'pi pi-fw pi-file',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator:true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'pi pi-fw pi-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'pi pi-fw pi-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'pi pi-fw pi-cog',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'pi pi-fw pi-tags',\n                        items: [\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;separator:true&#125;,\n            &#123;\n                label: 'Quit', icon: 'pi pi-fw pi-times'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-slidemenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: SlideMenuDemoRoutingModule */

  /***/
  function _src_app_showcase_components_slidemenu_slidemenudemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideMenuDemoRoutingModule", function () {
      return SlideMenuDemoRoutingModule;
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


    var _slidemenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slidemenudemo */
    "./src/app/showcase/components/slidemenu/slidemenudemo.ts");

    var SlideMenuDemoRoutingModule = /*#__PURE__*/_createClass(function SlideMenuDemoRoutingModule() {
      _classCallCheck(this, SlideMenuDemoRoutingModule);
    });

    SlideMenuDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _slidemenudemo__WEBPACK_IMPORTED_MODULE_3__["SlideMenuDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SlideMenuDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/slidemenu/slidemenudemo.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/slidemenu/slidemenudemo.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SlideMenuDemoModule */

  /***/
  function _src_app_showcase_components_slidemenu_slidemenudemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideMenuDemoModule", function () {
      return SlideMenuDemoModule;
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


    var _slidemenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slidemenudemo */
    "./src/app/showcase/components/slidemenu/slidemenudemo.ts");
    /* harmony import */


    var _slidemenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./slidemenudemo-routing.module */
    "./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts");
    /* harmony import */


    var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/slidemenu */
    "./src/app/components/slidemenu/public_api.ts");
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

    var SlideMenuDemoModule = /*#__PURE__*/_createClass(function SlideMenuDemoModule() {
      _classCallCheck(this, SlideMenuDemoModule);
    });

    SlideMenuDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _slidemenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["SlideMenuDemoRoutingModule"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_5__["SlideMenuModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]],
      declarations: [_slidemenudemo__WEBPACK_IMPORTED_MODULE_3__["SlideMenuDemo"]]
    })], SlideMenuDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/slidemenu/slidemenudemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/slidemenu/slidemenudemo.ts ***!
    \****************************************************************/

  /*! exports provided: SlideMenuDemo */

  /***/
  function _src_app_showcase_components_slidemenu_slidemenudemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideMenuDemo", function () {
      return SlideMenuDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SlideMenuDemo = /*#__PURE__*/function () {
      function SlideMenuDemo() {
        _classCallCheck(this, SlideMenuDemo);
      }

      return _createClass(SlideMenuDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = [{
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
        }
      }]);
    }();

    SlideMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./slidemenudemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/slidemenu/slidemenudemo.html"))["default"],
      styles: ["\n        :host ::ng-deep .ui-slidemenu {\n            width: 13.5em\n        }\n    "]
    })], SlideMenuDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-slidemenu-slidemenudemo-module-es5.js.map