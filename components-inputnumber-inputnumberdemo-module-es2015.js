(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputnumber-inputnumberdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputnumber/inputnumberdemo.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputnumber/inputnumberdemo.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputNumber</span>\n        <span>InputNumber is an input component to provide numerical input.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Numerals</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-3\">\n            Integer Only\n            <p-inputNumber [(ngModel)]=\"value1\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Without Grouping\n            <p-inputNumber [(ngModel)]=\"value2\" mode=\"decimal\" [useGrouping]=\"false\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Min-Max Fraction Digits\n            <p-inputNumber [(ngModel)]=\"value3\" mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"5\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Min-Max Boundaries\n            <p-inputNumber [(ngModel)]=\"value4\" mode=\"decimal\" [min]=\"0\" [max]=\"100\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            User Locale\n            <p-inputNumber [(ngModel)]=\"value5\" [minFractionDigits]=\"2\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            United State Locale\n            <p-inputNumber [(ngModel)]=\"value6\" mode=\"decimal\" locale=\"en-US\" [minFractionDigits]=\"2\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            German Locale\n            <p-inputNumber [(ngModel)]=\"value7\" mode=\"decimal\" locale=\"de-DE\" [minFractionDigits]=\"2\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Indian Locale\n            <p-inputNumber [(ngModel)]=\"value8\" mode=\"decimal\" locale=\"en-IN\" [minFractionDigits]=\"2\">\n            </p-inputNumber>\n        </div>\n    </div>\n    <h3>Currency</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-3\">\n            United States\n            <p-inputNumber [(ngModel)]=\"value9\" mode=\"currency\" currency=\"USD\" locale=\"en-US\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Germany\n            <p-inputNumber [(ngModel)]=\"value10\" mode=\"currency\" currency=\"EUR\" locale=\"de-DE\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            India\n            <p-inputNumber [(ngModel)]=\"value11\" mode=\"currency\" currency=\"INR\" currencyDisplay=\"code\" locale=\"en-IN\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Japan\n            <p-inputNumber [(ngModel)]=\"value12\" mode=\"currency\" currency=\"JPY\" locale=\"jp-JP\">\n            </p-inputNumber>\n        </div>\n    </div>\n    <h3>Prefix and Suffix</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-3\">\n            Mile\n            <p-inputNumber [(ngModel)]=\"value13\" suffix=\" mi\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Percent\n            <p-inputNumber [(ngModel)]=\"value14\" prefix=\"%\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Expiry\n            <p-inputNumber [(ngModel)]=\"value15\" prefix=\"Expires in \" suffix=\" days\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Temperature\n            <p-inputNumber [(ngModel)]=\"value16\" prefix=\"&uarr; \" suffix=\"℃\" [min]=\"0\" [max]=\"40\">\n            </p-inputNumber>\n        </div>\n    </div>\n    <h3>Buttons</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-3\">\n            Stacked\n            <p-inputNumber [(ngModel)]=\"value17\" [showButtons]=\"true\" mode=\"currency\" currency=\"USD\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Horizontal with Step\n            <p-inputNumber [(ngModel)]=\"value18\" [showButtons]=\"true\" buttonLayout=\"horizontal\" spinnerMode=\"horizontal\" [step]=\"0.25\"\n            decrementButtonClass=\"ui-button-danger\" incrementButtonClass=\"ui-button-success\" incrementButtonIcon=\"pi pi-plus\" decrementButtonIcon=\"pi pi-minus\" mode=\"currency\" currency=\"EUR\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            <div>Vertical</div>\n            <p-inputNumber [(ngModel)]=\"value19\" [showButtons]=\"true\" buttonLayout=\"vertical\" spinnerMode=\"vertical\"\n            decrementButtonClass=\"ui-button-secondary\" incrementButtonClass=\"ui-button-secondary\" incrementButtonIcon=\"pi pi-plus\" decrementButtonIcon=\"pi pi-minus\">\n            </p-inputNumber>\n        </div>\n        <div class=\"p-col-12 p-md-3\">\n            Min-Max Boundaries\n            <p-inputNumber [(ngModel)]=\"value20\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"100\">\n            </p-inputNumber>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;InputNumberModule&#125; from 'primeng/inputnumber';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>InputNumber is used with the standard v-model directive. Component always provides a number type although formatting on the input is a string.</p>   \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputNumber [(ngModel)]=\"val\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n\n            <h3>Decimal Mode</h3>\n            <p>Format is defined using the <i>mode</i> property, \"decimal\" is the default value allowing only integers when there is no other configuration.</p>   \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputNumber [(ngModel)]=\"val\" mode=\"decimal\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n            <p>Fractions are configured with the <i>minFractionDigits</i> property. Optionally <i>maxFractionDigits</i> can be used to defined a boundary for the maximum digits.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputNumber [(ngModel)]=\"val\" mode=\"decimal\" [minFractionDigits]=\"2\"&gt;&lt;/p-inputNumber&gt;\n&lt;p-inputNumber [(ngModel)]=\"val\" mode=\"decimal\" [minFractionDigits]=\"2\" [maxFracionDigits]=\"2\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n\n            <p><i>locale</i> option is available to set the localization information such as grouping and decimal symbols where default value is the browser locale. Locales are defined per <a href=\"https://tools.ietf.org/html/rfc5646\">BCP Language Tag</a>.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nUser Locale\n&lt;p-inputNumber [(ngModel)]=\"value1\" mode=\"decimal\" [minFractionDigits]=\"2\"&gt;&lt;/p-inputNumber&gt;\n\nUnited State Locale\n&lt;p-inputNumber [(ngModel)]=\"value2\" mode=\"decimal\" locale=\"en-US\" [minFractionDigits]=\"2\"&gt;&lt;/p-inputNumber&gt;\n\nGerman Locale\n&lt;p-inputNumber [(ngModel)]=\"value3\" mode=\"decimal\" locale=\"de-DE\" [minFractionDigits]=\"2\"&gt;&lt;/p-inputNumber&gt;\n\nIndian Locale\n&lt;p-inputNumber [(ngModel)]=\"value4\" mode=\"decimal\" locale=\"en-IN\" [minFractionDigits]=\"2\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n\n            <h3>Currency</h3>\n            <p>Currency formatting is specified by setting the <i>mode</i> option to currency and <i>currency</i> property. In addition <i>currencyDisplay</i> option\n                allows how the currency is displayed, valid values are \"symbol\" (default) or \"code\".</p> \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nUser Locale\n&lt;p-inputNumber [(ngModel)]=\"value1\" mode=\"currency\"&gt;&lt;/p-inputNumber&gt;\n\nUnited State Locale\n&lt;p-inputNumber [(ngModel)]=\"value2\" mode=\"currency\" currency=\"USD\" locale=\"en-US\"&gt;&lt;/p-inputNumber&gt;\n\nGerman Locale\n&lt;p-inputNumber [(ngModel)]=\"value3\" mode=\"currency\" currency=\"EUR\" locale=\"de-DE\"&gt;&lt;/p-inputNumber&gt;\n\nIndian Locale\n&lt;p-inputNumber [(ngModel)]=\"value4\" mode=\"currency\" currency=\"INR\" locale=\"en-IN\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n\n            <h3>Prefix and Suffix</h3>\n            <p>Custom texts e.g. units can be placed before or after the input section with the <i>prefix</i> and <i>suffix</i> properties.</p> \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nMile\n&lt;p-inputNumber [(ngModel)]=\"value1\" suffix=\" mi\"&gt;&lt;/p-inputNumber&gt;\n\nPercent\n&lt;p-inputNumber [(ngModel)]=\"value2\" prefix=\"%\"&gt;&lt;/p-inputNumber&gt;\n\nExpiry\n&lt;p-inputNumber [(ngModel)]=\"value3\" prefix=\"Expires in \" suffix=\" days\"&gt;&lt;/p-inputNumber&gt;\n\nTemperature\n&lt;p-inputNumber [(ngModel)]=\"value4\" prefix=\"&uarr; \" suffix=\"℃\" :min=\"0\" :max=\"40\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n\n            <h3>Buttons</h3>\n            <p>Spinner buttons is enabled using the <i>showButtons</i> options and layout is defined with the <i>buttonLayout</i>. Default value is \"stacked\" whereas\n                \"horizontal\" and \"stacked\" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard.</p> \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nStacked\n&lt;p-inputNumber [(ngModel)]=\"value1\" [showButtons]=\"true\" mode=\"currency\" currency=\"USD\"&gt;&lt;/p-inputNumber&gt;\n\nHorizontal\n&lt;p-inputNumber [(ngModel)]=\"value2\" [showButtons]=\"true\" buttonLayout=\"horizontal\" spinnerMode=\"horizontal\"\n    decrementButtonClass=\"ui-button-danger\" incrementButtonClass=\"ui-button-success\" incrementButtonIcon=\"pi pi-plus\" decrementButtonIcon=\"pi pi-minus\" mode=\"currency\" currency=\"EUR\"&gt;&lt;/p-inputNumber&gt;\n\nVertical\n&lt;p-inputNumber [(ngModel)]=\"value3\" mode=\"decimal\" [showButtons]=\"true\" buttonLayout=\"vertical\" spinnerMode=\"vertical\"\n    decrementButtonClass=\"ui-button-secondary\" incrementButtonClass=\"ui-button-secondary\" incrementButtonIcon=\"pi pi-plus\" decrementButtonIcon=\"pi pi-minus\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n\n            <h3>Step</h3>\n            <p>Step factor is 1 by default and can be customized with <i>step</i> option.</p> \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputNumber [(ngModel)]=\"val\" [step]=\"0.25\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n    \n            <h3>Min and Max Boundaries</h3>\n            <p>Value to be entered can be restricted by configuring the <i>min</i> and <i>max</i> options.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-inputNumber [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-inputNumber&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Value of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>format</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to format the value.</td>\n                        </tr>\n                        <tr>\n                            <td>showButtons</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays spinner buttons.</td>\n                        </tr>\n                        <tr>\n                            <td>buttonLayout</td>\n                            <td>string</td>\n                            <td>stacked</td>\n                            <td>Layout of the buttons, valid values are \"stacked\" (default), \"horizontal\" and \"vertical\".</td>\n                        </tr>\n                        <tr>\n                            <td>incrementButtonClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the increment button.</td>\n                        </tr>\n                        <tr>\n                            <td>decrementButtonClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the decrement button.</td>\n                        </tr>\n                        <tr>\n                            <td>incrementButtonIcon</td>\n                            <td>string</td>\n                            <td>pi pi-chevron-up</td>\n                            <td>Style class of the increment button.</td>\n                        </tr>\n                        <tr>\n                            <td>decrementButtonIcon</td>\n                            <td>string</td>\n                            <td>pi pi-chevron-down</td>\n                            <td>Style class of the decrement button.</td>\n                        </tr>\n                        <tr>\n                            <td>locale</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Locale to be used in formatting.</td>\n                        </tr>\n                        <tr>\n                            <td>localeMatcher</td>\n                            <td>string</td>\n                            <td>best fit</td>\n                            <td>The locale matching algorithm to use. Possible values are \"lookup\" and \"best fit\"; the default is \"best fit\".\n                                See <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation\">Locale Negotation</a> for details.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>mode</td>\n                            <td>string</td>\n                            <td>decimal</td>\n                            <td>Defines the behavior of the component, valid values are \"decimal\" and \"currency\".</td>\n                        </tr>\n                        <tr>\n                            <td>prefix</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text to display before the value.</td>\n                        </tr>\n                        <tr>\n                            <td>suffix</td>\n                            <td>string</td>\n                            <td>decimal</td>\n                            <td>Text to display after the value.</td>\n                        </tr>\n                        <tr>\n                            <td>currency</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>The currency to use in currency formatting. Possible values are the <a href=\"https://www.currency-iso.org/en/home/tables/table-a1.html\">ISO 4217 currency codes</a>,\n                                such as \"USD\" for the US dollar, \"EUR\" for the euro, or \"CNY\" for the Chinese RMB.\n                                There is no default value; if the style is \"currency\", the currency property must be provided.</td>\n                        </tr>\n                        <tr>\n                            <td>currencyDisplay</td>\n                            <td>string</td>\n                            <td>symbol</td>\n                            <td>How to display the currency in currency formatting. Possible values are \"symbol\" to use a localized currency symbol such as €,\n                                ü\"code\" to use the ISO currency code, \"name\" to use a localized currency name such as \"dollar\"; the default is \"symbol\".</td>\n                        </tr>\n                        <tr>\n                            <td>useGrouping</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.</td>\n                        </tr>\n                        <tr>\n                            <td>minFractionDigits</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of\n                                minor unit digits provided by the <a href=\"https://www.currency-iso.org/en/home/tables/table-a1.html\">ISO 4217 currency code list</a> (2 if the list doesn't provide that information).</td>\n                        </tr>\n                        <tr>\n                            <td>maxFractionDigits</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain\n                                number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting\n                                is the larger of minimumFractionDigits and the number of minor unit digits provided by the <a href=\"https://www.currency-iso.org/en/home/tables/table-a1.html\">ISO 4217 currency code list</a>\n                                (2 if the list doesn't provide that information).</td>\n                        </tr>\n                        <tr>\n                            <td>min</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Mininum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>max</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum boundary value.</td>\n                        </tr>\n                        <tr>\n                            <td>step</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Step factor to increment/decrement the value.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>placeholder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Advisory information to display on input.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Size of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>maxlength</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Maximum number of character allows in the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Specifies tab order of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>title</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Title text of the input text.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Used to define a string that labels the current element.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaRequired</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Used to indicate that user input is required on an element before a form can be submitted.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input field.</td>\n                        </tr>\n                        <tr>\n                            <td>autocomplete</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Used to define a string that autocomplete attribute the current element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input receives focus.</td>\n                        </tr> \n                        <tr>\n                            <td>onBlur</td>\n                            <td>event: Browser event</td>\n                            <td>Callback to invoke when input loses focus.</td>\n                        </tr>   \n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming</a> page.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-inputnumber</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-stacked</td>\n                            <td>Container element with stacked buttons.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-horizontal</td>\n                            <td>Container element with horizontal buttons.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-vertical</td>\n                            <td>Container element with vertical buttons.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-input</td>\n                            <td>Input element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-button</td>\n                            <td>Input element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-button-up</td>\n                            <td>Increment button</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-button-down</td>\n                            <td>Decrement button</td>\n                        </tr>\n                        <tr>\n                            <td>ui-inputnumber-button-icon</td>\n                            <td>Button icon</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputnumber\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-inputnumber-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-grid ui-fluid\"&gt;\n&lt;h3&gt;Numerals&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Integer Only\n        &lt;p-inputNumber [(ngModel)]=\"value1\"&gt;\n        &lt;/p-inputNumber&gt;\n        &#123;&#123;value1&#125;&#125;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Without Grouping\n        &lt;p-inputNumber [(ngModel)]=\"value2\" mode=\"decimal\" [useGrouping]=\"false\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Min-Max Fraction Digits\n        &lt;p-inputNumber [(ngModel)]=\"value3\" mode=\"decimal\" [minFractionDigits]=\"2\" [maxFractionDigits]=\"5\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Min-Max Boundaries\n        &lt;p-inputNumber [(ngModel)]=\"value4\" mode=\"decimal\" [min]=\"0\" [max]=\"100\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        User Locale\n        &lt;p-inputNumber [(ngModel)]=\"value5\" [minFractionDigits]=\"2\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        United State Locale\n        &lt;p-inputNumber [(ngModel)]=\"value6\" mode=\"decimal\" locale=\"en-US\" [minFractionDigits]=\"2\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        German Locale\n        &lt;p-inputNumber [(ngModel)]=\"value7\" mode=\"decimal\" locale=\"de-DE\" [minFractionDigits]=\"2\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Indian Locale\n        &lt;p-inputNumber [(ngModel)]=\"value8\" mode=\"decimal\" locale=\"en-IN\" [minFractionDigits]=\"2\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;h3&gt;Currency&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        United States\n        &lt;p-inputNumber [(ngModel)]=\"value9\" mode=\"currency\" currency=\"USD\" locale=\"en-US\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Germany\n        &lt;p-inputNumber [(ngModel)]=\"value10\" mode=\"currency\" currency=\"EUR\" locale=\"de-DE\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        India\n        &lt;p-inputNumber [(ngModel)]=\"value11\" mode=\"currency\" currency=\"INR\" currencyDisplay=\"code\" locale=\"en-IN\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Japan\n        &lt;p-inputNumber [(ngModel)]=\"value12\" mode=\"currency\" currency=\"JPY\" locale=\"jp-JP\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;h3&gt;Prefix and Suffix&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Mile\n        &lt;p-inputNumber [(ngModel)]=\"value13\" suffix=\" mi\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Percent\n        &lt;p-inputNumber [(ngModel)]=\"value14\" prefix=\"%\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Expiry\n        &lt;p-inputNumber [(ngModel)]=\"value15\" prefix=\"Expires in \" suffix=\" days\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Temperature\n        &lt;p-inputNumber [(ngModel)]=\"value16\" prefix=\"&uarr; \" suffix=\"℃\" [min]=\"0\" [max]=\"40\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;h3&gt;Buttons&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Stacked\n        &lt;p-inputNumber [(ngModel)]=\"value17\" [showButtons]=\"true\" mode=\"currency\" currency=\"USD\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Horizontal with Step\n        &lt;p-inputNumber [(ngModel)]=\"value18\" [showButtons]=\"true\" buttonLayout=\"horizontal\" spinnerMode=\"horizontal\" [step]=\"0.25\"\n        decrementButtonClass=\"ui-button-danger\" incrementButtonClass=\"ui-button-success\" incrementButtonIcon=\"pi pi-plus\" decrementButtonIcon=\"pi pi-minus\" mode=\"currency\" currency=\"EUR\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        &lt;div&gt;Vertical&lt;/div&gt;\n        &lt;p-inputNumber [(ngModel)]=\"value19\" [showButtons]=\"true\" buttonLayout=\"vertical\" spinnerMode=\"vertical\"\n        decrementButtonClass=\"ui-button-secondary\" incrementButtonClass=\"ui-button-secondary\" incrementButtonIcon=\"pi pi-plus\" decrementButtonIcon=\"pi pi-minus\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col-12 p-md-3\"&gt;\n        Min-Max Boundaries\n        &lt;p-inputNumber [(ngModel)]=\"value20\" mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"100\"&gt;\n        &lt;/p-inputNumber&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class InputNumberDemo &#123;\n    value1: number = 42723;\n\n    value2: number = 58151;\n\n    value3: number = 2351.35;\n\n    value4: number = 50;\n\n    value5: number = 151351;\n\n    value6: number = 115744;\n\n    value7: number = 635524;\n\n    value8: number = 732762;\n\n    value9: number = 1500;\n\n    value10: number = 2500;\n\n    value11: number = 4250;\n\n    value12: number = 5002;\n\n    value13: number = 20;\n\n    value14: number = 50;\n\n    value15: number = 10;\n\n    value16: number = 20;\n\n    value17: number = 20;\n\n    value18: number = 10.50;\n\n    value19: number = 25;\n\n    value20: number = 50;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-inputnumber-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/components/dynamicdialog/public_api.ts":
/*!********************************************************!*\
  !*** ./src/app/components/dynamicdialog/public_api.ts ***!
  \********************************************************/
/*! exports provided: DialogService, DynamicDialogComponent, DynamicDialogModule, DynamicDialogConfig, DynamicDialogInjector, DynamicDialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogservice */ "./src/app/components/dynamicdialog/dialogservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialogservice__WEBPACK_IMPORTED_MODULE_0__["DialogService"]; });

/* harmony import */ var _dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamicdialog */ "./src/app/components/dynamicdialog/dynamicdialog.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogComponent", function() { return _dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogModule", function() { return _dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogModule"]; });

