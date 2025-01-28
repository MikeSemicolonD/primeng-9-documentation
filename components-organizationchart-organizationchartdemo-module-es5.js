function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-organizationchart-organizationchartdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/organizationchart/organizationchartdemo.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/organizationchart/organizationchartdemo.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_organizationchart_organizationchartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">OrganizationChart</span>\n        <span>OrganizationChart visualized hierarchical organization data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <h3 class=\"first\">Advanced</h3>\n    <p>Organization with advanced customization.</p>\n    <p-organizationChart [value]=\"data1\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"onNodeSelect($event)\"\n        styleClass=\"company\">\n        <ng-template let-node pTemplate=\"person\">\n            <div class=\"node-header ui-corner-top\">{{node.label}}</div>\n            <div class=\"node-content\">\n                <img src=\"assets/showcase/images/demo/organization/{{node.data.avatar}}\" width=\"32\">\n                <div>{{node.data.name}}</div>\n            </div>\n        </ng-template>\n        <ng-template let-node pTemplate=\"department\">\n            {{node.label}}\n        </ng-template>\n    </p-organizationChart>\n\n    <h3>Basic</h3>\n    <p>Hierarchical data with zero configuration.</p>\n    <p-organizationChart [value]=\"data2\"></p-organizationChart>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header =\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;OrganizationChartModule&#125; from 'primeng/organizationchart';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>OrganizationChart requires a model of TreeNode as its <i>value</i>. More information about TreeNode API is available at documentation of <a href=\"#\" [routerLink]=\"['/tree']\">tree</a> component.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TreeNode&#125; from 'primeng/api';\n</code>\n</pre>\n\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-organizationChart [value]=\"data\"&gt;&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponents implements OnInit &#123;\n\n    data: TreeNode[];\n\n    ngOnInit() &#123;\n        this.data = [&#123;\n            label: 'Root',\n            children: [\n                &#123;\n                    label: 'Child 1',\n                    children: [\n                        &#123;\n                            label: 'Grandchild 1.1'\n                        &#125;,\n                        &#123;\n                            label: 'Grandchild 1.2'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Child 2',\n                    children: [\n                        &#123;\n                            label: 'Child 2.1'\n                        &#125;,\n                        &#123;\n                            label: 'Child 2.2'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n&#125;\n</code>\n</pre>\n\n            <h3>Templating</h3>\n            <p>Label of the treenode is displayed inside the node content by default and templating enables enhanced customization. TreeNode API has type property which is\n            used to match the <i>pTemplate</i> type so templating can be done per node as well. In example below, nodes with type \"leaf\" are displayed with bold text. Note that a pTemplate\n            whose type is \"default\" applies to all nodes that have no type property defined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-organizationChart [value]=\"data\"\n    styleClass=\"company\"&gt;\n    &lt;ng-template let-node pTemplate=\"leaf\"&gt;\n        &lt;span style=\"font-weight:bold\"&gt;{{node.label}}&lt;/span&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-node pTemplate=\"default\"&gt;\n        &#123;&#123;node.label&#125;&#125;\n    &lt;/ng-template&gt;\n&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponents implements OnInit &#123;\n\n    data: TreeNode[];\n\n    ngOnInit() &#123;\n        this.data = [&#123;\n            label: 'Root',\n            children: [\n                &#123;\n                    label: 'Child 1',\n                    children: [\n                        &#123;\n                            label: 'Grandchild 1.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Grandchild 1.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Child 2',\n                    children: [\n                        &#123;\n                            label: 'Child 2.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Child 2.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n&#125;\n</code>\n</pre>\n\n            <h3>Expand/Collapse State</h3>\n            <p>In order to display a treenode as <i>expanded</i> by default, set \"expanded\" property as true in your model.</p>\n\n            <h3>Selection</h3>\n            <p>OrganizationChart supports 2 selection methods; single or multiple. Selection is enabled by setting <i>selectionMode</i> property and providing a single TreeNode or\n            an array of TreeNodes to reference the selections depending on the selection mode.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-organizationChart [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedNode\"&gt;&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyComponents implements OnInit &#123;\n\n    data: TreeNode[];\n\n    ngOnInit() &#123;\n        this.data = [&#123;\n            label: 'Root',\n            children: [\n                &#123;\n                    label: 'Child 1,\n                    children: [\n                        &#123;\n                            label: 'Grandchild 1.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Grandchild 1.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Child 2',\n                    children: [\n                        &#123;\n                            label: 'Child 2.1', type: 'leaf'\n                        &#125;,\n                        &#123;\n                            label: 'Child 2.2', type: 'leaf'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>null</td>\n                            <td>TreeNode[]</td>\n                            <td>An array of nested TreeNodes.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the selection mode, valid values \"single\" and \"multiple\".</td>\n                        </tr>\n                        <tr>\n                            <td>selection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>A single treenode instance or an array to refer to the selections.</td>\n                        </tr>\n                        <tr>\n                            <td>preserveSpace</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether the space allocated by a node is preserved when hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        <h3>Events</h3>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Parameters</th>\n                    <th>Description</th>\n                </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>onNodeSelect</td>\n                        <td>event.originalEvent: browser event <br>\n                            event.node: Selected node instance.</td>\n                        <td>Callback to invoke when a node is selected.</td>\n                    </tr>\n                    <tr>\n                        <td>onNodeUnselect</td>\n                        <td>event.originalEvent: browser event <br>\n                            event.node: Unselected node instance.</td>\n                        <td>Callback to invoke when a node is unselected.</td>\n                    </tr>\n                    <tr>\n                        <td>onNodeExpand</td>\n                        <td>event.originalEvent: browser event <br>\n                            event.node: Expanded node instance.</td>\n                        <td>Callback to invoke when a node is expanded.</td>\n                    </tr>\n                    <tr>\n                        <td>onNodeCollapse</td>\n                        <td>event.originalEvent: browser event <br>\n                            event.node: Collapsed node instance.</td>\n                        <td>Callback to invoke when a node is collapsed.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Styling</h3>\n        <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n        <div class=\"doc-tablewrapper\">\n            <table class=\"doc-table\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>ui-organizationchart</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-table</td>\n                        <td>Table container of a node.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-lines</td>\n                        <td>Connector lines container.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-nodes</td>\n                        <td>Contained of node children.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-line-right</td>\n                        <td>Right side line of a node connector.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-line-left</td>\n                        <td>Left side line of a node connector.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-organizationchart-line-top</td>\n                        <td>Top side line of a node connector.</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <h3>Dependencies</h3>\n        <p>None.</p>\n\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/organizationchart\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-organizationchart-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;h3 class=\"first\"&gt;Advanced&lt;/h3&gt;\n&lt;p&gt;Organization with advanced customization.&lt;/p&gt;\n&lt;p-organizationChart [value]=\"data1\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"onNodeSelect($event)\"\n    styleClass=\"company\"&gt;\n    &lt;ng-template let-node pTemplate=\"person\"&gt;\n        &lt;div class=\"node-header ui-corner-top\"&gt;&#123;node.label&#125;&lt;/div&gt;\n        &lt;div class=\"node-content\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/organization/&#123;node.data.avatar&#125;\" width=\"32\"&gt;\n            &lt;div&gt;&#123;node.data.name&#125;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-node pTemplate=\"department\"&gt;\n        &#123;node.label&#125;\n    &lt;/ng-template&gt;\n&lt;/p-organizationChart&gt;\n\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p&gt;Hierarchical data with zero configuration.&lt;/p&gt;\n&lt;p-organizationChart [value]=\"data2\"&gt;&lt;/p-organizationChart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './organizationchartdemo.html',\n    providers: [MessageService],\n    styles: [`\n        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person &#123;\n            padding: 0;\n            border: 0 none;\n        &#125;\n\n        .node-header,.node-content &#123;\n            padding: .5em .7em;\n        &#125;\n\n        .node-header &#123;\n            background-color: #495ebb;\n            color: #ffffff;\n        &#125;\n\n        .node-content &#123;\n            text-align: center;\n            border: 1px solid #495ebb;\n        &#125;\n\n        .node-content img &#123;\n            border-radius: 50%;\n        &#125;\n\n        .department-cfo &#123;\n            background-color: #7247bc;\n            color: #ffffff;\n        &#125;\n\n        .department-coo &#123;\n            background-color: #a534b6;\n            color: #ffffff;\n        &#125;\n\n        .department-cto &#123;\n            background-color: #e9286f;\n            color: #ffffff;\n        &#125;\n\n        .ui-person .ui-node-toggler &#123;\n            color: #495ebb !important;\n        &#125;\n\n        .department-cto .ui-node-toggler &#123;\n            color: #8a0a39 !important;\n        &#125;\n    `],\n    encapsulation: ViewEncapsulation.None\n&#125;)\nexport class OrganizationChartDemo implements OnInit &#123;\n\n    data1: TreeNode[];\n\n    data2: TreeNode[];\n\n    selectedNode: TreeNode;\n\n    constructor(private messageService: MessageService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.data1 = [&#123;\n            label: 'CEO',\n            type: 'person',\n            styleClass: 'ui-person',\n            expanded: true,\n            data: &#123;name:'Walter White', 'avatar': 'walter.jpg'&#125;,\n            children: [\n                &#123;\n                    label: 'CFO',\n                    type: 'person',\n                    styleClass: 'ui-person',\n                    expanded: true,\n                    data: &#123;name:'Saul Goodman', 'avatar': 'saul.jpg'&#125;,\n                    children:[&#123;\n                        label: 'Tax',\n                        styleClass: 'department-cfo'\n                    &#125;,\n                    &#123;\n                        label: 'Legal',\n                        styleClass: 'department-cfo'\n                    &#125;],\n                &#125;,\n                &#123;\n                    label: 'COO',\n                    type: 'person',\n                    styleClass: 'ui-person',\n                    expanded: true,\n                    data: &#123;name:'Mike E.', 'avatar': 'mike.jpg'&#125;,\n                    children:[&#123;\n                        label: 'Operations',\n                        styleClass: 'department-coo'\n                    &#125;]\n                &#125;,\n                &#123;\n                    label: 'CTO',\n                    type: 'person',\n                    styleClass: 'ui-person',\n                    expanded: true,\n                    data: &#123;name:'Jesse Pinkman', 'avatar': 'jesse.jpg'&#125;,\n                    children:[&#123;\n                        label: 'Development',\n                        styleClass: 'department-cto',\n                        expanded: true,\n                        children:[&#123;\n                            label: 'Analysis',\n                            styleClass: 'department-cto'\n                        &#125;,\n                        &#123;\n                            label: 'Front End',\n                            styleClass: 'department-cto'\n                        &#125;,\n                        &#123;\n                            label: 'Back End',\n                            styleClass: 'department-cto'\n                        &#125;]\n                    &#125;,\n                    &#123;\n                        label: 'QA',\n                        styleClass: 'department-cto'\n                    &#125;,\n                    &#123;\n                        label: 'R&amp;D',\n                        styleClass: 'department-cto'\n                    &#125;]\n                &#125;\n            ]\n        &#125;];\n\n        this.data2 = [&#123;\n            label: 'F.C Barcelona',\n            expanded: true,\n            children: [\n                &#123;\n                    label: 'F.C Barcelona',\n                    expanded: true,\n                    children: [\n                        &#123;\n                            label: 'Chelsea FC'\n                        &#125;,\n                        &#123;\n                            label: 'F.C. Barcelona'\n                        &#125;\n                    ]\n                &#125;,\n                &#123;\n                    label: 'Real Madrid',\n                    expanded: true,\n                    children: [\n                        &#123;\n                            label: 'Bayern Munich'\n                        &#125;,\n                        &#123;\n                            label: 'Real Madrid'\n                        &#125;\n                    ]\n                &#125;\n            ]\n        &#125;];\n    &#125;\n\n    onNodeSelect(event) &#123;\n        this.messageService.add(&#123;severity: 'success', summary: 'Node Selected', detail: event.node.label&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-organizationchart-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/components/panel/panel.ts":
  /*!*******************************************!*\
    !*** ./src/app/components/panel/panel.ts ***!
    \*******************************************/

  /*! exports provided: Panel, PanelModule */

  /***/
  function _src_app_components_panel_panelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Panel", function () {
      return Panel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelModule", function () {
      return PanelModule;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var idx = 0;

    var Panel = /*#__PURE__*/function () {
      function Panel(el) {
        _classCallCheck(this, Panel);

        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'pi pi-plus';
        this.collapseIcon = 'pi pi-minus';
        this.showHeader = true;
        this.toggler = "icon";
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = "ui-panel-".concat(idx++);
      }

      return _createClass(Panel, [{
        key: "onHeaderClick",
        value: function onHeaderClick(event) {
          if (this.toggler === 'header') {
            this.toggle(event);
          }
        }
      }, {
        key: "onIconClick",
        value: function onIconClick(event) {
          if (this.toggler === 'icon') {
            this.toggle(event);
          }
        }
      }, {
        key: "toggle",
        value: function toggle(event) {
          if (this.animating) {
            return false;
          }

          this.animating = true;
          this.onBeforeToggle.emit({
            originalEvent: event,
            collapsed: this.collapsed
          });

          if (this.toggleable) {
            if (this.collapsed) this.expand(event);else this.collapse(event);
          }

          event.preventDefault();
        }
      }, {
        key: "expand",
        value: function expand(event) {
          this.collapsed = false;
          this.collapsedChange.emit(this.collapsed);
        }
      }, {
        key: "collapse",
        value: function collapse(event) {
          this.collapsed = true;
          this.collapsedChange.emit(this.collapsed);
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "onToggleDone",
        value: function onToggleDone(event) {
          this.animating = false;
          this.onAfterToggle.emit({
            originalEvent: event,
            collapsed: this.collapsed
          });
        }
      }]);
    }();

    Panel.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Panel.prototype, "toggleable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Panel.prototype, "collapsed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Panel.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "expandIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "collapseIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Panel.prototype, "showHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "toggler", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Panel.prototype, "collapsedChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Panel.prototype, "onBeforeToggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Panel.prototype, "onAfterToggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "transitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["Footer"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Panel.prototype, "footerFacet", void 0);
    Panel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-panel',
      template: "\n        <div [attr.id]=\"id\" [ngClass]=\"'ui-panel ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div [ngClass]=\"{'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all': true, 'ui-panel-titlebar-clickable': (toggleable && toggler === 'header')}\" \n                *ngIf=\"showHeader\" (click)=\"onHeaderClick($event)\" [attr.id]=\"id + '-titlebar'\">\n                <span class=\"ui-panel-title\" *ngIf=\"header\" [attr.id]=\"id + '_header'\">{{header}}</span>\n                <ng-content select=\"p-header\"></ng-content>\n                <a *ngIf=\"toggleable\" [attr.id]=\"id + '-label'\" class=\"ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default\" tabindex=\"0\"\n                    (click)=\"onIconClick($event)\" (keydown.enter)=\"onIconClick($event)\" [attr.aria-controls]=\"id + '-content'\" role=\"tab\" [attr.aria-expanded]=\"!collapsed\">\n                    <span [class]=\"collapsed ? expandIcon : collapseIcon\"></span>\n                </a>\n            </div>\n            <div [attr.id]=\"id + '-content'\" class=\"ui-panel-content-wrapper\" [@panelContent]=\"collapsed ? {value: 'hidden', params: {transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity:'0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1'}}\" (@panelContent.done)=\"onToggleDone($event)\"\n                [ngClass]=\"{'ui-panel-content-wrapper-overflown': collapsed||animating}\"\n                role=\"region\" [attr.aria-hidden]=\"collapsed\" [attr.aria-labelledby]=\"id  + '-titlebar'\">\n                <div class=\"ui-panel-content ui-widget-content\">\n                    <ng-content></ng-content>\n                </div>\n                \n                <div class=\"ui-panel-footer ui-widget-content\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('panelContent', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '{{height}}',
        opacity: '{{opacity}}'
      }), {
        params: {
          height: '0',
          opacity: '0'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], Panel);

    var PanelModule = /*#__PURE__*/_createClass(function PanelModule() {
      _classCallCheck(this, PanelModule);
    });

    PanelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [Panel, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: [Panel]
    })], PanelModule);
    /***/
  },

  /***/
  "./src/app/components/panel/public_api.ts":
  /*!************************************************!*\
    !*** ./src/app/components/panel/public_api.ts ***!
    \************************************************/

  /*! exports provided: Panel, PanelModule */

  /***/
  function _src_app_components_panel_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./panel */
    "./src/app/components/panel/panel.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Panel", function () {
      return _panel__WEBPACK_IMPORTED_MODULE_0__["Panel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PanelModule", function () {
      return _panel__WEBPACK_IMPORTED_MODULE_0__["PanelModule"];
    });
    /***/

  },

  /***/
  "./src/app/showcase/components/organizationchart/organizationchartdemo-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/showcase/components/organizationchart/organizationchartdemo-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: OrganizationChartDemoRoutingModule */

  /***/
  function _src_app_showcase_components_organizationchart_organizationchartdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChartDemoRoutingModule", function () {
      return OrganizationChartDemoRoutingModule;
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


    var _organizationchartdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./organizationchartdemo */
    "./src/app/showcase/components/organizationchart/organizationchartdemo.ts");

    var OrganizationChartDemoRoutingModule = /*#__PURE__*/_createClass(function OrganizationChartDemoRoutingModule() {
      _classCallCheck(this, OrganizationChartDemoRoutingModule);
    });

    OrganizationChartDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _organizationchartdemo__WEBPACK_IMPORTED_MODULE_3__["OrganizationChartDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrganizationChartDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/organizationchart/organizationchartdemo.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/showcase/components/organizationchart/organizationchartdemo.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: OrganizationChartDemoModule */

  /***/
  function _src_app_showcase_components_organizationchart_organizationchartdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChartDemoModule", function () {
      return OrganizationChartDemoModule;
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


    var _organizationchartdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./organizationchartdemo */
    "./src/app/showcase/components/organizationchart/organizationchartdemo.ts");
    /* harmony import */


    var _organizationchartdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./organizationchartdemo-routing.module */
    "./src/app/showcase/components/organizationchart/organizationchartdemo-routing.module.ts");
    /* harmony import */


    var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/organizationchart */
    "./src/app/components/organizationchart/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/panel */
    "./src/app/components/panel/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var OrganizationChartDemoModule = /*#__PURE__*/_createClass(function OrganizationChartDemoModule() {
      _classCallCheck(this, OrganizationChartDemoModule);
    });

    OrganizationChartDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _organizationchartdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrganizationChartDemoRoutingModule"], primeng_organizationchart__WEBPACK_IMPORTED_MODULE_5__["OrganizationChartModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_organizationchartdemo__WEBPACK_IMPORTED_MODULE_3__["OrganizationChartDemo"]]
    })], OrganizationChartDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/organizationchart/organizationchartdemo.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/showcase/components/organizationchart/organizationchartdemo.ts ***!
    \********************************************************************************/

  /*! exports provided: OrganizationChartDemo */

  /***/
  function _src_app_showcase_components_organizationchart_organizationchartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChartDemo", function () {
      return OrganizationChartDemo;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var OrganizationChartDemo = /*#__PURE__*/function () {
      function OrganizationChartDemo(messageService) {
        _classCallCheck(this, OrganizationChartDemo);

        this.messageService = messageService;
      }

      return _createClass(OrganizationChartDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data1 = [{
            label: 'CEO',
            type: 'person',
            styleClass: 'ui-person',
            expanded: true,
            data: {
              name: 'Walter White',
              'avatar': 'walter.jpg'
            },
            children: [{
              label: 'CFO',
              type: 'person',
              styleClass: 'ui-person',
              expanded: true,
              data: {
                name: 'Saul Goodman',
                'avatar': 'saul.jpg'
              },
              children: [{
                label: 'Tax',
                styleClass: 'department-cfo'
              }, {
                label: 'Legal',
                styleClass: 'department-cfo'
              }]
            }, {
              label: 'COO',
              type: 'person',
              styleClass: 'ui-person',
              expanded: true,
              data: {
                name: 'Mike E.',
                'avatar': 'mike.jpg'
              },
              children: [{
                label: 'Operations',
                styleClass: 'department-coo'
              }]
            }, {
              label: 'CTO',
              type: 'person',
              styleClass: 'ui-person',
              expanded: true,
              data: {
                name: 'Jesse Pinkman',
                'avatar': 'jesse.jpg'
              },
              children: [{
                label: 'Development',
                styleClass: 'department-cto',
                expanded: true,
                children: [{
                  label: 'Analysis',
                  styleClass: 'department-cto'
                }, {
                  label: 'Front End',
                  styleClass: 'department-cto'
                }, {
                  label: 'Back End',
                  styleClass: 'department-cto'
                }]
              }, {
                label: 'QA',
                styleClass: 'department-cto'
              }, {
                label: 'R&D',
                styleClass: 'department-cto'
              }]
            }]
          }];
          this.data2 = [{
            label: 'F.C Barcelona',
            expanded: true,
            children: [{
              label: 'F.C Barcelona',
              expanded: true,
              children: [{
                label: 'Chelsea FC'
              }, {
                label: 'F.C. Barcelona'
              }]
            }, {
              label: 'Real Madrid',
              expanded: true,
              children: [{
                label: 'Bayern Munich'
              }, {
                label: 'Real Madrid'
              }]
            }]
          }];
        }
      }, {
        key: "onNodeSelect",
        value: function onNodeSelect(event) {
          this.messageService.add({
            severity: 'success',
            summary: 'Node Selected',
            detail: event.node.label
          });
        }
      }]);
    }();

    OrganizationChartDemo.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    OrganizationChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./organizationchartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/organizationchart/organizationchartdemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: ["\n        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person {\n            padding: 0;\n            border: 0 none;\n        }\n        \n        .node-header,.node-content {\n            padding: .5em .7em;\n        }\n        \n        .node-header {\n            background-color: #495ebb;\n            color: #ffffff;\n        }\n        \n        .node-content {\n            text-align: center;\n            border: 1px solid #495ebb;\n        }\n        \n        .node-content img {\n            border-radius: 50%;\n        }\n        \n        .ui-organizationchart-node-content.department-cfo {\n            background-color: #7247bc;\n            color: #ffffff;\n        }\n        \n        .ui-organizationchart-node-content.department-coo {\n            background-color: #a534b6;\n            color: #ffffff;\n        }\n        \n        .ui-organizationchart-node-content.department-cto {\n            background-color: #e9286f;\n            color: #ffffff;\n        }\n        \n        .ui-person .ui-node-toggler {\n            color: #495ebb !important;\n        }\n        \n        .department-cto .ui-node-toggler {\n            color: #8a0a39 !important;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], OrganizationChartDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-organizationchart-organizationchartdemo-module-es5.js.map