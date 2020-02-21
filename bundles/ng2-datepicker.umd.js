(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('ngx-slimscroll'), require('date-fns')) :
    typeof define === 'function' && define.amd ? define('ng2-datepicker', ['@angular/core', '@angular/common', '@angular/forms', 'ngx-slimscroll', 'date-fns'], factory) :
    (global = global || self, global['ng2-datepicker'] = factory(global.ng.core, global.ng.common, global.ng.forms, global.ngxSlimscroll, global.dateFns));
}(this, (function (core, common, forms, ngxSlimscroll, dateFns) { 'use strict';

    core = core && core.hasOwnProperty('default') ? core['default'] : core;
    common = common && common.hasOwnProperty('default') ? common['default'] : common;
    forms = forms && forms.hasOwnProperty('default') ? forms['default'] : forms;
    ngxSlimscroll = ngxSlimscroll && ngxSlimscroll.hasOwnProperty('default') ? ngxSlimscroll['default'] : ngxSlimscroll;
    dateFns = dateFns && dateFns.hasOwnProperty('default') ? dateFns['default'] : dateFns;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var ngDatepicker_component = createCommonjsModule(function (module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });



    var i0 = core;

    var i2 = forms;

    function NgDatepickerComponent_input_1_Template(rf, ctx) { if (rf & 1) {
        var _r26 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "input", 3);
        i0.ɵɵlistener("ngModelChange", function NgDatepickerComponent_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r26); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.displayValue = $event; })("click", function NgDatepickerComponent_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r26); var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.toggle(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r23 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngModel", ctx_r23.displayValue)("placeholder", ctx_r23.placeholder)("ngClass", ctx_r23.addClass)("ngStyle", ctx_r23.addStyle)("id", ctx_r23.fieldId)("disabled", ctx_r23.disabled);
    } }
    function NgDatepickerComponent_div_3_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 29);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var name_r32 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(name_r32);
    } }
    var _c0 = function (a0, a1, a2, a3) { return { "is-prev-month": a0, "is-today": a1, "is-selected": a2, "is-disabled": a3 }; };
    function NgDatepickerComponent_div_3_div_22_span_4_Template(rf, ctx) { if (rf & 1) {
        var _r36 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "span", 30);
        i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_div_22_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r36); var day_r33 = ctx.$implicit; var i_r34 = ctx.index; var ctx_r35 = i0.ɵɵnextContext(3); return day_r33.isSelectable && ctx_r35.setDate(i_r34); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var day_r33 = ctx.$implicit;
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(2, _c0, !day_r33.inThisMonth, day_r33.isToday, day_r33.isSelected, !day_r33.isSelectable));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", day_r33.day, " ");
    } }
    function NgDatepickerComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(0, "div", 24);
        i0.ɵɵelementStart(1, "div", 25);
        i0.ɵɵtemplate(2, NgDatepickerComponent_div_3_div_22_span_2_Template, 2, 1, "span", 26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 27);
        i0.ɵɵtemplate(4, NgDatepickerComponent_div_3_div_22_span_4_Template, 2, 7, "span", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r28 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r28.dayNames);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r28.days);
    } }
    var _c1 = function (a0) { return { "is-selected": a0 }; };
    function NgDatepickerComponent_div_3_div_23_span_2_Template(rf, ctx) { if (rf & 1) {
        var _r41 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "span", 33);
        i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_div_23_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r41); var i_r39 = ctx.index; var ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.setYear(i_r39); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var year_r38 = ctx.$implicit;
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c1, year_r38.isThisYear));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(year_r38.year);
    } }
    function NgDatepickerComponent_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(0, "div", 24);
        i0.ɵɵelementStart(1, "div", 31);
        i0.ɵɵtemplate(2, NgDatepickerComponent_div_3_div_23_span_2_Template, 2, 4, "span", 32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r29 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("options", ctx_r29.scrollOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r29.years);
    } }
    function NgDatepickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r43 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 4);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 5);
        i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_Template__svg_svg_click_2_listener($event) { i0.ɵɵrestoreView(_r43); var ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.prevMonth(); });
        i0.ɵɵelementStart(3, "g", 6);
        i0.ɵɵelementStart(4, "g", 7);
        i0.ɵɵelementStart(5, "g", 8);
        i0.ɵɵelementStart(6, "g", 9);
        i0.ɵɵelementStart(7, "g", 10);
        i0.ɵɵelementStart(8, "g", 11);
        i0.ɵɵelementStart(9, "g", 12);
        i0.ɵɵelement(10, "polygon", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(11, "span", 14);
        i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_Template_span_click_11_listener($event) { i0.ɵɵrestoreView(_r43); var ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.toggleView(); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(13, "svg", 15);
        i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_Template__svg_svg_click_13_listener($event) { i0.ɵɵrestoreView(_r43); var ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.nextMonth(); });
        i0.ɵɵelementStart(14, "g", 16);
        i0.ɵɵelementStart(15, "g", 17);
        i0.ɵɵelementStart(16, "g", 18);
        i0.ɵɵelementStart(17, "g", 19);
        i0.ɵɵelementStart(18, "g", 20);
        i0.ɵɵelementStart(19, "g", 21);
        i0.ɵɵelementStart(20, "g", 12);
        i0.ɵɵelement(21, "polygon", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(22, NgDatepickerComponent_div_3_div_22_Template, 5, 2, "div", 23);
        i0.ɵɵtemplate(23, NgDatepickerComponent_div_3_div_23_Template, 3, 2, "div", 23);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r24 = i0.ɵɵnextContext();
        i0.ɵɵclassMapInterpolate1("ngx-datepicker-calendar-container ngx-datepicker-position-", ctx_r24.position, "");
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate(ctx_r24.barTitle);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngIf", ctx_r24.view === "days");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r24.view === "years");
    } }
    var _c2 = ["*"];
    // Counter for calculating the auto-incrementing field ID
    var counter = 0;
    /**
     * Internal library helper that helps to check if value is empty
     * @param value
     */
    var isNil = function (value) {
        return (typeof value === 'undefined') || (value === null);
    };
    var NgDatepickerComponent = /** @class */ (function () {
        function NgDatepickerComponent(elementRef) {
            this.elementRef = elementRef;
            /**
             * Disable datepicker's input
             */
            this.headless = false;
            /**
             * Set datepicker's visibility state
             */
            this.isOpened = false;
            /**
             * Datepicker dropdown position
             */
            this.position = 'bottom-right';
            this.positions = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
            this.onTouchedCallback = function () { };
            this.onChangeCallback = function () { };
            this.scrollOptions = {
                barBackground: '#DFE3E9',
                gridBackground: '#FFFFFF',
                barBorderRadius: '3',
                gridBorderRadius: '3',
                barWidth: '6',
                gridWidth: '6',
                barMargin: '0',
                gridMargin: '0'
            };
        }
        NgDatepickerComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        Object.defineProperty(NgDatepickerComponent.prototype, "value", {
            get: function () {
                return this.innerValue;
            },
            set: function (val) {
                this.innerValue = val;
                this.onChangeCallback(this.innerValue);
            },
            enumerable: true,
            configurable: true
        });
        NgDatepickerComponent.prototype.ngOnInit = function () {
            this.view = 'days';
            this.date = new Date();
            this.setOptions();
            this.initDayNames();
            this.initYears();
            // Check if 'position' property is correct
            if (this.positions.indexOf(this.position) === -1) {
                throw new TypeError("ng-datepicker: invalid position property value '" + this.position + "' (expected: " + this.positions.join(', ') + ")");
            }
        };
        NgDatepickerComponent.prototype.ngOnChanges = function (changes) {
            if ('options' in changes) {
                this.setOptions();
                this.initDayNames();
                this.init();
                this.initYears();
            }
        };
        Object.defineProperty(NgDatepickerComponent.prototype, "defaultFieldId", {
            get: function () {
                // Only evaluate and increment if required
                var value = "datepicker-" + counter++;
                Object.defineProperty(this, 'defaultFieldId', { value: value });
                return value;
            },
            enumerable: true,
            configurable: true
        });
        NgDatepickerComponent.prototype.setOptions = function () {
            var today = new Date(); // this const was added because during my tests, I noticed that at this level this.date is undefined
            this.minYear = this.options && this.options.minYear || dateFns.getYear(today) - 30;
            this.maxYear = this.options && this.options.maxYear || dateFns.getYear(today) + 30;
            this.displayFormat = this.options && this.options.displayFormat || 'MMM D[,] YYYY';
            this.barTitleFormat = this.options && this.options.barTitleFormat || 'MMMM YYYY';
            this.dayNamesFormat = this.options && this.options.dayNamesFormat || 'ddd';
            this.barTitleIfEmpty = this.options && this.options.barTitleIfEmpty || 'Click to select a date';
            this.firstCalendarDay = this.options && this.options.firstCalendarDay || 0;
            this.locale = this.options && { locale: this.options.locale } || {};
            this.placeholder = this.options && this.options.placeholder || '';
            this.addClass = this.options && this.options.addClass || {};
            this.addStyle = this.options && this.options.addStyle || {};
            this.fieldId = this.options && this.options.fieldId || this.defaultFieldId;
            this.useEmptyBarTitle = this.options && 'useEmptyBarTitle' in this.options ? this.options.useEmptyBarTitle : true;
        };
        NgDatepickerComponent.prototype.nextMonth = function () {
            this.date = dateFns.addMonths(this.date, 1);
            this.init();
        };
        NgDatepickerComponent.prototype.prevMonth = function () {
            this.date = dateFns.subMonths(this.date, 1);
            this.init();
        };
        NgDatepickerComponent.prototype.setDate = function (i) {
            this.date = this.days[i].date;
            this.value = this.date;
            this.init();
            this.close();
        };
        NgDatepickerComponent.prototype.setYear = function (i) {
            this.date = dateFns.setYear(this.date, this.years[i].year);
            this.init();
            this.initYears();
            this.view = 'days';
        };
        /**
         * Checks if specified date is in range of min and max dates
         * @param date
         */
        NgDatepickerComponent.prototype.isDateSelectable = function (date) {
            if (isNil(this.options)) {
                return true;
            }
            var minDateSet = !isNil(this.options.minDate);
            var maxDateSet = !isNil(this.options.maxDate);
            var timestamp = date.valueOf();
            if (minDateSet && (timestamp < this.options.minDate.valueOf())) {
                return false;
            }
            if (maxDateSet && (timestamp > this.options.maxDate.valueOf())) {
                return false;
            }
            return true;
        };
        NgDatepickerComponent.prototype.init = function () {
            var _this = this;
            // this.date may be null after .reset(); fall back to current date.
            var actualDate = this.date || new Date();
            var start = dateFns.startOfMonth(actualDate);
            var end = dateFns.endOfMonth(actualDate);
            this.days = dateFns.eachDay(start, end).map(function (date) {
                return {
                    date: date,
                    day: dateFns.getDate(date),
                    month: dateFns.getMonth(date),
                    year: dateFns.getYear(date),
                    inThisMonth: true,
                    isToday: dateFns.isToday(date),
                    isSelected: dateFns.isSameDay(date, _this.innerValue) && dateFns.isSameMonth(date, _this.innerValue) && dateFns.isSameYear(date, _this.innerValue),
                    isSelectable: _this.isDateSelectable(date)
                };
            });
            var tmp = dateFns.getDay(start) - this.firstCalendarDay;
            var prevDays = tmp < 0 ? 7 - this.firstCalendarDay : tmp;
            for (var i = 1; i <= prevDays; i++) {
                var date = dateFns.subDays(start, i);
                this.days.unshift({
                    date: date,
                    day: dateFns.getDate(date),
                    month: dateFns.getMonth(date),
                    year: dateFns.getYear(date),
                    inThisMonth: false,
                    isToday: dateFns.isToday(date),
                    isSelected: dateFns.isSameDay(date, this.innerValue) && dateFns.isSameMonth(date, this.innerValue) && dateFns.isSameYear(date, this.innerValue),
                    isSelectable: this.isDateSelectable(date)
                });
            }
            if (this.innerValue) {
                this.displayValue = dateFns.format(this.innerValue, this.displayFormat, this.locale);
                this.barTitle = dateFns.format(start, this.barTitleFormat, this.locale);
            }
            else {
                this.displayValue = '';
                this.barTitle = this.useEmptyBarTitle ? this.barTitleIfEmpty : dateFns.format(start, this.barTitleFormat, this.locale);
            }
        };
        NgDatepickerComponent.prototype.initYears = function () {
            var _this = this;
            var range = this.maxYear - this.minYear;
            this.years = Array.from(new Array(range), function (x, i) { return i + _this.minYear; }).map(function (year) {
                return { year: year, isThisYear: year === dateFns.getYear(_this.date) };
            });
        };
        NgDatepickerComponent.prototype.initDayNames = function () {
            this.dayNames = [];
            var start = this.firstCalendarDay;
            for (var i = start; i <= 6 + start; i++) {
                var date = dateFns.setDay(new Date(), i);
                this.dayNames.push(dateFns.format(date, this.dayNamesFormat, this.locale));
            }
        };
        NgDatepickerComponent.prototype.toggleView = function () {
            this.view = this.view === 'days' ? 'years' : 'days';
        };
        NgDatepickerComponent.prototype.toggle = function () {
            this.isOpened = !this.isOpened;
            if (!this.isOpened && this.view === 'years') {
                this.toggleView();
            }
        };
        NgDatepickerComponent.prototype.close = function () {
            this.isOpened = false;
            if (this.view === 'years') {
                this.toggleView();
            }
        };
        NgDatepickerComponent.prototype.reset = function (fireValueChangeEvent) {
            if (fireValueChangeEvent === void 0) { fireValueChangeEvent = false; }
            this.date = null;
            this.innerValue = null;
            this.init();
            if (fireValueChangeEvent && this.onChangeCallback) {
                this.onChangeCallback(this.innerValue);
            }
        };
        NgDatepickerComponent.prototype.writeValue = function (val) {
            if (val) {
                this.date = val;
                this.innerValue = val;
                this.init();
                this.displayValue = dateFns.format(this.innerValue, this.displayFormat, this.locale);
                this.barTitle = dateFns.format(dateFns.startOfMonth(val), this.barTitleFormat, this.locale);
            }
        };
        NgDatepickerComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        NgDatepickerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        NgDatepickerComponent.prototype.onBlur = function (e) {
            if (!this.isOpened) {
                return;
            }
            var input = this.elementRef.nativeElement.querySelector('.ngx-datepicker-input');
            if (input == null) {
                return;
            }
            if (e.target === input || input.contains(e.target)) {
                return;
            }
            var container = this.elementRef.nativeElement.querySelector('.ngx-datepicker-calendar-container');
            if (container && container !== e.target && !container.contains(e.target) && !e.target.classList.contains('year-unit')) {
                this.close();
            }
        };
        NgDatepickerComponent.ɵfac = function NgDatepickerComponent_Factory(t) { return new (t || NgDatepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
        NgDatepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgDatepickerComponent, selectors: [["ng-datepicker"]], hostBindings: function NgDatepickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
                i0.ɵɵlistener("click", function NgDatepickerComponent_click_HostBindingHandler($event) { return ctx.onBlur($event); }, false, i0.ɵɵresolveDocument);
            } }, inputs: { options: "options", headless: "headless", isOpened: "isOpened", position: "position" }, features: [i0.ɵɵProvidersFeature([
                    { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return NgDatepickerComponent; }), multi: true }
                ]), i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c2, decls: 4, vars: 2, consts: [[1, "ngx-datepicker-container"], ["type", "text", "class", "ngx-datepicker-input", "readonly", "", 3, "ngModel", "placeholder", "ngClass", "ngStyle", "id", "disabled", "ngModelChange", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["type", "text", "readonly", "", 1, "ngx-datepicker-input", 3, "ngModel", "placeholder", "ngClass", "ngStyle", "id", "disabled", "ngModelChange", "click"], [1, "topbar-container"], ["width", "7px", "height", "10px", "viewBox", "0 0 7 10", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "click"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-923.000000, -1882.000000)", "fill", "#CED0DA"], ["transform", "translate(80.000000, 1361.000000)"], ["transform", "translate(0.000000, 430.000000)"], ["transform", "translate(825.000000, 0.000000)"], ["transform", "translate(0.000000, 72.000000)"], ["transform", "translate(18.000000, 15.000000)"], ["id", "Back", "points", "6.015 4 0 9.013 6.015 14.025"], [1, "topbar-title", 3, "click"], ["width", "7px", "height", "10px", "viewBox", "0 0 6 10", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "click"], ["id", "Source-Sans---UI-Elements-Kit", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "White-Layout", "transform", "translate(-1182.000000, -1882.000000)", "fill", "#CED0DA"], ["id", "Dropdowns-&-Selector", "transform", "translate(80.000000, 1361.000000)"], ["id", "Dropdowns", "transform", "translate(0.000000, 430.000000)"], ["id", "Calendar", "transform", "translate(825.000000, 0.000000)"], ["transform", "translate(0.000000, 72.000000)", "id", "Top-Bar-Nav"], ["id", "Forward", "transform", "translate(262.007500, 9.012500) scale(-1, 1) translate(-262.007500, -9.012500) ", "points", "265.015 4 259 9.013 265.015 14.025"], ["class", "main-calendar-container", 4, "ngIf"], [1, "main-calendar-container"], [1, "main-calendar-day-names"], ["class", "day-name-unit", 4, "ngFor", "ngForOf"], [1, "main-calendar-days"], ["class", "day-unit", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "day-name-unit"], [1, "day-unit", 3, "ngClass", "click"], ["slimScroll", "", 1, "main-calendar-years", 3, "options"], ["class", "year-unit", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "year-unit", 3, "ngClass", "click"]], template: function NgDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, NgDatepickerComponent_input_1_Template, 1, 6, "input", 1);
                i0.ɵɵprojection(2);
                i0.ɵɵtemplate(3, NgDatepickerComponent_div_3_Template, 24, 6, "div", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.headless);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.isOpened);
            } }, directives: [common.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, common.NgClass, common.NgStyle, common.NgForOf, ngxSlimscroll.SlimScrollDirective], styles: [".ngx-datepicker-position-bottom-left[_ngcontent-%COMP%]{top:40px;right:0}.ngx-datepicker-position-bottom-right[_ngcontent-%COMP%]{top:40px;left:0}.ngx-datepicker-position-top-left[_ngcontent-%COMP%]{bottom:40px;right:0}.ngx-datepicker-position-top-right[_ngcontent-%COMP%]{bottom:40px;left:0}.ngx-datepicker-container[_ngcontent-%COMP%]{position:relative}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-input[_ngcontent-%COMP%]{padding:5px 10px;font-size:14px;width:200px;outline:0;border:1px solid #dfe3e9}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]{position:absolute;width:300px;background:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,.08);border:1px solid #dfe3e9;border-radius:4px}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]{width:100%;height:50px;padding:15px;border-bottom:1px solid #dfe3e9;display:flex;justify-content:space-between;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{cursor:pointer}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]{fill:#ced0da}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   .topbar-title[_ngcontent-%COMP%]{color:#3d495c;font-size:14px;font-weight:600;cursor:pointer}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:15px 10px 0;font-size:12px;font-weight:500}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-day-names[_ngcontent-%COMP%]{color:#a4a9b1;width:100%;display:flex;align-items:center}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-day-names[_ngcontent-%COMP%]   .day-name-unit[_ngcontent-%COMP%]{width:calc(100% / 7);text-transform:uppercase;text-align:center}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]{padding:15px 0;width:100%;display:inline-block;max-height:275px;overflow:hidden}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]{width:calc(100% / 7);height:40px;display:inline-flex;float:left;align-items:center;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;color:#3d495c}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-prev-month[_ngcontent-%COMP%]{color:#a4a9b1}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]:hover{background:#a4a9b1;color:#fff}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-selected[_ngcontent-%COMP%]{background:#1a91eb;color:#fff}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]{cursor:not-allowed;color:#a4a9b1}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]:hover{background:0 0}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]{height:210px;display:block;padding:0}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]{width:calc(100% / 3);border-radius:10px}"] });
        return NgDatepickerComponent;
    }());
    exports.NgDatepickerComponent = NgDatepickerComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgDatepickerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng-datepicker',
                    templateUrl: 'ng-datepicker.component.html',
                    styleUrls: ['ng-datepicker.component.sass'],
                    providers: [
                        { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return NgDatepickerComponent; }), multi: true }
                    ]
                }]
        }], function () { return [{ type: i0.ElementRef }]; }, { options: [{
                type: core.Input
            }], headless: [{
                type: core.Input
            }], isOpened: [{
                type: core.Input
            }], position: [{
                type: core.Input
            }], onBlur: [{
                type: core.HostListener,
                args: ['document:click', ['$event']]
            }] }); })();

    });

    var ngDatepicker_component$1 = unwrapExports(ngDatepicker_component);
    var ngDatepicker_component_1 = ngDatepicker_component.NgDatepickerComponent;

    var ngDatepicker_module = createCommonjsModule(function (module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });





    var i0 = core;
    var NgDatepickerModule = /** @class */ (function () {
        function NgDatepickerModule() {
        }
        NgDatepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgDatepickerModule });
        NgDatepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgDatepickerModule_Factory(t) { return new (t || NgDatepickerModule)(); }, imports: [[common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule],
                common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule] });
        return NgDatepickerModule;
    }());
    exports.NgDatepickerModule = NgDatepickerModule;
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgDatepickerModule, { declarations: [ngDatepicker_component.NgDatepickerComponent], imports: [common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule], exports: [ngDatepicker_component.NgDatepickerComponent, common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgDatepickerModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [ngDatepicker_component.NgDatepickerComponent],
                    imports: [common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule],
                    exports: [ngDatepicker_component.NgDatepickerComponent, common.CommonModule, forms.FormsModule, ngxSlimscroll.NgSlimScrollModule]
                }]
        }], null, null); })();

    });

    var ngDatepicker_module$1 = unwrapExports(ngDatepicker_module);
    var ngDatepicker_module_1 = ngDatepicker_module.NgDatepickerModule;

    var public_api = createCommonjsModule(function (module, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ngDatepicker_module);
    __export(ngDatepicker_component);

    });

    var public_api$1 = unwrapExports(public_api);

    var ng2Datepicker = createCommonjsModule(function (module, exports) {
    "use strict";
    /**
     * Generated bundle index. Do not edit.
     */
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(public_api);

    });

    var ng2Datepicker$1 = unwrapExports(ng2Datepicker);

    return ng2Datepicker$1;

})));
//# sourceMappingURL=ng2-datepicker.umd.js.map
