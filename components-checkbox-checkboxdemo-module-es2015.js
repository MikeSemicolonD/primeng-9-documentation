(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-checkbox-checkboxdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/checkbox/checkboxdemo.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/checkbox/checkboxdemo.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Checkbox</span>\n        <span>Checkbox is an extension to standard checkbox element with skinning capabilities.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <div class=\"p-grid\" style=\"width:250px;margin-bottom:10px\">\n        <div class=\"p-col-12\"><p-checkbox name=\"group1\" value=\"New York\" label=\"New York\" [(ngModel)]=\"selectedCities\" inputId=\"ny\"></p-checkbox></div>\n        <div class=\"p-col-12\"><p-checkbox name=\"group1\" value=\"San Francisco\" label=\"San Francisco\" [(ngModel)]=\"selectedCities\" inputId=\"sf\"></p-checkbox></div>\n        <div class=\"p-col-12\"><p-checkbox name=\"group1\" value=\"Los Angeles\" label=\"Los Angeles\" [(ngModel)]=\"selectedCities\" inputId=\"la\"></p-checkbox></div>\n    </div>\n\n    Selected Cities: <span *ngFor=\"let city of selectedCities\" style=\"margin-right:10px\">{{city}}</span>\n\n    <h3>Preselection</h3>\n    <div class=\"p-grid\" style=\"width:250px;margin-bottom:10px\">\n        <div class=\"p-col-12\"><p-checkbox name=\"group2\" value=\"Technology\" label=\"Technology\" [(ngModel)]=\"selectedCategories\" inputId=\"technology\"></p-checkbox></div>\n        <div class=\"p-col-12\"><p-checkbox name=\"group2\" value=\"Finance\" label=\"Finance\" [(ngModel)]=\"selectedCategories\" inputId=\"finance\"></p-checkbox></div>\n        <div class=\"p-col-12\"><p-checkbox name=\"group2\" value=\"Sports\" label=\"Sports\" [(ngModel)]=\"selectedCategories\" inputId=\"sports\"></p-checkbox></div>\n        <div class=\"p-col-12\"><p-checkbox name=\"group2\" value=\"Entertainment\" label=\"Entertainment\" [(ngModel)]=\"selectedCategories\" inputId=\"entertainment\"></p-checkbox></div>\n    </div>\n\n    Selected Categories: <span *ngFor=\"let cat of selectedCategories\" style=\"margin-right:10px\">{{cat}}</span>\n    \n    <h3>Boolean - {{checked}}</h3>\n    <p-checkbox [(ngModel)]=\"checked\" binary=\"true\"></p-checkbox>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CheckboxModule&#125; from 'primeng/checkbox';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Checkbox can either be used in multiple selection with other checkboxes or as a single checkbox to provide a boolean value.</p>\n            \n            <h4>Multiple Values</h4>\n            <p>Multiple mode is enabled by default, ngModel property refers to an array to bind the selected values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-checkbox name=\"groupname\" value=\"val1\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n&lt;p-checkbox name=\"groupname\" value=\"val2\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    selectedValues: string[] = [];\n\n&#125;\n</code>\n</pre>\n\n            <p>As ngModel is two-way binding enabled, prepopulating the model array with values is enough to display the related\n            checkboxes as checked by default.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    selectedValues: string[] = ['val1','val2'];\n\n&#125;\n</code>\n</pre>\n\n        <h4>Label</h4>\n        <p>The label attribute provides a label text for the checkbox. This label is also clickable and toggles the checked state.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-checkbox name=\"groupname\" value=\"val1\" label=\"Value 1\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n&lt;p-checkbox name=\"groupname\" value=\"val2\" label=\"Value 2\" [(ngModel)]=\"selectedValues\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n        <h4>Boolean Value</h4>\n        <p>A single boolean value can be bound using the ngModel property as well by enabling the binary option.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class ModelComponent &#123;\n\n    value: boolean;\n\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-checkbox [(ngModel)]=\"value\" [binary]=\"true\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n        <h3>Model Driven Forms</h3>\n        <p>Checkbox can be used in a model driven form as well. In this case, due to an <a href=\"https://github.com/angular/angular/issues/17685\">issue</a> in Angular bind the formControl instance \n            instead of using formControlName.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;!-- Wrong --&gt;\n&lt;p-checkbox formControlName=\"cities\"&gt;&lt;/p-checkbox&gt;\n\n&lt;!-- Correct --&gt;\n&lt;p-checkbox [formControl]=\"myFormGroup.controls['cities']\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the checkbox group.</td>\n                        </tr>\n                        <tr>\n                            <td>value</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Value of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>label</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Label of the checkbox.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>binary</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Allows to select a boolean value instead of multiple values.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>ariaLabelledBy</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>object</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>labelStyleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the label.</td>\n                        </tr>\n                        <tr>\n                            <td>checkboxIcon</td>\n                            <td>string</td>\n                            <td>pi pi-check</td>\n                            <td>Icon class of the checkbox icon.</td>\n                        </tr>\n                        <tr>\n                            <td>readonly</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the component cannot be edited.</td>\n                        </tr>\n                        <tr>\n                            <td>required</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that checkbox must be checked before submitting the form.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>\n                                checked: Boolean value to represent new state of checkbox.\n                                originalEvent: Browser event\n                            </td>\n                            <td>Callback to invoke on checkbox click.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>focus</td>\n                            <td>-</td>\n                            <td>Applies focus.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-chkbox</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chkbox-box</td>\n                            <td>Container of icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chkbox-icon</td>\n                            <td>Icon element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-chkbox-label</td>\n                            <td>Label element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-label-active</td>\n                            <td>Label element of a checked state.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-label-focus</td>\n                            <td>Label element of a focused state.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-label-disabled</td>\n                            <td>Label element of a disabled state.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/checkbox\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n            <a href=\"https://stackblitz.com/edit/primeng-checkbox-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n                <span>Edit in StackBlitz</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;div class=\"p-grid\" style=\"width:250px;margin-bottom:10px\"&gt;\n    &lt;div class=\"p-col-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"New York\" label=\"New York\" [(ngModel)]=\"selectedCities\" inputId=\"ny\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"p-col-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"San Francisco\" label=\"San Francisco\" [(ngModel)]=\"selectedCities\" inputId=\"sf\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"p-col-12\"&gt;&lt;p-checkbox name=\"group1\" value=\"Los Angeles\" label=\"Los Angeles\" [(ngModel)]=\"selectedCities\" inputId=\"la\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n&lt;/div&gt;\n\nSelected Cities: &lt;span *ngFor=\"let city of selectedCities\" style=\"margin-right:10px\"&gt;{{city}}&lt;/span&gt;\n\n&lt;h3&gt;Preselection&lt;/h3&gt;\n&lt;div class=\"p-grid\" style=\"width:250px;margin-bottom:10px\"&gt;\n    &lt;div class=\"p-col-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Technology\" label=\"Technology\" [(ngModel)]=\"selectedCategories\" inputId=\"technology\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"p-col-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Finance\" label=\"Finance\" [(ngModel)]=\"selectedCategories\" inputId=\"finance\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"p-col-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Sports\" label=\"Sports\" [(ngModel)]=\"selectedCategories\" inputId=\"sports\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;div class=\"p-col-12\"&gt;&lt;p-checkbox name=\"group2\" value=\"Entertainment\" label=\"Entertainment\" [(ngModel)]=\"selectedCategories\" inputId=\"entertainment\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n&lt;/div&gt;\n\nSelected Categories: &lt;span *ngFor=\"let cat of selectedCategories\" style=\"margin-right:10px\"&gt;{{cat}} &lt;/span&gt;\n\n&lt;h3&gt;Boolean - {{checked}}&lt;/h3&gt;\n&lt;p-checkbox [(ngModel)]=\"checked\" binary=\"true\"&gt;&lt;/p-checkbox&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CheckboxDemo &#123;\n\n    selectedCities: string[] = [];\n\n    selectedCategories: string[] = ['Technology', 'Sports'];\n\n    checked: boolean = false;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-checkbox-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.ts":
/*!*************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.ts ***!
  \*************************************************/
/*! exports provided: CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




const CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => Checkbox),
    multi: true
};
let Checkbox = class Checkbox {
    constructor(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.focused = false;
        this.checked = false;
    }
    onClick(event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled || this.readonly) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel(event);
        if (focus) {
            checkbox.focus();
        }
    }
    updateModel(event) {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
            if (this.formControl) {
                this.formControl.setValue(this.model);
            }
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit({ checked: this.checked, originalEvent: event });
    }
    handleChange(event) {
        if (!this.readonly) {
            this.checked = event.target.checked;
            this.updateModel(event);
        }
    }
    isChecked() {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    }
    removeValue() {
        this.model = this.model.filter(val => val !== this.value);
    }
    addValue() {
        if (this.model)
            this.model = [...this.model, this.value];
        else
            this.model = [this.value];
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
        this.onModelTouched();
    }
    focus() {
        this.inputViewChild.nativeElement.focus();
    }
    writeValue(model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
    }
};
Checkbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Checkbox.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "binary", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "ariaLabelledBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Checkbox.prototype, "tabindex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "inputId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Checkbox.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "styleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "labelStyleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"])
], Checkbox.prototype, "formControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Checkbox.prototype, "checkboxIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "readonly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Checkbox.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cb'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], Checkbox.prototype, "inputViewChild", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Checkbox.prototype, "onChange", void 0);
Checkbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-checkbox',
        template: `
        <div [ngStyle]="style" [ngClass]="{'ui-chkbox ui-widget': true,'ui-chkbox-readonly': readonly}" [class]="styleClass">
            <div class="ui-helper-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [readonly]="readonly" [value]="value" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                [ngClass]="{'ui-state-focus':focused}" (change)="handleChange($event)" [disabled]="disabled" [attr.tabindex]="tabindex" [attr.aria-labelledby]="ariaLabelledBy" [attr.required]="required">
            </div>
            <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" (click)="onClick($event,cb,true)"
                        [ngClass]="{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}" role="checkbox" [attr.aria-checked]="checked">
                <span class="ui-chkbox-icon ui-clickable" [ngClass]="checked ? checkboxIcon : null"></span>
            </div>
        </div>
        <label (click)="onClick($event,cb,true)" [class]="labelStyleClass"
                [ngClass]="{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}"
                *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
        providers: [CHECKBOX_VALUE_ACCESSOR],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], Checkbox);

let CheckboxModule = class CheckboxModule {
};
CheckboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Checkbox],
        declarations: [Checkbox]
    })
], CheckboxModule);



/***/ }),

