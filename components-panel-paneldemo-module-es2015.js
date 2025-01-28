(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-panel-paneldemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/panel/paneldemo.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/panel/paneldemo.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Panel</span>\n        <span>Panel is a grouping component with the optional content toggle feature.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    </p-panel>\n\n    <p-panel>\n        <p-header>\n            <div class=\"ui-helper-clearfix\">\n                <span class=\"ui-panel-title\" style=\"display:inline-block;margin-top:.4em\">Custom Header</span>\n\n                <p-splitButton [style]=\"{'float':'right'}\" label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"></p-splitButton>\n            </div>\n        </p-header>\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n        <p-footer>\n            <button pButton type=\"button\" icon=\"pi pi-plus\" label=\"New\" class=\"ui-button-info\" style=\"margin-right: .25em\"></button>\n            <button pButton type=\"button\" icon=\"pi pi-search\" label=\"View\" class=\"ui-button-success\"></button>\n        </p-footer>\n    </p-panel>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;PanelModule&#125; from 'primeng/panel';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Panel is defined with p-panel element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel header=\"Title\"&gt;\n    Content\n&lt;/p-panel&gt;\n</code>\n</pre>\n            <h3>Toggleable</h3>\n            <p>Content of the panel can be expanded and collapsed using <i>toggleable</i> option, default state is defined with collapsed option. By default, toggle icon\n                is used to toggle the contents whereas setting toggler to \"header\" enables clicking anywhere in the header to trigger a toggle.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel header=\"Title\" [toggleable]=\"true\"&gt;\n    Content\n&lt;/p-panel&gt;\n</code>\n</pre>\n\n            <h3>Header and Footer Content</h3>\n            <p>Header and Footers sections can be customized using <i>p-header</i> and <i>p-footer</i> components.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel &gt;\n    &lt;p-header&gt;\n        Header content here\n    &lt;/p-header&gt;\n    Body Content\n    &lt;p-footer&gt;\n        Footer content here\n    &lt;/p-footer&gt;\n&lt;/p-panel&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the toggle animation can be customized using the <i>transitionOptions</i> property with a default value as <b>400ms cubic-bezier(0.86, 0, 0.07, 1)</b>, \n                example below disables the animation altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel [transitionOptions]=\"'0ms'\"&gt;\n&lt;/p-panel&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of the panel.</td>\n                        </tr>\n                        <tr>\n                            <td>toggleable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if content of panel can be expanded and collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>collapsed</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines the initial state of panel content, supports one or two-way binding as well.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>expandIcon</td>\n                            <td>string</td>\n                            <td>pi pi-plus</td>\n                            <td>Expand icon of the toggle button.</td>\n                        </tr>\n                        <tr>\n                            <td>collapseIcon</td>\n                            <td>string</td>\n                            <td>pi pi-minus</td>\n                            <td>Collapsed icon of the toggle button.</td>\n                        </tr>\n                        <tr>\n                            <td>showHeader</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifies if header of panel cannot be displayed.</td>\n                        </tr>\n                        <tr>\n                            <td>transitionOptions</td>\n                            <td>string</td>\n                            <td>400ms cubic-bezier(0.86, 0, 0.07, 1)</td>\n                            <td>Transition options of the animation.</td>\n                        </tr>\n                        <tr>\n                            <td>toggler</td>\n                            <td>string</td>\n                            <td>icon</td>\n                            <td>Specifies the toggler element to toggle the panel content, valid values are \"icon\" and \"header\".</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onBeforeToggle</td>\n                            <td>event.originalEvent: browser event<br>\n                                event.collapsed: state as a boolean</td>\n                            <td>Callback to invoke before content toggle.</td>\n                        </tr>\n                        <tr>\n                            <td>onAfterToggle</td>\n                            <td>event.originalEvent: browser event<br>\n                                event.collapsed: state as a boolean</td>\n                            <td>Callback to invoke after content toggle.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-panel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-titlebar</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-title</td>\n                            <td>Title text of panel.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-titlebar-toggler</td>\n                            <td>Toggle icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-panel-content</td>\n                            <td>Content of panel.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n        <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panel\" class=\"btn-viewsource\" target=\"_blank\">\n            <span>View on GitHub</span>\n        </a>\n        <a href=\"https://stackblitz.com/edit/primeng-panel-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n            <span>Edit in StackBlitz</span>\n        </a>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"&#123;'margin-bottom':'20px'&#125;\"&gt;\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n&lt;/p-panel&gt;\n\n&lt;p-panel&gt;\n    &lt;p-header&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\"&gt;Custom Header&lt;/span&gt;\n            &lt;p-splitButton [style]=\"&#123;'float':'right'&#125;\" label=\"Save\" icon=\"pi pi-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\n        &lt;/div&gt;\n    &lt;/p-header&gt;\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n    &lt;p-footer&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-plus\" label=\"New\" class=\"ui-button-info\" style=\"margin-right: .25em\"&gt;&lt;/button&gt;\n        &lt;button pButton type=\"button\" icon=\"pi pi-search\" label=\"View\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;\n&lt;/p-panel&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-panel-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/components/panel/panel.ts":
/*!*******************************************!*\
  !*** ./src/app/components/panel/panel.ts ***!
  \*******************************************/
/*! exports provided: Panel, PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let idx = 0;
let Panel = class Panel {
    constructor(el) {
        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'pi pi-plus';
        this.collapseIcon = 'pi pi-minus';
        this.showHeader = true;
        this.toggler = "icon";
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = `ui-panel-${idx++}`;
    }
    onHeaderClick(event) {
        if (this.toggler === 'header') {
            this.toggle(event);
        }
    }
    onIconClick(event) {
        if (this.toggler === 'icon') {
            this.toggle(event);
        }
    }
    toggle(event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        event.preventDefault();
    }
    expand(event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    }
    collapse(event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onToggleDone(event) {
        this.animating = false;
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
    }
};
Panel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Panel.prototype, "toggleable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Panel.prototype, "header", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Panel.prototype, "collapsed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Panel.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Panel.prototype, "styleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Panel.prototype, "expandIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Panel.prototype, "collapseIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Panel.prototype, "showHeader", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Panel.prototype, "toggler", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Panel.prototype, "collapsedChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Panel.prototype, "onBeforeToggle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Panel.prototype, "onAfterToggle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Panel.prototype, "transitionOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_3__["Footer"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Panel.prototype, "footerFacet", void 0);
Panel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-panel',
        template: `
        <div [attr.id]="id" [ngClass]="'ui-panel ui-widget ui-widget-content ui-corner-all'" [ngStyle]="style" [class]="styleClass">
            <div [ngClass]="{'ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all': true, 'ui-panel-titlebar-clickable': (toggleable && toggler === 'header')}" 
                *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
                <span class="ui-panel-title" *ngIf="header" [attr.id]="id + '_header'">{{header}}</span>
                <ng-content select="p-header"></ng-content>
                <a *ngIf="toggleable" [attr.id]="id + '-label'" class="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" tabindex="0"
                    (click)="onIconClick($event)" (keydown.enter)="onIconClick($event)" [attr.aria-controls]="id + '-content'" role="tab" [attr.aria-expanded]="!collapsed">
                    <span [class]="collapsed ? expandIcon : collapseIcon"></span>
                </a>
            </div>
            <div [attr.id]="id + '-content'" class="ui-panel-content-wrapper" [@panelContent]="collapsed ? {value: 'hidden', params: {transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity:'0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1'}}" (@panelContent.done)="onToggleDone($event)"
                [ngClass]="{'ui-panel-content-wrapper-overflown': collapsed||animating}"
                role="region" [attr.aria-hidden]="collapsed" [attr.aria-labelledby]="id  + '-titlebar'">
                <div class="ui-panel-content ui-widget-content">
                    <ng-content></ng-content>
                </div>
                
                <div class="ui-panel-footer ui-widget-content" *ngIf="footerFacet">
                    <ng-content select="p-footer"></ng-content>
                </div>
            </div>
        </div>
    `,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('panelContent', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    height: '0',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    height: '{{height}}',
                    opacity: '{{opacity}}'
                }), { params: { height: '0', opacity: '0' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    height: '*',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{transitionParams}}'))
            ])
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], Panel);

let PanelModule = class PanelModule {
};
PanelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Panel, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        declarations: [Panel]
    })
], PanelModule);



/***/ }),

