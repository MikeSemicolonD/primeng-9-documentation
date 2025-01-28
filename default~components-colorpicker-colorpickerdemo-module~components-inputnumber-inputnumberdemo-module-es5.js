function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-colorpicker-colorpickerdemo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/colorpicker/colorpicker.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/colorpicker/colorpicker.ts ***!
    \*******************************************************/

  /*! exports provided: COLORPICKER_VALUE_ACCESSOR, ColorPicker, ColorPickerModule */

  /***/
  function _src_app_components_colorpicker_colorpickerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLORPICKER_VALUE_ACCESSOR", function () {
      return COLORPICKER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPicker", function () {
      return ColorPicker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function () {
      return ColorPickerModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var COLORPICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return ColorPicker;
      }),
      multi: true
    };

    var ColorPicker = /*#__PURE__*/function () {
      function ColorPicker(el, renderer, cd) {
        _classCallCheck(this, ColorPicker);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.format = 'hex';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultColor = 'ff0000';

        this.onModelChange = function () {};

        this.onModelTouched = function () {};
      }

      return _createClass(ColorPicker, [{
        key: "colorSelector",
        set: function set(element) {
          this.colorSelectorViewChild = element;
        }
      }, {
        key: "colorHandle",
        set: function set(element) {
          this.colorHandleViewChild = element;
        }
      }, {
        key: "hue",
        set: function set(element) {
          this.hueViewChild = element;
        }
      }, {
        key: "hueHandle",
        set: function set(element) {
          this.hueHandleViewChild = element;
        }
      }, {
        key: "onHueMousedown",
        value: function onHueMousedown(event) {
          if (this.disabled) {
            return;
          }

          this.bindDocumentMousemoveListener();
          this.bindDocumentMouseupListener();
          this.hueDragging = true;
          this.pickHue(event);
        }
      }, {
        key: "pickHue",
        value: function pickHue(event) {
          var top = this.hueViewChild.nativeElement.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
          this.value = this.validateHSB({
            h: Math.floor(360 * (150 - Math.max(0, Math.min(150, event.pageY - top))) / 150),
            s: this.value.s,
            b: this.value.b
          });
          this.updateColorSelector();
          this.updateUI();
          this.updateModel();
          this.onChange.emit({
            originalEvent: event,
            value: this.getValueToUpdate()
          });
        }
      }, {
        key: "onColorMousedown",
        value: function onColorMousedown(event) {
          if (this.disabled) {
            return;
          }

          this.bindDocumentMousemoveListener();
          this.bindDocumentMouseupListener();
          this.colorDragging = true;
          this.pickColor(event);
        }
      }, {
        key: "pickColor",
        value: function pickColor(event) {
          var rect = this.colorSelectorViewChild.nativeElement.getBoundingClientRect();
          var top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
          var left = rect.left + document.body.scrollLeft;
          var saturation = Math.floor(100 * Math.max(0, Math.min(150, event.pageX - left)) / 150);
          var brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, event.pageY - top))) / 150);
          this.value = this.validateHSB({
            h: this.value.h,
            s: saturation,
            b: brightness
          });
          this.updateUI();
          this.updateModel();
          this.onChange.emit({
            originalEvent: event,
            value: this.getValueToUpdate()
          });
        }
      }, {
        key: "getValueToUpdate",
        value: function getValueToUpdate() {
          var val;

          switch (this.format) {
            case 'hex':
              val = '#' + this.HSBtoHEX(this.value);
              break;

            case 'rgb':
              val = this.HSBtoRGB(this.value);
              break;

            case 'hsb':
              val = this.value;
              break;
          }

          return val;
        }
      }, {
        key: "updateModel",
        value: function updateModel() {
          this.onModelChange(this.getValueToUpdate());
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value) {
            switch (this.format) {
              case 'hex':
                this.value = this.HEXtoHSB(value);
                break;

              case 'rgb':
                this.value = this.RGBtoHSB(value);
                break;

              case 'hsb':
                this.value = value;
                break;
            }
          } else {
            this.value = this.HEXtoHSB(this.defaultColor);
          }

          this.updateColorSelector();
          this.updateUI();
        }
      }, {
        key: "updateColorSelector",
        value: function updateColorSelector() {
          if (this.colorSelectorViewChild) {
            var hsb = {};
            hsb.s = 100;
            hsb.b = 100;
            hsb.h = this.value.h;
            this.colorSelectorViewChild.nativeElement.style.backgroundColor = '#' + this.HSBtoHEX(hsb);
          }
        }
      }, {
        key: "updateUI",
        value: function updateUI() {
          if (this.colorHandleViewChild && this.hueHandleViewChild.nativeElement) {
            this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + 'px';
            this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + 'px';
            this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + 'px';
          }

          this.inputBgColor = '#' + this.HSBtoHEX(this.value);
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus() {
          this.onModelTouched();
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
              if (!this.inline) {
                this.overlay = event.element;
                this.appendOverlay();

                if (this.autoZIndex) {
                  this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
                }

                this.alignOverlay();
                this.bindDocumentClickListener();
                this.updateColorSelector();
                this.updateUI();
              }

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
          if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.overlay, this.inputViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].relativePosition(this.overlay, this.inputViewChild.nativeElement);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.overlayVisible = false;
        }
      }, {
        key: "onInputClick",
        value: function onInputClick() {
          this.selfClick = true;
          this.togglePanel();
        }
      }, {
        key: "togglePanel",
        value: function togglePanel() {
          if (!this.overlayVisible) this.show();else this.hide();
        }
      }, {
        key: "onInputKeydown",
        value: function onInputKeydown(event) {
          switch (event.which) {
            //space
            case 32:
              this.togglePanel();
              event.preventDefault();
              break;
            //escape and tab

            case 27:
            case 9:
              this.hide();
              break;
          }
        }
      }, {
        key: "onPanelClick",
        value: function onPanelClick() {
          this.selfClick = true;
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
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
              if (!_this.selfClick) {
                _this.overlayVisible = false;

                _this.unbindDocumentClickListener();
              }

              _this.selfClick = false;

              _this.cd.markForCheck();
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
        key: "bindDocumentMousemoveListener",
        value: function bindDocumentMousemoveListener() {
          var _this2 = this;

          if (!this.documentMousemoveListener) {
            this.documentMousemoveListener = this.renderer.listen('document', 'mousemove', function (event) {
              if (_this2.colorDragging) {
                _this2.pickColor(event);
              }

              if (_this2.hueDragging) {
                _this2.pickHue(event);
              }
            });
          }
        }
      }, {
        key: "unbindDocumentMousemoveListener",
        value: function unbindDocumentMousemoveListener() {
          if (this.documentMousemoveListener) {
            this.documentMousemoveListener();
            this.documentMousemoveListener = null;
          }
        }
      }, {
        key: "bindDocumentMouseupListener",
        value: function bindDocumentMouseupListener() {
          var _this3 = this;

          if (!this.documentMouseupListener) {
            this.documentMouseupListener = this.renderer.listen('document', 'mouseup', function () {
              _this3.colorDragging = false;
              _this3.hueDragging = false;

              _this3.unbindDocumentMousemoveListener();

              _this3.unbindDocumentMouseupListener();
            });
          }
        }
      }, {
        key: "unbindDocumentMouseupListener",
        value: function unbindDocumentMouseupListener() {
          if (this.documentMouseupListener) {
            this.documentMouseupListener();
            this.documentMouseupListener = null;
          }
        }
      }, {
        key: "validateHSB",
        value: function validateHSB(hsb) {
          return {
            h: Math.min(360, Math.max(0, hsb.h)),
            s: Math.min(100, Math.max(0, hsb.s)),
            b: Math.min(100, Math.max(0, hsb.b))
          };
        }
      }, {
        key: "validateRGB",
        value: function validateRGB(rgb) {
          return {
            r: Math.min(255, Math.max(0, rgb.r)),
            g: Math.min(255, Math.max(0, rgb.g)),
            b: Math.min(255, Math.max(0, rgb.b))
          };
        }
      }, {
        key: "validateHEX",
        value: function validateHEX(hex) {
          var len = 6 - hex.length;

          if (len > 0) {
            var o = [];

            for (var i = 0; i < len; i++) {
              o.push('0');
            }

            o.push(hex);
            hex = o.join('');
          }

          return hex;
        }
      }, {
        key: "HEXtoRGB",
        value: function HEXtoRGB(hex) {
          var hexValue = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
          return {
            r: hexValue >> 16,
            g: (hexValue & 0x00FF00) >> 8,
            b: hexValue & 0x0000FF
          };
        }
      }, {
        key: "HEXtoHSB",
        value: function HEXtoHSB(hex) {
          return this.RGBtoHSB(this.HEXtoRGB(hex));
        }
      }, {
        key: "RGBtoHSB",
        value: function RGBtoHSB(rgb) {
          var hsb = {
            h: 0,
            s: 0,
            b: 0
          };
          var min = Math.min(rgb.r, rgb.g, rgb.b);
          var max = Math.max(rgb.r, rgb.g, rgb.b);
          var delta = max - min;
          hsb.b = max;
          hsb.s = max != 0 ? 255 * delta / max : 0;

          if (hsb.s != 0) {
            if (rgb.r == max) {
              hsb.h = (rgb.g - rgb.b) / delta;
            } else if (rgb.g == max) {
              hsb.h = 2 + (rgb.b - rgb.r) / delta;
            } else {
              hsb.h = 4 + (rgb.r - rgb.g) / delta;
            }
          } else {
            hsb.h = -1;
          }

          hsb.h *= 60;

          if (hsb.h < 0) {
            hsb.h += 360;
          }

          hsb.s *= 100 / 255;
          hsb.b *= 100 / 255;
          return hsb;
        }
      }, {
        key: "HSBtoRGB",
        value: function HSBtoRGB(hsb) {
          var rgb = {
            r: null,
            g: null,
            b: null
          };
          var h = hsb.h;
          var s = hsb.s * 255 / 100;
          var v = hsb.b * 255 / 100;

          if (s == 0) {
            rgb = {
              r: v,
              g: v,
              b: v
            };
          } else {
            var t1 = v;
            var t2 = (255 - s) * v / 255;
            var t3 = (t1 - t2) * (h % 60) / 60;
            if (h == 360) h = 0;

            if (h < 60) {
              rgb.r = t1;
              rgb.b = t2;
              rgb.g = t2 + t3;
            } else if (h < 120) {
              rgb.g = t1;
              rgb.b = t2;
              rgb.r = t1 - t3;
            } else if (h < 180) {
              rgb.g = t1;
              rgb.r = t2;
              rgb.b = t2 + t3;
            } else if (h < 240) {
              rgb.b = t1;
              rgb.r = t2;
              rgb.g = t1 - t3;
            } else if (h < 300) {
              rgb.b = t1;
              rgb.g = t2;
              rgb.r = t2 + t3;
            } else if (h < 360) {
              rgb.r = t1;
              rgb.g = t2;
              rgb.b = t1 - t3;
            } else {
              rgb.r = 0;
              rgb.g = 0;
              rgb.b = 0;
            }
          }

          return {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
          };
        }
      }, {
        key: "RGBtoHEX",
        value: function RGBtoHEX(rgb) {
          var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];

          for (var key in hex) {
            if (hex[key].length == 1) {
              hex[key] = '0' + hex[key];
            }
          }

          return hex.join('');
        }
      }, {
        key: "HSBtoHEX",
        value: function HSBtoHEX(hsb) {
          return this.RGBtoHEX(this.HSBtoRGB(hsb));
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.overlay = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.restoreOverlayAppend();
          this.onOverlayHide();
        }
      }]);
    }();

    ColorPicker.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ColorPicker.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ColorPicker.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ColorPicker.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ColorPicker.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ColorPicker.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ColorPicker.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ColorPicker.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ColorPicker.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ColorPicker.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ColorPicker.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ColorPicker.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ColorPicker.prototype, "hideTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ColorPicker.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ColorPicker.prototype, "inputViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('colorSelector'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ColorPicker.prototype, "colorSelector", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('colorHandle'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ColorPicker.prototype, "colorHandle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hue'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ColorPicker.prototype, "hue", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hueHandle'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ColorPicker.prototype, "hueHandle", null);
    ColorPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-colorPicker',
      template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-colorpicker ui-widget':true,'ui-colorpicker-overlay':!inline,'ui-colorpicker-dragging':colorDragging||hueDragging}\">\n            <input #input type=\"text\" *ngIf=\"!inline\" class=\"ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all\" readonly=\"readonly\" [ngClass]=\"{'ui-state-disabled': disabled}\"\n                (focus)=\"onInputFocus()\" (click)=\"onInputClick()\" (keydown)=\"onInputKeydown($event)\" [attr.id]=\"inputId\" [attr.tabindex]=\"tabindex\" [disabled]=\"disabled\"\n                [style.backgroundColor]=\"inputBgColor\">\n            <div *ngIf=\"inline || overlayVisible\" [ngClass]=\"{'ui-colorpicker-panel ui-corner-all': true, 'ui-colorpicker-overlay-panel ui-shadow':!inline, 'ui-state-disabled': disabled}\" (click)=\"onPanelClick()\"\n                [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"inline === true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n                <div class=\"ui-colorpicker-content\">\n                    <div #colorSelector class=\"ui-colorpicker-color-selector\" (mousedown)=\"onColorMousedown($event)\">\n                        <div class=\"ui-colorpicker-color\">\n                            <div #colorHandle class=\"ui-colorpicker-color-handle\"></div>\n                        </div>\n                    </div>\n                    <div #hue class=\"ui-colorpicker-hue\" (mousedown)=\"onHueMousedown($event)\">\n                        <div #hueHandle class=\"ui-colorpicker-hue-handle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
      providers: [COLORPICKER_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], ColorPicker);

    var ColorPickerModule = /*#__PURE__*/_createClass(function ColorPickerModule() {
      _classCallCheck(this, ColorPickerModule);
    });

    ColorPickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [ColorPicker],
      declarations: [ColorPicker]
    })], ColorPickerModule);
    /***/
  },

  /***/
  "./src/app/components/colorpicker/public_api.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/colorpicker/public_api.ts ***!
    \******************************************************/

  /*! exports provided: COLORPICKER_VALUE_ACCESSOR, ColorPicker, ColorPickerModule */

  /***/
  function _src_app_components_colorpicker_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _colorpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./colorpicker */
    "./src/app/components/colorpicker/colorpicker.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "COLORPICKER_VALUE_ACCESSOR", function () {
      return _colorpicker__WEBPACK_IMPORTED_MODULE_0__["COLORPICKER_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColorPicker", function () {
      return _colorpicker__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function () {
      return _colorpicker__WEBPACK_IMPORTED_MODULE_0__["ColorPickerModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-colorpicker-colorpickerdemo-module~components-inputnumber-inputnumberdemo-module-es5.js.map