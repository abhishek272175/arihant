(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Login</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n\t<div class=\"bg-login\">\r\n\t\t<div class=\"login-logo\">\r\n\t\t\t<img src=\"assets/img/images/logo.png\" alt=\"Ionic logo\">\r\n\t\t</div>\r\n\t\t<div class=\"content-bg\">\r\n\t\t\t<div class=\"header-inner\">\r\n\t\t\t\t<h2>Login</h2>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<form #loginForm=\"ngForm\" novalidate>\r\n\t\t\t\t<ion-list class=\"list-color\">\r\n\t\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t\t<ion-label position=\"floating\" color=\"secondary\">Username</ion-label>\r\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"login.username\" name=\"username\" type=\"text\" #username=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"\r\n\t\t\t\t\t\trequired>\r\n\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t\t<p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\t\tUsername is required\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t\t<ion-label position=\"floating\" color=\"secondary\">Password</ion-label>\r\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"login.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t\t<p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\t\tPassword is required\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</ion-text>\r\n\t\t\t\t</ion-list>\r\n\t\t\t\t<div class=\"btn-box\">\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" color=\"light2\" class=\"sent-btn\" expand=\"block\">Login</ion-button>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<ion-button (click)=\"onSignup()\" color=\"light3\" class=\"register-btn\" expand=\"block\">Register</ion-button>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<ion-label><a (click)=\"resetPassword()\" style=\"color:#ffffff; margin: 35px; text-align:center;\" >Forgot Password?</a></ion-label>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</ion-content>\t");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");




