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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-organizationchart-organizationchart~99c77bb8"], {
  /***/
  "./src/app/components/organizationchart/organizationchart.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/organizationchart/organizationchart.ts ***!
    \*******************************************************************/

  /*! exports provided: OrganizationChartNode, OrganizationChart, OrganizationChartModule */

  /***/
  function _src_app_components_organizationchart_organizationchartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChartNode", function () {
      return OrganizationChartNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChart", function () {
      return OrganizationChart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChartModule", function () {
      return OrganizationChartModule;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var OrganizationChartNode = /*#__PURE__*/function () {
      function OrganizationChartNode(chart) {
        _classCallCheck(this, OrganizationChartNode);

        this.chart = chart;
      }

      return _createClass(OrganizationChartNode, [{
        key: "leaf",
        get: function get() {
          return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
        }
      }, {
        key: "colspan",
        get: function get() {
          return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
        }
      }, {
        key: "onNodeClick",
        value: function onNodeClick(event, node) {
          this.chart.onNodeClick(event, node);
        }
      }, {
        key: "toggleNode",
        value: function toggleNode(event, node) {
          node.expanded = !node.expanded;
          if (node.expanded) this.chart.onNodeExpand.emit({
            originalEvent: event,
            node: this.node
          });else this.chart.onNodeCollapse.emit({
            originalEvent: event,
            node: this.node
          });
          event.preventDefault();
        }
      }, {
        key: "isSelected",
        value: function isSelected() {
          return this.chart.isSelected(this.node);
        }
      }]);
    }();

    OrganizationChartNode.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return OrganizationChart;
          })]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], OrganizationChartNode.prototype, "node", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], OrganizationChartNode.prototype, "root", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], OrganizationChartNode.prototype, "first", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], OrganizationChartNode.prototype, "last", void 0);
    OrganizationChartNode = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[pOrganizationChartNode]',
      template: "\n        <tr *ngIf=\"node\">\n            <td [attr.colspan]=\"colspan\">\n                <div class=\"ui-organizationchart-node-content ui-widget-content ui-corner-all {{node.styleClass}}\" \n                    [ngClass]=\"{'ui-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false,'ui-state-highlight':isSelected()}\"\n                    (click)=\"onNodeClick($event,node)\">\n                    <div *ngIf=\"!chart.getTemplateForNode(node)\">{{node.label}}</div>\n                    <div *ngIf=\"chart.getTemplateForNode(node)\">\n                        <ng-container *ngTemplateOutlet=\"chart.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                    </div>\n                    <a *ngIf=\"!leaf\" tabindex=\"0\" class=\"ui-node-toggler\" (click)=\"toggleNode($event, node)\" (keydown.enter)=\"toggleNode($event, node)\">\n                        <i class=\"ui-node-toggler-icon pi\" [ngClass]=\"{'pi-chevron-down': node.expanded, 'pi-chevron-up': !node.expanded}\"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n        <tr [ngClass]=\"!leaf&&node.expanded ? 'ui-organizationchart-node-visible' : 'ui-organizationchart-node-hidden'\" class=\"ui-organizationchart-lines\" [@childState]=\"'in'\">\n            <td [attr.colspan]=\"colspan\">\n                <div class=\"ui-organizationchart-line-down\"></div>\n            </td>\n        </tr>\n        <tr [ngClass]=\"!leaf&&node.expanded ? 'ui-organizationchart-node-visible' : 'ui-organizationchart-node-hidden'\" class=\"ui-organizationchart-lines\" [@childState]=\"'in'\">\n            <ng-container *ngIf=\"node.children && node.children.length === 1\">\n                <td [attr.colspan]=\"colspan\">\n                    <div class=\"ui-organizationchart-line-down\"></div>\n                </td>\n            </ng-container>\n            <ng-container *ngIf=\"node.children && node.children.length > 1\">\n                <ng-template ngFor let-child [ngForOf]=\"node.children\" let-first=\"first\" let-last=\"last\">\n                    <td class=\"ui-organizationchart-line-left\" [ngClass]=\"{'ui-organizationchart-line-top':!first}\">&nbsp;</td>\n                    <td class=\"ui-organizationchart-line-right\" [ngClass]=\"{'ui-organizationchart-line-top':!last}\">&nbsp;</td>\n                </ng-template>\n            </ng-container>\n        </tr>\n        <tr [ngClass]=\"!leaf&&node.expanded ? 'ui-organizationchart-node-visible' : 'ui-organizationchart-node-hidden'\" class=\"ui-organizationchart-nodes\" [@childState]=\"'in'\">\n            <td *ngFor=\"let child of node.children\" colspan=\"2\">\n                <table class=\"ui-organizationchart-table\" pOrganizationChartNode [node]=\"child\"></table>\n            </td>\n        </tr>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('childState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(150)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      }))])])]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return OrganizationChart;
    }))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], OrganizationChartNode);

    var OrganizationChart = /*#__PURE__*/function () {
      function OrganizationChart(el) {
        _classCallCheck(this, OrganizationChart);

        this.el = el;
        this.preserveSpace = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      return _createClass(OrganizationChart, [{
        key: "root",
        get: function get() {
          return this.value && this.value.length ? this.value[0] : null;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          if (this.templates.length) {
            this.templateMap = {};
          }

          this.templates.forEach(function (item) {
            _this.templateMap[item.getType()] = item.template;
          });
        }
      }, {
        key: "getTemplateForNode",
        value: function getTemplateForNode(node) {
          if (this.templateMap) return node.type ? this.templateMap[node.type] : this.templateMap['default'];else return null;
        }
      }, {
        key: "onNodeClick",
        value: function onNodeClick(event, node) {
          var eventTarget = event.target;

          if (eventTarget.className && (eventTarget.className.indexOf('ui-node-toggler') !== -1 || eventTarget.className.indexOf('ui-node-toggler-icon') !== -1)) {
            return;
          } else if (this.selectionMode) {
            if (node.selectable === false) {
              return;
            }

            var index = this.findIndexInSelection(node);
            var selected = index >= 0;

            if (this.selectionMode === 'single') {
              if (selected) {
                this.selection = null;
                this.onNodeUnselect.emit({
                  originalEvent: event,
                  node: node
                });
              } else {
                this.selection = node;
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node: node
                });
              }
            } else if (this.selectionMode === 'multiple') {
              if (selected) {
                this.selection = this.selection.filter(function (val, i) {
                  return i != index;
                });
                this.onNodeUnselect.emit({
                  originalEvent: event,
                  node: node
                });
              } else {
                this.selection = [].concat(_toConsumableArray(this.selection || []), [node]);
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node: node
                });
              }
            }

            this.selectionChange.emit(this.selection);
          }
        }
      }, {
        key: "findIndexInSelection",
        value: function findIndexInSelection(node) {
          var index = -1;

          if (this.selectionMode && this.selection) {
            if (this.selectionMode === 'single') {
              index = this.selection == node ? 0 : -1;
            } else if (this.selectionMode === 'multiple') {
              for (var i = 0; i < this.selection.length; i++) {
                if (this.selection[i] == node) {
                  index = i;
                  break;
                }
              }
            }
          }

          return index;
        }
      }, {
        key: "isSelected",
        value: function isSelected(node) {
          return this.findIndexInSelection(node) != -1;
        }
      }]);
    }();

    OrganizationChart.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], OrganizationChart.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], OrganizationChart.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrganizationChart.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrganizationChart.prototype, "selectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], OrganizationChart.prototype, "selection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], OrganizationChart.prototype, "preserveSpace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrganizationChart.prototype, "selectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrganizationChart.prototype, "onNodeSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrganizationChart.prototype, "onNodeUnselect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrganizationChart.prototype, "onNodeExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrganizationChart.prototype, "onNodeCollapse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], OrganizationChart.prototype, "templates", void 0);
    OrganizationChart = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-organizationChart',
      template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-organizationchart ui-widget': true, 'ui-organizationchart-preservespace': preserveSpace}\">\n            <table class=\"ui-organizationchart-table\" pOrganizationChartNode [node]=\"root\" *ngIf=\"root\"></table>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], OrganizationChart);

    var OrganizationChartModule = /*#__PURE__*/_createClass(function OrganizationChartModule() {
      _classCallCheck(this, OrganizationChartModule);
    });

    OrganizationChartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [OrganizationChart, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [OrganizationChart, OrganizationChartNode]
    })], OrganizationChartModule);
    /***/
  },

  /***/
  "./src/app/components/organizationchart/public_api.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/organizationchart/public_api.ts ***!
    \************************************************************/

  /*! exports provided: OrganizationChartNode, OrganizationChart, OrganizationChartModule */

  /***/
  function _src_app_components_organizationchart_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _organizationchart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./organizationchart */
    "./src/app/components/organizationchart/organizationchart.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChartNode", function () {
      return _organizationchart__WEBPACK_IMPORTED_MODULE_0__["OrganizationChartNode"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChart", function () {
      return _organizationchart__WEBPACK_IMPORTED_MODULE_0__["OrganizationChart"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrganizationChartModule", function () {
      return _organizationchart__WEBPACK_IMPORTED_MODULE_0__["OrganizationChartModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-organizationchart-organizationchart~99c77bb8-es5.js.map