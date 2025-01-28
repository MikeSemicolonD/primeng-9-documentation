function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-gmap-gmapdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/gmap/gmapdemo.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/gmap/gmapdemo.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_gmap_gmapdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">GMap</span>\n        <span>GMap component provides integration with Google Maps API. This sample demontrates\n        various uses cases like binding, overlays and events. Click the map to add a new item.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-toast></p-toast>\n\n    <p-gmap #gmap [style]=\"{'width':'100%','height':'320px', 'margin-bottom': '1em'}\" [options]=\"options\" [overlays]=\"overlays\"\n       (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"></p-gmap>\n\n    <button type=\"button\" pButton label=\"Clear\" icon=\"pi pi-times\" (click)=\"clear()\" style=\"margin-right:.25em\"></button>\n    <button type=\"button\" pButton label=\"Zoom In\" icon=\"pi pi-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-right:.25em\"></button>\n    <button type=\"button\" pButton label=\"Zoom Out\" icon=\"pi pi-minus\" (click)=\"zoomOut(gmap.getMap())\"></button>\n\n    <p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\" [style]=\"{width: '300px'}\">\n        <div class=\"p-grid ui-fluid\" *ngIf=\"selectedPosition\">\n            <div class=\"p-col-2\"><label for=\"title\">Label</label></div>\n            <div class=\"p-col-10\"><input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"></div>\n\n            <div class=\"p-col-2\"><label for=\"lat\">Lat</label></div>\n            <div class=\"p-col-10\"><input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"></div>\n\n            <div class=\"p-col-2\"><label for=\"lng\">Lng</label></div>\n            <div class=\"p-col-10\"><input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"></div>\n\n            <div class=\"p-col-2\"><label for=\"drg\">Drag</label></div>\n            <div class=\"p-col-10\"><p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"{'margin-top':'.25em'}\"></p-checkbox></div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton label=\"Add Marker\" icon=\"pi pi-plus\" (click)=\"addMarker()\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;GMapModule&#125; from 'primeng/gmap';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>A map is initialized with options and dimensions. Refer to the google maps api for the list of available options.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap [options]=\"options\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Overlays</h3>\n            <p>GMap can display any type of overlay such as markers, polygons and circles. Overlay instances are bound using the overlays property array. Overlays are aware\n            of one-way binding so whenever the array changes, gmap updates itself.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n\n        this.overlays = [\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n            new google.maps.Polygon(&#123;paths: [\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n            &#125;),\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Events</h3>\n            <p>GMap provides common callbacks to hook into events including map click, overlay click and overlay dragging.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\"\n            (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\"&gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n\n        this.overlays = [\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n            new google.maps.Polygon(&#123;paths: [\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n            &#125;),\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\n        ];\n    &#125;\n\n    handleMapClick(event) &#123;\n        //event: MouseEvent of Google Maps api\n    &#125;\n\n    handleOverlayClick(event) &#123;\n        //event.originalEvent: MouseEvent of Google Maps api\n        //event.overlay: Clicked overlay\n        //event.map: Map instance\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Google Maps API</h3>\n            <p>In case you need to access the map instance directly, use the getMap() method.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap #gmap [options]=\"options\"&gt;&lt;/p-gmap&gt;\n\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"pi-search-plus\" (click)=\"zoomIn(gmap.getMap())\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n\n    overlays: any[];\n\n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n    &#125;\n\n    zoomIn(map) &#123;\n        map.setZoom(map.getZoom()+1);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Another option is to to get the map object directly after init via (onMapReady) event.\n               In the example below, google.maps.Map is used for adjusting map bounds to markers.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-gmap #gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"mapStyle\"\n    (onMapReady)=\"setMap($event)\"&gt;&lt;/p-gmap&gt;\n</code>\n</pre>\n            <p>Then from your component you would write</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MyModel &#123;\n\n    options: any;\n\n    overlays: any[];\n\n    map: google.maps.Map;\n\n    setMap(event) &#123;\n        this.map = event.map;\n    &#125;\n\n    ngOnInit() &#123;\n        let bounds = new google.maps.LatLngBounds();\n        this.overlays = [\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n        ]\n        // ... extend bounds\n        this.overlays.forEach(marker => &#123;\n            bounds.extend(marker.getPosition());\n        &#125;);\n\n        setTimeout(()=> &#123; // map will need some time to load\n            this.map.fitBounds(bounds); // Map object used directly\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Google Maps API configuration object.</td>\n                        </tr>\n                        <tr>\n                            <td>overlays</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of overlays to display.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onMapClick</td>\n                            <td>event: Google Maps MouseEvent</td>\n                            <td>Callback to invoke when map is clicked except markers.</td>\n                        </tr>\n                        <tr>\n                            <td>onMapDragEnd</td>\n                            <td>originalEvent: Google Maps dragend<br></td>\n                            <td>Callback to invoke when map drag (i.e. pan) has ended.</td>\n                        </tr>\n                        <tr>\n                            <td>onMapReady</td>\n                            <td>event.map: Google Maps Instance</td>\n                            <td>Callback to invoke when the map is ready to be used.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayClick</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay is clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayDblClick</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay is double clicked.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayDrag</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay is being dragged.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayDragEnd</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay drag ends.</td>\n                        </tr>\n                        <tr>\n                            <td>onOverlayDragStart</td>\n                            <td>originalEvent: Google Maps MouseEvent <br>\n                                overlay: Clicked overlay <br>\n                                map: Map instance <br></td>\n                            <td>Callback to invoke when an overlay drag starts.</td>\n                        </tr>\n                        <tr>\n                            <td>onZoomChanged</td>\n                            <td>originalEvent: Google Maps zoom_changed</td>\n                            <td>Callback to invoke when zoom level has changed.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>Google Maps API.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/gmap\" class=\"btn-viewsource\" target=\"_blank\">\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-toast [style]=\"&#123;marginTop: '80px'&#125;\"&gt;&lt;/p-toast&gt;\n\n&lt;p-gmap #gmap [style]=\"&#123;'width':'100%','height':'320px', 'margin-bottom': '1em'&#125;\" [options]=\"options\" [overlays]=\"overlays\"\n       (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"&gt;&lt;/p-gmap&gt;\n\n&lt;button type=\"button\" pButton label=\"Clear\" icon=\"pi pi-times\" (click)=\"clear()\" style=\"margin-right:.25em\"&gt;&lt;/button&gt;\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"pi pi-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-right:.25em\"&gt;&lt;/button&gt;\n&lt;button type=\"button\" pButton label=\"Zoom Out\" icon=\"pi pi-minus\" (click)=\"zoomOut(gmap.getMap())\"&gt;&lt;/button&gt;\n\n&lt;p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\" [style]=\"&#123;width: '300px'&#125;\">&gt;\n    &lt;div class=\"p-grid ui-fluid\" *ngIf=\"selectedPosition\"&gt;\n        &lt;div class=\"p-col-2\"&gt;&lt;label for=\"title\"&gt;Label&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"p-col-10\"&gt;&lt;input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"&gt;&lt;/div&gt;\n\n        &lt;div class=\"p-col-2\"&gt;&lt;label for=\"lat\"&gt;Lat&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"p-col-10\"&gt;&lt;input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"&gt;&lt;/div&gt;\n\n        &lt;div class=\"p-col-2\"&gt;&lt;label for=\"lng\"&gt;Lng&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"p-col-10\"&gt;&lt;input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"&gt;&lt;/div&gt;\n\n        &lt;div class=\"p-col-2\"&gt;&lt;label for=\"drg\"&gt;Drag&lt;/label&gt;&lt;/div&gt;\n        &lt;div class=\"p-col-10\"&gt;&lt;p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"&#123;'margin-top':'.25em'&#125;\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;p-footer&gt;\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton label=\"Add Marker\" icon=\"pi-plus\" (click)=\"addMarker()\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class GMapDemo implements OnInit &#123;\n\n    options: any;\n\n    overlays: any[];\n\n    dialogVisible: boolean;\n\n    markerTitle: string;\n\n    selectedPosition: any;\n\n    infoWindow: any;\n\n    draggable: boolean;\n\n    constructor(private messageService: MessageService) &#123;&#125;\n\n    ngOnInit() &#123;\n        this.options = &#123;\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\n            zoom: 12\n        &#125;;\n\n        this.initOverlays();\n\n        this.infoWindow = new google.maps.InfoWindow();\n    &#125;\n\n    handleMapClick(event) &#123;\n        this.dialogVisible = true;\n        this.selectedPosition = event.latLng;\n    &#125;\n\n    handleOverlayClick(event) &#123;\n        let isMarker = event.overlay.getTitle != undefined;\n\n        if (isMarker) &#123;\n            let title = event.overlay.getTitle();\n            this.infoWindow.setContent('<div>' + title + '</div>');\n            this.infoWindow.open(event.map, event.overlay);\n            event.map.setCenter(event.overlay.getPosition());\n\n            this.messageService.add(&#123;severity:'info', summary:'Marker Selected', detail: title&#125;);\n        &#125;\n        else &#123;\n            this.messageService.add(&#123;severity:'info', summary:'Shape Selected', detail: ''&#125;);\n        &#125;\n    &#125;\n\n    addMarker() &#123;\n        this.overlays.push(new google.maps.Marker(&#123;position:&#123;lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()&#125;, title:this.markerTitle, draggable: this.draggable&#125;));\n        this.markerTitle = null;\n        this.dialogVisible = false;\n    &#125;\n\n    handleDragEnd(event) &#123;\n        this.messageService.add(&#123;severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()&#125;);\n    &#125;\n\n    initOverlays() &#123;\n        if (!this.overlays||!this.overlays.length) &#123;\n            this.overlays = [\n                new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\n                new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\n                new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\n                new google.maps.Polygon(&#123;paths: [\n                    &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\n                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\n                &#125;),\n                new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\n                new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\n            ];\n        &#125;\n    &#125;\n\n    zoomIn(map) &#123;\n        map.setZoom(map.getZoom()+1);\n    &#125;\n\n    zoomOut(map) &#123;\n        map.setZoom(map.getZoom()-1);\n    &#125;\n\n    clear() &#123;\n        this.overlays = [];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/components/checkbox/checkbox.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/checkbox/checkbox.ts ***!
    \*************************************************/

  /*! exports provided: CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule */

  /***/
  function _src_app_components_checkbox_checkboxTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function () {
      return CHECKBOX_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Checkbox", function () {
      return Checkbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxModule", function () {
      return CheckboxModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CHECKBOX_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Checkbox;
      }),
      multi: true
    };

    var Checkbox = /*#__PURE__*/function () {
      function Checkbox(cd) {
        _classCallCheck(this, Checkbox);

        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.focused = false;
        this.checked = false;
      }

      return _createClass(Checkbox, [{
        key: "onClick",
        value: function onClick(event, checkbox, focus) {
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
      }, {
        key: "updateModel",
        value: function updateModel(event) {
          if (!this.binary) {
            if (this.checked) this.addValue();else this.removeValue();
            this.onModelChange(this.model);

            if (this.formControl) {
              this.formControl.setValue(this.model);
            }
          } else {
            this.onModelChange(this.checked);
          }

          this.onChange.emit({
            checked: this.checked,
            originalEvent: event
          });
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          if (!this.readonly) {
            this.checked = event.target.checked;
            this.updateModel(event);
          }
        }
      }, {
        key: "isChecked",
        value: function isChecked() {
          if (this.binary) return this.model;else return this.model && this.model.indexOf(this.value) > -1;
        }
      }, {
        key: "removeValue",
        value: function removeValue() {
          var _this = this;

          this.model = this.model.filter(function (val) {
            return val !== _this.value;
          });
        }
      }, {
        key: "addValue",
        value: function addValue() {
          if (this.model) this.model = [].concat(_toConsumableArray(this.model), [this.value]);else this.model = [this.value];
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.focused = true;
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.focused = false;
          this.onModelTouched();
        }
      }, {
        key: "focus",
        value: function focus() {
          this.inputViewChild.nativeElement.focus();
        }
      }, {
        key: "writeValue",
        value: function writeValue(model) {
          this.model = model;
          this.checked = this.isChecked();
          this.cd.markForCheck();
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(val) {
          this.disabled = val;
        }
      }]);
    }();

    Checkbox.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Checkbox.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Checkbox.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Checkbox.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Checkbox.prototype, "binary", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Checkbox.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Checkbox.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Checkbox.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Checkbox.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Checkbox.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Checkbox.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Checkbox.prototype, "labelStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"])], Checkbox.prototype, "formControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Checkbox.prototype, "checkboxIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Checkbox.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Checkbox.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cb'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Checkbox.prototype, "inputViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Checkbox.prototype, "onChange", void 0);
    Checkbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-checkbox',
      template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"{'ui-chkbox ui-widget': true,'ui-chkbox-readonly': readonly}\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [readonly]=\"readonly\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n                [ngClass]=\"{'ui-state-focus':focused}\" (change)=\"handleChange($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.required]=\"required\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,cb,true)\"\n                        [ngClass]=\"{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\" role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"checked ? checkboxIcon : null\"></span>\n            </div>\n        </div>\n        <label (click)=\"onClick($event,cb,true)\" [class]=\"labelStyleClass\"\n                [ngClass]=\"{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n                *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
      providers: [CHECKBOX_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Checkbox);

    var CheckboxModule = /*#__PURE__*/_createClass(function CheckboxModule() {
      _classCallCheck(this, CheckboxModule);
    });

    CheckboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [Checkbox],
      declarations: [Checkbox]
    })], CheckboxModule);
    /***/
  },

  /***/
  "./src/app/components/checkbox/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/checkbox/public_api.ts ***!
    \***************************************************/

  /*! exports provided: CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule */

  /***/
  function _src_app_components_checkbox_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./checkbox */
    "./src/app/components/checkbox/checkbox.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function () {
      return _checkbox__WEBPACK_IMPORTED_MODULE_0__["CHECKBOX_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Checkbox", function () {
      return _checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxModule", function () {
      return _checkbox__WEBPACK_IMPORTED_MODULE_0__["CheckboxModule"];
    });
    /***/

  },

  /***/
  "./src/app/showcase/components/gmap/gmapdemo-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/showcase/components/gmap/gmapdemo-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: GMapDemoRoutingModule */

  /***/
  function _src_app_showcase_components_gmap_gmapdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GMapDemoRoutingModule", function () {
      return GMapDemoRoutingModule;
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


    var _gmapdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gmapdemo */
    "./src/app/showcase/components/gmap/gmapdemo.ts");

    var GMapDemoRoutingModule = /*#__PURE__*/_createClass(function GMapDemoRoutingModule() {
      _classCallCheck(this, GMapDemoRoutingModule);
    });

    GMapDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _gmapdemo__WEBPACK_IMPORTED_MODULE_3__["GMapDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GMapDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/gmap/gmapdemo.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/showcase/components/gmap/gmapdemo.module.ts ***!
    \*************************************************************/

  /*! exports provided: GMapDemoModule */

  /***/
  function _src_app_showcase_components_gmap_gmapdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GMapDemoModule", function () {
      return GMapDemoModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _gmapdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./gmapdemo */
    "./src/app/showcase/components/gmap/gmapdemo.ts");
    /* harmony import */


    var _gmapdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gmapdemo-routing.module */
    "./src/app/showcase/components/gmap/gmapdemo-routing.module.ts");
    /* harmony import */


    var primeng_gmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/gmap */
    "./src/app/components/gmap/public_api.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/toast */
    "./src/app/components/toast/public_api.ts");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/checkbox */
    "./src/app/components/checkbox/public_api.ts");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/dialog */
    "./src/app/components/dialog/public_api.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var GMapDemoModule = /*#__PURE__*/_createClass(function GMapDemoModule() {
      _classCallCheck(this, GMapDemoModule);
    });

    GMapDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _gmapdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["GMapDemoRoutingModule"], primeng_gmap__WEBPACK_IMPORTED_MODULE_6__["GMapModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__["CheckboxModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_12__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_13__["CodeHighlighterModule"]],
      declarations: [_gmapdemo__WEBPACK_IMPORTED_MODULE_4__["GMapDemo"]]
    })], GMapDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/gmap/gmapdemo.ts":
  /*!******************************************************!*\
    !*** ./src/app/showcase/components/gmap/gmapdemo.ts ***!
    \******************************************************/

  /*! exports provided: GMapDemo */

  /***/
  function _src_app_showcase_components_gmap_gmapdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GMapDemo", function () {
      return GMapDemo;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var GMapDemo = /*#__PURE__*/function () {
      function GMapDemo(messageService) {
        _classCallCheck(this, GMapDemo);

        this.messageService = messageService;
      }

      return _createClass(GMapDemo, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.options = {
            center: {
              lat: 36.890257,
              lng: 30.707417
            },
            zoom: 12
          };
          this.initOverlays();
          this.infoWindow = new google.maps.InfoWindow();
        }
      }, {
        key: "handleMapClick",
        value: function handleMapClick(event) {
          this.dialogVisible = true;
          this.selectedPosition = event.latLng;
        }
      }, {
        key: "handleOverlayClick",
        value: function handleOverlayClick(event) {
          var isMarker = event.overlay.getTitle != undefined;

          if (isMarker) {
            var title = event.overlay.getTitle();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
            this.messageService.add({
              severity: 'info',
              summary: 'Marker Selected',
              detail: title
            });
          } else {
            this.messageService.add({
              severity: 'info',
              summary: 'Shape Selected',
              detail: ''
            });
          }
        }
      }, {
        key: "addMarker",
        value: function addMarker() {
          this.overlays.push(new google.maps.Marker({
            position: {
              lat: this.selectedPosition.lat(),
              lng: this.selectedPosition.lng()
            },
            title: this.markerTitle,
            draggable: this.draggable
          }));
          this.markerTitle = null;
          this.dialogVisible = false;
        }
      }, {
        key: "handleDragEnd",
        value: function handleDragEnd(event) {
          this.messageService.add({
            severity: 'info',
            summary: 'Marker Dragged',
            detail: event.overlay.getTitle()
          });
        }
      }, {
        key: "initOverlays",
        value: function initOverlays() {
          if (!this.overlays || !this.overlays.length) {
            this.overlays = [new google.maps.Marker({
              position: {
                lat: 36.879466,
                lng: 30.667648
              },
              title: "Konyaalti"
            }), new google.maps.Marker({
              position: {
                lat: 36.883707,
                lng: 30.689216
              },
              title: "Ataturk Park"
            }), new google.maps.Marker({
              position: {
                lat: 36.885233,
                lng: 30.702323
              },
              title: "Oldtown"
            }), new google.maps.Polygon({
              paths: [{
                lat: 36.9177,
                lng: 30.7854
              }, {
                lat: 36.8851,
                lng: 30.7802
              }, {
                lat: 36.8829,
                lng: 30.8111
              }, {
                lat: 36.9177,
                lng: 30.8159
              }],
              strokeOpacity: 0.5,
              strokeWeight: 1,
              fillColor: '#1976D2',
              fillOpacity: 0.35
            }), new google.maps.Circle({
              center: {
                lat: 36.90707,
                lng: 30.56533
              },
              fillColor: '#1976D2',
              fillOpacity: 0.35,
              strokeWeight: 1,
              radius: 1500
            }), new google.maps.Polyline({
              path: [{
                lat: 36.86149,
                lng: 30.63743
              }, {
                lat: 36.86341,
                lng: 30.72463
              }],
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 0.5,
              strokeWeight: 2
            })];
          }
        }
      }, {
        key: "zoomIn",
        value: function zoomIn(map) {
          map.setZoom(map.getZoom() + 1);
        }
      }, {
        key: "zoomOut",
        value: function zoomOut(map) {
          map.setZoom(map.getZoom() - 1);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.overlays = [];
        }
      }]);
    }();

    GMapDemo.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    GMapDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gmapdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/gmap/gmapdemo.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
      styles: ["\n        .p-col-2 {\n            display: flex;\n            align-self: center;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], GMapDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-gmap-gmapdemo-module-es5.js.map