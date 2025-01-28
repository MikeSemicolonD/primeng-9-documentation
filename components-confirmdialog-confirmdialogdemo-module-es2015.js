(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-confirmdialog-confirmdialogdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/confirmdialog/confirmdialogdemo.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/confirmdialog/confirmdialogdemo.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ConfirmDialog</span>\n        <span>ConfirmDialog is backed by a service utilizing Observables to display confirmation windows\n            easily that can be shared by multiple actions on the same component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Basic</h3>\n    <p-confirmDialog [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"></p-confirmDialog>\n    <button type=\"button\" (click)=\"confirm1()\" pButton icon=\"pi pi-check\" label=\"Confirm\"></button>\n    <button type=\"button\" (click)=\"confirm2()\" pButton icon=\"pi pi-times\" label=\"Delete\"></button>\n\n    <h3>Position</h3>\n    <div class=\"p-grid p-dir-col\">\n        <div class=\"p-col\">\n            <button type=\"button\" (click)=\"confirmPosition('left')\" pButton icon=\"pi pi-arrow-right\" label=\"Left\" class=\"ui-button-warning\"></button>\n            <button type=\"button\" (click)=\"confirmPosition('right')\" pButton icon=\"pi pi-arrow-left\" label=\"Right\" class=\"ui-button-warning\"></button>\n        </div>\n        <div class=\"p-col\">\n            <button type=\"button\" (click)=\"confirmPosition('topleft')\" pButton icon=\"pi pi-arrow-down\" label=\"TopLeft\" class=\"ui-button-warning\"></button>\n            <button type=\"button\" (click)=\"confirmPosition('top')\" pButton icon=\"pi pi-arrow-down\" label=\"Top\" class=\"ui-button-warning\"></button>\n            <button type=\"button\" (click)=\"confirmPosition('topright')\" pButton icon=\"pi pi-arrow-down\" label=\"TopRight\" class=\"ui-button-warning\"></button>\n        </div>\n        <div class=\"p-col\">\n            <button type=\"button\" (click)=\"confirmPosition('bottomleft')\" pButton icon=\"pi pi-arrow-up\" label=\"BottomLeft\" class=\"ui-button-warning\"></button>\n            <button type=\"button\" (click)=\"confirmPosition('bottom')\" pButton icon=\"pi pi-arrow-up\" label=\"Bottom\" class=\"ui-button-warning\"></button>\n            <button type=\"button\" (click)=\"confirmPosition('bottomright')\" pButton icon=\"pi pi-arrow-up\" label=\"BottomRight\" class=\"ui-button-warning\"></button>\n        </div>\n    </div>\n    <p-confirmDialog [style]=\"{width: '50vw'}\" key=\"positionDialog\" [position]=\"position\" [baseZIndex]=\"10000\"></p-confirmDialog>\n\n\n    <p-messages [value]=\"msgs\"></p-messages>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ConfirmDialogModule&#125; from 'primeng/confirmdialog';\nimport &#123;ConfirmationService&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ConfirmDialog is defined using p-confirmDialog tag and an instance of ConfirmationService is required to display it by\n                calling confirm method.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"&gt;&lt;/p-confirmDialog&gt;\n\n&lt;button type=\"text\" (click)=\"confirm()\" pButton icon=\"pi pi-check\" label=\"Confirm\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ConfirmDialogDemo &#123;\n\n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\n\n    confirm() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Are you sure that you want to perform this action?',\n            accept: () => &#123;\n                //Actual logic to perform a confirmation\n            &#125;\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Confirm method takes a confirmation instance used to customize the dialog UI along with accept and reject actions.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>message</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Message of the confirmation.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Optional key to match the key of the confirm dialog, necessary to use when component tree has multiple confirm dialogs.</td>\n                        </tr>\n                        <tr>\n                            <td>icon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon to display next to the message.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Header text of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>accept</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Callback to execute when action is confirmed.</td>\n                        </tr>\n                        <tr>\n                            <td>reject</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Callback to execute when action is rejected.</td>\n                        </tr>\n                        <tr>\n                            <td>acceptLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Label of the accept button.</td>\n                        </tr>\n                        <tr>\n                            <td>rejectLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Label of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>acceptIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon of the accept button.</td>\n                        </tr>\n                        <tr>\n                            <td>rejectIcon</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Icon of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>acceptButtonStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the accept button.</td>\n                        </tr>\n                        <tr>\n                            <td>rejectButtonStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>acceptVisible</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Visibility of the accept button.</td>\n                        </tr>\n                        <tr>\n                            <td>rejectVisible</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Visibility of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>maskStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the mask.</td>\n                        </tr>\n                        <tr>\n                            <td>blockScroll</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether background scroll should be blocked when dialog is visible.</td>\n                        </tr>\n                        <tr>\n                            <td>defaultFocus</td>\n                            <td>string</td>\n                            <td>accept</td>\n                            <td>Element to receive the focus when the dialog gets visible, valid values are \"accept\", \"reject\", \"close\" and \"none\".</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>ConfirmationService</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>confirm</td>\n                            <td>confirm: Confirmation Object</td>\n                            <td>Displays the dialog using the confirmation object options.</td>\n                        </tr>\n                        <tr>\n                            <td>close</td>\n                            <td>-</td>\n                            <td>Hides the dialog without invoking accept or reject callbacks.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Customization</h3>\n            <p>Properties of the dialog are defined in two ways, message, icon and header properties can either\n            be defined using confirm method or declaratively on p-confirmDialog ng-template. If these values are unlikely to change then\n            declarative approach would be useful, still properties defined in a ng-template can be overriden with confirm method call.</p>\n\n            <p>In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with\n            a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog #cd header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"&gt;\n    &lt;p-footer&gt;\n        &lt;button type=\"button\" pButton icon=\"pi pi-times\" label=\"No\" (click)=\"cd.reject()\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" pButton icon=\"pi pi-check\" label=\"Yes\" (click)=\"cd.accept()\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;\n&lt;/p-confirmDialog&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the ConfirmDialog open and hide animations can be customized using the transitionOptions property with a default value as <b>400ms cubic-bezier(0.25, 0.8, 0.25, 1)</b>,\n                example below disables the animation altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog [transitionOptions]=\"'0ms'\"&gt;\n&lt;/p-confirmDialog&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                         <tr>\n                            <td>header</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Title text of the dialog.</td>\n                         </tr>\n                         <tr>\n                           <td>message</td>\n                           <td>string</td>\n                           <td>null</td>\n                           <td>Message of the confirmation.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.</td>\n                        </tr>\n                        <tr>\n                          <td>icon</td>\n                          <td>string</td>\n                          <td>null</td>\n                          <td>Icon to display next to message.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptLabel</td>\n                          <td>string</td>\n                          <td>Yes</td>\n                          <td>Label of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptIcon</td>\n                          <td>string</td>\n                          <td>pi pi-check</td>\n                          <td>Icon of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>acceptVisible</td>\n                          <td>boolean</td>\n                          <td>true</td>\n                          <td>Visibility of the accept button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectLabel</td>\n                          <td>string</td>\n                          <td>No</td>\n                          <td>Label of the reject button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectIcon</td>\n                          <td>string</td>\n                          <td>pi pi-times</td>\n                          <td>Icon of the reject button.</td>\n                        </tr>\n                        <tr>\n                          <td>rejectVisible</td>\n                          <td>boolean</td>\n                          <td>true</td>\n                          <td>Visibility of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>closeOnEscape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Specifies if pressing escape key should hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>rtl</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled dialog is displayed in RTL direction.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Adds a close icon to the header to hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>focusTrap</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When enabled, can only focus on elements inside the confirm dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]=\"mydiv\" for a div element having #mydiv as variable name).</td>\n                        </tr>\n                        <tr>\n                            <td>acceptButtonStyleClass</td>\n                            <td>string</td>\n                            <td>ui-confirmdialog-acceptbutton</td>\n                            <td>Style class of the accept button.</td>\n                        </tr>\n                        <tr>\n                            <td>rejectButtonStyleClass</td>\n                            <td>string</td>\n                            <td>ui-confirmdialog-rejectbutton</td>\n                            <td>Style class of the reject button.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>transitionOptions</td>\n                            <td>string</td>\n                            <td>400ms cubic-bezier(0.25, 0.8, 0.25, 1)</td>\n                            <td>Transition options of the animation.</td>\n                        </tr>\n                        <tr>\n                            <td>defaultFocus</td>\n                            <td>string</td>\n                            <td>accept</td>\n                            <td>Element to receive the focus when the dialog gets visible, valid values are \"accept\", \"reject\", \"close\" and \"none\".</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-dialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-confirmdialog</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar</td>\n                            <td>Container of header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-title</td>\n                            <td>Header element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-icon</td>\n                            <td>Icon container inside header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-titlebar-close</td>\n                            <td>Close icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-dialog-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>ConfirmationService</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/confirmdialog\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-confirmdialog-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-confirmDialog [style]=\"&#123;width: '50vw'&#125;\"&gt;&lt;/p-confirmDialog&gt;\n\n&lt;button type=\"button\" (click)=\"confirm1()\" pButton icon=\"pi pi-check\" label=\"Confirm\"&gt;&lt;/button&gt;\n\n&lt;button type=\"button\" (click)=\"confirm2()\" pButton icon=\"pi pi-times\" label=\"Delete\"&gt;&lt;/button&gt;\n\n&lt;p-messages [value]=\"msgs\"&gt;&lt;/p-messages&gt;\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p-confirmDialog [style]=\"&#123;width: '50vw'&#125;\" [baseZIndex]=\"10000\"&gt;&lt;/p-confirmDialog&gt;\n&lt;button type=\"button\" (click)=\"confirm1()\" pButton icon=\"pi pi-check\" label=\"Confirm\"&gt;&lt;/button&gt;\n&lt;button type=\"button\" (click)=\"confirm2()\" pButton icon=\"pi pi-times\" label=\"Delete\"&gt;&lt;/button&gt;\n\n&lt;h3&gt;Position&lt;/h3&gt;\n&lt;div class=\"p-grid p-dir-col\"&gt;\n    &lt;div class=\"p-col\"&gt;\n        &lt;button type=\"button\" (click)=\"confirmPosition('left')\" pButton icon=\"pi pi-arrow-right\" label=\"Left\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" (click)=\"confirmPosition('right')\" pButton icon=\"pi pi-arrow-left\" label=\"Right\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col\"&gt;\n    &lt;button type=\"button\" (click)=\"confirmPosition('topleft')\" pButton icon=\"pi pi-arrow-down\" label=\"TopLeft\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" (click)=\"confirmPosition('top')\" pButton icon=\"pi pi-arrow-down\" label=\"Top\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" (click)=\"confirmPosition('topright')\" pButton icon=\"pi pi-arrow-down\" label=\"TopRight\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n    &lt;div class=\"p-col\"&gt;\n    &lt;button type=\"button\" (click)=\"confirmPosition('bottomleft')\" pButton icon=\"pi pi-arrow-up\" label=\"BottomLeft\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" (click)=\"confirmPosition('bottom')\" pButton icon=\"pi pi-arrow-up\" label=\"Bottom\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n        &lt;button type=\"button\" (click)=\"confirmPosition('bottomright')\" pButton icon=\"pi pi-arrow-up\" label=\"BottomRight\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;p-confirmDialog [style]=\"&#123;width: '50vw'&#125;\" key=\"positionDialog\" [position]=\"position\" [baseZIndex]=\"10000\"&gt;&lt;/p-confirmDialog&gt;\n\n\n&lt;p-messages [value]=\"msgs\"&gt;&lt;/p-messages&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './confirmdialogdemo.html',\n    styles: [`\n        :host ::ng-deep button &#123;\n            margin-right: .25em;\n        &#125;\n    `],\n    providers: [ConfirmationService]\n&#125;)\nexport class ConfirmDialogDemo &#123;\n\n    msgs: Message[] = [];\n\n    position: string;\n\n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\n\n    confirm1() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Are you sure that you want to proceed?',\n            header: 'Confirmation',\n            icon: 'pi pi-exclamation-triangle',\n            accept: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'You have accepted'&#125;];\n            &#125;,\n            reject: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\n            &#125;\n        &#125;);\n    &#125;\n\n    confirm2() &#123;\n        this.confirmationService.confirm(&#123;\n            message: 'Do you want to delete this record?',\n            header: 'Delete Confirmation',\n            icon: 'pi pi-info-circle',\n            accept: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'Record deleted'&#125;];\n            &#125;,\n            reject: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\n            &#125;\n        &#125;);\n    &#125;\n\n    confirmPosition(position: string) &#123;\n        this.position = position;\n\n        this.confirmationService.confirm(&#123;\n            message: 'Do you want to delete this record?',\n            header: 'Delete Confirmation',\n            icon: 'pi pi-info-circle',\n            accept: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'Record deleted'&#125;];\n            &#125;,\n            reject: () => &#123;\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\n            &#125;,\n            key: \"positionDialog\"\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-confirmdialog-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/components/messages/messages.ts":
/*!*************************************************!*\
  !*** ./src/app/components/messages/messages.ts ***!
  \*************************************************/
/*! exports provided: Messages, MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");





let Messages = class Messages {
    constructor(messageService, el) {
        this.messageService = messageService;
        this.el = el;
        this.closable = true;
        this.enableService = true;
        this.escape = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
        if (this.messageService && this.enableService && !this.contentTemplate) {
            this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
                if (messages) {
                    if (messages instanceof Array) {
                        let filteredMessages = messages.filter(m => this.key === m.key);
                        this.value = this.value ? [...this.value, ...filteredMessages] : [...filteredMessages];
                    }
                    else if (this.key === messages.key) {
                        this.value = this.value ? [...this.value, ...[messages]] : [messages];
                    }
                }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(key => {
                if (key) {
                    if (this.key === key) {
                        this.value = null;
                    }
                }
                else {
                    this.value = null;
                }
            });
        }
    }
    hasMessages() {
        let parentEl = this.el.nativeElement.parentElement;
        if (parentEl && parentEl.offsetParent) {
            return this.contentTemplate != null || this.value && this.value.length > 0;
        }
        return false;
    }
    getSeverityClass() {
        if (this.severity) {
            return 'ui-messages-' + this.severity;
        }
        else {
            const msg = this.value[0];
            if (msg) {
                const severities = ['info', 'warn', 'error', 'success'];
                const severity = severities.find(item => item === msg.severity);
                return severity && `ui-messages-${severity}`;
            }
        }
        return null;
    }
    clear(event) {
        this.value = [];
        this.valueChange.emit(this.value);
        event.preventDefault();
    }
    get icon() {
        const severity = this.severity || (this.hasMessages() ? this.value[0].severity : null);
        if (this.hasMessages()) {
            switch (severity) {
                case 'success':
                    return 'pi-check';
                    break;
                case 'info':
                    return 'pi-info-circle';
                    break;
                case 'error':
                    return 'pi-times';
                    break;
                case 'warn':
                    return 'pi-exclamation-triangle';
                    break;
                default:
                    return 'pi-info-circle';
                    break;
            }
        }
        return null;
    }
    ngOnDestroy() {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
    }
};
Messages.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], Messages.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Messages.prototype, "closable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Messages.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Messages.prototype, "styleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Messages.prototype, "enableService", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Messages.prototype, "key", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Messages.prototype, "escape", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Messages.prototype, "severity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Messages.prototype, "showTransitionOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Messages.prototype, "hideTransitionOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], Messages.prototype, "templates", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Messages.prototype, "valueChange", void 0);
Messages = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-messages',
        template: `
        <div *ngIf="hasMessages()" class="ui-messages ui-widget ui-corner-all"
                    [ngClass]="getSeverityClass()" role="alert" [ngStyle]="style" [class]="styleClass"
                    [@messageAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}">
            <a tabindex="0" class="ui-messages-close" (click)="clear($event)" (keydown.enter)="clear($event)" *ngIf="closable">
                <i class="pi pi-times"></i>
            </a>
            <span class="ui-messages-icon pi" [ngClass]="icon"></span>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            <ul *ngIf="value && value.length">
                <li *ngFor="let msg of value">
                    <div *ngIf="!escape; else escapeOut">
                        <span *ngIf="msg.summary" class="ui-messages-summary" [innerHTML]="msg.summary"></span>
                        <span *ngIf="msg.detail" class="ui-messages-detail" [innerHTML]="msg.detail"></span>
                    </div>
                    <ng-template #escapeOut>
                        <span *ngIf="msg.summary" class="ui-messages-summary">{{msg.summary}}</span>
                        <span *ngIf="msg.detail" class="ui-messages-detail">{{msg.detail}}</span>
                    </ng-template>
                </li>
            </ul>
        </div>
    `,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('messageAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-25%)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{showTransitionParams}}')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(('{{hideTransitionParams}}'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0,
                        transform: 'translateY(-25%)'
                    }))
                ])
            ])
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], Messages);

let MessagesModule = class MessagesModule {
};
MessagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Messages],
        declarations: [Messages]
    })
], MessagesModule);



/***/ }),

