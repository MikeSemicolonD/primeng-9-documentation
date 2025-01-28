function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-fileupload-fileuploaddemo-module~components-inputnumber-inputnumberdemo-module"], {
  /***/
  "./src/app/components/fileupload/fileupload.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/fileupload/fileupload.ts ***!
    \*****************************************************/

  /*! exports provided: FileUpload, FileUploadModule */

  /***/
  function _src_app_components_fileupload_fileuploadTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUpload", function () {
      return FileUpload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/messages */
    "./src/app/components/messages/public_api.ts");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/progressbar */
    "./src/app/components/progressbar/public_api.ts");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FileUpload = /*#__PURE__*/function () {
      function FileUpload(el, sanitizer, zone, http) {
        _classCallCheck(this, FileUpload);

        this.el = el;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.http = http;
        this.method = 'POST';
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
        this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
        this.invalidFileLimitMessageDetail = 'limit is {0} at most.';
        this.invalidFileLimitMessageSummary = 'Maximum number of files exceeded, ';
        this.previewWidth = 50;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cancel';
        this.chooseIcon = 'pi pi-plus';
        this.uploadIcon = 'pi pi-upload';
        this.cancelIcon = 'pi pi-times';
        this.showUploadButton = true;
        this.showCancelButton = true;
        this.mode = 'advanced';
        this.onBeforeUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._files = [];
        this.progress = 0;
        this.uploadedFileCount = 0;
      }

      return _createClass(FileUpload, [{
        key: "files",
        get: function get() {
          return this._files;
        },
        set: function set(files) {
          this._files = [];

          for (var i = 0; i < files.length; i++) {
            var file = files[i];

            if (this.validate(file)) {
              if (this.isImage(file)) {
                file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
              }

              this._files.push(files[i]);
            }
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'file':
                _this.fileTemplate = item.template;
                break;

              case 'content':
                _this.contentTemplate = item.template;
                break;

              case 'toolbar':
                _this.toolbarTemplate = item.template;
                break;

              default:
                _this.fileTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(function () {
              if (_this2.content) _this2.content.nativeElement.addEventListener('dragover', _this2.onDragOver.bind(_this2));
            });
          }
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
            this.duplicateIEEvent = false;
            return;
          }

          this.msgs = [];

          if (!this.multiple) {
            this.files = [];
          }

          var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

          for (var i = 0; i < files.length; i++) {
            var file = files[i];

            if (!this.isFileSelected(file)) {
              if (this.validate(file)) {
                if (this.isImage(file)) {
                  file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
                }

                this.files.push(files[i]);
              }
            }
          }

          this.onSelect.emit({
            originalEvent: event,
            files: files,
            currentFiles: this.files
          });

          if (this.fileLimit && this.mode == "advanced") {
            this.checkFileLimit();
          }

          if (this.hasFiles() && this.auto && (!(this.mode === "advanced") || !this.isFileLimitExceeded())) {
            this.upload();
          }

          if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
          } else {
            this.clearInputElement();
          }
        }
      }, {
        key: "isFileSelected",
        value: function isFileSelected(file) {
          var _iterator = _createForOfIteratorHelper(this.files),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sFile = _step.value;

              if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return false;
        }
      }, {
        key: "isIE11",
        value: function isIE11() {
          return !!window['MSInputMethodContext'] && !!document['documentMode'];
        }
      }, {
        key: "validate",
        value: function validate(file) {
          if (this.accept && !this.isFileTypeValid(file)) {
            this.msgs.push({
              severity: 'error',
              summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
              detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
            });
            return false;
          }

          if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
              severity: 'error',
              summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
              detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
          }

          return true;
        }
      }, {
        key: "isFileTypeValid",
        value: function isFileTypeValid(file) {
          var acceptableTypes = this.accept.split(',').map(function (type) {
            return type.trim();
          });

          var _iterator2 = _createForOfIteratorHelper(acceptableTypes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var type = _step2.value;
              var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();

              if (acceptable) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }, {
        key: "getTypeClass",
        value: function getTypeClass(fileType) {
          return fileType.substring(0, fileType.indexOf('/'));
        }
      }, {
        key: "isWildcard",
        value: function isWildcard(fileType) {
          return fileType.indexOf('*') !== -1;
        }
      }, {
        key: "getFileExtension",
        value: function getFileExtension(file) {
          return '.' + file.name.split('.').pop();
        }
      }, {
        key: "isImage",
        value: function isImage(file) {
          return /^image\//.test(file.type);
        }
      }, {
        key: "onImageLoad",
        value: function onImageLoad(img) {
          window.URL.revokeObjectURL(img.src);
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this3 = this;

          if (this.customUpload) {
            if (this.fileLimit) {
              this.uploadedFileCount += this.files.length;
            }

            this.uploadHandler.emit({
              files: this.files
            });
          } else {
            this.uploading = true;
            this.msgs = [];
            var formData = new FormData();
            this.onBeforeUpload.emit({
              'formData': formData
            });

            for (var i = 0; i < this.files.length; i++) {
              formData.append(this.name, this.files[i], this.files[i].name);
            }

            this.http.post(this.url, formData, {
              headers: this.headers,
              reportProgress: true,
              observe: 'events',
              withCredentials: this.withCredentials
            }).subscribe(function (event) {
              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Sent:
                  _this3.onSend.emit({
                    originalEvent: event,
                    'formData': formData
                  });

                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Response:
                  _this3.uploading = false;
                  _this3.progress = 0;

                  if (event['status'] >= 200 && event['status'] < 300) {
                    if (_this3.fileLimit) {
                      _this3.uploadedFileCount += _this3.files.length;
                    }

                    _this3.onUpload.emit({
                      originalEvent: event,
                      files: _this3.files
                    });
                  } else {
                    _this3.onError.emit({
                      files: _this3.files
                    });
                  }

                  _this3.clear();

                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].UploadProgress:
                  {
                    if (event['loaded']) {
                      _this3.progress = Math.round(event['loaded'] * 100 / event['total']);
                    }

                    _this3.onProgress.emit({
                      originalEvent: event,
                      progress: _this3.progress
                    });

                    break;
                  }
              }
            }, function (error) {
              _this3.uploading = false;

              _this3.onError.emit({
                files: _this3.files,
                error: error
              });
            });
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.files = [];
          this.onClear.emit();
          this.clearInputElement();
        }
      }, {
        key: "remove",
        value: function remove(event, index) {
          this.clearInputElement();
          this.onRemove.emit({
            originalEvent: event,
            file: this.files[index]
          });
          this.files.splice(index, 1);
        }
      }, {
        key: "isFileLimitExceeded",
        value: function isFileLimitExceeded() {
          if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focus) {
            this.focus = false;
          }

          return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
        }
      }, {
        key: "isChooseDisabled",
        value: function isChooseDisabled() {
          return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
        }
      }, {
        key: "checkFileLimit",
        value: function checkFileLimit() {
          if (this.isFileLimitExceeded()) {
            this.msgs.push({
              severity: 'error',
              summary: this.invalidFileLimitMessageSummary.replace('{0}', this.fileLimit.toString()),
              detail: this.invalidFileLimitMessageDetail.replace('{0}', this.fileLimit.toString())
            });
          }
        }
      }, {
        key: "clearInputElement",
        value: function clearInputElement() {
          if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
          }

          if (this.basicFileInput && this.basicFileInput.nativeElement) {
            this.basicFileInput.nativeElement.value = '';
          }
        }
      }, {
        key: "clearIEInput",
        value: function clearIEInput() {
          if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again

            this.advancedFileInput.nativeElement.value = '';
          }
        }
      }, {
        key: "hasFiles",
        value: function hasFiles() {
          return this.files && this.files.length > 0;
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(e) {
          if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(e) {
          if (!this.disabled) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].addClass(this.content.nativeElement, 'ui-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (!this.disabled) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
          }
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (!this.disabled) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_7__["DomHandler"].removeClass(this.content.nativeElement, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            var allowDrop = this.multiple || files && files.length === 1;

            if (allowDrop) {
              this.onFileSelect(event);
            }
          }
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.focus = true;
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.focus = false;
        }
      }, {
        key: "formatSize",
        value: function formatSize(bytes) {
          if (bytes == 0) {
            return '0 B';
          }

          var k = 1024,
              dm = 3,
              sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
              i = Math.floor(Math.log(bytes) / Math.log(k));
          return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
      }, {
        key: "onSimpleUploaderClick",
        value: function onSimpleUploaderClick(event) {
          if (this.hasFiles()) {
            this.upload();
          }
        }
      }, {
        key: "getBlockableElement",
        value: function getBlockableElement() {
          return this.el.nativeElement.children[0];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
          }
        }
      }]);
    }();

    FileUpload.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "method", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileUpload.prototype, "multiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "accept", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileUpload.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileUpload.prototype, "auto", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileUpload.prototype, "withCredentials", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], FileUpload.prototype, "maxFileSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "invalidFileSizeMessageSummary", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "invalidFileSizeMessageDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "invalidFileTypeMessageSummary", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "invalidFileTypeMessageDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "invalidFileLimitMessageDetail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "invalidFileLimitMessageSummary", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FileUpload.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], FileUpload.prototype, "previewWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "chooseLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "uploadLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "cancelLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "chooseIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "uploadIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "cancelIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileUpload.prototype, "showUploadButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileUpload.prototype, "showCancelButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FileUpload.prototype, "mode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"])], FileUpload.prototype, "headers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileUpload.prototype, "customUpload", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], FileUpload.prototype, "fileLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onBeforeUpload", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onSend", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onUpload", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onRemove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "onProgress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FileUpload.prototype, "uploadHandler", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], FileUpload.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('advancedfileinput'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FileUpload.prototype, "advancedFileInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicfileinput'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FileUpload.prototype, "basicFileInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FileUpload.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], FileUpload.prototype, "files", null);
    FileUpload = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-fileUpload',
      template: "\n        <div [ngClass]=\"'ui-fileupload ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"mode === 'advanced'\">\n            <div class=\"ui-fileupload-buttonbar ui-widget-header ui-corner-top\">\n                <span class=\"ui-fileupload-choose\" [label]=\"chooseLabel\" [icon]=\"chooseIcon\" pButton [ngClass]=\"{'ui-state-focus': focus, 'ui-state-disabled':disabled || isChooseDisabled()}\"> \n                    <input #advancedfileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled || isChooseDisabled()\" \n                        (focus)=\"onFocus()\" (blur)=\"onBlur()\" [attr.title]=\"''\">\n                </span>\n\n                <p-button *ngIf=\"!auto&&showUploadButton\" type=\"button\" [label]=\"uploadLabel\" [icon]=\"uploadIcon\" (onClick)=\"upload()\" [disabled]=\"!hasFiles() || isFileLimitExceeded()\"></p-button>\n                <p-button *ngIf=\"!auto&&showCancelButton\" type=\"button\" [label]=\"cancelLabel\" [icon]=\"cancelIcon\" (onClick)=\"clear()\" [disabled]=\"!hasFiles() ||\xA0uploading\"></p-button>\n\n                <ng-container *ngTemplateOutlet=\"toolbarTemplate\"></ng-container>\n            </div>\n            <div #content [ngClass]=\"{'ui-fileupload-content ui-widget-content ui-corner-bottom':true}\"\n                 (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n\n                <p-messages [value]=\"msgs\" [enableService]=\"false\"></p-messages>\n\n                <div class=\"ui-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"ui-fileupload-row\" *ngFor=\"let file of files; let i = index;\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div>\n                                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"remove($event,i)\" [disabled]=\"uploading\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <ng-template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></ng-template>\n                    </div>\n                </div>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </div>\n        </div>\n        <span *ngIf=\"mode === 'basic'\" [ngClass]=\"{'ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left': true, \n                'ui-fileupload-choose-selected': hasFiles(),'ui-state-focus': focus, 'ui-state-disabled':disabled}\"\n              [ngStyle]=\"style\" [class]=\"styleClass\" (mouseup)=\"onSimpleUploaderClick($event)\">\n            <span class=\"ui-button-icon-left pi\" [ngClass]=\"{'pi-plus': !hasFiles()||auto, 'pi-upload': hasFiles()&&!auto}\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>\n            <input #basicfileinput type=\"file\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\"\n                   (change)=\"onFileSelect($event)\" *ngIf=\"!hasFiles()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n        </span>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])], FileUpload);

    var FileUploadModule = /*#__PURE__*/_createClass(function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    });

    FileUploadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_5__["MessagesModule"]],
      exports: [FileUpload, primeng_api__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_5__["MessagesModule"]],
      declarations: [FileUpload]
    })], FileUploadModule);
    /***/
  },

  /***/
  "./src/app/components/fileupload/public_api.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/fileupload/public_api.ts ***!
    \*****************************************************/

  /*! exports provided: FileUpload, FileUploadModule */

  /***/
  function _src_app_components_fileupload_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _fileupload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./fileupload */
    "./src/app/components/fileupload/fileupload.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileUpload", function () {
      return _fileupload__WEBPACK_IMPORTED_MODULE_0__["FileUpload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return _fileupload__WEBPACK_IMPORTED_MODULE_0__["FileUploadModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/messages/messages.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/messages/messages.ts ***!
    \*************************************************/

  /*! exports provided: Messages, MessagesModule */

  /***/
  function _src_app_components_messages_messagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Messages", function () {
      return Messages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesModule", function () {
      return MessagesModule;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");

    var Messages = /*#__PURE__*/function () {
      function Messages(messageService, el) {
        _classCallCheck(this, Messages);

        this.messageService = messageService;
        this.el = el;
        this.closable = true;
        this.enableService = true;
        this.escape = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      return _createClass(Messages, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'content':
                _this4.contentTemplate = item.template;
                break;

              default:
                _this4.contentTemplate = item.template;
                break;
            }
          });

          if (this.messageService && this.enableService && !this.contentTemplate) {
            this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
              if (messages) {
                if (messages instanceof Array) {
                  var filteredMessages = messages.filter(function (m) {
                    return _this4.key === m.key;
                  });
                  _this4.value = _this4.value ? [].concat(_toConsumableArray(_this4.value), _toConsumableArray(filteredMessages)) : _toConsumableArray(filteredMessages);
                } else if (_this4.key === messages.key) {
                  _this4.value = _this4.value ? [].concat(_toConsumableArray(_this4.value), [messages]) : [messages];
                }
              }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
              if (key) {
                if (_this4.key === key) {
                  _this4.value = null;
                }
              } else {
                _this4.value = null;
              }
            });
          }
        }
      }, {
        key: "hasMessages",
        value: function hasMessages() {
          var parentEl = this.el.nativeElement.parentElement;

          if (parentEl && parentEl.offsetParent) {
            return this.contentTemplate != null || this.value && this.value.length > 0;
          }

          return false;
        }
      }, {
        key: "getSeverityClass",
        value: function getSeverityClass() {
          if (this.severity) {
            return 'ui-messages-' + this.severity;
          } else {
            var msg = this.value[0];

            if (msg) {
              var severities = ['info', 'warn', 'error', 'success'];
              var severity = severities.find(function (item) {
                return item === msg.severity;
              });
              return severity && "ui-messages-".concat(severity);
            }
          }

          return null;
        }
      }, {
        key: "clear",
        value: function clear(event) {
          this.value = [];
          this.valueChange.emit(this.value);
          event.preventDefault();
        }
      }, {
        key: "icon",
        get: function get() {
          var severity = this.severity || (this.hasMessages() ? this.value[0].severity : null);

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
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
          }

          if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
          }
        }
      }]);
    }();

    Messages.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], Messages.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Messages.prototype, "closable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Messages.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Messages.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Messages.prototype, "enableService", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Messages.prototype, "key", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Messages.prototype, "escape", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Messages.prototype, "severity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Messages.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Messages.prototype, "hideTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Messages.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Messages.prototype, "valueChange", void 0);
    Messages = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-messages',
      template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\"\n                    [ngClass]=\"getSeverityClass()\" role=\"alert\" [ngStyle]=\"style\" [class]=\"styleClass\"\n                    [@messageAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\">\n            <a tabindex=\"0\" class=\"ui-messages-close\" (click)=\"clear($event)\" (keydown.enter)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <span class=\"ui-messages-icon pi\" [ngClass]=\"icon\"></span>\n            <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            <ul *ngIf=\"value && value.length\">\n                <li *ngFor=\"let msg of value\">\n                    <div *ngIf=\"!escape; else escapeOut\">\n                        <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\" [innerHTML]=\"msg.summary\"></span>\n                        <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\" [innerHTML]=\"msg.detail\"></span>\n                    </div>\n                    <ng-template #escapeOut>\n                        <span *ngIf=\"msg.summary\" class=\"ui-messages-summary\">{{msg.summary}}</span>\n                        <span *ngIf=\"msg.detail\" class=\"ui-messages-detail\">{{msg.detail}}</span>\n                    </ng-template>\n                </li>\n            </ul>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('messageAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateY(-25%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        opacity: 0,
        transform: 'translateY(-25%)'
      }))])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], Messages);

    var MessagesModule = /*#__PURE__*/_createClass(function MessagesModule() {
      _classCallCheck(this, MessagesModule);
    });

    MessagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [Messages],
      declarations: [Messages]
    })], MessagesModule);
    /***/
  },

  /***/
  "./src/app/components/messages/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/messages/public_api.ts ***!
    \***************************************************/

  /*! exports provided: Messages, MessagesModule */

  /***/
  function _src_app_components_messages_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./messages */
    "./src/app/components/messages/messages.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Messages", function () {
      return _messages__WEBPACK_IMPORTED_MODULE_0__["Messages"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MessagesModule", function () {
      return _messages__WEBPACK_IMPORTED_MODULE_0__["MessagesModule"];
    });
    /***/

  },

  /***/
  "./src/app/components/progressbar/progressbar.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/progressbar/progressbar.ts ***!
    \*******************************************************/

  /*! exports provided: ProgressBar, ProgressBarModule */

  /***/
  function _src_app_components_progressbar_progressbarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return ProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return ProgressBarModule;
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

    var ProgressBar = /*#__PURE__*/_createClass(function ProgressBar() {
      _classCallCheck(this, ProgressBar);

      this.showValue = true;
      this.unit = '%';
      this.mode = 'determinate';
    });

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressBar.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProgressBar.prototype, "showValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressBar.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "unit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProgressBar.prototype, "mode", void 0);
    ProgressBar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-progressBar',
      template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div class=\"ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div class=\"ui-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\" *ngIf=\"showValue\">{{value}}{{unit}}</div>\n        </div>\n    ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    })], ProgressBar);

    var ProgressBarModule = /*#__PURE__*/_createClass(function ProgressBarModule() {
      _classCallCheck(this, ProgressBarModule);
    });

    ProgressBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [ProgressBar],
      declarations: [ProgressBar]
    })], ProgressBarModule);
    /***/
  },

  /***/
  "./src/app/components/progressbar/public_api.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/progressbar/public_api.ts ***!
    \******************************************************/

  /*! exports provided: ProgressBar, ProgressBarModule */

  /***/
  function _src_app_components_progressbar_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _progressbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./progressbar */
    "./src/app/components/progressbar/progressbar.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressBar", function () {
      return _progressbar__WEBPACK_IMPORTED_MODULE_0__["ProgressBar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return _progressbar__WEBPACK_IMPORTED_MODULE_0__["ProgressBarModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-fileupload-fileuploaddemo-module~components-inputnumber-inputnumberdemo-module-es5.js.map