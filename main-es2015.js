(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/app.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/app.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layout-wrapper\" [ngClass]=\"{'layout-news-active': newsActive}\">\n    <div class=\"layout-news\" *ngIf=\"newsActive\">\n        <div class=\"layout-news-container\">\n            <span class=\"layout-news-details\">\n                Introducing PRIME<span style=\"color: #DD0031;\">NG</span>&nbsp;LTS\n            </span>\n            <a [routerLink]=\"['/lts']\" target=\"_blank\" class=\"layout-news-button\">\n                LEARN MORE<i class=\"pi pi-angle-right\"></i>\n            </a>\n            <a href=\"#\" class=\"layout-news-close\" (click)=\"hideNews($event)\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n        </div>\n    </div>\n\n    <div class=\"layout-topbar\">\n        <a href=\"#\" class=\"menu-button\" (click)=\"onMenuButtonClick($event)\">\n            <i class=\"pi pi-bars\"></i>\n        </a>\n\n        <a class=\"logo\" [routerLink]=\"['/']\">\n            <img alt=\"logo\" src=\"assets/showcase/images/primeng-logo.svg\" />\n        </a>\n\n        <ul class=\"topbar-menu\" #topbarMenu>\n            <li>\n                <a tabindex=\"0\" (click)=\"toggleTopbarSubmenu($event, 0)\">Themes</a>\n                <ul [@topbarSubmenu]=\"'visible'\" *ngIf=\"activeTopbarSubmenu === 0\" (@topbarSubmenu.start)=\"onTopbarSubmenuAnimationStart($event)\">\n                    <li class=\"topbar-submenu-header\">Theming</li>\n                    <li><a [routerLink]=\"['./theming']\"><span class=\"topbar-submenu-icon pi pi-fw pi-file\"></span>Guide</a></li>\n                    <li><a href=\"https://www.primefaces.org/designer/primeng\"><span class=\"topbar-submenu-icon pi pi-fw pi-cog\"></span>Designer</a></li>\n                    <li><a [routerLink]=\"['./icons']\"><span class=\"topbar-submenu-icon pi pi-fw pi-search\"></span>Icons</a></li>\n                    <li class=\"topbar-submenu-header\">Free Themes</li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'nova-light', false)\"><img src=\"assets/showcase/images/themeswitcher-nova-light.png\" alt=\"Nova Light\"><span class=\"ui-text\">Nova Light</span></a></li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'nova-dark', false)\"><img src=\"assets/showcase/images/themeswitcher-nova-dark.png\" alt=\"Nova Dark\"><span class=\"ui-text\">Nova Dark</span></a></li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'nova-colored', false)\"><img src=\"assets/showcase/images/themeswitcher-nova-colored.png\" alt=\"Nova Colored\"><span class=\"ui-text\">Nova Colored</span></a></li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'luna-amber', true)\"><img src=\"assets/showcase/images/themeswitcher-luna-amber.png\" alt=\"Luna Amber\"><span class=\"ui-text\">Luna Amber</span></a></li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'luna-blue', true)\"><img src=\"assets/showcase/images/themeswitcher-luna-blue.png\" alt=\"Luna Blue\"><span class=\"ui-text\">Luna Blue</span></a></li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'luna-green', true)\"><img src=\"assets/showcase/images/themeswitcher-luna-green.png\" alt=\"Luna Green\"><span class=\"ui-text\">Luna Green</span></a></li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'luna-pink', true)\"><img src=\"assets/showcase/images/themeswitcher-luna-pink.png\" alt=\"Luna Pink\"><span class=\"ui-text\">Luna Pink</span></a></li>\n                    <li><a href=\"#\" (click)=\"changeTheme($event, 'rhea', false)\"><img src=\"assets/showcase/images/themeswitcher-rhea.png\" alt=\"Luna Pink\"><span class=\"ui-text\">Rhea</span></a></li>\n                </ul>\n            </li>\n            <li>\n                <a tabindex=\"0\" (click)=\"toggleTopbarSubmenu($event, 1)\">Templates</a>\n                <ul [@topbarSubmenu]=\"'visible'\" *ngIf=\"activeTopbarSubmenu === 1\" (@topbarSubmenu.start)=\"onTopbarSubmenuAnimationStart($event)\">\n                    <li class=\"topbar-submenu-header\">Premium CLI Templates</li>\n                    <li><a href=\"http://www.primefaces.org/layouts/mirage-ng\"><img src=\"assets/showcase/images/themeswitcher-mirage.png\" alt=\"Mirage\"><span class=\"ui-text\">Mirage </span><span class=\"theme-badge bootstrap\">bootstrap</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/prestige-ng\"><img src=\"assets/showcase/images/themeswitcher-prestige.png\" alt=\"Prestige\"><span class=\"ui-text\">Prestige </span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/sapphire-ng\"><img src=\"assets/showcase/images/themeswitcher-sapphire.png\" alt=\"Sapphire (Material)\"><span class=\"ui-text\">Sapphire <span class=\"theme-badge material\">material</span></span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/avalon-ng\"><img src=\"assets/showcase/images/themeswitcher-avalon.png\" alt=\"Avalon (Bootstrap)\"><span class=\"ui-text\">Avalon <span class=\"theme-badge bootstrap\">bootstrap</span></span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/serenity-ng\"><img src=\"assets/showcase/images/themeswitcher-serenity.png\" alt=\"Serenity (Material)\"><span class=\"ui-text\">Serenity <span class=\"theme-badge material\">material</span></span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/ultima-ng\"><img src=\"assets/showcase/images/themeswitcher-ultima.png\" alt=\"Ultima (Material)\"><span class=\"ui-text\">Ultima <span class=\"theme-badge material\">material</span></span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/barcelona-ng\"><img src=\"assets/showcase/images/themeswitcher-barcelona.png\" alt=\"Barcelona (Material)\"><span class=\"ui-text\">Barcelona <span class=\"theme-badge material\">material</span></span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/babylon-ng\"><img src=\"assets/showcase/images/themeswitcher-babylon.png\" alt=\"Babylon\"><span class=\"ui-text\">Babylon </span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/roma-ng\"><img src=\"assets/showcase/images/themeswitcher-roma.jpg\" alt=\"Roma\"><span class=\"ui-text\">Roma </span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/olympia-ng\"><img src=\"assets/showcase/images/themeswitcher-olympia.png\" alt=\"Olympia\"><span class=\"ui-text\">Olympia </span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/california-ng\"><img src=\"assets/showcase/images/themeswitcher-california.png\" alt=\"Harmony\"><span class=\"ui-text\">California </span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/ecuador-ng\"><img src=\"assets/showcase/images/themeswitcher-ecuador.png\" alt=\"Ecuador\"><span class=\"ui-text\">Ecuador </span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/apollo-ng\"><img src=\"assets/showcase/images/themeswitcher-apollo.png\" alt=\"Apollo\"><span class=\"ui-text\">Apollo</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/manhattan-ng\"><img src=\"assets/showcase/images/themeswitcher-manhattan.png\" alt=\"Manhattan\"><span class=\"ui-text\">Manhattan</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/harmony-ng\"><img src=\"assets/showcase/images/themeswitcher-harmony.png\" alt=\"Harmony\"><span class=\"ui-text\">Harmony</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/verona-ng\"><img src=\"assets/showcase/images/themeswitcher-verona.png\" alt=\"Verona\"><span class=\"ui-text\">Verona</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/paradise-ng\"><img src=\"assets/showcase/images/themeswitcher-paradise.png\" alt=\"Paradise\"><span class=\"ui-text\">Paradise</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/morpheus-ng\"><img src=\"assets/showcase/images/themeswitcher-morpheus.png\" alt=\"Morpheus\"><span class=\"ui-text\">Morpheus</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/atlantis-ng\"><img src=\"assets/showcase/images/themeswitcher-atlantis.png\" alt=\"Atlantis\"><span class=\"ui-text\">Atlantis</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/poseidon-ng\"><img src=\"assets/showcase/images/themeswitcher-poseidon.png\" alt=\"Poseidon\"><span class=\"ui-text\">Poseidon</span></a></li>\n                    <li><a href=\"http://www.primefaces.org/layouts/omega-ng\"><img src=\"assets/showcase/images/themeswitcher-omega.png\" alt=\"Omega\"><span class=\"ui-text\">Omega</span></a></li>\n                </ul>\n            </li>\n            <li>\n                <a tabindex=\"0\" (click)=\"toggleTopbarSubmenu($event, 2)\">Resources</a>\n                <ul [@topbarSubmenu]=\"'visible'\" *ngIf=\"activeTopbarSubmenu === 2\" (@topbarSubmenu.start)=\"onTopbarSubmenuAnimationStart($event)\">\n                    <li><a [routerLink]=\"['/lts']\"><span>Long Term Support</span></a></li>\n                    <li><a [routerLink]=\"['/support']\"><span>PRO Support</span></a></li>\n                    <li><a href=\"https://forum.primefaces.org/viewforum.php?f=35\"><span>Community Support</span></a></li>\n                    <li><a href=\"https://github.com/primefaces/primeng\" target=\"_blank\"><span>Source Code</span></a></li>\n                    <li><a href=\"https://www.primefaces.org/store\" target=\"_blank\"><span>PrimeStore</span></a></li>\n                    <li><a href=\"https://www.primefaces.org/category/primeng/\" target=\"_blank\"><span>Blog</span></a></li>\n                    <li><a href=\"https://twitter.com/prime_ng?lang=en\" target=\"_blank\"><span>Twitter</span></a></li>\n                    <li><a href=\"https://www.primefaces.org/whouses\" target=\"_blank\"><span>Who Uses</span></a></li>\n                    <li><a href=\"https://www.primefaces.org/newsletter\" target=\"_blank\"><span>Newsletter</span></a></li>\n                    <li><a href=\"https://www.primetek.com.tr\" target=\"_blank\"><span>About PrimeTek</span></a></li>\n                </ul>\n            </li>\n            <li>\n                <a tabindex=\"0\" (click)=\"toggleTopbarSubmenu($event, 3)\">{{versions ? versions[0].version : 'Latest'}}</a>\n                <ul [@topbarSubmenu]=\"'visible'\" *ngIf=\"activeTopbarSubmenu === 3\" class=\"topbar-submenu-versions\" (@topbarSubmenu.start)=\"onTopbarSubmenuAnimationStart($event)\">\n                    <li *ngFor=\"let v of versions\">\n                        <a [href]=\"v.url\">{{v.version}}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"layout-sidebar\" [ngClass]=\"{'active': menuActive}\">\n        <div class=\"layout-menu\">\n            <div class=\"layout-menu-search ui-fluid\">\n                <p-autoComplete [(ngModel)]=\"searchText\" [suggestions]=\"filteredRoutes\" (completeMethod)=\"filterRoutes($event)\"\n                    (onSelect)=\"selectRoute($event)\" placeholder=\"Search\"></p-autoComplete>\n                <i class=\"pi pi-search\"></i>\n            </div>\n            <span>\n                <i class=\"pi pi-home\"></i>\n                <span>General</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/setup']\" routerLinkActive=\"router-link-active\">Get Started</a>\n                <a [routerLink]=\"['/theming']\" routerLinkActive=\"router-link-active\">Theming</a>\n                <a href=\"https://www.primefaces.org/designer/primeng\">Designer</a>\n                <a [routerLink]=\"['/flexgrid']\" routerLinkActive=\"router-link-active\">PrimeFlex</a>\n                <a [routerLink]=\"['/icons']\" routerLinkActive=\"router-link-active\">Icons</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-id-card\"></i>\n                <span>Form</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/autocomplete']\" routerLinkActive=\"router-link-active\">AutoComplete</a>\n                <a [routerLink]=\"['/calendar']\" routerLinkActive=\"router-link-active\">Calendar</a>\n                <a [routerLink]=\"['/checkbox']\" routerLinkActive=\"router-link-active\">Checkbox</a>\n                <a [routerLink]=\"['/chips']\" routerLinkActive=\"router-link-active\">Chips</a>\n                <a [routerLink]=\"['/colorpicker']\" routerLinkActive=\"router-link-active\">ColorPicker</a>\n                <a [routerLink]=\"['/dropdown']\" routerLinkActive=\"router-link-active\">Dropdown</a>\n                <a [routerLink]=\"['/editor']\" routerLinkActive=\"router-link-active\">Editor</a>\n                <a [routerLink]=\"['/formlayout']\" routerLinkActive=\"router-link-active\">FormLayout</a>\n                <a [routerLink]=\"['/inputgroup']\" routerLinkActive=\"router-link-active\">InputGroup</a>\n                <a [routerLink]=\"['/inputmask']\" routerLinkActive=\"router-link-active\">InputMask</a>\n                <a [routerLink]=\"['/inputswitch']\" routerLinkActive=\"router-link-active\">InputSwitch</a>\n                <a [routerLink]=\"['/inputtext']\" routerLinkActive=\"router-link-active\">InputText</a>\n                <a [routerLink]=\"['/inputtextarea']\" routerLinkActive=\"router-link-active\">InputTextArea</a>\n                <a [routerLink]=\"['/inputnumber']\" routerLinkActive=\"router-link-active\">InputNumber</a>\n                <a [routerLink]=\"['/keyfilter']\" routerLinkActive=\"router-link-active\">KeyFilter</a>\n                <a [routerLink]=\"['/listbox']\" routerLinkActive=\"router-link-active\">Listbox</a>\n                <a [routerLink]=\"['/multiselect']\" routerLinkActive=\"router-link-active\">MultiSelect</a>\n                <a [routerLink]=\"['/password']\" routerLinkActive=\"router-link-active\">Password</a>\n                <a [routerLink]=\"['/radiobutton']\" routerLinkActive=\"router-link-active\">RadioButton</a>\n                <a [routerLink]=\"['/rating']\" routerLinkActive=\"router-link-active\">Rating</a>\n                <a [routerLink]=\"['/slider']\" routerLinkActive=\"router-link-active\">Slider</a>\n                <a [routerLink]=\"['/spinner']\" routerLinkActive=\"router-link-active\">Spinner</a>\n                <a [routerLink]=\"['/selectbutton']\" routerLinkActive=\"router-link-active\">SelectButton</a>\n                <a [routerLink]=\"['/togglebutton']\" routerLinkActive=\"router-link-active\">ToggleButton</a>\n                <a [routerLink]=\"['/tristatecheckbox']\" routerLinkActive=\"router-link-active\">TriCheckbox</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-mobile\" style=\"transform: rotate(90deg);\"></i>\n                <span>Button</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/button']\" routerLinkActive=\"router-link-active\">Button</a>\n                <a [routerLink]=\"['/splitbutton']\" routerLinkActive=\"router-link-active\">SplitButton</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-list\"></i>\n                <span>Data</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/carousel']\" routerLinkActive=\"router-link-active\">Carousel</a>\n                <a [routerLink]=\"['/dataview']\" routerLinkActive=\"router-link-active\">DataView</a>\n                <a [routerLink]=\"['/fullcalendar']\" routerLinkActive=\"router-link-active\">FullCalendar</a>\n                <a [routerLink]=\"['/gmap']\" routerLinkActive=\"router-link-active\">GMap</a>\n                <a [routerLink]=\"['/orderlist']\" routerLinkActive=\"router-link-active\">OrderList</a>\n                <a [routerLink]=\"['/organizationchart']\" routerLinkActive=\"router-link-active\">Org Chart</a>\n                <a [routerLink]=\"['/paginator']\" routerLinkActive=\"router-link-active\">Paginator</a>\n                <a [routerLink]=\"['/picklist']\" routerLinkActive=\"router-link-active\">PickList</a>\n                <div>\n                    <a tabindex=\"0\" (click)=\"toggleSubmenu($event, '/table')\">Table</a>\n                    <div [@submenu]=\"isSubmenuActive('/table') ? 'visible': 'hidden'\">\n                        <ul>\n                            <li><a [routerLink]=\"['/table']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Documentation</a></li>\n                            <li><a [routerLink]=\"['/table/basic']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Basic</a></li>\n                            <li><a [routerLink]=\"['/table/dynamic']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Dynamic</a></li>\n                            <li><a [routerLink]=\"['/table/sections']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Sections</a></li>\n                            <li><a [routerLink]=\"['/table/page']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Page</a></li>\n                            <li><a [routerLink]=\"['/table/sort']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Sort</a></li>\n                            <li><a [routerLink]=\"['/table/selection']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Selection</a></li>\n                            <li><a [routerLink]=\"['/table/filter']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Filter</a></li>\n                            <li><a [routerLink]=\"['/table/colgroup']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">ColGroup</a></li>\n                            <li><a [routerLink]=\"['/table/lazy']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Lazy</a></li>\n                            <li><a [routerLink]=\"['/table/edit']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Edit</a></li>\n                            <li><a [routerLink]=\"['/table/scroll']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Scroll</a></li>\n                            <li><a [routerLink]=\"['/table/virtualscroll']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">VirtualScroll</a></li>\n                            <li><a [routerLink]=\"['/table/flexscroll']\" target=\"_blank\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">FlexScroll</a></li>\n                            <li><a [routerLink]=\"['/table/rowexpansion']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">RowExpand</a></li>\n                            <li><a [routerLink]=\"['/table/rowgroup']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">RowGroup</a></li>\n                            <li><a [routerLink]=\"['/table/colresize']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Resize</a></li>\n                            <li><a [routerLink]=\"['/table/reorder']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Reorder</a></li>\n                            <li><a [routerLink]=\"['/table/coltoggle']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Toggle</a></li>\n                            <li><a [routerLink]=\"['/table/style']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Style</a></li>\n                            <li><a [routerLink]=\"['/table/export']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Export</a></li>\n                            <li><a [routerLink]=\"['/table/contextmenu']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">ContextMenu</a></li>\n                            <li><a [routerLink]=\"['/table/responsive']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Responsive</a></li>\n                            <li><a [routerLink]=\"['/table/crud']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Crud</a></li>\n                            <li><a [routerLink]=\"['/table/state']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">State</a></li>\n                            <li><a [routerLink]=\"['/table/sticky']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Sticky</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div>\n                    <a tabindex=\"0\" (click)=\"toggleSubmenu($event, '/tree')\">Tree</a>\n                    <div [@submenu]=\"isSubmenuActive('/tree') ? 'visible': 'hidden'\">\n                        <ul>\n                            <li><a [routerLink]=\"['/tree']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Documentation</a></li>\n                            <li><a [routerLink]=\"['/tree/templating']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Templating</a></li>\n                            <li><a [routerLink]=\"['/tree/selection']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Selection</a></li>\n                            <li><a [routerLink]=\"['/tree/filter']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Filter</a></li>\n                            <li><a [routerLink]=\"['/tree/lazy']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Lazy</a></li>\n                            <li><a [routerLink]=\"['/tree/scroll']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Scroll</a></li>\n                            <li><a [routerLink]=\"['/tree/contextmenu']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">ContextMenu</a></li>\n                            <li><a [routerLink]=\"['/tree/dragdrop']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">DragDrop</a></li>\n                            <li><a [routerLink]=\"['/tree/horizontal']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Horizontal</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div>\n                    <a tabindex=\"0\" (click)=\"toggleSubmenu($event, '/treetable')\">TreeTable</a>\n                    <div [@submenu]=\"isSubmenuActive('/treetable') ? 'visible': 'hidden'\">\n                        <ul>\n                            <li><a [routerLink]=\"['/treetable']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Documentation</a></li>\n                            <li><a [routerLink]=\"['/treetable/sections']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Sections</a></li>\n                            <li><a [routerLink]=\"['/treetable/page']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Page</a></li>\n                            <li><a [routerLink]=\"['/treetable/sort']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Sort</a></li>\n                            <li><a [routerLink]=\"['/treetable/selection']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Selection</a></li>\n                            <li><a [routerLink]=\"['/treetable/colgroup']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">ColGroup</a></li>\n                            <li><a [routerLink]=\"['/treetable/lazy']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Lazy</a></li>\n                            <li><a [routerLink]=\"['/treetable/edit']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Edit</a></li>\n                            <li><a [routerLink]=\"['/treetable/scroll']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Scroll</a></li>\n                            <li><a [routerLink]=\"['/treetable/colresize']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Resize</a></li>\n                            <li><a [routerLink]=\"['/treetable/reorder']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Reorder</a></li>\n                            <li><a [routerLink]=\"['/treetable/coltoggle']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Toggle</a></li>\n                            <li><a [routerLink]=\"['/treetable/style']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Style</a></li>\n                            <li><a [routerLink]=\"['/treetable/contextmenu']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">ContextMenu</a></li>\n                            <li><a [routerLink]=\"['/treetable/responsive']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Responsive</a></li>\n                            <li><a [routerLink]=\"['/treetable/filter']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Filter</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n                <a [routerLink]=\"['/virtualscroller']\" routerLinkActive=\"router-link-active\">VirtualScroller</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-th-large\"></i>\n                 <span>Panel</span>\n             </span>\n            <div>\n                <a [routerLink]=\"['/accordion']\" routerLinkActive=\"router-link-active\">Accordion</a>\n                <a [routerLink]=\"['/card']\" routerLinkActive=\"router-link-active\">Card</a>\n                <a [routerLink]=\"['/fieldset']\" routerLinkActive=\"router-link-active\">Fieldset</a>\n                <a [routerLink]=\"['/panel']\" routerLinkActive=\"router-link-active\">Panel</a>\n                <a [routerLink]=\"['/scrollpanel']\" routerLinkActive=\"router-link-active\">ScrollPanel</a>\n                <a [routerLink]=\"['/tabview']\" routerLinkActive=\"router-link-active\">TabView</a>\n                <a [routerLink]=\"['/toolbar']\" routerLinkActive=\"router-link-active\">Toolbar</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-clone\"></i>\n                <span>Overlay</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/confirmdialog']\" routerLinkActive=\"router-link-active\">ConfirmDialog</a>\n                <a [routerLink]=\"['/dialog']\" routerLinkActive=\"router-link-active\">Dialog</a>\n                <a [routerLink]=\"['/dynamicdialog']\" routerLinkActive=\"router-link-active\">DynamicDialog</a>\n                <a [routerLink]=\"['/lightbox']\" routerLinkActive=\"router-link-active\">Lightbox</a>\n                <a [routerLink]=\"['/overlaypanel']\" routerLinkActive=\"router-link-active\">OverlayPanel</a>\n                <a [routerLink]=\"['/sidebar']\" routerLinkActive=\"router-link-active\">Sidebar</a>\n                <a [routerLink]=\"['/tooltip']\" routerLinkActive=\"router-link-active\">Tooltip</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-file-o\"></i>\n                <span>File</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/fileupload']\" routerLinkActive=\"router-link-active\">Upload</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-bars\"></i>\n                <span>Menu</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/menumodel']\" routerLinkActive=\"router-link-active\">MenuModel</a>\n                <a [routerLink]=\"['/breadcrumb']\" routerLinkActive=\"router-link-active\">Breadcrumb</a>\n                <a [routerLink]=\"['/contextmenu']\" routerLinkActive=\"router-link-active\">ContextMenu</a>\n                <a [routerLink]=\"['/megamenu']\" routerLinkActive=\"router-link-active\">MegaMenu</a>\n                <a [routerLink]=\"['/menu']\" routerLinkActive=\"router-link-active\">Menu</a>\n                <a [routerLink]=\"['/menubar']\" routerLinkActive=\"router-link-active\">Menubar</a>\n                <a [routerLink]=\"['/panelmenu']\" routerLinkActive=\"router-link-active\">PanelMenu</a>\n                <a [routerLink]=\"['/slidemenu']\" routerLinkActive=\"router-link-active\">SlideMenu</a>\n                <a [routerLink]=\"['/steps']\" routerLinkActive=\"router-link-active\">Steps</a>\n                <a [routerLink]=\"['/tabmenu']\" routerLinkActive=\"router-link-active\">TabMenu</a>\n                <a [routerLink]=\"['/tieredmenu']\" routerLinkActive=\"router-link-active\">TieredMenu</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-chart-bar\"></i>\n                <span>Chart</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/chart']\" routerLinkActive=\"router-link-active\">ChartModel</a>\n                <a [routerLink]=\"['/chart/bar']\" routerLinkActive=\"router-link-active\">Bar</a>\n                <a [routerLink]=\"['/chart/doughnut']\" routerLinkActive=\"router-link-active\">Doughnut</a>\n                <a [routerLink]=\"['/chart/line']\" routerLinkActive=\"router-link-active\">Line</a>\n                <a [routerLink]=\"['/chart/polararea']\" routerLinkActive=\"router-link-active\">PolarArea</a>\n                <a [routerLink]=\"['/chart/pie']\" routerLinkActive=\"router-link-active\">Pie</a>\n                <a [routerLink]=\"['/chart/radar']\" routerLinkActive=\"router-link-active\">Radar</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-comment\"></i>\n                <span>Messages</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/messages']\" routerLinkActive=\"router-link-active\">Messages</a>\n                <a [routerLink]=\"['/toast']\" routerLinkActive=\"router-link-active\">Toast</a>\n            </div>\n\n            <span>\n                <i class=\"pi pi-image\"></i>\n                <span>Image</span>\n            </span>\n            <div>\n                <div>\n                    <a tabindex=\"0\" (click)=\"toggleSubmenu($event, '/galleria')\">Galleria</a>\n                    <div [@submenu]=\"isSubmenuActive('/galleria') ? 'visible': 'hidden'\">\n                        <ul>\n                            <li><a [routerLink]=\"['/galleria']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Documentation</a></li>\n                            <li><a [routerLink]=\"['/galleria/programmatic']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Programmatic</a></li>\n                            <li><a [routerLink]=\"['/galleria/indicator']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Indicator</a></li>\n                            <li><a [routerLink]=\"['/galleria/thumbnail']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Thumbnail</a></li>\n                            <li><a [routerLink]=\"['/galleria/navigator']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Navigator</a></li>\n                            <li><a [routerLink]=\"['/galleria/responsive']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Responsive</a></li>\n                            <li><a [routerLink]=\"['/galleria/fullscreen']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Fullscreen</a></li>\n                            <li><a [routerLink]=\"['/galleria/autoplay']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">AutoPlay</a></li>\n                            <li><a [routerLink]=\"['/galleria/caption']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Caption</a></li>\n                            <li><a [routerLink]=\"['/galleria/advanced']\" routerLinkActive=\"router-link-active\"[routerLinkActiveOptions]=\"{exact:true}\">Advanced</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n            <span>\n                <i class=\"pi pi-copy\"></i>\n                <span>DragDrop</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/dragdrop']\" routerLinkActive=\"router-link-active\">Drag&amp;Drop</a>\n            </div>\n            \n            <span>\n                <i class=\"pi pi-share-alt\"></i>\n                <span>Misc</span>\n            </span>\n            <div>\n                <a [routerLink]=\"['/blockui']\" routerLinkActive=\"router-link-active\">BlockUI</a>\n                <a [routerLink]=\"['/captcha']\" routerLinkActive=\"router-link-active\">Captcha</a>\n                <a [routerLink]=\"['/codehighlighter']\" routerLinkActive=\"router-link-active\">CodeHighlighter</a>\n                <a [routerLink]=\"['/defer']\" routerLinkActive=\"router-link-active\">Defer</a>\n                <a [routerLink]=\"['/filterutils']\" routerLinkActive=\"router-link-active\">FilterUtils</a>\n                <a [routerLink]=\"['/focustrap']\" routerLinkActive=\"router-link-active\">FocusTrap</a>\n                <a [routerLink]=\"['/inplace']\" routerLinkActive=\"router-link-active\">Inplace</a>\n                <a [routerLink]=\"['/progressbar']\" routerLinkActive=\"router-link-active\">ProgressBar</a>\n                <a [routerLink]=\"['/progressspinner']\" routerLinkActive=\"router-link-active\">ProgressSpinner</a>\n                <a [routerLink]=\"['/responsive']\" routerLinkActive=\"router-link-active\">Responsive</a>\n                <a [routerLink]=\"['/rtl']\" routerLinkActive=\"router-link-active\">RTL</a>\n                <a [routerLink]=\"['/validation']\" routerLinkActive=\"router-link-active\">Validation</a>\n                <a [routerLink]=\"['/terminal']\" routerLinkActive=\"router-link-active\">Terminal</a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"layout-mask\" *ngIf=\"menuActive\" (click)=\"menuActive = false\">\n    </div>\n\n    <app-config></app-config>\n    <div class=\"layout-content\">\n        <div>\n            <router-outlet></router-outlet>\n        </div>\n\n        <div class=\"content-section layout-footer clearfix\">\n            <span>PrimeNG 9.1.1 on Angular 9.1.3</span>\n            <div class=\"footer-links\">\n            <div>\n        </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/home/home.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/home/home.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\">\n    <div class=\"introduction\">\n        <span class=\"introduction-promo\">15M+ DOWNLOADS</span>\n        <h1>The Most Complete User Interface Suite</h1>\n        <h2>for Angular</h2>\n\n        <a class=\"home-button\" [routerLink]=\"['/setup']\">\n            GET STARTED\n        </a>\n    </div>\n\n    <div class=\"features\">\n        <h3>Why PrimeNG?</h3>\n        <p class=\"features-tagline\">Congratulations! 🎉 Your quest to find the UI library for Angular is complete.</p>\n\n        <p class=\"features-description\">PrimeNG is a collection of rich UI components for Angular. All widgets are open source and free to use under MIT License. PrimeNG is developed by <a href=\"http://www.primetek.com.tr\">PrimeTek Informatics</a>,\n            a vendor with years of expertise in developing open source UI solutions. For project news and updates, please follow us on <a href=\"https://twitter.com/prime_ng\">twitter</a> and visit our <a href=\"https://www.primefaces.org/category/primeng/\">blog</a>.</p>\n\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"component\" src=\"assets/showcase/images/home/ng-components.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">80+ COMPONENTS</span>\n                        <p>The most complete set of native widgets featuring 80+ easy to use components for all your UI requirements.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"opensource\" src=\"assets/showcase/images/home/ng-opensource.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">OPEN SOURCE</span>\n                        <p>Hosted at <a href=\"https://github.com/primefaces/primeng\">GitHub</a>, all widgets are open source and free to use under MIT license. Feel the power of open source.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"themes\" src=\"assets/showcase/images/home/ng-themes.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">THEMES</span>\n                        <p>Don’t get tied up in just one look&feel. Choose from a variety of options including material and bootstrap design.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"templates\" src=\"assets/showcase/images/home/ng-templates.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">TEMPLATES</span>\n                        <p>Professionally designed highly customizable native Angular CLI application templates to get you started in no time. </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"accesibility\" src=\"assets/showcase/images/home/ng-accesibility.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">ACCESSIBILITY</span>\n                        <p>Fully accessible and in compliance with Section 508 standards.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"pro\" src=\"assets/showcase/images/home/ng-pro.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">PRO SUPPORT</span>\n                        <p>With the exclusive services of Pro account, you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"productivity\" src=\"assets/showcase/images/home/ng-productivity.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">PRODUCTIVITY</span>\n                        <p>Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"community\" src=\"assets/showcase/images/home/ng-community.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">COMMUNITY</span>\n                        <p>Join PrimeNG community to become a part of an active, vibrant and growing open source foundation.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <div class=\"feature-card\">\n                    <img alt=\"mobile\" src=\"assets/showcase/images/home/ng-mobile.png\" />\n                    <div class=\"feature-card-detail\">\n                        <span class=\"feature-name\">MOBILE</span>\n                        <p>Enhanced mobile user experience with touch optimized responsive design elements.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"whouses\">\n        <h3>Key Users</h3>\n        <p>Open source products of <a href=\"http://www.primetek.com.tr\">PrimeTek</a> are used all around the world by 1M+ developers in Fortune 500 companies, corporations, government and educational\n            institutions.</p>\n        <div class=\"p-grid\">\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/airbus.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/amex.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/nvidia.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/ebay.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/ford.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/fox.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/lufthansa.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/mercedes.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/sap.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/unicredit.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/verizon.svg\"></div>\n            <div class=\"p-col-6 p-md-2\"><img src=\"assets/showcase/images/home/viacom.svg\"></div>\n        </div>\n\n        <div class=\"testimonials\">\n            <h3>Testimonials</h3>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"We have selected PrimeNG among the others because we feel it’s currently the most mature and complete Angular library out there! We were simply searching the component library not a directive library.\"</p>\n                    <i>Frank Kolar - SAP Ariba</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"PrimeNG! They keep adding new features/components and stay current with Angular releases. Haven’t found a UI problem I couldn’t solve with their library.\"</p>\n                    <i>Chris Kelley</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"Some awesome components are available in PrimeNG and personally prefer this than Google Material.\"</p>\n                    <i>Saravana Kumar</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"We released our application, written with Angular and PrimeNG, last week. All the users said that they loved it, especially dragdrop feature of file upload component of PrimeNG.\"</p>\n                    <i>Bunyamin Coskuner</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"When I found your components it was like the Sun came out after a year of pouring rain. Thanks and congratulations.\"</p>\n                    <i>Gerard Lanphear</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"Hearty thanks PrimeNG. Perfect angular components.\"</p>\n                    <i>Ramprit Sahani</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"Thank you PrimeNG for beautiful Angular components.\"</p>\n                    <i>Santhosh Krisnamurthy</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"Fantastic framework that gives you a lot of options and tools for your solution or prototype.\"</p>\n                    <i>Benjamin Andersen</i>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <img src=\"assets/showcase/images/home/quote.svg\">\n                    <p>\"Did I ever mention how much I love PrimeNG.\"</p>\n                    <i>Fikaye Adepoju</i>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"templates\">\n        <h3>Premium Application Templates for PrimeNG</h3>\n        <p>Powered by Angular CLI, create awesome applications in no time using the premium templates of PrimeNG and impress your users.</p>\n\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/mirage-ng\">\n                    <img alt=\"Mirage\" src=\"assets/showcase/images/layouts/mirage-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/prestige-ng\">\n                    <img alt=\"Prestige\" src=\"assets/showcase/images/layouts/prestige-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/sapphire-ng\">\n                    <img alt=\"Sapphire\" src=\"assets/showcase/images/layouts/sapphire-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/roma-ng\">\n                    <img alt=\"Roma\" src=\"assets/showcase/images/layouts/roma-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/babylon-ng\">\n                    <img alt=\"Babylon\" src=\"assets/showcase/images/layouts/babylon-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/olympia-ng\">\n                    <img alt=\"Olympia\" src=\"assets/showcase/images/layouts/olympia-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/california-ng\">\n                    <img alt=\"California\" src=\"assets/showcase/images/layouts/california-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/ecuador-ng\">\n                    <img alt=\"Ecuador\" src=\"assets/showcase/images/layouts/ecuador-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/harmony-ng\">\n                    <img alt=\"Harmony\" src=\"assets/showcase/images/layouts/harmony-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/apollo-ng\">\n                    <img alt=\"Apollo\" src=\"assets/showcase/images/layouts/apollo-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/serenity-ng\">\n                    <img alt=\"Serenity\" src=\"assets/showcase/images/layouts/serenity-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/avalon-ng\">\n                    <img alt=\"Avalon\" src=\"assets/showcase/images/layouts/avalon-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/verona-ng\">\n                    <img alt=\"Verona\" src=\"assets/showcase/images/layouts/verona-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/manhattan-ng\">\n                    <img alt=\"Manhattan\" src=\"assets/showcase/images/layouts/manhattan-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/paradise-ng\">\n                    <img alt=\"Paradise\" src=\"assets/showcase/images/layouts/paradise-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/ultima-ng\">\n                    <img alt=\"Ultima\" src=\"assets/showcase/images/layouts/ultima-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/barcelona-ng\">\n                    <img alt=\"Barcelona\" src=\"assets/showcase/images/layouts/barcelona-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/morpheus-ng\">\n                    <img alt=\"Morpheus\" src=\"assets/showcase/images/layouts/morpheus-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/atlantis-ng\">\n                    <img alt=\"Atlantis\" src=\"assets/showcase/images/layouts/atlantis-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/poseidon-ng\">\n                    <img alt=\"Poseidon\" src=\"assets/showcase/images/layouts/poseidon-ng.jpg\">\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-4\">\n                <a href=\"https://www.primefaces.org/layouts/omega-ng\">\n                    <img alt=\"Omega\" src=\"assets/showcase/images/layouts/omega-ng.jpg\">\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"why-templates\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12\">\n                <img alt=\"Why You Should PrimeNG\" src=\"assets/showcase/images/home/why-you-should-ng.jpg\">\n                <p>PrimeNG offers premium Angular CLI templates designed by our professional design team and implemented by the PrimeNG team.\n                 Various other 3rd party Angular templates are actually ports from other technologies and they bring the burden of a <strong>dependency hell</strong>.\n                 PrimeNG templates on the other hand utilize native Angular APIs, distributed as a CLI project, have a single dependency that is PrimeNG featuring top notch quality resulting in easier maintenance and unified look.</p>\n\n                <p>Wondering about how PrimeNG premium templates are implemented? Check out the <a href=\"https://github.com/primefaces/primeng-blueprint\">primeng-blueprint</a> project at GitHub and the <a href=\"https://www.primefaces.org/primeng-blueprint\">live demo</a> for details.</p>\n            </div>\n            <div class=\"p-col-12 p-md-6\">\n                <h3>PrimeNG</h3>\n                <hr>\n                <ul>\n                    <li>Single Dependency: PrimeNG</li>\n                    <li>Developed by a Single Vendor with 10+ Years of UI Expertise</li>\n                    <li>Unlimited Free Support and Updates</li>\n                    <li>Implemented as a native Angular application</li>\n                    <li>Flawless maintenance</li>\n                    <li>Updated periodically after PrimeNG / Angular releases</li>\n                    <li>Distributed as an Angular CLI Project</li>\n                </ul>\n            </div>\n            <div class=\"p-col-12 p-md-6\">\n                <h3>Others</h3>\n                <hr>\n                <ul>\n                    <li>Multiple 3rd Party Dependencies</li>\n                    <li>Dependencies from different vendors</li>\n                    <li>Paid Support</li>\n                    <li>Wrapper of another technology e.g. jQuery</li>\n                    <li>Maintenance issues due to dependencies</li>\n                    <li>No clear release cycle of updates</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"primeng-designer\">\n        <h3>PrimeNG Designer API</h3>\n        <div class=\"p-grid\">\n            <div class=\"p-col-12\">\n                <img alt=\"PrimeNG Designer\" src=\"assets/showcase/images/primeng-designer.jpg\">\n                <p><a href=\"https://www.primefaces.org/designer/primeng\">Designer API</a> is a SASS based theme engine to create PrimeNG themes easily featuring over 500 variables,\n                    a demo application and a base sample theme. Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.</p>\n\n                <p>Visit <a href=\"https://www.primefaces.org/designer/primeng\">Designer API HomePage</a> for more information, live demos and access to a trial version.</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"lts\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-md-6\">\n                <h3 class=\"pro-title\">PrimeNG Long Term Support</h3>\n                <p>LTS Support ensures stability, premium quality and advanced security for the prior versions.</p>\n                <p>PrimeNG LTS is an annual subscription based service to provide a license for the finest compatible version suited to you.</p>\n                <a class=\"home-button\" [routerLink]=\"['./lts']\">LEARN MORE</a>\n            </div>\n            <div class=\"p-col-12 p-md-6 section-image\">\n                <img alt=\"LTS\" src=\"assets/showcase/images/lts.png\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"prosupport\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-md-6\">\n                <h3 class=\"pro-title\">PrimeNG PRO Support</h3>\n                <p>With PrimeNG PRO, it's easy to support, tune and add features to PrimeNG as if it were an in-house framework.</p>\n                <p>PrimeNG PRO is a term based commercial support service. With the exclusive services of a Pro account, you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>\n                <a class=\"home-button\" [routerLink]=\"['./support']\">LEARN MORE</a>\n            </div>\n            <div class=\"p-col-12 p-md-6 section-image\">\n                <img alt=\"PRO\" src=\"assets/showcase/images/home/icon-pro.svg\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"book\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-md-6\">\n                <h3>Angular UI Development with PrimeNG Book</h3>\n                <p>Unleash the power of PrimeNG components to design compelling user interfaces for your Angular applications.</p>\n                <a class=\"home-button\" href=\"https://www.packtpub.com/web-development/angular-ui-development-primeng\">\n                    LEARN MORE\n                </a>\n            </div>\n            <div class=\"p-col-12 p-md-6 section-image\">\n                <a href=\"https://www.packtpub.com/web-development/angular-ui-development-primeng\">\n                    <img src=\"assets/showcase/images/book.png\" />\n                </a>\n            </div>\n        </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/components/api/confirmationservice.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/api/confirmationservice.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ConfirmationService = class ConfirmationService {
    constructor() {
        this.requireConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.acceptConfirmationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
        this.accept = this.acceptConfirmationSource.asObservable();
    }
    confirm(confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
    }
    close() {
        this.requireConfirmationSource.next(null);
        return this;
    }
    onAccept() {
        this.acceptConfirmationSource.next();
    }
};
ConfirmationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConfirmationService);



