function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-table-tabledemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablebasicdemo.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablebasicdemo.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablebasicdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Basic</span></span>\n        <span>Table requires a header and a body template to display data.</span>\n    </div>\n</div>\n\n<div [ngClass]=\"{'content-section implementation': true}\">\n    <h3 class=\"first\">Basic</h3>\n    <p-table [value]=\"cars\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Brand</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-car>\n            <tr>\n                <td>{{car.vin}}</td>\n                <td>{{car.year}}</td>\n                <td>{{car.brand}}</td>\n                <td>{{car.color}}</td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"footer\" let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablebasicdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablebasicdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablebasic-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableBasicDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablebasicdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablebasicdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablebasic-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablebasic-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecolgroupdemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecolgroupdemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablecolgroupdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Column Group</span></span>\n        <span>Columns can be grouped using rowspan and colspan properties.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [value]=\"sales\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th rowspan=\"3\">Brand</th>\n                <th colspan=\"4\">Sale Rate</th>\n            </tr>\n            <tr>\n                <th colspan=\"2\">Sales</th>\n                <th colspan=\"2\">Profits</th>\n            </tr>\n            <tr>\n                <th>Last Year</th>\n                <th>This Year</th>\n                <th>Last Year</th>\n                <th>This Year</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-sale>\n            <tr>\n                <td>{{sale.brand}}</td>\n                <td>{{sale.lastYearSale}}</td>\n                <td>{{sale.thisYearSale}}</td>\n                <td>{{sale.lastYearProfit}}</td>\n                <td>{{sale.thisYearProfit}}</td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"footer\">\n            <tr>\n                <td colspan=\"3\">Totals</td>\n                <td>$506,202</td>\n                <td>$531,020</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablecolgroupdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecolgroup-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColGroupDemo implements OnInit &#123;\n\n    sales: any[];\n\n    ngOnInit() &#123;\n        this.sales = [\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecolgroupdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecolgroup-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"sales\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\"&gt;\n        &lt;tr&gt;\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\n            &lt;td&gt;$506,202&lt;/td&gt;\n            &lt;td&gt;$531,020&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablecolgroup-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecolresizedemo.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecolresizedemo.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablecolresizedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Column Resize</span></span>\n        <span>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and \n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Fit Mode</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Expand Mode</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\" columnResizeMode=\"expand\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n    \n    <h3>Scrollable</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" >\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Scrollable with Variable Width</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablecolresizedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolresizedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecolresize-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColResizeDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars2 = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin', width: '25%'&#125;,\n            &#123; field: 'year', header: 'Year', width: '15%' &#125;,\n            &#123; field: 'brand', header: 'Brand', width: '35%' &#125;,\n            &#123; field: 'color', header: 'Color', width: '25%' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecolresizedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolresizedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecolresize-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Expand Mode&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Scrollable&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" &gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Scrollable with Variable Width&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" [style.width]=\"col.width\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablecolresize-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecoltoggledemo.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecoltoggledemo.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablecoltoggledemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Column Toggle</span></span>\n        <span>This demo uses a multiselect component to implement toggleable columns.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"selectedColumns\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            <div style=\"text-align:left\">\n                <p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\n                         selectedItemsLabel=\"{0} columns selected\" [style]=\"{minWidth: '200px'}\" defaultLabel=\"Choose Columns\"></p-multiSelect>\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th>Vin</th>\n                <th *ngFor=\"let col of columns\">\n                    &#123;&#123;col.header&#125;&#125;\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td>{{rowData.vin}}</td>\n                <td *ngFor=\"let col of columns\">\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablecoltoggle.ts\">\n            <a href=\"https://github.com/primefaces/primeng/blob/master/src/app/showcase/components/table/tablecoltoggledemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecoltoggle-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColToggleDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    _selectedColumns: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this._selectedColumns = this.cols;\n    &#125;\n\n    @Input() get selectedColumns(): any[] &#123;\n        return this._selectedColumns;\n    &#125;\n\n    set selectedColumns(val: any[]) &#123;\n        //restore original order\n        this._selectedColumns = this.cols.filter(col => val.includes(col));\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecoltoggle.html\">\n            <a href=\"https://github.com/primefaces/primeng/blob/master/src/app/showcase/components/table/tablecoltoggledemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecoltoggle-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"selectedColumns\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div style=\"text-align:left\"&gt;\n            &lt;p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\n                        selectedItemsLabel=\"&#123;0&#125; columns selected\" [style]=\"&#123;minWidth: '200px'&#125;\" defaultLabel=\"Choose Columns\"&gt;&lt;/p-multiSelect&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablecoltoggle-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecontextmenudemo.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecontextmenudemo.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablecontextmenudemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">ContextMenu</span></span>\n        <span>Table has exclusive integration with ContextMenu.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pContextMenuRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablecontextmenudemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecontextmenudemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecontextmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableContextMenuDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    selectedCar: Car;\n\n    selectCars: Car[];\n\n    items: MenuItem[];\n\n    constructor(private carService: CarService, private messageService: MessageService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.items = [\n            &#123; label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar(this.selectedCar) &#125;,\n            &#123; label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedCar) &#125;\n        ];\n    &#125;\n\n    viewCar(car: Car) &#123;\n        this.messageService.add(&#123; severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand &#125;);\n    &#125;\n\n    deleteCar(car: Car) &#123;\n        let index = -1;\n        for (let i = 0; i &lt; this.cars.length; i++) &#123;\n            if (this.cars[i].vin == car.vin) &#123;\n                index = i;\n                break;\n            &#125;\n        &#125;\n        this.cars.splice(index, 1);\n\n        this.messageService.add(&#123; severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecontextmenudemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecontextmenudemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecontextmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pContextMenuRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablecontextmenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecruddemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecruddemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablecruddemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">CRUD</span></span>\n        <span>This samples demonstrates a CRUD implementation using various PrimeNG components.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\" let-rowData>\n            <div style=\"text-align:left\">\n                <button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\n            </div>\n        </ng-template>\n    </p-table>\n    \n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [focusOnShow]=\"false\" showEffect=\"fade\" [modal]=\"true\" [style]=\"{width: '300px'}\">\n        <div class=\"p-grid ui-fluid\" *ngIf=\"car\">\n            <div class=\"p-col-4\">\n                <label for=\"vin\">Vin</label>\n            </div>\n            <div class=\"p-col-8\">\n                <input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" autofocus />\n            </div>\n            <div class=\"p-col-4\">\n                <label for=\"year\">Year</label>\n            </div>\n            <div class=\"p-col-8\">\n                <input pInputText id=\"year\" [(ngModel)]=\"car.year\" />\n            </div>\n            <div class=\"p-col-4\">\n                <label for=\"brand\">Brand</label>\n            </div>\n            <div class=\"p-col-8\">\n                <input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" />\n            </div>\n            <div class=\"p-col-4\">\n                <label for=\"color\">Color</label>\n            </div>\n            <div class=\"p-col-8\">\n                <input pInputText id=\"color\" [(ngModel)]=\"car.color\" />\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"delete()\" label=\"Delete\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablecruddemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecrud-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableCrudDemo implements OnInit &#123;\n\n    displayDialog: boolean;\n\n    car: Car = &#123;&#125;;\n\n    selectedCar: Car;\n\n    newCar: boolean;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    showDialogToAdd() &#123;\n        this.newCar = true;\n        this.car = &#123;&#125;;\n        this.displayDialog = true;\n    &#125;\n\n    save() &#123;\n        let cars = [...this.cars];\n        if (this.newCar)\n            cars.push(this.car);\n        else\n            cars[this.cars.indexOf(this.selectedCar)] = this.car;\n\n        this.cars = cars;\n        this.car = null;\n        this.displayDialog = false;\n    &#125;\n\n    delete() &#123;\n        let index = this.cars.indexOf(this.selectedCar);\n        this.cars = this.cars.filter((val, i) => i != index);\n        this.car = null;\n        this.displayDialog = false;\n    &#125;\n\n    onRowSelect(event) &#123;\n        this.newCar = false;\n        this.car = this.cloneCar(event.data);\n        this.displayDialog = true;\n    &#125;\n\n    cloneCar(c: Car): Car &#123;\n        let car = &#123;&#125;;\n        for (let prop in c) &#123;\n            car[prop] = c[prop];\n        &#125;\n        return car;\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecruddemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablecrud-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\" let-rowData&gt;\n        &lt;div style=\"text-align:left\"&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;    \n&lt;/p-table&gt;\n\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [focusOnShow]=\"false\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"  [style]=\"&#123;width: '300px'&#125;\"&gt;\n    &lt;div class=\"p-grid ui-fluid\" *ngIf=\"car\"&gt;\n        &lt;div class=\"p-col-4\"&gt;\n            &lt;label for=\"vin\"&gt;Vin&lt;/label&gt;\n        &lt;/div&gt;\n        &lt;div class=\"p-col-8\"&gt;\n            &lt;input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" autofocus /&gt;\n        &lt;/div&gt;\n        &lt;div class=\"p-col-4\"&gt;\n            &lt;label for=\"year\"&gt;Year&lt;/label&gt;\n        &lt;/div&gt;\n        &lt;div class=\"p-col-8\"&gt;\n            &lt;input pInputText id=\"year\" [(ngModel)]=\"car.year\" /&gt;\n        &lt;/div&gt;\n        &lt;div class=\"p-col-4\"&gt;\n            &lt;label for=\"brand\"&gt;Brand&lt;/label&gt;\n        &lt;/div&gt;\n        &lt;div class=\"p-col-8\"&gt;\n            &lt;input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" /&gt;\n        &lt;/div&gt;\n        &lt;div class=\"p-col-4\"&gt;\n            &lt;label for=\"color\"&gt;Color&lt;/label&gt;\n        &lt;/div&gt;\n        &lt;div class=\"p-col-8\"&gt;\n            &lt;input pInputText id=\"color\" [(ngModel)]=\"car.color\" /&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;p-footer&gt;\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"delete()\" label=\"Delete\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"Save\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablecrud-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tabledemo.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tabledemo.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tabledemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table</span>\n        <span>Table displays data in tabular format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table #dt [value]=\"customers\" [(selection)]=\"selectedCustomers\" dataKey=\"id\" styleClass=\"ui-table-customers\" [rowHover]=\"true\"\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\"\n        [paginator]=\"true\" currentPageReportTemplate=\"Showing &#123;first&#125; to &#123;last&#125; of &#123;totalRecords&#125; entries\"\n        [filterDelay]=\"0\" [globalFilterFields]=\"['name','country.name','representative.name','status']\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n            <div class=\"ui-table-globalfilter-container\">\n                <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Global Search\" />\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th></th>\n                <th pSortableColumn=\"name\">Name <p-sortIcon field=\"name\"></p-sortIcon></th>\n                <th pSortableColumn=\"country.name\">Country <p-sortIcon field=\"country.name\"></p-sortIcon></th>\n                <th pSortableColumn=\"representative.name\">Representative <p-sortIcon field=\"representative.name\"></p-sortIcon></th>\n                <th pSortableColumn=\"date\">Date <p-sortIcon field=\"date\"></p-sortIcon></th>\n                <th pSortableColumn=\"status\">Status <p-sortIcon field=\"status\"></p-sortIcon></th>\n                <th pSortableColumn=\"activity\">Activity <p-sortIcon field=\"activity\"></p-sortIcon></th>\n                <th></th>\n            </tr>\n            <tr>\n                <th>\n                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                </th>\n                <th>\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'name', 'startsWith')\" placeholder=\"Search by Name\" class=\"ui-column-filter\">\n                </th>\n                <th>\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'country.name', 'contains')\" placeholder=\"Search by Country\" class=\"ui-column-filter\">\n                </th>\n                <th>\n                    <p-multiSelect [options]=\"representatives\" placeholder=\"All\" (onChange)=\"onRepresentativeChange($event)\" styleClass=\"ui-column-filter\" optionLabel=\"name\">\n                        <ng-template let-option pTemplate=\"item\">\n                            <div class=\"ui-multiselect-representative-option\">\n                                <img [alt]=\"option.label\" src=\"assets/showcase/images/demo/avatar/&#123;&#123;option.value.image&#125;&#125;\" width=\"32\" />\n                                <span>&#123;&#123;option.label&#125;&#125;</span>\n                            </div>\n                        </ng-template>\n                    </p-multiSelect>\n                </th>\n                <th>\n                    <p-calendar (onSelect)=\"onDateSelect($event)\" (onClearClick)=\"dt.filter('', 'date', 'equals')\" [showButtonBar]=\"true\" styleClass=\"ui-column-filter\" placeholder=\"Registration Date\" [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"></p-calendar>\n                </th>\n                <th>\n                    <p-dropdown [options]=\"statuses\" (onChange)=\"dt.filter($event.value, 'status', 'equals')\" styleClass=\"ui-column-filter\" placeholder=\"Select a Status\" [showClear]=\"true\">\n                        <ng-template let-option pTemplate=\"item\">\n                            <span [class]=\"'customer-badge status-' + option.value\">&#123;&#123;option.label&#125;&#125;</span>\n                        </ng-template>\n                    </p-dropdown>\n                </th>\n                <th>\n                    <input pInputText type=\"text\" (input)=\"onActivityChange($event)\" placeholder=\"Minimum\" class=\"ui-column-filter\" >\n                </th>\n                <th></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-customer>\n            <tr class=\"ui-selectable-row\">\n                <td>\n                    <p-tableCheckbox [value]=\"customer\"></p-tableCheckbox>\n                </td>\n                <td>\n                    <span class=\"ui-column-title\">Name</span>\n                    &#123;&#123;customer.name&#125;&#125;\n                </td>\n                <td>\n                    <span class=\"ui-column-title\">Country</span>\n                    <span [class]=\"'flag flag-' + customer.country.code\"></span>\n                    <span style=\"vertical-align: middle; margin-left: .5em\">&#123;&#123;customer.country.name&#125;&#125;</span>\n                </td>\n                <td>\n                    <span class=\"ui-column-title\">Representative</span>\n                    <img [alt]=\"customer.representative.name\" src=\"assets/showcase/images/demo/avatar/&#123;&#123;customer.representative.image&#125;&#125;\" width=\"32\" style=\"vertical-align: middle\" />\n                    <span style=\"vertical-align: middle; margin-left: .5em\">&#123;&#123;customer.representative.name&#125;&#125;</span>\n                </td>\n                <td>\n                    <span class=\"ui-column-title\">Country</span>\n                    &#123;&#123;customer.date&#125;&#125;\n                </td>\n                <td>\n                    <span class=\"ui-column-title\">Status</span>\n                    <span [class]=\"'customer-badge status-' + customer.status\">&#123;&#123;customer.status&#125;&#125;</span>\n                </td>\n                <td>\n                    <span class=\"ui-column-title\">Activity</span>\n                    <p-progressBar [value]=\"customer.activity\" [showValue]=\"false\"></p-progressBar>\n                </td>\n                <td>\n                    <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"></button>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"emptymessage\">\n           <tr>\n               <td colspan=\"8\" style=\"text-align:left\">No customers found.</td>\n           </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>CDK</h3>\n            <p>VirtualScrolling depends on @angular/cdk's ScrollingModule so begin with installing CDK if not already installed.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install @angular/cdk --save\n</code>\n</pre>\n\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TableModule&#125; from 'primeng/table';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Table requires a value as an array of objects and templates for the presentation. Throughout the samples, a car interface having\n            vin, brand, year and color properties is used to define an object to be displayed by the table. Cars are loaded by a CarService that\n            connects to a server to fetch the data.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport interface Car &#123;\n    vin;\n    year;\n    brand;\n    color;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123; HttpClient &#125; from '@angular/common/http';\nimport &#123; Injectable &#125; from '@angular/core';\n\nimport &#123; Car &#125; from '../domain/car';\n\n@Injectable()\nexport class CarService &#123;\n\n    constructor(private http: HttpClient) &#123;&#125;\n\n    getCarsSmall() &#123;\n        return this.http.get('/showcase/resources/data/cars-small.json')\n                    .toPromise()\n                    .then(res => &lt;Car[]&gt; res.data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Following sample has a table of 4 columns and retrieves the data from a service on ngOnInit.</p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n        <p>List of cars are bound to the value property whereas <i>header</i> and <i>body</i> templates are used to define the content of these sections.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n        <h3>Dynamic Columns</h3>\n        <p>Instead of configuring columns one by one, a simple ngFor can be used to implement dynamic columns. cols property below is an array of objects that represent a column,\n            only property that table component uses is field, rest of the properties like <i>header</i> depend on your choice.\n        </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DynamicColumnsDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n        <p>There are two ways to render dynamic columns, since cols property is in the scope of component you can just simply bind it to ngFor directive to generate the structure.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of cols\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of cols\"&gt;\n                    &#123;&#123;car[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Other alternative is binding the cols array to the <i>columns</i> property and then defining a template variable to access it within your templates.\n                There are 3 cases where this is required which are csv export, reorderable columns and global filtering without the <i>globalFilterFields</i> property.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;car[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Tip: Use ngSwitch to customize the column content per dynamic column.</p>\n\n            <h3>Table Layout</h3>\n            <p>For performance reasons, default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents\n                set <i>autoLayout</i> property to true. Note that Scrollable and/or Resizable tables do not support auto layout due to technical reasons.\n            </p>\n\n            <h3>Templates</h3>\n            <p>Table is a template driven component with named templates such as header and body that we've used so far. Templates grant a great level of customization and flexibility\n                where you have total control over the presentation while table handles the features such as paging, sorting, filtering and more. This speeds up development without sacrifing\n                flexibility. Here is the full list of available templates.</p>\n\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>caption</td>\n                            <td>-</td>\n                            <td>Caption content of the table.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the thead element.</td>\n                        </tr>\n                        <tr>\n                            <td>body</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection <br>\n                                expanded: Whether the row is expanded\n                            </td>\n                            <td>Content of the tbody element.</td>\n                        </tr>\n                        <tr>\n                            <td>footer</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the tfoot element.</td>\n                        </tr>\n                        <tr>\n                            <td>summary</td>\n                            <td>-</td>\n                            <td>Summary section to display below the table.</td>\n                        </tr>\n                        <tr>\n                            <td>colgroup</td>\n                            <td>$implicit: Columns</td>\n                            <td>ColGroup element of the table to customize columns.</td>\n                        </tr>\n                        <tr>\n                            <td>rowexpansion</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection <br>\n                            </td>\n                            <td>Content of an extended row.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenrows</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection<br>\n                            </td>\n                            <td>Content of the tbody element to display frozen rows.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenheader</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the thead element in frozen side.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenbody</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection <br>\n                            </td>\n                            <td>Content of the tbody element in frozen side.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenfooter</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the tfoot element in frozen side.</td>\n                        </tr>\n                        <tr>\n                            <td>frozencolgroup</td>\n                            <td>$implicit: Columns</td>\n                            <td>ColGroup element of the table to customize frozen columns.</td>\n                        </tr>\n                        <tr>\n                            <td>emptymessage</td>\n                            <td>$implicit: Columns <br />\n                                frozen: Whether the body belongs to the frozen part of the table.</td>\n                            <td>Content to display when there is no value to display.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorleft</td>\n                            <td>state: $implicit\n                                state.page: Current page<br />\n                                state.pageCount: Total page count<br />\n                                state.rows: Rows per page<br />\n                                state.first: Index of the first records<br />\n                                state.totalRecords: Number of total records<br />\n                            </td>\n                            <td>Custom content for the left section of the paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorright</td>\n                            <td>state: $implicit\n                                state.page: Current page<br />\n                                state.pageCount: Total page count<br />\n                                state.rows: Rows per page<br />\n                                state.first: Index of the first records<br />\n                                state.totalRecords: Number of total records<br />\n                            </td>\n                            <td>Custom content for the right section of the paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>loadingbody</td>\n                            <td>columns: Columns collection <br>\n                            </td>\n                            <td>Content of the tbody element to show when data is being loaded in virtual scroll mode.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Change Detection</h3>\n            <p>Table may need to be aware of changes in its value in some cases such as reapplying sort. For the sake of performance, this is only done when the reference of the value changes meaning a\n                setter is used instead of ngDoCheck/IterableDiffers which can reduce performance. So when you manipulate the value such as removing or adding an item, instead of using array methods such as push, splice\n                create a new array reference using a spread operator or similar.\n            </p>\n\n            <h3>Sections</h3>\n            <p>Table offers various templates to display additional information about the data such as a <i>caption</i> or <i>summary</i>.</p>\n\n <pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;col.header&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/sections']\">live example.</a></p>\n\n            <h3>Column Grouping</h3>\n            <p>Columns can easily be grouped using templating. Let's start with sample data of sales of brands per year.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColGroupDemo implements OnInit &#123;\n\n    sales: any[];\n\n    ngOnInit() &#123;\n        this.sales = [\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"sales\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\"&gt;\n        &lt;tr&gt;\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\n            &lt;td&gt;$506,202&lt;/td&gt;\n            &lt;td&gt;$531,020&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/colgroup']\">live example.</a></p>\n\n            <h3>Row Grouping</h3>\n            <p>Templating features can also be used to implement row grouping functionality, here is an example implementation that uses a metadata object\n                to keep at what index a group starts and how many items it has.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableRowGroupDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    rowGroupMetadata: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => &#123;\n            this.cars = cars;\n            this.updateRowGroupMetaData();\n        &#125;);\n    &#125;\n\n    onSort() &#123;\n        this.updateRowGroupMetaData();\n    &#125;\n\n    updateRowGroupMetaData() &#123;\n        this.rowGroupMetadata = &#123;&#125;;\n        if (this.cars) &#123;\n            for (let i = 0; i &lt; this.cars.length; i++) &#123;\n                let rowData = this.cars[i];\n                let brand = rowData.brand;\n                if (i == 0) &#123;\n                    this.rowGroupMetadata[brand] = &#123; index: 0, size: 1 &#125;;\n                &#125;\n                else &#123;\n                    let previousRowData = this.cars[i - 1];\n                    let previousRowGroup = previousRowData.brand;\n                    if (brand === previousRowGroup)\n                        this.rowGroupMetadata[brand].size++;\n                    else\n                        this.rowGroupMetadata[brand] = &#123; index: i, size: 1 &#125;;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>Using this metadata rows can be grouped using a subheader that displays the group. Note that grouped data should be sorted so enable <i>sortField</i>\n            so that table applies sorting before grouping if your data is not sorted.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\n            &lt;td colspan=\"3\"&gt;\n                &lt;span style=\"font-weight:bold\"&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<p>An alternative grouping could be using rowspans for the group field.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\"&gt;\n                &#123;&#123;rowData.brand&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/rowgroup']\">live example.</a></p>\n\n            <h3>Multi Field grouping</h3>\n            <p>Previous example uses a single field to group the rows however nothing limits you to implement multiple field grouping as well. Similarly to single\n                grouping, your data should be sorted first, you may use the built-in multiSorting or provide it sorted to the table and create a <i>rowGroupMetadata</i>\n                for multiple fields.\n            </p>\n\n            <h3>Paginator</h3>\n            <p>Pagination is enabled by setting <i>paginator</i> property to true, rows property defines the number of rows per page and pageLinks specify the the number\n                of page links to display. See <a [routerLink]=\"['/paginator']\">paginator</a> component for more information.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Paginator can also be controlled via model using a binding to the <i>first</i> property where changes trigger a pagination.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [(first)]=\"first\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TablePageDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    first: number = 0;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n\n    reset() &#123;\n        this.first = 0;\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Paginator accepts custom content for the left and the right side via named templates.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [first]=\"first\"&gt;\n&lt;ng-template pTemplate=\"header\" let-columns&gt;\n    &lt;tr&gt;\n        &lt;th *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;col.header&#125;&#125;\n        &lt;/th&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n    &lt;tr&gt;\n        &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n        &lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"paginatorleft\" let-state&gt;\n    &#123;&#123;state.first&#125;&#125;\n    &lt;button type=\"button\" pButton icon=\"pi-refresh\"&gt;&lt;/button&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"paginatorright\"&gt;\n    &lt;button type=\"button\" pButton icon=\"pi-cloud-upload\"&gt;&lt;/button&gt;\n&lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Paginator templates gets the paginator state as an implicit variable that provides the following properties</p>\n            <ul>\n                <li>first</li>\n                <li>rows</li>\n                <li>page</li>\n                <li>totalRecords</li>\n            </ul>\n\n            <p>See the <a [routerLink]=\"['/table/page']\">live example.</a></p>\n\n            <h3>Sorting</h3>\n            <p>A column can be made sortable by adding the <i>pSortableColumn</i> directive whose value is the field to sort against and a sort indicator via <i>p-sortIcon</i> component. For dynamic columns,\n                setting <i>pSortableColumnDisabled</i> property as true disables sorting for that particular column.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>Default sorting is executed on a single column, in order to enable multiple field sorting, set <i>sortMode</i> property to \"multiple\" and use metakey\n            when clicking on another column.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" sortMode=\"multiple\"&gt;\n</code>\n</pre>\n\n            <p>In case you'd like to display the table as sorted by default initially on load, use the <i>sortField</i> - <i>sortOrder</i> properties in single mode.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" sortField=\"year\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>In multiple mode, use the <i>multiSortMeta</i> property and bind an array of SortMeta objects.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" sortMode=\"multiple\" [multiSortMeta]=\"multiSortMeta\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nthis.multiSortMeta = [];\nthis.multiSortMeta.push(&#123;field: 'year', order: 1&#125;);\nthis.multiSortMeta.push(&#123;field: 'brand', order: -1&#125;);\n</code>\n</pre>\n\n            <p>Instead of using the built-in sorting algorithm a custom sort can be attached by enabling <i>customSort</i> property and defining a sortFunction implementation. This function gets a SortEvent instance\n                that provides the data to sort, <i>sortField</i>, <i>sortOrder</i> and <i>multiSortMeta</i>.\n            </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CustomTableSortDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    customSort(event: SortEvent) &#123;\n        //event.data = Data to sort\n        //event.mode = 'single' or 'multiple' sort mode\n        //event.field = Sort field in single sort\n        //event.order = Sort order in single sort\n        //event.multiSortMeta = SortMeta array in multiple sort\n\n        event.data.sort((data1, data2) => &#123;\n            let value1 = data1[event.field];\n            let value2 = data2[event.field];\n            let result = null;\n\n            if (value1 == null && value2 != null)\n                result = -1;\n            else if (value1 != null && value2 == null)\n                result = 1;\n            else if (value1 == null && value2 == null)\n                result = 0;\n            else if (typeof value1 === 'string' && typeof value2 === 'string')\n                result = value1.localeCompare(value2);\n            else\n                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;\n\n            return (event.order * result);\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>For screen reader support of sortable headers, use <i>ariaLabel</i>, <i>ariaLabelDesc</i> and <i>ariaLabelAsc</i> properties\n                on <i>p-sortIcon</i> component to define aria labels for unsorted, descending and ascending states respectively.</p>\n\n            <p>See the <a [routerLink]=\"['/table/sort']\">live example.</a></p>\n\n            <h3>Filtering</h3>\n            <p>Filtering is enabled by defining the filter and calling <i>filter</i> method on the local template variable of the table with value, column field and match mode parameters. Available match modes are\n            \"startsWith\", \"contains\", \"endsWith\", \"equals\", \"notEquals\", \"in\", \"lt\", \"lte\", \"gt\" and \"gte\". Following is an example that utilizes various PrimeNG form components as filters.</p>\n\n            <p>An optional global filter feature is available to search all fields with the same query, to enable this place an input component and call the <i>filterGlobal</i> function with value and match mode properties on your event of choice.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #tt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\n        &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"tt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\n                &lt;div *ngSwitchCase=\"'year'\"&gt;\n                    &#123;&#123;yearFilter&#125;&#125;\n                    &lt;i class=\"pi pi-times\" (click)=\"yearFilter=null;tt.filter(null, col.field, col.filterMatchMode)\"&gt;&lt;/i&gt;\n                    &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"&gt;&lt;/p-slider&gt;\n                &lt;/div&gt;\n                &lt;p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"tt.filter($event.value, col.field, 'equals')\"&gt;&lt;/p-dropdown&gt;\n                &lt;p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"tt.filter($event.value, col.field, 'in')\"&gt;&lt;/p-multiSelect&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableFilterDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    brands: SelectItem[];\n\n    colors: SelectItem[];\n\n    yearFilter: number;\n\n    yearTimeout: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n\n        this.brands = [\n            &#123; label: 'All Brands', value: null &#125;,\n            &#123; label: 'Audi', value: 'Audi' &#125;,\n            &#123; label: 'BMW', value: 'BMW' &#125;,\n            &#123; label: 'Fiat', value: 'Fiat' &#125;,\n            &#123; label: 'Honda', value: 'Honda' &#125;,\n            &#123; label: 'Jaguar', value: 'Jaguar' &#125;,\n            &#123; label: 'Mercedes', value: 'Mercedes' &#125;,\n            &#123; label: 'Renault', value: 'Renault' &#125;,\n            &#123; label: 'VW', value: 'VW' &#125;,\n            &#123; label: 'Volvo', value: 'Volvo' &#125;\n        ];\n\n        this.colors = [\n            &#123; label: 'White', value: 'White' &#125;,\n            &#123; label: 'Green', value: 'Green' &#125;,\n            &#123; label: 'Silver', value: 'Silver' &#125;,\n            &#123; label: 'Black', value: 'Black' &#125;,\n            &#123; label: 'Red', value: 'Red' &#125;,\n            &#123; label: 'Maroon', value: 'Maroon' &#125;,\n            &#123; label: 'Brown', value: 'Brown' &#125;,\n            &#123; label: 'Orange', value: 'Orange' &#125;,\n            &#123; label: 'Blue', value: 'Blue' &#125;\n        ];\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    onYearChange(event, dt) &#123;\n        if (this.yearTimeout) &#123;\n            clearTimeout(this.yearTimeout);\n        &#125;\n\n        this.yearTimeout = setTimeout(() => &#123;\n            tt.filter(event.value, 'year', 'gt');\n        &#125;, 250);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>If you have static columns and need to use global filtering, globalFilterFields property must be defined to configure which fields should be used in global filtering. Another\n                use case of this property is to change the fields to utilize in global filtering with dynamic columns.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [globalFilterFields]=\"['vin','year']\"&gt;\n    //content\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/filter']\">live example.</a></p>\n\n            <h3>Selection</h3>\n            <p>Table provides built-in single and multiple selection features where selected rows are bound to the selection property and onRowSelect-onRowUnselect events\n            are provided as optional callbacks. In order to enable this feature, define a <i>selectionMode</i>, bind a selection reference and add pSelectableRow directive\n            whose value is the rowData to the rows that can be selected. Additionally if you prefer double click use <i>pSelectableRowDblClick</i> directive instead and\n            to disable selection events on a particular row use pSelectableRowDisabled. In both cases optional\n            <i>pSelectableRowIndex</i> property is avaiable to access the row index. By default each row click adds or removes the row from the selection, if you prefer a classic\n            metaKey based selection approach enable <i>metaKeySelection</i> true so that multiple selection or unselection of a row requires metaKey to be pressed. Note that, on touch enabled\n            devices, metaKey based selection is turned off automatically as there is no metaKey in devices such as mobile phones.</p>\n\n            <p>Alternative to the row click, radiobutton or checkbox elements can be used to implement row selection.</p>\n\n            <p>When resolving if a row is selected, by default Table compares selection array with the datasource which may cause a performance issue with huge datasets that do not use pagination.\n                If available the fastest way is to use dataKey property that identifies a unique row so that Table can avoid comparing arrays as internally a map instance is used instead of looping arrays, on the other hand\n                if dataKey cannot be provided consider using <i>compareSelectionBy</i> property as \"equals\" which uses reference comparison instead of the default \"deepEquals\" comparison. Latter is slower since it checks all properties.\n            </p>\n\n            <p>In single mode, selection binding is an object reference.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    selectedCar: Car;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n        <p>In multiple mode, selection binding should be an array. Note that if you require shiftKey based range selection, pass the rowIndex to the <i>SelectableRow</i> directive.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    selectedCars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Single selection using a radiobutton can be done by using <i>p-tableRadioButton</i> component.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar\" dataKey=\"vin\"&gt;\n&lt;ng-template pTemplate=\"header\" let-columns&gt;\n    &lt;tr&gt;\n        &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\n        &lt;th *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;col.header&#125;&#125;\n        &lt;/th&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n    &lt;tr&gt;\n        &lt;td&gt;\n            &lt;p-tableRadioButton [value]=\"rowData\"&gt;&lt;/p-tableRadioButton&gt;\n        &lt;/td&gt;\n        &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n        &lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;div style=\"text-align: left\"&gt;\n            Selected Car: &#123;&#123;selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'&#125;&#125;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n                <p>Similarly <i>p-tableCheckbox</i> and <i>p-tableHeaderCheckbox</i> elements are provided to implement checkbox based multiple selection.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 2.25em\"&gt;\n                &lt;p-tableHeaderCheckbox&gt;&lt;/p-tableHeaderCheckbox&gt;\n            &lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;p-tableCheckbox [value]=\"rowData\"&gt;&lt;/p-tableCheckbox&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Both <i>p-tableCheckbox</i> and <i>p-tableRadioButton</i> components can be <i>disabled</i> using their property with the same name to prevent selection of a particular row. In addition, index of the row\n                needs to be provided to the checkbox/radiobutton components so that they can be available at the <i>onRowSelect</i> or <i>onRowUnselect</i> events of the Table.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\" let-columns=\"columns\"&gt;\n    &lt;tr [pSelectableRow]=\"rowData\"&gt;\n        &lt;td&gt;\n            &lt;p-tableCheckbox [value]=\"rowData\" [disabled]=\"rowData.year > 2010\" [index]=\"rowIndex\"&gt;&lt;/p-tableCheckbox&gt;\n        &lt;/td&gt;\n        &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n        &lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n</code>\n</pre>\n\n            <h3>TableCheckbox Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Row data value of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>index</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the row.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the component is disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that checkbox must be checked before submitting the form.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines a string that labels the checkbox for accessibility.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>TableHeaderCheckbox Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the component is disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines a string that labels the checkbox for accessibility.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>TableRadioButton  Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Row data value of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>index</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the row.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the component is disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the radiobutton.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the radiobutton.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines a string that labels the checkbox for accessibility.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <p>See the <a [routerLink]=\"['/table/selection']\">live example.</a></p>\n\n            <h3>ContextMenu</h3>\n            <p>Table has exclusive integration with contextmenu component. In order to attach a menu to a table, add <i>pContextMenuRow</i> directive to the rows that can be selected with context menu, define a local template\n            variable for the menu and bind it to the contextMenu property of the table. This enables displaying the menu whenever a row is right clicked. Optional\n            <i>pContextMenuRowIndex</i> property is avaiable to access the row index. A separate <i>contextMenuSelection</i>\n            property is used to get a hold of the right clicked row. For dynamic columns, setting <i>pContextMenuRowDisabled</i> property as true disables context menu for that particular row.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr [pContextMenuRow]=\"rowData\" [pContextMenuRowIndex]=\"rowIndex\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n            <p>By default context menu uses a different property called <i>contextMenuSelection</i> as above, this means when row selection mode is also enabled, the two properties, both selection and <i>contextMenuSelection</i> need to be maintained.\n                In case you prefer to configure Table to manage the same selection property both on row click and context menu, set <i>contextMenuSelectionMode</i> as \"joint\". Table below has both <i>selectionMode</i> and contextMenu enabled where\n                both of these features update the same selection object.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" [contextMenu]=\"cm\" contextMenuSelectionMode=\"joint\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\" [pContextMenuRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/contextmenu']\">live example.</a></p>\n\n            <h3>Cell Editing</h3>\n            <p>Incell editing is enabled by adding <i>pEditableColumn</i> directive to an editable cell that has a <i>p-cellEditor</i> helper\n                component to define the input-output templates for the edit and view modes respectively.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.vin\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.vin&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.year\" required&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.year&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.brand\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.brand&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.color&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>If you require the edited row data, rowIndex and the selected field in the <i>onEditInit</i>, <i>onEditComplete</i>, and <i>onEditCancel</i> events, bind the row data to the <i>pEditableColumn</i> directive, the <i>rowIndex</i> <i>pEditableColumnRowIndex</i> property and field to the the field to the <i>pEditableColumnField</i> directive.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'year'\" [pEditableColumnRowIndex]=\"index\"&gt;\n</code>\n</pre>\n\n            <p>When opening a cell for editing, the table will automatically focus the first <i>input</i>, <i>textarea</i>, or <i>select</i> element inside the output template.\n               If you want to override this default behavior, you can pass a custom selector for the elements to focus into the pFocusCellSelector directive.\n               This is useful when you would like the Tab and Shift+Tab keyboard navigation to focus on buttons or custom edit controls.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;td [pFocusCellSelector]=\"'input, .custom-edit-control'\"&gt;\n</code>\n</pre>\n\n            <h3>Row Editing</h3>\n            <p>Row editing toggles the visibility of the all editors in the row at once and provides additional options to save and cancel editing. Row editing functionality\n                is enabled by setting the <b></b> to \"row\" on table, defining a dataKey to uniquely identify a row, adding pEditableRow directive to the editable rows and defining the UI Controls with <i>pInitEditableRow</i>, <i>pSaveEditableRow</i> and <i>pCancelEditableRow</i> directives respectively.\n            </p>\n            <p>\n                Save and Cancel functionality implementation is left to the page author to provide more control over the editing business logic, example below utilizes\n                a simple implementation where a row is cloned when editing is initialized and is saved or restored depending on the result of the editing. An implicit variable called \"editing\" is passed to the body template\n                so you may come up with your own UI controls that implement editing based on your own requirements such as adding validations and styling. Note that <i>pSaveEditableRow</i> only switches the row to back view mode when there are no validation errors.\n            </p>\n            <p>Moreover you may use setting <i>pEditableRowDisabled</i> property as true to disable editing for that particular row and\n                in case you need to display rows in edit mode by default use <i>editingRowKeys</i> property which is a map whose key is the dataKey of the record where value is any arbitrary number greater than zero.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" dataKey=\"vin\" editMode=\"row\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n            &lt;th style=\"width:8em\"&gt;&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\"&gt;\n        &lt;tr [pEditableRow]=\"rowData\"&gt;\n            &lt;td&gt;\n                &#123;&#123;rowData.vin&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData.year\" year&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.year&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;p-dropdown [options]=\"brands\" [(ngModel)]=\"rowData.brand\" [style]=\"&#123;'width':'100%'&#125;\"&gt;&lt;/p-dropdown&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.brand&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.color&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td style=\"text-align:center\"&gt;\n                &lt;button *ngIf=\"!editing\" pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEditInit(rowData)\"&gt;&lt;/button&gt;\n                &lt;button *ngIf=\"editing\" pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"&gt;&lt;/button&gt;\n                &lt;button *ngIf=\"editing\" pButton type=\"button\" pCancelEditableRow icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"onRowEditCancel(rowData, ri)\"&gt;&lt;/button&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableEditDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    brands: SelectItem[];\n\n    clonedCars: &#123; [s: string]: Car; &#125; = &#123;&#125;;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.brands = [\n            &#123;label: 'Audi', value: 'Audi'&#125;,\n            &#123;label: 'BMW', value: 'BMW'&#125;,\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\n            &#123;label: 'Ford', value: 'Ford'&#125;,\n            &#123;label: 'Honda', value: 'Honda'&#125;,\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\n            &#123;label: 'Renault', value: 'Renault'&#125;,\n            &#123;label: 'VW', value: 'VW'&#125;,\n            &#123;label: 'Volvo', value: 'Volvo'&#125;\n        ];\n    &#125;\n\n    onRowEditInit(car: Car) &#123;\n        this.clonedCars[car.vin] = &#123;...car&#125;;\n    &#125;\n\n    onRowEditSave(car: Car) &#123;\n        if (car.year > 0)\n            delete this.clonedCars[car.vin];\n        else\n            this.messageService.add(&#123;severity:'error', summary: 'Error', detail:'Year is required'&#125;);\n    &#125;\n\n    onRowEditCancel(car: Car, index: number) &#123;\n        this.cars[index] = this.clonedCars[car.vin];\n        delete this.clonedCars[car.vin];\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/edit']\">live example.</a></p>\n\n            <h3>Expandable Rows</h3>\n            <p>Row expansion allows displaying detailed content for a particular row. To use this feature, add a template named rowexpansion and\n                use the <i>pRowToggler</i> directive whose value is the row data instance on an element of your choice whose click event toggles the expansion. This\n            enables providing your custom UI such as buttons, links and so on. Example below uses an anchor with an icon as a toggler. Setting <i>pRowTogglerDisabled</i> as true disables the toggle event for the element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\n                    &lt;i [ngClass]=\"expanded ? 'pi pi-fw pi-chevron-circle-down' : 'pi pi-fw pi-chevron-circle-right'\"&gt;&lt;/i&gt;\n                &lt;/a&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td [attr.colspan]=\"columns.length + 1\"&gt;\n                &lt;div class=\"p-grid -fluid\" style=\"font-size:16px;padding:20px\"&gt;\n                    &lt;div class=\"p-col-12 p-md-3\" style=\"text-align:center\"&gt;\n                        &lt;img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/&#123;&#123;rowData.brand&#125;&#125;.png\"&gt;\n                    &lt;/div&gt;\n                    &lt;div class=\"p-col-12 p-md-9\"&gt;\n                        &lt;div class=\"p-grid\"&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.vin&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Year:&lt;/b&gt; &#123;&#123;rowData.year&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Brand:&lt;/b&gt; &#123;&#123;rowData.brand&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Color:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\n                            &lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Multiple rows can be expanded at the same time, if you prefer a single row expansion at any time set <i>rowExpandMode</i> property to \"single\". All rows\n                are collapsed initially and providing <i>expandedRowKeys</i> property whose value is the dataKeys of the rows to be expanded enables rendering these rows as expanded. A dataKey must be defined\n                for this feature.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\" [expandedRowKeys]=\"expandedRows\"&gt;\n   ...\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/rowexpansion']\">live example.</a></p>\n\n            <h3>Column Resize</h3>\n            <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and\n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. <i>onColumnResize</i>\n            is a callback that passes the resized column header as a parameter. For dynamic columns, setting <i>pResizableColumnDisabled</i> property as true disables resizing for that particular column.\n            </p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:20%\"&gt;Vin&lt;/th&gt;\n            &lt;th style=\"width:30%\"&gt;Year&lt;/th&gt;\n            &lt;th style=\"width:15%\"&gt;Brand&lt;/th&gt;\n            &lt;th style=\"width:35%\"&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p><b>Note:</b> Scrollable tables require a column group to support resizing.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/colresize']\">live example.</a></p>\n\n            <h3>Column Reordering</h3>\n            <p>Columns can be reordered using drag drop by setting the <i>reorderableColumns</i> to true and adding <i>pReorderableColumn</i> directive to the columns that can be dragged. Note that\n                columns should be dynamic for reordering to work. For dynamic columns, setting <i>pReorderableColumnDisabled</i> property as true disables reordering for that particular column.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pReorderableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/colreorder']\">live example.</a></p>\n\n            <h3>Rows Reordering</h3>\n            <p>Row reordering is enabled by adding <i>pReorderableRow</i> directive with a row index binding to the rows that can be reordered with drag and drop. The optional <i>pReorderableRowDisabled</i> property is available\n                to disable dragging for a particular row. In addition, drag handle should get <i>pReorderableRowHandle</i> directive to specify which element is used to initiate the dragging.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:2em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\"&gt;\n        &lt;tr [pReorderableRow]=\"index\"&gt;\n            &lt;td&gt;\n                &lt;i class=\"pi pi-bars\" pReorderableRowHandle&gt;&lt;/i&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/reorder']\">live example.</a></p>\n\n            <h3>Data Export</h3>\n            <p>Table can export its data in CSV format using the built-in <i>exportCSV()</i> function. By default whole data is exported, if you'd like to export only the selection then pass a config object with selectionOnly property as true. Note that\n                columns should be dynamic for export functionality to work and column objects must define field/header properties.\n            </p>\n\n            <p>PDF and EXCEL export are also available using 3rd party libraries such as jspdf. Example below demonstrates how to implement all three export options.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div class=\"ui-helper-clearfix\" style=\"text-align: left\"&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"margin-right: 0.5em;\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"EXCEL\" (click)=\"exportExcel()\" style=\"margin-right: 0.5em;\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"CSV - Selection Only\" (click)=\"dt.exportCSV(&#123;selectionOnly:true&#125;)\" style=\"float:right\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableExportDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    selectedCars: Car[];\n\n    cols: any[];\n\n    columns: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.exportColumns = this.cols.map(col => (&#123;title: col.header, dataKey: col.field&#125;));\n    &#125;\n\n    exportPdf() &#123;\n        import(\"jspdf\").then(jsPDF => &#123;\n            import(\"jspdf-autotable\").then(x => &#123;\n                const doc = new jsPDF.default(0,0);\n                doc.autoTable(this.columns, this.cars);\n                doc.save('primengTable.pdf');\n            &#125;)\n        &#125;)\n    &#125;\n\n    exportExcel() &#123;\n        import(\"xlsx\").then(xlsx => &#123;\n            const worksheet = xlsx.utils.json_to_sheet(this.getCars());\n            const workbook = &#123; Sheets: &#123; 'data': worksheet &#125;, SheetNames: ['data'] &#125;;\n            const excelBuffer: any = xlsx.write(workbook, &#123; bookType: 'xlsx', type: 'array' &#125;);\n            this.saveAsExcelFile(excelBuffer, \"primengTable\");\n        &#125;);\n    &#125;\n\n    saveAsExcelFile(buffer: any, fileName: string): void &#123;\n        import(\"file-saver\").then(FileSaver => &#123;\n            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';\n            let EXCEL_EXTENSION = '.xlsx';\n            const data: Blob = new Blob([buffer], &#123;\n                type: EXCEL_TYPE\n            &#125;);\n            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);\n        &#125;);\n    &#125;\n\n    getCars() &#123;\n        let cars = [];\n        for(let car of this.cars) &#123;\n            car.year = car.year.toString();\n            cars.push(car);\n        &#125;\n        return cars;\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/export']\">live example.</a></p>\n\n            <h3>Scrolling</h3>\n            <p>Table supports both horizontal and vertical scrolling as well as frozen columns and rows. Additionally, <i>virtualScroll</i> mode enables dealing with large datasets by rendering data on demand during scrolling.</p>\n\n            <p>Sample below uses vertical scrolling where headers are fixed and data is scrollable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <h3>Flex Scroll</h3>\n            <p>In cases where viewport should adjust itself according to the table parent's height instead of a fixed viewport height, set <i>scrollHeight</i> option as <b>flex</b>. In example below,\n            table is inside a Dialog where viewport size dynamically responds to the dialog size changes such as resizing or maximizing.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-external-link\" label=\"View\"&gt;&lt;/button&gt;\n&lt;p-dialog header=\"Flexible ScrollHeight\" [(visible)]=\"dialogVisible\" [style]=\"&#123;width: '50vw'&#125;\" [baseZIndex]=\"10000\" [maximizable]=\"true\" [modal]=\"true\" [resizable]=\"true\" [contentStyle]=\"&#123;height: '300px'&#125;\"&gt;\n    &lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"flex\"&gt;\n        &lt;ng-template pTemplate=\"header\" let-columns&gt;\n            &lt;tr&gt;\n                &lt;th *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;col.header&#125;&#125;\n                &lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n            &lt;tr&gt;\n                &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-table&gt;\n    &lt;p-footer&gt;\n        &lt;button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"dialogVisible=false\" label=\"Yes\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"dialogVisible=false\" label=\"No\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;        \n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n            <h3>Full Page Scroll</h3>\n            <p>FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size. See the <a [routerLink]=\"['/table/flexscroll']\">Full Page</a> demo for an example.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"page-content\" style=\"height: calc(100vh - 100px)\"&gt;\n    &lt;p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"flex\" \n        [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\n        &lt;ng-template pTemplate=\"caption\"&gt;\n            Virtual Scrolling with Lazy Loading and Full Page Viewport \n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"header\" let-columns&gt;\n            &lt;tr&gt;\n                &lt;th *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;col.header&#125;&#125;\n                &lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n            &lt;tr style=\"height:34px\"&gt;\n                &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"loadingbody\" let-columns=\"columns\"&gt;\n            &lt;tr style=\"height:34px\"&gt;\n                &lt;td *ngFor=\"let col of columns\"&gt;\n                    &lt;div class=\"loading-text\"&gt;&lt;/div&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-table&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Horizontal Scroll</h3>\n            <p>In horizontal scrolling, it is required to give fixed widths to columns. In general when customizing the column widths of scrollable tables,\n                use colgroup as below to avoid misalignment issues as it will apply both the header, body and footer sections which are different separate elements internally.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n        <p>Horizontal and Vertical scrolling can be combined as well on the same table.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <h3>Frozen Rows and Columns</h3>\n            <p>Certain rows can be fixed by using the frozenValue property along with the \"frozenrows\" template.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars4\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Particular columns can be made fixed where others remain scrollable, there are two ways to implement this functionality, either\n                define a <i>frozenColumns</i> property if your frozen columns are dynamic or use <i>frozenbody</i> template. The width of the frozen section also\n                must be defined with frozenWidth property. Templates including header, body and footer apply to the frozen section as well, however\n                if require different content for the frozen section use <i>frozenheader</i>, <i>frozenbody</i> and <i>frozenfooter</i> instead. First example below uses\n                dynamic frozen columns and second one demonstrates how to use frozen templates with column grouping.\n            </p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:200px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-table [value]=\"sales\" [scrollable]=\"true\" scrollHeight=\"150px\" frozenWidth=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"frozenheader\"&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:200px;height:84px\"&gt;Brand&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenbody\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>When frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. To avoid a performance hit, Table avoids expensive calculations\n                to align the row heights as it can be easily done with templating.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n    &lt;tr style=\"30px\"&gt;\n        &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n        &lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n</code>\n</pre>\n\n            <p>When column widths need to vary or resizable columns is activated, use colgroup template to avoid misalignment issues and apply percentage values since table width is 100%.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" [style.width]=\"col.width\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <h3>Virtual Scrolling</h3>\n            <p>VirtualScroller is a performant approach to handle huge data efficiently. Setting <i>virtualScroll</i> property as true and providing a <i>virtualRowHeight</i> in pixels\n            would be enough to enable this functionality. It is also suggested to use the same virtualRowHeight value on the tr element inside the body template.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"250px\" \n    [virtualScroll]=\"true\" [virtualRowHeight]=\"34\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:34px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableVirtualScrollDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.cols = [\n            &#123;field: 'vin', header: 'Vin'&#125;,\n            &#123;field: 'year', header: 'Year'&#125;,\n            &#123;field: 'brand', header: 'Brand'&#125;,\n            &#123;field: 'color', header: 'Color'&#125;\n        ];\n\n        this.cars = Array.from(&#123;length: 10000&#125;).map(() => this.carService.generateCar());\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Example above uses preloaded data, in order to load data on demand, lazy mode should be enabled where chunks of data are loaded from a datasource on scroll. To implement lazy loading,\n               enable <i>lazy</i> attribute, initialize your data as a placeholder collection with a length and finally implement a method callback using onLazyLoad that actually loads a chunk from a datasource. onLazyLoad gets a LazyLoadEvent object\n               that contains information about the chunk of data to load such as the index and number of items to load. Notice that a special \"loadingbody\" template is available to provide feedback to the users\n                about the loading status of a scroll event.\n            </p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"250px\" \n    [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:34px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"loadingbody\" let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:34px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;div class=\"loading-text\"&gt;&lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableVirtualScrollDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    virtualCars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.cols = [\n            &#123;field: 'vin', header: 'Vin'&#125;,\n            &#123;field: 'year', header: 'Year'&#125;,\n            &#123;field: 'brand', header: 'Brand'&#125;,\n            &#123;field: 'color', header: 'Color'&#125;\n        ];\n\n        this.cars = Array.from(&#123;length: 10000&#125;).map(() => this.carService.generateCar());\n        this.virtualCars = Array.from(&#123;length: 10000&#125;);\n    &#125;\n\n    loadCarsLazy(event: LazyLoadEvent) &#123;       \n        //simulate remote connection with a timeout \n        setTimeout(() => &#123;\n            //load data of required page\n            let loadedCars = this.cars.slice(event.first, (event.first + event.rows));\n\n            //populate page of virtual cars\n            Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);\n            \n            //trigger change detection\n            this.virtualCars = [...this.virtualCars];\n        &#125;, Math.random() * 1000 + 250);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/scroll']\">scroll</a> and <a [routerLink]=\"['/table/virtualscroll']\">virtual scroll</a> examples.</p>\n\n            <h3>Lazy Loading</h3>\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n             onLazyLoad callback everytime paging, sorting and filtering happens. To implement lazy loading,\n            enable <i>lazy</i> attribute and provide a method callback using <i>onLazyLoad</i> that actually loads the data from a remote datasource. <i>onLazyLoad</i> gets an event object\n            that contains information about how the data should be loaded. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator\n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\n\n            <pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                 &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nloadData(event: LazyLoadEvent) &#123;\n    //event.first = First row offset\n    //event.rows = Number of rows per page\n    //event.sortField = Field name to sort in single sort mode\n    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode\n    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.\n    //filters: Filters object having field as key and filter value, filter matchMode as value\n    //globalFilter: Value of the global filter if available\n    this.cars = //do a request to a remote datasource using a service and return the cars that match the lazy load criteria\n&#125;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/lazy']\">live example.</a></p>\n\n            <h3>TableState</h3>\n            <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using its last settings.\n                Enabling state is easy as defining a unique <i>stateKey</i>, the storage to keep the state is defined with the <i>stateStorage</i> property that accepts session for sessionStorage and local for localStorage. Currently following features\n                are supported by TableState; paging, sorting, filtering, column resizing, column reordering, row expansion and row selection.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #dt1 [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" dataKey=\"vin\" [resizableColumns]=\"true\" [reorderableColumns]=\"true\"\n    selectionMode=\"single\" [(selection)]=\"selectedCar\" stateStorage=\"session\" stateKey=\"statedemo-session\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn pReorderableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" class=\"ui-fluid\"&gt;\n                &lt;input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt1.filters[col.field]?.value\"&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/responsive']\">live example.</a></p>\n\n            <h3>Responsive</h3>\n            <p>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. This feature is enabled\n            by setting responsive to true and adding an element whose class name is \"ui-column-title\" to the body cells.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;span class=\"ui-column-title\"&gt;&#123;&#123;col.header&#125;&#125;&lt;/span&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/responsive']\">live example.</a></p>\n\n            <h3>EmptyMessage</h3>\n            <p>When there is no data, <i>emptymessage</i> template can be used to display a message.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"emptymessage\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;td [attr.colspan]=\"columns.length\"&gt;\n                No records found\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <h3>Loading Status</h3>\n            <p>Table has a loading property, when enabled a spinner icon is displayed to indicate data load.\n                An optional <i>loadingIcon</i> property can be passed in case you'd like a different loading icon.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" [loading]=\"loading\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableDemo implements OnInit &#123;\n\n    loading: boolean;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.loading = true;\n        setTimeout(() => &#123;\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\n            this.loading = false;\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Styling Certain Rows and Columns</h3>\n            <p>Certain rows and cells can easily be styled using templating features. In example below, the row whose vin property is '123' will get the 'success' style class. Example here\n                paint the background of the last cell using a colgroup and highlights rows whose year is older than 2000.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col&gt;\n            &lt;col&gt;\n            &lt;col&gt;\n            &lt;col style=\"background-color:#FFD54F !important\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [ngClass]=\"rowData.year &gt; 2010 ? 'old-car' : null\"&gt;\n            &lt;td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] &lt; 2000 ? 'very-old-car' : null\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/style']\">live example.</a></p>\n\n            <h3>Performance Tips</h3>\n            <ul>\n                <li>When selection is enabled use dataKey to avoid deep checking when comparing objects.</li>\n                <li>Use rowTrackBy to avoid unnecessary dom operations.</li>\n                <li>Prefer lazy loading for large datasets.</li>\n            </ul>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>columns</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to represent dynamic columns.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenColumns</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to represent dynamic columns that are frozen.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenValue</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display as frozen.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>tableStyle</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Inline style of the table.</td>\n                        </tr>\n                        <tr>\n                            <td>tableStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the table.</td>\n                        </tr>\n                        <tr>\n                            <td>paginator</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified as true, enables the pagination.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of rows to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>first</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the first row to be displayed.</td>\n                        </tr>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of total records, defaults to length of value when not defined.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinks</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of page links to display in paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>rowsPerPageOptions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of integer/object values to display inside rows per page dropdown of paginator</td>\n                        </tr>\n                        <tr>\n                            <td>alwaysShowPaginator</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show it even there is only one page.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorPosition</td>\n                            <td>string</td>\n                            <td>bottom</td>\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\n                        </tr>\n                        <tr>\n                            <td>currentPageReportTemplate</td>\n                            <td>string</td>\n                            <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>\n                            <td>Template of the current page report element. Available placeholders are\n                                &#123;currentPage&#125;,&#123;totalPages&#125;,&#123;rows&#125;,&#123;first&#125;,&#123;last&#125; and &#123;totalRecords&#125;\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>showCurrentPageReport</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display current page report.</td>\n                        </tr>\n                        <tr>\n                            <td>sortMode</td>\n                            <td>string</td>\n                            <td>single</td>\n                            <td>Defines whether sorting works on single column or on multiple columns.</td>\n                        </tr>\n                        <tr>\n                            <td>sortField</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the field to sort data by default.</td>\n                        </tr>\n                        <tr>\n                            <td>sortOrder</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Order to sort when default sorting is enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>multiSortMeta</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>\n                        </tr>\n                        <tr>\n                            <td>rowGroupMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Type of the row grouping, valid values are \"subheader\" and \"rowspan\".</td>\n                        </tr>\n                        <tr>\n                            <td>defaultSortOrder</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Sort order to use when an unsorted column gets sorted by user interaction.</td>\n                        </tr>\n                        <tr>\n                            <td>customSort</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to use the default sorting or a custom one using sortFunction.</td>\n                        </tr>\n                        <tr>\n                            <td>sortFunction</td>\n                            <td>function</td>\n                            <td>null</td>\n                            <td>A function to implement custom sorting, refer to sorting section for details.</td>\n                        </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Specifies the selection mode, valid values are \"single\" and \"multiple\".</td>\n                        </tr>\n                        <tr>\n                            <td>selection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Selected row in single mode or an array of values in multiple mode.</td>\n                        </tr>\n                        <tr>\n                            <td>contextMenuSelection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Selected row with a context menu.</td>\n                        </tr>\n                        <tr>\n                            <td>contextMenuSelectionMode</td>\n                            <td>string</td>\n                            <td>separate</td>\n                            <td>Defines the behavior of context menu selection, in \"separate\" mode context menu updates contextMenuSelection propertty whereas in joint mode\n                                selection property is used instead so that when row selection is enabled, both row selection and context menu selection use the same property.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a record in data.</td>\n                        </tr>\n                        <tr>\n                            <td>metaKeySelection</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>rowTrackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\n                        </tr>\n                        <tr>\n                            <td>lazyLoadOnInit</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to call lazy loading on initialization.</td>\n                        </tr>\n                        <tr>\n                            <td>compareSelectionBy</td>\n                            <td>string</td>\n                            <td>deepEquals</td>\n                            <td>Algorithm to define if a row is selected, valid values are \"equals\" that compares by reference and \"deepEquals\" that compares all fields.</td>\n                        </tr>\n                        <tr>\n                            <td>csvSeparator</td>\n                            <td>string</td>\n                            <td>,</td>\n                            <td>Character to use as the csv separator.</td>\n                        </tr>\n                        <tr>\n                            <td>exportFilename</td>\n                            <td>string</td>\n                            <td>download</td>\n                            <td>Name of the exported file.</td>\n                        </tr>\n                        <tr>\n                            <td>filters</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of FilterMetadata objects to provide external filters.</td>\n                        </tr>\n                        <tr>\n                            <td>filterDelay</td>\n                            <td>number</td>\n                            <td>300</td>\n                            <td>Delay in milliseconds before filtering the data.</td>\n                        </tr>\n                        <tr>\n                            <td>globalFilterFields</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of fields as string to use in global filtering.</td>\n                        </tr>\n                        <tr>\n                            <td>filterLocale</td>\n                            <td>string</td>\n                            <td>undefined</td>\n                            <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>\n                        </tr>\n                        <tr>\n                            <td>expandedRowKeys</td>\n                            <td>&#123;[s: string]: boolean;&#125;</td>\n                            <td>null</td>\n                            <td>Map instance to keep the expanded rows where key of the map is the data key of the row.</td>\n                        </tr>\n                        <tr>\n                            <td>rowExpandMode</td>\n                            <td>string</td>\n                            <td>multiple</td>\n                            <td>Whether multiple rows can be expanded at any time. Valid values are \"multiple\" and \"single\".</td>\n                        </tr>\n                        <tr>\n                            <td>scrollable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specifies, enables horizontal and/or vertical scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Height of the scroll viewport in fixed pixels or the \"flex\" keyword for a dynamic size.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualScroll</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the data should be loaded on demand during scroll.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualRowHeight</td>\n                            <td>number</td>\n                            <td>28</td>\n                            <td>Height of a row to use in calculations of virtual scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenWidth</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Width of the frozen columns container.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if the columns should be stacked in smaller screens.</td>\n                        </tr>\n                        <tr>\n                            <td>contextMenu</td>\n                            <td>ContextMenu</td>\n                            <td>null</td>\n                            <td>Local ng-template varilable of a ContextMenu.</td>\n                        </tr>\n                        <tr>\n                            <td>resizableColumns</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, columns can be resized using drag and drop.</td>\n                        </tr>\n                        <tr>\n                            <td>columnResizeMode</td>\n                            <td>string</td>\n                            <td>fit</td>\n                            <td>Defines whether the overall table width should change on column resize, valid values are \"fit\" and \"expand\".</td>\n                        </tr>\n                        <tr>\n                            <td>reorderableColumns</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, columns can be reordered using drag and drop.</td>\n                        </tr>\n                        <tr>\n                            <td>loading</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays a loader to indicate data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>loadingIcon</td>\n                            <td>string</td>\n                            <td>pi-circle-o-notch</td>\n                            <td>The icon to show while indicating data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>showLoader</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show the loading mask when loading property is true.</td>\n                        </tr>\n                        <tr>\n                            <td>rowHover</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Adds hover effect to rows without the need for selectionMode. Note that tr elements that can be hovered need to have \"ui-selectable-row\" class for rowHover to work.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorDropdownAppendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the paginator dropdown overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorDropdownScrollHeight</td>\n                            <td>string</td>\n                            <td>200px</td>\n                            <td>Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>\n                        </tr>\n                        <tr>\n                            <td>autoLayout</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the cell widths scale according to their content or not.</td>\n                        </tr>\n                        <tr>\n                            <td>resetPageOnSort</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When true, resets paginator to first page after sorting. Available only when sortMode is set to single.</td>\n                        </tr>\n                        <tr>\n                            <td>exportFunction</td>\n                            <td>function</td>\n                            <td>null</td>\n                            <td>A function to implement custom export. Need to return string value.<br/>\n                                event.data: Field data.<br>\n                                event.field: Column field.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>stateKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Unique identifier of a stateful table to use in state storage.</td>\n                        </tr>\n                        <tr>\n                            <td>stateStorage</td>\n                            <td>string</td>\n                            <td>session</td>\n                            <td>Defines where a stateful table keeps its state, valid values are \"session\" for sessionStorage and \"local\" for localStorage.</td>\n                        </tr>\n                        <tr>\n                            <td>editMode</td>\n                            <td>string</td>\n                            <td>cell</td>\n                            <td>Defines the editing mode, valid values are \"cell\" and \"row\".</td>\n                        </tr>\n                        <tr>\n                            <td>editingRowKeys</td>\n                            <td>&#123;[s: string]: boolean;&#125;</td>\n                            <td>null</td>\n                            <td>Map instance to keep the rows being edited where key of the map is the data key of the row.</td>\n                        </tr>\n                        <tr>\n                            <td>minBufferPx</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Minimum amount of content buffer (in pixels) that the viewport must render.</td>\n                        </tr>\n                        <tr>\n                            <td>maxBufferPx</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Configures how much buffer space to render back up to when it detects that more buffer is required.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onRowSelect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data <br >\n                                event.type: Type of selection, valid values are \"row\", \"radiobutton\" and \"checkbox\"<br>\n                                event.index: Index of the row\n                            </td>\n                            <td>Callback to invoke when a row is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowUnselect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Unselected data <br >\n                                event.type: Type of unselection, valid values are \"row\" and \"checkbox\"</td>\n                            <td>Callback to invoke when a row is unselected.</td>\n                        </tr>\n                        <tr>\n                            <td>onPage</td>\n                            <td>event.first: Index of first record in page<br>\n                                event.rows: Number of rows on the page</td>\n                            <td>Callback to invoke when pagination occurs.</td>\n                        </tr>\n                        <tr>\n                            <td>onSort</td>\n                            <td>event.field: Field name of the sorted column<br>\n                                event.order: Sort order as 1 or -1<br>\n                                event.multisortmeta: Sort metadata in multi sort mode. See multiple sorting section for the structure of this object.</td>\n                            <td>Callback to invoke when a column gets sorted.</td>\n                        </tr>\n                        <tr>\n                            <td>onFilter</td>\n                            <td>event.filters: Filters object having a field as the property key and an object with value, matchMode as the property value.<br>\n                                event.filteredValue: Filtered data after running the filtering.</td>\n                            <td>Callback to invoke when data is filtered.</td>\n                        </tr>\n                        <tr>\n                            <td>onLazyLoad</td>\n                            <td>event.first = First row offset <br>\n                                event.rows = Number of rows per page <br>\n                                event.sortField = Field name to sort with <br>\n                                event.sortOrder = Sort order as number, 1 for asc and -1 for dec <br>\n                                event.multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.<br>\n                                event.filters: FilterMetadata object having field as key and filter value, filter matchMode as value<br>\n                                event.globalFilter: Value of the global filter if available</td>\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowExpand</td>\n                            <td>event.originalEvent: Browser event<br>\n                                data: Row data to expand.</td>\n                            <td>Callback to invoke when a row is expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowCollapse</td>\n                            <td>event.originalEvent: Browser event<br>\n                                data: Row data to collapse.</td>\n                            <td>Callback to invoke when a row is collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>onContextMenuSelect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data</td>\n                            <td>Callback to invoke when a row is selected with right click.</td>\n                        </tr>\n                        <tr>\n                            <td>onColResize</td>\n                            <td>event.element: Resized column header <br>\n                                event.delta: Change of width in number of pixels</td>\n                            <td>Callback to invoke when a column is resized.</td>\n                        </tr>\n                        <tr>\n                            <td>onColReorder</td>\n                            <td>event.dragIndex: Index of the dragged column <br>\n                                event.dropIndex: Index of the dropped column <br>\n                                event.columns: Columns array after reorder</td>\n                            <td>Callback to invoke when a column is reordered.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowReorder</td>\n                            <td>event.dragIndex: Index of the dragged row<br>\n                                event.dropIndex: Index of the drop location</td>\n                            <td>Callback to invoke when a row is reordered.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditInit</td>\n                            <td>event.field: Column object of the cell<br>\n                                event.data: Row data</td>\n                            <td>Callback to invoke when a cell switches to edit mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditComplete</td>\n                            <td>event.field: Column object of the cell<br>\n                                event.data: Row data <br />\n                                event.originalEvent: Browser event</td>\n                            <td>Callback to invoke when cell edit is completed.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditCancel</td>\n                            <td>event.field: Column object of the cell<br>\n                                event.data: Row data <br />\n                                event.originalEvent: Browser event</td>\n                            <td>Callback to invoke when cell edit is cancelled with escape key.</td>\n                        </tr>\n                        <tr>\n                            <td>onHeaderCheckboxToggle</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.checked: State of the header checkbox</td>\n                            <td>Callback to invoke when state of header checkbox changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onStateSave</td>\n                            <td>state: Table state</td>\n                            <td>Callback to invoke table state is saved.</td>\n                        </tr>\n                        <tr>\n                            <td>onStateRestore</td>\n                            <td>state: Table state</td>\n                            <td>Callback to invoke table state is restored.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>reset</td>\n                            <td>-</td>\n                            <td>Resets sort, filter and paginator state.</td>\n                        </tr>\n                        <tr>\n                            <td>clearState</td>\n                            <td>-</td>\n                            <td>Clears table state.</td>\n                        </tr>\n                        <tr>\n                            <td>exportCSV</td>\n                            <td>config?.selectionOnly: Exports only the selection.</td>\n                            <td>Exports the data in csv format.</td>\n                        </tr>\n                        <tr>\n                            <td>closeCellEdit</td>\n                            <td>-</td>\n                            <td>Closes the editing cell.</td>\n                        </tr>\n                        <tr>\n                            <td>resetScrollTop</td>\n                            <td>-</td>\n                            <td>Resets the scrollable table scroll position to the beginning.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollToVirtualIndex</td>\n                            <td>index</td>\n                            <td>Scrolls to the row with the given index when virtual scrolling is enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollTo</td>\n                            <td>options.left: Specifies the number of pixels along the X axis<br/>\n                                options.top: Specifies the number of pixels along the Y axis<br />\n                                options.behavior: Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto).</td>\n                            <td>Scrolls to a position of a scrollable table viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>clearCache</td>\n                            <td>-</td>\n                            <td>Clears the loaded items in lazy mode.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-table</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-caption</td>\n                            <td>Caption element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-summary</td>\n                            <td>Section section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sortable-column</td>\n                            <td>Sortable column header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-header</td>\n                            <td>Container of header in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-body</td>\n                            <td>Container of body in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-footer</td>\n                            <td>Container of footer in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-responsive</td>\n                            <td>Container element of a responsive table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-loading</td>\n                            <td>Loader mask.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-loading-content</td>\n                            <td>Loader content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-wrapper</td>\n                            <td>Loader content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-wrapper</td>\n                            <td>Loader content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-column-resizer-helper</td>\n                            <td>Vertical resize indicator bar. To show the resize indicator bar set the \"background-color\" property.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-reorder-indicator-top</td>\n                            <td>Top indicator of column reordering.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-reorder-indicator-top</td>\n                            <td>Bottom indicator of column reordering.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tabledoc-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #dt [value]=\"customers\" [(selection)]=\"selectedCustomers\" dataKey=\"id\" styleClass=\"ui-table-customers\" [rowHover]=\"true\"\n    [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\"\n    [paginator]=\"true\" currentPageReportTemplate=\"Showing &#123;first&#125; to &#123;last&#125; of &#123;totalRecords&#125; entries\"\n    [filterDelay]=\"0\" [globalFilterFields]=\"['name','country.name','representative.name','status']\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n        &lt;div class=\"ui-table-globalfilter-container\"&gt;\n            &lt;input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Global Search\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"name\"&gt;Name &lt;p-sortIcon field=\"name\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"country.name\"&gt;Country &lt;p-sortIcon field=\"country.name\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"representative.name\"&gt;Representative &lt;p-sortIcon field=\"representative.name\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"date\"&gt;Date &lt;p-sortIcon field=\"date\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"status\"&gt;Status &lt;p-sortIcon field=\"status\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"activity\"&gt;Activity &lt;p-sortIcon field=\"activity\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th&gt;&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;\n                &lt;p-tableHeaderCheckbox&gt;&lt;/p-tableHeaderCheckbox&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'name', 'startsWith')\" placeholder=\"Search by Name\" class=\"ui-column-filter\"&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'country.name', 'contains')\" placeholder=\"Search by Country\" class=\"ui-column-filter\"&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;p-multiSelect [options]=\"representatives\" placeholder=\"All\" (onChange)=\"onRepresentativeChange($event)\" styleClass=\"ui-column-filter\" optionLabel=\"name\"&gt;\n                    &lt;ng-template let-option pTemplate=\"item\"&gt;\n                        &lt;div class=\"ui-multiselect-representative-option\"&gt;\n                            &lt;img [alt]=\"option.label\" src=\"assets/showcase/images/demo/avatar/&#123;&#123;option.value.image&#125;&#125;\" width=\"32\" /&gt;\n                            &lt;span&gt;&#123;&#123;option.label&#125;&#125;&lt;/span&gt;\n                        &lt;/div&gt;\n                    &lt;/ng-template&gt;\n                &lt;/p-multiSelect&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;p-calendar (onSelect)=\"onDateSelect($event)\" (onClearClick)=\"dt.filter('', 'date', 'equals')\" [showButtonBar]=\"true\" styleClass=\"ui-column-filter\" placeholder=\"Registration Date\" [readonlyInput]=\"true\" dateFormat=\"yy-mm-dd\"&gt;&lt;/p-calendar&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;p-dropdown [options]=\"statuses\" (onChange)=\"dt.filter($event.value, 'status', 'equals')\" styleClass=\"ui-column-filter\" placeholder=\"Select a Status\" [showClear]=\"true\"&gt;\n                    &lt;ng-template let-option pTemplate=\"item\"&gt;\n                        &lt;span [class]=\"'customer-badge status-' + option.value\"&gt;&#123;&#123;option.label&#125;&#125;&lt;/span&gt;\n                    &lt;/ng-template&gt;\n                &lt;/p-dropdown&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;input pInputText type=\"text\" (input)=\"onActivityChange($event)\" placeholder=\"Minimum\" class=\"ui-column-filter\" &gt;\n            &lt;/th&gt;\n            &lt;th&gt;&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-customer&gt;\n        &lt;tr class=\"ui-selectable-row\"&gt;\n            &lt;td&gt;\n                &lt;p-tableCheckbox [value]=\"customer\"&gt;&lt;/p-tableCheckbox&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;span class=\"ui-column-title\"&gt;Name&lt;/span&gt;\n                &#123;&#123;customer.name&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;span class=\"ui-column-title\"&gt;Country&lt;/span&gt;\n                &lt;span [class]=\"'flag flag-' + customer.country.code\"&gt;&lt;/span&gt;\n                &lt;span style=\"vertical-align: middle; margin-left: .5em\"&gt;&#123;&#123;customer.country.name&#125;&#125;&lt;/span&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;span class=\"ui-column-title\"&gt;Representative&lt;/span&gt;\n                &lt;img [alt]=\"customer.representative.name\" src=\"assets/showcase/images/demo/avatar/&#123;&#123;customer.representative.image&#125;&#125;\" width=\"32\" style=\"vertical-align: middle\" /&gt;\n                &lt;span style=\"vertical-align: middle; margin-left: .5em\"&gt;&#123;&#123;customer.representative.name&#125;&#125;&lt;/span&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;span class=\"ui-column-title\"&gt;Country&lt;/span&gt;\n                &#123;&#123;customer.date&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;span class=\"ui-column-title\"&gt;Status&lt;/span&gt;\n                &lt;span [class]=\"'customer-badge status-' + customer.status\"&gt;&#123;&#123;customer.status&#125;&#125;&lt;/span&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;span class=\"ui-column-title\"&gt;Activity&lt;/span&gt;\n                &lt;p-progressBar [value]=\"customer.activity\" [showValue]=\"false\"&gt;&lt;/p-progressBar&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"&gt;&lt;/button&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"emptymessage\"&gt;\n        &lt;tr&gt;\n            &lt;td colspan=\"8\" style=\"text-align:left\"&gt;No customers found.&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableDemo implements OnInit &#123;\n\n    customers: Customer[];\n\n    selectedCustomers: Customer[];\n\n    representatives: Representative[];\n\n    statuses: any[];\n\n    loading: boolean = true;\n\n    @ViewChild('dt') table: Table;\n\n    constructor(private customerService: CustomerService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.customerService.getCustomersLarge().then(customers => &#123;\n            this.customers = customers;\n            this.loading = false;\n        &#125;);\n\n        this.representatives = [\n            &#123;name: \"Amy Elsner\", image: 'amyelsner.png'&#125;,\n            &#123;name: \"Anna Fali\", image: 'annafali.png'&#125;,\n            &#123;name: \"Asiya Javayant\", image: 'asiyajavayant.png'&#125;,\n            &#123;name: \"Bernardo Dominic\", image: 'bernardodominic.png'&#125;,\n            &#123;name: \"Elwin Sharvill\", image: 'elwinsharvill.png'&#125;,\n            &#123;name: \"Ioni Bowcher\", image: 'ionibowcher.png'&#125;,\n            &#123;name: \"Ivan Magalhaes\",image: 'ivanmagalhaes.png'&#125;,\n            &#123;name: \"Onyama Limba\", image: 'onyamalimba.png'&#125;,\n            &#123;name: \"Stephen Shaw\", image: 'stephenshaw.png'&#125;,\n            &#123;name: \"XuXue Feng\", image: 'xuxuefeng.png'&#125;\n        ];\n\n        this.statuses = [\n            &#123;label: 'Unqualified', value: 'unqualified'&#125;,\n            &#123;label: 'Qualified', value: 'qualified'&#125;,\n            &#123;label: 'New', value: 'new'&#125;,\n            &#123;label: 'Negotiation', value: 'negotiation'&#125;,\n            &#123;label: 'Renewal', value: 'renewal'&#125;,\n            &#123;label: 'Proposal', value: 'proposal'&#125;\n        ]\n    &#125;\n\n    onActivityChange(event) &#123;\n        const value = event.target.value;\n        if (value && value.trim().length) &#123;\n            const activity = parseInt(value);\n\n            if (!isNaN(activity)) &#123;\n                this.table.filter(activity, 'activity', 'gte');\n            &#125;\n        &#125;\n    &#125;\n\n    onDateSelect(value) &#123;\n        this.table.filter(this.formatDate(value), 'date', 'equals')\n    &#125;\n\n    formatDate(date) &#123;\n        let month = date.getMonth() + 1;\n        let day = date.getDate();\n\n        if (month &lt; 10) &#123;\n            month = '0' + month;\n        &#125;\n\n        if (day &lt; 10) &#123;\n            day = '0' + day;\n        &#125;\n\n        return date.getFullYear() + '-' + month + '-' + day;\n    &#125;\n\n    onRepresentativeChange(event) &#123;\n        debugger;\n        this.table.filter(event.value, 'representative', 'in')\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n:host ::ng-deep .ui-table-customers &#123;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n    .customer-badge &#123;\n        border-radius: 2px;\n        padding: .25em .5em;\n        text-transform: uppercase;\n        font-weight: 700;\n        font-size: 12px;\n        letter-spacing: .3px;\n\n        &.status-qualified &#123;\n            background-color: #C8E6C9;\n            color: #256029;\n        &#125;\n\n        &.status-unqualified &#123;\n            background-color: #FFCDD2;\n            color: #C63737;\n        &#125;\n\n        &.status-negotiation &#123;\n            background-color: #FEEDAF;\n            color: #8A5340;\n        &#125;\n\n        &.status-new &#123;\n            background-color: #B3E5FC;\n            color: #23547B;\n        &#125;\n\n        &.status-renewal &#123;\n            background-color: #ECCFFF;\n            color: #694382;\n        &#125;\n\n        &.status-proposal &#123;\n            background-color: #FFD8B2;\n            color: #805B36;\n        &#125;\n    &#125;\n\n    .flag &#123;\n        vertical-align: middle;\n        width: 30px;\n        height: 20px;\n    &#125;\n\n    .ui-multiselect-representative-option &#123;\n        display: inline-block;\n        vertical-align: middle;\n\n        img &#123;\n            vertical-align: middle;\n            width: 24px;\n        &#125;\n\n        span &#123;\n            margin-top: .125em;\n            vertical-align: middle;\n            margin-left: .5em\n        &#125;\n    &#125;\n\n    .ui-paginator &#123;\n        .ui-dropdown &#123;\n            float: left;\n        &#125;\n\n        .ui-paginator-current &#123;\n            float: right;\n        &#125;\n    &#125;\n\n    .ui-progressbar &#123;\n        height: 8px;\n        background-color: #D8DADC;\n\n        .ui-progressbar-value &#123;\n            background-color: #00ACAD;\n        &#125;\n    &#125;\n\n    .ui-column-filter &#123;\n        display: block;\n\n        input &#123;\n            width: 100%;\n        &#125;\n    &#125;\n\n    .ui-table-globalfilter-container &#123;\n        float: right;\n\n        input &#123;\n            width: 200px;\n        &#125;\n    &#125;\n\n    .ui-datepicker &#123;\n        min-width: 25em;\n\n        td &#123;\n            font-weight: 400;\n        &#125;\n    &#125;\n\n    .ui-table-caption &#123;\n        border: 0 none;\n        padding: 12px;\n        text-align: left;\n        font-size: 20px;\n    &#125;\n\n    .ui-paginator &#123;\n        border: 0 none;\n        padding: 1em;\n    &#125;\n\n    .ui-table-thead > tr > th &#123;\n        border: 0 none;\n        text-align: left;\n\n        &.ui-filter-column &#123;\n            border-top: 1px solid #c8c8c8;\n        &#125;\n\n        &:first-child &#123;\n            width: 5em;\n            text-align: center;\n        &#125;\n\n        &:last-child &#123;\n            width: 8em;\n            text-align: center;\n        &#125;\n    &#125;\n\n    .ui-table-tbody > tr > td &#123;\n        border: 0 none;\n        cursor: auto;\n\n        &:first-child &#123;\n            width: 3em;\n            text-align: center;\n        &#125;\n\n        &:last-child &#123;\n            width: 8em;\n            text-align: center;\n        &#125;\n    &#125;\n\n    .ui-dropdown-label:not(.ui-placeholder) &#123;\n        text-transform: uppercase;\n    &#125;\n\n    .ui-table-tbody > tr > td .ui-column-title &#123;\n        display: none;\n    &#125;\n&#125;\n\n/* Responsive */\n@media screen and (max-width: 64em) &#123;\n    :host ::ng-deep .ui-table &#123;\n        &.ui-table-customers &#123;\n            .ui-table-thead > tr > th,\n            .ui-table-tfoot > tr > td &#123;\n                display: none !important;\n            &#125;\n\n            .ui-table-tbody > tr > td &#123;\n                text-align: left;\n                display: block;\n                border: 0 none !important;\n                width: 100% !important;\n                float: left;\n                clear: left;\n                border: 0 none;\n\n                .ui-column-title &#123;\n                    padding: .4em;\n                    min-width: 30%;\n                    display: inline-block;\n                    margin: -.4em 1em -.4em -.4em;\n                    font-weight: bold;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tabledoc-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tabledynamicdemo.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tabledynamicdemo.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tabledynamicdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Dynamic Columns</span></span>\n        <span>Dynamic columns can be created using the standard *ngFor directive.</span>\n    </div>\n</div>\n\n<div [ngClass]=\"{'content-section implementation': true}\">\n    <h3>Dynamic Columns</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                        {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tableeditdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tabledynamic-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableDynamicDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123;field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableeditdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tabledynamic-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Dynamic Columns&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tabledynamic-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableeditdemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableeditdemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tableeditdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Edit</span></span>\n        <span>Cell and Row editing provides a rapid and user friendly way to manipulate data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <h3 class=\"first\">Cell Editing</h3>\n    <p-table [value]=\"cars1\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Brand</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData>\n            <tr>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.vin\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.vin}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.year\" required>\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.year}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <p-dropdown [options]=\"brands\" [(ngModel)]=\"rowData.brand\" [style]=\"{'width':'100%'}\"></p-dropdown>\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.brand}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.color\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.color}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Row Editing</h3>\n    <p-table [value]=\"cars2\" dataKey=\"vin\" editMode=\"row\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Brand</th>\n                <th>Color</th>\n                <th style=\"width:8em\"></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\">\n            <tr [pEditableRow]=\"rowData\">\n                <td>\n                    {{rowData.vin}}\n                </td>\n                <td>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.year\" required [ngStyle]=\"{'width':'100%'}\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.year}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <p-dropdown [options]=\"brands\" [(ngModel)]=\"rowData.brand\" [style]=\"{'width':'100%'}\"></p-dropdown>\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.brand}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.color\" [ngStyle]=\"{'width':'100%'}\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.color}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td style=\"text-align:center\">\n                    <button *ngIf=\"!editing\" pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEditInit(rowData)\"></button>\n                    <button *ngIf=\"editing\" pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"></button>\n                    <button *ngIf=\"editing\" pButton type=\"button\" pCancelEditableRow icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"onRowEditCancel(rowData, ri)\"></button>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tableeditdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tableedit-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableEditDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    brands: SelectItem[];\n\n    clonedCars: &#123; [s: string]: Car; &#125; = &#123;&#125;;\n\n    constructor(private carService: CarService, private messageService: MessageService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n\n        this.brands = [\n            &#123;label: 'Audi', value: 'Audi'&#125;,\n            &#123;label: 'BMW', value: 'BMW'&#125;,\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\n            &#123;label: 'Ford', value: 'Ford'&#125;,\n            &#123;label: 'Honda', value: 'Honda'&#125;,\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\n            &#123;label: 'Renault', value: 'Renault'&#125;,\n            &#123;label: 'VW', value: 'VW'&#125;,\n            &#123;label: 'Volvo', value: 'Volvo'&#125;\n        ];\n    &#125;\n\n    onRowEditInit(car: Car) &#123;\n        this.clonedCars[car.vin] = &#123;...car&#125;;\n    &#125;\n\n    onRowEditSave(car: Car) &#123;\n        if (car.year > 0) &#123;\n            delete this.clonedCars[car.vin];\n            this.messageService.add(&#123;severity:'success', summary: 'Success', detail:'Car is updated'&#125;);\n        &#125;\n        else &#123;\n            this.messageService.add(&#123;severity:'error', summary: 'Error', detail:'Year is required'&#125;);\n        &#125;\n    &#125;\n\n    onRowEditCancel(car: Car, index: number) &#123;\n        this.cars2[index] = this.clonedCars[car.vin];\n        delete this.clonedCars[car.vin];\n    &#125;\n\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableeditdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tableedit-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData&gt;\n        &lt;tr&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData.vin\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.vin&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData.year\" required&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.year&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;p-dropdown [options]=\"brands\" [(ngModel)]=\"rowData.brand\" [style]=\"&#123;'width':'100%'&#125;\"&gt;&lt;/p-dropdown&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.brand&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.color&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Row Editing&lt;/h3&gt;\n&lt;p-table [value]=\"cars2\" dataKey=\"vin\" editMode=\"row\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n            &lt;th style=\"width:8em\"&gt;&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\"&gt;\n        &lt;tr [pEditableRow]=\"rowData\"&gt;\n            &lt;td&gt;\n                &#123;&#123;rowData.vin&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData.year\" required&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.year&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;p-dropdown [options]=\"brands\" [(ngModel)]=\"rowData.brand\" [style]=\"&#123;'width':'100%'&#125;\"&gt;&lt;/p-dropdown&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.brand&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input pInputText type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.color&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td style=\"text-align:center\"&gt;\n                &lt;button *ngIf=\"!editing\" pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\" (click)=\"onRowEditInit(rowData)\"&gt;&lt;/button&gt;\n                &lt;button *ngIf=\"editing\" pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\" class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"&gt;&lt;/button&gt;\n                &lt;button *ngIf=\"editing\" pButton type=\"button\" pCancelEditableRow icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"onRowEditCancel(rowData, ri)\"&gt;&lt;/button&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tableedit-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tableedit-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableexportdemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableexportdemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tableexportdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Export</span></span>\n        <span>Table can export its data to CSV format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\">\n        <ng-template pTemplate=\"caption\">\n            <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n                <button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"margin-right: 0.5em;\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"EXCEL\" (click)=\"exportExcel()\" style=\"margin-right: 0.5em;\" class=\"ui-button-success\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"ui-button-warning\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"CSV - Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button>\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tableexportdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableexportdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableExportDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    selectedCars: Car[];\n\n    cols: any[];\n\n    exportColumns: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.exportColumns = this.cols.map(col => (&#123;title: col.header, dataKey: col.field&#125;));\n    &#125;\n\n    exportPdf() &#123;\n        import(\"jspdf\").then(jsPDF => &#123;\n            import(\"jspdf-autotable\").then(x => &#123;\n                const doc = new jsPDF.default(0,0);\n                doc.autoTable(this.exportColumns, this.cars);\n                doc.save('primengTable.pdf');\n            &#125;)\n        &#125;)\n    &#125;\n\n    exportExcel() &#123;\n        import(\"xlsx\").then(xlsx => &#123;\n            const worksheet = xlsx.utils.json_to_sheet(this.getCars());\n            const workbook = &#123; Sheets: &#123; 'data': worksheet &#125;, SheetNames: ['data'] &#125;;\n            const excelBuffer: any = xlsx.write(workbook, &#123; bookType: 'xlsx', type: 'array' &#125;);\n            this.saveAsExcelFile(excelBuffer, \"primengTable\");\n        &#125;);\n    &#125;\n\n    saveAsExcelFile(buffer: any, fileName: string): void &#123;\n        import(\"file-saver\").then(FileSaver => &#123;\n            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';\n            let EXCEL_EXTENSION = '.xlsx';\n            const data: Blob = new Blob([buffer], &#123;\n                type: EXCEL_TYPE\n            &#125;);\n            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);\n        &#125;);\n    &#125;\n\n    getCars() &#123;\n        let cars = [];\n        for(let car of this.cars) &#123;\n            car.year = car.year.toString();\n            cars.push(car);\n        &#125;\n        return cars;\n    &#125;\n&#125; \n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableexportdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableexportdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div class=\"ui-helper-clearfix\" style=\"text-align: left\"&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"margin-right: 0.5em;\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file-excel\" iconPos=\"left\" label=\"EXCEL\" (click)=\"exportExcel()\" style=\"margin-right: 0.5em;\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file-pdf\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"CSV - Selection Only\" (click)=\"dt.exportCSV(&#123;selectionOnly:true&#125;)\" style=\"float:right\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablefilterdemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablefilterdemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablefilterdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Filter</span></span>\n        <span>Filtering reduces the data by running a search using column filters and an optional global filter.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation ui-fluid\">\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"caption\">\n            <div style=\"text-align: right\">\n                <i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"></i>\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n            <tr>\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                    <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                    <div *ngSwitchCase=\"'year'\">\n                        Value > {{yearFilter}}\n                        <i class=\"pi pi-times\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"yearFilter\"></i>\n                        <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"></p-slider>\n                    </div>\n                    <p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n                    <p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"></p-multiSelect>\n                    <input *ngSwitchCase=\"'price'\" pInputText type=\"text\" placeholder=\"Custom - Greater Than\" (input)=\"dt.filter($event.target.value, col.field, 'custom')\">\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablefilterdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablefilterdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablefilter-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableFilterDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    brands: SelectItem[];\n\n    colors: SelectItem[];\n\n    yearFilter: number;\n\n    yearTimeout: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n\n        this.brands = [\n            &#123; label: 'All Brands', value: null &#125;,\n            &#123; label: 'Audi', value: 'Audi' &#125;,\n            &#123; label: 'BMW', value: 'BMW' &#125;,\n            &#123; label: 'Fiat', value: 'Fiat' &#125;,\n            &#123; label: 'Honda', value: 'Honda' &#125;,\n            &#123; label: 'Jaguar', value: 'Jaguar' &#125;,\n            &#123; label: 'Mercedes', value: 'Mercedes' &#125;,\n            &#123; label: 'Renault', value: 'Renault' &#125;,\n            &#123; label: 'VW', value: 'VW' &#125;,\n            &#123; label: 'Volvo', value: 'Volvo' &#125;\n        ];\n\n        this.colors = [\n            &#123; label: 'White', value: 'White' &#125;,\n            &#123; label: 'Green', value: 'Green' &#125;,\n            &#123; label: 'Silver', value: 'Silver' &#125;,\n            &#123; label: 'Black', value: 'Black' &#125;,\n            &#123; label: 'Red', value: 'Red' &#125;,\n            &#123; label: 'Maroon', value: 'Maroon' &#125;,\n            &#123; label: 'Brown', value: 'Brown' &#125;,\n            &#123; label: 'Orange', value: 'Orange' &#125;,\n            &#123; label: 'Blue', value: 'Blue' &#125;\n        ];\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        FilterUtils['custom'] = (value, filter): boolean => &#123;\n            if (filter === undefined || filter === null || filter.trim() === '') &#123;\n                return true;\n            &#125;\n    \n            if (value === undefined || value === null) &#123;\n                return false;\n            &#125;\n            \n            return parseInt(filter) > value;\n        &#125;\n    &#125;\n\n    onYearChange(event, dt) &#123;\n        if (this.yearTimeout) &#123;\n            clearTimeout(this.yearTimeout);\n        &#125;\n\n        this.yearTimeout = setTimeout(() => &#123;\n            dt.filter(event.value, 'year', 'gt');\n        &#125;, 250);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablefilterdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablefilterdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablefilter-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div style=\"text-align: right\"&gt;        \n            &lt;i class=\"pi pi-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\n            &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\"&gt;\n                &lt;div *ngSwitchCase=\"'year'\"&gt;\n                    Value &gt; &#123;&#123;yearFilter&#125;&#125;\n                    &lt;i class=\"pi pi-times\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"yearFilter\"&gt;&lt;/i&gt;\n                    &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"&gt;&lt;/p-slider&gt;\n                &lt;/div&gt;\n                &lt;p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"&gt;&lt;/p-dropdown&gt;\n                &lt;p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"&gt;&lt;/p-multiSelect&gt;\n                &lt;input *ngSwitchCase=\"'price'\" pInputText type=\"text\" placeholder=\"Custom - Greater Than\" (input)=\"dt.filter($event.target.value, col.field, 'custom')\"&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablefilter-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableflexscrolldemo.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableflexscrolldemo.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tableflexscrolldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section implementation\" style=\"height: calc(100vh - 149px)\">\n    <p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"flex\" \n        [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\">\n        <ng-template pTemplate=\"caption\">\n            Virtual Scrolling with Lazy Loading and Full Page Viewport \n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr style=\"height:34px\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"loadingbody\" let-columns=\"columns\">\n            <tr style=\"height:34px\">\n                <td *ngFor=\"let col of columns\">\n                    <div class=\"loading-text\"></div>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablelazydemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablelazydemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablelazydemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Lazy</span></span>\n        <span>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n            onLazyLoad callback everytime paging, sorting and filtering happens. Sample belows imitates lazy paging by using an in memory list.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" \n        [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablelazydemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablelazydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablelazy-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableLazyDemo implements OnInit &#123;\n\n    datasource: Car[];\n\n    cars: Car[];\n\n    totalRecords: number;\n\n    cols: any[];\n\n    loading: boolean;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        //datasource imitation\n        this.carService.getCarsLarge().then(cars => &#123;\n            this.datasource = cars;\n            this.totalRecords = this.datasource.length;\n        &#125;);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.loading = true;\n    &#125;\n\n    loadCarsLazy(event: LazyLoadEvent) &#123;\n        this.loading = true;\n\n        //in a real application, make a remote request to load data using state metadata from event\n        //event.first = First row offset\n        //event.rows = Number of rows per page\n        //event.sortField = Field name to sort with\n        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec\n        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value\n\n        //imitate db connection over a network\n        setTimeout(() => &#123;\n            if (this.datasource) &#123;\n                this.cars = this.datasource.slice(event.first, (event.first + event.rows));\n                this.loading = false;\n            &#125;\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablelazydemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablelazydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablelazy-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [paginator]=\"true\" \n    [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablelazy-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablepagedemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablepagedemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablepagedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Page</span></span>\n        <span>Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page. For server side pagination, see the <a [routerLink]=\"['/table/lazy']\">lazy loading</a> example.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Implicit Pagination</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n        currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Programmatic Control</h3>\n    <div style=\"margin-bottom: 1em\">\n        <button type=\"button\" pButton icon=\"pi pi-chevron-left\" (click)=\"prev()\" style=\"margin-right:.5em\" [disabled]=\"isFirstPage()\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-refresh\" (click)=\"reset()\" style=\"margin-right:.5em\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-chevron-right\" (click)=\"next()\" [disabled]=\"isLastPage()\"></button>\n    </div>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"rows\" [showCurrentPageReport]=\"true\" [(first)]=\"first\"\n        currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablepagedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablepage-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TablePageDemo implements OnInit &#123;\n\ncars: Car[];\n\n    cols: any[];\n\n    first = 0;\n\n    rows = 10;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    next() &#123;\n        this.first = this.first + this.rows;\n    &#125;\n\n    prev() &#123;\n        this.first = this.first - this.rows;\n    &#125;\n\n    reset() &#123;\n        this.first = 0;\n    &#125;\n\n    isLastPage(): boolean &#123;\n        return this.first === (this.cars.length - this.rows);\n    &#125;\n\n    isFirstPage(): boolean &#123;\n        return this.first === 0;\n    &#125;\n\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablepagedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablepage-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Implicit Pagination&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n    currentPageReportTemplate=\"Showing &#123;first&#125; to &#123;last&#125; of &#123;totalRecords&#125; entries\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Programmatic Control&lt;/h3&gt;\n&lt;div style=\"margin-bottom: 1em\"&gt;\n    &lt;button type=\"button\" pButton icon=\"pi pi-chevron-left\" (click)=\"prev()\" style=\"margin-right:.5em\" [disabled]=\"isFirstPage()\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton icon=\"pi pi-refresh\" (click)=\"reset()\" style=\"margin-right:.5em\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton icon=\"pi pi-chevron-right\" (click)=\"next()\" [disabled]=\"isLastPage()\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"rows\" [showCurrentPageReport]=\"true\" [(first)]=\"first\"\n    currentPageReportTemplate=\"Showing &#123;first&#125; to &#123;last&#125; of &#123;totalRecords&#125; entries\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablepage-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablereorderdemo.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablereorderdemo.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablereorderdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Reorder</span></span>\n        <span>Order of the columns and rows can be changed using drag and drop.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width:2.5em\"></th>\n                <th *ngFor=\"let col of columns\" pReorderableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n            <tr [pReorderableRow]=\"index\">\n                <td>\n                    <i class=\"pi pi-bars\" style=\"display: flex;justify-content: center;\" pReorderableRowHandle></i>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablecolreorder.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolreorder.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablereorder-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColReorderDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecolreorder.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolreorder.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablereorder-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:2.5em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\" pReorderableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\"&gt;\n        &lt;tr [pReorderableRow]=\"index\"&gt;\n            &lt;td&gt;\n                &lt;i class=\"pi pi-bars\" style=\"display: flex;justify-content: center;\" pReorderableRowHandle&gt;&lt;/i&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablereorder-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableresponsivedemo.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableresponsivedemo.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tableresponsivedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Responsive</span></span>\n        <span>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller. In addition certain columns can be hidden\n            based on a priority, note that priority based implementation is not built-in and provided as a demo instead.\n        </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Reflow</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    &#123;&#123;col.header&#125;&#125;\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    <span class=\"ui-column-title\">&#123;&#123;col.header&#125;&#125;</span>\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            There are &#123;&#123;cars?.length&#125;&#125; cars\n        </ng-template>\n    </p-table>\n\n    <h3>Priority</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\">\n                <tr>\n                    <th>Vin</th>\n                    <th class=\"ui-p-4\">Year - p4</th>\n                    <th class=\"ui-p-5\">Brand - p5</th>\n                    <th class=\"ui-p-6\">Color - p6</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-car>\n                <tr>\n                    <td>&#123;&#123;car.vin&#125;&#125;</td>\n                    <td class=\"ui-p-4\">&#123;&#123;car.year&#125;&#125;</td>\n                    <td class=\"ui-p-5\">&#123;&#123;car.brand&#125;&#125;</td>\n                    <td class=\"ui-p-6\">&#123;&#123;car.color&#125;&#125;</td>\n                </tr>\n            </ng-template>\n        <ng-template pTemplate=\"summary\">\n            There are &#123;&#123;cars?.length&#125;&#125; cars\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tableresponsivedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableresponsivedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tableresponsive-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './tableresponsivedemo.html',\n    styles: [`\n        /* Column Priorities */\n        @media only all &#123;\n            th.ui-p-6,\n            td.ui-p-6,\n            th.ui-p-5,\n            td.ui-p-5,\n            th.ui-p-4,\n            td.ui-p-4,\n            th.ui-p-3,\n            td.ui-p-3,\n            th.ui-p-2,\n            td.ui-p-2,\n            th.ui-p-1,\n            td.ui-p-1 &#123;\n                display: none;\n            &#125;\n        &#125;\n        \n        /* Show priority 1 at 320px (20em x 16px) */\n        @media screen and (min-width: 20em) &#123;\n            th.ui-p-1,\n            td.ui-p-1 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 2 at 480px (30em x 16px) */\n        @media screen and (min-width: 30em) &#123;\n            th.ui-p-2,\n            td.ui-p-2 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 3 at 640px (40em x 16px) */\n        @media screen and (min-width: 40em) &#123;\n            th.ui-p-3,\n            td.ui-p-3 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 4 at 800px (50em x 16px) */\n        @media screen and (min-width: 50em) &#123;\n            th.ui-p-4,\n            td.ui-p-4 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 5 at 960px (60em x 16px) */\n        @media screen and (min-width: 60em) &#123;\n            th.ui-p-5,\n            td.ui-p-5 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 6 at 1,120px (70em x 16px) */\n        @media screen and (min-width: 70em) &#123;\n            th.ui-p-6,\n            td.ui-p-6 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n    `]\n    &#125;)\n    export class TableResponsiveDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableresponsivedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableresponsivedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tableresponsive-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>&lt;h3 class=\"first\"&gt;Reflow&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;span class=\"ui-column-title\"&gt;&#123;&#123;col.header&#125;&#125;&lt;/span&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Priority&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n            &lt;tr&gt;\n                &lt;th&gt;Vin&lt;/th&gt;\n                &lt;th class=\"ui-p-4\"&gt;Year&lt;/th&gt;\n                &lt;th class=\"ui-p-5\"&gt;Brand&lt;/th&gt;\n                &lt;th class=\"ui-p-6\"&gt;Color&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"body\" let-car&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n                &lt;td class=\"ui-p-4\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n                &lt;td class=\"ui-p-5\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n                &lt;td class=\"ui-p-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tableresponsive-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablerowexpansiondemo.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablerowexpansiondemo.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablerowexpansiondemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Row Expansion</span></span>\n        <span>Row expansion is used to display additional content about the row data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width: 3em\"></th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\n            <tr>\n                <td>\n                    <a href=\"#\" [pRowToggler]=\"rowData\">\n                        <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\n                    </a>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td [attr.colspan]=\"columns.length + 1\">\n                    <div class=\"p-grid ui-fluid\" style=\"font-size:16px;padding:20px\" [@rowExpansionTrigger]=\"'active'\">\n                        <div class=\"p-col-12 p-md-3\" style=\"text-align:center\">\n                            <img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/{{rowData.brand}}.png\">\n                        </div>\n                        <div class=\"p-col-12 p-md-9\">\n                            <div class=\"p-grid\">\n                                <div class=\"p-col-12\">\n                                    <b>Vin:</b> {{rowData.vin}}\n                                </div>\n                                <div class=\"p-col-12\">\n                                    <b>Year:</b> {{rowData.year}}\n                                </div>\n                                <div class=\"p-col-12\">\n                                    <b>Brand:</b> {{rowData.brand}}\n                                </div>\n                                <div class=\"p-col-12\">\n                                    <b>Color:</b> {{rowData.color}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablerowexpansiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowexpansiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablerowexpansion-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './tablerowexpansiondemo.html',\n    animations: [\n        trigger('rowExpansionTrigger', [\n            state('void', style(&#123;\n                transform: 'translateX(-10%)',\n                opacity: 0\n            &#125;)),\n            state('active', style(&#123;\n                transform: 'translateX(0)',\n                opacity: 1\n            &#125;)),\n            transition('* &lt;=&gt; *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))\n        ])\n    ]\n&#125;)\nexport class TableRowExpansionDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablerowexpansiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowexpansiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablerowexpansion-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 3em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\n                    &lt;i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"&gt;&lt;/i&gt;\n                &lt;/a&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td [attr.colspan]=\"columns.length + 1\"&gt;\n                &lt;div class=\"p-grid -fluid\" style=\"font-size:16px;padding:20px\"&gt;\n                    &lt;div class=\"p-col-12 p-md-3\" style=\"text-align:center\"&gt;\n                        &lt;img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/&#123;&#123;rowData.brand&#125;&#125;.png\"&gt;\n                    &lt;/div&gt;\n                    &lt;div class=\"p-col-12 p-md-9\"&gt;\n                        &lt;div class=\"p-grid\"&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.vin&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Year:&lt;/b&gt; &#123;&#123;rowData.year&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Brand:&lt;/b&gt; &#123;&#123;rowData.brand&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"p-col-12\"&gt;\n                                &lt;b&gt;Color:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\n                            &lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablerowexpansion-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablerowgroupdemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablerowgroupdemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablerowgroupdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">RowGroup</span></span>\n        <span>It is easy to implement row grouping using the flexible template driven approach of the p-table. In this example, sorting\n            is enabled by default to sort the data by brand initially and then a rowGroupMetadata object is created to\n            represent how many rows a brand should span along with the rowIndex of the group. Similarly multiple field grouping can be implemented as well.\n        </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Toggleable Row Groups</h3>\n    <p-table [value]=\"cars\" dataKey=\"brand\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\" let-expanded=\"expanded\" let-columns=\"columns\">\n            <tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\">\n                <td colspan=\"3\">\n                    <a href=\"#\" [pRowToggler]=\"rowData\">\n                        <i [ngClass]=\"expanded ? 'pi pi-fw pi-chevron-circle-down' : 'pi pi-fw pi-chevron-circle-right'\" style=\"vertical-align: middle;padding-bottom: .1em;\"></i>\n                        <span>{{rowData.brand}}</span>\n                    </a>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-rowIndex=\"rowIndex\">\n            <tr>\n                <td>{{rowData.vin}}</td>\n                <td>{{rowData.year}}</td>\n                <td>{{rowData.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Subheader</h3>\n    <p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\n            <tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\">\n                <td colspan=\"3\">\n                    <span style=\"font-weight:bold\">{{rowData.brand}}</span>\n                </td>\n            </tr>\n            <tr>\n                <td>{{rowData.vin}}</td>\n                <td>{{rowData.year}}</td>\n                <td>{{rowData.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Rowspan</h3>\n    <p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Brand</th>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\n            <tr>\n                <td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\">\n                    {{rowData.brand}}\n                </td>\n                <td>{{rowData.vin}}</td>\n                <td>{{rowData.year}}</td>\n                <td>{{rowData.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablerowgroupdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablerowgroup-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableRowGroupDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    rowGroupMetadata: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => &#123;\n            this.cars = cars;\n            this.updateRowGroupMetaData();\n        &#125;);\n    &#125;\n\n    onSort() &#123;\n        this.updateRowGroupMetaData();\n    &#125;\n\n    updateRowGroupMetaData() &#123;\n        this.rowGroupMetadata = &#123;&#125;;\n        if (this.cars) &#123;\n            for (let i = 0; i &lt; this.cars.length; i++) &#123;\n                let rowData = this.cars[i];\n                let brand = rowData.brand;\n                if (i == 0) &#123;\n                    this.rowGroupMetadata[brand] = &#123; index: 0, size: 1 &#125;;\n                &#125;\n                else &#123;\n                    let previousRowData = this.cars[i - 1];\n                    let previousRowGroup = previousRowData.brand;\n                    if (brand === previousRowGroup)\n                        this.rowGroupMetadata[brand].size++;\n                    else\n                        this.rowGroupMetadata[brand] = &#123; index: i, size: 1 &#125;;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablerowgroupdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablerowgroup-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Toggleable Row Groups&lt;/h3&gt;\n&lt;p-table [value]=\"cars\" dataKey=\"brand\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\" let-expanded=\"expanded\" let-columns=\"columns\"&gt;\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\n            &lt;td colspan=\"3\"&gt;\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\n                    &lt;i [ngClass]=\"expanded ? 'pi pi-fw pi-chevron-circle-down' : 'pi pi-fw pi-chevron-circle-right'\"  style=\"vertical-align: middle;padding-bottom: .1em;\"&gt;&lt;/i&gt;\n                    &lt;span&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\n                &lt;/a&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n    \n&lt;h3&gt;Subheader&lt;/h3&gt;\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\n            &lt;td colspan=\"3\"&gt;\n                &lt;span style=\"font-weight:bold\"&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Rowspan&lt;/h3&gt;\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\"&gt;\n                &#123;&#123;rowData.brand&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablerowgroup-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablescrolldemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablescrolldemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablescrolldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Scroll</span></span>\n        <span>Scrollable view is available horizontally, vertically or both.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Vertical with Fixed Viewport</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n    \n    <h3>Flexible Viewport</h3>\n    <p>Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the table. Click the button below\n        to display a resizable and maximizable Dialog where data viewport adjusts itself according to the size changes.</p>\n\n    <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-external-link\" label=\"View\"></button>\n    <p-dialog header=\"Flexible ScrollHeight\" [(visible)]=\"dialogVisible\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\" [maximizable]=\"true\" [modal]=\"true\" [resizable]=\"true\" [contentStyle]=\"{height: '300px'}\">\n        <p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"flex\">\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th *ngFor=\"let col of columns\">\n                        {{col.header}}\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                <tr>\n                    <td *ngFor=\"let col of columns\">\n                        {{rowData[col.field]}}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n        <p-footer>\n            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"dialogVisible=false\" label=\"Yes\"></button>\n            <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"dialogVisible=false\" label=\"No\" class=\"ui-button-secondary\"></button>\n        </p-footer>        \n    </p-dialog>\n\n    <h3>Full Page Scroll</h3>\n    <p>FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size. See the <a [routerLink]=\"['/table/flexscroll']\">Full Page</a> demo for an example.</p>\n\n    <h3>Horizontal</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" [style]=\"{width:'500px'}\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:250px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Horizontal and Vertical</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" [style]=\"{width:'500px'}\" scrollHeight=\"200px\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:250px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Frozen Rows</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    <b>{{rowData[col.field]}}</b>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Frozen Columns</h3>\n    <p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"300px\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:300px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Frozen Columns and Frozen Rows</h3>\n    <p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [frozenValue]=\"frozenCars\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"300px\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:300px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    <b>{{rowData[col.field]}}</b>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablescrolldemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablescroll-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './tablescrolldemo.html',\n    styles: [`\n        .loading-text &#123;\n            display: block;\n            background-color: #f1f1f1;\n            min-height: 19px;\n            animation: pulse 1s infinite ease-in-out;\n            text-indent: -99999px;\n            overflow: hidden;\n        &#125;\n    `]\n&#125;)\nexport class TableScrollDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    cols: any[];\n\n    frozenCars: Car[];\n\n    frozenCols: any[];\n\n    scrollableCols: any[];\n\n    dialogVisible: boolean;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.scrollableCols = [\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.frozenCols = [\n            &#123; field: 'vin', header: 'Vin' &#125;\n        ];\n\n        this.frozenCars = [\n            &#123; \"brand\": \"BMW\", \"year\": 2013, \"color\": \"Grey\", \"vin\": \"fh2uf23\" &#125;,\n            &#123; \"brand\": \"Chevrolet\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"4525g23\" &#125;\n        ];\n    &#125;\n\n    showDialog() &#123;\n        this.dialogVisible = true;\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablescrolldemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablescroll-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Vertical&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Flexible Viewport&lt;/h3&gt;\n&lt;p&gt;Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the table. Click the button below\n    to display a resizable and maximizable Dialog where data viewport adjusts itself according to the size changes.&lt;/p&gt;\n\n&lt;button type=\"button\" (click)=\"showDialog()\" pButton icon=\"pi pi-external-link\" label=\"View\"&gt;&lt;/button&gt;\n&lt;p-dialog header=\"Flexible ScrollHeight\" [(visible)]=\"dialogVisible\" [style]=\"&#123;width: '50vw'&#125;\" [baseZIndex]=\"10000\" [maximizable]=\"true\" [modal]=\"true\" [resizable]=\"true\" [contentStyle]=\"&#123;height: '300px'&#125;\"&gt;\n    &lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"flex\"&gt;\n        &lt;ng-template pTemplate=\"header\" let-columns&gt;\n            &lt;tr&gt;\n                &lt;th *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;col.header&#125;&#125;\n                &lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n            &lt;tr&gt;\n                &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n    &lt;/p-table&gt;\n    &lt;p-footer&gt;\n        &lt;button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"dialogVisible=false\" label=\"Yes\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"dialogVisible=false\" label=\"No\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;        \n&lt;/p-dialog&gt;\n\n&lt;h3&gt;Full Page Scroll&lt;/h3&gt;\n&lt;p&gt;FlexScroll can also be used for cases where scrollable viewport should be responsive with respect to the window size. See the &lt;a [routerLink]=\"['/table/flexscroll']\"&gt;Full Page&lt;/a&gt; demo for an example.&lt;/p&gt;\n\n&lt;h3&gt;Horizontal&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Horizontal and Vertical&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Frozen Rows&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Frozen Columns&lt;/h3&gt;\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"300px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:300px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Frozen Columns and Frozen Rows&lt;/h3&gt;\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [frozenValue]=\"frozenCars\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"300px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:300px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablescroll-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablesectionsdemo.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablesectionsdemo.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablesectionsdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Sections</span></span>\n        <span>Table provides templates to customize the content of various sections such as caption and summary.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"footer\" let-columns>\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            There are {{cars?.length}} cars\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablesectionsdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesectionsdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablesections-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableSectionsDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n        <p-tabPanel header=\"tablesectionsdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesectionsdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablesections-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablesections-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableselectiondemo.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableselectiondemo.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tableselectiondemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Selection</span></span>\n        <span>Single or Multiple rows can be selected depending on the selectionMode property.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <h3 class=\"first\">Single Row Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <div style=\"text-align: left\">\n                Selected Car: {{selectedCar1 ? selectedCar1.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'}}\n            </div>\n        </ng-template>\n    </p-table>\n\n    <h3>Multiple Row Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\n            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <ul>\n                <li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\">\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\n                </li>\n            </ul>\n        </ng-template>\n    </p-table>\n\n    <h3>Multiple Row Selection with MetaKey</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars2\" [metaKeySelection]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\n            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <ul>\n                <li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\">\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\n                </li>\n            </ul>\n        </ng-template>\n    </p-table>\n\n    <h3>Column Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n                <th style=\"width:4em\"></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n                <td>\n                    <button pButton icon=\"pi pi-search\" (click)=\"selectCarWithButton(rowData)\"></button>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Events</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"\n        (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>RadioButton</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar4\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width: 3em\"></th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td>\n                    <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n                <div style=\"text-align: left\">\n                    Selected Car: {{selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'}}\n                </div>\n            </ng-template>\n    </p-table>\n\n    <h3>Checkbox Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width: 3em\">\n                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                </th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td>\n                    <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <ul>\n                <li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\">\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\n                </li>\n            </ul>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tableselectiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableselectiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tableselection-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableSelectionDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    selectedCar1: Car;\n\n    selectedCar2: Car;\n\n    selectedCar3: Car;\n\n    selectedCar4: Car;\n\n    selectedCars1: Car[];\n\n    selectedCars2: Car[];\n\n    selectedCars3: Car[];\n\n    constructor(private carService: CarService, private messageService: MessageService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    selectCarWithButton(car: Car) &#123;\n        this.selectedCar2 = car;\n        this.messageService.add(&#123;severity:'info', summary:'Car Selected', detail:'Vin: ' + car.vin&#125;);\n    &#125;\n\n    onRowSelect(event) &#123;\n        this.messageService.add(&#123;severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin&#125;);\n    &#125;\n\n    onRowUnselect(event) &#123;\n        this.messageService.add(&#123;severity:'info', summary:'Car Unselected', detail:'Vin: ' + event.data.vin&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableselectiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableselectiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tableselection-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;h3 class=\"first\"&gt;Single Row Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;div style=\"text-align: left\"&gt;\n            Selected Car: &#123;&#123;selectedCar1 ? selectedCar.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'&#125;&#125;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Multiple Row Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\"&gt;\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Multiple Row Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars2\" [metaKeySelection]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\"&gt;\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Column Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n            &lt;th style=\"width:4em\"&gt;&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;button pButton icon=\"pi pi-search\" (click)=\"selectCarWithButton(rowData)\"&gt;&lt;/button&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Events&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"\n    (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;RadioButton&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar4\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 3em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td&gt;\n                &lt;p-tableRadioButton [value]=\"rowData\"&gt;&lt;/p-tableRadioButton&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n            &lt;div style=\"text-align: left\"&gt;\n                Selected Car: &#123;&#123;selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'&#125;&#125;\n            &lt;/div&gt;\n        &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Checkbox Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 3em\"&gt;\n                &lt;p-tableHeaderCheckbox&gt;&lt;/p-tableHeaderCheckbox&gt;\n            &lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;p-tableCheckbox [value]=\"rowData\"&gt;&lt;/p-tableCheckbox&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\"&gt;\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tableselection-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablesortdemo.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablesortdemo.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablesortdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Sort</span></span>\n        <span>Table supports both single column and multiple column sorting.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single Sort</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Multi Sort with MetaKey</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" sortMode=\"multiple\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Custom Sort</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars3\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablesortdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesortdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablesort-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableSortDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    cars3: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars3 = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    customSort(event: SortEvent) &#123;\n        event.data.sort((data1, data2) => &#123;\n            let value1 = data1[event.field];\n            let value2 = data2[event.field];\n            let result = null;\n\n            if (value1 == null && value2 != null)\n                result = -1;\n            else if (value1 != null && value2 == null)\n                result = 1;\n            else if (value1 == null && value2 == null)\n                result = 0;\n            else if (typeof value1 === 'string' && typeof value2 === 'string')\n                result = value1.localeCompare(value2);\n            else\n                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;\n\n            return (event.order * result);\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablesortdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesortdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablesort-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single Sort&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Multi Sort with MetaKey&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" sortMode=\"multiple\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Custom Sort&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablesort-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestatedemo.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestatedemo.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablestatedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">State</span></span>\n        <span>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page\n            is visited again, table would render the data using its last settings.\n        </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Session Storage</h3>\n    <p-table #dt1 [columns]=\"cols\" [value]=\"cars1\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"vin\" [resizableColumns]=\"true\" [reorderableColumns]=\"true\"\n        selectionMode=\"single\" [(selection)]=\"selectedCar1\" stateStorage=\"session\" stateKey=\"statedemo-session\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn pReorderableColumn>\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n            <tr>\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" class=\"ui-fluid\">\n                    <input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt1.filters[col.field]?.value\">\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Local Storage</h3>\n    <p-table #dt2 [columns]=\"cols\" [value]=\"cars2\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"vin\" [resizableColumns]=\"true\" [reorderableColumns]=\"true\"\n        selectionMode=\"single\" [(selection)]=\"selectedCar2\" stateStorage=\"local\" stateKey=\"statedemo-local\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn pReorderableColumn>\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n            <tr>\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" class=\"ui-fluid\">\n                    <input pInputText type=\"text\" (input)=\"dt2.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt2.filters[col.field]?.value\">\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablestatedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestatedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablestate-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableStateDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    cols: any[];\n\n    selectedCar1: Car;\n\n    selectedCar2: Car;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars1 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars2 = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablestatedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestatedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablestate-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Session Storage&lt;/h3&gt;\n&lt;p-table #dt1 [columns]=\"cols\" [value]=\"cars1\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"vin\" [resizableColumns]=\"true\" [reorderableColumns]=\"true\"\n    selectionMode=\"single\" [(selection)]=\"selectedCar1\" stateStorage=\"session\" stateKey=\"statedemo-session\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn pReorderableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" class=\"ui-fluid\"&gt;\n                &lt;input pInputText type=\"text\" (input)=\"dt1.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt1.filters[col.field]?.value\"&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Local Storage&lt;/h3&gt;\n&lt;p-table #dt2 [columns]=\"cols\" [value]=\"cars2\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"vin\" [resizableColumns]=\"true\" [reorderableColumns]=\"true\"\n    selectionMode=\"single\" [(selection)]=\"selectedCar2\" stateStorage=\"local\" stateKey=\"statedemo-local\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn pReorderableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" class=\"ui-fluid\"&gt;\n                &lt;input pInputText type=\"text\" (input)=\"dt2.filter($event.target.value, col.field, col.filterMatchMode)\" [value]=\"dt2.filters[col.field]?.value\"&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablestate-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestickydemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestickydemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablestickydemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Sticky</span></span>\n        <span>This demo uses position: sticky to implement sticky headers relative to body scroll position. Visit <a href=\"https://caniuse.com/css-sticky\">here</a> for more information about the supported browsers.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablestickydemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablesticky-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './tablestickydemo.html',\n    styles: [`\n        :host ::ng-deep .ui-table .ui-table-thead > tr > th &#123;\n            position: -webkit-sticky;\n            position: sticky;\n            top: 69px;\n            box-shadow: 1px 3px 6px 0 rgba(32,33,36,0.10);\n        &#125;\n\n        @media screen and (max-width: 64em) &#123;\n            :host ::ng-deep .ui-table .ui-table-thead > tr > th &#123;\n                top: 99px;\n            &#125;\n        &#125;\n`]\n&#125;)\nexport class TableStickyDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablestickydemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablesticky-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablesticky-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestyledemo.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestyledemo.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablestyledemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">Style</span></span>\n        <span>Certain rows or cell can easily be styled based on conditions.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [ngClass]=\"rowData.year > 2010 ? 'new-car' : null\">\n                <td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] <= 2010 ? 'old-car' : null\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablestyledemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestyledemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablestyle-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './tablestyledemo.html',\n    styles: [`\n        .old-car &#123;\n            background-color: #1CA979 !important;\n            color: #ffffff !important;\n        &#125;\n\n        .very-old-car &#123;\n            background-color: #2CA8B1 !important;\n            color: #ffffff !important;\n        &#125;\n    `\n    ]\n&#125;)\nexport class TableStyleDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablestyledemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestyledemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablestyle-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [ngClass]=\"rowData.year &gt; 2010 ? 'new-car' : null\"&gt;\n            &lt;td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] &lt;= 2010 ? 'old-car' : null\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablestyle-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablevirtualscrolldemo.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablevirtualscrolldemo.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_table_tablevirtualscrolldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table <span class=\"subitem\">VirtualScroll</span></span>\n        <span>VirtualScroller is a performant approach to handle huge data efficiently.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Virtual Scroll with Preloaded Data (10000 Rows)</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"250px\"\n        [virtualScroll]=\"true\" [virtualRowHeight]=\"34\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr style=\"height:34px\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Virtual Scroll with Lazy Loading from a Remote Datasource (10000 Rows)</h3>\n    <p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"250px\" \n        [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr style=\"height:34px\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"loadingbody\" let-columns=\"columns\">\n            <tr style=\"height:34px\">\n                <td *ngFor=\"let col of columns\">\n                    <div class=\"loading-text\"></div>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"tablevirtualscrolldemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablevirtualscrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablevirtualscroll-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component, OnInit&#125; from '@angular/core';\nimport &#123;Car&#125; from '../../components/domain/car';\nimport &#123;CarService&#125; from '../../service/carservice';\nimport &#123;LazyLoadEvent&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './tablevirtualscrolldemo.html',\n    styles: [`\n        .loading-text &#123;\n            display: block;\n            background-color: #f1f1f1;\n            min-height: 19px;\n            animation: pulse 1s infinite ease-in-out;\n            text-indent: -99999px;\n            overflow: hidden;\n        &#125;\n    `]\n&#125;)\nexport class TableVirtualScrollDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    virtualCars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.cols = [\n            &#123;field: 'vin', header: 'Vin'&#125;,\n            &#123;field: 'year', header: 'Year'&#125;,\n            &#123;field: 'brand', header: 'Brand'&#125;,\n            &#123;field: 'color', header: 'Color'&#125;\n        ];\n\n        this.cars = Array.from(&#123;length: 10000&#125;).map(() => this.carService.generateCar());\n        this.virtualCars = Array.from(&#123;length: 10000&#125;);\n    &#125;\n\n    loadCarsLazy(event: LazyLoadEvent) &#123;       \n        //simulate remote connection with a timeout \n        setTimeout(() => &#123;\n            //load data of required page\n            let loadedCars = this.cars.slice(event.first, (event.first + event.rows));\n\n            //populate page of virtual cars\n            Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);\n            \n            //trigger change detection\n            this.virtualCars = [...this.virtualCars];\n        &#125;, Math.random() * 1000 + 250);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablevirtualscrolldemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablevirtualscrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tablevirtualscroll-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Virtual Scroll with Preloaded Data (10000 Rows)&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"250px\" \n    [virtualScroll]=\"true\" [virtualRowHeight]=\"34\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:34px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Virtual Scroll with Lazy Loading from a Remote Datasource (10000 Rows)&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"100\" scrollHeight=\"250px\" \n    [virtualScroll]=\"true\" [virtualRowHeight]=\"34\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:34px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"loadingbody\" let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:34px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;div class=\"loading-text\"&gt;&lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tablevirtualscroll-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/components/progressbar/progressbar.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/progressbar/progressbar.ts ***!
    \*******************************************************/

  /*! exports provided: ProgressBar, ProgressBarModule */

  /***/
  function _src_app_components_progressbar_progressbarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return ProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return ProgressBarModule;
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

    var ProgressBar = /*#__PURE__*/_createClass(function ProgressBar() {
      _classCallCheck(this, ProgressBar);

      this.showValue = true;
      this.unit = '%';
      this.mode = 'determinate';
    });

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressBar.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProgressBar.prototype, "showValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressBar.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "unit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "mode", void 0);
    ProgressBar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-progressBar',
      template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })], ProgressBar);

    var ProgressBarModule = /*#__PURE__*/_createClass(function ProgressBarModule() {
      _classCallCheck(this, ProgressBarModule);
    });

    ProgressBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [ProgressBar],
      declarations: [ProgressBar]
    })], ProgressBarModule);
    /***/
  },

  /***/
  "./src/app/components/progressbar/public_api.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/progressbar/public_api.ts ***!
    \******************************************************/

  /*! exports provided: ProgressBar, ProgressBarModule */

  /***/
  function _src_app_components_progressbar_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _progressbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./progressbar */
    "./src/app/components/progressbar/progressbar.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return _progressbar__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return _progressbar__WEBPACK_IMPORTED_MODULE_0__["ProgressBarModule"];
    });
    /***/

  },

  /***/
  "./src/app/showcase/components/table/tablebasicdemo.ts":
  /*!*************************************************************!*\
    !*** ./src/app/showcase/components/table/tablebasicdemo.ts ***!
    \*************************************************************/

  /*! exports provided: TableBasicDemo */

  /***/
  function _src_app_showcase_components_table_tablebasicdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableBasicDemo", function () {
      return TableBasicDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableBasicDemo = /*#__PURE__*/function () {
      function TableBasicDemo(carService) {
        _classCallCheck(this, TableBasicDemo);

        this.carService = carService;
      }

      return _createClass(TableBasicDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this.cars = cars;
          });
        }
      }]);
    }();

    TableBasicDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableBasicDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablebasicdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablebasicdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableBasicDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablecolgroupdemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/table/tablecolgroupdemo.ts ***!
    \****************************************************************/

  /*! exports provided: TableColGroupDemo */

  /***/
  function _src_app_showcase_components_table_tablecolgroupdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableColGroupDemo", function () {
      return TableColGroupDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TableColGroupDemo = /*#__PURE__*/function () {
      function TableColGroupDemo() {
        _classCallCheck(this, TableColGroupDemo);
      }

      return _createClass(TableColGroupDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sales = [{
            brand: 'Apple',
            lastYearSale: '51%',
            thisYearSale: '40%',
            lastYearProfit: '$54,406.00',
            thisYearProfit: '$43,342'
          }, {
            brand: 'Samsung',
            lastYearSale: '83%',
            thisYearSale: '96%',
            lastYearProfit: '$423,132',
            thisYearProfit: '$312,122'
          }, {
            brand: 'Microsoft',
            lastYearSale: '38%',
            thisYearSale: '5%',
            lastYearProfit: '$12,321',
            thisYearProfit: '$8,500'
          }, {
            brand: 'Philips',
            lastYearSale: '49%',
            thisYearSale: '22%',
            lastYearProfit: '$745,232',
            thisYearProfit: '$650,323,'
          }, {
            brand: 'Song',
            lastYearSale: '17%',
            thisYearSale: '79%',
            lastYearProfit: '$643,242',
            thisYearProfit: '500,332'
          }, {
            brand: 'LG',
            lastYearSale: '52%',
            thisYearSale: ' 65%',
            lastYearProfit: '$421,132',
            thisYearProfit: '$150,005'
          }, {
            brand: 'Sharp',
            lastYearSale: '82%',
            thisYearSale: '12%',
            lastYearProfit: '$131,211',
            thisYearProfit: '$100,214'
          }, {
            brand: 'Panasonic',
            lastYearSale: '44%',
            thisYearSale: '45%',
            lastYearProfit: '$66,442',
            thisYearProfit: '$53,322'
          }, {
            brand: 'HTC',
            lastYearSale: '90%',
            thisYearSale: '56%',
            lastYearProfit: '$765,442',
            thisYearProfit: '$296,232'
          }, {
            brand: 'Toshiba',
            lastYearSale: '75%',
            thisYearSale: '54%',
            lastYearProfit: '$21,212',
            thisYearProfit: '$12,533'
          }];
        }
      }]);
    }();

    TableColGroupDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablecolgroupdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecolgroupdemo.html"))["default"]
    })], TableColGroupDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablecolresizedemo.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/showcase/components/table/tablecolresizedemo.ts ***!
    \*****************************************************************/

  /*! exports provided: TableColResizeDemo */

  /***/
  function _src_app_showcase_components_table_tablecolresizedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableColResizeDemo", function () {
      return TableColResizeDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableColResizeDemo = /*#__PURE__*/function () {
      function TableColResizeDemo(carService) {
        _classCallCheck(this, TableColResizeDemo);

        this.carService = carService;
      }

      return _createClass(TableColResizeDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this2.cars1 = cars;
          });
          this.carService.getCarsMedium().then(function (cars) {
            return _this2.cars2 = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin',
            width: '25%'
          }, {
            field: 'year',
            header: 'Year',
            width: '15%'
          }, {
            field: 'brand',
            header: 'Brand',
            width: '35%'
          }, {
            field: 'color',
            header: 'Color',
            width: '25%'
          }];
        }
      }]);
    }();

    TableColResizeDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableColResizeDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablecolresizedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecolresizedemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableColResizeDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablecoltoggledemo.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/showcase/components/table/tablecoltoggledemo.ts ***!
    \*****************************************************************/

  /*! exports provided: TableColToggleDemo */

  /***/
  function _src_app_showcase_components_table_tablecoltoggledemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableColToggleDemo", function () {
      return TableColToggleDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableColToggleDemo = /*#__PURE__*/function () {
      function TableColToggleDemo(carService) {
        _classCallCheck(this, TableColToggleDemo);

        this.carService = carService;
      }

      return _createClass(TableColToggleDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this3.cars = cars;
          });
          this.cols = [{
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this._selectedColumns = this.cols;
        }
      }, {
        key: "selectedColumns",
        get: function get() {
          return this._selectedColumns;
        },
        set: function set(val) {
          //restore original order
          this._selectedColumns = this.cols.filter(function (col) {
            return val.includes(col);
          });
        }
      }]);
    }();

    TableColToggleDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TableColToggleDemo.prototype, "selectedColumns", null);
    TableColToggleDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablecoltoggledemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecoltoggledemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableColToggleDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablecontextmenudemo.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/showcase/components/table/tablecontextmenudemo.ts ***!
    \*******************************************************************/

  /*! exports provided: TableContextMenuDemo */

  /***/
  function _src_app_showcase_components_table_tablecontextmenudemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableContextMenuDemo", function () {
      return TableContextMenuDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var TableContextMenuDemo = /*#__PURE__*/function () {
      function TableContextMenuDemo(carService, messageService) {
        _classCallCheck(this, TableContextMenuDemo);

        this.carService = carService;
        this.messageService = messageService;
      }

      return _createClass(TableContextMenuDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this4.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.items = [{
            label: 'View',
            icon: 'pi pi-search',
            command: function command(event) {
              return _this4.viewCar(_this4.selectedCar);
            }
          }, {
            label: 'Delete',
            icon: 'pi pi-times',
            command: function command(event) {
              return _this4.deleteCar(_this4.selectedCar);
            }
          }];
        }
      }, {
        key: "viewCar",
        value: function viewCar(car) {
          this.messageService.add({
            severity: 'info',
            summary: 'Car Selected',
            detail: car.vin + ' - ' + car.brand
          });
        }
      }, {
        key: "deleteCar",
        value: function deleteCar(car) {
          var index = -1;

          for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
              index = i;
              break;
            }
          }

          this.cars.splice(index, 1);
          this.messageService.add({
            severity: 'info',
            summary: 'Car Deleted',
            detail: car.vin + ' - ' + car.brand
          });
        }
      }]);
    }();

    TableContextMenuDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    TableContextMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablecontextmenudemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecontextmenudemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], TableContextMenuDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablecruddemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/table/tablecruddemo.ts ***!
    \************************************************************/

  /*! exports provided: TableCrudDemo */

  /***/
  function _src_app_showcase_components_table_tablecruddemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableCrudDemo", function () {
      return TableCrudDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableCrudDemo = /*#__PURE__*/function () {
      function TableCrudDemo(carService) {
        _classCallCheck(this, TableCrudDemo);

        this.carService = carService;
        this.car = {};
      }

      return _createClass(TableCrudDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this5.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }, {
        key: "showDialogToAdd",
        value: function showDialogToAdd() {
          this.newCar = true;
          this.car = {};
          this.displayDialog = true;
        }
      }, {
        key: "save",
        value: function save() {
          var cars = _toConsumableArray(this.cars);

          if (this.newCar) cars.push(this.car);else cars[this.cars.indexOf(this.selectedCar)] = this.car;
          this.cars = cars;
          this.car = null;
          this.displayDialog = false;
        }
      }, {
        key: "delete",
        value: function _delete() {
          var index = this.cars.indexOf(this.selectedCar);
          this.cars = this.cars.filter(function (val, i) {
            return i != index;
          });
          this.car = null;
          this.displayDialog = false;
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(event) {
          this.newCar = false;
          this.car = this.cloneCar(event.data);
          this.displayDialog = true;
        }
      }, {
        key: "cloneCar",
        value: function cloneCar(c) {
          var car = {};

          for (var prop in c) {
            car[prop] = c[prop];
          }

          return car;
        }
      }]);
    }();

    TableCrudDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableCrudDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablecruddemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablecruddemo.html"))["default"],
      styles: ["        \n        .p-grid label {\n          font-weight: bold;\n          margin-top: .25em;\n          display: block;\n        }\n  "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableCrudDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tabledemo-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/table/tabledemo-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: TableDemoRoutingModule */

  /***/
  function _src_app_showcase_components_table_tabledemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDemoRoutingModule", function () {
      return TableDemoRoutingModule;
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


    var _tabledemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabledemo */
    "./src/app/showcase/components/table/tabledemo.ts");
    /* harmony import */


    var _tablepagedemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tablepagedemo */
    "./src/app/showcase/components/table/tablepagedemo.ts");
    /* harmony import */


    var _tablesortdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tablesortdemo */
    "./src/app/showcase/components/table/tablesortdemo.ts");
    /* harmony import */


    var _tablefilterdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tablefilterdemo */
    "./src/app/showcase/components/table/tablefilterdemo.ts");
    /* harmony import */


    var _tableselectiondemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tableselectiondemo */
    "./src/app/showcase/components/table/tableselectiondemo.ts");
    /* harmony import */


    var _tablesectionsdemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tablesectionsdemo */
    "./src/app/showcase/components/table/tablesectionsdemo.ts");
    /* harmony import */


    var _tablestyledemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tablestyledemo */
    "./src/app/showcase/components/table/tablestyledemo.ts");
    /* harmony import */


    var _tablelazydemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tablelazydemo */
    "./src/app/showcase/components/table/tablelazydemo.ts");
    /* harmony import */


    var _tableexportdemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./tableexportdemo */
    "./src/app/showcase/components/table/tableexportdemo.ts");
    /* harmony import */


    var _tablecolgroupdemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tablecolgroupdemo */
    "./src/app/showcase/components/table/tablecolgroupdemo.ts");
    /* harmony import */


    var _tablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tablerowexpansiondemo */
    "./src/app/showcase/components/table/tablerowexpansiondemo.ts");
    /* harmony import */


    var _tablescrolldemo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./tablescrolldemo */
    "./src/app/showcase/components/table/tablescrolldemo.ts");
    /* harmony import */


    var _tablevirtualscrolldemo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tablevirtualscrolldemo */
    "./src/app/showcase/components/table/tablevirtualscrolldemo.ts");
    /* harmony import */


    var _tableflexscrolldemo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tableflexscrolldemo */
    "./src/app/showcase/components/table/tableflexscrolldemo.ts");
    /* harmony import */


    var _tablecoltoggledemo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tablecoltoggledemo */
    "./src/app/showcase/components/table/tablecoltoggledemo.ts");
    /* harmony import */


    var _tablecruddemo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./tablecruddemo */
    "./src/app/showcase/components/table/tablecruddemo.ts");
    /* harmony import */


    var _tableresponsivedemo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./tableresponsivedemo */
    "./src/app/showcase/components/table/tableresponsivedemo.ts");
    /* harmony import */


    var _tablecontextmenudemo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./tablecontextmenudemo */
    "./src/app/showcase/components/table/tablecontextmenudemo.ts");
    /* harmony import */


    var _tablecolresizedemo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./tablecolresizedemo */
    "./src/app/showcase/components/table/tablecolresizedemo.ts");
    /* harmony import */


    var _tablereorderdemo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./tablereorderdemo */
    "./src/app/showcase/components/table/tablereorderdemo.ts");
    /* harmony import */


    var _tableeditdemo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./tableeditdemo */
    "./src/app/showcase/components/table/tableeditdemo.ts");
    /* harmony import */


    var _tablerowgroupdemo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./tablerowgroupdemo */
    "./src/app/showcase/components/table/tablerowgroupdemo.ts");
    /* harmony import */


    var _tablestatedemo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./tablestatedemo */
    "./src/app/showcase/components/table/tablestatedemo.ts");
    /* harmony import */


    var _tablestickydemo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./tablestickydemo */
    "./src/app/showcase/components/table/tablestickydemo.ts");
    /* harmony import */


    var _tablebasicdemo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./tablebasicdemo */
    "./src/app/showcase/components/table/tablebasicdemo.ts");
    /* harmony import */


    var _tabledynamicdemo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./tabledynamicdemo */
    "./src/app/showcase/components/table/tabledynamicdemo.ts");

    var TableDemoRoutingModule = /*#__PURE__*/_createClass(function TableDemoRoutingModule() {
      _classCallCheck(this, TableDemoRoutingModule);
    });

    TableDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tabledemo__WEBPACK_IMPORTED_MODULE_3__["TableDemo"]
      }, {
        path: 'page',
        component: _tablepagedemo__WEBPACK_IMPORTED_MODULE_4__["TablePageDemo"]
      }, {
        path: 'basic',
        component: _tablebasicdemo__WEBPACK_IMPORTED_MODULE_27__["TableBasicDemo"]
      }, {
        path: 'dynamic',
        component: _tabledynamicdemo__WEBPACK_IMPORTED_MODULE_28__["TableDynamicDemo"]
      }, {
        path: 'sort',
        component: _tablesortdemo__WEBPACK_IMPORTED_MODULE_5__["TableSortDemo"]
      }, {
        path: 'selection',
        component: _tableselectiondemo__WEBPACK_IMPORTED_MODULE_7__["TableSelectionDemo"]
      }, {
        path: 'filter',
        component: _tablefilterdemo__WEBPACK_IMPORTED_MODULE_6__["TableFilterDemo"]
      }, {
        path: 'sections',
        component: _tablesectionsdemo__WEBPACK_IMPORTED_MODULE_8__["TableSectionsDemo"]
      }, {
        path: 'style',
        component: _tablestyledemo__WEBPACK_IMPORTED_MODULE_9__["TableStyleDemo"]
      }, {
        path: 'lazy',
        component: _tablelazydemo__WEBPACK_IMPORTED_MODULE_10__["TableLazyDemo"]
      }, {
        path: 'export',
        component: _tableexportdemo__WEBPACK_IMPORTED_MODULE_11__["TableExportDemo"]
      }, {
        path: 'colgroup',
        component: _tablecolgroupdemo__WEBPACK_IMPORTED_MODULE_12__["TableColGroupDemo"]
      }, {
        path: 'rowexpansion',
        component: _tablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_13__["TableRowExpansionDemo"]
      }, {
        path: 'scroll',
        component: _tablescrolldemo__WEBPACK_IMPORTED_MODULE_14__["TableScrollDemo"]
      }, {
        path: 'virtualscroll',
        component: _tablevirtualscrolldemo__WEBPACK_IMPORTED_MODULE_15__["TableVirtualScrollDemo"]
      }, {
        path: 'flexscroll',
        component: _tableflexscrolldemo__WEBPACK_IMPORTED_MODULE_16__["TableFlexScrollDemo"]
      }, {
        path: 'coltoggle',
        component: _tablecoltoggledemo__WEBPACK_IMPORTED_MODULE_17__["TableColToggleDemo"]
      }, {
        path: 'crud',
        component: _tablecruddemo__WEBPACK_IMPORTED_MODULE_18__["TableCrudDemo"]
      }, {
        path: 'responsive',
        component: _tableresponsivedemo__WEBPACK_IMPORTED_MODULE_19__["TableResponsiveDemo"]
      }, {
        path: 'contextmenu',
        component: _tablecontextmenudemo__WEBPACK_IMPORTED_MODULE_20__["TableContextMenuDemo"]
      }, {
        path: 'colresize',
        component: _tablecolresizedemo__WEBPACK_IMPORTED_MODULE_21__["TableColResizeDemo"]
      }, {
        path: 'reorder',
        component: _tablereorderdemo__WEBPACK_IMPORTED_MODULE_22__["TableReorderDemo"]
      }, {
        path: 'edit',
        component: _tableeditdemo__WEBPACK_IMPORTED_MODULE_23__["TableEditDemo"]
      }, {
        path: 'rowgroup',
        component: _tablerowgroupdemo__WEBPACK_IMPORTED_MODULE_24__["TableRowGroupDemo"]
      }, {
        path: 'state',
        component: _tablestatedemo__WEBPACK_IMPORTED_MODULE_25__["TableStateDemo"]
      }, {
        path: 'sticky',
        component: _tablestickydemo__WEBPACK_IMPORTED_MODULE_26__["TableStickyDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TableDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tabledemo.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/showcase/components/table/tabledemo.module.ts ***!
    \***************************************************************/

  /*! exports provided: TableDemoModule */

  /***/
  function _src_app_showcase_components_table_tabledemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDemoModule", function () {
      return TableDemoModule;
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


    var _tabledemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabledemo */
    "./src/app/showcase/components/table/tabledemo.ts");
    /* harmony import */


    var _tablebasicdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tablebasicdemo */
    "./src/app/showcase/components/table/tablebasicdemo.ts");
    /* harmony import */


    var _tabledynamicdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabledynamicdemo */
    "./src/app/showcase/components/table/tabledynamicdemo.ts");
    /* harmony import */


    var _tablepagedemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tablepagedemo */
    "./src/app/showcase/components/table/tablepagedemo.ts");
    /* harmony import */


    var _tablesortdemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tablesortdemo */
    "./src/app/showcase/components/table/tablesortdemo.ts");
    /* harmony import */


    var _tableselectiondemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tableselectiondemo */
    "./src/app/showcase/components/table/tableselectiondemo.ts");
    /* harmony import */


    var _tablefilterdemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tablefilterdemo */
    "./src/app/showcase/components/table/tablefilterdemo.ts");
    /* harmony import */


    var _tablesectionsdemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./tablesectionsdemo */
    "./src/app/showcase/components/table/tablesectionsdemo.ts");
    /* harmony import */


    var _tablestyledemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tablestyledemo */
    "./src/app/showcase/components/table/tablestyledemo.ts");
    /* harmony import */


    var _tablelazydemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tablelazydemo */
    "./src/app/showcase/components/table/tablelazydemo.ts");
    /* harmony import */


    var _tableexportdemo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./tableexportdemo */
    "./src/app/showcase/components/table/tableexportdemo.ts");
    /* harmony import */


    var _tablecolgroupdemo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tablecolgroupdemo */
    "./src/app/showcase/components/table/tablecolgroupdemo.ts");
    /* harmony import */


    var _tablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tablerowexpansiondemo */
    "./src/app/showcase/components/table/tablerowexpansiondemo.ts");
    /* harmony import */


    var _tablescrolldemo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tablescrolldemo */
    "./src/app/showcase/components/table/tablescrolldemo.ts");
    /* harmony import */


    var _tablevirtualscrolldemo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./tablevirtualscrolldemo */
    "./src/app/showcase/components/table/tablevirtualscrolldemo.ts");
    /* harmony import */


    var _tableflexscrolldemo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./tableflexscrolldemo */
    "./src/app/showcase/components/table/tableflexscrolldemo.ts");
    /* harmony import */


    var _tablecoltoggledemo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./tablecoltoggledemo */
    "./src/app/showcase/components/table/tablecoltoggledemo.ts");
    /* harmony import */


    var _tablecruddemo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./tablecruddemo */
    "./src/app/showcase/components/table/tablecruddemo.ts");
    /* harmony import */


    var _tableresponsivedemo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./tableresponsivedemo */
    "./src/app/showcase/components/table/tableresponsivedemo.ts");
    /* harmony import */


    var _tablecontextmenudemo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./tablecontextmenudemo */
    "./src/app/showcase/components/table/tablecontextmenudemo.ts");
    /* harmony import */


    var _tablecolresizedemo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./tablecolresizedemo */
    "./src/app/showcase/components/table/tablecolresizedemo.ts");
    /* harmony import */


    var _tablereorderdemo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./tablereorderdemo */
    "./src/app/showcase/components/table/tablereorderdemo.ts");
    /* harmony import */


    var _tableeditdemo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./tableeditdemo */
    "./src/app/showcase/components/table/tableeditdemo.ts");
    /* harmony import */


    var _tablestatedemo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./tablestatedemo */
    "./src/app/showcase/components/table/tablestatedemo.ts");
    /* harmony import */


    var _tablestickydemo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./tablestickydemo */
    "./src/app/showcase/components/table/tablestickydemo.ts");
    /* harmony import */


    var _tablerowgroupdemo__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./tablerowgroupdemo */
    "./src/app/showcase/components/table/tablerowgroupdemo.ts");
    /* harmony import */


    var _tabledemo_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./tabledemo-routing.module */
    "./src/app/showcase/components/table/tabledemo-routing.module.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! primeng/table */
    "./src/app/components/table/public_api.ts");
    /* harmony import */


    var primeng_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! primeng/slider */
    "./src/app/components/slider/public_api.ts");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! primeng/multiselect */
    "./src/app/components/multiselect/public_api.ts");
    /* harmony import */


    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! primeng/contextmenu */
    "./src/app/components/contextmenu/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! primeng/calendar */
    "./src/app/components/calendar/public_api.ts");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! primeng/dialog */
    "./src/app/components/dialog/public_api.ts");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! primeng/dropdown */
    "./src/app/components/dropdown/public_api.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! primeng/progressbar */
    "./src/app/components/progressbar/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var TableDemoModule = /*#__PURE__*/_createClass(function TableDemoModule() {
      _classCallCheck(this, TableDemoModule);
    });

    TableDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabledemo_routing_module__WEBPACK_IMPORTED_MODULE_30__["TableDemoRoutingModule"], primeng_table__WEBPACK_IMPORTED_MODULE_31__["TableModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_37__["CalendarModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_32__["SliderModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_38__["DialogModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__["MultiSelectModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_34__["ContextMenuModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_39__["DropdownModule"], primeng_button__WEBPACK_IMPORTED_MODULE_36__["ButtonModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_35__["ToastModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__["InputTextModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_41__["ProgressBarModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_42__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_43__["CodeHighlighterModule"]],
      declarations: [_tabledemo__WEBPACK_IMPORTED_MODULE_4__["TableDemo"], _tablebasicdemo__WEBPACK_IMPORTED_MODULE_5__["TableBasicDemo"], _tabledynamicdemo__WEBPACK_IMPORTED_MODULE_6__["TableDynamicDemo"], _tablepagedemo__WEBPACK_IMPORTED_MODULE_7__["TablePageDemo"], _tablesortdemo__WEBPACK_IMPORTED_MODULE_8__["TableSortDemo"], _tableselectiondemo__WEBPACK_IMPORTED_MODULE_9__["TableSelectionDemo"], _tablesectionsdemo__WEBPACK_IMPORTED_MODULE_11__["TableSectionsDemo"], _tablefilterdemo__WEBPACK_IMPORTED_MODULE_10__["TableFilterDemo"], _tablestyledemo__WEBPACK_IMPORTED_MODULE_12__["TableStyleDemo"], _tablelazydemo__WEBPACK_IMPORTED_MODULE_13__["TableLazyDemo"], _tableexportdemo__WEBPACK_IMPORTED_MODULE_14__["TableExportDemo"], _tablecolgroupdemo__WEBPACK_IMPORTED_MODULE_15__["TableColGroupDemo"], _tablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_16__["TableRowExpansionDemo"], _tablescrolldemo__WEBPACK_IMPORTED_MODULE_17__["TableScrollDemo"], _tablevirtualscrolldemo__WEBPACK_IMPORTED_MODULE_18__["TableVirtualScrollDemo"], _tableflexscrolldemo__WEBPACK_IMPORTED_MODULE_19__["TableFlexScrollDemo"], _tablecoltoggledemo__WEBPACK_IMPORTED_MODULE_20__["TableColToggleDemo"], _tablecruddemo__WEBPACK_IMPORTED_MODULE_21__["TableCrudDemo"], _tableresponsivedemo__WEBPACK_IMPORTED_MODULE_22__["TableResponsiveDemo"], _tablecontextmenudemo__WEBPACK_IMPORTED_MODULE_23__["TableContextMenuDemo"], _tablecolresizedemo__WEBPACK_IMPORTED_MODULE_24__["TableColResizeDemo"], _tablereorderdemo__WEBPACK_IMPORTED_MODULE_25__["TableReorderDemo"], _tableeditdemo__WEBPACK_IMPORTED_MODULE_26__["TableEditDemo"], _tablerowgroupdemo__WEBPACK_IMPORTED_MODULE_29__["TableRowGroupDemo"], _tablestatedemo__WEBPACK_IMPORTED_MODULE_27__["TableStateDemo"], _tablestickydemo__WEBPACK_IMPORTED_MODULE_28__["TableStickyDemo"]]
    })], TableDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tabledemo.scss":
  /*!**********************************************************!*\
    !*** ./src/app/showcase/components/table/tabledemo.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function _src_app_showcase_components_table_tabledemoScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep .ui-table-customers {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n:host ::ng-deep .ui-table-customers .customer-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5em;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n:host ::ng-deep .ui-table-customers .customer-badge.status-qualified {\n  background-color: #C8E6C9;\n  color: #256029;\n}\n:host ::ng-deep .ui-table-customers .customer-badge.status-unqualified {\n  background-color: #FFCDD2;\n  color: #C63737;\n}\n:host ::ng-deep .ui-table-customers .customer-badge.status-negotiation {\n  background-color: #FEEDAF;\n  color: #8A5340;\n}\n:host ::ng-deep .ui-table-customers .customer-badge.status-new {\n  background-color: #B3E5FC;\n  color: #23547B;\n}\n:host ::ng-deep .ui-table-customers .customer-badge.status-renewal {\n  background-color: #ECCFFF;\n  color: #694382;\n}\n:host ::ng-deep .ui-table-customers .customer-badge.status-proposal {\n  background-color: #FFD8B2;\n  color: #805B36;\n}\n:host ::ng-deep .ui-table-customers .flag {\n  vertical-align: middle;\n  width: 30px;\n  height: 20px;\n}\n:host ::ng-deep .ui-table-customers .ui-multiselect-representative-option {\n  display: inline-block;\n  vertical-align: middle;\n}\n:host ::ng-deep .ui-table-customers .ui-multiselect-representative-option img {\n  vertical-align: middle;\n  width: 24px;\n}\n:host ::ng-deep .ui-table-customers .ui-multiselect-representative-option span {\n  margin-top: 0.125em;\n  vertical-align: middle;\n  margin-left: 0.5em;\n}\n:host ::ng-deep .ui-table-customers .ui-paginator .ui-dropdown {\n  float: left;\n}\n:host ::ng-deep .ui-table-customers .ui-paginator .ui-paginator-current {\n  float: right;\n}\n:host ::ng-deep .ui-table-customers .ui-progressbar {\n  height: 8px;\n  background-color: #D8DADC;\n}\n:host ::ng-deep .ui-table-customers .ui-progressbar .ui-progressbar-value {\n  background-color: #00ACAD;\n}\n:host ::ng-deep .ui-table-customers .ui-column-filter {\n  display: block;\n}\n:host ::ng-deep .ui-table-customers .ui-column-filter input {\n  width: 100%;\n}\n:host ::ng-deep .ui-table-customers .ui-table-globalfilter-container {\n  float: right;\n}\n:host ::ng-deep .ui-table-customers .ui-table-globalfilter-container input {\n  width: 200px;\n}\n:host ::ng-deep .ui-table-customers .ui-datepicker {\n  min-width: 25em;\n}\n:host ::ng-deep .ui-table-customers .ui-datepicker td {\n  font-weight: 400;\n}\n:host ::ng-deep .ui-table-customers .ui-table-caption {\n  border: 0 none;\n  padding: 12px;\n  text-align: left;\n  font-size: 20px;\n}\n:host ::ng-deep .ui-table-customers .ui-paginator {\n  border: 0 none;\n  padding: 1em;\n}\n:host ::ng-deep .ui-table-customers .ui-table-thead > tr > th {\n  border: 0 none;\n  text-align: left;\n}\n:host ::ng-deep .ui-table-customers .ui-table-thead > tr > th.ui-filter-column {\n  border-top: 1px solid #c8c8c8;\n}\n:host ::ng-deep .ui-table-customers .ui-table-thead > tr > th:first-child {\n  width: 5em;\n  text-align: center;\n}\n:host ::ng-deep .ui-table-customers .ui-table-thead > tr > th:last-child {\n  width: 8em;\n  text-align: center;\n}\n:host ::ng-deep .ui-table-customers .ui-table-tbody > tr > td {\n  border: 0 none;\n  cursor: auto;\n}\n:host ::ng-deep .ui-table-customers .ui-table-tbody > tr > td:first-child {\n  width: 3em;\n  text-align: center;\n}\n:host ::ng-deep .ui-table-customers .ui-table-tbody > tr > td:last-child {\n  width: 8em;\n  text-align: center;\n}\n:host ::ng-deep .ui-table-customers .ui-dropdown-label:not(.ui-placeholder) {\n  text-transform: uppercase;\n}\n:host ::ng-deep .ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n  display: none;\n}\n/* Responsive */\n@media screen and (max-width: 64em) {\n  :host ::ng-deep .ui-table.ui-table-customers .ui-table-thead > tr > th,\n:host ::ng-deep .ui-table.ui-table-customers .ui-table-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .ui-table.ui-table-customers .ui-table-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .ui-table.ui-table-customers .ui-table-tbody > tr > td .ui-column-title {\n    padding: 0.4em;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em 1em -0.4em -0.4em;\n    font-weight: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvY29tcG9uZW50cy90YWJsZS9FOlxcUHJvamVjdHNcXFByaW1lTkd2OS0xLTMvc3JjXFxhcHBcXHNob3djYXNlXFxjb21wb25lbnRzXFx0YWJsZVxcdGFibGVkZW1vLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2NvbXBvbmVudHMvdGFibGUvdGFibGVkZW1vLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrR0FBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NSO0FEQ1E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDWjtBREVRO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0RaO0FESVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNGWjtBREtRO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDSFo7QURNUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0paO0FEUUk7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTlI7QURTSTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUNQUjtBRFNRO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FDUFo7QURVUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1JaO0FEYVE7RUFDSSxXQUFBO0FDWFo7QURjUTtFQUNJLFlBQUE7QUNaWjtBRGdCSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ2RSO0FEZ0JRO0VBQ0kseUJBQUE7QUNkWjtBRGtCSTtFQUNJLGNBQUE7QUNoQlI7QURrQlE7RUFDSSxXQUFBO0FDaEJaO0FEb0JJO0VBQ0ksWUFBQTtBQ2xCUjtBRG9CUTtFQUNJLFlBQUE7QUNsQlo7QURzQkk7RUFDSSxlQUFBO0FDcEJSO0FEc0JRO0VBQ0ksZ0JBQUE7QUNwQlo7QUR3Qkk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3RCUjtBRHlCSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDdkJSO0FEMEJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDeEJSO0FEMEJRO0VBQ0ksNkJBQUE7QUN4Qlo7QUQyQlE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUN6Qlo7QUQ0QlE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUMxQlo7QUQ4Qkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQzVCUjtBRDhCUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQzVCWjtBRCtCUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQzdCWjtBRGlDSTtFQUNJLHlCQUFBO0FDL0JSO0FEa0NJO0VBQ0ksYUFBQTtBQ2hDUjtBRG9DQSxlQUFBO0FBQ0E7RUFHWTs7SUFFSSx3QkFBQTtFQ25DZDtFRHNDVTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNwQ2Q7RURzQ2M7SUFDSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxpQkFBQTtFQ3BDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2NvbXBvbmVudHMvdGFibGUvdGFibGVkZW1vLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIFxuICAgIC5jdXN0b21lci1iYWRnZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcGFkZGluZzogLjI1ZW0gLjVlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcbiAgICBcbiAgICAgICAgJi5zdGF0dXMtcXVhbGlmaWVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEU2Qzk7XG4gICAgICAgICAgICBjb2xvcjogIzI1NjAyOTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAmLnN0YXR1cy11bnF1YWxpZmllZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDREQyO1xuICAgICAgICAgICAgY29sb3I6ICNDNjM3Mzc7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi5zdGF0dXMtbmVnb3RpYXRpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRURBRjtcbiAgICAgICAgICAgIGNvbG9yOiAjOEE1MzQwO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICYuc3RhdHVzLW5ldyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZDO1xuICAgICAgICAgICAgY29sb3I6ICMyMzU0N0I7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi5zdGF0dXMtcmVuZXdhbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNDRkZGO1xuICAgICAgICAgICAgY29sb3I6ICM2OTQzODI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi5zdGF0dXMtcHJvcG9zYWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDhCMjtcbiAgICAgICAgICAgIGNvbG9yOiAjODA1QjM2O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5mbGFnIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC4xMjVlbTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC51aS1wYWdpbmF0b3Ige1xuICAgICAgICAudWktZHJvcGRvd24ge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnVpLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC51aS1wcm9ncmVzc2JhciB7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURDO1xuICAgIFxuICAgICAgICAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUNBRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC51aS1jb2x1bW4tZmlsdGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC51aS1kYXRlcGlja2VyIHtcbiAgICAgICAgbWluLXdpZHRoOiAyNWVtO1xuICAgIFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnVpLXRhYmxlLWNhcHRpb24ge1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC51aS1wYWdpbmF0b3Ige1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cblxuICAgIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAmLnVpLWZpbHRlci1jb2x1bW4ge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiA1ZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgd2lkdGg6IDhlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgd2lkdGg6IDNlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsOm5vdCgudWktcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIC51aS1jb2x1bW4tdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICAgIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUge1xuICAgICAgICAmLnVpLXRhYmxlLWN1c3RvbWVycyB7XG4gICAgICAgICAgICAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxuICAgICAgICAgICAgLnVpLXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcblxuICAgICAgICAgICAgICAgIC51aS1jb2x1bW4tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNGVtO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0uNGVtIDFlbSAtLjRlbSAtLjRlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLmN1c3RvbWVyLWJhZGdlLnN0YXR1cy1xdWFsaWZpZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFNkM5O1xuICBjb2xvcjogIzI1NjAyOTtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtdW5xdWFsaWZpZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDREQyO1xuICBjb2xvcjogI0M2MzczNztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmVnb3RpYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVFREFGO1xuICBjb2xvcjogIzhBNTM0MDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtbmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IzRTVGQztcbiAgY29sb3I6ICMyMzU0N0I7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAuY3VzdG9tZXItYmFkZ2Uuc3RhdHVzLXJlbmV3YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNDRkZGO1xuICBjb2xvcjogIzY5NDM4Mjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5jdXN0b21lci1iYWRnZS5zdGF0dXMtcHJvcG9zYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEOEIyO1xuICBjb2xvcjogIzgwNUIzNjtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC5mbGFnIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1tdWx0aXNlbGVjdC1yZXByZXNlbnRhdGl2ZS1vcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktbXVsdGlzZWxlY3QtcmVwcmVzZW50YXRpdmUtb3B0aW9uIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyNHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLW11bHRpc2VsZWN0LXJlcHJlc2VudGF0aXZlLW9wdGlvbiBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMC4xMjVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXBhZ2luYXRvciAudWktZHJvcGRvd24ge1xuICBmbG9hdDogbGVmdDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1wYWdpbmF0b3IgLnVpLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXByb2dyZXNzYmFyIHtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktcHJvZ3Jlc3NiYXIgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUNBRDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1jb2x1bW4tZmlsdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktY29sdW1uLWZpbHRlciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWdsb2JhbGZpbHRlci1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtZ2xvYmFsZmlsdGVyLWNvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS1kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAyNWVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLWRhdGVwaWNrZXIgdGQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLWNhcHRpb24ge1xuICBib3JkZXI6IDAgbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXBhZ2luYXRvciB7XG4gIGJvcmRlcjogMCBub25lO1xuICBwYWRkaW5nOiAxZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoLnVpLWZpbHRlci1jb2x1bW4ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M4YzhjODtcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGg6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQge1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGN1cnNvcjogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICB3aWR0aDogOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLWN1c3RvbWVycyAudWktZHJvcGRvd24tbGFiZWw6bm90KC51aS1wbGFjZWhvbGRlcikge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAudWktY29sdW1uLXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICA6aG9zdCA6Om5nLWRlZXAgLnVpLXRhYmxlLnVpLXRhYmxlLWN1c3RvbWVycyAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxuOmhvc3QgOjpuZy1kZWVwIC51aS10YWJsZS51aS10YWJsZS1jdXN0b21lcnMgLnVpLXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBsZWZ0O1xuICAgIGJvcmRlcjogMCBub25lO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAudWktdGFibGUudWktdGFibGUtY3VzdG9tZXJzIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQgLnVpLWNvbHVtbi10aXRsZSB7XG4gICAgcGFkZGluZzogMC40ZW07XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogLTAuNGVtIDFlbSAtMC40ZW0gLTAuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tabledemo.ts":
  /*!********************************************************!*\
    !*** ./src/app/showcase/components/table/tabledemo.ts ***!
    \********************************************************/

  /*! exports provided: TableDemo */

  /***/
  function _src_app_showcase_components_table_tabledemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDemo", function () {
      return TableDemo;
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


    var _service_customerservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/customerservice */
    "./src/app/showcase/service/customerservice.ts");
    /* harmony import */


    var _components_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/table/table */
    "./src/app/components/table/table.ts");

    var TableDemo = /*#__PURE__*/function () {
      function TableDemo(customerService) {
        _classCallCheck(this, TableDemo);

        this.customerService = customerService;
        this.loading = true;
      }

      return _createClass(TableDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.customerService.getCustomersLarge().then(function (customers) {
            _this6.customers = customers;
            _this6.loading = false;
          });
          this.representatives = [{
            name: "Amy Elsner",
            image: 'amyelsner.png'
          }, {
            name: "Anna Fali",
            image: 'annafali.png'
          }, {
            name: "Asiya Javayant",
            image: 'asiyajavayant.png'
          }, {
            name: "Bernardo Dominic",
            image: 'bernardodominic.png'
          }, {
            name: "Elwin Sharvill",
            image: 'elwinsharvill.png'
          }, {
            name: "Ioni Bowcher",
            image: 'ionibowcher.png'
          }, {
            name: "Ivan Magalhaes",
            image: 'ivanmagalhaes.png'
          }, {
            name: "Onyama Limba",
            image: 'onyamalimba.png'
          }, {
            name: "Stephen Shaw",
            image: 'stephenshaw.png'
          }, {
            name: "XuXue Feng",
            image: 'xuxuefeng.png'
          }];
          this.statuses = [{
            label: 'Unqualified',
            value: 'unqualified'
          }, {
            label: 'Qualified',
            value: 'qualified'
          }, {
            label: 'New',
            value: 'new'
          }, {
            label: 'Negotiation',
            value: 'negotiation'
          }, {
            label: 'Renewal',
            value: 'renewal'
          }, {
            label: 'Proposal',
            value: 'proposal'
          }];
        }
      }, {
        key: "onActivityChange",
        value: function onActivityChange(event) {
          var value = event.target.value;

          if (value && value.trim().length) {
            var activity = parseInt(value);

            if (!isNaN(activity)) {
              this.table.filter(activity, 'activity', 'gte');
            }
          }
        }
      }, {
        key: "onDateSelect",
        value: function onDateSelect(value) {
          this.table.filter(this.formatDate(value), 'date', 'equals');
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var month = date.getMonth() + 1;
          var day = date.getDate();

          if (month < 10) {
            month = '0' + month;
          }

          if (day < 10) {
            day = '0' + day;
          }

          return date.getFullYear() + '-' + month + '-' + day;
        }
      }, {
        key: "onRepresentativeChange",
        value: function onRepresentativeChange(event) {
          this.table.filter(event.value, 'representative', 'in');
        }
      }]);
    }();

    TableDemo.ctorParameters = function () {
      return [{
        type: _service_customerservice__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_table_table__WEBPACK_IMPORTED_MODULE_3__["Table"])], TableDemo.prototype, "table", void 0);
    TableDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabledemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tabledemo.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tabledemo.scss */
      "./src/app/showcase/components/table/tabledemo.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_customerservice__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])], TableDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tabledynamicdemo.ts":
  /*!***************************************************************!*\
    !*** ./src/app/showcase/components/table/tabledynamicdemo.ts ***!
    \***************************************************************/

  /*! exports provided: TableDynamicDemo */

  /***/
  function _src_app_showcase_components_table_tabledynamicdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDynamicDemo", function () {
      return TableDynamicDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableDynamicDemo = /*#__PURE__*/function () {
      function TableDynamicDemo(carService) {
        _classCallCheck(this, TableDynamicDemo);

        this.carService = carService;
      }

      return _createClass(TableDynamicDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this7.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableDynamicDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableDynamicDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tabledynamicdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tabledynamicdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableDynamicDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tableeditdemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/table/tableeditdemo.ts ***!
    \************************************************************/

  /*! exports provided: TableEditDemo */

  /***/
  function _src_app_showcase_components_table_tableeditdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableEditDemo", function () {
      return TableEditDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var TableEditDemo = /*#__PURE__*/function () {
      function TableEditDemo(carService, messageService) {
        _classCallCheck(this, TableEditDemo);

        this.carService = carService;
        this.messageService = messageService;
        this.clonedCars = {};
      }

      return _createClass(TableEditDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this8.cars1 = cars;
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this8.cars2 = cars;
          });
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
        }
      }, {
        key: "onRowEditInit",
        value: function onRowEditInit(car) {
          this.clonedCars[car.vin] = Object.assign({}, car);
        }
      }, {
        key: "onRowEditSave",
        value: function onRowEditSave(car) {
          if (car.year > 0) {
            delete this.clonedCars[car.vin];
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Car is updated'
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Year is required'
            });
          }
        }
      }, {
        key: "onRowEditCancel",
        value: function onRowEditCancel(car, index) {
          this.cars2[index] = this.clonedCars[car.vin];
          delete this.clonedCars[car.vin];
        }
      }]);
    }();

    TableEditDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    TableEditDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tableeditdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableeditdemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], TableEditDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tableexportdemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/table/tableexportdemo.ts ***!
    \**************************************************************/

  /*! exports provided: TableExportDemo */

  /***/
  function _src_app_showcase_components_table_tableexportdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableExportDemo", function () {
      return TableExportDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableExportDemo = /*#__PURE__*/function () {
      function TableExportDemo(carService) {
        _classCallCheck(this, TableExportDemo);

        this.carService = carService;
      }

      return _createClass(TableExportDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this9.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.exportColumns = this.cols.map(function (col) {
            return {
              title: col.header,
              dataKey: col.field
            };
          });
        }
      }, {
        key: "exportPdf",
        value: function exportPdf() {
          var _this10 = this;

          __webpack_require__.e(
          /*! import() | jspdf */
          "default~jspdf~jspdf-autotable").then(__webpack_require__.t.bind(null,
          /*! jspdf */
          "./node_modules/jspdf/dist/jspdf.min.js", 7)).then(function (jsPDF) {
            Promise.all(
            /*! import() | jspdf-autotable */
            [__webpack_require__.e("default~jspdf~jspdf-autotable"), __webpack_require__.e("jspdf-autotable")]).then(__webpack_require__.t.bind(null,
            /*! jspdf-autotable */
            "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js", 7)).then(function (x) {
              var doc = new jsPDF["default"](0, 0);
              doc.autoTable(_this10.exportColumns, _this10.cars);
              doc.save('primengTable.pdf');
            });
          });
        }
      }, {
        key: "exportExcel",
        value: function exportExcel() {
          var _this11 = this;

          __webpack_require__.e(
          /*! import() | xlsx */
          "xlsx").then(__webpack_require__.t.bind(null,
          /*! xlsx */
          "./node_modules/xlsx/xlsx.js", 7)).then(function (xlsx) {
            var worksheet = xlsx.utils.json_to_sheet(_this11.getCars());
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
            });

            _this11.saveAsExcelFile(excelBuffer, "primengTable");
          });
        }
      }, {
        key: "saveAsExcelFile",
        value: function saveAsExcelFile(buffer, fileName) {
          __webpack_require__.e(
          /*! import() | file-saver */
          "file-saver").then(__webpack_require__.t.bind(null,
          /*! file-saver */
          "./node_modules/file-saver/dist/FileSaver.min.js", 7)).then(function (FileSaver) {
            var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            var EXCEL_EXTENSION = '.xlsx';
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          });
        }
      }, {
        key: "getCars",
        value: function getCars() {
          var cars = [];

          var _iterator = _createForOfIteratorHelper(this.cars),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var car = _step.value;
              car.year = car.year.toString();
              cars.push(car);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return cars;
        }
      }]);
    }();

    TableExportDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableExportDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tableexportdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableexportdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableExportDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablefilterdemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/table/tablefilterdemo.ts ***!
    \**************************************************************/

  /*! exports provided: TableFilterDemo */

  /***/
  function _src_app_showcase_components_table_tablefilterdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableFilterDemo", function () {
      return TableFilterDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");
    /* harmony import */


    var _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/utils/filterutils */
    "./src/app/components/utils/filterutils.ts");

    var TableFilterDemo = /*#__PURE__*/function () {
      function TableFilterDemo(carService) {
        _classCallCheck(this, TableFilterDemo);

        this.carService = carService;
      }

      return _createClass(TableFilterDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.carService.getCarsMedium().then(function (cars) {
            return _this12.cars = cars;
          });
          this.brands = [{
            label: 'All Brands',
            value: null
          }, {
            label: 'Audi',
            value: 'Audi'
          }, {
            label: 'BMW',
            value: 'BMW'
          }, {
            label: 'Fiat',
            value: 'Fiat'
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
          this.colors = [{
            label: 'White',
            value: 'White'
          }, {
            label: 'Green',
            value: 'Green'
          }, {
            label: 'Silver',
            value: 'Silver'
          }, {
            label: 'Black',
            value: 'Black'
          }, {
            label: 'Red',
            value: 'Red'
          }, {
            label: 'Maroon',
            value: 'Maroon'
          }, {
            label: 'Brown',
            value: 'Brown'
          }, {
            label: 'Orange',
            value: 'Orange'
          }, {
            label: 'Blue',
            value: 'Blue'
          }];
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }, {
            field: 'price',
            header: 'Price'
          }];

          _components_utils_filterutils__WEBPACK_IMPORTED_MODULE_3__["FilterUtils"]['custom'] = function (value, filter) {
            if (filter === undefined || filter === null || filter.trim() === '') {
              return true;
            }

            if (value === undefined || value === null) {
              return false;
            }

            return parseInt(filter) > value;
          };
        }
      }, {
        key: "onYearChange",
        value: function onYearChange(event, dt) {
          if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
          }

          this.yearTimeout = setTimeout(function () {
            dt.filter(event.value, 'year', 'gt');
          }, 250);
        }
      }]);
    }();

    TableFilterDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableFilterDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablefilterdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablefilterdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableFilterDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tableflexscrolldemo.ts":
  /*!******************************************************************!*\
    !*** ./src/app/showcase/components/table/tableflexscrolldemo.ts ***!
    \******************************************************************/

  /*! exports provided: TableFlexScrollDemo */

  /***/
  function _src_app_showcase_components_table_tableflexscrolldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableFlexScrollDemo", function () {
      return TableFlexScrollDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableFlexScrollDemo = /*#__PURE__*/function () {
      function TableFlexScrollDemo(carService) {
        _classCallCheck(this, TableFlexScrollDemo);

        this.carService = carService;
      }

      return _createClass(TableFlexScrollDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.cars = Array.from({
            length: 10000
          }).map(function () {
            return _this13.carService.generateCar();
          });
          this.virtualCars = Array.from({
            length: 10000
          });
        }
      }, {
        key: "loadCarsLazy",
        value: function loadCarsLazy(event) {
          var _this14 = this;

          //simulate remote connection with a timeout 
          setTimeout(function () {
            //load data of required page
            var loadedCars = _this14.cars.slice(event.first, event.first + event.rows); //populate page of virtual cars


            Array.prototype.splice.apply(_this14.virtualCars, [event.first, event.rows].concat(_toConsumableArray(loadedCars))); //trigger change detection

            _this14.virtualCars = _toConsumableArray(_this14.virtualCars);
          }, Math.random() * 1000 + 250);
        }
      }]);
    }();

    TableFlexScrollDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableFlexScrollDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tableflexscrolldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableflexscrolldemo.html"))["default"],
      styles: ["\n        .loading-text {\n            display: block;\n            background-color: #f1f1f1;\n            min-height: 19px;\n            animation: pulse 1s infinite ease-in-out;\n            text-indent: -99999px;\n            overflow: hidden;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableFlexScrollDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablelazydemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/table/tablelazydemo.ts ***!
    \************************************************************/

  /*! exports provided: TableLazyDemo */

  /***/
  function _src_app_showcase_components_table_tablelazydemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableLazyDemo", function () {
      return TableLazyDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableLazyDemo = /*#__PURE__*/function () {
      function TableLazyDemo(carService) {
        _classCallCheck(this, TableLazyDemo);

        this.carService = carService;
      }

      return _createClass(TableLazyDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          //datasource imitation
          this.carService.getCarsLarge().then(function (cars) {
            _this15.datasource = cars;
            _this15.totalRecords = _this15.datasource.length;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.loading = true;
        }
      }, {
        key: "loadCarsLazy",
        value: function loadCarsLazy(event) {
          var _this16 = this;

          this.loading = true; //in a real application, make a remote request to load data using state metadata from event
          //event.first = First row offset
          //event.rows = Number of rows per page
          //event.sortField = Field name to sort with
          //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
          //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
          //imitate db connection over a network

          setTimeout(function () {
            if (_this16.datasource) {
              _this16.cars = _this16.datasource.slice(event.first, event.first + event.rows);
              _this16.loading = false;
            }
          }, 1000);
        }
      }]);
    }();

    TableLazyDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableLazyDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablelazydemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablelazydemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableLazyDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablepagedemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/table/tablepagedemo.ts ***!
    \************************************************************/

  /*! exports provided: TablePageDemo */

  /***/
  function _src_app_showcase_components_table_tablepagedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablePageDemo", function () {
      return TablePageDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TablePageDemo = /*#__PURE__*/function () {
      function TablePageDemo(carService) {
        _classCallCheck(this, TablePageDemo);

        this.carService = carService;
        this.cars = [];
        this.first = 0;
        this.rows = 10;
      }

      return _createClass(TablePageDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.carService.getCarsMedium().then(function (cars) {
            return _this17.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }, {
        key: "next",
        value: function next() {
          this.first = this.first + this.rows;
        }
      }, {
        key: "prev",
        value: function prev() {
          this.first = this.first - this.rows;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.first = 0;
        }
      }, {
        key: "isLastPage",
        value: function isLastPage() {
          return this.first === this.cars.length - this.rows;
        }
      }, {
        key: "isFirstPage",
        value: function isFirstPage() {
          return this.first === 0;
        }
      }]);
    }();

    TablePageDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TablePageDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablepagedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablepagedemo.html"))["default"],
      styles: ["\n        :host ::ng-deep .ui-paginator-current {\n            float: left;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TablePageDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablereorderdemo.ts":
  /*!***************************************************************!*\
    !*** ./src/app/showcase/components/table/tablereorderdemo.ts ***!
    \***************************************************************/

  /*! exports provided: TableReorderDemo */

  /***/
  function _src_app_showcase_components_table_tablereorderdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableReorderDemo", function () {
      return TableReorderDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableReorderDemo = /*#__PURE__*/function () {
      function TableReorderDemo(carService) {
        _classCallCheck(this, TableReorderDemo);

        this.carService = carService;
      }

      return _createClass(TableReorderDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this18.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableReorderDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableReorderDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablereorderdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablereorderdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableReorderDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tableresponsivedemo.ts":
  /*!******************************************************************!*\
    !*** ./src/app/showcase/components/table/tableresponsivedemo.ts ***!
    \******************************************************************/

  /*! exports provided: TableResponsiveDemo */

  /***/
  function _src_app_showcase_components_table_tableresponsivedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableResponsiveDemo", function () {
      return TableResponsiveDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableResponsiveDemo = /*#__PURE__*/function () {
      function TableResponsiveDemo(carService) {
        _classCallCheck(this, TableResponsiveDemo);

        this.carService = carService;
      }

      return _createClass(TableResponsiveDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this19.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableResponsiveDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableResponsiveDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tableresponsivedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableresponsivedemo.html"))["default"],
      styles: ["\n        /* Column Priorities */\n        @media only all {\n            th.ui-p-6,\n            td.ui-p-6,\n            th.ui-p-5,\n            td.ui-p-5,\n            th.ui-p-4,\n            td.ui-p-4,\n            th.ui-p-3,\n            td.ui-p-3,\n            th.ui-p-2,\n            td.ui-p-2,\n            th.ui-p-1,\n            td.ui-p-1 {\n                display: none;\n            }\n        }\n        \n        /* Show priority 1 at 320px (20em x 16px) */\n        @media screen and (min-width: 20em) {\n            th.ui-p-1,\n            td.ui-p-1 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 2 at 480px (30em x 16px) */\n        @media screen and (min-width: 30em) {\n            th.ui-p-2,\n            td.ui-p-2 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 3 at 640px (40em x 16px) */\n        @media screen and (min-width: 40em) {\n            th.ui-p-3,\n            td.ui-p-3 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 4 at 800px (50em x 16px) */\n        @media screen and (min-width: 50em) {\n            th.ui-p-4,\n            td.ui-p-4 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 5 at 960px (60em x 16px) */\n        @media screen and (min-width: 60em) {\n            th.ui-p-5,\n            td.ui-p-5 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 6 at 1,120px (70em x 16px) */\n        @media screen and (min-width: 70em) {\n            th.ui-p-6,\n            td.ui-p-6 {\n                display: table-cell;\n            }\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableResponsiveDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablerowexpansiondemo.ts":
  /*!********************************************************************!*\
    !*** ./src/app/showcase/components/table/tablerowexpansiondemo.ts ***!
    \********************************************************************/

  /*! exports provided: TableRowExpansionDemo */

  /***/
  function _src_app_showcase_components_table_tablerowexpansiondemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableRowExpansionDemo", function () {
      return TableRowExpansionDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var TableRowExpansionDemo = /*#__PURE__*/function () {
      function TableRowExpansionDemo(carService) {
        _classCallCheck(this, TableRowExpansionDemo);

        this.carService = carService;
      }

      return _createClass(TableRowExpansionDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this20.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableRowExpansionDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableRowExpansionDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablerowexpansiondemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablerowexpansiondemo.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rowExpansionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-10%)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableRowExpansionDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablerowgroupdemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/table/tablerowgroupdemo.ts ***!
    \****************************************************************/

  /*! exports provided: TableRowGroupDemo */

  /***/
  function _src_app_showcase_components_table_tablerowgroupdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableRowGroupDemo", function () {
      return TableRowGroupDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableRowGroupDemo = /*#__PURE__*/function () {
      function TableRowGroupDemo(carService) {
        _classCallCheck(this, TableRowGroupDemo);

        this.carService = carService;
      }

      return _createClass(TableRowGroupDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.carService.getCarsMedium().then(function (cars) {
            _this21.cars = cars;

            _this21.updateRowGroupMetaData();
          });
        }
      }, {
        key: "onSort",
        value: function onSort() {
          this.updateRowGroupMetaData();
        }
      }, {
        key: "updateRowGroupMetaData",
        value: function updateRowGroupMetaData() {
          this.rowGroupMetadata = {};

          if (this.cars) {
            for (var i = 0; i < this.cars.length; i++) {
              var rowData = this.cars[i];
              var brand = rowData.brand;

              if (i == 0) {
                this.rowGroupMetadata[brand] = {
                  index: 0,
                  size: 1
                };
              } else {
                var previousRowData = this.cars[i - 1];
                var previousRowGroup = previousRowData.brand;
                if (brand === previousRowGroup) this.rowGroupMetadata[brand].size++;else this.rowGroupMetadata[brand] = {
                  index: i,
                  size: 1
                };
              }
            }
          }
        }
      }]);
    }();

    TableRowGroupDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableRowGroupDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablerowgroupdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablerowgroupdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableRowGroupDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablescrolldemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/table/tablescrolldemo.ts ***!
    \**************************************************************/

  /*! exports provided: TableScrollDemo */

  /***/
  function _src_app_showcase_components_table_tablescrolldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableScrollDemo", function () {
      return TableScrollDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableScrollDemo = /*#__PURE__*/function () {
      function TableScrollDemo(carService) {
        _classCallCheck(this, TableScrollDemo);

        this.carService = carService;
      }

      return _createClass(TableScrollDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.carService.getCarsMedium().then(function (cars) {
            return _this22.cars1 = cars;
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this22.cars2 = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.scrollableCols = [{
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.frozenCols = [{
            field: 'vin',
            header: 'Vin'
          }];
          this.frozenCars = [{
            "brand": "BMW",
            "year": 2013,
            "color": "Grey",
            "vin": "fh2uf23"
          }, {
            "brand": "Chevrolet",
            "year": 2011,
            "color": "Black",
            "vin": "4525g23"
          }];
        }
      }, {
        key: "showDialog",
        value: function showDialog() {
          this.dialogVisible = true;
        }
      }]);
    }();

    TableScrollDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableScrollDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablescrolldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablescrolldemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableScrollDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablesectionsdemo.ts":
  /*!****************************************************************!*\
    !*** ./src/app/showcase/components/table/tablesectionsdemo.ts ***!
    \****************************************************************/

  /*! exports provided: TableSectionsDemo */

  /***/
  function _src_app_showcase_components_table_tablesectionsdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableSectionsDemo", function () {
      return TableSectionsDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableSectionsDemo = /*#__PURE__*/function () {
      function TableSectionsDemo(carService) {
        _classCallCheck(this, TableSectionsDemo);

        this.carService = carService;
      }

      return _createClass(TableSectionsDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this23.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableSectionsDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableSectionsDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablesectionsdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablesectionsdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableSectionsDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tableselectiondemo.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/showcase/components/table/tableselectiondemo.ts ***!
    \*****************************************************************/

  /*! exports provided: TableSelectionDemo */

  /***/
  function _src_app_showcase_components_table_tableselectiondemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableSelectionDemo", function () {
      return TableSelectionDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var TableSelectionDemo = /*#__PURE__*/function () {
      function TableSelectionDemo(carService, messageService) {
        _classCallCheck(this, TableSelectionDemo);

        this.carService = carService;
        this.messageService = messageService;
      }

      return _createClass(TableSelectionDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this24.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }, {
        key: "selectCarWithButton",
        value: function selectCarWithButton(car) {
          this.selectedCar2 = car;
          this.messageService.add({
            severity: 'info',
            summary: 'Car Selected',
            detail: 'Vin: ' + car.vin
          });
        }
      }, {
        key: "onRowSelect",
        value: function onRowSelect(event) {
          this.messageService.add({
            severity: 'info',
            summary: 'Car Selected',
            detail: 'Vin: ' + event.data.vin
          });
        }
      }, {
        key: "onRowUnselect",
        value: function onRowUnselect(event) {
          this.messageService.add({
            severity: 'info',
            summary: 'Car Unselected',
            detail: 'Vin: ' + event.data.vin
          });
        }
      }]);
    }();

    TableSelectionDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    TableSelectionDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tableselectiondemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tableselectiondemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], TableSelectionDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablesortdemo.ts":
  /*!************************************************************!*\
    !*** ./src/app/showcase/components/table/tablesortdemo.ts ***!
    \************************************************************/

  /*! exports provided: TableSortDemo */

  /***/
  function _src_app_showcase_components_table_tablesortdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableSortDemo", function () {
      return TableSortDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableSortDemo = /*#__PURE__*/function () {
      function TableSortDemo(carService) {
        _classCallCheck(this, TableSortDemo);

        this.carService = carService;
      }

      return _createClass(TableSortDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this25.cars1 = cars;
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this25.cars2 = cars;
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this25.cars3 = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }, {
        key: "customSort",
        value: function customSort(event) {
          event.data.sort(function (data1, data2) {
            var value1 = data1[event.field];
            var value2 = data2[event.field];
            var result = null;
            if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return event.order * result;
          });
        }
      }]);
    }();

    TableSortDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableSortDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablesortdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablesortdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableSortDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablestatedemo.ts":
  /*!*************************************************************!*\
    !*** ./src/app/showcase/components/table/tablestatedemo.ts ***!
    \*************************************************************/

  /*! exports provided: TableStateDemo */

  /***/
  function _src_app_showcase_components_table_tablestatedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableStateDemo", function () {
      return TableStateDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableStateDemo = /*#__PURE__*/function () {
      function TableStateDemo(carService) {
        _classCallCheck(this, TableStateDemo);

        this.carService = carService;
      }

      return _createClass(TableStateDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.carService.getCarsMedium().then(function (cars) {
            return _this26.cars1 = cars;
          });
          this.carService.getCarsMedium().then(function (cars) {
            return _this26.cars2 = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableStateDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableStateDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablestatedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestatedemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableStateDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablestickydemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/table/tablestickydemo.ts ***!
    \**************************************************************/

  /*! exports provided: TableStickyDemo */

  /***/
  function _src_app_showcase_components_table_tablestickydemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableStickyDemo", function () {
      return TableStickyDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableStickyDemo = /*#__PURE__*/function () {
      function TableStickyDemo(carService) {
        _classCallCheck(this, TableStickyDemo);

        this.carService = carService;
      }

      return _createClass(TableStickyDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.carService.getCarsMedium().then(function (cars) {
            return _this27.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableStickyDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableStickyDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablestickydemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestickydemo.html"))["default"],
      styles: ["\n        :host ::ng-deep .ui-table .ui-table-thead > tr > th {\n            position: -webkit-sticky;\n            position: sticky;\n            top: 69px;\n            box-shadow: 1px 3px 6px 0 rgba(32,33,36,0.10);\n        }\n\n        .layout-news-active :host ::ng-deep .ui-table tr > th {\n            top: 139px;\n        }\n\n        @media screen and (max-width: 64em) {\n            :host ::ng-deep .ui-table .ui-table-thead > tr > th {\n                top: 99px;\n            }\n\n            .layout-news-active :host ::ng-deep .ui-table tr > th {\n                top: 169px;\n            }\n        }\n"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableStickyDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablestyledemo.ts":
  /*!*************************************************************!*\
    !*** ./src/app/showcase/components/table/tablestyledemo.ts ***!
    \*************************************************************/

  /*! exports provided: TableStyleDemo */

  /***/
  function _src_app_showcase_components_table_tablestyledemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableStyleDemo", function () {
      return TableStyleDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableStyleDemo = /*#__PURE__*/function () {
      function TableStyleDemo(carService) {
        _classCallCheck(this, TableStyleDemo);

        this.carService = carService;
      }

      return _createClass(TableStyleDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this28.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
        }
      }]);
    }();

    TableStyleDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableStyleDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablestyledemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablestyledemo.html"))["default"],
      styles: ["\n        .new-car {\n            background-color: #1CA979 !important;\n            color: #ffffff !important;\n        }\n\n        .old-car {\n            background-color: #2CA8B1 !important;\n            color: #ffffff !important;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableStyleDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/table/tablevirtualscrolldemo.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/table/tablevirtualscrolldemo.ts ***!
    \*********************************************************************/

  /*! exports provided: TableVirtualScrollDemo */

  /***/
  function _src_app_showcase_components_table_tablevirtualscrolldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableVirtualScrollDemo", function () {
      return TableVirtualScrollDemo;
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


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/carservice */
    "./src/app/showcase/service/carservice.ts");

    var TableVirtualScrollDemo = /*#__PURE__*/function () {
      function TableVirtualScrollDemo(carService) {
        _classCallCheck(this, TableVirtualScrollDemo);

        this.carService = carService;
      }

      return _createClass(TableVirtualScrollDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.cars = Array.from({
            length: 10000
          }).map(function () {
            return _this29.carService.generateCar();
          });
          this.virtualCars = Array.from({
            length: 10000
          });
        }
      }, {
        key: "loadCarsLazy",
        value: function loadCarsLazy(event) {
          var _this30 = this;

          //simulate remote connection with a timeout 
          setTimeout(function () {
            //load data of required page
            var loadedCars = _this30.cars.slice(event.first, event.first + event.rows); //populate page of virtual cars


            Array.prototype.splice.apply(_this30.virtualCars, [event.first, event.rows].concat(_toConsumableArray(loadedCars))); //trigger change detection

            _this30.virtualCars = _toConsumableArray(_this30.virtualCars);
          }, Math.random() * 1000 + 250);
        }
      }]);
    }();

    TableVirtualScrollDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    TableVirtualScrollDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tablevirtualscrolldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/table/tablevirtualscrolldemo.html"))["default"],
      styles: ["\n        .loading-text {\n            display: block;\n            background-color: #f1f1f1;\n            min-height: 19px;\n            animation: pulse 1s infinite ease-in-out;\n            text-indent: -99999px;\n            overflow: hidden;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], TableVirtualScrollDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-table-tabledemo-module-es5.js.map