/***/ "./src/app/components/checkbox/public_api.ts":
/*!***************************************************!*\
  !*** ./src/app/components/checkbox/public_api.ts ***!
  \***************************************************/
/*! exports provided: CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox */ "./src/app/components/checkbox/checkbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_0__["CHECKBOX_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_0__["CheckboxModule"]; });




/***/ }),

/***/ "./src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckboxDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemoRoutingModule", function() { return CheckboxDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _checkboxdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkboxdemo */ "./src/app/showcase/components/checkbox/checkboxdemo.ts");




let CheckboxDemoRoutingModule = class CheckboxDemoRoutingModule {
};
CheckboxDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _checkboxdemo__WEBPACK_IMPORTED_MODULE_3__["CheckboxDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], CheckboxDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/checkbox/checkboxdemo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/components/checkbox/checkboxdemo.module.ts ***!
  \*********************************************************************/
/*! exports provided: CheckboxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemoModule", function() { return CheckboxDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _checkboxdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkboxdemo */ "./src/app/showcase/components/checkbox/checkboxdemo.ts");
/* harmony import */ var _checkboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkboxdemo-routing.module */ "./src/app/showcase/components/checkbox/checkboxdemo-routing.module.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/checkbox */ "./src/app/components/checkbox/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let CheckboxDemoModule = class CheckboxDemoModule {
};
CheckboxDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _checkboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckboxDemoRoutingModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _checkboxdemo__WEBPACK_IMPORTED_MODULE_4__["CheckboxDemo"]
        ]
    })
], CheckboxDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/checkbox/checkboxdemo.ts":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/checkbox/checkboxdemo.ts ***!
  \**************************************************************/
/*! exports provided: CheckboxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemo", function() { return CheckboxDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckboxDemo = class CheckboxDemo {
    constructor() {
        this.selectedCities = [];
        this.selectedCategories = ['Technology', 'Sports'];
        this.checked = false;
    }
};
CheckboxDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkboxdemo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/checkbox/checkboxdemo.html")).default
    })
], CheckboxDemo);



/***/ })

}]);
//# sourceMappingURL=components-checkbox-checkboxdemo-module-es2015.js.map