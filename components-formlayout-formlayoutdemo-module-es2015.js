(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-formlayout-formlayoutdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/formlayout/formlayoutdemo.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/formlayout/formlayoutdemo.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Form Layout</span>\n        <span>Form layout is a CSS utility optimized for creating forms with ease. FormLayout is not included in PrimeNG as it is provided by <a href=\"https://github.com/primefaces/primeflex\">PrimeFlex</a>,\n            a shared grid library between PrimeFaces, PrimeNG, PrimeReact and PrimeVue projects.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Vertical</h3>\n    <div class=\"ui-fluid\">\n        <div class=\"p-field\">\n            <label for=\"firstname1\">Firstname</label>\n            <input id=\"firstname1\" type=\"text\" pInputText> \n        </div>\n        <div class=\"p-field\">\n            <label for=\"lastname1\">Lastname</label>\n            <input id=\"lastname1\" type=\"text\" pInputText> \n        </div>\n    </div>\n\n    <h3>Vertical and Grid</h3>\n    <div class=\"ui-fluid p-formgrid p-grid\">\n            <div class=\"p-field p-col\">\n            <label for=\"firstname2\">Firstname</label>\n            <input id=\"firstname2\" type=\"text\" pInputText> \n        </div>\n        <div class=\"p-field p-col\">\n            <label for=\"lastname2\">Lastname</label>\n            <input id=\"lastname2\" type=\"text\" pInputText> \n        </div>\n    </div>\n\n    <h3>Horizontal and Fixed Width</h3>\n    <div class=\"p-field p-grid\">\n        <label for=\"firstname3\" class=\"p-col-fixed\" style=\"width:100px\">Firstname</label>\n        <div class=\"p-col\">\n            <input id=\"firstname3\" type=\"text\" pInputText> \n        </div>\n    </div>\n    <div class=\"p-field p-grid\">\n        <label for=\"lastname3\" class=\"p-col-fixed\" style=\"width:100px\">Lastname</label>\n        <div class=\"p-col\">\n            <input id=\"lastname3\" type=\"text\" pInputText> \n        </div>\n    </div>\n\n    <h3>Horizontal and Fluid</h3>\n    <div class=\"ui-fluid\">\n        <div class=\"p-field p-grid\">\n            <label for=\"firstname4\" class=\"p-col-12 p-md-2\">Firstname</label>\n            <div class=\"p-col-12 p-md-10\">\n                <input id=\"firstname4\" type=\"text\" pInputText> \n            </div>\n        </div>\n        <div class=\"p-field p-grid\">\n            <label for=\"lastname4\" class=\"p-col-12 p-md-2\">Lastname</label>\n            <div class=\"p-col-12 p-md-10\">\n                <input id=\"lastname4\" type=\"text\" pInputText> \n            </div>\n        </div>\n    </div>\n\n    <h3>Inline</h3>\n    <div class=\"p-formgroup-inline\">\n        <div class=\"p-field\">\n            <label for=\"firstname5\" class=\"p-sr-only\">Firstname</label>\n            <input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Firstname\"> \n        </div>\n        <div class=\"p-field\">\n            <label for=\"lastname5\" class=\"p-sr-only\">Lastname</label>\n            <input id=\"lastname5\" type=\"text\" pInputText placeholder=\"Lastname\"> \n        </div>\n        <button pButton type=\"button\" label=\"Submit\"></button>\n    </div>\n\n    <h3>Vertical Checkbox</h3>\n    <div class=\"p-field-checkbox\">\n        <p-checkbox name=\"city1\" value=\"Chicago\" [(ngModel)]=\"cities1\" inputId=\"city1\"></p-checkbox>\n        <label for=\"city1\">Chicago</label>\n    </div>\n    <div class=\"p-field-checkbox\">\n        <p-checkbox name=\"city2\" value=\"Los Angeles\" [(ngModel)]=\"cities1\" inputId=\"city2\"></p-checkbox>\n        <label for=\"city2\">Los Angeles</label>\n    </div>\n\n    <h3>Horizontal Checkbox</h3>\n    <div class=\"p-formgroup-inline\">\n        <div class=\"p-field-checkbox\">\n            <p-checkbox name=\"city3\" value=\"Chicago\" [(ngModel)]=\"cities2\" inputId=\"city3\"></p-checkbox>\n            <label for=\"city3\">Chicago</label>\n        </div>\n        <div class=\"p-field-checkbox\">\n            <p-checkbox name=\"city4\" value=\"Los Angeles\" [(ngModel)]=\"cities2\" inputId=\"city4\"></p-checkbox>\n            <label for=\"city4\">Los Angeles</label>\n        </div>\n    </div>\n\n    <h3>Vertical RadioButton</h3>\n    <div class=\"p-field-radiobutton\">\n        <p-radioButton name=\"city5\" value=\"Chicago\" [(ngModel)]=\"city1\" inputId=\"city5\"></p-radioButton>\n        <label for=\"city5\">Chicago</label>\n    </div>\n    <div class=\"p-field-radiobutton\">\n        <p-radioButton name=\"city6\" value=\"Los Angeles\" [(ngModel)]=\"city1\" inputId=\"city6\"></p-radioButton>\n        <label for=\"city6\">Los Angeles</label>\n    </div>\n\n    <h3>Horizontal RadioButton</h3>\n    <div class=\"p-formgroup-inline\">\n        <div class=\"p-field-checkbox\">\n        <p-radioButton name=\"city7\" value=\"Chicago\" [(ngModel)]=\"city2\" inputId=\"city7\"></p-radioButton>\n        <label for=\"city7\">Chicago</label>\n        </div>\n        <div class=\"p-field-checkbox\">\n            <p-radioButton name=\"city8\" value=\"Los Angeles\" [(ngModel)]=\"city2\" inputId=\"city8\"></p-radioButton>\n            <label for=\"city8\">Los Angeles</label>\n        </div>\n    </div>\n\n    <h3>Help Text</h3>\n    <div class=\"p-field ui-fluid\">\n        <label for=\"username\">Username</label>\n        <input id=\"username\" type=\"username\" pInputText aria-describedby=\"username-help\"> \n        <small id=\"username-help\">Enter your username to reset your password.</small>\n    </div>\n\n    <h3>Advanced</h3>\n    <div class=\"ui-fluid p-formgrid p-grid\">\n        <div class=\"p-field p-col-12 p-md-6\">\n            <label for=\"firstname6\">Firstname</label>\n            <input id=\"firstname6\" type=\"text\" pInputText> \n        </div>\n        <div class=\"p-field p-col-12 p-md-6\">\n            <label for=\"lastname6\">Lastname</label>\n            <input id=\"lastname6\" type=\"text\" pInputText> \n        </div>\n        <div class=\"p-field p-col-12\">\n            <label for=\"address\">Address</label>\n            <textarea id=\"address\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n        </div>\n        <div class=\"p-field p-col-12 p-md-6\">\n            <label for=\"city\">City</label>\n            <input id=\"city\" type=\"text\" pInputText> \n        </div>\n        <div class=\"p-field p-col-12 p-md-3\">\n            <label for=\"state\">State</label>\n            <p-dropdown inputId=\"state\" [options]=\"states\" [(ngModel)]=\"selectedState\" placeholder=\"Select\" optionLabel=\"name\"></p-dropdown>\n        </div>\n        <div class=\"p-field p-col-12 p-md-3\">\n            <label for=\"zip\">Zip</label>\n            <input id=\"zip\" type=\"text\" pInputText> \n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Install</h3>\n                <p>PrimeFlex is available at npm, if you have an existing application run the following command to download it to your project.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nnpm install primeflex --save\n</code>\n</pre>\n\n            <p>Then add the primeflex.css to your application, example below uses styles configuration of an Angular CLI project.</p>\n<pre>\n<code class=\"language-js\" pCode ngNonBindable>\n\"styles\": [\n  \"node_modules/primeflex/primeflex.css\"\n],\n</code>\n</pre>\n            <h3>Getting Started</h3>\n            <p>Core member of the FormLayout is the <i>.p-field</i> class that wraps the input field and the associated label.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-field\"&gt;\n    &lt;label for=\"fieldId\"&gt;Label&lt;/label&gt;\n    &lt;input id=\"fieldId\" type=\"text\" pInputText&gt; \n&lt;/div&gt;\n</code>\n</pre>\n\n            <h3>Vertical Layout</h3>\n            <p>In its simplest form, a vertical layout is created when used within <i>.p-fluid</i> which makes the components use all available width.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"ui-fluid\"&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"firstname1\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname1\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"lastname1\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname1\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n\n            <h3>Vertical Layout with Grid</h3>\n            <p>This is where FormLayout actually hooks-in to PrimeFlex with the help of <i>.p-formgrid</i> class to optimize the content for form design. Example\n            below arranges two fields to be displayed next two each other.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-fluid p-formgrid p-grid\"&gt;\n    &lt;div class=\"p-field p-col\"&gt;\n        &lt;label for=\"firstname1\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname1\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col\"&gt;\n        &lt;label for=\"lastname1\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname1\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n            <h3>Horizontal and Fixed Width</h3>\n            <p>In horizontal form, label of the field is displayed on the same row of the input as opposed to the vertical alternative. In this\n                example, label has a fixed width where container of the inputs gets the remaining space.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-field p-grid\"&gt;\n    &lt;label for=\"firstname3\" class=\"p-col-fixed\" style=\"width:100px\"&gt;Firstname&lt;/label&gt;\n    &lt;div class=\"p-col\"&gt;\n        &lt;input id=\"firstname3\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"p-field p-grid\"&gt;\n    &lt;label for=\"lastname3\" class=\"p-col-fixed\" style=\"width:100px\"&gt;Lastname&lt;/label&gt;\n    &lt;div class=\"p-col\"&gt;\n        &lt;input id=\"lastname3\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre> \n\n            <h3>Horizontal and Fluid</h3>\n            <p>Wrapping the form in the previous example with <i>.p-fluid</i> and removing the fixed width results in a fluid layout.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"ui-fluid\"&gt;\n    &lt;div class=\"p-field p-grid\"&gt;\n        &lt;label for=\"firstname\" class=\"p-col-12 p-md-2\"&gt;Firstname&lt;/label&gt;\n        &lt;div class=\"p-col-12 p-md-10\"&gt;\n            &lt;input id=\"firstname\" type=\"text\" pInputText&gt; \n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field p-grid\"&gt;\n        &lt;label for=\"lastname\" class=\"p-col-12 p-md-2\"&gt;Lastname&lt;/label&gt;\n        &lt;div class=\"p-col-12 p-md-10\"&gt;\n            &lt;input id=\"lastname\" type=\"text\" pInputText&gt; \n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre> \n\n\n            <h3>Inline</h3>\n            <p>Inline forms are used to display the content on the same row and can simply be implemented by adding <i>.p-formgroup-inline</i> to the form container. Note that per design requirements, if labels\n                are not visually hidden, it is suggested to use <i>.p-sr-only</i> to still support screen readers.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-formgroup-inline\"&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"firstname\" class=\"p-sr-only\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname\" type=\"text\" pInputText placeholder=\"Firstname\"&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"lastname\" class=\"p-sr-only\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname\" type=\"text\" pInputText placeholder=\"Lastname\"&gt; \n    &lt;/div&gt;\n    &lt;button pButton type=\"button\" label=\"Submit\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n</code>\n</pre> \n                <h3>Checkbox and RadioButton</h3>\n                <p>Checkbox and RadioButton have exclusive layout support via <i>.p-field-checkbox</i> and <i>.p-field-radiobutton</i> classes respectively.\n                    Examples here demonstrates vertical and horizontal layout alternatives.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Vertical Checkbox&lt;/h3&gt;\n&lt;div class=\"p-field-checkbox\"&gt;\n    &lt;p-checkbox name=\"city1\" value=\"Chicago\" [(ngModel)]=\"cities1\" inputId=\"city1\"&gt;&lt;/p-checkbox&gt;\n    &lt;label for=\"city1\"&gt;Chicago&lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=\"p-field-checkbox\"&gt;\n    &lt;p-checkbox name=\"city2\" value=\"Los Angeles\" [(ngModel)]=\"cities1\" inputId=\"city2\"&gt;&lt;/p-checkbox&gt;\n    &lt;label for=\"city2\"&gt;Los Angeles&lt;/label&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Horizontal Checkbox&lt;/h3&gt;\n&lt;div class=\"p-formgroup-inline\"&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n        &lt;p-checkbox name=\"city3\" value=\"Chicago\" [(ngModel)]=\"cities2\" inputId=\"city3\"&gt;&lt;/p-checkbox&gt;\n        &lt;label for=\"city3\"&gt;Chicago&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n        &lt;p-checkbox name=\"city4\" value=\"Los Angeles\" [(ngModel)]=\"cities2\" inputId=\"city4\"&gt;&lt;/p-checkbox&gt;\n        &lt;label for=\"city4\"&gt;Los Angeles&lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre> \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Vertical RadioButton&lt;/h3&gt;\n&lt;div class=\"p-field-radiobutton\"&gt;\n    &lt;p-radioButton name=\"city5\" value=\"Chicago\" [(ngModel)]=\"city1\" inputId=\"city5\"&gt;&lt;/p-radioButton&gt;\n    &lt;label for=\"city5\"&gt;Chicago&lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=\"p-field-radiobutton\"&gt;\n    &lt;p-radioButton name=\"city6\" value=\"Los Angeles\" [(ngModel)]=\"city1\" inputId=\"city6\"&gt;&lt;/p-radioButton&gt;\n    &lt;label for=\"city6\"&gt;Los Angeles&lt;/label&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Horizontal RadioButton&lt;/h3&gt;\n&lt;div class=\"p-formgroup-inline\"&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n    &lt;p-radioButton name=\"city7\" value=\"Chicago\" [(ngModel)]=\"city2\" inputId=\"city7\"&gt;&lt;/p-radioButton&gt;\n    &lt;label for=\"city7\"&gt;Chicago&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n        &lt;p-radioButton name=\"city8\" value=\"Los Angeles\" [(ngModel)]=\"city2\" inputId=\"city8\"&gt;&lt;/p-radioButton&gt;\n        &lt;label for=\"city8\"&gt;Los Angeles&lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre> \n\n            <h3>Helper text</h3>\n            <p>Helper text is an optional element defined with the <i>small</i> tag to display additional information about the input field.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"p-field ui-fluid\"&gt;\n    &lt;label for=\"username\"&gt;Username&lt;/label&gt;\n    &lt;input id=\"username\" type=\"username\" pInputText aria-describedby=\"username-help\"&gt; \n    &lt;small id=\"username-help\"&gt;Enter your username to reset your password.&lt;/small&gt;\n&lt;/div&gt;\n</code>\n</pre> \n\n            <h3>Advanced Forms</h3>\n            <p>A responsive form with various input fields can easily be implemented using a combination of <i>.p-field</i>, <i>.p-formgrid</i> and <i>.p-fluid</i>.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"ui-fluid p-formgrid p-grid\"&gt;\n    &lt;div class=\"p-field p-col-12 p-md-6\"&gt;\n        &lt;label for=\"firstname6\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname6\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-6\"&gt;\n        &lt;label for=\"lastname6\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname6\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12\"&gt;\n        &lt;label for=\"address\"&gt;Address&lt;/label&gt;\n        &lt;textarea id=\"address\" type=\"text\" rows=\"4\" pInputTextarea&gt;&lt;/textarea&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-6\"&gt;\n        &lt;label for=\"city\"&gt;City&lt;/label&gt;\n        &lt;input id=\"city\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-3\"&gt;\n        &lt;label for=\"state\"&gt;State&lt;/label&gt;\n        &lt;p-dropdown inputId=\"state\" [options]=\"states\" [(ngModel)]=\"selectedState\" placeholder=\"Select\" optionLabel=\"name\"&gt;&lt;/p-dropdown&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-3\"&gt;\n        &lt;label for=\"zip\"&gt;Zip&lt;/label&gt;\n        &lt;input id=\"zip\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre> \n            <h3>Customization</h3>\n            <p>FormLayout comes with sensible defaults, in case these values need to be customized suggested way is building <a href=\"https://github.com/primefaces/primeflex/blob/master/primeflex.scss\">primeflex.scss</a> with your on variables.</p>\n<div class=\"doc-tablewrapper\">\n    <table class=\"doc-table\">\n        <thead>\n            <tr>\n                <th>Variable</th>\n                <th>Default</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>$fieldMargin</td>\n                <td>1em</td>\n            </tr>\n            <tr>\n                <td>$fieldLabelMargin</td>\n                <td>.5em</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/fieldset\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-formlayout-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class FormLayoutDemo &#123;\n    selectedState: any = null;\n\n    states: any[] = [\n        &#123;name: 'Arizona', code: 'Arizona'&#125;,\n        &#123;name: 'California', value: 'California'&#125;,\n        &#123;name: 'Florida', code: 'Florida'&#125;,\n        &#123;name: 'Ohio', code: 'Ohio'&#125;,\n        &#123;name: 'Washington', code: 'Washington'&#125;\n    ];\n\n    cities1: any[] = [];\n    \n    cities2: any[] = [];\n    \n    city1:any = null;\n\n    city2:any = null;\n&#125;\n</code>\n</pre>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Vertical&lt;/h3&gt;\n&lt;div class=\"ui-fluid\"&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"firstname1\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname1\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"lastname1\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname1\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Vertical and Grid&lt;/h3&gt;\n&lt;div class=\"ui-fluid p-formgrid p-grid\"&gt;\n        &lt;div class=\"p-field p-col\"&gt;\n        &lt;label for=\"firstname2\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname2\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col\"&gt;\n        &lt;label for=\"lastname2\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname2\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Horizontal and Fixed Width&lt;/h3&gt;\n&lt;div class=\"p-field p-grid\"&gt;\n    &lt;label for=\"firstname3\" class=\"p-col-fixed\" style=\"width:100px\"&gt;Firstname&lt;/label&gt;\n    &lt;div class=\"p-col\"&gt;\n        &lt;input id=\"firstname3\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"p-field p-grid\"&gt;\n    &lt;label for=\"lastname3\" class=\"p-col-fixed\" style=\"width:100px\"&gt;Lastname&lt;/label&gt;\n    &lt;div class=\"p-col\"&gt;\n        &lt;input id=\"lastname3\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Horizontal and Fluid&lt;/h3&gt;\n&lt;div class=\"ui-fluid\"&gt;\n    &lt;div class=\"p-field p-grid\"&gt;\n        &lt;label for=\"firstname4\" class=\"p-col-12 p-md-2\"&gt;Firstname&lt;/label&gt;\n        &lt;div class=\"p-col-12 p-md-10\"&gt;\n            &lt;input id=\"firstname4\" type=\"text\" pInputText&gt; \n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field p-grid\"&gt;\n        &lt;label for=\"lastname4\" class=\"p-col-12 p-md-2\"&gt;Lastname&lt;/label&gt;\n        &lt;div class=\"p-col-12 p-md-10\"&gt;\n            &lt;input id=\"lastname4\" type=\"text\" pInputText&gt; \n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Inline&lt;/h3&gt;\n&lt;div class=\"p-formgroup-inline\"&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"firstname5\" class=\"p-sr-only\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Firstname\"&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field\"&gt;\n        &lt;label for=\"lastname5\" class=\"p-sr-only\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname5\" type=\"text\" pInputText placeholder=\"Lastname\"&gt; \n    &lt;/div&gt;\n    &lt;button pButton type=\"button\" label=\"Submit\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Vertical Checkbox&lt;/h3&gt;\n&lt;div class=\"p-field-checkbox\"&gt;\n    &lt;p-checkbox name=\"city1\" value=\"Chicago\" [(ngModel)]=\"cities1\" inputId=\"city1\"&gt;&lt;/p-checkbox&gt;\n    &lt;label for=\"city1\"&gt;Chicago&lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=\"p-field-checkbox\"&gt;\n    &lt;p-checkbox name=\"city2\" value=\"Los Angeles\" [(ngModel)]=\"cities1\" inputId=\"city2\"&gt;&lt;/p-checkbox&gt;\n    &lt;label for=\"city2\"&gt;Los Angeles&lt;/label&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Horizontal Checkbox&lt;/h3&gt;\n&lt;div class=\"p-formgroup-inline\"&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n        &lt;p-checkbox name=\"city3\" value=\"Chicago\" [(ngModel)]=\"cities2\" inputId=\"city3\"&gt;&lt;/p-checkbox&gt;\n        &lt;label for=\"city3\"&gt;Chicago&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n        &lt;p-checkbox name=\"city4\" value=\"Los Angeles\" [(ngModel)]=\"cities2\" inputId=\"city4\"&gt;&lt;/p-checkbox&gt;\n        &lt;label for=\"city4\"&gt;Los Angeles&lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Vertical RadioButton&lt;/h3&gt;\n&lt;div class=\"p-field-radiobutton\"&gt;\n    &lt;p-radioButton name=\"city5\" value=\"Chicago\" [(ngModel)]=\"city1\" inputId=\"city5\"&gt;&lt;/p-radioButton&gt;\n    &lt;label for=\"city5\"&gt;Chicago&lt;/label&gt;\n&lt;/div&gt;\n&lt;div class=\"p-field-radiobutton\"&gt;\n    &lt;p-radioButton name=\"city6\" value=\"Los Angeles\" [(ngModel)]=\"city1\" inputId=\"city6\"&gt;&lt;/p-radioButton&gt;\n    &lt;label for=\"city6\"&gt;Los Angeles&lt;/label&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Horizontal RadioButton&lt;/h3&gt;\n&lt;div class=\"p-formgroup-inline\"&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n    &lt;p-radioButton name=\"city7\" value=\"Chicago\" [(ngModel)]=\"city2\" inputId=\"city7\"&gt;&lt;/p-radioButton&gt;\n    &lt;label for=\"city7\"&gt;Chicago&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field-checkbox\"&gt;\n        &lt;p-radioButton name=\"city8\" value=\"Los Angeles\" [(ngModel)]=\"city2\" inputId=\"city8\"&gt;&lt;/p-radioButton&gt;\n        &lt;label for=\"city8\"&gt;Los Angeles&lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Help Text&lt;/h3&gt;\n&lt;div class=\"p-field ui-fluid\"&gt;\n    &lt;label for=\"username\"&gt;Username&lt;/label&gt;\n    &lt;input id=\"username\" type=\"username\" pInputText aria-describedby=\"username-help\"&gt; \n    &lt;small id=\"username-help\"&gt;Enter your username to reset your password.&lt;/small&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Advanced&lt;/h3&gt;\n&lt;div class=\"ui-fluid p-formgrid p-grid\"&gt;\n    &lt;div class=\"p-field p-col-12 p-md-6\"&gt;\n        &lt;label for=\"firstname6\"&gt;Firstname&lt;/label&gt;\n        &lt;input id=\"firstname6\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-6\"&gt;\n        &lt;label for=\"lastname6\"&gt;Lastname&lt;/label&gt;\n        &lt;input id=\"lastname6\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12\"&gt;\n        &lt;label for=\"address\"&gt;Address&lt;/label&gt;\n        &lt;textarea id=\"address\" type=\"text\" rows=\"4\" pInputTextarea&gt;&lt;/textarea&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-6\"&gt;\n        &lt;label for=\"city\"&gt;City&lt;/label&gt;\n        &lt;input id=\"city\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-3\"&gt;\n        &lt;label for=\"state\"&gt;State&lt;/label&gt;\n        &lt;p-dropdown inputId=\"state\" [options]=\"states\" [(ngModel)]=\"selectedState\" placeholder=\"Select\" optionLabel=\"name\"&gt;&lt;/p-dropdown&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-field p-col-12 p-md-3\"&gt;\n        &lt;label for=\"zip\"&gt;Zip&lt;/label&gt;\n        &lt;input id=\"zip\" type=\"text\" pInputText&gt; \n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-formlayout-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>");

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.ts":
/*!*************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.ts ***!
  \*************************************************/
