(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tabmenu-tabmenudemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tabmenu/tabmenudemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tabmenu/tabmenudemo.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">TabMenu</span>\n        <span>Menu is a navigation/command component that displays items as tab headers.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-tabMenu [model]=\"items1\" [activeItem]=\"items1[0]\"></p-tabMenu>\n\n    <h3>Templating</h3>\n    <p-tabMenu [model]=\"items2\" [activeItem]=\"activeItem\">\n        <ng-template pTemplate=\"item\" let-item let-i=\"index\">\n            <div style=\"position: relative; text-align: center; min-width: 10em\">\n                <div class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\" style=\"font-size: 2em; margin-right:.3em;\"></div>\n                <div class=\"ui-menuitem-text\">\n                    {{item.label}}\n                </div>\n                <a tabindex=\"0\" class=\"ui-menuitem-icon\" (click)=\"closeItem($event, i)\" style=\"position: absolute; right: -1em; top: -.5em; padding: 0\" *ngIf=\"i !== 0\">\n                    <span class=\"pi pi-times\"></span>\n                </a>\n            </div>\n        </ng-template>\n    </p-tabMenu>\n\n    <h3>Router Outlet</h3>\n    <p-tabMenu [model]=\"items3\">\n    </p-tabMenu>\n    <div style=\"padding: 0.5em;\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TabMenuModule&#125; from 'primeng/tabmenu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>TabMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>TabMenu requires a collection of menuitems as its <i>model</i>.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tabMenu [model]=\"items\"&gt;&lt;/p-tabMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TabMenuDemo &#123;\n    \n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Home', icon: 'pi pi-fw pi-home'&#125;,\n            &#123;label: 'Calendar', icon: 'pi pi-fw pi-calendar'&#125;,\n            &#123;label: 'Edit', icon: 'pi pi-fw pi-pencil'&#125;,\n            &#123;label: 'Documentation', icon: 'pi pi-fw pi-file'&#125;,\n            &#123;label: 'Settings', icon: 'pi pi-fw pi-cog'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>ActiveItem</h3>\n            <p>By default item that matches the active route is highlighted, alternatively <i>activeItem</i> property can be used choose the initial active item.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\"&gt;&lt;/p-tabMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TabMenuDemo &#123;\n    \n    items: MenuItem[];\n    \n    activeItem: MenuItem;\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Home', icon: 'pi pi-fw pi-home'&#125;,\n            &#123;label: 'Calendar', icon: 'pi pi-fw pi-calendar'&#125;,\n            &#123;label: 'Edit', icon: 'pi pi-fw pi-pencil'&#125;,\n            &#123;label: 'Documentation', icon: 'pi pi-fw pi-file'&#125;,\n            &#123;label: 'Settings', icon: 'pi pi-fw pi-cog'&#125;\n        ];\n        \n        this.activeItem = this.items[0];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Templating</h3>\n            <p>Menuitem content supports templating via the \"item\" template which gets the menuitem instance and the index.</p>\n            <pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n&lt;p-tabMenu [model]=\"items\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item let-i=\"index\"&gt;\n        //item content\n    &lt;/ng-template&gt;\n&lt;/p-tabMenu&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>activeItem</td>\n                            <td>MenuItem</td>\n                            <td>null</td>\n                            <td>Defines the default active menuitem</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-tabmenu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tabmenu-nav</td>\n                            <td>List element of headers.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-tabmenuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-link</td>\n                            <td>Link inside a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tabmenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-tabmenu-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-tabMenu [model]=\"items1\" [activeItem]=\"items1[0]\"&gt;&lt;/p-tabMenu&gt;\n\n&lt;h3&gt;Templating&lt;/h3&gt;\n&lt;p-tabMenu [model]=\"items2\" [activeItem]=\"activeItem\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item let-i=\"index\"&gt;\n        &lt;div style=\"position: relative; text-align: center; min-width: 10em\"&gt;\n            &lt;div class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\" style=\"font-size: 2em\"&gt;&lt;/div&gt;\n            &lt;div class=\"ui-menuitem-text\"&gt;\n                &#123;&#123;item.label&#125;&#125;\n            &lt;/div&gt;\n            &lt;a tabindex=\"0\" class=\"ui-menuitem-icon\" (click)=\"closeItem($event, i)\" style=\"position: absolute; right: -1em; top: -.5em; padding: 0\" *ngIf=\"i !== 0\"&gt;\n                &lt;span class=\"pi pi-times\"&gt;&lt;/span&gt;\n            &lt;/a&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-tabMenu&gt;\n\n&lt;h3&gt;Router Outlet&lt;/h3&gt;\n&lt;p-tabMenu [model]=\"items3\"&gt;\n&lt;/p-tabMenu&gt;\n&lt;div style=\"padding: 0.5em;\"&gt;\n    &lt;router-outlet&gt;&lt;/router-outlet&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TabMenuDemo &#123;\n    \n    items1: MenuItem[];\n\n    items2: MenuItem[];\n\n    items3: MenuItem[];\n\n    activeItem: MenuItem;\n\n    ngOnInit() &#123;\n        this.items1 = [\n            &#123;label: 'Home', icon: 'pi pi-fw pi-home'&#125;,\n            &#123;label: 'Calendar', icon: 'pi pi-fw pi-calendar'&#125;,\n            &#123;label: 'Edit', icon: 'pi pi-fw pi-pencil'&#125;,\n            &#123;label: 'Documentation', icon: 'pi pi-fw pi-file'&#125;,\n            &#123;label: 'Settings', icon: 'pi pi-fw pi-cog'&#125;\n        ];\n\n        this.items2 = [\n            &#123;label: 'Home', icon: 'pi pi-fw pi-home'&#125;,\n            &#123;label: 'Calendar', icon: 'pi pi-fw pi-calendar'&#125;,\n            &#123;label: 'Edit', icon: 'pi pi-fw pi-pencil'&#125;,\n            &#123;label: 'Documentation', icon: 'pi pi-fw pi-file'&#125;,\n            &#123;label: 'Settings', icon: 'pi pi-fw pi-cog'&#125;\n        ];\n\n        this.items3 = [\n            &#123;label: 'Info', icon: 'pi pi-fw pi-chart-bar', routerLink:'info'&#125;,\n            &#123;label: 'Message', icon: 'pi pi-fw pi-calendar', routerLink:'message'&#125;\n        ];\n\n        this.activeItem = this.items2[0];\n    &#125;\n\n    closeItem(event, index) &#123;\n        this.items2 = this.items2.filter((item, i) => i !== index);\n        event.preventDefault();\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-tabmenu-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TabMenuDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuDemoRoutingModule", function() { return TabMenuDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabmenudemo */ "./src/app/showcase/components/tabmenu/tabmenudemo.ts");




let TabMenuDemoRoutingModule = class TabMenuDemoRoutingModule {
};
TabMenuDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["TabMenuDemo"], children: [
                        { path: '', redirectTo: 'info', pathMatch: 'full' },
                        { path: 'info', component: _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
                        { path: 'message', component: _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"] }
                    ] },
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TabMenuDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/tabmenu/tabmenudemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/tabmenu/tabmenudemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: TabMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuDemoModule", function() { return TabMenuDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabmenudemo */ "./src/app/showcase/components/tabmenu/tabmenudemo.ts");
/* harmony import */ var _tabmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabmenudemo-routing.module */ "./src/app/showcase/components/tabmenu/tabmenudemo-routing.module.ts");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tabmenu */ "./src/app/components/tabmenu/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/message */ "./src/app/components/message/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let TabMenuDemoModule = class TabMenuDemoModule {
};
TabMenuDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tabmenudemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabMenuDemoRoutingModule"],
            primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__["TabMenuModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_7__["MessageModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["TabMenuDemo"],
            _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"],
            _tabmenudemo__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]
        ]
    })
], TabMenuDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/tabmenu/tabmenudemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/tabmenu/tabmenudemo.ts ***!
  \************************************************************/
