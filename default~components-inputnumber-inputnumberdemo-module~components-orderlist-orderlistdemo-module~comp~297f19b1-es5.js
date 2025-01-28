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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-orderlist-orderlistdemo-module~comp~297f19b1"], {
  /***/
  "./src/app/components/orderlist/orderlist.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/orderlist/orderlist.ts ***!
    \***************************************************/

  /*! exports provided: OrderList, OrderListModule */

  /***/
  function _src_app_components_orderlist_orderlistTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderList", function () {
      return OrderList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListModule", function () {
      return OrderListModule;
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


    var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");

    var OrderList = /*#__PURE__*/function () {
      function OrderList(el) {
        _classCallCheck(this, OrderList);

        this.el = el;
        this.metaKeySelection = true;
        this.controlsPosition = 'left';
        this.filterMatchMode = "contains";
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.trackBy = function (index, item) {
          return item;
        };

        this.onReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      return _createClass(OrderList, [{
        key: "selection",
        get: function get() {
          return this._selection;
        },
        set: function set(val) {
          this._selection = val;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

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
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.movedUp || this.movedDown) {
            var listItems = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.listViewChild.nativeElement, 'li.ui-state-highlight');
            var listItem;

            if (listItems.length > 0) {
              if (this.movedUp) listItem = listItems[0];else listItem = listItems[listItems.length - 1];
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].scrollInView(this.listViewChild.nativeElement, listItem);
            }

            this.movedUp = false;
            this.movedDown = false;
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(val) {
          this._value = val;

          if (this.filterValue) {
            this.filter();
          }
        }
      }, {
        key: "onItemClick",
        value: function onItemClick(event, item, index) {
          this.itemTouched = false;
          var selectedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].findIndexInList(item, this.selection);
          var selected = selectedIndex != -1;
          var metaSelection = this.itemTouched ? false : this.metaKeySelection;

          if (metaSelection) {
            var metaKey = event.metaKey || event.ctrlKey || event.shiftKey;

            if (selected && metaKey) {
              this._selection = this._selection.filter(function (val, index) {
                return index !== selectedIndex;
              });
            } else {
              this._selection = metaKey ? this._selection ? _toConsumableArray(this._selection) : [] : [];
              primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].insertIntoOrderedArray(item, index, this._selection, this.value);
            }
          } else {
            if (selected) {
              this._selection = this._selection.filter(function (val, index) {
                return index !== selectedIndex;
              });
            } else {
              this._selection = this._selection ? _toConsumableArray(this._selection) : [];
              primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].insertIntoOrderedArray(item, index, this._selection, this.value);
            }
          } //binding


          this.selectionChange.emit(this._selection); //event

          this.onSelectionChange.emit({
            originalEvent: event,
            value: this._selection
          });
        }
      }, {
        key: "onFilterKeyup",
        value: function onFilterKeyup(event) {
          this.filterValue = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
          this.filter();
          this.onFilterEvent.emit({
            originalEvent: event,
            value: this.visibleOptions
          });
        }
      }, {
        key: "filter",
        value: function filter() {
          var searchFields = this.filterBy.split(',');
          this.visibleOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"].filter(this.value, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        }
      }, {
        key: "isItemVisible",
        value: function isItemVisible(item) {
          if (this.filterValue && this.filterValue.trim().length) {
            for (var i = 0; i < this.visibleOptions.length; i++) {
              if (item == this.visibleOptions[i]) {
                return true;
              }
            }
          } else {
            return true;
          }
        }
      }, {
        key: "onItemTouchEnd",
        value: function onItemTouchEnd(event) {
          this.itemTouched = true;
        }
      }, {
        key: "isSelected",
        value: function isSelected(item) {
          return primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].findIndexInList(item, this.selection) != -1;
        }
      }, {
        key: "moveUp",
        value: function moveUp(event) {
          if (this.selection) {
            for (var i = 0; i < this.selection.length; i++) {
              var selectedItem = this.selection[i];
              var selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].findIndexInList(selectedItem, this.value);

              if (selectedItemIndex != 0) {
                var movedItem = this.value[selectedItemIndex];
                var temp = this.value[selectedItemIndex - 1];
                this.value[selectedItemIndex - 1] = movedItem;
                this.value[selectedItemIndex] = temp;
              } else {
                break;
              }
            }

            this.movedUp = true;
            this.onReorder.emit(event);
          }
        }
      }, {
        key: "moveTop",
        value: function moveTop(event) {
          if (this.selection) {
            for (var i = this.selection.length - 1; i >= 0; i--) {
              var selectedItem = this.selection[i];
              var selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].findIndexInList(selectedItem, this.value);

              if (selectedItemIndex != 0) {
                var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                this.value.unshift(movedItem);
              } else {
                break;
              }
            }

            this.onReorder.emit(event);
            this.listViewChild.nativeElement.scrollTop = 0;
          }
        }
      }, {
        key: "moveDown",
        value: function moveDown(event) {
          if (this.selection) {
            for (var i = this.selection.length - 1; i >= 0; i--) {
              var selectedItem = this.selection[i];
              var selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].findIndexInList(selectedItem, this.value);

              if (selectedItemIndex != this.value.length - 1) {
                var movedItem = this.value[selectedItemIndex];
                var temp = this.value[selectedItemIndex + 1];
                this.value[selectedItemIndex + 1] = movedItem;
                this.value[selectedItemIndex] = temp;
              } else {
                break;
              }
            }

            this.movedDown = true;
            this.onReorder.emit(event);
          }
        }
      }, {
        key: "moveBottom",
        value: function moveBottom(event) {
          if (this.selection) {
            for (var i = 0; i < this.selection.length; i++) {
              var selectedItem = this.selection[i];
              var selectedItemIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].findIndexInList(selectedItem, this.value);

              if (selectedItemIndex != this.value.length - 1) {
                var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                this.value.push(movedItem);
              } else {
                break;
              }
            }

            this.onReorder.emit(event);
            this.listViewChild.nativeElement.scrollTop = this.listViewChild.nativeElement.scrollHeight;
          }
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event, index) {
          event.dataTransfer.setData('text', 'b'); // For firefox

          event.target.blur();
          this.dragging = true;
          this.draggedItemIndex = index;
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event, index) {
          if (this.dragging && this.draggedItemIndex !== index && this.draggedItemIndex + 1 !== index) {
            this.dragOverItemIndex = index;
            event.preventDefault();
          }
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.dragOverItemIndex = null;
        }
      }, {
        key: "onDrop",
        value: function onDrop(event, index) {
          var dropIndex = this.draggedItemIndex > index ? index : index === 0 ? 0 : index - 1;
          primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].reorderArray(this.value, this.draggedItemIndex, dropIndex);
          this.dragOverItemIndex = null;
          this.onReorder.emit(event);
          event.preventDefault();
        }
      }, {
        key: "onDragEnd",
        value: function onDragEnd(event) {
          this.dragging = false;
        }
      }, {
        key: "onListMouseMove",
        value: function onListMouseMove(event) {
          if (this.dragging) {
            var offsetY = this.listViewChild.nativeElement.getBoundingClientRect().top + document.body.scrollTop;
            var bottomDiff = offsetY + this.listViewChild.nativeElement.clientHeight - event.pageY;
            var topDiff = event.pageY - offsetY;
            if (bottomDiff < 25 && bottomDiff > 0) this.listViewChild.nativeElement.scrollTop += 15;else if (topDiff < 25 && topDiff > 0) this.listViewChild.nativeElement.scrollTop -= 15;
          }
        }
      }, {
        key: "onItemKeydown",
        value: function onItemKeydown(event, item, index) {
          var listItem = event.currentTarget;

          switch (event.which) {
            //down
            case 40:
              var nextItem = this.findNextItem(listItem);

              if (nextItem) {
                nextItem.focus();
              }

              event.preventDefault();
              break;
            //up

            case 38:
              var prevItem = this.findPrevItem(listItem);

              if (prevItem) {
                prevItem.focus();
              }

              event.preventDefault();
              break;
            //enter

            case 13:
              this.onItemClick(event, item, index);
              event.preventDefault();
              break;
          }
        }
      }, {
        key: "findNextItem",
        value: function findNextItem(item) {
          var nextItem = item.nextElementSibling;
          if (nextItem) return !primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(nextItem, 'ui-orderlist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;else return null;
        }
      }, {
        key: "findPrevItem",
        value: function findPrevItem(item) {
          var prevItem = item.previousElementSibling;
          if (prevItem) return !primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(prevItem, 'ui-orderlist-item') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;else return null;
        }
      }]);
    }();

    OrderList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], OrderList.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], OrderList.prototype, "listStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], OrderList.prototype, "responsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "filterBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "filterPlaceholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "filterLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], OrderList.prototype, "metaKeySelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], OrderList.prototype, "dragdrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "controlsPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "ariaFilterLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], OrderList.prototype, "filterMatchMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrderList.prototype, "selectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], OrderList.prototype, "trackBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrderList.prototype, "onReorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrderList.prototype, "onSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], OrderList.prototype, "onFilterEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listelement'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OrderList.prototype, "listViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], OrderList.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], OrderList.prototype, "selection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], OrderList.prototype, "value", null);
    OrderList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-orderList',
      template: "\n        <div [ngClass]=\"{'ui-orderlist ui-widget': true, 'ui-orderlist-controls-left': controlsPosition === 'left',\n                    'ui-orderlist-controls-right': controlsPosition === 'right'}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-orderlist-controls\">\n                <button type=\"button\" pButton icon=\"pi pi-angle-up\" (click)=\"moveUp($event)\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-angle-double-up\" (click)=\"moveTop($event)\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-angle-down\" (click)=\"moveDown($event)\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-angle-double-down\" (click)=\"moveBottom($event)\"></button>\n            </div>\n            <div class=\"ui-orderlist-list-container\">\n                <div class=\"ui-orderlist-caption ui-widget-header ui-corner-top\" *ngIf=\"header\">{{header}}</div>\n                <div class=\"ui-orderlist-filter-container ui-widget-content\" *ngIf=\"filterBy\">\n                    <input type=\"text\" role=\"textbox\" (keyup)=\"onFilterKeyup($event)\" class=\"ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\" [attr.aria-label]=\"ariaFilterLabel\">\n                    <span class=\"ui-orderlist-filter-icon pi pi-search\"></span>\n                </div>\n                <ul #listelement class=\"ui-widget-content ui-orderlist-list ui-corner-bottom\" [ngStyle]=\"listStyle\" (dragover)=\"onListMouseMove($event)\">\n                    <ng-template ngFor [ngForTrackBy]=\"trackBy\" let-item [ngForOf]=\"value\" let-i=\"index\" let-l=\"last\">\n                        <li class=\"ui-orderlist-droppoint\" *ngIf=\"dragdrop && isItemVisible(item)\" (dragover)=\"onDragOver($event, i)\" (drop)=\"onDrop($event, i)\" (dragleave)=\"onDragLeave($event)\"\n                            [ngClass]=\"{'ui-orderlist-droppoint-highlight': (i === dragOverItemIndex)}\"></li>\n                        <li class=\"ui-orderlist-item\" tabindex=\"0\"\n                            [ngClass]=\"{'ui-state-highlight':isSelected(item)}\"\n                            (click)=\"onItemClick($event,item,i)\" (touchend)=\"onItemTouchEnd($event)\" (keydown)=\"onItemKeydown($event,item,i)\"\n                            [style.display]=\"isItemVisible(item) ? 'block' : 'none'\" role=\"option\" [attr.aria-selected]=\"isSelected(item)\"\n                            [draggable]=\"dragdrop\" (dragstart)=\"onDragStart($event, i)\" (dragend)=\"onDragEnd($event)\">\n                            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                        </li>\n                        <li class=\"ui-orderlist-droppoint\" *ngIf=\"dragdrop && l\" (dragover)=\"onDragOver($event, i + 1)\" (drop)=\"onDrop($event, i + 1)\" (dragleave)=\"onDragLeave($event)\"\n                            [ngClass]=\"{'ui-orderlist-droppoint-highlight': (i + 1 === dragOverItemIndex)}\"></li>\n                    </ng-template>\n                </ul>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], OrderList);

    var OrderListModule = /*#__PURE__*/_createClass(function OrderListModule() {
      _classCallCheck(this, OrderListModule);
    });

    OrderListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      exports: [OrderList, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      declarations: [OrderList]
    })], OrderListModule);
    /***/
  },

  /***/
  "./src/app/components/orderlist/public_api.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/orderlist/public_api.ts ***!
    \****************************************************/

  /*! exports provided: OrderList, OrderListModule */

  /***/
  function _src_app_components_orderlist_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _orderlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./orderlist */
    "./src/app/components/orderlist/orderlist.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrderList", function () {
      return _orderlist__WEBPACK_IMPORTED_MODULE_0__["OrderList"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OrderListModule", function () {
      return _orderlist__WEBPACK_IMPORTED_MODULE_0__["OrderListModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-orderlist-orderlistdemo-module~comp~297f19b1-es5.js.map