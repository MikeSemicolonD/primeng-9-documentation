(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-lts-lts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/lts/lts.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/lts/lts.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Long Term Support</span>\n        <span>LTS Support ensures stability, premium quality and advanced security for the prior versions.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <h3 style=\"margin-top:0\">What is LTS?</h3>\n    <p>Angular is a fast paced technology with a new major version\n        <a href=\"https://angular.io/guide/releases\">every 6 months</a>. PrimeNG release cycle is aligned with Angular and every 6 months a new major PrimeNG version is released that is compatible\n        with the latest Angular core. We are aware that majority of the existing applications prefer to remain at a previous version due to stability requirements instead of upgrading to the latest version immediately.\n    </p>\n    <p>\n        PrimeNG LTS is an annual subscription based service to provide a license for the finest compatible version suited to you. LTS covers the prior two versions from the latest release, this means up to <b>18 months</b>\n        of almost weekly releases to bring the latest defect fixes and security updates to your project. As an example, when PrimeNG moves to Angular 9, PrimeNG 7 and 8 will move to LTS support whereas STS (short term support)\n        versions of PrimeNG 9 will be open source under MIT license for at least 6 months until PrimeNG 10 is released. Here is a timeline to visualize the LTS support.</p>\n\n    <img alt=\"LTS\" src=\"assets/showcase/images/lts-timeline.jpg\" style=\"width: 100%\">\n\n    <h3>License Terms</h3>\n    <p>PrimeNG is an open source and free to use library licensed under MIT license whereas <b>PrimeNG LTS</b> is a commercial software licensed under <a href=\"https://www.primefaces.org/lts/licenses/\">LTS License.</a></p>\n    <ul>\n        <li>A license is required to be obtained before installing and importing an LTS package.</li>\n        <li>LTS license is per developer and period is 1 year.</li>\n        <li>License needs to be renewed after the expiration to be able to continue using the LTS versions of PrimeNG.</li>\n        <li>Licenses can be obtained online at <a href=\"https://www.primefaces.org/store\">PrimeStore</a>.</li>\n        <li>Please contact <a href=\"mailto:contact@primetek.com.tr\">PrimeTek</a> regarding any inquiry such as alternative payment methods and license terms.</li>\n    </ul>\n\n    <h3>Changelog</h3>\n    <p>Detailed changes included in the LTS versions are available at the main <a href=\"https://github.com/primefaces/primeng/blob/master/CHANGELOG.md\">changelog</a> list.</p>\n\n    <h3>Download</h3>\n    <p>PrimeNG-LTS is available at <a href=\"https://www.npmjs.com/package/primeng-lts\">npm</a>, if you have an existing application run the following command to download it to your project. If you require a specific version,\n    refer to the <a href=\"https://www.npmjs.com/package/primeng-lts\">versions list</a> for the version compatible with your project.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install primeng-lts --save\n</code>\n</pre>\n\n    <h3>Configuration</h3>\n    <p>In order to use an LTS release, primeng import path must reference the primeng-lts package.</p>\n\n    <h4>tsconfig.path</h4>\n<pre>\n<code class=\"language-javascript\" pCode ngNonBindable>\n&#123;\n    \"compilerOptions\": &#123;\n        //...other options\n        \"paths\": &#123;\n            \"primeng/*\": [\"node_modules/primeng-lts/*\"]\n        &#125;\n    &#125;\n&#125;\n</code>\n</pre>\n\n    <p>In addition, primeng.min.css needs to be loaded from the primeng-lts package.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnode_modules/primeng-lts/resources/primeng.min.css\n</code>\n</pre>\n\n    <h3 style=\"margin-bottom:10px\">FAQ</h3>\n    <p-accordion>\n        <p-accordionTab header=\"Is LTS license mandatory to use PrimeNG?\">\n            No, latest version of PrimeNG is free to use under the MIT License. Maintenance releases of the latest version are also free to use until a new major version comes which happens every 6 months.\n        </p-accordionTab>\n        <p-accordionTab header=\"Is the license per organization, per developer or per cpu/server?\">\n            LTS license is per developer, for example if your team has 5 developers who work with PrimeNG, then 5 licenses are required.\n        </p-accordionTab>\n        <p-accordionTab header=\"How long is the duration of the LTS license?\">\n            Duration is 1 year.\n        </p-accordionTab>\n        <p-accordionTab header=\"What happens after the license duration ends?\">\n            Licenses need to be renewed at PrimeStore.\n        </p-accordionTab>\n        <p-accordionTab header=\"Does the license renew automatically?\">\n            No, renewal should be done manually at PrimeStore.\n        </p-accordionTab>\n        <p-accordionTab header=\"Is it possible to add developers to the existing license?\">\n            At PrimeStore there is an option to add developers to an existing license in case your team grows. Fee is calculated based on the remaining time until the expiry of your license.\n        </p-accordionTab>\n        <p-accordionTab header=\"Does LTS provide a support contact?\">\n            No, PrimeNG PRO is the service where response of PrimeTek engineers is secured within 1 business day.\n        </p-accordionTab>\n        <p-accordionTab header=\"How about the older versions that are not covered by LTS?\">\n            PrimeNG PRO covers versions even that are not covered by the LTS.\n        </p-accordionTab>\n        <p-accordionTab header=\"Does PRO provide access to the LTS releases?\">\n            Yes, PRO users are granted licenses to access LTS releases.\n        </p-accordionTab>\n        <p-accordionTab header=\"What is the difference between LTS and PRO?\">\n            PrimeNG PRO is a premium support service delivered via <a href=\"htps://pro.primefaces.org\">pro.primefaces.org</a> where support engineers of PrimeTek provide assistance\n            within 1 business day to the raised tickets. LTS on the other hand provides a license to utilize the long term support versions.\n        </p-accordionTab>\n    </p-accordion>\n\n</div>");

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

/***/ "./src/app/showcase/components/lts/lts-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/lts/lts-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LTSRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTSRoutingModule", function() { return LTSRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lts.component */ "./src/app/showcase/components/lts/lts.component.ts");




let LTSRoutingModule = class LTSRoutingModule {
};
LTSRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _lts_component__WEBPACK_IMPORTED_MODULE_3__["LTSComponent"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], LTSRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/lts/lts.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/lts/lts.component.ts ***!
  \**********************************************************/
/*! exports provided: LTSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTSComponent", function() { return LTSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LTSComponent = class LTSComponent {
};
LTSComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/lts/lts.component.html")).default
    })
], LTSComponent);



/***/ }),

/***/ "./src/app/showcase/components/lts/lts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/showcase/components/lts/lts.module.ts ***!
  \*******************************************************/
/*! exports provided: LTSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTSModule", function() { return LTSModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lts.component */ "./src/app/showcase/components/lts/lts.component.ts");
/* harmony import */ var _lts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lts-routing.module */ "./src/app/showcase/components/lts/lts-routing.module.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ "./src/app/components/accordion/public_api.ts");







let LTSModule = class LTSModule {
};
LTSModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _lts_routing_module__WEBPACK_IMPORTED_MODULE_4__["LTSRoutingModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_5__["CodeHighlighterModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"]
        ],
        declarations: [
            _lts_component__WEBPACK_IMPORTED_MODULE_3__["LTSComponent"]
        ]
    })
], LTSModule);



/***/ })

}]);
//# sourceMappingURL=components-lts-lts-module-es2015.js.map