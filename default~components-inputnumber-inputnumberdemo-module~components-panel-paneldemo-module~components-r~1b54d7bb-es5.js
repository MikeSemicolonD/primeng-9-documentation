function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-panel-paneldemo-module~components-r~1b54d7bb"], {
  /***/
  "./src/app/components/splitbutton/public_api.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/splitbutton/public_api.ts ***!
    \******************************************************/

  /*! exports provided: SplitButton, SplitButtonModule */

  /***/
  function _src_app_components_splitbutton_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _splitbutton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./splitbutton */
    "./src/app/components/splitbutton/splitbutton.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplitButton", function () {
      return _splitbutton__WEBPACK_IMPORTED_MODULE_0__["SplitButton"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplitButtonModule", function () {
      return _splitbutton__WEBPACK_IMPORTED_MODULE_0__["SplitButtonModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/splitbutton/splitbutton.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/splitbutton/splitbutton.ts ***!
    \*******************************************************/

  /*! exports provided: SplitButton, SplitButtonModule */

  /***/
  function _src_app_components_splitbutton_splitbuttonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitButton", function () {
      return SplitButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitButtonModule", function () {
      return SplitButtonModule;
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


    var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");

    var SplitButton = /*#__PURE__*/function () {
      function SplitButton(el, renderer, router, cd) {
        _classCallCheck(this, SplitButton);

        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.iconPos = 'left';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.overlayVisible = false;
        this.ariaId = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["UniqueComponentId"])() + '_list';
      }

      return _createClass(SplitButton, [{
        key: "onDefaultButtonClick",
        value: function onDefaultButtonClick(event) {
          this.onClick.emit(event);
        }
      }, {
        key: "itemClick",
        value: function itemClick(event, item) {
          if (item.disabled) {
            event.preventDefault();
            return;
          }

          if (!item.url) {
            event.preventDefault();
          }

          if (item.command) {
            item.command({
              originalEvent: event,
              item: item
            });
          }

          this.overlayVisible = false;
        }
      }, {
        key: "show",
        value: function show() {
          this.overlayVisible = !this.overlayVisible;
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.overlay = event.element;
              this.appendOverlay();
              this.overlay.style.zIndex = String(++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
              this.alignOverlay();
              this.bindDocumentClickListener();
              this.bindDocumentResizeListener();
              break;

            case 'void':
              this.onOverlayHide();
              break;
          }
        }
      }, {
        key: "onDropdownButtonClick",
        value: function onDropdownButtonClick(event) {
          this.onDropdownClick.emit(event);
          this.dropdownClick = true;
          this.show();
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.overlay, this.appendTo);

            if (!this.overlay.style.minWidth) {
              this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getWidth(this.el.nativeElement.children[0]) + 'px';
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
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
              if (_this.dropdownClick) {
                _this.dropdownClick = false;
              } else {
                _this.overlayVisible = false;

                _this.unbindDocumentClickListener();

                _this.cd.markForCheck();
              }
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
          this.overlayVisible = false;
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindDocumentResizeListener();
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

    SplitButton.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SplitButton.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "iconPos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], SplitButton.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], SplitButton.prototype, "onDropdownClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SplitButton.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SplitButton.prototype, "menuStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "menuStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SplitButton.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SplitButton.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SplitButton.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "dir", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SplitButton.prototype, "hideTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SplitButton.prototype, "containerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultbtn'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SplitButton.prototype, "buttonViewChild", void 0);
    SplitButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-splitButton',
      template: "\n        <div #container [ngClass]=\"{'ui-splitbutton ui-buttonset ui-widget':true}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <button #defaultbtn type=\"button\" pButton [icon]=\"icon\" [iconPos]=\"iconPos\" [label]=\"label\" [cornerStyleClass]=\"dir === 'rtl' ? 'ui-corner-right': 'ui-corner-left'\" (click)=\"onDefaultButtonClick($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </button><button type=\"button\" pButton class=\"ui-splitbutton-menubutton\" icon=\"pi pi-chevron-down\" [cornerStyleClass]=\"dir === 'rtl' ? 'ui-corner-left': 'ui-corner-right'\" (click)=\"onDropdownButtonClick($event)\" [disabled]=\"disabled\"></button>\n            <div [attr.id]=\"ariaId + '_overlay'\" #overlay [ngClass]=\"'ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow'\" *ngIf=\"overlayVisible\"\n                    [ngStyle]=\"menuStyle\" [class]=\"menuStyleClass\"\n                    [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n                <ul class=\"ui-menu-list ui-helper-reset\" role=\"menu\">\n                    <ng-template ngFor let-item [ngForOf]=\"model\">\n                        <li *ngIf=\"item.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': item.visible === false}\" role=\"separator\">\n                        <li class=\"ui-menuitem ui-widget ui-corner-all\" role=\"menuitem\" *ngIf=\"item.visible !== false && !item.separator\" role=\"none\">\n                            <a *ngIf=\"!item.routerLink\" [attr.href]=\"item.url\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" role=\"menuitem\"\n                                [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                <span [ngClass]=\"'ui-menuitem-icon'\" [class]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                                <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                            </a>\n                            <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\"\n                                class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                <span [ngClass]=\"'ui-menuitem-icon'\" [class]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                                <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                            </a>\n                        </li>\n                    </ng-template>\n                </ul>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], SplitButton);

    var SplitButtonModule = /*#__PURE__*/_createClass(function SplitButtonModule() {
      _classCallCheck(this, SplitButtonModule);
    });

    SplitButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
      exports: [SplitButton, primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
      declarations: [SplitButton]
    })], SplitButtonModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-panel-paneldemo-module~components-r~1b54d7bb-es5.js.map