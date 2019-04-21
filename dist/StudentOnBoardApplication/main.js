(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_on_board_form_edit_guard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/on-board-form-edit-guard.guard */ "./src/app/guards/on-board-form-edit-guard.guard.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _onboardingform_onboardingform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboardingform/onboardingform.component */ "./src/app/onboardingform/onboardingform.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'onboardingform',
        canDeactivate: [_guards_on_board_form_edit_guard_guard__WEBPACK_IMPORTED_MODULE_2__["OnBoardFormEditGuardGuard"]],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        component: _onboardingform_onboardingform_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingformComponent"] },
    { path: 'studentlist', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__["StudentListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'students/:id/:flag/edit',
        canDeactivate: [_guards_on_board_form_edit_guard_guard__WEBPACK_IMPORTED_MODULE_2__["OnBoardFormEditGuardGuard"]],
        component: _onboardingform_onboardingform_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingformComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'students/:id/:flag/view',
        component: _onboardingform_onboardingform_component__WEBPACK_IMPORTED_MODULE_4__["OnboardingformComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.navbar{\r\n    margin-left:17%;\r\n    width  : 60%; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm5hdmJhcntcclxuICAgIG1hcmdpbi1sZWZ0OjE3JTtcclxuICAgIHdpZHRoICA6IDYwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div class=\"card\">\n      <div class='container'>\n             <app-alert></app-alert>\n            <router-outlet></router-outlet>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'StudentOnBoardApplication';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interceptors_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/tokeninterceptor.service */ "./src/app/interceptors/tokeninterceptor.service.ts");
/* harmony import */ var _interceptors_backend_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/backend-interceptor.service */ "./src/app/interceptors/backend-interceptor.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _onboardingform_onboardingform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./onboardingform/onboardingform.component */ "./src/app/onboardingform/onboardingform.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/alert.component */ "./src/app/directives/alert.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _onboardingform_onboardingform_component__WEBPACK_IMPORTED_MODULE_12__["OnboardingformComponent"],
                _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_13__["StudentListComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _interceptors_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_1__["TokeninterceptorService"], multi: true },
                _interceptors_backend_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/alert.component.css":
/*!************************************************!*\
  !*** ./src/app/directives/alert.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdGl2ZXMvYWxlcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/directives/alert.component.html":
/*!*************************************************!*\
  !*** ./src/app/directives/alert.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/directives/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/directives/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/directives/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/on-board-form-edit-guard.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/guards/on-board-form-edit-guard.guard.ts ***!
  \**********************************************************/
/*! exports provided: OnBoardFormEditGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardFormEditGuardGuard", function() { return OnBoardFormEditGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnBoardFormEditGuardGuard = /** @class */ (function () {
    function OnBoardFormEditGuardGuard() {
    }
    OnBoardFormEditGuardGuard.prototype.canDeactivate = function (component) {
        if (component.onBoardingForm.dirty && !component.onBoardingForm.valid) {
            return confirm("Navigate away and lose all the changes to form");
        }
        return true;
    };
    OnBoardFormEditGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OnBoardFormEditGuardGuard);
    return OnBoardFormEditGuardGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.active.current{\r\n    background-color: blue;\r\n}\r\n.isActive{\r\n    background-color: #3b5998;\r\n    color: white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaS5hY3RpdmUuY3VycmVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLmlzQWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div class=\"card\" style=\"width: 105%\">\n  <div style=\"background-color:#3b5998  ; color: white\" class=\"card-header\" *ngIf=\"currentUser\">\n       <p style=\"float: left\">On Boarding App</p>\n      <p style=\"float: left ;margin-left: 790px\">Hi {{currentUser.firstName}}!</p>\n    <button class='btn' style='width:80px ; color: white' (click)=logOut()> Logout </button>\n  </div>\n\n  <div style=\"text-align:center\">\n    <div *ngIf=\"currentUser\">\n      <div class=\"card\">\n        <nav class='navbar navbar-expand navbar-light bg-light' style=\"width: 66%; background-color:darkgray\">\n          <a class='navbar-brand'>{{pageTitle}}</a>\n          <ul class='nav nav-pills'>\n            <a ><li [ngClass]=\"{isActive: isOnBoardRoute}\" class='nav-link' [routerLink]=\"['/onboardingform']\"> OnBoarding Form </li></a>\n            <li [ngClass]=\"{isActive : !isOnBoardRoute}\" class='nav-link' [routerLink]=\"['/studentlist']\"> Students List </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isOnBoardRoute = true;
        debugger;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.title = 'StudentOnBoardApplication';
    };
    HomeComponent.prototype.ngOnChanges = function (changes) {
        var isActive = changes.isActive;
        this.isOnBoardRoute = isActive.currentValue;
    };
    HomeComponent.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HomeComponent.prototype, "isActive", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/backend-interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/interceptors/backend-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: BackendInterceptorService, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendInterceptorService", function() { return BackendInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_materialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/materialize */ "./node_modules/rxjs/internal/operators/materialize.js");
/* harmony import */ var rxjs_internal_operators_materialize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_materialize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/dematerialize */ "./node_modules/rxjs/internal/operators/dematerialize.js");
/* harmony import */ var rxjs_internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");












var BackendInterceptorService = /** @class */ (function () {
    function BackendInterceptorService(userService) {
        this.userService = userService;
    }
    BackendInterceptorService.prototype.intercept = function (request, next) {
        debugger;
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var students = JSON.parse(localStorage.getItem('students')) || [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function () {
            //get User
            if (request.url.endsWith('/users/authentication') && request.method === 'GET') {
                var loginEmail_1 = request.params.get("email");
                var loginPassword_1 = request.params.get("password");
                var filteredUser = users.filter(function (user) {
                    return user.username === loginEmail_1 && user.password === loginPassword_1;
                });
                request = request.clone({
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/users"
                });
                return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (event) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"] && event.body.length) {
                        var responsebody = {
                            id: event.body.entries().next().value[1].id,
                            email: event.body.entries().next().value[1].email,
                            firstName: event.body.entries().next().value[1].firstName,
                            lastName: event.body.entries().next().value[1].lastName,
                            token: 'fake-jwt-token'
                        };
                        event = event.clone({ body: responsebody });
                    }
                    return event;
                }));
            }
            // register user
            if (request.url.endsWith('/users/reg') && request.method === 'POST') {
                // get new user object from post body 
                var newUser_1 = request.body;
                // validation
                var duplicateEmailUser = users.filter(function (user) { return user.email === newUser_1.email; }).length;
                if (duplicateEmailUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'email ' + newUser_1.email + ' is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                request = request.clone({
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/users/"
                });
                return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (event) {
                    return event;
                }));
            }
            if (request.url.endsWith('/students/onBoard') && request.method === 'POST') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    var newStudent_1 = request.body;
                    var duplicateStudent = students.filter(function (student) { return student.onBoardNumber === newStudent_1.onBoardNumber; }).length;
                    if (duplicateStudent) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'OnBoardNumber "' + newStudent_1.onBoardNumber + '" is already taken' } });
                    }
                    // save new student
                    newStudent_1.id = students.length + 1;
                    students.push(newStudent_1);
                    localStorage.setItem('students', JSON.stringify(students));
                    // respond 200 OK
                    request = request.clone({
                        url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/students/"
                    });
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (event) {
                        return event;
                    }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_internal_operators_materialize__WEBPACK_IMPORTED_MODULE_7__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(500))
            .pipe(Object(rxjs_internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_8__["dematerialize"])());
    };
    BackendInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BackendInterceptorService);
    return BackendInterceptorService;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
    useClass: BackendInterceptorService,
    multi: true
};


