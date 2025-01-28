function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-carousel-carouseldemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/carousel/carouseldemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/carousel/carouseldemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_carousel_carouseldemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Carousel</span>\n        <span>Carousel is a content slider featuring various customization options.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation carousel-demo\">\n        <p-carousel [value]=\"cars\" [numVisible]=\"4\" [numScroll]=\"3\" [circular]=\"false\" [responsiveOptions]=\"responsiveOptions\">\n            <p-header>\n                <h3>Basic</h3>\n            </p-header>\n            <ng-template let-car pTemplate=\"item\">\n                <div class=\"car-details\">\n                    <div class=\"p-grid p-nogutter\">\n                        <div class=\"p-col-12\">\n                            <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" />\n                        </div>\n                        <div class=\"p-col-12 car-data\">\n                            <div class=\"car-title\">{{car.brand}}</div>\n                            <div class=\"car-subtitle\">{{car.year}} | {{car.color}}</div>\n    \n                            <div class=\"car-buttons\">\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"></button>\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"></button>\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </p-carousel>\n        <p-carousel [value]=\"cars\" styleClass=\"custom-carousel\" [numVisible]=\"3\" [numScroll]=\"1\" [circular]=\"true\" [autoplayInterval]=\"3000\" [responsiveOptions]=\"responsiveOptions\">\n            <p-header>\n                <h3>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h3>\n            </p-header>\n            <ng-template let-car pTemplate=\"item\">\n                <div class=\"car-details\">\n                    <div class=\"p-grid p-nogutter\">\n                        <div class=\"p-col-12\">\n                            <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" />\n                        </div>\n                        <div class=\"p-col-12 car-data\">\n                            <div class=\"car-title\">{{car.brand}}</div>\n                            <div class=\"car-subtitle\">{{car.year}} | {{car.color}}</div>\n    \n                            <div class=\"car-buttons\">\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"></button>\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"></button>\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </p-carousel>\n        <p-carousel [value]=\"cars\" orientation=\"vertical\" [style]=\"{'max-width':'400px', 'margin-top':'2em'}\" verticalViewPortHeight=\"330px\" [numVisible]=\"1\" [numScroll]=\"1\">\n            <p-header>\n                <h3>Vertical</h3>\n            </p-header>\n            <ng-template let-car pTemplate=\"item\">\n                <div class=\"car-details\">\n                    <div class=\"p-grid p-nogutter\">\n                        <div class=\"p-col-12\">\n                            <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" />\n                        </div>\n                        <div class=\"p-col-12 car-data\">\n                            <div class=\"car-title\">{{car.brand}}</div>\n                            <div class=\"car-subtitle\">{{car.year}} | {{car.color}}</div>\n    \n                            <div class=\"car-buttons\">\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"></button>\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"></button>\n                                <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </p-carousel>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CarouselModule&#125; from 'primeng/carousel';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Carousel requires a collection of items as its value along with a template to render each item.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"cars\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Content to display\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n            <h3>Items Per Page and Scroll Items</h3>\n            <p>Number of items per page is defined using the <i>numVisible</i> property whereas number of items to scroll is defined with the <i>numScroll</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"cars\" [numVisible]=\"3\" [numScroll]=\"1\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Content to display\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n\n            <h3>Responsive</h3>\n            <p>For responsive design, <i>numVisible</i> and <i>numScroll</i> can be defined using the <i>responsiveOptions</i> property that should be an array of objects whose breakpoint defines the max-width to apply the settings.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"cars\" [numVisible]=\"3\" [numScroll]=\"1\" [responsiveOptions]=\"responsiveOptions\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Content to display\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CarouselDemo &#123;\n    constructor(private carService: CarService) &#123; \n        this.responsiveOptions = [\n            &#123;\n                breakpoint: '1024px',\n                numVisible: 3,\n                numScroll: 3\n            &#125;,\n            &#123;\n                breakpoint: '768px',\n                numVisible: 2,\n                numScroll: 2\n            &#125;,\n            &#123;\n                breakpoint: '560px',\n                numVisible: 1,\n                numScroll: 1\n            &#125;\n        ];\n    &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => &#123;\n            this.cars = cars\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Header and Footer</h3>\n            <p>Custom content projection is available using the <i>p-header</i> and <i>p-footer</i> components.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"cars\"&gt;\n    &lt;p-header&gt;\n        &lt;h3&gt;Vertical&lt;/h3&gt;\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Content to display\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n\n<h3>Orientation</h3>\n<p>Default layout of the Carousel is horizontal, other possible option is the vertical mode that is configured with the <i>orientation</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"cars\" orientation=\"vertical\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Content to display\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n\n            <h3>AutoPlay and Circular</h3>\n            <p>When <i>autoplayInterval</i> is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling <i>circular</i> property needs to be enabled. Note that in autoplay mode, circular is enabled by default.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"cars\" [autoplayInterval]=\"3000\" [circular]=\"true\"&gt;\n    &lt;p-header&gt;\n        &lt;h3&gt;Vertical&lt;/h3&gt;\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Content to display\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                    <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>page</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the first item.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the viewport container.</td>\n                        </tr>\n                        <tr>\n                            <td>circular</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if scrolling would be infinite.</td>\n                        </tr>\n                        <tr>\n                            <td>autoplayInterval</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Time in milliseconds to scroll items automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>numVisible</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Number of items per page.</td>\n                        </tr>\n                        <tr>\n                            <td>numScroll</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Number of items to scroll.</td>\n                        </tr>\n                        <tr>\n                            <td>responsiveOptions</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>An array of options for responsive design.</td>\n                        </tr>\n                        <tr>\n                            <td>orientation</td>\n                            <td>string</td>\n                            <td>horizontal</td>\n                            <td>Specifies the layout of the component, valid values are \"horizontal\" and \"vertical\".</td>\n                        </tr>\n                        <tr>\n                            <td>verticalViewPortHeight</td>\n                            <td>string</td>\n                            <td>300px</td>\n                            <td>Height of the viewport in vertical layout.</td>\n                        </tr>\n                        <tr>\n                            <td>contentClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of main content.</td>\n                        </tr>\n                        <tr>\n                            <td>dotsContainerClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the paginator items.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                    <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onPage</td>\n                            <td>event.page = Value of the new page.</td>\n                            <td>Callback to invoke after scroll.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-carousel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-header</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-footer</td>\n                            <td>Footer section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-content</td>\n                            <td>Main content element. It contains the container of the viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-container</td>\n                            <td>Container of the viewport. It contains navigation buttons and viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-items-content</td>\n                            <td>Viewport.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-dots-container</td>\n                            <td>Container of the paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-dot-item</td>\n                            <td>Paginator element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-carousel-dot-icon</td>\n                            <td>Paginator element icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/carousel\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-carousel-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-carousel [value]=\"cars\" [numVisible]=\"4\" [numScroll]=\"3\" [circular]=\"false\" [responsiveOptions]=\"responsiveOptions\">\n    &lt;p-header&gt;\n        &lt;h3&gt;Basic&lt;/h3&gt;\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"car-details\"&gt;\n            &lt;div class=\"p-grid p-nogutter\"&gt;\n                &lt;div class=\"p-col-12\"&gt;\n                    &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\" /&gt;\n                &lt;/div&gt;\n                &lt;div class=\"p-col-12 car-data\"&gt;\n                    &lt;div class=\"car-title\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n                    &lt;div class=\"car-subtitle\"&gt;&#123;&#123;car.year&#125;&#125; | &#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"car-buttons\"&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"&gt;&lt;/button&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"&gt;&lt;/button&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n\n&lt;p-carousel [value]=\"cars\" styleClass=\"custom-carousel\" [numVisible]=\"3\" [numScroll]=\"1\" [circular]=\"true\" [autoplayInterval]=\"3000\" [responsiveOptions]=\"responsiveOptions\"&gt;\n    &lt;p-header&gt;\n        &lt;h3&gt;Circular, AutoPlay, 3 Items per Page and Scroll by 1&lt;/h3&gt;\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"car-details\"&gt;\n            &lt;div class=\"p-grid p-nogutter\"&gt;\n                &lt;div class=\"p-col-12\"&gt;\n                    &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\" /&gt;\n                &lt;/div&gt;\n                &lt;div class=\"p-col-12 car-data\"&gt;\n                    &lt;div class=\"car-title\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n                    &lt;div class=\"car-subtitle\"&gt;&#123;&#123;car.year&#125;&#125; | &#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"car-buttons\"&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"&gt;&lt;/button&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"&gt;&lt;/button&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n\n&lt;p-carousel [value]=\"cars\" orientation=\"vertical\" [style]=\"&#123;'max-width':'400px', 'margin-top':'2em'&#125;\" verticalViewPortHeight=\"330px\" [numVisible]=\"1\" [numScroll]=\"1\"&gt;\n    &lt;p-header&gt;\n        &lt;h3&gt;Vertical&lt;/h3&gt;\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"car-details\"&gt;\n            &lt;div class=\"p-grid p-nogutter\"&gt;\n                &lt;div class=\"p-col-12\"&gt;\n                    &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\" /&gt;\n                &lt;/div&gt;\n                &lt;div class=\"p-col-12 car-data\"&gt;\n                    &lt;div class=\"car-title\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n                    &lt;div class=\"car-subtitle\"&gt;&#123;&#123;car.year&#125;&#125; | &#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"car-buttons\"&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"&gt;&lt;/button&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"&gt;&lt;/button&gt;\n                        &lt;button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"&gt;&lt;/button&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-carousel&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './carouseldemo.html',\n    styles: [`\n        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid &#123;\n            border: 1px solid #b3c2ca;\n            border-radius: 3px;\n            margin: 0.3em;\n            text-align: center;\n            padding: 2em 0 2.25em 0;\n        &#125;\n        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title &#123;\n            font-weight: 700;\n            font-size: 20px;\n            margin-top: 24px;\n        &#125;\n        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle &#123;\n            margin: 0.25em 0 2em 0;\n        &#125;\n        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button &#123;\n            margin-left: 0.5em;\n        &#125;\n        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child &#123;\n            margin-left: 0;\n        &#125;\n        .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon &#123;\n            width: 16px !important;\n            height: 16px !important;\n            border-radius: 50%;\n        &#125;\n        .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid &#123;\n            margin-left: 0.6em;\n        &#125;\n        .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid &#123;\n            margin-right: 0.6em;\n        &#125;\n    `],\n    encapsulation: ViewEncapsulation.None\n&#125;)\nexport class CarouselDemo &#123;\n\n    cars: any[];\n\n    responsiveOptions;\n\n    constructor(private carService: CarService) &#123; \n        this.responsiveOptions = [\n            &#123;\n                breakpoint: '1024px',\n                numVisible: 3,\n                numScroll: 3\n            &#125;,\n            &#123;\n                breakpoint: '768px',\n                numVisible: 2,\n                numScroll: 2\n            &#125;,\n            &#123;\n                breakpoint: '560px',\n                numVisible: 1,\n                numScroll: 1\n            &#125;\n        ];\n    &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => &#123;\n            this.cars = cars\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-carousel-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n     </p-tabView >\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/carousel/carouseldemo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/carousel/carouseldemo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CarouselDemoRoutingModule */

  /***/
  function _src_app_showcase_components_carousel_carouseldemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselDemoRoutingModule", function () {
      return CarouselDemoRoutingModule;
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


    var _carouseldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carouseldemo */
    "./src/app/showcase/components/carousel/carouseldemo.ts");

    var CarouselDemoRoutingModule = /*#__PURE__*/_createClass(function CarouselDemoRoutingModule() {
      _classCallCheck(this, CarouselDemoRoutingModule);
    });

    CarouselDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _carouseldemo__WEBPACK_IMPORTED_MODULE_3__["CarouselDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CarouselDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/carousel/carouseldemo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/carousel/carouseldemo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CarouselDemoModule */

  /***/
  function _src_app_showcase_components_carousel_carouseldemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselDemoModule", function () {
      return CarouselDemoModule;
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


    var _carouseldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carouseldemo */
    "./src/app/showcase/components/carousel/carouseldemo.ts");
    /* harmony import */


    var _carouseldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./carouseldemo-routing.module */
    "./src/app/showcase/components/carousel/carouseldemo-routing.module.ts");
    /* harmony import */


    var primeng_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/carousel */
    "./src/app/components/carousel/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var CarouselDemoModule = /*#__PURE__*/_createClass(function CarouselDemoModule() {
      _classCallCheck(this, CarouselDemoModule);
    });

    CarouselDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _carouseldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["CarouselDemoRoutingModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_carouseldemo__WEBPACK_IMPORTED_MODULE_3__["CarouselDemo"]]
    })], CarouselDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/carousel/carouseldemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/carousel/carouseldemo.ts ***!
    \**************************************************************/

  /*! exports provided: CarouselDemo */

  /***/
  function _src_app_showcase_components_carousel_carouseldemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselDemo", function () {
      return CarouselDemo;
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

    var CarouselDemo = /*#__PURE__*/function () {
      function CarouselDemo(carService) {
        _classCallCheck(this, CarouselDemo);

        this.carService = carService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        }, {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
        }, {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
        }];
      }

      return _createClass(CarouselDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.carService.getCarsSmall().then(function (cars) {
            _this.cars = cars;
          });
        }
      }]);
    }();

    CarouselDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }];
    };

    CarouselDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./carouseldemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/carousel/carouseldemo.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: ["\n\t\t.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {\n\t\t\tborder: 1px solid #b3c2ca;\n\t\t\tborder-radius: 3px;\n\t\t\tmargin: 0.3em;\n\t\t\ttext-align: center;\n\t\t\tpadding: 2em 0 2.25em 0;\n\t\t}\n\t\t.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 20px;\n\t\t\tmargin-top: 24px;\n\t\t}\n\t\t.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {\n\t\t\tmargin: 0.25em 0 2em 0;\n\t\t}\n\t\t.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {\n\t\t\tmargin-left: 0.5em;\n\t\t}\n\t\t.carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t.carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {\n\t\t\twidth: 16px !important;\n\t\t\theight: 16px !important;\n\t\t\tborder-radius: 50%;\n\t\t}\n\t\t.carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {\n\t\t\tmargin-left: 0.6em;\n\t\t}\n\t\t.carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {\n\t\t\tmargin-right: 0.6em;\n\t\t}\n\t"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]])], CarouselDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-carousel-carouseldemo-module-es5.js.map