(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-breadcrumb-breadcrumbdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/breadcrumb/breadcrumbdemo.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/breadcrumb/breadcrumbdemo.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Breadcrumb</span>\n        <span>Breadcrumb provides contextual information about page hierarchy.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-breadcrumb [model]=\"items\" [home]=\"home\"></p-breadcrumb>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;BreadcrumbModule&#125; from 'primeng/breadcrumb';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>Breadcrumb uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>Breadcrumb requires a collection of menuitems connected to its model property.</p>\n            \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class BreadcrumbDemo implements OnInit &#123;\n\n    private items: MenuItem[];\n    \n    ngOnInit() &#123;\n        this.items = [\n            &#123;label:'Categories'&#125;,\n            &#123;label:'Sports'&#125;,\n            &#123;label:'Football'&#125;,\n            &#123;label:'Countries'&#125;,\n            &#123;label:'Spain'&#125;,\n            &#123;label:'F.C. Barcelona'&#125;,\n            &#123;label:'Squad'&#125;,\n            &#123;label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-breadcrumb [model]=\"items\"&gt;&lt;/p-breadcrumb&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>home</td>\n                            <td>MenuItem</td>\n                            <td>null</td>\n                            <td>MenuItem configuration for the home icon.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onItemClick</td>\n                            <td>originalEvent: Browser event <br >\n                                item: Selected menu item\n                            </td>\n                            <td>Fired when an item is selected.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-breadcrumb</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-breadcrumb-chevron</td>\n                            <td>Chevron element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/breadcrumb\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-breadcrumb-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class BreadcrumbDemo implements OnInit &#123;\n\n    items: MenuItem[];\n\n    home: MenuItem;\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label:'Categories'&#125;,\n            &#123;label:'Sports'&#125;,\n            &#123;label:'Football'&#125;,\n            &#123;label:'Countries'&#125;,\n            &#123;label:'Spain'&#125;,\n            &#123;label:'F.C. Barcelona'&#125;,\n            &#123;label:'Squad'&#125;,\n            &#123;label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link'&#125;\n        ];\n        \n        this.home = &#123;icon: 'pi pi-home'&#125;;\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-breadcrumb [model]=\"items\" [home]=\"home\"&gt;&lt;/p-breadcrumb&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-breadcrumb-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>");

/***/ }),

/***/ "./src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BreadcrumbDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemoRoutingModule", function() { return BreadcrumbDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbdemo */ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts");




let BreadcrumbDemoRoutingModule = class BreadcrumbDemoRoutingModule {
};
BreadcrumbDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], BreadcrumbDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/breadcrumb/breadcrumbdemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemoModule", function() { return BreadcrumbDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbdemo */ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts");
/* harmony import */ var _breadcrumbdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbdemo-routing.module */ "./src/app/showcase/components/breadcrumb/breadcrumbdemo-routing.module.ts");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/breadcrumb */ "./src/app/components/breadcrumb/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");








let BreadcrumbDemoModule = class BreadcrumbDemoModule {
};
BreadcrumbDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _breadcrumbdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbDemoRoutingModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
        ],
        declarations: [
            _breadcrumbdemo__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbDemo"]
        ]
    })
], BreadcrumbDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/breadcrumb/breadcrumbdemo.ts ***!
  \******************************************************************/
/*! exports provided: BreadcrumbDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbDemo", function() { return BreadcrumbDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BreadcrumbDemo = class BreadcrumbDemo {
    ngOnInit() {
        this.items = [
            { label: 'Categories' },
            { label: 'Sports' },
            { label: 'Football' },
            { label: 'Countries' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona' },
            { label: 'Squad' },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link' }
        ];
        this.home = { icon: 'pi pi-home' };
    }
};
BreadcrumbDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./breadcrumbdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/breadcrumb/breadcrumbdemo.html")).default
    })
], BreadcrumbDemo);



/***/ })

}]);
//# sourceMappingURL=components-breadcrumb-breadcrumbdemo-module-es2015.js.map