/***/ }),

/***/ "./src/app/interceptors/tokeninterceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/tokeninterceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: TokeninterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokeninterceptorService", function() { return TokeninterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokeninterceptorService = /** @class */ (function () {
    function TokeninterceptorService() {
    }
    TokeninterceptorService.prototype.intercept = function (request, next) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    TokeninterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokeninterceptorService);
    return TokeninterceptorService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\" style=\"padding-left:40%;background-color: #3b5998\">\n        Admin Login\n    </div>\n    <div class=\"card-body\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" style=\"margin-left: 300px\">\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"email\"> Email</label>\n                <div class=\"col-md-4\">\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (loginForm.get('email').touched || loginForm.get('email').dirty) && !loginForm.get('email').valid }\"\n                    />\n                    <span class=\"invalid-feedback\">\n                <span *ngIf=\"loginForm.get('email').errors?.required\">\n                    Please enter Email\n                </span>\n                    <span *ngIf=\"loginForm.get('email').errors?.email\">\n                    Please enter a valid email address\n                </span>\n                    </span>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"password\"> Password</label>\n                <div class=\"col-md-4\">\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (loginForm.get('password').touched || loginForm.get('password').dirty) && !loginForm.get('password').valid }\"\n                    />\n                    <span class=\"invalid-feedback\">\n                <span *ngIf=\"loginForm.get('password').errors?.required\">\n                    Please enter Password\n                </span>\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group row mb-4\">\n                <div class=\"offset-md-2 col col-md-4\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\"  [disabled]=\"!loginForm.valid\">Login</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, userService, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        debugger;
        localStorage.removeItem('currentUser');
        // reset login status
        this.authenticationService.logout();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (data) {
            if (data && data.id) {
                _this.alertService.success('Login is successful', true);
                _this.router.navigate(['/onboardingform']);
            }
            else {
                _this.alertService.error("login not successfull, either email or password is wrong");
                _this.loading = false;
            }
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/Student.ts":
/*!***********************************!*\
  !*** ./src/app/models/Student.ts ***!
  \***********************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/onboardingform/onboardingform.component.css":
/*!*************************************************************!*\
  !*** ./src/app/onboardingform/onboardingform.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.card-header{\r\n    background-color :#3b5998;\r\n    color: white\r\n    }\r\n       \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZ2Zvcm0vb25ib2FyZGluZ2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QjtJQUNBIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZGluZ2Zvcm0vb25ib2FyZGluZ2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiMzYjU5OTg7XHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIH1cclxuICAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/onboardingform/onboardingform.component.html":
/*!**************************************************************!*\
  !*** ./src/app/onboardingform/onboardingform.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home [isActive]=\"true\"></app-home>\n<div class=\"card\" style=\"width: 105%\">\n  <div class=\"card-header\">\n    Onboarding Form\n  </div>\n  <div class=\"card-body\">\n    <form novalidate (ngSubmit)=\"onBoard()\" [formGroup]=\"onBoardingForm\">\n      <!-- noValidate attribute is tell browser not to validate this form but let Angular to validate its entries -->\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"onBoardNumber\"> Student OnBoard Number</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"onBoardNumber\" type=\"text\" placeholder=\"Student OnBoard Number\" formControlName=\"onBoardNumber\"\n            [ngClass]=\"{'is-invalid' : (onBoardingForm.get('onBoardNumber').touched || onBoardingForm.get('onBoardNumber').dirty) && !onBoardingForm.get('onBoardNumber').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('onBoardNumber').errors?.required\">\n                    Please enter student's Onboard number'\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"studentName\"> Student Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"studentName\" type=\"text\" placeholder=\"Student Name\" formControlName=\"studentName\" [ngClass]=\"{'is-invalid' : (onBoardingForm.get('studentName').touched || onBoardingForm.get('studentName').dirty) && !onBoardingForm.get('studentName').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('studentName').errors?.required\">\n                    Please enter Student Name\n                </span>\n          </span>\n        </div>\n      </div>\n\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"category\"> Category</label>\n        <div class=\"col-md-8\">\n          <select class=\"form-control\" id=\"category\" formControlName=\"category\" [ngClass]=\"{'is-invalid' : (onBoardingForm.get('category').touched || onBoardingForm.get('category').dirty) && !onBoardingForm.get('category').valid }\">\n                  <option value=\"\"\n                          disabled\n                          selected\n                          hidden>Select Category</option>\n                  <option value=\"international\">International</option>\n                  <option value=\"local\">Local</option>\n                </select>\n\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('category').errors?.required\">\n                    Please select Category\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div formGroupName=\"documents\">\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"domicile\"> Documents</label>\n          <label class=\"col-md-2\"> Domicile</label>\n          <span>&#42;</span>\n          <div class=\"col-md-1\">\n            <input class=\"form-control\" id=\"domicile\" type=\"checkbox\" formControlName=\"domicile\" [ngClass]=\"{'is-invalid' :  onBoardingForm.get('documents').errors || \n                                                                                                                                          ((onBoardingForm.get('documents.domicile').touched ||\n                                                                                                                                          onBoardingForm.get('documents.domicile').dirty) && \n                                                                                                                                          !onBoardingForm.get('documents.domicile').valid ) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('documents.domicile').errors?.required\">\n                    Please select documnet\n                </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"birthCertificate\"></label>\n          <label class=\"col-md-2\"> Birth Certificate</label>\n          <span>&#42;</span>\n          <div class=\"col-md-1\">\n            <input class=\"form-control\" id=\"birthCertificate\" type=\"checkbox\" formControlName=\"birthCertificate\" [ngClass]=\"{'is-invalid' :  onBoardingForm.get('documents').errors ||\n                                                                                                                                          ((onBoardingForm.get('documents.birthCertificate').touched ||\n                                                                                                                                          onBoardingForm.get('documents.birthCertificate').dirty) && \n                                                                                                                                          !onBoardingForm.get('documents.birthCertificate').valid ) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('documents.birthCertificate').errors?.required\">\n                    Please select documnet\n                </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"markSheets\"></label>\n          <label class=\"col-md-2\"> Mark Sheets</label>\n          <span>&#42;</span>\n          <div class=\"col-md-1\">\n            <input class=\"form-control\" id=\"markSheets\" type=\"checkbox\" formControlName=\"markSheets\" [ngClass]=\"{'is-invalid' :  onBoardingForm.get('documents').errors ||\n                                                                                                                                          ((onBoardingForm.get('documents.markSheets').touched ||\n                                                                                                                                          onBoardingForm.get('documents.markSheets').dirty) && \n                                                                                                                                          !onBoardingForm.get('documents.markSheets').valid ) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('documents.markSheets').errors?.required\">\n                    Please select documnet\n                </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"policeClearance\"></label>\n          <label class=\"col-md-2\"> Police Clearance</label>\n          <span *ngIf=\"isInternational\">&#42;</span>\n          <span *ngIf=\"!isInternational\" style=\"width: 7px; display: inline-block\"></span>\n          <div class=\"col-md-1\">\n            <input class=\"form-control\" id=\"policeClearance\" type=\"checkbox\" formControlName=\"policeClearance\" [ngClass]=\"{'is-invalid' :  onBoardingForm.get('documents').errors ||\n                                                                                                                                          ((onBoardingForm.get('documents.policeClearance').touched ||\n                                                                                                                                          onBoardingForm.get('documents.policeClearance').dirty) && \n                                                                                                                                          !onBoardingForm.get('documents.policeClearance').valid ) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('documents.policeClearance').errors?.required\">\n                    Please select documnet\n                </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"passport\"></label>\n          <label class=\"col-md-2\"> Passport</label>\n          <span *ngIf=\"isInternational\">&#42;</span>\n          <span *ngIf=\"!isInternational\" style=\"width: 7px; display: inline-block\"></span>\n          <div class=\"col-md-1\">\n            <input class=\"form-control\" id=\"passport\" type=\"checkbox\" formControlName=\"passport\" [ngClass]=\"{'is-invalid' :  onBoardingForm.get('documents').errors ||\n                                                                                                                                          ((onBoardingForm.get('documents.passport').touched ||\n                                                                                                                                          onBoardingForm.get('documents.passport').dirty) && \n                                                                                                                                          !onBoardingForm.get('documents.passport').valid ) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('documents.passport').errors?.required\">\n                    Please select documnet\n                </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"declaration\"></label>\n          <label class=\"col-md-2\"> Declaration</label>\n          <span>&#42;</span>\n          <div class=\"col-md-1\">\n            <input class=\"form-control\" id=\"declaration\" type=\"checkbox\" formControlName=\"declaration\" [ngClass]=\"{'is-invalid' :  onBoardingForm.get('documents').errors ||\n                                                                                                                                          ((onBoardingForm.get('documents.declaration').touched ||\n                                                                                                                                          onBoardingForm.get('documents.declaration').dirty) && \n                                                                                                                                          !onBoardingForm.get('documents.declaration').valid ) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('documents.declaration').errors?.required\">\n                    Please select documnet\n                </span>\n            </span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"dateOfBirth\"> DOB</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"dateOfBirth\" type=\"date\" placeholder=\"DOB\" formControlName=\"dateOfBirth\" [ngClass]=\"{'is-invalid' : (onBoardingForm.get('dateOfBirth').touched || onBoardingForm.get('dateOfBirth').dirty) && !onBoardingForm.get('dateOfBirth').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('dateOfBirth').errors?.required\">\n                    Please enter date of birth\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"fatherName\"> Father's Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"fatherName\" type=\"text\" placeholder=\"Father's Name\" formControlName=\"fatherName\" [ngClass]=\"{'is-invalid' : (onBoardingForm.get('fatherName').touched || onBoardingForm.get('fatherName').dirty) && !onBoardingForm.get('fatherName').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('fatherName').errors?.required\">\n                    Please enter Father's name\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"motherName\"> Father's Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"motherName\" type=\"text\" placeholder=\"Mother's Name\" formControlName=\"motherName\" [ngClass]=\"{'is-invalid' : (onBoardingForm.get('motherName').touched || onBoardingForm.get('motherName').dirty) && !onBoardingForm.get('motherName').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('motherName').errors?.required\">\n                    Please enter Father's name\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"lastClassScore\">Last Class Score</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"lastClassScore\" type=\"number\" placeholder=\"% Marks\" formControlName=\"lastClassScore\" [ngClass]=\"{'is-invalid' : (onBoardingForm.get('lastClassScore').touched || onBoardingForm.get('lastClassScore').dirty) && !onBoardingForm.get('lastClassScore').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"onBoardingForm.get('lastClassScore').errors?.required\">\n                    Please enter Mother's name\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-4\">\n        <div class=\"offset-md-3 col col-md-4\">\n          <button *ngIf=\"isDisabled\" class='btn btn-outline-secondary' style='width:80px' (click)=onBack()>\n                    <i class = 'fa fa-chevron-left'></i> Back\n          </button>\n          <button *ngIf=\"isDisabled\" class=\"btn btn-outline-primary\" [routerLink]=\"['/students',toDisplayStudent.id,false,'edit']\">Edit\n                </button>\n          <button *ngIf=\"(!isDisabled && !isSave)\" class='btn btn-outline-secondary' style='width:90px' (click)=onCancel()>\n                    <i class = 'fa fa-chevron-left'></i> Cancel\n          </button>\n          <button *ngIf=\"isSave\" class=\"btn btn-primary mr-3\" type=\"submit\" style=\"width:80px\" title=\"onBoardingForm.valid ? 'Submit your information' : 'Disabled untill required information is filled'\"\n            [disabled]=\"!onBoardingForm.valid || (onBoardingForm.get('category').value === 'international' && (!onBoardingForm.get('documents.domicile').value ===true || \n                                                                                                              !onBoardingForm.get('documents.birthCertificate').value ===true ||\n                                                                                                              !onBoardingForm.get('documents.markSheets').value ===true ||\n                                                                                                              !onBoardingForm.get('documents.policeClearance').value === true ||\n                                                                                                              !onBoardingForm.get('documents.passport').value ===true ||\n                                                                                                              !onBoardingForm.get('documents.declaration').value ===true) ) ||\n                                                  (onBoardingForm.get('category').value === 'local' &&   ( !onBoardingForm.get('documents.domicile').value ===true ||\n                                                                                                           !onBoardingForm.get('documents.birthCertificate').value ===true ||\n                                                                                                           !onBoardingForm.get('documents.markSheets').value ===true ||\n                                                                                                           !onBoardingForm.get('documents.declaration').value ===true) )\"> Save          \n              </button>\n          <button *ngIf=\"(!isSave && !isDisabled)\" (click)=\"updateStudentDetails()\" class=\"btn btn-primary mr-3\" type=\"button\" style=\"width:80px\"\n            title=\"onBoardingForm.valid ? 'Submit your information' : 'Disabled untill required information is filled'\" [disabled]=\"!onBoardingForm.valid || !onBoardingForm.dirty  || (onBoardingForm.get('category').value === 'international' && (!onBoardingForm.get('documents.domicile').value ===true || \n                                                                                                              !onBoardingForm.get('documents.birthCertificate').value ===true ||\n                                                                                                              !onBoardingForm.get('documents.markSheets').value ===true ||\n                                                                                                              !onBoardingForm.get('documents.policeClearance').value === true ||\n                                                                                                              !onBoardingForm.get('documents.passport').value ===true ||\n                                                                                                              !onBoardingForm.get('documents.declaration').value ===true) ) ||\n                                                  (onBoardingForm.get('category').value === 'local' &&   ( !onBoardingForm.get('documents.domicile').value ===true ||\n                                                                                                           !onBoardingForm.get('documents.birthCertificate').value ===true ||\n                                                                                                           !onBoardingForm.get('documents.markSheets').value ===true ||\n                                                                                                           !onBoardingForm.get('documents.declaration').value ===true) )\"> Update          \n               </button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n          />\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/onboardingform/onboardingform.component.ts":
/*!************************************************************!*\
  !*** ./src/app/onboardingform/onboardingform.component.ts ***!
  \************************************************************/
/*! exports provided: OnboardingformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingformComponent", function() { return OnboardingformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models/Student */ "./src/app/models/Student.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var OnboardingformComponent = /** @class */ (function () {
    function OnboardingformComponent(fb, studentService, router, route, alertService) {
        this.fb = fb;
        this.studentService = studentService;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.isSave = true;
        this.isclicked = false;
        this.isDisabled = false;
        this.student = new _models_Student__WEBPACK_IMPORTED_MODULE_5__["Student"]();
        this.toDisplayStudent = new _models_Student__WEBPACK_IMPORTED_MODULE_5__["Student"]();
        this.isInternational = true;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    OnboardingformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardingForm = this.fb.group({
            onBoardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            studentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            documents: this.fb.group({
                domicile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                birthCertificate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                markSheets: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                policeClearance: '',
                passport: '',
                declaration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            }),
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            fatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            motherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lastClassScore: ''
        });
        this.sub = this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            var flag = params.get('flag');
            var boolFlag = JSON.parse(flag);
            _this.getStudent(id, boolFlag);
        });
        // watching the changes to notification formControl and reacting accordingly
        this.onBoardingForm.get('category').valueChanges.subscribe(function (value) { return _this.setDocumentsFilter(value); });
    };
    OnboardingformComponent.prototype.ngOnDestry = function () {
        this.isclicked = false;
        this.sub.unsubscribe();
    };
    OnboardingformComponent.prototype.getStudent = function (id, flag) {
        var _this = this;
        this.studentService.getStudent(id).subscribe(function (student) { return _this.displayStudent(student, flag); }, function (error) { return _this.errorMessage = error; });
    };
    OnboardingformComponent.prototype.displayStudent = function (student, flag) {
        if (this.onBoardingForm) {
            this.onBoardingForm.reset;
        }
        this.toDisplayStudent = student;
        this.onBoardingForm.patchValue({
            onBoardNumber: this.toDisplayStudent.onBoardNumber,
            studentName: this.toDisplayStudent.name,
            category: this.toDisplayStudent.category,
            dateOfBirth: this.toDisplayStudent.dateOfBirth,
            fatherName: this.toDisplayStudent.fatherName,
            motherName: this.toDisplayStudent.motherName,
            lastClassScore: this.toDisplayStudent.lastClassScore
        });
        this.onBoardingForm.setControl('documents', this.fb.group({
            domicile: this.toDisplayStudent.domicile,
            birthCertificate: this.toDisplayStudent.birthCertificate,
            markSheets: this.toDisplayStudent.markSheets,
            policeClearance: this.toDisplayStudent.policeClearance,
            passport: this.toDisplayStudent.passport,
            declaration: this.toDisplayStudent.declaration
        }));
        this.isSave = false;
        this.isDisabled = flag;
        if (flag) {
            this.onBoardingForm.disable();
        }
        this.isclicked = true;
    };
    OnboardingformComponent.prototype.setDocumentsFilter = function (value) {
        var policeClearanceControl = this.onBoardingForm.get('documents.policeClearance');
        var passportControl = this.onBoardingForm.get('documents.policeClearance');
        if (value === 'international') {
            policeClearanceControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
            passportControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
            this.isInternational = true;
        }
        else {
            policeClearanceControl.clearValidators();
            passportControl.clearValidators();
            this.isInternational = false;
        }
        policeClearanceControl.updateValueAndValidity();
        passportControl.updateValueAndValidity();
    };
    OnboardingformComponent.prototype.onBoard = function () {
        var _this = this;
        if (this.onBoardingForm.invalid) {
            return;
        }
        this.loading = true;
        this.student.onBoardNumber = this.onBoardingForm.get('onBoardNumber').value;
        this.student.name = this.onBoardingForm.get('studentName').value;
        this.student.category = this.onBoardingForm.get('category').value;
        this.student.domicile = this.onBoardingForm.get('documents.domicile').value;
        this.student.birthCertificate = this.onBoardingForm.get('documents.birthCertificate').value;
        this.student.markSheets = this.onBoardingForm.get('documents.markSheets').value;
        this.student.policeClearance = this.onBoardingForm.get('documents.policeClearance').value;
        this.student.passport = this.onBoardingForm.get('documents.passport').value;
        this.student.declaration = this.onBoardingForm.get('documents.declaration').value;
        this.student.dateOfBirth = this.onBoardingForm.get('dateOfBirth').value;
        this.student.fatherName = this.onBoardingForm.get('fatherName').value;
        this.student.motherName = this.onBoardingForm.get('motherName').value;
        this.student.lastClassScore = this.onBoardingForm.get('lastClassScore').value;
        this.studentService.onBoard(this.student).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
            if (data && data.id) {
                _this.router.navigate(['/studentlist']);
                _this.alertService.success("student onboard is successful");
                _this.loading = false;
            }
            else {
                _this.alertService.error("student onboard is not successful");
                _this.loading = false;
            }
        }, function (error) {
            _this.alertService.error(error.error.message);
            _this.loading = false;
        });
    };
    OnboardingformComponent.prototype.updateStudentDetails = function () {
        var _this = this;
        if (this.onBoardingForm.invalid || !this.onBoardingForm.dirty) {
            return;
        }
        else {
            this.toDisplayStudent.onBoardNumber = this.onBoardingForm.get('onBoardNumber').value;
            this.toDisplayStudent.name = this.onBoardingForm.get('studentName').value;
            this.toDisplayStudent.category = this.onBoardingForm.get('category').value;
            this.toDisplayStudent.domicile = this.onBoardingForm.get('documents.domicile').value;
            this.toDisplayStudent.birthCertificate = this.onBoardingForm.get('documents.birthCertificate').value;
            this.toDisplayStudent.markSheets = this.onBoardingForm.get('documents.markSheets').value;
            this.toDisplayStudent.policeClearance = this.onBoardingForm.get('documents.policeClearance').value;
            this.toDisplayStudent.passport = this.onBoardingForm.get('documents.passport').value;
            this.toDisplayStudent.declaration = this.onBoardingForm.get('documents.declaration').value;
            this.toDisplayStudent.dateOfBirth = this.onBoardingForm.get('dateOfBirth').value;
            this.toDisplayStudent.fatherName = this.onBoardingForm.get('fatherName').value;
            this.toDisplayStudent.motherName = this.onBoardingForm.get('motherName').value;
            this.toDisplayStudent.lastClassScore = this.onBoardingForm.get('lastClassScore').value;
            this.studentService.updateStudentDetails(this.toDisplayStudent).
                subscribe(function () { return _this.router.navigate(['/studentlist']); }, function (error) { return _this.errorMessage = error; });
        }
    };
    OnboardingformComponent.prototype.onBack = function () {
        this.router.navigate(['/studentlist']);
    };
    OnboardingformComponent.prototype.onCancel = function () {
        if (confirm("Navigate away and lose all the changes to form"))
            this.router.navigate(['/studentlist']);
    };
    OnboardingformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-onboardingform',
            template: __webpack_require__(/*! ./onboardingform.component.html */ "./src/app/onboardingform/onboardingform.component.html"),
            styles: [__webpack_require__(/*! ./onboardingform.component.css */ "./src/app/onboardingform/onboardingform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], OnboardingformComponent);
    return OnboardingformComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\" style=\"padding-left: 40% ; background-color: #3b5998\">\n    Admin Sign Up!\n  </div>\n  <div class=\"card-body\">\n    <form novalidate (ngSubmit)=\"register()\" [formGroup]=\"userForm\">\n      <!-- noValidate attribute is tell browser not to validate this form but let Angular to validate its entries -->\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"firstNameId\"> First Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"firstNameId\" type=\"text\" placeholder=\"First Name\" formControlName=\"firstName\" [ngClass]=\"{'is-invalid' : (userForm.get('firstName').touched || userForm.get('firstName').dirty) && !userForm.get('firstName').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"userForm.get('firstName').errors?.required\">\n                    Please enter your First Name\n                </span>\n          <span *ngIf=\"userForm.get('firstName').errors?.minlength\">\n                    The First Name must be alteast 3 characters long.\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"lastNameId\"> Last Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"lastNameId\" type=\"text\" placeholder=\"Last Name\" formControlName=\"lastName\" [ngClass]=\"{'is-invalid' : (userForm.get('lastName').touched || userForm.get('lastName').dirty) && !userForm.get('lastName').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"userForm.get('lastName').errors?.required\">\n                    Please enter your Last Name\n                </span>\n          <span *ngIf=\"userForm.get('lastName').errors?.maxLength\">\n                    The Last Name must be alteast 3 characters long.\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div formGroupName=\"emailGroup\">\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"emailId\"> Email</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"emailId\" type=\"email\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"{'is-invalid' :  userForm.get('emailGroup').errors ||\n                                                                                                                                          ((userForm.get('emailGroup.email').touched ||\n                                                                                                                                          userForm.get('emailGroup.email').dirty) && \n                                                                                                                                          !userForm.get('emailGroup.email').valid ) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"userForm.get('emailGroup.email').errors?.required\">\n                    Please enter your Email address\n                </span>\n            <span *ngIf=\"userForm.get('emailGroup.email').errors?.email\">\n                    Please enter a valid email address\n                </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\" for=\"confirmEmailId\">Confirm Email</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"confirmEmailId\" type=\"email\" placeholder=\"Confirm Email\" formControlName=\"confirmEmail\" [ngClass]=\"{'is-invalid' : userForm.get('emailGroup').errors ||\n                                                                                                                                                               ((userForm.get('emailGroup.confirmEmail').touched || \n                                                                                                                                                               userForm.get('emailGroup.confirmEmail').dirty) && \n                                                                                                                                                               !userForm.get('emailGroup.confirmEmail').valid) }\"\n            />\n            <span class=\"invalid-feedback\">\n                <span *ngIf=\"userForm.get('emailGroup.confirmEmail').errors?.required\">\n                    Please confirm your Email address\n                </span>\n            <span *ngIf=\"userForm.get('emailGroup').errors?.match\">\n                    Confirmation Email does not match the email address\n                </span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"phone\"> Phone</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"Phone\" formControlName=\"phone\" [ngClass]=\"{'is-invalid' : (userForm.get('phone').touched || userForm.get('phone').dirty) && !userForm.get('phone').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"userForm.get('phone').errors?.required\">\n                    Please enter your Phone address\n                </span>\n          <span *ngIf=\"userForm.get('phone').errors?.tel\">\n                    Please enter a valid Phone address\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"age\"> Age</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"age\" type=\"number\" placeholder=\"Age\" formControlName=\"age\" [ngClass]=\"{'is-invalid' : (userForm.get('age').touched || userForm.get('age').dirty) && !userForm.get('age').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"userForm.get('age').errors?.required\">\n                    Please enter your Age\n                </span>\n          <span *ngIf=\"userForm.get('age').errors?.minimumValue\">\n                    Age should be grater than 18\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"password\"> Password</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\" id=\"password\" type=\"password\" placeholder=\"Enteer Password\" formControlName=\"password\" [ngClass]=\"{'is-invalid' : (userForm.get('password').touched || userForm.get('password').dirty) && !userForm.get('password').valid }\"\n          />\n          <span class=\"invalid-feedback\">\n                <span *ngIf=\"userForm.get('password').errors?.required\">\n                    Please enter Password\n                </span>\n          <span *ngIf=\"userForm.get('password').errors?.minlength\">\n                    Password should be of minimum 8 length\n                </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <div class=\"offset-md-2 col col-md-1\">\n          <button class=\"btn btn-primary mr-3\" type=\"submit\" style=\"width:100px\" title=\"userForm.valid ? 'Submit your information' : 'Disabled untill required information is filled'\"\n            [disabled]=\"!userForm.valid\"> Sign Up          \n              </button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n          />\n        </div>\n        <span style=\"width: 27px; display: inline-block\"></span>\n        <div>\n          <p style=\"float: left\">already registered?</p>\n          <a style=\"float: left\" [routerLink]=\"['/login']\">Login</a>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/User */ "./src/app/models/User.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








function minimumAge(c) {
    if (c.value !== null && c.value < 18) {
        return { 'minimumValue': true };
    }
    return null;
}
function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmEmailControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmEmailControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmEmailControl.value) {
        return null;
    }
    return { 'match': true };
}
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, userService, alertService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.user = new src_app_models_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.users = [];
    }
    Object.defineProperty(RegisterComponent.prototype, "addresses", {
        get: function () {
            return this.userForm.get('addresses'); // cast from AbstarctControl to FormArray
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        // this.userForm = new FormGroup({
        //   firstName : new FormControl(),
        //   lastName  : new FormControl(),
        //   email : new FormControl(),
        // });
        this.userForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20)]],
            emailGroup: this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
                confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            }, { validator: emailMatcher }),
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            age: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, minimumAge]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8)]]
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.user.firstName = this.userForm.get('firstName').value;
        this.user.lastName = this.userForm.get('lastName').value;
        this.user.email = this.userForm.get('emailGroup.email').value;
        this.user.phone = this.userForm.get('phone').value;
        this.user.age = this.userForm.get('age').value;
        this.user.password = this.userForm.get('password').value;
        this.userService.register(this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
            if (data && data.id) {
                _this.alertService.success('Registration is successful', true);
                _this.router.navigate(['/login']);
            }
            else {
                _this.alertService.error("SignUp not successfull");
                _this.loading = false;
            }
        }, function (error) {
            _this.alertService.error(error.error.message);
            _this.loading = false;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        window.scroll(0, 0);
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        window.scroll(0, 0);
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthenticationService.prototype.login = function (email, password) {
        debugger;
        var parameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", email).set("password", password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        debugger;
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/users/authentication", { headers: headers, params: parameters })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (responseBody) {
            // login successful if there's a jwt token in the response\
            console.log(responseBody);
            if (responseBody && responseBody.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(responseBody));
            }
            return responseBody;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6__);








