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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputgroup-inputgroupdemo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputgroup/inputgroupdemo.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputgroup/inputgroupdemo.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_showcase_components_inputgroup_inputgroupdemoHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">InputGroup</span>\n        <span>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside\n            .ui-inputgroup element. Multiple addons can be used within the same group as well.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Addons</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                <input type=\"text\" pInputText placeholder=\"Username\">         \n            </div>\n        </div>\n        \n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\">$</span>\n                <input type=\"text\" pInputText placeholder=\"Price\">   \n                <span class=\"ui-inputgroup-addon\">.00</span>      \n            </div>\n        </div>\n                \n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\">www</span>\n                <input type=\"text\" pInputText placeholder=\"Website\">      \n            </div>\n        </div>\n    </div>\n        \n    <h3>Multiple Addons</h3>\n    <div class=\"p-grid\">\n        <div class=\"p-col-12\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-tags\" style=\"line-height: 1.25;\"></i></span>  \n                <span class=\"ui-inputgroup-addon\"><i class=\"pi pi-shopping-cart\" style=\"line-height: 1.25;\"></i></span>   \n                <input type=\"text\" pInputText placeholder=\"Price\"> \n                <span class=\"ui-inputgroup-addon\">$</span>  \n                <span class=\"ui-inputgroup-addon\">.00</span>      \n            </div>\n        </div>\n    </div>\n    \n    <h3>Button Addons</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <button pButton type=\"button\" label=\"Search\"></button>\n                <input type=\"text\" pInputText placeholder=\"Keyword\">         \n            </div>\n        </div>\n        \n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <input type=\"text\" pInputText placeholder=\"Keyword\">   \n                <button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\"></button>      \n            </div>\n        </div>\n                \n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"></button>    \n                <input type=\"text\" pInputText placeholder=\"Vote\">   \n                <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"></button>      \n            </div>\n        </div>\n    </div>\n\n    <h3>Checkbox and RadioButton</h3>\n    <div class=\"p-grid ui-fluid\">\n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\n                <input type=\"text\" pInputText placeholder=\"Username\">         \n            </div>\n        </div>\n        \n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <input type=\"text\" pInputText placeholder=\"Price\">   \n                <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span>      \n            </div>\n        </div>\n                \n        <div class=\"p-col-12 p-md-4\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\n                <input type=\"text\" pInputText placeholder=\"Website\">      \n                <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span> \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView>\n        <p-tabPanel header=\"inputgroupdemo.html\">\n<a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputgroup\" class=\"btn-viewsource\" target=\"_blank\">\n    <span>View on GitHub</span>\n</a>\n<a href=\"https://stackblitz.com/edit/primeng-inputgroup-demo\" class=\"btn-viewsource\" style=\"margin-left: .5em;\" target=\"_blank\">\n    <span>Edit in StackBlitz</span>\n</a>\n\n    <pre>\n    <code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Addons&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"pi pi-user\" style=\"line-height: 1.25;\"&gt;&lt;/i&gt;&lt;/span&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \n        &lt;/div&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt;   \n            &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \n        &lt;/div&gt;\n    &lt;/div&gt;\n            \n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;span class=\"ui-inputgroup-addon\"&gt;www&lt;/span&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Website\"&gt;      \n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n    \n&lt;h3&gt;Multiple Addons&lt;/h3&gt;\n&lt;div class=\"p-grid\"&gt;\n    &lt;div class=\"p-col-12\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"pi pi-tags\" style=\"line-height: 1.25;\"&gt;&lt;/i&gt;&lt;/span&gt;  \n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"pi pi-shopping-cart\" style=\"line-height: 1.25;\"&gt;&lt;/i&gt;&lt;/span&gt;   \n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt; \n            &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;  \n            &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Button Addons&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;button pButton type=\"button\" label=\"Search\"&gt;&lt;/button&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Keyword\"&gt;         \n        &lt;/div&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Keyword\"&gt;   \n            &lt;button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-warn\"&gt;&lt;/button&gt;      \n        &lt;/div&gt;\n    &lt;/div&gt;\n            \n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;button pButton type=\"button\" icon=\"pi pi-check\" class=\"ui-button-success\"&gt;&lt;/button&gt;    \n            &lt;input type=\"text\" pInputText placeholder=\"Vote\"&gt;   \n            &lt;button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"&gt;&lt;/button&gt;      \n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Checkbox and RadioButton&lt;/h3&gt;\n&lt;div class=\"p-grid ui-fluid\"&gt;\n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-checkbox&gt;&lt;/p-checkbox&gt;&lt;/span&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \n        &lt;/div&gt;\n    &lt;/div&gt;\n    \n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt;   \n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-radioButton&gt;&lt;/p-radioButton&gt;&lt;/span&gt;      \n        &lt;/div&gt;\n    &lt;/div&gt;\n            \n    &lt;div class=\"p-col-12 p-md-4\"&gt;\n        &lt;div class=\"ui-inputgroup\"&gt;\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-checkbox&gt;&lt;/p-checkbox&gt;&lt;/span&gt;\n            &lt;input type=\"text\" pInputText placeholder=\"Website\"&gt;      \n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-radioButton&gt;&lt;/p-radioButton&gt;&lt;/span&gt; \n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n        </p-tabPanel>\n        \n        <p-tabPanel header=\"inputgroupdemo.ts\">\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class InputGroupDemo &#123;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n        <p-tabPanel header=\"StackBlitz\">\n            <ng-template pTemplate=\"content\">\n                <iframe src=\"https://stackblitz.com/edit/primeng-inputgroup-demo?embed=1\" style=\"width: 100%; height: 768px; border: none;\"></iframe>\n            </ng-template>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
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
  "./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: InputGroupDemoRoutingModule */

  /***/
  function _src_app_showcase_components_inputgroup_inputgroupdemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputGroupDemoRoutingModule", function () {
      return InputGroupDemoRoutingModule;
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


    var _inputgroupdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inputgroupdemo */
    "./src/app/showcase/components/inputgroup/inputgroupdemo.ts");

    var InputGroupDemoRoutingModule = /*#__PURE__*/_createClass(function InputGroupDemoRoutingModule() {
      _classCallCheck(this, InputGroupDemoRoutingModule);
    });

    InputGroupDemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _inputgroupdemo__WEBPACK_IMPORTED_MODULE_3__["InputGroupDemo"]
      }])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InputGroupDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/inputgroup/inputgroupdemo.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/showcase/components/inputgroup/inputgroupdemo.module.ts ***!
    \*************************************************************************/

  /*! exports provided: InputGroupDemoModule */

  /***/
  function _src_app_showcase_components_inputgroup_inputgroupdemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputGroupDemoModule", function () {
      return InputGroupDemoModule;
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


    var _inputgroupdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./inputgroupdemo */
    "./src/app/showcase/components/inputgroup/inputgroupdemo.ts");
    /* harmony import */


    var _inputgroupdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inputgroupdemo-routing.module */
    "./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./src/app/components/inputtext/public_api.ts");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/checkbox */
    "./src/app/components/checkbox/public_api.ts");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./src/app/components/radiobutton/public_api.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/tabview */
    "./src/app/components/tabview/public_api.ts");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./src/app/components/codehighlighter/public_api.ts");

    var InputGroupDemoModule = /*#__PURE__*/_createClass(function InputGroupDemoModule() {
      _classCallCheck(this, InputGroupDemoModule);
    });

    InputGroupDemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inputgroupdemo_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputGroupDemoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_11__["CodeHighlighterModule"]],
      declarations: [_inputgroupdemo__WEBPACK_IMPORTED_MODULE_4__["InputGroupDemo"]]
    })], InputGroupDemoModule);
    /***/
  },

  /***/
  "./src/app/showcase/components/inputgroup/inputgroupdemo.ts":
  /*!******************************************************************!*\
    !*** ./src/app/showcase/components/inputgroup/inputgroupdemo.ts ***!
    \******************************************************************/

  /*! exports provided: InputGroupDemo */

  /***/
  function _src_app_showcase_components_inputgroup_inputgroupdemoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputGroupDemo", function () {
      return InputGroupDemo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputGroupDemo = /*#__PURE__*/_createClass(function InputGroupDemo() {
      _classCallCheck(this, InputGroupDemo);
    });

    InputGroupDemo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inputgroupdemo.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/components/inputgroup/inputgroupdemo.html"))["default"]
    })], InputGroupDemo);
    /***/
  }
}]);
//# sourceMappingURL=components-inputgroup-inputgroupdemo-module-es5.js.map