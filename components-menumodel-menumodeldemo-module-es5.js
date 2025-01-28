function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menumodel-menumodeldemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menumodel/menumodeldemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menumodel/menumodeldemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_menumodel_menumodeldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">MenuModel API</span>\n        <span>PrimeNG menus components share a common api to specify the menuitems and submenus.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation implementation\">\n    <h3 class=\"first\">MenuItem</h3>\n    <p>Core of the api is MenuItem class that defines various options such as the label, icon and children of an item in a menu. Example below\n    is a sample configuration with Menu component.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menu [model]=\"items\"&gt;&lt;/p-menu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MenuModule&#125; from 'primeng/menu';\nimport &#123;MenuItem&#125; from 'primeng/api';\nimport &#123;MegaMenuItem&#125; from 'primeng/api';  //required when using MegaMenu\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n\n    private items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'pi pi-plus'&#125;,\n                &#123;label: 'Open', icon: 'pi pi-download'&#125;\n            ]\n        &#125;,\n        &#123;\n            label: 'Edit',\n            items: [\n                &#123;label: 'Undo', icon: 'pi pi-refresh'&#125;,\n                &#123;label: 'Redo', icon: 'pi pi-repeat'&#125;\n            ]\n        &#125;];\n    &#125;\n&#125;\n</code>\n</pre>\n\n    <h3>MegaMenu</h3>\n    <p>All menu components except MegaMenu uses MenuItem[] as the model, in the case of MegaMenu root level items should be MegaMenuItem[] whereas\n        nested submenus can be MenuItem[]. See the <a [routerLink]=\"['/menumodel']\">MegaMenu</a> documentation for samples.</p>\n\n    <p>MenuItem provides the following properties. Note that not all of them may be utilized by the menu component.</p>\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Type</th>\n                    <th>Default</th>\n                    <th>Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>id</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Identifier of the element.</td>\n                </tr>\n                <tr>\n                    <td>label</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Text of the item.</td>\n                </tr>\n                <tr>\n                    <td>icon</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Icon of the item.</td>\n                </tr>\n                <tr>\n                    <td>command</td>\n                    <td>function</td>\n                    <td>null</td>\n                    <td>Callback to execute when item is clicked.</td>\n                </tr>\n                <tr>\n                    <td>url</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>External link to navigate when item is clicked.</td>\n                </tr>\n                <tr>\n                    <td>routerLink</td>\n                    <td>array</td>\n                    <td>null</td>\n                    <td>RouterLink definition for internal navigation.</td>\n                </tr>\n                <tr>\n                    <td>routerLinkActiveOptions</td>\n                    <td>object</td>\n                    <td>null</td>\n                    <td>Configuration for active router link.</td>\n                </tr>\n                <tr>\n                    <td>queryParams</td>\n                    <td>object</td>\n                    <td>null</td>\n                    <td>Query parameters for internal navigation via routerLink.</td>\n                </tr>\n                <tr>\n                    <td>fragment</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Sets the hash fragment for the URL.</td>\n                </tr>\n                <tr>\n                    <td>queryParamsHandling</td>\n                    <td>QueryParamsHandling</td>\n                    <td>null</td>\n                    <td>How to handle query parameters in the router link for the next navigation. One of:<br /><br />\n\n                        merge : Merge new with current parameters.<br />\n                        preserve : Preserve current parameters.k.</td>\n                </tr>\n                <tr>\n                    <td>preserveFragment</td>\n                    <td>boolean</td>\n                    <td>false</td>\n                    <td>When true, preserves the URL fragment for the next navigation.</td>\n                </tr>\n                <tr>\n                    <td>skipLocationChange</td>\n                    <td>boolean</td>\n                    <td>null</td>\n                    <td>When true, navigates without pushing a new state into history.</td>\n                </tr>\n                <tr>\n                    <td>replaceUrl</td>\n                    <td>boolean</td>\n                    <td>null</td>\n                    <td>When true, navigates while replacing the current state in history.</td>\n                </tr>\n                <tr>\n                    <td>state</td>\n                    <td>object</td>\n                    <td>null</td>\n                    <td>Developer-defined state that can be passed to any navigation.</td>\n                </tr>\n                <tr>\n                    <td>items</td>\n                    <td>array</td>\n                    <td>null</td>\n                    <td>An array of children menuitems.</td>\n                </tr>\n                <tr>\n                    <td>expanded</td>\n                    <td>boolean</td>\n                    <td>false</td>\n                    <td>Visibility of submenu.</td>\n                </tr>\n                <tr>\n                    <td>disabled</td>\n                    <td>boolean</td>\n                    <td>false</td>\n                    <td>When set as true, disables the menuitem.</td>\n                </tr>\n                <tr>\n                    <td>visible</td>\n                    <td>boolean</td>\n                    <td>true</td>\n                    <td>Whether the dom element of menuitem is created or not.</td>\n                </tr>\n                <tr>\n                    <td>target</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Specifies where to open the linked document.</td>\n                </tr>\n                <tr>\n                    <td>separator</td>\n                    <td>boolean</td>\n                    <td>false</td>\n                    <td>Defines the item as a separator.</td>\n                </tr>\n                <tr>\n                    <td>style</td>\n                    <td>object</td>\n                    <td>null</td>\n                    <td>Inline style of the menuitem.</td>\n                </tr>\n                <tr>\n                    <td>styleClass</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Style class of the menuitem.</td>\n                </tr>\n                <tr>\n                    <td>badge</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Value of the badge.</td>\n                </tr>\n                <tr>\n                    <td>badgeStyleClass</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Style class of the badge.</td>\n                </tr>\n                <tr>\n                    <td>title</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Tooltip text of the item.</td>\n                </tr>\n                <tr>\n                    <td>automationId</td>\n                    <td>any</td>\n                    <td>null</td>\n                    <td>Value of HTML data-* attribute.</td>\n                </tr>\n                <tr>\n                    <td>tabindex</td>\n                    <td>string</td>\n                    <td>0</td>\n                    <td>Specifies tab order of the item.</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <h4>Command</h4>\n    <p>The function to invoke when an item is clicked is defined using the <i>command</i> property.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n\n    private items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'pi pi-plus', command: (event) => &#123;\n                    //event.originalEvent: Browser event\n                    //event.item: menuitem metadata\n                }}\n            ]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n    <h4>Navigation</h4>\n    <p>Navigation is specified using url property for external links and with <i>routerLink</i> for internal ones. If a menuitem has an active route, <i>ui-state-active</i> style class is added as an indicator. Active route link can be\n    configured with <i>routerLinkActiveOptions</i> property of MenuItem API.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenuDemo &#123;\n\n    private items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [&#123;\n            label: 'File',\n            items: [\n                &#123;label: 'New', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'&#125;,\n                &#123;label: 'Open', icon: 'pi pi-download', routerLink: ['/pagename']&#125;\n                &#123;label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: &#123;'recent': 'true'&#125;&#125;\n            ]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n</div>\n";
    /***/
  },

  /***/
  "./src/app/components/codehighlighter/codehighlighter.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/codehighlighter/codehighlighter.ts ***!
    \***************************************************************/

  /*! exports provided: CodeHighlighter, CodeHighlighterModule */

  /***/
  function _src_app_components_codehighlighter_codehighlighterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function () {
      return CodeHighlighter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function () {
      return CodeHighlighterModule;
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

    var CodeHighlighter = /*#__PURE__*/function () {
      function CodeHighlighter(el) {
        _classCallCheck(this, CodeHighlighter);

        this.el = el;
      }

      return _createClass(CodeHighlighter, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
          }
        }
      }]);
    }();

    CodeHighlighter.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    CodeHighlighter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pCode]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], CodeHighlighter);

    var CodeHighlighterModule = /*#__PURE__*/_createClass(function CodeHighlighterModule() {
      _classCallCheck(this, CodeHighlighterModule);
    });

    CodeHighlighterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [CodeHighlighter],
      declarations: [CodeHighlighter]
    })], CodeHighlighterModule);
    /***/
  },

  /***/
  "./src/app/components/codehighlighter/public_api.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/codehighlighter/public_api.ts ***!
    \**********************************************************/

  /*! exports provided: CodeHighlighter, CodeHighlighterModule */

  /***/
  function _src_app_components_codehighlighter_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _codehighlighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./codehighlighter */
    "./src/app/components/codehighlighter/codehighlighter.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function () {
      return _codehighlighter__WEBPACK_IMPORTED_MODULE_0__["CodeHighlighter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function () {
      return _codehighlighter__WEBPACK_IMPORTED_MODULE_0__["CodeHighlighterModule"];
    });
    /***/

  },

  /***/
  "./src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: MenuModelDemoRoutingModule */

  /***/
  function _src_app_showcase_components_menumodel_menumodeldemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuModelDemoRoutingModule", function () {
      return MenuModelDemoRoutingModule;
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


    var _menumodeldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menumodeldemo */
    "./src/app/showcase/components/menumodel/menumodeldemo.ts");

    var MenuModelDemoRoutingModule = /*#__PURE__*/_createClass(function MenuModelDemoRoutingModule() {
      _classCallCheck(this, MenuModelDemoRoutingModule);
    });

    MenuModelDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _menumodeldemo__WEBPACK_IMPORTED_MODULE_3__["MenuModelDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuModelDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/menumodel/menumodeldemo.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/menumodel/menumodeldemo.module.ts ***!
    \***********************************************************************/

  /*! exports provided: MenuModelDemoModule */

  /***/
  function _src_app_showcase_components_menumodel_menumodeldemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuModelDemoModule", function () {
      return MenuModelDemoModule;
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


    var _menumodeldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menumodeldemo */
    "./src/app/showcase/components/menumodel/menumodeldemo.ts");
    /* harmony import */


    var _menumodeldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menumodeldemo-routing.module */
    "./src/app/showcase/components/menumodel/menumodeldemo-routing.module.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var MenuModelDemoModule = /*#__PURE__*/_createClass(function MenuModelDemoModule() {
      _classCallCheck(this, MenuModelDemoModule);
    });

    MenuModelDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _menumodeldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["MenuModelDemoRoutingModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__["CodeHighlighterModule"]],
      declarations: [_menumodeldemo__WEBPACK_IMPORTED_MODULE_3__["MenuModelDemo"]]
    })], MenuModelDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/menumodel/menumodeldemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/menumodel/menumodeldemo.ts ***!
    \****************************************************************/

  /*! exports provided: MenuModelDemo */

  /***/
  function _src_app_showcase_components_menumodel_menumodeldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuModelDemo", function () {
      return MenuModelDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuModelDemo = /*#__PURE__*/_createClass(function MenuModelDemo() {
      _classCallCheck(this, MenuModelDemo);
    });

    MenuModelDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menumodeldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menumodel/menumodeldemo.html"))["default"]
    })], MenuModelDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-menumodel-menumodeldemo-module-es5.js.map