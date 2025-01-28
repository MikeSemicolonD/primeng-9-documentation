(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-codehighlighter-codehighlighterdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/codehighlighter/codehighlighterdemo.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/codehighlighter/codehighlighterdemo.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">CodeHighlighter</span>\n        <span>CodeHighlighter is an attribute directive to highlight code blocks using PrismJS</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">CSS</h3>\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n.ui-table table &#123;\n    border-collapse:collapse;\n    width: 100%;\n    table-layout: fixed;\n&#125;\n</code>\n</pre>\n    \n    <h3>HTML</h3>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div id=\"pm\" style=\"width:300px\"&gt;\n&lt;div&gt;\n&lt;div&gt;&lt;a data-icon=\"pi-file-o\"&gt;File&lt;/a&gt;&lt;/div&gt;\n&lt;div&gt;\n    &lt;ul&gt;\n        &lt;li&gt;&lt;a data-icon=\"pi-plus\"&gt;New&lt;/a&gt;\n            &lt;ul&gt;\n                &lt;li&gt;&lt;a&gt;Project&lt;/a&gt;&lt;/li&gt;\n                &lt;li&gt;&lt;a&gt;Other&lt;/a&gt;&lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/li&gt;\n        &lt;li&gt;&lt;a&gt;Open&lt;/a&gt;&lt;/li&gt;\n        &lt;li&gt;&lt;a&gt;Quit&lt;/a&gt;&lt;/li&gt;\n    &lt;/ul&gt;\n&lt;/div&gt;\n&lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n    \n    <h3>Javascript</h3>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\nvar map;\n    function initMap() &#123;\n        map = new google.maps.Map(document.getElementById('map'), &#123;\n        center: &#123;lat: -34.397, lng: 150.644&#125;,\n        zoom: 8\n    &#125;);\n&#125;\n</code>\n</pre>\n\n    <h3>Typescript</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Directive, ElementRef, OnInit&#125; from '@angular/core';\n\ndeclare var Prism: any;\n\n@Directive(&#123;\n    selector: '[pCode]'\n&#125;)\nexport class CodeHighlighter implements OnInit &#123;\n\n    constructor(private el: ElementRef) &#123;&#125;\n\n    ngOnInit() &#123;\n        Prism.highlightElement(this.el.nativeElement);\n    &#125;\n&#125;\n</code>\n</pre>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n                <h3>PrismJS</h3>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install prismjs --save\n</code>\n</pre>\n\n                <p>Include the javascript and a theme css from Prism. Example for angular.json configuration of a CLI project would be as follows. Refer to the PrismJS <a href=\"https://prismjs.com/#basic-usage\">documentation</a> for the list of available languages.</p>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n\"styles\": [\n    \"node_modules/prismjs/themes/prism.css\",\n    //...\n],\n\"scripts\": [\n    \"node_modules/prismjs/prism.js\",\n    //...\n]\n</code>\n</pre>\n\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CodeHighlighterModule&#125; from 'primeng/codehighlighter';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>CodeHighlighter is applied to a code element with [pCode] directive. The &lt;code&gt; should have\n            a style class having language- prefix to specify the language to highlight. See Prismjs docs for the list of available languages.\n            An example block with css code would be as follows.</p>\n            \n            <p> It is important to note that in order to use any of the the non-default languages ( markup, css, clike and javascript) you \n                add an import statement for the specific language, for most in the app module.</p>\n            \n            <h3>Language Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n/* Import the language you need to highlight */\nimport &#x27;prismjs/components/prism-sql.js&#x27;;\n</code>\n</pre> \n            \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;pre&gt;\n&lt;code class=\"language-css\" pCode&gt;\n.ui-table table &#123;\n    border-collapse:collapse;\n    width: 100%;\n    table-layout: fixed;\n&#125;\n&lt;/code&gt;\n&lt;/pre&gt;\n</code>\n</pre>                        \n            <h3>Dependencies</h3>\n            <p>Prismjs</p>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/codehighlighter\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n        </p-tabPanel>\n     </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CodeHighlighterDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemoRoutingModule", function() { return CodeHighlighterDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codehighlighterdemo */ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");




let CodeHighlighterDemoRoutingModule = class CodeHighlighterDemoRoutingModule {
};
CodeHighlighterDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__["CodeHighlighterDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], CodeHighlighterDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/codehighlighter/codehighlighterdemo.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CodeHighlighterDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemoModule", function() { return CodeHighlighterDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codehighlighterdemo */ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");
/* harmony import */ var _codehighlighterdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codehighlighterdemo-routing.module */ "./src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");







let CodeHighlighterDemoModule = class CodeHighlighterDemoModule {
};
CodeHighlighterDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _codehighlighterdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["CodeHighlighterDemoRoutingModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__["CodeHighlighterModule"]
        ],
        declarations: [
            _codehighlighterdemo__WEBPACK_IMPORTED_MODULE_3__["CodeHighlighterDemo"]
        ]
    })
], CodeHighlighterDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/codehighlighter/codehighlighterdemo.ts ***!
  \****************************************************************************/
/*! exports provided: CodeHighlighterDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemo", function() { return CodeHighlighterDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CodeHighlighterDemo = class CodeHighlighterDemo {
};
CodeHighlighterDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./codehighlighterdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/codehighlighter/codehighlighterdemo.html")).default
    })
], CodeHighlighterDemo);



/***/ })

}]);
//# sourceMappingURL=components-codehighlighter-codehighlighterdemo-module-es2015.js.map