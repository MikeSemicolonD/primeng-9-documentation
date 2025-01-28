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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-inputnumber-inputnumberdemo-module~components-treetable-treetabledemo-module"], {
  /***/
  "./src/app/components/treetable/public_api.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/treetable/public_api.ts ***!
    \****************************************************/

  /*! exports provided: TreeTableService, TreeTable, TTBody, TTScrollableView, TTSortableColumn, TTSortIcon, TTResizableColumn, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, TTRow, TreeTableToggler, TreeTableModule */

  /***/
  function _src_app_components_treetable_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _treetable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./treetable */
    "./src/app/components/treetable/treetable.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TreeTableService", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TreeTableService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TreeTable", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TreeTable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTBody", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTBody"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTScrollableView", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTScrollableView"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTSortableColumn", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTSortableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTSortIcon", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTSortIcon"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTResizableColumn", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTResizableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTReorderableColumn", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTReorderableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTSelectableRow", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTSelectableRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTSelectableRowDblClick", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTSelectableRowDblClick"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTContextMenuRow", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTContextMenuRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTCheckbox", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTCheckbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTHeaderCheckbox", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTHeaderCheckbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTEditableColumn", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTEditableColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TreeTableCellEditor", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TreeTableCellEditor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TTRow", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TTRow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TreeTableToggler", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TreeTableToggler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TreeTableModule", function () {
      return _treetable__WEBPACK_IMPORTED_MODULE_0__["TreeTableModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/treetable/treetable.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/treetable/treetable.ts ***!
    \***************************************************/

  /*! exports provided: TreeTableService, TreeTable, TTBody, TTScrollableView, TTSortableColumn, TTSortIcon, TTResizableColumn, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, TTRow, TreeTableToggler, TreeTableModule */

  /***/
  function _src_app_components_treetable_treetableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeTableService", function () {
      return TreeTableService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeTable", function () {
      return TreeTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTBody", function () {
      return TTBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTScrollableView", function () {
      return TTScrollableView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTSortableColumn", function () {
      return TTSortableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTSortIcon", function () {
      return TTSortIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTResizableColumn", function () {
      return TTResizableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTReorderableColumn", function () {
      return TTReorderableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTSelectableRow", function () {
      return TTSelectableRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTSelectableRowDblClick", function () {
      return TTSelectableRowDblClick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTContextMenuRow", function () {
      return TTContextMenuRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTCheckbox", function () {
      return TTCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTHeaderCheckbox", function () {
      return TTHeaderCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTEditableColumn", function () {
      return TTEditableColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeTableCellEditor", function () {
      return TreeTableCellEditor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TTRow", function () {
      return TTRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeTableToggler", function () {
      return TreeTableToggler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeTableModule", function () {
      return TreeTableModule;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/paginator */
    "./src/app/components/paginator/public_api.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var primeng_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/utils */
    "./src/app/components/utils/public_api.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");

    var TreeTableService = /*#__PURE__*/function () {
      function TreeTableService() {
        _classCallCheck(this, TreeTableService);

        this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.uiUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.uiUpdateSource$ = this.uiUpdateSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
      }

      return _createClass(TreeTableService, [{
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
        value: function onContextMenu(node) {
          this.contextMenuSource.next(node);
        }
      }, {
        key: "onUIUpdate",
        value: function onUIUpdate(value) {
          this.uiUpdateSource.next(value);
        }
      }, {
        key: "onTotalRecordsChange",
        value: function onTotalRecordsChange(value) {
          this.totalRecordsSource.next(value);
        }
      }]);
    }();

    TreeTableService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TreeTableService);

    var TreeTable = /*#__PURE__*/function () {
      function TreeTable(el, zone, tableService) {
        _classCallCheck(this, TreeTable);

        this.el = el;
        this.zone = zone;
        this.tableService = tableService;
        this.lazy = false;
        this.lazyLoadOnInit = true;
        this.first = 0;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenuSelectionMode = "separate";
        this.compareSelectionBy = 'deepEquals';
        this.loadingIcon = 'pi pi-spinner';
        this.showLoader = true;
        this.virtualScrollDelay = 150;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';

        this.rowTrackBy = function (index, item) {
          return item;
        };

        this.filters = {};
        this.filterDelay = 300;
        this.filterMode = 'lenient';
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = [];
        this._totalRecords = 0;
        this._sortOrder = 1;
        this.selectionKeys = {};
      }

      return _createClass(TreeTable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.lazy && this.lazyLoadOnInit) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
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

              case 'emptymessage':
                _this.emptyMessageTemplate = item.template;
                break;

              case 'paginatorleft':
                _this.paginatorLeftTemplate = item.template;
                break;

              case 'paginatorright':
                _this.paginatorRightTemplate = item.template;
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
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.value) {
            this._value = simpleChange.value.currentValue;

            if (!this.lazy) {
              this.totalRecords = this._value ? this._value.length : 0;
              if (this.sortMode == 'single' && this.sortField) this.sortSingle();else if (this.sortMode == 'multiple' && this.multiSortMeta) this.sortMultiple();else if (this.hasFilter()) //sort already filters
                this._filter();
            }

            this.updateSerializedValue();
            this.tableService.onUIUpdate(this.value);
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
        key: "updateSerializedValue",
        value: function updateSerializedValue() {
          this.serializedValue = [];
          if (this.paginator) this.serializePageNodes();else this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
        }
      }, {
        key: "serializeNodes",
        value: function serializeNodes(parent, nodes, level, visible) {
          if (nodes && nodes.length) {
            var _iterator = _createForOfIteratorHelper(nodes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var node = _step.value;
                node.parent = parent;
                var rowNode = {
                  node: node,
                  parent: parent,
                  level: level,
                  visible: visible && (parent ? parent.expanded : true)
                };
                this.serializedValue.push(rowNode);

                if (rowNode.visible && node.expanded) {
                  this.serializeNodes(node, node.children, level + 1, rowNode.visible);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }, {
        key: "serializePageNodes",
        value: function serializePageNodes() {
          var data = this.filteredNodes || this.value;
          this.serializedValue = [];

          if (data && data.length) {
            var first = this.lazy ? 0 : this.first;

            for (var i = first; i < first + this.rows; i++) {
              var node = data[i];

              if (node) {
                this.serializedValue.push({
                  node: node,
                  parent: null,
                  level: 0,
                  visible: true
                });
                this.serializeNodes(node, node.children, 1, true);
              }
            }
          }
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
              var _iterator2 = _createForOfIteratorHelper(this._selection),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var node = _step2.value;
                  this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey))] = 1;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else {
              this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(this._selection.data, this.dataKey))] = 1;
            }
          }
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          this.first = event.first;
          this.rows = event.rows;
          if (this.lazy) this.onLazyLoad.emit(this.createLazyLoadMetadata());else this.serializePageNodes();
          this.onPage.emit({
            first: this.first,
            rows: this.rows
          });
          this.tableService.onUIUpdate(this.value);

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

            if (this.resetPageOnSort && this.scrollable) {
              this.resetScrollTop();
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

                if (this.resetPageOnSort && this.scrollable) {
                  this.resetScrollTop();
                }
              } else {
                sortMeta.order = sortMeta.order * -1;
              }
            } else {
              if (!metaKey || !this.multiSortMeta) {
                this._multiSortMeta = [];

                if (this.resetPageOnSort && this.scrollable) {
                  this.resetScrollTop();
                }
              }

              this.multiSortMeta.push({
                field: event.field,
                order: this.defaultSortOrder
              });
            }

            this.sortMultiple();
          }
        }
      }, {
        key: "sortSingle",
        value: function sortSingle() {
          if (this.sortField && this.sortOrder) {
            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              this.sortNodes(this.value);

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
            this.updateSerializedValue();
          }
        }
      }, {
        key: "sortNodes",
        value: function sortNodes(nodes) {
          var _this2 = this;

          if (!nodes || nodes.length === 0) {
            return;
          }

          if (this.customSort) {
            this.sortFunction.emit({
              data: nodes,
              mode: this.sortMode,
              field: this.sortField,
              order: this.sortOrder
            });
          } else {
            nodes.sort(function (node1, node2) {
              var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node1.data, _this2.sortField);
              var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node2.data, _this2.sortField);
              var result = null;
              if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
                numeric: true
              });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
              return _this2.sortOrder * result;
            });
          }

          var _iterator3 = _createForOfIteratorHelper(nodes),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var node = _step3.value;
              this.sortNodes(node.children);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "sortMultiple",
        value: function sortMultiple() {
          if (this.multiSortMeta) {
            if (this.lazy) {
              this.onLazyLoad.emit(this.createLazyLoadMetadata());
            } else if (this.value) {
              this.sortMultipleNodes(this.value);

              if (this.hasFilter()) {
                this._filter();
              }
            }

            this.onSort.emit({
              multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
            this.updateSerializedValue();
          }
        }
      }, {
        key: "sortMultipleNodes",
        value: function sortMultipleNodes(nodes) {
          var _this3 = this;

          if (!nodes || nodes.length === 0) {
            return;
          }

          if (this.customSort) {
            this.sortFunction.emit({
              data: this.value,
              mode: this.sortMode,
              multiSortMeta: this.multiSortMeta
            });
          } else {
            nodes.sort(function (node1, node2) {
              return _this3.multisortField(node1, node2, _this3.multiSortMeta, 0);
            });
          }

          var _iterator4 = _createForOfIteratorHelper(nodes),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var node = _step4.value;
              this.sortMultipleNodes(node.children);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "multisortField",
        value: function multisortField(node1, node2, multiSortMeta, index) {
          var value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node1.data, multiSortMeta[index].field);
          var value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node2.data, multiSortMeta[index].field);
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;

          if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && value1 != value2) {
              return multiSortMeta[index].order * value1.localeCompare(value2, undefined, {
                numeric: true
              });
            }
          } else {
            result = value1 < value2 ? -1 : 1;
          }

          if (value1 == value2) {
            return multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, multiSortMeta, index + 1) : 0;
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
        key: "isEmpty",
        value: function isEmpty() {
          var data = this.filteredNodes || this.value;
          return data == null || data.length == 0;
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "onColumnResizeBegin",
        value: function onColumnResizeBegin(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft;
          event.preventDefault();
        }
      }, {
        key: "onColumnResize",
        value: function onColumnResize(event) {
          var containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement).left;
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
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
          var newColumnWidth = columnWidth + delta;
          var minWidth = column.style.minWidth || 15;

          if (columnWidth + delta > parseInt(minWidth)) {
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
                    var scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, '.ui-treetable-scrollable-body table');
                    var scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-header-table');
                    var scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(scrollableView, 'table.ui-treetable-scrollable-footer-table');
                    var resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);
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
              if (this.scrollable) {
                var _scrollableView = this.findParentScrollableView(column);

                var scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_scrollableView, '.ui-treetable-scrollable-body');

                var _scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_scrollableView, '.ui-treetable-scrollable-body table');

                var scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_scrollableView, '.ui-treetable-scrollable-header');
                var scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_scrollableView, '.ui-treetable-scrollable-footer');

                var _scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_scrollableView, 'table.ui-treetable-scrollable-header-table');

                var _scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_scrollableView, 'table.ui-treetable-scrollable-footer-table');

                _scrollableBodyTable.style.width = _scrollableBodyTable.offsetWidth + delta + 'px';
                _scrollableHeaderTable.style.width = _scrollableHeaderTable.offsetWidth + delta + 'px';

                if (_scrollableFooterTable) {
                  _scrollableFooterTable.style.width = _scrollableFooterTable.offsetWidth + delta + 'px';
                }

                var _resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(column);

                var scrollableBodyTableWidth = column ? _scrollableBodyTable.offsetWidth + delta : newColumnWidth;
                var scrollableHeaderTableWidth = column ? _scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
                var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;

                var setWidth = function setWidth(container, table, width, isContainerInViewport) {
                  if (container && table) {
                    container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                    table.style.width = width + 'px';
                  }
                };

                setWidth(scrollableBody, _scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
                setWidth(scrollableHeader, _scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
                setWidth(scrollableFooter, _scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
                this.resizeColGroup(_scrollableHeaderTable, _resizeColumnIndex, newColumnWidth, null);
                this.resizeColGroup(_scrollableBodyTable, _resizeColumnIndex, newColumnWidth, null);
                this.resizeColGroup(_scrollableFooterTable, _resizeColumnIndex, newColumnWidth, null);
              } else {
                this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                column.style.width = newColumnWidth + 'px';
                var containerWidth = this.tableViewChild.nativeElement.style.width;
                this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
              }
            }

            this.onColResize.emit({
              element: column,
              delta: delta
            });
          }

          this.resizeHelperViewChild.nativeElement.style.display = 'none';
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        }
      }, {
        key: "findParentScrollableView",
        value: function findParentScrollableView(column) {
          if (column) {
            var parent = column.parentElement;

            while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(parent, 'ui-treetable-scrollable-view')) {
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
          this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
          this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
          this.draggedColumn = columnElement;
          event.dataTransfer.setData('text', 'b'); // For firefox
        }
      }, {
        key: "onColumnDragEnter",
        value: function onColumnDragEnter(event, dropHeader) {
          if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOffset(dropHeader);

            if (this.draggedColumn != dropHeader) {
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

              this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
              this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
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
          event.preventDefault();

          if (this.draggedColumn) {
            var dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
            var dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].indexWithinGroup(dropColumn, 'ttreorderablecolumn');
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
              primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].reorderArray(this.columns, dragIndex, dropIndex);
              this.onColReorder.emit({
                dragIndex: dragIndex,
                dropIndex: dropIndex,
                columns: this.columns
              });
            }

            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
          }
        }
      }, {
        key: "handleRowClick",
        value: function handleRowClick(event) {
          var targetNode = event.originalEvent.target.nodeName;

          if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.originalEvent.target, 'ui-clickable')) {
            return;
          }

          if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            var rowNode = event.rowNode;
            var selected = this.isSelected(rowNode.node);
            var metaSelection = this.rowTouched ? false : this.metaKeySelection;
            var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(rowNode.node.data, this.dataKey)) : null;

            if (metaSelection) {
              var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;

              if (selected && metaKey) {
                if (this.isSingleSelectionMode()) {
                  this._selection = null;
                  this.selectionKeys = {};
                  this.selectionChange.emit(null);
                } else {
                  var selectionIndex = this.findIndexInSelection(rowNode.node);
                  this._selection = this.selection.filter(function (val, i) {
                    return i != selectionIndex;
                  });
                  this.selectionChange.emit(this.selection);

                  if (dataKeyValue) {
                    delete this.selectionKeys[dataKeyValue];
                  }
                }

                this.onNodeUnselect.emit({
                  originalEvent: event.originalEvent,
                  node: rowNode.node,
                  type: 'row'
                });
              } else {
                if (this.isSingleSelectionMode()) {
                  this._selection = rowNode.node;
                  this.selectionChange.emit(rowNode.node);

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

                  this._selection = [].concat(_toConsumableArray(this.selection), [rowNode.node]);
                  this.selectionChange.emit(this.selection);

                  if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                  }
                }

                this.onNodeSelect.emit({
                  originalEvent: event.originalEvent,
                  node: rowNode.node,
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
                  this.onNodeUnselect.emit({
                    originalEvent: event.originalEvent,
                    node: rowNode.node,
                    type: 'row'
                  });
                } else {
                  this._selection = rowNode.node;
                  this.selectionChange.emit(this.selection);
                  this.onNodeSelect.emit({
                    originalEvent: event.originalEvent,
                    node: rowNode.node,
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
                  var _selectionIndex = this.findIndexInSelection(rowNode.node);

                  this._selection = this.selection.filter(function (val, i) {
                    return i != _selectionIndex;
                  });
                  this.selectionChange.emit(this.selection);
                  this.onNodeUnselect.emit({
                    originalEvent: event.originalEvent,
                    node: rowNode.node,
                    type: 'row'
                  });

                  if (dataKeyValue) {
                    delete this.selectionKeys[dataKeyValue];
                  }
                } else {
                  this._selection = this.selection ? [].concat(_toConsumableArray(this.selection), [rowNode.node]) : [rowNode.node];
                  this.selectionChange.emit(this.selection);
                  this.onNodeSelect.emit({
                    originalEvent: event.originalEvent,
                    node: rowNode.node,
                    type: 'row',
                    index: event.rowIndex
                  });

                  if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                  }
                }
              }
            }

            this.tableService.onSelectionChange();
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
            var node = event.rowNode.node;

            if (this.contextMenuSelectionMode === 'separate') {
              this.contextMenuSelection = node;
              this.contextMenuSelectionChange.emit(node);
              this.onContextMenuSelect.emit({
                originalEvent: event.originalEvent,
                node: node
              });
              this.contextMenu.show(event.originalEvent);
              this.tableService.onContextMenu(node);
            } else if (this.contextMenuSelectionMode === 'joint') {
              this.preventSelectionSetterPropagation = true;
              var selected = this.isSelected(node);
              var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)) : null;

              if (!selected) {
                if (this.isSingleSelectionMode()) {
                  this.selection = node;
                  this.selectionChange.emit(node);
                } else if (this.isMultipleSelectionMode()) {
                  this.selection = [node];
                  this.selectionChange.emit(this.selection);
                }

                if (dataKeyValue) {
                  this.selectionKeys[dataKeyValue] = 1;
                }
              }

              this.contextMenu.show(event.originalEvent);
              this.onContextMenuSelect.emit({
                originalEvent: event.originalEvent,
                node: node
              });
            }
          }
        }
      }, {
        key: "toggleNodeWithCheckbox",
        value: function toggleNodeWithCheckbox(event) {
          this.selection = this.selection || [];
          this.preventSelectionSetterPropagation = true;
          var node = event.rowNode.node;
          var selected = this.isSelected(node);

          if (selected) {
            this.propagateSelectionDown(node, false);

            if (event.rowNode.parent) {
              this.propagateSelectionUp(node.parent, false);
            }

            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event,
              node: node
            });
          } else {
            this.propagateSelectionDown(node, true);

            if (event.rowNode.parent) {
              this.propagateSelectionUp(node.parent, true);
            }

            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event,
              node: node
            });
          }

          this.tableService.onSelectionChange();
        }
      }, {
        key: "toggleNodesWithCheckbox",
        value: function toggleNodesWithCheckbox(event, check) {
          var data = this.filteredNodes || this.value;
          this._selection = check && data ? data.slice() : [];

          if (check) {
            if (data && data.length) {
              var _iterator5 = _createForOfIteratorHelper(data),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var node = _step5.value;
                  this.propagateSelectionDown(node, true);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          } else {
            this._selection = [];
            this.selectionKeys = {};
          }

          this.preventSelectionSetterPropagation = true;
          this.selectionChange.emit(this._selection);
          this.tableService.onSelectionChange();
          this.onHeaderCheckboxToggle.emit({
            originalEvent: event,
            checked: check
          });
        }
      }, {
        key: "propagateSelectionUp",
        value: function propagateSelectionUp(node, select) {
          if (node.children && node.children.length) {
            var selectedChildCount = 0;
            var childPartialSelected = false;
            var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)) : null;

            var _iterator6 = _createForOfIteratorHelper(node.children),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var child = _step6.value;
                if (this.isSelected(child)) selectedChildCount++;else if (child.partialSelected) childPartialSelected = true;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            if (select && selectedChildCount == node.children.length) {
              this._selection = [].concat(_toConsumableArray(this.selection || []), [node]);
              node.partialSelected = false;

              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else {
              if (!select) {
                var index = this.findIndexInSelection(node);

                if (index >= 0) {
                  this._selection = this.selection.filter(function (val, i) {
                    return i != index;
                  });

                  if (dataKeyValue) {
                    delete this.selectionKeys[dataKeyValue];
                  }
                }
              }

              if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length) node.partialSelected = true;else node.partialSelected = false;
            }
          }

          var parent = node.parent;

          if (parent) {
            this.propagateSelectionUp(parent, select);
          }
        }
      }, {
        key: "propagateSelectionDown",
        value: function propagateSelectionDown(node, select) {
          var index = this.findIndexInSelection(node);
          var dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)) : null;

          if (select && index == -1) {
            this._selection = [].concat(_toConsumableArray(this.selection || []), [node]);

            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (!select && index > -1) {
            this._selection = this.selection.filter(function (val, i) {
              return i != index;
            });

            if (dataKeyValue) {
              delete this.selectionKeys[dataKeyValue];
            }
          }

          node.partialSelected = false;

          if (node.children && node.children.length) {
            var _iterator7 = _createForOfIteratorHelper(node.children),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var child = _step7.value;
                this.propagateSelectionDown(child, select);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }
      }, {
        key: "isSelected",
        value: function isSelected(node) {
          if (node && this.selection) {
            if (this.dataKey) {
              return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, this.dataKey)] !== undefined;
            } else {
              if (this.selection instanceof Array) return this.findIndexInSelection(node) > -1;else return this.equals(node, this.selection);
            }
          }

          return false;
        }
      }, {
        key: "findIndexInSelection",
        value: function findIndexInSelection(node) {
          var index = -1;

          if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
              if (this.equals(node, this.selection[i])) {
                index = i;
                break;
              }
            }
          }

          return index;
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
        key: "equals",
        value: function equals(node1, node2) {
          return this.compareSelectionBy === 'equals' ? node1 === node2 : primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].equals(node1.data, node2.data, this.dataKey);
        }
      }, {
        key: "filter",
        value: function filter(value, field, matchMode) {
          var _this4 = this;

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
            _this4._filter();

            _this4.filterTimeout = null;
          }, this.filterDelay);
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
          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            if (!this.value) {
              return;
            }

            if (!this.hasFilter()) {
              this.filteredNodes = null;

              if (this.paginator) {
                this.totalRecords = this.value ? this.value.length : 0;
              }
            } else {
              var globalFilterFieldsArray;

              if (this.filters['global']) {
                if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
              }

              this.filteredNodes = [];
              var isStrictMode = this.filterMode === 'strict';
              var isValueChanged = false;

              var _iterator8 = _createForOfIteratorHelper(this.value),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var node = _step8.value;
                  var copyNode = Object.assign({}, node);
                  var localMatch = true;
                  var globalMatch = false;
                  var paramsWithoutNode = void 0;

                  for (var prop in this.filters) {
                    if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                      var filterMeta = this.filters[prop];
                      var filterField = prop;
                      var filterValue = filterMeta.value;
                      var filterMatchMode = filterMeta.matchMode || 'startsWith';
                      var filterConstraint = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"][filterMatchMode];
                      paramsWithoutNode = {
                        filterField: filterField,
                        filterValue: filterValue,
                        filterConstraint: filterConstraint,
                        isStrictMode: isStrictMode
                      };

                      if (isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                        localMatch = false;
                      }

                      if (!localMatch) {
                        break;
                      }
                    }
                  }

                  if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                    for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                      var copyNodeForGlobal = Object.assign({}, copyNode);

                      var _filterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];

                      var _filterValue = this.filters['global'].value;
                      var _filterConstraint = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["FilterUtils"][this.filters['global'].matchMode];
                      paramsWithoutNode = {
                        filterField: _filterField,
                        filterValue: _filterValue,
                        filterConstraint: _filterConstraint,
                        isStrictMode: isStrictMode
                      };

                      if (isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode))) {
                        globalMatch = true;
                        copyNode = copyNodeForGlobal;
                      }
                    }
                  }

                  var matches = localMatch;

                  if (this.filters['global']) {
                    matches = localMatch && globalMatch;
                  }

                  if (matches) {
                    this.filteredNodes.push(copyNode);
                  }

                  isValueChanged = isValueChanged || !localMatch || globalMatch || localMatch && this.filteredNodes.length > 0 || !globalMatch && this.filteredNodes.length === 0;
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              if (!isValueChanged) {
                this.filteredNodes = null;
              }

              if (this.paginator) {
                this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
              }
            }
          }

          this.first = 0;
          var filteredValue = this.filteredNodes || this.value;
          this.onFilter.emit({
            filters: this.filters,
            filteredValue: filteredValue
          });
          this.tableService.onUIUpdate(filteredValue);
          this.updateSerializedValue();

          if (this.scrollable) {
            this.resetScrollTop();
          }
        }
      }, {
        key: "findFilteredNodes",
        value: function findFilteredNodes(node, paramsWithoutNode) {
          if (node) {
            var matched = false;

            if (node.children) {
              var childNodes = _toConsumableArray(node.children);

              node.children = [];

              var _iterator9 = _createForOfIteratorHelper(childNodes),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var childNode = _step9.value;
                  var copyChildNode = Object.assign({}, childNode);

                  if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                    matched = true;
                    node.children.push(copyChildNode);
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            if (matched) {
              return true;
            }
          }
        }
      }, {
        key: "isFilterMatched",
        value: function isFilterMatched(node, _ref) {
          var filterField = _ref.filterField,
              filterValue = _ref.filterValue,
              filterConstraint = _ref.filterConstraint,
              isStrictMode = _ref.isStrictMode;
          var matched = false;
          var dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].resolveFieldData(node.data, filterField);

          if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
            matched = true;
          }

          if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
            matched = this.findFilteredNodes(node, {
              filterField: filterField,
              filterValue: filterValue,
              filterConstraint: filterConstraint,
              isStrictMode: isStrictMode
            }) || matched;
          }

          return matched;
        }
      }, {
        key: "isNodeLeaf",
        value: function isNodeLeaf(node) {
          return node.leaf === false ? false : !(node.children && node.children.length);
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
        key: "reset",
        value: function reset() {
          this._sortField = null;
          this._sortOrder = 1;
          this._multiSortMeta = null;
          this.tableService.onSort(null);
          this.filteredNodes = null;
          this.filters = {};
          this.first = 0;

          if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
          } else {
            this.totalRecords = this._value ? this._value.length : 0;
          }
        }
      }, {
        key: "updateEditingCell",
        value: function updateEditingCell(cell) {
          this.editingCell = cell;
          this.bindDocumentEditListener();
        }
      }, {
        key: "isEditingCellValid",
        value: function isEditingCellValid() {
          return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
        }
      }, {
        key: "bindDocumentEditListener",
        value: function bindDocumentEditListener() {
          var _this5 = this;

          if (!this.documentEditListener) {
            this.documentEditListener = function (event) {
              if (_this5.editingCell && !_this5.editingCellClick && _this5.isEditingCellValid()) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(_this5.editingCell, 'ui-editing-cell');
                _this5.editingCell = null;

                _this5.unbindDocumentEditListener();
              }

              _this5.editingCellClick = false;
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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindDocumentEditListener();
          this.editingCell = null;
          this.initialized = null;
        }
      }]);
    }();

    TreeTable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: TreeTableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TreeTable.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "tableStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "tableStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "autoLayout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "lazyLoadOnInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "first", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "pageLinks", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TreeTable.prototype, "rowsPerPageOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "alwaysShowPaginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "paginatorPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "paginatorDropdownAppendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "currentPageReportTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "showCurrentPageReport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "defaultSortOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "sortMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "resetPageOnSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "customSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "selectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "selectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "contextMenuSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "contextMenuSelectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "contextMenuSelectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "dataKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "metaKeySelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "compareSelectionBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "rowHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "loadingIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "showLoader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "scrollable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "scrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "virtualScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "virtualScrollDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "virtualRowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "minBufferPx", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "maxBufferPx", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "frozenWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TreeTable.prototype, "frozenColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "resizableColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "columnResizeMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TreeTable.prototype, "reorderableColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "contextMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TreeTable.prototype, "rowTrackBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "filters", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TreeTable.prototype, "globalFilterFields", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], TreeTable.prototype, "filterDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "filterMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TreeTable.prototype, "filterLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onNodeExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onNodeCollapse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onLazyLoad", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "sortFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onColResize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onColReorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onNodeSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onNodeUnselect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onContextMenuSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onHeaderCheckboxToggle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onEditInit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onEditComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TreeTable.prototype, "onEditCancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TreeTable.prototype, "containerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resizeHelper'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TreeTable.prototype, "resizeHelperViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderIndicatorUp'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TreeTable.prototype, "reorderIndicatorUpViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reorderIndicatorDown'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TreeTable.prototype, "reorderIndicatorDownViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TreeTable.prototype, "tableViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollableView'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "scrollableViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollableFrozenView'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTable.prototype, "scrollableFrozenViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TreeTable.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TreeTable.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], TreeTable.prototype, "totalRecords", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TreeTable.prototype, "sortField", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], TreeTable.prototype, "sortOrder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TreeTable.prototype, "multiSortMeta", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], TreeTable.prototype, "selection", null);
    TreeTable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-treeTable',
      template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n                [ngClass]=\"{'ui-treetable ui-widget': true, 'ui-treetable-auto-layout': autoLayout, 'ui-treetable-hoverable-rows': (rowHover||(selectionMode === 'single' || selectionMode === 'multiple')),\n                'ui-treetable-resizable': resizableColumns, 'ui-treetable-resizable-fit': (resizableColumns && columnResizeMode === 'fit'), 'ui-treetable-flex-scrollable': (scrollable && scrollHeight === 'flex')}\">\n            <div class=\"ui-treetable-loading ui-widget-overlay\" *ngIf=\"loading && showLoader\"></div>\n            <div class=\"ui-treetable-loading-content\" *ngIf=\"loading && showLoader\">\n                <i [class]=\"'ui-treetable-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-treetable-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n\n            <div class=\"ui-treetable-wrapper\" *ngIf=\"!scrollable\">\n                <table #table class=\"ui-treetable-table\" [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-treetable-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tfoot class=\"ui-treetable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                    <tbody class=\"ui-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                </table>\n            </div>\n\n            <div class=\"ui-treetable-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-treetable-scrollable-view ui-treetable-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" #scrollableFrozenView [ttScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"ui-treetable-scrollable-view\" #scrollableView [ttScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\"></p-paginator>\n            <div *ngIf=\"summaryTemplate\" class=\"ui-treetable-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down ui-table-reorder-indicator-up\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up ui-table-reorder-indicator-down\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
      providers: [TreeTableService],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], TreeTableService])], TreeTable);

    var TTBody = /*#__PURE__*/_createClass(function TTBody(tt) {
      _classCallCheck(this, TTBody);

      this.tt = tt;
    });

    TTBody.ctorParameters = function () {
      return [{
        type: TreeTable
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pTreeTableBody"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TTBody.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("pTreeTableBodyTemplate"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], TTBody.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTBody.prototype, "frozen", void 0);
    TTBody = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[pTreeTableBody]',
      template: "\n        <ng-container *ngIf=\"!tt.virtualScroll\">\n            <ng-template ngFor let-serializedNode let-rowIndex=\"index\" [ngForOf]=\"tt.serializedValue\" [ngForTrackBy]=\"tt.rowTrackBy\">\n                <ng-container *ngIf=\"serializedNode.visible\">\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"tt.virtualScroll\">\n            <ng-template cdkVirtualFor let-serializedNode let-rowIndex=\"index\" [cdkVirtualForOf]=\"tt.serializedValue\" [cdkVirtualForTrackBy]=\"tt.rowTrackBy\">\n                <ng-container *ngIf=\"serializedNode.visible\">\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"tt.isEmpty()\">\n            <ng-container *ngTemplateOutlet=\"tt.emptyMessageTemplate; context: {$implicit: columns}\"></ng-container>\n        </ng-container>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable])], TTBody);

    var TTScrollableView = /*#__PURE__*/function () {
      function TTScrollableView(tt, el, zone) {
        var _this6 = this;

        _classCallCheck(this, TTScrollableView);

        this.tt = tt;
        this.el = el;
        this.zone = zone;
        this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(function () {
          _this6.zone.runOutsideAngular(function () {
            setTimeout(function () {
              _this6.alignScrollBar();

              _this6.initialized = true;
            }, 50);
          });
        });
        this.initialized = false;
      }

      return _createClass(TTScrollableView, [{
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
            if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-treetable-unfrozen-view');
            }

            var frozenView = this.el.nativeElement.previousElementSibling;

            if (frozenView) {
              if (this.tt.virtualScroll) this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-treetable-virtual-scrollable-body');else this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(frozenView, '.ui-treetable-scrollable-body');
            }
          } else {
            if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
              this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarHeight() + 'px';
            }
          }

          this.bindEvents();
          this.alignScrollBar();
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this7 = this;

          this.zone.runOutsideAngular(function () {
            var scrollBarWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth();

            if (_this7.scrollHeaderViewChild && _this7.scrollHeaderViewChild.nativeElement) {
              _this7.headerScrollListener = _this7.onHeaderScroll.bind(_this7);

              _this7.scrollHeaderBoxViewChild.nativeElement.addEventListener('scroll', _this7.headerScrollListener);
            }

            if (_this7.scrollFooterViewChild && _this7.scrollFooterViewChild.nativeElement) {
              _this7.footerScrollListener = _this7.onFooterScroll.bind(_this7);

              _this7.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this7.footerScrollListener);
            }

            if (!_this7.frozen) {
              _this7.bodyScrollListener = _this7.onBodyScroll.bind(_this7);
              if (_this7.tt.virtualScroll) _this7.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', _this7.bodyScrollListener);else _this7.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this7.bodyScrollListener);
            }
          });
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
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
          if (this.tt.virtualScroll) return this.virtualScrollBody.getDataLength() * this.tt.virtualRowHeight > this.virtualScrollBody.getViewportSize();else return primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollTableViewChild.nativeElement) > primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getOuterHeight(this.scrollBodyViewChild.nativeElement);
        }
      }, {
        key: "alignScrollBar",
        value: function alignScrollBar() {
          if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';

            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
              this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
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

    TTScrollableView.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttScrollableView"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TTScrollableView.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTScrollableView.prototype, "frozen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollHeader'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollHeaderViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollHeaderBox'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollBody'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollBodyViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollTable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollTableViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loadingTable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollLoadingTableViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFooter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollFooterViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFooterBox'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollableAligner'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTScrollableView.prototype, "scrollableAlignerViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"])], TTScrollableView.prototype, "virtualScrollBody", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TTScrollableView.prototype, "scrollHeight", null);
    TTScrollableView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[ttScrollableView]',
      template: "\n        <div #scrollHeader class=\"ui-treetable-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-treetable-scrollable-header-box\">\n                <table class=\"ui-treetable-scrollable-header-table\" [ngClass]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-treetable-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenHeaderTemplate||tt.headerTemplate : tt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                </table>\n            </div>\n        </div>\n        <ng-container *ngIf=\"!tt.virtualScroll; else virtualScrollTemplate\">\n            <div #scrollBody class=\"ui-treetable-scrollable-body\" [ngStyle]=\"{'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined}\">\n                <table #scrollTable [class]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </div>\n        </ng-container>\n        <ng-template #virtualScrollTemplate>\n            <cdk-virtual-scroll-viewport [itemSize]=\"tt.virtualRowHeight\" [style.height]=\"tt.scrollHeight !== 'flex' ? scrollHeight : undefined\" \n                    [minBufferPx]=\"tt.minBufferPx\" [maxBufferPx]=\"tt.maxBufferPx\" class=\"ui-treetable-virtual-scrollable-body\">\n                <table #scrollTable [class]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"ui-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </cdk-virtual-scroll-viewport>\n        </ng-template>\n        <div #scrollFooter *ngIf=\"tt.footerTemplate\" class=\"ui-treetable-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-treetable-scrollable-footer-box\">\n                <table class=\"ui-treetable-scrollable-footer-table\" [ngClass]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-treetable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenFooterTemplate||tt.footerTemplate : tt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], TTScrollableView);

    var TTSortableColumn = /*#__PURE__*/function () {
      function TTSortableColumn(tt) {
        var _this8 = this;

        _classCallCheck(this, TTSortableColumn);

        this.tt = tt;

        if (this.isEnabled()) {
          this.subscription = this.tt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this8.updateSortState();
          });
        }
      }

      return _createClass(TTSortableColumn, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.updateSortState();
          }
        }
      }, {
        key: "updateSortState",
        value: function updateSortState() {
          this.sorted = this.tt.isSorted(this.field);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.updateSortState();
            this.tt.sort({
              originalEvent: event,
              field: this.field
            });
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
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
          return this.ttSortableColumnDisabled !== true;
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

    TTSortableColumn.ctorParameters = function () {
      return [{
        type: TreeTable
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttSortableColumn"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TTSortableColumn.prototype, "field", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTSortableColumn.prototype, "ttSortableColumnDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTSortableColumn.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTSortableColumn.prototype, "onEnterKey", null);
    TTSortableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttSortableColumn]',
      host: {
        '[class.ui-sortable-column]': 'isEnabled()',
        '[class.ui-state-highlight]': 'sorted',
        '[attr.tabindex]': 'isEnabled() ? "0" : null'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable])], TTSortableColumn);

    var TTSortIcon = /*#__PURE__*/function () {
      function TTSortIcon(tt) {
        var _this9 = this;

        _classCallCheck(this, TTSortIcon);

        this.tt = tt;
        this.subscription = this.tt.tableService.sortSource$.subscribe(function (sortMeta) {
          _this9.updateSortState();
        });
      }

      return _createClass(TTSortIcon, [{
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
          if (this.tt.sortMode === 'single') {
            this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
          } else if (this.tt.sortMode === 'multiple') {
            var sortMeta = this.tt.getSortMeta(this.field);
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

    TTSortIcon.ctorParameters = function () {
      return [{
        type: TreeTable
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TTSortIcon.prototype, "field", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TTSortIcon.prototype, "ariaLabelDesc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TTSortIcon.prototype, "ariaLabelAsc", void 0);
    TTSortIcon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-treeTableSortIcon',
      template: "\n        <i class=\"ui-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}\"></i>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable])], TTSortIcon);

    var TTResizableColumn = /*#__PURE__*/function () {
      function TTResizableColumn(tt, el, zone) {
        _classCallCheck(this, TTResizableColumn);

        this.tt = tt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(TTResizableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this10 = this;

          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
              _this10.resizerMouseDownListener = _this10.onMouseDown.bind(_this10);

              _this10.resizer.addEventListener('mousedown', _this10.resizerMouseDownListener);
            });
          }
        }
      }, {
        key: "bindDocumentEvents",
        value: function bindDocumentEvents() {
          var _this11 = this;

          this.zone.runOutsideAngular(function () {
            _this11.documentMouseMoveListener = _this11.onDocumentMouseMove.bind(_this11);
            document.addEventListener('mousemove', _this11.documentMouseMoveListener);
            _this11.documentMouseUpListener = _this11.onDocumentMouseUp.bind(_this11);
            document.addEventListener('mouseup', _this11.documentMouseUpListener);
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
          this.tt.onColumnResizeBegin(event);
          this.bindDocumentEvents();
        }
      }, {
        key: "onDocumentMouseMove",
        value: function onDocumentMouseMove(event) {
          this.tt.onColumnResize(event);
        }
      }, {
        key: "onDocumentMouseUp",
        value: function onDocumentMouseUp(event) {
          this.tt.onColumnResizeEnd(event, this.el.nativeElement);
          this.unbindDocumentEvents();
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.ttResizableColumnDisabled !== true;
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

    TTResizableColumn.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTResizableColumn.prototype, "ttResizableColumnDisabled", void 0);
    TTResizableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttResizableColumn]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], TTResizableColumn);

    var TTReorderableColumn = /*#__PURE__*/function () {
      function TTReorderableColumn(tt, el, zone) {
        _classCallCheck(this, TTReorderableColumn);

        this.tt = tt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(TTReorderableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            this.bindEvents();
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          var _this12 = this;

          this.zone.runOutsideAngular(function () {
            _this12.mouseDownListener = _this12.onMouseDown.bind(_this12);

            _this12.el.nativeElement.addEventListener('mousedown', _this12.mouseDownListener);

            _this12.dragStartListener = _this12.onDragStart.bind(_this12);

            _this12.el.nativeElement.addEventListener('dragstart', _this12.dragStartListener);

            _this12.dragOverListener = _this12.onDragEnter.bind(_this12);

            _this12.el.nativeElement.addEventListener('dragover', _this12.dragOverListener);

            _this12.dragEnterListener = _this12.onDragEnter.bind(_this12);

            _this12.el.nativeElement.addEventListener('dragenter', _this12.dragEnterListener);

            _this12.dragLeaveListener = _this12.onDragLeave.bind(_this12);

            _this12.el.nativeElement.addEventListener('dragleave', _this12.dragLeaveListener);
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
          if (event.target.nodeName === 'INPUT' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(event.target, 'ui-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
        }
      }, {
        key: "onDragStart",
        value: function onDragStart(event) {
          this.tt.onColumnDragStart(event, this.el.nativeElement);
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          event.preventDefault();
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(event) {
          this.tt.onColumnDragEnter(event, this.el.nativeElement);
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.tt.onColumnDragLeave(event);
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (this.isEnabled()) {
            this.tt.onColumnDrop(event, this.el.nativeElement);
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.ttReorderableColumnDisabled !== true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindEvents();
        }
      }]);
    }();

    TTReorderableColumn.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTReorderableColumn.prototype, "ttReorderableColumnDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTReorderableColumn.prototype, "onDrop", null);
    TTReorderableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttReorderableColumn]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], TTReorderableColumn);

    var TTSelectableRow = /*#__PURE__*/function () {
      function TTSelectableRow(tt, tableService) {
        var _this13 = this;

        _classCallCheck(this, TTSelectableRow);

        this.tt = tt;
        this.tableService = tableService;

        if (this.isEnabled()) {
          this.subscription = this.tt.tableService.selectionSource$.subscribe(function () {
            _this13.selected = _this13.tt.isSelected(_this13.rowNode.node);
          });
        }
      }

      return _createClass(TTSelectableRow, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.tt.handleRowClick({
              originalEvent: event,
              rowNode: this.rowNode
            });
          }
        }
      }, {
        key: "onEnterKey",
        value: function onEnterKey(event) {
          if (event.which === 13) {
            this.onClick(event);
          }
        }
      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.isEnabled()) {
            this.tt.handleRowTouchEnd(event);
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.ttSelectableRowDisabled !== true;
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

    TTSelectableRow.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: TreeTableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttSelectableRow"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TTSelectableRow.prototype, "rowNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTSelectableRow.prototype, "ttSelectableRowDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTSelectableRow.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTSelectableRow.prototype, "onEnterKey", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTSelectableRow.prototype, "onTouchEnd", null);
    TTSelectableRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttSelectableRow]',
      host: {
        '[class.ui-state-highlight]': 'selected'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, TreeTableService])], TTSelectableRow);

    var TTSelectableRowDblClick = /*#__PURE__*/function () {
      function TTSelectableRowDblClick(tt, tableService) {
        var _this14 = this;

        _classCallCheck(this, TTSelectableRowDblClick);

        this.tt = tt;
        this.tableService = tableService;

        if (this.isEnabled()) {
          this.subscription = this.tt.tableService.selectionSource$.subscribe(function () {
            _this14.selected = _this14.tt.isSelected(_this14.rowNode.node);
          });
        }
      }

      return _createClass(TTSelectableRowDblClick, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isEnabled()) {
            this.selected = this.tt.isSelected(this.rowNode.node);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.tt.handleRowClick({
              originalEvent: event,
              rowNode: this.rowNode
            });
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.ttSelectableRowDisabled !== true;
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

    TTSelectableRowDblClick.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: TreeTableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttSelectableRowDblClick"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TTSelectableRowDblClick.prototype, "rowNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTSelectableRowDblClick.prototype, "ttSelectableRowDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTSelectableRowDblClick.prototype, "onClick", null);
    TTSelectableRowDblClick = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttSelectableRowDblClick]',
      host: {
        '[class.ui-state-highlight]': 'selected'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, TreeTableService])], TTSelectableRowDblClick);

    var TTContextMenuRow = /*#__PURE__*/function () {
      function TTContextMenuRow(tt, tableService, el) {
        var _this15 = this;

        _classCallCheck(this, TTContextMenuRow);

        this.tt = tt;
        this.tableService = tableService;
        this.el = el;

        if (this.isEnabled()) {
          this.subscription = this.tt.tableService.contextMenuSource$.subscribe(function (node) {
            _this15.selected = _this15.tt.equals(_this15.rowNode.node, node);
          });
        }
      }

      return _createClass(TTContextMenuRow, [{
        key: "onContextMenu",
        value: function onContextMenu(event) {
          if (this.isEnabled()) {
            this.tt.handleRowRightClick({
              originalEvent: event,
              rowNode: this.rowNode
            });
            this.el.nativeElement.focus();
            event.preventDefault();
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.ttContextMenuRowDisabled !== true;
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

    TTContextMenuRow.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: TreeTableService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttContextMenuRow"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TTContextMenuRow.prototype, "rowNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTContextMenuRow.prototype, "ttContextMenuRowDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTContextMenuRow.prototype, "onContextMenu", null);
    TTContextMenuRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttContextMenuRow]',
      host: {
        '[class.ui-contextmenu-selected]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, TreeTableService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], TTContextMenuRow);

    var TTCheckbox = /*#__PURE__*/function () {
      function TTCheckbox(tt, tableService) {
        var _this16 = this;

        _classCallCheck(this, TTCheckbox);

        this.tt = tt;
        this.tableService = tableService;
        this.subscription = this.tt.tableService.selectionSource$.subscribe(function () {
          _this16.checked = _this16.tt.isSelected(_this16.rowNode.node);
        });
      }

      return _createClass(TTCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.tt.isSelected(this.rowNode.node);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disabled) {
            this.tt.toggleNodeWithCheckbox({
              originalEvent: event,
              rowNode: this.rowNode
            });
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
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

    TTCheckbox.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: TreeTableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTCheckbox.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("value"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TTCheckbox.prototype, "rowNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('box'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTCheckbox.prototype, "boxViewChild", void 0);
    TTCheckbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-treeTableCheckbox',
      template: "\n        <div class=\"ui-chkbox ui-treetable-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\"  role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable pi\" [ngClass]=\"{'pi-check':checked, 'pi-minus': rowNode.node.partialSelected}\"></span>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, TreeTableService])], TTCheckbox);

    var TTHeaderCheckbox = /*#__PURE__*/function () {
      function TTHeaderCheckbox(tt, tableService) {
        var _this17 = this;

        _classCallCheck(this, TTHeaderCheckbox);

        this.tt = tt;
        this.tableService = tableService;
        this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(function () {
          _this17.checked = _this17.updateCheckedState();
        });
        this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(function () {
          _this17.checked = _this17.updateCheckedState();
        });
      }

      return _createClass(TTHeaderCheckbox, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checked = this.updateCheckedState();
        }
      }, {
        key: "onClick",
        value: function onClick(event, checked) {
          if (this.tt.value && this.tt.value.length > 0) {
            this.tt.toggleNodesWithCheckbox(event, !checked);
          }

          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].clearSelection();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
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
          var checked;
          var data = this.tt.filteredNodes || this.tt.value;

          if (data) {
            var _iterator10 = _createForOfIteratorHelper(data),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var node = _step10.value;

                if (this.tt.isSelected(node)) {
                  checked = true;
                } else {
                  checked = false;
                  break;
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          } else {
            checked = false;
          }

          return checked;
        }
      }]);
    }();

    TTHeaderCheckbox.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: TreeTableService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('box'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], TTHeaderCheckbox.prototype, "boxViewChild", void 0);
    TTHeaderCheckbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-treeTableHeaderCheckbox',
      template: "\n        <div class=\"ui-chkbox ui-treetable-header-chkbox ui-widget\" (click)=\"onClick($event, cb.checked)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"!tt.value||tt.value.length === 0\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': (!tt.value || tt.value.length === 0)}\"  role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, TreeTableService])], TTHeaderCheckbox);

    var TTEditableColumn = /*#__PURE__*/function () {
      function TTEditableColumn(tt, el, zone) {
        _classCallCheck(this, TTEditableColumn);

        this.tt = tt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(TTEditableColumn, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.isEnabled()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editable-column');
          }
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (this.isEnabled()) {
            this.tt.editingCellClick = true;

            if (this.tt.editingCell) {
              if (this.tt.editingCell !== this.el.nativeElement) {
                if (!this.tt.isEditingCellValid()) {
                  return;
                }

                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
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
          var _this18 = this;

          this.tt.updateEditingCell(this.el.nativeElement);
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.el.nativeElement, 'ui-editing-cell');
          this.tt.onEditInit.emit({
            field: this.field,
            data: this.data
          });
          this.zone.runOutsideAngular(function () {
            setTimeout(function () {
              var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_this18.el.nativeElement, 'input, textarea');

              if (focusable) {
                focusable.focus();
              }
            }, 50);
          });
        }
      }, {
        key: "closeEditingCell",
        value: function closeEditingCell() {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
          this.tt.editingCell = null;
          this.tt.unbindDocumentEditListener();
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          if (this.isEnabled()) {
            //enter
            if (event.keyCode == 13) {
              if (this.tt.isEditingCellValid()) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
                this.closeEditingCell();
                this.tt.onEditComplete.emit({
                  field: this.field,
                  data: this.data
                });
              }

              event.preventDefault();
            } //escape
            else if (event.keyCode == 27) {
              if (this.tt.isEditingCellValid()) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.tt.editingCell, 'ui-editing-cell');
                this.closeEditingCell();
                this.tt.onEditCancel.emit({
                  field: this.field,
                  data: this.data
                });
              }

              event.preventDefault();
            } //tab
            else if (event.keyCode == 9) {
              this.tt.onEditComplete.emit({
                field: this.field,
                data: this.data
              });
              if (event.shiftKey) this.moveToPreviousCell(event);else this.moveToNextCell(event);
            }
          }
        }
      }, {
        key: "findCell",
        value: function findCell(element) {
          if (element) {
            var cell = element;

            while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(cell, 'ui-editing-cell')) {
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
          var row = currentCell.parentElement;
          var targetCell = this.findPreviousEditableColumn(currentCell);

          if (targetCell) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
          }
        }
      }, {
        key: "moveToNextCell",
        value: function moveToNextCell(event) {
          var currentCell = this.findCell(event.target);
          var row = currentCell.parentElement;
          var targetCell = this.findNextEditableColumn(currentCell);

          if (targetCell) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].invokeElementMethod(targetCell, 'click');
            event.preventDefault();
          }
        }
      }, {
        key: "findPreviousEditableColumn",
        value: function findPreviousEditableColumn(cell) {
          var prevCell = cell.previousElementSibling;

          if (!prevCell) {
            var previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;

            if (previousRow) {
              prevCell = previousRow.lastElementChild;
            }
          }

          if (prevCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(prevCell, 'ui-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
          } else {
            return null;
          }
        }
      }, {
        key: "findNextEditableColumn",
        value: function findNextEditableColumn(cell) {
          var nextCell = cell.nextElementSibling;

          if (!nextCell) {
            var nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;

            if (nextRow) {
              nextCell = nextRow.firstElementChild;
            }
          }

          if (nextCell) {
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].hasClass(nextCell, 'ui-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
          } else {
            return null;
          }
        }
      }, {
        key: "isEnabled",
        value: function isEnabled() {
          return this.ttEditableColumnDisabled !== true;
        }
      }]);
    }();

    TTEditableColumn.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttEditableColumn"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TTEditableColumn.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ttEditableColumnField"), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TTEditableColumn.prototype, "field", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TTEditableColumn.prototype, "ttEditableColumnDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTEditableColumn.prototype, "onClick", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTEditableColumn.prototype, "onKeyDown", null);
    TTEditableColumn = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttEditableColumn]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], TTEditableColumn);

    var TreeTableCellEditor = /*#__PURE__*/function () {
      function TreeTableCellEditor(tt, editableColumn) {
        _classCallCheck(this, TreeTableCellEditor);

        this.tt = tt;
        this.editableColumn = editableColumn;
      }

      return _createClass(TreeTableCellEditor, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this19 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'input':
                _this19.inputTemplate = item.template;
                break;

              case 'output':
                _this19.outputTemplate = item.template;
                break;
            }
          });
        }
      }]);
    }();

    TreeTableCellEditor.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: TTEditableColumn
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], TreeTableCellEditor.prototype, "templates", void 0);
    TreeTableCellEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-treeTableCellEditor',
      template: "\n        <ng-container *ngIf=\"tt.editingCell === editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, TTEditableColumn])], TreeTableCellEditor);

    var TTRow = /*#__PURE__*/function () {
      function TTRow(tt, el, zone) {
        _classCallCheck(this, TTRow);

        this.tt = tt;
        this.el = el;
        this.zone = zone;
      }

      return _createClass(TTRow, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          switch (event.which) {
            //down arrow
            case 40:
              var nextRow = this.el.nativeElement.nextElementSibling;

              if (nextRow) {
                nextRow.focus();
              }

              event.preventDefault();
              break;
            //down arrow

            case 38:
              var prevRow = this.el.nativeElement.previousElementSibling;

              if (prevRow) {
                prevRow.focus();
              }

              event.preventDefault();
              break;
            //left arrow

            case 37:
              if (this.rowNode.node.expanded) {
                this.tt.toggleRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(this.el.nativeElement);
                this.rowNode.node.expanded = false;
                this.tt.onNodeCollapse.emit({
                  originalEvent: event,
                  node: this.rowNode.node
                });
                this.tt.updateSerializedValue();
                this.tt.tableService.onUIUpdate(this.tt.value);
                this.restoreFocus();
              }

              break;
            //right arrow

            case 39:
              if (!this.rowNode.node.expanded) {
                this.tt.toggleRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].index(this.el.nativeElement);
                this.rowNode.node.expanded = true;
                this.tt.onNodeExpand.emit({
                  originalEvent: event,
                  node: this.rowNode.node
                });
                this.tt.updateSerializedValue();
                this.tt.tableService.onUIUpdate(this.tt.value);
                this.restoreFocus();
              }

              break;
          }
        }
      }, {
        key: "restoreFocus",
        value: function restoreFocus() {
          var _this20 = this;

          this.zone.runOutsideAngular(function () {
            setTimeout(function () {
              var row = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].findSingle(_this20.tt.containerViewChild.nativeElement, '.ui-treetable-tbody').children[_this20.tt.toggleRowIndex];

              if (row) {
                row.focus();
              }
            }, 25);
          });
        }
      }]);
    }();

    TTRow.ctorParameters = function () {
      return [{
        type: TreeTable
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ttRow'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TTRow.prototype, "rowNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TTRow.prototype, "onKeyDown", null);
    TTRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ttRow]',
      host: {
        '[attr.tabindex]': '"0"'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], TTRow);

    var TreeTableToggler = /*#__PURE__*/function () {
      function TreeTableToggler(tt) {
        _classCallCheck(this, TreeTableToggler);

        this.tt = tt;
      }

      return _createClass(TreeTableToggler, [{
        key: "onClick",
        value: function onClick(event) {
          this.rowNode.node.expanded = !this.rowNode.node.expanded;

          if (this.rowNode.node.expanded) {
            this.tt.onNodeExpand.emit({
              originalEvent: event,
              node: this.rowNode.node
            });
          } else {
            this.tt.onNodeCollapse.emit({
              originalEvent: event,
              node: this.rowNode.node
            });
          }

          this.tt.updateSerializedValue();
          this.tt.tableService.onUIUpdate(this.tt.value);
          event.preventDefault();
        }
      }]);
    }();

    TreeTableToggler.ctorParameters = function () {
      return [{
        type: TreeTable
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TreeTableToggler.prototype, "rowNode", void 0);
    TreeTableToggler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-treeTableToggler',
      template: "\n        <a class=\"ui-treetable-toggler ui-unselectable-text\" (click)=\"onClick($event)\"\n            [style.visibility]=\"rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'\" [style.marginLeft]=\"rowNode.level * 16 + 'px'\">\n            <i [ngClass]=\"rowNode.node.expanded ? 'pi pi-fw pi-chevron-down' : 'pi pi-fw pi-chevron-right'\"></i>\n        </a>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TreeTable])], TreeTableToggler);

    var TreeTableModule = /*#__PURE__*/_createClass(function TreeTableModule() {
      _classCallCheck(this, TreeTableModule);
    });

    TreeTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]],
      exports: [TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]],
      declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]
    })], TreeTableModule);
    /***/
  }
}]);
//# sourceMappingURL=default~components-inputnumber-inputnumberdemo-module~components-treetable-treetabledemo-module-es5.js.map