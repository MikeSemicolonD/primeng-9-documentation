function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-chart-chartdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/barchart/barchartdemo.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/barchart/barchartdemo.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_chart_barchart_barchartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">BarChart</span>\n        <span>A bar chart or bar graph is a chart that presents Grouped data with rectangular bars with lengths proportional to the values that they represent.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation-charts\">\n    <p-chart type=\"bar\" [data]=\"data\"></p-chart>\n</div>\n\n<div class=\"content-section documentation\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/chart/barchart\" class=\"btn-viewsource\" target=\"_blank\">\n        <span>View on GitHub</span>\n    </a>\n    <a href=\"https://stackblitz.com/edit/primeng-barchart-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n        <span>Edit in StackBlitz</span>\n    </a>\n\n    <p-tabView>\n        <p-tabPanel header=\"barchartdemo.ts\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class BarChartDemo &#123;\n\n    data: any;\n\n    constructor() &#123;\n        this.data = &#123;\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n            datasets: [\n                &#123;\n                    label: 'My First dataset',\n                    backgroundColor: '#42A5F5',\n                    borderColor: '#1E88E5',\n                    data: [65, 59, 80, 81, 56, 55, 40]\n                &#125;,\n                &#123;\n                    label: 'My Second dataset',\n                    backgroundColor: '#9CCC65',\n                    borderColor: '#7CB342',\n                    data: [28, 48, 40, 19, 86, 27, 90]\n                &#125;\n            ]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"barchartdemo.html\">\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"bar\" [data]=\"data\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-barchart-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/chartdemo.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/chartdemo.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_chart_chartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Charts</span>\n        <span>Chart components are based on <a style=\"color:#68d4f9\" href=\"http://www.chartjs.org/\">Charts.js</a> 2.7.x, an open source HTML5 based charting library.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <h3 style=\"margin-top:0px\">Charts.js</h3>\n    <p>To begin with, first you must install the charts.js package using npm and then include \n        it in your project. An example with CLI would be;</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install chart.js --save\n</code>\n</pre>\n        \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n\"scripts\": [\n    \"../node_modules/chart.js/dist/Chart.js\",\n    //..others\n],\n</code>\n</pre>\n\n    <h3>Chart Component</h3>\n    <p>Chart component is used to display a chart on page. The classname is UIChart and element tag is p-chart.</p>\n    \n<h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ChartModule&#125; from 'primeng/chart';\n</code>\n</pre>\n\n    <h3>Change Detection</h3>\n    <p>In order to chart to redraw itself, a new data object needs to be created. Changing the array contents without creating a new\n    array instance does not trigger change detection.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"pie\" [data]=\"data\"&gt;&lt;/p-chart&gt;\n&lt;button type=\"button\" pButton (click)=\"update($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nupdate(event: Event) &#123;\n    this.data = //create new data\n&#125;\n</code>\n</pre>\n\n    <h3>Properties</h3>\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Type</th>\n                    <th>Default</th>\n                    <th>Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>type</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Type of the chart.</td>\n                </tr>\n                <tr>\n                    <td>data</td>\n                    <td>any</td>\n                    <td>null</td>\n                    <td>Data to display.</td>\n                </tr>\n                <tr>\n                    <td>options</td>\n                    <td>any</td>\n                    <td>null</td>\n                    <td>Options to customize the chart.</td>\n                </tr>\n                <tr>\n                    <td>plugins</td>\n                    <td>any[]</td>\n                    <td>null</td>\n                    <td>Array of per-chart plugins to customize the chart behaviour.</td>\n                </tr>\n                <tr>\n                    <td>width</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Width of the chart.</td>\n                </tr>\n                <tr>\n                    <td>height</td>\n                    <td>string</td>\n                    <td>null</td>\n                    <td>Height of the chart.</td>\n                </tr>\n                <tr>\n                    <td>responsive</td>\n                    <td>boolean</td>\n                    <td>true</td>\n                    <td>Whether the chart is redrawn on screen size change.</td>\n                </tr>\n                <tr>\n                    <td>onDataSelect</td>\n                    <td>function</td>\n                    <td>null</td>\n                    <td>Callback to execute when an element on chart is clicked.</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <h3>Methods</h3>\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Parameters</th>\n                    <th>Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>refresh</td>\n                    <td>-</td>\n                    <td>Redraws the graph with new data.</td>\n                </tr>\n                <tr>\n                    <td>reinit</td>\n                    <td>-</td>\n                    <td>Destroys the graph first and then creates it again.</td>\n                </tr>\n                <tr>\n                    <td>generateLegend</td>\n                    <td>-</td>\n                    <td>Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    \n\n    <h3>Chart Types</h3>\n    <p>Chart type is defined using the type property. Currently there are 6 options available; pie, doughtnut, line(line or horizontalBar), bar, radar and polarArea.</p>\n\n    <h3>Data</h3>\n    <p>Data of a chart is provided using a binding to the data property, each type has its own format of data. Here is an example of a line chart.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"line\" [data]=\"data\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LineChartDemo &#123;\n\n    data: any;\n    \n    constructor() &#123;\n        this.data = &#123;\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n            datasets: [\n                &#123;\n                    label: 'First Dataset',\n                    data: [65, 59, 80, 81, 56, 55, 40]\n                &#125;,\n                &#123;\n                    label: 'Second Dataset',\n                    data: [28, 48, 40, 19, 86, 27, 90]\n                &#125;\n            ]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n    <h3>Options</h3>\n    <p>While a series can be customized per dataset, general chart options are defined with options property. \n        Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js documentation.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"line\" [data]=\"data\" [options]=\"options\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LineChartDemo &#123;\n\n    data: any;\n    \n    options: any;\n    \n    constructor() &#123;\n        this.data = &#123;\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n            datasets: [\n                &#123;\n                    label: 'First Dataset',\n                    data: [65, 59, 80, 81, 56, 55, 40]\n                &#125;,\n                &#123;\n                    label: 'Second Dataset',\n                    data: [28, 48, 40, 19, 86, 27, 90]\n                &#125;\n            ]\n        &#125;\n        \n        this.options = &#123;\n            title: &#123;\n                display: true,\n                text: 'My Title',\n                fontSize: 16\n            &#125;,\n            legend: &#123;\n                position: 'bottom'\n            &#125;\n        &#125;;\n    &#125;\n&#125;\n</code>\n</pre>\n\n    <h3>Events</h3>\n    <p>When data is selected with click event, chart component provides onDataSelect callback to process the selected data.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nselectData(event) &#123;\n    //event.dataset = Selected dataset\n    //event.element = Selected element\n    //event.element._datasetIndex = Index of the dataset in data\n    //event.element._index = Index of the data in dataset\n&#125;\n</code>\n</pre>  \n\n    <h3>Responsive</h3>\n    <p>Charts are responsive by default and vw-vh units should be used when customizing the width and height of the chart.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"line\" [data]=\"data\" width=\"40vw\" height=\"80vh\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n\n<p>If the chart is not responsive, other units should be preferred.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"line\" [data]=\"data\" width=\"400px\" height=\"400px\" [responsive]=\"false\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_chart_doughnutchart_doughnutchartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DoughnutChart</span>\n        <span>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation-charts\">\n    <p-chart type=\"doughnut\" [data]=\"data\"></p-chart>\n</div>\n\n<div class=\"content-section documentation\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/doughnutchart\" class=\"btn-viewsource\" target=\"_blank\">\n        <span>View on GitHub</span>\n    </a>\n    <a href=\"https://stackblitz.com/edit/primeng-doughnutchart-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n        <span>Edit in StackBlitz</span>\n    </a>\n\n    <p-tabView>\n        <p-tabPanel header=\"doughnutchartdemo.ts\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DoughnutChartDemo &#123;\n\n    data: any;\n\n    constructor() &#123;\n        this.data = &#123;\n            labels: ['A','B','C'],\n            datasets: [\n                &#123;\n                    data: [300, 50, 100],\n                    backgroundColor: [\n                        \"#FF6384\",\n                        \"#36A2EB\",\n                        \"#FFCE56\"\n                    ],\n                    hoverBackgroundColor: [\n                        \"#FF6384\",\n                        \"#36A2EB\",\n                        \"#FFCE56\"\n                    ]\n                &#125;]    \n            &#125;;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"doughnutchartdemo.html\">\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"doughnut\" [data]=\"data\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-doughnutchart-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/linechart/linechartdemo.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/linechart/linechartdemo.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_chart_linechart_linechartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">LineChart</span>\n        <span>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"></p-chart>\n</div>\n\n<div class=\"content-section documentation\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/linechart/linechartdemo\" class=\"btn-viewsource\" target=\"_blank\">\n        <span>View on GitHub</span>\n    </a>\n    <a href=\"https://stackblitz.com/edit/primeng-linechart-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n        <span>Edit in StackBlitz</span>\n    </a>\n\n    <p-tabView>\n        <p-tabPanel header=\"linechartdemo.ts\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class LineChartDemo &#123;\n\n    data: any;\n\n    constructor(private messageService: MessageService) &#123;\n        this.data = &#123;\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n            datasets: [\n                &#123;\n                    label: 'First Dataset',\n                    data: [65, 59, 80, 81, 56, 55, 40],\n                    fill: false,\n                    borderColor: '#4bc0c0'\n                &#125;,\n                &#123;\n                    label: 'Second Dataset',\n                    data: [28, 48, 40, 19, 86, 27, 90],\n                    fill: false,\n                    borderColor: '#565656'\n                &#125;\n            ]\n        &#125;\n    &#125;\n\n    selectData(event) &#123;\n        this.messageService.add(&#123;severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"linechartdemo.html\">\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-linechart-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/piechart/piechartdemo.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/piechart/piechartdemo.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_chart_piechart_piechartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">PieChart</span>\n        <span>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation-charts\">\n    <p-chart type=\"pie\" [data]=\"data\"></p-chart>\n</div>\n\n<div class=\"content-section documentation\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/piechart\" class=\"btn-viewsource\" target=\"_blank\">\n        <span>View on GitHub</span>\n    </a>\n    <a href=\"https://stackblitz.com/edit/primeng-piechart-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n        <span>Edit in StackBlitz</span>\n    </a>\n\n    <p-tabView>\n        <p-tabPanel header=\"piechartdemo.ts\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class PieChartDemo &#123;\n\n    data: any;\n\n    constructor() &#123;\n        this.data = &#123;\n            labels: ['A','B','C'],\n            datasets: [\n                &#123;\n                    data: [300, 50, 100],\n                    backgroundColor: [\n                        \"#FF6384\",\n                        \"#36A2EB\",\n                        \"#FFCE56\"\n                    ],\n                    hoverBackgroundColor: [\n                        \"#FF6384\",\n                        \"#36A2EB\",\n                        \"#FFCE56\"\n                    ]\n                &#125;]    \n            &#125;;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"piechartdemo.html\">\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"pie\" [data]=\"data\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-piechart-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/polarareachart/polarareachartdemo.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/polarareachart/polarareachartdemo.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_chart_polarareachart_polarareachartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">PolarAreaChart</span>\n        <span>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation-charts\">\n    <p-chart type=\"polarArea\" [data]=\"data\"></p-chart>\n</div>\n\n<div class=\"content-section documentation\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/polarchart\" class=\"btn-viewsource\" target=\"_blank\">\n        <span>View on GitHub</span>\n    </a>\n    <a href=\"https://stackblitz.com/edit/primeng-polarareachart-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n        <span>Edit in StackBlitz</span>\n    </a>\n\n    <p-tabView>\n        <p-tabPanel header=\"polarareachartdemo.ts\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class PolarAreaChartDemo &#123;\n\n    data: any;\n\n    constructor() &#123;\n        this.data = &#123;\n            datasets: [&#123;\n                data: [\n                    11,\n                    16,\n                    7,\n                    3,\n                    14\n                ],\n                backgroundColor: [\n                    \"#FF6384\",\n                    \"#4BC0C0\",\n                    \"#FFCE56\",\n                    \"#E7E9ED\",\n                    \"#36A2EB\"\n                ],\n                label: 'My dataset'\n            &#125;],\n            labels: [\n                \"Red\",\n                \"Green\",\n                \"Yellow\",\n                \"Grey\",\n                \"Blue\"\n            ]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"polarareachartdemo.html\">\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"polarArea\" [data]=\"data\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-polarareachart-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/radarchart/radarchartdemo.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/radarchart/radarchartdemo.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_chart_radarchart_radarchartdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">RadarChart</span>\n        <span>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation-charts\">\n    <p-chart type=\"radar\" [data]=\"data\"></p-chart>\n</div>\n\n<div class=\"content-section documentation\">\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/radarchart\" class=\"btn-viewsource\" target=\"_blank\">\n        <span>View on GitHub</span>\n    </a>\n    <a href=\"https://stackblitz.com/edit/primeng-radarchart-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n        <span>Edit in StackBlitz</span>\n    </a>\n\n    <p-tabView>\n        <p-tabPanel header=\"radarchartdemo.ts\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class RadarChartDemo &#123;\n\n    data: any;\n\n    constructor() &#123;\n        this.data = &#123;\n            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],\n            datasets: [\n                &#123;\n                    label: 'My First dataset',\n                    backgroundColor: 'rgba(179,181,198,0.2)',\n                    borderColor: 'rgba(179,181,198,1)',\n                    pointBackgroundColor: 'rgba(179,181,198,1)',\n                    pointBorderColor: '#fff',\n                    pointHoverBackgroundColor: '#fff',\n                    pointHoverBorderColor: 'rgba(179,181,198,1)',\n                    data: [65, 59, 90, 81, 56, 55, 40]\n                &#125;,\n                &#123;\n                    label: 'My Second dataset',\n                    backgroundColor: 'rgba(255,99,132,0.2)',\n                    borderColor: 'rgba(255,99,132,1)',\n                    pointBackgroundColor: 'rgba(255,99,132,1)',\n                    pointBorderColor: '#fff',\n                    pointHoverBackgroundColor: '#fff',\n                    pointHoverBorderColor: 'rgba(255,99,132,1)',\n                    data: [28, 48, 40, 19, 96, 27, 100]\n                &#125;\n            ]\n        &#125;;\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"radarchartdemo.html\">\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-chart type=\"radar\" [data]=\"data\"&gt;&lt;/p-chart&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-radarchart-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/barchart/barchartdemo.ts":
  /*!********************************************************************!*\
    !*** ./src/app/showcase/components/chart/barchart/barchartdemo.ts ***!
    \********************************************************************/

  /*! exports provided: BarChartDemo */

  /***/
  function _src_app_showcase_components_chart_barchart_barchartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartDemo", function () {
      return BarChartDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BarChartDemo = /*#__PURE__*/_createClass(function BarChartDemo() {
      _classCallCheck(this, BarChartDemo);

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        }, {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }]
      };
    });

    BarChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./barchartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/barchart/barchartdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BarChartDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/chartdemo-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/chart/chartdemo-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ChartDemoRoutingModule */

  /***/
  function _src_app_showcase_components_chart_chartdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDemoRoutingModule", function () {
      return ChartDemoRoutingModule;
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


    var _chartdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chartdemo */
    "./src/app/showcase/components/chart/chartdemo.ts");
    /* harmony import */


    var _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./piechart/piechartdemo */
    "./src/app/showcase/components/chart/piechart/piechartdemo.ts");
    /* harmony import */


    var _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./doughnutchart/doughnutchartdemo */
    "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts");
    /* harmony import */


    var _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./barchart/barchartdemo */
    "./src/app/showcase/components/chart/barchart/barchartdemo.ts");
    /* harmony import */


    var _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./linechart/linechartdemo */
    "./src/app/showcase/components/chart/linechart/linechartdemo.ts");
    /* harmony import */


    var _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./polarareachart/polarareachartdemo */
    "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts");
    /* harmony import */


    var _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./radarchart/radarchartdemo */
    "./src/app/showcase/components/chart/radarchart/radarchartdemo.ts");

    var ChartDemoRoutingModule = /*#__PURE__*/_createClass(function ChartDemoRoutingModule() {
      _classCallCheck(this, ChartDemoRoutingModule);
    });

    ChartDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _chartdemo__WEBPACK_IMPORTED_MODULE_3__["ChartDemo"]
      }, {
        path: 'pie',
        component: _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_4__["PieChartDemo"]
      }, {
        path: 'doughnut',
        component: _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_5__["DoughnutChartDemo"]
      }, {
        path: 'bar',
        component: _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_6__["BarChartDemo"]
      }, {
        path: 'line',
        component: _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_7__["LineChartDemo"]
      }, {
        path: 'polararea',
        component: _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_8__["PolarAreaChartDemo"]
      }, {
        path: 'radar',
        component: _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_9__["RadarChartDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChartDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/chartdemo.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/showcase/components/chart/chartdemo.module.ts ***!
    \***************************************************************/

  /*! exports provided: ChartDemoModule */

  /***/
  function _src_app_showcase_components_chart_chartdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDemoModule", function () {
      return ChartDemoModule;
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


    var _chartdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chartdemo-routing.module */
    "./src/app/showcase/components/chart/chartdemo-routing.module.ts");
    /* harmony import */


    var _chartdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chartdemo */
    "./src/app/showcase/components/chart/chartdemo.ts");
    /* harmony import */


    var _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./piechart/piechartdemo */
    "./src/app/showcase/components/chart/piechart/piechartdemo.ts");
    /* harmony import */


    var _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./doughnutchart/doughnutchartdemo */
    "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts");
    /* harmony import */


    var _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./barchart/barchartdemo */
    "./src/app/showcase/components/chart/barchart/barchartdemo.ts");
    /* harmony import */


    var _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./linechart/linechartdemo */
    "./src/app/showcase/components/chart/linechart/linechartdemo.ts");
    /* harmony import */


    var _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./polarareachart/polarareachartdemo */
    "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts");
    /* harmony import */


    var _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./radarchart/radarchartdemo */
    "./src/app/showcase/components/chart/radarchart/radarchartdemo.ts");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/chart */
    "./src/app/components/chart/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var ChartDemoModule = /*#__PURE__*/_createClass(function ChartDemoModule() {
      _classCallCheck(this, ChartDemoModule);
    });

    ChartDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _chartdemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartDemoRoutingModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_13__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_14__["CodeHighlighterModule"]],
      declarations: [_chartdemo__WEBPACK_IMPORTED_MODULE_4__["ChartDemo"], _piechart_piechartdemo__WEBPACK_IMPORTED_MODULE_5__["PieChartDemo"], _doughnutchart_doughnutchartdemo__WEBPACK_IMPORTED_MODULE_6__["DoughnutChartDemo"], _barchart_barchartdemo__WEBPACK_IMPORTED_MODULE_7__["BarChartDemo"], _linechart_linechartdemo__WEBPACK_IMPORTED_MODULE_8__["LineChartDemo"], _polarareachart_polarareachartdemo__WEBPACK_IMPORTED_MODULE_9__["PolarAreaChartDemo"], _radarchart_radarchartdemo__WEBPACK_IMPORTED_MODULE_10__["RadarChartDemo"]]
    })], ChartDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/chartdemo.ts":
  /*!********************************************************!*\
    !*** ./src/app/showcase/components/chart/chartdemo.ts ***!
    \********************************************************/

  /*! exports provided: ChartDemo */

  /***/
  function _src_app_showcase_components_chart_chartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDemo", function () {
      return ChartDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChartDemo = /*#__PURE__*/_createClass(function ChartDemo() {
      _classCallCheck(this, ChartDemo);
    });

    ChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/chartdemo.html"))["default"]
    })], ChartDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts ***!
    \******************************************************************************/

  /*! exports provided: DoughnutChartDemo */

  /***/
  function _src_app_showcase_components_chart_doughnutchart_doughnutchartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoughnutChartDemo", function () {
      return DoughnutChartDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DoughnutChartDemo = /*#__PURE__*/_createClass(function DoughnutChartDemo() {
      _classCallCheck(this, DoughnutChartDemo);

      this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
      };
    });

    DoughnutChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doughnutchartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DoughnutChartDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/linechart/linechartdemo.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/showcase/components/chart/linechart/linechartdemo.ts ***!
    \**********************************************************************/

  /*! exports provided: LineChartDemo */

  /***/
  function _src_app_showcase_components_chart_linechart_linechartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartDemo", function () {
      return LineChartDemo;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var LineChartDemo = /*#__PURE__*/function () {
      function LineChartDemo(messageService) {
        _classCallCheck(this, LineChartDemo);

        this.messageService = messageService;
        this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
          }, {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
          }]
        };
      }

      return _createClass(LineChartDemo, [{
        key: "selectData",
        value: function selectData(event) {
          this.messageService.add({
            severity: 'info',
            summary: 'Data Selected',
            'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]
          });
        }
      }]);
    }();

    LineChartDemo.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    LineChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./linechartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/linechart/linechartdemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], LineChartDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/piechart/piechartdemo.ts":
  /*!********************************************************************!*\
    !*** ./src/app/showcase/components/chart/piechart/piechartdemo.ts ***!
    \********************************************************************/

  /*! exports provided: PieChartDemo */

  /***/
  function _src_app_showcase_components_chart_piechart_piechartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieChartDemo", function () {
      return PieChartDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PieChartDemo = /*#__PURE__*/_createClass(function PieChartDemo() {
      _classCallCheck(this, PieChartDemo);

      this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
      };
    });

    PieChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./piechartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/piechart/piechartdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PieChartDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts ***!
    \********************************************************************************/

  /*! exports provided: PolarAreaChartDemo */

  /***/
  function _src_app_showcase_components_chart_polarareachart_polarareachartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolarAreaChartDemo", function () {
      return PolarAreaChartDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PolarAreaChartDemo = /*#__PURE__*/_createClass(function PolarAreaChartDemo() {
      _classCallCheck(this, PolarAreaChartDemo);

      this.data = {
        datasets: [{
          data: [11, 16, 7, 3, 14],
          backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
          label: 'My dataset'
        }],
        labels: ["Red", "Green", "Yellow", "Grey", "Blue"]
      };
    });

    PolarAreaChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./polarareachartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/polarareachart/polarareachartdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PolarAreaChartDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/chart/radarchart/radarchartdemo.ts":
  /*!************************************************************************!*\
    !*** ./src/app/showcase/components/chart/radarchart/radarchartdemo.ts ***!
    \************************************************************************/

  /*! exports provided: RadarChartDemo */

  /***/
  function _src_app_showcase_components_chart_radarchart_radarchartdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadarChartDemo", function () {
      return RadarChartDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RadarChartDemo = /*#__PURE__*/_createClass(function RadarChartDemo() {
      _classCallCheck(this, RadarChartDemo);

      this.data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        }, {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }]
      };
    });

    RadarChartDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./radarchartdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/chart/radarchart/radarchartdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RadarChartDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-chart-chartdemo-module-es5.js.map