/*! exports provided: TabMenuDemo, InfoComponent, MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuDemo", function() { return TabMenuDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabMenuDemo = class TabMenuDemo {
    ngOnInit() {
        this.items1 = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];
        this.items2 = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];
        this.items3 = [
            { label: 'Info', icon: 'pi pi-fw pi-chart-bar', routerLink: 'info' },
            { label: 'Message', icon: 'pi pi-fw pi-calendar', routerLink: 'message' }
        ];
        this.activeItem = this.items2[0];
    }
    closeItem(event, index) {
        this.items2 = this.items2.filter((item, i) => i !== index);
        event.preventDefault();
    }
};
TabMenuDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabmenudemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/tabmenu/tabmenudemo.html")).default
    })
], TabMenuDemo);

let InfoComponent = class InfoComponent {
    ngOnInit() {
    }
};
InfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: `
    <div class="p-grid p-fluid" style="text-align: center;">
        <div class="p-col-12 p-md-4">
        </div>
        <div class="p-col-12 p-md-4">
            <img src="assets/showcase/images/demo/tabmenu/avicii.jpeg" style="max-height: 200px">
            <h3>Avicii</h3>
        </div>
    </div>
    <div class="p-grid p-fluid p-justify-center" style="text-align: center;">
        <div class="p-col-12 p-md-3">
            <label>Stage Name</label>
            <p>Avicii</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Genre</label>
            <p>Progressive House</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Label</label>
            <p>LE7ELS</p>
        </div>
    </div>
    <div class="p-grid p-fluid p-justify-center" style="text-align: center;">
        <div class="p-col-12 p-md-3">
            <label>Real Name</label>
            <p>Tim Berling</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Birth Day</label>
            <p>09/08/1989</p>
        </div>
        <div class="p-col-12 p-md-3">
            <label>Death Day</label>
            <p>04/20/2018</p>
        </div>
    </div>
    `
    })
], InfoComponent);

let MessageComponent = class MessageComponent {
};
MessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: `
    <h3>Inline Message CSS</h3>
    <p>p-message component is used to display inline messages mostly within forms.</p>
    <p-message severity="info" text="PrimeNG Rocks"></p-message>
    `
    })
], MessageComponent);



/***/ })

}]);
//# sourceMappingURL=components-tabmenu-tabmenudemo-module-es2015.js.map