/***/ "./src/app/components/messages/public_api.ts":
/*!***************************************************!*\
  !*** ./src/app/components/messages/public_api.ts ***!
  \***************************************************/
/*! exports provided: Messages, MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/app/components/messages/messages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return _messages__WEBPACK_IMPORTED_MODULE_0__["Messages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return _messages__WEBPACK_IMPORTED_MODULE_0__["MessagesModule"]; });




/***/ }),

/***/ "./src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ConfirmDialogDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemoRoutingModule", function() { return ConfirmDialogDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmdialogdemo */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");




let ConfirmDialogDemoRoutingModule = class ConfirmDialogDemoRoutingModule {
};
ConfirmDialogDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ConfirmDialogDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmDialogDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemoModule", function() { return ConfirmDialogDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmdialogdemo */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
/* harmony import */ var _confirmdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmdialogdemo-routing.module */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/confirmdialog */ "./src/app/components/confirmdialog/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ "./src/app/components/messages/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");










let ConfirmDialogDemoModule = class ConfirmDialogDemoModule {
};
ConfirmDialogDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _confirmdialogdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogDemoRoutingModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_7__["MessagesModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_8__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_9__["CodeHighlighterModule"]
        ],
        declarations: [
            _confirmdialogdemo__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogDemo"]
        ]
    })
], ConfirmDialogDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/confirmdialog/confirmdialogdemo.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmDialogDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemo", function() { return ConfirmDialogDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");



let ConfirmDialogDemo = class ConfirmDialogDemo {
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.msgs = [];
    }
    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
    confirmPosition(position) {
        this.position = position;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            },
            key: "positionDialog"
        });
    }
};
ConfirmDialogDemo.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] }
];
ConfirmDialogDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmdialogdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/confirmdialog/confirmdialogdemo.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
        styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
], ConfirmDialogDemo);



/***/ })

}]);
//# sourceMappingURL=components-confirmdialog-confirmdialogdemo-module-es2015.js.map