/***/ }),

/***/ "./src/app/components/api/messageservice.ts":
/*!**************************************************!*\
  !*** ./src/app/components/api/messageservice.ts ***!
  \**************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MessageService = class MessageService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.clearSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageObserver = this.messageSource.asObservable();
        this.clearObserver = this.clearSource.asObservable();
    }
    add(message) {
        if (message) {
            this.messageSource.next(message);
        }
    }
    addAll(messages) {
        if (messages && messages.length) {
            this.messageSource.next(messages);
        }
    }
    clear(key) {
        this.clearSource.next(key || null);
    }
};
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MessageService);



/***/ }),

/***/ "./src/app/components/api/public_api.ts":
/*!**********************************************!*\
  !*** ./src/app/components/api/public_api.ts ***!
  \**********************************************/
/*! exports provided: ConfirmationService, MessageService, Header, Footer, PrimeTemplate, SharedModule, TreeDragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirmationservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmationservice */ "./src/app/components/api/confirmationservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return _confirmationservice__WEBPACK_IMPORTED_MODULE_0__["ConfirmationService"]; });

/* harmony import */ var _messageservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageservice */ "./src/app/components/api/messageservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/components/api/shared.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _shared__WEBPACK_IMPORTED_MODULE_2__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _shared__WEBPACK_IMPORTED_MODULE_2__["Footer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimeTemplate", function() { return _shared__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]; });

