(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Registration</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n\t\r\n\t<div class=\"signup-logo\">\r\n\t\t<img src=\"assets/img/images/logo.png\" alt=\"Ionic logo\">\r\n\t</div>\r\n\t<div class=\"content-bg\">\r\n\t\t<div class=\"header-inner\">\r\n\t\t\t<h2>Create Account</h2>\r\n\t\t</div>\r\n\t\t<form #signupForm=\"ngForm\" novalidate>\r\n\t\t\t<ion-list class=\"list-color\">\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">First Name</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.first_name\" name=\"first_name\" type=\"text\" #first_name=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"first_name.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tFirst Name is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Last Name</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.last_name\" name=\"last_name\" type=\"text\" #last_name=\"ngModel\">\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">E-mail</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.email\" name=\"email\" type=\"email\" #email=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tE-mail is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Phone</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.phone\" name=\"phone\" type=\"text\" #phone=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tPhone is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tPassword is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.password_confirmation\" name=\"password_confirmation\" type=\"password\"\r\n\t\t\t\t\t#password_confirmation=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"password_confirmation.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tConfirm Password is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t</ion-list>\r\n\t\t\t\r\n\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"signup.password_confirmation\" name=\"password_confirmation\" type=\"password\"\r\n\t\t\t\t#password_confirmation=\"ngModel\" required>\r\n\t\t\t\t</ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item color=\"light\" lines=\"none\">\r\n\t\t\t\t<ion-checkbox color=\"dark\" slot=\"start\" [(ngModel)]=\"signup.is_term_accept\" value=\"1\" name=\"is_term_accept\" #is_term_accept=\"ngModel\" required ></ion-checkbox>\r\n\t\t\t\t<ion-label><a (click)=\"openTerms()\">Terms &amp; Conditions</a></ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t<p [hidden]=\"is_term_accept.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\tAccept Terms &amp; Conditions\r\n\t\t\t\t</p>\r\n\t\t\t</ion-text>\r\n\t\t\t<div class=\"ion-padding\">\r\n\t\t\t\t<ion-button (click)=\"onSignup(signupForm)\" routerDirection=\"forward\" type=\"submit\" color=\"light2\"\r\n\t\t\t\tclass=\"sent-btn\" expand=\"block\">Register</ion-button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\t\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");




const routes = [
    {
        path: '',
        component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");







let SignUpModule = class SignUpModule {
};
SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]
        ],
        declarations: [
            _signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"],
        ]
    })
], SignUpModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.scss":
/*!******************************************!*\
  !*** ./src/app/pages/signup/signup.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-secondary: #ffffff;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n  --ion-color-light3: #ffffff;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host ion-label {\n  color: #fff;\n}\n:host ion-checkbox {\n  margin-left: 0;\n  margin-right: 5px;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .signup-logo {\n  padding: 30px 0;\n  min-height: 100px;\n  text-align: center;\n}\n:host .signup-logo img {\n  max-width: 220px;\n}\n:host .list {\n  margin-bottom: 0;\n}\n:host .bg-content {\n  --background: #ffffff;\n  background-position: center;\n}\n:host .content-bg {\n  background-color: #303030;\n  margin: 20px;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n  width: 90%;\n  min-height: 330px;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 20px;\n  font-weight: 600;\n}\n:host .list-color {\n  background-color: transparent;\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host .bg-form {\n  background-color: transparent;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #b99044;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #b99044;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0U6XFx2aXZla19uZXdcXGFyaWhhbnRcXGFwcFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXdERSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ3RERjtBREpFO0VBQ0Usb0JBQUE7QUNNSjtBREpFO0VBQ0UsY0FBQTtBQ01KO0FESkU7RUFDRSxXQUFBO0FDTUo7QURKRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ01KO0FESkU7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUNNSjtBREpFO0VBQ0UsZUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNNUjtBREhFO0VBQ0UsZ0JBQUE7QUNLSjtBREZFO0VBQ0UsZ0JBQUE7QUNJSjtBREZFO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtBQ0lKO0FERkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNJSjtBREZFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0lKO0FERkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUo7QURGRTtFQUNFLDZCQUFBO0FDSUo7QURFRTtFQUNFLGNBQUE7QUNBSjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0FDQUo7QURFRTtFQUNFLDZCQUFBO0FDQUo7QURFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQUo7QURFRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKO0FERUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0FKO0FERUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVFO0VBQ0UsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDojMzAzMDMwO1xyXG4gIH1cclxuICBpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiAgLnNpZ251cC1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWdudXAtbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmJnLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbnRlbnQtYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMzBweDtcclxuICB9XHJcbiAgLmhlYWRlci1pbm5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuaGVhZGVyLWlubmVyIGgyIHtcclxuICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLmxpc3QtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcclxuICAtLWlvbi1jb2xvci1saWdodDI6ICNiOTkwNDQ7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQzOiAjZmZmZmZmO1xyXG4gIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7IFxyXG4gIH1cclxuICAuYmctZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnNlbnQtYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuc2VudC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gIH1cclxuICAucmVnaXN0ZXItYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAucmVnaXN0ZXItYnRuOmhvdmVyIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5idG4tYm94IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICB9XHJcbiAgfVxyXG4iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMzMDMwMzA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQzOiAjZmZmZmZmO1xufVxuOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCBpb24tY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG46aG9zdCAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLnNpZ251cC1sb2dvIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLnNpZ251cC1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMjIwcHg7XG59XG46aG9zdCAubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRlbnQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogOTAlO1xuICBtaW4taGVpZ2h0OiAzMzBweDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgLmxpc3QtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCA6aG9zdCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5iZy1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCAuc2VudC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNiOTkwNDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAuc2VudC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5yZWdpc3Rlci1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAucmVnaXN0ZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I5OTA0NDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/signup/signup.ts":
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");







let SignupPage = class SignupPage {
    constructor(authService, navCtrl, alertService, modalCtrl, userData, router) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.router = router;
        this.signup = { first_name: '', last_name: '', email: '', phone: '', password: '', password_confirmation: '', is_term_accept: '' };
        this.submitted = false;
    }
    onSignup(form) {
        this.submitted = true;
        this.terms = 1;
        if (form.valid) {
            this.authService.register(this.signup.first_name, this.signup.last_name, this.signup.email, this.signup.phone, this.signup.password, this.signup.password_confirmation, this.terms).subscribe(data => {
                this.apiresponse = data;
                if (this.apiresponse.status == true) {
                    this.router.navigateByUrl('/login');
                    this.alertService.presentToast(this.apiresponse.message);
                    this.alertService.removeLoading();
                }
                else {
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
    openTerms() {
        //debugger;
        this.router.navigateByUrl("/term-condition");
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.scss */ "./src/app/pages/signup/signup.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map