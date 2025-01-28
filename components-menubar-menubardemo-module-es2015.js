(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menubar-menubardemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menubar/menubardemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menubar/menubardemo.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Menubar</span>\n        <span>Menubar is an horizontal menu components with support for nested submenus.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-menubar [model]=\"items\">\n        <div>\n            <input type=\"text\" pInputText placeholder=\"Search\">\n            <button pButton label=\"Logout\" icon=\"pi pi-power-off\" style=\"margin-left:.25em\"></button>\n        </div>\n    </p-menubar>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MenubarModule&#125; from 'primeng/menubar';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>Menubar uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>Menubar requires nested menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menubar [model]=\"items\"&gt;&lt;/p-menubar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenubarDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n<h3>Custom Content</h3>\n<p>Custom content can be placed between p-menubar tags.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menubar [model]=\"items\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\n    &lt;button pButton label=\"Logout\" icon=\"pi pi-power-off\"&gt;&lt;/button&gt;\n&lt;/p-menubar&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>ui-menubar</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menu-list</td>\n                        <td>List element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem</td>\n                        <td>Menuitem element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-text</td>\n                        <td>Label of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-icon</td>\n                        <td>Icon of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-submenu-icon</td>\n                        <td>Arrow icon of a submenu.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menubar\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-menubar-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-menubar [model]=\"items\"&gt;\n    &lt;div&gt;\n        &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\n        &lt;button pButton label=\"Logout\" icon=\"pi pi-power-off\" style=\"margin-left:.25em\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/p-menubar&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MenubarDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'pi pi-fw pi-file',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator:true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    &#123;label: 'Delete', icon: 'pi pi-fw pi-trash'&#125;,\n                    &#123;label: 'Refresh', icon: 'pi pi-fw pi-refresh'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'pi pi-fw pi-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'pi pi-fw pi-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'pi pi-fw pi-cog',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            &#123;label: 'Save', icon: 'pi pi-fw pi-save'&#125;,\n                            &#123;label: 'Update', icon: 'pi pi-fw pi-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'pi pi-fw pi-tags',\n                        items: [\n                            &#123;label: 'Delete', icon: 'pi pi-fw pi-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;separator:true&#125;,\n            &#123;\n                label: 'Quit', icon: 'pi pi-fw pi-times'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-menubar-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/menubar/menubardemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/menubar/menubardemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MenubarDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarDemoRoutingModule", function() { return MenubarDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menubardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menubardemo */ "./src/app/showcase/components/menubar/menubardemo.ts");




let MenubarDemoRoutingModule = class MenubarDemoRoutingModule {
};
MenubarDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _menubardemo__WEBPACK_IMPORTED_MODULE_3__["MenubarDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], MenubarDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/menubar/menubardemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/menubar/menubardemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: MenubarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarDemoModule", function() { return MenubarDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _menubardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menubardemo */ "./src/app/showcase/components/menubar/menubardemo.ts");
/* harmony import */ var _menubardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menubardemo-routing.module */ "./src/app/showcase/components/menubar/menubardemo-routing.module.ts");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "./src/app/components/menubar/public_api.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");










let MenubarDemoModule = class MenubarDemoModule {
};
MenubarDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _menubardemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["MenubarDemoRoutingModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["MenubarModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _menubardemo__WEBPACK_IMPORTED_MODULE_3__["MenubarDemo"]
        ]
    })
], MenubarDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/menubar/menubardemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/menubar/menubardemo.ts ***!
  \************************************************************/
/*! exports provided: MenubarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarDemo", function() { return MenubarDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenubarDemo = class MenubarDemo {
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
MenubarDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menubardemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/menubar/menubardemo.html")).default
    })
], MenubarDemo);



/***/ })

}]);
//# sourceMappingURL=components-menubar-menubardemo-module-es2015.js.map