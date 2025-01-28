function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-menubar-menubardemo-module"], {
  /***/
  "./src/app/components/menubar/menubar.ts":
  /*!***********************************************!*\
    !*** ./src/app/components/menubar/menubar.ts ***!
    \***********************************************/

  /*! exports provided: MenubarSub, Menubar, MenubarModule */

  /***/
  function _src_app_components_menubar_menubarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenubarSub", function () {
      return MenubarSub;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Menubar", function () {
      return Menubar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenubarModule", function () {
      return MenubarModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MenubarSub = /*#__PURE__*/function () {
      function MenubarSub(renderer, cd) {
        _classCallCheck(this, MenubarSub);

        this.renderer = renderer;
        this.cd = cd;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.menuHoverActive = false;
      }

      return _createClass(MenubarSub, [{
        key: "parentActive",
        get: function get() {
          return this._parentActive;
        },
        set: function set(value) {
          if (!this.root) {
            this._parentActive = value;
            if (!value) this.activeItem = null;
          }
        }
      }, {
        key: "onItemMenuClick",
        value: function onItemMenuClick(event, item, menuitem) {
          this.menuClick = true;

          if (!this.autoDisplay) {
            if (menuitem.disabled) {
              return;
            }

            this.activeItem = this.activeMenu ? this.activeMenu.isEqualNode(item) ? null : item : item;
            var nextElement = item.children[0].nextElementSibling;

            if (nextElement) {
              var sublist = nextElement.children[0];

              if (this.autoZIndex) {
                sublist.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex);
              }

              if (this.root) {
                sublist.style.top = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(item.children[0]) + 'px';
                sublist.style.left = '0px';
              } else {
                sublist.style.top = '0px';
                sublist.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
              }
            }

            this.menuHoverActive = this.activeMenu ? !this.activeMenu.isEqualNode(item) : true;
            this.activeMenu = this.activeMenu ? this.activeMenu.isEqualNode(item) ? null : item : item;
            this.bindEventListener();
          }
        }
      }, {
        key: "bindEventListener",
        value: function bindEventListener() {
          var _this = this;

          if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
              if (!_this.menuClick) {
                _this.activeItem = null;
                _this.menuHoverActive = false;
                _this.activeMenu = false;
              }

              _this.menuClick = false;
            });
          }
        }
      }, {
        key: "onItemMouseEnter",
        value: function onItemMouseEnter(event, item, menuitem) {
          if (this.autoDisplay || !this.autoDisplay && this.root && this.menuHoverActive) {
            if (menuitem.disabled) {
              return;
            }

            if (this.activeItem && !this.activeItem.isEqualNode(item) || !this.activeItem) {
              this.activeItem = item;
              var nextElement = item.children[0].nextElementSibling;

              if (nextElement) {
                var sublist = nextElement.children[0];
                sublist.style.zIndex = String(++primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex);

                if (this.root) {
                  sublist.style.top = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(item.children[0]) + 'px';
                  sublist.style.left = '0px';
                } else {
                  sublist.style.top = '0px';
                  sublist.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(item.children[0]) + 'px';
                }
              }

              this.activeMenu = item;
            }
          }
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

          this.activeItem = null;
        }
      }, {
        key: "listClick",
        value: function listClick(event) {
          if (this.autoDisplay) {
            this.activeItem = null;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }]);
    }();

    MenubarSub.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MenubarSub.prototype, "item", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MenubarSub.prototype, "root", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MenubarSub.prototype, "autoDisplay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], MenubarSub.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MenubarSub.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], MenubarSub.prototype, "parentActive", null);
    MenubarSub = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-menubarSub',
      template: "\n        <ul [ngClass]=\"{'ui-menubar-root-list':root, 'ui-widget-content ui-corner-all ui-submenu-list ui-shadow':!root}\"\n            (click)=\"listClick($event)\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listItem [ngClass]=\"{'ui-menuitem ui-corner-all':true,\n                        'ui-menu-parent':child.items,'ui-menuitem-active':listItem==activeItem,'ui-helper-hidden': child.visible === false}\"\n                        (mouseenter)=\"onItemMouseEnter($event,listItem,child)\" (click)=\"onItemMenuClick($event, listItem, child)\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" [attr.data-automationid]=\"child.automationId\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" (click)=\"itemClick($event, child)\"\n                         [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\" \n                         [attr.tabindex]=\"child.disabled ? null : '0'\" [attr.aria-haspopup]=\"item.items != null\" [attr.aria-expanded]=\"item === activeItem\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw\" *ngIf=\"child.items\" [ngClass]=\"{'pi-caret-down':root,'pi-caret-right':!root}\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [attr.data-automationid]=\"child.automationId\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-menuitem-link-active'\" [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\"\n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.disabled ? null : '0'\" role=\"menuitem\"\n                        (click)=\"itemClick($event, child)\" [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\"\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\">\n                        <span class=\"ui-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon pi pi-fw\" *ngIf=\"child.items\" [ngClass]=\"{'pi-caret-down':root,'pi-caret-right':!root}\"></span>\n                    </a>\n                    <p-menubarSub class=\"ui-submenu\" [parentActive]=\"listItem==activeItem\" [item]=\"child\" *ngIf=\"child.items\" [autoDisplay]=\"true\"></p-menubarSub>\n                </li>\n            </ng-template>\n        </ul>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], MenubarSub);

    var Menubar = /*#__PURE__*/function () {
      function Menubar(el, renderer) {
        _classCallCheck(this, Menubar);

        this.el = el;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
      }

      return _createClass(Menubar, [{
        key: "autoDisplay",
        get: function get() {
          return this._autoDisplay;
        }
      }, {
        key: "utc",
        set: function set(_utc) {
          console.log("AutoDisplay property is deprecated and functionality is not available.");
        }
      }]);
    }();

    Menubar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Menubar.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Menubar.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Menubar.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Menubar.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Menubar.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], Menubar.prototype, "autoDisplay", null);
    Menubar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-menubar',
      template: "\n        <div [ngClass]=\"{'ui-menubar ui-widget ui-widget-content ui-corner-all':true}\" [class]=\"styleClass\" [ngStyle]=\"style\">\n            <p-menubarSub [item]=\"model\" root=\"root\" [baseZIndex]=\"baseZIndex\" [autoZIndex]=\"autoZIndex\">\n                <ng-content></ng-content>\n            </p-menubarSub>\n            <div class=\"ui-menubar-custom\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], Menubar);

    var MenubarModule = /*#__PURE__*/_createClass(function MenubarModule() {
      _classCallCheck(this, MenubarModule);
    });

    MenubarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      exports: [Menubar, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      declarations: [Menubar, MenubarSub]
    })], MenubarModule);
    /***/
  },

  /***/
  "./src/app/components/menubar/public_api.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/menubar/public_api.ts ***!
    \**************************************************/

  /*! exports provided: MenubarSub, Menubar, MenubarModule */

  /***/
  function _src_app_components_menubar_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _menubar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menubar */
    "./src/app/components/menubar/menubar.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MenubarSub", function () {
      return _menubar__WEBPACK_IMPORTED_MODULE_0__["MenubarSub"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Menubar", function () {
      return _menubar__WEBPACK_IMPORTED_MODULE_0__["Menubar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MenubarModule", function () {
      return _menubar__WEBPACK_IMPORTED_MODULE_0__["MenubarModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-menubar-menubardemo-module-es5.js.map