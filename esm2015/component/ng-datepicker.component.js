import { Component, Input, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { startOfMonth, endOfMonth, addMonths, subMonths, setYear, eachDay, getDate, getMonth, getYear, isToday, isSameDay, isSameMonth, isSameYear, format, getDay, subDays, setDay } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-slimscroll";
function NgDatepickerComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 3);
    i0.ɵɵlistener("ngModelChange", function NgDatepickerComponent_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.displayValue = $event; })("click", function NgDatepickerComponent_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.toggle(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.displayValue)("placeholder", ctx_r0.placeholder)("ngClass", ctx_r0.addClass)("ngStyle", ctx_r0.addStyle)("id", ctx_r0.fieldId)("disabled", ctx_r0.disabled);
} }
function NgDatepickerComponent_div_3_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(name_r9);
} }
const _c0 = function (a0, a1, a2, a3) { return { "is-prev-month": a0, "is-today": a1, "is-selected": a2, "is-disabled": a3 }; };
function NgDatepickerComponent_div_3_div_22_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_div_22_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const day_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r12 = i0.ɵɵnextContext(3); return day_r10.isSelectable && ctx_r12.setDate(i_r11); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(2, _c0, !day_r10.inThisMonth, day_r10.isToday, day_r10.isSelected, !day_r10.isSelectable));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r10.day, " ");
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
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r5.dayNames);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r5.days);
} }
const _c1 = function (a0) { return { "is-selected": a0 }; };
function NgDatepickerComponent_div_3_div_23_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_div_23_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r18); const i_r16 = ctx.index; const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.setYear(i_r16); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r15 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c1, year_r15.isThisYear));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r15.year);
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
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", ctx_r6.scrollOptions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.years);
} }
function NgDatepickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 5);
    i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_Template__svg_svg_click_2_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.prevMonth(); });
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
    i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_Template_span_click_11_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.toggleView(); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(13, "svg", 15);
    i0.ɵɵlistener("click", function NgDatepickerComponent_div_3_Template__svg_svg_click_13_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.nextMonth(); });
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
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ngx-datepicker-calendar-container ngx-datepicker-position-", ctx_r1.position, "");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.barTitle);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.view === "days");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.view === "years");
} }
const _c2 = ["*"];
// Counter for calculating the auto-incrementing field ID
let counter = 0;
/**
 * Internal library helper that helps to check if value is empty
 * @param value
 */
