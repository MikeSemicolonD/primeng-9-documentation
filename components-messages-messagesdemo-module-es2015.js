(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-messages-messagesdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/messages/messagesdemo.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/messages/messagesdemo.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Messages</span>\n        <span>Messages is used to display messages inline.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n\n    <h3 class=\"first\">Basic</h3>\n    <div>\n        <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\n        <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\n        <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\n        <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\n        <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\n        <button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" style=\"float:right\" label=\"Clear\"></button>\n    </div>\n    \n    <h3>Message Service</h3>\n    <button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"></button>\n\n    <h3>Static Content</h3>\n    <p-messages severity=\"info\">\n        <ng-template pTemplate>\n            <img src=\"assets/showcase/images/demo/organization/walter.jpg\" width=\"32\" />\n            <span class=\"custom-message\">I am the one who knocks.</span>\n        </ng-template>\n    </p-messages>\n    \n    <h3>Inline Message CSS</h3>\n    <p>p-message component is used to display inline messages mostly within forms.</p>\n    <p-message severity=\"info\" text=\"PrimeNG Rocks\"></p-message>\n    <p-message severity=\"success\" text=\"Record Saved\"></p-message>  \n    <p-message severity=\"warn\" text=\"Are you sure?\"></p-message>  \n    <p-message severity=\"error\" text=\"Field is required\"></p-message>\n    \n    <div style=\"margin-top:30px\">\n        <input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\">\n        <p-message severity=\"error\" text=\"Field is required\"></p-message>\n    </div>\n    \n    <div style=\"margin-top:30px\">\n        <input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\">\n        <p-message severity=\"error\"></p-message>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MessagesModule&#125; from 'primeng/messages';\nimport &#123;MessageModule&#125; from 'primeng/message';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>A single message is specified by Message interface in PrimeNG that defines the id, severity, summary and detail as the properties.\n                Messages to display can either be defined using the value property which should an array of Message instances or using \n               a MessageService are defined using the value property which should an array of Message instances.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n</code>\n</pre>\n            \n            <h3>Message Array</h3>\n            <p>A binding to the value property is required to provide messages to the component.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n\n&lt;button type=\"button\" (click)=\"show()\"&gt;Show&lt;/button&gt;\n&lt;button type=\"button\" (click)=\"clear()\"&gt;Hide&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshow() &#123;\n    this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\n&#125;\n\nhide() &#123;\n    this.msgs = [];\n&#125;\n</code>\n</pre>\n\n            <h3>Message Service</h3>\n            <p>MessageService alternative does not require a value binding to an array.\n            In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself \n            so that descandant components can have it injected. If there are multiple message components having the same message service, you may use key property of the component\n            to match the key of the message to implement scoping.</p>\n            \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MessageService&#125; from 'primeng/api';\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;Message&#125; from 'primeng//api';\nimport &#123;MessageService&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './messagesdemo.html'\n    &#125;)\n    export class MessageServiceDemo &#123;\n\n        constructor(private messageService: MessageService) &#123;&#125;\n\n        addSingle() &#123;\n            this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\n        &#125;\n\n        addMultiple() &#123;\n            this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\n                            &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\n        &#125;\n        \n        clear() &#123;\n            this.messageService.clear();\n        &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Closable</h3>\n            <p>Messages are closable by default resulting in a close icon being displayed on top right corner.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n</code>\n</pre>\n\n            <p>In order to disable closable messages, set <i>closable</i> to false. Note that in this case two-way binding is not necessary as the component\n            does not need to update its value.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages severity=\"info\"&gt;\n    &lt;ng-template pTemplate&gt;\n        &lt;img src=\"assets/showcase/images/demo/organization/walter.jpg\" width=\"32\" /&gt;\n        &lt;span class=\"custom-message\"&gt;I am the one who knocks.&lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-messages&gt;\n</code>\n</pre>\n\n            <h3>Severities</h3>\n            <p>Here are the possible values for the severity of a message.</p>\n            <ul>\n                <li>success</li>\n                <li>info</li>\n                <li>warn</li>\n                <li>error</li>\n            </ul>\n\n            <h3>Static Content</h3>\n            <p>Alternative way to provide the content for the messages is templating. In this case value property and message service is ignored and only static\n                is displayed.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [value]=\"msgs\" [closable]=\"false\"&gt;&lt;/p-messages&gt;\n</code>\n</pre>\n            \n            <h3>Message Component</h3>\n            <p>Message component is useful in cases where messages need to be displayed related to an element such as forms. It has two property, severity and text of the message.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\n</code>\n</pre>\n\n            <h3>Animation Configuration</h3>\n            <p>Transition of the open and hide animations can be customized using the <i>showTransitionOptions</i> and <i>hideTransitionOptions</i> properties, \n                example below disables the animations altogether.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-message [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of messages to display.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines if message box can be closed by the click icon.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>enableService</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether displaying services messages are enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>escape</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether displaying messages would be escaped or not.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Id to match the key of the message to enable scoping in service based messaging.</td>\n                        </tr>\n                        <tr>\n                            <td>showTransitionOptions</td>\n                            <td>string</td>\n                            <td>300ms ease-out</td>\n                            <td>Transition options of the show animation.</td>\n                        </tr>\n                        <tr>\n                            <td>hideTransitionOptions</td>\n                            <td>string</td>\n                            <td>250ms ease-in</td>\n                            <td>Transition options of the hide animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-messages</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-info</td>\n                            <td>Container element when displaying info messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-warn</td>\n                            <td>Container element when displaying warning messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-error</td>\n                            <td>Container element when displaying error messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-success</td>\n                            <td>Container element when displaying success messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-close</td>\n                            <td>Close icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-icon</td>\n                            <td>Severity icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-summary</td>\n                            <td>Summary of a message.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-detail</td>\n                            <td>Detail of a message.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/messages\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-messages-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;div&gt;\n    &lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"pi pi-times\" style=\"float:right\" label=\"Clear\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Message Service&lt;/h3&gt;\n&lt;button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"&gt;&lt;/button&gt;\n\n&lt;h3&gt;Static Content&lt;/h3&gt;\n&lt;p-messages severity=\"info\"&gt;\n    &lt;ng-template pTemplate&gt;\n        &lt;img src=\"assets/showcase/images/demo/organization/walter.jpg\" width=\"32\" /&gt;\n        &lt;span class=\"custom-message\"&gt;I am the one who knocks.&lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-messages&gt;\n\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\n\n&lt;div style=\"margin-top:30px\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\"&gt;\n    &lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\n&lt;/div&gt;\n\n&lt;div style=\"margin-top:30px\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\"&gt;\n    &lt;p-message severity=\"error\"&gt;&lt;/p-message&gt;\n&lt;/div>\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;Message&#125; from 'primeng/api';\nimport &#123;MessageService&#125; from 'primeng/api';\n\n@Component(&#123;\n    templateUrl: './messagesdemo.html',\n    styles: [`\n        :host ::ng-deep button &#123;\n            margin-right: .25em;\n        &#125;\n\n        :host ::ng-deep .ui-message,\n        :host ::ng-deep .ui-inputtext &#123;\n            margin-right: .25em;\n        &#125;\n\n        :host ::ng-deep .custom-message,\n        :host ::ng-deep img  &#123;\n            align-self: center;\n            font-size: 16px;\n            margin-left: .5em;\n        &#125;\n    `],\n    providers: [MessageService]\n&#125;)\nexport class MessagesDemo &#123;\n\n    msgs: Message[] = [];\n    \n    constructor(private messageService: MessageService) &#123;&#125;\n\n    showSuccess() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'success', summary:'Success Message', detail:'Order submitted'&#125;);\n    &#125;\n\n    showInfo() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\n    &#125;\n\n    showWarn() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'&#125;);\n    &#125;\n\n    showError() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'error', summary:'Error Message', detail:'Validation failed'&#125;);\n    &#125;\n\n    showMultiple() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;);\n        this.msgs.push(&#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;);\n        this.msgs.push(&#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;);\n    &#125;\n    \n    showViaService() &#123;\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\n    &#125;\n\n    clear() &#123;\n        this.msgs = [];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-messages-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

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

/***/ "./src/app/showcase/components/messages/messagesdemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/messages/messagesdemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MessagesDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemoRoutingModule", function() { return MessagesDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messagesdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messagesdemo */ "./src/app/showcase/components/messages/messagesdemo.ts");




let MessagesDemoRoutingModule = class MessagesDemoRoutingModule {
};
MessagesDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _messagesdemo__WEBPACK_IMPORTED_MODULE_3__["MessagesDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], MessagesDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/messages/messagesdemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: MessagesDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemoModule", function() { return MessagesDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _messagesdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messagesdemo */ "./src/app/showcase/components/messages/messagesdemo.ts");
/* harmony import */ var _messagesdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messagesdemo-routing.module */ "./src/app/showcase/components/messages/messagesdemo-routing.module.ts");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/messages */ "./src/app/components/messages/public_api.ts");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/message */ "./src/app/components/message/public_api.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");











