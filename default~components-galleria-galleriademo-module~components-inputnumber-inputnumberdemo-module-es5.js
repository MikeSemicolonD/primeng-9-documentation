function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-galleria-galleriademo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/galleria/galleria.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/galleria/galleria.ts ***!
    \*************************************************/

  /*! exports provided: Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, GalleriaModule */

  /***/
  function _src_app_components_galleria_galleriaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Galleria", function () {
      return Galleria;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaContent", function () {
      return GalleriaContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaItemSlot", function () {
      return GalleriaItemSlot;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaItem", function () {
      return GalleriaItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaThumbnails", function () {
      return GalleriaThumbnails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaModule", function () {
      return GalleriaModule;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");

    var Galleria = /*#__PURE__*/function () {
      function Galleria(element) {
        _classCallCheck(this, Galleria);

        this.element = element;
        this.fullScreen = false;
        this.numVisible = 3;
        this.showItemNavigators = false;
        this.showThumbnailNavigators = true;
        this.showItemNavigatorsOnHover = false;
        this.changeItemOnIndicatorHover = false;
        this.circular = false;
        this.autoPlay = false;
        this.transitionInterval = 4000;
        this.showThumbnails = true;
        this.thumbnailsPosition = "bottom";
        this.verticalThumbnailViewPortHeight = "300px";
        this.showIndicators = false;
        this.showIndicatorsOnItem = false;
        this.indicatorsPosition = "bottom";
        this.baseZIndex = 0;
        this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._visible = false;
        this._activeIndex = 0;
      }

      return _createClass(Galleria, [{
        key: "activeIndex",
        get: function get() {
          return this._activeIndex;
        },
        set: function set(activeIndex) {
          this._activeIndex = activeIndex;
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        },
        set: function set(visible) {
          this._visible = visible;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'header':
                _this.headerFacet = item.template;
                break;

              case 'footer':
                _this.footerFacet = item.template;
                break;

              case 'indicator':
                _this.indicatorFacet = item.template;
                break;

              case 'caption':
                _this.captionFacet = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChanges) {
          if (this.fullScreen && simpleChanges.visible) {
            if (simpleChanges.visible.currentValue) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
              this.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
            } else {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }
          }
        }
      }, {
        key: "onMaskHide",
        value: function onMaskHide() {
          this.visible = false;
          this.visibleChange.emit(false);
        }
      }, {
        key: "onActiveItemChange",
        value: function onActiveItemChange(index) {
          if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeIndexChange.emit(index);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.fullScreen) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
          }
        }
      }]);
    }();

    Galleria.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], Galleria.prototype, "activeIndex", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "fullScreen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Galleria.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Galleria.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Galleria.prototype, "numVisible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Galleria.prototype, "responsiveOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "showItemNavigators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "showThumbnailNavigators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "showItemNavigatorsOnHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "changeItemOnIndicatorHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "circular", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "autoPlay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Galleria.prototype, "transitionInterval", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "showThumbnails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Galleria.prototype, "thumbnailsPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Galleria.prototype, "verticalThumbnailViewPortHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "showIndicators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Galleria.prototype, "showIndicatorsOnItem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Galleria.prototype, "indicatorsPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Galleria.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Galleria.prototype, "maskClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Galleria.prototype, "containerClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Galleria.prototype, "containerStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mask', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Galleria.prototype, "mask", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], Galleria.prototype, "visible", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Galleria.prototype, "activeIndexChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Galleria.prototype, "visibleChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Galleria.prototype, "templates", void 0);
    Galleria = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-galleria',
      template: "\n        <div *ngIf=\"fullScreen;else windowed\">\n            <div *ngIf=\"visible\"  #mask [ngClass]=\"{'ui-galleria-mask ui-widget-overlay':true, 'ui-galleria-visible': this.visible}\" [class]=\"maskClass\" [ngStyle]=\"{'zIndex':zIndex}\">\n                <p-galleriaContent (maskHide)=\"onMaskHide()\" (activeItemChange)=\"onActiveItemChange($event)\" [ngStyle]=\"containerStyle\"></p-galleriaContent>\n            </div>\n        </div>\n\n        <ng-template #windowed>\n            <p-galleriaContent (activeItemChange)=\"onActiveItemChange($event)\"></p-galleriaContent>\n        </ng-template>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], Galleria);

    var GalleriaContent = /*#__PURE__*/function () {
      function GalleriaContent(galleria) {
        _classCallCheck(this, GalleriaContent);

        this.galleria = galleria;
        this.maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.id = this.galleria.id || Object(primeng_utils__WEBPACK_IMPORTED_MODULE_4__["UniqueComponentId"])();
        this.slideShowActicve = false;
        this._activeIndex = 0;
        this.slideShowActive = true;
      }

      return _createClass(GalleriaContent, [{
        key: "activeIndex",
        get: function get() {
          return this._activeIndex;
        },
        set: function set(activeIndex) {
          this._activeIndex = activeIndex;
        }
      }, {
        key: "galleriaClass",
        value: function galleriaClass() {
          var thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('ui-galleria-thumbnails', this.galleria.thumbnailsPosition);
          var indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('ui-galleria-indicators', this.galleria.indicatorsPosition);
          return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
        }
      }, {
        key: "startSlideShow",
        value: function startSlideShow() {
          var _this2 = this;

          this.interval = setInterval(function () {
            var activeIndex = _this2.galleria.circular && _this2.galleria.value.length - 1 === _this2.galleria.activeIndex ? 0 : _this2.galleria.activeIndex + 1;

            _this2.onActiveIndexChange(activeIndex);

            _this2.activeIndex = activeIndex;
          }, this.galleria.transitionInterval);
          this.slideShowActive = true;
        }
      }, {
        key: "stopSlideShow",
        value: function stopSlideShow() {
          if (this.interval) {
            clearInterval(this.interval);
          }

          this.slideShowActive = false;
        }
      }, {
        key: "getPositionClass",
        value: function getPositionClass(preClassName, position) {
          var positions = ['top', 'left', 'bottom', 'right'];
          var pos = positions.find(function (item) {
            return item === position;
          });
          return pos ? "".concat(preClassName, "-").concat(pos) : '';
        }
      }, {
        key: "isVertical",
        value: function isVertical() {
          return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
        }
      }, {
        key: "onActiveIndexChange",
        value: function onActiveIndexChange(index) {
          if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeItemChange.emit(this.activeIndex);
          }
        }
      }]);
    }();

    GalleriaContent.ctorParameters = function () {
      return [{
        type: Galleria
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], GalleriaContent.prototype, "activeIndex", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GalleriaContent.prototype, "maskHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GalleriaContent.prototype, "activeItemChange", void 0);
    GalleriaContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-galleriaContent',
      template: "\n        <div [attr.id]=\"id\" *ngIf=\"galleria.value && galleria.value.length > 0\" [ngClass]=\"{'ui-galleria ui-widget': true, 'ui-galleria-fullscreen': this.galleria.fullScreen, \n            'ui-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'ui-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}\"\n            [ngStyle]=\"!galleria.fullScreen ? galleria.containerStyle : {}\" [class]=\"galleriaClass()\">\n            <button *ngIf=\"galleria.fullScreen\" type=\"button\" class=\"ui-galleria-close ui-link ui-widget ui-state-default ui-corner-all\" (click)=\"maskHide.emit()\">\n                <span class=\"ui-galleria-close-icon pi pi-times\"></span>\n            </button>\n            <div *ngIf=\"galleria.templates && galleria.headerFacet\" class=\"ui-galleria-header\">\n                <p-galleriaItemSlot type=\"header\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n            <div class=\"ui-galleria-content\">\n                <p-galleriaItem [value]=\"galleria.value\" [activeIndex]=\"galleria.activeIndex\" [circular]=\"galleria.circular\" [templates]=\"galleria.templates\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" \n                    [showIndicators]=\"galleria.showIndicators\" [changeItemOnIndicatorHover]=\"galleria.changeItemOnIndicatorHover\" [indicatorFacet]=\"galleria.indicatorFacet\"\n                    [captionFacet]=\"galleria.captionFacet\" [showItemNavigators]=\"galleria.showItemNavigators\" [autoPlay]=\"galleria.autoPlay\" [slideShowActive]=\"slideShowActive\"\n                    (startSlideShow)=\"startSlideShow()\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaItem>\n\n                <p-galleriaThumbnails *ngIf=\"galleria.showThumbnails\" [containerId]=\"id\" [value]=\"galleria.value\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" [activeIndex]=\"galleria.activeIndex\" [templates]=\"galleria.templates\"\n                    [numVisible]=\"galleria.numVisible\" [responsiveOptions]=\"galleria.responsiveOptions\" [circular]=\"galleria.circular\"\n                    [isVertical]=\"isVertical()\" [contentHeight]=\"galleria.verticalThumbnailViewPortHeight\" [showThumbnailNavigators]=\"galleria.showThumbnailNavigators\"\n                    [slideShowActive]=\"slideShowActive\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaThumbnails>\n            </div>\n            <div *ngIf=\"galleria.templates && galleria.footerFacet\" class=\"ui-galleria-footer\">\n                <p-galleriaItemSlot type=\"footer\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Galleria])], GalleriaContent);

    var GalleriaItemSlot = /*#__PURE__*/function () {
      function GalleriaItemSlot() {
        _classCallCheck(this, GalleriaItemSlot);
      }

      return _createClass(GalleriaItemSlot, [{
        key: "item",
        get: function get() {
          return this._item;
        },
        set: function set(item) {
          var _this3 = this;

          this._item = item;

          if (this.templates) {
            this.templates.forEach(function (item) {
              if (item.getType() === _this3.type) {
                switch (_this3.type) {
                  case 'item':
                  case 'caption':
                  case 'thumbnail':
                    _this3.context = {
                      $implicit: _this3.item
                    };
                    _this3.contentTemplate = item.template;
                    break;
                }
              }
            });
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          this.templates.forEach(function (item) {
            if (item.getType() === _this4.type) {
              switch (_this4.type) {
                case 'item':
                case 'caption':
                case 'thumbnail':
                  _this4.context = {
                    $implicit: _this4.item
                  };
                  _this4.contentTemplate = item.template;
                  break;

                case 'indicator':
                  _this4.context = {
                    $implicit: _this4.index
                  };
                  _this4.contentTemplate = item.template;
                  break;

                default:
                  _this4.context = {};
                  _this4.contentTemplate = item.template;
                  break;
              }
            }
          });
        }
      }]);
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], GalleriaItemSlot.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GalleriaItemSlot.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], GalleriaItemSlot.prototype, "item", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GalleriaItemSlot.prototype, "type", void 0);
    GalleriaItemSlot = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-galleriaItemSlot',
      template: "\n        <ng-container *ngIf=\"contentTemplate\">\n            <ng-container *ngTemplateOutlet=\"contentTemplate; context: context\"></ng-container>\n        </ng-container>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })], GalleriaItemSlot);

    var GalleriaItem = /*#__PURE__*/function () {
      function GalleriaItem() {
        _classCallCheck(this, GalleriaItem);

        this.circular = false;
        this.showItemNavigators = false;
        this.showIndicators = true;
        this.slideShowActive = true;
        this.changeItemOnIndicatorHover = true;
        this.autoPlay = false;
        this.startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._activeIndex = 0;
      }

      return _createClass(GalleriaItem, [{
        key: "activeIndex",
        get: function get() {
          return this._activeIndex;
        },
        set: function set(activeIndex) {
          this._activeIndex = activeIndex;
          this.activeItem = this.value[this._activeIndex];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.autoPlay) {
            this.startSlideShow.emit();
          }
        }
      }, {
        key: "next",
        value: function next() {
          var nextItemIndex = this.activeIndex + 1;
          var activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
          this.onActiveIndexChange.emit(activeIndex);
        }
      }, {
        key: "prev",
        value: function prev() {
          var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
          var activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
          this.onActiveIndexChange.emit(activeIndex);
        }
      }, {
        key: "stopTheSlideShow",
        value: function stopTheSlideShow() {
          if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
          }
        }
      }, {
        key: "navForward",
        value: function navForward(e) {
          this.stopTheSlideShow();
          this.next();

          if (e && e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "navBackward",
        value: function navBackward(e) {
          this.stopTheSlideShow();
          this.prev();

          if (e && e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "onIndicatorClick",
        value: function onIndicatorClick(index) {
          this.stopTheSlideShow();
          this.onActiveIndexChange.emit(index);
        }
      }, {
        key: "onIndicatorMouseEnter",
        value: function onIndicatorMouseEnter(index) {
          if (this.changeItemOnIndicatorHover) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
          }
        }
      }, {
        key: "onIndicatorKeyDown",
        value: function onIndicatorKeyDown(index) {
          this.stopTheSlideShow();
          this.onActiveIndexChange.emit(index);
        }
      }, {
        key: "isNavForwardDisabled",
        value: function isNavForwardDisabled() {
          return !this.circular && this.activeIndex === this.value.length - 1;
        }
      }, {
        key: "isNavBackwardDisabled",
        value: function isNavBackwardDisabled() {
          return !this.circular && this.activeIndex === 0;
        }
      }, {
        key: "isIndicatorItemActive",
        value: function isIndicatorItemActive(index) {
          return this.activeIndex === index;
        }
      }]);
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaItem.prototype, "circular", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], GalleriaItem.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaItem.prototype, "showItemNavigators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaItem.prototype, "showIndicators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaItem.prototype, "slideShowActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaItem.prototype, "changeItemOnIndicatorHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaItem.prototype, "autoPlay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], GalleriaItem.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GalleriaItem.prototype, "indicatorFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GalleriaItem.prototype, "captionFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GalleriaItem.prototype, "startSlideShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GalleriaItem.prototype, "stopSlideShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GalleriaItem.prototype, "onActiveIndexChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], GalleriaItem.prototype, "activeIndex", null);
    GalleriaItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-galleriaItem',
      template: "\n        <div class=\"ui-galleria-item-container\">\n            <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'ui-galleria-item-prev ui-galleria-item-nav ui-link': true, 'ui-state-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" \n                [disabled]=\"isNavBackwardDisabled()\">\n                <span class=\"ui-galleria-item-prev-icon pi pi-chevron-left\"></span>\n            </button>\n            <p-galleriaItemSlot type=\"item\" [item]=\"activeItem\" [templates]=\"templates\" class=\"ui-galleria-item\"></p-galleriaItemSlot>\n            <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'ui-galleria-item-next ui-galleria-item-nav ui-link': true,'ui-state-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\" \n                [disabled]=\"isNavForwardDisabled()\">\n                <span class=\"ui-galleria-item-next-icon pi pi-chevron-right\"></span>\n            </button>\n            <div class=\"ui-galleria-caption\" *ngIf=\"captionFacet\">\n                <p-galleriaItemSlot type=\"caption\" [item]=\"activeItem\" [templates]=\"templates\"></p-galleriaItemSlot>\n            </div>\n        </div>\n        <ul *ngIf=\"showIndicators\" class=\"ui-galleria-indicators ui-helper-reset\">\n            <li *ngFor=\"let item of value; let index = index;\" tabindex=\"0\"\n                (click)=\"onIndicatorClick(index)\" (mouseenter)=\"onIndicatorMouseEnter(index)\" (keydown.enter)=\"onIndicatorKeyDown(index)\"\n                [ngClass]=\"{'ui-galleria-indicator': true,'ui-state-highlight': isIndicatorItemActive(index)}\">\n                <button type=\"button\" tabIndex=\"-1\" class=\"ui-link\" *ngIf=\"!indicatorFacet\">\n                </button>\n                <p-galleriaItemSlot type=\"indicator\" [index]=\"index\" [templates]=\"templates\"></p-galleriaItemSlot>\n            </li>\n        </ul>\n    ",
      host: {
        '[class.ui-galleria-item-wrapper]': 'true'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })], GalleriaItem);

    var GalleriaThumbnails = /*#__PURE__*/function () {
      function GalleriaThumbnails() {
        _classCallCheck(this, GalleriaThumbnails);

        this.isVertical = false;
        this.slideShowActive = false;
        this.circular = false;
        this.contentHeight = "300px";
        this.showThumbnailNavigators = true;
        this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startPos = null;
        this.thumbnailsStyle = null;
        this.sortedResponsiveOptions = null;
        this.totalShiftedItems = 0;
        this.page = 0;
        this._numVisible = 0;
        this.d_numVisible = 0;
        this._oldNumVisible = 0;
        this._activeIndex = 0;
        this._oldactiveIndex = 0;
      }

      return _createClass(GalleriaThumbnails, [{
        key: "numVisible",
        get: function get() {
          return this._numVisible;
        },
        set: function set(numVisible) {
          this._numVisible = numVisible;
          this._oldNumVisible = this.d_numVisible;
          this.d_numVisible = numVisible;
        }
      }, {
        key: "activeIndex",
        get: function get() {
          return this._activeIndex;
        },
        set: function set(activeIndex) {
          this._oldactiveIndex = this._activeIndex;
          this._activeIndex = activeIndex;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createStyle();
          this.calculatePosition();

          if (this.responsiveOptions) {
            this.bindDocumentListeners();
          }
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var totalShiftedItems = this.totalShiftedItems;

          if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
            if (this._activeIndex <= this.getMedianItemIndex()) {
              totalShiftedItems = 0;
            } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
              totalShiftedItems = this.d_numVisible - this.value.length;
            } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
              totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
            } else {
              totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
            }

            if (totalShiftedItems !== this.totalShiftedItems) {
              this.totalShiftedItems = totalShiftedItems;
            }

            if (this.itemsContainer && this.itemsContainer.nativeElement) {
              this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
            }

            if (this._oldactiveIndex !== this._activeIndex) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'ui-items-hidden');
              this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
            }

            this._oldactiveIndex = this._activeIndex;
            this._oldNumVisible = this.d_numVisible;
          }
        }
      }, {
        key: "createStyle",
        value: function createStyle() {
          if (!this.thumbnailsStyle) {
            this.thumbnailsStyle = document.createElement('style');
            this.thumbnailsStyle.type = 'text/css';
            document.body.appendChild(this.thumbnailsStyle);
          }

          var innerHTML = "\n            #".concat(this.containerId, " .ui-galleria-thumbnail-item {\n                flex: 1 0 ").concat(100 / this.d_numVisible, "%\n            }\n        ");

          if (this.responsiveOptions) {
            this.sortedResponsiveOptions = _toConsumableArray(this.responsiveOptions);
            this.sortedResponsiveOptions.sort(function (data1, data2) {
              var value1 = data1.breakpoint;
              var value2 = data2.breakpoint;
              var result = null;
              if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
                numeric: true
              });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
              return -1 * result;
            });

            for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
              var res = this.sortedResponsiveOptions[i];
              innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        #").concat(this.containerId, " .ui-galleria-thumbnail-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
            }
          }

          this.thumbnailsStyle.innerHTML = innerHTML;
        }
      }, {
        key: "calculatePosition",
        value: function calculatePosition() {
          if (this.itemsContainer && this.sortedResponsiveOptions) {
            var windowWidth = window.innerWidth;
            var matchedResponsiveData = {
              numVisible: this._numVisible
            };

            for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
              var res = this.sortedResponsiveOptions[i];

              if (parseInt(res.breakpoint, 10) >= windowWidth) {
                matchedResponsiveData = res;
              }
            }

            if (this.d_numVisible !== matchedResponsiveData.numVisible) {
              this.d_numVisible = matchedResponsiveData.numVisible;
            }
          }
        }
      }, {
        key: "getTabIndex",
        value: function getTabIndex(index) {
          return this.isItemActive(index) ? 0 : null;
        }
      }, {
        key: "navForward",
        value: function navForward(e) {
          this.stopTheSlideShow();
          var nextItemIndex = this._activeIndex + 1;

          if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
            this.step(-1);
          }

          var activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
          this.onActiveIndexChange.emit(activeIndex);

          if (e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "navBackward",
        value: function navBackward(e) {
          this.stopTheSlideShow();
          var prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
          var diff = prevItemIndex + this.totalShiftedItems;

          if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
            this.step(1);
          }

          var activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
          this.onActiveIndexChange.emit(activeIndex);

          if (e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "onItemClick",
        value: function onItemClick(index) {
          this.stopTheSlideShow();
          var selectedItemIndex = index;

          if (selectedItemIndex !== this._activeIndex) {
            var diff = selectedItemIndex + this.totalShiftedItems;
            var dir = 0;

            if (selectedItemIndex < this._activeIndex) {
              dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();

              if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
                this.step(dir);
              }
            } else {
              dir = this.getMedianItemIndex() - diff;

              if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
                this.step(dir);
              }
            }

            this.activeIndex = selectedItemIndex;
            this.onActiveIndexChange.emit(this.activeIndex);
          }
        }
      }, {
        key: "step",
        value: function step(dir) {
          var totalShiftedItems = this.totalShiftedItems + dir;

          if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
            totalShiftedItems = this.d_numVisible - this.value.length;
          } else if (dir > 0 && totalShiftedItems > 0) {
            totalShiftedItems = 0;
          }

          if (this.circular) {
            if (dir < 0 && this.value.length - 1 === this._activeIndex) {
              totalShiftedItems = 0;
            } else if (dir > 0 && this._activeIndex === 0) {
              totalShiftedItems = this.d_numVisible - this.value.length;
            }
          }

          if (this.itemsContainer) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'ui-items-hidden');
            this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
          }

          this.totalShiftedItems = totalShiftedItems;
        }
      }, {
        key: "stopTheSlideShow",
        value: function stopTheSlideShow() {
          if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
          }
        }
      }, {
        key: "changePageOnTouch",
        value: function changePageOnTouch(e, diff) {
          if (diff < 0) {
            // left
            this.navForward(e);
          } else {
            // right
            this.navBackward(e);
          }
        }
      }, {
        key: "getTotalPageNumber",
        value: function getTotalPageNumber() {
          return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
        }
      }, {
        key: "getMedianItemIndex",
        value: function getMedianItemIndex() {
          var index = Math.floor(this.d_numVisible / 2);
          return this.d_numVisible % 2 ? index : index - 1;
        }
      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          if (this.itemsContainer && this.itemsContainer.nativeElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.itemsContainer.nativeElement, 'ui-items-hidden');
            this.itemsContainer.nativeElement.style.transition = '';
          }
        }
      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(e) {
          var touchobj = e.changedTouches[0];

          if (this.isVertical) {
            this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
          } else {
            this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
          }
        }
      }, {
        key: "onTouchMove",
        value: function onTouchMove(e) {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "onTouchStart",
        value: function onTouchStart(e) {
          var touchobj = e.changedTouches[0];
          this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
          };
        }
      }, {
        key: "isNavBackwardDisabled",
        value: function isNavBackwardDisabled() {
          return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
        }
      }, {
        key: "isNavForwardDisabled",
        value: function isNavForwardDisabled() {
          return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
        }
      }, {
        key: "firstItemAciveIndex",
        value: function firstItemAciveIndex() {
          return this.totalShiftedItems * -1;
        }
      }, {
        key: "lastItemActiveIndex",
        value: function lastItemActiveIndex() {
          return this.firstItemAciveIndex() + this.d_numVisible - 1;
        }
      }, {
        key: "isItemActive",
        value: function isItemActive(index) {
          return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
        }
      }, {
        key: "bindDocumentListeners",
        value: function bindDocumentListeners() {
          var _this5 = this;

          if (!this.documentResizeListener) {
            this.documentResizeListener = function () {
              _this5.calculatePosition();
            };

            window.addEventListener('resize', this.documentResizeListener);
          }
        }
      }, {
        key: "unbindDocumentListeners",
        value: function unbindDocumentListeners() {
          if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.responsiveOptions) {
            this.unbindDocumentListeners();
          }

          if (this.thumbnailsStyle) {
            this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
          }
        }
      }]);
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GalleriaThumbnails.prototype, "containerId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], GalleriaThumbnails.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaThumbnails.prototype, "isVertical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaThumbnails.prototype, "slideShowActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GalleriaThumbnails.prototype, "circular", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], GalleriaThumbnails.prototype, "responsiveOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GalleriaThumbnails.prototype, "contentHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GalleriaThumbnails.prototype, "showThumbnailNavigators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], GalleriaThumbnails.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GalleriaThumbnails.prototype, "onActiveIndexChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], GalleriaThumbnails.prototype, "stopSlideShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemsContainer'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GalleriaThumbnails.prototype, "itemsContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], GalleriaThumbnails.prototype, "numVisible", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], GalleriaThumbnails.prototype, "activeIndex", null);
    GalleriaThumbnails = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-galleriaThumbnails',
      template: "\n        <div class=\"ui-galleria-thumbnail-wrapper\">\n            <div class=\"ui-galleria-thumbnail-container\">\n                <button *ngIf=\"showThumbnailNavigators\" [ngClass]=\"{'ui-galleria-thumbnail-prev ui-link': true, 'ui-state-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" [disabled]=\"isNavBackwardDisabled()\">\n                    <span [ngClass]=\"{'ui-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}\"></span>\n                </button>\n                <div class=\"ui-galleria-thumbnail-items-container\" [ngStyle]=\"{'height': isVertical ? contentHeight : ''}\">\n                    <div #itemsContainer class=\"ui-galleria-thumbnail-items\" (transitionend)=\"onTransitionEnd()\"\n                        (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd($event)\">\n                        <div *ngFor=\"let item of value; let index = index;\" [ngClass]=\"{'ui-galleria-thumbnail-item': true, 'ui-galleria-thumbnail-item-current': activeIndex === index, 'ui-galleria-thumbnail-item-active': isItemActive(index),\n                            'ui-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'ui-galleria-thumbnail-item-end': lastItemActiveIndex() === index }\">\n                            <div class=\"ui-galleria-thumbnail-item-content\" [attr.tabindex]=\"getTabIndex(index)\" (click)=\"onItemClick(index)\" (keydown.enter)=\"onItemClick(index)\">\n                                <p-galleriaItemSlot type=\"thumbnail\" [item]=\"item\" [templates]=\"templates\"></p-galleriaItemSlot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button *ngIf=\"showThumbnailNavigators\" [ngClass]=\"{'ui-galleria-thumbnail-next ui-link': true, 'ui-state-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\" [disabled]=\"isNavForwardDisabled()\">\n                    <span [ngClass]=\"{'ui-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}\"></span>\n                </button>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })], GalleriaThumbnails);

    var GalleriaModule = /*#__PURE__*/_createClass(function GalleriaModule() {
      _classCallCheck(this, GalleriaModule);
    });

    GalleriaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
    })], GalleriaModule);
    /***/
  },

  /***/
  "./src/app/components/galleria/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/galleria/public_api.ts ***!
    \***************************************************/

  /*! exports provided: Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, GalleriaModule */

  /***/
  function _src_app_components_galleria_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _galleria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./galleria */
    "./src/app/components/galleria/galleria.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Galleria", function () {
      return _galleria__WEBPACK_IMPORTED_MODULE_0__["Galleria"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GalleriaContent", function () {
      return _galleria__WEBPACK_IMPORTED_MODULE_0__["GalleriaContent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GalleriaItemSlot", function () {
      return _galleria__WEBPACK_IMPORTED_MODULE_0__["GalleriaItemSlot"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GalleriaItem", function () {
      return _galleria__WEBPACK_IMPORTED_MODULE_0__["GalleriaItem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GalleriaThumbnails", function () {
      return _galleria__WEBPACK_IMPORTED_MODULE_0__["GalleriaThumbnails"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GalleriaModule", function () {
      return _galleria__WEBPACK_IMPORTED_MODULE_0__["GalleriaModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-galleria-galleriademo-module~components-inputnumber-inputnumberdemo-module-es5.js.map