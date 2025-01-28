(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-captcha-captchademo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/captcha/captchademo.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/captcha/captchademo.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Captcha</span>\n        <span>Captcha is a form validation component based on Recaptcha.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <p-captcha siteKey=\"6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA\" (onResponse)=\"showResponse($event)\"></p-captcha>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;CaptchaModule&#125; from 'primeng/captcha';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Captcha is used with a siteKey and a callback to verify the response.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-captcha siteKey=\"YOUR_SITE_KEY\" (onResponse)=\"showResponse($event)\"&gt;&lt;/p-captcha&gt;\n</code>\n</pre>\n\n            <p>In addition include the captcha widget resource to your page.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha\" async defer>&lt;/script&gt;\n</code>\n</pre>\n\n            <p>Global callback name is initRecaptcha by default and it can be changed using initCallback property .</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=loadCaptcha\" async defer>&lt;/script&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-captcha siteKey=\"YOUR_SITE_KEY\" (onResponse)=\"showResponse($event)\" initCallback=\"loadCaptcha\"&gt;&lt;/p-captcha&gt;\n</code>\n</pre>\n\n\n            <h3>Verification</h3>\n            <p>In order to ensure if a response token is valid, verification against recaptcha api needs to be done at backend. <a href=\"https://developers.google.com/recaptcha/docs/verify\">Read more</a> at\n            official documentation.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshowResponse(response) &#123;\n    //call to a backend to verify against recaptcha with private key\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>sitekey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Public sitekey.</td>\n                        </tr>\n                        <tr>\n                            <td>theme</td>\n                            <td>string</td>\n                            <td>light</td>\n                            <td>The color scheme of the widget.</td>\n                        </tr>\n                        <tr>\n                            <td>type</td>\n                            <td>string</td>\n                            <td>image</td>\n                            <td>The type of CAPTCHA to serve.</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>string</td>\n                            <td>normal</td>\n                            <td>The size of the widget.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>The tabindex of the widget and challenge.\n                                If other elements in your page use tabindex,\n                                it should be set to make user navigation easier.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>language</td>\n                            <td>string</td>\n                            <td>en</td>\n                            <td>Language of the widget.</td>\n                        </tr>\n                        <tr>\n                            <td>initCallback</td>\n                            <td>string</td>\n                            <td>initRecaptcha</td>\n                            <td>Name of global callback to initialize recaptcha.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onResponse</td>\n                            <td>event.response: The user response token.</td>\n                            <td>The callback function to be executed when the user submits a successful CAPTCHA response.</td>\n                        </tr>\n                        <tr>\n                            <td>onExpire</td>\n                            <td>-</td>\n                            <td>The callback function to be executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>reset</td>\n                            <td>-</td>\n                            <td>Resets the reCAPTCHA widget.</td>\n                        </tr>\n                        <tr>\n                            <td>getResponse</td>\n                            <td>-</td>\n                            <td>Gets the response for the reCAPTCHA widget.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Official Documentation</h3>\n            <a href=\"https://developers.google.com/recaptcha/docs/display\">Here</a>\n\n            <h3>Dependencies</h3>\n            <p>Google Recaptcha V2</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/captcha\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;p-captcha siteKey=\"6Lf2XQkTAAAAANcvOwYqPxWL4iZDksFqHpS39GDA\" (onResponse)=\"showResponse($event)\"&gt;&lt;/p-captcha&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CaptchaDemo &#123;\n\n    constructor(private messageService: MessageService) &#123;&#125;\n\n    showResponse(event) &#123;\n        this.messageService.add(&#123;severity:'info', summary:'Succees', detail: 'User Responded', sticky: true&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n");

/***/ }),

/***/ "./src/app/showcase/components/captcha/captchademo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/captcha/captchademo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CaptchaDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaDemoRoutingModule", function() { return CaptchaDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _captchademo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchademo */ "./src/app/showcase/components/captcha/captchademo.ts");




let CaptchaDemoRoutingModule = class CaptchaDemoRoutingModule {
};
CaptchaDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _captchademo__WEBPACK_IMPORTED_MODULE_3__["CaptchaDemo"] }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], CaptchaDemoRoutingModule);



/***/ }),

/***/ "./src/app/showcase/components/captcha/captchademo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/captcha/captchademo.module.ts ***!
  \*******************************************************************/
/*! exports provided: CaptchaDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaDemoModule", function() { return CaptchaDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _captchademo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchademo */ "./src/app/showcase/components/captcha/captchademo.ts");
/* harmony import */ var _captchademo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./captchademo-routing.module */ "./src/app/showcase/components/captcha/captchademo-routing.module.ts");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/captcha */ "./src/app/components/captcha/public_api.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./src/app/components/toast/public_api.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./src/app/components/tabview/public_api.ts");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/codehighlighter */ "./src/app/components/codehighlighter/public_api.ts");









let CaptchaDemoModule = class CaptchaDemoModule {
};
CaptchaDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _captchademo_routing_module__WEBPACK_IMPORTED_MODULE_4__["CaptchaDemoRoutingModule"],
            primeng_captcha__WEBPACK_IMPORTED_MODULE_5__["CaptchaModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
        ],
        declarations: [
            _captchademo__WEBPACK_IMPORTED_MODULE_3__["CaptchaDemo"]
        ]
    })
], CaptchaDemoModule);



/***/ }),

/***/ "./src/app/showcase/components/captcha/captchademo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/captcha/captchademo.ts ***!
  \************************************************************/
/*! exports provided: CaptchaDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptchaDemo", function() { return CaptchaDemo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");



let CaptchaDemo = class CaptchaDemo {
    constructor(messageService) {
        this.messageService = messageService;
    }
    showResponse(event) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'User Responsed', sticky: true });
    }
};
CaptchaDemo.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
CaptchaDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./captchademo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/captcha/captchademo.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
], CaptchaDemo);



/***/ })

}]);
//# sourceMappingURL=components-captcha-captchademo-module-es2015.js.map