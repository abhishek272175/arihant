(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-google-login-google-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-login/google-login.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-login/google-login.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"logo-area\">\r\n    <img src=\"assets/img/images/logo-arihant.png\" class=\"logo-margin\">\r\n    <h1>Smart Solution</h1>\r\n  </div>\r\n  <div class=\"btn-box\">\r\n   \r\n    <div class=\"align-center\">\r\n      <a (click)=\"addDevice()\"><img src=\"assets/img/images/google-logo.png\"></a>\r\n  </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/google-login/google-login-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/google-login/google-login-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: GoogleLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPageRoutingModule", function() { return GoogleLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-login.page */ "./src/app/pages/google-login/google-login.page.ts");




const routes = [
    {
        path: '',
        component: _google_login_page__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginPage"]
    }
];
let GoogleLoginPageRoutingModule = class GoogleLoginPageRoutingModule {
};
GoogleLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GoogleLoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/google-login/google-login.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/google-login/google-login.module.ts ***!
  \***********************************************************/
/*! exports provided: GoogleLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPageModule", function() { return GoogleLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _google_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-login-routing.module */ "./src/app/pages/google-login/google-login-routing.module.ts");
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-login.page */ "./src/app/pages/google-login/google-login.page.ts");







let GoogleLoginPageModule = class GoogleLoginPageModule {
};
GoogleLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _google_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginPageRoutingModule"]
        ],
        declarations: [_google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginPage"]]
    })
], GoogleLoginPageModule);



/***/ }),

/***/ "./src/app/pages/google-login/google-login.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/google-login/google-login.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3a6ab4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .logo-margin {\n  margin-bottom: 25px;\n}\n:host .logo-area h1 {\n  color: #374051;\n  text-transform: capitalize;\n  font-size: 30px;\n  margin-bottom: 0;\n  margin-top: 0;\n  line-height: 44px;\n}\n:host .btn-box {\n  padding: 0 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 30vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .front-btn {\n  border: 1px solid #3a6ab4;\n  background: #3a6ab4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 18px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 40px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 150px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3a6ab4;\n  border: 1px solid #3a6ab4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZ2xlLWxvZ2luL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcZ29vZ2xlLWxvZ2luXFxnb29nbGUtbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29nbGUtbG9naW4vZ29vZ2xlLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQTRCTSwyQkFBQTtBQzFCTjtBRERJO0VBQ0ksa0VBQUE7QUNHUjtBRERNO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dWO0FERE07RUFDSSxtQkFBQTtBQ0dWO0FERE07RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNHVjtBRERNO0VBQ0ksZUFBQTtFQUNGLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0dSO0FEQU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EsK0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRVI7QURBUTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7QUNFWjtBREFRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUdKLCtCQUFBO0FDRVI7QURBUTtFQUNJLGtCQUFBO0FDRVo7QURBUTtFQUNJLGNBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQVE7RUFDSSxpQ0FBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ29vZ2xlLWxvZ2luL2dvb2dsZS1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLW1hcmdpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEgaDEge1xyXG4gICAgICAgICAgY29sb3I6ICMzNzQwNTE7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAtLWlvbi1jb2xvci1saWdodDI6ICMzYTZhYjQ7XHJcbiAgICAgIC5mcm9udC1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNhNmFiNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuZnJvbnQtYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjM2E2YWI0O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tLXJnaHQge1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcclxuICAgICAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNhNmFiNDtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxvZ28tYXJlYSB7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmxvZ28tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbjpob3N0IC5sb2dvLWFyZWEgaDEge1xuICBjb2xvcjogIzM3NDA1MTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMzB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcbiAgYmFja2dyb3VuZDogIzNhNmFiNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuOmhvc3QgLmZyb250LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjM2E2YWI0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2E2YWI0O1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/google-login/google-login.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/google-login/google-login.page.ts ***!
  \*********************************************************/
/*! exports provided: GoogleLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPage", function() { return GoogleLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GoogleLoginPage = class GoogleLoginPage {
    constructor(events, authService, router) {
        this.events = events;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    addDevice() {
        this.router.navigateByUrl('/add-device');
    }
};
GoogleLoginPage.ctorParameters = () => [
    { type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GoogleLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-login/google-login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-login.page.scss */ "./src/app/pages/google-login/google-login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], GoogleLoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-google-login-google-login-module-es2015.js.map