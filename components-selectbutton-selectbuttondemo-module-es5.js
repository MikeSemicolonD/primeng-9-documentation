function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-selectbutton-selectbuttondemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/selectbutton/selectbuttondemo.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/selectbutton/selectbuttondemo.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_selectbutton_selectbuttondemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">SelectButton</span>\n        <span>SelectButton is used to choose single or multiple items from a list using buttons.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n\n    <p>Selected Type: <span style=\"font-weight: bold\">{{selectedType}}</span></p>\n\n    <h3>Multiple</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"></p-selectButton>\n    <p>Selected Types: <span style=\"font-weight: bold\" *ngFor=\"let type of selectedTypes\">{{type}} </span></p>\n\n    <h3>Custom Template</h3>\n    <p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\" optionLabel=\"name\">\n        <ng-template let-item>\n            <div style=\"padding: .5em 1em\">\n                <img style=\"vertical-align: middle; margin-right: .5em\" src=\"assets/showcase/images/demo/flag/{{item.value.flag}}\" height=\"20px\"/>\n                <span>{{item.name}}</span>\n            </div>\n        </ng-template>\n    </p-selectButton>\n    <p>Selected Country: <span style=\"font-weight: bold\">{{selectedCountry?.name}}</span></p>\n\n    <hr>\n    <button type=\"button\" (click)=\"clear()\" pButton icon=\"pi pi-times\" label=\"Clear\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectButtonModule&#125; from 'primeng/selectbutton';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>SelectButton requires a value to bind and a collection of options. There are two alternatives of how to define the options property; one way is providing a collection of SelectItem\n            instances whereas other way is providing an array of arbitrary objects along with the optionLabel property to specify the field name of the option. SelectItem API is designed to have more control on how \n            the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice. Example below demonstrates both cases.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities1\" [(ngModel)]=\"selectedCity1\"&gt;&lt;/p-selectButton&gt;\n\n&lt;p-selectButton [options]=\"cities2\" [(ngModel)]=\"selectedCity2\" optionLabel=\"name\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\n\nexport class MyModel &#123;\n\n    cities1: SelectItem[];\n\n    cities2: City[];\n\n    selectedCity1: City;\n\n    selectedCity2: City;\n\n    constructor() &#123;\n      //SelectItem API with label-value pairs\n      this.cities1 = [\n          &#123;label:'Select City', value:null&#125;,\n          &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\n          &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\n          &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\n          &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;\n          &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\n      ];\n      \n      //An array of cities\n      this.cities2 = [\n          &#123;name: 'New York', code: 'NY'&#125;,\n          &#123;name: 'Rome', code: 'RM'&#125;,\n          &#123;name: 'London', code: 'LDN'&#125;,\n          &#123;name: 'Istanbul', code: 'IST'&#125;,\n          &#123;name: 'Paris', code: 'PRS'&#125;\n      ];\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Multiple</h3>\n            <p>SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. \n                In multiple case, model property should be an array instance that is not null or undefined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" [(ngModel)]=\"selectedCities\" multiple=\"multiple\" &gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCities: string[] = [];\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>SelectButton can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" formControlName=\"selectedCity\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n            <h3>Icons</h3>\n            <p>Button options can display icons using the icon property of the SelectItem API.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n\n    types: SelectItem[];\n\n    selectedType: string;\n\n    constructor() &#123;\n        this.types = [\n            &#123;label: 'Apartment', value: 'Apartment'&#125;,\n            &#123;label: 'House', value: 'House'&#125;,\n            &#123;label: 'Studio', value: 'Studio'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Disabled Options</h3>\n            <p>Particular options can be prevented from selection using the disabled property of SelectItem API.</p>\n\n            <h3>Templating</h3>\n            <p>Items support templating to display custom content inside the buttons using an ng-template that receives the option as the implicit variable. Note that\n                if an arbitrary object is used as the option instead of the SelectItem API, internally they are converted to SelectItems which means in the template\n                the arbitrary object can be access using the value property.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\" optionLabel=\"name\"&gt;\n    &lt;ng-template let-item&gt;\n        &lt;img src=\"assets/showcase/images/demo/flag/&#123;&#123;item.value.flag&#125;&#125;\" /&gt;\n        &lt;span&gt;&#123;&#123;item.name&#125;&#125;&lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n        \n    countries: any[];\n\n    selectedCountry: any;\n\n    constructor() &#123;\n        this.countries = [\n            &#123;name: 'USA', flag: 'usa.png'&#125;,\n            &#123;name: 'Germany', flag: 'germany.png'&#125;,\n            &#123;name: 'Japan', flag: 'japan.png'&#125;\n        ];\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of selectitems to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>optionLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, allows selecting multiple values.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a value in options.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.value: single value or an array of values that are selected\n                            </td>\n                            <td>Callback to invoke when value changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onOptionClick</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.option: SelectItem instance of the clicked button<br />\n                                event.index: Index of the clicked button\n                            </td>\n                            <td>Callback to invoke when a button is clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-selectbutton-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"&gt;&lt;/p-selectButton&gt;\n\n&lt;p&gt;Selected Type: &lt;span style=\"font-weight: bold\"&gt;&#123;&#123;selectedType&#125;&#125;&lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;Multiple&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Types: &lt;span style=\"font-weight: bold\" *ngFor=\"let type of selectedTypes\"&gt;&#123;&#123;type&#125;&#125; &lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;Icon Only&lt;/h3&gt;\n&lt;p-selectButton [options]=\"modes\" [(ngModel)]=\"selectedModes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Modes: &lt;span style=\"font-weight: bold\" *ngFor=\"let mode of selectedModes\"&gt;&#123;&#123;mode&#125;&#125; &lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;Custom Template&lt;/h3&gt;\n&lt;p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\" optionLabel=\"name\"&gt;\n    &lt;ng-template let-item&gt;\n        &lt;div style=\"padding: .5em 1em\"&gt;\n            &lt;img style=\"vertical-align: middle; margin-right: .5em\" src=\"assets/showcase/images/demo/flag/&#123;&#123;item.value.flag&#125;&#125;\" height=\"20px\"/&gt;\n            &lt;span&gt;&#123;&#123;item.name&#125;&#125;&lt;/span&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Country: &lt;span style=\"font-weight: bold\"&gt;&#123;&#123;selectedCountry?.name&#125;&#125;&lt;/span&gt;&lt;/p&gt;\n\n&lt;hr&gt;\n&lt;button type=\"button\" (click)=\"clear()\" pButton icon=\"pi pi-times\" label=\"Clear\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n\n    types: SelectItem[];\n\n    selectedType: string;\n\n    selectedTypes: string[] = ['PayPal','MasterCard'];\n\n    selectedModes: string[];\n\n    modes: SelectItem[];\n\n    countries: any[];\n\n    selectedCountry: any;\n\n    constructor() &#123;\n        this.types = [\n            &#123;label: 'Apartment', value: 'Apartment'&#125;,\n            &#123;label: 'House', value: 'House'&#125;,\n            &#123;label: 'Studio', value: 'Studio'&#125;\n        ];\n\n        this.countries = [\n            &#123;name: 'USA', flag: 'usa.png'&#125;,\n            &#123;name: 'Germany', flag: 'germany.png'&#125;,\n            &#123;name: 'Japan', flag: 'japan.png'&#125;\n        ];\n    &#125;\n\n    clear() &#123;\n        this.selectedType = null;\n        this.selectedTypes = [];\n        this.selectedModes = [];\n        this.selectedCountry = null;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-selectbutton-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: SelectButtonDemoRoutingModule */

  /***/
  function _src_app_showcase_components_selectbutton_selectbuttondemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectButtonDemoRoutingModule", function () {
      return SelectButtonDemoRoutingModule;
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


    var _selectbuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./selectbuttondemo */
    "./src/app/showcase/components/selectbutton/selectbuttondemo.ts");

    var SelectButtonDemoRoutingModule = /*#__PURE__*/_createClass(function SelectButtonDemoRoutingModule() {
      _classCallCheck(this, SelectButtonDemoRoutingModule);
    });

    SelectButtonDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _selectbuttondemo__WEBPACK_IMPORTED_MODULE_3__["SelectButtonDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectButtonDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/selectbutton/selectbuttondemo.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/selectbutton/selectbuttondemo.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: SelectButtonDemoModule */

  /***/
  function _src_app_showcase_components_selectbutton_selectbuttondemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectButtonDemoModule", function () {
      return SelectButtonDemoModule;
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


    var _selectbuttondemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./selectbuttondemo */
    "./src/app/showcase/components/selectbutton/selectbuttondemo.ts");
    /* harmony import */


    var _selectbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./selectbuttondemo-routing.module */
    "./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts");
    /* harmony import */


    var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/selectbutton */
    "./src/app/components/selectbutton/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var SelectButtonDemoModule = /*#__PURE__*/_createClass(function SelectButtonDemoModule() {
      _classCallCheck(this, SelectButtonDemoModule);
    });

    SelectButtonDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _selectbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectButtonDemoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]],
      declarations: [_selectbuttondemo__WEBPACK_IMPORTED_MODULE_4__["SelectButtonDemo"]]
    })], SelectButtonDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/selectbutton/selectbuttondemo.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/showcase/components/selectbutton/selectbuttondemo.ts ***!
    \**********************************************************************/

  /*! exports provided: SelectButtonDemo */

  /***/
  function _src_app_showcase_components_selectbutton_selectbuttondemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectButtonDemo", function () {
      return SelectButtonDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SelectButtonDemo = /*#__PURE__*/function () {
      function SelectButtonDemo() {
        _classCallCheck(this, SelectButtonDemo);

        this.selectedTypes = ['Apartment', 'Studio'];
        this.types = [{
          label: 'Apartment',
          value: 'Apartment'
        }, {
          label: 'House',
          value: 'House'
        }, {
          label: 'Studio',
          value: 'Studio'
        }];
        this.countries = [{
          name: 'USA',
          flag: 'usa.png'
        }, {
          name: 'Germany',
          flag: 'germany.png'
        }, {
          name: 'Japan',
          flag: 'japan.png'
        }];
      }

      return _createClass(SelectButtonDemo, [{
        key: "clear",
        value: function clear() {
          this.selectedType = null;
          this.selectedTypes = [];
          this.selectedModes = [];
          this.selectedCountry = null;
        }
      }]);
    }();

    SelectButtonDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./selectbuttondemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/selectbutton/selectbuttondemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SelectButtonDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-selectbutton-selectbuttondemo-module-es5.js.map