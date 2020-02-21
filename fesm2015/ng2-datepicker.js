import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵtext, ɵɵadvance, ɵɵtextInterpolate, ɵɵpureFunction4, ɵɵtextInterpolate1, ɵɵnamespaceSVG, ɵɵnamespaceHTML, ɵɵtemplate, ɵɵpureFunction1, ɵɵelement, ɵɵclassMapInterpolate1, ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵresolveDocument, ɵɵProvidersFeature, forwardRef, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, Input, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgClass, NgStyle, NgForOf, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { SlimScrollDirective, NgSlimScrollModule } from 'ngx-slimscroll';
import { getYear, addMonths, subMonths, setYear, startOfMonth, endOfMonth, eachDay, getDate, getMonth, isToday, isSameDay, isSameMonth, isSameYear, getDay, subDays, format, setDay } from 'date-fns';

function NgDatepickerComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 3);
    ɵɵlistener("ngModelChange", function NgDatepickerComponent_input_1_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.displayValue = $event; })("click", function NgDatepickerComponent_input_1_Template_input_click_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.toggle(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r0.displayValue)("placeholder", ctx_r0.placeholder)("ngClass", ctx_r0.addClass)("ngStyle", ctx_r0.addStyle)("id", ctx_r0.fieldId)("disabled", ctx_r0.disabled);
} }
function NgDatepickerComponent_div_3_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const name_r9 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(name_r9);
} }
const _c0 = function (a0, a1, a2, a3) { return { "is-prev-month": a0, "is-today": a1, "is-selected": a2, "is-disabled": a3 }; };
function NgDatepickerComponent_div_3_div_22_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 30);
    ɵɵlistener("click", function NgDatepickerComponent_div_3_div_22_span_4_Template_span_click_0_listener($event) { ɵɵrestoreView(_r13); const day_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r12 = ɵɵnextContext(3); return day_r10.isSelectable && ctx_r12.setDate(i_r11); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction4(2, _c0, !day_r10.inThisMonth, day_r10.isToday, day_r10.isSelected, !day_r10.isSelectable));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", day_r10.day, " ");
} }
function NgDatepickerComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 24);
    ɵɵelementStart(1, "div", 25);
    ɵɵtemplate(2, NgDatepickerComponent_div_3_div_22_span_2_Template, 2, 1, "span", 26);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 27);
    ɵɵtemplate(4, NgDatepickerComponent_div_3_div_22_span_4_Template, 2, 7, "span", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.dayNames);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.days);
} }
const _c1 = function (a0) { return { "is-selected": a0 }; };
function NgDatepickerComponent_div_3_div_23_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 33);
    ɵɵlistener("click", function NgDatepickerComponent_div_3_div_23_span_2_Template_span_click_0_listener($event) { ɵɵrestoreView(_r18); const i_r16 = ctx.index; const ctx_r17 = ɵɵnextContext(3); return ctx_r17.setYear(i_r16); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const year_r15 = ctx.$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c1, year_r15.isThisYear));
    ɵɵadvance(1);
    ɵɵtextInterpolate(year_r15.year);
} }
function NgDatepickerComponent_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 24);
    ɵɵelementStart(1, "div", 31);
    ɵɵtemplate(2, NgDatepickerComponent_div_3_div_23_span_2_Template, 2, 4, "span", 32);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("options", ctx_r6.scrollOptions);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.years);
} }
function NgDatepickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 4);
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 5);
    ɵɵlistener("click", function NgDatepickerComponent_div_3_Template__svg_svg_click_2_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(); return ctx_r19.prevMonth(); });
    ɵɵelementStart(3, "g", 6);
    ɵɵelementStart(4, "g", 7);
    ɵɵelementStart(5, "g", 8);
    ɵɵelementStart(6, "g", 9);
    ɵɵelementStart(7, "g", 10);
    ɵɵelementStart(8, "g", 11);
    ɵɵelementStart(9, "g", 12);
    ɵɵelement(10, "polygon", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(11, "span", 14);
    ɵɵlistener("click", function NgDatepickerComponent_div_3_Template_span_click_11_listener($event) { ɵɵrestoreView(_r20); const ctx_r21 = ɵɵnextContext(); return ctx_r21.toggleView(); });
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵnamespaceSVG();
    ɵɵelementStart(13, "svg", 15);
    ɵɵlistener("click", function NgDatepickerComponent_div_3_Template__svg_svg_click_13_listener($event) { ɵɵrestoreView(_r20); const ctx_r22 = ɵɵnextContext(); return ctx_r22.nextMonth(); });
    ɵɵelementStart(14, "g", 16);
    ɵɵelementStart(15, "g", 17);
    ɵɵelementStart(16, "g", 18);
    ɵɵelementStart(17, "g", 19);
    ɵɵelementStart(18, "g", 20);
    ɵɵelementStart(19, "g", 21);
    ɵɵelementStart(20, "g", 12);
    ɵɵelement(21, "polygon", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(22, NgDatepickerComponent_div_3_div_22_Template, 5, 2, "div", 23);
    ɵɵtemplate(23, NgDatepickerComponent_div_3_div_23_Template, 3, 2, "div", 23);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ngx-datepicker-calendar-container ngx-datepicker-position-", ctx_r1.position, "");
    ɵɵadvance(12);
    ɵɵtextInterpolate(ctx_r1.barTitle);
    ɵɵadvance(10);
    ɵɵproperty("ngIf", ctx_r1.view === "days");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.view === "years");
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
class NgDatepickerComponent {
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
NgDatepickerComponent.ɵfac = function NgDatepickerComponent_Factory(t) { return new (t || NgDatepickerComponent)(ɵɵdirectiveInject(ElementRef)); };
NgDatepickerComponent.ɵcmp = ɵɵdefineComponent({ type: NgDatepickerComponent, selectors: [["ng-datepicker"]], hostBindings: function NgDatepickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function NgDatepickerComponent_click_HostBindingHandler($event) { return ctx.onBlur($event); }, false, ɵɵresolveDocument);
    } }, inputs: { options: "options", headless: "headless", isOpened: "isOpened", position: "position" }, features: [ɵɵProvidersFeature([
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgDatepickerComponent), multi: true }
        ]), ɵɵNgOnChangesFeature()], ngContentSelectors: _c2, decls: 4, vars: 2, consts: [[1, "ngx-datepicker-container"], ["type", "text", "class", "ngx-datepicker-input", "readonly", "", 3, "ngModel", "placeholder", "ngClass", "ngStyle", "id", "disabled", "ngModelChange", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["type", "text", "readonly", "", 1, "ngx-datepicker-input", 3, "ngModel", "placeholder", "ngClass", "ngStyle", "id", "disabled", "ngModelChange", "click"], [1, "topbar-container"], ["width", "7px", "height", "10px", "viewBox", "0 0 7 10", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "click"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-923.000000, -1882.000000)", "fill", "#CED0DA"], ["transform", "translate(80.000000, 1361.000000)"], ["transform", "translate(0.000000, 430.000000)"], ["transform", "translate(825.000000, 0.000000)"], ["transform", "translate(0.000000, 72.000000)"], ["transform", "translate(18.000000, 15.000000)"], ["id", "Back", "points", "6.015 4 0 9.013 6.015 14.025"], [1, "topbar-title", 3, "click"], ["width", "7px", "height", "10px", "viewBox", "0 0 6 10", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "click"], ["id", "Source-Sans---UI-Elements-Kit", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "White-Layout", "transform", "translate(-1182.000000, -1882.000000)", "fill", "#CED0DA"], ["id", "Dropdowns-&-Selector", "transform", "translate(80.000000, 1361.000000)"], ["id", "Dropdowns", "transform", "translate(0.000000, 430.000000)"], ["id", "Calendar", "transform", "translate(825.000000, 0.000000)"], ["transform", "translate(0.000000, 72.000000)", "id", "Top-Bar-Nav"], ["id", "Forward", "transform", "translate(262.007500, 9.012500) scale(-1, 1) translate(-262.007500, -9.012500) ", "points", "265.015 4 259 9.013 265.015 14.025"], ["class", "main-calendar-container", 4, "ngIf"], [1, "main-calendar-container"], [1, "main-calendar-day-names"], ["class", "day-name-unit", 4, "ngFor", "ngForOf"], [1, "main-calendar-days"], ["class", "day-unit", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "day-name-unit"], [1, "day-unit", 3, "ngClass", "click"], ["slimScroll", "", 1, "main-calendar-years", 3, "options"], ["class", "year-unit", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "year-unit", 3, "ngClass", "click"]], template: function NgDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, NgDatepickerComponent_input_1_Template, 1, 6, "input", 1);
        ɵɵprojection(2);
        ɵɵtemplate(3, NgDatepickerComponent_div_3_Template, 24, 6, "div", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.headless);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.isOpened);
    } }, directives: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NgClass, NgStyle, NgForOf, SlimScrollDirective], styles: [".ngx-datepicker-position-bottom-left[_ngcontent-%COMP%]{top:40px;right:0}.ngx-datepicker-position-bottom-right[_ngcontent-%COMP%]{top:40px;left:0}.ngx-datepicker-position-top-left[_ngcontent-%COMP%]{bottom:40px;right:0}.ngx-datepicker-position-top-right[_ngcontent-%COMP%]{bottom:40px;left:0}.ngx-datepicker-container[_ngcontent-%COMP%]{position:relative}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-input[_ngcontent-%COMP%]{padding:5px 10px;font-size:14px;width:200px;outline:0;border:1px solid #dfe3e9}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]{position:absolute;width:300px;background:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,.08);border:1px solid #dfe3e9;border-radius:4px}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]{width:100%;height:50px;padding:15px;border-bottom:1px solid #dfe3e9;display:flex;justify-content:space-between;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{cursor:pointer}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]{fill:#ced0da}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .topbar-container[_ngcontent-%COMP%]   .topbar-title[_ngcontent-%COMP%]{color:#3d495c;font-size:14px;font-weight:600;cursor:pointer}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:15px 10px 0;font-size:12px;font-weight:500}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-day-names[_ngcontent-%COMP%]{color:#a4a9b1;width:100%;display:flex;align-items:center}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-day-names[_ngcontent-%COMP%]   .day-name-unit[_ngcontent-%COMP%]{width:calc(100% / 7);text-transform:uppercase;text-align:center}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]{padding:15px 0;width:100%;display:inline-block;max-height:275px;overflow:hidden}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]{width:calc(100% / 7);height:40px;display:inline-flex;float:left;align-items:center;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;color:#3d495c}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-prev-month[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-prev-month[_ngcontent-%COMP%]{color:#a4a9b1}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-today[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]:hover{background:#a4a9b1;color:#fff}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-selected[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-selected[_ngcontent-%COMP%]{background:#1a91eb;color:#fff}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%], .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]{cursor:not-allowed;color:#a4a9b1}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-days[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .day-unit.is-disabled[_ngcontent-%COMP%]:hover, .ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit.is-disabled[_ngcontent-%COMP%]:hover{background:0 0}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]{height:210px;display:block;padding:0}.ngx-datepicker-container[_ngcontent-%COMP%]   .ngx-datepicker-calendar-container[_ngcontent-%COMP%]   .main-calendar-container[_ngcontent-%COMP%]   .main-calendar-years[_ngcontent-%COMP%]   .year-unit[_ngcontent-%COMP%]{width:calc(100% / 3);border-radius:10px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgDatepickerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-datepicker',
                templateUrl: 'ng-datepicker.component.html',
                styleUrls: ['ng-datepicker.component.sass'],
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgDatepickerComponent), multi: true }
                ]
            }]
    }], function () { return [{ type: ElementRef }]; }, { options: [{
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

class NgDatepickerModule {
}
NgDatepickerModule.ɵmod = ɵɵdefineNgModule({ type: NgDatepickerModule });
NgDatepickerModule.ɵinj = ɵɵdefineInjector({ factory: function NgDatepickerModule_Factory(t) { return new (t || NgDatepickerModule)(); }, imports: [[CommonModule, FormsModule, NgSlimScrollModule],
        CommonModule, FormsModule, NgSlimScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgDatepickerModule, { declarations: [NgDatepickerComponent], imports: [CommonModule, FormsModule, NgSlimScrollModule], exports: [NgDatepickerComponent, CommonModule, FormsModule, NgSlimScrollModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgDatepickerModule, [{
        type: NgModule,
        args: [{
                declarations: [NgDatepickerComponent],
                imports: [CommonModule, FormsModule, NgSlimScrollModule],
                exports: [NgDatepickerComponent, CommonModule, FormsModule, NgSlimScrollModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { NgDatepickerComponent, NgDatepickerModule };
//# sourceMappingURL=ng2-datepicker.js.map
