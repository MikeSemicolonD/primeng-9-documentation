function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-autocomplete-autocompletedemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/autocomplete/autocompletedemo.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/autocomplete/autocompletedemo.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_autocomplete_autocompletedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">AutoComplete</span>\n        <span>AutoComplete is an input component that provides real-time suggestions when being typed.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\n        placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n    <span style=\"margin-left:10px\">Country: {{country ? country.name||country : 'none'}}</span>\n\n    <h3>Advanced</h3>\n    <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\n        [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\">\n        <ng-template let-brand pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\">\n                <img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\n            </div>\n        </ng-template>\n    </p-autoComplete>\n    <span style=\"margin-left:50px\">Brand: {{brand||'none'}}</span>\n\n    <h3>Multiple</h3>\n    <span class=\"ui-fluid\">\n        <p-autoComplete [(ngModel)]=\"countries\" [suggestions]=\"filteredCountriesMultiple\" (completeMethod)=\"filterCountryMultiple($event)\" styleClass=\"wid100\"\n            [minLength]=\"1\" placeholder=\"Countries\" field=\"name\" [multiple]=\"true\">\n        </p-autoComplete>\n    </span>\n    <ul>\n        <li *ngFor=\"let c of countries\">{{c.name}}</li>\n    </ul>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;AutoCompleteModule&#125; from 'primeng/autocomplete';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>AutoComplete uses ngModel for two-way binding, requires a list of suggestions and a completeMethod to query for the results. The completeMethod\n            gets the query text as event.query property and should update the suggestions with the search results.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [(ngModel)]=\"text\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"&gt;&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class AutoCompleteDemo &#123;\n\n    text: string;\n\n    results: string[];\n\n    search(event) &#123;\n        this.mylookupservice.getResults(event.query).then(data => &#123;\n            this.results = data;\n        &#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Change Detection of Suggestions</h3>\n            <p>AutoComplete uses setter based checking to realize if the suggestions has changed to update the UI. In order this to work, your changes such as adding or removing a record\n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change.\n            </p>\n\n            <p>Note that if no suggestions are available after searching, provide an empty array instead of a null value.</p>\n\n            <h3>Model Driven Forms</h3>\n            <p>AutoComplete can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete formControlName=\"city\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"&gt;&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n            <h3>Dropdown</h3>\n            <p>Enabling <i>dropdown</i> property displays a button next to the input field where click behavior of the button is defined using dropdownMode\n                property that takes \"blank\" or \"current\" as possible values. \"blank\" is the default mode to send a query with an empty string\n                whereas \"current\" setting sends a query with the current value of the input.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [(ngModel)]=\"text\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"\n            [dropdown]=\"true\"&gt;&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class AutoCompleteDemo &#123;\n\n    text: string;\n\n    results: string[];\n\n    search(event) &#123;\n        this.mylookupservice.getResults(event.query).then(data => &#123;\n            this.results = data;\n        &#125;);\n    &#125;\n\n    handleDropdown(event) &#123;\n        //event.query = current value in input field\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Multiple Selection</h3>\n            <p>Multiple mode is enabled using <i>multiple</i> property to select more than one value from the autocomplete. In this case, value reference should be an array.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [(ngModel)]=\"texts\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [multiple]=\"true\"&gt;&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class AutoCompleteDemo &#123;\n\n    texts: string[];\n\n    results: string[];\n\n    search(event) &#123;\n        this.mylookupservice.getResults(event.query).then(data => &#123;\n            this.results = data;\n        &#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Objects</h3>\n            <p>AutoComplete can also work with objects using the <i>field</i> property that defines the label to display as a suggestion. The value passed to the model would still be the\n            object instance of a suggestion. Here is an example with a Country object that has name and code fields such as &#123;name:\"United States\",code:\"USA\"&#125;.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [(ngModel)]=\"val\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" field=\"name\"&gt;&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class AutoCompleteDemo &#123;\n\n    val: country;\n\n    results: country[];\n\n    search(event) &#123;\n        this.countrylookupservice.getResults(event.query).then(data => &#123;\n            this.results = data;\n        &#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Force Selection</h3>\n            <p>ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared\n            to make sure the value passed to the model is always one of the suggestions.</p>\n            <pre>\n            <code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [(ngModel)]=\"val\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [forceSelection]=\"true\"&gt;&lt;/p-autoComplete&gt;\n            </code>\n            </pre>\n\n            <h3>Templating</h3>\n            <p>Item ng-template allows displaying custom content inside the suggestions panel. The local ng-template variable passed to the ng-template is an object in the suggestions array.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\"&gt;\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;&#123;&#123;brand&#125;&#125;&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n            <p>In multiple mode, selected item can be customized using selectedItem ng-template. Note that this\n                template is not supported in single mode.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [(ngModel)]=\"texts\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [multiple]=\"true\"&gt;\n    &lt;ng-template let-value pTemplate=\"selectedItem\"&gt;\n        &lt;span style=\"font-size:18px\"&gt;&gt;&#123;&#123;value&#125;&#125;&lt;&lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, \n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-autoComplete [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" [(ngModel)]=\"texts\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"&gt;&lt;/p-autoComplete&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>suggestions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of suggestions to display.</td>\n                        </tr>\n                        <tr>\n                            <td>field</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Field of a suggested object to resolve and display.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>200px</td>\n                            <td>Maximum height of the suggestions panel.</td>\n                        </tr>\n                        <tr>\n                            <td>dropdown</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays a button next to the input field when enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifies if multiple values can be selected.</td>\n                        </tr>\n                        <tr>\n                            <td>dropdownIcon</td>\n                            <td>string</td>\n                            <td>pi pi-caret-down</td>\n                            <td>Icon class of the dropdown icon.</td>\n                        </tr>\n                        <tr>\n                            <td>minLength</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Minimum number of characters to initiate a search.</td>\n                        </tr>\n                        <tr>\n                            <td>delay</td>\n                            <td>number</td>\n                            <td>300</td>\n                            <td>Delay between keystrokes to wait before sending a query.</td>\n                        </tr>\n                        <tr>\n                            <td>completeOnFocus</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to run a query when input receives focus.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>panelStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the overlay panel element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>inputStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>panelStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the overlay panel element.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input element.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Hint text for the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the input cannot be typed.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Size of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a value in options.</td>\n                        </tr>\n                        <tr>\n                            <td>autoHighlight</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, highlights the first item in the list by default.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>text</td>\n                            <td>Type of the input, defaults to \"text\".</td>\n                        </tr>\n                        <tr>\n                            <td>emptyMessage</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Message to display when there are no results for a query.</td>\n                        </tr>\n                        <tr>\n                            <td>immutable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines how the suggestions should be manipulated. More information is available at \"Change Detection\" section above.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\n                        </tr>\n                        <tr>\n                            <td>autofocus</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should automatically get focus on load.</td>\n                        </tr>\n                        <tr>\n                            <td>forceSelection</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, autocomplete clears the manual input if it does not match of the suggestions to force only\n                                accepting values from the suggestions.</td>\n                        </tr>\n                        <tr>\n                            <td>dropdownMode</td>\n                            <td>string</td>\n                            <td>blank</td>\n                            <td>Specifies the behavior dropdown button. Default \"blank\" mode\n                                    sends an empty string and \"current\" mode sends the input value.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>225ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>195ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines a string that labels the checkbox for accessibility.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Specifies one or more IDs in the DOM that labels the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>unique</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Ensures uniqueness of selected items on multiple mode.</td>\n                        </tr>\n                        <tr>\n                            <td>autocomplete</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Used to define a string that autocomplete attribute the current element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>completeMethod</td>\n                            <td>\n                                event.originalEvent: browser event <br>\n                                event.query: Value to search with\n                            </td>\n                            <td>Callback to invoke to search for suggestions.</td>\n                        </tr>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when autocomplete gets focus.</td>\n                        </tr>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when autocomplete loses focus.</td>\n                        </tr>\n                        <tr>\n                            <td>onKeyUp</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when a user releases a key.</td>\n                        </tr>\n                        <tr>\n                            <td>onSelect</td>\n                            <td>\n                                value: Selected value\n                            </td>\n                            <td>Callback to invoke when a suggestion is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>onUnselect</td>\n                            <td>\n                                value: Unselected value in multiple mode\n                            </td>\n                            <td>Callback to invoke when a selected value is removed.</td>\n                        </tr>\n                        <tr>\n                            <td>onDropdownClick</td>\n                            <td>\n                                event.originalEvent: browser event <br>\n                                event.query: Current value of the input field\n                            </td>\n                            <td>Callback to invoke when dropdown button is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onClear</td>\n                            <td>event: browser event</td>\n                            <td>Callback to invoke when input field is cleared.</td>\n                        </tr>\n                        <tr>\n                            <td>onShow</td>\n                            <td>event: Animation event</td>\n                            <td>Callback to invoke when autocomplete overlay gets visible.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>-</td>\n                            <td>Callback to invoke when autocomplete overlay gets hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-autocomplete</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-autocomplete-panel</td>\n                            <td>Overlay panel of suggestions.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-autocomplete-items</td>\n                            <td>List container of suggestions.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-autocomplete-list-item</td>\n                            <td>List item of a suggestion.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-autocomplete-token</td>\n                            <td>Element of a selected item in multiple mode.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-autocomplete-token-icon</td>\n                            <td>Close icon element of a selected item in multiple mode.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-autocomplete-token-label</td>\n                            <td>Label of a selected item in multiple mode.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-autocomplete-loader</td>\n                            <td>Loader icon.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/autocomplete\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-autocomplete-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\n    placeholder=\"Countries\" [minLength]=\"1\"&gt;&lt;/p-autoComplete&gt;\n&lt;span style=\"margin-left:10px\"&gt;Country: {{country ? country.name||country : 'none'}}&lt;/span&gt;\n\n&lt;h3&gt;Advanced&lt;/h3&gt;\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\n    [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\"&gt;\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\"&gt;\n            &lt;img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;{{brand}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-autoComplete&gt;\n&lt;span style=\"margin-left:50px\"&gt;Brand: {{brand||'none'}}&lt;/span&gt;\n\n&lt;h3&gt;Multiple&lt;/h3&gt;\n&lt;span class=\"ui-fluid\"&gt;\n    &lt;p-autoComplete [(ngModel)]=\"countries\" [suggestions]=\"filteredCountriesMultiple\" (completeMethod)=\"filterCountryMultiple($event)\" styleClass=\"wid100\"\n        [minLength]=\"1\" placeholder=\"Countries\" field=\"name\" [multiple]=\"true\"&gt;\n    &lt;/p-autoComplete&gt;\n&lt;/span&gt;\n&lt;ul&gt;\n    &lt;li *ngFor=\"let c of countries\"&gt;&#123;&#123;c.name&#125;&#125;&lt;/li&gt;\n&lt;/ul&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class AutoCompleteDemo &#123;\n\n    country: any;\n\n    countries: any[];\n\n    filteredCountriesSingle: any[];\n\n    filteredCountriesMultiple: any[];\n\n    brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];\n\n    filteredBrands: any[];\n\n    brand: string;\n\n    constructor(private countryService: CountryService) &#123; &#125;\n\n    filterCountrySingle(event) &#123;\n        let query = event.query;\n        this.countryService.getCountries().then(countries => &#123;\n            this.filteredCountriesSingle = this.filterCountry(query, countries);\n        &#125;);\n    &#125;\n\n    filterCountryMultiple(event) &#123;\n        let query = event.query;\n        this.countryService.getCountries().then(countries => &#123;\n            this.filteredCountriesMultiple = this.filterCountry(query, countries);\n        &#125;);\n    &#125;\n\n    filterCountry(query, countries: any[]):any[] &#123;\n        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side\n        let filtered : any[] = [];\n        for(let i = 0; i < countries.length; i++) &#123;\n            let country = countries[i];\n            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) &#123;\n                filtered.push(country);\n            &#125;\n        &#125;\n        return filtered;\n    &#125;\n\n    filterBrands(event) &#123;\n        this.filteredBrands = [];\n        for(let i = 0; i < this.brands.length; i++) &#123;\n            let brand = this.brands[i];\n            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) &#123;\n                this.filteredBrands.push(brand);\n            &#125;\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Injectable()\nexport class CountryService &#123;\n\n    constructor(private http: Http) &#123;&#125;\n\n    getCountries() &#123;\n        return this.http.get('showcase/resources/data/countries.json')\n                    .toPromise()\n                    .then(res => &lt;any[]&gt; res.json().data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-autocomplete-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AutoCompleteDemoRoutingModule */

  /***/
  function _src_app_showcase_components_autocomplete_autocompletedemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteDemoRoutingModule", function () {
      return AutoCompleteDemoRoutingModule;
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


    var _autocompletedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./autocompletedemo */
    "./src/app/showcase/components/autocomplete/autocompletedemo.ts");

    var AutoCompleteDemoRoutingModule = /*#__PURE__*/_createClass(function AutoCompleteDemoRoutingModule() {
      _classCallCheck(this, AutoCompleteDemoRoutingModule);
    });

    AutoCompleteDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _autocompletedemo__WEBPACK_IMPORTED_MODULE_3__["AutoCompleteDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AutoCompleteDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/autocomplete/autocompletedemo.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/autocomplete/autocompletedemo.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AutoCompleteDemoModule */

  /***/
  function _src_app_showcase_components_autocomplete_autocompletedemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteDemoModule", function () {
      return AutoCompleteDemoModule;
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


    var _autocompletedemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./autocompletedemo */
    "./src/app/showcase/components/autocomplete/autocompletedemo.ts");
    /* harmony import */


    var _autocompletedemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./autocompletedemo-routing.module */
    "./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./src/app/components/autocomplete/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var AutoCompleteDemoModule = /*#__PURE__*/_createClass(function AutoCompleteDemoModule() {
      _classCallCheck(this, AutoCompleteDemoModule);
    });

    AutoCompleteDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _autocompletedemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteDemoRoutingModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]],
      declarations: [_autocompletedemo__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteDemo"]]
    })], AutoCompleteDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/autocomplete/autocompletedemo.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/showcase/components/autocomplete/autocompletedemo.ts ***!
    \**********************************************************************/

  /*! exports provided: AutoCompleteDemo */

  /***/
  function _src_app_showcase_components_autocomplete_autocompletedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteDemo", function () {
      return AutoCompleteDemo;
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


    var _service_countryservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/countryservice */
    "./src/app/showcase/service/countryservice.ts");

    var AutoCompleteDemo = /*#__PURE__*/function () {
      function AutoCompleteDemo(countryService) {
        _classCallCheck(this, AutoCompleteDemo);

        this.countryService = countryService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
      }

      return _createClass(AutoCompleteDemo, [{
        key: "filterCountrySingle",
        value: function filterCountrySingle(event) {
          var _this = this;

          var query = event.query;
          this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesSingle = _this.filterCountry(query, countries);
          });
        }
      }, {
        key: "filterCountryMultiple",
        value: function filterCountryMultiple(event) {
          var _this2 = this;

          var query = event.query;
          this.countryService.getCountries().then(function (countries) {
            _this2.filteredCountriesMultiple = _this2.filterCountry(query, countries);
          });
        }
      }, {
        key: "filterCountry",
        value: function filterCountry(query, countries) {
          //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
          var filtered = [];

          for (var i = 0; i < countries.length; i++) {
            var country = countries[i];

            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
            }
          }

          return filtered;
        }
      }, {
        key: "filterBrands",
        value: function filterBrands(event) {
          this.filteredBrands = [];

          for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];

            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
              this.filteredBrands.push(brand);
            }
          }
        }
      }]);
    }();

    AutoCompleteDemo.ctorParameters = function () {
      return [{
        type: _service_countryservice__WEBPACK_IMPORTED_MODULE_2__["CountryService"]
      }];
    };

    AutoCompleteDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./autocompletedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/autocomplete/autocompletedemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_countryservice__WEBPACK_IMPORTED_MODULE_2__["CountryService"]])], AutoCompleteDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-autocomplete-autocompletedemo-module-es5.js.map