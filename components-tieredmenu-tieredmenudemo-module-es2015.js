(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tieredmenu-tieredmenudemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tieredmenu/tieredmenudemo.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tieredmenu/tieredmenudemo.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tiered Menu</span>\n        <span>TieredMenu displays submenus in nested overlays.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-tieredMenu [model]=\"items\"></p-tieredMenu>\n\n    <h3>Popup</h3>\n    <button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\n    <p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"></p-tieredMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TieredMenuModule&#125; from 'primeng/tieredmenu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>TieredMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>TieredMenu requires nested menuitems as its <i>model</i>.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TieredMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Popup Mode</h3>\n            <p>Menu is inline by default, popup mode is also supported by enabling <i>popup</i> property and calling toggle method by passing the event \n                    from the anchor element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-fw pi-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the <i>showTransitionOptions</i> and <i>hideTransitionOptions</i> properties, \n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tieredMenu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-fw pi-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>popup</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if menu would displayed as a popup.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable\n                                of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>225ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>195ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>ui-tieredmenu</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menu-list</td>\n                        <td>List element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem</td>\n                        <td>Menuitem element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-text</td>\n                        <td>Label of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-icon</td>\n                        <td>Icon of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-submenu-icon</td>\n                        <td>Arrow icon of a submenu.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tieredmenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tieredmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\n\n&lt;h3&gt;Popup&lt;/h3&gt;\n&lt;button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TieredMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'pi pi-fw pi-file',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator:true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'pi pi-fw pi-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'pi pi-fw pi-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'pi pi-fw pi-cog',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'pi pi-fw pi-tags',\n                        items: [\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;separator:true&#125;,\n            &#123;\n                label: 'Quit', icon: 'pi pi-fw pi-times'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tieredmenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>");

/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TieredMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemoRoutingModule", function() { return TieredMenuDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tieredmenudemo */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");




let TieredMenuDemoRoutingModule = class TieredMenuDemoRoutingModule {
};
TieredMenuDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__["TieredMenuDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TieredMenuDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: TieredMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemoModule", function() { return TieredMenuDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tieredmenudemo */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");
/* harmony import */ var _tieredmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tieredmenudemo-routing.module */ "./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts");
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tieredmenu */ "./src/app/components/tieredmenu/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let TieredMenuDemoModule = class TieredMenuDemoModule {
};
TieredMenuDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tieredmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["TieredMenuDemoRoutingModule"],
            primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_5__["TieredMenuModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _tieredmenudemo__WEBPACK_IMPORTED_MODULE_3__["TieredMenuDemo"]
        ]
    })
], TieredMenuDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/tieredmenu/tieredmenudemo.ts ***!
  \******************************************************************/
/*! exports provided: TieredMenuDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemo", function() { return TieredMenuDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TieredMenuDemo = class TieredMenuDemo {
    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [{
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            },
            { separator: true },
            {
                label: 'Quit', icon: 'pi pi-fw pi-times'
            }
        ];
    }
};
TieredMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tieredmenudemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tieredmenu/tieredmenudemo.html")).default
    })
], TieredMenuDemo);



/***/ })

}]);
//# sourceMappingURL=components-tieredmenu-tieredmenudemo-module-es2015.js.map