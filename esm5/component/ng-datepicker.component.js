"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var date_fns_1 = require("date-fns");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("@angular/forms");
var i3 = require("ngx-slimscroll");
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
        this.minYear = this.options && this.options.minYear || date_fns_1.getYear(today) - 30;
        this.maxYear = this.options && this.options.maxYear || date_fns_1.getYear(today) + 30;
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
        this.date = date_fns_1.addMonths(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.prevMonth = function () {
        this.date = date_fns_1.subMonths(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.setDate = function (i) {
        this.date = this.days[i].date;
        this.value = this.date;
        this.init();
        this.close();
    };
    NgDatepickerComponent.prototype.setYear = function (i) {
        this.date = date_fns_1.setYear(this.date, this.years[i].year);
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
        var start = date_fns_1.startOfMonth(actualDate);
        var end = date_fns_1.endOfMonth(actualDate);
        this.days = date_fns_1.eachDay(start, end).map(function (date) {
            return {
                date: date,
                day: date_fns_1.getDate(date),
                month: date_fns_1.getMonth(date),
                year: date_fns_1.getYear(date),
                inThisMonth: true,
                isToday: date_fns_1.isToday(date),
                isSelected: date_fns_1.isSameDay(date, _this.innerValue) && date_fns_1.isSameMonth(date, _this.innerValue) && date_fns_1.isSameYear(date, _this.innerValue),
                isSelectable: _this.isDateSelectable(date)
            };
        });
        var tmp = date_fns_1.getDay(start) - this.firstCalendarDay;
        var prevDays = tmp < 0 ? 7 - this.firstCalendarDay : tmp;
        for (var i = 1; i <= prevDays; i++) {
            var date = date_fns_1.subDays(start, i);
            this.days.unshift({
                date: date,
                day: date_fns_1.getDate(date),
                month: date_fns_1.getMonth(date),
                year: date_fns_1.getYear(date),
                inThisMonth: false,
                isToday: date_fns_1.isToday(date),
                isSelected: date_fns_1.isSameDay(date, this.innerValue) && date_fns_1.isSameMonth(date, this.innerValue) && date_fns_1.isSameYear(date, this.innerValue),
                isSelectable: this.isDateSelectable(date)
            });
        }
        if (this.innerValue) {
            this.displayValue = date_fns_1.format(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = date_fns_1.format(start, this.barTitleFormat, this.locale);
        }
        else {
            this.displayValue = '';
            this.barTitle = this.useEmptyBarTitle ? this.barTitleIfEmpty : date_fns_1.format(start, this.barTitleFormat, this.locale);
        }
    };
    NgDatepickerComponent.prototype.initYears = function () {
        var _this = this;
        var range = this.maxYear - this.minYear;
        this.years = Array.from(new Array(range), function (x, i) { return i + _this.minYear; }).map(function (year) {
            return { year: year, isThisYear: year === date_fns_1.getYear(_this.date) };
        });
    };
    NgDatepickerComponent.prototype.initDayNames = function () {
        this.dayNames = [];
        var start = this.firstCalendarDay;
        for (var i = start; i <= 6 + start; i++) {
            var date = date_fns_1.setDay(new Date(), i);
            this.dayNames.push(date_fns_1.format(date, this.dayNamesFormat, this.locale));
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
            this.displayValue = date_fns_1.format(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = date_fns_1.format(date_fns_1.startOfMonth(val), this.barTitleFormat, this.locale);
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
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return NgDatepickerComponent; }), multi: true }
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
        } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgClass, i1.NgStyle, i1.NgForOf, i3.SlimScrollDirective], styles: [".ngx-datepicker-position-bottom-left[_ngcontent-%COMP%]{top:40px;right:0}.ngx-datepicker-position-bottom-right[_ngcontent-%COMP%]{top:40px;left:0}.ngx-datepicker-position-top-left[_ngcontent-%COMP%]{bottom:40px;right:0}.ngx-datepicker-position-top-right[_ngcontent-%COMP%]{bottom:40px;left:0}.ngx-datepicker-container[_ngcontent-%COMP%]{position:relative}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-input[_ngcontent-%COMP%]{padding:5px 10px;font-size:14px;width:200px;outline:0;border:1px solid #dfe3e9}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]{position:absolute;width:300px;background:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,.08);border:1px solid #dfe3e9;border-radius:4px}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]{width:100%;height:50px;padding:15px;border-bottom:1px solid #dfe3e9;display:flex;justify-content:space-between;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{cursor:pointer}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]{fill:#ced0da}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   .topbar-title[_ngcontent-%COMP%]{color:#3d495c;font-size:14px;font-weight:600;cursor:pointer}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:15px 10px 0;font-size:12px;font-weight:500}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-day-names[_ngcontent-%COMP%]{color:#a4a9b1;width:100%;display:flex;align-items:center}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-day-names[_ngcontent-%COMP%]   .day-name-unit[_ngcontent-%COMP%]{width:calc(100% / 7);text-transform:uppercase;text-align:center}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]{padding:15px 0;width:100%;display:inline-block;max-height:275px;overflow:hidden}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]{width:calc(100% / 7);height:40px;display:inline-flex;float:left;align-items:center;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;color:#3d495c}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-prev-month[_ngcontent-%COMP%]{color:#a4a9b1}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]:hover{background:#a4a9b1;color:#fff}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-selected[_ngcontent-%COMP%]{background:#1a91eb;color:#fff}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]{cursor:not-allowed;color:#a4a9b1}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]:hover{background:0 0}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]{height:210px;display:block;padding:0}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]{width:calc(100% / 3);border-radius:10px}"] });
    return NgDatepickerComponent;
}());
exports.NgDatepickerComponent = NgDatepickerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgDatepickerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ng-datepicker',
                templateUrl: 'ng-datepicker.component.html',
                styleUrls: ['ng-datepicker.component.sass'],
                providers: [
                    { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return NgDatepickerComponent; }), multi: true }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { options: [{
            type: core_1.Input
        }], headless: [{
            type: core_1.Input
        }], isOpened: [{
            type: core_1.Input
        }], position: [{
            type: core_1.Input
        }], onBlur: [{
            type: core_1.HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9uZy1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsImNvbXBvbmVudC9uZy1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlIO0FBQ3pILHdDQUF5RTtBQUN6RSxxQ0FrQmtCOzs7Ozs7O0lDbkJoQixnQ0FFQTtJQUZrRSwwTkFBMEIsZ0xBQUE7SUFBNUYsaUJBRUE7OztJQUZrRSw4Q0FBMEIsb0NBQUEsNkJBQUEsNkJBQUEsdUJBQUEsOEJBQUE7OztJQTZDdEYsZ0NBQTBEO0lBQUEsWUFBVTtJQUFBLGlCQUFPOzs7SUFBakIsZUFBVTtJQUFWLDhCQUFVOzs7OztJQUdwRSxnQ0FFRTtJQURBLDJSQUF3QztJQUN4QyxZQUNGO0lBQUEsaUJBQU87OztJQUh5RCxzSUFBMkk7SUFFek0sZUFDRjtJQURFLDRDQUNGOzs7O0lBUkosb0JBQ0U7SUFERiwrQkFDRTtJQUFBLCtCQUNFO0lBQUEsc0ZBQTBEO0lBQzVELGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSxzRkFFRTtJQUVKLGlCQUFNO0lBQ1IsaUJBQU07OztJQVIwQixlQUE2QjtJQUE3QiwwQ0FBNkI7SUFHbEMsZUFBd0M7SUFBeEMsc0NBQXdDOzs7OztJQVEvRCxnQ0FBdUk7SUFBckIsc09BQW9CO0lBQUMsWUFBZTtJQUFBLGlCQUFPOzs7SUFBMUYseUVBQThDO0lBQXNCLGVBQWU7SUFBZixtQ0FBZTs7OztJQUYxSixvQkFDRTtJQURGLCtCQUNFO0lBQUEsK0JBQ0U7SUFBQSxzRkFBdUk7SUFDekksaUJBQU07SUFDUixpQkFBTTs7O0lBSHdDLGVBQXlCO0lBQXpCLCtDQUF5QjtJQUMzQyxlQUEwQztJQUExQyx1Q0FBMEM7Ozs7SUFyRHhFLDJCQUNFO0lBQUEsOEJBQ0U7SUFBQSxtQkFFRTtJQUZGLDhCQUVF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QixFQUFFLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ2xHO2FBQ0Y7O2tCQUVFLFlBQUs7O2tCQUtMLFlBQUs7O2tCQUtMLFlBQUs7O2tCQUtMLFlBQUs7O2tCQTZRTCxtQkFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIHN0YXJ0T2ZNb250aCxcbiAgZW5kT2ZNb250aCxcbiAgYWRkTW9udGhzLFxuICBzdWJNb250aHMsXG4gIHNldFllYXIsXG4gIGVhY2hEYXksXG4gIGdldERhdGUsXG4gIGdldE1vbnRoLFxuICBnZXRZZWFyLFxuICBpc1RvZGF5LFxuICBpc1NhbWVEYXksXG4gIGlzU2FtZU1vbnRoLFxuICBpc1NhbWVZZWFyLFxuICBmb3JtYXQsXG4gIGdldERheSxcbiAgc3ViRGF5cyxcbiAgc2V0RGF5XG59IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElTbGltU2Nyb2xsT3B0aW9ucyB9IGZyb20gJ25neC1zbGltc2Nyb2xsJztcblxuZXhwb3J0IHR5cGUgQWRkQ2xhc3MgPSBzdHJpbmcgfCBzdHJpbmdbXSB8IHsgW2s6IHN0cmluZ106IGJvb2xlYW4gfSB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlck9wdGlvbnMge1xuICBtaW5ZZWFyPzogbnVtYmVyOyAvLyBkZWZhdWx0OiBjdXJyZW50IHllYXIgLSAzMFxuICBtYXhZZWFyPzogbnVtYmVyOyAvLyBkZWZhdWx0OiBjdXJyZW50IHllYXIgKyAzMFxuICBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nOyAvLyBkZWZhdWx0OiAnTU1NIERbLF0gWVlZWSdcbiAgYmFyVGl0bGVGb3JtYXQ/OiBzdHJpbmc7IC8vIGRlZmF1bHQ6ICdNTU1NIFlZWVknXG4gIGRheU5hbWVzRm9ybWF0Pzogc3RyaW5nOyAvLyBkZWZhdWx0ICdkZGQnXG4gIGJhclRpdGxlSWZFbXB0eT86IHN0cmluZztcbiAgZmlyc3RDYWxlbmRhckRheT86IG51bWJlcjsgLy8gMCA9IFN1bmRheSAoZGVmYXVsdCksIDEgPSBNb25kYXksIC4uXG4gIGxvY2FsZT86IG9iamVjdDtcbiAgbWluRGF0ZT86IERhdGU7XG4gIG1heERhdGU/OiBEYXRlO1xuICAvKiogUGxhY2Vob2xkZXIgZm9yIHRoZSBpbnB1dCBmaWVsZCAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgLyoqIFtuZ0NsYXNzXSB0byBhZGQgdG8gdGhlIGlucHV0IGZpZWxkICovXG4gIGFkZENsYXNzPzogQWRkQ2xhc3M7XG4gIC8qKiBbbmdTdHlsZV0gdG8gYWRkIHRvIHRoZSBpbnB1dCBmaWVsZCAqL1xuICBhZGRTdHlsZT86IHsgW2s6IHN0cmluZ106IGFueSB9IHwgbnVsbDtcbiAgLyoqIElEIHRvIGFzc2lnbiB0byB0aGUgaW5wdXQgZmllbGQgKi9cbiAgZmllbGRJZD86IHN0cmluZztcbiAgLyoqIElmIGZhbHNlLCBiYXJUaXRsZUlmRW1wdHkgd2lsbCBiZSBkaXNyZWdhcmRlZCBhbmQgYSBkYXRlIHdpbGwgYWx3YXlzIGJlIHNob3duLiBEZWZhdWx0OiB0cnVlICovXG4gIHVzZUVtcHR5QmFyVGl0bGU/OiBib29sZWFuO1xufVxuXG4vLyBDb3VudGVyIGZvciBjYWxjdWxhdGluZyB0aGUgYXV0by1pbmNyZW1lbnRpbmcgZmllbGQgSURcbmxldCBjb3VudGVyID0gMDtcblxuLyoqXG4gKiBJbnRlcm5hbCBsaWJyYXJ5IGhlbHBlciB0aGF0IGhlbHBzIHRvIGNoZWNrIGlmIHZhbHVlIGlzIGVtcHR5XG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuY29uc3QgaXNOaWwgPSAodmFsdWU6IERhdGUgfCBEYXRlcGlja2VyT3B0aW9ucykgPT4ge1xuICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHx8ICh2YWx1ZSA9PT0gbnVsbCk7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICduZy1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25nLWRhdGVwaWNrZXIuY29tcG9uZW50LnNhc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdEYXRlcGlja2VyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IERhdGVwaWNrZXJPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGRhdGVwaWNrZXIncyBpbnB1dFxuICAgKi9cbiAgQElucHV0KCkgaGVhZGxlc3MgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0IGRhdGVwaWNrZXIncyB2aXNpYmlsaXR5IHN0YXRlXG4gICAqL1xuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEYXRlcGlja2VyIGRyb3Bkb3duIHBvc2l0aW9uXG4gICAqL1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdib3R0b20tcmlnaHQnO1xuXG4gIHByaXZhdGUgcG9zaXRpb25zID0gWydib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J107XG5cbiAgaW5uZXJWYWx1ZTogRGF0ZTtcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZGF0ZTogRGF0ZTtcbiAgYmFyVGl0bGU6IHN0cmluZztcbiAgYmFyVGl0bGVGb3JtYXQ6IHN0cmluZztcbiAgYmFyVGl0bGVJZkVtcHR5OiBzdHJpbmc7XG4gIG1pblllYXI6IG51bWJlcjtcbiAgbWF4WWVhcjogbnVtYmVyO1xuICBmaXJzdENhbGVuZGFyRGF5OiBudW1iZXI7XG4gIHZpZXc6IHN0cmluZztcbiAgeWVhcnM6IHsgeWVhcjogbnVtYmVyOyBpc1RoaXNZZWFyOiBib29sZWFuIH1bXTtcbiAgZGF5TmFtZXM6IHN0cmluZ1tdO1xuICBkYXlOYW1lc0Zvcm1hdDogc3RyaW5nO1xuICBzY3JvbGxPcHRpb25zOiBJU2xpbVNjcm9sbE9wdGlvbnM7XG4gIGRheXM6IHtcbiAgICBkYXRlOiBEYXRlO1xuICAgIGRheTogbnVtYmVyO1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIGluVGhpc01vbnRoOiBib29sZWFuO1xuICAgIGlzVG9kYXk6IGJvb2xlYW47XG4gICAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgICBpc1NlbGVjdGFibGU6IGJvb2xlYW47XG4gIH1bXTtcbiAgbG9jYWxlOiBvYmplY3Q7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIGFkZENsYXNzOiBBZGRDbGFzcztcbiAgYWRkU3R5bGU6IHsgW2s6IHN0cmluZ106IGFueSB9IHwgbnVsbDtcbiAgZmllbGRJZDogc3RyaW5nO1xuICB1c2VFbXB0eUJhclRpdGxlOiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLmlubmVyVmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsOiBEYXRlKSB7XG4gICAgdGhpcy5pbm5lclZhbHVlID0gdmFsO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmlubmVyVmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5zY3JvbGxPcHRpb25zID0ge1xuICAgICAgYmFyQmFja2dyb3VuZDogJyNERkUzRTknLFxuICAgICAgZ3JpZEJhY2tncm91bmQ6ICcjRkZGRkZGJyxcbiAgICAgIGJhckJvcmRlclJhZGl1czogJzMnLFxuICAgICAgZ3JpZEJvcmRlclJhZGl1czogJzMnLFxuICAgICAgYmFyV2lkdGg6ICc2JyxcbiAgICAgIGdyaWRXaWR0aDogJzYnLFxuICAgICAgYmFyTWFyZ2luOiAnMCcsXG4gICAgICBncmlkTWFyZ2luOiAnMCdcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52aWV3ID0gJ2RheXMnO1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0RGF5TmFtZXMoKTtcbiAgICB0aGlzLmluaXRZZWFycygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgJ3Bvc2l0aW9uJyBwcm9wZXJ0eSBpcyBjb3JyZWN0XG4gICAgaWYgKHRoaXMucG9zaXRpb25zLmluZGV4T2YodGhpcy5wb3NpdGlvbikgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBuZy1kYXRlcGlja2VyOiBpbnZhbGlkIHBvc2l0aW9uIHByb3BlcnR5IHZhbHVlICcke3RoaXMucG9zaXRpb259JyAoZXhwZWN0ZWQ6ICR7dGhpcy5wb3NpdGlvbnMuam9pbignLCAnKX0pYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgnb3B0aW9ucycgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICB0aGlzLmluaXREYXlOYW1lcygpO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLmluaXRZZWFycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkZWZhdWx0RmllbGRJZCgpOiBzdHJpbmcge1xuICAgIC8vIE9ubHkgZXZhbHVhdGUgYW5kIGluY3JlbWVudCBpZiByZXF1aXJlZFxuICAgIGNvbnN0IHZhbHVlID0gYGRhdGVwaWNrZXItJHtjb3VudGVyKyt9YDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRGaWVsZElkJywge3ZhbHVlfSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTsgLy8gdGhpcyBjb25zdCB3YXMgYWRkZWQgYmVjYXVzZSBkdXJpbmcgbXkgdGVzdHMsIEkgbm90aWNlZCB0aGF0IGF0IHRoaXMgbGV2ZWwgdGhpcy5kYXRlIGlzIHVuZGVmaW5lZFxuICAgIHRoaXMubWluWWVhciA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWluWWVhciB8fCBnZXRZZWFyKHRvZGF5KSAtIDMwO1xuICAgIHRoaXMubWF4WWVhciA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWF4WWVhciB8fCBnZXRZZWFyKHRvZGF5KSArIDMwO1xuICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZGlzcGxheUZvcm1hdCB8fCAnTU1NIERbLF0gWVlZWSc7XG4gICAgdGhpcy5iYXJUaXRsZUZvcm1hdCA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYmFyVGl0bGVGb3JtYXQgfHwgJ01NTU0gWVlZWSc7XG4gICAgdGhpcy5kYXlOYW1lc0Zvcm1hdCA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZGF5TmFtZXNGb3JtYXQgfHwgJ2RkZCc7XG4gICAgdGhpcy5iYXJUaXRsZUlmRW1wdHkgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmJhclRpdGxlSWZFbXB0eSB8fCAnQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZSc7XG4gICAgdGhpcy5maXJzdENhbGVuZGFyRGF5ID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5maXJzdENhbGVuZGFyRGF5IHx8IDA7XG4gICAgdGhpcy5sb2NhbGUgPSB0aGlzLm9wdGlvbnMgJiYgeyBsb2NhbGU6IHRoaXMub3B0aW9ucy5sb2NhbGUgfSB8fCB7fTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlciB8fCAnJztcbiAgICB0aGlzLmFkZENsYXNzID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hZGRDbGFzcyB8fCB7fTtcbiAgICB0aGlzLmFkZFN0eWxlID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hZGRTdHlsZSB8fCB7fTtcbiAgICB0aGlzLmZpZWxkSWQgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmZpZWxkSWQgfHwgdGhpcy5kZWZhdWx0RmllbGRJZDtcbiAgICB0aGlzLnVzZUVtcHR5QmFyVGl0bGUgPSB0aGlzLm9wdGlvbnMgJiYgJ3VzZUVtcHR5QmFyVGl0bGUnIGluIHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy51c2VFbXB0eUJhclRpdGxlIDogdHJ1ZTtcbiAgfVxuXG4gIG5leHRNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGUgPSBhZGRNb250aHModGhpcy5kYXRlLCAxKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByZXZNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGUgPSBzdWJNb250aHModGhpcy5kYXRlLCAxKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHNldERhdGUoaTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlID0gdGhpcy5kYXlzW2ldLmRhdGU7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZGF0ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBzZXRZZWFyKGk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZGF0ZSA9IHNldFllYXIodGhpcy5kYXRlLCB0aGlzLnllYXJzW2ldLnllYXIpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuaW5pdFllYXJzKCk7XG4gICAgdGhpcy52aWV3ID0gJ2RheXMnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBzcGVjaWZpZWQgZGF0ZSBpcyBpbiByYW5nZSBvZiBtaW4gYW5kIG1heCBkYXRlc1xuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBpc0RhdGVTZWxlY3RhYmxlKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICBpZiAoaXNOaWwodGhpcy5vcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbWluRGF0ZVNldCA9ICFpc05pbCh0aGlzLm9wdGlvbnMubWluRGF0ZSk7XG4gICAgY29uc3QgbWF4RGF0ZVNldCA9ICFpc05pbCh0aGlzLm9wdGlvbnMubWF4RGF0ZSk7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS52YWx1ZU9mKCk7XG5cbiAgICBpZiAobWluRGF0ZVNldCAmJiAodGltZXN0YW1wIDwgdGhpcy5vcHRpb25zLm1pbkRhdGUudmFsdWVPZigpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChtYXhEYXRlU2V0ICYmICh0aW1lc3RhbXAgPiB0aGlzLm9wdGlvbnMubWF4RGF0ZS52YWx1ZU9mKCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMuZGF0ZSBtYXkgYmUgbnVsbCBhZnRlciAucmVzZXQoKTsgZmFsbCBiYWNrIHRvIGN1cnJlbnQgZGF0ZS5cbiAgICBjb25zdCBhY3R1YWxEYXRlID0gdGhpcy5kYXRlIHx8IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgoYWN0dWFsRGF0ZSk7XG4gICAgY29uc3QgZW5kID0gZW5kT2ZNb250aChhY3R1YWxEYXRlKTtcblxuICAgIHRoaXMuZGF5cyA9IGVhY2hEYXkoc3RhcnQsIGVuZCkubWFwKGRhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgZGF5OiBnZXREYXRlKGRhdGUpLFxuICAgICAgICBtb250aDogZ2V0TW9udGgoZGF0ZSksXG4gICAgICAgIHllYXI6IGdldFllYXIoZGF0ZSksXG4gICAgICAgIGluVGhpc01vbnRoOiB0cnVlLFxuICAgICAgICBpc1RvZGF5OiBpc1RvZGF5KGRhdGUpLFxuICAgICAgICBpc1NlbGVjdGVkOiBpc1NhbWVEYXkoZGF0ZSwgdGhpcy5pbm5lclZhbHVlKSAmJiBpc1NhbWVNb250aChkYXRlLCB0aGlzLmlubmVyVmFsdWUpICYmIGlzU2FtZVllYXIoZGF0ZSwgdGhpcy5pbm5lclZhbHVlKSxcbiAgICAgICAgaXNTZWxlY3RhYmxlOiB0aGlzLmlzRGF0ZVNlbGVjdGFibGUoZGF0ZSlcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB0bXAgPSBnZXREYXkoc3RhcnQpIC0gdGhpcy5maXJzdENhbGVuZGFyRGF5O1xuICAgIGNvbnN0IHByZXZEYXlzID0gdG1wIDwgMCA/IDcgLSB0aGlzLmZpcnN0Q2FsZW5kYXJEYXkgOiB0bXA7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwcmV2RGF5czsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlID0gc3ViRGF5cyhzdGFydCwgaSk7XG4gICAgICB0aGlzLmRheXMudW5zaGlmdCh7XG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIGRheTogZ2V0RGF0ZShkYXRlKSxcbiAgICAgICAgbW9udGg6IGdldE1vbnRoKGRhdGUpLFxuICAgICAgICB5ZWFyOiBnZXRZZWFyKGRhdGUpLFxuICAgICAgICBpblRoaXNNb250aDogZmFsc2UsXG4gICAgICAgIGlzVG9kYXk6IGlzVG9kYXkoZGF0ZSksXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2FtZURheShkYXRlLCB0aGlzLmlubmVyVmFsdWUpICYmIGlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuaW5uZXJWYWx1ZSkgJiYgaXNTYW1lWWVhcihkYXRlLCB0aGlzLmlubmVyVmFsdWUpLFxuICAgICAgICBpc1NlbGVjdGFibGU6IHRoaXMuaXNEYXRlU2VsZWN0YWJsZShkYXRlKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBmb3JtYXQodGhpcy5pbm5lclZhbHVlLCB0aGlzLmRpc3BsYXlGb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICAgIHRoaXMuYmFyVGl0bGUgPSBmb3JtYXQoc3RhcnQsIHRoaXMuYmFyVGl0bGVGb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSAnJztcbiAgICAgIHRoaXMuYmFyVGl0bGUgPSB0aGlzLnVzZUVtcHR5QmFyVGl0bGUgPyB0aGlzLmJhclRpdGxlSWZFbXB0eSA6IGZvcm1hdChzdGFydCwgdGhpcy5iYXJUaXRsZUZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRZZWFycygpOiB2b2lkIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubWF4WWVhciAtIHRoaXMubWluWWVhcjtcbiAgICB0aGlzLnllYXJzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkocmFuZ2UpLCAoeCwgaSkgPT4gaSArIHRoaXMubWluWWVhcikubWFwKHllYXIgPT4ge1xuICAgICAgcmV0dXJuIHsgeWVhcjogeWVhciwgaXNUaGlzWWVhcjogeWVhciA9PT0gZ2V0WWVhcih0aGlzLmRhdGUpIH07XG4gICAgfSk7XG4gIH1cblxuICBpbml0RGF5TmFtZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kYXlOYW1lcyA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5maXJzdENhbGVuZGFyRGF5O1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSA2ICsgc3RhcnQ7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZSA9IHNldERheShuZXcgRGF0ZSgpLCBpKTtcbiAgICAgIHRoaXMuZGF5TmFtZXMucHVzaChmb3JtYXQoZGF0ZSwgdGhpcy5kYXlOYW1lc0Zvcm1hdCwgdGhpcy5sb2NhbGUpKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMudmlldyA9IHRoaXMudmlldyA9PT0gJ2RheXMnID8gJ3llYXJzJyA6ICdkYXlzJztcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gIXRoaXMuaXNPcGVuZWQ7XG5cbiAgICBpZiAoIXRoaXMuaXNPcGVuZWQgJiYgdGhpcy52aWV3ID09PSAneWVhcnMnKSB7XG4gICAgICB0aGlzLnRvZ2dsZVZpZXcoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy52aWV3ID09PSAneWVhcnMnKSB7XG4gICAgICB0aGlzLnRvZ2dsZVZpZXcoKTtcbiAgICB9XG4gIH1cblxuICByZXNldChmaXJlVmFsdWVDaGFuZ2VFdmVudCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlID0gbnVsbDtcbiAgICB0aGlzLmlubmVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGlmIChmaXJlVmFsdWVDaGFuZ2VFdmVudCAmJiB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmlubmVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBEYXRlKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5kYXRlID0gdmFsO1xuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGZvcm1hdCh0aGlzLmlubmVyVmFsdWUsIHRoaXMuZGlzcGxheUZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgICAgdGhpcy5iYXJUaXRsZSA9IGZvcm1hdChzdGFydE9mTW9udGgodmFsKSwgdGhpcy5iYXJUaXRsZUZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgb25CbHVyKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZ3gtZGF0ZXBpY2tlci1pbnB1dCcpO1xuXG4gICAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQgPT09IGlucHV0IHx8IGlucHV0LmNvbnRhaW5zKDxhbnk+ZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5neC1kYXRlcGlja2VyLWNhbGVuZGFyLWNvbnRhaW5lcicpO1xuICAgIGlmIChjb250YWluZXIgJiYgY29udGFpbmVyICE9PSBlLnRhcmdldCAmJiAhY29udGFpbmVyLmNvbnRhaW5zKDxhbnk+ZS50YXJnZXQpICYmICEoPGFueT5lLnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd5ZWFyLXVuaXQnKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm5neC1kYXRlcGlja2VyLWNvbnRhaW5lclwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiAqbmdJZj1cIiFoZWFkbGVzc1wiIGNsYXNzPVwibmd4LWRhdGVwaWNrZXItaW5wdXRcIiBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiIHJlYWRvbmx5IFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW25nQ2xhc3NdPVwiYWRkQ2xhc3NcIiBbbmdTdHlsZV09XCJhZGRTdHlsZVwiIFtpZF09XCJmaWVsZElkXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCIgLz5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8ZGl2IGNsYXNzPVwibmd4LWRhdGVwaWNrZXItY2FsZW5kYXItY29udGFpbmVyIG5neC1kYXRlcGlja2VyLXBvc2l0aW9uLXt7cG9zaXRpb259fVwiICpuZ0lmPVwiaXNPcGVuZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidG9wYmFyLWNvbnRhaW5lclwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjdweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDcgMTBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgIChjbGljayk9XCJwcmV2TW9udGgoKVwiPlxuICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTIzLjAwMDAwMCwgLTE4ODIuMDAwMDAwKVwiIGZpbGw9XCIjQ0VEMERBXCI+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODAuMDAwMDAwLCAxMzYxLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCA0MzAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4MjUuMDAwMDAwLCAwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgNzIuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTguMDAwMDAwLCAxNS4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9XCJCYWNrXCIgcG9pbnRzPVwiNi4wMTUgNCAwIDkuMDEzIDYuMDE1IDE0LjAyNVwiPjwvcG9seWdvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvcGJhci10aXRsZVwiIChjbGljayk9XCJ0b2dnbGVWaWV3KClcIj57eyBiYXJUaXRsZSB9fTwvc3Bhbj5cbiAgICAgIDxzdmcgd2lkdGg9XCI3cHhcIiBoZWlnaHQ9XCIxMHB4XCIgdmlld0JveD1cIjAgMCA2IDEwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAoY2xpY2spPVwibmV4dE1vbnRoKClcIj5cbiAgICAgICAgPGcgaWQ9XCJTb3VyY2UtU2Fucy0tLVVJLUVsZW1lbnRzLUtpdFwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgaWQ9XCJXaGl0ZS1MYXlvdXRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTExODIuMDAwMDAwLCAtMTg4Mi4wMDAwMDApXCIgZmlsbD1cIiNDRUQwREFcIj5cbiAgICAgICAgICAgIDxnIGlkPVwiRHJvcGRvd25zLSZhbXA7LVNlbGVjdG9yXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgwLjAwMDAwMCwgMTM2MS4wMDAwMDApXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwiRHJvcGRvd25zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCA0MzAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwiQ2FsZW5kYXJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODI1LjAwMDAwMCwgMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDcyLjAwMDAwMClcIiBpZD1cIlRvcC1CYXItTmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOC4wMDAwMDAsIDE1LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD1cIkZvcndhcmRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYyLjAwNzUwMCwgOS4wMTI1MDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTI2Mi4wMDc1MDAsIC05LjAxMjUwMCkgXCIgcG9pbnRzPVwiMjY1LjAxNSA0IDI1OSA5LjAxMyAyNjUuMDE1IDE0LjAyNVwiPjwvcG9seWdvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY2FsZW5kYXItY29udGFpbmVyXCIgKm5nSWY9XCJ2aWV3ID09PSAnZGF5cydcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNhbGVuZGFyLWRheS1uYW1lc1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRheS1uYW1lLXVuaXRcIiAqbmdGb3I9XCJsZXQgbmFtZSBvZiBkYXlOYW1lc1wiPnt7IG5hbWUgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNhbGVuZGFyLWRheXNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXktdW5pdFwiICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5czsgbGV0IGkgPSBpbmRleDtcIiBbbmdDbGFzc109XCJ7ICdpcy1wcmV2LW1vbnRoJzogIWRheS5pblRoaXNNb250aCwgJ2lzLXRvZGF5JzogZGF5LmlzVG9kYXksICdpcy1zZWxlY3RlZCc6IGRheS5pc1NlbGVjdGVkLCAnaXMtZGlzYWJsZWQnOiAhZGF5LmlzU2VsZWN0YWJsZSB9XCJcbiAgICAgICAgICAoY2xpY2spPVwiZGF5LmlzU2VsZWN0YWJsZSAmJiBzZXREYXRlKGkpXCI+XG4gICAgICAgICAge3sgZGF5LmRheSB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jYWxlbmRhci1jb250YWluZXJcIiAqbmdJZj1cInZpZXcgPT09ICd5ZWFycydcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNhbGVuZGFyLXllYXJzXCIgc2xpbVNjcm9sbCBbb3B0aW9uc109XCJzY3JvbGxPcHRpb25zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwieWVhci11bml0XCIgKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnM7IGxldCBpID0gaW5kZXg7XCIgW25nQ2xhc3NdPVwieyAnaXMtc2VsZWN0ZWQnOiB5ZWFyLmlzVGhpc1llYXIgfVwiIChjbGljayk9XCJzZXRZZWFyKGkpXCI+e3sgeWVhci55ZWFyIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=