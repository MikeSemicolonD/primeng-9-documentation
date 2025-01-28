function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-focustrap-focustrapdemo-module~components-inputnumber-inputnumberdemo-module~comp~292fab47"], {
  /***/
  "./src/app/components/multiselect/multiselect.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/multiselect/multiselect.ts ***!
    \*******************************************************/

  /*! exports provided: MULTISELECT_VALUE_ACCESSOR, MultiSelectItem, MultiSelect, MultiSelectModule */

  /***/
  function _src_app_components_multiselect_multiselectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MULTISELECT_VALUE_ACCESSOR", function () {
      return MULTISELECT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectItem", function () {
      return MultiSelectItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelect", function () {
      return MultiSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function () {
      return MultiSelectModule;
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


    var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/tooltip */
    "./src/app/components/tooltip/public_api.ts");

    var MULTISELECT_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return MultiSelect;
      }),
      multi: true
    };

    var MultiSelectItem = /*#__PURE__*/function () {
      function MultiSelectItem() {
        _classCallCheck(this, MultiSelectItem);

        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      return _createClass(MultiSelectItem, [{
        key: "onOptionClick",
        value: function onOptionClick(event) {
          this.onClick.emit({
            originalEvent: event,
            option: this.option
          });
        }
      }, {
        key: "onOptionKeydown",
        value: function onOptionKeydown(event) {
          this.onKeydown.emit({
            originalEvent: event,
            option: this.option
          });
        }
      }]);
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MultiSelectItem.prototype, "option", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelectItem.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelectItem.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelectItem.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MultiSelectItem.prototype, "itemSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], MultiSelectItem.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelectItem.prototype, "maxSelectionLimitReached", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectItem.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelectItem.prototype, "onKeydown", void 0);
    MultiSelectItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-multiSelectItem',
      template: "\n        <li class=\"ui-multiselect-item ui-corner-all\" (click)=\"onOptionClick($event)\" (keydown)=\"onOptionKeydown($event)\" [attr.aria-label]=\"option.label\"\n            [style.display]=\"visible ? 'block' : 'none'\" [attr.tabindex]=\"option.disabled ? null : '0'\" [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-state-highlight': selected, 'ui-state-disabled': (option.disabled || (maxSelectionLimitReached && !selected))}\">\n            <div class=\"ui-chkbox ui-widget\">\n                <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\"\n                    [ngClass]=\"{'ui-state-active': selected}\">\n                    <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check': selected}\"></span>\n                </div>\n            </div>\n            <span *ngIf=\"!template\">{{option.label}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
    })], MultiSelectItem);

    var MultiSelect = /*#__PURE__*/function () {
      function MultiSelect(el, renderer, cd) {
        _classCallCheck(this, MultiSelect);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.scrollHeight = '200px';
        this._defaultLabel = 'Choose';
        this.filter = true;
        this.displaySelectedLabel = true;
        this.maxSelectedLabels = 3;
        this.selectedItemsLabel = '{0} items selected';
        this.showToggleAll = true;
        this.emptyFilterMessage = 'No results found';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.showHeader = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.filterBy = 'label';
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPanelShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPanelHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.disabledSelectedOptions = [];
      }

      return _createClass(MultiSelect, [{
        key: "defaultLabel",
        get: function get() {
          return this._defaultLabel;
        },
        set: function set(val) {
          this._defaultLabel = val;
          this.updateLabel();
        }
      }, {
        key: "options",
        get: function get() {
          return this._options;
        },
        set: function set(val) {
          var opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
          this.visibleOptions = opts;
          this._options = opts;
          this.updateLabel();

          if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateLabel();
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'item':
                _this.itemTemplate = item.template;
                break;

              case 'selectedItems':
                _this.selectedItemsTemplate = item.template;
                break;

              default:
                _this.itemTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.overlayVisible) {
            this.show();
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.filtered) {
            this.alignOverlay();
            this.filtered = false;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
          this.updateLabel();
          this.updateFilledState();
          this.setDisabledSelectedOptions();
          this.checkSelectionLimit();
          this.cd.markForCheck();
        }
      }, {
        key: "checkSelectionLimit",
        value: function checkSelectionLimit() {
          if (this.selectionLimit && this.value && this.value.length === this.selectionLimit) {
            this.maxSelectionLimitReached = true;
          } else {
            this.maxSelectionLimitReached = false;
          }
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.value && this.value.length > 0;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(val) {
          this.disabled = val;
        }
      }, {
        key: "onOptionClick",
        value: function onOptionClick(event) {
          var option = event.option;

          if (option.disabled) {
            return;
          }

          var optionValue = option.value;
          var selectionIndex = this.findSelectionIndex(optionValue);

          if (selectionIndex != -1) {
            this.value = this.value.filter(function (val, i) {
              return i != selectionIndex;
            });

            if (this.selectionLimit) {
              this.maxSelectionLimitReached = false;
            }
          } else {
            if (!this.selectionLimit || !this.value || this.value.length < this.selectionLimit) {
              this.value = [].concat(_toConsumableArray(this.value || []), [optionValue]);
            }

            this.checkSelectionLimit();
          }

          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event.originalEvent,
            value: this.value,
            itemValue: optionValue
          });
          this.updateLabel();
          this.updateFilledState();
        }
      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this.findSelectionIndex(value) != -1;
        }
      }, {
        key: "findSelectionIndex",
        value: function findSelectionIndex(val) {
          var index = -1;

          if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
              if (primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].equals(this.value[i], val, this.dataKey)) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "toggleAll",
        value: function toggleAll(event) {
          if (this.isAllChecked()) {
            if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
              var value = [];
              value = _toConsumableArray(this.disabledSelectedOptions);
              this.value = value;
            } else {
              this.value = [];
            }
          } else {
            var opts = this.getVisibleOptions();

            if (opts) {
              var _value = [];

              if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                _value = _toConsumableArray(this.disabledSelectedOptions);
              }

              for (var i = 0; i < opts.length; i++) {
                var option = opts[i];

                if (!option.disabled) {
                  _value.push(opts[i].value);
                }
              }

              this.value = _value;
            }
          }

          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event,
            value: this.value
          });
          this.updateFilledState();
          this.updateLabel();
        }
      }, {
        key: "isAllChecked",
        value: function isAllChecked() {
          if (this.filterValue && this.filterValue.trim().length) {
            return this.value && this.visibleOptions && this.visibleOptions.length && this.isAllVisibleOptionsChecked();
          } else {
            var optionCount = this.getEnabledOptionCount();
            var disabledSelectedOptionCount = this.disabledSelectedOptions.length;
            return this.value && this.options && this.value.length > 0 && this.value.length == optionCount + disabledSelectedOptionCount;
          }
        }
      }, {
        key: "isAllVisibleOptionsChecked",
        value: function isAllVisibleOptionsChecked() {
          if (!this.visibleOptions || this.visibleOptions.length === 0) {
            return false;
          } else {
            var _iterator = _createForOfIteratorHelper(this.visibleOptions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var option = _step.value;

                if (!this.isSelected(option.value)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return true;
          }
        }
      }, {
        key: "getEnabledOptionCount",
        value: function getEnabledOptionCount() {
          if (this.options) {
            var count = 0;

            var _iterator2 = _createForOfIteratorHelper(this.options),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var opt = _step2.value;

                if (!opt.disabled) {
                  count++;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return count;
          } else {
            return 0;
          }
        }
      }, {
        key: "setDisabledSelectedOptions",
        value: function setDisabledSelectedOptions() {
          if (this.options) {
            this.disabledSelectedOptions = [];

            if (this.value) {
              var _iterator3 = _createForOfIteratorHelper(this.options),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var opt = _step3.value;

                  if (opt.disabled && this.isSelected(opt.value)) {
                    this.disabledSelectedOptions.push(opt.value);
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }
      }, {
        key: "show",
        value: function show() {
          if (!this.overlayVisible) {
            this.overlayVisible = true;
          }
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.overlay = event.element;
              this.appendOverlay();

              if (this.autoZIndex) {
                this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
              }

              this.alignOverlay();
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();

              if (this.filterInputChild && this.filterInputChild.nativeElement) {
                this.preventModelTouched = true;

                if (this.autofocusFilter) {
                  this.filterInputChild.nativeElement.focus();
                }
              }

              this.onPanelShow.emit();
              break;

            case 'void':
              this.onOverlayHide();
              break;
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.overlay, this.appendTo);

            if (!this.overlay.style.minWidth) {
              this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
            }
          }
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
          }
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.overlay) {
            if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
          }
        }
      }, {
        key: "hide",
        value: function hide() {
          this.overlayVisible = false;
          this.unbindDocumentClickListener();

          if (this.resetFilterOnHide) {
            this.filterInputChild.nativeElement.value = '';
            this.onFilter();
          }

          this.onPanelHide.emit();
        }
      }, {
        key: "close",
        value: function close(event) {
          this.hide();
          event.preventDefault();
          event.stopPropagation();
        }
      }, {
        key: "onMouseclick",
        value: function onMouseclick(event, input) {
          if (this.disabled || this.readonly || event.target.isSameNode(this.accessibleViewChild.nativeElement)) {
            return;
          }

          this.onClick.emit(event);

          if (!this.isOverlayClick(event)) {
            if (this.overlayVisible) {
              this.hide();
            } else {
              input.focus();
              this.show();
            }
          }
        }
      }, {
        key: "isOverlayClick",
        value: function isOverlayClick(event) {
          return this.overlay && this.overlay.contains(event.target);
        }
      }, {
        key: "isOutsideClicked",
        value: function isOutsideClicked(event) {
          return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.isOverlayClick(event));
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focus = true;
          this.onFocus.emit({
            originalEvent: event
          });
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focus = false;
          this.onBlur.emit({
            originalEvent: event
          });

          if (!this.preventModelTouched) {
            this.onModelTouched();
          }

          this.preventModelTouched = false;
        }
      }, {
        key: "onOptionKeydown",
        value: function onOptionKeydown(event) {
          if (this.readonly) {
            return;
          }

          switch (event.originalEvent.which) {
            //down
            case 40:
              var nextItem = this.findNextItem(event.originalEvent.target.parentElement);

              if (nextItem) {
                nextItem.focus();
              }

              event.originalEvent.preventDefault();
              break;
            //up

            case 38:
              var prevItem = this.findPrevItem(event.originalEvent.target.parentElement);

              if (prevItem) {
                prevItem.focus();
              }

              event.originalEvent.preventDefault();
              break;
            //enter

            case 13:
              this.onOptionClick(event);
              event.originalEvent.preventDefault();
              break;
          }
        }
      }, {
        key: "findNextItem",
        value: function findNextItem(item) {
          var nextItem = item.nextElementSibling;
          if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextItem.children[0], 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].isHidden(nextItem.children[0]) ? this.findNextItem(nextItem) : nextItem.children[0];else return null;
        }
      }, {
        key: "findPrevItem",
        value: function findPrevItem(item) {
          var prevItem = item.previousElementSibling;
          if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevItem.children[0], 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].isHidden(prevItem.children[0]) ? this.findPrevItem(prevItem) : prevItem.children[0];else return null;
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          switch (event.which) {
            //down
            case 40:
              if (!this.overlayVisible && event.altKey) {
                this.show();
                event.preventDefault();
              }

              break;
            //space

            case 32:
              if (!this.overlayVisible) {
                this.show();
                event.preventDefault();
              }

              break;
            //escape

            case 27:
              this.hide();
              break;
          }
        }
      }, {
        key: "updateLabel",
        value: function updateLabel() {
          if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
            var label = '';

            for (var i = 0; i < this.value.length; i++) {
              var itemLabel = this.findLabelByValue(this.value[i]);

              if (itemLabel) {
                if (label.length > 0) {
                  label = label + ', ';
                }

                label = label + itemLabel;
              }
            }

            if (this.value.length <= this.maxSelectedLabels) {
              this.valuesAsString = label;
            } else {
              var pattern = /{(.*?)}/;

              if (pattern.test(this.selectedItemsLabel)) {
                this.valuesAsString = this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.value.length + '');
              } else {
                this.valuesAsString = this.selectedItemsLabel;
              }
            }
          } else {
            this.valuesAsString = this.defaultLabel;
          }
        }
      }, {
        key: "findLabelByValue",
        value: function findLabelByValue(val) {
          var label = null;

          for (var i = 0; i < this.options.length; i++) {
            var option = this.options[i];

            if (val == null && option.value == null || primeng_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].equals(val, option.value, this.dataKey)) {
              label = option.label;
              break;
            }
          }

          return label;
        }
      }, {
        key: "onFilter",
        value: function onFilter() {
          var inputValue = this.filterInputChild.nativeElement.value;

          if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
          } else {
            this.filterValue = null;
            this.visibleOptions = this.options;
            this.filtered = false;
          }
        }
      }, {
        key: "activateFilter",
        value: function activateFilter() {
          if (this.options && this.options.length) {
            var searchFields = this.filterBy.split(',');
            this.visibleOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_5__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            this.filtered = true;
          }
        }
      }, {
        key: "isItemVisible",
        value: function isItemVisible(option) {
          if (this.filterValue && this.filterValue.trim().length) {
            for (var i = 0; i < this.visibleOptions.length; i++) {
              if (this.visibleOptions[i].value == option.value) {
                return true;
              }
            }
          } else {
            return true;
          }
        }
      }, {
        key: "getVisibleOptions",
        value: function getVisibleOptions() {
          return this.visibleOptions || this.options;
        }
      }, {
        key: "onHeaderCheckboxFocus",
        value: function onHeaderCheckboxFocus() {
          this.headerCheckboxFocus = true;
        }
      }, {
        key: "onHeaderCheckboxBlur",
        value: function onHeaderCheckboxBlur() {
          this.headerCheckboxFocus = false;
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this2 = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
              if (_this2.isOutsideClicked(event)) {
                _this2.hide();
              }

              _this2.cd.markForCheck();
            });
          }
        }
      }, {
        key: "unbindDocumentClickListener",
        value: function unbindDocumentClickListener() {
          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListener",
        value: function bindDocumentResizeListener() {
          this.documentResizeListener = this.onWindowResize.bind(this);
          window.addEventListener('resize', this.documentResizeListener);
        }
      }, {
        key: "unbindDocumentResizeListener",
        value: function unbindDocumentResizeListener() {
          if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (!primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].isAndroid()) {
            this.hide();
          }
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindDocumentResizeListener();
          this.overlay = null;
          this.onModelTouched();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.restoreOverlayAppend();
          this.onOverlayHide();
        }
      }]);
    }();

    MultiSelect.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "scrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], MultiSelect.prototype, "defaultLabel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MultiSelect.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MultiSelect.prototype, "panelStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "panelStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "filter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "filterPlaceHolder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "filterLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "overlayVisible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MultiSelect.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MultiSelect.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "dataKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "displaySelectedLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MultiSelect.prototype, "maxSelectedLabels", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MultiSelect.prototype, "selectionLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "selectedItemsLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "showToggleAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "emptyFilterMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "resetFilterOnHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "dropdownIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "optionLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "showHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MultiSelect.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "filterBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "virtualScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MultiSelect.prototype, "itemSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "hideTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "ariaFilterLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "filterMatchMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "tooltip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "tooltipPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "tooltipPositionStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MultiSelect.prototype, "tooltipStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MultiSelect.prototype, "autofocusFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MultiSelect.prototype, "containerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filterInput'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MultiSelect.prototype, "filterInputChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('in'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MultiSelect.prototype, "accessibleViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MultiSelect.prototype, "footerFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_6__["Header"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MultiSelect.prototype, "headerFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], MultiSelect.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelect.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelect.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelect.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelect.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelect.prototype, "onPanelShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MultiSelect.prototype, "onPanelHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], MultiSelect.prototype, "options", null);
    MultiSelect = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-multiSelect',
      template: "\n        <div #container [ngClass]=\"{'ui-multiselect ui-widget ui-state-default ui-corner-all':true,'ui-multiselect-open':overlayVisible,'ui-state-focus':focus,'ui-state-disabled': disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            (click)=\"onMouseclick($event,in)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in type=\"text\" readonly=\"readonly\" [attr.id]=\"inputId\" [attr.name]=\"name\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\"\n                       [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event)\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\"\n                       [attr.aria-labelledby]=\"ariaLabelledBy\" role=\"listbox\">\n            </div>\n            <div class=\"ui-multiselect-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <span class=\"ui-multiselect-label ui-corner-all\">\n                    <ng-container *ngIf=\"!selectedItemsTemplate\">{{valuesAsString}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemsTemplate; context: {$implicit: value}\"></ng-container>\n                </span>\n            </div>\n            <div [ngClass]=\"{'ui-multiselect-trigger ui-state-default ui-corner-right':true}\">\n                <span class=\"ui-multiselect-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"['ui-multiselect-panel ui-widget ui-widget-content ui-corner-all ui-shadow']\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\"\n                [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\" (keydown)=\"onKeydown($event)\">\n                <div class=\"ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix\" [ngClass]=\"{'ui-multiselect-header-no-toggleall': !showToggleAll}\" *ngIf=\"showHeader\">\n                <ng-content select=\"p-header\"></ng-content>\n                <div class=\"ui-chkbox ui-widget\" *ngIf=\"showToggleAll && !selectionLimit\">\n                        <div class=\"ui-helper-hidden-accessible\">\n                            <input type=\"checkbox\" readonly=\"readonly\" [checked]=\"isAllChecked()\" (focus)=\"onHeaderCheckboxFocus()\" (blur)=\"onHeaderCheckboxBlur()\" (keydown.space)=\"toggleAll($event)\">\n                        </div>\n                        <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" role=\"checkbox\" [attr.aria-checked]=\"isAllChecked()\" [ngClass]=\"{'ui-state-active':isAllChecked(), 'ui-state-focus': headerCheckboxFocus}\" (click)=\"toggleAll($event)\">\n                            <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':isAllChecked()}\"></span>\n                        </div>\n                    </div>\n                    <div class=\"ui-multiselect-filter-container\" *ngIf=\"filter\">\n                        <input #filterInput type=\"text\" role=\"textbox\" [value]=\"filterValue||''\" (input)=\"onFilter()\" class=\"ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceHolder\" [attr.aria-label]=\"ariaFilterLabel\">\n                        <span class=\"ui-multiselect-filter-icon pi pi-search\"></span>\n                    </div>\n                    <a class=\"ui-multiselect-close ui-corner-all\" tabindex=\"0\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                        <span class=\"pi pi-times\"></span>\n                    </a>\n                </div>\n                <div class=\"ui-multiselect-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" role=\"listbox\" aria-multiselectable=\"true\">\n                        <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                            <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option.value)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\"\n                                        [maxSelectionLimitReached]=\"maxSelectionLimitReached\" [visible]=\"isItemVisible(option)\" [template]=\"itemTemplate\"></p-multiSelectItem>\n                            </ng-template>\n                        </ng-container>\n                        <ng-template #virtualScrollList>\n                            <cdk-virtual-scroll-viewport #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && visibleOptions && visibleOptions.length\">\n                                <ng-container *cdkVirtualFor=\"let option of visibleOptions; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                    <p-multiSelectItem [option]=\"option\" [selected]=\"isSelected(option.value)\" (onClick)=\"onOptionClick($event)\" (onKeydown)=\"onOptionKeydown($event)\"\n                                        [maxSelectionLimitReached]=\"maxSelectionLimitReached\" [visible]=\"isItemVisible(option)\" [template]=\"itemTemplate\" [itemSize]=\"itemSize\"></p-multiSelectItem>\n                                </ng-container>\n                            </cdk-virtual-scroll-viewport>\n                        </ng-template>\n                        <li *ngIf=\"filter && visibleOptions && visibleOptions.length === 0\" class=\"ui-multiselect-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n                <div class=\"ui-multiselect-footer ui-widget-content\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focus'
      },
      providers: [MULTISELECT_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MultiSelect);

    var MultiSelectModule = /*#__PURE__*/_createClass(function MultiSelectModule() {
      _classCallCheck(this, MultiSelectModule);
    });

    MultiSelectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"]],
      exports: [MultiSelect, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]],
      declarations: [MultiSelect, MultiSelectItem]
    })], MultiSelectModule);
    /***/
  },

  /***/
  "./src/app/components/multiselect/public_api.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/multiselect/public_api.ts ***!
    \******************************************************/

  /*! exports provided: MULTISELECT_VALUE_ACCESSOR, MultiSelectItem, MultiSelect, MultiSelectModule */

  /***/
  function _src_app_components_multiselect_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./multiselect */
    "./src/app/components/multiselect/multiselect.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MULTISELECT_VALUE_ACCESSOR", function () {
      return _multiselect__WEBPACK_IMPORTED_MODULE_0__["MULTISELECT_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectItem", function () {
      return _multiselect__WEBPACK_IMPORTED_MODULE_0__["MultiSelectItem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MultiSelect", function () {
      return _multiselect__WEBPACK_IMPORTED_MODULE_0__["MultiSelect"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function () {
      return _multiselect__WEBPACK_IMPORTED_MODULE_0__["MultiSelectModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-focustrap-focustrapdemo-module~components-inputnumber-inputnumberdemo-module~comp~292fab47-es5.js.map