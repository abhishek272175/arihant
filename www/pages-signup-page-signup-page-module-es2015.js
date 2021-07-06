(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-page-signup-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"bg-content\">\r\n  <div class=\"logo-area\">\r\n    <img src=\"assets/img/images/logo-arihant.png\" class=\"logo-margin\" />\r\n    <h1>Smart Solution</h1>\r\n  </div>\r\n  <div class=\"btn-box\">\r\n    <ion-item lines=\"none\">\r\n      <ion-icon name=\"person\" class=\"m-rght\" slot=\"start\"></ion-icon>\r\n      <ion-label>Email:</ion-label>\r\n      <ion-input></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon name=\"lock-closed\" class=\"m-rght\" slot=\"start\"></ion-icon>\r\n      <ion-label>Password:</ion-label>\r\n      <ion-input type=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"text-center\">\r\n      <ion-button (click)=\"addDevice()\" color=\"light2\" class=\"front-btn\"\r\n        >Sign Up</ion-button\r\n      >\r\n      <p>or login with</p>\r\n      <a (click)=\"addDevice()\"\r\n        ><img src=\"assets/img/images/google-logo.png\"\r\n      /></a>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SignupPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPagePageRoutingModule", function() { return SignupPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-page.page */ "./src/app/pages/signup-page/signup-page.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page_page__WEBPACK_IMPORTED_MODULE_3__["SignupPagePage"]
    }
];
let SignupPagePageRoutingModule = class SignupPagePageRoutingModule {
};
SignupPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SignupPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPagePageModule", function() { return SignupPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-page-routing.module */ "./src/app/pages/signup-page/signup-page-routing.module.ts");
/* harmony import */ var _signup_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-page.page */ "./src/app/pages/signup-page/signup-page.page.ts");







let SignupPagePageModule = class SignupPagePageModule {
};
SignupPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPagePageRoutingModule"]
        ],
        declarations: [_signup_page_page__WEBPACK_IMPORTED_MODULE_6__["SignupPagePage"]]
    })
], SignupPagePageModule);



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3a6ab4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .logo-margin {\n  margin-bottom: 25px;\n}\n:host .logo-area h1 {\n  color: #374051;\n  text-transform: capitalize;\n  font-size: 30px;\n  margin-bottom: 0;\n  margin-top: 0;\n  line-height: 44px;\n}\n:host .btn-box {\n  padding: 0 30px;\n}\n:host .front-btn {\n  border: 1px solid #3a6ab4;\n  background: #3a6ab4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 18px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 40px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 150px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3a6ab4;\n  border: 1px solid #3a6ab4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host .text-right {\n  text-align: right;\n}\n:host .forgot-password {\n  margin-bottom: 15px;\n  text-decoration: none;\n  display: inline-block;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwLXBhZ2UvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXAtcGFnZVxcc2lnbnVwLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAtcGFnZS9zaWdudXAtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFzQkUsMkJBQUE7QUNwQkY7QURERTtFQUNFLGtFQUFBO0FDR0o7QURERTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERFO0VBQ0UsbUJBQUE7QUNHSjtBRERFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDR0o7QURERTtFQUNFLGVBQUE7QUNHSjtBREFFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUdBLCtCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0VKO0FEQUU7RUFDRSxtQ0FBQTtVQUFBLGtDQUFBO0FDRUo7QURBRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFHQSwrQkFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNFSjtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURBRTtFQUNFLGlDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAtcGFnZS9zaWdudXAtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmJnLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gIH1cclxuICAubG9nby1hcmVhIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvZ28tbWFyZ2luIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIC5sb2dvLWFyZWEgaDEge1xyXG4gICAgY29sb3I6ICMzNzQwNTE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gIC5idG4tYm94IHtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICB9XHJcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2E2YWI0O1xyXG4gIC5mcm9udC1idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcclxuICAgIGJhY2tncm91bmQ6ICMzYTZhYjQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIC5mcm9udC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjM2E2YWI0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcclxuICB9XHJcbiAgLm0tcmdodCB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuZm9yZ290LXBhc3N3b3JkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2UwZGNkOTtcclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2E2YWI0O1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubG9nby1hcmVhIHtcbiAgcGFkZGluZzogNTBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAubG9nby1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuOmhvc3QgLmxvZ28tYXJlYSBoMSB7XG4gIGNvbG9yOiAjMzc0MDUxO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuOmhvc3QgLmZyb250LWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XG4gIGJhY2tncm91bmQ6ICMzYTZhYjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIHdpZHRoOiAxNTBweDtcbn1cbjpob3N0IC5mcm9udC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzNhNmFiNDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcbn1cbjpob3N0IC5tLXJnaHQge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbn1cbjpob3N0IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAuZm9yZ290LXBhc3N3b3JkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogI2UwZGNkOTtcbn1cbjpob3N0IGlvbi1pY29uIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.page.ts ***!
  \*******************************************************/
/*! exports provided: SignupPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPagePage", function() { return SignupPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupPagePage = class SignupPagePage {
    constructor(events, authService, router) {
        this.events = events;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    addDevice() {
        this.router.navigateByUrl("/google-otp");
    }
    reset() {
        this.router.navigateByUrl("/reset-passward");
    }
};
SignupPagePage.ctorParameters = () => [
    { type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-page.page.scss */ "./src/app/pages/signup-page/signup-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SignupPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-page-signup-page-module-es2015.js.map