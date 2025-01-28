function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"], {
  /***/
  "./src/app/components/paginator/paginator.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/paginator/paginator.ts ***!
    \***************************************************/

  /*! exports provided: Paginator, PaginatorModule */

  /***/
  function _src_app_components_paginator_paginatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Paginator", function () {
      return Paginator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorModule", function () {
      return PaginatorModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/dropdown */
    "./src/app/components/dropdown/public_api.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var Paginator = /*#__PURE__*/function () {
      function Paginator(cd) {
        _classCallCheck(this, Paginator);

        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.totalRecords = 0;
        this.rows = 0;
        this._first = 0;
      }

      return _createClass(Paginator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updatePaginatorState();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(simpleChange) {
          if (simpleChange.totalRecords) {
            this.updatePageLinks();
            this.updatePaginatorState();
            this.updateFirst();
            this.updateRowsPerPageOptions();
          }

          if (simpleChange.first) {
            this._first = simpleChange.first.currentValue;
            this.updatePageLinks();
            this.updatePaginatorState();
          }

          if (simpleChange.rows) {
            this.updatePageLinks();
            this.updatePaginatorState();
          }

          if (simpleChange.rowsPerPageOptions) {
            this.updateRowsPerPageOptions();
          }
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
        key: "updateRowsPerPageOptions",
        value: function updateRowsPerPageOptions() {
          if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];

            var _iterator = _createForOfIteratorHelper(this.rowsPerPageOptions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var opt = _step.value;

                if (typeof opt == 'object' && opt['showAll']) {
                  this.rowsPerPageItems.unshift({
                    label: opt['showAll'],
                    value: this.totalRecords
                  });
                } else {
                  this.rowsPerPageItems.push({
                    label: String(opt),
                    value: opt
                  });
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
        key: "isFirstPage",
        value: function isFirstPage() {
          return this.getPage() === 0;
        }
      }, {
        key: "isLastPage",
        value: function isLastPage() {
          return this.getPage() === this.getPageCount() - 1;
        }
      }, {
        key: "getPageCount",
        value: function getPageCount() {
          return Math.ceil(this.totalRecords / this.rows) || 1;
        }
      }, {
        key: "calculatePageLinkBoundaries",
        value: function calculatePageLinkBoundaries() {
          var numberOfPages = this.getPageCount(),
              visiblePages = Math.min(this.pageLinkSize, numberOfPages); //calculate range, keep current in middle if necessary

          var start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
              end = Math.min(numberOfPages - 1, start + visiblePages - 1); //check when approaching to last page

          var delta = this.pageLinkSize - (end - start + 1);
          start = Math.max(0, start - delta);
          return [start, end];
        }
      }, {
        key: "updatePageLinks",
        value: function updatePageLinks() {
          this.pageLinks = [];
          var boundaries = this.calculatePageLinkBoundaries(),
              start = boundaries[0],
              end = boundaries[1];

          for (var i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
          }
        }
      }, {
        key: "changePage",
        value: function changePage(p) {
          var pc = this.getPageCount();

          if (p >= 0 && p < pc) {
            this._first = this.rows * p;
            var state = {
              page: p,
              first: this.first,
              rows: this.rows,
              pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
          }
        }
      }, {
        key: "updateFirst",
        value: function updateFirst() {
          var _this = this;

          var page = this.getPage();

          if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
            Promise.resolve(null).then(function () {
              return _this.changePage(page - 1);
            });
          }
        }
      }, {
        key: "getPage",
        value: function getPage() {
          return Math.floor(this.first / this.rows);
        }
      }, {
        key: "changePageToFirst",
        value: function changePageToFirst(event) {
          if (!this.isFirstPage()) {
            this.changePage(0);
          }

          event.preventDefault();
        }
      }, {
        key: "changePageToPrev",
        value: function changePageToPrev(event) {
          this.changePage(this.getPage() - 1);
          event.preventDefault();
        }
      }, {
        key: "changePageToNext",
        value: function changePageToNext(event) {
          this.changePage(this.getPage() + 1);
          event.preventDefault();
        }
      }, {
        key: "changePageToLast",
        value: function changePageToLast(event) {
          if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
          }

          event.preventDefault();
        }
      }, {
        key: "onPageLinkClick",
        value: function onPageLinkClick(event, page) {
          this.changePage(page);
          event.preventDefault();
        }
      }, {
        key: "onRppChange",
        value: function onRppChange(event) {
          this.changePage(this.getPage());
        }
      }, {
        key: "updatePaginatorState",
        value: function updatePaginatorState() {
          this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
          };
        }
      }, {
        key: "currentPageReport",
        get: function get() {
          return this.currentPageReportTemplate.replace("{currentPage}", String(this.getPage() + 1)).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this._first + 1)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
        }
      }]);
    }();

    Paginator.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Paginator.prototype, "pageLinkSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Paginator.prototype, "onPageChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Paginator.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Paginator.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Paginator.prototype, "alwaysShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], Paginator.prototype, "templateLeft", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], Paginator.prototype, "templateRight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Paginator.prototype, "dropdownAppendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Paginator.prototype, "dropdownScrollHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Paginator.prototype, "currentPageReportTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Paginator.prototype, "showCurrentPageReport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Paginator.prototype, "totalRecords", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Paginator.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Paginator.prototype, "rowsPerPageOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], Paginator.prototype, "first", null);
    Paginator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-paginator',
      template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix'\"\n            *ngIf=\"alwaysShow ? true : (pageLinks && pageLinks.length > 1)\">\n            <div class=\"ui-paginator-left-content\" *ngIf=\"templateLeft\">\n                <ng-container *ngTemplateOutlet=\"templateLeft; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n            <span class=\"ui-paginator-current\" *ngIf=\"showCurrentPageReport\">{{currentPageReport}}</span>\n            <a [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToFirst($event)\" (keydown.enter)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-backward\"></span>\n            </a>\n            <a tabindex=\"0\" [attr.tabindex]=\"isFirstPage() ? null : '0'\" class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToPrev($event)\" (keydown.enter)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-left\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a tabindex=\"0\" *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"onPageLinkClick($event, pageLink - 1)\" (keydown.enter)=\"onPageLinkClick($event, pageLink - 1)\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToNext($event)\" (keydown.enter)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-caret-right\"></span>\n            </a>\n            <a [attr.tabindex]=\"isLastPage() ? null : '0'\" class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\n                    (click)=\"changePageToLast($event)\" (keydown.enter)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"ui-paginator-icon pi pi-step-forward\"></span>\n            </a>\n            <p-dropdown [options]=\"rowsPerPageItems\" [(ngModel)]=\"rows\" *ngIf=\"rowsPerPageOptions\" \n                (onChange)=\"onRppChange($event)\" [appendTo]=\"dropdownAppendTo\" [scrollHeight]=\"dropdownScrollHeight\"></p-dropdown>\n            <div class=\"ui-paginator-right-content\" *ngIf=\"templateRight\">\n                <ng-container *ngTemplateOutlet=\"templateRight; context: {$implicit: paginatorState}\"></ng-container>\n            </div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Paginator);

    var PaginatorModule = /*#__PURE__*/_createClass(function PaginatorModule() {
      _classCallCheck(this, PaginatorModule);
    });

    PaginatorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      exports: [Paginator, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      declarations: [Paginator]
    })], PaginatorModule);
    /***/
  },

  /***/
  "./src/app/components/paginator/public_api.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/paginator/public_api.ts ***!
    \****************************************************/

  /*! exports provided: Paginator, PaginatorModule */

  /***/
  function _src_app_components_paginator_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./paginator */
    "./src/app/components/paginator/paginator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Paginator", function () {
      return _paginator__WEBPACK_IMPORTED_MODULE_0__["Paginator"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginatorModule", function () {
      return _paginator__WEBPACK_IMPORTED_MODULE_0__["PaginatorModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be-es5.js.map