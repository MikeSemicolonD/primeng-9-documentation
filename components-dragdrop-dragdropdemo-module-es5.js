function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dragdrop-dragdropdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dragdrop/dragdropdemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dragdrop/dragdropdemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_dragdrop_dragdropdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Drag and Drop</span>\n        <span>pDraggable and pDroppable directives apply drag-drop behaviors to any element.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Drag Only</h3>\n    <div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\">\n        <p-panel header=\"Drag Header\">\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        </p-panel>\n    </div>\n\n    <h3>Drag and Drop to Table</h3>\n    <div class=\"p-grid\">\n        <div class=\"p-col-12 p-md-6 p-col-nogutter drag-column\">\n            <ul style=\"margin:0;padding:0\">\n                <li *ngFor=\"let car of availableCars\" class=\"ui-helper-clearfix\" pDraggable=\"cars\"\n                    (onDragStart)=\"dragStart($event,car)\" (onDragEnd)=\"dragEnd($event)\">\n                    <i class=\"pi pi-plus\" style=\"float:right;font-size: 32px;\"></i>\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"float:left\" draggable=\"false\">\n                    <div style=\"margin:8px 0 0 8px;float:left\">{{car.vin}} - {{car.year}}</div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"p-col-12 p-md-6 drop-column\" pDroppable=\"cars\" \n            (onDrop)=\"drop($event)\" [ngClass]=\"{'ui-highlight-car':draggedCar}\">\n            <p-table [value]=\"selectedCars\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>Vin</th>\n                        <th>Year</th>\n                        <th>Brand</th>\n                        <th>Color</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-car>\n                    <tr>\n                        <td>{{car.vin}}</td>\n                        <td>{{car.year}}</td>\n                        <td>{{car.brand}}</td>\n                        <td>{{car.color}}</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DragDropModule&#125; from 'primeng/dragdrop';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>pDraggable and pDroppable are attached to a target element to add drag-drop behavior. The value of a Directive attribute is required\n            and it defines the scope to match draggables with droppables. Droppable scope can also be an array to accept multiple droppables.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDraggable=\"dd\"&gt;Draggable Div&lt;/div&gt;\n\n&lt;div pDroppable=\"dd\"&gt;Droppable Div&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Drag Handle</h3>\n            <p>Drag handle is used to restrict dragging unless mousedown occurs on the specified element. Panel below can only be dragged using its header.</p>\n\n            <pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\"&gt;\n    &lt;p-panel header=\"Drag Header\"&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-panel&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Draggable</h3>\n            <h4>Attributes</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>dragEffect</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the cursor style, valid values are none, copy, move, link, copyMove, copyLink, linkMove and all.</td>\n                        </tr>\n                        <tr>\n                            <td>dragHandle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Selector to define the drag handle, by default anywhere on the target element is a drag handle to start dragging.</td>\n                        </tr>\n                        <tr>\n                            <td>pDraggableDisabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the element is draggable, useful for conditional cases.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h4>Events</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onDragStart</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when drag begins.</td>\n                        </tr>\n                        <tr>\n                            <td>onDrag</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke on dragging.</td>\n                        </tr>\n                        <tr>\n                            <td>onDragEnd</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when drag ends.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Droppable</h3>\n            <h4>Attributes</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>dropEffect</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines the cursor style on drag over, valid values are copy, relocate, link and move.</td>\n                        </tr>\n                        <tr>\n                            <td>pDroppableDisabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the element is droppable, useful for conditional cases.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h4>Events</h4>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onDragEnter</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when a draggable enters drop area.</td>\n                        </tr>\n                        <tr>\n                            <td>onDrop</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when a draggable is dropped onto drop area.</td>\n                        </tr>\n                        <tr>\n                            <td>onDragLeave</td>\n                            <td>\n                                event: browser event\n                            </td>\n                            <td>Callback to invoke when a draggable leave drop area.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n\n            <h3>Dependencies</h3>\n            <p>Native HTML5 DragDrop.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dragdrop\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Drag Only&lt;/h3&gt;\n&lt;div pDraggable=\"pnl\"  dragHandle=\".ui-panel-titlebar\"&gt;\n    &lt;p-panel header=\"Drag Header\"&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;/p-panel&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Drag and Drop to Table&lt;/h3&gt;\n&lt;div class=\"p-grid\"&gt;\n    &lt;div class=\"p-col-12 p-md-6 p-col-nogutter drag-column\"&gt;\n        &lt;ul style=\"margin:0;padding:0\"&gt;\n            &lt;li *ngFor=\"let car of availableCars\" class=\"ui-helper-clearfix\" pDraggable=\"cars\"\n                (onDragStart)=\"dragStart($event,car)\" (onDragEnd)=\"dragEnd($event)\"&gt;\n                &lt;i class=\"pi pi-plus\" style=\"float:right;font-size: 32px;\"&gt;&lt;/i&gt;\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\" style=\"float:left\" draggable=\"false\"&gt;\n                &lt;div style=\"margin:8px 0 0 8px;float:left\"&gt;&#123;&#123;car.vin&#125;&#125; - &#123;&#123;car.year&#125;&#125;&lt;/div&gt;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-6 drop-column\" pDroppable=\"cars\" \n        (onDrop)=\"drop($event)\" [ngClass]=\"&#123;'ui-highlight-car':draggedCar&#125;\"&gt;\n        &lt;p-table [value]=\"selectedCars\"&gt;\n            &lt;ng-template pTemplate=\"header\"&gt;\n                &lt;tr&gt;\n                    &lt;th&gt;Vin&lt;/th&gt;\n                    &lt;th&gt;Year&lt;/th&gt;\n                    &lt;th&gt;Brand&lt;/th&gt;\n                    &lt;th&gt;Color&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n            &lt;ng-template pTemplate=\"body\" let-car&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/ng-template&gt;\n        &lt;/p-table&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DragDropDemo &#123;\n\n    availableCars: Car[];\n\n    selectedCars: Car[];\n\n    draggedCar: Car;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.selectedCars = [];\n        this.carService.getCarsSmall().then(cars => this.availableCars = cars);\n    &#125;\n\n    dragStart(event,car: Car) &#123;\n        this.draggedCar = car;\n    &#125;\n\n    drop(event) &#123;\n        if (this.draggedCar) &#123;\n            let draggedCarIndex = this.findIndex(this.draggedCar);\n            this.selectedCars = [...this.selectedCars, this.draggedCar];\n            this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);\n            this.draggedCar = null;\n        &#125;\n    &#125;\n\n    dragEnd(event) &#123;\n        this.draggedCar = null;\n    &#125;\n\n    findIndex(car: Car) &#123;\n        let index = -1;\n        for(let i = 0; i < this.availableCars.length; i++) &#123;\n            if (car.vin === this.availableCars[i].vin) &#123;\n                index = i;\n                break;\n            &#125;\n        &#125;\n        return index;\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
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
  "./src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: DragDropDemoRoutingModule */

  /***/
  function _src_app_showcase_components_dragdrop_dragdropdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropDemoRoutingModule", function () {
      return DragDropDemoRoutingModule;
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


    var _dragdropdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dragdropdemo */
    "./src/app/showcase/components/dragdrop/dragdropdemo.ts");

    var DragDropDemoRoutingModule = /*#__PURE__*/_createClass(function DragDropDemoRoutingModule() {
      _classCallCheck(this, DragDropDemoRoutingModule);
    });

    DragDropDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _dragdropdemo__WEBPACK_IMPORTED_MODULE_3__["DragDropDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DragDropDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/dragdrop/dragdropdemo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/dragdrop/dragdropdemo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DragDropDemoModule */

  /***/
  function _src_app_showcase_components_dragdrop_dragdropdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropDemoModule", function () {
      return DragDropDemoModule;
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


    var _dragdropdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dragdropdemo */
    "./src/app/showcase/components/dragdrop/dragdropdemo.ts");
    /* harmony import */


    var _dragdropdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dragdropdemo-routing.module */
    "./src/app/showcase/components/dragdrop/dragdropdemo-routing.module.ts");
    /* harmony import */


    var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dragdrop */
    "./src/app/components/dragdrop/public_api.ts");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/panel */
    "./src/app/components/panel/public_api.ts");
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

    var DragDropDemoModule = /*#__PURE__*/_createClass(function DragDropDemoModule() {
      _classCallCheck(this, DragDropDemoModule);
    });

    DragDropDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dragdropdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["DragDropDemoRoutingModule"], primeng_dragdrop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_dragdropdemo__WEBPACK_IMPORTED_MODULE_3__["DragDropDemo"]]
    })], DragDropDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/dragdrop/dragdropdemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/dragdrop/dragdropdemo.ts ***!
    \**************************************************************/

  /*! exports provided: DragDropDemo */

  /***/
  function _src_app_showcase_components_dragdrop_dragdropdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropDemo", function () {
      return DragDropDemo;
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

    var DragDropDemo = /*#__PURE__*/function () {
      function DragDropDemo(carService) {
        _classCallCheck(this, DragDropDemo);

        this.carService = carService;
      }

      return _createClass(DragDropDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.selectedCars = [];
          this.carService.getCarsSmall().then(function (cars) {
            return _this.availableCars = cars;
          });
        }
      }, {
        key: "dragStart",
        value: function dragStart(event, car) {
          this.draggedCar = car;
        }
      }, {
        key: "drop",
        value: function drop(event) {
          if (this.draggedCar) {
            var draggedCarIndex = this.findIndex(this.draggedCar);
            this.selectedCars = [].concat(_toConsumableArray(this.selectedCars), [this.draggedCar]);
            this.availableCars = this.availableCars.filter(function (val, i) {
              return i != draggedCarIndex;
            });
            this.draggedCar = null;
          }
        }
      }, {
        key: "dragEnd",
        value: function dragEnd(event) {
          this.draggedCar = null;
        }
      }, {
        key: "findIndex",
        value: function findIndex(car) {
          var index = -1;

          for (var i = 0; i < this.availableCars.length; i++) {
            if (car.vin === this.availableCars[i].vin) {
              index = i;
              break;
            }
          }

          return index;
        }
      }]);
    }();

    DragDropDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    DragDropDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dragdropdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dragdrop/dragdropdemo.html"))["default"],
      styles: ["\n        :host ::ng-deep .drag-column {\n            padding-right: .5em;\n        }\n\n        :host ::ng-deep .drop-column {\n            border: 1px solid #c8c8c8;\n            background-color: #ffffff;\n        }\n\n        .p-grid li {\n            list-style-type: none;\n            padding: 10px;\n            margin-bottom: 5px;\n            border: 1px solid #c8c8c8;\n            background-color: #ffffff;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], DragDropDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-dragdrop-dragdropdemo-module-es5.js.map