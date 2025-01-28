function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-confirmdialog-confirmdialogdemo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/confirmdialog/confirmdialog.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/confirmdialog/confirmdialog.ts ***!
    \***********************************************************/

  /*! exports provided: ConfirmDialog, ConfirmDialogModule */

  /***/
  function _src_app_components_confirmdialog_confirmdialogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function () {
      return ConfirmDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function () {
      return ConfirmDialogModule;
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


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");

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

    var ConfirmDialog = /*#__PURE__*/function () {
      function ConfirmDialog(el, renderer, confirmationService, zone, cd) {
        var _this = this;

        _classCallCheck(this, ConfirmDialog);

        this.el = el;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.zone = zone;
        this.cd = cd;
        this.acceptIcon = 'pi pi-check';
        this.acceptLabel = 'Yes';
        this.acceptVisible = true;
        this.rejectIcon = 'pi pi-times';
        this.rejectLabel = 'No';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.blockScroll = true;
        this.closable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.focusTrap = true;
        this.defaultFocus = 'accept';
        this._position = "center";
        this.transformOptions = "scale(0.7)";
        this.subscription = this.confirmationService.requireConfirmation$.subscribe(function (confirmation) {
          if (!confirmation) {
            _this.hide();

            return;
          }

          if (confirmation.key === _this.key) {
            _this.confirmation = confirmation;
            _this.confirmationOptions = {
              message: _this.confirmation.message || _this.message,
              icon: _this.confirmation.icon || _this.icon,
              header: _this.confirmation.header || _this.header,
              rejectVisible: _this.confirmation.rejectVisible == null ? _this.rejectVisible : _this.confirmation.rejectVisible,
              acceptVisible: _this.confirmation.acceptVisible == null ? _this.acceptVisible : _this.confirmation.acceptVisible,
              acceptLabel: _this.confirmation.acceptLabel || _this.acceptLabel,
              rejectLabel: _this.confirmation.rejectLabel || _this.rejectLabel,
              acceptIcon: _this.confirmation.acceptIcon || _this.acceptIcon,
              rejectIcon: _this.confirmation.rejectIcon || _this.rejectIcon,
              acceptButtonStyleClass: _this.confirmation.acceptButtonStyleClass || _this.acceptButtonStyleClass,
              rejectButtonStyleClass: _this.confirmation.rejectButtonStyleClass || _this.rejectButtonStyleClass,
              defaultFocus: _this.confirmation.defaultFocus || _this.defaultFocus,
              blockScroll: _this.confirmation.blockScroll === false || _this.confirmation.blockScroll === true ? _this.confirmation.blockScroll : _this.blockScroll
            };

            if (_this.confirmation.accept) {
              _this.confirmation.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

              _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
            }

            if (_this.confirmation.reject) {
              _this.confirmation.rejectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

              _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
            }

            _this.visible = true;
          }
        });
      }

      return _createClass(ConfirmDialog, [{
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
        key: "option",
        value: function option(name) {
          var source = this.confirmationOptions || this;

          if (source.hasOwnProperty(name)) {
            return source[name];
          }

          return undefined;
        }
      }, {
        key: "onAnimationStart",
        value: function onAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.container = event.element;
              this.wrapper = this.container.parentElement;
              this.contentContainer = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, '.ui-dialog-content');
              var element = this.getElementToFocus();

              if (element) {
                element.focus();
              }

              this.appendContainer();
              this.moveOnTop();
              this.bindGlobalListeners();
              this.enableModality();
              break;
          }
        }
      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          switch (event.toState) {
            case 'void':
              this.onOverlayHide();
              break;
          }
        }
      }, {
        key: "getElementToFocus",
        value: function getElementToFocus() {
          switch (this.option('defaultFocus')) {
            case 'accept':
              return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, 'button.ui-confirmdialog-acceptbutton');

            case 'reject':
              return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, 'button.ui-confirmdialog-rejectbutton');

            case 'close':
              return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, 'a.ui-dialog-titlebar-close');

            case 'none':
              return null;
            //backward compatibility

            default:
              return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(this.container, 'button.ui-confirmdialog-acceptbutton');
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
          if (this.wrapper && this.appendTo) {
            this.el.nativeElement.appendChild(this.wrapper);
          }
        }
      }, {
        key: "enableModality",
        value: function enableModality() {
          if (this.option('blockScroll')) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
          }
        }
      }, {
        key: "disableModality",
        value: function disableModality() {
          this.maskVisible = false;

          if (this.option('blockScroll')) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
          }

          if (this.container) {
            this.cd.detectChanges();
          }
        }
      }, {
        key: "close",
        value: function close(event) {
          if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
          }

          this.hide();
          event.preventDefault();
        }
      }, {
        key: "hide",
        value: function hide() {
          this.visible = false;
          this.confirmation = null;
          this.confirmationOptions = null;
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
        key: "getMaskClass",
        value: function getMaskClass() {
          var maskClass = {
            'ui-widget-overlay ui-dialog-mask': true,
            'ui-dialog-visible': this.maskVisible,
            'ui-dialog-mask-scrollblocker': this.blockScroll
          };
          maskClass[this.getPositionClass().toString()] = true;
          return maskClass;
        }
      }, {
        key: "getPositionClass",
        value: function getPositionClass() {
          var _this2 = this;

          var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
          var pos = positions.find(function (item) {
            return item === _this2.position;
          });
          return pos ? "ui-dialog-".concat(pos) : '';
        }
      }, {
        key: "bindGlobalListeners",
        value: function bindGlobalListeners() {
          var _this3 = this;

          if (this.closeOnEscape && this.closable || this.focusTrap && !this.documentEscapeListener) {
            this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
              if (event.which == 27 && _this3.closeOnEscape && _this3.closable) {
                if (parseInt(_this3.container.style.zIndex) === primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex + _this3.baseZIndex && _this3.visible) {
                  _this3.close(event);
                }
              }

              if (event.which === 9 && _this3.focusTrap) {
                event.preventDefault();
                var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getFocusableElements(_this3.container);

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
            });
          }
        }
      }, {
        key: "unbindGlobalListeners",
        value: function unbindGlobalListeners() {
          if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
          }
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.disableModality();
          this.unbindGlobalListeners();
          this.container = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.restoreAppend();
          this.onOverlayHide();
          this.subscription.unsubscribe();
        }
      }, {
        key: "accept",
        value: function accept() {
          if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
          }

          this.hide();
        }
      }, {
        key: "reject",
        value: function reject() {
          if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
          }

          this.hide();
        }
      }]);
    }();

    ConfirmDialog.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "message", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ConfirmDialog.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "maskStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "acceptIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "acceptLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "acceptVisible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "rejectIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "rejectLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "rejectVisible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "acceptButtonStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "rejectButtonStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "closeOnEscape", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "blockScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "rtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "closable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ConfirmDialog.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "key", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ConfirmDialog.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "transitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ConfirmDialog.prototype, "focusTrap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ConfirmDialog.prototype, "defaultFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ConfirmDialog.prototype, "visible", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], ConfirmDialog.prototype, "position", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_5__["Footer"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ConfirmDialog.prototype, "footer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ConfirmDialog.prototype, "contentViewChild", void 0);
    ConfirmDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-confirmDialog',
      template: "\n        <div [class]=\"maskStyleClass\" [ngClass]=\"getMaskClass()\" *ngIf=\"maskVisible\">\n            <div [ngClass]=\"{'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl}\" [ngStyle]=\"style\" [class]=\"styleClass\" (mousedown)=\"moveOnTop()\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" *ngIf=\"visible\">\n                <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\">\n                    <span class=\"ui-dialog-title\" *ngIf=\"option('header')\">{{option('header')}}</span>\n                    <div class=\"ui-dialog-titlebar-icons\">\n                        <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" tabindex=\"0\" role=\"button\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\">\n                            <span class=\"pi pi-times\"></span>\n                        </a>\n                    </div>\n                </div>\n                <div #content class=\"ui-dialog-content ui-widget-content\">\n                    <i [ngClass]=\"'ui-confirmdialog-icon'\" [class]=\"option('icon')\" *ngIf=\"option('icon')\"></i>\n                    <span class=\"ui-confirmdialog-message\" [innerHTML]=\"option('message')\"></span>\n                </div>\n                <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footer\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n                <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"!footer\">\n                    <button type=\"button\" pButton [icon]=\"option('acceptIcon')\" [label]=\"option('acceptLabel')\" (click)=\"accept()\" [ngClass]=\"'ui-confirmdialog-acceptbutton'\" [class]=\"option('acceptButtonStyleClass')\" *ngIf=\"option('acceptVisible')\"></button>\n                    <button type=\"button\" pButton [icon]=\"option('rejectIcon')\" [label]=\"option('rejectLabel')\" (click)=\"reject()\" [ngClass]=\"'ui-confirmdialog-rejectbutton'\" [class]=\"option('rejectButtonStyleClass')\" *ngIf=\"option('rejectVisible')\"></button>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(hideAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], ConfirmDialog);

    var ConfirmDialogModule = /*#__PURE__*/_createClass(function ConfirmDialogModule() {
      _classCallCheck(this, ConfirmDialogModule);
    });

    ConfirmDialogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]],
      exports: [ConfirmDialog, primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      declarations: [ConfirmDialog]
    })], ConfirmDialogModule);
    /***/
  },

  /***/
  "./src/app/components/confirmdialog/public_api.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/confirmdialog/public_api.ts ***!
    \********************************************************/

  /*! exports provided: ConfirmDialog, ConfirmDialogModule */

  /***/
  function _src_app_components_confirmdialog_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _confirmdialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./confirmdialog */
    "./src/app/components/confirmdialog/confirmdialog.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function () {
      return _confirmdialog__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialog"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function () {
      return _confirmdialog__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-confirmdialog-confirmdialogdemo-module~components-inputnumber-inputnumberdemo-module-es5.js.map