/* harmony import */ var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function() { return _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]; });

/* harmony import */ var _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialog-injector */ "./src/app/components/dynamicdialog/dynamicdialog-injector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogInjector", function() { return _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogInjector"]; });

/* harmony import */ var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function() { return _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"]; });

/* empty/unused harmony star reexport */







/***/ }),

/***/ "./src/app/components/inputnumber/inputnumber.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/inputnumber/inputnumber.ts ***!
  \*******************************************************/
/*! exports provided: INPUTNUMBER_VALUE_ACCESSOR, InputNumber, InputNumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUTNUMBER_VALUE_ACCESSOR", function() { return INPUTNUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumber", function() { return InputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberModule", function() { return InputNumberModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const INPUTNUMBER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => InputNumber),
    multi: true
};
let InputNumber = class InputNumber {
    constructor(el) {
        this.el = el;
        this.showButtons = false;
        this.format = true;
        this.buttonLayout = "stacked";
        this.useGrouping = true;
        this.incrementButtonIcon = 'pi pi-chevron-up';
        this.decrementButtonIcon = 'pi pi-chevron-down';
        this.mode = "decimal";
        this.step = 1;
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
        const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        this._decimal = this.getDecimalExpression();
        this._group = this.getGroupingExpression();
        this._minusSign = this.getMinusSignExpression();
        this._currency = this.getCurrencyExpression();
        this._suffix = new RegExp(`[${this.suffix || ''}]`, 'g');
        this._prefix = new RegExp(`[${this.prefix || ''}]`, 'g');
        this._index = d => index.get(d);
    }
    formatValue(value) {
        if (value != null) {
            if (this.format) {
                let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
                let formattedValue = formatter.format(value);
                if (this.prefix) {
                    formattedValue = this.prefix + formattedValue;
                }
                if (this.suffix) {
                    formattedValue = formattedValue + this.suffix;
                }
                return formattedValue;
            }
            return value;
        }
        return '';
    }
    formattedValue() {
        return this.formatValue(this.value);
    }
    onInput(event) {
        if (this.isSpecialChar) {
            event.target.value = this.lastValue;
        }
        this.isSpecialChar = false;
    }
    onInputKeyDown(event) {
        this.lastValue = event.target.value;
        if (event.shiftKey || event.altKey) {
            this.isSpecialChar = true;
            return;
        }
        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;
        let inputValue = event.target.value;
        if (event.altKey) {
            event.preventDefault();
        }
        switch (event.which) {
            //up
            case 38:
                this.spin(event, 1);
                event.preventDefault();
                break;
            //down
            case 40:
                this.spin(event, -1);
                event.preventDefault();
                break;
            //left
            case 37:
                if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                    event.preventDefault();
                }
                break;
            //right
            case 39:
                if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
                    event.preventDefault();
                }
                break;
            //backspace
            case 8: {
                event.preventDefault();
                let newValueStr = null;
                if (selectionStart === selectionEnd) {
                    let deleteChar = inputValue.charAt(selectionStart - 1);
                    let decimalCharIndex = inputValue.search(this._decimal);
                    this._decimal.lastIndex = 0;
                    if (this.isNumeralChar(deleteChar)) {
                        if (this._group.test(deleteChar)) {
                            this._group.lastIndex = 0;
                            newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                        }
                        else if (this._decimal.test(deleteChar)) {
                            this._decimal.lastIndex = 0;
                            this.input.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
                        }
                        else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                        }
                        else {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                        }
                    }
                    if (newValueStr != null) {
                        this.updateValue(event, newValueStr, 'delete-single');
                    }
                }
                else {
                    newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                    this.updateValue(event, newValueStr, 'delete-range');
                }
                break;
            }
            default:
                break;
        }
    }
    onInputKeyPress(event) {
        event.preventDefault();
        let code = event.which || event.keyCode;
        let char = String.fromCharCode(code);
        if ((48 <= code && code <= 57) || this.isMinusSign(char)) {
            this.insert(event, char);
        }
    }
    onPaste(event) {
        event.preventDefault();
        let data = (event.clipboardData || window['clipboardData']).getData('Text');
        if (data) {
            let filteredData = this.parseValue(data);
            if (filteredData != null) {
                this.insert(event, filteredData.toString());
            }
        }
    }
    onInputClick() {
        this.initCursor();
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        let newValue = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValue);
        this.input.nativeElement.setAttribute('aria-valuenow', newValue);
        this.updateModel(event, newValue);
        this.onBlur.emit(event);
    }
    onUpButtonMouseDown(event) {
        this.input.nativeElement.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
    }
    onUpButtonMouseUp() {
        this.clearTimer();
    }
    onUpButtonMouseLeave() {
        this.clearTimer();
    }
    onUpButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, 1);
        }
    }
    onUpButtonKeyUp() {
        this.clearTimer();
    }
    onDownButtonMouseDown(event) {
        this.input.nativeElement.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
    }
    onDownButtonMouseUp() {
        this.clearTimer();
    }
    onDownButtonMouseLeave() {
        this.clearTimer();
    }
    onDownButtonKeyUp() {
        this.clearTimer();
    }
    onDownButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, -1);
        }
    }
    spin(event, dir) {
        let step = this.step * dir;
        let currentValue = this.parseValue(this.input.nativeElement.value) || 0;
        let newValue = this.validateValue(currentValue + step);
        if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
            return;
        }
        this.updateInput(newValue, 'spin');
        this.updateModel(event, newValue);
    }
    repeat(event, interval, dir) {
        let i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(() => {
            this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
    }
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    insert(event, text) {
        let selectionStart = this.input.nativeElement.selectionStart;
        let selectionEnd = this.input.nativeElement.selectionEnd;
        let inputValue = this.input.nativeElement.value.trim();
        let maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
        let newValueStr;
        let decimalCharIndex = inputValue.search(this._decimal);
        this._decimal.lastIndex = 0;
        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
            if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {
                newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length);
                this.updateValue(event, newValueStr, 'insert');
            }
        }
        else {
            newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, 'insert');
        }
    }
    insertText(value, text, start, end) {
        let newValueStr;
        if ((end - start) === value.length)
            newValueStr = text;
        else if (start === 0)
            newValueStr = text + value.slice(end);
        else if (end === value.length)
            newValueStr = value.slice(0, start) + text;
        else
            newValueStr = value.slice(0, start) + text + value.slice(end);
        return newValueStr;
    }
    initCursor() {
        let selectionStart = this.input.nativeElement.selectionStart;
        let inputValue = this.input.nativeElement.value;
        let valueLength = inputValue.length;
        let index = null;
        let char = inputValue.charAt(selectionStart);
        if (this.isNumeralChar(char)) {
            return;
        }
        //left
        let i = selectionStart - 1;
        while (i >= 0) {
            char = inputValue.charAt(i);
            if (this.isNumeralChar(char)) {
                index = i;
                break;
            }
            else {
                i--;
            }
        }
        if (index !== null) {
            this.input.nativeElement.setSelectionRange(index + 1, index + 1);
        }
        else {
            i = selectionStart + 1;
            while (i < valueLength) {
                char = inputValue.charAt(i);
                if (this.isNumeralChar(char)) {
                    index = i;
                    break;
                }
                else {
                    i++;
                }
            }
            if (index !== null) {
                this.input.nativeElement.setSelectionRange(index, index);
            }
        }
    }
    updateInput(value, operation) {
        let currentLength = this.input.nativeElement.value.length;
        if (currentLength === 0) {
            this.input.nativeElement.value = this.formatValue(value);
            this.input.nativeElement.setSelectionRange(0, 0);
            this.initCursor();
            this.input.nativeElement.setSelectionRange(this.input.nativeElement.selectionStart + 1, this.input.nativeElement.selectionStart + 1);
        }
        else {
            let selectionStart = this.input.nativeElement.selectionEnd;
            let selectionEnd = this.input.nativeElement.selectionEnd;
            let formattedValue = this.formatValue(value);
            if (this.maxlength && this.maxlength < formattedValue.length) {
                return;
            }
            this.input.nativeElement.value = this.formatValue(value);
            let newLength = this.input.nativeElement.value.length;
            if (newLength === currentLength) {
                if (operation === 'insert')
                    this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
                else if (operation === 'delete-single')
                    this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
                else if (operation === 'delete-range')
                    this.input.nativeElement.setSelectionRange(selectionStart, selectionStart);
                else if (operation === 'spin')
                    this.input.nativeElement.setSelectionRange(selectionStart, selectionEnd);
            }
            else {
                selectionEnd = selectionEnd + (newLength - currentLength);
                this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
        }
        this.input.nativeElement.setAttribute('aria-valuenow', value);
    }
    updateModel(event, value) {
        this.value = value;
        this.onModelChange(value);
    }
    updateValue(event, valueStr, operation) {
        if (valueStr != null) {
            let newValue = this.parseValue(valueStr);
            this.updateInput(newValue, operation);
        }
    }
    validateValue(value) {
        if (this.min !== null && value < this.min) {
            return this.min;
        }
        if (this.max !== null && value > this.max) {
            return this.max;
        }
        return value;
    }
    deleteRange(value, start, end) {
        let newValueStr;
        if ((end - start) === value.length)
            newValueStr = '';
        else if (start === 0)
            newValueStr = value.slice(end);
        else if (end === value.length)
            newValueStr = value.slice(0, start);
        else
            newValueStr = value.slice(0, start) + value.slice(end);
        return newValueStr;
    }
    isNumeralChar(char) {
        if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
            this.resetRegex();
            return true;
        }
        return false;
    }
    isMinusSign(char) {
        if (this._minusSign.test(char)) {
            this._minusSign.lastIndex = 0;
            return true;
        }
        return false;
    }
    parseValue(text) {
        let filteredText = text.trim()
            .replace(/\s/g, '')
            .replace(this._currency, '')
            .replace(this._group, '')
            .replace(this._suffix, '')
            .replace(this._prefix, '')
            .replace(this._minusSign, '-')
            .replace(this._decimal, '.')
            .replace(this._numeral, this._index);
        if (filteredText) {
            let parsedValue = +filteredText;
            return isNaN(parsedValue) ? null : parsedValue;
        }
        return null;
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
    }
    getOptions() {
        return {
            localeMatcher: this.localeMatcher,
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            useGrouping: this.useGrouping,
            minimumFractionDigits: this.minFractionDigits,
            maximumFractionDigits: this.maxFractionDigits
        };
    }
    getDecimalExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
        return new RegExp(`[${formatter.format(1.1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getGroupingExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true });
        return new RegExp(`[${formatter.format(1000).trim().replace(this._numeral, '')}]`, 'g');
    }
    getMinusSignExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
        return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getCurrencyExpression() {
        if (this.currency) {
            const formatter = new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency, currencyDisplay: this.currencyDisplay });
            return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._decimal, '').replace(this._group, '')}]`, 'g');
        }
        return new RegExp(`[]`, 'g');
    }
    filled() {
        return (this.value != null && this.value.toString().length > 0);
    }
    resetRegex() {
        this._numeral.lastIndex = 0;
        this._decimal.lastIndex = 0;
        this._group.lastIndex = 0;
        this._minusSign.lastIndex = 0;
    }
};
InputNumber.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], InputNumber.prototype, "showButtons", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], InputNumber.prototype, "format", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "buttonLayout", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "prefix", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "locale", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "suffix", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "localeMatcher", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "currency", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "currencyDisplay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], InputNumber.prototype, "useGrouping", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], InputNumber.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "inputId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "styleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], InputNumber.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], InputNumber.prototype, "maxlength", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "tabindex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "ariaLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], InputNumber.prototype, "ariaRequired", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], InputNumber.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "autocomplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], InputNumber.prototype, "min", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], InputNumber.prototype, "max", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], InputNumber.prototype, "minFractionDigits", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], InputNumber.prototype, "maxFractionDigits", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "incrementButtonClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "decrementButtonClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "incrementButtonIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "decrementButtonIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], InputNumber.prototype, "mode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], InputNumber.prototype, "step", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], InputNumber.prototype, "input", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], InputNumber.prototype, "onFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], InputNumber.prototype, "onBlur", void 0);
InputNumber = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-inputNumber',
        template: `
        <span [ngClass]="{'ui-inputnumber ui-widget': true, 'ui-inputwrapper-filled': this.filled(), 'ui-inputwrapper-focus': this.focused,
                'ui-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked', 'ui-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal',
                'ui-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'}">
            <input #input class="ui-inputnumber-input" pInputText [value]="formattedValue()" [attr.placeholder]="placeholder" [attr.title]="title" [attr.id]="inputId"
                [attr.size]="size" [attr.name]="name" [attr.autocomplete]="autocomplete" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [attr.aria-label]="ariaLabel"
                [attr.aria-required]="ariaRequired" [disabled]="disabled" [attr.required]="required" [attr.aria-valumin]="min" [attr.aria-valuemax]="max"
                (input)="onInput($event)" (keydown)="onInputKeyDown($event)" (keypress)="onInputKeyPress($event)" (paste)="onPaste($event)" (click)="onInputClick()"
                (focus)="onInputFocus($event)" (blur)="onInputBlur($event)">
            <span class="ui-inputnumber-button-group" *ngIf="showButtons && buttonLayout === 'stacked'">
                <button type="button" pButton [ngClass]="{'ui-inputnumber-button ui-inputnumber-button-up': true}" [class]="incrementButtonClass" [icon]="incrementButtonIcon" [disabled]="disabled"
                    (mousedown)="this.onUpButtonMouseDown($event)" (mouseup)="onUpButtonMouseUp()" (mouseleave)="onUpButtonMouseLeave()" (keydown)="onUpButtonKeyDown($event)" (keyup)="onUpButtonKeyUp()"></button>
                <button type="button" pButton [ngClass]="{'ui-inputnumber-button ui-inputnumber-button-down': true}" [class]="decrementButtonClass" [icon]="decrementButtonIcon" [disabled]="disabled"
                    (mousedown)="this.onDownButtonMouseDown($event)" (mouseup)="onDownButtonMouseUp()" (mouseleave)="onDownButtonMouseLeave()" (keydown)="onDownButtonKeyDown($event)" (keyup)="onDownButtonKeyUp()"></button>
            </span>
            <button type="button" pButton [ngClass]="{'ui-inputnumber-button ui-inputnumber-button-up': true}" [class]="incrementButtonClass" [icon]="incrementButtonIcon" *ngIf="showButtons && buttonLayout !== 'stacked'" [disabled]="disabled"
                (mousedown)="this.onUpButtonMouseDown($event)" (mouseup)="onUpButtonMouseUp()" (mouseleave)="onUpButtonMouseLeave()" (keydown)="onUpButtonKeyDown($event)" (keyup)="onUpButtonKeyUp()"></button>
            <button type="button" pButton [ngClass]="{'ui-inputnumber-button ui-inputnumber-button-down': true}" [class]="decrementButtonClass" [icon]="decrementButtonIcon" *ngIf="showButtons && buttonLayout !== 'stacked'" [disabled]="disabled"
                (mousedown)="this.onDownButtonMouseDown($event)" (mouseup)="onDownButtonMouseUp()" (mouseleave)="onDownButtonMouseLeave()" (keydown)="onDownButtonKeyDown($event)" (keyup)="onDownButtonKeyUp()"></button>
        </span>
    `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        providers: [INPUTNUMBER_VALUE_ACCESSOR]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], InputNumber);

let InputNumberModule = class InputNumberModule {
};
InputNumberModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]],
        exports: [InputNumber],
        declarations: [InputNumber]
    })
], InputNumberModule);



/***/ }),

