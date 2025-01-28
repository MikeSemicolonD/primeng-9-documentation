function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dynamicdialog-dynamicdialogdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_dynamicdialog_dynamicdialogdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Dynamic Dialog</span>\n        <span>Dialogs can be created dynamically with any component as the content using a DialogService.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <button type=\"button\" (click)=\"show()\" pButton icon=\"pi pi-info-circle\" label=\"Show\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DynamicDialogModule&#125; from 'primeng/dynamicdialog';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Dynamic dialogs require an instance of a DialogService that is responsible for displaying a dialog with a component as its content. Since the dynamically\n                loaded content is not defined at build time, a configuration is necessary using the entryComponents of your parent module. Example below, displays a list of cars\n                using the CarsListDemo component so it needs to be configured at entryComponents along with the import of DynamicDialogModule. The configuration of the demo page is as follows;\n            </p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@NgModule(&#123;\n    imports: [\n        CommonModule,\n        DynamicDialogModule,\n        ToastModule,\n        TableModule,\n        ButtonModule\n    ],\n    declarations: [\n        DynamicDialogDemo,\n        CarsListDemo\n    ],\n    entryComponents: [\n        CarsListDemo\n    ]\n&#125;)\nexport class DynamicDialogDemoModule &#123;\n</code>\n</pre>\n\n            <p>Next step, is injecting an instance of a DialogService to the component that will open the dialog.</p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;DialogService&#125; from 'primeng/dynamicdialog';\nimport &#123;CarsListDemo&#125; from './carslistdemo';\nimport &#123;Car&#125; from '../../components/domain/car';\n\n@Component(&#123;\n    templateUrl: './dynamicdialogdemo.html',\n    providers: [DialogService]\n&#125;)\nexport class DynamicDialogDemo &#123;\n\n    constructor(public dialogService: DialogService) &#123;&#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>Displaying a dialog is done with the open method where the first parameter is the type of component to load and the second parameter is the configuration of the Dialog such as header, width and more.</p>\n                \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n&lt;button type=\"button\" (click)=\"show()\" pButton icon=\"pi pi-info-circle\" label=\"Show\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshow() &#123;\n    const ref = this.dialogService.open(CarsListDemo, &#123;\n        header: 'Choose a Car',\n        width: '70%'\n    &#125;);\n&#125;\n</code>\n</pre>\n\n            <p>In case you need to pass data to the component that is dynamically loaded, use the data property that can be access using the DynamicDialogConfig class. In additon, the loaded component can also control the Dialog using the DynamicDialogRef API.\n                Both the DynamicDialogConfig and DynamicDialogRef are injectable using the constructor.\n            </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshow() &#123;\n    const ref = this.dialogService.open(CarsListDemo, &#123;\n        data: &#123;\n            id: '51gF3'\n        &#125;,\n        header: 'Choose a Car',\n        width: '70%'\n    &#125;);\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;Car&#125; from '../../components/domain/car';\nimport &#123;CarService&#125; from '../../service/carservice';\nimport &#123;DynamicDialogRef&#125; from 'primeng/dynamicdialog';\nimport &#123;DynamicDialogConfig&#125; from 'primeng/dynamicdialog';\n\n@Component(&#123;\n    templateUrl: './carslistdemo.html',\n&#125;)\nexport class CarsListDemo &#123;\n\n    cars: Car[];\n            \n    constructor(private carService: CarService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) &#123; &#125;\n\n    ngOnInit() &#123;\n        //id: this.config.id\n        this.carService.getCarsSmall(id).then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<p>Most of the time, requirement is returning a value from the dialog. DialogRef's close method is used for this purpose where the parameter passed will be available at the onClose\nevent at the caller. Here is an example on how to close the dialog from the CarsListDemo by passing a selected car.\n</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;Car&#125; from '../../components/domain/car';\nimport &#123;CarService&#125; from '../../service/carservice';\nimport &#123;DynamicDialogRef&#125; from 'primeng/dynamicdialog';\nimport &#123;DynamicDialogConfig&#125; from 'primeng/dynamicdialog';\n\n@Component(&#123;\n    templateUrl: './carslistdemo.html',\n&#125;)\nexport class CarsListDemo &#123;\n\n    cars: Car[];\n            \n    constructor(private carService: CarService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) &#123; &#125;\n\n    ngOnInit() &#123;\n        //id: this.config.id\n        this.carService.getCarsSmall(id).then(cars => this.cars = cars);\n    &#125;\n\n    selectCar(car: Car) &#123;\n        this.ref.close(car);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Now at the class that opens the dialog, the selected car gets passed to the Observable.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshow() &#123;\n    const ref = this.dialogService.open(CarsListDemo, &#123;\n        header: 'Choose a Car',\n        width: '70%'\n    &#125;);\n\n    ref.onClose.subscribe((car: Car) => &#123;\n        if (car) &#123;\n            this.messageService.add(&#123;severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin&#125;);\n        &#125;\n    &#125;);\n&#125;\n</code>\n</pre>\n            <h3>Properties for DynamicDialog</h3>\n            <p>Dynamic Dialogs provide the following customization options.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>data</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>An object to pass to the component loaded inside the Dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>footer</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Footer text of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>width</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Width of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>height</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Height of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnEscape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>dismissableMask</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifices if clicking the modal background should hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>rtl</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled dialog is displayed in RTL direction.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>contentStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the content section.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>transitionOptions</td>\n                            <td>string</td>\n                            <td>400ms cubic-bezier(0.25, 0.8, 0.25, 1)</td>\n                            <td>Transition options of the animation.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Adds a close icon to the header to hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>showHeader</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show the header or not.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onShow</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-dialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dynamicdialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar</td>\n                            <td>Container of header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-title</td>\n                            <td>Header element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-icon</td>\n                            <td>Icon container inside header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-close</td>\n                            <td>Close icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-footer</td>\n                            <td>Footer element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dynamicdialog\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-dynamicdialog-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n\n            <h3>DynamicDialogDemo</h3>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;button type=\"button\" (click)=\"show()\" pButton icon=\"pi pi-info-circle\" label=\"Show\">&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DynamicDialogDemo implements OnDestroy &#123;\n\n    constructor(public dialogService: DialogService, public messageService: MessageService) &#123;&#125;\n\n    ref: DynamicDialogRef;\n    \n    show() &#123;\n        this.ref = this.dialogService.open(CarsListDemo, &#123;\n            header: 'Choose a Car',\n            width: '70%',\n            contentStyle: &#123;\"max-height\": \"350px\", \"overflow\": \"auto\"&#125;\n        &#125;);\n\n        this.ref.onClose.subscribe((car: Car) =>&#123;\n            if (car) &#123;\n                this.messageService.add(&#123;severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin&#125;);\n            &#125;\n        &#125;);\n    &#125;\n\n    ngOnDestroy() &#123;\n        this.ref.close();\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>CarsListDemo</h3>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th pSortableColumn=\"vin\"&gt;Vin &lt;p-sortIcon field=\"vin\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"year\"&gt;Year &lt;p-sortIcon field=\"year\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"brand\"&gt;Brand &lt;p-sortIcon field=\"brand\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th pSortableColumn=\"color\"&gt;Color &lt;p-sortIcon field=\"color\"&gt;&lt;/p-sortIcon&gt;&lt;/th&gt;\n            &lt;th style=\"width:4em\"&gt;&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Vin&lt;/span&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Year&lt;/span&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Brand&lt;/span&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&lt;span class=\"ui-column-title\"&gt;Color&lt;/span&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;\n                &lt;button pButton icon=\"pi pi-search\" (click)=\"selectCar(car)\"&gt;&lt;/button&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CarsListDemo &#123;\n\n    cars: Car[];\n            \n    constructor(private carService: CarService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n\n    selectCar(car: Car) &#123;\n        this.ref.close(car);\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-dynamicdialog-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/dynamicdialog/carslistdemo.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/showcase/components/dynamicdialog/carslistdemo.ts ***!
    \*******************************************************************/

  /*! exports provided: CarsListDemo */

  /***/
  function _src_app_showcase_components_dynamicdialog_carslistdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarsListDemo", function () {
      return CarsListDemo;
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


    var _components_dynamicdialog_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/dynamicdialog/dynamicdialog-ref */
    "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");
    /* harmony import */


    var _components_dynamicdialog_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/dynamicdialog/dynamicdialog-config */
    "./src/app/components/dynamicdialog/dynamicdialog-config.ts");

    var CarsListDemo = /*#__PURE__*/function () {
      function CarsListDemo(carService, ref, config) {
        _classCallCheck(this, CarsListDemo);

        this.carService = carService;
        this.ref = ref;
        this.config = config;
      }

      return _createClass(CarsListDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this.cars = cars;
          });
        }
      }, {
        key: "selectCar",
        value: function selectCar(car) {
          this.ref.close(car);
        }
      }]);
    }();

    CarsListDemo.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: _components_dynamicdialog_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"]
      }, {
        type: _components_dynamicdialog_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]
      }];
    };

    CarsListDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n        <p-table [value]=\"cars\" [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th pSortableColumn=\"vin\">Vin <p-sortIcon field=\"vin\"></p-sortIcon></th>\n                    <th pSortableColumn=\"year\">Year <p-sortIcon field=\"year\"></p-sortIcon></th>\n                    <th pSortableColumn=\"brand\">Brand <p-sortIcon field=\"brand\"></p-sortIcon></th>\n                    <th pSortableColumn=\"color\">Color <p-sortIcon field=\"color\"></p-sortIcon></th>\n                    <th style=\"width:4em\"></th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-car>\n                <tr>\n                    <td><span class=\"ui-column-title\">Vin</span>{{car.vin}}</td>\n                    <td><span class=\"ui-column-title\">Year</span>{{car.year}}</td>\n                    <td><span class=\"ui-column-title\">Brand</span>{{car.brand}}</td>\n                    <td><span class=\"ui-column-title\">Color</span>{{car.color}}</td>\n                    <td>\n                        <button pButton icon=\"pi pi-search\" (click)=\"selectCar(car)\"></button>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], _components_dynamicdialog_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"], _components_dynamicdialog_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]])], CarsListDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/showcase/components/dynamicdialog/dynamicdialogdemo-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: DynamicDialogDemoRoutingModule */

  /***/
  function _src_app_showcase_components_dynamicdialog_dynamicdialogdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogDemoRoutingModule", function () {
      return DynamicDialogDemoRoutingModule;
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


    var _dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dynamicdialogdemo */
    "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts");

    var DynamicDialogDemoRoutingModule = /*#__PURE__*/_createClass(function DynamicDialogDemoRoutingModule() {
      _classCallCheck(this, DynamicDialogDemoRoutingModule);
    });

    DynamicDialogDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DynamicDialogDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: DynamicDialogDemoModule */

  /***/
  function _src_app_showcase_components_dynamicdialog_dynamicdialogdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogDemoModule", function () {
      return DynamicDialogDemoModule;
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


    var _components_dynamicdialog_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/dynamicdialog/dynamicdialog */
    "./src/app/components/dynamicdialog/dynamicdialog.ts");
    /* harmony import */


    var _dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dynamicdialogdemo */
    "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts");
    /* harmony import */


    var _dynamicdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dynamicdialogdemo-routing.module */
    "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo-routing.module.ts");
    /* harmony import */


    var _carslistdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./carslistdemo */
    "./src/app/showcase/components/dynamicdialog/carslistdemo.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/table */
    "./src/app/components/table/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var DynamicDialogDemoModule = /*#__PURE__*/_createClass(function DynamicDialogDemoModule() {
      _classCallCheck(this, DynamicDialogDemoModule);
    });

    DynamicDialogDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dynamicdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogDemoRoutingModule"], _components_dynamicdialog_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__["CodeHighlighterModule"]],
      declarations: [_dynamicdialogdemo__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogDemo"], _carslistdemo__WEBPACK_IMPORTED_MODULE_6__["CarsListDemo"]],
      entryComponents: [_carslistdemo__WEBPACK_IMPORTED_MODULE_6__["CarsListDemo"]]
    })], DynamicDialogDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts":
  /*!************************************************************************!*\
    !*** ./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.ts ***!
    \************************************************************************/

  /*! exports provided: DynamicDialogDemo */

  /***/
  function _src_app_showcase_components_dynamicdialog_dynamicdialogdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicDialogDemo", function () {
      return DynamicDialogDemo;
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


    var _components_dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../components/dynamicdialog/dialogservice */
    "./src/app/components/dynamicdialog/dialogservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var _carslistdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./carslistdemo */
    "./src/app/showcase/components/dynamicdialog/carslistdemo.ts");

    var DynamicDialogDemo = /*#__PURE__*/function () {
      function DynamicDialogDemo(dialogService, messageService) {
        _classCallCheck(this, DynamicDialogDemo);

        this.dialogService = dialogService;
        this.messageService = messageService;
      }

      return _createClass(DynamicDialogDemo, [{
        key: "show",
        value: function show() {
          var _this2 = this;

          this.ref = this.dialogService.open(_carslistdemo__WEBPACK_IMPORTED_MODULE_4__["CarsListDemo"], {
            header: 'Choose a Car',
            width: '70%',
            contentStyle: {
              "max-height": "350px",
              "overflow": "auto"
            },
            baseZIndex: 10000
          });
          this.ref.onClose.subscribe(function (car) {
            if (car) {
              _this2.messageService.add({
                severity: 'info',
                summary: 'Car Selected',
                detail: 'Vin:' + car.vin
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.ref) {
            this.ref.close();
          }
        }
      }]);
    }();

    DynamicDialogDemo.ctorParameters = function () {
      return [{
        type: _components_dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    DynamicDialogDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dynamicdialogdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.html"))["default"],
      providers: [_components_dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_2__["DialogService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_components_dynamicdialog_dialogservice__WEBPACK_IMPORTED_MODULE_2__["DialogService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])], DynamicDialogDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-dynamicdialog-dynamicdialogdemo-module-es5.js.map