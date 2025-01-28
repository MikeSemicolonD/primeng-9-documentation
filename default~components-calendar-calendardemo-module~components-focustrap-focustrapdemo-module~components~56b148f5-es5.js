function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5"], {
  /***/
  "./src/app/components/calendar/calendar.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/calendar/calendar.ts ***!
    \*************************************************/

  /*! exports provided: CALENDAR_VALUE_ACCESSOR, Calendar, CalendarModule */

  /***/
  function _src_app_components_calendar_calendarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CALENDAR_VALUE_ACCESSOR", function () {
      return CALENDAR_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Calendar", function () {
      return Calendar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/button */
    "./src/app/components/button/public_api.ts");
    /* harmony import */


    var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dom */
    "./src/app/components/dom/public_api.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./src/app/components/api/public_api.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CALENDAR_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Calendar;
      }),
      multi: true
    };

    var Calendar = /*#__PURE__*/function () {
      function Calendar(el, renderer, cd, zone) {
        _classCallCheck(this, Calendar);

        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.dateFormat = 'mm/dd/yy';
        this.multipleSeparator = ',';
        this.rangeSeparator = '-';
        this.inline = false;
        this.showOtherMonths = true;
        this.icon = 'pi pi-calendar';
        this.shortYearCutoff = '+10';
        this.hourFormat = '24';
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 1;
        this.showSeconds = false;
        this.showOnFocus = true;
        this.showWeek = false;
        this.dataType = 'date';
        this.selectionMode = 'single';
        this.todayButtonStyleClass = 'ui-button-secondary';
        this.clearButtonStyleClass = 'ui-button-secondary';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.keepInvalid = false;
        this.hideOnDateTimeSelect = true;
        this.numberOfMonths = 1;
        this.view = 'date';
        this.timeSeparator = ":";
        this.focusTrap = true;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTodayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._locale = {
          firstDayOfWeek: 0,
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'mm/dd/yy',
          weekHeader: 'Wk'
        };

        this.onModelChange = function () {};

        this.onModelTouched = function () {};

        this.inputFieldValue = null;
        this.navigationState = null;

        this.convertTo24Hour = function (hours, pm) {
          if (this.hourFormat == '12') {
            if (hours === 12) {
              return pm ? 12 : 0;
            } else {
              return pm ? hours + 12 : hours;
            }
          }

          return hours;
        };
      }

      return _createClass(Calendar, [{
        key: "content",
        set: function set(content) {
          var _this = this;

          this.contentViewChild = content;

          if (this.contentViewChild) {
            if (this.isMonthNavigate) {
              Promise.resolve(null).then(function () {
                return _this.updateFocus();
              });
              this.isMonthNavigate = false;
            } else {
              this.initFocusableCell();
            }
          }
        }
      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        },
        set: function set(date) {
          this._minDate = date;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        },
        set: function set(date) {
          this._maxDate = date;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "disabledDates",
        get: function get() {
          return this._disabledDates;
        },
        set: function set(disabledDates) {
          this._disabledDates = disabledDates;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "disabledDays",
        get: function get() {
          return this._disabledDays;
        },
        set: function set(disabledDays) {
          this._disabledDays = disabledDays;

          if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "yearRange",
        get: function get() {
          return this._yearRange;
        },
        set: function set(yearRange) {
          this._yearRange = yearRange;

          if (yearRange) {
            var years = yearRange.split(':');
            var yearStart = parseInt(years[0]);
            var yearEnd = parseInt(years[1]);
            this.populateYearOptions(yearStart, yearEnd);
          }
        }
      }, {
        key: "showTime",
        get: function get() {
          return this._showTime;
        },
        set: function set(showTime) {
          this._showTime = showTime;

          if (this.currentHour === undefined) {
            this.initTime(this.value || new Date());
          }

          this.updateInputfield();
        }
      }, {
        key: "locale",
        get: function get() {
          return this._locale;
        },
        set: function set(newLocale) {
          this._locale = newLocale;

          if (this.view === 'date') {
            this.createWeekDays();
            this.createMonths(this.currentMonth, this.currentYear);
          } else if (this.view === 'month') {
            this.createMonthPickerValues();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var date = this.defaultDate || new Date();
          this.currentMonth = date.getMonth();
          this.currentYear = date.getFullYear();

          if (this.view === 'date') {
            this.createWeekDays();
            this.initTime(date);
            this.createMonths(this.currentMonth, this.currentYear);
            this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;
          } else if (this.view === 'month') {
            this.createMonthPickerValues();
          }
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          this.templates.forEach(function (item) {
            switch (item.getType()) {
              case 'date':
                _this2.dateTemplate = item.template;
                break;

              case 'disabledDate':
                _this2.disabledDateTemplate = item.template;
                break;

              default:
                _this2.dateTemplate = item.template;
                break;
            }
          });
        }
      }, {
        key: "populateYearOptions",
        value: function populateYearOptions(start, end) {
          this.yearOptions = [];

          for (var i = start; i <= end; i++) {
            this.yearOptions.push(i);
          }
        }
      }, {
        key: "createWeekDays",
        value: function createWeekDays() {
          this.weekDays = [];
          var dayIndex = this.locale.firstDayOfWeek;

          for (var i = 0; i < 7; i++) {
            this.weekDays.push(this.locale.dayNamesMin[dayIndex]);
            dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
          }
        }
      }, {
        key: "createMonthPickerValues",
        value: function createMonthPickerValues() {
          this.monthPickerValues = [];

          for (var i = 0; i <= 11; i++) {
            this.monthPickerValues.push(this.locale.monthNamesShort[i]);
          }
        }
      }, {
        key: "createMonths",
        value: function createMonths(month, year) {
          this.months = this.months = [];

          for (var i = 0; i < this.numberOfMonths; i++) {
            var m = month + i;
            var y = year;

            if (m > 11) {
              m = m % 11 - 1;
              y = year + 1;
            }

            this.months.push(this.createMonth(m, y));
          }
        }
      }, {
        key: "getWeekNumber",
        value: function getWeekNumber(date) {
          var checkDate = new Date(date.getTime());
          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
          var time = checkDate.getTime();
          checkDate.setMonth(0);
          checkDate.setDate(1);
          return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
        }
      }, {
        key: "createMonth",
        value: function createMonth(month, year) {
          var dates = [];
          var firstDay = this.getFirstDayOfMonthIndex(month, year);
          var daysLength = this.getDaysCountInMonth(month, year);
          var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
          var dayNo = 1;
          var today = new Date();
          var weekNumbers = [];
          var monthRows = Math.ceil((daysLength + firstDay) / 7);

          for (var i = 0; i < monthRows; i++) {
            var week = [];

            if (i == 0) {
              for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
                var prev = this.getPreviousMonthAndYear(month, year);
                week.push({
                  day: j,
                  month: prev.month,
                  year: prev.year,
                  otherMonth: true,
                  today: this.isToday(today, j, prev.month, prev.year),
                  selectable: this.isSelectable(j, prev.month, prev.year, true)
                });
              }

              var remainingDaysLength = 7 - week.length;

              for (var _j = 0; _j < remainingDaysLength; _j++) {
                week.push({
                  day: dayNo,
                  month: month,
                  year: year,
                  today: this.isToday(today, dayNo, month, year),
                  selectable: this.isSelectable(dayNo, month, year, false)
                });
                dayNo++;
              }
            } else {
              for (var _j2 = 0; _j2 < 7; _j2++) {
                if (dayNo > daysLength) {
                  var next = this.getNextMonthAndYear(month, year);
                  week.push({
                    day: dayNo - daysLength,
                    month: next.month,
                    year: next.year,
                    otherMonth: true,
                    today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                    selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                  });
                } else {
                  week.push({
                    day: dayNo,
                    month: month,
                    year: year,
                    today: this.isToday(today, dayNo, month, year),
                    selectable: this.isSelectable(dayNo, month, year, false)
                  });
                }

                dayNo++;
              }
            }

            if (this.showWeek) {
              weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
            }

            dates.push(week);
          }

          return {
            month: month,
            year: year,
            dates: dates,
            weekNumbers: weekNumbers
          };
        }
      }, {
        key: "initTime",
        value: function initTime(date) {
          this.pm = date.getHours() > 11;

          if (this.showTime) {
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
            this.setCurrentHourPM(date.getHours());
          } else if (this.timeOnly) {
            this.currentMinute = 0;
            this.currentHour = 0;
            this.currentSecond = 0;
          }
        }
      }, {
        key: "navBackward",
        value: function navBackward(event) {
          var _this3 = this;

          event.stopPropagation();

          if (this.disabled) {
            event.preventDefault();
            return;
          }

          this.isMonthNavigate = true;

          if (this.view === 'month') {
            this.decrementYear();
            setTimeout(function () {
              _this3.updateFocus();
            }, 1);
          } else {
            if (this.currentMonth === 0) {
              this.currentMonth = 11;
              this.decrementYear();
            } else {
              this.currentMonth--;
            }

            this.onMonthChange.emit({
              month: this.currentMonth + 1,
              year: this.currentYear
            });
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "navForward",
        value: function navForward(event) {
          var _this4 = this;

          event.stopPropagation();

          if (this.disabled) {
            event.preventDefault();
            return;
          }

          this.isMonthNavigate = true;

          if (this.view === 'month') {
            this.incrementYear();
            setTimeout(function () {
              _this4.updateFocus();
            }, 1);
          } else {
            if (this.currentMonth === 11) {
              this.currentMonth = 0;
              this.incrementYear();
            } else {
              this.currentMonth++;
            }

            this.onMonthChange.emit({
              month: this.currentMonth + 1,
              year: this.currentYear
            });
            this.createMonths(this.currentMonth, this.currentYear);
          }
        }
      }, {
        key: "decrementYear",
        value: function decrementYear() {
          this.currentYear--;

          if (this.yearNavigator && this.currentYear < this.yearOptions[0]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] - difference, this.yearOptions[this.yearOptions.length - 1] - difference);
          }
        }
      }, {
        key: "incrementYear",
        value: function incrementYear() {
          this.currentYear++;

          if (this.yearNavigator && this.currentYear > this.yearOptions[this.yearOptions.length - 1]) {
            var difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
            this.populateYearOptions(this.yearOptions[0] + difference, this.yearOptions[this.yearOptions.length - 1] + difference);
          }
        }
      }, {
        key: "onDateSelect",
        value: function onDateSelect(event, dateMeta) {
          var _this5 = this;

          if (this.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
          }

          if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
            this.value = this.value.filter(function (date, i) {
              return !_this5.isDateEquals(date, dateMeta);
            });

            if (this.value.length === 0) {
              this.value = null;
            }

            this.updateModel(this.value);
          } else {
            if (this.shouldSelectDate(dateMeta)) {
              this.selectDate(dateMeta);
            }
          }

          if (this.isSingleSelection() && this.hideOnDateTimeSelect) {
            setTimeout(function () {
              event.preventDefault();

              _this5.hideOverlay();

              if (_this5.mask) {
                _this5.disableModality();
              }

              _this5.cd.markForCheck();
            }, 150);
          }

          this.updateInputfield();
          event.preventDefault();
        }
      }, {
        key: "shouldSelectDate",
        value: function shouldSelectDate(dateMeta) {
          if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;else return true;
        }
      }, {
        key: "onMonthSelect",
        value: function onMonthSelect(event, index) {
          if (!primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-state-disabled')) {
            this.onDateSelect(event, {
              year: this.currentYear,
              month: index,
              day: 1,
              selectable: true
            });
          }
        }
      }, {
        key: "updateInputfield",
        value: function updateInputfield() {
          var formattedValue = '';

          if (this.value) {
            if (this.isSingleSelection()) {
              formattedValue = this.formatDateTime(this.value);
            } else if (this.isMultipleSelection()) {
              for (var i = 0; i < this.value.length; i++) {
                var dateAsString = this.formatDateTime(this.value[i]);
                formattedValue += dateAsString;

                if (i !== this.value.length - 1) {
                  formattedValue += this.multipleSeparator + ' ';
                }
              }
            } else if (this.isRangeSelection()) {
              if (this.value && this.value.length) {
                var startDate = this.value[0];
                var endDate = this.value[1];
                formattedValue = this.formatDateTime(startDate);

                if (endDate) {
                  formattedValue += ' ' + this.rangeSeparator + ' ' + this.formatDateTime(endDate);
                }
              }
            }
          }

          this.inputFieldValue = formattedValue;
          this.updateFilledState();

          if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
            this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
          }
        }
      }, {
        key: "formatDateTime",
        value: function formatDateTime(date) {
          var formattedValue = null;

          if (date) {
            if (this.timeOnly) {
              formattedValue = this.formatTime(date);
            } else {
              formattedValue = this.formatDate(date, this.getDateFormat());

              if (this.showTime) {
                formattedValue += ' ' + this.formatTime(date);
              }
            }
          }

          return formattedValue;
        }
      }, {
        key: "setCurrentHourPM",
        value: function setCurrentHourPM(hours) {
          if (this.hourFormat == '12') {
            this.pm = hours > 11;

            if (hours >= 12) {
              this.currentHour = hours == 12 ? 12 : hours - 12;
            } else {
              this.currentHour = hours == 0 ? 12 : hours;
            }
          } else {
            this.currentHour = hours;
          }
        }
      }, {
        key: "selectDate",
        value: function selectDate(dateMeta) {
          var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

          if (this.showTime) {
            if (this.hourFormat == '12') {
              if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
            } else {
              date.setHours(this.currentHour);
            }

            date.setMinutes(this.currentMinute);
            date.setSeconds(this.currentSecond);
          }

          if (this.minDate && this.minDate > date) {
            date = this.minDate;
            this.setCurrentHourPM(date.getHours());
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
          }

          if (this.maxDate && this.maxDate < date) {
            date = this.maxDate;
            this.setCurrentHourPM(date.getHours());
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
          }

          if (this.isSingleSelection()) {
            this.updateModel(date);
          } else if (this.isMultipleSelection()) {
            this.updateModel(this.value ? [].concat(_toConsumableArray(this.value), [date]) : [date]);
          } else if (this.isRangeSelection()) {
            if (this.value && this.value.length) {
              var startDate = this.value[0];
              var endDate = this.value[1];

              if (!endDate && date.getTime() >= startDate.getTime()) {
                endDate = date;
              } else {
                startDate = date;
                endDate = null;
              }

              this.updateModel([startDate, endDate]);
            } else {
              this.updateModel([date, null]);
            }
          }

          this.onSelect.emit(date);
        }
      }, {
        key: "updateModel",
        value: function updateModel(value) {
          var _this6 = this;

          this.value = value;

          if (this.dataType == 'date') {
            this.onModelChange(this.value);
          } else if (this.dataType == 'string') {
            if (this.isSingleSelection()) {
              this.onModelChange(this.formatDateTime(this.value));
            } else {
              var stringArrValue = null;

              if (this.value) {
                stringArrValue = this.value.map(function (date) {
                  return _this6.formatDateTime(date);
                });
              }

              this.onModelChange(stringArrValue);
            }
          }
        }
      }, {
        key: "getFirstDayOfMonthIndex",
        value: function getFirstDayOfMonthIndex(month, year) {
          var day = new Date();
          day.setDate(1);
          day.setMonth(month);
          day.setFullYear(year);
          var dayIndex = day.getDay() + this.getSundayIndex();
          return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
        }
      }, {
        key: "getDaysCountInMonth",
        value: function getDaysCountInMonth(month, year) {
          return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
        }
      }, {
        key: "getDaysCountInPrevMonth",
        value: function getDaysCountInPrevMonth(month, year) {
          var prev = this.getPreviousMonthAndYear(month, year);
          return this.getDaysCountInMonth(prev.month, prev.year);
        }
      }, {
        key: "getPreviousMonthAndYear",
        value: function getPreviousMonthAndYear(month, year) {
          var m, y;

          if (month === 0) {
            m = 11;
            y = year - 1;
          } else {
            m = month - 1;
            y = year;
          }

          return {
            'month': m,
            'year': y
          };
        }
      }, {
        key: "getNextMonthAndYear",
        value: function getNextMonthAndYear(month, year) {
          var m, y;

          if (month === 11) {
            m = 0;
            y = year + 1;
          } else {
            m = month + 1;
            y = year;
          }

          return {
            'month': m,
            'year': y
          };
        }
      }, {
        key: "getSundayIndex",
        value: function getSundayIndex() {
          return this.locale.firstDayOfWeek > 0 ? 7 - this.locale.firstDayOfWeek : 0;
        }
      }, {
        key: "isSelected",
        value: function isSelected(dateMeta) {
          if (this.value) {
            if (this.isSingleSelection()) {
              return this.isDateEquals(this.value, dateMeta);
            } else if (this.isMultipleSelection()) {
              var selected = false;

              var _iterator = _createForOfIteratorHelper(this.value),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var date = _step.value;
                  selected = this.isDateEquals(date, dateMeta);

                  if (selected) {
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return selected;
            } else if (this.isRangeSelection()) {
              if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);else return this.isDateEquals(this.value[0], dateMeta);
            }
          } else {
            return false;
          }
        }
      }, {
        key: "isMonthSelected",
        value: function isMonthSelected(month) {
          var day = this.value ? Array.isArray(this.value) ? this.value[0].getDate() : this.value.getDate() : 1;
          return this.isSelected({
            year: this.currentYear,
            month: month,
            day: day,
            selectable: true
          });
        }
      }, {
        key: "isDateEquals",
        value: function isDateEquals(value, dateMeta) {
          if (value) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;else return false;
        }
      }, {
        key: "isDateBetween",
        value: function isDateBetween(start, end, dateMeta) {
          var between = false;

          if (start && end) {
            var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
            return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
          }

          return between;
        }
      }, {
        key: "isSingleSelection",
        value: function isSingleSelection() {
          return this.selectionMode === 'single';
        }
      }, {
        key: "isRangeSelection",
        value: function isRangeSelection() {
          return this.selectionMode === 'range';
        }
      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this.selectionMode === 'multiple';
        }
      }, {
        key: "isToday",
        value: function isToday(today, day, month, year) {
          return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
        }
      }, {
        key: "isSelectable",
        value: function isSelectable(day, month, year, otherMonth) {
          var validMin = true;
          var validMax = true;
          var validDate = true;
          var validDay = true;

          if (otherMonth && !this.selectOtherMonths) {
            return false;
          }

          if (this.minDate) {
            if (this.minDate.getFullYear() > year) {
              validMin = false;
            } else if (this.minDate.getFullYear() === year) {
              if (this.minDate.getMonth() > month) {
                validMin = false;
              } else if (this.minDate.getMonth() === month) {
                if (this.minDate.getDate() > day) {
                  validMin = false;
                }
              }
            }
          }

          if (this.maxDate) {
            if (this.maxDate.getFullYear() < year) {
              validMax = false;
            } else if (this.maxDate.getFullYear() === year) {
              if (this.maxDate.getMonth() < month) {
                validMax = false;
              } else if (this.maxDate.getMonth() === month) {
                if (this.maxDate.getDate() < day) {
                  validMax = false;
                }
              }
            }
          }

          if (this.disabledDates) {
            validDate = !this.isDateDisabled(day, month, year);
          }

          if (this.disabledDays) {
            validDay = !this.isDayDisabled(day, month, year);
          }

          return validMin && validMax && validDate && validDay;
        }
      }, {
        key: "isDateDisabled",
        value: function isDateDisabled(day, month, year) {
          if (this.disabledDates) {
            var _iterator2 = _createForOfIteratorHelper(this.disabledDates),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var disabledDate = _step2.value;

                if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
                  return true;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          return false;
        }
      }, {
        key: "isDayDisabled",
        value: function isDayDisabled(day, month, year) {
          if (this.disabledDays) {
            var weekday = new Date(year, month, day);
            var weekdayNumber = weekday.getDay();
            return this.disabledDays.indexOf(weekdayNumber) !== -1;
          }

          return false;
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus(event) {
          this.focus = true;

          if (this.showOnFocus) {
            this.showOverlay();
          }

          this.onFocus.emit(event);
        }
      }, {
        key: "onInputClick",
        value: function onInputClick() {
          if (this.overlay && this.autoZIndex) {
            this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
          }

          if (this.showOnFocus && !this.overlayVisible) {
            this.showOverlay();
          }
        }
      }, {
        key: "onInputBlur",
        value: function onInputBlur(event) {
          this.focus = false;
          this.onBlur.emit(event);

          if (!this.keepInvalid) {
            this.updateInputfield();
          }

          this.onModelTouched();
        }
      }, {
        key: "onButtonClick",
        value: function onButtonClick(event, inputfield) {
          if (!this.overlayVisible) {
            inputfield.focus();
            this.showOverlay();
          } else {
            this.hideOverlay();
          }
        }
      }, {
        key: "onPrevButtonClick",
        value: function onPrevButtonClick(event) {
          this.navigationState = {
            backward: true,
            button: true
          };
          this.navBackward(event);
        }
      }, {
        key: "onNextButtonClick",
        value: function onNextButtonClick(event) {
          this.navigationState = {
            backward: false,
            button: true
          };
          this.navForward(event);
        }
      }, {
        key: "onContainerButtonKeydown",
        value: function onContainerButtonKeydown(event) {
          switch (event.which) {
            //tab
            case 9:
              if (!this.inline) {
                this.trapFocus(event);
              }

              break;
            //escape

            case 27:
              this.overlayVisible = false;
              event.preventDefault();
              break;

            default:
              //Noop
              break;
          }
        }
      }, {
        key: "onInputKeydown",
        value: function onInputKeydown(event) {
          this.isKeydown = true;

          if (event.keyCode === 9 && this.contentViewChild) {
            this.trapFocus(event);
          } else if (event.keyCode === 27) {
            if (this.overlayVisible) {
              this.overlayVisible = false;
              event.preventDefault();
            }
          }
        }
      }, {
        key: "onDateCellKeydown",
        value: function onDateCellKeydown(event, date, groupIndex) {
          var cellContent = event.currentTarget;
          var cell = cellContent.parentElement;

          switch (event.which) {
            //down arrow
            case 40:
              {
                cellContent.tabIndex = '-1';
                var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(cell);
                var nextRow = cell.parentElement.nextElementSibling;

                if (nextRow) {
                  var focusCell = nextRow.children[cellIndex].children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(focusCell, 'ui-state-disabled')) {
                    this.navigationState = {
                      backward: false
                    };
                    this.navForward(event);
                  } else {
                    nextRow.children[cellIndex].children[0].tabIndex = '0';
                    nextRow.children[cellIndex].children[0].focus();
                  }
                } else {
                  this.navigationState = {
                    backward: false
                  };
                  this.navForward(event);
                }

                event.preventDefault();
                break;
              }
            //up arrow

            case 38:
              {
                cellContent.tabIndex = '-1';

                var _cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(cell);

                var prevRow = cell.parentElement.previousElementSibling;

                if (prevRow) {
                  var _focusCell = prevRow.children[_cellIndex].children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(_focusCell, 'ui-state-disabled')) {
                    this.navigationState = {
                      backward: true
                    };
                    this.navBackward(event);
                  } else {
                    _focusCell.tabIndex = '0';

                    _focusCell.focus();
                  }
                } else {
                  this.navigationState = {
                    backward: true
                  };
                  this.navBackward(event);
                }

                event.preventDefault();
                break;
              }
            //left arrow

            case 37:
              {
                cellContent.tabIndex = '-1';
                var prevCell = cell.previousElementSibling;

                if (prevCell) {
                  var _focusCell2 = prevCell.children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(_focusCell2, 'ui-state-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(_focusCell2.parentElement, 'ui-datepicker-weeknumber')) {
                    this.navigateToMonth(true, groupIndex);
                  } else {
                    _focusCell2.tabIndex = '0';

                    _focusCell2.focus();
                  }
                } else {
                  this.navigateToMonth(true, groupIndex);
                }

                event.preventDefault();
                break;
              }
            //right arrow

            case 39:
              {
                cellContent.tabIndex = '-1';
                var nextCell = cell.nextElementSibling;

                if (nextCell) {
                  var _focusCell3 = nextCell.children[0];

                  if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(_focusCell3, 'ui-state-disabled')) {
                    this.navigateToMonth(false, groupIndex);
                  } else {
                    _focusCell3.tabIndex = '0';

                    _focusCell3.focus();
                  }
                } else {
                  this.navigateToMonth(false, groupIndex);
                }

                event.preventDefault();
                break;
              }
            //enter

            case 13:
              {
                this.onDateSelect(event, date);
                event.preventDefault();
                break;
              }
            //escape

            case 27:
              {
                this.overlayVisible = false;
                event.preventDefault();
                break;
              }
            //tab

            case 9:
              {
                if (!this.inline) {
                  this.trapFocus(event);
                }

                break;
              }

            default:
              //no op
              break;
          }
        }
      }, {
        key: "onMonthCellKeydown",
        value: function onMonthCellKeydown(event, index) {
          var cell = event.currentTarget;

          switch (event.which) {
            //arrows
            case 38:
            case 40:
              {
                cell.tabIndex = '-1';
                var cells = cell.parentElement.children;
                var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].index(cell);
                var nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];

                if (nextCell) {
                  nextCell.tabIndex = '0';
                  nextCell.focus();
                }

                event.preventDefault();
                break;
              }
            //left arrow

            case 37:
              {
                cell.tabIndex = '-1';
                var prevCell = cell.previousElementSibling;

                if (prevCell) {
                  prevCell.tabIndex = '0';
                  prevCell.focus();
                }

                event.preventDefault();
                break;
              }
            //right arrow

            case 39:
              {
                cell.tabIndex = '-1';
                var _nextCell = cell.nextElementSibling;

                if (_nextCell) {
                  _nextCell.tabIndex = '0';

                  _nextCell.focus();
                }

                event.preventDefault();
                break;
              }
            //enter

            case 13:
              {
                this.onMonthSelect(event, index);
                event.preventDefault();
                break;
              }
            //escape

            case 27:
              {
                this.overlayVisible = false;
                event.preventDefault();
                break;
              }
            //tab

            case 9:
              {
                if (!this.inline) {
                  this.trapFocus(event);
                }

                break;
              }

            default:
              //no op
              break;
          }
        }
      }, {
        key: "navigateToMonth",
        value: function navigateToMonth(prev, groupIndex) {
          if (prev) {
            if (this.numberOfMonths === 1 || groupIndex === 0) {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            } else {
              var prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
              var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(prevMonthContainer, '.ui-datepicker-calendar td a');
              var focusCell = cells[cells.length - 1];
              focusCell.tabIndex = '0';
              focusCell.focus();
            }
          } else {
            if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            } else {
              var nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];

              var _focusCell4 = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(nextMonthContainer, '.ui-datepicker-calendar td a');

              _focusCell4.tabIndex = '0';

              _focusCell4.focus();
            }
          }
        }
      }, {
        key: "updateFocus",
        value: function updateFocus() {
          var cell;

          if (this.navigationState) {
            if (this.navigationState.button) {
              this.initFocusableCell();
              if (this.navigationState.backward) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-prev').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-next').focus();
            } else {
              if (this.navigationState.backward) {
                var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.contentViewChild.nativeElement, '.ui-datepicker-calendar td a');
                cell = cells[cells.length - 1];
              } else {
                cell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-calendar td a');
              }

              if (cell) {
                cell.tabIndex = '0';
                cell.focus();
              }
            }

            this.navigationState = null;
          } else {
            this.initFocusableCell();
          }
        }
      }, {
        key: "initFocusableCell",
        value: function initFocusableCell() {
          var cell;

          if (this.view === 'month') {
            var cells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.contentViewChild.nativeElement, '.ui-monthpicker .ui-monthpicker-month:not(.ui-state-disabled)');
            var selectedCell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-monthpicker .ui-monthpicker-month.ui-state-highlight');
            cells.forEach(function (cell) {
              return cell.tabIndex = -1;
            });
            cell = selectedCell || cells[0];

            if (cells.length === 0) {
              var disabledCells = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].find(this.contentViewChild.nativeElement, '.ui-monthpicker .ui-monthpicker-month.ui-state-disabled[tabindex = "0"]');
              disabledCells.forEach(function (cell) {
                return cell.tabIndex = -1;
              });
            }
          } else {
            cell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, 'a.ui-state-active');

            if (!cell) {
              var todayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, 'td.ui-datepicker-today a:not(.ui-state-disabled)');
              if (todayCell) cell = todayCell;else cell = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.contentViewChild.nativeElement, '.ui-datepicker-calendar td a');
            }
          }

          if (cell) {
            cell.tabIndex = '0';
          }
        }
      }, {
        key: "trapFocus",
        value: function trapFocus(event) {
          var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getFocusableElements(this.contentViewChild.nativeElement);

          if (focusableElements && focusableElements.length > 0) {
            if (!document.activeElement) {
              focusableElements[0].focus();
            } else {
              var focusedIndex = focusableElements.indexOf(document.activeElement);

              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) {
                  if (this.focusTrap) {
                    focusableElements[focusableElements.length - 1].focus();
                  } else {
                    if (focusedIndex === -1) return this.hideOverlay();else if (focusedIndex === 0) return;
                  }
                } else {
                  focusableElements[focusedIndex - 1].focus();
                }
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) {
                  if (!this.focusTrap && focusedIndex != -1) return this.hideOverlay();else focusableElements[0].focus();
                } else {
                  focusableElements[focusedIndex + 1].focus();
                }
              }
            }
          }

          event.preventDefault();
        }
      }, {
        key: "onMonthDropdownChange",
        value: function onMonthDropdownChange(m) {
          this.currentMonth = parseInt(m);
          this.onMonthChange.emit({
            month: this.currentMonth + 1,
            year: this.currentYear
          });
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }, {
        key: "onYearDropdownChange",
        value: function onYearDropdownChange(y) {
          this.currentYear = parseInt(y);
          this.onYearChange.emit({
            month: this.currentMonth + 1,
            year: this.currentYear
          });
          this.createMonths(this.currentMonth, this.currentYear);
        }
      }, {
        key: "validateTime",
        value: function validateTime(hour, minute, second, pm) {
          var value = this.value;
          var convertedHour = this.convertTo24Hour(hour, pm);

          if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
          }

          if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
          }

          var valueDateString = value ? value.toDateString() : null;

          if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
            if (this.minDate.getHours() > convertedHour) {
              return false;
            }

            if (this.minDate.getHours() === convertedHour) {
              if (this.minDate.getMinutes() > minute) {
                return false;
              }

              if (this.minDate.getMinutes() === minute) {
                if (this.minDate.getSeconds() > second) {
                  return false;
                }
              }
            }
          }

          if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
            if (this.maxDate.getHours() < convertedHour) {
              return false;
            }

            if (this.maxDate.getHours() === convertedHour) {
              if (this.maxDate.getMinutes() < minute) {
                return false;
              }

              if (this.maxDate.getMinutes() === minute) {
                if (this.maxDate.getSeconds() < second) {
                  return false;
                }
              }
            }
          }

          return true;
        }
      }, {
        key: "incrementHour",
        value: function incrementHour(event) {
          var prevHour = this.currentHour;
          var newHour = this.currentHour + this.stepHour;
          var newPM = this.pm;
          if (this.hourFormat == '24') newHour = newHour >= 24 ? newHour - 24 : newHour;else if (this.hourFormat == '12') {
            // Before the AM/PM break, now after
            if (prevHour < 12 && newHour > 11) {
              newPM = !this.pm;
            }

            newHour = newHour >= 13 ? newHour - 12 : newHour;
          }

          if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
            this.currentHour = newHour;
            this.pm = newPM;
          }

          event.preventDefault();
        }
      }, {
        key: "onTimePickerElementMouseDown",
        value: function onTimePickerElementMouseDown(event, type, direction) {
          if (!this.disabled) {
            this.repeat(event, null, type, direction);
            event.preventDefault();
          }
        }
      }, {
        key: "onTimePickerElementMouseUp",
        value: function onTimePickerElementMouseUp(event) {
          if (!this.disabled) {
            this.clearTimePickerTimer();
            this.updateTime();
          }
        }
      }, {
        key: "onTimePickerElementMouseOut",
        value: function onTimePickerElementMouseOut(event) {
          if (!this.disabled && this.timePickerTimer) {
            this.clearTimePickerTimer();
            this.updateTime();
          }
        }
      }, {
        key: "repeat",
        value: function repeat(event, interval, type, direction) {
          var _this7 = this;

          var i = interval || 500;
          this.clearTimePickerTimer();
          this.timePickerTimer = setTimeout(function () {
            _this7.repeat(event, 100, type, direction);
          }, i);

          switch (type) {
            case 0:
              if (direction === 1) this.incrementHour(event);else this.decrementHour(event);
              break;

            case 1:
              if (direction === 1) this.incrementMinute(event);else this.decrementMinute(event);
              break;

            case 2:
              if (direction === 1) this.incrementSecond(event);else this.decrementSecond(event);
              break;
          }

          this.updateInputfield();
        }
      }, {
        key: "clearTimePickerTimer",
        value: function clearTimePickerTimer() {
          if (this.timePickerTimer) {
            clearTimeout(this.timePickerTimer);
          }
        }
      }, {
        key: "decrementHour",
        value: function decrementHour(event) {
          var newHour = this.currentHour - this.stepHour;
          var newPM = this.pm;
          if (this.hourFormat == '24') newHour = newHour < 0 ? 24 + newHour : newHour;else if (this.hourFormat == '12') {
            // If we were at noon/midnight, then switch
            if (this.currentHour === 12) {
              newPM = !this.pm;
            }

            newHour = newHour <= 0 ? 12 + newHour : newHour;
          }

          if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
            this.currentHour = newHour;
            this.pm = newPM;
          }

          event.preventDefault();
        }
      }, {
        key: "incrementMinute",
        value: function incrementMinute(event) {
          var newMinute = this.currentMinute + this.stepMinute;
          newMinute = newMinute > 59 ? newMinute - 60 : newMinute;

          if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
            this.currentMinute = newMinute;
          }

          event.preventDefault();
        }
      }, {
        key: "decrementMinute",
        value: function decrementMinute(event) {
          var newMinute = this.currentMinute - this.stepMinute;
          newMinute = newMinute < 0 ? 60 + newMinute : newMinute;

          if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
            this.currentMinute = newMinute;
          }

          event.preventDefault();
        }
      }, {
        key: "incrementSecond",
        value: function incrementSecond(event) {
          var newSecond = this.currentSecond + this.stepSecond;
          newSecond = newSecond > 59 ? newSecond - 60 : newSecond;

          if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
            this.currentSecond = newSecond;
          }

          event.preventDefault();
        }
      }, {
        key: "decrementSecond",
        value: function decrementSecond(event) {
          var newSecond = this.currentSecond - this.stepSecond;
          newSecond = newSecond < 0 ? 60 + newSecond : newSecond;

          if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
            this.currentSecond = newSecond;
          }

          event.preventDefault();
        }
      }, {
        key: "updateTime",
        value: function updateTime() {
          var value = this.value;

          if (this.isRangeSelection()) {
            value = this.value[1] || this.value[0];
          }

          if (this.isMultipleSelection()) {
            value = this.value[this.value.length - 1];
          }

          value = value ? new Date(value.getTime()) : new Date();

          if (this.hourFormat == '12') {
            if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
          } else {
            value.setHours(this.currentHour);
          }

          value.setMinutes(this.currentMinute);
          value.setSeconds(this.currentSecond);

          if (this.isRangeSelection()) {
            if (this.value[1]) value = [this.value[0], value];else value = [value, null];
          }

          if (this.isMultipleSelection()) {
            value = [].concat(_toConsumableArray(this.value.slice(0, -1)), [value]);
          }

          this.updateModel(value);
          this.onSelect.emit(value);
          this.updateInputfield();
        }
      }, {
        key: "toggleAMPM",
        value: function toggleAMPM(event) {
          var newPM = !this.pm;

          if (this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, newPM)) {
            this.pm = newPM;
            this.updateTime();
          }

          event.preventDefault();
        }
      }, {
        key: "onUserInput",
        value: function onUserInput(event) {
          // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
          if (!this.isKeydown) {
            return;
          }

          this.isKeydown = false;
          var val = event.target.value;

          try {
            var value = this.parseValueFromString(val);

            if (this.isValidSelection(value)) {
              this.updateModel(value);
              this.updateUI();
            }
          } catch (err) {
            //invalid date
            this.updateModel(null);
          }

          this.filled = val != null && val.length;
          this.onInput.emit(event);
        }
      }, {
        key: "isValidSelection",
        value: function isValidSelection(value) {
          var _this8 = this;

          var isValid = true;

          if (this.isSingleSelection()) {
            if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
              isValid = false;
            }
          } else if (value.every(function (v) {
            return _this8.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false);
          })) {
            if (this.isRangeSelection()) {
              isValid = value.length > 1 && value[1] > value[0] ? true : false;
            }
          }

          return isValid;
        }
      }, {
        key: "parseValueFromString",
        value: function parseValueFromString(text) {
          if (!text || text.trim().length === 0) {
            return null;
          }

          var value;

          if (this.isSingleSelection()) {
            value = this.parseDateTime(text);
          } else if (this.isMultipleSelection()) {
            var tokens = text.split(this.multipleSeparator);
            value = [];

            var _iterator3 = _createForOfIteratorHelper(tokens),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var token = _step3.value;
                value.push(this.parseDateTime(token.trim()));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else if (this.isRangeSelection()) {
            var _tokens = text.split(' ' + this.rangeSeparator + ' ');

            value = [];

            for (var i = 0; i < _tokens.length; i++) {
              value[i] = this.parseDateTime(_tokens[i].trim());
            }
          }

          return value;
        }
      }, {
        key: "parseDateTime",
        value: function parseDateTime(text) {
          var date;
          var parts = text.split(' ');

          if (this.timeOnly) {
            date = new Date();
            this.populateTime(date, parts[0], parts[1]);
          } else {
            var dateFormat = this.getDateFormat();

            if (this.showTime) {
              var ampm = this.hourFormat == '12' ? parts.pop() : null;
              var timeString = parts.pop();
              date = this.parseDate(parts.join(' '), dateFormat);
              this.populateTime(date, timeString, ampm);
            } else {
              date = this.parseDate(text, dateFormat);
            }
          }

          return date;
        }
      }, {
        key: "populateTime",
        value: function populateTime(value, timeString, ampm) {
          if (this.hourFormat == '12' && !ampm) {
            throw 'Invalid Time';
          }

          this.pm = ampm === 'PM' || ampm === 'pm';
          var time = this.parseTime(timeString);
          value.setHours(time.hour);
          value.setMinutes(time.minute);
          value.setSeconds(time.second);
        }
      }, {
        key: "updateUI",
        value: function updateUI() {
          var val = this.value || this.defaultDate || new Date();

          if (Array.isArray(val)) {
            val = val[0];
          }

          this.currentMonth = val.getMonth();
          this.currentYear = val.getFullYear();
          this.createMonths(this.currentMonth, this.currentYear);

          if (this.showTime || this.timeOnly) {
            this.setCurrentHourPM(val.getHours());
            this.currentMinute = val.getMinutes();
            this.currentSecond = val.getSeconds();
          }
        }
      }, {
        key: "showOverlay",
        value: function showOverlay() {
          if (!this.overlayVisible) {
            this.updateUI();
            this.overlayVisible = true;
          }
        }
      }, {
        key: "hideOverlay",
        value: function hideOverlay() {
          this.overlayVisible = false;
          this.clearTimePickerTimer();

          if (this.touchUI) {
            this.disableModality();
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.inline) {
            if (!this.overlayVisible) {
              this.showOverlay();
              this.inputfieldViewChild.nativeElement.focus();
            } else {
              this.hideOverlay();
            }
          }
        }
      }, {
        key: "onOverlayAnimationStart",
        value: function onOverlayAnimationStart(event) {
          switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
              if (!this.inline) {
                this.overlay = event.element;
                this.appendOverlay();

                if (this.autoZIndex) {
                  this.overlay.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
                }

                this.alignOverlay();
                this.onShow.emit(event);
              }

              break;

            case 'void':
              this.onOverlayHide();
              this.onClose.emit(event);
              break;
          }
        }
      }, {
        key: "onOverlayAnimationDone",
        value: function onOverlayAnimationDone(event) {
          switch (event.toState) {
            case 'visible':
            case 'visibleTouchUI':
              if (!this.inline) {
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
              }

              break;
          }
        }
      }, {
        key: "appendOverlay",
        value: function appendOverlay() {
          if (this.appendTo) {
            if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].appendChild(this.overlay, this.appendTo);
          }
        }
      }, {
        key: "restoreOverlayAppend",
        value: function restoreOverlayAppend() {
          if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
          }
        }
      }, {
        key: "alignOverlay",
        value: function alignOverlay() {
          if (this.touchUI) {
            this.enableModality(this.overlay);
          } else {
            if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].absolutePosition(this.overlay, this.inputfieldViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].relativePosition(this.overlay, this.inputfieldViewChild.nativeElement);
          }
        }
      }, {
        key: "enableModality",
        value: function enableModality(element) {
          var _this9 = this;

          if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(element.style.zIndex) - 1);
            var maskStyleClass = 'ui-widget-overlay ui-datepicker-mask ui-datepicker-mask-scrollblocker';
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addMultipleClasses(this.mask, maskStyleClass);
            this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
              _this9.disableModality();
            });
            document.body.appendChild(this.mask);
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'ui-overflow-hidden');
          }
        }
      }, {
        key: "disableModality",
        value: function disableModality() {
          if (this.mask) {
            document.body.removeChild(this.mask);
            var bodyChildren = document.body.children;
            var hasBlockerMasks;

            for (var i = 0; i < bodyChildren.length; i++) {
              var bodyChild = bodyChildren[i];

              if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(bodyChild, 'ui-datepicker-mask-scrollblocker')) {
                hasBlockerMasks = true;
                break;
              }
            }

            if (!hasBlockerMasks) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'ui-overflow-hidden');
            }

            this.unbindMaskClickListener();
            this.mask = null;
          }
        }
      }, {
        key: "unbindMaskClickListener",
        value: function unbindMaskClickListener() {
          if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          if (this.value && typeof this.value === 'string') {
            this.value = this.parseValueFromString(this.value);
          }

          this.updateInputfield();
          this.updateUI();
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
      }, {
        key: "getDateFormat",
        value: function getDateFormat() {
          return this.dateFormat || this.locale.dateFormat;
        } // Ported from jquery-ui datepicker formatDate

      }, {
        key: "formatDate",
        value: function formatDate(date, format) {
          if (!date) {
            return '';
          }

          var iFormat;

          var lookAhead = function lookAhead(match) {
            var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

            if (matches) {
              iFormat++;
            }

            return matches;
          },
              formatNumber = function formatNumber(match, value, len) {
            var num = '' + value;

            if (lookAhead(match)) {
              while (num.length < len) {
                num = '0' + num;
              }
            }

            return num;
          },
              formatName = function formatName(match, value, shortNames, longNames) {
            return lookAhead(match) ? longNames[value] : shortNames[value];
          };

          var output = '';
          var literal = false;

          if (date) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
              if (literal) {
                if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                  literal = false;
                } else {
                  output += format.charAt(iFormat);
                }
              } else {
                switch (format.charAt(iFormat)) {
                  case 'd':
                    output += formatNumber('d', date.getDate(), 2);
                    break;

                  case 'D':
                    output += formatName('D', date.getDay(), this.locale.dayNamesShort, this.locale.dayNames);
                    break;

                  case 'o':
                    output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                    break;

                  case 'm':
                    output += formatNumber('m', date.getMonth() + 1, 2);
                    break;

                  case 'M':
                    output += formatName('M', date.getMonth(), this.locale.monthNamesShort, this.locale.monthNames);
                    break;

                  case 'y':
                    output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
                    break;

                  case '@':
                    output += date.getTime();
                    break;

                  case '!':
                    output += date.getTime() * 10000 + this.ticksTo1970;
                    break;

                  case '\'':
                    if (lookAhead('\'')) {
                      output += '\'';
                    } else {
                      literal = true;
                    }

                    break;

                  default:
                    output += format.charAt(iFormat);
                }
              }
            }
          }

          return output;
        }
      }, {
        key: "formatTime",
        value: function formatTime(date) {
          if (!date) {
            return '';
          }

          var output = '';
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var seconds = date.getSeconds();

          if (this.hourFormat == '12' && hours > 11 && hours != 12) {
            hours -= 12;
          }

          if (this.hourFormat == '12') {
            output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
          } else {
            output += hours < 10 ? '0' + hours : hours;
          }

          output += ':';
          output += minutes < 10 ? '0' + minutes : minutes;

          if (this.showSeconds) {
            output += ':';
            output += seconds < 10 ? '0' + seconds : seconds;
          }

          if (this.hourFormat == '12') {
            output += date.getHours() > 11 ? ' PM' : ' AM';
          }

          return output;
        }
      }, {
        key: "parseTime",
        value: function parseTime(value) {
          var tokens = value.split(':');
          var validTokenLength = this.showSeconds ? 3 : 2;

          if (tokens.length !== validTokenLength) {
            throw "Invalid time";
          }

          var h = parseInt(tokens[0]);
          var m = parseInt(tokens[1]);
          var s = this.showSeconds ? parseInt(tokens[2]) : null;

          if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == '12' && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
            throw "Invalid time";
          } else {
            if (this.hourFormat == '12') {
              if (h !== 12 && this.pm) {
                h += 12;
              } else if (!this.pm && h === 12) {
                h -= 12;
              }
            }

            return {
              hour: h,
              minute: m,
              second: s
            };
          }
        } // Ported from jquery-ui datepicker parseDate

      }, {
        key: "parseDate",
        value: function parseDate(value, format) {
          if (format == null || value == null) {
            throw "Invalid arguments";
          }

          value = typeof value === "object" ? value.toString() : value + "";

          if (value === "") {
            return null;
          }

          var iFormat,
              dim,
              extra,
              iValue = 0,
              shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10),
              year = -1,
              month = -1,
              day = -1,
              doy = -1,
              literal = false,
              date,
              lookAhead = function lookAhead(match) {
            var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

            if (matches) {
              iFormat++;
            }

            return matches;
          },
              getNumber = function getNumber(match) {
            var isDoubled = lookAhead(match),
                size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2,
                minSize = match === "y" ? size : 1,
                digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                num = value.substring(iValue).match(digits);

            if (!num) {
              throw "Missing number at position " + iValue;
            }

            iValue += num[0].length;
            return parseInt(num[0], 10);
          },
              getName = function getName(match, shortNames, longNames) {
            var index = -1;
            var arr = lookAhead(match) ? longNames : shortNames;
            var names = [];

            for (var i = 0; i < arr.length; i++) {
              names.push([i, arr[i]]);
            }

            names.sort(function (a, b) {
              return -(a[1].length - b[1].length);
            });

            for (var _i = 0; _i < names.length; _i++) {
              var name = names[_i][1];

              if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                index = names[_i][0];
                iValue += name.length;
                break;
              }
            }

            if (index !== -1) {
              return index + 1;
            } else {
              throw "Unknown name at position " + iValue;
            }
          },
              checkLiteral = function checkLiteral() {
            if (value.charAt(iValue) !== format.charAt(iFormat)) {
              throw "Unexpected literal at position " + iValue;
            }

            iValue++;
          };

          if (this.view === 'month') {
            day = 1;
          }

          for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
              if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                literal = false;
              } else {
                checkLiteral();
              }
            } else {
              switch (format.charAt(iFormat)) {
                case "d":
                  day = getNumber("d");
                  break;

                case "D":
                  getName("D", this.locale.dayNamesShort, this.locale.dayNames);
                  break;

                case "o":
                  doy = getNumber("o");
                  break;

                case "m":
                  month = getNumber("m");
                  break;

                case "M":
                  month = getName("M", this.locale.monthNamesShort, this.locale.monthNames);
                  break;

                case "y":
                  year = getNumber("y");
                  break;

                case "@":
                  date = new Date(getNumber("@"));
                  year = date.getFullYear();
                  month = date.getMonth() + 1;
                  day = date.getDate();
                  break;

                case "!":
                  date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
                  year = date.getFullYear();
                  month = date.getMonth() + 1;
                  day = date.getDate();
                  break;

                case "'":
                  if (lookAhead("'")) {
                    checkLiteral();
                  } else {
                    literal = true;
                  }

                  break;

                default:
                  checkLiteral();
              }
            }
          }

          if (iValue < value.length) {
            extra = value.substr(iValue);

            if (!/^\s+/.test(extra)) {
              throw "Extra/unparsed characters found in date: " + extra;
            }
          }

          if (year === -1) {
            year = new Date().getFullYear();
          } else if (year < 100) {
            year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
          }

          if (doy > -1) {
            month = 1;
            day = doy;

            do {
              dim = this.getDaysCountInMonth(year, month - 1);

              if (day <= dim) {
                break;
              }

              month++;
              day -= dim;
            } while (true);
          }

          date = this.daylightSavingAdjust(new Date(year, month - 1, day));

          if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw "Invalid date"; // E.g. 31/02/00
          }

          return date;
        }
      }, {
        key: "daylightSavingAdjust",
        value: function daylightSavingAdjust(date) {
          if (!date) {
            return null;
          }

          date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
          return date;
        }
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.inputFieldValue && this.inputFieldValue != '';
        }
      }, {
        key: "onTodayButtonClick",
        value: function onTodayButtonClick(event) {
          var date = new Date();
          var dateMeta = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
            today: true,
            selectable: true
          };
          this.onDateSelect(event, dateMeta);
          this.onTodayClick.emit(event);
        }
      }, {
        key: "onClearButtonClick",
        value: function onClearButtonClick(event) {
          this.updateModel(null);
          this.updateInputfield();
          this.hideOverlay();
          this.onClearClick.emit(event);
        }
      }, {
        key: "bindDocumentClickListener",
        value: function bindDocumentClickListener() {
          var _this10 = this;

          if (!this.documentClickListener) {
            this.zone.runOutsideAngular(function () {
              _this10.documentClickListener = _this10.renderer.listen('document', 'click', function (event) {
                if (_this10.isOutsideClicked(event) && _this10.overlayVisible) {
                  _this10.zone.run(function () {
                    _this10.hideOverlay();

                    _this10.onClickOutside.emit(event);

                    _this10.cd.markForCheck();
                  });
                }
              });
            });
          }
        }
      }, {
        key: "unbindDocumentClickListener",
        value: function unbindDocumentClickListener() {
          if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
          }
        }
      }, {
        key: "bindDocumentResizeListener",
        value: function bindDocumentResizeListener() {
          if (!this.documentResizeListener && !this.touchUI) {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
          }
        }
      }, {
        key: "unbindDocumentResizeListener",
        value: function unbindDocumentResizeListener() {
          if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
          }
        }
      }, {
        key: "isOutsideClicked",
        value: function isOutsideClicked(event) {
          return !(this.el.nativeElement.isSameNode(event.target) || this.isNavIconClicked(event) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
        }
      }, {
        key: "isNavIconClicked",
        value: function isNavIconClicked(event) {
          return primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-datepicker-prev') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-datepicker-prev-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-datepicker-next') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-datepicker-next-icon');
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].isAndroid()) {
            this.hideOverlay();
          }
        }
      }, {
        key: "onOverlayHide",
        value: function onOverlayHide() {
          this.unbindDocumentClickListener();
          this.unbindMaskClickListener();
          this.unbindDocumentResizeListener();
          this.overlay = null;
          this.disableModality();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clearTimePickerTimer();
          this.restoreOverlayAppend();
          this.onOverlayHide();
        }
      }]);
    }();

    Calendar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], Calendar.prototype, "defaultDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Calendar.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "styleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Calendar.prototype, "inputStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "inputId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "inputStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "ariaLabelledBy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Calendar.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "dateFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "multipleSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "rangeSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "inline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "showOtherMonths", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "selectOtherMonths", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "showIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Calendar.prototype, "appendTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "readonlyInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Calendar.prototype, "shortYearCutoff", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "monthNavigator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "yearNavigator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "hourFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "timeOnly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Calendar.prototype, "stepHour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Calendar.prototype, "stepMinute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Calendar.prototype, "stepSecond", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "showSeconds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "required", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "showOnFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "showWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "dataType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "selectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Calendar.prototype, "maxDateCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "showButtonBar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "todayButtonStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "clearButtonStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "autoZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Calendar.prototype, "baseZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "panelStyleClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Calendar.prototype, "panelStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "keepInvalid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "hideOnDateTimeSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Calendar.prototype, "numberOfMonths", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "view", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "touchUI", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "timeSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Calendar.prototype, "focusTrap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "showTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], Calendar.prototype, "hideTransitionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onTodayClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onClearClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onMonthChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onYearChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onClickOutside", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Calendar.prototype, "onShow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], Calendar.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], Calendar.prototype, "tabindex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputfield', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Calendar.prototype, "inputfieldViewChild", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentWrapper', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], Calendar.prototype, "content", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Date])], Calendar.prototype, "minDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Date])], Calendar.prototype, "maxDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], Calendar.prototype, "disabledDates", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], Calendar.prototype, "disabledDays", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], Calendar.prototype, "yearRange", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], Calendar.prototype, "showTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], Calendar.prototype, "locale", null);
    Calendar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'p-calendar',
      template: "\n        <span [ngClass]=\"{'ui-calendar':true, 'ui-calendar-w-btn': showIcon, 'ui-calendar-timeonly': timeOnly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-template [ngIf]=\"!inline\">\n                <input #inputfield type=\"text\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.required]=\"required\" [attr.aria-required]=\"required\" [value]=\"inputFieldValue\" (focus)=\"onInputFocus($event)\" (keydown)=\"onInputKeydown($event)\" (click)=\"onInputClick()\" (blur)=\"onInputBlur($event)\"\n                    [readonly]=\"readonlyInput\" (input)=\"onUserInput($event)\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [placeholder]=\"placeholder||''\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\"\n                    [ngClass]=\"'ui-inputtext ui-widget ui-state-default ui-corner-all'\" autocomplete=\"off\" [attr.aria-labelledby]=\"ariaLabelledBy\"\n                    ><button type=\"button\" [icon]=\"icon\" pButton *ngIf=\"showIcon\" (click)=\"onButtonClick($event,inputfield)\" class=\"ui-datepicker-trigger ui-calendar-button\"\n                    [ngClass]=\"{'ui-state-disabled':disabled}\" [disabled]=\"disabled\" tabindex=\"0\"></button>\n            </ng-template>\n            <div #contentWrapper [class]=\"panelStyleClass\" [ngStyle]=\"panelStyle\" [ngClass]=\"{'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all': true, 'ui-datepicker-inline':inline,'ui-shadow':!inline,\n                'ui-state-disabled':disabled,'ui-datepicker-timeonly':timeOnly,'ui-datepicker-multiple-month': this.numberOfMonths > 1, 'ui-datepicker-monthpicker': (view === 'month'), 'ui-datepicker-touch-ui': touchUI}\"\n                [@overlayAnimation]=\"touchUI ? {value: 'visibleTouchUI', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}: \n                                            {value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" \n                                            [@.disabled]=\"inline === true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (@overlayAnimation.done)=\"onOverlayAnimationDone($event)\" *ngIf=\"inline || overlayVisible\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngIf=\"!timeOnly\">\n                    <div class=\"ui-datepicker-group ui-widget-content\" *ngFor=\"let month of months; let i = index;\">\n                        <div class=\"ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all\">\n                            <a class=\"ui-datepicker-prev ui-corner-all\" (click)=\"onPrevButtonClick($event)\" (keydown.enter)=\"onPrevButtonClick($event)\" *ngIf=\"i === 0\" tabindex=\"0\" (keydown)=\"onInputKeydown($event)\">\n                                <span class=\"ui-datepicker-prev-icon pi pi-chevron-left\"></span>\n                            </a>\n                            <div class=\"ui-datepicker-title\">\n                                <span class=\"ui-datepicker-month\" *ngIf=\"!monthNavigator && (view !== 'month')\">{{locale.monthNames[month.month]}}</span>\n                                <select tabindex=\"0\" class=\"ui-datepicker-month\" *ngIf=\"monthNavigator && (view !== 'month') && numberOfMonths === 1\" (change)=\"onMonthDropdownChange($event.target.value)\">\n                                    <option [value]=\"i\" *ngFor=\"let monthName of locale.monthNames;let i = index\" [selected]=\"i === month.month\">{{monthName}}</option>\n                                </select>\n                                <select tabindex=\"0\" class=\"ui-datepicker-year\" *ngIf=\"yearNavigator && numberOfMonths === 1\" (change)=\"onYearDropdownChange($event.target.value)\">\n                                    <option [value]=\"year\" *ngFor=\"let year of yearOptions\" [selected]=\"year === currentYear\">{{year}}</option>\n                                </select>\n                                <span class=\"ui-datepicker-year\" *ngIf=\"!yearNavigator\">{{view === 'month' ? currentYear : month.year}}</span>\n                            </div>\n                            <a class=\"ui-datepicker-next ui-corner-all\" (click)=\"onNextButtonClick($event)\" (keydown.enter)=\"onNextButtonClick($event)\" *ngIf=\"numberOfMonths === 1 ? true : (i === numberOfMonths -1)\" tabindex=\"0\" (keydown)=\"onInputKeydown($event)\">\n                                <span class=\"ui-datepicker-next-icon pi pi-chevron-right\"></span>\n                            </a>\n                        </div>\n                        <div class=\"ui-datepicker-calendar-container\" *ngIf=\"view ==='date'\">\n                            <table class=\"ui-datepicker-calendar\">\n                                <thead>\n                                    <tr>\n                                        <th *ngIf=\"showWeek\" class=\"ui-datepicker-weekheader\">\n                                            <span>{{locale['weekHeader']}}</span>\n                                        </th>\n                                        <th scope=\"col\" *ngFor=\"let weekDay of weekDays;let begin = first; let end = last\">\n                                            <span>{{weekDay}}</span>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let week of month.dates; let j = index;\">\n                                        <td *ngIf=\"showWeek\" class=\"ui-datepicker-weeknumber ui-state-disabled\">\n                                            <span>\n                                                {{month.weekNumbers[j]}}\n                                            </span>\n                                        </td>\n                                        <td *ngFor=\"let date of week\" [ngClass]=\"{'ui-datepicker-other-month': date.otherMonth,\n                                            'ui-datepicker-current-day':isSelected(date),'ui-datepicker-today':date.today}\">\n                                            <ng-container *ngIf=\"date.otherMonth ? showOtherMonths : true\">\n                                                <a class=\"ui-state-default\" *ngIf=\"date.selectable\" [ngClass]=\"{'ui-state-active':isSelected(date), 'ui-state-highlight':date.today}\"\n                                                    (click)=\"onDateSelect($event,date)\" draggable=\"false\" (keydown)=\"onDateCellKeydown($event,date,i)\">\n                                                    <ng-container *ngIf=\"!dateTemplate\">{{date.day}}</ng-container>\n                                                    <ng-container *ngTemplateOutlet=\"dateTemplate; context: {$implicit: date}\"></ng-container>\n                                                </a>\n                                                <span class=\"ui-state-default ui-state-disabled\" [ngClass]=\"{'ui-state-active':isSelected(date), 'ui-state-highlight':date.today}\" *ngIf=\"!date.selectable\">\n                                                    <ng-container *ngIf=\"!disabledDateTemplate\">{{date.day}}</ng-container>\n                                                    <ng-container *ngTemplateOutlet=\"disabledDateTemplate; context: {$implicit: date}\"></ng-container>\n                                                </span>\n                                            </ng-container>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"ui-monthpicker\" *ngIf=\"view === 'month'\">\n                        <a  *ngFor=\"let m of monthPickerValues; let i = index\" (click)=\"onMonthSelect($event, i)\" (keydown)=\"onMonthCellKeydown($event,i)\" class=\"ui-monthpicker-month\" [ngClass]=\"{'ui-state-active': isMonthSelected(i), 'ui-state-disabled':!isSelectable(1, i, this.currentYear, false)}\">\n                            {{m}}\n                        </a>\n                    </div>\n                </ng-container>\n                <div class=\"ui-timepicker ui-widget-header ui-corner-all\" *ngIf=\"showTime||timeOnly\">\n                    <div class=\"ui-hour-picker\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementHour($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentHour < 10 ? 'inline': 'none'}\">0</span><span>{{currentHour}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementHour($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 0, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-separator\">\n                        <a>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{timeSeparator}}</span>\n                        <a>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-minute-picker\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementMinute($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentMinute < 10 ? 'inline': 'none'}\">0</span><span>{{currentMinute}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementMinute($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 1, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-separator\" *ngIf=\"showSeconds\">\n                        <a>\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{timeSeparator}}</span>\n                        <a>\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-second-picker\" *ngIf=\"showSeconds\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"incrementSecond($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, 1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentSecond < 10 ? 'inline': 'none'}\">0</span><span>{{currentSecond}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (keydown.enter)=\"decrementSecond($event)\" (mousedown)=\"onTimePickerElementMouseDown($event, 2, -1)\" (mouseup)=\"onTimePickerElementMouseUp($event)\" (mouseout)=\"onTimePickerElementMouseOut($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-ampm-picker\" *ngIf=\"hourFormat=='12'\">\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"toggleAMPM($event)\" (keydown.enter)=\"toggleAMPM($event)\">\n                            <span class=\"pi pi-chevron-up\"></span>\n                        </a>\n                        <span>{{pm ? 'PM' : 'AM'}}</span>\n                        <a tabindex=\"0\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"toggleAMPM($event)\" (keydown.enter)=\"toggleAMPM($event)\">\n                            <span class=\"pi pi-chevron-down\"></span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"ui-datepicker-buttonbar ui-widget-header\" *ngIf=\"showButtonBar\">\n                    <button type=\"button\" tabindex=\"0\" [label]=\"_locale.today\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"onTodayButtonClick($event)\" pButton [ngClass]=\"[todayButtonStyleClass]\"></button>\n                    <button type=\"button\" tabindex=\"0\" [label]=\"_locale.clear\" (keydown)=\"onContainerButtonKeydown($event)\" (click)=\"onClearButtonClick($event)\" pButton [ngClass]=\"[clearButtonStyleClass]\"></button>\n                </div>\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </span>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visibleTouchUI', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate(-50%,-50%)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(5%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: 'translateY(5%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visibleTouchUI', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visibleTouchUI => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
      }))])])],
      host: {
        '[class.ui-inputwrapper-filled]': 'filled',
        '[class.ui-inputwrapper-focus]': 'focus'
      },
      providers: [CALENDAR_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], Calendar);

    var CalendarModule = /*#__PURE__*/_createClass(function CalendarModule() {
      _classCallCheck(this, CalendarModule);
    });

    CalendarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      exports: [Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      declarations: [Calendar]
    })], CalendarModule);
    /***/
  },

  /***/
  "./src/app/components/calendar/public_api.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/calendar/public_api.ts ***!
    \***************************************************/

  /*! exports provided: CALENDAR_VALUE_ACCESSOR, Calendar, CalendarModule */

  /***/
  function _src_app_components_calendar_public_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./calendar */
    "./src/app/components/calendar/calendar.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CALENDAR_VALUE_ACCESSOR", function () {
      return _calendar__WEBPACK_IMPORTED_MODULE_0__["CALENDAR_VALUE_ACCESSOR"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Calendar", function () {
      return _calendar__WEBPACK_IMPORTED_MODULE_0__["Calendar"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return _calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=default~components-calendar-calendardemo-module~components-focustrap-focustrapdemo-module~components~56b148f5-es5.js.map