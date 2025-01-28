function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputmask-inputmaskdemo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/inputmask/inputmask.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/inputmask/inputmask.ts ***!
    \***************************************************/

  /*! exports provided: INPUTMASK_VALUE_ACCESSOR, InputMask, InputMaskModule */

  /***/
  function _src_app_components_inputmask_inputmaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INPUTMASK_VALUE_ACCESSOR", function () {
      return INPUTMASK_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputMask", function () {
      return InputMask;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputMaskModule", function () {
      return InputMaskModule;
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


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /*
        Port of jQuery MaskedInput by DigitalBush as a Native Angular2 Component in Typescript without jQuery
        https://github.com/digitalBush/jquery.maskedinput/
    
        Copyright (c) 2007-2014 Josh Bush (digitalbush.com)
    
        Permission is hereby granted, free of charge, to any person
        obtaining a copy of this software and associated documentation
        files (the "Software"), to deal in the Software without
        restriction, including without limitation the rights to use,
        copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the
        Software is furnished to do so, subject to the following
        conditions:
    
        The above copyright notice and this permission notice shall be
        included in all copies or substantial portions of the Software.
    
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
        WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        OTHER DEALINGS IN THE SOFTWARE.
    */


    var INPUTMASK_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return InputMask;
      }),
      multi: true
    };

    var InputMask = /*#__PURE__*/function () {
      function InputMask(el) {
        _classCallCheck(this, InputMask);

        this.el = el;
        this.type = 'text';
        this.slotChar = '_';
        this.autoClear = true;
        this.characterPattern = '[A-Za-z]';
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};
      }

      return _createClass(InputMask, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ua = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getUserAgent();
          this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
          this.initMask();
        }
      }, {
        key: "mask",
        get: function get() {
          return this._mask;
        },
        set: function set(val) {
          this._mask = val;
          this.initMask();
          this.writeValue('');
          this.onModelChange(this.value);
        }
      }, {
        key: "initMask",
        value: function initMask() {
          this.tests = [];
          this.partialPosition = this.mask.length;
          this.len = this.mask.length;
          this.firstNonMaskPos = null;
          this.defs = {
            '9': '[0-9]',
            'a': this.characterPattern,
            '*': "".concat(this.characterPattern, "|[0-9]")
          };
          var maskTokens = this.mask.split('');

          for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];

            if (c == '?') {
              this.len--;
              this.partialPosition = i;
            } else if (this.defs[c]) {
              this.tests.push(new RegExp(this.defs[c]));

              if (this.firstNonMaskPos === null) {
                this.firstNonMaskPos = this.tests.length - 1;
              }

              if (i < this.partialPosition) {
                this.lastRequiredNonMaskPos = this.tests.length - 1;
              }
            } else {
              this.tests.push(null);
            }
          }

          this.buffer = [];

          for (var _i = 0; _i < maskTokens.length; _i++) {
            var _c = maskTokens[_i];

            if (_c != '?') {
              if (this.defs[_c]) this.buffer.push(this.getPlaceholder(_i));else this.buffer.push(_c);
            }
          }

          this.defaultBuffer = this.buffer.join('');
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          if (this.inputViewChild && this.inputViewChild.nativeElement) {
            if (this.value == undefined || this.value == null) this.inputViewChild.nativeElement.value = '';else this.inputViewChild.nativeElement.value = this.value;
            this.checkVal();
            this.focusText = this.inputViewChild.nativeElement.value;
            this.updateFilledState();
          }
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
        key: "caret",
        value: function caret(first, last) {
          var range, begin, end;

          if (!this.inputViewChild.nativeElement.offsetParent || this.inputViewChild.nativeElement !== document.activeElement) {
            return;
          }

          if (typeof first == 'number') {
            begin = first;
            end = typeof last === 'number' ? last : begin;

            if (this.inputViewChild.nativeElement.setSelectionRange) {
              this.inputViewChild.nativeElement.setSelectionRange(begin, end);
            } else if (this.inputViewChild.nativeElement['createTextRange']) {
              range = this.inputViewChild.nativeElement['createTextRange']();
              range.collapse(true);
              range.moveEnd('character', end);
              range.moveStart('character', begin);
              range.select();
            }
          } else {
            if (this.inputViewChild.nativeElement.setSelectionRange) {
              begin = this.inputViewChild.nativeElement.selectionStart;
              end = this.inputViewChild.nativeElement.selectionEnd;
            } else if (document['selection'] && document['selection'].createRange) {
              range = document['selection'].createRange();
              begin = 0 - range.duplicate().moveStart('character', -100000);
              end = begin + range.text.length;
            }

            return {
              begin: begin,
              end: end
            };
          }
        }
      }, {
        key: "isCompleted",
        value: function isCompleted() {
          var completed;

          for (var i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
            if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "getPlaceholder",
        value: function getPlaceholder(i) {
          if (i < this.slotChar.length) {
            return this.slotChar.charAt(i);
          }

          return this.slotChar.charAt(0);
        }
      }, {
        key: "seekNext",
        value: function seekNext(pos) {
          while (++pos < this.len && !this.tests[pos]);

          return pos;
        }
      }, {
        key: "seekPrev",
        value: function seekPrev(pos) {
          while (--pos >= 0 && !this.tests[pos]);

          return pos;
        }
      }, {
        key: "shiftL",
        value: function shiftL(begin, end) {
          var i, j;

          if (begin < 0) {
            return;
          }

          for (i = begin, j = this.seekNext(end); i < this.len; i++) {
            if (this.tests[i]) {
              if (j < this.len && this.tests[i].test(this.buffer[j])) {
                this.buffer[i] = this.buffer[j];
                this.buffer[j] = this.getPlaceholder(j);
              } else {
                break;
              }

              j = this.seekNext(j);
            }
          }

          this.writeBuffer();
          this.caret(Math.max(this.firstNonMaskPos, begin));
        }
      }, {
        key: "shiftR",
        value: function shiftR(pos) {
          var i, c, j, t;

          for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
            if (this.tests[i]) {
              j = this.seekNext(i);
              t = this.buffer[i];
              this.buffer[i] = c;

              if (j < this.len && this.tests[j].test(t)) {
                c = t;
              } else {
                break;
              }
            }
          }
        }
      }, {
        key: "handleAndroidInput",
        value: function handleAndroidInput(e) {
          var _this = this;

          var curVal = this.inputViewChild.nativeElement.value;
          var pos = this.caret();

          if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
            // a deletion or backspace happened
            this.checkVal(true);

            while (pos.begin > 0 && !this.tests[pos.begin - 1]) pos.begin--;

            if (pos.begin === 0) {
              while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) pos.begin++;
            }

            setTimeout(function () {
              _this.caret(pos.begin, pos.begin);

              _this.updateModel(e);

              if (_this.isCompleted()) {
                _this.onComplete.emit();
              }
            }, 0);
          } else {
            this.checkVal(true);

            while (pos.begin < this.len && !this.tests[pos.begin]) pos.begin++;

            setTimeout(function () {
              _this.caret(pos.begin, pos.begin);

              _this.updateModel(e);

              if (_this.isCompleted()) {
                _this.onComplete.emit();
              }
            }, 0);
          }
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(e) {
          this.focused = false;
          this.onModelTouched();
          this.checkVal();
          this.updateFilledState();
          this.onBlur.emit(e);

          if (this.inputViewChild.nativeElement.value != this.focusText || this.inputViewChild.nativeElement.value != this.value) {
            this.updateModel(e);
            var event = document.createEvent('HTMLEvents');
            event.initEvent('change', true, false);
            this.inputViewChild.nativeElement.dispatchEvent(event);
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          if (this.readonly) {
            return;
          }

          var k = e.which || e.keyCode,
              pos,
              begin,
              end;
          var iPhone = /iphone/i.test(primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getUserAgent());
          this.oldVal = this.inputViewChild.nativeElement.value; //backspace, delete, and escape get special treatment

          if (k === 8 || k === 46 || iPhone && k === 127) {
            pos = this.caret();
            begin = pos.begin;
            end = pos.end;

            if (end - begin === 0) {
              begin = k !== 46 ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
              end = k === 46 ? this.seekNext(end) : end;
            }

            this.clearBuffer(begin, end);
            this.shiftL(begin, end - 1);
            this.updateModel(e);
            this.onInput.emit(e);
            e.preventDefault();
          } else if (k === 13) {
            // enter
            this.onInputBlur(e);
            this.updateModel(e);
          } else if (k === 27) {
            // escape
            this.inputViewChild.nativeElement.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            e.preventDefault();
          }
        }
      }, {
        key: "onKeyPress",
        value: function onKeyPress(e) {
          var _this2 = this;

          if (this.readonly) {
            return;
          }

          var k = e.which || e.keyCode,
              pos = this.caret(),
              p,
              c,
              next,
              completed;

          if (e.ctrlKey || e.altKey || e.metaKey || k < 32 || k > 34 && k < 41) {
            //Ignore
            return;
          } else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
              this.clearBuffer(pos.begin, pos.end);
              this.shiftL(pos.begin, pos.end - 1);
            }

            p = this.seekNext(pos.begin - 1);

            if (p < this.len) {
              c = String.fromCharCode(k);

              if (this.tests[p].test(c)) {
                this.shiftR(p);
                this.buffer[p] = c;
                this.writeBuffer();
                next = this.seekNext(p);

                if (/android/i.test(primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getUserAgent())) {
                  //Path for CSP Violation on FireFox OS 1.1
                  var proxy = function proxy() {
                    _this2.caret(next);
                  };

                  setTimeout(proxy, 0);
                } else {
                  this.caret(next);
                }

                if (pos.begin <= this.lastRequiredNonMaskPos) {
                  completed = this.isCompleted();
                }

                this.onInput.emit(e);
              }
            }

            e.preventDefault();
          }

          this.updateModel(e);
          this.updateFilledState();

          if (completed) {
            this.onComplete.emit();
          }
        }
      }, {
        key: "clearBuffer",
        value: function clearBuffer(start, end) {
          var i;

          for (i = start; i < end && i < this.len; i++) {
            if (this.tests[i]) {
              this.buffer[i] = this.getPlaceholder(i);
            }
          }
        }
      }, {
        key: "writeBuffer",
        value: function writeBuffer() {
          this.inputViewChild.nativeElement.value = this.buffer.join('');
        }
      }, {
        key: "checkVal",
        value: function checkVal(allow) {
          //try to place characters where they belong
          var test = this.inputViewChild.nativeElement.value,
              lastMatch = -1,
              i,
              c,
              pos;

          for (i = 0, pos = 0; i < this.len; i++) {
            if (this.tests[i]) {
              this.buffer[i] = this.getPlaceholder(i);

              while (pos++ < test.length) {
                c = test.charAt(pos - 1);

                if (this.tests[i].test(c)) {
                  this.buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }

              if (pos > test.length) {
                this.clearBuffer(i + 1, this.len);
                break;
              }
            } else {
              if (this.buffer[i] === test.charAt(pos)) {
                pos++;
              }

              if (i < this.partialPosition) {
                lastMatch = i;
              }
            }
          }

          if (allow) {
            this.writeBuffer();
          } else if (lastMatch + 1 < this.partialPosition) {
            if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
              // Invalid value. Remove it and replace it with the
              // mask, which is the default behavior.
              if (this.inputViewChild.nativeElement.value) this.inputViewChild.nativeElement.value = '';
              this.clearBuffer(0, this.len);
            } else {
              // Invalid value, but we opt to show the value to the
              // user and allow them to correct their mistake.
              this.writeBuffer();
            }
          } else {
            this.writeBuffer();
            this.inputViewChild.nativeElement.value = this.inputViewChild.nativeElement.value.substring(0, lastMatch + 1);
          }

          return this.partialPosition ? i : this.firstNonMaskPos;
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          var _this3 = this;

          if (this.readonly) {
            return;
          }

          this.focused = true;
          clearTimeout(this.caretTimeoutId);
          var pos;
          this.focusText = this.inputViewChild.nativeElement.value;
          pos = this.checkVal();
          this.caretTimeoutId = setTimeout(function () {
            if (_this3.inputViewChild.nativeElement !== document.activeElement) {
              return;
            }

            _this3.writeBuffer();

            if (pos == _this3.mask.replace("?", "").length) {
              _this3.caret(0, pos);
            } else {
              _this3.caret(pos);
            }
          }, 10);
          this.onFocus.emit(event);
        }
      }, {
        key: "onInputChange",
        value: function onInputChange(event) {
          if (this.androidChrome) this.handleAndroidInput(event);else this.handleInputChange(event);
          this.onInput.emit(event);
        }
      }, {
        key: "handleInputChange",
        value: function handleInputChange(event) {
          var _this4 = this;

          if (this.readonly) {
            return;
          }

          setTimeout(function () {
            var pos = _this4.checkVal(true);

            _this4.caret(pos);

            _this4.updateModel(event);

            if (_this4.isCompleted()) {
              _this4.onComplete.emit();
            }
          }, 0);
        }
      }, {
        key: "getUnmaskedValue",
        value: function getUnmaskedValue() {
          var unmaskedBuffer = [];

          for (var i = 0; i < this.buffer.length; i++) {
            var c = this.buffer[i];

            if (this.tests[i] && c != this.getPlaceholder(i)) {
              unmaskedBuffer.push(c);
            }
          }

          return unmaskedBuffer.join('');
        }
      }, {
        key: "updateModel",
        value: function updateModel(e) {
          var updatedValue = this.unmask ? this.getUnmaskedValue() : e.target.value;

          if (updatedValue !== null || updatedValue !== undefined) {
            this.value = updatedValue;
            this.onModelChange(this.value);
          }
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != '';
        }
      }, {
        key: "focus",
        value: function focus() {
          this.inputViewChild.nativeElement.focus();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);
    }();

    InputMask.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "slotChar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputMask.prototype, "autoClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], InputMask.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], InputMask.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], InputMask.prototype, "maxlength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "ariaLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputMask.prototype, "ariaRequired", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputMask.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputMask.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputMask.prototype, "unmask", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputMask.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "characterPattern", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputMask.prototype, "autoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputMask.prototype, "autocomplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], InputMask.prototype, "inputViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], InputMask.prototype, "onComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], InputMask.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], InputMask.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], InputMask.prototype, "onInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputMask.prototype, "mask", null);
    InputMask = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-inputMask',
      template: "<input #input pInputText [attr.id]=\"inputId\" [attr.type]=\"type\" [attr.name]=\"name\" [ngStyle]=\"style\" [ngClass]=\"styleClass\" [attr.placeholder]=\"placeholder\" [attr.title]=\"title\"\n        [attr.size]=\"size\" [attr.autocomplete]=\"autocomplete\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [attr.aria-label]=\"ariaLabel\" [attr.aria-required]=\"ariaRequired\" [disabled]=\"disabled\" [readonly]=\"readonly\" [attr.required]=\"required\"\n        (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeyDown($event)\" (keypress)=\"onKeyPress($event)\" [attr.autofocus]=\"autoFocus\"\n        (input)=\"onInputChange($event)\" (paste)=\"handleInputChange($event)\">",
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focused'
      },
      providers: [INPUTMASK_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], InputMask);

    var InputMaskModule = /*#__PURE__*/_createClass(function InputMaskModule() {
      _classCallCheck(this, InputMaskModule);
    });

    InputMaskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"]],
      exports: [InputMask],
      declarations: [InputMask]
    })], InputMaskModule);
    /***/
  },

  /***/
  "./src/app/components/inputmask/public_api.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/inputmask/public_api.ts ***!
    \****************************************************/

  /*! exports provided: INPUTMASK_VALUE_ACCESSOR, InputMask, InputMaskModule */

  /***/
  function _src_app_components_inputmask_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./inputmask */
    "./src/app/components/inputmask/inputmask.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "INPUTMASK_VALUE_ACCESSOR", function () {
      return _inputmask__WEBPACK_IMPORTED_MODULE_0__["INPUTMASK_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputMask", function () {
      return _inputmask__WEBPACK_IMPORTED_MODULE_0__["InputMask"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputMaskModule", function () {
      return _inputmask__WEBPACK_IMPORTED_MODULE_0__["InputMaskModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-inputmask-inputmaskdemo-module~components-inputnumber-inputnumberdemo-module-es5.js.map