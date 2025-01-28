function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"], {
  /***/
  "./src/app/components/dropdown/dropdown.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/dropdown/dropdown.ts ***!
    \*************************************************/

  /*! exports provided: DROPDOWN_VALUE_ACCESSOR, DropdownItem, Dropdown, DropdownModule */

  /***/
  function _src_app_components_dropdown_dropdownTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function () {
      return DROPDOWN_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownItem", function () {
      return DropdownItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dropdown", function () {
      return Dropdown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownModule", function () {
      return DropdownModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/tooltip */
    "./src/app/components/tooltip/public_api.ts");

    var DROPDOWN_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
        return Dropdown;
      }),
      multi: true
    };

    var DropdownItem = /*#__PURE__*/function () {
      function DropdownItem() {
        _classCallCheck(this, DropdownItem);

        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      return _createClass(DropdownItem, [{
        key: "onOptionClick",
        value: function onOptionClick(event) {
          this.onClick.emit({
            originalEvent: event,
            option: this.option
          });
        }
      }]);
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DropdownItem.prototype, "option", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DropdownItem.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DropdownItem.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DropdownItem.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DropdownItem.prototype, "itemSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], DropdownItem.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], DropdownItem.prototype, "onClick", void 0);
    DropdownItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'p-dropdownItem',
      template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\"\n            [attr.aria-label]=\"option.label\" [attr.aria-selected]=\"selected\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true,\n                                                'ui-state-highlight': selected,\n                                                'ui-state-disabled':(option.disabled),\n                                                'ui-dropdown-item-empty': !option.label||option.label.length === 0}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
    })], DropdownItem);

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(el, renderer, cd, zone) {
        _classCallCheck(this, Dropdown);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.filterBy = 'label';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.autofocusFilter = true;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.viewPortOffsetTop = 0;
      }

      return _createClass(Dropdown, [{
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(_disabled) {
          if (_disabled) this.focused = false;
          this._disabled = _disabled;

          if (!this.cd.destroyed) {
            this.cd.detectChanges();
          }
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

              case 'selectedItem':
                _this.selectedItemTemplate = item.template;
                break;

              case 'group':
                _this.groupTemplate = item.template;
                break;

              default:
                _this.itemTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.optionsToDisplay = this.options;
          this.updateSelectedOption(null);
        }
      }, {
        key: "options",
        get: function get() {
          return this._options;
        },
        set: function set(val) {
          var opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
          this._options = opts;
          this.optionsToDisplay = this._options;
          this.updateSelectedOption(this.value);
          this.optionsChanged = true;
          this.updateFilledState();

          if (this.filterValue && this.filterValue.length) {
            this.activateFilter();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.editable) {
            this.updateEditableLabel();
          }
        }
      }, {
        key: "label",
        get: function get() {
          return this.selectedOption ? this.selectedOption.label : null;
        }
      }, {
        key: "updateEditableLabel",
        value: function updateEditableLabel() {
          if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = this.selectedOption ? this.selectedOption.label : this.value || '';
          }
        }
      }, {
        key: "onItemClick",
        value: function onItemClick(event) {
          var _this2 = this;

          var option = event.option;

          if (!option.disabled) {
            this.selectItem(event, option);
            this.accessibleViewChild.nativeElement.focus();
          }

          setTimeout(function () {
            _this2.hide(event);
          }, 150);
        }
      }, {
        key: "selectItem",
        value: function selectItem(event, option) {
          var _this3 = this;

          if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
              originalEvent: event.originalEvent,
              value: this.value
            });

            if (this.virtualScroll) {
              setTimeout(function () {
                _this3.viewPortOffsetTop = _this3.viewPort ? _this3.viewPort.measureScrollOffset() : 0;
              }, 1);
            }
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var _this4 = this;

          if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;

            if (this.virtualScroll) {
              this.updateVirtualScrollSelectedIndex(true);
            }

            this.zone.runOutsideAngular(function () {
              setTimeout(function () {
                _this4.alignOverlay();
              }, 1);
            });
          }

          if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
              var range = this.viewPort.getRenderedRange();
              this.updateVirtualScrollSelectedIndex(false);

              if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
              }
            }

            var selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight');

            if (selectedItem) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].scrollInView(this.itemsWrapper, primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight'));
            }

            this.selectedOptionUpdated = false;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.filter) {
            this.resetFilter();
          }

          this.value = value;
          this.updateSelectedOption(value);
          this.updateEditableLabel();
          this.updateFilledState();
          this.cd.markForCheck();
        }
      }, {
        key: "resetFilter",
        value: function resetFilter() {
          this.filterValue = null;

          if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterViewChild.nativeElement.value = '';
          }

          this.optionsToDisplay = this.options;
        }
      }, {
        key: "updateSelectedOption",
        value: function updateSelectedOption(val) {
          this.selectedOption = this.findOption(val, this.optionsToDisplay);

          if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
          }

          this.selectedOptionUpdated = true;
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
        key: "onMouseclick",
        value: function onMouseclick(event) {
          if (this.disabled || this.readonly || this.isInputClick(event)) {
            return;
          }

          this.onClick.emit(event);
          this.accessibleViewChild.nativeElement.focus();
          if (this.overlayVisible) this.hide(event);else this.show();
          this.cd.detectChanges();
        }
      }, {
        key: "isInputClick",
        value: function isInputClick(event) {
          return primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].hasClass(event.target, 'ui-dropdown-clear-icon') || event.target.isSameNode(this.accessibleViewChild.nativeElement) || this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement);
        }
      }, {
        key: "isOutsideClicked",
        value: function isOutsideClicked(event) {
          return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
        }
      }, {
        key: "onEditableInputClick",
        value: function onEditableInputClick() {
          this.bindDocumentClickListener();
        }
      }, {
        key: "onEditableInputFocus",
        value: function onEditableInputFocus(event) {
          this.focused = true;
          this.hide(event);
          this.onFocus.emit(event);
        }
      }, {
        key: "onEditableInputChange",
        value: function onEditableInputChange(event) {
          this.value = event.target.value;
          this.updateSelectedOption(this.value);
          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event,
            value: this.value
          });
        }
      }, {
        key: "show",
        value: function show() {
          this.overlayVisible = true;
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.overlay = event.element;
              var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.ui-dropdown-items-wrapper';
              this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.overlay, itemsWrapperSelector);
              this.appendOverlay();

              if (this.autoZIndex) {
                this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex);
              }

              this.alignOverlay();
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();

              if (this.options && this.options.length) {
                if (!this.virtualScroll) {
                  var selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');

                  if (selectedListItem) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].scrollInView(this.itemsWrapper, selectedListItem);
                  }
                }
              }

              if (this.filterViewChild && this.filterViewChild.nativeElement) {
                this.preventModelTouched = true;

                if (this.autofocusFilter) {
                  this.filterViewChild.nativeElement.focus();
                }
              }

              this.onShow.emit(event);
              break;

            case 'void':
              this.onOverlayHide();
              break;
          }
        }
      }, {
        key: "scrollToSelectedVirtualScrollElement",
        value: function scrollToSelectedVirtualScrollElement() {
          if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
              this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            } else if (this.virtualScrollSelectedIndex > -1) {
              this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
          }

          this.virtualAutoScrolled = true;
        }
      }, {
        key: "updateVirtualScrollSelectedIndex",
        value: function updateVirtualScrollSelectedIndex(resetOffset) {
          if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
              this.viewPortOffsetTop = 0;
            }

            this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].appendChild(this.overlay, this.appendTo);

            if (!this.overlay.style.minWidth) {
              this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
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
        key: "hide",
        value: function hide(event) {
          this.overlayVisible = false;

          if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
          }

          if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
          }

          this.cd.markForCheck();
          this.onHide.emit(event);
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.overlay) {
            if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
          }
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focused = true;
          this.onFocus.emit(event);
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focused = false;
          this.onBlur.emit(event);

          if (!this.preventModelTouched) {
            this.onModelTouched();
          }

          this.preventModelTouched = false;
        }
      }, {
        key: "findPrevEnabledOption",
        value: function findPrevEnabledOption(index) {
          var prevEnabledOption;

          if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = index - 1; 0 <= i; i--) {
              var option = this.optionsToDisplay[i];

              if (option.disabled) {
                continue;
              } else {
                prevEnabledOption = option;
                break;
              }
            }

            if (!prevEnabledOption) {
              for (var _i = this.optionsToDisplay.length - 1; _i >= index; _i--) {
                var _option = this.optionsToDisplay[_i];

                if (_option.disabled) {
                  continue;
                } else {
                  prevEnabledOption = _option;
                  break;
                }
              }
            }
          }

          return prevEnabledOption;
        }
      }, {
        key: "findNextEnabledOption",
        value: function findNextEnabledOption(index) {
          var nextEnabledOption;

          if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = index + 1; index < this.optionsToDisplay.length - 1; i++) {
              var option = this.optionsToDisplay[i];

              if (option.disabled) {
                continue;
              } else {
                nextEnabledOption = option;
                break;
              }
            }

            if (!nextEnabledOption) {
              for (var _i2 = 0; _i2 < index; _i2++) {
                var _option2 = this.optionsToDisplay[_i2];

                if (_option2.disabled) {
                  continue;
                } else {
                  nextEnabledOption = _option2;
                  break;
                }
              }
            }
          }

          return nextEnabledOption;
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event, search) {
          if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
          }

          switch (event.which) {
            //down
            case 40:
              if (!this.overlayVisible && event.altKey) {
                this.show();
              } else {
                if (this.group) {
                  var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                  if (selectedItemIndex !== -1) {
                    var nextItemIndex = selectedItemIndex.itemIndex + 1;

                    if (nextItemIndex < this.optionsToDisplay[selectedItemIndex.groupIndex].items.length) {
                      this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                      this.selectedOptionUpdated = true;
                    } else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                      this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                      this.selectedOptionUpdated = true;
                    }
                  } else {
                    this.selectItem(event, this.optionsToDisplay[0].items[0]);
                  }
                } else {
                  var _selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                  var nextEnabledOption = this.findNextEnabledOption(_selectedItemIndex);

                  if (nextEnabledOption) {
                    this.selectItem(event, nextEnabledOption);
                    this.selectedOptionUpdated = true;
                  }
                }
              }

              event.preventDefault();
              break;
            //up

            case 38:
              if (this.group) {
                var _selectedItemIndex2 = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                if (_selectedItemIndex2 !== -1) {
                  var prevItemIndex = _selectedItemIndex2.itemIndex - 1;

                  if (prevItemIndex >= 0) {
                    this.selectItem(event, this.optionsToDisplay[_selectedItemIndex2.groupIndex].items[prevItemIndex]);
                    this.selectedOptionUpdated = true;
                  } else if (prevItemIndex < 0) {
                    var prevGroup = this.optionsToDisplay[_selectedItemIndex2.groupIndex - 1];

                    if (prevGroup) {
                      this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                      this.selectedOptionUpdated = true;
                    }
                  }
                }
              } else {
                var _selectedItemIndex3 = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

                var prevEnabledOption = this.findPrevEnabledOption(_selectedItemIndex3);

                if (prevEnabledOption) {
                  this.selectItem(event, prevEnabledOption);
                  this.selectedOptionUpdated = true;
                }
              }

              event.preventDefault();
              break;
            //space

            case 32:
            case 32:
              if (!this.overlayVisible) {
                this.show();
                event.preventDefault();
              }

              break;
            //enter

            case 13:
              if (!this.filter || this.optionsToDisplay && this.optionsToDisplay.length > 0) {
                this.hide(event);
              }

              event.preventDefault();
              break;
            //escape and tab

            case 27:
            case 9:
              this.hide(event);
              break;
            //search item based on keyboard input

            default:
              if (search) {
                this.search(event);
              }

              break;
          }
        }
      }, {
        key: "search",
        value: function search(event) {
          var _this5 = this;

          if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
          }

          var _char = event.key;
          this.previousSearchChar = this.currentSearchChar;
          this.currentSearchChar = _char;
          if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + _char : _char;
          var newOption;

          if (this.group) {
            var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : {
              groupIndex: 0,
              itemIndex: 0
            };
            newOption = this.searchOptionWithinGroup(searchIndex);
          } else {
            var _searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

            newOption = this.searchOption(++_searchIndex);
          }

          if (newOption && !newOption.disabled) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
          }

          this.searchTimeout = setTimeout(function () {
            _this5.searchValue = null;
          }, 250);
        }
      }, {
        key: "searchOption",
        value: function searchOption(index) {
          var option;

          if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);

            if (!option) {
              option = this.searchOptionInRange(0, index);
            }
          }

          return option;
        }
      }, {
        key: "searchOptionInRange",
        value: function searchOptionInRange(start, end) {
          for (var i = start; i < end; i++) {
            var opt = this.optionsToDisplay[i];

            if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
              return opt;
            }
          }

          return null;
        }
      }, {
        key: "searchOptionWithinGroup",
        value: function searchOptionWithinGroup(index) {
          var option;

          if (this.searchValue) {
            for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
              for (var j = index.groupIndex === i ? index.itemIndex + 1 : 0; j < this.optionsToDisplay[i].items.length; j++) {
                var opt = this.optionsToDisplay[i].items[j];

                if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                  return opt;
                }
              }
            }

            if (!option) {
              for (var _i3 = 0; _i3 <= index.groupIndex; _i3++) {
                for (var _j = 0; _j < (index.groupIndex === _i3 ? index.itemIndex : this.optionsToDisplay[_i3].items.length); _j++) {
                  var _opt = this.optionsToDisplay[_i3].items[_j];

                  if (_opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !_opt.disabled) {
                    return _opt;
                  }
                }
              }
            }
          }

          return null;
        }
      }, {
        key: "findOptionIndex",
        value: function findOptionIndex(val, opts) {
          var index = -1;

          if (opts) {
            for (var i = 0; i < opts.length; i++) {
              if (val == null && opts[i].value == null || primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].equals(val, opts[i].value, this.dataKey)) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "findOptionGroupIndex",
        value: function findOptionGroupIndex(val, opts) {
          var groupIndex, itemIndex;

          if (opts) {
            for (var i = 0; i < opts.length; i++) {
              groupIndex = i;
              itemIndex = this.findOptionIndex(val, opts[i].items);

              if (itemIndex !== -1) {
                break;
              }
            }
          }

          if (itemIndex !== -1) {
            return {
              groupIndex: groupIndex,
              itemIndex: itemIndex
            };
          } else {
            return -1;
          }
        }
      }, {
        key: "findOption",
        value: function findOption(val, opts, inGroup) {
          if (this.group && !inGroup) {
            var opt;

            if (opts && opts.length) {
              var _iterator = _createForOfIteratorHelper(opts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var optgroup = _step.value;
                  opt = this.findOption(val, optgroup.items, true);

                  if (opt) {
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return opt;
          } else {
            var index = this.findOptionIndex(val, opts);
            return index != -1 ? opts[index] : null;
          }
        }
      }, {
        key: "onFilter",
        value: function onFilter(event) {
          var inputValue = event.target.value;

          if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
          } else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
          }

          this.optionsChanged = true;
        }
      }, {
        key: "activateFilter",
        value: function activateFilter() {
          var searchFields = this.filterBy.split(',');

          if (this.options && this.options.length) {
            if (this.group) {
              var filteredGroups = [];

              var _iterator2 = _createForOfIteratorHelper(this.options),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var optgroup = _step2.value;
                  var filteredSubOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"].filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);

                  if (filteredSubOptions && filteredSubOptions.length) {
                    filteredGroups.push({
                      label: optgroup.label,
                      value: optgroup.value,
                      items: filteredSubOptions
                    });
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.optionsToDisplay = filteredGroups;
            } else {
              this.optionsToDisplay = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
            }

            this.optionsChanged = true;
          }
        }
      }, {
        key: "applyFocus",
        value: function applyFocus() {
          if (this.editable) primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.el.nativeElement, 'input[readonly]').focus();
        }
      }, {
        key: "focus",
        value: function focus() {
          this.applyFocus();
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this6 = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
              if (_this6.isOutsideClicked(event)) {
                _this6.hide(event);

                _this6.unbindDocumentClickListener();
              }

              _this6.cd.markForCheck();
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
          if (!primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].isAndroid()) {
            this.hide(event);
          }
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.selectedOption != null;
        }
      }, {
        key: "clear",
        value: function clear(event) {
          this.value = null;
          this.onModelChange(this.value);
          this.onChange.emit({
            originalEvent: event,
            value: this.value
          });
          this.updateSelectedOption(this.value);
          this.updateEditableLabel();
          this.updateFilledState();
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindDocumentResizeListener();
          this.overlay = null;
          this.itemsWrapper = null;
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

    Dropdown.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "scrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "filter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Dropdown.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Dropdown.prototype, "panelStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "panelStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "editable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Dropdown.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Dropdown.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "filterPlaceholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "filterLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "selectId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "dataKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "filterBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "autofocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "resetFilterOnHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "dropdownIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "optionLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "autoDisplayFirst", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "group", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "showClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "emptyFilterMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "virtualScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Dropdown.prototype, "itemSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Dropdown.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "hideTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "ariaFilterLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "filterMatchMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Dropdown.prototype, "maxlength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "tooltip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "tooltipPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "tooltipPositionStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dropdown.prototype, "tooltipStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dropdown.prototype, "autofocusFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], Dropdown.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], Dropdown.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], Dropdown.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], Dropdown.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], Dropdown.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], Dropdown.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('container'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], Dropdown.prototype, "containerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('filter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], Dropdown.prototype, "filterViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('in'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], Dropdown.prototype, "accessibleViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"])], Dropdown.prototype, "viewPort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('editableInput'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], Dropdown.prototype, "editableInputViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])], Dropdown.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], Dropdown.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], Dropdown.prototype, "options", null);
    Dropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'p-dropdown',
      template: "\n         <div #container [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all':true,\n            'ui-state-disabled':disabled, 'ui-dropdown-open':overlayVisible, 'ui-state-focus':focused, 'ui-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" [attr.aria-labelledby]=\"ariaLabelledBy\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\"\n                    [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\" role=\"listbox\">\n            </div>\n            <div class=\"ui-dropdown-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\">\n                    <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n                </span>\n                <span [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder':true,'ui-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</span>\n                <input #editableInput type=\"text\" [attr.maxlength]=\"maxlength\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" (click)=\"onEditableInputClick()\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n                <i class=\"ui-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            </div>\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\" role=\"button\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\">\n                <span class=\"ui-dropdown-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'ui-dropdown-panel  ui-widget ui-widget-content ui-corner-all ui-shadow'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                    <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilter($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                    <span class=\"ui-dropdown-filter-icon pi pi-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"ui-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{optgroup.label||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))\" class=\"ui-dropdown-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{hideTransitionParams}}'))])],
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focused'
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])], Dropdown);

    var DropdownModule = /*#__PURE__*/_createClass(function DropdownModule() {
      _classCallCheck(this, DropdownModule);
    });

    DropdownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"]],
      exports: [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
      declarations: [Dropdown, DropdownItem]
    })], DropdownModule);
    /***/
  },

  /***/
  "./src/app/components/dropdown/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/dropdown/public_api.ts ***!
    \***************************************************/

  /*! exports provided: DROPDOWN_VALUE_ACCESSOR, DropdownItem, Dropdown, DropdownModule */

  /***/
  function _src_app_components_dropdown_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dropdown */
    "./src/app/components/dropdown/dropdown.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_0__["DROPDOWN_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownItem", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Dropdown", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownModule", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_0__["DropdownModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac-es5.js.map