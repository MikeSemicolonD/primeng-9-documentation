function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-galleria-galleriademo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaadvanceddemo.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaadvanceddemo.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriaadvanceddemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria</span>\n        <span>Galleria is a content gallery component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-galleria #galleria [(value)]=\"images\" [(activeIndex)]=\"activeIndex\" [numVisible]=\"5\" [containerStyle]=\"{'max-width':'640px'}\" [containerClass]=\"galleriaClass()\" [showThumbnails]=\"showThumbnails\"\n        [showItemNavigators]=\"true\" [showItemNavigatorsOnHover]=\"true\" [circular]=\"true\" [autoPlay]=\"true\" [transitionInterval]=\"3000\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" [ngStyle]=\"{'width': !fullscreen ? '100%' : '', 'display': !fullscreen ? 'block' : ''}\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"footer\" let-item>\n            <div class=\"custom-galleria-footer\">\n                <button pButton icon=\"pi pi-list\" (click)=\"onThumbnailButtonClick()\"></button>\n                <span *ngIf=\"images\"  class=\"title-container\">\n                    <span>{{activeIndex + 1}}/{{images.length}}</span>\n                    <span class=\"title\">{{images[activeIndex].title}}</span>\n                    <span>{{images[activeIndex].alt}}</span>\n                </span>\n                <button pButton [icon]=\"fullScreenIcon()\" (click)=\"toggleFullScreen()\" class=\"fullscreen-button\"></button>\n            </div>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriaadvanceddemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaadvanceddemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaAdvancedDemo implements OnInit &#123;\n    images: any[];\n\n    showThumbnails: boolean;\n\n    fullscreen: boolean = false;\n\n    activeIndex: number = 0;\n\n    onFullScreenListener: any;\n\n    @ViewChild('galleria') galleria: Galleria;\n\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images => this.images = images);\n        this.bindDocumentListeners();\n    &#125;\n\n    onThumbnailButtonClick() &#123;\n        this.showThumbnails = !this.showThumbnails;\n    &#125;\n\n    toggleFullScreen() &#123;\n        if (this.fullscreen) &#123;\n            this.closePreviewFullScreen();\n        &#125;\n        else &#123;\n            this.openPreviewFullScreen();\n        &#125;\n    &#125;\n\n    openPreviewFullScreen() &#123;\n        let elem = this.galleria.element.nativeElement.querySelector(\".ui-galleria\");\n        if (elem.requestFullscreen) &#123;\n            elem.requestFullscreen();\n        &#125;\n        else if (elem['mozRequestFullScreen']) &#123; /* Firefox */\n            elem['mozRequestFullScreen']();\n        &#125;\n        else if (elem['webkitRequestFullscreen']) &#123; /* Chrome, Safari & Opera */\n            elem['webkitRequestFullscreen']();\n        &#125;\n        else if (elem['msRequestFullscreen']) &#123; /* IE/Edge */\n            elem['msRequestFullscreen']();\n        &#125;\n    &#125;\n\n    onFullScreenChange() &#123;\n        this.fullscreen = !this.fullscreen;\n    &#125;\n\n    closePreviewFullScreen() &#123;\n        if (document.exitFullscreen) &#123;\n            document.exitFullscreen();\n        &#125;\n        else if (document['mozCancelFullScreen']) &#123;\n            document['mozCancelFullScreen']();\n        &#125;\n        else if (document['webkitExitFullscreen']) &#123;\n            document['webkitExitFullscreen']();\n        &#125;\n        else if (document['msExitFullscreen']) &#123;\n            document['msExitFullscreen']();\n        &#125;\n    &#125;\n\n    bindDocumentListeners() &#123;\n        this.onFullScreenListener = this.onFullScreenChange.bind(this);\n        document.addEventListener(\"fullscreenchange\", this.onFullScreenListener);\n        document.addEventListener(\"mozfullscreenchange\", this.onFullScreenListener);\n        document.addEventListener(\"webkitfullscreenchange\", this.onFullScreenListener);\n        document.addEventListener(\"msfullscreenchange\", this.onFullScreenListener);\n    &#125;\n\n    unbindDocumentListeners() &#123;\n        document.removeEventListener(\"fullscreenchange\", this.onFullScreenListener);\n        document.removeEventListener(\"mozfullscreenchange\", this.onFullScreenListener);\n        document.removeEventListener(\"webkitfullscreenchange\", this.onFullScreenListener);\n        document.removeEventListener(\"msfullscreenchange\", this.onFullScreenListener);\n        this.onFullScreenListener = null;\n    &#125;\n\n    ngOnDestroy() &#123;\n        this.unbindDocumentListeners();\n    &#125;\n\n    galleriaClass() &#123;\n        return `custom-galleria $&#123;this.fullscreen ? 'fullscreen' : ''&#125;`;\n    &#125;\n\n    fullScreenIcon() &#123;\n        return `pi $&#123;this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'&#125;`;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriaadvanceddemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaadvanceddemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria #galleria [(value)]=\"images\" [(activeIndex)]=\"activeIndex\" [numVisible]=\"5\" [containerStyle]=\"&#123;'max-width':'640px'&#125;\" [containerClass]=\"galleriaClass()\" [showThumbnails]=\"showThumbnails\"\n    [showItemNavigators]=\"true\" [showItemNavigatorsOnHover]=\"true\" [circular]=\"true\" [autoPlay]=\"true\" [transitionInterval]=\"3000\"&gt; \n&lt;ng-template pTemplate=\"item\" let-item&gt;\n    &lt;img [src]=\"item.previewImageSrc\" [ngStyle]=\"&#123;'width': !fullscreen ? '100%' : '', 'display': !fullscreen ? 'block' : ''&#125;\" /&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n    &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n        &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n    &lt;/div&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"footer\" let-item&gt;\n    &lt;div class=\"custom-galleria-footer\"&gt;\n        &lt;button pButton icon=\"pi pi-list\" (click)=\"onThumbnailButtonClick()\"&gt;&lt;/button&gt;\n        &lt;span *ngIf=\"images\"  class=\"title-container\"&gt;\n            &lt;span&gt;&#123;&#123;activeIndex + 1&#125;&#125;/&#123;&#123;images.length&#125;&#125;&lt;/span&gt;\n            &lt;span class=\"title\"&gt;&#123;&#123;images[activeIndex].title&#125;&#125;&lt;/span&gt;\n            &lt;span&gt;&#123;&#123;images[activeIndex].alt&#125;&#125;&lt;/span&gt;\n        &lt;/span&gt;\n        &lt;button pButton [icon]=\"fullScreenIcon()\" (click)=\"toggleFullScreen()\" class=\"fullscreen-button\"&gt;&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaautoplaydemo.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaautoplaydemo.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriaautoplaydemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - AutoPlay</span>\n        <span>AutoPlay mode is used to implement slideshows.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\" [circular]=\"true\"\n        [autoPlay]=\"true\" [transitionInterval]=\"2000\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriaautoplaydemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaautoplaydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaAutoplayDemo implements OnInit &#123;\n    images: any[];\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images => this.images = images)\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriaautoplaydemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaautoplaydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '520px'&#125;\" [numVisible]=\"5\" [circular]=\"true\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Circular&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '520px'&#125;\" [numVisible]=\"5\" [circular]=\"true\"\n    [autoPlay]=\"true\" [transitionInterval]=\"2000\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriacaptiondemo.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriacaptiondemo.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriacaptiondemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - Caption</span>\n        <span>Caption displays a description for an item.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"caption\" let-item>\n            <h4 style=\"margin-bottom: .5rem; color: #ffffff;\">{{item.title}}</h4>\n            <p>{{item.alt}}</p>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriacaptiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriacaptiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaCaptionDemo implements OnInit &#123;\n    images: any[];\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images => this.images = images)\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriacaptiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriacaptiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"caption\" let-item&gt;\n        &lt;h4 style=\"margin-bottom: .5rem; color: #ffffff;\"&gt;&#123;&#123;item.title&#125;&#125;&lt;/h4&gt;\n        &lt;p&gt;&#123;&#123;item.alt&#125;&#125;&lt;/p&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriademo.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriademo.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriademoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria</span>\n        <span>Galleria is an advanced content gallery component.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;GalleriaModule&#125; from 'primeng/galleria';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Galleria requires item template and a value as an array of objects</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [value]=\"images\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" [alt]=\"item.alt\" /&gt;\n    &lt;/template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n            <p>For the rest of the documentation, sample data below would be return from an example service e.g. PhotoService.</p>\n<div style=\"overflow: auto; height: 400px; margin-bottom: 1em;\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n&#123;\n    \"data\":[\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria1.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria1s.jpg\",\n            \"alt\": \"Description for Image 1\",\n            \"title\": \"Title 1\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria2.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria2s.jpg\",\n            \"alt\": \"Description for Image 2\",\n            \"title\": \"Title 2\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria3.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria3s.jpg\",\n            \"alt\": \"Description for Image 3\",\n            \"title\": \"Title 3\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria4.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria4s.jpg\",\n            \"alt\": \"Description for Image 4\",\n            \"title\": \"Title 4\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria5.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria5s.jpg\",\n            \"alt\": \"Description for Image 5\",\n            \"title\": \"Title 5\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria6.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria6s.jpg\",\n            \"alt\": \"Description for Image 6\",\n            \"title\": \"Title 6\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria7.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria7s.jpg\",\n            \"alt\": \"Description for Image 7\",\n            \"title\": \"Title 7\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria8.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria8s.jpg\",\n            \"alt\": \"Description for Image 8\",\n            \"title\": \"Title 8\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria9.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria9s.jpg\",\n            \"alt\": \"Description for Image 9\",\n            \"title\": \"Title 9\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria10.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria10s.jpg\",\n            \"alt\": \"Description for Image 10\",\n            \"title\": \"Title 10\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria11.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria11s.jpg\",\n            \"alt\": \"Description for Image 11\",\n            \"title\": \"Title 11\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria12.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria12s.jpg\",\n            \"alt\": \"Description for Image 12\",\n            \"title\": \"Title 12\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria13.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria13s.jpg\",\n            \"alt\": \"Description for Image 13\",\n            \"title\": \"Title 13\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria14.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria14s.jpg\",\n            \"alt\": \"Description for Image 14\",\n            \"title\": \"Title 14\"\n        &#125;,\n        &#123;\n            \"previewImageSrc\": \"demo/images/galleria/galleria15.jpg\",\n            \"thumbnailImageSrc\": \"demo/images/galleria/galleria15s.jpg\",\n            \"alt\": \"Description for Image 15\",\n            \"title\": \"Title 15\"\n        &#125;\n    ]\n&#125;\n</code>\n</pre>\n</div>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Injectable()\nexport class PhotoService &#123;\n\n    constructor(private http: HttpClient) &#123; &#125;\n\n    getImages() &#123;\n    return this.http.get&lt;any&gt;('assets/showcase/data/photos.json')\n      .toPromise()\n      .then(res =&gt; &lt;Image[]&gt;res.data)\n      .then(data =&gt; &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaDemo implements OnInit &#123;\n\n    images: any[];\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images =&gt; this.images = images);\n    &#125;\n&#125;\n</code>\n</pre>\n            <h3>Items per page</h3>\n            <p>Number of items per page is defined using the <i>numVisible</i> property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [value]=\"images\" [numVisible]=\"5\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" [alt]=\"item.alt\" /&gt;\n    &lt;/template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n            <h3>Responsive</h3>\n            <p>For responsive design, <i>numVisible</i> can be defined using the <i>responsiveOptions</i> property that should be an array of\n                objects whose breakpoint defines the max-width to apply the settings.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [numVisible]=\"5\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nresponsiveOptions:any[] = [\n    &#123;\n        breakpoint: '1024px',\n        numVisible: 5\n    &#125;,\n    &#123;\n        breakpoint: '768px',\n        numVisible: 3\n    &#125;,\n    &#123;\n        breakpoint: '560px',\n        numVisible: 1\n    &#125;\n];\n</code>\n</pre>\n\n            <h3>Header and Footer</h3>\n            <p>Custom content projection is available using the <i>header</i> and <i>footer</i> properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '520px'\" [numVisible]=\"5\"&gt; \n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;h1&gt;\n            Header\n        &lt;/h1&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;h1&gt;\n            Footer\n        &lt;/h1&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n                <h3>Indicators</h3>\n                <p>Indicators allow quick navigation between the items. Set <i>showIndicators</i> to display indicators which can be customized further\n                with the <i>changeItemOnIndicatorHover</i>, <i>showIndicatorsOnItem</i> and <i>indicatorsPosition</i> properties.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [value]=\"images\" [indicators]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" [alt]=\"item.alt\" /&gt;\n    &lt;/template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>id</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Unique identifier of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>activeIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the first item.</td>\n                        </tr>\n                        <tr>\n                            <td>fullScreen</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display the component on fullscreen.</td>\n                        </tr>\n                        <tr>\n                            <td>visible</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifies the visibility of the mask on fullscreen mode.</td>\n                        </tr>\n                        <tr>\n                            <td>numVisible</td>\n                            <td>number</td>\n                            <td>3</td>\n                            <td>Number of items per page.</td>\n                        </tr>\n                        <tr>\n                            <td>responsiveOptions</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>An array of options for responsive design.</td>\n                        </tr>\n                        <tr>\n                            <td>showItemNavigators</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display navigation buttons in preview container.</td>\n                        </tr>\n                        <tr>\n                            <td>showThumbnailNavigators</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to display navigation buttons in thumbnail container.</td>\n                        </tr>\n                        <tr>\n                            <td>showItemNavigatorsOnHover</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display navigation buttons on preview container's hover.</td>\n                        </tr>\n                        <tr>\n                            <td>changeItemOnIndicatorHover</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, preview item is changed on indicator item's hover.</td>\n                        </tr>\n                        <tr>\n                            <td>circular</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if scrolling would be infinite.</td>\n                        </tr>\n                        <tr>\n                            <td>autoPlay</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Items are displayed with a slideshow in autoPlay mode.</td>\n                        </tr>\n                        <tr>\n                            <td>transitionInterval</td>\n                            <td>number</td>\n                            <td>4000</td>\n                            <td>Time in milliseconds to scroll items.</td>\n                        </tr>\n                        <tr>\n                            <td>showThumbnails</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to display thumbnail container.</td>\n                        </tr>\n                        <tr>\n                            <td>thumbnailsPosition</td>\n                            <td>string</td>\n                            <td>bottom</td>\n                            <td>Position of thumbnails. Valid values are \"bottom\", \"top\", \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>verticalThumbnailViewPortHeight</td>\n                            <td>string</td>\n                            <td>300px</td>\n                            <td>Height of the viewport in vertical thumbnail.</td>\n                        </tr>\n                        <tr>\n                            <td>showIndicators</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to display indicator container.</td>\n                        </tr>\n                        <tr>\n                            <td>showIndicatorsOnItem</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, indicator container is displayed on preview container.</td>\n                        </tr>\n                        <tr>\n                            <td>indicatorsPosition</td>\n                            <td>string</td>\n                            <td>bottom</td>\n                            <td>Position of indicators. Valid values are \"bottom\", \"top\", \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>maskClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the mask on fullscreen mode.</td>\n                        </tr>\n                        <tr>\n                            <td>containerStyle</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.</td>\n                        </tr>\n                        <tr>\n                            <td>galleriaClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-galleria</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-header</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-footer</td>\n                            <td>Footer section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-item-wrapper</td>\n                            <td>Preview content element. It contains preview and indicator containers.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-item-container</td>\n                            <td>Container of the preview content. It contains navigation buttons, preview item and caption content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-indicators</td>\n                            <td>Container of the indicators. It contains indicator items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-thumbnail-wrapper</td>\n                            <td>Thumbnail content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-thumbnail-container</td>\n                            <td>Container of the thumbnail content. It contains navigation buttons and thumbnail items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-galleria-caption</td>\n                            <td>Content of the preview caption.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaDemo &#123;\n        \n    images: any[];\n        \n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images => this.images = images);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriafullscreendemo.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriafullscreendemo.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriafullscreendemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - Fullscreen</span>\n        <span>In fullscreen mode content covers the whole page over a mask.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">With Thumbnails</h3>\n    <p-galleria [(value)]=\"images\" [(visible)]=\"displayBasic\" [responsiveOptions]=\"responsiveOptions2\" [containerStyle]=\"{'max-width': '50%'}\" [numVisible]=\"9\"\n        [circular]=\"true\" [fullScreen]=\"true\" [showItemNavigators]=\"true\" [baseZIndex]=\"100000\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/>\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/>\n            </div>\n        </ng-template>\n    </p-galleria>\n    <button pButton type=\"button\" icon=\"pi pi-external-link\" label=\"Show\" (click)=\"displayBasic = true\"></button>\n    <h3>Without Thumbnails</h3>\n    <p-galleria [(value)]=\"images\" [(visible)]=\"displayBasic2\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '850px'}\" [numVisible]=\"7\"\n        [circular]=\"true\" [fullScreen]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\" [baseZIndex]=\"100000\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/>\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/>\n            </div>\n        </ng-template>\n    </p-galleria>\n    <button pButton type=\"button\" icon=\"pi pi-external-link\" label=\"Show\" (click)=\"displayBasic2 = true\"></button>\n    <h3>Custom Contents</h3>\n    <p-galleria [(value)]=\"images\" [(visible)]=\"displayCustom\" [(activeIndex)]=\"activeIndex\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '850px'}\" [numVisible]=\"7\"\n        [circular]=\"true\" [fullScreen]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\" [baseZIndex]=\"100000\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/>\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/>\n            </div>\n        </ng-template>\n    </p-galleria>\n    <div *ngIf=\"images\" class=\"p-grid\" style=\"max-width: 400px;\">\n        <div *ngFor=\"let image of images; let index = index;\" class=\"p-col-3\" key=\"index\">\n            <img [src]=\"image.thumbnailImageSrc\" [alt]=\"image.alt\" style=\"cursor: pointer\" (click)=\"imageClick(index)\"/>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriafullscreendemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriafullscreendemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaFullscreenDemo implements OnInit &#123;\n    images: any[];\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    responsiveOptions2:any[] = [\n        &#123;\n            breakpoint: '1500px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 2\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    displayBasic: boolean;\n\n    displayBasic2: boolean;\n\n    displayCustom: boolean;\n\n    activeIndex: number = 0;\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images =>&#123; \n            this.images = images\n        &#125;)\n    &#125;\n\n    imageClick(index: number) &#123;\n        this.activeIndex = index;\n        this.displayCustom = true;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriafullscreendemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriafullscreendemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [(visible)]=\"displayBasic\" [responsiveOptions]=\"responsiveOptions2\" [containerStyle]=\"&#123;'max-width': '50%'&#125;\" [numVisible]=\"9\"\n    [circular]=\"true\" [fullScreen]=\"true\" [showItemNavigators]=\"true\" [baseZIndex]=\"100000\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;button pButton type=\"button\" icon=\"pi pi-external-link\" label=\"Show\" (click)=\"displayBasic = true\"&gt;&lt;/button&gt;\n&lt;h3&gt;Without Thumbnails&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [(visible)]=\"displayBasic2\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '850px'&#125;\" [numVisible]=\"7\"\n    [circular]=\"true\" [fullScreen]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\" [baseZIndex]=\"100000\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;button pButton type=\"button\" icon=\"pi pi-external-link\" label=\"Show\" (click)=\"displayBasic2 = true\"&gt;&lt;/button&gt;\n&lt;h3&gt;Custom Contents&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [(visible)]=\"displayCustom\" [(activeIndex)]=\"activeIndex\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '850px'&#125;\" [numVisible]=\"7\"\n    [circular]=\"true\" [fullScreen]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\" [baseZIndex]=\"100000\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;div *ngIf=\"images\" class=\"p-grid\" style=\"max-width: 400px;\"&gt;\n    &lt;div *ngFor=\"let image of images; let index = index;\" class=\"p-col-3\" key=\"index\"&gt;\n        &lt;img [src]=\"image.thumbnailImageSrc\" [alt]=\"image.alt\" style=\"cursor: pointer\" (click)=\"imageClick(index)\"/&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaindicatordemo.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaindicatordemo.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriaindicatordemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - Indicator</span>\n        <span>Indicators allow quick navigation between the items.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Indicators with Click Event</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"\n        [showThumbnails]=\"false\" [showIndicators]=\"true\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Indicators with Hover Event</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"\n        [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Inside Content</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"\n        [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Positioned at Top</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px','margin-top': '2em'}\" [numVisible]=\"5\"\n        [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"top\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Positioned at Left</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px','margin-top': '2em'}\" [numVisible]=\"5\"\n        [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"left\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Positioned at Right</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px','margin-top': '2em'}\" [numVisible]=\"5\"\n        [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"right\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Template</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px','margin-top': '2em'}\" [numVisible]=\"5\"\n        [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"left\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"indicator\" let-index>\n            <span style=\"color: #e9ecef; cursor: pointer\">\n                {{index + 1}}\n            </span>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriaindicatordemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaindicatordemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaIndicatorDemo implements OnInit &#123;\n    images: any[];\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images =>&#123; \n            this.images = images\n        &#125;)\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriaindicatordemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaindicatordemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;h3&gt;Indicators with Click Event&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"\n    [showThumbnails]=\"false\" [showIndicators]=\"true\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Indicators with Hover Event&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"\n    [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Inside Content&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"\n    [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Positioned at Top&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px','margin-top': '2em'&#125;\" [numVisible]=\"5\"\n    [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"top\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Positioned at Left&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px','margin-top': '2em'&#125;\" [numVisible]=\"5\"\n    [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"left\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Positioned at Right&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px','margin-top': '2em'&#125;\" [numVisible]=\"5\"\n    [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"right\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Template&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px','margin-top': '2em'&#125;\" [numVisible]=\"5\"\n    [showThumbnails]=\"false\" [showIndicators]=\"true\" [changeItemOnIndicatorHover]=\"true\" [showIndicatorsOnItem]=\"true\" indicatorsPosition=\"left\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"indicator\" let-index&gt;\n        &lt;span style=\"color: #e9ecef; cursor: pointer\"&gt;\n            &#123;&#123;index + 1&#125;&#125;\n        &lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/gallerianavigatordemo.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/gallerianavigatordemo.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_gallerianavigatordemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - Navigator</span>\n        <span>Combining item navigators, thumbnails and indicators provide various UI alternatives.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3>Item Navigators and Thumbnails</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"\n        [circular]=\"true\" [showItemNavigators]=\"true\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Item Navigators without Thumbnails</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"\n        [circular]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Item Navigators on Hover</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\"\n        [circular]=\"true\" [showItemNavigators]=\"true\" [showItemNavigatorsOnHover]=\"true\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Item Navigators and Indicators</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px', 'margin-top':'2em'}\" [numVisible]=\"5\"\n        [circular]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\" [showIndicators]=\"true\" [showItemNavigatorsOnHover]=\"true\"\n        [showIndicatorsOnItem]=\"true\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"gallerianavigatordemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/gallerianavigatordemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaNavigatorDemo implements OnInit &#123;\n    images: any[];\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images =>&#123; \n            this.images = images\n        &#125;)\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"gallerianavigatordemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/gallerianavigatordemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;h3&gt;Item Navigators and Thumbnails&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"\n    [circular]=\"true\" [showItemNavigators]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Item Navigators without Thumbnails&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"\n    [circular]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Item Navigators on Hover&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px'&#125;\" [numVisible]=\"5\"\n    [circular]=\"true\" [showItemNavigators]=\"true\" [showItemNavigatorsOnHover]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Item Navigators and Indicators&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '640px', 'margin-top':'2em'&#125;\" [numVisible]=\"5\"\n    [circular]=\"true\" [showItemNavigators]=\"true\" [showThumbnails]=\"false\" [showIndicators]=\"true\" [showItemNavigatorsOnHover]=\"true\"\n    [showIndicatorsOnItem]=\"true\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaprogrammaticdemo.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaprogrammaticdemo.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriaprogrammaticdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - Programmatic</span>\n        <span>Galleria can be controlled programmatically using the <b>activeIndex</b> property.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <div style=\"padding: .5em 0\">\n        <button pButton icon=\"pi pi-plus\" (click)=\"next()\" class=\"ui-button-secondary\"></button>\n        <button pButton icon=\"pi pi-minus\" (click)=\"prev()\" class=\"ui-button-secondary\"></button>\n    </div>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"5\" [(activeIndex)]=\"activeIndex\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriaprogrammaticdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaprogrammaticdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaProgrammaticDemo implements OnInit &#123;\n    images: any[];\n\n    get activeIndex(): number &#123;\n        return this._activeIndex;\n    &#125;\n\n    set activeIndex(newValue) &#123;\n        if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) &#123;\n            this._activeIndex = newValue;\n        &#125;\n    &#125;\n\n    _activeIndex: number = 2;\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images => this.images = images)\n    &#125;\n\n    next() &#123;\n        this.activeIndex++;\n    &#125;\n\n    prev() &#123;\n        this.activeIndex--;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriaprogrammaticdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaprogrammaticdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\" showCaption=\"true\"&gt;&lt;/p-galleria&gt;\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;div style=\"padding: .5em 0\"&gt;\n    &lt;button pButton icon=\"pi pi-plus\" (click)=\"next()\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n    &lt;button pButton icon=\"pi pi-minus\" (click)=\"prev()\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '520px'&#125;\" [numVisible]=\"5\" \n    [(activeIndex)]=\"activeIndex\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaresponsivedemo.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaresponsivedemo.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriaresponsivedemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - Responsive</span>\n        <span>Galleria responsiveness is defined with the <b>responsiveOptions</b> property.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '800px'}\" [numVisible]=\"7\" [circular]=\"true\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/>\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/>\n            </div>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriaresponsivedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaresponsivedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaResponsiveDemo implements OnInit &#123;\n    images: any[];\n\n    responsiveOptions:any[] = [\n        &#123;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#123;\n            breakpoint: '960px',\n            numVisible: 4\n        &#125;,\n        &#123;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#123;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    constructor(private photoService: PhotoService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.photoService.getImages().then(images =>&#123; \n            this.images = images\n        &#125;)\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriaresponsivedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriaresponsivedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '800px'&#125;\" [numVisible]=\"7\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\"/&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriathumbnaildemo.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriathumbnaildemo.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_galleria_galleriathumbnaildemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Galleria - Thumbnail</span>\n        <span>Thumbnails represent a smaller version of the actual content.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Positioned at Bottom</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '660px'}\" [numVisible]=\"5\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Positioned at Left</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '660px'}\" [numVisible]=\"4\"\n        thumbnailsPosition=\"left\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Positioned at Right</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '660px', 'margin-top':'2em'}\" [numVisible]=\"4\"\n        thumbnailsPosition=\"right\"> \n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Positioned at Top</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '660px', 'margin-top':'2em'}\" [numVisible]=\"5\"\n        thumbnailsPosition=\"top\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n    <h3>Positioned at Bottom</h3>\n    <p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"{'max-width': '660px', 'margin-top':'2em'}\" [numVisible]=\"5\"\n        thumbnailsPosition=\"bottom\">\n        <ng-template pTemplate=\"item\" let-item>\n            <img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" />\n        </ng-template>\n        <ng-template pTemplate=\"thumbnail\" let-item>\n            <div class=\"p-grid p-nogutter p-justify-center\">\n                <img [src]=\"item.thumbnailImageSrc\" />\n            </div>\n        </ng-template>\n    </p-galleria>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"galleriathumbnaildemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriathumbnaildemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GalleriaDemo implements OnInit &#123;\n    images: any[];\n\n    responsiveOptions:any[] = [\n        &#125;\n            breakpoint: '1024px',\n            numVisible: 5\n        &#125;,\n        &#125;\n            breakpoint: '768px',\n            numVisible: 3\n        &#125;,\n        &#125;\n            breakpoint: '560px',\n            numVisible: 1\n        &#125;\n    ];\n\n    constructor(private photoService: PhotoService) &#125; &#125;\n\n    ngOnInit() &#125;\n        this.photoService.getImages().then(images =>&#125; \n            this.images = images\n        &#125;)\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"galleriathumbnaildemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/galleria/galleriathumbnaildemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Positioned at Bottom&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '660px'&#125;\" [numVisible]=\"5\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Positioned at Left&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '660px'&#125;\" [numVisible]=\"4\"\n    thumbnailsPosition=\"left\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Positioned at Right&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '660px', 'margin-top':'2em'&#125;\" [numVisible]=\"4\"\n    thumbnailsPosition=\"right\"&gt; \n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Positioned at Top&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '660px', 'margin-top':'2em'&#125;\" [numVisible]=\"5\"\n    thumbnailsPosition=\"top\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n&lt;h3&gt;Positioned at Bottom&lt;/h3&gt;\n&lt;p-galleria [(value)]=\"images\" [responsiveOptions]=\"responsiveOptions\" [containerStyle]=\"&#123;'max-width': '660px', 'margin-top':'2em'&#125;\" [numVisible]=\"5\"\n    thumbnailsPosition=\"bottom\"&gt;\n    &lt;ng-template pTemplate=\"item\" let-item&gt;\n        &lt;img [src]=\"item.previewImageSrc\" style=\"width: 100%; display: block;\" /&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"thumbnail\" let-item&gt;\n        &lt;div class=\"p-grid p-nogutter p-justify-center\"&gt;\n            &lt;img [src]=\"item.thumbnailImageSrc\" /&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-galleria&gt;\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriaadvanceddemo.scss":
  /*!************************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriaadvanceddemo.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function _src_app_showcase_components_galleria_galleriaadvanceddemoScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep .custom-galleria.ui-galleria.fullscreen {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n:host ::ng-deep .custom-galleria.ui-galleria.fullscreen .ui-galleria-content {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .ui-galleria-content {\n  position: relative;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .ui-galleria-thumbnail-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .ui-galleria-thumbnail-items-container {\n  width: 100%;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .custom-galleria-footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #ffffff;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .custom-galleria-footer > button {\n  background-color: transparent;\n  color: #ffffff;\n  border: 0 none;\n  border-radius: 0;\n  margin: 0.2rem 0;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .custom-galleria-footer > button.fullscreen-button {\n  margin-left: auto;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .custom-galleria-footer > button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n:host ::ng-deep .custom-galleria.ui-galleria .title-container > span {\n  font-size: 0.9rem;\n  padding-left: 0.829rem;\n}\n:host ::ng-deep .custom-galleria.ui-galleria .title-container > span.title {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2UvY29tcG9uZW50cy9nYWxsZXJpYS9FOlxcUHJvamVjdHNcXFByaW1lTkd2OS0xLTMvc3JjXFxhcHBcXHNob3djYXNlXFxjb21wb25lbnRzXFxnYWxsZXJpYVxcZ2FsbGVyaWFhZHZhbmNlZGRlbW8uc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvY29tcG9uZW50cy9nYWxsZXJpYS9nYWxsZXJpYWFkdmFuY2VkZGVtby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtBQ0RaO0FER1k7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDRGhCO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FETVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0paO0FET1E7RUFDSSxXQUFBO0FDTFo7QURRUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUNOWjtBRFFZO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOaEI7QURRZ0I7RUFDSSxpQkFBQTtBQ05wQjtBRFNnQjtFQUNJLDBDQUFBO0FDUHBCO0FEYVk7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FDWGhCO0FEYWdCO0VBQ0ksaUJBQUE7QUNYcEIiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9jb21wb25lbnRzL2dhbGxlcmlhL2dhbGxlcmlhYWR2YW5jZWRkZW1vLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1nYWxsZXJpYSB7XG4gICAgJi51aS1nYWxsZXJpYSB7XG4gICAgICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnVpLWdhbGxlcmlhLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC51aS1nYWxsZXJpYS1jb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51aS1nYWxsZXJpYS10aHVtYm5haWwtd3JhcHBlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudWktZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXN0b20tZ2FsbGVyaWEtZm9vdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgICAgICAgPiBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAuMnJlbSAwO1xuXG4gICAgICAgICAgICAgICAgJi5mdWxsc2NyZWVuLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuODI5cmVtO1xuXG4gICAgICAgICAgICAgICAgJi50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCI6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1nYWxsZXJpYS51aS1nYWxsZXJpYS5mdWxsc2NyZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWdhbGxlcmlhLnVpLWdhbGxlcmlhLmZ1bGxzY3JlZW4gLnVpLWdhbGxlcmlhLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZ2FsbGVyaWEudWktZ2FsbGVyaWEgLnVpLWdhbGxlcmlhLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1nYWxsZXJpYS51aS1nYWxsZXJpYSAudWktZ2FsbGVyaWEtdGh1bWJuYWlsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1nYWxsZXJpYS51aS1nYWxsZXJpYSAudWktZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW1zLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZ2FsbGVyaWEudWktZ2FsbGVyaWEgLmN1c3RvbS1nYWxsZXJpYS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZ2FsbGVyaWEudWktZ2FsbGVyaWEgLmN1c3RvbS1nYWxsZXJpYS1mb290ZXIgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMCBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDAuMnJlbSAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZ2FsbGVyaWEudWktZ2FsbGVyaWEgLmN1c3RvbS1nYWxsZXJpYS1mb290ZXIgPiBidXR0b24uZnVsbHNjcmVlbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWdhbGxlcmlhLnVpLWdhbGxlcmlhIC5jdXN0b20tZ2FsbGVyaWEtZm9vdGVyID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZ2FsbGVyaWEudWktZ2FsbGVyaWEgLnRpdGxlLWNvbnRhaW5lciA+IHNwYW4ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjgyOXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWdhbGxlcmlhLnVpLWdhbGxlcmlhIC50aXRsZS1jb250YWluZXIgPiBzcGFuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriaadvanceddemo.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriaadvanceddemo.ts ***!
    \**********************************************************************/

  /*! exports provided: GalleriaAdvancedDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriaadvanceddemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaAdvancedDemo", function () {
      return GalleriaAdvancedDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");
    /* harmony import */


    var primeng_galleria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/galleria */
    "./src/app/components/galleria/public_api.ts");

    var GalleriaAdvancedDemo = /*#__PURE__*/function () {
      function GalleriaAdvancedDemo(photoService) {
        _classCallCheck(this, GalleriaAdvancedDemo);

        this.photoService = photoService;
        this.fullscreen = false;
        this.activeIndex = 0;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaAdvancedDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.photoService.getImages().then(function (images) {
            return _this.images = images;
          });
          this.bindDocumentListeners();
        }
      }, {
        key: "onThumbnailButtonClick",
        value: function onThumbnailButtonClick() {
          this.showThumbnails = !this.showThumbnails;
        }
      }, {
        key: "toggleFullScreen",
        value: function toggleFullScreen() {
          if (this.fullscreen) {
            this.closePreviewFullScreen();
          } else {
            this.openPreviewFullScreen();
          }
        }
      }, {
        key: "openPreviewFullScreen",
        value: function openPreviewFullScreen() {
          var elem = this.galleria.element.nativeElement.querySelector(".ui-galleria");

          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
          } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
          } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
          }
        }
      }, {
        key: "onFullScreenChange",
        value: function onFullScreenChange() {
          this.fullscreen = !this.fullscreen;
        }
      }, {
        key: "closePreviewFullScreen",
        value: function closePreviewFullScreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
          } else if (document['webkitExitFullscreen']) {
            document['webkitExitFullscreen']();
          } else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
          }
        }
      }, {
        key: "bindDocumentListeners",
        value: function bindDocumentListeners() {
          this.onFullScreenListener = this.onFullScreenChange.bind(this);
          document.addEventListener("fullscreenchange", this.onFullScreenListener);
          document.addEventListener("mozfullscreenchange", this.onFullScreenListener);
          document.addEventListener("webkitfullscreenchange", this.onFullScreenListener);
          document.addEventListener("msfullscreenchange", this.onFullScreenListener);
        }
      }, {
        key: "unbindDocumentListeners",
        value: function unbindDocumentListeners() {
          document.removeEventListener("fullscreenchange", this.onFullScreenListener);
          document.removeEventListener("mozfullscreenchange", this.onFullScreenListener);
          document.removeEventListener("webkitfullscreenchange", this.onFullScreenListener);
          document.removeEventListener("msfullscreenchange", this.onFullScreenListener);
          this.onFullScreenListener = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unbindDocumentListeners();
        }
      }, {
        key: "galleriaClass",
        value: function galleriaClass() {
          return "custom-galleria ".concat(this.fullscreen ? 'fullscreen' : '');
        }
      }, {
        key: "fullScreenIcon",
        value: function fullScreenIcon() {
          return "pi ".concat(this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize');
        }
      }]);
    }();

    GalleriaAdvancedDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('galleria'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", primeng_galleria__WEBPACK_IMPORTED_MODULE_3__["Galleria"])], GalleriaAdvancedDemo.prototype, "galleria", void 0);
    GalleriaAdvancedDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriaadvanceddemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaadvanceddemo.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./galleriaadvanceddemo.scss */
      "./src/app/showcase/components/galleria/galleriaadvanceddemo.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaAdvancedDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriaautoplaydemo.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriaautoplaydemo.ts ***!
    \**********************************************************************/

  /*! exports provided: GalleriaAutoPlayDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriaautoplaydemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaAutoPlayDemo", function () {
      return GalleriaAutoPlayDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaAutoPlayDemo = /*#__PURE__*/function () {
      function GalleriaAutoPlayDemo(photoService) {
        _classCallCheck(this, GalleriaAutoPlayDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaAutoPlayDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.photoService.getImages().then(function (images) {
            return _this2.images = images;
          });
        }
      }]);
    }();

    GalleriaAutoPlayDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaAutoPlayDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriaautoplaydemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaautoplaydemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaAutoPlayDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriacaptiondemo.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriacaptiondemo.ts ***!
    \*********************************************************************/

  /*! exports provided: GalleriaCaptionDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriacaptiondemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaCaptionDemo", function () {
      return GalleriaCaptionDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaCaptionDemo = /*#__PURE__*/function () {
      function GalleriaCaptionDemo(photoService) {
        _classCallCheck(this, GalleriaCaptionDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaCaptionDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.photoService.getImages().then(function (images) {
            return _this3.images = images;
          });
        }
      }]);
    }();

    GalleriaCaptionDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaCaptionDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriacaptiondemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriacaptiondemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaCaptionDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriademo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriademo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: GalleriaDemoRoutingModule */

  /***/
  function _src_app_showcase_components_galleria_galleriademoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaDemoRoutingModule", function () {
      return GalleriaDemoRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _galleriademo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./galleriademo */
    "./src/app/showcase/components/galleria/galleriademo.ts");
    /* harmony import */


    var _galleriaindicatordemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./galleriaindicatordemo */
    "./src/app/showcase/components/galleria/galleriaindicatordemo.ts");
    /* harmony import */


    var _galleriathumbnaildemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./galleriathumbnaildemo */
    "./src/app/showcase/components/galleria/galleriathumbnaildemo.ts");
    /* harmony import */


    var _gallerianavigatordemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallerianavigatordemo */
    "./src/app/showcase/components/galleria/gallerianavigatordemo.ts");
    /* harmony import */


    var _galleriaresponsivedemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./galleriaresponsivedemo */
    "./src/app/showcase/components/galleria/galleriaresponsivedemo.ts");
    /* harmony import */


    var _galleriafullscreendemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./galleriafullscreendemo */
    "./src/app/showcase/components/galleria/galleriafullscreendemo.ts");
    /* harmony import */


    var _galleriaautoplaydemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./galleriaautoplaydemo */
    "./src/app/showcase/components/galleria/galleriaautoplaydemo.ts");
    /* harmony import */


    var _galleriacaptiondemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./galleriacaptiondemo */
    "./src/app/showcase/components/galleria/galleriacaptiondemo.ts");
    /* harmony import */


    var _galleriaprogrammaticdemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./galleriaprogrammaticdemo */
    "./src/app/showcase/components/galleria/galleriaprogrammaticdemo.ts");
    /* harmony import */


    var _galleriaadvanceddemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./galleriaadvanceddemo */
    "./src/app/showcase/components/galleria/galleriaadvanceddemo.ts");

    var GalleriaDemoRoutingModule = /*#__PURE__*/_createClass(function GalleriaDemoRoutingModule() {
      _classCallCheck(this, GalleriaDemoRoutingModule);
    });

    GalleriaDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _galleriademo__WEBPACK_IMPORTED_MODULE_3__["GalleriaDemo"]
      }, {
        path: 'programmatic',
        component: _galleriaprogrammaticdemo__WEBPACK_IMPORTED_MODULE_11__["GalleriaProgrammaticDemo"]
      }, {
        path: 'indicator',
        component: _galleriaindicatordemo__WEBPACK_IMPORTED_MODULE_4__["GalleriaIndicatorDemo"]
      }, {
        path: 'thumbnail',
        component: _galleriathumbnaildemo__WEBPACK_IMPORTED_MODULE_5__["GalleriaThumbnailDemo"]
      }, {
        path: 'navigator',
        component: _gallerianavigatordemo__WEBPACK_IMPORTED_MODULE_6__["GalleriaNavigatorDemo"]
      }, {
        path: 'responsive',
        component: _galleriaresponsivedemo__WEBPACK_IMPORTED_MODULE_7__["GalleriaResponsiveDemo"]
      }, {
        path: 'fullscreen',
        component: _galleriafullscreendemo__WEBPACK_IMPORTED_MODULE_8__["GalleriaFullscreenDemo"]
      }, {
        path: 'autoplay',
        component: _galleriaautoplaydemo__WEBPACK_IMPORTED_MODULE_9__["GalleriaAutoPlayDemo"]
      }, {
        path: 'caption',
        component: _galleriacaptiondemo__WEBPACK_IMPORTED_MODULE_10__["GalleriaCaptionDemo"]
      }, {
        path: 'advanced',
        component: _galleriaadvanceddemo__WEBPACK_IMPORTED_MODULE_12__["GalleriaAdvancedDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GalleriaDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriademo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriademo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: GalleriaDemoModule */

  /***/
  function _src_app_showcase_components_galleria_galleriademoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaDemoModule", function () {
      return GalleriaDemoModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _galleriademo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./galleriademo-routing.module */
    "./src/app/showcase/components/galleria/galleriademo-routing.module.ts");
    /* harmony import */


    var primeng_galleria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/galleria */
    "./src/app/components/galleria/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");
    /* harmony import */


    var _galleriademo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./galleriademo */
    "./src/app/showcase/components/galleria/galleriademo.ts");
    /* harmony import */


    var _galleriaprogrammaticdemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./galleriaprogrammaticdemo */
    "./src/app/showcase/components/galleria/galleriaprogrammaticdemo.ts");
    /* harmony import */


    var _galleriaindicatordemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./galleriaindicatordemo */
    "./src/app/showcase/components/galleria/galleriaindicatordemo.ts");
    /* harmony import */


    var _galleriathumbnaildemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./galleriathumbnaildemo */
    "./src/app/showcase/components/galleria/galleriathumbnaildemo.ts");
    /* harmony import */


    var _gallerianavigatordemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./gallerianavigatordemo */
    "./src/app/showcase/components/galleria/gallerianavigatordemo.ts");
    /* harmony import */


    var _galleriaresponsivedemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./galleriaresponsivedemo */
    "./src/app/showcase/components/galleria/galleriaresponsivedemo.ts");
    /* harmony import */


    var _galleriafullscreendemo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./galleriafullscreendemo */
    "./src/app/showcase/components/galleria/galleriafullscreendemo.ts");
    /* harmony import */


    var _galleriaautoplaydemo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./galleriaautoplaydemo */
    "./src/app/showcase/components/galleria/galleriaautoplaydemo.ts");
    /* harmony import */


    var _galleriacaptiondemo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./galleriacaptiondemo */
    "./src/app/showcase/components/galleria/galleriacaptiondemo.ts");
    /* harmony import */


    var _galleriaadvanceddemo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./galleriaadvanceddemo */
    "./src/app/showcase/components/galleria/galleriaadvanceddemo.ts");

    var GalleriaDemoModule = /*#__PURE__*/_createClass(function GalleriaDemoModule() {
      _classCallCheck(this, GalleriaDemoModule);
    });

    GalleriaDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _galleriademo_routing_module__WEBPACK_IMPORTED_MODULE_3__["GalleriaDemoRoutingModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_4__["GalleriaModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]],
      declarations: [_galleriademo__WEBPACK_IMPORTED_MODULE_8__["GalleriaDemo"], _galleriaprogrammaticdemo__WEBPACK_IMPORTED_MODULE_9__["GalleriaProgrammaticDemo"], _galleriaindicatordemo__WEBPACK_IMPORTED_MODULE_10__["GalleriaIndicatorDemo"], _galleriathumbnaildemo__WEBPACK_IMPORTED_MODULE_11__["GalleriaThumbnailDemo"], _gallerianavigatordemo__WEBPACK_IMPORTED_MODULE_12__["GalleriaNavigatorDemo"], _galleriaresponsivedemo__WEBPACK_IMPORTED_MODULE_13__["GalleriaResponsiveDemo"], _galleriafullscreendemo__WEBPACK_IMPORTED_MODULE_14__["GalleriaFullscreenDemo"], _galleriaautoplaydemo__WEBPACK_IMPORTED_MODULE_15__["GalleriaAutoPlayDemo"], _galleriacaptiondemo__WEBPACK_IMPORTED_MODULE_16__["GalleriaCaptionDemo"], _galleriaadvanceddemo__WEBPACK_IMPORTED_MODULE_17__["GalleriaAdvancedDemo"]]
    })], GalleriaDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriademo.ts":
  /*!**************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriademo.ts ***!
    \**************************************************************/

  /*! exports provided: GalleriaDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriademoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaDemo", function () {
      return GalleriaDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaDemo = /*#__PURE__*/function () {
      function GalleriaDemo(photoService) {
        _classCallCheck(this, GalleriaDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.photoService.getImages().then(function (images) {
            return _this4.images = images;
          });
        }
      }]);
    }();

    GalleriaDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriademo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriademo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriafullscreendemo.ts":
  /*!************************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriafullscreendemo.ts ***!
    \************************************************************************/

  /*! exports provided: GalleriaFullscreenDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriafullscreendemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaFullscreenDemo", function () {
      return GalleriaFullscreenDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaFullscreenDemo = /*#__PURE__*/function () {
      function GalleriaFullscreenDemo(photoService) {
        _classCallCheck(this, GalleriaFullscreenDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
        this.responsiveOptions2 = [{
          breakpoint: '1500px',
          numVisible: 5
        }, {
          breakpoint: '1024px',
          numVisible: 3
        }, {
          breakpoint: '768px',
          numVisible: 2
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
        this.activeIndex = 0;
      }

      return _createClass(GalleriaFullscreenDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.photoService.getImages().then(function (images) {
            _this5.images = images;
          });
        }
      }, {
        key: "imageClick",
        value: function imageClick(index) {
          this.activeIndex = index;
          this.displayCustom = true;
        }
      }]);
    }();

    GalleriaFullscreenDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaFullscreenDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriafullscreendemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriafullscreendemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaFullscreenDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriaindicatordemo.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriaindicatordemo.ts ***!
    \***********************************************************************/

  /*! exports provided: GalleriaIndicatorDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriaindicatordemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaIndicatorDemo", function () {
      return GalleriaIndicatorDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaIndicatorDemo = /*#__PURE__*/function () {
      function GalleriaIndicatorDemo(photoService) {
        _classCallCheck(this, GalleriaIndicatorDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaIndicatorDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.photoService.getImages().then(function (images) {
            _this6.images = images;
          });
        }
      }]);
    }();

    GalleriaIndicatorDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaIndicatorDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriaindicatordemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaindicatordemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaIndicatorDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/gallerianavigatordemo.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/galleria/gallerianavigatordemo.ts ***!
    \***********************************************************************/

  /*! exports provided: GalleriaNavigatorDemo */

  /***/
  function _src_app_showcase_components_galleria_gallerianavigatordemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaNavigatorDemo", function () {
      return GalleriaNavigatorDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaNavigatorDemo = /*#__PURE__*/function () {
      function GalleriaNavigatorDemo(photoService) {
        _classCallCheck(this, GalleriaNavigatorDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaNavigatorDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.photoService.getImages().then(function (images) {
            _this7.images = images;
          });
        }
      }]);
    }();

    GalleriaNavigatorDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaNavigatorDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gallerianavigatordemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/gallerianavigatordemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaNavigatorDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriaprogrammaticdemo.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriaprogrammaticdemo.ts ***!
    \**************************************************************************/

  /*! exports provided: GalleriaProgrammaticDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriaprogrammaticdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaProgrammaticDemo", function () {
      return GalleriaProgrammaticDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaProgrammaticDemo = /*#__PURE__*/function () {
      function GalleriaProgrammaticDemo(photoService) {
        _classCallCheck(this, GalleriaProgrammaticDemo);

        this.photoService = photoService;
        this._activeIndex = 2;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaProgrammaticDemo, [{
        key: "activeIndex",
        get: function get() {
          return this._activeIndex;
        },
        set: function set(newValue) {
          if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
            this._activeIndex = newValue;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.photoService.getImages().then(function (images) {
            return _this8.images = images;
          });
        }
      }, {
        key: "next",
        value: function next() {
          this.activeIndex++;
        }
      }, {
        key: "prev",
        value: function prev() {
          this.activeIndex--;
        }
      }]);
    }();

    GalleriaProgrammaticDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaProgrammaticDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriaprogrammaticdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaprogrammaticdemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaProgrammaticDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriaresponsivedemo.ts":
  /*!************************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriaresponsivedemo.ts ***!
    \************************************************************************/

  /*! exports provided: GalleriaResponsiveDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriaresponsivedemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaResponsiveDemo", function () {
      return GalleriaResponsiveDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaResponsiveDemo = /*#__PURE__*/function () {
      function GalleriaResponsiveDemo(photoService) {
        _classCallCheck(this, GalleriaResponsiveDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '960px',
          numVisible: 4
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaResponsiveDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.photoService.getImages().then(function (images) {
            _this9.images = images;
          });
        }
      }]);
    }();

    GalleriaResponsiveDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaResponsiveDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriaresponsivedemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriaresponsivedemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaResponsiveDemo);
    /***/
  },

  /***/
  "./src/app/showcase/components/galleria/galleriathumbnaildemo.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/showcase/components/galleria/galleriathumbnaildemo.ts ***!
    \***********************************************************************/

  /*! exports provided: GalleriaThumbnailDemo */

  /***/
  function _src_app_showcase_components_galleria_galleriathumbnaildemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleriaThumbnailDemo", function () {
      return GalleriaThumbnailDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_photoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/photoservice */
    "./src/app/showcase/service/photoservice.ts");

    var GalleriaThumbnailDemo = /*#__PURE__*/function () {
      function GalleriaThumbnailDemo(photoService) {
        _classCallCheck(this, GalleriaThumbnailDemo);

        this.photoService = photoService;
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: 5
        }, {
          breakpoint: '768px',
          numVisible: 3
        }, {
          breakpoint: '560px',
          numVisible: 1
        }];
      }

      return _createClass(GalleriaThumbnailDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.photoService.getImages().then(function (images) {
            _this10.images = images;
          });
        }
      }]);
    }();

    GalleriaThumbnailDemo.ctorParameters = function () {
      return [{
        type: _service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }];
    };

    GalleriaThumbnailDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./galleriathumbnaildemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/galleria/galleriathumbnaildemo.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_photoservice__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], GalleriaThumbnailDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-galleria-galleriademo-module-es5.js.map