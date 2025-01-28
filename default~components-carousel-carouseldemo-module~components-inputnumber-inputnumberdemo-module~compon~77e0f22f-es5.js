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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-carousel-carouseldemo-module~components-inputnumber-inputnumberdemo-module~compon~77e0f22f"], {
  /***/
  "./src/app/components/carousel/carousel.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/carousel/carousel.ts ***!
    \*************************************************/

  /*! exports provided: Carousel, CarouselModule */

  /***/
  function _src_app_components_carousel_carouselTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Carousel", function () {
      return Carousel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
      return CarouselModule;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");

    var Carousel = /*#__PURE__*/function () {
      function Carousel(el, zone) {
        _classCallCheck(this, Carousel);

        this.el = el;
        this.zone = zone;
        this.orientation = "horizontal";
        this.verticalViewPortHeight = "300px";
        this.contentClass = "";
        this.dotsContainerClass = "";
        this.circular = false;
        this.autoplayInterval = 0;
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._numVisible = 1;
        this._numScroll = 1;
        this._oldNumScroll = 0;
        this.prevState = {
          numScroll: 0,
          numVisible: 0,
          value: []
        };
        this.defaultNumScroll = 1;
        this.defaultNumVisible = 1;
        this._page = 0;
        this.isRemainingItemsAdded = false;
        this.remainingItems = 0;
        this.swipeThreshold = 20;
        this.totalShiftedItems = this.page * this.numScroll * -1;
      }

      return _createClass(Carousel, [{
        key: "page",
        get: function get() {
          return this._page;
        },
        set: function set(val) {
          if (this.isCreated && val !== this._page) {
            if (this.autoplayInterval) {
              this.stopAutoplay();
              this.allowAutoplay = false;
            }

            if (val > this._page && val < this.totalDots() - 1) {
              this.step(-1, val);
            } else if (val < this._page && val !== 0) {
              this.step(1, val);
            }
          }

          this._page = val;
        }
      }, {
        key: "numVisible",
        get: function get() {
          return this._numVisible;
        },
        set: function set(val) {
          this._numVisible = val;
        }
      }, {
        key: "numScroll",
        get: function get() {
          return this._numVisible;
        },
        set: function set(val) {
          this._numScroll = val;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(val) {
          this._value = val;

          if (this.circular && this._value) {
            this.setCloneItems();
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.id = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_4__["UniqueComponentId"])();
          this.allowAutoplay = !!this.autoplayInterval;

          if (this.circular) {
            this.setCloneItems();
          }

          if (this.responsiveOptions) {
            this.defaultNumScroll = this._numScroll;
            this.defaultNumVisible = this._numVisible;
          }

          this.createStyle();
          this.calculatePosition();

          if (this.responsiveOptions) {
            this.bindDocumentListeners();
          }

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'item':
                _this.itemTemplate = item.template;
                break;

              default:
                _this.itemTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var isCircular = this.isCircular();
          var totalShiftedItems = this.totalShiftedItems;

          if (this.value && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
            if (this.autoplayInterval) {
              this.stopAutoplay();
            }

            this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
            var page = this._page;

            if (this.totalDots() !== 0 && page >= this.totalDots()) {
              page = this.totalDots() - 1;
              this._page = page;
              this.onPage.emit({
                page: this.page
              });
            }

            totalShiftedItems = page * this._numScroll * -1;

            if (isCircular) {
              totalShiftedItems -= this._numVisible;
            }

            if (page === this.totalDots() - 1 && this.remainingItems > 0) {
              totalShiftedItems += -1 * this.remainingItems + this._numScroll;
              this.isRemainingItemsAdded = true;
            } else {
              this.isRemainingItemsAdded = false;
            }

            if (totalShiftedItems !== this.totalShiftedItems) {
              this.totalShiftedItems = totalShiftedItems;
            }

            this._oldNumScroll = this._numScroll;
            this.prevState.numScroll = this._numScroll;
            this.prevState.numVisible = this._numVisible;
            this.prevState.value = this._value;

            if (this.totalDots() > 0 && this.itemsContainer && this.itemsContainer.nativeElement) {
              this.itemsContainer.nativeElement.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this._numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this._numVisible), "%, 0, 0)");
            }

            this.isCreated = true;

            if (this.autoplayInterval && this.isAutoplay()) {
              this.startAutoplay();
            }
          }

          if (isCircular) {
            if (this.page === 0) {
              totalShiftedItems = -1 * this._numVisible;
            } else if (totalShiftedItems === 0) {
              totalShiftedItems = -1 * this.value.length;

              if (this.remainingItems > 0) {
                this.isRemainingItemsAdded = true;
              }
            }

            if (totalShiftedItems !== this.totalShiftedItems) {
              this.totalShiftedItems = totalShiftedItems;
            }
          }
        }
      }, {
        key: "createStyle",
        value: function createStyle() {
          if (!this.carouselStyle) {
            this.carouselStyle = document.createElement('style');
            this.carouselStyle.type = 'text/css';
            document.body.appendChild(this.carouselStyle);
          }

          var innerHTML = "\n            #".concat(this.id, " .ui-carousel-item {\n\t\t\t\tflex: 1 0 ").concat(100 / this.numVisible, "%\n\t\t\t}\n        ");

          if (this.responsiveOptions) {
            this.responsiveOptions.sort(function (data1, data2) {
              var value1 = data1.breakpoint;
              var value2 = data2.breakpoint;
              var result = null;
              if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
                numeric: true
              });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
              return -1 * result;
            });

            for (var i = 0; i < this.responsiveOptions.length; i++) {
              var res = this.responsiveOptions[i];
              innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        #").concat(this.id, " .ui-carousel-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
            }
          }

          this.carouselStyle.innerHTML = innerHTML;
        }
      }, {
        key: "calculatePosition",
        value: function calculatePosition() {
          if (this.itemsContainer && this.responsiveOptions) {
            var windowWidth = window.innerWidth;
            var matchedResponsiveData = {
              numVisible: this.defaultNumVisible,
              numScroll: this.defaultNumScroll
            };

            for (var i = 0; i < this.responsiveOptions.length; i++) {
              var res = this.responsiveOptions[i];

              if (parseInt(res.breakpoint, 10) >= windowWidth) {
                matchedResponsiveData = res;
              }
            }

            if (this._numScroll !== matchedResponsiveData.numScroll) {
              var page = this._page;
              page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
              var totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;

              if (this.isCircular()) {
                totalShiftedItems -= matchedResponsiveData.numVisible;
              }

              this.totalShiftedItems = totalShiftedItems;
              this._numScroll = matchedResponsiveData.numScroll;
              this._page = page;
              this.onPage.emit({
                page: this.page
              });
            }

            if (this._numVisible !== matchedResponsiveData.numVisible) {
              this._numVisible = matchedResponsiveData.numVisible;
              this.setCloneItems();
            }
          }
        }
      }, {
        key: "setCloneItems",
        value: function setCloneItems() {
          this.clonedItemsForStarting = [];
          this.clonedItemsForFinishing = [];

          if (this.isCircular()) {
            var _this$clonedItemsForS, _this$clonedItemsForF;

            (_this$clonedItemsForS = this.clonedItemsForStarting).push.apply(_this$clonedItemsForS, _toConsumableArray(this.value.slice(-1 * this._numVisible)));

            (_this$clonedItemsForF = this.clonedItemsForFinishing).push.apply(_this$clonedItemsForF, _toConsumableArray(this.value.slice(0, this._numVisible)));
          }
        }
      }, {
        key: "firstIndex",
        value: function firstIndex() {
          return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
        }
      }, {
        key: "lastIndex",
        value: function lastIndex() {
          return this.firstIndex() + this.numVisible - 1;
        }
      }, {
        key: "totalDots",
        value: function totalDots() {
          return this.value ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
        }
      }, {
        key: "totalDotsArray",
        value: function totalDotsArray() {
          var totalDots = this.totalDots();
          return totalDots <= 0 ? [] : Array(totalDots).fill(0);
        }
      }, {
        key: "containerClass",
        value: function containerClass() {
          return {
            'ui-carousel ui-widget': true,
            'ui-carousel-vertical': this.isVertical(),
            'ui-carousel-horizontal': !this.isVertical()
          };
        }
      }, {
        key: "contentClasses",
        value: function contentClasses() {
          return 'ui-carousel-content ' + this.contentClass;
        }
      }, {
        key: "dotsContentClasses",
        value: function dotsContentClasses() {
          return 'ui-carousel-dots-container ui-helper-reset ' + this.dotsContainerClass;
        }
      }, {
        key: "isVertical",
        value: function isVertical() {
          return this.orientation === 'vertical';
        }
      }, {
        key: "isCircular",
        value: function isCircular() {
          return this.circular && this.value && this.value.length >= this.numVisible;
        }
      }, {
        key: "isAutoplay",
        value: function isAutoplay() {
          return this.autoplayInterval && this.allowAutoplay;
        }
      }, {
        key: "isForwardNavDisabled",
        value: function isForwardNavDisabled() {
          return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
        }
      }, {
        key: "isBackwardNavDisabled",
        value: function isBackwardNavDisabled() {
          return this.isEmpty() || this._page <= 0 && !this.isCircular();
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return !this.value || this.value.length === 0;
        }
      }, {
        key: "navForward",
        value: function navForward(e, index) {
          if (this.isCircular() || this._page < this.totalDots() - 1) {
            this.step(-1, index);
          }

          if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
          }

          if (e && e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "navBackward",
        value: function navBackward(e, index) {
          if (this.isCircular() || this._page !== 0) {
            this.step(1, index);
          }

          if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
          }

          if (e && e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "onDotClick",
        value: function onDotClick(e, index) {
          var page = this._page;

          if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
          }

          if (index > page) {
            this.navForward(e, index);
          } else if (index < page) {
            this.navBackward(e, index);
          }
        }
      }, {
        key: "step",
        value: function step(dir, page) {
          var totalShiftedItems = this.totalShiftedItems;
          var isCircular = this.isCircular();

          if (page != null) {
            totalShiftedItems = this._numScroll * page * -1;

            if (isCircular) {
              totalShiftedItems -= this._numVisible;
            }

            this.isRemainingItemsAdded = false;
          } else {
            totalShiftedItems += this._numScroll * dir;

            if (this.isRemainingItemsAdded) {
              totalShiftedItems += this.remainingItems - this._numScroll * dir;
              this.isRemainingItemsAdded = false;
            }

            var originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
            page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
          }

          if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
            totalShiftedItems = -1 * (this.value.length + this._numVisible);
            page = 0;
          } else if (isCircular && this.page === 0 && dir === 1) {
            totalShiftedItems = 0;
            page = this.totalDots() - 1;
          } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
            totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
            this.isRemainingItemsAdded = true;
          }

          if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this._numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this._numVisible), "%, 0, 0)");
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
          }

          this.totalShiftedItems = totalShiftedItems;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
      }, {
        key: "startAutoplay",
        value: function startAutoplay() {
          var _this2 = this;

          this.interval = setInterval(function () {
            if (_this2.totalDots() > 0) {
              if (_this2.page === _this2.totalDots() - 1) {
                _this2.step(-1, 0);
              } else {
                _this2.step(-1, _this2.page + 1);
              }
            }
          }, this.autoplayInterval);
        }
      }, {
        key: "stopAutoplay",
        value: function stopAutoplay() {
          if (this.interval) {
            clearInterval(this.interval);
          }
        }
      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transition = '';

            if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
              this.itemsContainer.nativeElement.style.transform = this.isVertical() ? "translate3d(0, ".concat(this.totalShiftedItems * (100 / this._numVisible), "%, 0)") : "translate3d(".concat(this.totalShiftedItems * (100 / this._numVisible), "%, 0, 0)");
            }
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
        key: "onTouchMove",
        value: function onTouchMove(e) {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(e) {
          var touchobj = e.changedTouches[0];

          if (this.isVertical()) {
            this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
          } else {
            this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
          }
        }
      }, {
        key: "changePageOnTouch",
        value: function changePageOnTouch(e, diff) {
          if (Math.abs(diff) > this.swipeThreshold) {
            if (diff < 0) {
              this.navForward(e);
            } else {
              this.navBackward(e);
            }
          }
        }
      }, {
        key: "bindDocumentListeners",
        value: function bindDocumentListeners() {
          var _this3 = this;

          if (!this.documentResizeListener) {
            this.documentResizeListener = function (e) {
              _this3.calculatePosition();
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

          if (this.autoplayInterval) {
            this.stopAutoplay();
          }
        }
      }]);
    }();

    Carousel.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Carousel.prototype, "page", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Carousel.prototype, "numVisible", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Carousel.prototype, "numScroll", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Carousel.prototype, "responsiveOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Carousel.prototype, "orientation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Carousel.prototype, "verticalViewPortHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Carousel.prototype, "contentClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Carousel.prototype, "dotsContainerClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], Carousel.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Carousel.prototype, "circular", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Carousel.prototype, "autoplayInterval", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Carousel.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Carousel.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Carousel.prototype, "onPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemsContainer'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Carousel.prototype, "itemsContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Carousel.prototype, "headerFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Carousel.prototype, "footerFacet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Carousel.prototype, "templates", void 0);
    Carousel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-carousel',
      template: "\n\t\t<div [attr.id]=\"id\" [ngClass]=\"containerClass()\" [ngStyle]=\"style\" [class]=\"styleClass\">\n\t\t\t<div class=\"ui-carousel-header\" *ngIf=\"headerFacet\">\n\t\t\t\t<ng-content select=\"p-header\"></ng-content>\n\t\t\t</div>\n\t\t\t<div [class]=\"contentClasses()\">\n\t\t\t\t<div class=\"ui-carousel-container\">\n\t\t\t\t\t<button [ngClass]=\"{'ui-carousel-prev ui-button ui-widget ui-state-default ui-corner-all':true, 'ui-state-disabled': isBackwardNavDisabled()}\" [disabled]=\"isBackwardNavDisabled()\" (click)=\"navBackward($event)\">\n\t\t\t\t\t\t<span [ngClass]=\"{'ui-carousel-prev-icon pi': true, 'pi-chevron-left': !isVertical(), 'pi-chevron-up': isVertical()}\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\"ui-carousel-items-content\" [ngStyle]=\"{'height': isVertical() ? verticalViewPortHeight : 'auto'}\">\n\t\t\t\t\t\t<div #itemsContainer class=\"ui-carousel-items-container\" (transitionend)=\"onTransitionEnd()\" (touchend)=\"onTouchEnd($event)\" (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\">\n\t\t\t\t\t\t\t<div *ngFor=\"let item of clonedItemsForStarting; let index = index\" [ngClass]= \"{'ui-carousel-item ui-carousel-item-cloned': true,'ui-carousel-item-active': (totalShiftedItems * -1) === (value.length),\n\t\t\t\t\t\t\t'ui-carousel-item-start': 0 === index,\n\t\t\t\t\t\t\t'ui-carousel-item-end': (clonedItemsForStarting.length - 1) === index}\">\n\t\t\t\t\t\t\t\t<ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngFor=\"let item of value; let index = index\" [ngClass]= \"{'ui-carousel-item': true,'ui-carousel-item-active': (firstIndex() <= index && lastIndex() >= index),\n\t\t\t\t\t\t\t'ui-carousel-item-start': firstIndex() === index,\n\t\t\t\t\t\t\t'ui-carousel-item-end': lastIndex() === index}\">\n\t\t\t\t\t\t\t\t<ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngFor=\"let item of clonedItemsForFinishing; let index = index\" [ngClass]= \"{'ui-carousel-item ui-carousel-item-cloned': true,'ui-carousel-item-active': ((totalShiftedItems *-1) === numVisible),\n\t\t\t\t\t\t\t'ui-carousel-item-start': 0 === index,\n\t\t\t\t\t\t\t'ui-carousel-item-end': (clonedItemsForFinishing.length - 1) === index}\">\n\t\t\t\t\t\t\t\t<ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item}\"></ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button [ngClass]=\"{'ui-carousel-next ui-button ui-widget ui-state-default ui-corner-all': true, 'ui-state-disabled': isForwardNavDisabled()}\" [disabled]=\"isForwardNavDisabled()\" (click)=\"navForward($event)\">\n\t\t\t\t\t\t<span [ngClass]=\"{'ui-carousel-next-icon pi': true, 'pi-chevron-right': !isVertical(), 'pi-chevron-down': isVertical()}\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<ul [class]=\"dotsContentClasses()\">\n\t\t\t\t\t<li *ngFor=\"let totalDot of totalDotsArray(); let i = index\" [ngClass]=\"{'ui-carousel-dot-item':true,'ui-state-highlight': _page === i}\">\n\t\t\t\t\t\t<button class=\"ui-button ui-widget ui-state-default ui-corner-all\" (click)=\"onDotClick($event, i)\">\n\t\t\t\t\t\t\t<span [ngClass]=\"{'ui-carousel-dot-icon pi':true, 'pi-circle-on': _page === i, 'pi-circle-off': !(_page === i)}\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ui-carousel-footer\" *ngIf=\"footerFacet\">\n\t\t\t\t<ng-content select=\"p-footer\"></ng-content>\n\t\t\t</div>\n\t\t</div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], Carousel);

    var CarouselModule = /*#__PURE__*/_createClass(function CarouselModule() {
      _classCallCheck(this, CarouselModule);
    });

    CarouselModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], Carousel, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
      declarations: [Carousel]
    })], CarouselModule);
    /***/
  },

  /***/
  "./src/app/components/carousel/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/carousel/public_api.ts ***!
    \***************************************************/

  /*! exports provided: Carousel, CarouselModule */

  /***/
  function _src_app_components_carousel_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./carousel */
    "./src/app/components/carousel/carousel.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Carousel", function () {
      return _carousel__WEBPACK_IMPORTED_MODULE_0__["Carousel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
      return _carousel__WEBPACK_IMPORTED_MODULE_0__["CarouselModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-carousel-carouseldemo-module~components-inputnumber-inputnumberdemo-module~compon~77e0f22f-es5.js.map