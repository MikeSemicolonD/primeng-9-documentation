function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dataview-dataviewdemo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/dataview/dataview.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/dataview/dataview.ts ***!
    \*************************************************/

  /*! exports provided: DataView, DataViewLayoutOptions, DataViewModule */

  /***/
  function _src_app_components_dataview_dataviewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataView", function () {
      return DataView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataViewLayoutOptions", function () {
      return DataViewLayoutOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataViewModule", function () {
      return DataViewModule;
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


    var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/paginator */
    "./src/app/components/paginator/public_api.ts");

    var DataView = /*#__PURE__*/function () {
      function DataView(el) {
        _classCallCheck(this, DataView);

        this.el = el;
        this.layout = 'list';
        this.pageLinks = 5;
        this.paginatorPosition = 'bottom';
        this.alwaysShowPaginator = true;
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.emptyMessage = 'No records found';
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.trackBy = function (index, item) {
          return item;
        };

        this.loadingIcon = 'pi pi-spinner';
        this.first = 0;
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChangeLayout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      return _createClass(DataView, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          }

          this.initialized = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChanges) {
          if (simpleChanges.value) {
            this._value = simpleChanges.value.currentValue;
            this.updateTotalRecords();

            if (!this.lazy && this.hasFilter()) {
              this.filter(this.filterValue);
            }
          }

          if (simpleChanges.sortField || simpleChanges.sortOrder) {
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
              this.sort();
            }
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'listItem':
                _this.listItemTemplate = item.template;
                break;

              case 'gridItem':
                _this.gridItemTemplate = item.template;
                break;

              case 'paginatorleft':
                _this.paginatorLeftTemplate = item.template;
                break;

              case 'paginatorright':
                _this.paginatorRightTemplate = item.template;
                break;
            }
          });
          this.updateItemTemplate();
        }
      }, {
        key: "updateItemTemplate",
        value: function updateItemTemplate() {
          switch (this.layout) {
            case 'list':
              this.itemTemplate = this.listItemTemplate;
              break;

            case 'grid':
              this.itemTemplate = this.gridItemTemplate;
              break;
          }
        }
      }, {
        key: "changeLayout",
        value: function changeLayout(layout) {
          this.layout = layout;
          this.onChangeLayout.emit({
            layout: this.layout
          });
          this.updateItemTemplate();
        }
      }, {
        key: "updateTotalRecords",
        value: function updateTotalRecords() {
          this.totalRecords = this.lazy ? this.totalRecords : this._value ? this._value.length : 0;
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.first = event.first;
          this.rows = event.rows;

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          }

          this.onPage.emit({
            first: this.first,
            rows: this.rows
          });
        }
      }, {
        key: "sort",
        value: function sort() {
          var _this2 = this;

          this.first = 0;

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else if (this.value) {
            this.value.sort(function (data1, data2) {
              var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].resolveFieldData(data1, _this2.sortField);
              var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_3__["ObjectUtils"].resolveFieldData(data2, _this2.sortField);
              var result = null;
              if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
              return _this2.sortOrder * result;
            });

            if (this.hasFilter()) {
              this.filter(this.filterValue);
            }
          }

          this.onSort.emit({
            sortField: this.sortField,
            sortOrder: this.sortOrder
          });
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          var data = this.filteredValue || this.value;
          return data == null || data.length == 0;
        }
      }, {
        key: "createLazyLoadMetadata",
        value: function createLazyLoadMetadata() {
          return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder
          };
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "filter",
        value: function filter(_filter) {
          var filterMatchMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "contains";
          this.filterValue = _filter;

          if (this.value && this.value.length) {
            var searchFields = this.filterBy.split(',');
            this.filteredValue = primeng_utils__WEBPACK_IMPORTED_MODULE_3__["FilterUtils"].filter(this.value, searchFields, _filter, filterMatchMode, this.filterLocale);

            if (this.filteredValue.length === this.value.length) {
              this.filteredValue = null;
            }

            if (this.paginator) {
              this.first = 0;
              this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }
          }
        }
      }, {
        key: "hasFilter",
        value: function hasFilter() {
          return this.filterValue && this.filterValue.trim().length > 0;
        }
      }]);
    }();

    DataView.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "layout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DataView.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DataView.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DataView.prototype, "totalRecords", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DataView.prototype, "pageLinks", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], DataView.prototype, "rowsPerPageOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "paginatorPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DataView.prototype, "alwaysShowPaginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DataView.prototype, "paginatorDropdownAppendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "paginatorDropdownScrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "currentPageReportTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DataView.prototype, "showCurrentPageReport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DataView.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "emptyMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DataView.prototype, "onLazyLoad", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DataView.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], DataView.prototype, "trackBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "filterBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "filterLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DataView.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "loadingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DataView.prototype, "first", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataView.prototype, "sortField", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DataView.prototype, "sortOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], DataView.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DataView.prototype, "onPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DataView.prototype, "onSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DataView.prototype, "onChangeLayout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["Header"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DataView.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["Footer"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DataView.prototype, "footer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], DataView.prototype, "templates", void 0);
    DataView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-dataView',
      template: "\n        <div [ngClass]=\"{'ui-dataview ui-widget': true, 'ui-dataview-list': (layout === 'list'), 'ui-dataview-grid': (layout === 'grid')}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-dataview-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-dataview-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'ui-dataview-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div class=\"ui-dataview-header ui-widget-header ui-corner-top\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-top\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\" [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            <div class=\"ui-dataview-content ui-widget-content\">\n                <div class=\"p-grid\">\n                    <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"paginator ? ((filteredValue||value) | slice:(lazy ? 0 : first):((lazy ? 0 : first) + rows)) : (filteredValue||value)\" [ngForTrackBy]=\"trackBy\">\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: rowData, rowIndex: rowIndex}\"></ng-container>\n                    </ng-template>\n                    <div *ngIf=\"isEmpty()\" class=\"p-col-12 ui-dataview-emptymessage\">{{emptyMessage}}</div>\n                </div>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\" [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            <div class=\"ui-dataview-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], DataView);

    var DataViewLayoutOptions = /*#__PURE__*/function () {
      function DataViewLayoutOptions(dv) {
        _classCallCheck(this, DataViewLayoutOptions);

        this.dv = dv;
      }

      return _createClass(DataViewLayoutOptions, [{
        key: "changeLayout",
        value: function changeLayout(event, layout) {
          this.dv.changeLayout(layout);
          event.preventDefault();
        }
      }]);
    }();

    DataViewLayoutOptions.ctorParameters = function () {
      return [{
        type: DataView
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DataViewLayoutOptions.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DataViewLayoutOptions.prototype, "styleClass", void 0);
    DataViewLayoutOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-dataViewLayoutOptions',
      template: "\n        <div [ngClass]=\"'ui-dataview-layout-options ui-selectbutton ui-buttonset'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <a tabindex=\"0\" class=\"ui-button ui-button-icon-only ui-state-default\" (click)=\"changeLayout($event, 'list')\" (keydown.enter)=\"changeLayout($event, 'list')\"\n                [ngClass]=\"{'ui-state-active': dv.layout === 'list'}\">\n                <i class=\"pi pi-bars ui-button-icon-left\"></i>\n                <span class=\"ui-button-text ui-clickable\">ui-btn</span>\n            </a><a tabindex=\"0\" class=\"ui-button ui-button-icon-only ui-state-default\" (click)=\"changeLayout($event, 'grid')\" (keydown.enter)=\"changeLayout($event, 'grid')\"\n                [ngClass]=\"{'ui-state-active': dv.layout === 'grid'}\">\n                <i class=\"pi pi-th-large ui-button-icon-left\"></i>\n                <span class=\"ui-button-text ui-clickable\">ui-btn</span>\n            </a>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataView])], DataViewLayoutOptions);

    var DataViewModule = /*#__PURE__*/_createClass(function DataViewModule() {
      _classCallCheck(this, DataViewModule);
    });

    DataViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"]],
      exports: [DataView, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], DataViewLayoutOptions],
      declarations: [DataView, DataViewLayoutOptions]
    })], DataViewModule);
    /***/
  },

  /***/
  "./src/app/components/dataview/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/dataview/public_api.ts ***!
    \***************************************************/

  /*! exports provided: DataView, DataViewLayoutOptions, DataViewModule */

  /***/
  function _src_app_components_dataview_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dataview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dataview */
    "./src/app/components/dataview/dataview.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataView", function () {
      return _dataview__WEBPACK_IMPORTED_MODULE_0__["DataView"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataViewLayoutOptions", function () {
      return _dataview__WEBPACK_IMPORTED_MODULE_0__["DataViewLayoutOptions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataViewModule", function () {
      return _dataview__WEBPACK_IMPORTED_MODULE_0__["DataViewModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/panel/panel.ts":
  /*!*******************************************!*\
    !*** ./src/app/components/panel/panel.ts ***!
    \*******************************************/

  /*! exports provided: Panel, PanelModule */

  /***/
  function _src_app_components_panel_panelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Panel", function () {
      return Panel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelModule", function () {
      return PanelModule;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var idx = 0;

    var Panel = /*#__PURE__*/function () {
      function Panel(el) {
        _classCallCheck(this, Panel);

        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'pi pi-plus';
        this.collapseIcon = 'pi pi-minus';
        this.showHeader = true;
        this.toggler = "icon";
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = "ui-panel-".concat(idx++);
      }

      return _createClass(Panel, [{
        key: "onHeaderClick",
        value: function onHeaderClick(event) {
          if (this.toggler === 'header') {
            this.toggle(event);
          }
        }
      }, {
        key: "onIconClick",
        value: function onIconClick(event) {
          if (this.toggler === 'icon') {
            this.toggle(event);
          }
        }
      }, {
        key: "toggle",
        value: function toggle(event) {
          if (this.animating) {
            return false;
          }

          this.animating = true;
          this.onBeforeToggle.emit({
            originalEvent: event,
            collapsed: this.collapsed
          });

          if (this.toggleable) {
            if (this.collapsed) this.expand(event);else this.collapse(event);
          }

          event.preventDefault();
        }
      }, {
        key: "expand",
        value: function expand(event) {
          this.collapsed = false;
          this.collapsedChange.emit(this.collapsed);
        }
      }, {
        key: "collapse",
        value: function collapse(event) {
          this.collapsed = true;
          this.collapsedChange.emit(this.collapsed);
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "onToggleDone",
        value: function onToggleDone(event) {
          this.animating = false;
          this.onAfterToggle.emit({
            originalEvent: event,
            collapsed: this.collapsed
          });
        }
      }]);
    }();

    Panel.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Panel.prototype, "toggleable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Panel.prototype, "collapsed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Panel.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "expandIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "collapseIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Panel.prototype, "showHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "toggler", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Panel.prototype, "collapsedChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Panel.prototype, "onBeforeToggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Panel.prototype, "onAfterToggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Panel.prototype, "transitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["Footer"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Panel.prototype, "footerFacet", void 0);
    Panel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-panel',
      template: "\n        <div [attr.id]=\"id\" [ngClass]=\"'ui-panel ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div [ngClass]=\"{'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all': true, 'ui-panel-titlebar-clickable': (toggleable && toggler === 'header')}\" \n                *ngIf=\"showHeader\" (click)=\"onHeaderClick($event)\" [attr.id]=\"id + '-titlebar'\">\n                <span class=\"ui-panel-title\" *ngIf=\"header\" [attr.id]=\"id + '_header'\">{{header}}</span>\n                <ng-content select=\"p-header\"></ng-content>\n                <a *ngIf=\"toggleable\" [attr.id]=\"id + '-label'\" class=\"ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default\" tabindex=\"0\"\n                    (click)=\"onIconClick($event)\" (keydown.enter)=\"onIconClick($event)\" [attr.aria-controls]=\"id + '-content'\" role=\"tab\" [attr.aria-expanded]=\"!collapsed\">\n                    <span [class]=\"collapsed ? expandIcon : collapseIcon\"></span>\n                </a>\n            </div>\n            <div [attr.id]=\"id + '-content'\" class=\"ui-panel-content-wrapper\" [@panelContent]=\"collapsed ? {value: 'hidden', params: {transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity:'0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1'}}\" (@panelContent.done)=\"onToggleDone($event)\"\n                [ngClass]=\"{'ui-panel-content-wrapper-overflown': collapsed||animating}\"\n                role=\"region\" [attr.aria-hidden]=\"collapsed\" [attr.aria-labelledby]=\"id  + '-titlebar'\">\n                <div class=\"ui-panel-content ui-widget-content\">\n                    <ng-content></ng-content>\n                </div>\n                \n                <div class=\"ui-panel-footer ui-widget-content\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('panelContent', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '{{height}}',
        opacity: '{{opacity}}'
      }), {
        params: {
          height: '0',
          opacity: '0'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], Panel);

    var PanelModule = /*#__PURE__*/_createClass(function PanelModule() {
      _classCallCheck(this, PanelModule);
    });

    PanelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [Panel, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
      declarations: [Panel]
    })], PanelModule);
    /***/
  },

  /***/
  "./src/app/components/panel/public_api.ts":
  /*!************************************************!*\
    !*** ./src/app/components/panel/public_api.ts ***!
    \************************************************/

  /*! exports provided: Panel, PanelModule */

  /***/
  function _src_app_components_panel_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./panel */
    "./src/app/components/panel/panel.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Panel", function () {
      return _panel__WEBPACK_IMPORTED_MODULE_0__["Panel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PanelModule", function () {
      return _panel__WEBPACK_IMPORTED_MODULE_0__["PanelModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-dataview-dataviewdemo-module~components-inputnumber-inputnumberdemo-module-es5.js.map