(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-passward-reset-passward-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-passward/reset-passward.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-passward/reset-passward.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"logo-area\">\r\n    <img src=\"assets/img/images/logo-arihant.png\" class=\"logo-margin\">\r\n    <h1>Smart Solution</h1>\r\n  </div>\r\n  <div class=\"btn-box\">\r\n    <ion-item lines=\"none\">\r\n      <ion-icon name=\"person\" class=\"m-rght\" slot=\"start\"></ion-icon>\r\n      <ion-label>Email:</ion-label>\r\n      <ion-input ></ion-input>\r\n    </ion-item>\r\n    <div class=\"text-center\">\r\n    <ion-button (click)=\"otp()\" color=\"light2\" class=\"front-btn\" >Get OTP</ion-button>\r\n    \r\n  </div>\r\n  \r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/reset-passward/reset-passward-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/reset-passward/reset-passward-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswardPageRoutingModule", function() { return ResetPasswardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reset_passward_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-passward.page */ "./src/app/pages/reset-passward/reset-passward.page.ts");




const routes = [
    {
        path: '',
        component: _reset_passward_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswardPage"]
    }
];
let ResetPasswardPageRoutingModule = class ResetPasswardPageRoutingModule {
};
ResetPasswardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPasswardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reset-passward/reset-passward.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-passward/reset-passward.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswardPageModule", function() { return ResetPasswardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reset_passward_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-passward-routing.module */ "./src/app/pages/reset-passward/reset-passward-routing.module.ts");
/* harmony import */ var _reset_passward_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-passward.page */ "./src/app/pages/reset-passward/reset-passward.page.ts");







let ResetPasswardPageModule = class ResetPasswardPageModule {
};
ResetPasswardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_passward_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswardPageRoutingModule"]
        ],
        declarations: [_reset_passward_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswardPage"]]
    })
], ResetPasswardPageModule);



/***/ }),

/***/ "./src/app/pages/reset-passward/reset-passward.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-passward/reset-passward.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3a6ab4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .logo-margin {\n  margin-bottom: 25px;\n}\n:host .logo-area h1 {\n  color: #374051;\n  text-transform: capitalize;\n  font-size: 30px;\n  margin-bottom: 0;\n  margin-top: 0;\n  line-height: 44px;\n}\n:host .btn-box {\n  padding: 0 30px;\n}\n:host .front-btn {\n  border: 1px solid #3a6ab4;\n  background: #3a6ab4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 18px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 40px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 150px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3a6ab4;\n  border: 1px solid #3a6ab4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host .text-right {\n  text-align: right;\n}\n:host .forgot-password {\n  margin-bottom: 15px;\n  text-decoration: none;\n  display: inline-block;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dhcmQvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxyZXNldC1wYXNzd2FyZFxccmVzZXQtcGFzc3dhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXNldC1wYXNzd2FyZC9yZXNldC1wYXNzd2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFzQk0sMkJBQUE7QUNwQk47QURESTtFQUNJLGtFQUFBO0FDR1I7QURETTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHVjtBRERNO0VBQ0ksbUJBQUE7QUNHVjtBRERNO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDR1Y7QURETTtFQUNJLGVBQUE7QUNHVjtBREFNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUdBLCtCQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0VSO0FEQVE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDRVo7QURBUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFHSiwrQkFBQTtBQ0VSO0FEQVE7RUFDSSxrQkFBQTtBQ0VaO0FEQVE7RUFDSSxpQkFBQTtBQ0VaO0FEQVE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQVE7RUFDSSxjQUFBO0FDRVo7QURBUTtFQUNJLGlDQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNldC1wYXNzd2FyZC9yZXNldC1wYXNzd2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLW1hcmdpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEgaDEge1xyXG4gICAgICAgICAgY29sb3I6ICMzNzQwNTE7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNhNmFiNDtcclxuICAgICAgLmZyb250LWJ0biB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2E2YWI0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5mcm9udC1idG46aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICMzYTZhYjQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm0tcmdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9yZ290LXBhc3N3b3JkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG59IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICMzYTZhYjQ7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5sb2dvLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG46aG9zdCAubG9nby1hcmVhIGgxIHtcbiAgY29sb3I6ICMzNzQwNTE7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcbiAgYmFja2dyb3VuZDogIzNhNmFiNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuOmhvc3QgLmZyb250LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjM2E2YWI0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2E2YWI0O1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0IC5mb3Jnb3QtcGFzc3dvcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWljb24ge1xuICBjb2xvcjogI2UwZGNkOTtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/reset-passward/reset-passward.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-passward/reset-passward.page.ts ***!
  \*************************************************************/
/*! exports provided: ResetPasswardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswardPage", function() { return ResetPasswardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ResetPasswardPage = class ResetPasswardPage {
    constructor(events, authService, router) {
        this.events = events;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() { }
    otp() {
        this.router.navigateByUrl('/google-otp');
    }
};
ResetPasswardPage.ctorParameters = () => [
    { type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResetPasswardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-passward',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-passward.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-passward/reset-passward.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-passward.page.scss */ "./src/app/pages/reset-passward/reset-passward.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ResetPasswardPage);



/***/ })

}]);
//# sourceMappingURL=pages-reset-passward-reset-passward-module-es2015.js.map