var StudentService = /** @class */ (function () {
    function StudentService(httpClient) {
        this.httpClient = httpClient;
    }
    StudentService.prototype.onBoard = function (student) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/students/onBoard", student);
    };
    StudentService.prototype.getStudents = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/students").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('All ' + JSON.stringify(data)); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    StudentService.prototype.getStudent = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/students/" + id).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("getProduct: " + JSON.stringify(data)); }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    StudentService.prototype.updateStudentDetails = function (student) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/students/" + student.id, student, { headers: headers }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return console.log("updated student: " + student.id); }), Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return student; }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    StudentService.prototype.delete = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/students/" + id, { headers: headers });
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.users = [];
    }
    UserService.prototype.register = function (user) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/users/reg", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseBody) {
            console.log(responseBody);
            return responseBody;
        }));
    };
    UserService.prototype.getAllUsers = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/users");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/student-list/student-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-list/student-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr{\r\n    background-color:#D1D2EB;\r\n}\r\nth{\r\n       color:#D5DDE5;;\r\n  background:#1b1e24;      \r\n}\r\ntr.international {\r\n    background-color:#d3d3d3;\r\n}\r\ndiv.card-header{\r\n    background-color : #3b5998;\r\n    color: white\r\n    }\r\ntr:hover td {\r\n  background:#FFFFFF;\r\n  border-top: 1px solid #22262e;\r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7T0FDTyxhQUFhO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUI7SUFDQTtBQUVKO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRDFEMkVCO1xyXG59XHJcbnRoe1xyXG4gICAgICAgY29sb3I6I0Q1RERFNTs7XHJcbiAgYmFja2dyb3VuZDojMWIxZTI0OyAgICAgIFxyXG59XHJcbnRyLmludGVybmF0aW9uYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDNkM2QzO1xyXG59XHJcbmRpdi5jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjM2I1OTk4O1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgICB9XHJcblxyXG50cjpob3ZlciB0ZCB7XHJcbiAgYmFja2dyb3VuZDojRkZGRkZGO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyNjJlO1xyXG59ICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/student-list/student-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-list/student-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home [isActive]=\"false\"></app-home>\n<div class=\"card\" style=\"width: 105%\">\n  <div class=\"card-header\">\n    <form novalidate (ngSubmit)=\"save()\" [formGroup]=\"studentListForm\">\n      <div class=\"form-group row mb-2\">\n        <div>Filter by Category:</div>\n        <div class=\"col-md-3\">\n          <select class=\"form-control\" id=\"category\" formControlName=\"category\">\n                  <option  selected value=\"all\">All</option>          \n                  <option value=\"international\">International</option>\n                  <option value=\"local\">Local</option>\n                </select>\n        </div>\n\n        <div class=\"col-md-3\" style=\"margin-left: 400px\">\n          <input class=\"form-control\" id=\"searchByName\" type=\"text\" placeholder=\"Search by name\" formControlName=\"searchByName\">\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"card-body\">\n    <div class='table-responsive' *ngIf='students && students.length'>\n      <div class=\"table\">\n        <thead style=\"width:100%\">\n          <tr>\n            <th>Student Name</th>\n            <th>OnBoard Number</th>\n            <th>Category</th>\n            <th>DOB</th>\n            <th>Father Name</th>\n            <th>Mother Name</th>\n            <th>Last Class Score</th>\n            <th colspan=\"3\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let student of filteredStudents\" [ngClass]=\"{'international' : student.category==='international'}\">\n            <td><a [routerLink]=\"['/students' , student.id,true,'view']\"> {{student.name}} </a></td>\n            <td>{{student.onBoardNumber}}</td>\n            <td>{{student.category}}</td>\n            <td>{{student.dateOfBirth}}</td>\n            <td>{{student.fatherName}}</td>\n            <td>{{student.motherName}}</td>\n            <td>{{student.lastClassScore}}</td>\n            <td>\n              <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/students',student.id ,false,'edit']\">Edit\n                </button>\n            </td>\n            <td>\n              <button class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/students',student.id,true,'view']\">View\n                </button>\n            </td>\n            <td>\n              <button class=\"btn btn-outline-primary btn-sm\" (click)=\"delete(student)\">Delete\n                </button>\n            </td>\n            \n          </tr>\n        </tbody>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(fb, studentService, router, alertService) {
        this.fb = fb;
        this.studentService = studentService;
        this.router = router;
        this.alertService = alertService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentListForm = this.fb.group({
            category: 'all',
            searchByName: ''
        });
        //get all students
        this.studentService.getStudents().subscribe(function (students) {
            _this.students = students;
            _this.filteredStudents = students;
        }, function (error) { return _this.errorMessage = error; });
        // watching the changes to category filter
        this.studentListForm.get('category').valueChanges.subscribe(function (value) { return _this.filterStudentsOnCategoryBase(value); });
        this.studentListForm.get('searchByName').valueChanges.subscribe(function (value) { return _this.filterStudentsByName(value); });
    };
    StudentListComponent.prototype.filterStudentsOnCategoryBase = function (category) {
        var filterBy = this.studentListForm.get('searchByName').value;
        filterBy = filterBy.toLocaleLowerCase();
        if (category === 'international') {
            this.filteredStudents = this.students.filter(function (student) { return (student.name.toLocaleLowerCase().indexOf(filterBy) !== -1 && student.category === 'international'); });
        }
        else if (category === 'local') {
            this.filteredStudents = this.students.filter(function (student) { return (student.name.toLocaleLowerCase().indexOf(filterBy) !== -1 && student.category === 'local'); });
        }
        else {
            this.filteredStudents = this.students.filter(function (student) { return student.name.toLocaleLowerCase().indexOf(filterBy) !== -1; });
        }
    };
    StudentListComponent.prototype.filterStudentsByName = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        var category = this.studentListForm.get('category').value;
        if (filterBy) {
            if (category === 'all') {
                this.filteredStudents = this.students.filter(function (student) { return student.name.toLocaleLowerCase().indexOf(filterBy) !== -1; });
            }
            else {
                this.filteredStudents = this.students.filter(function (student) { return (student.name.toLocaleLowerCase().indexOf(filterBy) !== -1 && student.category === category); });
            }
        }
        else {
            if (category === 'international' || category === 'local') {
                this.filteredStudents = this.students.filter(function (student) { return student.category === category; });
            }
            else {
                this.filteredStudents = this.students;
            }
        }
    };
    StudentListComponent.prototype.delete = function (student) {
        var _this = this;
        if (confirm("do you really want to delete the student : " + student.name))
            this.studentService.delete(student.id).subscribe(function () { return _this.onDelete(student.id); }, function (error) { return _this.errorMessage = error; });
    };
    StudentListComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.studentService.getStudents().subscribe(function (students) {
            _this.students = students;
            _this.filteredStudents = students;
        }, function (error) {
            _this.alertService.error(error.error.message);
            _this.errorMessage = error;
        });
    };
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/student-list/student-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://onboardstudentapp-jsonserver.herokuapp.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NAGP\2019\Angular\StudentOnBoardApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map