/*! exports provided: CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




const CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => Checkbox),
    multi: true
};
let Checkbox = class Checkbox {
    constructor(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.focused = false;
        this.checked = false;
    }
    onClick(event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled || this.readonly) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel(event);
        if (focus) {
            checkbox.focus();
        }
    }
    updateModel(event) {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
            if (this.formControl) {
                this.formControl.setValue(this.model);
            }
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit({ checked: this.checked, originalEvent: event });
    }
    handleChange(event) {
        if (!this.readonly) {
            this.checked = event.target.checked;
            this.updateModel(event);
        }
    }
    isChecked() {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    }
    removeValue() {
        this.model = this.model.filter(val => val !== this.value);
    }
    addValue() {
        if (this.model)
            this.model = [...this.model, this.value];
        else
            this.model = [this.value];
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
        this.onModelTouched();
    }
    focus() {
        this.inputViewChild.nativeElement.focus();
    }
    writeValue(model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
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
};
Checkbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Checkbox.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "binary", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "ariaLabelledBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Checkbox.prototype, "tabindex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "inputId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Checkbox.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "styleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "labelStyleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"])
], Checkbox.prototype, "formControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "checkboxIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "readonly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cb'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], Checkbox.prototype, "inputViewChild", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Checkbox.prototype, "onChange", void 0);
Checkbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-checkbox',
        template: `
        <div [ngStyle]="style" [ngClass]="{'ui-chkbox ui-widget': true,'ui-chkbox-readonly': readonly}" [class]="styleClass">
            <div class="ui-helper-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [readonly]="readonly" [value]="value" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                [ngClass]="{'ui-state-focus':focused}" (change)="handleChange($event)" [disabled]="disabled" [attr.tabindex]="tabindex" [attr.aria-labelledby]="ariaLabelledBy" [attr.required]="required">
            </div>
            <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" (click)="onClick($event,cb,true)"
                        [ngClass]="{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}" role="checkbox" [attr.aria-checked]="checked">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="checked ? checkboxIcon : null"></span>
            </div>
        </div>
        <label (click)="onClick($event,cb,true)" [class]="labelStyleClass"
                [ngClass]="{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}"
                *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
        providers: [CHECKBOX_VALUE_ACCESSOR],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], Checkbox);

let CheckboxModule = class CheckboxModule {
};
CheckboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Checkbox],
        declarations: [Checkbox]
    })
], CheckboxModule);



/***/ }),