/***/ "./src/app/components/inputnumber/public_api.ts":
/*!******************************************************!*\
  !*** ./src/app/components/inputnumber/public_api.ts ***!
  \******************************************************/
/*! exports provided: INPUTNUMBER_VALUE_ACCESSOR, InputNumber, InputNumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inputnumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputnumber */ "./src/app/components/inputnumber/inputnumber.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INPUTNUMBER_VALUE_ACCESSOR", function() { return _inputnumber__WEBPACK_IMPORTED_MODULE_0__["INPUTNUMBER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputNumber", function() { return _inputnumber__WEBPACK_IMPORTED_MODULE_0__["InputNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputNumberModule", function() { return _inputnumber__WEBPACK_IMPORTED_MODULE_0__["InputNumberModule"]; });




/***/ }),

/***/ "./src/app/components/public_api.ts":
/*!******************************************!*\
  !*** ./src/app/components/public_api.ts ***!
  \******************************************/
/*! exports provided: AccordionTab, Accordion, AccordionModule, AUTOCOMPLETE_VALUE_ACCESSOR, AutoComplete, AutoCompleteModule, BlockUI, BlockUIModule, Breadcrumb, BreadcrumbModule, ButtonDirective, Button, ButtonModule, CALENDAR_VALUE_ACCESSOR, Calendar, CalendarModule, Captcha, CaptchaModule, Card, CardModule, Carousel, CarouselModule, UIChart, ChartModule, CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule, CHIPS_VALUE_ACCESSOR, Chips, ChipsModule, CodeHighlighter, CodeHighlighterModule, COLORPICKER_VALUE_ACCESSOR, ColorPicker, ColorPickerModule, ConfirmationService, MessageService, Header, Footer, PrimeTemplate, SharedModule, TreeDragDropService, ConfirmDialog, ConfirmDialogModule, ContextMenuSub, ContextMenu, ContextMenuModule, DataView, DataViewLayoutOptions, DataViewModule, DeferredLoader, DeferModule, Dialog, DialogModule, Draggable, Droppable, DragDropModule, DROPDOWN_VALUE_ACCESSOR, DropdownItem, Dropdown, DropdownModule, DialogService, DynamicDialogComponent, DynamicDialogModule, DynamicDialogConfig, DynamicDialogInjector, DynamicDialogRef, EDITOR_VALUE_ACCESSOR, Editor, EditorModule, Fieldset, FieldsetModule, FileUpload, FileUploadModule, FocusTrap, FocusTrapModule, FullCalendar, FullCalendarModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, GalleriaModule, GMap, GMapModule, InplaceDisplay, InplaceContent, Inplace, InplaceModule, INPUTMASK_VALUE_ACCESSOR, InputMask, InputMaskModule, INPUTNUMBER_VALUE_ACCESSOR, InputNumber, InputNumberModule, INPUTSWITCH_VALUE_ACCESSOR, InputSwitch, InputSwitchModule, InputText, InputTextModule, InputTextarea, InputTextareaModule, KEYFILTER_VALIDATOR, KeyFilter, KeyFilterModule, Lightbox, LightboxModule, LISTBOX_VALUE_ACCESSOR, Listbox, ListboxModule, MegaMenu, MegaMenuModule, MenuItemContent, Menu, MenuModule, MenubarSub, Menubar, MenubarModule, UIMessage, MessageModule, Messages, MessagesModule, MULTISELECT_VALUE_ACCESSOR, MultiSelectItem, MultiSelect, MultiSelectModule, OrderList, OrderListModule, OrganizationChartNode, OrganizationChart, OrganizationChartModule, OverlayPanel, OverlayPanelModule, Paginator, PaginatorModule, Panel, PanelModule, BasePanelMenuItem, PanelMenuSub, PanelMenu, PanelMenuModule, Password, PasswordModule, PickList, PickListModule, ProgressBar, ProgressBarModule, ProgressSpinner, ProgressSpinnerModule, RADIO_VALUE_ACCESSOR, RadioButton, RadioButtonModule, RATING_VALUE_ACCESSOR, Rating, RatingModule, ScrollPanel, ScrollPanelModule, SELECTBUTTON_VALUE_ACCESSOR, SelectButton, SelectButtonModule, Sidebar, SidebarModule, SlideMenuSub, SlideMenu, SlideMenuModule, SLIDER_VALUE_ACCESSOR, Slider, SliderModule, SPINNER_VALUE_ACCESSOR, Spinner, SpinnerModule, SplitButton, SplitButtonModule, Steps, StepsModule, TableService, Table, TableBody, ScrollableView, SortableColumn, SortIcon, SelectableRow, SelectableRowDblClick, ContextMenuRow, RowToggler, ResizableColumn, ReorderableColumn, EditableColumn, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, CellEditor, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, TableModule, TabMenu, TabMenuModule, TabViewNav, TabPanel, TabView, TabViewModule, Terminal, TerminalModule, TerminalService, TieredMenuSub, TieredMenu, TieredMenuModule, ToastItem, Toast, ToastModule, TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButton, ToggleButtonModule, Toolbar, ToolbarModule, Tooltip, TooltipModule, UITreeNode, Tree, TreeModule, TreeTableService, TreeTable, TTBody, TTScrollableView, TTSortableColumn, TTSortIcon, TTResizableColumn, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, TTRow, TreeTableToggler, TreeTableModule, TRISTATECHECKBOX_VALUE_ACCESSOR, TriStateCheckbox, TriStateCheckboxModule, VirtualScroller, VirtualScrollerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/accordion */ "./src/app/components/accordion/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionTab", function() { return primeng_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return primeng_accordion__WEBPACK_IMPORTED_MODULE_0__["Accordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return primeng_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionModule"]; });

