"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_slimscroll_1 = require("ngx-slimscroll");
var ng_datepicker_component_1 = require("../component/ng-datepicker.component");
var i0 = require("@angular/core");
var NgDatepickerModule = /** @class */ (function () {
    function NgDatepickerModule() {
    }
    NgDatepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgDatepickerModule });
    NgDatepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgDatepickerModule_Factory(t) { return new (t || NgDatepickerModule)(); }, imports: [[common_1.CommonModule, forms_1.FormsModule, ngx_slimscroll_1.NgSlimScrollModule],
            common_1.CommonModule, forms_1.FormsModule, ngx_slimscroll_1.NgSlimScrollModule] });
    return NgDatepickerModule;
}());
exports.NgDatepickerModule = NgDatepickerModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgDatepickerModule, { declarations: [ng_datepicker_component_1.NgDatepickerComponent], imports: [common_1.CommonModule, forms_1.FormsModule, ngx_slimscroll_1.NgSlimScrollModule], exports: [ng_datepicker_component_1.NgDatepickerComponent, common_1.CommonModule, forms_1.FormsModule, ngx_slimscroll_1.NgSlimScrollModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgDatepickerModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [ng_datepicker_component_1.NgDatepickerComponent],
                imports: [common_1.CommonModule, forms_1.FormsModule, ngx_slimscroll_1.NgSlimScrollModule],
                exports: [ng_datepicker_component_1.NgDatepickerComponent, common_1.CommonModule, forms_1.FormsModule, ngx_slimscroll_1.NgSlimScrollModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbIm1vZHVsZS9uZy1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLGlEQUFvRDtBQUNwRCxnRkFBNkU7O0FBRTdFO0lBQUE7S0FLbUM7MERBQXRCLGtCQUFrQjt1SEFBbEIsa0JBQWtCLGtCQUhwQixDQUFFLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSxtQ0FBa0IsQ0FBRTtZQUN4QixxQkFBWSxFQUFFLG1CQUFXLEVBQUUsbUNBQWtCOzZCQVRqRjtDQVdtQyxBQUxuQyxJQUttQztBQUF0QixnREFBa0I7d0ZBQWxCLGtCQUFrQixtQkFKYiwrQ0FBcUIsYUFDMUIscUJBQVksRUFBRSxtQkFBVyxFQUFFLG1DQUFrQixhQUM3QywrQ0FBcUIsRUFBRSxxQkFBWSxFQUFFLG1CQUFXLEVBQUUsbUNBQWtCO2tEQUVwRSxrQkFBa0I7Y0FMOUIsZUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFFLCtDQUFxQixDQUFFO2dCQUN2QyxPQUFPLEVBQUUsQ0FBRSxxQkFBWSxFQUFFLG1CQUFXLEVBQUUsbUNBQWtCLENBQUU7Z0JBQzFELE9BQU8sRUFBRSxDQUFFLCtDQUFxQixFQUFFLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSxtQ0FBa0IsQ0FBRTthQUNsRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1NsaW1TY3JvbGxNb2R1bGUgfSBmcm9tICduZ3gtc2xpbXNjcm9sbCc7XG5pbXBvcnQgeyBOZ0RhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvbmctZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgTmdEYXRlcGlja2VyQ29tcG9uZW50IF0sXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdTbGltU2Nyb2xsTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFsgTmdEYXRlcGlja2VyQ29tcG9uZW50LCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOZ1NsaW1TY3JvbGxNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0RhdGVwaWNrZXJNb2R1bGUgeyB9XG4iXX0=