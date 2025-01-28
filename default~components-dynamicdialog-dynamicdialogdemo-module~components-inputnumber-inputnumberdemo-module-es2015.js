(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dynamicdialog-dynamicdialogdemo-module~components-inputnumber-inputnumberdemo-module"],{

/***/ "./src/app/components/dynamicdialog/dialogservice.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dynamicdialog/dialogservice.ts ***!
  \***********************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicdialog */ "./src/app/components/dynamicdialog/dynamicdialog.ts");
/* harmony import */ var _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialog-injector */ "./src/app/components/dynamicdialog/dynamicdialog-injector.ts");
/* harmony import */ var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony import */ var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");






let DialogService = class DialogService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    open(componentType, config) {
        const dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    }
    appendDialogComponentToBody(config) {
        const map = new WeakMap();
        map.set(_dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"], config);
        const dialogRef = new _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"]();
        map.set(_dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"], dialogRef);
        const sub = dialogRef.onClose.subscribe(() => {
            this.dialogComponentRef.instance.close();
        });
        const destroySub = dialogRef.onDestroy.subscribe(() => {
            this.removeDialogComponentFromBody();
            destroySub.unsubscribe();
            sub.unsubscribe();
        });
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogComponent"]);
        const componentRef = componentFactory.create(new _dynamicdialog_injector__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogInjector"](this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        return dialogRef;
    }
    removeDialogComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    }
};
DialogService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
DialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], DialogService);



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-config.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-config.ts ***!
  \******************************************************************/
/*! exports provided: DynamicDialogConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogConfig", function() { return DynamicDialogConfig; });
class DynamicDialogConfig {
}


/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-injector.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-injector.ts ***!
  \********************************************************************/
/*! exports provided: DynamicDialogInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogInjector", function() { return DynamicDialogInjector; });
class DynamicDialogInjector {
    constructor(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    get(token, notFoundValue, flags) {
        const value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    }
}


/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog-ref.ts ***!
  \***************************************************************/
/*! exports provided: DynamicDialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogRef", function() { return DynamicDialogRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class DynamicDialogRef {
    constructor() {
        this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onClose = this._onClose.asObservable();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onDestroy = this._onDestroy.asObservable();
    }
    close(result) {
        this._onClose.next(result);
    }
    destroy() {
        this._onDestroy.next();
    }
}


/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialog.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialog.ts ***!
  \***********************************************************/
/*! exports provided: DynamicDialogComponent, DynamicDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogComponent", function() { return DynamicDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogModule", function() { return DynamicDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicdialogcontent */ "./src/app/components/dynamicdialog/dynamicdialogcontent.ts");
/* harmony import */ var _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicdialog-config */ "./src/app/components/dynamicdialog/dynamicdialog-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dom */ "./src/app/components/dom/public_api.ts");
/* harmony import */ var _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamicdialog-ref */ "./src/app/components/dynamicdialog/dynamicdialog-ref.ts");








const showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: '{{transform}}', opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'none', opacity: 1 }))
]);
const hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: '{{transform}}', opacity: 0 }))
]);
let DynamicDialogComponent = class DynamicDialogComponent {
    constructor(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
        this.transformOptions = "scale(0.7)";
    }
    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }
    loadChildComponent(componentType) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        let viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
    moveOnTop() {
        if (this.config.autoZIndex !== false) {
            const zIndex = (this.config.baseZIndex || 0) + (++primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex);
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
        }
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.wrapper = this.container.parentElement;
                this.moveOnTop();
                this.bindGlobalListeners();
                if (this.config.modal !== false) {
                    this.enableModality();
                }
                this.focus();
                break;
            case 'void':
                this.onContainerDestroy();
                break;
        }
    }
    onAnimationEnd(event) {
        if (event.toState === 'void') {
            this.dialogRef.destroy();
        }
    }
    onContainerDestroy() {
        this.unbindGlobalListeners();
        if (this.config.modal !== false) {
            this.disableModality();
        }
        this.container = null;
    }
    close() {
        this.visible = false;
    }
    enableModality() {
        if (this.config.closable !== false && this.config.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'click', (event) => {
                if (this.wrapper && this.wrapper.isSameNode(event.target)) {
                    this.close();
                }
            });
        }
        if (this.config.modal !== false) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
        }
    }
    disableModality() {
        if (this.wrapper) {
            if (this.config.dismissableMask) {
                this.unbindMaskClickListener();
            }
            if (this.config.modal !== false) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }
            if (!this.cd.destroyed) {
                this.cd.detectChanges();
            }
        }
    }
    onKeydown(event) {
        if (event.which === 9) {
            event.preventDefault();
            let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].getFocusableElements(this.container);
            if (focusableElements && focusableElements.length > 0) {
                if (!document.activeElement) {
                    focusableElements[0].focus();
                }
                else {
                    let focusedIndex = focusableElements.indexOf(document.activeElement);
                    if (event.shiftKey) {
                        if (focusedIndex == -1 || focusedIndex === 0)
                            focusableElements[focusableElements.length - 1].focus();
                        else
                            focusableElements[focusedIndex - 1].focus();
                    }
                    else {
                        if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                            focusableElements[0].focus();
                        else
                            focusableElements[focusedIndex + 1].focus();
                    }
                }
            }
        }
    }
    focus() {
        let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].findSingle(this.container, 'a');
        if (focusable) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => focusable.focus(), 5);
            });
        }
    }
    bindGlobalListeners() {
        this.bindDocumentKeydownListener();
        if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
        }
    }
    unbindGlobalListeners() {
        this.unbindDocumentKeydownListener();
        this.unbindDocumentEscapeListener();
    }
    bindDocumentKeydownListener() {
        this.zone.runOutsideAngular(() => {
            this.documentKeydownListener = this.onKeydown.bind(this);
            window.document.addEventListener('keydown', this.documentKeydownListener);
        });
    }
    unbindDocumentKeydownListener() {
        if (this.documentKeydownListener) {
            window.document.removeEventListener('keydown', this.documentKeydownListener);
            this.documentKeydownListener = null;
        }
    }
    bindDocumentEscapeListener() {
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', (event) => {
            if (event.which == 27) {
                if (parseInt(this.container.style.zIndex) == (primeng_dom__WEBPACK_IMPORTED_MODULE_6__["DomHandler"].zindex + (this.config.baseZIndex ? this.config.baseZIndex : 0))) {
                    this.close();
                }
            }
        });
    }
    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }
    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    }
    ngOnDestroy() {
        this.onContainerDestroy();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
};
DynamicDialogComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"] },
    { type: _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__["DynamicDialogRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"])
], DynamicDialogComponent.prototype, "insertionPoint", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mask'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DynamicDialogComponent.prototype, "maskViewChild", void 0);
DynamicDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-dynamicDialog',
        template: `
        <div #mask [ngClass]="{'ui-dialog-mask ui-dialog-visible':true, 'ui-widget-overlay ui-dialog-mask-scrollblocker': config.modal !== false}">
            <div [ngClass]="{'ui-dialog ui-dynamicdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl': config.rtl}" [ngStyle]="config.style" [class]="config.styleClass"
                [@animation]="{value: 'visible', params: {transform: transformOptions, transition: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}"
                (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" role="dialog" *ngIf="visible"
                [style.width]="config.width" [style.height]="config.height">
                <div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top" *ngIf="config.showHeader === false ? false: true">
                    <span class="ui-dialog-title">{{config.header}}</span>
                    <div class="ui-dialog-titlebar-icons">
                        <a [ngClass]="'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'" tabindex="0" role="button" (click)="close()" (keydown.enter)="close()" *ngIf="config.closable !== false">
                            <span class="pi pi-times"></span>
                        </a>
                    </div>
                </div>
                <div class="ui-dialog-content ui-widget-content" [ngStyle]="config.contentStyle">
                    <ng-template pDynamicDialogContent></ng-template>
                </div>
                <div class="ui-dialog-footer ui-widget-content" *ngIf="config.footer">
                    {{config.footer}}
                </div>
            </div>
        </div>
	`,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(showAnimation)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(hideAnimation)
                ])
            ])
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _dynamicdialog_config__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"], _dynamicdialog_ref__WEBPACK_IMPORTED_MODULE_7__["DynamicDialogRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], DynamicDialogComponent);

let DynamicDialogModule = class DynamicDialogModule {
};
DynamicDialogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        declarations: [DynamicDialogComponent, _dynamicdialogcontent__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogContent"]],
        entryComponents: [DynamicDialogComponent]
    })
], DynamicDialogModule);



/***/ }),

/***/ "./src/app/components/dynamicdialog/dynamicdialogcontent.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dynamicdialog/dynamicdialogcontent.ts ***!
  \******************************************************************/
/*! exports provided: DynamicDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDialogContent", function() { return DynamicDialogContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DynamicDialogContent = class DynamicDialogContent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
DynamicDialogContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
DynamicDialogContent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pDynamicDialogContent]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], DynamicDialogContent);



/***/ })

}]);
//# sourceMappingURL=default~components-dynamicdialog-dynamicdialogdemo-module~components-inputnumber-inputnumberdemo-module-es2015.js.map