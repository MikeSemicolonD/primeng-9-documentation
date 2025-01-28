function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-slidemenu-slidemenudemo-module"], {
  /***/
  "./src/app/components/slidemenu/public_api.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/slidemenu/public_api.ts ***!
    \****************************************************/

  /*! exports provided: SlideMenuSub, SlideMenu, SlideMenuModule */

  /***/
  function _src_app_components_slidemenu_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _slidemenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./slidemenu */
    "./src/app/components/slidemenu/slidemenu.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlideMenuSub", function () {
      return _slidemenu__WEBPACK_IMPORTED_MODULE_0__["SlideMenuSub"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlideMenu", function () {
      return _slidemenu__WEBPACK_IMPORTED_MODULE_0__["SlideMenu"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlideMenuModule", function () {
      return _slidemenu__WEBPACK_IMPORTED_MODULE_0__["SlideMenuModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/slidemenu/slidemenu.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/slidemenu/slidemenu.ts ***!
    \***************************************************/

  /*! exports provided: SlideMenuSub, SlideMenu, SlideMenuModule */

  /***/
  function _src_app_components_slidemenu_slidemenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideMenuSub", function () {
      return SlideMenuSub;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideMenu", function () {
      return SlideMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideMenuModule", function () {
      return SlideMenuModule;
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

    var SlideMenuSub = /*#__PURE__*/function () {
      function SlideMenuSub(slideMenu) {
        _classCallCheck(this, SlideMenuSub);

        this.backLabel = 'Back';
        this.easing = 'ease-out';
        this.slideMenu = slideMenu;
      }

      return _createClass(SlideMenuSub, [{
        key: "itemClick",
        value: function itemClick(event, item, listitem) {
          var _this = this;

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

          if (item.items && !this.slideMenu.animating) {
            this.slideMenu.left -= this.slideMenu.menuWidth;
            this.activeItem = listitem;
            this.slideMenu.animating = true;
            setTimeout(function () {
              return _this.slideMenu.animating = false;
            }, this.effectDuration);
          }

          if (!item.items && this.slideMenu.popup) {
            this.slideMenu.hide();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.activeItem = null;
        }
      }]);
    }();

    SlideMenuSub.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return SlideMenu;
          })]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SlideMenuSub.prototype, "item", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SlideMenuSub.prototype, "root", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SlideMenuSub.prototype, "backLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SlideMenuSub.prototype, "menuWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SlideMenuSub.prototype, "effectDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SlideMenuSub.prototype, "easing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SlideMenuSub.prototype, "index", void 0);
    SlideMenuSub = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-slideMenuSub',
      template: "\n        <ul [ngClass]=\"{'ui-slidemenu-rootlist':root, 'ui-submenu-list':!root, 'ui-active-submenu': (-slideMenu.left == (index * menuWidth))}\"\n            [style.width.px]=\"menuWidth\" [style.left.px]=\"root ? slideMenu.left : slideMenu.menuWidth\"\n            [style.transitionProperty]=\"root ? 'left' : 'none'\" [style.transitionDuration]=\"effectDuration + 'ms'\" [style.transitionTimingFunction]=\"easing\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listitem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menuitem-active':listitem==activeItem,'ui-helper-hidden': child.visible === false}\"\n                    [class]=\"child.styleClass\" [ngStyle]=\"child.style\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" [attr.tabindex]=\"child.disabled ? null : '0'\" \n                        (click)=\"itemClick($event, child, listitem)\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-menuitem-link-active'\" \n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [href]=\"child.url\" class=\"ui-menuitem-link ui-corner-all\" \n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.disabled ? null : '0'\" \n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" \n                        (click)=\"itemClick($event, child, listitem)\"\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-slideMenuSub class=\"ui-submenu\" [item]=\"child\" [index]=\"index + 1\" [menuWidth]=\"menuWidth\" *ngIf=\"child.items\"></p-slideMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return SlideMenu;
    }))), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], SlideMenuSub);

    var SlideMenu = /*#__PURE__*/function () {
      function SlideMenu(el, renderer, cd) {
        _classCallCheck(this, SlideMenu);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.menuWidth = 190;
        this.viewportHeight = 180;
        this.effectDuration = 250;
        this.easing = 'ease-out';
        this.backLabel = 'Back';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.left = 0;
        this.animating = false;
      }

      return _createClass(SlideMenu, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (!this.viewportUpdated && !this.popup && this.containerViewChild) {
            this.updateViewPort();
            this.viewportUpdated = true;
          }
        }
      }, {
        key: "container",
        set: function set(element) {
          this.containerViewChild = element;
        }
      }, {
        key: "backward",
        set: function set(element) {
          this.backwardViewChild = element;
        }
      }, {
        key: "slideMenuContent",
        set: function set(element) {
          this.slideMenuContentViewChild = element;
        }
      }, {
        key: "updateViewPort",
        value: function updateViewPort() {
          this.slideMenuContentViewChild.nativeElement.style.height = this.viewportHeight - primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterHeight(this.backwardViewChild.nativeElement) + 'px';
        }
      }, {
        key: "toggle",
        value: function toggle(event) {
          if (this.visible) this.hide();else this.show(event);
          this.preventDocumentDefault = true;
          this.cd.detectChanges();
        }
      }, {
        key: "show",
        value: function show(event) {
          this.target = event.currentTarget;
          this.visible = true;
          this.preventDocumentDefault = true;
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              if (this.popup) {
                this.updateViewPort();
                this.moveOnTop();
                this.onShow.emit({});
                this.appendOverlay();
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].absolutePosition(this.containerViewChild.nativeElement, this.target);
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
              }

              break;

            case 'void':
              this.onOverlayHide();
              this.onHide.emit({});
              break;
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].appendChild(this.containerViewChild.nativeElement, this.appendTo);
          }
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
          }
        }
      }, {
        key: "moveOnTop",
        value: function moveOnTop() {
          if (this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
          }
        }
      }, {
        key: "hide",
        value: function hide() {
          this.visible = false;
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          this.hide();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          this.preventDocumentDefault = true;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.left += this.menuWidth;
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this2 = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
              if (!_this2.preventDocumentDefault) {
                _this2.hide();

                _this2.cd.detectChanges();
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
          this.left = 0;
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

    SlideMenu.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SlideMenu.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SlideMenu.prototype, "popup", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SlideMenu.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SlideMenu.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SlideMenu.prototype, "menuWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SlideMenu.prototype, "viewportHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SlideMenu.prototype, "effectDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SlideMenu.prototype, "easing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SlideMenu.prototype, "backLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SlideMenu.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SlideMenu.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SlideMenu.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SlideMenu.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SlideMenu.prototype, "hideTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], SlideMenu.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], SlideMenu.prototype, "onHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], SlideMenu.prototype, "container", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('backward'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], SlideMenu.prototype, "backward", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideMenuContent'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], SlideMenu.prototype, "slideMenuContent", null);
    SlideMenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-slideMenu',
      template: "\n        <div #container [ngClass]=\"{'ui-slidemenu ui-widget ui-widget-content ui-corner-all':true, 'ui-slidemenu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"onClick($event)\"\n            [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"popup !== true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" *ngIf=\"!popup || visible\">\n            <div class=\"ui-slidemenu-wrapper\" [style.height]=\"left ? viewportHeight + 'px' : 'auto'\">\n                <div #slideMenuContent class=\"ui-slidemenu-content\">\n                    <p-slideMenuSub [item]=\"model\" root=\"root\" [index]=\"0\" [menuWidth]=\"menuWidth\" [effectDuration]=\"effectDuration\" [easing]=\"easing\"></p-slideMenuSub>\n                </div>\n                <div #backward class=\"ui-slidemenu-backward ui-widget-header ui-corner-all\" [style.display]=\"left ? 'block' : 'none'\" (click)=\"goBack()\">\n                    <span class=\"ui-slidemenu-backward-icon pi pi-fw pi-caret-left\"></span><span>{{backLabel}}</span>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], SlideMenu);

    var SlideMenuModule = /*#__PURE__*/_createClass(function SlideMenuModule() {
      _classCallCheck(this, SlideMenuModule);
    });

    SlideMenuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      exports: [SlideMenu, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      declarations: [SlideMenu, SlideMenuSub]
    })], SlideMenuModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-slidemenu-slidemenudemo-module-es5.js.map