/* harmony import */ var _treedragdropservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treedragdropservice */ "./src/app/components/api/treedragdropservice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return _treedragdropservice__WEBPACK_IMPORTED_MODULE_3__["TreeDragDropService"]; });







/***/ }),

/***/ "./src/app/components/api/shared.ts":
/*!******************************************!*\
  !*** ./src/app/components/api/shared.ts ***!
  \******************************************/
/*! exports provided: Header, Footer, PrimeTemplate, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeTemplate", function() { return PrimeTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let Header = class Header {
};
Header = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-header',
        template: '<ng-content></ng-content>'
    })
], Header);

let Footer = class Footer {
};
Footer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-footer',
        template: '<ng-content></ng-content>'
    })
], Footer);

let PrimeTemplate = class PrimeTemplate {
    constructor(template) {
        this.template = template;
    }
    getType() {
        return this.name;
    }
};
PrimeTemplate.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PrimeTemplate.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('pTemplate'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PrimeTemplate.prototype, "name", void 0);
PrimeTemplate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pTemplate]',
        host: {}
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], PrimeTemplate);

let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [Header, Footer, PrimeTemplate],
        declarations: [Header, Footer, PrimeTemplate]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/components/api/treedragdropservice.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/api/treedragdropservice.ts ***!
  \*******************************************************/
/*! exports provided: TreeDragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDragDropService", function() { return TreeDragDropService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TreeDragDropService = class TreeDragDropService {
    constructor() {
        this.dragStartSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dragStopSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    startDrag(event) {
        this.dragStartSource.next(event);
    }
    stopDrag(event) {
        this.dragStopSource.next(event);
    }
};
TreeDragDropService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TreeDragDropService);



/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.ts ***!
  \*********************************************************/
/*! exports provided: AUTOCOMPLETE_VALUE_ACCESSOR, AutoComplete, AutoCompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_VALUE_ACCESSOR", function() { return AUTOCOMPLETE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return AutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function() { return AutoCompleteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "./src/app/components/inputtext/public_api.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./src/app/components/button/public_api.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./src/app/components/api/public_api.ts");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dom */ "./src/app/components/dom/public_api.ts");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/utils */ "./src/app/components/utils/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










const AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AutoComplete),
    multi: true
};
let AutoComplete = class AutoComplete {
    constructor(el, renderer, cd, differs) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.differs = differs;
        this.minLength = 1;
        this.delay = 300;
        this.type = 'text';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.dropdownIcon = "pi pi-caret-down";
        this.unique = true;
        this.completeOnFocus = false;
        this.completeMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollHeight = '200px';
        this.dropdownMode = 'blank';
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.autocomplete = 'off';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.overlayVisible = false;
        this.focus = false;
        this.inputFieldValue = null;
        this.differ = differs.find([]).create(null);
        this.listId = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_8__["UniqueComponentId"])() + '_list';
    }
    get suggestions() {
        return this._suggestions;
    }
    set suggestions(val) {
        this._suggestions = val;
        this.handleSuggestionsChange();
    }
    ngAfterViewChecked() {
        //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
        if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
            setTimeout(() => {
                if (this.overlay) {
                    this.alignOverlay();
                }
            }, 1);
            this.suggestionsUpdated = false;
        }
        if (this.highlightOptionChanged) {
            setTimeout(() => {
                if (this.overlay) {
                    let listItem = primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight');
                    if (listItem) {
                        primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].scrollInView(this.overlay, listItem);
                    }
                }
            }, 1);
            this.highlightOptionChanged = false;
        }
    }
    handleSuggestionsChange() {
        if (this._suggestions != null && this.loading) {
            this.highlightOption = null;
            if (this._suggestions.length) {
                this.noResults = false;
                this.show();
                this.suggestionsUpdated = true;
                if (this.autoHighlight) {
                    this.highlightOption = this._suggestions[0];
                }
            }
            else {
                this.noResults = true;
                if (this.emptyMessage) {
                    this.show();
                    this.suggestionsUpdated = true;
                }
                else {
                    this.hide();
                }
            }
            this.loading = false;
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    writeValue(value) {
        this.value = value;
        this.filled = this.value && this.value != '';
        this.updateInputField();
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
    onInput(event) {
        // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
        if (!this.inputKeyDown && primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].isIE()) {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        let value = event.target.value;
        if (!this.multiple && !this.forceSelection) {
            this.onModelChange(value);
        }
        if (value.length === 0 && !this.multiple) {
            this.hide();
            this.onClear.emit(event);
            this.onModelChange(value);
        }
        if (value.length >= this.minLength) {
            this.timeout = setTimeout(() => {
                this.search(event, value);
            }, this.delay);
        }
        else {
            this.suggestions = null;
            this.hide();
        }
        this.updateFilledState();
        this.inputKeyDown = false;
    }
    onInputClick(event) {
        if (this.documentClickListener) {
            this.inputClick = true;
        }
    }
    search(event, query) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        this.loading = true;
        this.completeMethod.emit({
            originalEvent: event,
            query: query
        });
    }
    selectItem(option, focus = true) {
        if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
        }
        if (this.multiple) {
            this.multiInputEL.nativeElement.value = '';
            this.value = this.value || [];
            if (!this.isSelected(option) || !this.unique) {
                this.value = [...this.value, option];
                this.onModelChange(this.value);
            }
        }
        else {
            this.inputEL.nativeElement.value = this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(option, this.field) || '' : option;
            this.value = option;
            this.onModelChange(this.value);
        }
        this.onSelect.emit(option);
        this.updateFilledState();
        if (focus) {
            this.itemClicked = true;
            this.focusInput();
        }
    }
    show() {
        if (this.multiInputEL || this.inputEL) {
            let hasFocus = this.multiple ? document.activeElement == this.multiInputEL.nativeElement : document.activeElement == this.inputEL.nativeElement;
            if (!this.overlayVisible && hasFocus) {
                this.overlayVisible = true;
            }
        }
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.onShow.emit(event);
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    onOverlayAnimationDone(event) {
        if (event.toState === 'void') {
            this._suggestions = null;
        }
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].appendChild(this.overlay, this.appendTo);
            if (!this.overlay.style.minWidth) {
                this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].getWidth(this.el.nativeElement.children[0]) + 'px';
            }
        }
    }
    resolveFieldData(value) {
        return this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(value, this.field) : value;
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.appendTo)
            primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].absolutePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
        else
            primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].relativePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
    }
    hide() {
        this.overlayVisible = false;
    }
    handleDropdownClick(event) {
        if (!this.overlayVisible) {
            this.focusInput();
            let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            if (this.dropdownMode === 'blank')
                this.search(event, '');
            else if (this.dropdownMode === 'current')
                this.search(event, queryValue);
            this.onDropdownClick.emit({
                originalEvent: event,
                query: queryValue
            });
        }
        else {
            this.hide();
        }
    }
    focusInput() {
        if (this.multiple)
            this.multiInputEL.nativeElement.focus();
        else
            this.inputEL.nativeElement.focus();
    }
    removeItem(item) {
        let itemIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].index(item);
        let removedValue = this.value[itemIndex];
        this.value = this.value.filter((val, i) => i != itemIndex);
        this.onModelChange(this.value);
        this.updateFilledState();
        this.onUnselect.emit(removedValue);
    }
    onKeydown(event) {
        if (this.overlayVisible) {
            let highlightItemIndex = this.findOptionIndex(this.highlightOption);
            switch (event.which) {
                //down
                case 40:
                    if (highlightItemIndex != -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if (nextItemIndex != (this.suggestions.length)) {
                            this.highlightOption = this.suggestions[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    else {
                        this.highlightOption = this.suggestions[0];
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (highlightItemIndex > 0) {
                        let prevItemIndex = highlightItemIndex - 1;
                        this.highlightOption = this.suggestions[prevItemIndex];
                        this.highlightOptionChanged = true;
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                        this.hide();
                    }
                    event.preventDefault();
                    break;
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                    break;
                //tab
                case 9:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                    }
                    this.hide();
                    break;
            }
        }
        else {
            if (event.which === 40 && this.suggestions) {
                this.search(event, event.target.value);
            }
        }
        if (this.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                        this.value = [...this.value];
                        const removedValue = this.value.pop();
                        this.onModelChange(this.value);
                        this.updateFilledState();
                        this.onUnselect.emit(removedValue);
                    }
                    break;
            }
        }
        this.inputKeyDown = true;
    }
    onKeyup(event) {
        this.onKeyUp.emit(event);
    }
    onInputFocus(event) {
        if (!this.itemClicked && this.completeOnFocus) {
            let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
            this.search(event, queryValue);
        }
        this.focus = true;
        this.onFocus.emit(event);
        this.itemClicked = false;
    }
    onInputBlur(event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputChange(event) {
        if (this.forceSelection) {
            let valid = false;
            let inputValue = event.target.value.trim();
            if (this.suggestions) {
                for (let suggestion of this.suggestions) {
                    let itemValue = this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(suggestion, this.field) : suggestion;
                    if (itemValue && inputValue === itemValue.trim()) {
                        valid = true;
                        this.forceSelectionUpdateModelTimeout = setTimeout(() => {
                            this.selectItem(suggestion, false);
                        }, 250);
                        break;
                    }
                }
            }
            if (!valid) {
                if (this.multiple) {
                    this.multiInputEL.nativeElement.value = '';
                }
                else {
                    this.value = null;
                    this.inputEL.nativeElement.value = '';
                }
                this.onClear.emit(event);
                this.onModelChange(this.value);
            }
        }
    }
    onInputPaste(event) {
        this.onKeydown(event);
    }
    isSelected(val) {
        let selected = false;
        if (this.value && this.value.length) {
            for (let i = 0; i < this.value.length; i++) {
                if (primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].equals(this.value[i], val, this.dataKey)) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    }
    findOptionIndex(option) {
        let index = -1;
        if (this.suggestions) {
            for (let i = 0; i < this.suggestions.length; i++) {
                if (primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    updateFilledState() {
        if (this.multiple)
            this.filled = (this.value && this.value.length) || (this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '');
        else
            this.filled = (this.inputFieldValue && this.inputFieldValue != '') || (this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '');
        ;
    }
    updateInputField() {
        let formattedValue = this.value ? (this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].resolveFieldData(this.value, this.field) || '' : this.value) : '';
        this.inputFieldValue = formattedValue;
        if (this.inputEL && this.inputEL.nativeElement) {
            this.inputEL.nativeElement.value = formattedValue;
        }
        this.updateFilledState();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', (event) => {
                if (event.which === 3) {
                    return;
                }
                if (!this.inputClick && !this.isDropdownClick(event)) {
                    this.hide();
                }
                this.inputClick = false;
                this.cd.markForCheck();
            });
        }
    }
    isDropdownClick(event) {
        if (this.dropdown) {
            let target = event.target;
            return (target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement);
        }
        else {
            return false;
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        this.hide();
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
        this.onHide.emit();
    }
    ngOnDestroy() {
        if (this.forceSelectionUpdateModelTimeout) {
            clearTimeout(this.forceSelectionUpdateModelTimeout);
            this.forceSelectionUpdateModelTimeout = null;
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
};
AutoComplete.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AutoComplete.prototype, "minLength", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AutoComplete.prototype, "delay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AutoComplete.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AutoComplete.prototype, "panelStyle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "styleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "panelStyleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AutoComplete.prototype, "inputStyle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "inputId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "inputStyleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "readonly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AutoComplete.prototype, "maxlength", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AutoComplete.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AutoComplete.prototype, "appendTo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "autoHighlight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "forceSelection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "autoZIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AutoComplete.prototype, "baseZIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "ariaLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "ariaLabelledBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "dropdownIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "unique", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "completeOnFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "completeMethod", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onUnselect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onBlur", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onDropdownClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onKeyUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onShow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutoComplete.prototype, "onHide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "field", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "scrollHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "dropdown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "dropdownMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "multiple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AutoComplete.prototype, "tabindex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "dataKey", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "emptyMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "showTransitionOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "hideTransitionOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AutoComplete.prototype, "autofocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AutoComplete.prototype, "autocomplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('in'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AutoComplete.prototype, "inputEL", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiIn'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AutoComplete.prototype, "multiInputEL", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiContainer'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AutoComplete.prototype, "multiContainerEL", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ddBtn'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AutoComplete.prototype, "dropdownButton", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AutoComplete.prototype, "templates", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
], AutoComplete.prototype, "suggestions", null);
AutoComplete = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-autoComplete',
        template: `
        <span [ngClass]="{'ui-autocomplete ui-widget':true,'ui-autocomplete-dd':dropdown,'ui-autocomplete-multiple':multiple}" [ngStyle]="style" [class]="styleClass">
            <input *ngIf="!multiple" #in [attr.type]="type" [attr.id]="inputId" [ngStyle]="inputStyle" [class]="inputStyleClass" [autocomplete]="autocomplete" [attr.required]="required" [attr.name]="name"
            [ngClass]="'ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input'" [value]="inputFieldValue" aria-autocomplete="list" [attr.aria-controls]="listId" role="searchbox" [attr.aria-expanded]="overlayVisible" aria-haspopup="true" [attr.aria-activedescendant]="'p-highlighted-option'"
            (click)="onInputClick($event)" (input)="onInput($event)" (keydown)="onKeydown($event)" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)"
            [attr.placeholder]="placeholder" [attr.size]="size" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [readonly]="readonly" [disabled]="disabled" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required"
            ><ul *ngIf="multiple" #multiContainer class="ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all" [ngClass]="{'ui-state-disabled':disabled,'ui-state-focus':focus}" (click)="multiIn.focus()">
                <li #token *ngFor="let val of value" class="ui-autocomplete-token ui-state-highlight ui-corner-all">
                    <span class="ui-autocomplete-token-icon pi pi-fw pi-times" (click)="removeItem(token)" *ngIf="!disabled"></span>
                    <span *ngIf="!selectedItemTemplate" class="ui-autocomplete-token-label">{{resolveFieldData(val)}}</span>
                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: val}"></ng-container>
                </li>
                <li class="ui-autocomplete-input-token">
                    <input #multiIn [attr.type]="type" [attr.id]="inputId" [disabled]="disabled" [attr.placeholder]="(value&&value.length ? null : placeholder)" [attr.tabindex]="tabindex" [attr.maxlength]="maxlength" (input)="onInput($event)"  (click)="onInputClick($event)"
                            (keydown)="onKeydown($event)" [readonly]="readonly" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)" [autocomplete]="autocomplete"
                            [ngStyle]="inputStyle" [class]="inputStyleClass" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required"
                            aria-autocomplete="list" [attr.aria-controls]="listId" role="searchbox" [attr.aria-expanded]="overlayVisible" aria-haspopup="true" [attr.aria-activedescendant]="'p-highlighted-option'">
                </li>
            </ul>
            <i *ngIf="loading" class="ui-autocomplete-loader pi pi-spinner pi-spin"></i><button #ddBtn type="button" pButton [icon]="dropdownIcon" class="ui-autocomplete-dropdown" [disabled]="disabled"
                (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex"></button>
            <div #panel *ngIf="overlayVisible" [ngClass]="['ui-autocomplete-panel ui-widget ui-widget-content ui-corner-all ui-shadow']" [style.max-height]="scrollHeight" [ngStyle]="panelStyle" [class]="panelStyleClass"
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationDone($event)" >
                <ul role="listbox" [attr.id]="listId" class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                    <li role="option"  *ngFor="let option of suggestions; let idx = index" [ngClass]="{'ui-autocomplete-list-item ui-corner-all':true,'ui-state-highlight':(highlightOption==option)}"
                        (mouseenter)="highlightOption=option" (mouseleave)="highlightOption=null" [id]="highlightOption == option ? 'p-highlighted-option':''" (click)="selectItem(option)">
                        <span *ngIf="!itemTemplate">{{resolveFieldData(option)}}</span>
                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: idx}"></ng-container>
                    </li>
                    <li *ngIf="noResults && emptyMessage" class="ui-autocomplete-emptymessage ui-autocomplete-list-item ui-corner-all">{{emptyMessage}}</li>
                </ul>
            </div>
        </span>
    `,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('overlayAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'translateY(5%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{showTransitionParams}}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{hideTransitionParams}}'))
            ])
        ],
        host: {
            '[class.ui-inputwrapper-filled]': 'filled',
            '[class.ui-inputwrapper-focus]': 'focus && !disabled'
        },
        providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]])
], AutoComplete);

let AutoCompleteModule = class AutoCompleteModule {
};
AutoCompleteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        exports: [AutoComplete, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        declarations: [AutoComplete]
    })
], AutoCompleteModule);



/***/ }),

/***/ "./src/app/components/button/button.ts":
/*!*********************************************!*\
  !*** ./src/app/components/button/button.ts ***!
  \*********************************************/
/*! exports provided: ButtonDirective, Button, ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./src/app/components/dom/public_api.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let ButtonDirective = class ButtonDirective {
    constructor(el) {
        this.el = el;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
    }
    ngAfterViewInit() {
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            let iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            let iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        let labelElement = document.createElement("span");
        if (this.icon && !this.label) {
            labelElement.setAttribute('aria-hidden', 'true');
        }
        labelElement.className = 'ui-button-text ui-clickable';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    }
    getStyleClass() {
        let styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
            if (this.label != null && this.label != undefined && this.label != "") {
                if (this.iconPos == 'left')
                    styleClass = styleClass + ' ui-button-text-icon-left';
                else
                    styleClass = styleClass + ' ui-button-text-icon-right';
            }
            else {
                styleClass = styleClass + ' ui-button-icon-only';
            }
        }
        else {
            if (this.label) {
                styleClass = styleClass + ' ui-button-text-only';
            }
            else {
                styleClass = styleClass + ' ui-button-text-empty';
            }
        }
        return styleClass;
    }
    setStyleClass() {
        let styleClass = this.getStyleClass();
        this.el.nativeElement.className = styleClass;
    }
    get label() {
        return this._label;
    }
    set label(val) {
        this._label = val;
        if (this.initialized) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label || 'ui-btn';
            if (!this.icon) {
                if (this._label) {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(this.el.nativeElement, 'ui-button-text-empty');
                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.el.nativeElement, 'ui-button-text-only');
                }
                else {
                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(this.el.nativeElement, 'ui-button-text-empty');
                    primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(this.el.nativeElement, 'ui-button-text-only');
                }
            }
            this.setStyleClass();
        }
    }
    get icon() {
        return this._icon;
    }
    set icon(val) {
        this._icon = val;
        if (this.initialized) {
            let iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].findSingle(this.el.nativeElement, '.ui-clickable').className =
                iconPosClass + ' ui-clickable ' + this.icon;
            this.setStyleClass();
        }
    }
    ngOnDestroy() {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    }
};
ButtonDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ButtonDirective.prototype, "iconPos", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ButtonDirective.prototype, "cornerStyleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], ButtonDirective.prototype, "label", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], ButtonDirective.prototype, "icon", null);
ButtonDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pButton]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ButtonDirective);

let Button = class Button {
    constructor() {
        this.iconPos = 'left';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Button.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Button.prototype, "iconPos", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Button.prototype, "icon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Button.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Button.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], Button.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Button.prototype, "styleClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Button.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Button.prototype, "onFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Button.prototype, "onBlur", void 0);
Button = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'p-button',
        template: `
        <button [attr.type]="type" [class]="styleClass" [ngStyle]="style" [disabled]="disabled"
            [ngClass]="{'ui-button ui-widget ui-state-default ui-corner-all':true,
                        'ui-button-icon-only': (icon && !label),
                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),
                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),
                        'ui-button-text-only': (!icon && label),
                        'ui-button-text-empty': (!icon && !label),
                        'ui-state-disabled': disabled}"
                        (click)="onClick.emit($event)" (focus)="onFocus.emit($event)" (blur)="onBlur.emit($event)">
            <ng-content></ng-content>
            <span [ngClass]="{'ui-clickable': true,
                        'ui-button-icon-left': (iconPos === 'left'), 
                        'ui-button-icon-right': (iconPos === 'right')}"
                        [class]="icon" *ngIf="icon" [attr.aria-hidden]="true"></span>
            <span class="ui-button-text ui-clickable" [attr.aria-hidden]="icon && !label">{{label||'ui-btn'}}</span>
        </button>
    `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })
], Button);

let ButtonModule = class ButtonModule {
};
ButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [ButtonDirective, Button],
        declarations: [ButtonDirective, Button]
    })
], ButtonModule);



/***/ }),

/***/ "./src/app/components/button/public_api.ts":
/*!*************************************************!*\
  !*** ./src/app/components/button/public_api.ts ***!
  \*************************************************/
/*! exports provided: ButtonDirective, Button, ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/app/components/button/button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["ButtonDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["ButtonModule"]; });




/***/ }),

/***/ "./src/app/components/dom/domhandler.ts":
/*!**********************************************!*\
  !*** ./src/app/components/dom/domhandler.ts ***!
  \**********************************************/
/*! exports provided: DomHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomHandler", function() { return DomHandler; });
/**
 * @dynamic is for runtime initializing DomHandler.browser
 *
 * If delete below comment, we can see this error message:
 *  Metadata collected contains an error that will be reported at runtime:
 *  Only initialized variables and constants can be referenced
 *  because the value of this variable is needed by the template compiler.
 */
