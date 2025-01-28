function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dynamicdialog-dynamicdialogdemo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/dynamicdialog/dialogservice.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/dynamicdialog/dialogservice.ts ***!
    \***********************************************************/

  /*! exports provided: DialogService */

  /***/
  function _src_app_components_dynamicdialog_dialogserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
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


    var _dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dynamicdialog */
    "./src/app/components/dynamicdialog/dynamicdialog.ts");
    /* harmony import */


    var _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dynamicdialog-injector */
    "./src/app/components/dynamicdialog/dynamicdialog-injector.ts");
    /* harmony import */


    var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dynamicdialog-config */
    "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
    /* harmony import */


    var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dynamicdialog-ref */
    "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");

    var DialogService = /*#__PURE__*/function () {
      function DialogService(componentFactoryResolver, appRef, injector) {
        _classCallCheck(this, DialogService);

        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
      }

      return _createClass(DialogService, [{
        key: "open",
        value: function open(componentType, config) {
          var dialogRef = this.appendDialogComponentToBody(config);
          this.dialogComponentRef.instance.childComponentType = componentType;
          return dialogRef;
        }
      }, {
        key: "appendDialogComponentToBody",
        value: function appendDialogComponentToBody(config) {
          var _this = this;

          var map = new WeakMap();
          map.set(_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"], config);
          var dialogRef = new _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"]();
          map.set(_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"], dialogRef);
          var sub = dialogRef.onClose.subscribe(function () {
            _this.dialogComponentRef.instance.close();
          });
          var destroySub = dialogRef.onDestroy.subscribe(function () {
            _this.removeDialogComponentFromBody();

            destroySub.unsubscribe();
            sub.unsubscribe();
          });
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogComponent"]);
          var componentRef = componentFactory.create(new _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogInjector"](this.injector, map));
          this.appRef.attachView(componentRef.hostView);
          var domElem = componentRef.hostView.rootNodes[0];
          document.body.appendChild(domElem);
          this.dialogComponentRef = componentRef;
          return dialogRef;
        }
      }, {
        key: "removeDialogComponentFromBody",
        value: function removeDialogComponentFromBody() {
          this.appRef.detachView(this.dialogComponentRef.hostView);
          this.dialogComponentRef.destroy();
        }
      }]);
    }();

    DialogService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    DialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], DialogService);
    /***/
  },

  /***/
  "./src/app/components/dynamicdialog/dynamicdialog-config.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/dynamicdialog/dynamicdialog-config.ts ***!
    \******************************************************************/

  /*! exports provided: DynamicDialogConfig */

  /***/
  function _src_app_components_dynamicdialog_dynamicdialogConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function () {
      return DynamicDialogConfig;
    });

    var DynamicDialogConfig = /*#__PURE__*/_createClass(function DynamicDialogConfig() {
      _classCallCheck(this, DynamicDialogConfig);
    });
    /***/

  },

  /***/
  "./src/app/components/dynamicdialog/dynamicdialog-injector.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/dynamicdialog/dynamicdialog-injector.ts ***!
    \********************************************************************/

  /*! exports provided: DynamicDialogInjector */

  /***/
  function _src_app_components_dynamicdialog_dynamicdialogInjectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogInjector", function () {
      return DynamicDialogInjector;
    });

    var DynamicDialogInjector = /*#__PURE__*/function () {
      function DynamicDialogInjector(_parentInjector, _additionalTokens) {
        _classCallCheck(this, DynamicDialogInjector);

        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
      }

      return _createClass(DynamicDialogInjector, [{
        key: "get",
        value: function get(token, notFoundValue, flags) {
          var value = this._additionalTokens.get(token);

          if (value) return value;
          return this._parentInjector.get(token, notFoundValue);
        }
      }]);
    }();
    /***/

  },

  /***/
  "./src/app/components/dynamicdialog/dynamicdialog-ref.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/dynamicdialog/dynamicdialog-ref.ts ***!
    \***************************************************************/

  /*! exports provided: DynamicDialogRef */

  /***/
  function _src_app_components_dynamicdialog_dynamicdialogRefTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function () {
      return DynamicDialogRef;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DynamicDialogRef = /*#__PURE__*/function () {
      function DynamicDialogRef() {
        _classCallCheck(this, DynamicDialogRef);

        this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onClose = this._onClose.asObservable();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onDestroy = this._onDestroy.asObservable();
      }

      return _createClass(DynamicDialogRef, [{
        key: "close",
        value: function close(result) {
          this._onClose.next(result);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._onDestroy.next();
        }
      }]);
    }();
    /***/

  },

  /***/
  "./src/app/components/dynamicdialog/dynamicdialog.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/dynamicdialog/dynamicdialog.ts ***!
    \***********************************************************/

  /*! exports provided: DynamicDialogComponent, DynamicDialogModule */

  /***/
  function _src_app_components_dynamicdialog_dynamicdialogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogComponent", function () {
      return DynamicDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogModule", function () {
      return DynamicDialogModule;
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


    var _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dynamicdialogcontent */
    "./src/app/components/dynamicdialog/dynamicdialogcontent.ts");
    /* harmony import */


    var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dynamicdialog-config */
    "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dynamicdialog-ref */
    "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");

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

    var DynamicDialogComponent = /*#__PURE__*/function () {
      function DynamicDialogComponent(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        _classCallCheck(this, DynamicDialogComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
        this.transformOptions = "scale(0.7)";
      }

      return _createClass(DynamicDialogComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadChildComponent(this.childComponentType);
          this.cd.detectChanges();
        }
      }, {
        key: "loadChildComponent",
        value: function loadChildComponent(componentType) {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
          var viewContainerRef = this.insertionPoint.viewContainerRef;
          viewContainerRef.clear();
          this.componentRef = viewContainerRef.createComponent(componentFactory);
        }
      }, {
        key: "moveOnTop",
        value: function moveOnTop() {
          if (this.config.autoZIndex !== false) {
            var zIndex = (this.config.baseZIndex || 0) + ++primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex;
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
          }
        }
      }, {
        key: "onAnimationStart",
        value: function onAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
              this.container = event.element;
              this.wrapper = this.container.parentElement;
              this.moveOnTop();
              this.bindGlobalListeners();

              if (this.config.modal !== false) {
                this.enableModality();
              }

              this.focus();
              break;

            case 'void':
              this.onContainerDestroy();
              break;
          }
        }
      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          if (event.toState === 'void') {
            this.dialogRef.destroy();
          }
        }
      }, {
        key: "onContainerDestroy",
        value: function onContainerDestroy() {
          this.unbindGlobalListeners();

          if (this.config.modal !== false) {
            this.disableModality();
          }

          this.container = null;
        }
      }, {
        key: "close",
        value: function close() {
          this.visible = false;
        }
      }, {
        key: "enableModality",
        value: function enableModality() {
          var _this2 = this;

          if (this.config.closable !== false && this.config.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'click', function (event) {
              if (_this2.wrapper && _this2.wrapper.isSameNode(event.target)) {
                _this2.close();
              }
            });
          }

          if (this.config.modal !== false) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
          }
        }
      }, {
        key: "disableModality",
        value: function disableModality() {
          if (this.wrapper) {
            if (this.config.dismissableMask) {
              this.unbindMaskClickListener();
            }

            if (this.config.modal !== false) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }

            if (!this.cd.destroyed) {
              this.cd.detectChanges();
            }
          }
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          if (event.which === 9) {
            event.preventDefault();
            var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].getFocusableElements(this.container);

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
      }, {
        key: "focus",
        value: function focus() {
          var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.container, 'a');

          if (focusable) {
            this.zone.runOutsideAngular(function () {
              setTimeout(function () {
                return focusable.focus();
              }, 5);
            });
          }
        }
      }, {
        key: "bindGlobalListeners",
        value: function bindGlobalListeners() {
          this.bindDocumentKeydownListener();

          if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
          }
        }
      }, {
        key: "unbindGlobalListeners",
        value: function unbindGlobalListeners() {
          this.unbindDocumentKeydownListener();
          this.unbindDocumentEscapeListener();
        }
      }, {
        key: "bindDocumentKeydownListener",
        value: function bindDocumentKeydownListener() {
          var _this3 = this;

          this.zone.runOutsideAngular(function () {
            _this3.documentKeydownListener = _this3.onKeydown.bind(_this3);
            window.document.addEventListener('keydown', _this3.documentKeydownListener);
          });
        }
      }, {
        key: "unbindDocumentKeydownListener",
        value: function unbindDocumentKeydownListener() {
          if (this.documentKeydownListener) {
            window.document.removeEventListener('keydown', this.documentKeydownListener);
            this.documentKeydownListener = null;
          }
        }
      }, {
        key: "bindDocumentEscapeListener",
        value: function bindDocumentEscapeListener() {
          var _this4 = this;

          this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
              if (parseInt(_this4.container.style.zIndex) == primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex + (_this4.config.baseZIndex ? _this4.config.baseZIndex : 0)) {
                _this4.close();
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
        key: "unbindMaskClickListener",
        value: function unbindMaskClickListener() {
          if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.onContainerDestroy();

          if (this.componentRef) {
            this.componentRef.destroy();
          }
        }
      }]);
    }();

    DynamicDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]
      }, {
        type: _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__["DynamicDialogRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"])], DynamicDialogComponent.prototype, "insertionPoint", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mask'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], DynamicDialogComponent.prototype, "maskViewChild", void 0);
    DynamicDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-dynamicDialog',
      template: "\n        <div #mask [ngClass]=\"{'ui-dialog-mask ui-dialog-visible':true, 'ui-widget-overlay ui-dialog-mask-scrollblocker': config.modal !== false}\">\n            <div [ngClass]=\"{'ui-dialog ui-dynamicdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl': config.rtl}\" [ngStyle]=\"config.style\" [class]=\"config.styleClass\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}\"\n                (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" *ngIf=\"visible\"\n                [style.width]=\"config.width\" [style.height]=\"config.height\">\n                <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" *ngIf=\"config.showHeader === false ? false: true\">\n                    <span class=\"ui-dialog-title\">{{config.header}}</span>\n                    <div class=\"ui-dialog-titlebar-icons\">\n                        <a [ngClass]=\"'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'\" tabindex=\"0\" role=\"button\" (click)=\"close()\" (keydown.enter)=\"close()\" *ngIf=\"config.closable !== false\">\n                            <span class=\"pi pi-times\"></span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ui-dialog-content ui-widget-content\" [ngStyle]=\"config.contentStyle\">\n                    <ng-template pDynamicDialogContent></ng-template>\n                </div>\n                <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"config.footer\">\n                    {{config.footer}}\n                </div>\n            </div>\n        </div>\n\t",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(hideAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"], _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__["DynamicDialogRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], DynamicDialogComponent);

    var DynamicDialogModule = /*#__PURE__*/_createClass(function DynamicDialogModule() {
      _classCallCheck(this, DynamicDialogModule);
    });

    DynamicDialogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
      declarations: [DynamicDialogComponent, _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"]],
      entryComponents: [DynamicDialogComponent]
    })], DynamicDialogModule);
    /***/
  },

  /***/
  "./src/app/components/dynamicdialog/dynamicdialogcontent.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/dynamicdialog/dynamicdialogcontent.ts ***!
    \******************************************************************/

  /*! exports provided: DynamicDialogContent */

  /***/
  function _src_app_components_dynamicdialog_dynamicdialogcontentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogContent", function () {
      return DynamicDialogContent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DynamicDialogContent = /*#__PURE__*/_createClass(function DynamicDialogContent(viewContainerRef) {
      _classCallCheck(this, DynamicDialogContent);

      this.viewContainerRef = viewContainerRef;
    });

    DynamicDialogContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    DynamicDialogContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pDynamicDialogContent]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])], DynamicDialogContent);
    /***/
  }
}]);
//# sourceMappingURL=default~components-dynamicdialog-dynamicdialogdemo-module~components-inputnumber-inputnumberdemo-module-es5.js.map