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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-secondary: #ffffff;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n  --ion-color-light3: #ffffff;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .login-logo {\n  padding: 30px 0;\n  text-align: center;\n}\n:host .bg-login {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 50%;\n  min-height: 480px;\n  margin-top: -240px;\n}\n:host .login-logo img {\n  max-width: 220px;\n}\n:host .list {\n  margin-bottom: 0;\n}\n:host .bg-content {\n  --background: #ffffff;\n  background-position: center;\n}\n:host .content-bg {\n  background-color: #303030;\n  margin: auto;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n  width: 90%;\n  min-height: 330px;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 20px;\n  font-weight: 600;\n}\n:host .list-color {\n  background-color: transparent;\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host .bg-form {\n  background-color: transparent;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #0166b3;\n  border: 1px solid #0166b3;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #0166b3;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #0166b3;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n  border: 1px solid #b99044;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4uc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXdEQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ3REQTtBREpBO0VBQ0Esb0JBQUE7QUNNQTtBREpBO0VBQ0EsY0FBQTtBQ01BO0FESkE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUNNQTtBREpBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTUE7QURKQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ01BO0FESEE7RUFDQSxnQkFBQTtBQ0tBO0FERkE7RUFDQSxnQkFBQTtBQ0lBO0FERkE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDSUE7QURGQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0lBO0FERkE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSUE7QURGQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJQTtBREZBO0VBQ0EsNkJBQUE7QUNJQTtBREVBO0VBQ0EsY0FBQTtBQ0FBO0FERUE7RUFDQSxjQUFBO0FDQUE7QURFQTtFQUNBLGNBQUE7QUNBQTtBREVBO0VBQ0EsNkJBQUE7QUNBQTtBREVBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNBQTtBREVBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNBQTtBREVBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNBQTtBREVBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNBQTtBREVBO0VBQ0EsZUFBQTtBQ0FBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuaW9uLXRvb2xiYXIge1xyXG4tLWJhY2tncm91bmQ6IzMwMzAzMDtcclxufVxyXG5pb24tdGl0bGUge1xyXG5jb2xvcjogI2I5OTA0NDtcclxufVxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxuLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5sb2dpbi1sb2dvIHtcclxucGFkZGluZzogMzBweCAwO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJnLWxvZ2luIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogMTAwJTtcclxubGVmdDogMDtcclxudG9wOiA1MCU7XHJcbm1pbi1oZWlnaHQ6IDQ4MHB4O1xyXG5tYXJnaW4tdG9wOiAtMjQwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIGltZyB7XHJcbm1heC13aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxubWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uYmctY29udGVudCB7XHJcbi0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uY29udGVudC1iZyB7XHJcbmJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbm1hcmdpbjphdXRvO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5ib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxud2lkdGg6IDkwJTtcclxubWluLWhlaWdodDogMzMwcHg7XHJcbn1cclxuLmhlYWRlci1pbm5lciB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxucGFkZGluZzogMDtcclxubWFyZ2luOiAwO1xyXG59XHJcbi5oZWFkZXItaW5uZXIgaDIge1xyXG5jb2xvcjogI2I5OTA0NDtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5saXN0LWNvbG9yIHtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjZmZmZmZmO1xyXG4tLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcclxuLS1pb24tY29sb3ItbGlnaHQyOiAjYjk5MDQ0O1xyXG4tLWlvbi1jb2xvci1saWdodDM6ICNmZmZmZmY7XHJcbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG5jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbmNvbG9yOiAjZmZmZmZmOyBcclxufVxyXG4uYmctZm9ybSB7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zZW50LWJ0biB7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbmhlaWdodDogNDVweDtcclxuYmFja2dyb3VuZDogI2I5OTA0NDtcclxuY29sb3I6ICNmZmY7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxuYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxudHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4uc2VudC1idG46aG92ZXIge1xyXG5iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5jb2xvcjogIzAxNjZiMztcclxuYm9yZGVyOiAxcHggc29saWQgIzAxNjZiMztcclxufVxyXG4ucmVnaXN0ZXItYnRuIHtcclxuYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuaGVpZ2h0OiA0NXB4O1xyXG5iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5jb2xvcjogIzAxNjZiMztcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMDE2NmIzO1xyXG50cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5yZWdpc3Rlci1idG46aG92ZXIgeyBcclxuYmFja2dyb3VuZDogI2I5OTA0NDtcclxuY29sb3I6ICNmZmZmZmY7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbn1cclxuLmJ0bi1ib3gge1xyXG5wYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxufSIsIjpob3N0IHtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjYjk5MDQ0O1xuICAtLWlvbi1jb2xvci1saWdodDM6ICNmZmZmZmY7XG59XG46aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMzAzMDMwO1xufVxuOmhvc3QgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5iZy1sb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgbWFyZ2luLXRvcDogLTI0MHB4O1xufVxuOmhvc3QgLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyMjBweDtcbn1cbjpob3N0IC5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiA5MCU7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAubGlzdC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIDpob3N0IC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJnLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5zZW50LWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogI2I5OTA0NDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5zZW50LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMDE2NmIzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDE2NmIzO1xufVxuOmhvc3QgLnJlZ2lzdGVyLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMTY2YjM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxNjZiMztcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5yZWdpc3Rlci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMjBweCAwO1xufSJdfQ== */");

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