// @dynamic
class DomHandler {
    static addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }
    static addMultipleClasses(element, className) {
        if (element.classList) {
            let styles = className.split(' ');
            for (let i = 0; i < styles.length; i++) {
                element.classList.add(styles[i]);
            }
        }
        else {
            let styles = className.split(' ');
            for (let i = 0; i < styles.length; i++) {
                element.className += ' ' + styles[i];
            }
        }
    }
    static removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    static hasClass(element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
    static siblings(element) {
        return Array.prototype.filter.call(element.parentNode.children, function (child) {
            return child !== element;
        });
    }
    static find(element, selector) {
        return Array.from(element.querySelectorAll(selector));
    }
    static findSingle(element, selector) {
        if (element) {
            return element.querySelector(selector);
        }
        return null;
    }
    static index(element) {
        let children = element.parentNode.childNodes;
        let num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].nodeType == 1)
                num++;
        }
        return -1;
    }
    static indexWithinGroup(element, attributeName) {
        let children = element.parentNode ? element.parentNode.childNodes : [];
        let num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
                num++;
        }
        return -1;
    }
    static relativePosition(element, target) {
        let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const targetHeight = target.offsetHeight;
        const targetOffset = target.getBoundingClientRect();
        const viewport = this.getViewport();
        let top, left;
        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            if (targetOffset.top + top < 0) {
                top = -1 * targetOffset.top;
            }
        }
        else {
            top = targetHeight;
        }
        if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
        }
        else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        }
        else {
            // element fits on screen (align with target)
            left = 0;
        }
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }
    static absolutePosition(element, target) {
        let elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        let elementOuterHeight = elementDimensions.height;
        let elementOuterWidth = elementDimensions.width;
        let targetOuterHeight = target.offsetHeight;
        let targetOuterWidth = target.offsetWidth;
        let targetOffset = target.getBoundingClientRect();
        let windowScrollTop = this.getWindowScrollTop();
        let windowScrollLeft = this.getWindowScrollLeft();
        let viewport = this.getViewport();
        let top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            if (top < 0) {
                top = windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }
        if (targetOffset.left + elementOuterWidth > viewport.width)
            left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
            left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    }
    static getHiddenElementOuterHeight(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
    }
    static getHiddenElementOuterWidth(element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        let elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
    }
    static getHiddenElementDimensions(element) {
        let dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    }
    static scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    }
    static fadeIn(element, duration) {
        element.style.opacity = 0;
        let last = +new Date();
        let opacity = 0;
        let tick = function () {
            opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();
            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    }
    static fadeOut(element, ms) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        let fading = setInterval(() => {
            opacity = opacity - gap;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }, interval);
    }
    static getWindowScrollTop() {
        let doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
    static getWindowScrollLeft() {
        let doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
    static matches(element, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(element, selector);
    }
    static getOuterWidth(el, margin) {
        let width = el.offsetWidth;
        if (margin) {
            let style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
    }
    static getHorizontalPadding(el) {
        let style = getComputedStyle(el);
        return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    }
    static getHorizontalMargin(el) {
        let style = getComputedStyle(el);
        return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
    static innerWidth(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    }
    static width(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    }
    static getInnerHeight(el) {
        let height = el.offsetHeight;
        let style = getComputedStyle(el);
        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    }
    static getOuterHeight(el, margin) {
        let height = el.offsetHeight;
        if (margin) {
            let style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
    }
    static getHeight(el) {
        let height = el.offsetHeight;
        let style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
    }
    static getWidth(el) {
        let width = el.offsetWidth;
        let style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
    }
    static getViewport() {
        let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    }
    static getOffset(el) {
        let rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    }
    static replaceElementWith(element, replacementElement) {
        let parentNode = element.parentNode;
        if (!parentNode)
            throw `Can't replace element`;
        return parentNode.replaceChild(replacementElement, element);
    }
    static getUserAgent() {
        return navigator.userAgent;
    }
    static isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return true;
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    }
    static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }
    static isAndroid() {
        return /(android)/i.test(navigator.userAgent);
    }
    static appendChild(element, target) {
        if (this.isElement(target))
            target.appendChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.appendChild(element);
        else
            throw 'Cannot append ' + target + ' to ' + element;
    }
    static removeChild(element, target) {
        if (this.isElement(target))
            target.removeChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.removeChild(element);
        else
            throw 'Cannot remove ' + element + ' from ' + target;
    }
    static isElement(obj) {
        return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
            obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string");
    }
    static calculateScrollbarWidth(el) {
        if (el) {
            let style = getComputedStyle(el);
            return (el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth));
        }
        else {
            if (this.calculatedScrollbarWidth !== null)
                return this.calculatedScrollbarWidth;
            let scrollDiv = document.createElement("div");
            scrollDiv.className = "ui-scrollbar-measure";
            document.body.appendChild(scrollDiv);
            let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            this.calculatedScrollbarWidth = scrollbarWidth;
            return scrollbarWidth;
        }
    }
    static calculateScrollbarHeight() {
        if (this.calculatedScrollbarHeight !== null)
            return this.calculatedScrollbarHeight;
        let scrollDiv = document.createElement("div");
        scrollDiv.className = "ui-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
    }
    static invokeElementMethod(element, methodName, args) {
        element[methodName].apply(element, args);
    }
    static clearSelection() {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        }
        else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            }
            catch (error) {
                //ignore IE bug
            }
        }
    }
    static getBrowser() {
        if (!this.browser) {
            let matched = this.resolveUserAgent();
            this.browser = {};
            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }
            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            }
            else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }
        return this.browser;
    }
    static resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    }
    static isInteger(value) {
        if (Number.isInteger) {
            return Number.isInteger(value);
        }
        else {
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        }
    }
    static isHidden(element) {
        return element.offsetParent === null;
    }
    static getFocusableElements(element) {
        let focusableElements = DomHandler.find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), 
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), 
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), 
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), 
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`);
        let visibleFocusableElements = [];
        for (let focusableElement of focusableElements) {
            if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
                visibleFocusableElements.push(focusableElement);
        }
        return visibleFocusableElements;
    }
}
DomHandler.zindex = 1000;
DomHandler.calculatedScrollbarWidth = null;
DomHandler.calculatedScrollbarHeight = null;


/***/ }),

/***/ "./src/app/components/dom/public_api.ts":
/*!**********************************************!*\
  !*** ./src/app/components/dom/public_api.ts ***!
  \**********************************************/
/*! exports provided: DomHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomHandler", function() { return _domhandler__WEBPACK_IMPORTED_MODULE_0__["DomHandler"]; });




/***/ }),

/***/ "./src/app/components/inputtext/inputtext.ts":
/*!***************************************************!*\
  !*** ./src/app/components/inputtext/inputtext.ts ***!
  \***************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let InputText = class InputText {
    constructor(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    onInput(e) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    }
};
InputText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], InputText.prototype, "onInput", null);
InputText = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[pInputText]',
        host: {
            '[class.ui-inputtext]': 'true',
            '[class.ui-corner-all]': 'true',
            '[class.ui-state-default]': 'true',
            '[class.ui-widget]': 'true',
            '[class.ui-state-filled]': 'filled'
        }
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]])
], InputText);

let InputTextModule = class InputTextModule {
};
InputTextModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [InputText],
        declarations: [InputText]
    })
], InputTextModule);



/***/ }),

/***/ "./src/app/components/inputtext/public_api.ts":
/*!****************************************************!*\
  !*** ./src/app/components/inputtext/public_api.ts ***!
  \****************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inputtext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return _inputtext__WEBPACK_IMPORTED_MODULE_0__["InputText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return _inputtext__WEBPACK_IMPORTED_MODULE_0__["InputTextModule"]; });




/***/ }),

/***/ "./src/app/components/utils/filterutils.ts":
/*!*************************************************!*\
  !*** ./src/app/components/utils/filterutils.ts ***!
  \*************************************************/
/*! exports provided: FilterUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return FilterUtils; });
/* harmony import */ var _objectutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectutils */ "./src/app/components/utils/objectutils.ts");

class FilterUtils {
    static filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        let filteredItems = [];
        let filterText = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filterValue).toLocaleLowerCase(filterLocale);
        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    let fieldValue = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(String(_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].resolveFieldData(item, field))).toLocaleLowerCase(filterLocale);
                    if (FilterUtils[filterMatchMode](fieldValue, filterText, filterLocale)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }
        return filteredItems;
    }
    static startsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.slice(0, filterValue.length) === filterValue;
    }
    static contains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) !== -1;
    }
    static endsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }
    static equals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    }
    static notEquals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }
        if (value === undefined || value === null) {
            return true;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != _objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    }
    static in(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        for (let i = 0; i < filter.length; i++) {
            if (_objectutils__WEBPACK_IMPORTED_MODULE_0__["ObjectUtils"].equals(value, filter[i])) {
                return true;
            }
        }
        return false;
    }
    static lt(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < filter;
    }
    static lte(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= filter;
    }
    static gt(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > filter;
    }
    static gte(value, filter, filterLocale) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= filter;
    }
}


/***/ }),

/***/ "./src/app/components/utils/objectutils.ts":
/*!*************************************************!*\
  !*** ./src/app/components/utils/objectutils.ts ***!
  \*************************************************/
/*! exports provided: ObjectUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtils", function() { return ObjectUtils; });
class ObjectUtils {
    static equals(obj1, obj2, field) {
        if (field)
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.equalsByValue(obj1, obj2);
    }
    static equalsByValue(obj1, obj2) {
        if (obj1 === obj2)
            return true;
        if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
            var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
            if (arrA && arrB) {
                length = obj1.length;
                if (length != obj2.length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!this.equalsByValue(obj1[i], obj2[i]))
                        return false;
                return true;
            }
            if (arrA != arrB)
                return false;
            var dateA = obj1 instanceof Date, dateB = obj2 instanceof Date;
            if (dateA != dateB)
                return false;
            if (dateA && dateB)
                return obj1.getTime() == obj2.getTime();
            var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
            if (regexpA != regexpB)
                return false;
            if (regexpA && regexpB)
                return obj1.toString() == obj2.toString();
            var keys = Object.keys(obj1);
            length = keys.length;
            if (length !== Object.keys(obj2).length)
                return false;
            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
                    return false;
            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.equalsByValue(obj1[key], obj2[key]))
                    return false;
            }
            return true;
        }
        return obj1 !== obj1 && obj2 !== obj2;
    }
    static resolveFieldData(data, field) {
        if (data && field) {
            if (this.isFunction(field)) {
                return field(data);
            }
            else if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for (let i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    static reorderArray(value, from, to) {
        let target;
        if (value && from !== to) {
            if (to >= value.length) {
                to %= value.length;
                from %= value.length;
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    }
    static generateSelectItems(val, field) {
        let selectItems;
        if (val && val.length) {
            selectItems = [];
            for (let item of val) {
                selectItems.push({ label: this.resolveFieldData(item, field), value: item });
            }
        }
        return selectItems;
    }
    static insertIntoOrderedArray(item, index, arr, sourceArr) {
        if (arr.length > 0) {
            let injected = false;
            for (let i = 0; i < arr.length; i++) {
                let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }
            if (!injected) {
                arr.push(item);
            }
        }
        else {
            arr.push(item);
        }
    }
    static findIndexInList(item, list) {
        let index = -1;
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] == item) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    static removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                .replace(/[\xC0-\xC5]/g, "A")
                .replace(/[\xC6]/g, "AE")
                .replace(/[\xC7]/g, "C")
                .replace(/[\xC8-\xCB]/g, "E")
                .replace(/[\xCC-\xCF]/g, "I")
                .replace(/[\xD0]/g, "D")
                .replace(/[\xD1]/g, "N")
                .replace(/[\xD2-\xD6\xD8]/g, "O")
                .replace(/[\xD9-\xDC]/g, "U")
                .replace(/[\xDD]/g, "Y")
                .replace(/[\xDE]/g, "P")
                .replace(/[\xE0-\xE5]/g, "a")
                .replace(/[\xE6]/g, "ae")
                .replace(/[\xE7]/g, "c")
                .replace(/[\xE8-\xEB]/g, "e")
                .replace(/[\xEC-\xEF]/g, "i")
                .replace(/[\xF1]/g, "n")
                .replace(/[\xF2-\xF6\xF8]/g, "o")
                .replace(/[\xF9-\xFC]/g, "u")
                .replace(/[\xFE]/g, "p")
                .replace(/[\xFD\xFF]/g, "y");
        }
        return str;
    }
}


/***/ }),

/***/ "./src/app/components/utils/public_api.ts":
/*!************************************************!*\
  !*** ./src/app/components/utils/public_api.ts ***!
  \************************************************/
/*! exports provided: FilterUtils, ObjectUtils, lastId, UniqueComponentId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterutils */ "./src/app/components/utils/filterutils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return _filterutils__WEBPACK_IMPORTED_MODULE_0__["FilterUtils"]; });

/* harmony import */ var _objectutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectutils */ "./src/app/components/utils/objectutils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUtils", function() { return _objectutils__WEBPACK_IMPORTED_MODULE_1__["ObjectUtils"]; });

/* harmony import */ var _uniquecomponentid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniquecomponentid */ "./src/app/components/utils/uniquecomponentid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastId", function() { return _uniquecomponentid__WEBPACK_IMPORTED_MODULE_2__["lastId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueComponentId", function() { return _uniquecomponentid__WEBPACK_IMPORTED_MODULE_2__["UniqueComponentId"]; });






/***/ }),

/***/ "./src/app/components/utils/uniquecomponentid.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/utils/uniquecomponentid.ts ***!
  \*******************************************************/
/*! exports provided: lastId, UniqueComponentId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastId", function() { return lastId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueComponentId", function() { return UniqueComponentId; });
var lastId = 0;
function UniqueComponentId() {
    let prefix = 'pr_id_';
    lastId++;
    return `${prefix}${lastId}`;
}


/***/ }),

/***/ "./src/app/showcase/app-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/app-routing.module.ts ***!
  \************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/showcase/components/home/home.component.ts");




let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'setup', loadChildren: () => __webpack_require__.e(/*! import() | components-setup-setup-module */ "components-setup-setup-module").then(__webpack_require__.bind(null, /*! ./components/setup/setup.module */ "./src/app/showcase/components/setup/setup.module.ts")).then(m => m.SetupModule) },
                { path: 'theming', loadChildren: () => __webpack_require__.e(/*! import() | components-theming-theming-module */ "components-theming-theming-module").then(__webpack_require__.bind(null, /*! ./components/theming/theming.module */ "./src/app/showcase/components/theming/theming.module.ts")).then(m => m.ThemingModule) },
                { path: 'icons', loadChildren: () => __webpack_require__.e(/*! import() | components-icons-icons-module */ "components-icons-icons-module").then(__webpack_require__.bind(null, /*! ./components/icons/icons.module */ "./src/app/showcase/components/icons/icons.module.ts")).then(m => m.IconsModule) },
                { path: 'accordion', loadChildren: () => Promise.all(/*! import() | components-accordion-accordiondemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-focustrap-focustrapdemo-module~componen~7f0f3c51"), __webpack_require__.e("components-accordion-accordiondemo-module")]).then(__webpack_require__.bind(null, /*! ./components/accordion/accordiondemo.module */ "./src/app/showcase/components/accordion/accordiondemo.module.ts")).then(m => m.AccordionDemoModule) },
                { path: 'autocomplete', loadChildren: () => Promise.all(/*! import() | components-autocomplete-autocompletedemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-autocomplete-autocompletedemo-module")]).then(__webpack_require__.bind(null, /*! ./components/autocomplete/autocompletedemo.module */ "./src/app/showcase/components/autocomplete/autocompletedemo.module.ts")).then(m => m.AutoCompleteDemoModule) },
                { path: 'blockui', loadChildren: () => Promise.all(/*! import() | components-blockui-blockuidemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-blockui-blockuidemo-module")]).then(__webpack_require__.bind(null, /*! ./components/blockui/blockuidemo.module */ "./src/app/showcase/components/blockui/blockuidemo.module.ts")).then(m => m.BlockUIDemoModule) },
                { path: 'breadcrumb', loadChildren: () => Promise.all(/*! import() | components-breadcrumb-breadcrumbdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-breadcrumb-breadcrumbdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/breadcrumb/breadcrumbdemo.module */ "./src/app/showcase/components/breadcrumb/breadcrumbdemo.module.ts")).then(m => m.BreadcrumbDemoModule) },
                { path: 'button', loadChildren: () => Promise.all(/*! import() | components-button-buttondemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-button-buttondemo-module")]).then(__webpack_require__.bind(null, /*! ./components/button/buttondemo.module */ "./src/app/showcase/components/button/buttondemo.module.ts")).then(m => m.ButtonDemoModule) },
                { path: 'calendar', loadChildren: () => Promise.all(/*! import() | components-calendar-calendardemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5"), __webpack_require__.e("components-calendar-calendardemo-module")]).then(__webpack_require__.bind(null, /*! ./components/calendar/calendardemo.module */ "./src/app/showcase/components/calendar/calendardemo.module.ts")).then(m => m.CalendarDemoModule) },
                { path: 'captcha', loadChildren: () => Promise.all(/*! import() | components-captcha-captchademo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("common"), __webpack_require__.e("components-captcha-captchademo-module")]).then(__webpack_require__.bind(null, /*! ./components/captcha/captchademo.module */ "./src/app/showcase/components/captcha/captchademo.module.ts")).then(m => m.CaptchaDemoModule) },
                { path: 'card', loadChildren: () => Promise.all(/*! import() | components-card-carddemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-card-carddemo-module")]).then(__webpack_require__.bind(null, /*! ./components/card/carddemo.module */ "./src/app/showcase/components/card/carddemo.module.ts")).then(m => m.CardDemoModule) },
                { path: 'carousel', loadChildren: () => Promise.all(/*! import() | components-carousel-carouseldemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-carousel-carouseldemo-module~components-inputnumber-inputnumberdemo-module~compon~77e0f22f"), __webpack_require__.e("components-carousel-carouseldemo-module")]).then(__webpack_require__.bind(null, /*! ./components/carousel/carouseldemo.module */ "./src/app/showcase/components/carousel/carouseldemo.module.ts")).then(m => m.CarouselDemoModule) },
                { path: 'chart', loadChildren: () => Promise.all(/*! import() | components-chart-chartdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-chart-chartdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-chart-chartdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/chart/chartdemo.module */ "./src/app/showcase/components/chart/chartdemo.module.ts")).then(m => m.ChartDemoModule) },
                { path: 'checkbox', loadChildren: () => Promise.all(/*! import() | components-checkbox-checkboxdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("components-checkbox-checkboxdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/checkbox/checkboxdemo.module */ "./src/app/showcase/components/checkbox/checkboxdemo.module.ts")).then(m => m.CheckboxDemoModule) },
                { path: 'chips', loadChildren: () => Promise.all(/*! import() | components-chips-chipsdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-chips-chipsdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-chips-chipsdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/chips/chipsdemo.module */ "./src/app/showcase/components/chips/chipsdemo.module.ts")).then(m => m.ChipsDemoModule) },
                { path: 'codehighlighter', loadChildren: () => Promise.all(/*! import() | components-codehighlighter-codehighlighterdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("components-codehighlighter-codehighlighterdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/codehighlighter/codehighlighterdemo.module */ "./src/app/showcase/components/codehighlighter/codehighlighterdemo.module.ts")).then(m => m.CodeHighlighterDemoModule) },
                { path: 'colorpicker', loadChildren: () => Promise.all(/*! import() | components-colorpicker-colorpickerdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-colorpicker-colorpickerdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-colorpicker-colorpickerdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/colorpicker/colorpickerdemo.module */ "./src/app/showcase/components/colorpicker/colorpickerdemo.module.ts")).then(m => m.ColorPickerDemoModule) },
                { path: 'confirmdialog', loadChildren: () => Promise.all(/*! import() | components-confirmdialog-confirmdialogdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-confirmdialog-confirmdialogdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-confirmdialog-confirmdialogdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/confirmdialog/confirmdialogdemo.module */ "./src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts")).then(m => m.ConfirmDialogDemoModule) },
                { path: 'contextmenu', loadChildren: () => Promise.all(/*! import() | components-contextmenu-contextmenudemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-contextmenu-contextmenudemo-module~components-inputnumber-inputnumberdemo-module~~e7fb1129"), __webpack_require__.e("components-contextmenu-contextmenudemo-module")]).then(__webpack_require__.bind(null, /*! ./components/contextmenu/contextmenudemo.module */ "./src/app/showcase/components/contextmenu/contextmenudemo.module.ts")).then(m => m.ContextMenuDemoModule) },
                { path: 'dataview', loadChildren: () => Promise.all(/*! import() | components-dataview-dataviewdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-dataview-dataviewdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/dataview/dataviewdemo.module */ "./src/app/showcase/components/dataview/dataviewdemo.module.ts")).then(m => m.DataViewDemoModule) },
                { path: 'defer', loadChildren: () => Promise.all(/*! import() | components-defer-deferdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("common"), __webpack_require__.e("components-defer-deferdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/defer/deferdemo.module */ "./src/app/showcase/components/defer/deferdemo.module.ts")).then(m => m.DeferDemoModule) },
                { path: 'dialog', loadChildren: () => Promise.all(/*! import() | components-dialog-dialogdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("components-dialog-dialogdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/dialog/dialogdemo.module */ "./src/app/showcase/components/dialog/dialogdemo.module.ts")).then(m => m.DialogDemoModule) },
                { path: 'dynamicdialog', loadChildren: () => Promise.all(/*! import() | components-dynamicdialog-dynamicdialogdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("default~components-dynamicdialog-dynamicdialogdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-dynamicdialog-dynamicdialogdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/dynamicdialog/dynamicdialogdemo.module */ "./src/app/showcase/components/dynamicdialog/dynamicdialogdemo.module.ts")).then(m => m.DynamicDialogDemoModule) },
                { path: 'dragdrop', loadChildren: () => Promise.all(/*! import() | components-dragdrop-dragdropdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("common"), __webpack_require__.e("components-dragdrop-dragdropdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/dragdrop/dragdropdemo.module */ "./src/app/showcase/components/dragdrop/dragdropdemo.module.ts")).then(m => m.DragDropDemoModule) },
                { path: 'dropdown', loadChildren: () => Promise.all(/*! import() | components-dropdown-dropdowndemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("components-dropdown-dropdowndemo-module")]).then(__webpack_require__.bind(null, /*! ./components/dropdown/dropdowndemo.module */ "./src/app/showcase/components/dropdown/dropdowndemo.module.ts")).then(m => m.DropdownDemoModule) },
                { path: 'editor', loadChildren: () => Promise.all(/*! import() | components-editor-editordemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-editor-editordemo-module~components-focustrap-focustrapdemo-module~components-inp~ecc0685c"), __webpack_require__.e("components-editor-editordemo-module")]).then(__webpack_require__.bind(null, /*! ./components/editor/editordemo.module */ "./src/app/showcase/components/editor/editordemo.module.ts")).then(m => m.EditorDemoModule) },
                { path: 'fieldset', loadChildren: () => Promise.all(/*! import() | components-fieldset-fieldsetdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-fieldset-fieldsetdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/fieldset/fieldsetdemo.module */ "./src/app/showcase/components/fieldset/fieldsetdemo.module.ts")).then(m => m.FieldsetDemoModule) },
                { path: 'fileupload', loadChildren: () => Promise.all(/*! import() | components-fileupload-fileuploaddemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-fileupload-fileuploaddemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-fileupload-fileuploaddemo-module")]).then(__webpack_require__.bind(null, /*! ./components/fileupload/fileuploaddemo.module */ "./src/app/showcase/components/fileupload/fileuploaddemo.module.ts")).then(m => m.FileUploadDemoModule) },
                { path: 'filterutils', loadChildren: () => Promise.all(/*! import() | components-filterutils-filterutilsdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("common"), __webpack_require__.e("components-filterutils-filterutilsdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/filterutils/filterutilsdemo.module */ "./src/app/showcase/components/filterutils/filterutilsdemo.module.ts")).then(m => m.FilterUtilsDemoModule) },
                { path: 'flexgrid', loadChildren: () => Promise.all(/*! import() | components-flexgrid-flexgriddemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("components-flexgrid-flexgriddemo-module")]).then(__webpack_require__.bind(null, /*! ./components/flexgrid/flexgriddemo.module */ "./src/app/showcase/components/flexgrid/flexgriddemo.module.ts")).then(m => m.FlexGridDemoModule) },
                { path: 'focustrap', loadChildren: () => Promise.all(/*! import() | components-focustrap-focustrapdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5"), __webpack_require__.e("default~components-focustrap-focustrapdemo-module~components-inputnumber-inputnumberdemo-module~comp~292fab47"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-focustrap-focustrapdemo-module~componen~7f0f3c51"), __webpack_require__.e("default~components-editor-editordemo-module~components-focustrap-focustrapdemo-module~components-inp~ecc0685c"), __webpack_require__.e("common"), __webpack_require__.e("components-focustrap-focustrapdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/focustrap/focustrapdemo.module */ "./src/app/showcase/components/focustrap/focustrapdemo.module.ts")).then(m => m.FocusTrapDemoModule) },
                { path: 'formlayout', loadChildren: () => Promise.all(/*! import() | components-formlayout-formlayoutdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("common"), __webpack_require__.e("components-formlayout-formlayoutdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/formlayout/formlayoutdemo.module */ "./src/app/showcase/components/formlayout/formlayoutdemo.module.ts")).then(m => m.FormLayoutDemoModule) },
                { path: 'fullcalendar', loadChildren: () => Promise.all(/*! import() | components-fullcalendar-fullcalendardemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5"), __webpack_require__.e("default~components-fullcalendar-fullcalendardemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-fullcalendar-fullcalendardemo-module")]).then(__webpack_require__.bind(null, /*! ./components/fullcalendar/fullcalendardemo.module */ "./src/app/showcase/components/fullcalendar/fullcalendardemo.module.ts")).then(m => m.FullCalendarDemoModule) },
                { path: 'galleria', loadChildren: () => Promise.all(/*! import() | components-galleria-galleriademo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-galleria-galleriademo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-galleria-galleriademo-module")]).then(__webpack_require__.bind(null, /*! ./components/galleria/galleriademo.module */ "./src/app/showcase/components/galleria/galleriademo.module.ts")).then(m => m.GalleriaDemoModule) },
                { path: 'gmap', loadChildren: () => Promise.all(/*! import() | components-gmap-gmapdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("common"), __webpack_require__.e("components-gmap-gmapdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/gmap/gmapdemo.module */ "./src/app/showcase/components/gmap/gmapdemo.module.ts")).then(m => m.GMapDemoModule) },
                { path: 'inplace', loadChildren: () => Promise.all(/*! import() | components-inplace-inplacedemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("common"), __webpack_require__.e("components-inplace-inplacedemo-module")]).then(__webpack_require__.bind(null, /*! ./components/inplace/inplacedemo.module */ "./src/app/showcase/components/inplace/inplacedemo.module.ts")).then(m => m.InplaceDemoModule) },
                { path: 'inputmask', loadChildren: () => Promise.all(/*! import() | components-inputmask-inputmaskdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputmask-inputmaskdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("components-inputmask-inputmaskdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/inputmask/inputmaskdemo.module */ "./src/app/showcase/components/inputmask/inputmaskdemo.module.ts")).then(m => m.InputMaskDemoModule) },
                { path: 'inputnumber', loadChildren: () => Promise.all(/*! import() | components-inputnumber-inputnumberdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5"), __webpack_require__.e("default~components-focustrap-focustrapdemo-module~components-inputnumber-inputnumberdemo-module~comp~292fab47"), __webpack_require__.e("default~components-contextmenu-contextmenudemo-module~components-inputnumber-inputnumberdemo-module~~e7fb1129"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-focustrap-focustrapdemo-module~componen~7f0f3c51"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panel-paneldemo-module~components-r~1b54d7bb"), __webpack_require__.e("default~components-editor-editordemo-module~components-focustrap-focustrapdemo-module~components-inp~ecc0685c"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-responsive-responsivedemo-module~co~8c9490f0"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-picklist-picklistdemo-module~compon~8623ac7d"), __webpack_require__.e("default~components-carousel-carouseldemo-module~components-inputnumber-inputnumberdemo-module~compon~77e0f22f"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-listbox-listboxdemo-module~componen~00c2ac5a"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-slider-sliderdemo-module~components~6ae61e05"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-orderlist-orderlistdemo-module~comp~297f19b1"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panelmenu-panelmenudemo-module~comp~c0508316"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-menu-menudemo-module~components-res~ec7868ac"), __webpack_require__.e("default~components-chart-chartdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-fullcalendar-fullcalendardemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-treetable-treetabledemo-module"), __webpack_require__.e("default~components-galleria-galleriademo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-fileupload-fileuploaddemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-inputmask-inputmaskdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-colorpicker-colorpickerdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-confirmdialog-confirmdialogdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-slidemenu-slidemenudemo-module"), __webpack_require__.e("default~components-dynamicdialog-dynamicdialogdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-tieredmenu-tieredmenudemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-spinner-spinnerdemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-organizationchart-organizationchart~99c77bb8"), __webpack_require__.e("default~components-chips-chipsdemo-module~components-inputnumber-inputnumberdemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-megamenu-megamenudemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-menubar-menubardemo-module"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-lightbox-lightboxdemo-module"), __webpack_require__.e("common"), __webpack_require__.e("components-inputnumber-inputnumberdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/inputnumber/inputnumberdemo.module */ "./src/app/showcase/components/inputnumber/inputnumberdemo.module.ts")).then(m => m.InputNumberDemoModule) },
                { path: 'inputswitch', loadChildren: () => Promise.all(/*! import() | components-inputswitch-inputswitchdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-inputswitch-inputswitchdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/inputswitch/inputswitchdemo.module */ "./src/app/showcase/components/inputswitch/inputswitchdemo.module.ts")).then(m => m.InputSwitchDemoModule) },
                { path: 'inputtext', loadChildren: () => Promise.all(/*! import() | components-inputtext-inputtextdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("components-inputtext-inputtextdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/inputtext/inputtextdemo.module */ "./src/app/showcase/components/inputtext/inputtextdemo.module.ts")).then(m => m.InputTextDemoModule) },
                { path: 'inputgroup', loadChildren: () => Promise.all(/*! import() | components-inputgroup-inputgroupdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-inputgroup-inputgroupdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/inputgroup/inputgroupdemo.module */ "./src/app/showcase/components/inputgroup/inputgroupdemo.module.ts")).then(m => m.InputGroupDemoModule) },
                { path: 'inputtextarea', loadChildren: () => Promise.all(/*! import() | components-inputtextarea-inputtextareademo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-inputtextarea-inputtextareademo-module")]).then(__webpack_require__.bind(null, /*! ./components/inputtextarea/inputtextareademo.module */ "./src/app/showcase/components/inputtextarea/inputtextareademo.module.ts")).then(m => m.InputTextareaDemoModule) },
                { path: 'keyfilter', loadChildren: () => Promise.all(/*! import() | components-keyfilter-keyfilterdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-keyfilter-keyfilterdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/keyfilter/keyfilterdemo.module */ "./src/app/showcase/components/keyfilter/keyfilterdemo.module.ts")).then(m => m.KeyFilterDemoModule) },
                { path: 'lightbox', loadChildren: () => Promise.all(/*! import() | components-lightbox-lightboxdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-lightbox-lightboxdemo-module"), __webpack_require__.e("components-lightbox-lightboxdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/lightbox/lightboxdemo.module */ "./src/app/showcase/components/lightbox/lightboxdemo.module.ts")).then(m => m.LightboxDemoModule) },
                { path: 'listbox', loadChildren: () => Promise.all(/*! import() | components-listbox-listboxdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-listbox-listboxdemo-module~componen~00c2ac5a"), __webpack_require__.e("components-listbox-listboxdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/listbox/listboxdemo.module */ "./src/app/showcase/components/listbox/listboxdemo.module.ts")).then(m => m.ListboxDemoModule) },
                { path: 'lts', loadChildren: () => Promise.all(/*! import() | components-lts-lts-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-focustrap-focustrapdemo-module~componen~7f0f3c51"), __webpack_require__.e("components-lts-lts-module")]).then(__webpack_require__.bind(null, /*! ./components/lts/lts.module */ "./src/app/showcase/components/lts/lts.module.ts")).then(m => m.LTSModule) },
                { path: 'megamenu', loadChildren: () => Promise.all(/*! import() | components-megamenu-megamenudemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-megamenu-megamenudemo-module"), __webpack_require__.e("components-megamenu-megamenudemo-module")]).then(__webpack_require__.bind(null, /*! ./components/megamenu/megamenudemo.module */ "./src/app/showcase/components/megamenu/megamenudemo.module.ts")).then(m => m.MegaMenuDemoModule) },
                { path: 'menu', loadChildren: () => Promise.all(/*! import() | components-menu-menudemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-menu-menudemo-module~components-res~ec7868ac"), __webpack_require__.e("components-menu-menudemo-module")]).then(__webpack_require__.bind(null, /*! ./components/menu/menudemo.module */ "./src/app/showcase/components/menu/menudemo.module.ts")).then(m => m.MenuDemoModule) },
                { path: 'menubar', loadChildren: () => Promise.all(/*! import() | components-menubar-menubardemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-menubar-menubardemo-module"), __webpack_require__.e("components-menubar-menubardemo-module")]).then(__webpack_require__.bind(null, /*! ./components/menubar/menubardemo.module */ "./src/app/showcase/components/menubar/menubardemo.module.ts")).then(m => m.MenubarDemoModule) },
                { path: 'menumodel', loadChildren: () => __webpack_require__.e(/*! import() | components-menumodel-menumodeldemo-module */ "components-menumodel-menumodeldemo-module").then(__webpack_require__.bind(null, /*! ./components/menumodel/menumodeldemo.module */ "./src/app/showcase/components/menumodel/menumodeldemo.module.ts")).then(m => m.MenuModelDemoModule) },
                { path: 'messages', loadChildren: () => Promise.all(/*! import() | components-messages-messagesdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-messages-messagesdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/messages/messagesdemo.module */ "./src/app/showcase/components/messages/messagesdemo.module.ts")).then(m => m.MessagesDemoModule) },
                { path: 'multiselect', loadChildren: () => Promise.all(/*! import() | components-multiselect-multiselectdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-focustrap-focustrapdemo-module~components-inputnumber-inputnumberdemo-module~comp~292fab47"), __webpack_require__.e("components-multiselect-multiselectdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/multiselect/multiselectdemo.module */ "./src/app/showcase/components/multiselect/multiselectdemo.module.ts")).then(m => m.MultiSelectDemoModule) },
                { path: 'orderlist', loadChildren: () => Promise.all(/*! import() | components-orderlist-orderlistdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-orderlist-orderlistdemo-module~comp~297f19b1"), __webpack_require__.e("components-orderlist-orderlistdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/orderlist/orderlistdemo.module */ "./src/app/showcase/components/orderlist/orderlistdemo.module.ts")).then(m => m.OrderListDemoModule) },
                { path: 'organizationchart', loadChildren: () => Promise.all(/*! import() | components-organizationchart-organizationchartdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-organizationchart-organizationchart~99c77bb8"), __webpack_require__.e("components-organizationchart-organizationchartdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/organizationchart/organizationchartdemo.module */ "./src/app/showcase/components/organizationchart/organizationchartdemo.module.ts")).then(m => m.OrganizationChartDemoModule) },
                { path: 'overlaypanel', loadChildren: () => Promise.all(/*! import() | components-overlaypanel-overlaypaneldemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("common"), __webpack_require__.e("components-overlaypanel-overlaypaneldemo-module")]).then(__webpack_require__.bind(null, /*! ./components/overlaypanel/overlaypaneldemo.module */ "./src/app/showcase/components/overlaypanel/overlaypaneldemo.module.ts")).then(m => m.OverlayPanelDemoModule) },
                { path: 'paginator', loadChildren: () => Promise.all(/*! import() | components-paginator-paginatordemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("components-paginator-paginatordemo-module")]).then(__webpack_require__.bind(null, /*! ./components/paginator/paginatordemo.module */ "./src/app/showcase/components/paginator/paginatordemo.module.ts")).then(m => m.PaginatorDemoModule) },
                { path: 'panel', loadChildren: () => Promise.all(/*! import() | components-panel-paneldemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panel-paneldemo-module~components-r~1b54d7bb"), __webpack_require__.e("components-panel-paneldemo-module")]).then(__webpack_require__.bind(null, /*! ./components/panel/paneldemo.module */ "./src/app/showcase/components/panel/paneldemo.module.ts")).then(m => m.PanelDemoModule) },
                { path: 'panelmenu', loadChildren: () => Promise.all(/*! import() | components-panelmenu-panelmenudemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panelmenu-panelmenudemo-module~comp~c0508316"), __webpack_require__.e("components-panelmenu-panelmenudemo-module")]).then(__webpack_require__.bind(null, /*! ./components/panelmenu/panelmenudemo.module */ "./src/app/showcase/components/panelmenu/panelmenudemo.module.ts")).then(m => m.PanelMenuDemoModule) },
                { path: 'password', loadChildren: () => Promise.all(/*! import() | components-password-passworddemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-password-passworddemo-module")]).then(__webpack_require__.bind(null, /*! ./components/password/passworddemo.module */ "./src/app/showcase/components/password/passworddemo.module.ts")).then(m => m.PasswordDemoModule) },
                { path: 'picklist', loadChildren: () => Promise.all(/*! import() | components-picklist-picklistdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-picklist-picklistdemo-module~compon~8623ac7d"), __webpack_require__.e("components-picklist-picklistdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/picklist/picklistdemo.module */ "./src/app/showcase/components/picklist/picklistdemo.module.ts")).then(m => m.PickListDemoModule) },
                { path: 'progressbar', loadChildren: () => Promise.all(/*! import() | components-progressbar-progressbardemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("components-progressbar-progressbardemo-module")]).then(__webpack_require__.bind(null, /*! ./components/progressbar/progressbardemo.module */ "./src/app/showcase/components/progressbar/progressbardemo.module.ts")).then(m => m.ProgressBarDemoModule) },
                { path: 'progressspinner', loadChildren: () => Promise.all(/*! import() | components-progressspinner-progressspinnerdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-progressspinner-progressspinnerdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/progressspinner/progressspinnerdemo.module */ "./src/app/showcase/components/progressspinner/progressspinnerdemo.module.ts")).then(m => m.ProgressSpinnerDemoModule) },
                { path: 'radiobutton', loadChildren: () => Promise.all(/*! import() | components-radiobutton-radiobuttondemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-radiobutton-radiobuttondemo-module")]).then(__webpack_require__.bind(null, /*! ./components/radiobutton/radiobuttondemo.module */ "./src/app/showcase/components/radiobutton/radiobuttondemo.module.ts")).then(m => m.RadioButtonDemoModule) },
                { path: 'rating', loadChildren: () => Promise.all(/*! import() | components-rating-ratingdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-rating-ratingdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/rating/ratingdemo.module */ "./src/app/showcase/components/rating/ratingdemo.module.ts")).then(m => m.RatingDemoModule) },
                { path: 'responsive', loadChildren: () => Promise.all(/*! import() | components-responsive-responsivedemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panel-paneldemo-module~components-r~1b54d7bb"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-responsive-responsivedemo-module~co~8c9490f0"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-picklist-picklistdemo-module~compon~8623ac7d"), __webpack_require__.e("default~components-carousel-carouseldemo-module~components-inputnumber-inputnumberdemo-module~compon~77e0f22f"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-listbox-listboxdemo-module~componen~00c2ac5a"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-orderlist-orderlistdemo-module~comp~297f19b1"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panelmenu-panelmenudemo-module~comp~c0508316"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-menu-menudemo-module~components-res~ec7868ac"), __webpack_require__.e("common"), __webpack_require__.e("components-responsive-responsivedemo-module")]).then(__webpack_require__.bind(null, /*! ./components/responsive/responsivedemo.module */ "./src/app/showcase/components/responsive/responsivedemo.module.ts")).then(m => m.ResponsiveDemoModule) },
                { path: 'rtl', loadChildren: () => Promise.all(/*! import() | components-rtl-rtldemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-focustrap-focustrapdemo-module~componen~7f0f3c51"), __webpack_require__.e("components-rtl-rtldemo-module")]).then(__webpack_require__.bind(null, /*! ./components/rtl/rtldemo.module */ "./src/app/showcase/components/rtl/rtldemo.module.ts")).then(m => m.RTLDemoModule) },
                { path: 'scrollpanel', loadChildren: () => Promise.all(/*! import() | components-scrollpanel-scrollpaneldemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-scrollpanel-scrollpaneldemo-module")]).then(__webpack_require__.bind(null, /*! ./components/scrollpanel/scrollpaneldemo.module */ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.module.ts")).then(m => m.ScrollPanelDemoModule) },
                { path: 'selectbutton', loadChildren: () => Promise.all(/*! import() | components-selectbutton-selectbuttondemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-selectbutton-selectbuttondemo-module")]).then(__webpack_require__.bind(null, /*! ./components/selectbutton/selectbuttondemo.module */ "./src/app/showcase/components/selectbutton/selectbuttondemo.module.ts")).then(m => m.SelectButtonDemoModule) },
                { path: 'sidebar', loadChildren: () => Promise.all(/*! import() | components-sidebar-sidebardemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-sidebar-sidebardemo-module")]).then(__webpack_require__.bind(null, /*! ./components/sidebar/sidebardemo.module */ "./src/app/showcase/components/sidebar/sidebardemo.module.ts")).then(m => m.SidebarDemoModule) },
                { path: 'slidemenu', loadChildren: () => Promise.all(/*! import() | components-slidemenu-slidemenudemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-slidemenu-slidemenudemo-module"), __webpack_require__.e("components-slidemenu-slidemenudemo-module")]).then(__webpack_require__.bind(null, /*! ./components/slidemenu/slidemenudemo.module */ "./src/app/showcase/components/slidemenu/slidemenudemo.module.ts")).then(m => m.SlideMenuDemoModule) },
                { path: 'slider', loadChildren: () => Promise.all(/*! import() | components-slider-sliderdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-slider-sliderdemo-module~components~6ae61e05"), __webpack_require__.e("components-slider-sliderdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/slider/sliderdemo.module */ "./src/app/showcase/components/slider/sliderdemo.module.ts")).then(m => m.SliderDemoModule) },
                { path: 'spinner', loadChildren: () => Promise.all(/*! import() | components-spinner-spinnerdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-spinner-spinnerdemo-module"), __webpack_require__.e("components-spinner-spinnerdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/spinner/spinnerdemo.module */ "./src/app/showcase/components/spinner/spinnerdemo.module.ts")).then(m => m.SpinnerDemoModule) },
                { path: 'splitbutton', loadChildren: () => Promise.all(/*! import() | components-splitbutton-splitbuttondemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panel-paneldemo-module~components-r~1b54d7bb"), __webpack_require__.e("components-splitbutton-splitbuttondemo-module")]).then(__webpack_require__.bind(null, /*! ./components/splitbutton/splitbuttondemo.module */ "./src/app/showcase/components/splitbutton/splitbuttondemo.module.ts")).then(m => m.SplitButtonDemoModule) },
                { path: 'steps', loadChildren: () => Promise.all(/*! import() | components-steps-stepsdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("common"), __webpack_require__.e("components-steps-stepsdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/steps/stepsdemo.module */ "./src/app/showcase/components/steps/stepsdemo.module.ts")).then(m => m.StepsDemoModule) },
                { path: 'support', loadChildren: () => __webpack_require__.e(/*! import() | components-support-support-module */ "components-support-support-module").then(__webpack_require__.bind(null, /*! ./components/support/support.module */ "./src/app/showcase/components/support/support.module.ts")).then(m => m.SupportModule) },
                { path: 'table', loadChildren: () => Promise.all(/*! import() | components-table-tabledemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-defer-deferdemo-module~components-dragdrop-dragdropdemo-module~components-dynamic~5e92f6ff"), __webpack_require__.e("default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5"), __webpack_require__.e("default~components-focustrap-focustrapdemo-module~components-inputnumber-inputnumberdemo-module~comp~292fab47"), __webpack_require__.e("default~components-contextmenu-contextmenudemo-module~components-inputnumber-inputnumberdemo-module~~e7fb1129"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-slider-sliderdemo-module~components~6ae61e05"), __webpack_require__.e("components-table-tabledemo-module")]).then(__webpack_require__.bind(null, /*! ./components/table/tabledemo.module */ "./src/app/showcase/components/table/tabledemo.module.ts")).then(m => m.TableDemoModule) },
                { path: 'tabmenu', loadChildren: () => Promise.all(/*! import() | components-tabmenu-tabmenudemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-tabmenu-tabmenudemo-module")]).then(__webpack_require__.bind(null, /*! ./components/tabmenu/tabmenudemo.module */ "./src/app/showcase/components/tabmenu/tabmenudemo.module.ts")).then(m => m.TabMenuDemoModule) },
                { path: 'tabview', loadChildren: () => Promise.all(/*! import() | components-tabview-tabviewdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("components-tabview-tabviewdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/tabview/tabviewdemo.module */ "./src/app/showcase/components/tabview/tabviewdemo.module.ts")).then(m => m.TabViewDemoModule) },
                { path: 'terminal', loadChildren: () => Promise.all(/*! import() | components-terminal-terminaldemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-terminal-terminaldemo-module")]).then(__webpack_require__.bind(null, /*! ./components/terminal/terminaldemo.module */ "./src/app/showcase/components/terminal/terminaldemo.module.ts")).then(m => m.TerminalDemoModule) },
                { path: 'tieredmenu', loadChildren: () => Promise.all(/*! import() | components-tieredmenu-tieredmenudemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-tieredmenu-tieredmenudemo-module"), __webpack_require__.e("components-tieredmenu-tieredmenudemo-module")]).then(__webpack_require__.bind(null, /*! ./components/tieredmenu/tieredmenudemo.module */ "./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts")).then(m => m.TieredMenuDemoModule) },
                { path: 'toast', loadChildren: () => Promise.all(/*! import() | components-toast-toastdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("components-toast-toastdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/toast/toastdemo.module */ "./src/app/showcase/components/toast/toastdemo.module.ts")).then(m => m.ToastDemoModule) },
                { path: 'togglebutton', loadChildren: () => Promise.all(/*! import() | components-togglebutton-togglebuttondemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-togglebutton-togglebuttondemo-module")]).then(__webpack_require__.bind(null, /*! ./components/togglebutton/togglebuttondemo.module */ "./src/app/showcase/components/togglebutton/togglebuttondemo.module.ts")).then(m => m.ToggleButtonDemoModule) },
                { path: 'toolbar', loadChildren: () => Promise.all(/*! import() | components-toolbar-toolbardemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-panel-paneldemo-module~components-r~1b54d7bb"), __webpack_require__.e("common"), __webpack_require__.e("components-toolbar-toolbardemo-module")]).then(__webpack_require__.bind(null, /*! ./components/toolbar/toolbardemo.module */ "./src/app/showcase/components/toolbar/toolbardemo.module.ts")).then(m => m.ToolbarDemoModule) },
                { path: 'tooltip', loadChildren: () => Promise.all(/*! import() | components-tooltip-tooltipdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("components-tooltip-tooltipdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/tooltip/tooltipdemo.module */ "./src/app/showcase/components/tooltip/tooltipdemo.module.ts")).then(m => m.TooltipDemoModule) },
                { path: 'tree', loadChildren: () => Promise.all(/*! import() | components-tree-treedemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-contextmenu-contextmenudemo-module~components-inputnumber-inputnumberdemo-module~~e7fb1129"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-responsive-responsivedemo-module~co~8c9490f0"), __webpack_require__.e("components-tree-treedemo-module")]).then(__webpack_require__.bind(null, /*! ./components/tree/treedemo.module */ "./src/app/showcase/components/tree/treedemo.module.ts")).then(m => m.TreeDemoModule) },
                { path: 'treetable', loadChildren: () => Promise.all(/*! import() | components-treetable-treetabledemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~86ab25be"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-dialog-dialogdemo-module~components-focus~e25c6129"), __webpack_require__.e("default~components-focustrap-focustrapdemo-module~components-inputnumber-inputnumberdemo-module~comp~292fab47"), __webpack_require__.e("default~components-contextmenu-contextmenudemo-module~components-inputnumber-inputnumberdemo-module~~e7fb1129"), __webpack_require__.e("default~components-inputnumber-inputnumberdemo-module~components-treetable-treetabledemo-module"), __webpack_require__.e("components-treetable-treetabledemo-module")]).then(__webpack_require__.bind(null, /*! ./components/treetable/treetabledemo.module */ "./src/app/showcase/components/treetable/treetabledemo.module.ts")).then(m => m.TreeTableDemoModule) },
                { path: 'tristatecheckbox', loadChildren: () => Promise.all(/*! import() | components-tristatecheckbox-tristatecheckboxdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("common"), __webpack_require__.e("components-tristatecheckbox-tristatecheckboxdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/tristatecheckbox/tristatecheckboxdemo.module */ "./src/app/showcase/components/tristatecheckbox/tristatecheckboxdemo.module.ts")).then(m => m.TriStateCheckboxDemoModule) },
                { path: 'validation', loadChildren: () => Promise.all(/*! import() | components-validation-validationdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-accordion-accordiondemo-module~components-captcha-captchademo-module~components-c~5f4fec62"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("common"), __webpack_require__.e("components-validation-validationdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/validation/validationdemo.module */ "./src/app/showcase/components/validation/validationdemo.module.ts")).then(m => m.ValidationDemoModule) },
                { path: 'virtualscroller', loadChildren: () => Promise.all(/*! import() | components-virtualscroller-virtualscrollerdemo-module */[__webpack_require__.e("default~components-accordion-accordiondemo-module~components-autocomplete-autocompletedemo-module~co~a7efdcbc"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~4b684f8f"), __webpack_require__.e("default~components-dataview-dataviewdemo-module~components-defer-deferdemo-module~components-dragdro~8d971eac"), __webpack_require__.e("common"), __webpack_require__.e("components-virtualscroller-virtualscrollerdemo-module")]).then(__webpack_require__.bind(null, /*! ./components/virtualscroller/virtualscrollerdemo.module */ "./src/app/showcase/components/virtualscroller/virtualscrollerdemo.module.ts")).then(m => m.VirtualScrollerDemoModule) }
            ], { scrollPositionRestoration: 'enabled' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/showcase/app.component.css":
/*!********************************************!*\
  !*** ./src/app/showcase/app.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/showcase/app.component.ts":
/*!*******************************************!*\
  !*** ./src/app/showcase/app.component.ts ***!
  \*******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _service_versionservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/versionservice */ "./src/app/showcase/service/versionservice.ts");





let AppComponent = class AppComponent {
    constructor(router, renderer, versionService) {
        this.router = router;
        this.renderer = renderer;
        this.versionService = versionService;
        this.routes = [];
        this.filteredRoutes = [];
        this.activeSubmenus = {};
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                gtag('config', 'UA-93461466-1', {
                    'page_path': '/primeng' + event.urlAfterRedirects
                });
                this.activeTopbarSubmenu = null;
                this.menuActive = false;
            }
        });
        this.versionService.getVersions().then(data => this.versions = data);
    }
    ngOnInit() {
        let routes = this.router.config;
        for (let route of routes) {
            this.routes.push(route.path.charAt(0).toUpperCase() + route.path.substr(1));
        }
        //this.initNewsState();
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                event.element.style.display = 'block';
                break;
        }
    }
    onAnimationDone(event) {
        switch (event.toState) {
            case 'hidden':
                event.element.style.display = 'none';
                break;
            case 'void':
                event.element.style.display = 'none';
                break;
        }
    }
    selectRoute(routeName) {
        this.router.navigate(['/' + routeName.toLowerCase()]);
        this.filteredRoutes = [];
        this.searchText = "";
    }
    filterRoutes(event) {
        let query = event.query;
        this.filteredRoutes = this.routes.filter(route => {
            return route.toLowerCase().includes(query.toLowerCase());
        });
    }
    changeTheme(event, theme, dark) {
        let themeLink = document.getElementById('theme-css');
        themeLink.href = 'assets/components/themes/' + theme + '/theme.css';
        const hasBodyDarkTheme = this.hasClass(document.body, 'dark-theme');
        if (dark) {
            if (!hasBodyDarkTheme) {
                this.addClass(document.body, 'dark-theme');
            }
        }
        else if (hasBodyDarkTheme) {
            this.removeClass(document.body, 'dark-theme');
        }
        this.activeTopbarSubmenu = null;
        event.preventDefault();
    }
    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }
    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    hasClass(element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
    onMenuButtonClick(event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }
    initNewsState() {
        this.newsActive = sessionStorage.getItem('primenews-hidden') ? false : true;
    }
    hideNews(event) {
        this.newsActive = false;
        sessionStorage.setItem('primenews-hidden', "true");
        event.preventDefault();
    }
    toggleSubmenu(event, name) {
        this.activeSubmenus[name] = this.activeSubmenus[name] ? false : true;
        event.preventDefault();
    }
    isSubmenuActive(name) {
        if (this.activeSubmenus.hasOwnProperty(name)) {
            return this.activeSubmenus[name];
        }
        else if (this.router.isActive(name, false)) {
            this.activeSubmenus[name] = true;
            return true;
        }
        return false;
    }
    bindTopbarSubmenuOutsideClickListener() {
        if (!this.topbarSubmenuOutsideClickListener) {
            this.topbarSubmenuOutsideClickListener = (event) => {
                if (this.isOutsideTopbarMenuClicked(event)) {
                    this.activeTopbarSubmenu = null;
                }
            };
            document.addEventListener('click', this.topbarSubmenuOutsideClickListener);
        }
    }
    unbindTopbarSubmenuOutsideClickListener() {
        if (this.topbarSubmenuOutsideClickListener) {
            document.removeEventListener('click', this.topbarSubmenuOutsideClickListener);
            this.topbarSubmenuOutsideClickListener = null;
        }
    }
    toggleTopbarSubmenu(event, index) {
        this.activeTopbarSubmenu = this.activeTopbarSubmenu === index ? null : index;
        event.preventDefault();
    }
    isOutsideTopbarMenuClicked(event) {
        return !(this.topbarMenu.nativeElement.isSameNode(event.target) || this.topbarMenu.nativeElement.contains(event.target));
    }
    onTopbarSubmenuAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.bindTopbarSubmenuOutsideClickListener();
                break;
            case 'void':
                this.unbindTopbarSubmenuOutsideClickListener();
                break;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _service_versionservice__WEBPACK_IMPORTED_MODULE_4__["VersionService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topbarMenu'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AppComponent.prototype, "topbarMenu", void 0);
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('submenu', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    height: '0',
                    overflow: 'hidden',
                    opacity: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    height: '*',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('topbarSubmenu', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'translateY(5%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms cubic-bezier(0.86, 0, 0.07, 1)')),
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/showcase/app.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _service_versionservice__WEBPACK_IMPORTED_MODULE_4__["VersionService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/showcase/app.config.component.ts":
/*!**************************************************!*\
  !*** ./src/app/showcase/app.config.component.ts ***!
  \**************************************************/
/*! exports provided: AppConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function() { return AppConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dom/domhandler */ "./src/app/components/dom/domhandler.ts");



let AppConfigComponent = class AppConfigComponent {
    constructor() {
        this.theme = 'nova-light';
    }
    changeTheme(event, theme, dark) {
        let themeElement = document.getElementById('theme-css');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, theme));
        this.theme = theme;
        const hasBodyDarkTheme = _components_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].hasClass(document.body, 'dark-theme');
        if (dark) {
            if (!hasBodyDarkTheme) {
                _components_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].addClass(document.body, 'dark-theme');
            }
        }
        else if (hasBodyDarkTheme) {
            _components_dom_domhandler__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeClass(document.body, 'dark-theme');
        }
        event.preventDefault();
    }
    onConfigButtonClick(event) {
        this.configActive = !this.configActive;
        if (this.configActive) {
            this.bindOutsideClickListener();
        }
        event.preventDefault();
    }
    onConfigCloseClick(event) {
        this.configActive = false;
        event.preventDefault();
    }
    onConfigClick() {
        this.configClick = true;
    }
    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (!this.configClick) {
                    this.configActive = false;
                    this.unbindOutsideClickListener();
                }
                this.configClick = false;
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }
    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }
};
AppConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-config',
        template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': configActive}" (click)="onConfigClick()">
            <div class="layout-config-content-wrapper">
                <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                    <i class="pi pi-cog"></i>
                </a>
                <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                    <i class="pi pi-times"></i>
                </a>
                <div class="layout-config-content">
                    <div class="free-themes">
                        <h1 style="margin-top: 0">FREE THEMES</h1>
                        <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primeng">PrimeNG Theme Designer</a>.</p>
                        <div class="p-grid">
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" (click)="changeTheme($event, 'nova-light', false)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'nova-light'"></i>
                                </a>
                                <span>Nova-Light</span>
                            </div>
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" (click)="changeTheme($event, 'nova-dark', false)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'nova-dark'"></i>
                                </a>
                                <span>Nova-Dark</span>
                            </div>
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" (click)="changeTheme($event, 'nova-colored', false)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'nova-colored'"></i>
                                </a>
                                <span>Nova-Colored</span>
                            </div>
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" (click)="changeTheme($event, 'luna-blue', true)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'luna-blue'"></i>
                                </a>
                                <span>Luna-Blue</span>
                            </div>
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" (click)="changeTheme($event, 'luna-green', true)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'luna-green'"></i>
                                </a>
                                <span>Luna-Green</span>
                            </div>
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" (click)="changeTheme($event, 'luna-amber', true)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'luna-amber'"></i>
                                </a>
                                <span>Luna-Amber</span>
                            </div>
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" (click)="changeTheme($event, 'luna-pink', true)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'luna-pink'"></i>
                                </a>
                                <span>Luna-Pink</span>
                            </div>
                            <div class="p-col-3">
                                <a style="cursor: pointer">
                                    <img src="./assets/showcase/images/layouts/themeswitcher-rhea.png" alt="Rhea" (click)="changeTheme($event, 'rhea', false)"/>
                                    <i class="pi pi-check" *ngIf="theme === 'rhea'"></i>
                                </a>
                                <span>Rhea</span>
                            </div>
                        </div>
                    </div>
                    <div class="premium-themes">
                        <h1>PREMIUM ANGULAR CLI TEMPLATES</h1>
                        <p>Powered by Angular CLI, create awesome applications in no time using the premium templates of PrimeNG and impress your users.</p>
                        <div class="p-grid">
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/mirage-ng">
                                    <img alt="Mirage" src="./assets/showcase/images/layouts/mirage-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/prestige-ng">
                                    <img alt="Prestige" src="./assets/showcase/images/layouts/prestige-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/sapphire-ng">
                                    <img alt="Sapphire" src="./assets/showcase/images/layouts/sapphire-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/serenity-ng">
                                    <img alt="Serenity" src="./assets/showcase/images/layouts/serenity-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/ultima-ng">
                                    <img alt="Ultima" src="./assets/showcase/images/layouts/ultima-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/barcelona-ng">
                                    <img alt="Barcelona" src="./assets/showcase/images/layouts/barcelona-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/babylon-ng">
                                    <img alt="Babylon" src="./assets/showcase/images/layouts/babylon-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/roma-ng">
                                    <img alt="Roma" src="./assets/showcase/images/layouts/roma-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/olympia-ng">
                                    <img alt="Olympia" src="./assets/showcase/images/layouts/olympia-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/california-ng">
                                    <img alt="California" src="./assets/showcase/images/layouts/california-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/ecuador-ng">
                                    <img alt="Ecuador" src="./assets/showcase/images/layouts/ecuador-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/apollo-ng">
                                    <img alt="Apollo" src="./assets/showcase/images/layouts/apollo-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/manhattan-ng">
                                    <img alt="Manhattan" src="./assets/showcase/images/layouts/manhattan-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/manhattan-ng">
                                    <img alt="Harmony" src="./assets/showcase/images/layouts/harmony-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/verona-ng">
                                    <img alt="Verona" src="./assets/showcase/images/layouts/verona-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/paradise-ng">
                                    <img alt="Paradise" src="./assets/showcase/images/layouts/paradise-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/morpheus-ng">
                                    <img alt="Morpheus" src="./assets/showcase/images/layouts/morpheus-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/atlantis-ng">
                                    <img alt="Atlantis" src="./assets/showcase/images/layouts/atlantis-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/poseidon-ng">
                                    <img alt="Poseidon" src="./assets/showcase/images/layouts/poseidon-ng.jpg">
                                </a>
                            </div>
                            <div class="p-col-6">
                                <a href="https://www.primefaces.org/layouts/omega-ng">
                                    <img alt="Omega" src="./assets/showcase/images/layouts/omega-ng.jpg">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    })
], AppConfigComponent);



/***/ }),

/***/ "./src/app/showcase/app.module.ts":
/*!****************************************!*\
  !*** ./src/app/showcase/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/showcase/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/showcase/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/showcase/components/home/home.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/autocomplete/autocomplete */ "./src/app/components/autocomplete/autocomplete.ts");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/carservice */ "./src/app/showcase/service/carservice.ts");
/* harmony import */ var _service_countryservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/countryservice */ "./src/app/showcase/service/countryservice.ts");
/* harmony import */ var _service_eventservice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/eventservice */ "./src/app/showcase/service/eventservice.ts");
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/nodeservice */ "./src/app/showcase/service/nodeservice.ts");
/* harmony import */ var _service_iconservice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/iconservice */ "./src/app/showcase/service/iconservice.ts");
/* harmony import */ var _service_customerservice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/customerservice */ "./src/app/showcase/service/customerservice.ts");
/* harmony import */ var _service_photoservice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/photoservice */ "./src/app/showcase/service/photoservice.ts");
/* harmony import */ var _service_versionservice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/versionservice */ "./src/app/showcase/service/versionservice.ts");
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.config.component */ "./src/app/showcase/app.config.component.ts");



















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _app_config_component__WEBPACK_IMPORTED_MODULE_18__["AppConfigComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoCompleteModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] },
            _service_carservice__WEBPACK_IMPORTED_MODULE_10__["CarService"], _service_countryservice__WEBPACK_IMPORTED_MODULE_11__["CountryService"], _service_eventservice__WEBPACK_IMPORTED_MODULE_12__["EventService"], _service_nodeservice__WEBPACK_IMPORTED_MODULE_13__["NodeService"], _service_iconservice__WEBPACK_IMPORTED_MODULE_14__["IconService"], _service_customerservice__WEBPACK_IMPORTED_MODULE_15__["CustomerService"], _service_photoservice__WEBPACK_IMPORTED_MODULE_16__["PhotoService"], _service_versionservice__WEBPACK_IMPORTED_MODULE_17__["VersionService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/showcase/components/home/home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/showcase/components/home/home.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/showcase/components/home/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/showcase/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/showcase/service/carservice.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/service/carservice.ts ***!
  \************************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CarService = class CarService {
    constructor(http) {
        this.http = http;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        this.colors = ['Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'];
    }
    getCarsSmall() {
        return this.http.get('assets/showcase/data/cars-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getCarsMedium() {
        return this.http.get('assets/showcase/data/cars-medium.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getCarsLarge() {
        return this.http.get('assets/showcase/data/cars-large.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    generateCar() {
        return {
            vin: this.generateVin(),
            brand: this.generateBrand(),
            color: this.generateColor(),
            year: this.generateYear()
        };
    }
    generateVin() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    generateBrand() {
        return this.brands[Math.floor(Math.random() * Math.floor(10))];
    }
    generateColor() {
        return this.colors[Math.floor(Math.random() * Math.floor(7))];
    }
    generateYear() {
        return 2000 + Math.floor(Math.random() * Math.floor(19));
    }
};
CarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CarService);



/***/ }),

/***/ "./src/app/showcase/service/countryservice.ts":
/*!****************************************************!*\
  !*** ./src/app/showcase/service/countryservice.ts ***!
  \****************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CountryService = class CountryService {
    constructor(http) {
        this.http = http;
    }
    getCountries() {
        return this.http.get('assets/showcase/data/countries.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
};
CountryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CountryService);



/***/ }),

/***/ "./src/app/showcase/service/customerservice.ts":
/*!*****************************************************!*\
  !*** ./src/app/showcase/service/customerservice.ts ***!
  \*****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
    }
    getCustomersSmall() {
        return this.http.get('assets/showcase/data/customers-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getCustomersMedium() {
        return this.http.get('assets/showcase/data/customers-medium.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getCustomersLarge() {
        return this.http.get('assets/showcase/data/customers-large.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
    getCustomersXLarge() {
        return this.http.get('assets/showcase/data/customers-xlarge.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CustomerService);



/***/ }),

/***/ "./src/app/showcase/service/eventservice.ts":
/*!**************************************************!*\
  !*** ./src/app/showcase/service/eventservice.ts ***!
  \**************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let EventService = class EventService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.http.get('assets/showcase/data/scheduleevents.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
};
EventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], EventService);



/***/ }),

/***/ "./src/app/showcase/service/iconservice.ts":
/*!*************************************************!*\
  !*** ./src/app/showcase/service/iconservice.ts ***!
  \*************************************************/
/*! exports provided: IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let IconService = class IconService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "assets/showcase/data/icons.json";
    }
    getIcons() {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            this.icons = response.icons;
            return this.icons;
        }));
    }
    getIcon(id) {
        if (this.icons) {
            this.selectedIcon = this.icons.find(x => x.properties.id === id);
            return this.selectedIcon;
        }
    }
};
IconService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
IconService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], IconService);



/***/ }),

/***/ "./src/app/showcase/service/nodeservice.ts":
/*!*************************************************!*\
  !*** ./src/app/showcase/service/nodeservice.ts ***!
  \*************************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let NodeService = class NodeService {
    constructor(http) {
        this.http = http;
    }
    getFiles() {
        return this.http.get('assets/showcase/data/files.json')
            .toPromise()
            .then(res => res.data);
    }
    getLazyFiles() {
        return this.http.get('assets/showcase/data/files-lazy.json')
            .toPromise()
            .then(res => res.data);
    }
    getFilesystem() {
        return this.http.get('assets/showcase/data/filesystem.json')
            .toPromise()
            .then(res => res.data);
    }
    getLazyFilesystem() {
        return this.http.get('assets/showcase/data/filesystem-lazy.json')
            .toPromise()
            .then(res => res.data);
    }
};
NodeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], NodeService);



/***/ }),

/***/ "./src/app/showcase/service/photoservice.ts":
/*!**************************************************!*\
  !*** ./src/app/showcase/service/photoservice.ts ***!
  \**************************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PhotoService = class PhotoService {
    constructor(http) {
        this.http = http;
    }
    getImages() {
        return this.http.get('assets/showcase/data/photos.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PhotoService);



/***/ }),

/***/ "./src/app/showcase/service/versionservice.ts":
/*!****************************************************!*\
  !*** ./src/app/showcase/service/versionservice.ts ***!
  \****************************************************/
/*! exports provided: VersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return VersionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let VersionService = class VersionService {
    constructor(http) {
        this.http = http;
    }
    getVersions() {
        return this.http.get('https://www.primefaces.org/primeng/versions.json')
            .toPromise()
            .then(res => res.versions)
            .then(data => { return data; });
    }
};
VersionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
VersionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], VersionService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_showcase_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/showcase/app.module */ "./src/app/showcase/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_showcase_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\PrimeNGv9-1-3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map