let MessagesDemoModule = class MessagesDemoModule {
};
MessagesDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _messagesdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["MessagesDemoRoutingModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_5__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_6__["MessageModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_9__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_10__["CodeHighlighterModule"]
        ],
        declarations: [
            _messagesdemo__WEBPACK_IMPORTED_MODULE_3__["MessagesDemo"]
        ]
    })
], MessagesDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/messages/messagesdemo.ts ***!
  \**************************************************************/
/*! exports provided: MessagesDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemo", function() { return MessagesDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");



let MessagesDemo = class MessagesDemo {
    constructor(messageService) {
        this.messageService = messageService;
        this.msgs = [];
    }
    showSuccess() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }
    showInfo() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }
    showWarn() {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }
    showError() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }
    showMultiple() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    }
    showViaService() {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    }
    clear() {
        this.msgs = [];
    }
};
MessagesDemo.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
MessagesDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./messagesdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/messages/messagesdemo.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
        styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .ui-message,\n        :host ::ng-deep .ui-inputtext {\n            margin-right: .25em;\n        }\n\n        :host ::ng-deep .custom-message,\n        :host ::ng-deep img {\n            align-self: center;\n            font-size: 16px;\n            margin-left: .5em;\n        }\n    "]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], MessagesDemo);



/***/ })

}]);
//# sourceMappingURL=components-messages-messagesdemo-module-es2015.js.map