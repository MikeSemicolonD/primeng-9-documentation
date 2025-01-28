function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"], {
  /***/
  "./src/app/components/dialog/dialog.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/dialog/dialog.ts ***!
    \*********************************************/

  /*! exports provided: Dialog, DialogModule */

  /***/
  function _src_app_components_dialog_dialogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dialog", function () {
      return Dialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogModule", function () {
      return DialogModule;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/focustrap */
    "./src/app/components/focustrap/public_api.ts");

    var idx = 0;
    var showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
      transform: '{{transform}}',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
      transform: 'none',
      opacity: 1
    }))]);
    var hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
      transform: '{{transform}}',
      opacity: 0
    }))]);

    var Dialog = /*#__PURE__*/function () {
      function Dialog(el, renderer, zone, cd) {
        _classCallCheck(this, Dialog);

        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.cd = cd;
        this.draggable = true;
        this.resizable = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.showHeader = true;
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.minX = 0;
        this.minY = 0;
        this.focusOnShow = true;
        this.keepInViewport = true;
        this.focusTrap = true;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.closeIcon = 'pi pi-times';
        this.minimizeIcon = 'pi pi-window-minimize';
        this.maximizeIcon = 'pi pi-window-maximize';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.id = "ui-dialog-".concat(idx++);
        this._style = {};
        this._position = "center";
        this.transformOptions = "scale(0.7)";
      }

      return _createClass(Dialog, [{
        key: "positionLeft",
        get: function get() {
          return 0;
        },
        set: function set(_positionLeft) {
          console.log("positionLeft property is deprecated.");
        }
      }, {
        key: "positionTop",
        get: function get() {
          return 0;
        },
        set: function set(_positionTop) {
          console.log("positionTop property is deprecated.");
        }
      }, {
        key: "responsive",
        get: function get() {
          return false;
        },
        set: function set(_responsive) {
          console.log("Responsive property is deprecated.");
        }
      }, {
        key: "breakpoint",
        get: function get() {
          return 649;
        },
        set: function set(_breakpoint) {
          console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.");
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        },
        set: function set(value) {
          this._visible = value;

          if (this._visible && !this.maskVisible) {
            this.maskVisible = true;
          }
        }
      }, {
        key: "style",
        get: function get() {
          return this._style;
        },
        set: function set(value) {
          if (value) {
            this._style = Object.assign({}, value);
            this.originalStyle = value;
          }
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        },
        set: function set(value) {
          this._position = value;

          switch (value) {
            case 'topleft':
            case 'bottomleft':
            case 'left':
              this.transformOptions = "translate3d(-100%, 0px, 0px)";
              break;

            case 'topright':
            case 'bottomright':
            case 'right':
              this.transformOptions = "translate3d(100%, 0px, 0px)";
              break;

            case 'bottom':
              this.transformOptions = "translate3d(0px, 100%, 0px)";
              break;

            case 'top':
              this.transformOptions = "translate3d(0px, -100%, 0px)";
              break;

            default:
              this.transformOptions = "scale(0.7)";
              break;
          }
        }
      }, {
        key: "focus",
        value: function focus() {
          var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, 'button');

          if (focusable) {
            this.zone.runOutsideAngular(function () {
              setTimeout(function () {
                return focusable.focus();
              }, 5);
            });
          }
        }
      }, {
        key: "close",
        value: function close(event) {
          this.visibleChange.emit(false);
          event.preventDefault();
        }
      }, {
        key: "enableModality",
        value: function enableModality() {
          var _this = this;

          if (this.closable && this.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'click', function (event) {
              if (_this.wrapper && _this.wrapper.isSameNode(event.target)) {
                _this.close(event);
              }
            });
          }

          if (this.modal) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
          }
        }
      }, {
        key: "disableModality",
        value: function disableModality() {
          if (this.wrapper) {
            if (this.dismissableMask) {
              this.unbindMaskClickListener();
            }

            if (this.modal) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }

            if (!this.cd.destroyed) {
              this.cd.detectChanges();
            }
          }
        }
      }, {
        key: "maximize",
        value: function maximize() {
          this.maximized = !this.maximized;

          if (!this.modal && !this.blockScroll) {
            if (this.maximized) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
          }
        }
      }, {
        key: "unbindMaskClickListener",
        value: function unbindMaskClickListener() {
          if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
          }
        }
      }, {
        key: "moveOnTop",
        value: function moveOnTop() {
          if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
            this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex - 1));
          }
        }
      }, {
        key: "initDrag",
        value: function initDrag(event) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-dialog-titlebar-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target.parentElement, 'ui-dialog-titlebar-icon')) {
            return;
          }

          if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            this.container.style.margin = '0';
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
          }
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          if (this.focusTrap) {
            if (event.which === 9) {
              event.preventDefault();
              var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getFocusableElements(this.container);

              if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                  focusableElements[0].focus();
                } else {
                  var focusedIndex = focusableElements.indexOf(document.activeElement);

                  if (event.shiftKey) {
                    if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
                  } else {
                    if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
                  }
                }
              }
            }
          }
        }
      }, {
        key: "onDrag",
        value: function onDrag(event) {
          if (this.dragging) {
            var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container);
            var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container);
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.container);
            var leftPos = offset.left + deltaX;
            var topPos = offset.top + deltaY;
            var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getViewport();
            this.container.style.position = 'fixed';

            if (this.keepInViewport) {
              if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
                this._style.left = leftPos + 'px';
                this.lastPageX = event.pageX;
                this.container.style.left = leftPos + 'px';
              }

              if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
                this._style.top = topPos + 'px';
                this.lastPageY = event.pageY;
                this.container.style.top = topPos + 'px';
              }
            } else {
              this.lastPageX = event.pageX;
              this.container.style.left = leftPos + 'px';
              this.lastPageY = event.pageY;
              this.container.style.top = topPos + 'px';
            }
          }
        }
      }, {
        key: "endDrag",
        value: function endDrag(event) {
          if (this.dragging) {
            this.dragging = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
            this.cd.detectChanges();
            this.onDragEnd.emit(event);
          }
        }
      }, {
        key: "resetPosition",
        value: function resetPosition() {
          this.container.style.position = '';
          this.container.style.left = '';
          this.container.style.top = '';
          this.container.style.margin = '';
        } //backward compatibility

      }, {
        key: "center",
        value: function center() {
          this.resetPosition();
        }
      }, {
        key: "initResize",
        value: function initResize(event) {
          if (this.resizable) {
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-unselectable-text');
            this.onResizeInit.emit(event);
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (this.resizing) {
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(this.container);
            var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.container);
            var contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
            var newWidth = containerWidth + deltaX;
            var newHeight = containerHeight + deltaY;
            var minWidth = this.container.style.minWidth;
            var minHeight = this.container.style.minHeight;
            var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.container);
            var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getViewport();
            var hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);

            if (hasBeenDragged) {
              newWidth += deltaX;
              newHeight += deltaY;
            }

            if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
              this._style.width = newWidth + 'px';
              this.container.style.width = this._style.width;
            }

            if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
              this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';

              if (this._style.height) {
                this._style.height = newHeight + 'px';
                this.container.style.height = this._style.height;
              }
            }

            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
          }
        }
      }, {
        key: "resizeEnd",
        value: function resizeEnd(event) {
          if (this.resizing) {
            this.resizing = false;
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-unselectable-text');
            this.onResizeEnd.emit(event);
          }
        }
      }, {
        key: "bindGlobalListeners",
        value: function bindGlobalListeners() {
          if (this.draggable) {
            this.bindDocumentDragListener();
            this.bindDocumentDragEndListener();
          }

          if (this.resizable) {
            this.bindDocumentResizeListeners();
          }

          if (this.closeOnEscape && this.closable) {
            this.bindDocumentEscapeListener();
          }
        }
      }, {
        key: "unbindGlobalListeners",
        value: function unbindGlobalListeners() {
          this.unbindDocumentDragListener();
          this.unbindDocumentDragEndListener();
          this.unbindDocumentResizeListeners();
          this.unbindDocumentEscapeListener();
        }
      }, {
        key: "bindDocumentDragListener",
        value: function bindDocumentDragListener() {
          var _this2 = this;

          this.zone.runOutsideAngular(function () {
            _this2.documentDragListener = _this2.onDrag.bind(_this2);
            window.document.addEventListener('mousemove', _this2.documentDragListener);
          });
        }
      }, {
        key: "unbindDocumentDragListener",
        value: function unbindDocumentDragListener() {
          if (this.documentDragListener) {
            window.document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
          }
        }
      }, {
        key: "bindDocumentDragEndListener",
        value: function bindDocumentDragEndListener() {
          var _this3 = this;

          this.zone.runOutsideAngular(function () {
            _this3.documentDragEndListener = _this3.endDrag.bind(_this3);
            window.document.addEventListener('mouseup', _this3.documentDragEndListener);
          });
        }
      }, {
        key: "unbindDocumentDragEndListener",
        value: function unbindDocumentDragEndListener() {
          if (this.documentDragEndListener) {
            window.document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragEndListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListeners",
        value: function bindDocumentResizeListeners() {
          var _this4 = this;

          this.zone.runOutsideAngular(function () {
            _this4.documentResizeListener = _this4.onResize.bind(_this4);
            _this4.documentResizeEndListener = _this4.resizeEnd.bind(_this4);
            window.document.addEventListener('mousemove', _this4.documentResizeListener);
            window.document.addEventListener('mouseup', _this4.documentResizeEndListener);
          });
        }
      }, {
        key: "unbindDocumentResizeListeners",
        value: function unbindDocumentResizeListeners() {
          if (this.documentResizeListener && this.documentResizeEndListener) {
            window.document.removeEventListener('mousemove', this.documentResizeListener);
            window.document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
          }
        }
      }, {
        key: "bindDocumentEscapeListener",
        value: function bindDocumentEscapeListener() {
          var _this5 = this;

          this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
              if (parseInt(_this5.container.style.zIndex) === primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex + _this5.baseZIndex) {
                _this5.close(event);
              }
            }
          });
        }
      }, {
        key: "unbindDocumentEscapeListener",
        value: function unbindDocumentEscapeListener() {
          if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
          }
        }
      }, {
        key: "appendContainer",
        value: function appendContainer() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.wrapper, this.appendTo);
          }
        }
      }, {
        key: "restoreAppend",
        value: function restoreAppend() {
          if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.wrapper);
          }
        }
      }, {
        key: "onAnimationStart",
        value: function onAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.container = event.element;
              this.wrapper = this.container.parentElement;
              this.onShow.emit({});
              this.appendContainer();
              this.moveOnTop();
              this.bindGlobalListeners();

              if (this.modal) {
                this.enableModality();
              }

              if (!this.modal && this.blockScroll) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
              }

              if (this.focusOnShow) {
                this.focus();
              }

              break;
          }
        }
      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          switch (event.toState) {
            case 'void':
              this.onContainerDestroy();
              this.onHide.emit({});
              break;
          }
        }
      }, {
        key: "onContainerDestroy",
        value: function onContainerDestroy() {
          this.unbindGlobalListeners();
          this.dragging = false;
          this.maskVisible = false;

          if (this.maximized) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            this.maximized = false;
          }

          if (this.modal) {
            this.disableModality();
          }

          if (this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
          }

          this.container = null;
          this.wrapper = null;
          this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
          }
        }
      }]);
    }();

    Dialog.ctorParameters = function () {
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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "resizable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Dialog.prototype, "positionLeft", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Dialog.prototype, "positionTop", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Dialog.prototype, "contentStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "contentStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "modal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "closeOnEscape", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "dismissableMask", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "rtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "closable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], Dialog.prototype, "responsive", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Dialog.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "maskStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "showHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Dialog.prototype, "breakpoint", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "blockScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Dialog.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Dialog.prototype, "minX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Dialog.prototype, "minY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "focusOnShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "maximizable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "keepInViewport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Dialog.prototype, "focusTrap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "transitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "closeIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "minimizeIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Dialog.prototype, "maximizeIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Header"], {
      descendants: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Dialog.prototype, "headerFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
      descendants: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Dialog.prototype, "footerFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('titlebar'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Dialog.prototype, "headerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Dialog.prototype, "contentViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footer'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Dialog.prototype, "footerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Dialog.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Dialog.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Dialog.prototype, "visibleChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Dialog.prototype, "onResizeInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Dialog.prototype, "onResizeEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Dialog.prototype, "onDragEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], Dialog.prototype, "visible", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], Dialog.prototype, "style", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], Dialog.prototype, "position", null);
    Dialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-dialog',
      template: "\n        <div *ngIf=\"maskVisible\" [class]=\"maskStyleClass\" \n            [ngClass]=\"{'ui-dialog-mask': true, 'ui-widget-overlay': this.modal, 'ui-dialog-visible': this.maskVisible, 'ui-dialog-mask-scrollblocker': this.modal || this.blockScroll,\n                'ui-dialog-left': position === 'left',\n                'ui-dialog-right': position === 'right',\n                'ui-dialog-top': position === 'top',\n                'ui-dialog-topleft': position === 'topleft',\n                'ui-dialog-topright': position === 'topright',\n                'ui-dialog-bottom': position === 'bottom',\n                'ui-dialog-bottomleft': position === 'bottomleft',\n                'ui-dialog-bottomright': position === 'bottomright'}\" >\n            <div #container [ngClass]=\"{'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl':rtl,'ui-dialog-draggable':draggable,'ui-dialog-resizable':resizable, 'ui-dialog-maximized': maximized}\"\n                [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"visible\" pFocusTrap [pFocusTrapDisabled]=\"focusTrap === false\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\">\n                <div #titlebar class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                    <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                    <span [attr.id]=\"id + '-label'\" class=\"ui-dialog-title\" *ngIf=\"headerFacet && headerFacet.first\">\n                        <ng-content select=\"p-header\"></ng-content>\n                    </span>\n                    <div class=\"ui-dialog-titlebar-icons\">\n                        <a *ngIf=\"maximizable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"maximize()\" (keydown.enter)=\"maximize()\">\n                            <span [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                        </a>\n                        <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                            <span [class]=\"closeIcon\"></span>\n                        </a>\n                    </div>\n                </div>\n                <div #content [ngClass]=\"'ui-dialog-content ui-widget-content'\" [ngStyle]=\"contentStyle\" [class]=\"contentStyleClass\">\n                    <ng-content></ng-content>\n                </div>\n                <div #footer class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footerFacet && footerFacet.first\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n                <div *ngIf=\"resizable\" class=\"ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(hideAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Dialog);

    var DialogModule = /*#__PURE__*/_createClass(function DialogModule() {
      _classCallCheck(this, DialogModule);
    });

    DialogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__["FocusTrapModule"]],
      exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      declarations: [Dialog]
    })], DialogModule);
    /***/
  },

  /***/
  "./src/app/components/dialog/public_api.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/dialog/public_api.ts ***!
    \*************************************************/

  /*! exports provided: Dialog, DialogModule */

  /***/
  function _src_app_components_dialog_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dialog */
    "./src/app/components/dialog/dialog.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Dialog", function () {
      return _dialog__WEBPACK_IMPORTED_MODULE_0__["Dialog"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DialogModule", function () {
      return _dialog__WEBPACK_IMPORTED_MODULE_0__["DialogModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/focustrap/focustrap.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/focustrap/focustrap.ts ***!
    \***************************************************/

  /*! exports provided: FocusTrap, FocusTrapModule */

  /***/
  function _src_app_components_focustrap_focustrapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return FocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function () {
      return FocusTrapModule;
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

    var FocusTrap = /*#__PURE__*/function () {
      function FocusTrap(el) {
        _classCallCheck(this, FocusTrap);

        this.el = el;
      }

      return _createClass(FocusTrap, [{
        key: "onkeydown",
        value: function onkeydown(e) {
          if (this.pFocusTrapDisabled !== true) {
            e.preventDefault();
            var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getFocusableElements(this.el.nativeElement);

            if (focusableElements && focusableElements.length > 0) {
              if (!document.activeElement) {
                focusableElements[0].focus();
              } else {
                var focusedIndex = focusableElements.indexOf(document.activeElement);

                if (e.shiftKey) {
                  if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
                } else {
                  if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
                }
              }
            }
          }
        }
      }]);
    }();

    FocusTrap.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FocusTrap.prototype, "pFocusTrapDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.tab', ['$event']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.shift.tab', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], FocusTrap.prototype, "onkeydown", null);
    FocusTrap = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pFocusTrap]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], FocusTrap);

    var FocusTrapModule = /*#__PURE__*/_createClass(function FocusTrapModule() {
      _classCallCheck(this, FocusTrapModule);
    });

    FocusTrapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [FocusTrap],
      declarations: [FocusTrap]
    })], FocusTrapModule);
    /***/
  },

  /***/
  "./src/app/components/focustrap/public_api.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/focustrap/public_api.ts ***!
    \****************************************************/

  /*! exports provided: FocusTrap, FocusTrapModule */

  /***/
  function _src_app_components_focustrap_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _focustrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./focustrap */
    "./src/app/components/focustrap/focustrap.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return _focustrap__WEBPACK_IMPORTED_MODULE_0__["FocusTrap"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function () {
      return _focustrap__WEBPACK_IMPORTED_MODULE_0__["FocusTrapModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129-es5.js.map