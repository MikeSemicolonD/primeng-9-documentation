function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-slider-sliderdemo-module~components~6ae61e05"], {
  /***/
  "./src/app/components/slider/public_api.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/slider/public_api.ts ***!
    \*************************************************/

  /*! exports provided: SLIDER_VALUE_ACCESSOR, Slider, SliderModule */

  /***/
  function _src_app_components_slider_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./slider */
    "./src/app/components/slider/slider.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SLIDER_VALUE_ACCESSOR", function () {
      return _slider__WEBPACK_IMPORTED_MODULE_0__["SLIDER_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Slider", function () {
      return _slider__WEBPACK_IMPORTED_MODULE_0__["Slider"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SliderModule", function () {
      return _slider__WEBPACK_IMPORTED_MODULE_0__["SliderModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/slider/slider.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/slider/slider.ts ***!
    \*********************************************/

  /*! exports provided: SLIDER_VALUE_ACCESSOR, Slider, SliderModule */

  /***/
  function _src_app_components_slider_sliderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SLIDER_VALUE_ACCESSOR", function () {
      return SLIDER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Slider", function () {
      return Slider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderModule", function () {
      return SliderModule;
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


    var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SLIDER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Slider;
      }),
      multi: true
    };

    var Slider = /*#__PURE__*/function () {
      function Slider(el, renderer, ngZone, cd) {
        _classCallCheck(this, Slider);

        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cd = cd;
        this.min = 0;
        this.max = 100;
        this.orientation = 'horizontal';
        this.tabindex = 0;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleValues = [];

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.handleIndex = 0;
      }

      return _createClass(Slider, [{
        key: "onMouseDown",
        value: function onMouseDown(event, index) {
          if (this.disabled) {
            return;
          }

          this.dragging = true;
          this.updateDomData();
          this.sliderHandleClick = true;
          this.handleIndex = index;
          this.bindDragListeners();
          event.target.focus();
          event.preventDefault();
        }
      }, {
        key: "onTouchStart",
        value: function onTouchStart(event, index) {
          if (this.disabled) {
            return;
          }

          var touchobj = event.changedTouches[0];
          this.startHandleValue = this.range ? this.handleValues[index] : this.handleValue;
          this.dragging = true;
          this.handleIndex = index;

          if (this.orientation === 'horizontal') {
            this.startx = parseInt(touchobj.clientX, 10);
            this.barWidth = this.el.nativeElement.children[0].offsetWidth;
          } else {
            this.starty = parseInt(touchobj.clientY, 10);
            this.barHeight = this.el.nativeElement.children[0].offsetHeight;
          }

          event.preventDefault();
        }
      }, {
        key: "onTouchMove",
        value: function onTouchMove(event, index) {
          if (this.disabled) {
            return;
          }

          var touchobj = event.changedTouches[0],
              handleValue = 0;

          if (this.orientation === 'horizontal') {
            handleValue = Math.floor((parseInt(touchobj.clientX, 10) - this.startx) * 100 / this.barWidth) + this.startHandleValue;
          } else {
            handleValue = Math.floor((this.starty - parseInt(touchobj.clientY, 10)) * 100 / this.barHeight) + this.startHandleValue;
          }

          this.setValueFromHandle(event, handleValue);
          event.preventDefault();
        }
      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event, index) {
          if (this.disabled) {
            return;
          }

          this.dragging = false;
          if (this.range) this.onSlideEnd.emit({
            originalEvent: event,
            values: this.values
          });else this.onSlideEnd.emit({
            originalEvent: event,
            value: this.value
          });
          event.preventDefault();
        }
      }, {
        key: "onBarClick",
        value: function onBarClick(event) {
          if (this.disabled) {
            return;
          }

          if (!this.sliderHandleClick) {
            this.updateDomData();
            this.handleChange(event);
          }

          this.sliderHandleClick = false;
        }
      }, {
        key: "onHandleKeydown",
        value: function onHandleKeydown(event, handleIndex) {
          if (event.which == 38 || event.which == 39) {
            this.spin(event, 1, handleIndex);
          } else if (event.which == 37 || event.which == 40) {
            this.spin(event, -1, handleIndex);
          }
        }
      }, {
        key: "spin",
        value: function spin(event, dir, handleIndex) {
          var step = (this.step || 1) * dir;

          if (this.range) {
            this.handleIndex = handleIndex;
            this.updateValue(this.values[this.handleIndex] + step);
            this.updateHandleValue();
          } else {
            this.updateValue(this.value + step);
            this.updateHandleValue();
          }

          event.preventDefault();
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          var handleValue = this.calculateHandleValue(event);
          this.setValueFromHandle(event, handleValue);
        }
      }, {
        key: "bindDragListeners",
        value: function bindDragListeners() {
          var _this = this;

          this.ngZone.runOutsideAngular(function () {
            if (!_this.dragListener) {
              _this.dragListener = _this.renderer.listen('document', 'mousemove', function (event) {
                if (_this.dragging) {
                  _this.ngZone.run(function () {
                    _this.handleChange(event);
                  });
                }
              });
            }

            if (!_this.mouseupListener) {
              _this.mouseupListener = _this.renderer.listen('document', 'mouseup', function (event) {
                if (_this.dragging) {
                  _this.dragging = false;

                  _this.ngZone.run(function () {
                    if (_this.range) {
                      _this.onSlideEnd.emit({
                        originalEvent: event,
                        values: _this.values
                      });
                    } else {
                      _this.onSlideEnd.emit({
                        originalEvent: event,
                        value: _this.value
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }, {
        key: "unbindDragListeners",
        value: function unbindDragListeners() {
          if (this.dragListener) {
            this.dragListener();
          }

          if (this.mouseupListener) {
            this.mouseupListener();
          }
        }
      }, {
        key: "setValueFromHandle",
        value: function setValueFromHandle(event, handleValue) {
          var newValue = this.getValueFromHandle(handleValue);

          if (this.range) {
            if (this.step) {
              this.handleStepChange(newValue, this.values[this.handleIndex]);
            } else {
              this.handleValues[this.handleIndex] = handleValue;
              this.updateValue(newValue, event);
            }
          } else {
            if (this.step) {
              this.handleStepChange(newValue, this.value);
            } else {
              this.handleValue = handleValue;
              this.updateValue(newValue, event);
            }
          }
        }
      }, {
        key: "handleStepChange",
        value: function handleStepChange(newValue, oldValue) {
          var diff = newValue - oldValue;
          var val = oldValue;

          if (diff < 0) {
            val = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
          } else if (diff > 0) {
            val = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
          }

          this.updateValue(val);
          this.updateHandleValue();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.range) this.values = value || [0, 0];else this.value = value || 0;
          this.updateHandleValue();
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
        key: "rangeStartLeft",
        get: function get() {
          return this.isVertical() ? 'auto' : this.handleValues[0] + '%';
        }
      }, {
        key: "rangeStartBottom",
        get: function get() {
          return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
        }
      }, {
        key: "rangeEndLeft",
        get: function get() {
          return this.isVertical() ? 'auto' : this.handleValues[1] + '%';
        }
      }, {
        key: "rangeEndBottom",
        get: function get() {
          return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
        }
      }, {
        key: "isVertical",
        value: function isVertical() {
          return this.orientation === 'vertical';
        }
      }, {
        key: "updateDomData",
        value: function updateDomData() {
          var rect = this.el.nativeElement.children[0].getBoundingClientRect();
          this.initX = rect.left + primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getWindowScrollLeft();
          this.initY = rect.top + primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getWindowScrollTop();
          this.barWidth = this.el.nativeElement.children[0].offsetWidth;
          this.barHeight = this.el.nativeElement.children[0].offsetHeight;
        }
      }, {
        key: "calculateHandleValue",
        value: function calculateHandleValue(event) {
          if (this.orientation === 'horizontal') return (event.pageX - this.initX) * 100 / this.barWidth;else return (this.initY + this.barHeight - event.pageY) * 100 / this.barHeight;
        }
      }, {
        key: "updateHandleValue",
        value: function updateHandleValue() {
          if (this.range) {
            this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
            this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
          } else {
            if (this.value < this.min) this.handleValue = 0;else if (this.value > this.max) this.handleValue = 100;else this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
          }
        }
      }, {
        key: "updateValue",
        value: function updateValue(val, event) {
          if (this.range) {
            var value = val;

            if (this.handleIndex == 0) {
              if (value < this.min) {
                value = this.min;
                this.handleValues[0] = 0;
              } else if (value > this.values[1]) {
                value = this.values[1];
                this.handleValues[0] = this.handleValues[1];
              }

              this.sliderHandleStart.nativeElement.focus();
            } else {
              if (value > this.max) {
                value = this.max;
                this.handleValues[1] = 100;
              } else if (value < this.values[0]) {
                value = this.values[0];
                this.handleValues[1] = this.handleValues[0];
              }

              this.sliderHandleEnd.nativeElement.focus();
            }

            this.values[this.handleIndex] = this.getNormalizedValue(value);
            this.values = this.values.slice();
            this.onModelChange(this.values);
            this.onChange.emit({
              event: event,
              values: this.values
            });
          } else {
            if (val < this.min) {
              val = this.min;
              this.handleValue = 0;
            } else if (val > this.max) {
              val = this.max;
              this.handleValue = 100;
            }

            this.value = this.getNormalizedValue(val);
            this.onModelChange(this.value);
            this.onChange.emit({
              event: event,
              value: this.value
            });
            this.sliderHandle.nativeElement.focus();
          }
        }
      }, {
        key: "getValueFromHandle",
        value: function getValueFromHandle(handleValue) {
          return (this.max - this.min) * (handleValue / 100) + this.min;
        }
      }, {
        key: "getDecimalsCount",
        value: function getDecimalsCount(value) {
          if (value && Math.floor(value) !== value) return value.toString().split(".")[1].length || 0;
          return 0;
        }
      }, {
        key: "getNormalizedValue",
        value: function getNormalizedValue(val) {
          var decimalsCount = this.getDecimalsCount(this.step);

          if (decimalsCount > 0) {
            return +val.toFixed(decimalsCount);
          } else {
            return Math.floor(val);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindDragListeners();
        }
      }]);
    }();

    Slider.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Slider.prototype, "animate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Slider.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Slider.prototype, "min", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Slider.prototype, "max", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Slider.prototype, "orientation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Slider.prototype, "step", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Slider.prototype, "range", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Slider.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Slider.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Slider.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Slider.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Slider.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Slider.prototype, "onSlideEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sliderHandle"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Slider.prototype, "sliderHandle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sliderHandleStart"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Slider.prototype, "sliderHandleStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sliderHandleEnd"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Slider.prototype, "sliderHandleEnd", void 0);
    Slider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-slider',
      template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-slider ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled,\n            'ui-slider-horizontal':orientation == 'horizontal','ui-slider-vertical':orientation == 'vertical','ui-slider-animate':animate}\"\n            (click)=\"onBarClick($event)\">\n            <span *ngIf=\"range && orientation == 'horizontal'\" class=\"ui-slider-range ui-widget-header ui-corner-all\" [ngStyle]=\"{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"range && orientation == 'vertical'\" class=\"ui-slider-range ui-widget-header ui-corner-all\" [ngStyle]=\"{'bottom':handleValues[0] + '%',height: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"!range && orientation=='vertical'\" class=\"ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all\" [ngStyle]=\"{'height': handleValue + '%'}\"></span>\n            <span *ngIf=\"!range && orientation=='horizontal'\" class=\"ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all\" [ngStyle]=\"{'width': handleValue + '%'}\"></span>\n            <span #sliderHandle *ngIf=\"!range\" [attr.tabindex]=\"tabindex\" (keydown)=\"onHandleKeydown($event)\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" (mousedown)=\"onMouseDown($event)\" (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd($event)\"\n                [style.transition]=\"dragging ? 'none': null\" [ngStyle]=\"{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n            <span #sliderHandleStart *ngIf=\"range\" [attr.tabindex]=\"tabindex\" (keydown)=\"onHandleKeydown($event,0)\" (mousedown)=\"onMouseDown($event,0)\" (touchstart)=\"onTouchStart($event,0)\" (touchmove)=\"onTouchMove($event,0)\" (touchend)=\"onTouchEnd($event)\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" \n                [ngStyle]=\"{'left': rangeStartLeft, 'bottom': rangeStartBottom}\" [ngClass]=\"{'ui-slider-handle-active':handleIndex==0}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value ? value[0] : null\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n            <span #sliderHandleEnd *ngIf=\"range\" [attr.tabindex]=\"tabindex\" (keydown)=\"onHandleKeydown($event,1)\" (mousedown)=\"onMouseDown($event,1)\" (touchstart)=\"onTouchStart($event,1)\" (touchmove)=\"onTouchMove($event,1)\" (touchend)=\"onTouchEnd($event)\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all ui-clickable\" \n                [ngStyle]=\"{'left': rangeEndLeft, 'bottom': rangeEndBottom}\" [ngClass]=\"{'ui-slider-handle-active':handleIndex==1}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value ? value[1] : null\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n        </div>\n    ",
      providers: [SLIDER_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Slider);

    var SliderModule = /*#__PURE__*/_createClass(function SliderModule() {
      _classCallCheck(this, SliderModule);
    });

    SliderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [Slider],
      declarations: [Slider]
    })], SliderModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-slider-sliderdemo-module~components~6ae61e05-es5.js.map