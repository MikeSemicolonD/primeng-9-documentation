function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-overlaypanel-overlaypaneldemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/overlaypanel/overlaypaneldemo.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/overlaypanel/overlaypaneldemo.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_overlaypanel_overlaypaneldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">OverlayPanel</span>\n        <span>OverlayPanel is a container component that can overlay other components on page.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p>Click the button to show the panel.</p>\n    <button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"></button>\n\n    <p-overlayPanel #op1>\n        <ng-template pTemplate>\n            <img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" />\n        </ng-template>\n    </p-overlayPanel>\n    \n    <h3>Customized</h3>\n    <p>This OverlayPanel gets displayed on hover of the icon and displays a close icon.</p>\n    <i class=\"pi pi-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"></i>\n    \n    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n        <ng-template pTemplate>\n            <p-table [value]=\"cars1\" [style]=\"{width: '500px'}\" [paginator]=\"true\" [rows]=\"5\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th pSortableColumn=\"vin\">Vin <p-sortIcon field=\"vin\"></p-sortIcon></th>\n                        <th pSortableColumn=\"year\">Year <p-sortIcon field=\"year\"></p-sortIcon></th>\n                        <th pSortableColumn=\"brand\">Brand <p-sortIcon field=\"brand\"></p-sortIcon></th>\n                        <th pSortableColumn=\"color\">Color <p-sortIcon field=\"color\"></p-sortIcon></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-car>\n                    <tr>\n                        <td>{{car.vin}}</td>\n                        <td>{{car.year}}</td>\n                        <td>{{car.brand}}</td>\n                        <td>{{car.color}}</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </ng-template>\n    </p-overlayPanel>\n    \n    <h3>Table Integration</h3>\n    <p-table [value]=\"cars2\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th style=\"width: 4em\"></th>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Brand</th>\n                <th>Color</th>\n                \n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-car>\n            <tr>\n                <td>\n                    <button type=\"button\" pButton (click)=\"selectCar($event,car,op3)\" icon=\"pi pi-search\"></button>\n                </td>\n                <td>{{car.vin}}</td>\n                <td>{{car.year}}</td>\n                <td>{{car.brand}}</td>\n                <td>{{car.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n    \n    <p-overlayPanel #op3>\n        <ng-template pTemplate>\n            <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\" width=\"120\" height=\"120\" *ngIf=\"selectedCar\"/>\n        </ng-template>\n    </p-overlayPanel>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;OverlayPanelModule&#125; from 'primeng/overlaypanel';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Content is defined with an ng-template and overlay is displayed using the <i>show</i> or <i>toggle</i> method of a local ng-template variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-overlayPanel #op&gt;\n    &lt;ng-template pTemplate&gt;\n        Content\n    &lt;/ng-template&gt;\n&lt;/p-overlayPanel&gt;\n\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n            <h3>Show and Hide</h3>\n            <p><i>show</i> method takes two parameters, first one is the event and it is mandatory. By default the target component to align the overlay is the event target, \n            if you'd like to align it to another element, provide it as the second parameter. Similarly calling <i>hide()</i> hides the overlay panel and the <i>toggle</i> method \n            toggles the visibility of the panel. In example below, clicking the button displays the overlayPanel aligned to the actualTarget div, not the button itself.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-overlayPanel #op&gt;\n    &lt;ng-template pTemplate&gt;\n        Content\n    &lt;/ng-template&gt;\n&lt;/p-overlayPanel&gt;\n\n&lt;button type=\"text\" pButton label=\"Custom Target\" (click)=\"op.show($event, actualTarget)\"&gt;&lt;/button&gt;\n&lt;div #actualTarget&gt;&lt;/div&gt;\n</code>\n</pre>\n        \n        \n            <h3>Dismissable and CloseIcon</h3>\n            <p>Clicking outside the overlay hides the panel, setting <i>dismissable</i> to false disables this behavior. Additionally enabling <i>showCloseIcon</i> property \n            displays a close icon at the top right corner to close the panel</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-overlayPanel #op [dismissable]=\"true\" [showCloseIcon]=\"true\"&gt;\n    &lt;ng-template pTemplate&gt;\n        Content\n    &lt;/ng-template&gt;\n&lt;/p-overlayPanel&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the <i>showTransitionOptions</i> and <i>hideTransitionOptions</i> properties, \n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-overlayPanel [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #op [dismissable]=\"true\" [showCloseIcon]=\"true\"&gt;\n    &lt;ng-template pTemplate&gt;\n        Content\n    &lt;/ng-template&gt;\n&lt;/p-overlayPanel&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>dismissable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Enables to hide the overlay when outside is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>showCloseIcon</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, displays a close icon at top right corner.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaCloseLabel</td>\n                            <td>string</td>\n                            <td>close</td>\n                            <td>Aria label of the close icon.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the panel, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>225ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>195ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onShow</td>\n                            <td>-</td>\n                            <td>Callback to invoke when an overlay becomes visible.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>-</td>\n                            <td>Callback to invoke after overlay gets hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event <br>\n                                target?: target element to align the panel, defaults to event.target\n                            </td>\n                            <td>Toggles the visibility of the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event <br>\n                                target?: target element to align the panel to\n                            </td>\n                            <td>Displays the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the panel.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-overlaypanel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-overlaypanel-content</td>\n                            <td>Content of the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-overlaypanel-close</td>\n                            <td>Close icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/overlaypanel\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-overlaypanel-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p&gt;Click the button to show the panel.&lt;/p&gt;\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"&gt;&lt;/button&gt;\n\n&lt;p-overlayPanel #op1&gt;\n    &lt;ng-template pTemplate&gt;\n        &lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" /&gt;\n    &lt;/ng-template&gt;\n&lt;/p-overlayPanel&gt;\n\n&lt;h3&gt;Customized&lt;/h3&gt;\n&lt;p&gt;This OverlayPanel gets displayed on hover of the icon, is not dismissable and displays a close icon.&lt;/p&gt;\n&lt;i class=\"pi pi-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"&gt;&lt;/i&gt;\n\n&lt;p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\"&gt;\n    &lt;ng-template pTemplate&gt;\n        &lt;p-table [value]=\"cars1\" [style]=\"&#123;width: '500px'&#125;\" [paginator]=\"true\" [rows]=\"5\"&gt;\n            &lt;ng-template pTemplate=\"header\"&gt;\n                &lt;tr&gt;\n                    &lt;th pSortableColumn=\"vin\"&gt;Vin &lt;p-sortIcon field=\"vin\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n                    &lt;th pSortableColumn=\"year\"&gt;Year &lt;p-sortIcon field=\"year\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n                    &lt;th pSortableColumn=\"brand\"&gt;Brand &lt;p-sortIcon field=\"brand\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n                    &lt;th pSortableColumn=\"color\"&gt;Color &lt;p-sortIcon field=\"color\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n            &lt;ng-template pTemplate=\"body\" let-car&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n        &lt;/p-table&gt;\n    &lt;/ng-template&gt;\n&lt;/p-overlayPanel&gt;\n\n&lt;h3&gt;Table Integration&lt;/h3&gt;\n&lt;p-table [value]=\"cars2\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 4em\"&gt;&lt;/th&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;button type=\"button\" pButton (click)=\"selectCar($event,car,op3)\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\n            &lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-overlayPanel #op3&gt;\n    &lt;ng-template pTemplate&gt;\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;selectedCar.brand&#125;&#125;.png\" *ngIf=\"selectedCar\"/&gt;\n    &lt;/ng-template&gt;\n&lt;/p-overlayPanel&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class OverlayPanelDemo &#123;\n\n    cars1: Car[];\n    \n    cars2: Car[];\n    \n    selectedCar: Car;\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n    &#125;\n    \n    selectCar(event,car: Car, overlaypanel: OverlayPanel) &#123;\n        this.selectedCar = car;\n        overlaypanel.toggle(event);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-overlaypanel-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: OverlayPanelDemoRoutingModule */

  /***/
  function _src_app_showcase_components_overlaypanel_overlaypaneldemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPanelDemoRoutingModule", function () {
      return OverlayPanelDemoRoutingModule;
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


    var _overlaypaneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overlaypaneldemo */
    "./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");

    var OverlayPanelDemoRoutingModule = /*#__PURE__*/_createClass(function OverlayPanelDemoRoutingModule() {
      _classCallCheck(this, OverlayPanelDemoRoutingModule);
    });

    OverlayPanelDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _overlaypaneldemo__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OverlayPanelDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/overlaypanel/overlaypaneldemo.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/overlaypanel/overlaypaneldemo.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: OverlayPanelDemoModule */

  /***/
  function _src_app_showcase_components_overlaypanel_overlaypaneldemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPanelDemoModule", function () {
      return OverlayPanelDemoModule;
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


    var _overlaypaneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overlaypaneldemo */
    "./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");
    /* harmony import */


    var _overlaypaneldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./overlaypaneldemo-routing.module */
    "./src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts");
    /* harmony import */


    var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/overlaypanel */
    "./src/app/components/overlaypanel/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/table */
    "./src/app/components/table/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var OverlayPanelDemoModule = /*#__PURE__*/_createClass(function OverlayPanelDemoModule() {
      _classCallCheck(this, OverlayPanelDemoModule);
    });

    OverlayPanelDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _overlaypaneldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["OverlayPanelDemoRoutingModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__["OverlayPanelModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_overlaypaneldemo__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelDemo"]]
    })], OverlayPanelDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/showcase/components/overlaypanel/overlaypaneldemo.ts ***!
    \**********************************************************************/

  /*! exports provided: OverlayPanelDemo */

  /***/
  function _src_app_showcase_components_overlaypanel_overlaypaneldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPanelDemo", function () {
      return OverlayPanelDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var OverlayPanelDemo = /*#__PURE__*/function () {
      function OverlayPanelDemo(carService) {
        _classCallCheck(this, OverlayPanelDemo);

        this.carService = carService;
      }

      return _createClass(OverlayPanelDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this.cars1 = cars;
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this.cars2 = cars;
          });
        }
      }, {
        key: "selectCar",
        value: function selectCar(event, car, overlaypanel) {
          this.selectedCar = car;
          overlaypanel.toggle(event);
        }
      }]);
    }();

    OverlayPanelDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    OverlayPanelDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./overlaypaneldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/overlaypanel/overlaypaneldemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], OverlayPanelDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-overlaypanel-overlaypaneldemo-module-es5.js.map