function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-spinner-spinnerdemo-module"], {
  /***/
  "./src/app/components/spinner/public_api.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/spinner/public_api.ts ***!
    \**************************************************/

  /*! exports provided: SPINNER_VALUE_ACCESSOR, Spinner, SpinnerModule */

  /***/
  function _src_app_components_spinner_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./spinner */
    "./src/app/components/spinner/spinner.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SPINNER_VALUE_ACCESSOR", function () {
      return _spinner__WEBPACK_IMPORTED_MODULE_0__["SPINNER_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Spinner", function () {
      return _spinner__WEBPACK_IMPORTED_MODULE_0__["Spinner"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SpinnerModule", function () {
      return _spinner__WEBPACK_IMPORTED_MODULE_0__["SpinnerModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/spinner/spinner.ts":
  /*!***********************************************!*\
    !*** ./src/app/components/spinner/spinner.ts ***!
    \***********************************************/

  /*! exports provided: SPINNER_VALUE_ACCESSOR, Spinner, SpinnerModule */

  /***/
  function _src_app_components_spinner_spinnerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPINNER_VALUE_ACCESSOR", function () {
      return SPINNER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Spinner", function () {
      return Spinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerModule", function () {
      return SpinnerModule;
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


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SPINNER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Spinner;
      }),
      multi: true
    };

    var Spinner = /*#__PURE__*/function () {
      function Spinner(el, cd) {
        _classCallCheck(this, Spinner);

        this.el = el;
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._step = 1;

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.keyPattern = /[0-9\+\-]/;
        this.negativeSeparator = '-';
      }

      return _createClass(Spinner, [{
        key: "step",
        get: function get() {
          return this._step;
        },
        set: function set(val) {
          this._step = val;

          if (this._step != null) {
            var tokens = this.step.toString().split(/[,]|[.]/);
            this.calculatedPrecision = tokens[1] ? tokens[1].length : undefined;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.formatInput) {
            this.localeDecimalSeparator = 1.1.toLocaleString().substring(1, 2);
            this.localeThousandSeparator = 1000 .toLocaleString().substring(1, 2);
            this.thousandRegExp = new RegExp("[".concat(this.thousandSeparator || this.localeThousandSeparator, "]"), 'gim');

            if (this.decimalSeparator && this.thousandSeparator && this.decimalSeparator === this.thousandSeparator) {
              console.warn("thousandSeparator and decimalSeparator cannot have the same value.");
            }
          }
        }
      }, {
        key: "repeat",
        value: function repeat(event, interval, dir) {
          var _this = this;

          var i = interval || 500;
          this.clearTimer();
          this.timer = setTimeout(function () {
            _this.repeat(event, 40, dir);
          }, i);
          this.spin(event, dir);
        }
      }, {
        key: "spin",
        value: function spin(event, dir) {
          var step = this.step * dir;
          var currentValue;
          var precision = this.getPrecision();
          if (this.value) currentValue = typeof this.value === 'string' ? this.parseValue(this.value) : this.value;else currentValue = 0;
          if (precision) this.value = parseFloat(this.toFixed(currentValue + step, precision));else this.value = currentValue + step;

          if (this.maxlength !== undefined && this.value.toString().length > this.maxlength) {
            this.value = currentValue;
          }

          if (this.min !== undefined && this.value < this.min) {
            this.value = this.min;
          }

          if (this.max !== undefined && this.value > this.max) {
            this.value = this.max;
          }

          this.formatValue();
          this.onModelChange(this.value);
          this.onChange.emit(event);
        }
      }, {
        key: "getPrecision",
        value: function getPrecision() {
          return this.precision === undefined ? this.calculatedPrecision : this.precision;
        }
      }, {
        key: "toFixed",
        value: function toFixed(value, precision) {
          var power = Math.pow(10, precision || 0);
          return String(Math.round(value * power) / power);
        }
      }, {
        key: "onUpButtonMousedown",
        value: function onUpButtonMousedown(event) {
          if (!this.disabled) {
            this.inputfieldViewChild.nativeElement.focus();
            this.repeat(event, null, 1);
            this.updateFilledState();
            event.preventDefault();
          }
        }
      }, {
        key: "onUpButtonMouseup",
        value: function onUpButtonMouseup(event) {
          if (!this.disabled) {
            this.clearTimer();
          }
        }
      }, {
        key: "onUpButtonMouseleave",
        value: function onUpButtonMouseleave(event) {
          if (!this.disabled) {
            this.clearTimer();
          }
        }
      }, {
        key: "onDownButtonMousedown",
        value: function onDownButtonMousedown(event) {
          if (!this.disabled) {
            this.inputfieldViewChild.nativeElement.focus();
            this.repeat(event, null, -1);
            this.updateFilledState();
            event.preventDefault();
          }
        }
      }, {
        key: "onDownButtonMouseup",
        value: function onDownButtonMouseup(event) {
          if (!this.disabled) {
            this.clearTimer();
          }
        }
      }, {
        key: "onDownButtonMouseleave",
        value: function onDownButtonMouseleave(event) {
          if (!this.disabled) {
            this.clearTimer();
          }
        }
      }, {
        key: "onInputKeydown",
        value: function onInputKeydown(event) {
          if (event.which == 38) {
            this.spin(event, 1);
            event.preventDefault();
          } else if (event.which == 40) {
            this.spin(event, -1);
            event.preventDefault();
          }
        }
      }, {
        key: "onInputChange",
        value: function onInputChange(event) {
          this.onChange.emit(event);
        }
      }, {
        key: "onInput",
        value: function onInput(event) {
          this.value = this.parseValue(event.target.value);
          this.onModelChange(this.value);
          this.updateFilledState();
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focus = false;
          this.formatValue();
          this.onModelTouched();
          this.onBlur.emit(event);
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focus = true;
          this.onFocus.emit(event);
        }
      }, {
        key: "parseValue",
        value: function parseValue(val) {
          var value;
          var precision = this.getPrecision();

          if (val.trim() === '') {
            value = null;
          } else {
            if (this.formatInput) {
              val = val.replace(this.thousandRegExp, '');
            }

            if (precision) {
              val = this.formatInput ? val.replace(this.decimalSeparator || this.localeDecimalSeparator, '.') : val.replace(',', '.');
              value = parseFloat(val);
            } else {
              value = parseInt(val, 10);
            }

            if (!isNaN(value)) {
              if (this.max !== null && value > this.max) {
                value = this.max;
              }

              if (this.min !== null && value < this.min) {
                value = this.min;
              }
            } else {
              value = null;
            }
          }

          return value;
        }
      }, {
        key: "formatValue",
        value: function formatValue() {
          var value = this.value;
          var precision = this.getPrecision();

          if (value != null) {
            if (this.formatInput) {
              value = value.toLocaleString(undefined, {
                maximumFractionDigits: 20
              });

              if (this.decimalSeparator && this.thousandSeparator) {
                value = value.split(this.localeDecimalSeparator);

                if (precision && value[1]) {
                  value[1] = (this.decimalSeparator || this.localeDecimalSeparator) + value[1];
                }

                if (this.thousandSeparator && value[0].length > 3) {
                  value[0] = value[0].replace(new RegExp("[".concat(this.localeThousandSeparator, "]"), 'gim'), this.thousandSeparator);
                }

                value = value.join('');
              }
            }

            this.formattedValue = value.toString();
          } else {
            this.formattedValue = null;
          }

          if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
            this.inputfieldViewChild.nativeElement.value = this.formattedValue;
          }
        }
      }, {
        key: "clearTimer",
        value: function clearTimer() {
          if (this.timer) {
            clearInterval(this.timer);
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
          this.formatValue();
          this.updateFilledState();
          this.cd.markForCheck();
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
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.value !== undefined && this.value != null;
        }
      }]);
    }();

    Spinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Spinner.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Spinner.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Spinner.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Spinner.prototype, "min", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Spinner.prototype, "max", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Spinner.prototype, "maxlength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Spinner.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Spinner.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Spinner.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Spinner.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Spinner.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Spinner.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Spinner.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Spinner.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Spinner.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Spinner.prototype, "inputStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Spinner.prototype, "inputStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Spinner.prototype, "formatInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Spinner.prototype, "decimalSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Spinner.prototype, "thousandSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Spinner.prototype, "precision", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputfield'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Spinner.prototype, "inputfieldViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Spinner.prototype, "step", null);
    Spinner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-spinner',
      template: "\n        <span class=\"ui-spinner ui-widget ui-corner-all\">\n            <input #inputfield type=\"text\" [attr.id]=\"inputId\" [value]=\"formattedValue||null\" [attr.name]=\"name\" [attr.aria-valumin]=\"min\" [attr.aria-valuemax]=\"max\" [attr.aria-valuenow]=\"value\" [attr.aria-labelledby]=\"ariaLabelledBy\"\n            [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [attr.placeholder]=\"placeholder\" [disabled]=\"disabled\" [readonly]=\"readonly\" [attr.required]=\"required\"\n            (keydown)=\"onInputKeydown($event)\" (blur)=\"onInputBlur($event)\" (input)=\"onInput($event)\" (change)=\"onInputChange($event)\" (focus)=\"onInputFocus($event)\"\n            [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [ngClass]=\"'ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all'\">\n            <button type=\"button\" [ngClass]=\"{'ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}\" [disabled]=\"disabled||readonly\" tabindex=\"-1\" [attr.readonly]=\"readonly\"\n                (mouseleave)=\"onUpButtonMouseleave($event)\" (mousedown)=\"onUpButtonMousedown($event)\" (mouseup)=\"onUpButtonMouseup($event)\">\n                <span class=\"ui-spinner-button-icon pi pi-caret-up ui-clickable\"></span>\n            </button>\n            <button type=\"button\" [ngClass]=\"{'ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default':true,'ui-state-disabled':disabled}\" [disabled]=\"disabled||readonly\" tabindex=\"-1\" [attr.readonly]=\"readonly\"\n                (mouseleave)=\"onDownButtonMouseleave($event)\" (mousedown)=\"onDownButtonMousedown($event)\" (mouseup)=\"onDownButtonMouseup($event)\">\n                <span class=\"ui-spinner-button-icon pi pi-caret-down ui-clickable\"></span>\n            </button>\n        </span>\n    ",
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focus'
      },
      providers: [SPINNER_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Spinner);

    var SpinnerModule = /*#__PURE__*/_createClass(function SpinnerModule() {
      _classCallCheck(this, SpinnerModule);
    });

    SpinnerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"]],
      exports: [Spinner],
      declarations: [Spinner]
    })], SpinnerModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-spinner-spinnerdemo-module-es5.js.map