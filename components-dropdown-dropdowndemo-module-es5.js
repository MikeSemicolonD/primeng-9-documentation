function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dropdown-dropdowndemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dropdown/dropdowndemo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dropdown/dropdowndemo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_dropdown_dropdowndemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Dropdown</span>\n        <span>Dropdown is used to select an item from a collection of options. Custom content support and filtering are the notable features.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single</h3>\n    <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n    <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p>\n\n    <h3>Editable</h3>\n    <p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar1\" editable=\"true\" placeholder=\"Select a Brand\"></p-dropdown>\n    <p>Selected Car: {{selectedCar1 || 'none'}}</p>\n\n    <h3>Content with Filters</h3>\n    <p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar2\" filter=\"true\">\n        <ng-template let-item pTemplate=\"selectedItem\">\n            <img src=\"assets/showcase/images/demo/car/{{item.label}}.png\" style=\"width:16px;vertical-align:middle\" />\n            <span style=\"vertical-align:middle; margin-left: .5em\">{{item.label}}</span>\n        </ng-template>\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n                <img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"width:24px;position:absolute;top:1px;left:5px\"/>\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{car.label}}</div>\n            </div>\n        </ng-template>\n    </p-dropdown>\n    <p>Selected Car: {{selectedCar2 || 'none'}}</p>\n\n    <h3>Group</h3>\n    <p-dropdown [options]=\"groupedCars\" [(ngModel)]=\"selectedCar3\" placeholder=\"Select a Car\" [group]=\"true\">\n        <ng-template let-group pTemplate=\"group\">\n            <img src=\"assets/showcase/images/demo/flag/{{group.value}}\" style=\"width:20px;vertical-align:middle\" />\n            <span style=\"margin-left:.25em\">{{group.label}}</span>\n        </ng-template>\n    </p-dropdown>\n    <p>Selected Car: {{selectedCar3 || 'none'}}</p>\n\n    <h3>Virtual Scroll (10000 Items)</h3>\n    <p-dropdown [options]=\"items\" [(ngModel)]=\"item\" placeholder=\"Select Item\" [virtualScroll]=\"true\" [itemSize]=\"31\" [filter]=\"false\"></p-dropdown>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>CDK</h3>\n            <p>VirtualScrolling enabled Dropdown depends on @angular/cdk's ScrollingModule so begin with installing CDK if not already installed.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install @angular/cdk --save\n</code>\n</pre>\n\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DropdownModule&#125; from 'primeng/dropdown';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Dropdown requires a value to bind and a collection of options. There are two alternatives of how to define the options property; one way is providing a collection of SelectItem\n            instances whereas other way is providing an array of arbitrary objects along with the optionLabel property to specify the field name of the option. SelectItem API is designed to have more control on how\n            the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice. Example below demonstrates both cases.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cities1\" [(ngModel)]=\"selectedCity1\"&gt;&lt;/p-dropdown&gt;\n\n&lt;p-dropdown [options]=\"cities2\" [(ngModel)]=\"selectedCity2\" optionLabel=\"name\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\n\ninterface City &#123;\n  name: string;\n  code: string;\n&#125;\n\nexport class MyModel &#123;\n\n    cities1: SelectItem[];\n\n    cities2: City[];\n\n    selectedCity1: City;\n\n    selectedCity2: City;\n\n    constructor() &#123;\n        //SelectItem API with label-value pairs\n        this.cities1 = [\n            &#123;label:'Select City', value:null&#125;,\n            &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\n            &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\n            &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\n            &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;,\n            &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\n        ];\n\n        //An array of cities\n        this.cities2 = [\n            &#123;name: 'New York', code: 'NY'&#125;,\n            &#123;name: 'Rome', code: 'RM'&#125;,\n            &#123;name: 'London', code: 'LDN'&#125;,\n            &#123;name: 'Istanbul', code: 'IST'&#125;,\n            &#123;name: 'Paris', code: 'PRS'&#125;\n        ];\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>Dropdown can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cities\" formControlName=\"selectedCity\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n            <h3>Filtering</h3>\n            <p>Options can be filtered using an input field in the overlay by enabling the <i>filter</i> property. By default filtering is done against\n                label of the SelectItem and <i>filterBy</i> property is available to choose one or more properties of the SelectItem API.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" [filter]=\"true\"&gt;&lt;/p-dropdown&gt;\n&lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" [filter]=\"true\" filterBy=\"label,value.name\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n            <h3>Grouping</h3>\n            <p>Displaying options as grouped is enabled by providing a collection of SelectItemGroup instances and setting <i>group</i> property to true.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"groupedCars\" [(ngModel)]=\"selectedCar\" placeholder=\"Select a Car\" [group]=\"true\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\nimport &#123;SelectItemGroup&#125; from 'primeng/api';\n\nexport class GroupDemo &#123;\n\n    selectedCar: string;\n\n    groupedCars: SelectItemGroup[];\n\n    constructor() &#123;\n        this.groupedCars = [\n            &#123;\n                label: 'Germany',\n                items: [\n                    &#123;label: 'Audi', value: 'Audi'&#125;,\n                    &#123;label: 'BMW', value: 'BMW'&#125;,\n                    &#123;label: 'Mercedes', value: 'Mercedes'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'USA',\n                items: [\n                    &#123;label: 'Cadillac', value: 'Cadillac'&#125;,\n                    &#123;label: 'Ford', value: 'Ford'&#125;,\n                    &#123;label: 'GMC', value: 'GMC'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Japan',\n                items: [\n                    &#123;label: 'Honda', value: 'Honda'&#125;,\n                    &#123;label: 'Mazda', value: 'Mazda'&#125;,\n                    &#123;label: 'Toyota', value: 'Toyota'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Disabled Options</h3>\n            <p>Particular options can be prevented from selection using the <i>disabled</i> property of SelectItem API.</p>\n\n            <h3>Custom Content</h3>\n            <p>Both the selected option and the options list can be templated to provide customization on the default behavior which is displaying <i>label</i> property of an option. Use\n                \"selectedItem\" template to customize the selected label display and the \"item\" template to change the content of the options in the dropdown panel. In addition when grouping is enabled, \"group\" template is available\n                to customize the option groups. All templates get the option instance as the default local template variable. If the options are custom objects not SelectItem instances, use value property to access the custom object.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"&#123;'width':'150px'&#125;\"&gt;\n     &lt;ng-template let-item pTemplate=\"selectedItem\"&gt;\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;item.label&#125;&#125;.png\" style=\"width:16px;vertical-align:middle\" /&gt;\n        &lt;span style=\"vertical-align:middle\"&gt;&#123;&#123;item.label&#125;&#125;&lt;/span&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\" style=\"position: relative;height:25px;\"&gt;\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.label&#125;&#125;.png\" style=\"width:24px;position:absolute;top:1px;left:5px\"/&gt;\n        &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;&#123;&#123;car.label&#125;&#125;&lt;/div&gt; &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\n\nexport class MyModel &#123;\n\n    cars: SelectItem[];\n\n    selectedCar: string;\n\n    constructor() &#123;\n        this.cars = [\n            &#123;label: 'Audi', value: 'Audi'&#125;,\n            &#123;label: 'BMW', value: 'BMW'&#125;,\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\n            &#123;label: 'Ford', value: 'Ford'&#125;,\n            &#123;label: 'Honda', value: 'Honda'&#125;,\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\n            &#123;label: 'Renault', value: 'Renault'&#125;,\n            &#123;label: 'VW', value: 'VW'&#125;,\n            &#123;label: 'Volvo', value: 'Volvo'&#125;,\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Virtual Scrolling</h3>\n            <p>VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling\n                to avoid performance issues. Usage is simple as setting virtualScroll property to true and defining itemSize to specify the height of an item. </p>\n            <pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cities\" [virtualScroll]=\"true\" itemSize=\"30\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties,\n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar\" [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>optionLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input element.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>200px</td>\n                            <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>panelStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the overlay panel element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>panelStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the overlay panel element.</td>\n                        </tr>\n                        <tr>\n                            <td>filter</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, displays an input field to filter the items on keyup.</td>\n                        </tr>\n                        <tr>\n                            <td>filterBy</td>\n                            <td>string</td>\n                            <td>label</td>\n                            <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>\n                        </tr>\n                        <tr>\n                            <td>filterMatchMode</td>\n                            <td>string</td>\n                            <td>contains</td>\n                            <td>Defines how the items are filtered, valid values are \"contains\" (default) \"startsWith\", \"endsWith\", \"equals\", \"notEquals\", \"in\", \"lt\", \"lte\", \"gt\" and \"gte\".</td>\n                        </tr>\n                        <tr>\n                            <td>filterPlaceholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Placeholder text to show when filter input is empty.</td>\n                        </tr>\n                        <tr>\n                            <td>filterLocale</td>\n                            <td>string</td>\n                            <td>undefined</td>\n                            <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component cannot be edited.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                        <tr>\n                            <td>editable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, custom value instead of predefined options can be entered using the editable input field.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the editable input field.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Default text to display when no option is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the accessible input element.</td>\n                        </tr>\n                        <tr>\n                            <td>selectId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the native element.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a value in options.</td>\n                        </tr>\n                        <tr>\n                            <td>autofocus</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should automatically get focus on load.</td>\n                        </tr>\n                        <tr>\n                            <td>autofocusFilter</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Applies focus to the filter element when the overlay is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>resetFilterOnHide</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Clears the filter value when hiding the dropdown.</td>\n                        </tr>\n                        <tr>\n                            <td>dropdownIcon</td>\n                            <td>string</td>\n                            <td>pi pi-chevron-down</td>\n                            <td>Icon class of the dropdown icon.</td>\n                        </tr>\n                        <tr>\n                            <td>emptyFilterMessage</td>\n                            <td>string</td>\n                            <td>No results found</td>\n                            <td>Text to display when filtering does not return any results.</td>\n                        </tr>\n                        <tr>\n                            <td>autoDisplayFirst</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to display the first item as the label if no placeholder is defined and value is null.</td>\n                        </tr>\n                        <tr>\n                            <td>group</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display options as grouped when nested options are provided.</td>\n                        </tr>\n                        <tr>\n                            <td>showClear</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, a clear icon is displayed to clear the value.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>225ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>195ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaFilterLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines a string that labels the filter input.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltip</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Advisory information to display in a tooltip on hover.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the tooltip.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipPosition</td>\n                            <td>string</td>\n                            <td>top</td>\n                            <td>Position of the tooltip, valid values are right, left, top and bottom.</td>\n                        </tr>\n                        <tr>\n                            <td>tooltipPositionStyle</td>\n                            <td>string</td>\n                            <td>absolute</td>\n                            <td>Type of CSS position.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onClick</td>\n                            <td>event: Click event</td>\n                            <td>Callback to invoke when component is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: Browser event<br />\n                                event.value: Selected option value\n                            </td>\n                            <td>Callback to invoke when value of dropdown changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when dropdown gets focus.</td>\n                        </tr>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when dropdown loses focus.</td>\n                        </tr>\n                        <tr>\n                            <td>onShow</td>\n                            <td>event: Animation event</td>\n                            <td>Callback to invoke when dropdown overlay gets visible.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>event: Animation event</td>\n                            <td>Callback to invoke when dropdown overlay gets hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>resetFilter</td>\n                            <td>-</td>\n                            <td>Resets filtering.</td>\n                        </tr>\n                        <tr>\n                            <td>focus</td>\n                            <td>-</td>\n                            <td>Applies focus.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" filter=\"true\"&gt;&lt;/p-dropdown&gt;\n&lt;button type=\"button\" pButton label=\"Clear\" (click)=\"clearFilter(dd)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nclearFilter(dropdown: Dropdown) &#123;\n    dropdown.resetFilter();\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-dropdown</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-clearable</td>\n                            <td>Container element when showClear is on.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-label</td>\n                            <td>Element to display label of selected option.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-trigger</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-panel</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-items-wrapper</td>\n                            <td>Wrapper element of items list.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-items</td>\n                            <td>List element of items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-item</td>\n                            <td>An item in the list.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-filter-container</td>\n                            <td>Container of filter input.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-filter</td>\n                            <td>Filter element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dropdown-open</td>\n                            <td>Container element when overlay is visible.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dropdown\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-dropdown-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\" optionLabel=\"name\" [showClear]=\"true\"&gt;&lt;/p-dropdown&gt;\n&lt;p&gt;Selected City: &#123;&#123;selectedCity ? selectedCity.name : 'none'&#125;&#125;&lt;/p&gt;\n\n&lt;h3&gt;Editable&lt;/h3&gt;\n&lt;p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar1\" editable=\"true\" placeholder=\"Select a Brand\"&gt;&lt;/p-dropdown&gt;\n&lt;p&gt;Selected Car: &#123;&#123;selectedCar1 || 'none'&#125;&#125;&lt;/p&gt;\n\n&lt;h3&gt;Content with Filters&lt;/h3&gt;\n&lt;p-dropdown [options]=\"cars\" [(ngModel)]=\"selectedCar2\" filter=\"true\"&gt;\n    &lt;ng-template let-item pTemplate=\"selectedItem\"&gt;\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;item.label&#125;&#125;.png\" style=\"width:16px;vertical-align:middle\" /&gt;\n        &lt;span style=\"vertical-align:middle; margin-left: .5em\"&gt;&#123;&#123;item.label&#125;&#125;&lt;/span&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.label&#125;&#125;.png\" style=\"width:24px;position:absolute;top:1px;left:5px\"/&gt;\n            &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;&#123;&#123;car.label&#125;&#125;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dropdown&gt;\n&lt;p&gt;Selected Car: &#123;&#123;selectedCar2 || 'none'&#125;&#125;&lt;/p&gt;\n\n&lt;h3&gt;Group&lt;/h3&gt;\n&lt;p-dropdown [options]=\"groupedCars\" [(ngModel)]=\"selectedCar3\" placeholder=\"Select a Car\" [group]=\"true\"&gt;\n    &lt;ng-template let-group pTemplate=\"group\"&gt;\n        &lt;img src=\"assets/showcase/images/demo/flag/&#123;&#123;group.value&#125;&#125;\" style=\"width:20px;vertical-align:middle\" /&gt;\n        &lt;span style=\"margin-left:.25em\"&gt;&#123;&#123;group.label&#125;&#125;&lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dropdown&gt;\n&lt;p&gt;Selected Car: &#123;&#123;selectedCar3 || 'none'&#125;&#125;&lt;/p&gt;\n\n&lt;h3&gt;Virtual Scroll (10000 Items)&lt;/h3&gt;\n&lt;p-dropdown [options]=\"items\" [(ngModel)]=\"item\" placeholder=\"Select Item\" [virtualScroll]=\"true\" [itemSize]=\"31\" [filter]=\"false\"&gt;&lt;/p-dropdown&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DropdownDemo &#123;\n\n    cities: City[];\n\n    selectedCity: City;\n\n    cars: SelectItem[];\n\n    selectedCar1: string;\n\n    selectedCar2: string = 'BMW';\n\n    selectedCar3: string;\n\n    groupedCars: SelectItemGroup[];\n\n    items: SelectItem[];\n\n    item: string;\n\n    constructor() &#123;\n        this.cities = [\n            &#123;name: 'New York', code: 'NY'&#125;,\n            &#123;name: 'Rome', code: 'RM'&#125;,\n            &#123;name: 'London', code: 'LDN'&#125;,\n            &#123;name: 'Istanbul', code: 'IST'&#125;,\n            &#123;name: 'Paris', code: 'PRS'&#125;\n        ];\n\n        this.cars = [\n            &#123;label: 'Audi', value: 'Audi'&#125;,\n            &#123;label: 'BMW', value: 'BMW'&#125;,\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\n            &#123;label: 'Ford', value: 'Ford'&#125;,\n            &#123;label: 'Honda', value: 'Honda'&#125;,\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\n            &#123;label: 'Renault', value: 'Renault'&#125;,\n            &#123;label: 'VW', value: 'VW'&#125;,\n            &#123;label: 'Volvo', value: 'Volvo'&#125;\n        ];\n\n        this.groupedCars = [\n            &#123;\n                label: 'Germany', value: 'germany.png',\n                items: [\n                    &#123;label: 'Audi', value: 'Audi'&#125;,\n                    &#123;label: 'BMW', value: 'BMW'&#125;,\n                    &#123;label: 'Mercedes', value: 'Mercedes'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'USA', value: 'usa.png',\n                items: [\n                    &#123;label: 'Cadillac', value: 'Cadillac'&#125;,\n                    &#123;label: 'Ford', value: 'Ford'&#125;,\n                    &#123;label: 'GMC', value: 'GMC'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Japan', value: 'japan.png',\n                items: [\n                    &#123;label: 'Honda', value: 'Honda'&#125;,\n                    &#123;label: 'Mazda', value: 'Mazda'&#125;,\n                    &#123;label: 'Toyota', value: 'Toyota'&#125;\n                ]\n            &#125;\n        ];\n\n        this.items = [];\n        for (let i = 0; i &lt; 10000; i++) &#123;\n            this.items.push(&#123;label: 'Item ' + i, value: 'Item ' + i&#125;);\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-dropdown-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/dropdown/dropdowndemo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/dropdown/dropdowndemo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: DropdownDemoRoutingModule */

  /***/
  function _src_app_showcase_components_dropdown_dropdowndemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownDemoRoutingModule", function () {
      return DropdownDemoRoutingModule;
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


    var _dropdowndemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dropdowndemo */
    "./src/app/showcase/components/dropdown/dropdowndemo.ts");

    var DropdownDemoRoutingModule = /*#__PURE__*/_createClass(function DropdownDemoRoutingModule() {
      _classCallCheck(this, DropdownDemoRoutingModule);
    });

    DropdownDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _dropdowndemo__WEBPACK_IMPORTED_MODULE_3__["DropdownDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DropdownDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/dropdown/dropdowndemo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/dropdown/dropdowndemo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DropdownDemoModule */

  /***/
  function _src_app_showcase_components_dropdown_dropdowndemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownDemoModule", function () {
      return DropdownDemoModule;
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


    var _dropdowndemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dropdowndemo */
    "./src/app/showcase/components/dropdown/dropdowndemo.ts");
    /* harmony import */


    var _dropdowndemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dropdowndemo-routing.module */
    "./src/app/showcase/components/dropdown/dropdowndemo-routing.module.ts");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/dropdown */
    "./src/app/components/dropdown/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var DropdownDemoModule = /*#__PURE__*/_createClass(function DropdownDemoModule() {
      _classCallCheck(this, DropdownDemoModule);
    });

    DropdownDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _dropdowndemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["DropdownDemoRoutingModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]],
      declarations: [_dropdowndemo__WEBPACK_IMPORTED_MODULE_4__["DropdownDemo"]]
    })], DropdownDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/dropdown/dropdowndemo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/dropdown/dropdowndemo.ts ***!
    \**************************************************************/

  /*! exports provided: DropdownDemo */

  /***/
  function _src_app_showcase_components_dropdown_dropdowndemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownDemo", function () {
      return DropdownDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DropdownDemo = /*#__PURE__*/_createClass(function DropdownDemo() {
      _classCallCheck(this, DropdownDemo);

      this.selectedCar2 = 'BMW';
      this.items = [];

      for (var i = 0; i < 10000; i++) {
        this.items.push({
          label: 'Item ' + i,
          value: 'Item ' + i
        });
      }

      this.cities = [{
        name: 'New York',
        code: 'NY'
      }, {
        name: 'Rome',
        code: 'RM'
      }, {
        name: 'London',
        code: 'LDN'
      }, {
        name: 'Istanbul',
        code: 'IST'
      }, {
        name: 'Paris',
        code: 'PRS'
      }];
      this.cars = [{
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
      this.groupedCars = [{
        label: 'Germany',
        value: 'germany.png',
        items: [{
          label: 'Audi',
          value: 'Audi'
        }, {
          label: 'BMW',
          value: 'BMW'
        }, {
          label: 'Mercedes',
          value: 'Mercedes'
        }, {
          label: 'Murcia',
          value: 'Murcia'
        }]
      }, {
        label: 'USA',
        value: 'usa.png',
        items: [{
          label: 'Cadillac',
          value: 'Cadillac'
        }, {
          label: 'Ford',
          value: 'Ford'
        }, {
          label: 'GMC',
          value: 'GMC'
        }]
      }, {
        label: 'Japan',
        value: 'japan.png',
        items: [{
          label: 'Honda',
          value: 'Honda'
        }, {
          label: 'Mazda',
          value: 'Mazda'
        }, {
          label: 'Toyota',
          value: 'Toyota'
        }]
      }];
    });

    DropdownDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdowndemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/dropdown/dropdowndemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-dropdown-dropdowndemo-module-es5.js.map