const routes = [
    {
        path: '',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
        ],
        declarations: [
            _login__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-secondary: #ffffff;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n  --ion-color-light3: #ffffff;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .login-logo {\n  padding: 30px 0;\n  text-align: center;\n}\n:host .bg-login {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 50%;\n  min-height: 480px;\n  margin-top: -240px;\n}\n:host .login-logo img {\n  max-width: 220px;\n}\n:host .list {\n  margin-bottom: 0;\n}\n:host .bg-content {\n  --background: #ffffff;\n  background-position: center;\n}\n:host .content-bg {\n  background-color: #303030;\n  margin: auto;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n  width: 90%;\n  min-height: 330px;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 20px;\n  font-weight: 600;\n}\n:host .list-color {\n  background-color: transparent;\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host .bg-form {\n  background-color: transparent;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #0166b3;\n  border: 1px solid #0166b3;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #0166b3;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #0166b3;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n  border: 1px solid #b99044;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXHZpdmVrX25ld1xcYXJpaGFudFxcYXBwXFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF3REEsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUN0REE7QURKQTtFQUNBLG9CQUFBO0FDTUE7QURKQTtFQUNBLGNBQUE7QUNNQTtBREpBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDTUE7QURKQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01BO0FESkE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNQTtBREhBO0VBQ0EsZ0JBQUE7QUNLQTtBREZBO0VBQ0EsZ0JBQUE7QUNJQTtBREZBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0lBO0FERkE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNJQTtBREZBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0lBO0FERkE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUE7QURGQTtFQUNBLDZCQUFBO0FDSUE7QURFQTtFQUNBLGNBQUE7QUNBQTtBREVBO0VBQ0EsY0FBQTtBQ0FBO0FERUE7RUFDQSxjQUFBO0FDQUE7QURFQTtFQUNBLDZCQUFBO0FDQUE7QURFQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQUE7QURFQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQUE7QURFQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQUE7QURFQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQUE7QURFQTtFQUNBLGVBQUE7QUNBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbmlvbi10b29sYmFyIHtcclxuLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuY29sb3I6ICNiOTkwNDQ7XHJcbn1cclxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbi0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG5jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubG9naW4tbG9nbyB7XHJcbnBhZGRpbmc6IDMwcHggMDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5iZy1sb2dpbiB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxud2lkdGg6IDEwMCU7XHJcbmxlZnQ6IDA7XHJcbnRvcDogNTAlO1xyXG5taW4taGVpZ2h0OiA0ODBweDtcclxubWFyZ2luLXRvcDogLTI0MHB4O1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyBpbWcge1xyXG5tYXgtd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbm1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmJnLWNvbnRlbnQge1xyXG4tLWJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnQtYmcge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG5tYXJnaW46YXV0bztcclxucGFkZGluZzogMjBweDtcclxuYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbndpZHRoOiA5MCU7XHJcbm1pbi1oZWlnaHQ6IDMzMHB4O1xyXG59XHJcbi5oZWFkZXItaW5uZXIge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDA7XHJcbm1hcmdpbjogMDtcclxufVxyXG4uaGVhZGVyLWlubmVyIGgyIHtcclxuY29sb3I6ICNiOTkwNDQ7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubGlzdC1jb2xvciB7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi0taW9uLWNvbG9yLXNlY29uZGFyeTogI2ZmZmZmZjtcclxuLS1pb24tY29sb3ItbGlnaHQ6ICMzMDMwMzA7XHJcbi0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcclxuLS1pb24tY29sb3ItbGlnaHQzOiAjZmZmZmZmO1xyXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xyXG5jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5pb24taW5wdXQge1xyXG5jb2xvcjogI2ZmZmZmZjsgXHJcbn1cclxuLmJnLWZvcm0ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2VudC1idG4ge1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG5oZWlnaHQ6IDQ1cHg7XHJcbmJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbmNvbG9yOiAjZmZmO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbnRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnNlbnQtYnRuOmhvdmVyIHtcclxuYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuY29sb3I6ICMwMTY2YjM7XHJcbmJvcmRlcjogMXB4IHNvbGlkICMwMTY2YjM7XHJcbn1cclxuLnJlZ2lzdGVyLWJ0biB7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbmhlaWdodDogNDVweDtcclxuYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuY29sb3I6ICMwMTY2YjM7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxuYm9yZGVyOiAxcHggc29saWQgIzAxNjZiMztcclxudHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4ucmVnaXN0ZXItYnRuOmhvdmVyIHsgXHJcbmJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG59XHJcbi5idG4tYm94IHtcclxucGFkZGluZzogMjBweCAwO1xyXG59XHJcbn0iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMzMDMwMzA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQzOiAjZmZmZmZmO1xufVxuOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuYmctbG9naW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgbWluLWhlaWdodDogNDgwcHg7XG4gIG1hcmdpbi10b3A6IC0yNDBweDtcbn1cbjpob3N0IC5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMjIwcHg7XG59XG46aG9zdCAubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRlbnQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogOTAlO1xuICBtaW4taGVpZ2h0OiAzMzBweDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgLmxpc3QtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCA6aG9zdCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5iZy1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCAuc2VudC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNiOTkwNDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAuc2VudC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzAxNjZiMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxNjZiMztcbn1cbjpob3N0IC5yZWdpc3Rlci1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMDE2NmIzO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTY2YjM7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAucmVnaXN0ZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I5OTA0NDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");








let LoginPage = class LoginPage {
    constructor(authService, navCtrl, alertService, modalCtrl, userData, router, events) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.router = router;
        this.events = events;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    ngOnInit() {
        //	alert("heloo");
        this.events.publish('toggleMenu', {});
    }
    ionViewWillEnter() {
        this.events.publish('toggleMenu', {});
    }
    onLogin(form) {
        this.submitted = true;
        if (form.valid) {
            this.authService.login(this.login.username, this.login.password).subscribe(data => {
                this.apiresponse = data;
                if (this.apiresponse.status == true) {
                    this.events.publish('toggleMenu', {});
                    this.router.navigateByUrl('/tickets');
                    this.alertService.presentToast(this.apiresponse.message);
                    this.alertService.removeLoading();
                }
                else {
                    this.events.publish('toggleMenu', {});
                    this.alertService.presentToast(this.apiresponse.message);
                    this.alertService.removeLoading();
                }
            }, error => {
                console.log(error);
                this.alertService.removeLoading();
            }, () => {
                // this.dismissLogin();
                //this.navCtrl.navigateRoot('/following-up');
            });
        }
    }
    onSignup() {
        this.router.navigateByUrl('/signup');
    }
    resetPassword() {
        this.router.navigateByUrl('/reset-passward');
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_events__WEBPACK_IMPORTED_MODULE_7__["Events"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.scss */ "./src/app/pages/login/login.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_events__WEBPACK_IMPORTED_MODULE_7__["Events"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map