function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"], {
  /***/
  "./src/app/components/table/public_api.ts":
  /*!************************************************!*\
    !*** ./src/app/components/table/public_api.ts ***!
    \************************************************/

  /*! exports provided: TableService, Table, TableBody, ScrollableView, SortableColumn, SortIcon, SelectableRow, SelectableRowDblClick, ContextMenuRow, RowToggler, ResizableColumn, ReorderableColumn, EditableColumn, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, CellEditor, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, TableModule */

  /***/
  function _src_app_components_table_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./table */
    "./src/app/components/table/table.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TableService", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["TableService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Table", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["Table"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TableBody", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["TableBody"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollableView", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["ScrollableView"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortableColumn", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["SortableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortIcon", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["SortIcon"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectableRow", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["SelectableRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectableRowDblClick", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["SelectableRowDblClick"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuRow", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["ContextMenuRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RowToggler", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["RowToggler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ResizableColumn", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["ResizableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReorderableColumn", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["ReorderableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EditableColumn", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["EditableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EditableRow", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["EditableRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InitEditableRow", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["InitEditableRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SaveEditableRow", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["SaveEditableRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CancelEditableRow", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["CancelEditableRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CellEditor", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["CellEditor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TableRadioButton", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["TableRadioButton"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TableCheckbox", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["TableCheckbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TableHeaderCheckbox", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["TableHeaderCheckbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReorderableRowHandle", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["ReorderableRowHandle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReorderableRow", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["ReorderableRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TableModule", function () {
      return _table__WEBPACK_IMPORTED_MODULE_0__["TableModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/table/table.ts":
  /*!*******************************************!*\
    !*** ./src/app/components/table/table.ts ***!
    \*******************************************/

  /*! exports provided: TableService, Table, TableBody, ScrollableView, SortableColumn, SortIcon, SelectableRow, SelectableRowDblClick, ContextMenuRow, RowToggler, ResizableColumn, ReorderableColumn, EditableColumn, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, CellEditor, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, TableModule */

  /***/
  function _src_app_components_table_tableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableService", function () {
      return TableService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Table", function () {
      return Table;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableBody", function () {
      return TableBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollableView", function () {
      return ScrollableView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortableColumn", function () {
      return SortableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortIcon", function () {
      return SortIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectableRow", function () {
      return SelectableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectableRowDblClick", function () {
      return SelectableRowDblClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextMenuRow", function () {
      return ContextMenuRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RowToggler", function () {
      return RowToggler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableColumn", function () {
      return ResizableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderableColumn", function () {
      return ReorderableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableColumn", function () {
      return EditableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableRow", function () {
      return EditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitEditableRow", function () {
      return InitEditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveEditableRow", function () {
      return SaveEditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelEditableRow", function () {
      return CancelEditableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellEditor", function () {
      return CellEditor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableRadioButton", function () {
      return TableRadioButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableCheckbox", function () {
      return TableCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableHeaderCheckbox", function () {
      return TableHeaderCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderableRowHandle", function () {
      return ReorderableRowHandle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderableRow", function () {
      return ReorderableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableModule", function () {
      return TableModule;
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


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/paginator */
    "./src/app/components/paginator/public_api.ts");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");

    var TableService = /*#__PURE__*/function () {
      function TableService() {
        _classCallCheck(this, TableService);

        this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.columnsSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
        this.columnsSource$ = this.columnsSource.asObservable();
      }

      return _createClass(TableService, [{
        key: "onSort",
        value: function onSort(sortMeta) {
          this.sortSource.next(sortMeta);
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange() {
          this.selectionSource.next();
        }
      }, {
        key: "onContextMenu",
        value: function onContextMenu(data) {
          this.contextMenuSource.next(data);
        }
      }, {
        key: "onValueChange",
        value: function onValueChange(value) {
          this.valueSource.next(value);
        }
      }, {
        key: "onTotalRecordsChange",
        value: function onTotalRecordsChange(value) {
          this.totalRecordsSource.next(value);
        }
      }, {
        key: "onColumnsChange",
        value: function onColumnsChange(columns) {
          this.columnsSource.next(columns);
        }
      }]);
    }();

    TableService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TableService);

    var Table = /*#__PURE__*/function () {
      function Table(el, zone, tableService, cd) {
        _classCallCheck(this, Table);

        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.cd = cd;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.paginatorDropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenuSelectionMode = "separate";

        this.rowTrackBy = function (index, item) {
          return item;
        };

        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.editingRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.stateStorage = 'session';
        this.editMode = 'cell';
        this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRowReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.firstChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onStateSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onStateRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = [];
        this._totalRecords = 0;
        this._first = 0;
        this.selectionKeys = {};
        this._sortOrder = 1;
      }

      return _createClass(Table, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.lazy && this.lazyLoadOnInit) {
            if (!this.virtualScroll) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }

            if (this.restoringFilter) {
              this.restoringFilter = false;
            }
          }

          this.initialized = true;
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'caption':
                _this.captionTemplate = item.template;
                break;

              case 'header':
                _this.headerTemplate = item.template;
                break;

              case 'body':
                _this.bodyTemplate = item.template;
                break;

              case 'loadingbody':
                _this.loadingBodyTemplate = item.template;
                break;

              case 'footer':
                _this.footerTemplate = item.template;
                break;

              case 'summary':
                _this.summaryTemplate = item.template;
                break;

              case 'colgroup':
                _this.colGroupTemplate = item.template;
                break;

              case 'rowexpansion':
                _this.expandedRowTemplate = item.template;
                break;

              case 'frozenrows':
                _this.frozenRowsTemplate = item.template;
                break;

              case 'frozenheader':
                _this.frozenHeaderTemplate = item.template;
                break;

              case 'frozenbody':
                _this.frozenBodyTemplate = item.template;
                break;

              case 'frozenfooter':
                _this.frozenFooterTemplate = item.template;
                break;

              case 'frozencolgroup':
                _this.frozenColGroupTemplate = item.template;
                break;

              case 'emptymessage':
                _this.emptyMessageTemplate = item.template;
                break;

              case 'paginatorleft':
                _this.paginatorLeftTemplate = item.template;
                break;

              case 'paginatorright':
                _this.paginatorRightTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isStateful() && this.resizableColumns) {
            this.restoreColumnWidths();
          }
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          if (this.scrollable) {
            if (this.scrollableViewChild) {
              this.scrollableViewChild.clearCache();
            }

            if (this.scrollableFrozenViewChild) {
              this.scrollableViewChild.clearCache();
            }
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.value) {
            if (this.isStateful() && !this.stateRestored) {
              this.restoreState();
            }

            this._value = simpleChange.value.currentValue;

            if (!this.lazy) {
              this.clearCache();
              this.totalRecords = this._value ? this._value.length : 0;
              if (this.sortMode == 'single' && this.sortField) this.sortSingle();else if (this.sortMode == 'multiple' && this.multiSortMeta) this.sortMultiple();else if (this.hasFilter()) //sort already filters
                this._filter();
            }

            this.tableService.onValueChange(simpleChange.value.currentValue);
          }

          if (simpleChange.columns) {
            this._columns = simpleChange.columns.currentValue;
            this.tableService.onColumnsChange(simpleChange.columns.currentValue);

            if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
              this.restoreColumnOrder();
            }
          }

          if (simpleChange.sortField) {
            this._sortField = simpleChange.sortField.currentValue; //avoid triggering lazy load prior to lazy initialization at onInit

            if (!this.lazy || this.initialized) {
              if (this.sortMode === 'single') {
                this.sortSingle();
              }
            }
          }

          if (simpleChange.sortOrder) {
            this._sortOrder = simpleChange.sortOrder.currentValue; //avoid triggering lazy load prior to lazy initialization at onInit

            if (!this.lazy || this.initialized) {
              if (this.sortMode === 'single') {
                this.sortSingle();
              }
            }
          }

          if (simpleChange.multiSortMeta) {
            this._multiSortMeta = simpleChange.multiSortMeta.currentValue;

            if (this.sortMode === 'multiple') {
              this.sortMultiple();
            }
          }

          if (simpleChange.selection) {
            this._selection = simpleChange.selection.currentValue;

            if (!this.preventSelectionSetterPropagation) {
              this.updateSelectionKeys();
              this.tableService.onSelectionChange();
            }

            this.preventSelectionSetterPropagation = false;
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(val) {
          this._value = val;
        }
      }, {
        key: "columns",
        get: function get() {
          return this._columns;
        },
        set: function set(cols) {
          this._columns = cols;
        }
      }, {
        key: "first",
        get: function get() {
          return this._first;
        },
        set: function set(val) {
          this._first = val;
        }
      }, {
        key: "rows",
        get: function get() {
          return this._rows;
        },
        set: function set(val) {
          this._rows = val;
        }
      }, {
        key: "totalRecords",
        get: function get() {
          return this._totalRecords;
        },
        set: function set(val) {
          this._totalRecords = val;
          this.tableService.onTotalRecordsChange(this._totalRecords);
        }
      }, {
        key: "sortField",
        get: function get() {
          return this._sortField;
        },
        set: function set(val) {
          this._sortField = val;
        }
      }, {
        key: "sortOrder",
        get: function get() {
          return this._sortOrder;
        },
        set: function set(val) {
          this._sortOrder = val;
        }
      }, {
        key: "multiSortMeta",
        get: function get() {
          return this._multiSortMeta;
        },
        set: function set(val) {
          this._multiSortMeta = val;
        }
      }, {
        key: "selection",
        get: function get() {
          return this._selection;
        },
        set: function set(val) {
          this._selection = val;
        }
      }, {
        key: "updateSelectionKeys",
        value: function updateSelectionKeys() {
          if (this.dataKey && this._selection) {
            this.selectionKeys = {};

            if (Array.isArray(this._selection)) {
              var _iterator = _createForOfIteratorHelper(this._selection),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var data = _step.value;
                  this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(data, this.dataKey))] = 1;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(this._selection, this.dataKey))] = 1;
            }
          }
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          this.first = event.first;
          this.rows = event.rows;

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          }

          this.onPage.emit({
            first: this.first,
            rows: this.rows
          });
          this.firstChange.emit(this.first);
          this.rowsChange.emit(this.rows);
          this.tableService.onValueChange(this.value);

          if (this.isStateful()) {
            this.saveState();
          }

          this.anchorRowIndex = null;

          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
      }, {
        key: "sort",
        value: function sort(event) {
          var originalEvent = event.originalEvent;

          if (this.sortMode === 'single') {
            this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();

            if (this.resetPageOnSort) {
              this._first = 0;
              this.firstChange.emit(this._first);

              if (this.scrollable) {
                this.resetScrollTop();
              }
            }
          }

          if (this.sortMode === 'multiple') {
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);

            if (sortMeta) {
              if (!metaKey) {
                this._multiSortMeta = [{
                  field: event.field,
                  order: sortMeta.order * -1
                }];

                if (this.resetPageOnSort) {
                  this._first = 0;
                  this.firstChange.emit(this._first);

                  if (this.scrollable) {
                    this.resetScrollTop();
                  }
                }
              } else {
                sortMeta.order = sortMeta.order * -1;
              }
            } else {
              if (!metaKey || !this.multiSortMeta) {
                this._multiSortMeta = [];

                if (this.resetPageOnSort) {
                  this._first = 0;
                  this.firstChange.emit(this._first);
                }
              }

              this._multiSortMeta.push({
                field: event.field,
                order: this.defaultSortOrder
              });
            }

            this.sortMultiple();
          }

          if (this.isStateful()) {
            this.saveState();
          }

          this.anchorRowIndex = null;
        }
      }, {
        key: "sortSingle",
        value: function sortSingle() {
          var _this2 = this;

          if (this.sortField && this.sortOrder) {
            if (this.restoringSort) {
              this.restoringSort = false;
            }

            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              if (this.customSort) {
                this.sortFunction.emit({
                  data: this.value,
                  mode: this.sortMode,
                  field: this.sortField,
                  order: this.sortOrder
                });
              } else {
                this.value.sort(function (data1, data2) {
                  var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(data1, _this2.sortField);
                  var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(data2, _this2.sortField);
                  var result = null;
                  if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
                  return _this2.sortOrder * result;
                });
              }

              if (this.hasFilter()) {
                this._filter();
              }
            }

            var sortMeta = {
              field: this.sortField,
              order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
          }
        }
      }, {
        key: "sortMultiple",
        value: function sortMultiple() {
          var _this3 = this;

          if (this.multiSortMeta) {
            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              if (this.customSort) {
                this.sortFunction.emit({
                  data: this.value,
                  mode: this.sortMode,
                  multiSortMeta: this.multiSortMeta
                });
              } else {
                this.value.sort(function (data1, data2) {
                  return _this3.multisortField(data1, data2, _this3.multiSortMeta, 0);
                });
              }

              if (this.hasFilter()) {
                this._filter();
              }
            }

            this.onSort.emit({
              multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
          }
        }
      }, {
        key: "multisortField",
        value: function multisortField(data1, data2, multiSortMeta, index) {
          var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(data1, multiSortMeta[index].field);
          var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(data2, multiSortMeta[index].field);
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && value1 != value2) {
              return multiSortMeta[index].order * value1.localeCompare(value2);
            }
          } else {
            result = value1 < value2 ? -1 : 1;
          }

          if (value1 == value2) {
            return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
          }

          return multiSortMeta[index].order * result;
        }
      }, {
        key: "getSortMeta",
        value: function getSortMeta(field) {
          if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
              if (this.multiSortMeta[i].field === field) {
                return this.multiSortMeta[i];
              }
            }
          }

          return null;
        }
      }, {
        key: "isSorted",
        value: function isSorted(field) {
          if (this.sortMode === 'single') {
            return this.sortField && this.sortField === field;
          } else if (this.sortMode === 'multiple') {
            var sorted = false;

            if (this.multiSortMeta) {
              for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field == field) {
                  sorted = true;
                  break;
                }
              }
            }

            return sorted;
          }
        }
      }, {
        key: "handleRowClick",
        value: function handleRowClick(event) {
          var target = event.originalEvent.target;
          var targetNode = target.nodeName;
          var parentNode = target.parentElement && target.parentElement.nodeName;

          if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.originalEvent.target, 'ui-clickable')) {
            return;
          }

          if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;

            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].clearSelection();

              if (this.rangeRowIndex != null) {
                this.clearSelectionRange(event.originalEvent);
              }

              this.rangeRowIndex = event.rowIndex;
              this.selectRange(event.originalEvent, event.rowIndex);
            } else {
              var rowData = event.rowData;
              var selected = this.isSelected(rowData);
              var metaSelection = this.rowTouched ? false : this.metaKeySelection;
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
              this.anchorRowIndex = event.rowIndex;
              this.rangeRowIndex = event.rowIndex;

              if (metaSelection) {
                var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;

                if (selected && metaKey) {
                  if (this.isSingleSelectionMode()) {
                    this._selection = null;
                    this.selectionKeys = {};
                    this.selectionChange.emit(null);
                  } else {
                    var selectionIndex = this.findIndexInSelection(rowData);
                    this._selection = this.selection.filter(function (val, i) {
                      return i != selectionIndex;
                    });
                    this.selectionChange.emit(this.selection);

                    if (dataKeyValue) {
                      delete this.selectionKeys[dataKeyValue];
                    }
                  }

                  this.onRowUnselect.emit({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row'
                  });
                } else {
                  if (this.isSingleSelectionMode()) {
                    this._selection = rowData;
                    this.selectionChange.emit(rowData);

                    if (dataKeyValue) {
                      this.selectionKeys = {};
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  } else if (this.isMultipleSelectionMode()) {
                    if (metaKey) {
                      this._selection = this.selection || [];
                    } else {
                      this._selection = [];
                      this.selectionKeys = {};
                    }

                    this._selection = [].concat(_toConsumableArray(this.selection), [rowData]);
                    this.selectionChange.emit(this.selection);

                    if (dataKeyValue) {
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }

                  this.onRowSelect.emit({
                    originalEvent: event.originalEvent,
                    data: rowData,
                    type: 'row',
                    index: event.rowIndex
                  });
                }
              } else {
                if (this.selectionMode === 'single') {
                  if (selected) {
                    this._selection = null;
                    this.selectionKeys = {};
                    this.selectionChange.emit(this.selection);
                    this.onRowUnselect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row'
                    });
                  } else {
                    this._selection = rowData;
                    this.selectionChange.emit(this.selection);
                    this.onRowSelect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row',
                      index: event.rowIndex
                    });

                    if (dataKeyValue) {
                      this.selectionKeys = {};
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }
                } else if (this.selectionMode === 'multiple') {
                  if (selected) {
                    var _selectionIndex = this.findIndexInSelection(rowData);

                    this._selection = this.selection.filter(function (val, i) {
                      return i != _selectionIndex;
                    });
                    this.selectionChange.emit(this.selection);
                    this.onRowUnselect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row'
                    });

                    if (dataKeyValue) {
                      delete this.selectionKeys[dataKeyValue];
                    }
                  } else {
                    this._selection = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
                    this.selectionChange.emit(this.selection);
                    this.onRowSelect.emit({
                      originalEvent: event.originalEvent,
                      data: rowData,
                      type: 'row',
                      index: event.rowIndex
                    });

                    if (dataKeyValue) {
                      this.selectionKeys[dataKeyValue] = 1;
                    }
                  }
                }
              }
            }

            this.tableService.onSelectionChange();

            if (this.isStateful()) {
              this.saveState();
            }
          }

          this.rowTouched = false;
        }
      }, {
        key: "handleRowTouchEnd",
        value: function handleRowTouchEnd(event) {
          this.rowTouched = true;
        }
      }, {
        key: "handleRowRightClick",
        value: function handleRowRightClick(event) {
          if (this.contextMenu) {
            var rowData = event.rowData;

            if (this.contextMenuSelectionMode === 'separate') {
              this.contextMenuSelection = rowData;
              this.contextMenuSelectionChange.emit(rowData);
              this.onContextMenuSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                index: event.rowIndex
              });
              this.contextMenu.show(event.originalEvent);
              this.tableService.onContextMenu(rowData);
            } else if (this.contextMenuSelectionMode === 'joint') {
              this.preventSelectionSetterPropagation = true;
              var selected = this.isSelected(rowData);
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;

              if (!selected) {
                if (this.isSingleSelectionMode()) {
                  this.selection = rowData;
                  this.selectionChange.emit(rowData);
                } else if (this.isMultipleSelectionMode()) {
                  this.selection = [rowData];
                  this.selectionChange.emit(this.selection);
                }

                if (dataKeyValue) {
                  this.selectionKeys[dataKeyValue] = 1;
                }
              }

              this.contextMenu.show(event.originalEvent);
              this.onContextMenuSelect.emit({
                originalEvent: event,
                data: rowData,
                index: event.rowIndex
              });
            }
          }
        }
      }, {
        key: "selectRange",
        value: function selectRange(event, rowIndex) {
          var rangeStart, rangeEnd;

          if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
          } else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
          } else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
          }

          if (this.lazy && this.paginator) {
            rangeStart -= this.first;
            rangeEnd -= this.first;
          }

          for (var i = rangeStart; i <= rangeEnd; i++) {
            var rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];

            if (!this.isSelected(rangeRowData)) {
              this._selection = [].concat(_toConsumableArray(this.selection), [rangeRowData]);
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rangeRowData, this.dataKey)) : null;

              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }

              this.onRowSelect.emit({
                originalEvent: event,
                data: rangeRowData,
                type: 'row'
              });
            }
          }

          this.selectionChange.emit(this.selection);
        }
      }, {
        key: "clearSelectionRange",
        value: function clearSelectionRange(event) {
          var _this4 = this;

          var rangeStart, rangeEnd;

          if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
          } else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
          } else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
          }

          var _loop = function _loop() {
            var rangeRowData = _this4.value[i];

            var selectionIndex = _this4.findIndexInSelection(rangeRowData);

            _this4._selection = _this4.selection.filter(function (val, i) {
              return i != selectionIndex;
            });
            var dataKeyValue = _this4.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rangeRowData, _this4.dataKey)) : null;

            if (dataKeyValue) {
              delete _this4.selectionKeys[dataKeyValue];
            }

            _this4.onRowUnselect.emit({
              originalEvent: event,
              data: rangeRowData,
              type: 'row'
            });
          };

          for (var i = rangeStart; i <= rangeEnd; i++) {
            _loop();
          }
        }
      }, {
        key: "isSelected",
        value: function isSelected(rowData) {
          if (rowData && this.selection) {
            if (this.dataKey) {
              return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)] !== undefined;
            } else {
              if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
            }
          }

          return false;
        }
      }, {
        key: "findIndexInSelection",
        value: function findIndexInSelection(rowData) {
          var index = -1;

          if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
              if (this.equals(rowData, this.selection[i])) {
                index = i;
                break;
              }
            }
          }

          return index;
        }
      }, {
        key: "toggleRowWithRadio",
        value: function toggleRowWithRadio(event, rowData) {
          this.preventSelectionSetterPropagation = true;

          if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'radiobutton'
            });

            if (this.dataKey) {
              this.selectionKeys = {};
              this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] = 1;
            }
          } else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'radiobutton'
            });
          }

          this.tableService.onSelectionChange();

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "toggleRowWithCheckbox",
        value: function toggleRowWithCheckbox(event, rowData) {
          this.selection = this.selection || [];
          var selected = this.isSelected(rowData);
          var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey)) : null;
          this.preventSelectionSetterPropagation = true;

          if (selected) {
            var selectionIndex = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter(function (val, i) {
              return i != selectionIndex;
            });
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'checkbox'
            });

            if (dataKeyValue) {
              delete this.selectionKeys[dataKeyValue];
            }
          } else {
            this._selection = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              index: event.rowIndex,
              data: rowData,
              type: 'checkbox'
            });

            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }

          this.tableService.onSelectionChange();

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "toggleRowsWithCheckbox",
        value: function toggleRowsWithCheckbox(event, check) {
          this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
          this.preventSelectionSetterPropagation = true;
          this.updateSelectionKeys();
          this.selectionChange.emit(this._selection);
          this.tableService.onSelectionChange();
          this.onHeaderCheckboxToggle.emit({
            originalEvent: event,
            checked: check
          });

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "equals",
        value: function equals(data1, data2) {
          return this.compareSelectionBy === 'equals' ? data1 === data2 : primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].equals(data1, data2, this.dataKey);
        }
      }, {
        key: "filter",
        value: function filter(value, field, matchMode) {
          var _this5 = this;

          if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
          }

          if (!this.isFilterBlank(value)) {
            this.filters[field] = {
              value: value,
              matchMode: matchMode
            };
          } else if (this.filters[field]) {
            delete this.filters[field];
          }

          this.filterTimeout = setTimeout(function () {
            _this5._filter();

            _this5.filterTimeout = null;
          }, this.filterDelay);
          this.anchorRowIndex = null;
        }
      }, {
        key: "filterGlobal",
        value: function filterGlobal(value, matchMode) {
          this.filter(value, 'global', matchMode);
        }
      }, {
        key: "isFilterBlank",
        value: function isFilterBlank(filter) {
          if (filter !== null && filter !== undefined) {
            if (typeof filter === 'string' && filter.trim().length == 0 || filter instanceof Array && filter.length == 0) return true;else return false;
          }

          return true;
        }
      }, {
        key: "_filter",
        value: function _filter() {
          if (!this.restoringFilter) {
            this.first = 0;
            this.firstChange.emit(this.first);
          }

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            if (!this.value) {
              return;
            }

            if (!this.hasFilter()) {
              this.filteredValue = null;

              if (this.paginator) {
                this.totalRecords = this.value ? this.value.length : 0;
              }
            } else {
              var globalFilterFieldsArray;

              if (this.filters['global']) {
                if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
              }

              this.filteredValue = [];

              for (var i = 0; i < this.value.length; i++) {
                var localMatch = true;
                var globalMatch = false;
                var localFiltered = false;

                for (var prop in this.filters) {
                  if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                    localFiltered = true;
                    var filterMeta = this.filters[prop];
                    var filterField = prop;
                    var filterValue = filterMeta.value;
                    var filterMatchMode = filterMeta.matchMode || 'startsWith';
                    var dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(this.value[i], filterField);
                    var filterConstraint = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"][filterMatchMode];

                    if (!filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                      localMatch = false;
                    }

                    if (!localMatch) {
                      break;
                    }
                  }
                }

                if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                  for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                    var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                    globalMatch = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"][this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);

                    if (globalMatch) {
                      break;
                    }
                  }
                }

                var matches = void 0;

                if (this.filters['global']) {
                  matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
                } else {
                  matches = localFiltered && localMatch;
                }

                if (matches) {
                  this.filteredValue.push(this.value[i]);
                }
              }

              if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
              }

              if (this.paginator) {
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
              }
            }
          }

          this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
          });
          this.tableService.onValueChange(this.value);

          if (this.isStateful() && !this.restoringFilter) {
            this.saveState();
          }

          if (this.restoringFilter) {
            this.restoringFilter = false;
          }

          this.cd.markForCheck();

          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
      }, {
        key: "hasFilter",
        value: function hasFilter() {
          var empty = true;

          for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
              empty = false;
              break;
            }
          }

          return !empty;
        }
      }, {
        key: "createLazyLoadMetadata",
        value: function createLazyLoadMetadata() {
          return {
            first: this.first,
            rows: this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
          };
        }
      }, {
        key: "reset",
        value: function reset() {
          this._sortField = null;
          this._sortOrder = this.defaultSortOrder;
          this._multiSortMeta = null;
          this.tableService.onSort(null);
          this.filteredValue = null;
          this.filters = {};
          this.first = 0;
          this.firstChange.emit(this.first);

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            this.totalRecords = this._value ? this._value.length : 0;
          }
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(options) {
          var _this6 = this;

          var data = this.filteredValue || this.value;
          var csv = '';

          if (options && options.selectionOnly) {
            data = this.selection || [];
          } //headers


          for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];

            if (column.exportable !== false && column.field) {
              csv += '"' + (column.header || column.field) + '"';

              if (i < this.columns.length - 1) {
                csv += this.csvSeparator;
              }
            }
          } //body


          data.forEach(function (record, i) {
            csv += '\n';

            for (var _i = 0; _i < _this6.columns.length; _i++) {
              var _column = _this6.columns[_i];

              if (_column.exportable !== false && _column.field) {
                var cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(record, _column.field);

                if (cellData != null) {
                  if (_this6.exportFunction) {
                    cellData = _this6.exportFunction({
                      data: cellData,
                      field: _column.field
                    });
                  } else cellData = String(cellData).replace(/"/g, '""');
                } else cellData = '';

                csv += '"' + cellData + '"';

                if (_i < _this6.columns.length - 1) {
                  csv += _this6.csvSeparator;
                }
              }
            }
          });
          var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
          });

          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
          } else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);

            if (link.download !== undefined) {
              link.setAttribute('href', URL.createObjectURL(blob));
              link.setAttribute('download', this.exportFilename + '.csv');
              link.click();
            } else {
              csv = 'data:text/csv;charset=utf-8,' + csv;
              window.open(encodeURI(csv));
            }

            document.body.removeChild(link);
          }
        }
      }, {
        key: "resetScrollTop",
        value: function resetScrollTop() {
          if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
            top: 0
          });
        }
      }, {
        key: "scrollToVirtualIndex",
        value: function scrollToVirtualIndex(index) {
          if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollToVirtualIndex(index);
          }

          if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollToVirtualIndex(index);
          }
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          if (this.scrollableViewChild) {
            this.scrollableViewChild.scrollTo(options);
          }

          if (this.scrollableFrozenViewChild) {
            this.scrollableFrozenViewChild.scrollTo(options);
          }
        }
      }, {
        key: "updateEditingCell",
        value: function updateEditingCell(cell, data, field, index) {
          this.editingCell = cell;
          this.editingCellData = data;
          this.editingCellField = field;
          this.editingCellRowIndex = index;
          this.bindDocumentEditListener();
        }
      }, {
        key: "isEditingCellValid",
        value: function isEditingCellValid() {
          return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
        }
      }, {
        key: "bindDocumentEditListener",
        value: function bindDocumentEditListener() {
          var _this7 = this;

          if (!this.documentEditListener) {
            this.documentEditListener = function (event) {
              if (_this7.editingCell && !_this7.editingCellClick && _this7.isEditingCellValid()) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(_this7.editingCell, 'ui-editing-cell');
                _this7.editingCell = null;

                _this7.onEditComplete.emit({
                  field: _this7.editingCellField,
                  data: _this7.editingCellData,
                  originalEvent: event,
                  index: _this7.editingCellRowIndex
                });

                _this7.editingCellField = null;
                _this7.editingCellData = null;
                _this7.editingCellRowIndex = null;

                _this7.unbindDocumentEditListener();
              }

              _this7.editingCellClick = false;
            };

            document.addEventListener('click', this.documentEditListener);
          }
        }
      }, {
        key: "unbindDocumentEditListener",
        value: function unbindDocumentEditListener() {
          if (this.documentEditListener) {
            document.removeEventListener('click', this.documentEditListener);
            this.documentEditListener = null;
          }
        }
      }, {
        key: "initRowEdit",
        value: function initRowEdit(rowData) {
          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
          this.editingRowKeys[dataKeyValue] = true;
        }
      }, {
        key: "saveRowEdit",
        value: function saveRowEdit(rowData, rowElement) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
            var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
            delete this.editingRowKeys[dataKeyValue];
          }
        }
      }, {
        key: "cancelRowEdit",
        value: function cancelRowEdit(rowData) {
          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));
          delete this.editingRowKeys[dataKeyValue];
        }
      }, {
        key: "toggleRow",
        value: function toggleRow(rowData, event) {
          if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
          }

          var dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey));

          if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
              originalEvent: event,
              data: rowData
            });
          } else {
            if (this.rowExpandMode === 'single') {
              this.expandedRowKeys = {};
            }

            this.expandedRowKeys[dataKeyValue] = true;
            this.onRowExpand.emit({
              originalEvent: event,
              data: rowData
            });
          }

          if (event) {
            event.preventDefault();
          }

          if (this.isStateful()) {
            this.saveState();
          }
        }
      }, {
        key: "isRowExpanded",
        value: function isRowExpanded(rowData) {
          return this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
        }
      }, {
        key: "isRowEditing",
        value: function isRowEditing(rowData) {
          return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].resolveFieldData(rowData, this.dataKey))] === true;
        }
      }, {
        key: "isSingleSelectionMode",
        value: function isSingleSelectionMode() {
          return this.selectionMode === 'single';
        }
      }, {
        key: "isMultipleSelectionMode",
        value: function isMultipleSelectionMode() {
          return this.selectionMode === 'multiple';
        }
      }, {
        key: "onColumnResizeBegin",
        value: function onColumnResizeBegin(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft;
          this.onColumnResize(event);
          event.preventDefault();
        }
      }, {
        key: "onColumnResize",
        value: function onColumnResize(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
          this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
          this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
          this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft + 'px';
          this.resizeHelperViewChild.nativeElement.style.display = 'block';
        }
      }, {
        key: "onColumnResizeEnd",
        value: function onColumnResizeEnd(event, column) {
          var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
          var columnWidth = column.offsetWidth;
          var minWidth = parseInt(column.style.minWidth || 15);

          if (columnWidth + delta < minWidth) {
            delta = minWidth - columnWidth;
          }

          var newColumnWidth = columnWidth + delta;

          if (newColumnWidth >= minWidth) {
            if (this.columnResizeMode === 'fit') {
              var nextColumn = column.nextElementSibling;

              while (!nextColumn.offsetParent) {
                nextColumn = nextColumn.nextElementSibling;
              }

              if (nextColumn) {
                var nextColumnWidth = nextColumn.offsetWidth - delta;
                var nextColumnMinWidth = nextColumn.style.minWidth || 15;

                if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                  if (this.scrollable) {
                    var scrollableView = this.findParentScrollableView(column);
                    var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body table');
                    var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-header-table');
                    var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableView, 'table.ui-table-scrollable-footer-table');
                    var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(column);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                  } else {
                    column.style.width = newColumnWidth + 'px';

                    if (nextColumn) {
                      nextColumn.style.width = nextColumnWidth + 'px';
                    }
                  }
                }
              }
            } else if (this.columnResizeMode === 'expand') {
              if (newColumnWidth > minWidth) {
                if (this.scrollable) {
                  this.setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta);
                } else {
                  this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                  column.style.width = newColumnWidth + 'px';
                  var containerWidth = this.tableViewChild.nativeElement.style.width;
                  this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
              }
            }

            this.onColResize.emit({
              element: column,
              delta: delta
            });

            if (this.isStateful()) {
              this.saveState();
            }
          }

          this.resizeHelperViewChild.nativeElement.style.display = 'none';
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        }
      }, {
        key: "setScrollableItemsWidthOnExpandResize",
        value: function setScrollableItemsWidthOnExpandResize(column, newColumnWidth, delta) {
          var scrollableView = column ? this.findParentScrollableView(column) : this.containerViewChild.nativeElement;
          var scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-body');
          var scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-header');
          var scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableView, '.ui-table-scrollable-footer');
          var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableBody, '.ui-table-scrollable-body table');
          var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableHeader, 'table.ui-table-scrollable-header-table');
          var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(scrollableFooter, 'table.ui-table-scrollable-footer-table');
          var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
          var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
          var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;

          var setWidth = function setWidth(container, table, width, isContainerInViewport) {
            if (container && table) {
              container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
              table.style.width = width + 'px';
            }
          };

          setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
          setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
          setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);

          if (column) {
            var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(column);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
          }
        }
      }, {
        key: "findParentScrollableView",
        value: function findParentScrollableView(column) {
          if (column) {
            var parent = column.parentElement;

            while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(parent, 'ui-table-scrollable-view')) {
              parent = parent.parentElement;
            }

            return parent;
          } else {
            return null;
          }
        }
      }, {
        key: "resizeColGroup",
        value: function resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
          if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;

            if (colGroup) {
              var col = colGroup.children[resizeColumnIndex];
              var nextCol = col.nextElementSibling;
              col.style.width = newColumnWidth + 'px';

              if (nextCol && nextColumnWidth) {
                nextCol.style.width = nextColumnWidth + 'px';
              }
            } else {
              throw "Scrollable tables require a colgroup to support resizable columns";
            }
          }
        }
      }, {
        key: "onColumnDragStart",
        value: function onColumnDragStart(event, columnElement) {
          this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
          this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
          this.draggedColumn = columnElement;
          event.dataTransfer.setData('text', 'b'); // For firefox
        }
      }, {
        key: "onColumnDragEnter",
        value: function onColumnDragEnter(event, dropHeader) {
          if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(dropHeader);

            if (this.draggedColumn != dropHeader) {
              var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
              var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].indexWithinGroup(dropHeader, 'preorderablecolumn');
              var targetLeft = dropHeaderOffset.left - containerOffset.left;
              var targetTop = containerOffset.top - dropHeaderOffset.top;
              var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
              this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
              this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

              if (event.pageX > columnCenter) {
                this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.dropPosition = 1;
              } else {
                this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
                this.dropPosition = -1;
              }

              if (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dropIndex - dragIndex === -1 && this.dropPosition === 1) {
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
              } else {
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
              }
            } else {
              event.dataTransfer.dropEffect = 'none';
            }
          }
        }
      }, {
        key: "onColumnDragLeave",
        value: function onColumnDragLeave(event) {
          if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
          }
        }
      }, {
        key: "onColumnDrop",
        value: function onColumnDrop(event, dropColumn) {
          var _this8 = this;

          event.preventDefault();

          if (this.draggedColumn) {
            var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].indexWithinGroup(dropColumn, 'preorderablecolumn');
            var allowDrop = dragIndex != dropIndex;

            if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
              allowDrop = false;
            }

            if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
              dropIndex = dropIndex + 1;
            }

            if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
              dropIndex = dropIndex - 1;
            }

            if (allowDrop) {
              primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].reorderArray(this.columns, dragIndex, dropIndex);
              this.onColReorder.emit({
                dragIndex: dragIndex,
                dropIndex: dropIndex,
                columns: this.columns
              });

              if (this.isStateful()) {
                this.zone.runOutsideAngular(function () {
                  setTimeout(function () {
                    _this8.saveState();
                  });
                });
              }
            }

            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
          }
        }
      }, {
        key: "onRowDragStart",
        value: function onRowDragStart(event, index) {
          this.rowDragging = true;
          this.draggedRowIndex = index;
          event.dataTransfer.setData('text', 'b'); // For firefox
        }
      }, {
        key: "onRowDragOver",
        value: function onRowDragOver(event, index, rowElement) {
          if (this.rowDragging && this.draggedRowIndex !== index) {
            var rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(rowElement).top + primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getWindowScrollTop();
            var pageY = event.pageY;
            var rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(rowElement) / 2;
            var prevRowElement = rowElement.previousElementSibling;

            if (pageY < rowMidY) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
              this.droppedRowIndex = index;
              if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(prevRowElement, 'ui-table-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
            } else {
              if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-top');
              this.droppedRowIndex = index + 1;
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(rowElement, 'ui-table-dragpoint-bottom');
            }
          }
        }
      }, {
        key: "onRowDragLeave",
        value: function onRowDragLeave(event, rowElement) {
          var prevRowElement = rowElement.previousElementSibling;

          if (prevRowElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-bottom');
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(rowElement, 'ui-table-dragpoint-top');
        }
      }, {
        key: "onRowDragEnd",
        value: function onRowDragEnd(event) {
          this.rowDragging = false;
          this.draggedRowIndex = null;
          this.droppedRowIndex = null;
        }
      }, {
        key: "onRowDrop",
        value: function onRowDrop(event, rowElement) {
          if (this.droppedRowIndex != null) {
            var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
            primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
              dragIndex: this.draggedRowIndex,
              dropIndex: dropIndex
            });
          } //cleanup


          this.onRowDragLeave(event, rowElement);
          this.onRowDragEnd(event);
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          var data = this.filteredValue || this.value;
          return data == null || data.length == 0;
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "getStorage",
        value: function getStorage() {
          switch (this.stateStorage) {
            case 'local':
              return window.localStorage;

            case 'session':
              return window.sessionStorage;

            default:
              throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
          }
        }
      }, {
        key: "isStateful",
        value: function isStateful() {
          return this.stateKey != null;
        }
      }, {
        key: "saveState",
        value: function saveState() {
          var storage = this.getStorage();
          var state = {};

          if (this.paginator) {
            state.first = this.first;
            state.rows = this.rows;
          }

          if (this.sortField) {
            state.sortField = this.sortField;
            state.sortOrder = this.sortOrder;
          }

          if (this.multiSortMeta) {
            state.multiSortMeta = this.multiSortMeta;
          }

          if (this.hasFilter()) {
            state.filters = this.filters;
          }

          if (this.resizableColumns) {
            this.saveColumnWidths(state);
          }

          if (this.reorderableColumns) {
            this.saveColumnOrder(state);
          }

          if (this.selection) {
            state.selection = this.selection;
          }

          if (Object.keys(this.expandedRowKeys).length) {
            state.expandedRowKeys = this.expandedRowKeys;
          }

          if (Object.keys(state).length) {
            storage.setItem(this.stateKey, JSON.stringify(state));
          }

          this.onStateSave.emit(state);
        }
      }, {
        key: "clearState",
        value: function clearState() {
          var storage = this.getStorage();

          if (this.stateKey) {
            storage.removeItem(this.stateKey);
          }
        }
      }, {
        key: "restoreState",
        value: function restoreState() {
          var _this9 = this;

          var storage = this.getStorage();
          var stateString = storage.getItem(this.stateKey);

          if (stateString) {
            var state = JSON.parse(stateString);

            if (this.paginator) {
              this.first = state.first;
              this.rows = state.rows;
              this.firstChange.emit(this.first);
              this.rowsChange.emit(this.rows);
            }

            if (state.sortField) {
              this.restoringSort = true;
              this._sortField = state.sortField;
              this._sortOrder = state.sortOrder;
            }

            if (state.multiSortMeta) {
              this.restoringSort = true;
              this._multiSortMeta = state.multiSortMeta;
            }

            if (state.filters) {
              this.restoringFilter = true;
              this.filters = state.filters;
            }

            if (this.resizableColumns) {
              this.columnWidthsState = state.columnWidths;
              this.tableWidthState = state.tableWidth;
            }

            if (state.expandedRowKeys) {
              this.expandedRowKeys = state.expandedRowKeys;
            }

            if (state.selection) {
              Promise.resolve(null).then(function () {
                return _this9.selectionChange.emit(state.selection);
              });
            }

            this.stateRestored = true;
            this.onStateRestore.emit(state);
          }
        }
      }, {
        key: "saveColumnWidths",
        value: function saveColumnWidths(state) {
          var widths = [];
          var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
          headers.map(function (header) {
            return widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterWidth(header));
          });
          state.columnWidths = widths.join(',');

          if (this.columnResizeMode === 'expand') {
            state.tableWidth = this.scrollable ? primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table').style.width : primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterWidth(this.tableViewChild.nativeElement) + 'px';
          }
        }
      }, {
        key: "restoreColumnWidths",
        value: function restoreColumnWidths() {
          if (this.columnWidthsState) {
            var widths = this.columnWidthsState.split(',');

            if (this.columnResizeMode === 'expand' && this.tableWidthState) {
              if (this.scrollable) {
                this.setScrollableItemsWidthOnExpandResize(null, this.tableWidthState, 0);
              } else {
                this.tableViewChild.nativeElement.style.width = this.tableWidthState;
                this.containerViewChild.nativeElement.style.width = this.tableWidthState;
              }
            }

            if (this.scrollable) {
              var headerCols = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-header-table > colgroup > col');
              var bodyCols = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.containerViewChild.nativeElement, '.ui-table-scrollable-body table > colgroup > col');
              headerCols.map(function (col, index) {
                return col.style.width = widths[index] + 'px';
              });
              bodyCols.map(function (col, index) {
                return col.style.width = widths[index] + 'px';
              });
            } else {
              var headers = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.tableViewChild.nativeElement, '.ui-table-thead > tr:first-child > th');
              headers.map(function (header, index) {
                return header.style.width = widths[index] + 'px';
              });
            }
          }
        }
      }, {
        key: "saveColumnOrder",
        value: function saveColumnOrder(state) {
          if (this.columns) {
            var columnOrder = [];
            this.columns.map(function (column) {
              columnOrder.push(column.field || column.key);
            });
            state.columnOrder = columnOrder;
          }
        }
      }, {
        key: "restoreColumnOrder",
        value: function restoreColumnOrder() {
          var _this10 = this;

          var storage = this.getStorage();
          var stateString = storage.getItem(this.stateKey);

          if (stateString) {
            var state = JSON.parse(stateString);
            var columnOrder = state.columnOrder;

            if (columnOrder) {
              var reorderedColumns = [];
              columnOrder.map(function (key) {
                return reorderedColumns.push(_this10.findColumnByKey(key));
              });
              this.columnOrderStateRestored = true;
              this.columns = reorderedColumns;
            }
          }
        }
      }, {
        key: "findColumnByKey",
        value: function findColumnByKey(key) {
          if (this.columns) {
            var _iterator2 = _createForOfIteratorHelper(this.columns),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var col = _step2.value;
                if (col.key === key || col.field === key) return col;else continue;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            return null;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindDocumentEditListener();
          this.editingCell = null;
          this.initialized = null;
        }
      }]);
    }();

    Table.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: TableService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Table.prototype, "frozenColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Table.prototype, "frozenValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "tableStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "tableStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Table.prototype, "pageLinks", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Table.prototype, "rowsPerPageOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "alwaysShowPaginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "paginatorPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "paginatorDropdownAppendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "paginatorDropdownScrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "currentPageReportTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "showCurrentPageReport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Table.prototype, "defaultSortOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "sortMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "resetPageOnSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "selectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "selectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "contextMenuSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "contextMenuSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "contextMenuSelectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "dataKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "metaKeySelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], Table.prototype, "rowTrackBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "lazyLoadOnInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "compareSelectionBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "csvSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "exportFilename", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "filters", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Table.prototype, "globalFilterFields", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Table.prototype, "filterDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "filterLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "expandedRowKeys", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "editingRowKeys", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "rowExpandMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "scrollable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "scrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "virtualScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Table.prototype, "virtualScrollDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Table.prototype, "virtualRowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "frozenWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "responsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "contextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "resizableColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "columnResizeMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "reorderableColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "loadingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "showLoader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "rowHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "customSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Table.prototype, "autoLayout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "exportFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "stateKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "stateStorage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Table.prototype, "editMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Table.prototype, "minBufferPx", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Table.prototype, "maxBufferPx", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onRowSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onRowUnselect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onLazyLoad", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onRowExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onRowCollapse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onContextMenuSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onColResize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onColReorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onRowReorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onEditInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onEditComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onEditCancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onHeaderCheckboxToggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "sortFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "firstChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "rowsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onStateSave", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Table.prototype, "onStateRestore", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Table.prototype, "containerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resizeHelper'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Table.prototype, "resizeHelperViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderIndicatorUp'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Table.prototype, "reorderIndicatorUpViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderIndicatorDown'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Table.prototype, "reorderIndicatorDownViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Table.prototype, "tableViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollableView'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "scrollableViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollableFrozenView'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Table.prototype, "scrollableFrozenViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Table.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], Table.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], Table.prototype, "columns", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Table.prototype, "first", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Table.prototype, "rows", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Table.prototype, "totalRecords", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], Table.prototype, "sortField", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Table.prototype, "sortOrder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], Table.prototype, "multiSortMeta", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], Table.prototype, "selection", null);
    Table = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-table',
      template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n            [ngClass]=\"{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,\n                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout,\n                'ui-table-flex-scrollable': (scrollable && scrollHeight === 'flex')}\">\n            <div class=\"ui-table-loading ui-widget-overlay\" *ngIf=\"loading && showLoader\"></div>\n            <div class=\"ui-table-loading-content\" *ngIf=\"loading && showLoader\">\n                <i [class]=\"'ui-table-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-table-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n\n            <div class=\"ui-table-wrapper\" *ngIf=\"!scrollable\">\n                <table role=\"grid\" #table [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                    <tfoot *ngIf=\"footerTemplate\" class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n\n            <div class=\"ui-table-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-table-scrollable-view ui-table-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" #scrollableFrozenView [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"ui-table-scrollable-view\" #scrollableView [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n\n                <div *ngIf=\"summaryTemplate\" class=\"ui-table-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down ui-table-reorder-indicator-up\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up ui-table-reorder-indicator-down\" style=\"display:none\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
      providers: [TableService],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], TableService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Table);

    var TableBody = /*#__PURE__*/_createClass(function TableBody(dt) {
      _classCallCheck(this, TableBody);

      this.dt = dt;
    });

    TableBody.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pTableBody"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TableBody.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pTableBodyTemplate"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], TableBody.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TableBody.prototype, "frozen", void 0);
    TableBody = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[pTableBody]',
      template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && !dt.virtualScroll\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!dt.expandedRowTemplate && dt.virtualScroll\">\n            <ng-template cdkVirtualFor let-rowData let-rowIndex=\"index\" [cdkVirtualForOf]=\"dt.value\" [cdkVirtualForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"rowData ? template: dt.loadingBodyTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"(dt.paginator && !dt.lazy) ? ((dt.filteredValue||dt.value) | slice:dt.first:(dt.first + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: dt.isRowExpanded(rowData), editing: (dt.editMode === 'row' && dt.isRowEditing(rowData))}\"></ng-container>\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData)\">\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.loadingBodyTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty() && !dt.loading\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns, frozen: frozen}\"></ng-container>\n        </ng-container>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table])], TableBody);

    var ScrollableView = /*#__PURE__*/function () {
      function ScrollableView(dt, el, zone) {
        var _this11 = this;

        _classCallCheck(this, ScrollableView);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
        this.loadedPages = [];
        this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
          _this11.zone.runOutsideAngular(function () {
            setTimeout(function () {
              _this11.alignScrollBar();
            }, 50);
          });
        });
        this.initialized = false;
      }

      return _createClass(ScrollableView, [{
        key: "scrollHeight",
        get: function get() {
          return this._scrollHeight;
        },
        set: function set(val) {
          this._scrollHeight = val;

          if (val != null && (val.includes('%') || val.includes('calc'))) {
            console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.initialized = true;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }

            var frozenView = this.el.nativeElement.previousElementSibling;

            if (frozenView) {
              if (this.dt.virtualScroll) this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(frozenView, '.ui-table-virtual-scrollable-body');else this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(frozenView, '.ui-table-scrollable-body');
            }
          } else {
            if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
              this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].calculateScrollbarHeight() + 'px';
            }
          }

          this.bindEvents();
          this.alignScrollBar();
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this12 = this;

          this.zone.runOutsideAngular(function () {
            if (_this12.scrollHeaderViewChild && _this12.scrollHeaderViewChild.nativeElement) {
              _this12.headerScrollListener = _this12.onHeaderScroll.bind(_this12);

              _this12.scrollHeaderViewChild.nativeElement.addEventListener('scroll', _this12.headerScrollListener);
            }

            if (_this12.scrollFooterViewChild && _this12.scrollFooterViewChild.nativeElement) {
              _this12.footerScrollListener = _this12.onFooterScroll.bind(_this12);

              _this12.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this12.footerScrollListener);
            }

            if (!_this12.frozen) {
              _this12.bodyScrollListener = _this12.onBodyScroll.bind(_this12);
              if (_this12.dt.virtualScroll) _this12.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', _this12.bodyScrollListener);else _this12.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this12.bodyScrollListener);
            }
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
          }

          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
          }

          if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
          }

          if (this.virtualScrollBody && this.virtualScrollBody.getElementRef()) {
            this.virtualScrollBody.getElementRef().nativeElement.removeEventListener('scroll', this.bodyScrollListener);
          }
        }
      }, {
        key: "onHeaderScroll",
        value: function onHeaderScroll() {
          var scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
          this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;

          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
          }

          this.preventBodyScrollPropagation = true;
        }
      }, {
        key: "onFooterScroll",
        value: function onFooterScroll() {
          var scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
          this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;

          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
          }

          this.preventBodyScrollPropagation = true;
        }
      }, {
        key: "onBodyScroll",
        value: function onBodyScroll(event) {
          if (this.preventBodyScrollPropagation) {
            this.preventBodyScrollPropagation = false;
            return;
          }

          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
          }

          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
          }

          if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = event.target.scrollTop;
          }
        }
      }, {
        key: "onScrollIndexChange",
        value: function onScrollIndexChange(index) {
          var _this13 = this;

          if (this.dt.lazy) {
            var pageRange = this.createPageRange(Math.floor(index / this.dt.rows));
            pageRange.forEach(function (page) {
              return _this13.loadPage(page);
            });
          }
        }
      }, {
        key: "createPageRange",
        value: function createPageRange(page) {
          var range = [];

          if (page !== 0) {
            range.push(page - 1);
          }

          range.push(page);

          if (page !== this.getPageCount() - 1) {
            range.push(page + 1);
          }

          return range;
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          if (!this.loadedPages.includes(page)) {
            this.dt.onLazyLoad.emit({
              first: this.dt.rows * page,
              rows: this.dt.rows,
              sortField: this.dt.sortField,
              sortOrder: this.dt.sortOrder,
              filters: this.dt.filters,
              globalFilter: this.dt.filters && this.dt.filters['global'] ? this.dt.filters['global'].value : null,
              multiSortMeta: this.dt.multiSortMeta
            });
            this.loadedPages.push(page);
          }
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          this.loadedPages = [];
        }
      }, {
        key: "getPageCount",
        value: function getPageCount() {
          var dataToRender = this.dt.filteredValue || this.dt.value;
          var dataLength = dataToRender ? dataToRender.length : 0;
          return Math.ceil(dataLength / this.dt.rows);
        }
      }, {
        key: "scrollToVirtualIndex",
        value: function scrollToVirtualIndex(index) {
          if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollToIndex(index);
          }
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          if (this.virtualScrollBody) {
            this.virtualScrollBody.scrollTo(options);
          } else {
            if (this.scrollBodyViewChild.nativeElement.scrollTo) {
              this.scrollBodyViewChild.nativeElement.scrollTo(options);
            } else {
              this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
              this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
            }
          }
        }
      }, {
        key: "hasVerticalOverflow",
        value: function hasVerticalOverflow() {
          if (this.dt.virtualScroll) return this.virtualScrollBody.getDataLength() * this.dt.virtualRowHeight > this.virtualScrollBody.getViewportSize();else return primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement) > primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
        }
      }, {
        key: "alignScrollBar",
        value: function alignScrollBar() {
          if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';

            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
              this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
            }
          }

          this.initialized = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
          this.frozenSiblingBody = null;

          if (this.subscription) {
            this.subscription.unsubscribe();
          }

          this.initialized = false;
        }
      }]);
    }();

    ScrollableView.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pScrollableView"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], ScrollableView.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ScrollableView.prototype, "frozen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollHeader'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollHeaderBox'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollBody'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollableView.prototype, "scrollBodyViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollTable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollableView.prototype, "scrollTableViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFooter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollableView.prototype, "scrollFooterViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFooterBox'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollableAligner'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ScrollableView.prototype, "scrollableAlignerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"])], ScrollableView.prototype, "virtualScrollBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], ScrollableView.prototype, "scrollHeight", null);
    ScrollableView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[pScrollableView]',
      template: "\n        <div #scrollHeader class=\"ui-table-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-table-scrollable-header-box\">\n                <table class=\"ui-table-scrollable-header-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <ng-container *ngIf=\"!dt.virtualScroll; else virtualScrollTemplate\">\n            <div #scrollBody class=\"ui-table-scrollable-body\" [ngStyle]=\"{'max-height': dt.scrollHeight !== 'flex' ? scrollHeight : undefined}\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </div>\n        </ng-container>\n        <ng-template #virtualScrollTemplate>\n            <cdk-virtual-scroll-viewport [itemSize]=\"dt.virtualRowHeight\" [style.height]=\"dt.scrollHeight !== 'flex' ? scrollHeight : undefined\" \n                    [minBufferPx]=\"dt.minBufferPx\" [maxBufferPx]=\"dt.maxBufferPx\" (scrolledIndexChange)=\"onScrollIndexChange($event)\" class=\"ui-table-virtual-scrollable-body\">\n                <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </cdk-virtual-scroll-viewport>\n        </ng-template>\n        <div #scrollFooter class=\"ui-table-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-table-scrollable-footer-box\">\n                <table class=\"ui-table-scrollable-footer-table\" [ngClass]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], ScrollableView);

    var SortableColumn = /*#__PURE__*/function () {
      function SortableColumn(dt) {
        var _this14 = this;

        _classCallCheck(this, SortableColumn);

        this.dt = dt;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this14.updateSortState();
          });
        }
      }

      return _createClass(SortableColumn, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.updateSortState();
          }
        }
      }, {
        key: "updateSortState",
        value: function updateSortState() {
          this.sorted = this.dt.isSorted(this.field);
          this.sortOrder = this.sorted ? this.dt.sortOrder === 1 ? 'ascending' : 'descending' : 'none';
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
              originalEvent: event,
              field: this.field
            });
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].clearSelection();
          }
        }
      }, {
        key: "onEnterKey",
        value: function onEnterKey(event) {
          this.onClick(event);
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSortableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    SortableColumn.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pSortableColumn"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SortableColumn.prototype, "field", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SortableColumn.prototype, "pSortableColumnDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SortableColumn.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SortableColumn.prototype, "onEnterKey", null);
    SortableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pSortableColumn]',
      host: {
        '[class.ui-sortable-column]': 'isEnabled()',
        '[class.ui-state-highlight]': 'sorted',
        '[attr.tabindex]': 'isEnabled() ? "0" : null',
        '[attr.role]': '"columnheader"',
        '[attr.aria-sort]': 'sortOrder'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table])], SortableColumn);

    var SortIcon = /*#__PURE__*/function () {
      function SortIcon(dt) {
        var _this15 = this;

        _classCallCheck(this, SortIcon);

        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
          _this15.updateSortState();
        });
      }

      return _createClass(SortIcon, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSortState();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          event.preventDefault();
        }
      }, {
        key: "updateSortState",
        value: function updateSortState() {
          if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
          } else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    SortIcon.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SortIcon.prototype, "field", void 0);
    SortIcon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-sortIcon',
      template: "\n        <i class=\"ui-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}\"></i>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table])], SortIcon);

    var SelectableRow = /*#__PURE__*/function () {
      function SelectableRow(dt, tableService) {
        var _this16 = this;

        _classCallCheck(this, SelectableRow);

        this.dt = dt;
        this.tableService = tableService;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this16.selected = _this16.dt.isSelected(_this16.data);
          });
        }
      }

      return _createClass(SelectableRow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.handleRowClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
          }
        }
      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
          }
        }
      }, {
        key: "onArrowDownKeyDown",
        value: function onArrowDownKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }

          var row = event.currentTarget;
          var nextRow = this.findNextSelectableRow(row);

          if (nextRow) {
            nextRow.focus();
          }

          event.preventDefault();
        }
      }, {
        key: "onArrowUpKeyDown",
        value: function onArrowUpKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }

          var row = event.currentTarget;
          var prevRow = this.findPrevSelectableRow(row);

          if (prevRow) {
            prevRow.focus();
          }

          event.preventDefault();
        }
      }, {
        key: "onEnterKeyDown",
        value: function onEnterKeyDown(event) {
          if (!this.isEnabled()) {
            return;
          }

          this.dt.handleRowClick({
            originalEvent: event,
            rowData: this.data,
            rowIndex: this.index
          });
        }
      }, {
        key: "findNextSelectableRow",
        value: function findNextSelectableRow(row) {
          var nextRow = row.nextElementSibling;

          if (nextRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(nextRow, 'ui-selectable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
          } else {
            return null;
          }
        }
      }, {
        key: "findPrevSelectableRow",
        value: function findPrevSelectableRow(row) {
          var prevRow = row.previousElementSibling;

          if (prevRow) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(prevRow, 'ui-selectable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
          } else {
            return null;
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSelectableRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    SelectableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pSelectableRow"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SelectableRow.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pSelectableRowIndex"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SelectableRow.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SelectableRow.prototype, "pSelectableRowDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SelectableRow.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SelectableRow.prototype, "onTouchEnd", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.arrowdown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SelectableRow.prototype, "onArrowDownKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.arrowup', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SelectableRow.prototype, "onArrowUpKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SelectableRow.prototype, "onEnterKeyDown", null);
    SelectableRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pSelectableRow]',
      host: {
        '[class.ui-selectable-row]': 'isEnabled()',
        '[class.ui-state-highlight]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, TableService])], SelectableRow);

    var SelectableRowDblClick = /*#__PURE__*/function () {
      function SelectableRowDblClick(dt, tableService) {
        var _this17 = this;

        _classCallCheck(this, SelectableRowDblClick);

        this.dt = dt;
        this.tableService = tableService;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this17.selected = _this17.dt.isSelected(_this17.data);
          });
        }
      }

      return _createClass(SelectableRowDblClick, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.handleRowClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pSelectableRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    SelectableRowDblClick.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pSelectableRowDblClick"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SelectableRowDblClick.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pSelectableRowIndex"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], SelectableRowDblClick.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], SelectableRowDblClick.prototype, "pSelectableRowDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SelectableRowDblClick.prototype, "onClick", null);
    SelectableRowDblClick = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pSelectableRowDblClick]',
      host: {
        '[class.ui-selectable-row]': 'isEnabled()',
        '[class.ui-state-highlight]': 'selected'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, TableService])], SelectableRowDblClick);

    var ContextMenuRow = /*#__PURE__*/function () {
      function ContextMenuRow(dt, tableService, el) {
        var _this18 = this;

        _classCallCheck(this, ContextMenuRow);

        this.dt = dt;
        this.tableService = tableService;
        this.el = el;

        if (this.isEnabled()) {
          this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
            _this18.selected = _this18.dt.equals(_this18.data, data);
          });
        }
      }

      return _createClass(ContextMenuRow, [{
        key: "onContextMenu",
        value: function onContextMenu(event) {
          if (this.isEnabled()) {
            this.dt.handleRowRightClick({
              originalEvent: event,
              rowData: this.data,
              rowIndex: this.index
            });
            this.el.nativeElement.focus();
            event.preventDefault();
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pContextMenuRowDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    ContextMenuRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pContextMenuRow"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ContextMenuRow.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pContextMenuRowIndex"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ContextMenuRow.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ContextMenuRow.prototype, "pContextMenuRowDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ContextMenuRow.prototype, "onContextMenu", null);
    ContextMenuRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pContextMenuRow]',
      host: {
        '[class.ui-contextmenu-selected]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, TableService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ContextMenuRow);

    var RowToggler = /*#__PURE__*/function () {
      function RowToggler(dt) {
        _classCallCheck(this, RowToggler);

        this.dt = dt;
      }

      return _createClass(RowToggler, [{
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pRowTogglerDisabled !== true;
        }
      }]);
    }();

    RowToggler.ctorParameters = function () {
      return [{
        type: Table
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('pRowToggler'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RowToggler.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], RowToggler.prototype, "pRowTogglerDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RowToggler.prototype, "onClick", null);
    RowToggler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pRowToggler]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table])], RowToggler);

    var ResizableColumn = /*#__PURE__*/function () {
      function ResizableColumn(dt, el, zone) {
        _classCallCheck(this, ResizableColumn);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(ResizableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this19 = this;

          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
              _this19.resizerMouseDownListener = _this19.onMouseDown.bind(_this19);

              _this19.resizer.addEventListener('mousedown', _this19.resizerMouseDownListener);
            });
          }
        }
      }, {
        key: "bindDocumentEvents",
        value: function bindDocumentEvents() {
          var _this20 = this;

          this.zone.runOutsideAngular(function () {
            _this20.documentMouseMoveListener = _this20.onDocumentMouseMove.bind(_this20);
            document.addEventListener('mousemove', _this20.documentMouseMoveListener);
            _this20.documentMouseUpListener = _this20.onDocumentMouseUp.bind(_this20);
            document.addEventListener('mouseup', _this20.documentMouseUpListener);
          });
        }
      }, {
        key: "unbindDocumentEvents",
        value: function unbindDocumentEvents() {
          if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
          }

          if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (event.which === 1) {
            this.dt.onColumnResizeBegin(event);
            this.bindDocumentEvents();
          }
        }
      }, {
        key: "onDocumentMouseMove",
        value: function onDocumentMouseMove(event) {
          this.dt.onColumnResize(event);
        }
      }, {
        key: "onDocumentMouseUp",
        value: function onDocumentMouseUp(event) {
          this.dt.onColumnResizeEnd(event, this.el.nativeElement);
          this.unbindDocumentEvents();
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pResizableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
          }

          this.unbindDocumentEvents();
        }
      }]);
    }();

    ResizableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ResizableColumn.prototype, "pResizableColumnDisabled", void 0);
    ResizableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pResizableColumn]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], ResizableColumn);

    var ReorderableColumn = /*#__PURE__*/function () {
      function ReorderableColumn(dt, el, zone) {
        _classCallCheck(this, ReorderableColumn);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(ReorderableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            this.bindEvents();
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this21 = this;

          this.zone.runOutsideAngular(function () {
            _this21.mouseDownListener = _this21.onMouseDown.bind(_this21);

            _this21.el.nativeElement.addEventListener('mousedown', _this21.mouseDownListener);

            _this21.dragStartListener = _this21.onDragStart.bind(_this21);

            _this21.el.nativeElement.addEventListener('dragstart', _this21.dragStartListener);

            _this21.dragOverListener = _this21.onDragEnter.bind(_this21);

            _this21.el.nativeElement.addEventListener('dragover', _this21.dragOverListener);

            _this21.dragEnterListener = _this21.onDragEnter.bind(_this21);

            _this21.el.nativeElement.addEventListener('dragenter', _this21.dragEnterListener);

            _this21.dragLeaveListener = _this21.onDragLeave.bind(_this21);

            _this21.el.nativeElement.addEventListener('dragleave', _this21.dragLeaveListener);
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
          }

          if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
          }

          if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
          }

          if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
          }

          if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          this.dt.onColumnDragStart(event, this.el.nativeElement);
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          event.preventDefault();
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(event) {
          this.dt.onColumnDragEnter(event, this.el.nativeElement);
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.dt.onColumnDragLeave(event);
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pReorderableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
        }
      }]);
    }();

    ReorderableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ReorderableColumn.prototype, "pReorderableColumnDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ReorderableColumn.prototype, "onDrop", null);
    ReorderableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pReorderableColumn]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], ReorderableColumn);

    var EditableColumn = /*#__PURE__*/function () {
      function EditableColumn(dt, el, zone) {
        _classCallCheck(this, EditableColumn);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(EditableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.el.nativeElement, 'ui-editable-column');
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.dt.editingCellClick = true;

            if (this.dt.editingCell) {
              if (this.dt.editingCell !== this.el.nativeElement) {
                if (!this.dt.isEditingCellValid()) {
                  return;
                }

                this.closeEditingCell(true, event);
                this.openCell();
              }
            } else {
              this.openCell();
            }
          }
        }
      }, {
        key: "openCell",
        value: function openCell() {
          var _this22 = this;

          this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.el.nativeElement, 'ui-editing-cell');
          this.dt.onEditInit.emit({
            field: this.field,
            data: this.data,
            index: this.rowIndex
          });
          this.zone.runOutsideAngular(function () {
            setTimeout(function () {
              var focusCellSelector = _this22.pFocusCellSelector || 'input, textarea, select';
              var focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(_this22.el.nativeElement, focusCellSelector);

              if (focusableElement) {
                focusableElement.focus();
              }
            }, 50);
          });
        }
      }, {
        key: "closeEditingCell",
        value: function closeEditingCell(completed, event) {
          if (completed) this.dt.onEditComplete.emit({
            field: this.dt.editingCellField,
            data: this.dt.editingCellData,
            originalEvent: event,
            index: this.rowIndex
          });else this.dt.onEditCancel.emit({
            field: this.dt.editingCellField,
            data: this.dt.editingCellData,
            originalEvent: event,
            index: this.rowIndex
          });
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(this.dt.editingCell, 'ui-editing-cell');
          this.dt.editingCell = null;
          this.dt.editingCellData = null;
          this.dt.editingCellField = null;
          this.dt.unbindDocumentEditListener();
        }
      }, {
        key: "onEnterKeyDown",
        value: function onEnterKeyDown(event) {
          if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(true, event);
            }

            event.preventDefault();
          }
        }
      }, {
        key: "onEscapeKeyDown",
        value: function onEscapeKeyDown(event) {
          if (this.isEnabled()) {
            if (this.dt.isEditingCellValid()) {
              this.closeEditingCell(false, event);
            }

            event.preventDefault();
          }
        }
      }, {
        key: "onShiftKeyDown",
        value: function onShiftKeyDown(event) {
          if (this.isEnabled()) {
            if (event.shiftKey) this.moveToPreviousCell(event);else {
              this.moveToNextCell(event);
            }
          }
        }
      }, {
        key: "findCell",
        value: function findCell(element) {
          if (element) {
            var cell = element;

            while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(cell, 'ui-editing-cell')) {
              cell = cell.parentElement;
            }

            return cell;
          } else {
            return null;
          }
        }
      }, {
        key: "moveToPreviousCell",
        value: function moveToPreviousCell(event) {
          var currentCell = this.findCell(event.target);

          if (currentCell) {
            var targetCell = this.findPreviousEditableColumn(currentCell);

            if (targetCell) {
              if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(true, event);
              }

              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].invokeElementMethod(event.target, 'blur');
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].invokeElementMethod(targetCell, 'click');
              event.preventDefault();
            }
          }
        }
      }, {
        key: "moveToNextCell",
        value: function moveToNextCell(event) {
          var currentCell = this.findCell(event.target);

          if (currentCell) {
            var targetCell = this.findNextEditableColumn(currentCell);

            if (targetCell) {
              if (this.dt.isEditingCellValid()) {
                this.closeEditingCell(true, event);
              }

              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].invokeElementMethod(event.target, 'blur');
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].invokeElementMethod(targetCell, 'click');
              event.preventDefault();
            }
          }
        }
      }, {
        key: "findPreviousEditableColumn",
        value: function findPreviousEditableColumn(cell) {
          var prevCell = cell.previousElementSibling;

          if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;

            if (previousRow) {
              prevCell = previousRow.lastElementChild;
            }
          }

          if (prevCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(prevCell, 'ui-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
          } else {
            return null;
          }
        }
      }, {
        key: "findNextEditableColumn",
        value: function findNextEditableColumn(cell) {
          var nextCell = cell.nextElementSibling;

          if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;

            if (nextRow) {
              nextCell = nextRow.firstElementChild;
            }
          }

          if (nextCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(nextCell, 'ui-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
          } else {
            return null;
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pEditableColumnDisabled !== true;
        }
      }]);
    }();

    EditableColumn.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pEditableColumn"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditableColumn.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pEditableColumnField"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditableColumn.prototype, "field", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pEditableColumnRowIndex"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], EditableColumn.prototype, "rowIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], EditableColumn.prototype, "pEditableColumnDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditableColumn.prototype, "pFocusCellSelector", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], EditableColumn.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], EditableColumn.prototype, "onEnterKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.escape', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], EditableColumn.prototype, "onEscapeKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.tab', ['$event']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.shift.tab', ['$event']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.meta.tab', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], EditableColumn.prototype, "onShiftKeyDown", null);
    EditableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pEditableColumn]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], EditableColumn);

    var EditableRow = /*#__PURE__*/function () {
      function EditableRow(el) {
        _classCallCheck(this, EditableRow);

        this.el = el;
      }

      return _createClass(EditableRow, [{
        key: "isEnabled",
        value: function isEnabled() {
          return this.pEditableRowDisabled !== true;
        }
      }]);
    }();

    EditableRow.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pEditableRow"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditableRow.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], EditableRow.prototype, "pEditableRowDisabled", void 0);
    EditableRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pEditableRow]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], EditableRow);

    var InitEditableRow = /*#__PURE__*/function () {
      function InitEditableRow(dt, editableRow) {
        _classCallCheck(this, InitEditableRow);

        this.dt = dt;
        this.editableRow = editableRow;
      }

      return _createClass(InitEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.initRowEdit(this.editableRow.data);
          event.preventDefault();
        }
      }]);
    }();

    InitEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], InitEditableRow.prototype, "onClick", null);
    InitEditableRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pInitEditableRow]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, EditableRow])], InitEditableRow);

    var SaveEditableRow = /*#__PURE__*/function () {
      function SaveEditableRow(dt, editableRow) {
        _classCallCheck(this, SaveEditableRow);

        this.dt = dt;
        this.editableRow = editableRow;
      }

      return _createClass(SaveEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
          event.preventDefault();
        }
      }]);
    }();

    SaveEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SaveEditableRow.prototype, "onClick", null);
    SaveEditableRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pSaveEditableRow]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, EditableRow])], SaveEditableRow);

    var CancelEditableRow = /*#__PURE__*/function () {
      function CancelEditableRow(dt, editableRow) {
        _classCallCheck(this, CancelEditableRow);

        this.dt = dt;
        this.editableRow = editableRow;
      }

      return _createClass(CancelEditableRow, [{
        key: "onClick",
        value: function onClick(event) {
          this.dt.cancelRowEdit(this.editableRow.data);
          event.preventDefault();
        }
      }]);
    }();

    CancelEditableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableRow
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CancelEditableRow.prototype, "onClick", null);
    CancelEditableRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pCancelEditableRow]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, EditableRow])], CancelEditableRow);

    var CellEditor = /*#__PURE__*/function () {
      function CellEditor(dt, editableColumn, editableRow) {
        _classCallCheck(this, CellEditor);

        this.dt = dt;
        this.editableColumn = editableColumn;
        this.editableRow = editableRow;
      }

      return _createClass(CellEditor, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this23 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'input':
                _this23.inputTemplate = item.template;
                break;

              case 'output':
                _this23.outputTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "editing",
        get: function get() {
          return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data);
        }
      }]);
    }();

    CellEditor.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: EditableColumn,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: EditableRow,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CellEditor.prototype, "templates", void 0);
    CellEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-cellEditor',
      template: "\n        <ng-container *ngIf=\"editing\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!editing\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, EditableColumn, EditableRow])], CellEditor);

    var TableRadioButton = /*#__PURE__*/function () {
      function TableRadioButton(dt, tableService) {
        var _this24 = this;

        _classCallCheck(this, TableRadioButton);

        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this24.checked = _this24.dt.isSelected(_this24.value);
        });
      }

      return _createClass(TableRadioButton, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.dt.isSelected(this.value);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            this.dt.toggleRowWithRadio({
              originalEvent: event,
              rowIndex: this.index
            }, this.value);
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    TableRadioButton.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TableRadioButton.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TableRadioButton.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TableRadioButton.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableRadioButton.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableRadioButton.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableRadioButton.prototype, "ariaLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('box'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TableRadioButton.prototype, "boxViewChild", void 0);
    TableRadioButton = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-tableRadioButton',
      template: "\n        <div class=\"ui-radiobutton ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"disabled\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"radio\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'pi pi-circle-on':checked}\"></span>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, TableService])], TableRadioButton);

    var TableCheckbox = /*#__PURE__*/function () {
      function TableCheckbox(dt, tableService) {
        var _this25 = this;

        _classCallCheck(this, TableCheckbox);

        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this25.checked = _this25.dt.isSelected(_this25.value);
        });
      }

      return _createClass(TableCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.dt.isSelected(this.value);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            this.dt.toggleRowWithCheckbox({
              originalEvent: event,
              rowIndex: this.index
            }, this.value);
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);
    }();

    TableCheckbox.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TableCheckbox.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TableCheckbox.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TableCheckbox.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableCheckbox.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableCheckbox.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TableCheckbox.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableCheckbox.prototype, "ariaLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('box'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TableCheckbox.prototype, "boxViewChild", void 0);
    TableCheckbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-tableCheckbox',
      template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"disabled\"\n                [attr.required]=\"required\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, TableService])], TableCheckbox);

    var TableHeaderCheckbox = /*#__PURE__*/function () {
      function TableHeaderCheckbox(dt, tableService) {
        var _this26 = this;

        _classCallCheck(this, TableHeaderCheckbox);

        this.dt = dt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(function () {
          _this26.checked = _this26.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(function () {
          _this26.checked = _this26.updateCheckedState();
        });
      }

      return _createClass(TableHeaderCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.updateCheckedState();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            if (this.dt.value && this.dt.value.length > 0) {
              this.dt.toggleRowsWithCheckbox(event, !this.checked);
            }
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "isDisabled",
        value: function isDisabled() {
          return this.disabled || !this.dt.value || !this.dt.value.length;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
          }

          if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
          }
        }
      }, {
        key: "updateCheckedState",
        value: function updateCheckedState() {
          if (this.dt.filteredValue) {
            var val = this.dt.filteredValue;
            return val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.isAllFilteredValuesChecked();
          } else {
            var _val = this.dt.value;
            return _val && _val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === _val.length;
          }
        }
      }, {
        key: "isAllFilteredValuesChecked",
        value: function isAllFilteredValuesChecked() {
          if (!this.dt.filteredValue) {
            return false;
          } else {
            var _iterator3 = _createForOfIteratorHelper(this.dt.filteredValue),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var rowData = _step3.value;

                if (!this.dt.isSelected(rowData)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return true;
          }
        }
      }]);
    }();

    TableHeaderCheckbox.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: TableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('box'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TableHeaderCheckbox.prototype, "boxViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TableHeaderCheckbox.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableHeaderCheckbox.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableHeaderCheckbox.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TableHeaderCheckbox.prototype, "ariaLabel", void 0);
    TableHeaderCheckbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-tableHeaderCheckbox',
      template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [disabled]=\"isDisabled()\" [attr.aria-label]=\"ariaLabel\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': isDisabled()}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, TableService])], TableHeaderCheckbox);

    var ReorderableRowHandle = /*#__PURE__*/function () {
      function ReorderableRowHandle(el) {
        _classCallCheck(this, ReorderableRowHandle);

        this.el = el;
      }

      return _createClass(ReorderableRowHandle, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(this.el.nativeElement, 'ui-table-reorderablerow-handle');
        }
      }]);
    }();

    ReorderableRowHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pReorderableRowHandle"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ReorderableRowHandle.prototype, "index", void 0);
    ReorderableRowHandle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pReorderableRowHandle]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ReorderableRowHandle);

    var ReorderableRow = /*#__PURE__*/function () {
      function ReorderableRow(dt, el, zone) {
        _classCallCheck(this, ReorderableRow);

        this.dt = dt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(ReorderableRow, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this27 = this;

          this.zone.runOutsideAngular(function () {
            _this27.mouseDownListener = _this27.onMouseDown.bind(_this27);

            _this27.el.nativeElement.addEventListener('mousedown', _this27.mouseDownListener);

            _this27.dragStartListener = _this27.onDragStart.bind(_this27);

            _this27.el.nativeElement.addEventListener('dragstart', _this27.dragStartListener);

            _this27.dragEndListener = _this27.onDragEnd.bind(_this27);

            _this27.el.nativeElement.addEventListener('dragend', _this27.dragEndListener);

            _this27.dragOverListener = _this27.onDragOver.bind(_this27);

            _this27.el.nativeElement.addEventListener('dragover', _this27.dragOverListener);

            _this27.dragLeaveListener = _this27.onDragLeave.bind(_this27);

            _this27.el.nativeElement.addEventListener('dragleave', _this27.dragLeaveListener);
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
          }

          if (this.dragStartListener) {
            document.removeEventListener('dragstart', this.dragStartListener);
            this.dragStartListener = null;
          }

          if (this.dragEndListener) {
            document.removeEventListener('dragend', this.dragEndListener);
            this.dragEndListener = null;
          }

          if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
          }

          if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-table-reorderablerow-handle')) this.el.nativeElement.draggable = true;else this.el.nativeElement.draggable = false;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          this.dt.onRowDragStart(event, this.index);
        }
      }, {
        key: "onDragEnd",
        value: function onDragEnd(event) {
          this.dt.onRowDragEnd(event);
          this.el.nativeElement.draggable = false;
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
          event.preventDefault();
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.dt.onRowDragLeave(event, this.el.nativeElement);
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.pReorderableRowDisabled !== true;
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
          }

          event.preventDefault();
        }
      }]);
    }();

    ReorderableRow.ctorParameters = function () {
      return [{
        type: Table
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pReorderableRow"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ReorderableRow.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ReorderableRow.prototype, "pReorderableRowDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ReorderableRow.prototype, "onDrop", null);
    ReorderableRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[pReorderableRow]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Table, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], ReorderableRow);

    var TableModule = /*#__PURE__*/_createClass(function TableModule() {
      _classCallCheck(this, TableModule);
    });

    TableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_4__["PaginatorModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]],
      exports: [Table, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]],
      declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow]
    })], TableModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff-es5.js.map