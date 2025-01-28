function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-lightbox-lightboxdemo-module"], {
  /***/
  "./src/app/components/lightbox/lightbox.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/lightbox/lightbox.ts ***!
    \*************************************************/

  /*! exports provided: Lightbox, LightboxModule */

  /***/
  function _src_app_components_lightbox_lightboxTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Lightbox", function () {
      return Lightbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightboxModule", function () {
      return LightboxModule;
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

    var Lightbox = /*#__PURE__*/function () {
      function Lightbox(el, renderer, cd) {
        _classCallCheck(this, Lightbox);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.type = 'image';
        this.effectDuration = '500ms';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.closeOnEscape = true;
      }

      return _createClass(Lightbox, [{
        key: "onImageClick",
        value: function onImageClick(event, image, i, content) {
          this.index = i;
          this.loading = true;
          content.style.width = 32 + 'px';
          content.style.height = 32 + 'px';
          this.preventDocumentClickListener = true;
          this.show();
          this.displayImage(image);
          event.preventDefault();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.panel = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].findSingle(this.el.nativeElement, '.ui-lightbox ');

          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.panel);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].appendChild(this.panel, this.appendTo);
          }
        }
      }, {
        key: "onLinkClick",
        value: function onLinkClick(event, content) {
          this.preventDocumentClickListener = true;
          this.show();
          event.preventDefault();
        }
      }, {
        key: "displayImage",
        value: function displayImage(image) {
          var _this = this;

          setTimeout(function () {
            _this.cd.markForCheck();

            _this.currentImage = image;
            _this.captionText = image.title;

            _this.center();
          }, 1000);
        }
      }, {
        key: "show",
        value: function show() {
          this.mask = document.createElement('div');
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
          document.body.appendChild(this.mask);

          if (this.autoZIndex) {
            this.zindex = this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex;
          }

          this.mask.style.zIndex = this.zindex - 1;
          this.center();
          this.visible = true;
          this.bindGlobalListeners();
        }
      }, {
        key: "hide",
        value: function hide(event) {
          this.captionText = null;
          this.index = null;
          this.currentImage = null;
          this.visible = false;

          if (this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
          }

          this.unbindGlobalListeners();
          event.preventDefault();
        }
      }, {
        key: "center",
        value: function center() {
          var elementWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.panel);
          var elementHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.panel);

          if (elementWidth == 0 && elementHeight == 0) {
            this.panel.style.visibility = 'hidden';
            this.panel.style.display = 'block';
            elementWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.panel);
            elementHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.panel);
            this.panel.style.display = 'none';
            this.panel.style.visibility = 'visible';
          }
        }
      }, {
        key: "onImageLoad",
        value: function onImageLoad(event, content) {
          var _this2 = this;

          var image = event.target;
          image.style.visibility = 'hidden';
          image.style.display = 'block';
          var imageWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(image);
          var imageHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(image);
          image.style.display = 'none';
          image.style.visibility = 'visible';
          content.style.width = imageWidth + 'px';
          content.style.height = imageHeight + 'px';
          this.panel.style.left = parseInt(this.panel.style.left) + (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterWidth(this.panel) - imageWidth) / 2 + 'px';
          this.panel.style.top = parseInt(this.panel.style.top) + (primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].getOuterHeight(this.panel) - imageHeight) / 2 + 'px';
          setTimeout(function () {
            _this2.cd.markForCheck();

            primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].fadeIn(image, 500);
            image.style.display = 'block'; //this.captionText = this.currentImage.title;

            _this2.loading = false;
          }, parseInt(this.effectDuration));
        }
      }, {
        key: "prev",
        value: function prev(placeholder) {
          this.captionText = null;
          this.loading = true;
          placeholder.style.display = 'none';

          if (this.index > 0) {
            this.displayImage(this.images[--this.index]);
          }
        }
      }, {
        key: "next",
        value: function next(placeholder) {
          this.captionText = null;
          this.loading = true;
          placeholder.style.display = 'none';

          if (this.index <= this.images.length - 1) {
            this.displayImage(this.images[++this.index]);
          }
        }
      }, {
        key: "bindGlobalListeners",
        value: function bindGlobalListeners() {
          var _this3 = this;

          this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
            if (!_this3.preventDocumentClickListener && _this3.visible) {
              _this3.hide(event);
            }

            _this3.preventDocumentClickListener = false;

            _this3.cd.markForCheck();
          });

          if (this.closeOnEscape && !this.documentEscapeListener) {
            this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
              if (event.which == 27) {
                if (parseInt(_this3.panel.style.zIndex) === primeng_dom__WEBPACK_IMPORTED_MODULE_3__["DomHandler"].zindex + _this3.baseZIndex) {
                  _this3.hide(event);
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

          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }, {
        key: "leftVisible",
        get: function get() {
          return this.images && this.images.length && this.index != 0 && !this.loading;
        }
      }, {
        key: "rightVisible",
        get: function get() {
          return this.images && this.images.length && this.index < this.images.length - 1 && !this.loading;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindGlobalListeners();

          if (this.appendTo) {
            this.el.nativeElement.appendChild(this.panel);
          }
        }
      }]);
    }();

    Lightbox.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Lightbox.prototype, "images", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Lightbox.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Lightbox.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Lightbox.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Lightbox.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Lightbox.prototype, "easing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Lightbox.prototype, "effectDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Lightbox.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Lightbox.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Lightbox.prototype, "closeOnEscape", void 0);
    Lightbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-lightbox',
      template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"(type == 'image')\">\n            <a *ngFor=\"let image of images; let i = index;\" [href]=\"image.source\" (click)=\"onImageClick($event,image,i,content)\">\n                <img [src]=\"image.thumbnail\" [title]=\"image.title\" [alt]=\"image.alt\">\n            </a>\n        </div>\n        <span [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"(type == 'content')\" (click)=\"onLinkClick($event,content)\">\n            <ng-content select=\"a\"></ng-content>\n        </span>\n        <div class=\"ui-lightbox ui-widget ui-corner-all ui-shadow\" [style.display]=\"visible ? 'block' : 'none'\" [style.zIndex]=\"zindex\"\n            [ngClass]=\"{'ui-lightbox-loading': loading}\"\n            [style.transitionProperty]=\"'all'\" [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\" (click)=\"preventDocumentClickListener=true\">\n           <div class=\"ui-lightbox-content-wrapper\">\n              <a class=\"ui-state-default ui-lightbox-nav-left ui-corner-right\" [style.zIndex]=\"zindex + 1\" (click)=\"prev(img)\"\n                [ngClass]=\"{'ui-helper-hidden':!leftVisible}\"><span class=\"ui-lightbox-nav-icon pi pi-chevron-left\"></span></a>\n              <div #content class=\"ui-lightbox-content ui-corner-all\" \n                [style.transitionProperty]=\"'width,height'\" [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\">\n                <img #img [src]=\"currentImage ? currentImage.source||'' : ''\" (load)=\"onImageLoad($event,content)\" style=\"display:none\">\n                <ng-content></ng-content>\n              </div>\n              <a class=\"ui-state-default ui-lightbox-nav-right ui-corner-left ui-helper-hidden\" [style.zIndex]=\"zindex + 1\" (click)=\"next(img)\"\n                [ngClass]=\"{'ui-helper-hidden':!rightVisible}\"><span class=\"ui-lightbox-nav-icon pi pi-chevron-right\"></span></a>\n           </div>\n           <div class=\"ui-lightbox-caption ui-widget-header\" [style.display]=\"captionText ? 'block' : 'none'\">\n              <span class=\"ui-lightbox-caption-text\">{{captionText}}</span><a class=\"ui-lightbox-close ui-corner-all\" tabindex=\"0\" (click)=\"hide($event)\" (keydown.enter)=\"hide($event)\"><span class=\"pi pi-times\"></span></a>\n              <div style=\"clear:both\"></div>\n           </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Lightbox);

    var LightboxModule = /*#__PURE__*/_createClass(function LightboxModule() {
      _classCallCheck(this, LightboxModule);
    });

    LightboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [Lightbox],
      declarations: [Lightbox]
    })], LightboxModule);
    /***/
  },

  /***/
  "./src/app/components/lightbox/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/lightbox/public_api.ts ***!
    \***************************************************/

  /*! exports provided: Lightbox, LightboxModule */

  /***/
  function _src_app_components_lightbox_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lightbox */
    "./src/app/components/lightbox/lightbox.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Lightbox", function () {
      return _lightbox__WEBPACK_IMPORTED_MODULE_0__["Lightbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LightboxModule", function () {
      return _lightbox__WEBPACK_IMPORTED_MODULE_0__["LightboxModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-lightbox-lightboxdemo-module-es5.js.map