/***/ "./src/app/components/checkbox/public_api.ts":
/*!***************************************************!*\
  !*** ./src/app/components/checkbox/public_api.ts ***!
  \***************************************************/
/*! exports provided: CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ "./src/app/components/checkbox/checkbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_0__["CHECKBOX_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_0__["CheckboxModule"]; });




/***/ }),

/***/ "./src/app/showcase/components/formlayout/formlayout-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/formlayout/formlayout-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FormLayoutDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutDemoRoutingModule", function() { return FormLayoutDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _formlayoutdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formlayoutdemo */ "./src/app/showcase/components/formlayout/formlayoutdemo.ts");




let FormLayoutDemoRoutingModule = class FormLayoutDemoRoutingModule {
};
FormLayoutDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _formlayoutdemo__WEBPACK_IMPORTED_MODULE_3__["FormLayoutDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], FormLayoutDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/formlayout/formlayoutdemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/formlayout/formlayoutdemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: FormLayoutDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutDemoModule", function() { return FormLayoutDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _formlayoutdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formlayoutdemo */ "./src/app/showcase/components/formlayout/formlayoutdemo.ts");
/* harmony import */ var _formlayout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formlayout-routing.module */ "./src/app/showcase/components/formlayout/formlayout-routing.module.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ "./src/app/components/checkbox/public_api.ts");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/radiobutton */ "./src/app/components/radiobutton/public_api.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "./src/app/components/dropdown/public_api.ts");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ "./src/app/components/inputtextarea/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");














