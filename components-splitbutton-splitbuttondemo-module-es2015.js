(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-splitbutton-splitbuttondemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/splitbutton/splitbuttondemo.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/splitbutton/splitbuttondemo.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">SplitButton</span>\n        <span>SplitButton groups a set of commands in an overlay with a default command.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <h3 class=\"first\">Basic</h3>\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\"></p-splitButton>\n\n    <h3>Severities</h3>\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-secondary\"></p-splitButton>\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('success')\" [model]=\"items\" styleClass=\"ui-button-success\"></p-splitButton>\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-info\"></p-splitButton>\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('warn')\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton>\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('error')\" [model]=\"items\" styleClass=\"ui-button-danger\"></p-splitButton>\n\n    <h3>RTL</h3>\n    <p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" dir=\"rtl\"></p-splitButton>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n                    <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SplitButtonModule&#125; from 'primeng/splitbutton';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>SplitButton has a default command button and a collection of menuitems to be displayed in an overlay.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the <i>showTransitionOptions</i> and <i>hideTransitionOptions</i> properties, \n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-splitButton [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n</code>\n</pre>\n            <h3>MenuModel API</h3>\n            <p>SplitButton uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Text of the button.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the icon.</td>\n                        </tr>\n                        <tr>\n                            <td>iconPos</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>menuStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the overlay menu.</td>\n                        </tr>\n                        <tr>\n                            <td>menuStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the overlay menu.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>dir</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Indicates the direction of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>225ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>195ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onClick</td>\n                            <td>event: browser event<br></td>\n                            <td>Callback to invoke when default command button is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onDropdownClick</td>\n                            <td>event: browser event<br></td>\n                            <td>Callback to invoke when dropdown button is clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n          <h3>Severity</h3>\n          <p>Different color options are available to define severity levels.</p>\n\n          <ul>\n            <li>.ui-button-secondary</li>\n            <li>.ui-button-success</li>\n            <li>.ui-button-info</li>\n            <li>.ui-button-warning</li>\n            <li>.ui-button-danger</li>\n          </ul>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\n</code>\n</pre>\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>. SplitButton uses\n            button and menu components internally, refer to their documentation for the detailed style list.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-splitbutton</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-splitbutton-button</td>\n                            <td>Dropdown button.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu</td>\n                            <td>Overlay menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/splitbutton\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-splitbutton-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n\n&lt;h3&gt;Severities&lt;/h3&gt;\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-secondary\"&gt;&lt;/p-splitButton&gt;\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('success')\" [model]=\"items\" styleClass=\"ui-button-success\"&gt;&lt;/p-splitButton&gt;\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" styleClass=\"ui-button-info\"&gt;&lt;/p-splitButton&gt;\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('warn')\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('error')\" [model]=\"items\" styleClass=\"ui-button-danger\"&gt;&lt;/p-splitButton&gt;\n\n&lt;h3&gt;RTL&lt;/h3&gt;\n&lt;p-splitButton label=\"Save\" icon=\"pi pi-file\" (onClick)=\"save('info')\" [model]=\"items\" dir=\"rtl\"&gt;&lt;/p-splitButton&gt;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SplitButtonDemo implements OnInit &#123;\n\n    items: MenuItem[];\n\n    constructor(private messageService: MessageService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;label: 'Update', icon: 'pi pi-refresh', command: () => &#123;\n                this.update();\n            &#125;&#125;,\n            &#123;label: 'Delete', icon: 'pi pi-times', command: () => &#123;\n                this.delete();\n            &#125;&#125;,\n            &#123;label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'&#125;,\n            &#123;separator: true&#125;,\n            &#123;label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']&#125;\n        ];\n    &#125;\n\n    save(severity: string) &#123;\n        this.messageService.add(&#123;severity:severity, summary:'Success', detail:'Data Saved'&#125;);\n    &#125;\n\n    update() &#123;\n        this.messageService.add(&#123;severity:'success', summary:'Success', detail:'Data Updated'&#125;);\n    &#125;\n\n    delete() &#123;\n        this.messageService.add(&#123;severity:'success', summary:'Success', detail:'Data Deleted'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-splitbutton-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n     </p-tabView >\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SplitButtonDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoRoutingModule", function() { return SplitButtonDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitbuttondemo */ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts");




let SplitButtonDemoRoutingModule = class SplitButtonDemoRoutingModule {
};
SplitButtonDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__["SplitButtonDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], SplitButtonDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: SplitButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoModule", function() { return SplitButtonDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitbuttondemo */ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts");
/* harmony import */ var _splitbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splitbuttondemo-routing.module */ "./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/splitbutton */ "./src/app/components/splitbutton/public_api.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./src/app/components/toast/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let SplitButtonDemoModule = class SplitButtonDemoModule {
};
SplitButtonDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _splitbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["SplitButtonDemoRoutingModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_5__["SplitButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _splitbuttondemo__WEBPACK_IMPORTED_MODULE_3__["SplitButtonDemo"]
        ]
    })
], SplitButtonDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo.ts ***!
  \********************************************************************/
/*! exports provided: SplitButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemo", function() { return SplitButtonDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");



let SplitButtonDemo = class SplitButtonDemo {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
        this.items = [
            { label: 'Update', icon: 'pi pi-refresh', command: () => {
                    this.update();
                } },
            { label: 'Delete', icon: 'pi pi-times', command: () => {
                    this.delete();
                } },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
        ];
    }
    save(severity) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }
    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }
    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
};
SplitButtonDemo.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
SplitButtonDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./splitbuttondemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/splitbutton/splitbuttondemo.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
        styles: ["\n        :host ::ng-deep .ui-splitbutton {\n            margin-right: .25em;\n        }\n    "]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], SplitButtonDemo);



/***/ })

}]);
//# sourceMappingURL=components-splitbutton-splitbuttondemo-module-es2015.js.map