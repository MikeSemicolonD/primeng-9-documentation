function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-tieredmenu-tieredmenudemo-module"], {
  /***/
  "./src/app/components/tieredmenu/public_api.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/tieredmenu/public_api.ts ***!
    \*****************************************************/

  /*! exports provided: TieredMenuSub, TieredMenu, TieredMenuModule */

  /***/
  function _src_app_components_tieredmenu_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tieredmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tieredmenu */
    "./src/app/components/tieredmenu/tieredmenu.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TieredMenuSub", function () {
      return _tieredmenu__WEBPACK_IMPORTED_MODULE_0__["TieredMenuSub"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TieredMenu", function () {
      return _tieredmenu__WEBPACK_IMPORTED_MODULE_0__["TieredMenu"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TieredMenuModule", function () {
      return _tieredmenu__WEBPACK_IMPORTED_MODULE_0__["TieredMenuModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/tieredmenu/tieredmenu.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/tieredmenu/tieredmenu.ts ***!
    \*****************************************************/

  /*! exports provided: TieredMenuSub, TieredMenu, TieredMenuModule */

  /***/
  function _src_app_components_tieredmenu_tieredmenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TieredMenuSub", function () {
      return TieredMenuSub;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TieredMenu", function () {
      return TieredMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TieredMenuModule", function () {
      return TieredMenuModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TieredMenuSub = /*#__PURE__*/function () {
      function TieredMenuSub(tieredMenu, cf, renderer) {
        _classCallCheck(this, TieredMenuSub);

        this.cf = cf;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.tieredMenu = tieredMenu;
      }

      return _createClass(TieredMenuSub, [{
        key: "parentActive",
        get: function get() {
          return this._parentActive;
        },
        set: function set(value) {
          this._parentActive = value;

          if (!value) {
            this.activeItem = null;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.root && !this.tieredMenu.popup) {
            this.bindDocumentClickListener();
          }
        }
      }, {
        key: "onItemMouseEnter",
        value: function onItemMouseEnter(event, item, menuitem) {
          if (this.tieredMenu.popup || !this.root || this.activeItem) {
            if (menuitem.disabled) {
              return;
            }

            this.activeItem = item;
            var nextElement = item.children[0].nextElementSibling;

            if (nextElement) {
              var sublist = nextElement.children[0];

              if (this.autoZIndex) {
                sublist.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
              }

              sublist.style.zIndex = String(++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
              sublist.style.top = '0px';
              sublist.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
            }
          }
        }
      }, {
        key: "itemClick",
        value: function itemClick(event, item, menuitem) {
          if (menuitem.disabled) {
            event.preventDefault();
            return true;
          }

          if (!menuitem.url) {
            event.preventDefault();
          }

          if (menuitem.command) {
            menuitem.command({
              originalEvent: event,
              item: menuitem
            });
          }

          if (this.root && !this.activeItem && !this.tieredMenu.popup) {
            this.activeItem = item;
            var nextElement = item.children[0].nextElementSibling;

            if (nextElement) {
              var sublist = nextElement.children[0];

              if (this.autoZIndex) {
                sublist.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
              }

              sublist.style.zIndex = String(++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
              sublist.style.top = '0px';
              sublist.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
              this.rootItemClick = true;
            }
          }

          if (!menuitem.items && this.tieredMenu.popup) {
            this.tieredMenu.hide();
          }
        }
      }, {
        key: "listClick",
        value: function listClick(event) {
          if (!this.rootItemClick) {
            this.activeItem = null;
          }
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
              if (!_this.rootItemClick) {
                _this.parentActive = false;
                _this.activeItem = null;
              }

              _this.rootItemClick = false;
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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.root && !this.tieredMenu.popup) {
            this.unbindDocumentClickListener();
          }
        }
      }]);
    }();

    TieredMenuSub.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return TieredMenu;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TieredMenuSub.prototype, "item", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TieredMenuSub.prototype, "root", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TieredMenuSub.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TieredMenuSub.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], TieredMenuSub.prototype, "parentActive", null);
    TieredMenuSub = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-tieredMenuSub',
      template: "\n        <ul [ngClass]=\"{'ui-widget-content ui-corner-all ui-shadow ui-submenu-list': !root}\" (click)=\"listClick($event)\" role=\"menubar\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': child.visible === false}\" role=\"separator\">\n                <li *ngIf=\"!child.separator\" #listItem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menuitem-active':listItem==activeItem,'ui-helper-hidden': child.visible === false}\"\n                    [class]=\"child.styleClass\" [ngStyle]=\"child.style\" role=\"none\"\n                    (mouseenter)=\"onItemMouseEnter($event, listItem, child)\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.tabindex]=\"child.disabled ? null : '0'\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" \n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, listItem, child)\" role=\"menuitem\" [attr.aria-haspopup]=\"item.items != null\" [attr.aria-expanded]=\"item === activeItem\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" role=\"menuitem\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-menuitem-link-active'\" role=\"menuitem\" [attr.tabindex]=\"child.disabled ? null : '0'\"\n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\"\n                        class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, listItem, child)\"\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-tieredMenuSub class=\"ui-submenu\" [item]=\"child\" *ngIf=\"child.items\" [baseZIndex]=\"baseZIndex\" [parentActive]=\"listItem==activeItem\" [autoZIndex]=\"autoZIndex\"></p-tieredMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return TieredMenu;
    }))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], TieredMenuSub);

    var TieredMenu = /*#__PURE__*/function () {
      function TieredMenu(el, renderer) {
        _classCallCheck(this, TieredMenu);

        this.el = el;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
      }

      return _createClass(TieredMenu, [{
        key: "toggle",
        value: function toggle(event) {
          if (this.visible) this.hide();else this.show(event);
          this.preventDocumentDefault = true;
        }
      }, {
        key: "show",
        value: function show(event) {
          this.target = event.currentTarget;
          this.visible = true;
          this.parentActive = true;
          this.preventDocumentDefault = true;
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              if (this.popup) {
                this.container = event.element;
                this.moveOnTop();
                this.appendOverlay();
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.container, this.target);
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
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
            if (this.appendTo === 'body') document.body.appendChild(this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.container, this.appendTo);
          }
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
          }
        }
      }, {
        key: "moveOnTop",
        value: function moveOnTop() {
          if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
          }
        }
      }, {
        key: "hide",
        value: function hide() {
          this.visible = false;
          this.parentActive = false;
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          this.hide();
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this2 = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
              if (!_this2.preventDocumentDefault && _this2.popup) {
                _this2.hide();
              }

              _this2.preventDocumentDefault = false;
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
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindDocumentResizeListener();
          this.preventDocumentDefault = false;
          this.target = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.popup) {
            this.restoreOverlayAppend();
            this.onOverlayHide();
          }
        }
      }]);
    }();

    TieredMenu.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TieredMenu.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TieredMenu.prototype, "popup", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TieredMenu.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TieredMenu.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TieredMenu.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TieredMenu.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TieredMenu.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TieredMenu.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TieredMenu.prototype, "hideTransitionOptions", void 0);
    TieredMenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-tieredMenu',
      template: "\n        <div [ngClass]=\"{'ui-tieredmenu ui-widget ui-widget-content ui-corner-all':true, 'ui-tieredmenu-dynamic ui-shadow':popup}\" [class]=\"styleClass\" [ngStyle]=\"style\"\n            [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"popup !== true\" \n            (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (click)=\"preventDocumentDefault=true\" *ngIf=\"!popup || visible\">\n            <p-tieredMenuSub [item]=\"model\" root=\"root\" [parentActive]=\"parentActive\" [baseZIndex]=\"baseZIndex\" [autoZIndex]=\"autoZIndex\"></p-tieredMenuSub>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], TieredMenu);

    var TieredMenuModule = /*#__PURE__*/_createClass(function TieredMenuModule() {
      _classCallCheck(this, TieredMenuModule);
    });

    TieredMenuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      exports: [TieredMenu, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      declarations: [TieredMenu, TieredMenuSub]
    })], TieredMenuModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-tieredmenu-tieredmenudemo-module-es5.js.map