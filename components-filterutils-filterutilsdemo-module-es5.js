function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-filterutils-filterutilsdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/filterutils/filterutilsdemo.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/filterutils/filterutilsdemo.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_filterutils_filterutilsdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">FilterUtils</span>\n        <span>FilterUtils is a helper to filter collections against constraints. Examples below demonstrate use-cases with AutoComplete and DataTable.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation ui-fluid\">\n    <h3>Basic</h3>\n    <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterWithContains($event)\" [size]=\"30\"\n    [minLength]=\"1\" placeholder=\"Hint: type 'a' or 'o'\" [dropdown]=\"true\" field=\"label\" [style]=\"{'width':'250px'}\">\n        <ng-template let-brand pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\">\n                <img src=\"assets/showcase/images/demo/car/{{brand.value}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand.value}}</div>\n            </div>\n        </ng-template>\n    </p-autoComplete>\n\n    <h3>Custom</h3>\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n            <tr>\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                    <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                    <input *ngSwitchCase=\"'year'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                    <input *ngSwitchCase=\"'brand'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                    <input *ngSwitchCase=\"'color'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;FilterUtils&#125; from 'primeng/utils';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>FilterUtils consists of static functions that implement various constraints.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nconst value = 'PrimeNG';\n\nFilterUtils.equals(value, 'NG');                            //false\nFilterUtils.equals(value, 8);                               //false\nFilterUtils.equals(value, new Date());                      //false\nFilterUtils.contains(value, 'NG');                          //true\nFilterUtils.startsWith(value, 'NG');                        //false\nFilterUtils.endsWith(value, 'NG');                          //true\nFilterUtils.lt(10, 20);                                     //true\nFilterUtils.gte(50, 20);                                    //true\nFilterUtils.in(value, ['PrimeFaces', 'PrimeNG']);           //true\n</code>\n</pre>\n\n            <h3>Custom Constraint</h3>\n            <p>FilterUtils can be extended by adding new constraints.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nFilterUtils['isPrimeNumber'] = (value): boolean => &#123;\n    for(var i = 2; i &lt; num; i++)\n        if (num % i === 0) return false;\n    return num > 1;\n&#125;\n\nFilterUtils['isPrimeNumber'](3);                      //true\nFilterUtils['isPrimeNumber'](5);                      //true\nFilterUtils['isPrimeNumber'](568985673);              //false\n</code>\n</pre>\n\n            <h3>FilterUtils API</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>startsWith</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value starts with the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>contains</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value contains the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>endsWith</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value ends with the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>equals</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value equals the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>notEquals</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value does not equal the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>in</td>\n                            <td>value: Value to filter<br />\n                                filter[]: An array of filter values<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value contains the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>lt</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value is less than the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>lte</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value is less than or equals to the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>gt</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value is greater than the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>gte</td>\n                            <td>value: Value to filter<br />\n                                filter: Filter value<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the value is greater than or equals to the filter value</td>\n                        </tr>\n                        <tr>\n                            <td>filter</td>\n                            <td>value[]: An array of values to filter<br />\n                                fields[]: An array of properties in the value object<br />\n                                filterValue: Filter value<br />\n                                filterMatchMode: Constraint<br />\n                                filterLocale: Locale to use in filtering</td>\n                            <td>Whether the property values of the given value collection matches the filter.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menu\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-filterutils-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterWithContains($event)\" [size]=\"30\"\n[minLength]=\"1\" placeholder=\"Hint: type 'a' or 'o'\" [dropdown]=\"true\" field=\"label\" [style]=\"&#123;'width':'250px'&#125;\"&gt;\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;brand.value&#125;&#125;.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;&#123;&#123;brand.value&#125;&#125;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-autoComplete&gt;\n\n&lt;h3&gt;Custom&lt;/h3&gt;\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\n                &lt;input *ngSwitchCase=\"'year'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\n                &lt;input *ngSwitchCase=\"'brand'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\n                &lt;input *ngSwitchCase=\"'color'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class FilterUtilsDemo &#123;\n\n    brands: any[] = [\n        &#123;label: 'Audi', value: 'Audi'&#125;,\n        &#123;label: 'BMW', value: 'BMW'&#125;,\n        &#123;label: 'Fiat', value: 'Fiat'&#125;,\n        &#123;label: 'Ford', value: 'Ford'&#125;,\n        &#123;label: 'Honda', value: 'Honda'&#125;,\n        &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\n        &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\n        &#123;label: 'Renault', value: 'Renault'&#125;,\n        &#123;label: 'VW', value: 'VW'&#125;,\n        &#123;label: 'Volvo', value: 'Volvo'&#125;\n    ];\n\n    filteredBrands: any[];\n\n    brand:any;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService:CarService) &#123;\n        FilterUtils['custom-equals'] = (value, filter): boolean => &#123;\n            if (filter === undefined || filter === null || filter.trim() === '') &#123;\n                return true;\n            &#125;\n\n            if (value === undefined || value === null) &#123;\n                return false;\n            &#125;\n\n            return value.toString() === filter.toString();\n        &#125;\n\n        this.cols = [\n            &#123; field: 'year', header: 'Year', filterMatchMode:'custom-equals' &#125;,\n            &#123; field: 'brand', header: 'Brand', filterMatchMode:'custom-equals' &#125;,\n            &#123; field: 'color', header: 'Color', filterMatchMode:'custom-equals' &#125;,\n            &#123; field: 'vin', header: 'Vin', filterMatchMode:'custom-equals' &#125;\n        ];\n\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n    &#125;\n\n    filterWithContains(event) &#123;\n        this.filteredBrands = FilterUtils.filter(this.brands, ['value'], event.query, \"contains\");\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-filterutils-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/filterutils/filterutils-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/showcase/components/filterutils/filterutils-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: FilterUtilsDemoRoutingModule */

  /***/
  function _src_app_showcase_components_filterutils_filterutilsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterUtilsDemoRoutingModule", function () {
      return FilterUtilsDemoRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _filterutilsdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filterutilsdemo */
    "./src/app/showcase/components/filterutils/filterutilsdemo.ts");

    var FilterUtilsDemoRoutingModule = /*#__PURE__*/_createClass(function FilterUtilsDemoRoutingModule() {
      _classCallCheck(this, FilterUtilsDemoRoutingModule);
    });

    FilterUtilsDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _filterutilsdemo__WEBPACK_IMPORTED_MODULE_3__["FilterUtilsDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FilterUtilsDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/filterutils/filterutilsdemo.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/showcase/components/filterutils/filterutilsdemo.module.ts ***!
    \***************************************************************************/

  /*! exports provided: FilterUtilsDemoModule */

  /***/
  function _src_app_showcase_components_filterutils_filterutilsdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterUtilsDemoModule", function () {
      return FilterUtilsDemoModule;
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


    var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");
    /* harmony import */


    var _filterutilsdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./filterutilsdemo */
    "./src/app/showcase/components/filterutils/filterutilsdemo.ts");
    /* harmony import */


    var _filterutils_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./filterutils-routing.module */
    "./src/app/showcase/components/filterutils/filterutils-routing.module.ts");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./src/app/components/autocomplete/public_api.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/table */
    "./src/app/components/table/public_api.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");

    ;

    var FilterUtilsDemoModule = /*#__PURE__*/_createClass(function FilterUtilsDemoModule() {
      _classCallCheck(this, FilterUtilsDemoModule);
    });

    FilterUtilsDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _filterutils_routing_module__WEBPACK_IMPORTED_MODULE_8__["FilterUtilsDemoRoutingModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoCompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"]],
      declarations: [_filterutilsdemo__WEBPACK_IMPORTED_MODULE_7__["FilterUtilsDemo"]]
    })], FilterUtilsDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/filterutils/filterutilsdemo.ts":
  /*!********************************************************************!*\
    !*** ./src/app/showcase/components/filterutils/filterutilsdemo.ts ***!
    \********************************************************************/

  /*! exports provided: FilterUtilsDemo */

  /***/
  function _src_app_showcase_components_filterutils_filterutilsdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterUtilsDemo", function () {
      return FilterUtilsDemo;
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


    var _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../components/utils/filterutils */
    "./src/app/components/utils/filterutils.ts");
    /* harmony import */


    var _service_carservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var FilterUtilsDemo = /*#__PURE__*/function () {
      function FilterUtilsDemo(carService) {
        var _this = this;

        _classCallCheck(this, FilterUtilsDemo);

        this.carService = carService;
        this.brands = [{
          label: 'Audi',
          value: 'Audi'
        }, {
          label: 'BMW',
          value: 'BMW'
        }, {
          label: 'Fiat',
          value: 'Fiat'
        }, {
          label: 'Ford',
          value: 'Ford'
        }, {
          label: 'Honda',
          value: 'Honda'
        }, {
          label: 'Jaguar',
          value: 'Jaguar'
        }, {
          label: 'Mercedes',
          value: 'Mercedes'
        }, {
          label: 'Renault',
          value: 'Renault'
        }, {
          label: 'VW',
          value: 'VW'
        }, {
          label: 'Volvo',
          value: 'Volvo'
        }];

        _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_2__["FilterUtils"]['custom-equals'] = function (value, filter) {
          if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
          }

          if (value === undefined || value === null) {
            return false;
          }

          return value.toString() === filter.toString();
        };

        this.cols = [{
          field: 'year',
          header: 'Year',
          filterMatchMode: 'custom-equals'
        }, {
          field: 'brand',
          header: 'Brand',
          filterMatchMode: 'custom-equals'
        }, {
          field: 'color',
          header: 'Color',
          filterMatchMode: 'custom-equals'
        }, {
          field: 'vin',
          header: 'Vin',
          filterMatchMode: 'custom-equals'
        }];
        this.carService.getCarsMedium().then(function (cars) {
          return _this.cars = cars;
        });
      }

      return _createClass(FilterUtilsDemo, [{
        key: "filterWithContains",
        value: function filterWithContains(event) {
          this.filteredBrands = _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_2__["FilterUtils"].filter(this.brands, ['value'], event.query, "contains");
        }
      }]);
    }();

    FilterUtilsDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_3__["CarService"]
      }];
    };

    FilterUtilsDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filterutilsdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/filterutils/filterutilsdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_3__["CarService"]])], FilterUtilsDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-filterutils-filterutilsdemo-module-es5.js.map