/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/autocomplete */ "./src/app/components/autocomplete/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_VALUE_ACCESSOR", function() { return primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1__["AUTOCOMPLETE_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function() { return primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteModule"]; });

/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/blockui */ "./src/app/components/blockui/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockUI", function() { return primeng_blockui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockUIModule", function() { return primeng_blockui__WEBPACK_IMPORTED_MODULE_2__["BlockUIModule"]; });

/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/breadcrumb */ "./src/app/components/breadcrumb/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["Breadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"]; });

/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return primeng_button__WEBPACK_IMPORTED_MODULE_4__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]; });

/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/calendar */ "./src/app/components/calendar/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_VALUE_ACCESSOR", function() { return primeng_calendar__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return primeng_calendar__WEBPACK_IMPORTED_MODULE_5__["Calendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return primeng_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"]; });

/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/captcha */ "./src/app/components/captcha/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Captcha", function() { return primeng_captcha__WEBPACK_IMPORTED_MODULE_6__["Captcha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptchaModule", function() { return primeng_captcha__WEBPACK_IMPORTED_MODULE_6__["CaptchaModule"]; });

/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./src/app/components/card/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return primeng_card__WEBPACK_IMPORTED_MODULE_7__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"]; });

/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/carousel */ "./src/app/components/carousel/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return primeng_carousel__WEBPACK_IMPORTED_MODULE_8__["Carousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return primeng_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"]; });

/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chart */ "./src/app/components/chart/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIChart", function() { return primeng_chart__WEBPACK_IMPORTED_MODULE_9__["UIChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return primeng_chart__WEBPACK_IMPORTED_MODULE_9__["ChartModule"]; });

/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ "./src/app/components/checkbox/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["CHECKBOX_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxModule"]; });

/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chips */ "./src/app/components/chips/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHIPS_VALUE_ACCESSOR", function() { return primeng_chips__WEBPACK_IMPORTED_MODULE_11__["CHIPS_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chips", function() { return primeng_chips__WEBPACK_IMPORTED_MODULE_11__["Chips"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsModule", function() { return primeng_chips__WEBPACK_IMPORTED_MODULE_11__["ChipsModule"]; });

/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function() { return primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__["CodeHighlighter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function() { return primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_12__["CodeHighlighterModule"]; });

/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/colorpicker */ "./src/app/components/colorpicker/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLORPICKER_VALUE_ACCESSOR", function() { return primeng_colorpicker__WEBPACK_IMPORTED_MODULE_13__["COLORPICKER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return primeng_colorpicker__WEBPACK_IMPORTED_MODULE_13__["ColorPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return primeng_colorpicker__WEBPACK_IMPORTED_MODULE_13__["ColorPickerModule"]; });

/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return primeng_api__WEBPACK_IMPORTED_MODULE_14__["ConfirmationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return primeng_api__WEBPACK_IMPORTED_MODULE_14__["MessageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return primeng_api__WEBPACK_IMPORTED_MODULE_14__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return primeng_api__WEBPACK_IMPORTED_MODULE_14__["Footer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimeTemplate", function() { return primeng_api__WEBPACK_IMPORTED_MODULE_14__["PrimeTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return primeng_api__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return primeng_api__WEBPACK_IMPORTED_MODULE_14__["TreeDragDropService"]; });

/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ "./src/app/components/confirmdialog/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function() { return primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"]; });

/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/contextmenu */ "./src/app/components/contextmenu/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuSub", function() { return primeng_contextmenu__WEBPACK_IMPORTED_MODULE_16__["ContextMenuSub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return primeng_contextmenu__WEBPACK_IMPORTED_MODULE_16__["ContextMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return primeng_contextmenu__WEBPACK_IMPORTED_MODULE_16__["ContextMenuModule"]; });

/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dataview */ "./src/app/components/dataview/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataView", function() { return primeng_dataview__WEBPACK_IMPORTED_MODULE_17__["DataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataViewLayoutOptions", function() { return primeng_dataview__WEBPACK_IMPORTED_MODULE_17__["DataViewLayoutOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataViewModule", function() { return primeng_dataview__WEBPACK_IMPORTED_MODULE_17__["DataViewModule"]; });

/* harmony import */ var primeng_defer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/defer */ "./src/app/components/defer/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferredLoader", function() { return primeng_defer__WEBPACK_IMPORTED_MODULE_18__["DeferredLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferModule", function() { return primeng_defer__WEBPACK_IMPORTED_MODULE_18__["DeferModule"]; });

/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ "./src/app/components/dialog/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"]; });

/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dragdrop */ "./src/app/components/dragdrop/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return primeng_dragdrop__WEBPACK_IMPORTED_MODULE_20__["Draggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return primeng_dragdrop__WEBPACK_IMPORTED_MODULE_20__["Droppable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return primeng_dragdrop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"]; });

/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./src/app/components/dropdown/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function() { return primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DROPDOWN_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["Dropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"]; });

/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dynamicdialog */ "./src/app/components/dynamicdialog/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__["DialogService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogComponent", function() { return primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__["DynamicDialogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogModule", function() { return primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__["DynamicDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function() { return primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__["DynamicDialogConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogInjector", function() { return primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__["DynamicDialogInjector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function() { return primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_22__["DynamicDialogRef"]; });

/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/editor */ "./src/app/components/editor/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDITOR_VALUE_ACCESSOR", function() { return primeng_editor__WEBPACK_IMPORTED_MODULE_23__["EDITOR_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return primeng_editor__WEBPACK_IMPORTED_MODULE_23__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return primeng_editor__WEBPACK_IMPORTED_MODULE_23__["EditorModule"]; });

/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/fieldset */ "./src/app/components/fieldset/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return primeng_fieldset__WEBPACK_IMPORTED_MODULE_24__["Fieldset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsetModule", function() { return primeng_fieldset__WEBPACK_IMPORTED_MODULE_24__["FieldsetModule"]; });

/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/fileupload */ "./src/app/components/fileupload/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return primeng_fileupload__WEBPACK_IMPORTED_MODULE_25__["FileUpload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return primeng_fileupload__WEBPACK_IMPORTED_MODULE_25__["FileUploadModule"]; });

/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/focustrap */ "./src/app/components/focustrap/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return primeng_focustrap__WEBPACK_IMPORTED_MODULE_26__["FocusTrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function() { return primeng_focustrap__WEBPACK_IMPORTED_MODULE_26__["FocusTrapModule"]; });

/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/fullcalendar */ "./src/app/components/fullcalendar/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullCalendar", function() { return primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_27__["FullCalendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullCalendarModule", function() { return primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_27__["FullCalendarModule"]; });

/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/galleria */ "./src/app/components/galleria/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Galleria", function() { return primeng_galleria__WEBPACK_IMPORTED_MODULE_28__["Galleria"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleriaContent", function() { return primeng_galleria__WEBPACK_IMPORTED_MODULE_28__["GalleriaContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleriaItemSlot", function() { return primeng_galleria__WEBPACK_IMPORTED_MODULE_28__["GalleriaItemSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleriaItem", function() { return primeng_galleria__WEBPACK_IMPORTED_MODULE_28__["GalleriaItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleriaThumbnails", function() { return primeng_galleria__WEBPACK_IMPORTED_MODULE_28__["GalleriaThumbnails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleriaModule", function() { return primeng_galleria__WEBPACK_IMPORTED_MODULE_28__["GalleriaModule"]; });

/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/gmap */ "./src/app/components/gmap/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GMap", function() { return primeng_gmap__WEBPACK_IMPORTED_MODULE_29__["GMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GMapModule", function() { return primeng_gmap__WEBPACK_IMPORTED_MODULE_29__["GMapModule"]; });

/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inplace */ "./src/app/components/inplace/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InplaceDisplay", function() { return primeng_inplace__WEBPACK_IMPORTED_MODULE_30__["InplaceDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InplaceContent", function() { return primeng_inplace__WEBPACK_IMPORTED_MODULE_30__["InplaceContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inplace", function() { return primeng_inplace__WEBPACK_IMPORTED_MODULE_30__["Inplace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InplaceModule", function() { return primeng_inplace__WEBPACK_IMPORTED_MODULE_30__["InplaceModule"]; });

/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/inputmask */ "./src/app/components/inputmask/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INPUTMASK_VALUE_ACCESSOR", function() { return primeng_inputmask__WEBPACK_IMPORTED_MODULE_31__["INPUTMASK_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return primeng_inputmask__WEBPACK_IMPORTED_MODULE_31__["InputMask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMaskModule", function() { return primeng_inputmask__WEBPACK_IMPORTED_MODULE_31__["InputMaskModule"]; });

/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputnumber */ "./src/app/components/inputnumber/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INPUTNUMBER_VALUE_ACCESSOR", function() { return primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__["INPUTNUMBER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputNumber", function() { return primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__["InputNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputNumberModule", function() { return primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__["InputNumberModule"]; });

/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/inputswitch */ "./src/app/components/inputswitch/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INPUTSWITCH_VALUE_ACCESSOR", function() { return primeng_inputswitch__WEBPACK_IMPORTED_MODULE_33__["INPUTSWITCH_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputSwitch", function() { return primeng_inputswitch__WEBPACK_IMPORTED_MODULE_33__["InputSwitch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputSwitchModule", function() { return primeng_inputswitch__WEBPACK_IMPORTED_MODULE_33__["InputSwitchModule"]; });

/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__["InputText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__["InputTextModule"]; });

/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inputtextarea */ "./src/app/components/inputtextarea/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextarea", function() { return primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__["InputTextarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextareaModule", function() { return primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__["InputTextareaModule"]; });

/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/keyfilter */ "./src/app/components/keyfilter/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEYFILTER_VALIDATOR", function() { return primeng_keyfilter__WEBPACK_IMPORTED_MODULE_36__["KEYFILTER_VALIDATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyFilter", function() { return primeng_keyfilter__WEBPACK_IMPORTED_MODULE_36__["KeyFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyFilterModule", function() { return primeng_keyfilter__WEBPACK_IMPORTED_MODULE_36__["KeyFilterModule"]; });

/* harmony import */ var primeng_lightbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/lightbox */ "./src/app/components/lightbox/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lightbox", function() { return primeng_lightbox__WEBPACK_IMPORTED_MODULE_37__["Lightbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightboxModule", function() { return primeng_lightbox__WEBPACK_IMPORTED_MODULE_37__["LightboxModule"]; });

/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/listbox */ "./src/app/components/listbox/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTBOX_VALUE_ACCESSOR", function() { return primeng_listbox__WEBPACK_IMPORTED_MODULE_38__["LISTBOX_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Listbox", function() { return primeng_listbox__WEBPACK_IMPORTED_MODULE_38__["Listbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListboxModule", function() { return primeng_listbox__WEBPACK_IMPORTED_MODULE_38__["ListboxModule"]; });

/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/megamenu */ "./src/app/components/megamenu/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MegaMenu", function() { return primeng_megamenu__WEBPACK_IMPORTED_MODULE_39__["MegaMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MegaMenuModule", function() { return primeng_megamenu__WEBPACK_IMPORTED_MODULE_39__["MegaMenuModule"]; });

/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/menu */ "./src/app/components/menu/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItemContent", function() { return primeng_menu__WEBPACK_IMPORTED_MODULE_40__["MenuItemContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return primeng_menu__WEBPACK_IMPORTED_MODULE_40__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return primeng_menu__WEBPACK_IMPORTED_MODULE_40__["MenuModule"]; });

/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/menubar */ "./src/app/components/menubar/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenubarSub", function() { return primeng_menubar__WEBPACK_IMPORTED_MODULE_41__["MenubarSub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menubar", function() { return primeng_menubar__WEBPACK_IMPORTED_MODULE_41__["Menubar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenubarModule", function() { return primeng_menubar__WEBPACK_IMPORTED_MODULE_41__["MenubarModule"]; });

/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/message */ "./src/app/components/message/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIMessage", function() { return primeng_message__WEBPACK_IMPORTED_MODULE_42__["UIMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return primeng_message__WEBPACK_IMPORTED_MODULE_42__["MessageModule"]; });

/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/messages */ "./src/app/components/messages/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return primeng_messages__WEBPACK_IMPORTED_MODULE_43__["Messages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return primeng_messages__WEBPACK_IMPORTED_MODULE_43__["MessagesModule"]; });

/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/multiselect */ "./src/app/components/multiselect/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MULTISELECT_VALUE_ACCESSOR", function() { return primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__["MULTISELECT_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelectItem", function() { return primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__["MultiSelectItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__["MultiSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelectModule", function() { return primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__["MultiSelectModule"]; });

/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/orderlist */ "./src/app/components/orderlist/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderList", function() { return primeng_orderlist__WEBPACK_IMPORTED_MODULE_45__["OrderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderListModule", function() { return primeng_orderlist__WEBPACK_IMPORTED_MODULE_45__["OrderListModule"]; });

/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/organizationchart */ "./src/app/components/organizationchart/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartNode", function() { return primeng_organizationchart__WEBPACK_IMPORTED_MODULE_46__["OrganizationChartNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganizationChart", function() { return primeng_organizationchart__WEBPACK_IMPORTED_MODULE_46__["OrganizationChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartModule", function() { return primeng_organizationchart__WEBPACK_IMPORTED_MODULE_46__["OrganizationChartModule"]; });

/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/overlaypanel */ "./src/app/components/overlaypanel/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayPanel", function() { return primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_47__["OverlayPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayPanelModule", function() { return primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_47__["OverlayPanelModule"]; });

/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/paginator */ "./src/app/components/paginator/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return primeng_paginator__WEBPACK_IMPORTED_MODULE_48__["Paginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorModule", function() { return primeng_paginator__WEBPACK_IMPORTED_MODULE_48__["PaginatorModule"]; });

/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/panel */ "./src/app/components/panel/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return primeng_panel__WEBPACK_IMPORTED_MODULE_49__["Panel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return primeng_panel__WEBPACK_IMPORTED_MODULE_49__["PanelModule"]; });

/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/panelmenu */ "./src/app/components/panelmenu/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePanelMenuItem", function() { return primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__["BasePanelMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelMenuSub", function() { return primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__["PanelMenuSub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelMenu", function() { return primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__["PanelMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelMenuModule", function() { return primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__["PanelMenuModule"]; });

/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/password */ "./src/app/components/password/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Password", function() { return primeng_password__WEBPACK_IMPORTED_MODULE_51__["Password"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordModule", function() { return primeng_password__WEBPACK_IMPORTED_MODULE_51__["PasswordModule"]; });

/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/picklist */ "./src/app/components/picklist/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickList", function() { return primeng_picklist__WEBPACK_IMPORTED_MODULE_52__["PickList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickListModule", function() { return primeng_picklist__WEBPACK_IMPORTED_MODULE_52__["PickListModule"]; });

/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/progressbar */ "./src/app/components/progressbar/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return primeng_progressbar__WEBPACK_IMPORTED_MODULE_53__["ProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return primeng_progressbar__WEBPACK_IMPORTED_MODULE_53__["ProgressBarModule"]; });

/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/progressspinner */ "./src/app/components/progressspinner/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinner", function() { return primeng_progressspinner__WEBPACK_IMPORTED_MODULE_54__["ProgressSpinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerModule", function() { return primeng_progressspinner__WEBPACK_IMPORTED_MODULE_54__["ProgressSpinnerModule"]; });

/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/radiobutton */ "./src/app/components/radiobutton/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_VALUE_ACCESSOR", function() { return primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__["RADIO_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__["RadioButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonModule", function() { return primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__["RadioButtonModule"]; });

/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/rating */ "./src/app/components/rating/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RATING_VALUE_ACCESSOR", function() { return primeng_rating__WEBPACK_IMPORTED_MODULE_56__["RATING_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return primeng_rating__WEBPACK_IMPORTED_MODULE_56__["Rating"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return primeng_rating__WEBPACK_IMPORTED_MODULE_56__["RatingModule"]; });

/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/scrollpanel */ "./src/app/components/scrollpanel/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollPanel", function() { return primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_57__["ScrollPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollPanelModule", function() { return primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_57__["ScrollPanelModule"]; });

/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/selectbutton */ "./src/app/components/selectbutton/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTBUTTON_VALUE_ACCESSOR", function() { return primeng_selectbutton__WEBPACK_IMPORTED_MODULE_58__["SELECTBUTTON_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectButton", function() { return primeng_selectbutton__WEBPACK_IMPORTED_MODULE_58__["SelectButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectButtonModule", function() { return primeng_selectbutton__WEBPACK_IMPORTED_MODULE_58__["SelectButtonModule"]; });

/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/sidebar */ "./src/app/components/sidebar/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return primeng_sidebar__WEBPACK_IMPORTED_MODULE_59__["Sidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return primeng_sidebar__WEBPACK_IMPORTED_MODULE_59__["SidebarModule"]; });

/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/slidemenu */ "./src/app/components/slidemenu/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideMenuSub", function() { return primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__["SlideMenuSub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideMenu", function() { return primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__["SlideMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideMenuModule", function() { return primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__["SlideMenuModule"]; });

/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/slider */ "./src/app/components/slider/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SLIDER_VALUE_ACCESSOR", function() { return primeng_slider__WEBPACK_IMPORTED_MODULE_61__["SLIDER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return primeng_slider__WEBPACK_IMPORTED_MODULE_61__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return primeng_slider__WEBPACK_IMPORTED_MODULE_61__["SliderModule"]; });

/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/spinner */ "./src/app/components/spinner/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPINNER_VALUE_ACCESSOR", function() { return primeng_spinner__WEBPACK_IMPORTED_MODULE_62__["SPINNER_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return primeng_spinner__WEBPACK_IMPORTED_MODULE_62__["Spinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return primeng_spinner__WEBPACK_IMPORTED_MODULE_62__["SpinnerModule"]; });

/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/splitbutton */ "./src/app/components/splitbutton/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitButton", function() { return primeng_splitbutton__WEBPACK_IMPORTED_MODULE_63__["SplitButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitButtonModule", function() { return primeng_splitbutton__WEBPACK_IMPORTED_MODULE_63__["SplitButtonModule"]; });

/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/steps */ "./src/app/components/steps/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return primeng_steps__WEBPACK_IMPORTED_MODULE_64__["Steps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StepsModule", function() { return primeng_steps__WEBPACK_IMPORTED_MODULE_64__["StepsModule"]; });

/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/table */ "./src/app/components/table/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["TableService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["TableBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollableView", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["ScrollableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableColumn", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["SortableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortIcon", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["SortIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectableRow", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["SelectableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectableRowDblClick", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["SelectableRowDblClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenuRow", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["ContextMenuRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowToggler", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["RowToggler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizableColumn", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["ResizableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReorderableColumn", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["ReorderableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableColumn", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["EditableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableRow", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["EditableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitEditableRow", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["InitEditableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveEditableRow", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["SaveEditableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancelEditableRow", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["CancelEditableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellEditor", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["CellEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableRadioButton", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["TableRadioButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableCheckbox", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["TableCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableHeaderCheckbox", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["TableHeaderCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReorderableRowHandle", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["ReorderableRowHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReorderableRow", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["ReorderableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return primeng_table__WEBPACK_IMPORTED_MODULE_65__["TableModule"]; });

/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/tabmenu */ "./src/app/components/tabmenu/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabMenu", function() { return primeng_tabmenu__WEBPACK_IMPORTED_MODULE_66__["TabMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabMenuModule", function() { return primeng_tabmenu__WEBPACK_IMPORTED_MODULE_66__["TabMenuModule"]; });

/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabViewNav", function() { return primeng_tabview__WEBPACK_IMPORTED_MODULE_67__["TabViewNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return primeng_tabview__WEBPACK_IMPORTED_MODULE_67__["TabPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return primeng_tabview__WEBPACK_IMPORTED_MODULE_67__["TabView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabViewModule", function() { return primeng_tabview__WEBPACK_IMPORTED_MODULE_67__["TabViewModule"]; });

/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/terminal */ "./src/app/components/terminal/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return primeng_terminal__WEBPACK_IMPORTED_MODULE_68__["Terminal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminalModule", function() { return primeng_terminal__WEBPACK_IMPORTED_MODULE_68__["TerminalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminalService", function() { return primeng_terminal__WEBPACK_IMPORTED_MODULE_68__["TerminalService"]; });

/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/tieredmenu */ "./src/app/components/tieredmenu/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TieredMenuSub", function() { return primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_69__["TieredMenuSub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TieredMenu", function() { return primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_69__["TieredMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TieredMenuModule", function() { return primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_69__["TieredMenuModule"]; });

/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/toast */ "./src/app/components/toast/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastItem", function() { return primeng_toast__WEBPACK_IMPORTED_MODULE_70__["ToastItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return primeng_toast__WEBPACK_IMPORTED_MODULE_70__["Toast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastModule", function() { return primeng_toast__WEBPACK_IMPORTED_MODULE_70__["ToastModule"]; });

/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/togglebutton */ "./src/app/components/togglebutton/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLEBUTTON_VALUE_ACCESSOR", function() { return primeng_togglebutton__WEBPACK_IMPORTED_MODULE_71__["TOGGLEBUTTON_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return primeng_togglebutton__WEBPACK_IMPORTED_MODULE_71__["ToggleButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModule", function() { return primeng_togglebutton__WEBPACK_IMPORTED_MODULE_71__["ToggleButtonModule"]; });

/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/toolbar */ "./src/app/components/toolbar/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return primeng_toolbar__WEBPACK_IMPORTED_MODULE_72__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarModule", function() { return primeng_toolbar__WEBPACK_IMPORTED_MODULE_72__["ToolbarModule"]; });

/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/tooltip */ "./src/app/components/tooltip/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return primeng_tooltip__WEBPACK_IMPORTED_MODULE_73__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return primeng_tooltip__WEBPACK_IMPORTED_MODULE_73__["TooltipModule"]; });

/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/tree */ "./src/app/components/tree/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UITreeNode", function() { return primeng_tree__WEBPACK_IMPORTED_MODULE_74__["UITreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return primeng_tree__WEBPACK_IMPORTED_MODULE_74__["Tree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return primeng_tree__WEBPACK_IMPORTED_MODULE_74__["TreeModule"]; });

/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/treetable */ "./src/app/components/treetable/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeTableService", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TreeTableService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeTable", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TreeTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTBody", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTScrollableView", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTScrollableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTSortableColumn", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTSortableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTSortIcon", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTSortIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTResizableColumn", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTResizableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTReorderableColumn", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTReorderableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTSelectableRow", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTSelectableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTSelectableRowDblClick", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTSelectableRowDblClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTContextMenuRow", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTContextMenuRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTCheckbox", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTHeaderCheckbox", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTHeaderCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTEditableColumn", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTEditableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeTableCellEditor", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TreeTableCellEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TTRow", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TTRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeTableToggler", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TreeTableToggler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeTableModule", function() { return primeng_treetable__WEBPACK_IMPORTED_MODULE_75__["TreeTableModule"]; });

/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./src/app/components/tristatecheckbox/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRISTATECHECKBOX_VALUE_ACCESSOR", function() { return primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_76__["TRISTATECHECKBOX_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriStateCheckbox", function() { return primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_76__["TriStateCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriStateCheckboxModule", function() { return primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_76__["TriStateCheckboxModule"]; });

/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/virtualscroller */ "./src/app/components/virtualscroller/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualScroller", function() { return primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_77__["VirtualScroller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollerModule", function() { return primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_77__["VirtualScrollerModule"]; });

















































































/***/ }),

/***/ "./src/app/showcase/components/inputnumber/inputnumberdemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/inputnumber/inputnumberdemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InputNumberDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberDemoRoutingModule", function() { return InputNumberDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inputnumberdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputnumberdemo */ "./src/app/showcase/components/inputnumber/inputnumberdemo.ts");




let InputNumberDemoRoutingModule = class InputNumberDemoRoutingModule {
};
InputNumberDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _inputnumberdemo__WEBPACK_IMPORTED_MODULE_3__["InputNumberDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], InputNumberDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/inputnumber/inputnumberdemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/inputnumber/inputnumberdemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: InputNumberDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberDemoModule", function() { return InputNumberDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inputnumberdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputnumberdemo */ "./src/app/showcase/components/inputnumber/inputnumberdemo.ts");
/* harmony import */ var _inputnumberdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputnumberdemo-routing.module */ "./src/app/showcase/components/inputnumber/inputnumberdemo-routing.module.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");
/* harmony import */ var src_app_components_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/public_api */ "./src/app/components/public_api.ts");









let InputNumberDemoModule = class InputNumberDemoModule {
};
InputNumberDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _inputnumberdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputNumberDemoRoutingModule"],
            src_app_components_public_api__WEBPACK_IMPORTED_MODULE_8__["InputNumberModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _inputnumberdemo__WEBPACK_IMPORTED_MODULE_4__["InputNumberDemo"]
        ]
    })
], InputNumberDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/inputnumber/inputnumberdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/inputnumber/inputnumberdemo.ts ***!
  \********************************************************************/
/*! exports provided: InputNumberDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberDemo", function() { return InputNumberDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputNumberDemo = class InputNumberDemo {
    constructor() {
        this.value1 = 42723;
        this.value2 = 58151;
        this.value3 = 2351.35;
        this.value4 = 50;
        this.value5 = 151351;
        this.value6 = 115744;
        this.value7 = 635524;
        this.value8 = 732762;
        this.value9 = 1500;
        this.value10 = 2500;
        this.value11 = 4250;
        this.value12 = 5002;
        this.value13 = 20;
        this.value14 = 50;
        this.value15 = 10;
        this.value16 = 20;
        this.value17 = 20;
        this.value18 = 10.50;
        this.value19 = 25;
        this.value20 = 50;
    }
};
InputNumberDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inputnumberdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputnumber/inputnumberdemo.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: ["\n        .ui-inputnumber {\n            margin-top: 1em;\n        }\n    "]
    })
], InputNumberDemo);



/***/ })

}]);
//# sourceMappingURL=components-inputnumber-inputnumberdemo-module-es2015.js.map