const isNil = (value) => {
    return (typeof value === 'undefined') || (value === null);
};
export class NgDatepickerComponent {
    constructor(elementRef) {
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
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
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
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    get value() {
        return this.innerValue;
    }
    set value(val) {
        this.innerValue = val;
        this.onChangeCallback(this.innerValue);
    }
    ngOnInit() {
        this.view = 'days';
        this.date = new Date();
        this.setOptions();
        this.initDayNames();
        this.initYears();
        // Check if 'position' property is correct
        if (this.positions.indexOf(this.position) === -1) {
            throw new TypeError(`ng-datepicker: invalid position property value '${this.position}' (expected: ${this.positions.join(', ')})`);
        }
    }
    ngOnChanges(changes) {
        if ('options' in changes) {
            this.setOptions();
            this.initDayNames();
            this.init();
            this.initYears();
        }
    }
    get defaultFieldId() {
        // Only evaluate and increment if required
        const value = `datepicker-${counter++}`;
        Object.defineProperty(this, 'defaultFieldId', { value });
        return value;
    }
    setOptions() {
        const today = new Date(); // this const was added because during my tests, I noticed that at this level this.date is undefined
        this.minYear = this.options && this.options.minYear || getYear(today) - 30;
        this.maxYear = this.options && this.options.maxYear || getYear(today) + 30;
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
    }
    nextMonth() {
        this.date = addMonths(this.date, 1);
        this.init();
    }
    prevMonth() {
        this.date = subMonths(this.date, 1);
        this.init();
    }
    setDate(i) {
        this.date = this.days[i].date;
        this.value = this.date;
        this.init();
        this.close();
    }
    setYear(i) {
        this.date = setYear(this.date, this.years[i].year);
        this.init();
        this.initYears();
        this.view = 'days';
    }
    /**
     * Checks if specified date is in range of min and max dates
     * @param date
     */
    isDateSelectable(date) {
        if (isNil(this.options)) {
            return true;
        }
        const minDateSet = !isNil(this.options.minDate);
        const maxDateSet = !isNil(this.options.maxDate);
        const timestamp = date.valueOf();
        if (minDateSet && (timestamp < this.options.minDate.valueOf())) {
            return false;
        }
        if (maxDateSet && (timestamp > this.options.maxDate.valueOf())) {
            return false;
        }
        return true;
    }
    init() {
        // this.date may be null after .reset(); fall back to current date.
        const actualDate = this.date || new Date();
        const start = startOfMonth(actualDate);
        const end = endOfMonth(actualDate);
        this.days = eachDay(start, end).map(date => {
            return {
                date: date,
                day: getDate(date),
                month: getMonth(date),
                year: getYear(date),
                inThisMonth: true,
                isToday: isToday(date),
                isSelected: isSameDay(date, this.innerValue) && isSameMonth(date, this.innerValue) && isSameYear(date, this.innerValue),
                isSelectable: this.isDateSelectable(date)
            };
        });
        const tmp = getDay(start) - this.firstCalendarDay;
        const prevDays = tmp < 0 ? 7 - this.firstCalendarDay : tmp;
        for (let i = 1; i <= prevDays; i++) {
            const date = subDays(start, i);
            this.days.unshift({
                date: date,
                day: getDate(date),
                month: getMonth(date),
                year: getYear(date),
                inThisMonth: false,
                isToday: isToday(date),
                isSelected: isSameDay(date, this.innerValue) && isSameMonth(date, this.innerValue) && isSameYear(date, this.innerValue),
                isSelectable: this.isDateSelectable(date)
            });
        }
        if (this.innerValue) {
            this.displayValue = format(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = format(start, this.barTitleFormat, this.locale);
        }
        else {
            this.displayValue = '';
            this.barTitle = this.useEmptyBarTitle ? this.barTitleIfEmpty : format(start, this.barTitleFormat, this.locale);
        }
    }
    initYears() {
        const range = this.maxYear - this.minYear;
        this.years = Array.from(new Array(range), (x, i) => i + this.minYear).map(year => {
            return { year: year, isThisYear: year === getYear(this.date) };
        });
    }
    initDayNames() {
        this.dayNames = [];
        const start = this.firstCalendarDay;
        for (let i = start; i <= 6 + start; i++) {
            const date = setDay(new Date(), i);
            this.dayNames.push(format(date, this.dayNamesFormat, this.locale));
        }
    }
    toggleView() {
        this.view = this.view === 'days' ? 'years' : 'days';
    }
    toggle() {
        this.isOpened = !this.isOpened;
        if (!this.isOpened && this.view === 'years') {
            this.toggleView();
        }
    }
    close() {
        this.isOpened = false;
        if (this.view === 'years') {
            this.toggleView();
        }
    }
    reset(fireValueChangeEvent = false) {
        this.date = null;
        this.innerValue = null;
        this.init();
        if (fireValueChangeEvent && this.onChangeCallback) {
            this.onChangeCallback(this.innerValue);
        }
    }
    writeValue(val) {
        if (val) {
            this.date = val;
            this.innerValue = val;
            this.init();
            this.displayValue = format(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = format(startOfMonth(val), this.barTitleFormat, this.locale);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    onBlur(e) {
        if (!this.isOpened) {
            return;
        }
        const input = this.elementRef.nativeElement.querySelector('.ngx-datepicker-input');
        if (input == null) {
            return;
        }
        if (e.target === input || input.contains(e.target)) {
            return;
        }
        const container = this.elementRef.nativeElement.querySelector('.ngx-datepicker-calendar-container');
        if (container && container !== e.target && !container.contains(e.target) && !e.target.classList.contains('year-unit')) {
            this.close();
        }
    }
}
NgDatepickerComponent.ɵfac = function NgDatepickerComponent_Factory(t) { return new (t || NgDatepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
NgDatepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgDatepickerComponent, selectors: [["ng-datepicker"]], hostBindings: function NgDatepickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NgDatepickerComponent_click_HostBindingHandler($event) { return ctx.onBlur($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { options: "options", headless: "headless", isOpened: "isOpened", position: "position" }, features: [i0.ɵɵProvidersFeature([
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgDatepickerComponent), multi: true }
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgDatepickerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-datepicker',
                templateUrl: 'ng-datepicker.component.html',
                styleUrls: ['ng-datepicker.component.sass'],
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgDatepickerComponent), multi: true }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { options: [{
            type: Input
        }], headless: [{
            type: Input
        }], isOpened: [{
            type: Input
        }], position: [{
            type: Input
        }], onBlur: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9uZy1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsImNvbXBvbmVudC9uZy1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE0QixVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7SUNuQmhCLGdDQUVBO0lBRmtFLHlOQUEwQiwrS0FBQTtJQUE1RixpQkFFQTs7O0lBRmtFLDZDQUEwQixtQ0FBQSw0QkFBQSw0QkFBQSxzQkFBQSw2QkFBQTs7O0lBNkN0RixnQ0FBMEQ7SUFBQSxZQUFVO0lBQUEsaUJBQU87OztJQUFqQixlQUFVO0lBQVYsNkJBQVU7Ozs7O0lBR3BFLGdDQUVFO0lBREEsaVNBQXdDO0lBQ3hDLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBSHlELHNJQUEySTtJQUV6TSxlQUNGO0lBREUsNENBQ0Y7Ozs7SUFSSixvQkFDRTtJQURGLCtCQUNFO0lBQUEsK0JBQ0U7SUFBQSxzRkFBMEQ7SUFDNUQsaUJBQU07SUFDTiwrQkFDRTtJQUFBLHNGQUVFO0lBRUosaUJBQU07SUFDUixpQkFBTTs7O0lBUjBCLGVBQTZCO0lBQTdCLHlDQUE2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QzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ2xHO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQTZRTCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgc3RhcnRPZk1vbnRoLFxuICBlbmRPZk1vbnRoLFxuICBhZGRNb250aHMsXG4gIHN1Yk1vbnRocyxcbiAgc2V0WWVhcixcbiAgZWFjaERheSxcbiAgZ2V0RGF0ZSxcbiAgZ2V0TW9udGgsXG4gIGdldFllYXIsXG4gIGlzVG9kYXksXG4gIGlzU2FtZURheSxcbiAgaXNTYW1lTW9udGgsXG4gIGlzU2FtZVllYXIsXG4gIGZvcm1hdCxcbiAgZ2V0RGF5LFxuICBzdWJEYXlzLFxuICBzZXREYXlcbn0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSVNsaW1TY3JvbGxPcHRpb25zIH0gZnJvbSAnbmd4LXNsaW1zY3JvbGwnO1xuXG5leHBvcnQgdHlwZSBBZGRDbGFzcyA9IHN0cmluZyB8IHN0cmluZ1tdIHwgeyBbazogc3RyaW5nXTogYm9vbGVhbiB9IHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyT3B0aW9ucyB7XG4gIG1pblllYXI/OiBudW1iZXI7IC8vIGRlZmF1bHQ6IGN1cnJlbnQgeWVhciAtIDMwXG4gIG1heFllYXI/OiBudW1iZXI7IC8vIGRlZmF1bHQ6IGN1cnJlbnQgeWVhciArIDMwXG4gIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7IC8vIGRlZmF1bHQ6ICdNTU0gRFssXSBZWVlZJ1xuICBiYXJUaXRsZUZvcm1hdD86IHN0cmluZzsgLy8gZGVmYXVsdDogJ01NTU0gWVlZWSdcbiAgZGF5TmFtZXNGb3JtYXQ/OiBzdHJpbmc7IC8vIGRlZmF1bHQgJ2RkZCdcbiAgYmFyVGl0bGVJZkVtcHR5Pzogc3RyaW5nO1xuICBmaXJzdENhbGVuZGFyRGF5PzogbnVtYmVyOyAvLyAwID0gU3VuZGF5IChkZWZhdWx0KSwgMSA9IE1vbmRheSwgLi5cbiAgbG9jYWxlPzogb2JqZWN0O1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgbWF4RGF0ZT86IERhdGU7XG4gIC8qKiBQbGFjZWhvbGRlciBmb3IgdGhlIGlucHV0IGZpZWxkICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAvKiogW25nQ2xhc3NdIHRvIGFkZCB0byB0aGUgaW5wdXQgZmllbGQgKi9cbiAgYWRkQ2xhc3M/OiBBZGRDbGFzcztcbiAgLyoqIFtuZ1N0eWxlXSB0byBhZGQgdG8gdGhlIGlucHV0IGZpZWxkICovXG4gIGFkZFN0eWxlPzogeyBbazogc3RyaW5nXTogYW55IH0gfCBudWxsO1xuICAvKiogSUQgdG8gYXNzaWduIHRvIHRoZSBpbnB1dCBmaWVsZCAqL1xuICBmaWVsZElkPzogc3RyaW5nO1xuICAvKiogSWYgZmFsc2UsIGJhclRpdGxlSWZFbXB0eSB3aWxsIGJlIGRpc3JlZ2FyZGVkIGFuZCBhIGRhdGUgd2lsbCBhbHdheXMgYmUgc2hvd24uIERlZmF1bHQ6IHRydWUgKi9cbiAgdXNlRW1wdHlCYXJUaXRsZT86IGJvb2xlYW47XG59XG5cbi8vIENvdW50ZXIgZm9yIGNhbGN1bGF0aW5nIHRoZSBhdXRvLWluY3JlbWVudGluZyBmaWVsZCBJRFxubGV0IGNvdW50ZXIgPSAwO1xuXG4vKipcbiAqIEludGVybmFsIGxpYnJhcnkgaGVscGVyIHRoYXQgaGVscHMgdG8gY2hlY2sgaWYgdmFsdWUgaXMgZW1wdHlcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5jb25zdCBpc05pbCA9ICh2YWx1ZTogRGF0ZSB8IERhdGVwaWNrZXJPcHRpb25zKSA9PiB7XG4gIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgfHwgKHZhbHVlID09PSBudWxsKTtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJ25nLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmctZGF0ZXBpY2tlci5jb21wb25lbnQuc2FzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ0RhdGVwaWNrZXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgb3B0aW9uczogRGF0ZXBpY2tlck9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgZGF0ZXBpY2tlcidzIGlucHV0XG4gICAqL1xuICBASW5wdXQoKSBoZWFkbGVzcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZXQgZGF0ZXBpY2tlcidzIHZpc2liaWxpdHkgc3RhdGVcbiAgICovXG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERhdGVwaWNrZXIgZHJvcGRvd24gcG9zaXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2JvdHRvbS1yaWdodCc7XG5cbiAgcHJpdmF0ZSBwb3NpdGlvbnMgPSBbJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXTtcblxuICBpbm5lclZhbHVlOiBEYXRlO1xuICBkaXNwbGF5VmFsdWU6IHN0cmluZztcbiAgZGlzcGxheUZvcm1hdDogc3RyaW5nO1xuICBkYXRlOiBEYXRlO1xuICBiYXJUaXRsZTogc3RyaW5nO1xuICBiYXJUaXRsZUZvcm1hdDogc3RyaW5nO1xuICBiYXJUaXRsZUlmRW1wdHk6IHN0cmluZztcbiAgbWluWWVhcjogbnVtYmVyO1xuICBtYXhZZWFyOiBudW1iZXI7XG4gIGZpcnN0Q2FsZW5kYXJEYXk6IG51bWJlcjtcbiAgdmlldzogc3RyaW5nO1xuICB5ZWFyczogeyB5ZWFyOiBudW1iZXI7IGlzVGhpc1llYXI6IGJvb2xlYW4gfVtdO1xuICBkYXlOYW1lczogc3RyaW5nW107XG4gIGRheU5hbWVzRm9ybWF0OiBzdHJpbmc7XG4gIHNjcm9sbE9wdGlvbnM6IElTbGltU2Nyb2xsT3B0aW9ucztcbiAgZGF5czoge1xuICAgIGRhdGU6IERhdGU7XG4gICAgZGF5OiBudW1iZXI7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgaW5UaGlzTW9udGg6IGJvb2xlYW47XG4gICAgaXNUb2RheTogYm9vbGVhbjtcbiAgICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICAgIGlzU2VsZWN0YWJsZTogYm9vbGVhbjtcbiAgfVtdO1xuICBsb2NhbGU6IG9iamVjdDtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgYWRkQ2xhc3M6IEFkZENsYXNzO1xuICBhZGRTdHlsZTogeyBbazogc3RyaW5nXTogYW55IH0gfCBudWxsO1xuICBmaWVsZElkOiBzdHJpbmc7XG4gIHVzZUVtcHR5QmFyVGl0bGU6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWw6IERhdGUpIHtcbiAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaW5uZXJWYWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnNjcm9sbE9wdGlvbnMgPSB7XG4gICAgICBiYXJCYWNrZ3JvdW5kOiAnI0RGRTNFOScsXG4gICAgICBncmlkQmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgYmFyQm9yZGVyUmFkaXVzOiAnMycsXG4gICAgICBncmlkQm9yZGVyUmFkaXVzOiAnMycsXG4gICAgICBiYXJXaWR0aDogJzYnLFxuICAgICAgZ3JpZFdpZHRoOiAnNicsXG4gICAgICBiYXJNYXJnaW46ICcwJyxcbiAgICAgIGdyaWRNYXJnaW46ICcwJ1xuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZpZXcgPSAnZGF5cyc7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICB0aGlzLmluaXREYXlOYW1lcygpO1xuICAgIHRoaXMuaW5pdFllYXJzKCk7XG5cbiAgICAvLyBDaGVjayBpZiAncG9zaXRpb24nIHByb3BlcnR5IGlzIGNvcnJlY3RcbiAgICBpZiAodGhpcy5wb3NpdGlvbnMuaW5kZXhPZih0aGlzLnBvc2l0aW9uKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYG5nLWRhdGVwaWNrZXI6IGludmFsaWQgcG9zaXRpb24gcHJvcGVydHkgdmFsdWUgJyR7dGhpcy5wb3NpdGlvbn0nIChleHBlY3RlZDogJHt0aGlzLnBvc2l0aW9ucy5qb2luKCcsICcpfSlgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdvcHRpb25zJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgIHRoaXMuaW5pdERheU5hbWVzKCk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuaW5pdFllYXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZmF1bHRGaWVsZElkKCk6IHN0cmluZyB7XG4gICAgLy8gT25seSBldmFsdWF0ZSBhbmQgaW5jcmVtZW50IGlmIHJlcXVpcmVkXG4gICAgY29uc3QgdmFsdWUgPSBgZGF0ZXBpY2tlci0ke2NvdW50ZXIrK31gO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVmYXVsdEZpZWxkSWQnLCB7dmFsdWV9KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHNldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOyAvLyB0aGlzIGNvbnN0IHdhcyBhZGRlZCBiZWNhdXNlIGR1cmluZyBteSB0ZXN0cywgSSBub3RpY2VkIHRoYXQgYXQgdGhpcyBsZXZlbCB0aGlzLmRhdGUgaXMgdW5kZWZpbmVkXG4gICAgdGhpcy5taW5ZZWFyID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5taW5ZZWFyIHx8IGdldFllYXIodG9kYXkpIC0gMzA7XG4gICAgdGhpcy5tYXhZZWFyID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5tYXhZZWFyIHx8IGdldFllYXIodG9kYXkpICsgMzA7XG4gICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5kaXNwbGF5Rm9ybWF0IHx8ICdNTU0gRFssXSBZWVlZJztcbiAgICB0aGlzLmJhclRpdGxlRm9ybWF0ID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5iYXJUaXRsZUZvcm1hdCB8fCAnTU1NTSBZWVlZJztcbiAgICB0aGlzLmRheU5hbWVzRm9ybWF0ID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5kYXlOYW1lc0Zvcm1hdCB8fCAnZGRkJztcbiAgICB0aGlzLmJhclRpdGxlSWZFbXB0eSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYmFyVGl0bGVJZkVtcHR5IHx8ICdDbGljayB0byBzZWxlY3QgYSBkYXRlJztcbiAgICB0aGlzLmZpcnN0Q2FsZW5kYXJEYXkgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmZpcnN0Q2FsZW5kYXJEYXkgfHwgMDtcbiAgICB0aGlzLmxvY2FsZSA9IHRoaXMub3B0aW9ucyAmJiB7IGxvY2FsZTogdGhpcy5vcHRpb25zLmxvY2FsZSB9IHx8IHt9O1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyIHx8ICcnO1xuICAgIHRoaXMuYWRkQ2xhc3MgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFkZENsYXNzIHx8IHt9O1xuICAgIHRoaXMuYWRkU3R5bGUgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFkZFN0eWxlIHx8IHt9O1xuICAgIHRoaXMuZmllbGRJZCA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZmllbGRJZCB8fCB0aGlzLmRlZmF1bHRGaWVsZElkO1xuICAgIHRoaXMudXNlRW1wdHlCYXJUaXRsZSA9IHRoaXMub3B0aW9ucyAmJiAndXNlRW1wdHlCYXJUaXRsZScgaW4gdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zLnVzZUVtcHR5QmFyVGl0bGUgOiB0cnVlO1xuICB9XG5cbiAgbmV4dE1vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZSA9IGFkZE1vbnRocyh0aGlzLmRhdGUsIDEpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJldk1vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZSA9IHN1Yk1vbnRocyh0aGlzLmRhdGUsIDEpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgc2V0RGF0ZShpOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGUgPSB0aGlzLmRheXNbaV0uZGF0ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5kYXRlO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHNldFllYXIoaTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlID0gc2V0WWVhcih0aGlzLmRhdGUsIHRoaXMueWVhcnNbaV0ueWVhcik7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5pbml0WWVhcnMoKTtcbiAgICB0aGlzLnZpZXcgPSAnZGF5cyc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHNwZWNpZmllZCBkYXRlIGlzIGluIHJhbmdlIG9mIG1pbiBhbmQgbWF4IGRhdGVzXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBwcml2YXRlIGlzRGF0ZVNlbGVjdGFibGUoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChpc05pbCh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtaW5EYXRlU2V0ID0gIWlzTmlsKHRoaXMub3B0aW9ucy5taW5EYXRlKTtcbiAgICBjb25zdCBtYXhEYXRlU2V0ID0gIWlzTmlsKHRoaXMub3B0aW9ucy5tYXhEYXRlKTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLnZhbHVlT2YoKTtcblxuICAgIGlmIChtaW5EYXRlU2V0ICYmICh0aW1lc3RhbXAgPCB0aGlzLm9wdGlvbnMubWluRGF0ZS52YWx1ZU9mKCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG1heERhdGVTZXQgJiYgKHRpbWVzdGFtcCA+IHRoaXMub3B0aW9ucy5tYXhEYXRlLnZhbHVlT2YoKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgLy8gdGhpcy5kYXRlIG1heSBiZSBudWxsIGFmdGVyIC5yZXNldCgpOyBmYWxsIGJhY2sgdG8gY3VycmVudCBkYXRlLlxuICAgIGNvbnN0IGFjdHVhbERhdGUgPSB0aGlzLmRhdGUgfHwgbmV3IERhdGUoKTtcbiAgICBjb25zdCBzdGFydCA9IHN0YXJ0T2ZNb250aChhY3R1YWxEYXRlKTtcbiAgICBjb25zdCBlbmQgPSBlbmRPZk1vbnRoKGFjdHVhbERhdGUpO1xuXG4gICAgdGhpcy5kYXlzID0gZWFjaERheShzdGFydCwgZW5kKS5tYXAoZGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICBkYXk6IGdldERhdGUoZGF0ZSksXG4gICAgICAgIG1vbnRoOiBnZXRNb250aChkYXRlKSxcbiAgICAgICAgeWVhcjogZ2V0WWVhcihkYXRlKSxcbiAgICAgICAgaW5UaGlzTW9udGg6IHRydWUsXG4gICAgICAgIGlzVG9kYXk6IGlzVG9kYXkoZGF0ZSksXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2FtZURheShkYXRlLCB0aGlzLmlubmVyVmFsdWUpICYmIGlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuaW5uZXJWYWx1ZSkgJiYgaXNTYW1lWWVhcihkYXRlLCB0aGlzLmlubmVyVmFsdWUpLFxuICAgICAgICBpc1NlbGVjdGFibGU6IHRoaXMuaXNEYXRlU2VsZWN0YWJsZShkYXRlKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRtcCA9IGdldERheShzdGFydCkgLSB0aGlzLmZpcnN0Q2FsZW5kYXJEYXk7XG4gICAgY29uc3QgcHJldkRheXMgPSB0bXAgPCAwID8gNyAtIHRoaXMuZmlyc3RDYWxlbmRhckRheSA6IHRtcDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHByZXZEYXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBzdWJEYXlzKHN0YXJ0LCBpKTtcbiAgICAgIHRoaXMuZGF5cy51bnNoaWZ0KHtcbiAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgZGF5OiBnZXREYXRlKGRhdGUpLFxuICAgICAgICBtb250aDogZ2V0TW9udGgoZGF0ZSksXG4gICAgICAgIHllYXI6IGdldFllYXIoZGF0ZSksXG4gICAgICAgIGluVGhpc01vbnRoOiBmYWxzZSxcbiAgICAgICAgaXNUb2RheTogaXNUb2RheShkYXRlKSxcbiAgICAgICAgaXNTZWxlY3RlZDogaXNTYW1lRGF5KGRhdGUsIHRoaXMuaW5uZXJWYWx1ZSkgJiYgaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5pbm5lclZhbHVlKSAmJiBpc1NhbWVZZWFyKGRhdGUsIHRoaXMuaW5uZXJWYWx1ZSksXG4gICAgICAgIGlzU2VsZWN0YWJsZTogdGhpcy5pc0RhdGVTZWxlY3RhYmxlKGRhdGUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IGZvcm1hdCh0aGlzLmlubmVyVmFsdWUsIHRoaXMuZGlzcGxheUZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgICAgdGhpcy5iYXJUaXRsZSA9IGZvcm1hdChzdGFydCwgdGhpcy5iYXJUaXRsZUZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9ICcnO1xuICAgICAgdGhpcy5iYXJUaXRsZSA9IHRoaXMudXNlRW1wdHlCYXJUaXRsZSA/IHRoaXMuYmFyVGl0bGVJZkVtcHR5IDogZm9ybWF0KHN0YXJ0LCB0aGlzLmJhclRpdGxlRm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdFllYXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tYXhZZWFyIC0gdGhpcy5taW5ZZWFyO1xuICAgIHRoaXMueWVhcnMgPSBBcnJheS5mcm9tKG5ldyBBcnJheShyYW5nZSksICh4LCBpKSA9PiBpICsgdGhpcy5taW5ZZWFyKS5tYXAoeWVhciA9PiB7XG4gICAgICByZXR1cm4geyB5ZWFyOiB5ZWFyLCBpc1RoaXNZZWFyOiB5ZWFyID09PSBnZXRZZWFyKHRoaXMuZGF0ZSkgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXREYXlOYW1lcygpOiB2b2lkIHtcbiAgICB0aGlzLmRheU5hbWVzID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmZpcnN0Q2FsZW5kYXJEYXk7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IDYgKyBzdGFydDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlID0gc2V0RGF5KG5ldyBEYXRlKCksIGkpO1xuICAgICAgdGhpcy5kYXlOYW1lcy5wdXNoKGZvcm1hdChkYXRlLCB0aGlzLmRheU5hbWVzRm9ybWF0LCB0aGlzLmxvY2FsZSkpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy52aWV3ID09PSAnZGF5cycgPyAneWVhcnMnIDogJ2RheXMnO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuZWQgPSAhdGhpcy5pc09wZW5lZDtcblxuICAgIGlmICghdGhpcy5pc09wZW5lZCAmJiB0aGlzLnZpZXcgPT09ICd5ZWFycycpIHtcbiAgICAgIHRoaXMudG9nZ2xlVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnZpZXcgPT09ICd5ZWFycycpIHtcbiAgICAgIHRoaXMudG9nZ2xlVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KGZpcmVWYWx1ZUNoYW5nZUV2ZW50ID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGUgPSBudWxsO1xuICAgIHRoaXMuaW5uZXJWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgaWYgKGZpcmVWYWx1ZUNoYW5nZUV2ZW50ICYmIHRoaXMub25DaGFuZ2VDYWxsYmFjaykge1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaW5uZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IERhdGUpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLmRhdGUgPSB2YWw7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gZm9ybWF0KHRoaXMuaW5uZXJWYWx1ZSwgdGhpcy5kaXNwbGF5Rm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgICB0aGlzLmJhclRpdGxlID0gZm9ybWF0KHN0YXJ0T2ZNb250aCh2YWwpLCB0aGlzLmJhclRpdGxlRm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKSBvbkJsdXIoZTogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5pc09wZW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5neC1kYXRlcGlja2VyLWlucHV0Jyk7XG5cbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCA9PT0gaW5wdXQgfHwgaW5wdXQuY29udGFpbnMoPGFueT5lLnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmd4LWRhdGVwaWNrZXItY2FsZW5kYXItY29udGFpbmVyJyk7XG4gICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIgIT09IGUudGFyZ2V0ICYmICFjb250YWluZXIuY29udGFpbnMoPGFueT5lLnRhcmdldCkgJiYgISg8YW55PmUudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ3llYXItdW5pdCcpKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWRhdGVwaWNrZXItY29udGFpbmVyXCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiICpuZ0lmPVwiIWhlYWRsZXNzXCIgY2xhc3M9XCJuZ3gtZGF0ZXBpY2tlci1pbnB1dFwiIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCIgcmVhZG9ubHkgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICBbbmdDbGFzc109XCJhZGRDbGFzc1wiIFtuZ1N0eWxlXT1cImFkZFN0eWxlXCIgW2lkXT1cImZpZWxkSWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwidG9nZ2xlKClcIiAvPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtZGF0ZXBpY2tlci1jYWxlbmRhci1jb250YWluZXIgbmd4LWRhdGVwaWNrZXItcG9zaXRpb24te3twb3NpdGlvbn19XCIgKm5nSWY9XCJpc09wZW5lZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b3BiYXItY29udGFpbmVyXCI+XG4gICAgICA8c3ZnIHdpZHRoPVwiN3B4XCIgaGVpZ2h0PVwiMTBweFwiIHZpZXdCb3g9XCIwIDAgNyAxMFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgKGNsaWNrKT1cInByZXZNb250aCgpXCI+XG4gICAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05MjMuMDAwMDAwLCAtMTg4Mi4wMDAwMDApXCIgZmlsbD1cIiNDRUQwREFcIj5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4MC4wMDAwMDAsIDEzNjEuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQzMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgyNS4wMDAwMDAsIDAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCA3Mi4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxOC4wMDAwMDAsIDE1LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD1cIkJhY2tcIiBwb2ludHM9XCI2LjAxNSA0IDAgOS4wMTMgNi4wMTUgMTQuMDI1XCI+PC9wb2x5Z29uPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9wYmFyLXRpdGxlXCIgKGNsaWNrKT1cInRvZ2dsZVZpZXcoKVwiPnt7IGJhclRpdGxlIH19PC9zcGFuPlxuICAgICAgPHN2ZyB3aWR0aD1cIjdweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDYgMTBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgIChjbGljayk9XCJuZXh0TW9udGgoKVwiPlxuICAgICAgICA8ZyBpZD1cIlNvdXJjZS1TYW5zLS0tVUktRWxlbWVudHMtS2l0XCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICA8ZyBpZD1cIldoaXRlLUxheW91dFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTE4Mi4wMDAwMDAsIC0xODgyLjAwMDAwMClcIiBmaWxsPVwiI0NFRDBEQVwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJEcm9wZG93bnMtJmFtcDstU2VsZWN0b3JcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODAuMDAwMDAwLCAxMzYxLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJEcm9wZG93bnNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQzMC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJDYWxlbmRhclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4MjUuMDAwMDAwLCAwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgNzIuMDAwMDAwKVwiIGlkPVwiVG9wLUJhci1OYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE4LjAwMDAwMCwgMTUuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPVwiRm9yd2FyZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjIuMDA3NTAwLCA5LjAxMjUwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMjYyLjAwNzUwMCwgLTkuMDEyNTAwKSBcIiBwb2ludHM9XCIyNjUuMDE1IDQgMjU5IDkuMDEzIDI2NS4wMTUgMTQuMDI1XCI+PC9wb2x5Z29uPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jYWxlbmRhci1jb250YWluZXJcIiAqbmdJZj1cInZpZXcgPT09ICdkYXlzJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY2FsZW5kYXItZGF5LW5hbWVzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5LW5hbWUtdW5pdFwiICpuZ0Zvcj1cImxldCBuYW1lIG9mIGRheU5hbWVzXCI+e3sgbmFtZSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY2FsZW5kYXItZGF5c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRheS11bml0XCIgKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzOyBsZXQgaSA9IGluZGV4O1wiIFtuZ0NsYXNzXT1cInsgJ2lzLXByZXYtbW9udGgnOiAhZGF5LmluVGhpc01vbnRoLCAnaXMtdG9kYXknOiBkYXkuaXNUb2RheSwgJ2lzLXNlbGVjdGVkJzogZGF5LmlzU2VsZWN0ZWQsICdpcy1kaXNhYmxlZCc6ICFkYXkuaXNTZWxlY3RhYmxlIH1cIlxuICAgICAgICAgIChjbGljayk9XCJkYXkuaXNTZWxlY3RhYmxlICYmIHNldERhdGUoaSlcIj5cbiAgICAgICAgICB7eyBkYXkuZGF5IH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNhbGVuZGFyLWNvbnRhaW5lclwiICpuZ0lmPVwidmlldyA9PT0gJ3llYXJzJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY2FsZW5kYXIteWVhcnNcIiBzbGltU2Nyb2xsIFtvcHRpb25zXT1cInNjcm9sbE9wdGlvbnNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ5ZWFyLXVuaXRcIiAqbmdGb3I9XCJsZXQgeWVhciBvZiB5ZWFyczsgbGV0IGkgPSBpbmRleDtcIiBbbmdDbGFzc109XCJ7ICdpcy1zZWxlY3RlZCc6IHllYXIuaXNUaGlzWWVhciB9XCIgKGNsaWNrKT1cInNldFllYXIoaSlcIj57eyB5ZWFyLnllYXIgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==