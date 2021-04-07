(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-passward-reset-passward-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-passward/reset-passward.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-passward/reset-passward.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Reset Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-content\">\n  <div class=\"bg-login\">\n    <div class=\"login-logo\">\n      <img src=\"assets/img/images/logo.png\" alt=\"Ionic logo\">\n    </div>\n    <div class=\"content-bg\">\n      <div class=\"header-inner\">\n        <h2>Reset Password</h2>\n      </div>\n\n      <form #loginForm=\"ngForm\" novalidate>\n        <ion-list class=\"list-color\">\n          <ion-item color=\"light\">\n            <ion-label position=\"floating\" color=\"secondary\">Email</ion-label>\n            <ion-input [(ngModel)]=\"login.username\" name=\"username\" type=\"text\" #username=\"ngModel\" spellcheck=\"false\"\n              autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n\n          <ion-text color=\"danger\">\n            <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\n              Username is required\n            </p>\n          </ion-text>\n\n        </ion-list>\n        <div class=\"btn-box\">\n          <ion-row>\n            <ion-col>\n              <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" color=\"light2\" class=\"sent-btn\" expand=\"block\">\n                Submit</ion-button>\n            </ion-col>\n\n          </ion-row>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-secondary: #ffffff;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n  --ion-color-light3: #ffffff;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .login-logo {\n  padding: 30px 0;\n  text-align: center;\n}\n:host .bg-login {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 50%;\n  min-height: 480px;\n  margin-top: -240px;\n}\n:host .login-logo img {\n  max-width: 220px;\n}\n:host .list {\n  margin-bottom: 0;\n}\n:host .bg-content {\n  --background: #ffffff;\n  background-position: center;\n}\n:host .content-bg {\n  background-color: #303030;\n  margin: auto;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n  width: 90%;\n  min-height: 330px;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 20px;\n  font-weight: 600;\n}\n:host .list-color {\n  background-color: transparent;\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host .bg-form {\n  background-color: transparent;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #0166b3;\n  border: 1px solid #0166b3;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #0166b3;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #0166b3;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n  border: 1px solid #b99044;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dhcmQvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxyZXNldC1wYXNzd2FyZFxccmVzZXQtcGFzc3dhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXNldC1wYXNzd2FyZC9yZXNldC1wYXNzd2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF3REksOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUN0REo7QURKSTtFQUNBLG9CQUFBO0FDTUo7QURKSTtFQUNBLGNBQUE7QUNNSjtBREpJO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDTUo7QURKSTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01KO0FESkk7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNSjtBREhJO0VBQ0EsZ0JBQUE7QUNLSjtBREZJO0VBQ0EsZ0JBQUE7QUNJSjtBREZJO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0lKO0FERkk7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNJSjtBREZJO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0lKO0FERkk7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUo7QURGSTtFQUNBLDZCQUFBO0FDSUo7QURFSTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0EsY0FBQTtBQ0FKO0FERUk7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNBLDZCQUFBO0FDQUo7QURFSTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQUo7QURFSTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQUo7QURFSTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQUo7QURFSTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQUo7QURFSTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3YXJkL3Jlc2V0LXBhc3N3YXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDojMzAzMDMwO1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgfVxyXG4gICAgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWxvZ28ge1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJnLWxvZ2luIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWluLWhlaWdodDogNDgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjQwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbi1sb2dvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItaW5uZXIgaDIge1xyXG4gICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNmZmZmZmY7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0MzogI2ZmZmZmZjtcclxuICAgIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgICB9XHJcbiAgICAuYmctZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5zZW50LWJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2I5OTA0NDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIC5zZW50LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMwMTY2YjM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDE2NmIzO1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLWJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMDE2NmIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDE2NmIzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1idG46aG92ZXIgeyBcclxuICAgIGJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICB9XHJcbiAgICAuYnRuLWJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB9XHJcbiAgICB9IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMzAzMDMwO1xuICAtLWlvbi1jb2xvci1saWdodDI6ICNiOTkwNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MzogI2ZmZmZmZjtcbn1cbjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XG59XG46aG9zdCBpb24tdGl0bGUge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmJnLWxvZ2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xuICBtYXJnaW4tdG9wOiAtMjQwcHg7XG59XG46aG9zdCAubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDIyMHB4O1xufVxuOmhvc3QgLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDkwJTtcbiAgbWluLWhlaWdodDogMzMwcHg7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGgyIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IC5saXN0LWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgOmhvc3QgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYmctZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLnNlbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLnNlbnQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMTY2YjM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTY2YjM7XG59XG46aG9zdCAucmVnaXN0ZXItYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzAxNjZiMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDE2NmIzO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLnJlZ2lzdGVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiOTkwNDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59Il19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");








let ResetPasswardPage = class ResetPasswardPage {
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
            this.alertService.presentLoading();
            this.authService.reset_password(this.login.username).subscribe(data => {
                this.apiresponse = data;
                if (this.apiresponse.status == true) {
                    this.events.publish('toggleMenu', {});
                    this.router.navigateByUrl('/login');
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
};
ResetPasswardPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_events__WEBPACK_IMPORTED_MODULE_7__["Events"] }
];
ResetPasswardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-passward',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-passward.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-passward/reset-passward.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-passward.page.scss */ "./src/app/pages/reset-passward/reset-passward.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_events__WEBPACK_IMPORTED_MODULE_7__["Events"]])
], ResetPasswardPage);



/***/ })

}]);
//# sourceMappingURL=pages-reset-passward-reset-passward-module-es2015.js.map