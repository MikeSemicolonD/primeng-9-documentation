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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-virtualscroller-virtualscrollerdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/virtualscroller/virtualscrollerdemo.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/virtualscroller/virtualscrollerdemo.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_virtualscroller_virtualscrollerdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">VirtualScroller</span>\n        <span>VirtualScroller is an efficient way of rendering lists by displaying a small subset of data in the viewport at any time.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Lazy Loading</h3>\n    <p-virtualScroller [value]=\"virtualCars\" scrollHeight=\"450px\" [itemSize]=\"100\" [rows]=\"100\" \n            [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\">\n        <p-header>\n            List of Cars\n        </p-header>\n        <ng-template let-car pTemplate=\"item\" let-i=\"index\">\n            <div class=\"car-details\">\n                <div>\n                    <img class=\"car-item-image\" src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                    <div>\n                        <b>{{car.vin}}</b>\n                        <div>{{car.year}} - {{car.color}}</div> \n                    </div>\n                </div>\n                <button pButton type=\"button\" icon=\"pi pi-search\" (click)=\"selectCar($event, car)\"></button>\n            </div>\n        </ng-template>\n        <ng-template let-car pTemplate=\"loadingItem\">\n            <div class=\"car-details\">\n                <div>\n                    <div class=\"car-item-image empty-car-item-image\"></div>\n                    <div>\n                        <b class=\"empty-car-item-text\"></b>\n                        <div class=\"empty-car-item-text\"></div> \n                    </div>\n                </div>\n                <div class=\"empty-car-item-button\"></div>\n            </div>\n        </ng-template>\n    </p-virtualScroller>\n\n    <h3>Prepopulated List</h3>\n    <p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"100\">\n        <p-header>\n            <div class=\"list-header\">\n                <div class=\"title-container\">\n                    List of Cars\n                </div>\n                <div class=\"sort-container\">\n                    <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange()\" [style]=\"{'min-width':'140px'}\"></p-dropdown>\n                </div>\n            </div>\n        </p-header>\n        <ng-template let-car pTemplate=\"item\" let-i=\"index\">\n            <div class=\"car-details\">\n                <div>\n                    <img class=\"car-item-image\" src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                    <div>\n                        <b>{{car.vin}}</b>\n                        <div>{{car.year}} - {{car.color}}</div> \n                    </div>\n                </div>\n                <button pButton type=\"button\" icon=\"pi pi-search\" (click)=\"selectCar($event, car)\"></button>\n            </div>\n        </ng-template>\n    </p-virtualScroller>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>CDK</h3>\n            <p>VirtualScrolling depends on @angular/cdk's ScrollingModule so begin with installing CDK if not already installed.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install @angular/cdk --save\n</code>\n</pre>\n\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;VirtualScrollerModule&#125; from 'primeng/virtualscroller';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>VirtualScroller requires a collection of items as its value, height of an item size, height of the scrollable viewport and a ng-template to display\n                    where each item can be accessed using the implicit variable.</p>\n\n            <p>Throughout the samples, a car interface having vin, brand, year and color properties are used\n                to define an object to be displayed by the VirtualScroller. Cars are loaded by a CarService that\n                connects to a server to fetch the cars with a Promise. Note that this is for demo purposes only, \n                any data source such as an Observable can be used as an alternative as well.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport interface Car &#123;\n    vin;\n    year;\n    brand;\n    color;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123; HttpClient &#125; from '@angular/common/http';\nimport &#123; Injectable &#125; from '@angular/core';\n\nimport &#123; Car &#125; from '../domain/car';\n\n@Injectable()\nexport class CarService &#123;\n\n    constructor(private http: HttpClient) &#123;&#125;\n\n    getCarsSmall() &#123;\n        return this.http.get('/showcase/resources/data/cars-small.json')\n                    .toPromise()\n                    .then(res => &lt;Car[]&gt; res.data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Here is a sample VirtualScroller that displays a list of cars loaded from a remote datasource.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class VirtualScrollerDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"150\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-car&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-virtualScroller&gt;\n</code>\n</pre>\n\n            <h3>Sections</h3>\n            <p>Header and Footer are the two sections that are capable of displaying custom content.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"150\"&gt;\n    &lt;p-header&gt;Header Content&lt;/p-header&gt;\n    &lt;p-footer&gt;Footer Content&lt;/p-footer&gt;\n    &lt;ng-template pTemplate=\"item\" let-car&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-virtualScroller&gt;\n</code>\n</pre>\n\n            <h3>Lazy Loading</h3>\n            <p>Lazy mode is handy to deal with large datasets where instead of loading the entire data, small chunks of data are loaded on demand by invoking\n             onLazyLoad callback everytime scrolling requires a new chunk. To implement lazy loading,\n            enable <i>lazy</i> attribute, initialize your data as a placeholder with a length and finally implement a method callback using <i>onLazyLoad</i> that actually loads a chunk from a datasource. onLazyLoad gets an event object\n            that contains information about the chunk of data to load such as the index and number of items to load. Notice that a new template called loadingItem is also required to display as a placeholder while the new items are being loaded.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-virtualScroller [value]=\"virtualCars\" scrollHeight=\"500px\" [itemSize]=\"150\" [rows]=\"100\"\n    [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n    &lt;ng-template let-car pTemplate=\"loadingItem\"&gt;\n        Loading...\n    &lt;/ng-template&gt;\n&lt;/p-virtualScroller&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LazyVirtualScrollerDemo implements OnInit &#123;\n\n    virtualCars: Car[];\n   \n    ngOnInit() &#123;\n        this.cars = Array.from(&#123;length: 10000&#125;).map(() => this.carService.generateCar());\n        this.virtualCars =  Array.from(&#123;length: 10000&#125;);\n    &#125;\n\n    loadCarsLazy(event: LazyLoadEvent) &#123;       \n        //simulate remote connection with a timeout \n        setTimeout(() => &#123;\n            //load data of required page\n            let loadedCars = this.cars.slice(event.first, (event.first + event.rows));\n\n            //populate page of virtual cars\n            Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);\n            \n            //trigger change detection\n            this.virtualCars = [...this.virtualCars];\n        &#125;, 1000);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Programmatic Scroll</h3>\n            <p>Scrolling to a specific index can be done with the <i>scrollToIndex</i> function.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;button pButton label=\"Reset\" (click)=\"reset\"&gt;&lt;/button&gt;\n\n&lt;p-virtualScroller #vs [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"150\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-car&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-virtualScroller&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@ViewChild('vs') vs: VirtualScroller;\n\nreset() &#123;\n    this.vs.scrollToIndex(0, 'smooth');\n&#125;\n</code>\n</pre>      \n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>cache</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to cache the already loaded data in lazy loading.</td>\n                        </tr>\n                        <tr>\n                            <td>itemSize</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Height of an item in the list.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\n                        </tr>\n                        <tr>\n                            <td>minBufferPx</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Minimum amount of content buffer (in pixels) that the viewport must render.</td>\n                        </tr>\n                        <tr>\n                            <td>maxBufferPx</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Configures how much buffer space to render back up to when it detects that more buffer is required.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of rows to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Max height of the content area in inline mode.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of total records, defaults to length of value when not defined.</td>\n                        </tr>\n                        <tr>\n                            <td>trackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\n                        </tr>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onLazyLoad</td>\n                            <td>event.first = First row offset <br>\n                                event.rows = Number of rows per page <br></td>\n                            <td>Callback to invoke in lazy mode to load new data.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>scrollToIndex</td>\n                            <td>index: Index of the item.<br />\n                                mode: Scroll mode e.g. 'auto' or 'smooth'\n                            </td>\n                            <td>Scrolls to the item with the given index.</td>\n                        </tr>\n                        <tr>\n                            <td>clearCache</td>\n                            <td>-</td>\n                            <td>Clears the loaded items in lazy mode.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-virtualscroller</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-virtualscroller-header</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-virtualscroller-footer</td>\n                            <td>Footer section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-virtualscroller-content</td>\n                            <td>Content section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-virtualscroller-list</td>\n                            <td>List element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>Angular CDK.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/virtualscroller\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-virtualscroller-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Lazy Loading&lt;/h3&gt;\n&lt;p-virtualScroller [value]=\"virtualCars\" scrollHeight=\"450px\" [itemSize]=\"100\" [rows]=\"100\" \n        [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\n    &lt;p-header&gt;\n        List of Cars\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\" let-i=\"index\"&gt;\n        &lt;div class=\"car-details\"&gt;\n            &lt;div&gt;\n                &lt;img class=\"car-item-image\" src=\"assets/showcase/images/demo/car/&#123;&#123;car.brands#125;&#125;.png\"&gt;\n                &lt;div&gt;\n                    &lt;b&gt;&#123;&#123;car.vin&#125;&#125;&lt;/b&gt;\n                    &lt;div&gt;&#123;&#123;car.year&#125;&#125; - &#123;&#123;car.color&#125;&#125;&lt;/div&gt; \n                &lt;/div&gt;\n            &lt;/div&gt;\n            &lt;button pButton type=\"button\" icon=\"pi pi-search\" (click)=\"selectCar($event, car)\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-car pTemplate=\"loadingItem\"&gt;\n        &lt;div class=\"car-details\"&gt;\n            &lt;div&gt;\n                &lt;div class=\"car-item-image empty-car-item-image\"&gt;&lt;/div&gt;\n                &lt;div&gt;\n                    &lt;b class=\"empty-car-item-text\"&gt;&lt;/b&gt;\n                    &lt;div class=\"empty-car-item-text\"&gt;&lt;/div&gt; \n                &lt;/div&gt;\n            &lt;/div&gt;\n            &lt;div class=\"empty-car-item-button\"&gt;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-virtualScroller&gt;\n\n&lt;h3&gt;Prepopulated List&lt;/h3&gt;\n&lt;p-virtualScroller [value]=\"cars\" scrollHeight=\"500px\" [itemSize]=\"100\"&gt;\n    &lt;p-header&gt;\n        &lt;div class=\"list-header\"&gt;\n            &lt;div class=\"title-container\"&gt;\n                List of Cars\n            &lt;/div&gt;\n            &lt;div class=\"sort-container\"&gt;\n                &lt;p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange()\" [style]=\"&#123;'min-width':'140px'&#125;\"&gt;&lt;/p-dropdown&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\" let-i=\"index\"&gt;\n        &lt;div class=\"car-details\"&gt;\n            &lt;div&gt;\n                &lt;img class=\"car-item-image\" src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\n                &lt;div&gt;\n                    &lt;b&gt;&#123;&#123;car.vin&#125;&#125;&lt;/b&gt;\n                    &lt;div&gt;&#123;&#123;car.year&#125;&#125; - &#123;&#123;car.color&#125;&#125;&lt;/div&gt; \n                &lt;/div&gt;\n            &lt;/div&gt;\n            &lt;button pButton type=\"button\" icon=\"pi pi-search\" (click)=\"selectCar($event, car)\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-virtualScroller&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component,OnInit&#125; from '@angular/core';\nimport &#123;Car&#125; from '../../components/domain/car';\nimport &#123;LazyLoadEvent,SelectItem&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './virtualscrollerdemo.html'\n&#125;)\nexport class VirtualScrollerDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    virtualCars: Car[];\n    \n    sortKey: string;\n\n    sortOptions: SelectItem[];\n\n    ngOnInit() &#123;\n        this.cars = Array.from(&#123;length: 10000&#125;).map(() => this.carService.generateCar());\n        this.virtualCars =  Array.from(&#123;length: 10000&#125;);\n\n        this.sortOptions = [\n            &#123;label: 'Newest First', value: '!year'&#125;,\n            &#123;label: 'Oldest First', value: 'year'&#125;\n        ];\n    &#125;\n\n    loadCarsLazy(event: LazyLoadEvent) &#123;       \n        //simulate remote connection with a timeout \n        setTimeout(() => &#123;\n            //load data of required page\n            let loadedCars = this.cars.slice(event.first, (event.first + event.rows));\n\n            //populate page of virtual cars\n            Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);\n            \n            //trigger change detection\n            this.virtualCars = [...this.virtualCars];\n        &#125;, 1000);\n    &#125;\n\n    onSortChange() &#123;\n        if (this.sortKey.indexOf('!') === 0)\n            this.sort(-1);\n        else\n            this.sort(1);\n    &#125;\n\n    sort(order: number): void &#123;\n        let cars = [...this.cars];\n        cars.sort((data1, data2) => &#123;\n            let value1 = data1.year;\n            let value2 = data2.year;\n            let result = (value1 &lt; value2) ? -1 : (value1 > value2) ? 1 : 0;\n\n            return (order * result);\n        &#125;);\n\n        this.cars = cars;\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-virtualscroller-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/virtualscroller/virtualscrollerdemo-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/showcase/components/virtualscroller/virtualscrollerdemo-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: VirtualScrollerDemoRoutingModule */

  /***/
  function _src_app_showcase_components_virtualscroller_virtualscrollerdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollerDemoRoutingModule", function () {
      return VirtualScrollerDemoRoutingModule;
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


    var _virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./virtualscrollerdemo */
    "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts");

    var VirtualScrollerDemoRoutingModule = /*#__PURE__*/_createClass(function VirtualScrollerDemoRoutingModule() {
      _classCallCheck(this, VirtualScrollerDemoRoutingModule);
    });

    VirtualScrollerDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VirtualScrollerDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/showcase/components/virtualscroller/virtualscrollerdemo.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: VirtualScrollerDemoModule */

  /***/
  function _src_app_showcase_components_virtualscroller_virtualscrollerdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollerDemoModule", function () {
      return VirtualScrollerDemoModule;
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


    var _virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./virtualscrollerdemo */
    "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts");
    /* harmony import */


    var _virtualscrollerdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./virtualscrollerdemo-routing.module */
    "./src/app/showcase/components/virtualscroller/virtualscrollerdemo-routing.module.ts");
    /* harmony import */


    var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/virtualscroller */
    "./src/app/components/virtualscroller/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/dropdown */
    "./src/app/components/dropdown/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var VirtualScrollerDemoModule = /*#__PURE__*/_createClass(function VirtualScrollerDemoModule() {
      _classCallCheck(this, VirtualScrollerDemoModule);
    });

    VirtualScrollerDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _virtualscrollerdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualScrollerDemoRoutingModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__["CodeHighlighterModule"]],
      declarations: [_virtualscrollerdemo__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerDemo"]]
    })], VirtualScrollerDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/showcase/components/virtualscroller/virtualscrollerdemo.ts ***!
    \****************************************************************************/

  /*! exports provided: VirtualScrollerDemo */

  /***/
  function _src_app_showcase_components_virtualscroller_virtualscrollerdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollerDemo", function () {
      return VirtualScrollerDemo;
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

    var VirtualScrollerDemo = /*#__PURE__*/function () {
      function VirtualScrollerDemo(carService) {
        _classCallCheck(this, VirtualScrollerDemo);

        this.carService = carService;
      }

      return _createClass(VirtualScrollerDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.cars = Array.from({
            length: 10000
          }).map(function () {
            return _this.carService.generateCar();
          });
          this.virtualCars = Array.from({
            length: 10000
          });
          this.sortOptions = [{
            label: 'Newest First',
            value: '!year'
          }, {
            label: 'Oldest First',
            value: 'year'
          }];
        }
      }, {
        key: "loadCarsLazy",
        value: function loadCarsLazy(event) {
          var _this2 = this;

          //simulate remote connection with a timeout 
          setTimeout(function () {
            //load data of required page
            var loadedCars = _this2.cars.slice(event.first, event.first + event.rows); //populate page of virtual cars


            Array.prototype.splice.apply(_this2.virtualCars, [event.first, event.rows].concat(_toConsumableArray(loadedCars))); //trigger change detection

            _this2.virtualCars = _toConsumableArray(_this2.virtualCars);
          }, 1000);
        }
      }, {
        key: "onSortChange",
        value: function onSortChange() {
          if (this.sortKey.indexOf('!') === 0) this.sort(-1);else this.sort(1);
        }
      }, {
        key: "sort",
        value: function sort(order) {
          var cars = _toConsumableArray(this.cars);

          cars.sort(function (data1, data2) {
            var value1 = data1.year;
            var value2 = data2.year;
            var result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * result;
          });
          this.cars = cars;
        }
      }]);
    }();

    VirtualScrollerDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    VirtualScrollerDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./virtualscrollerdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/virtualscroller/virtualscrollerdemo.html"))["default"],
      styles: ["\n        .car-details {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 20px;\n        }\n\n        .car-details > div {\n            display: flex;\n            align-items: center;\n        }\n\n        .car-item-image {\n            margin-right: 14px;\n            width: 60px;\n            height: 60px;\n        }\n\n        .empty-car-item-image {\n            background-color: #f1f1f1;\n            animation: pulse 1s infinite ease-in-out;\n            margin-right: 14px;\n            border-radius: 3px;\n        }\n\n        .empty-car-item-text {\n            background-color: #f1f1f1;\n            height: 19px;\n            animation: pulse 1s infinite ease-in-out;\n            display: block;\n            width: 100px;\n            margin-bottom: 2px;\n            border-radius: 3px;\n        }\n\n        .empty-car-item-button {\n            background-color: #f1f1f1;\n            height: 33px;\n            width: 33px;\n            animation: pulse 1s infinite ease-in-out;\n            display: block;\n            border-radius: 3px;\n        }\n\n        .list-header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n        }\n\n        .title-container {\n            text-align: left;\n        }\n\n        .sort-container {\n            text-align: right;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], VirtualScrollerDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-virtualscroller-virtualscrollerdemo-module-es5.js.map