/***/ "./src/app/components/panel/public_api.ts":
/*!************************************************!*\
  !*** ./src/app/components/panel/public_api.ts ***!
  \************************************************/
/*! exports provided: Panel, PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel */ "./src/app/components/panel/panel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _panel__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return _panel__WEBPACK_IMPORTED_MODULE_0__["PanelModule"]; });




/***/ }),

/***/ "./src/app/showcase/components/panel/paneldemo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/panel/paneldemo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PanelDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemoRoutingModule", function() { return PanelDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paneldemo */ "./src/app/showcase/components/panel/paneldemo.ts");




let PanelDemoRoutingModule = class PanelDemoRoutingModule {
};
PanelDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _paneldemo__WEBPACK_IMPORTED_MODULE_3__["PanelDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], PanelDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/panel/paneldemo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/showcase/components/panel/paneldemo.module.ts ***!
  \***************************************************************/
/*! exports provided: PanelDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemoModule", function() { return PanelDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _paneldemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paneldemo */ "./src/app/showcase/components/panel/paneldemo.ts");
/* harmony import */ var _paneldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paneldemo-routing.module */ "./src/app/showcase/components/panel/paneldemo-routing.module.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ "./src/app/components/panel/public_api.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./src/app/components/toast/public_api.ts");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/splitbutton */ "./src/app/components/splitbutton/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");










let PanelDemoModule = class PanelDemoModule {
};
PanelDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _paneldemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["PanelDemoRoutingModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_7__["SplitButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _paneldemo__WEBPACK_IMPORTED_MODULE_3__["PanelDemo"]
        ]
    })
], PanelDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/panel/paneldemo.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/components/panel/paneldemo.ts ***!
  \********************************************************/
/*! exports provided: PanelDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemo", function() { return PanelDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");



let PanelDemo = class PanelDemo {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
        this.items = [
            { label: 'Update', icon: 'pi pi-fw pi-refresh', command: () => {
                    this.update();
                } },
            { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => {
                    this.delete();
                } },
            { label: 'Angular.io', icon: 'pi pi-fw pi-external-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'pi pi-fw pi-cog', routerLink: ['/theming'] }
        ];
    }
    save() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    }
    update() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    }
    delete() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    }
};
PanelDemo.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
PanelDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paneldemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/panel/paneldemo.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], PanelDemo);



/***/ })

}]);
//# sourceMappingURL=components-panel-paneldemo-module-es2015.js.map