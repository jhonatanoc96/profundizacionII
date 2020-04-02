(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/browse/browse-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRoutingModule", function() { return BrowseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse.component.ts");



var routes = [
    { path: "", component: _browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"] }
];
var BrowseRoutingModule = /** @class */ (function () {
    function BrowseRoutingModule() {
    }
    BrowseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], BrowseRoutingModule);
    return BrowseRoutingModule;
}());



/***/ }),

/***/ "./app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Browse\"></Label>\n</ActionBar>\n\n<GridLayout class=\"page__content\">\n    <Label class=\"page__content-icon far\" text=\"&#xf1ea;\"></Label>\n    <Label class=\"page__content-placeholder\" text=\"<!-- Page content goes here -->\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
        // Use the component constructor to inject providers.
    }
    BrowseComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Browse",
            template: __webpack_require__("./app/browse/browse.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./app/browse/browse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseModule", function() { return BrowseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse-routing.module.ts");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/browse/browse.component.ts");




var BrowseModule = /** @class */ (function () {
    function BrowseModule() {
    }
    BrowseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__["BrowseRoutingModule"]
            ],
            declarations: [
                _browse_component__WEBPACK_IMPORTED_MODULE_3__["BrowseComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], BrowseModule);
    return BrowseModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Jyb3dzZS9icm93c2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVsQjtBQUVyRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlFQUFlLEVBQUU7Q0FDM0MsQ0FBQztBQU1GO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFKL0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZGhDLHkwQkFBeTBCLDZIOzs7Ozs7OztBQ0F6MEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVFO0FBTXBEO0lBRUk7UUFDSSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQix3RUFBZSxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFiUSxlQUFlO1FBSjNCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixtRUFBc0M7U0FDekMsQ0FBQzs7T0FDVyxlQUFlLENBYzNCO0lBQUQsc0JBQUM7Q0FBQTtBQWQyQjs7Ozs7Ozs7O0FDUjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFVDtBQUNUO0FBY3JEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBWnhCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QiwwRUFBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaUVBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPCEtLSBcXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLSBcXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiQnJvd3NlXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlX19jb250ZW50XFxcIj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LWljb24gZmFyXFxcIiB0ZXh0PVxcXCImI3hmMWVhO1xcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LXBsYWNlaG9sZGVyXFxcIiB0ZXh0PVxcXCI8IS0tIFBhZ2UgY29udGVudCBnb2VzIGhlcmUgLS0+XFxcIj48L0xhYmVsPlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJCcm93c2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBCcm93c2VSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYnJvd3NlLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEJyb3dzZVJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCcm93c2VDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==