let FormLayoutDemoModule = class FormLayoutDemoModule {
};
FormLayoutDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _formlayout_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormLayoutDemoRoutingModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__["CheckboxModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_9__["RadioButtonModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__["InputTextareaModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [
            _formlayoutdemo__WEBPACK_IMPORTED_MODULE_4__["FormLayoutDemo"]
        ]
    })
], FormLayoutDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/formlayout/formlayoutdemo.scss":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/formlayout/formlayoutdemo.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 489px) {\n  .p-formgroup-inline .p-field {\n    margin-bottom: 1em !important;\n  }\n}\n.layout-content .content-section.implementation > h3 {\n  font-weight: 600;\n}\ntextarea {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvY29tcG9uZW50cy9mb3JtbGF5b3V0L0U6XFxQcm9qZWN0c1xcUHJpbWVOR3Y5LTEtMy9zcmNcXGFwcFxcc2hvd2Nhc2VcXGNvbXBvbmVudHNcXGZvcm1sYXlvdXRcXGZvcm1sYXlvdXRkZW1vLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2NvbXBvbmVudHMvZm9ybWxheW91dC9mb3JtbGF5b3V0ZGVtby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVE7SUFDSSw2QkFBQTtFQ0FWO0FBQ0Y7QURJQTtFQUNJLGdCQUFBO0FDRko7QURLQTtFQUNJLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2NvbXBvbmVudHMvZm9ybWxheW91dC9mb3JtbGF5b3V0ZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg5cHgpIHtcbiAgICAucC1mb3JtZ3JvdXAtaW5saW5lIHtcbiAgICAgICAgLnAtZmllbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sYXlvdXQtY29udGVudCAuY29udGVudC1zZWN0aW9uLmltcGxlbWVudGF0aW9uID4gaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg5cHgpIHtcbiAgLnAtZm9ybWdyb3VwLWlubGluZSAucC1maWVsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5sYXlvdXQtY29udGVudCAuY29udGVudC1zZWN0aW9uLmltcGxlbWVudGF0aW9uID4gaDMge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/showcase/components/formlayout/formlayoutdemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/formlayout/formlayoutdemo.ts ***!
  \******************************************************************/
/*! exports provided: FormLayoutDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutDemo", function() { return FormLayoutDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormLayoutDemo = class FormLayoutDemo {
    constructor() {
        this.selectedState = null;
        this.states = [
            { name: 'Arizona', code: 'Arizona' },
            { name: 'California', value: 'California' },
            { name: 'Florida', code: 'Florida' },
            { name: 'Ohio', code: 'Ohio' },
            { name: 'Washington', code: 'Washington' }
        ];
        this.cities1 = [];
        this.cities2 = [];
        this.city1 = null;
        this.city2 = null;
    }
};
FormLayoutDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./formlayoutdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/formlayout/formlayoutdemo.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./formlayoutdemo.scss */ "./src/app/showcase/components/formlayout/formlayoutdemo.scss")).default]
    })
], FormLayoutDemo);



/***/ })

}]);
//# sourceMappingURL=components-formlayout-formlayoutdemo-module-es2015.js.map