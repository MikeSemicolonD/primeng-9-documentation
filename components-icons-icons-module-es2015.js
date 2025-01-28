(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-icons-icons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/icons/icons.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/icons/icons.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Icons</span>\n        <span>PrimeNG components internally use <a href=\"https://github.com/primefaces/primeicons\">PrimeIcons</a> library, the official icons suite from <a href=\"https://www.primetek.com.tr\">PrimeTek</a>.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation icons-documentation\">\n    <h3 style=\"margin-top:0px\">Download</h3>\n    <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install primeicons --save\n</code>\n</pre>\n\n    <h3>Getting Started</h3>\n    <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>. A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;i class=\"pi pi-check\"&gt;&lt;/i&gt;\n&lt;i class=\"pi pi-times\"&gt;&lt;/i&gt;\n</code>\n</pre>\n\n<i class=\"pi pi-check\"></i>\n<i class=\"pi pi-times\"></i>\n\n    <h3>Size</h3>\n    <p>Size of the icons can easily be changed using font-size property.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;i class=\"pi pi-check\"&gt;&lt;/i&gt;\n</code>\n</pre>\n    <i class=\"pi pi-check\"></i>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;i class=\"pi pi-check\" style=\"font-size: 3em\"&gt;&lt;/i&gt;\n</code>\n</pre>\n<i class=\"pi pi-check\" style=\"font-size: 3em\"></i>\n\n    <h3>Spinning Animation</h3>\n    <p>Special pi-spin class applies infinite rotate to an icon.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;i class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"&gt;&lt;/i&gt;\n</code>\n</pre>\n<i class=\"pi pi-spin pi-spinner\" style=\"font-size: 3em\"></i>\n\n    <h3>List of Icons</h3>\n    <p>Here is the current list of PrimeIcons, more icons will be added periodically. You may also <a href=\"https://github.com/primefaces/primeicons/issues\">request new icons</a> at the issue tracker.</p>\n    <div>\n        <input class=\"icon-filter\" (input)=\"onFilter($event)\" pInputText [ngStyle]=\"{width: '100%', padding: '1em', margin: '16px 0 26px 0'}\" placeholder=\"Search an icon\"> \n    </div>\n\n    <div class=\"p-grid icons-list\">\n        <div class=\"p-col-12 p-md-2\" *ngFor=\"let icon of filteredIcons\">\n            <i class=\"pi pi-{{icon.properties.name}}\"></i>\n            <div>pi-{{icon.properties.name}}</div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/components/codehighlighter/codehighlighter.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/codehighlighter/codehighlighter.ts ***!
  \***************************************************************/
/*! exports provided: CodeHighlighter, CodeHighlighterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function() { return CodeHighlighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function() { return CodeHighlighterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let CodeHighlighter = class CodeHighlighter {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
        }
    }
};
CodeHighlighter.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
CodeHighlighter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pCode]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CodeHighlighter);

let CodeHighlighterModule = class CodeHighlighterModule {
};
CodeHighlighterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [CodeHighlighter],
        declarations: [CodeHighlighter]
    })
], CodeHighlighterModule);



/***/ }),

/***/ "./src/app/components/codehighlighter/public_api.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/codehighlighter/public_api.ts ***!
  \**********************************************************/
/*! exports provided: CodeHighlighter, CodeHighlighterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codehighlighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighter", function() { return _codehighlighter__WEBPACK_IMPORTED_MODULE_0__["CodeHighlighter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterModule", function() { return _codehighlighter__WEBPACK_IMPORTED_MODULE_0__["CodeHighlighterModule"]; });




/***/ }),

/***/ "./src/app/showcase/components/icons/icons-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/icons/icons-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: IconsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRoutingModule", function() { return IconsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.component */ "./src/app/showcase/components/icons/icons.component.ts");




let IconsRoutingModule = class IconsRoutingModule {
};
IconsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], IconsRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/icons/icons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/icons/icons.component.ts ***!
  \**************************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_iconservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/iconservice */ "./src/app/showcase/service/iconservice.ts");



let IconsComponent = class IconsComponent {
    constructor(iconService) {
        this.iconService = iconService;
    }
    getIcons() {
        this.iconService.getIcons().subscribe((data) => {
            this.icons = data;
            this.filteredIcons = data;
        });
    }
    getIcon(id) {
        this.selectedIcon = this.iconService.getIcon(id);
    }
    onFilter(event) {
        this.searchText = event.target.value;
        if (!this.icons)
            this.filteredIcons = [];
        if (!this.searchText)
            this.filteredIcons = this.icons;
        this.searchText = this.searchText;
        this.filteredIcons = this.icons.filter(it => {
            return it.icon.tags[0].includes(this.searchText);
        });
    }
    unselectIcon() {
        this.selectedIcon = null;
    }
    ngOnInit() {
        this.getIcons();
    }
};
IconsComponent.ctorParameters = () => [
    { type: _service_iconservice__WEBPACK_IMPORTED_MODULE_2__["IconService"] }
];
IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/icons/icons.component.html")).default,
        styles: ["\n        .icons-list {\n            text-align: center;\n        }\n\n        .icons-list i {\n            font-size: 2em;\n        }\n\n        .icons-list .ui-md-2 {\n            padding-bottom: 2em;\n        }\n    "]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_iconservice__WEBPACK_IMPORTED_MODULE_2__["IconService"]])
], IconsComponent);



/***/ }),

/***/ "./src/app/showcase/components/icons/icons.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/showcase/components/icons/icons.module.ts ***!
  \***********************************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.component */ "./src/app/showcase/components/icons/icons.component.ts");
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-routing.module */ "./src/app/showcase/components/icons/icons-routing.module.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");







let IconsModule = class IconsModule {
};
IconsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"],
            _icons_routing_module__WEBPACK_IMPORTED_MODULE_4__["IconsRoutingModule"]
        ],
        declarations: [
            _icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"]
        ]
    })
], IconsModule);



/***/ })

}]);
//# sourceMappingURL=components-icons-icons-module-es2015.js.map