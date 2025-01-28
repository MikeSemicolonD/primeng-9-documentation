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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-chips-chipsdemo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/chips/chips.ts":
  /*!*******************************************!*\
    !*** ./src/app/components/chips/chips.ts ***!
    \*******************************************/

  /*! exports provided: CHIPS_VALUE_ACCESSOR, Chips, ChipsModule */

  /***/
  function _src_app_components_chips_chipsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHIPS_VALUE_ACCESSOR", function () {
      return CHIPS_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chips", function () {
      return Chips;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipsModule", function () {
      return ChipsModule;
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


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CHIPS_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Chips;
      }),
      multi: true
    };

    var Chips = /*#__PURE__*/function () {
      function Chips(el) {
        _classCallCheck(this, Chips);

        this.el = el;
        this.allowDuplicate = true;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChipClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};
      }

      return _createClass(Chips, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'item':
                _this.itemTemplate = item.template;
                break;

              default:
                _this.itemTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.inputViewChild.nativeElement.focus();
        }
      }, {
        key: "onInput",
        value: function onInput() {
          this.updateFilledState();
        }
      }, {
        key: "onPaste",
        value: function onPaste(event) {
          var _this2 = this;

          if (this.separator) {
            var pastedData = (event.clipboardData || window['clipboardData']).getData('Text');
            pastedData.split(this.separator).forEach(function (val) {
              _this2.addItem(event, val, true);
            });
            this.inputViewChild.nativeElement.value = '';
          }

          this.updateFilledState();
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          if (!this.value || this.value.length === 0) {
            this.filled = this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != '';
          } else {
            this.filled = true;
          }
        }
      }, {
        key: "onItemClick",
        value: function onItemClick(event, item) {
          this.onChipClick.emit({
            originalEvent: event,
            value: item
          });
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
          this.updateMaxedOut();
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
        key: "resolveFieldData",
        value: function resolveFieldData(data, field) {
          if (data && field) {
            if (field.indexOf('.') == -1) {
              return data[field];
            } else {
              var fields = field.split('.');
              var value = data;

              for (var i = 0, len = fields.length; i < len; ++i) {
                value = value[fields[i]];
              }

              return value;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focus = true;
          this.onFocus.emit(event);
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focus = false;

          if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
            this.addItem(event, this.inputViewChild.nativeElement.value, false);
          }

          this.onModelTouched();
          this.onBlur.emit(event);
        }
      }, {
        key: "removeItem",
        value: function removeItem(event, index) {
          if (this.disabled) {
            return;
          }

          var removedItem = this.value[index];
          this.value = this.value.filter(function (val, i) {
            return i != index;
          });
          this.onModelChange(this.value);
          this.onRemove.emit({
            originalEvent: event,
            value: removedItem
          });
          this.updateFilledState();
          this.updateMaxedOut();
        }
      }, {
        key: "addItem",
        value: function addItem(event, item, preventDefault) {
          this.value = this.value || [];

          if (item && item.trim().length) {
            if (this.allowDuplicate || this.value.indexOf(item) === -1) {
              this.value = [].concat(_toConsumableArray(this.value), [item]);
              this.onModelChange(this.value);
              this.onAdd.emit({
                originalEvent: event,
                value: item
              });
            }
          }

          this.updateFilledState();
          this.updateMaxedOut();
          this.inputViewChild.nativeElement.value = '';

          if (preventDefault) {
            event.preventDefault();
          }
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          switch (event.which) {
            //backspace
            case 8:
              if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
                this.value = _toConsumableArray(this.value);
                var removedItem = this.value.pop();
                this.onModelChange(this.value);
                this.onRemove.emit({
                  originalEvent: event,
                  value: removedItem
                });
                this.updateFilledState();
              }

              break;
            //enter

            case 13:
              this.addItem(event, this.inputViewChild.nativeElement.value, true);
              break;

            case 9:
              if (this.addOnTab && this.inputViewChild.nativeElement.value !== '') {
                this.addItem(event, this.inputViewChild.nativeElement.value, true);
              }

              break;

            default:
              if (this.max && this.value && this.max === this.value.length) {
                event.preventDefault();
              } else if (this.separator) {
                if (this.separator === ',' && event.which === 188) {
                  this.addItem(event, this.inputViewChild.nativeElement.value, true);
                }
              }

              break;
          }
        }
      }, {
        key: "updateMaxedOut",
        value: function updateMaxedOut() {
          if (this.inputViewChild && this.inputViewChild.nativeElement) {
            if (this.max && this.value && this.max === this.value.length) this.inputViewChild.nativeElement.disabled = true;else this.inputViewChild.nativeElement.disabled = this.disabled || false;
          }
        }
      }]);
    }();

    Chips.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Chips.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Chips.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Chips.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Chips.prototype, "field", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Chips.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Chips.prototype, "max", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Chips.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Chips.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Chips.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Chips.prototype, "allowDuplicate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Chips.prototype, "inputStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Chips.prototype, "inputStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Chips.prototype, "addOnTab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Chips.prototype, "addOnBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Chips.prototype, "separator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Chips.prototype, "onAdd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Chips.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Chips.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Chips.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Chips.prototype, "onChipClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputtext'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Chips.prototype, "inputViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Chips.prototype, "templates", void 0);
    Chips = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-chips',
      template: "\n        <div [ngClass]=\"'ui-chips ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick()\">\n            <ul [ngClass]=\"{'ui-inputtext ui-state-default ui-corner-all':true,'ui-state-focus':focus,'ui-state-disabled':disabled}\">\n                <li #token *ngFor=\"let item of value; let i = index;\" class=\"ui-chips-token ui-state-highlight ui-corner-all\" (click)=\"onItemClick($event, item)\">\n                    <span *ngIf=\"!disabled\" class=\"ui-chips-token-icon pi pi-fw pi-times\" (click)=\"removeItem($event,i)\"></span>\n                    <span *ngIf=\"!itemTemplate\" class=\"ui-chips-token-label\">{{field ? resolveFieldData(item,field) : item}}</span>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n                </li>\n                <li class=\"ui-chips-input-token\">\n                    <input #inputtext type=\"text\" [attr.id]=\"inputId\" [attr.placeholder]=\"(value && value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" (keydown)=\"onKeydown($event)\"\n                    (input)=\"onInput()\" (paste)=\"onPaste($event)\" [attr.aria-labelledby]=\"ariaLabelledBy\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" [disabled]=\"disabled\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\">\n                </li>\n            </ul>\n        </div>\n    ",
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focus'
      },
      providers: [CHIPS_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], Chips);

    var ChipsModule = /*#__PURE__*/_createClass(function ChipsModule() {
      _classCallCheck(this, ChipsModule);
    });

    ChipsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      exports: [Chips, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: [Chips]
    })], ChipsModule);
    /***/
  },

  /***/
  "./src/app/components/chips/public_api.ts":
  /*!************************************************!*\
    !*** ./src/app/components/chips/public_api.ts ***!
    \************************************************/

  /*! exports provided: CHIPS_VALUE_ACCESSOR, Chips, ChipsModule */

  /***/
  function _src_app_components_chips_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _chips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chips */
    "./src/app/components/chips/chips.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CHIPS_VALUE_ACCESSOR", function () {
      return _chips__WEBPACK_IMPORTED_MODULE_0__["CHIPS_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Chips", function () {
      return _chips__WEBPACK_IMPORTED_MODULE_0__["Chips"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChipsModule", function () {
      return _chips__WEBPACK_IMPORTED_MODULE_0__["ChipsModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-chips-chipsdemo-module~components-inputnumber-inputnumberdemo-module-es5.js.map