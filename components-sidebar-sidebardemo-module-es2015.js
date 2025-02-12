(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sidebar-sidebardemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/sidebar/sidebardemo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/sidebar/sidebardemo.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Sidebar</span>\n        <span>Sidebar is a panel component displayed as an overlay.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Left Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n\n    <p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Right Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n\n    <p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Top Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n\n    <p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Bottom Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n\n    <p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Full Screen Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n\n    <button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"pi pi-arrow-right\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"pi pi-arrow-left\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"pi pi-arrow-down\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"pi pi-arrow-up\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"pi pi-th-large\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SidebarModule&#125; from 'primeng/sidebar';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Sidebar is used as a container and visibility is controlled with visible property.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\"&gt;\n    Content\n&lt;/p-sidebar&gt;\n\n&lt;button type=\"text\" (click)=\"display = true\" pButton icon=\"pi pi-plus\" label=\"Show\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Position</h3>\n            <p>Sidebar can either be located as the left (default), right, top or bottom of the screen depending on the <i>position</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\" position=\"right\"&gt;\n    Content\n&lt;/p-sidebar&gt;\n</code>\n</pre>\n\n            <h3>Size</h3>\n            <p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\" [style]=\"&#123;width:'30em'&#125;\"&gt;&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-sm\"&gt;&lt;/p-sidebar&gt;\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-md\"&gt;&lt;/p-sidebar&gt;\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-lg\"&gt;&lt;/p-sidebar&gt;\n</code>\n</pre>\n\n            <h3>Full Screen</h3>\n            <p>Full screen mode allows the sidebar to cover whole screen.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\" [fullScreen]=\"true\"&gt;\nContent\n&lt;/p-sidebar&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>visible</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifies the visibility of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>position</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Specifies the position of the sidebar, valid values are \"left\", \"right\", \"bottom\" and \"top\".</td>\n                        </tr>\n                        <tr>\n                            <td>fullScreen</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Adds a close icon to the header to hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>blockScroll</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to block scrolling of the document when sidebar is active.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>modal</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether an overlay mask is displayed behind the sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>dismissible</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to dismiss sidebar on click of the mask.</td>\n                        </tr>\n                        <tr>\n                            <td>showCloseIcon</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to display the close icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaCloseLabel</td>\n                            <td>string</td>\n                            <td>close</td>\n                            <td>Aria label of the close icon.</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnEscape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifices if pressing escape key should hide the sidebar.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onShow</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-sidebar</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-left</td>\n                            <td>Container element of left sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-right</td>\n                            <td>Container element of right sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-top</td>\n                            <td>Container element of top sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-bottom</td>\n                            <td>Container element of bottom sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-full</td>\n                            <td>Container element of a full screen sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-active</td>\n                            <td>Container element when sidebar is visible.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-close</td>\n                            <td>Close anchor element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-sm</td>\n                            <td>Small sized sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-md</td>\n                            <td>Medium sized sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-lg</td>\n                            <td>Large sized sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-mask</td>\n                            <td>Modal layer of the sidebar.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/sidebar\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-sidebar-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Left Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Right Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Top Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Bottom Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Full Screen Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"pi pi-arrow-right\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"pi pi-arrow-left\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"pi pi-arrow-down\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"pi pi-arrow-up\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"pi pi-th-large\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SidebarDemo &#123;\n\n    visibleSidebar1;\n\n    visibleSidebar2;\n\n    visibleSidebar3;\n\n    visibleSidebar4;\n\n    visibleSidebar5;\n\n&#125;\n</code>\n</pre>\n            </p-tabPanel>\n            <p-tabPanel header=\"StackBlitz\">\n                <ng-template pTemplate=\"content\">\n                    <iframe src=\"https://stackblitz.com/edit/primeng-sidebar-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n                </ng-template>\n            </p-tabPanel>\n        </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SidebarDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemoRoutingModule", function() { return SidebarDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sidebardemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebardemo */ "./src/app/showcase/components/sidebar/sidebardemo.ts");




let SidebarDemoRoutingModule = class SidebarDemoRoutingModule {
};
SidebarDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _sidebardemo__WEBPACK_IMPORTED_MODULE_3__["SidebarDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], SidebarDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/sidebar/sidebardemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemoModule", function() { return SidebarDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sidebardemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebardemo */ "./src/app/showcase/components/sidebar/sidebardemo.ts");
/* harmony import */ var _sidebardemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebardemo-routing.module */ "./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/sidebar */ "./src/app/components/sidebar/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");










let SidebarDemoModule = class SidebarDemoModule {
};
SidebarDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sidebardemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SidebarDemoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _sidebardemo__WEBPACK_IMPORTED_MODULE_4__["SidebarDemo"]
        ]
    })
], SidebarDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/sidebar/sidebardemo.ts ***!
  \************************************************************/
/*! exports provided: SidebarDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemo", function() { return SidebarDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarDemo = class SidebarDemo {
};
SidebarDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebardemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/sidebar/sidebardemo.html")).default,
        styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
    })
], SidebarDemo);



/***/ })

}]);
//# sourceMappingURL=components-sidebar-sidebardemo-module-es2015.js.map