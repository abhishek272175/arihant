function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Registration</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n\t\r\n\t<div class=\"signup-logo\">\r\n\t\t<img src=\"assets/img/images/logo.png\" alt=\"Ionic logo\">\r\n\t</div>\r\n\t<div class=\"content-bg\">\r\n\t\t<div class=\"header-inner\">\r\n\t\t\t<h2>Create Account</h2>\r\n\t\t</div>\r\n\t\t<form #signupForm=\"ngForm\" novalidate>\r\n\t\t\t<ion-list class=\"list-color\">\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">First Name</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.first_name\" name=\"first_name\" type=\"text\" #first_name=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"first_name.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tFirst Name is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Last Name</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.last_name\" name=\"last_name\" type=\"text\" #last_name=\"ngModel\">\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">E-mail</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.email\" name=\"email\" type=\"email\" #email=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tE-mail is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Phone</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.phone\" name=\"phone\" type=\"text\" #phone=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tPhone is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tPassword is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.password_confirmation\" name=\"password_confirmation\" type=\"password\"\r\n\t\t\t\t\t#password_confirmation=\"ngModel\" required>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t\t<p [hidden]=\"password_confirmation.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\t\tConfirm Password is required\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</ion-text>\r\n\t\t\t</ion-list>\r\n\t\t\t\r\n\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"signup.password_confirmation\" name=\"password_confirmation\" type=\"password\"\r\n\t\t\t\t#password_confirmation=\"ngModel\" required>\r\n\t\t\t\t</ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item color=\"light\" lines=\"none\">\r\n\t\t\t\t<ion-checkbox color=\"dark\" slot=\"start\" [(ngModel)]=\"signup.is_term_accept\" value=\"1\" name=\"is_term_accept\" #is_term_accept=\"ngModel\" required ></ion-checkbox>\r\n\t\t\t\t<ion-label><a (click)=\"openTerms()\">Terms &amp; Conditions</a></ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-text color=\"danger\">\r\n\t\t\t\t<p [hidden]=\"is_term_accept.valid || submitted == false\" class=\"ion-padding-start\">\r\n\t\t\t\t\tAccept Terms &amp; Conditions\r\n\t\t\t\t</p>\r\n\t\t\t</ion-text>\r\n\t\t\t<div class=\"ion-padding\">\r\n\t\t\t\t<ion-button (click)=\"onSignup(signupForm)\" routerDirection=\"forward\" type=\"submit\" color=\"light2\"\r\n\t\t\t\tclass=\"sent-btn\" expand=\"block\">Register</ion-button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\t\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");

    var routes = [{
      path: '',
      component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignUpModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpModule", function () {
      return SignUpModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup */
    "./src/app/pages/signup/signup.ts");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");

    var SignUpModule = function SignUpModule() {
      _classCallCheck(this, SignUpModule);
    };

    SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]],
      declarations: [_signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
    })], SignUpModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/signup/signup.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-secondary: #ffffff;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n  --ion-color-light3: #ffffff;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host ion-label {\n  color: #fff;\n}\n:host ion-checkbox {\n  margin-left: 0;\n  margin-right: 5px;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .signup-logo {\n  padding: 30px 0;\n  min-height: 100px;\n  text-align: center;\n}\n:host .signup-logo img {\n  max-width: 220px;\n}\n:host .list {\n  margin-bottom: 0;\n}\n:host .bg-content {\n  --background: #ffffff;\n  background-position: center;\n}\n:host .content-bg {\n  background-color: #303030;\n  margin: 20px;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n  width: 90%;\n  min-height: 330px;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 20px;\n  font-weight: 600;\n}\n:host .list-color {\n  background-color: transparent;\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host .bg-form {\n  background-color: transparent;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #b99044;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #b99044;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBd0RFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDdERGO0FESkU7RUFDRSxvQkFBQTtBQ01KO0FESkU7RUFDRSxjQUFBO0FDTUo7QURKRTtFQUNFLFdBQUE7QUNNSjtBREpFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDTUo7QURKRTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBQ01KO0FESkU7RUFDRSxlQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ01SO0FESEU7RUFDRSxnQkFBQTtBQ0tKO0FERkU7RUFDRSxnQkFBQTtBQ0lKO0FERkU7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FDSUo7QURGRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0lKO0FERkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSUo7QURGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJSjtBREZFO0VBQ0UsNkJBQUE7QUNJSjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0FDQUo7QURFRTtFQUNFLGNBQUE7QUNBSjtBREVFO0VBQ0UsNkJBQUE7QUNBSjtBREVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNBSjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDQUo7QURFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQUo7QURFRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XHJcbiAgfVxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2I5OTA0NDtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgfVxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuICAuc2lnbnVwLWxvZ28ge1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNpZ251cC1sb2dvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gIH1cclxuICBcclxuICAubGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuYmctY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGVudC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG4gIH1cclxuICAuaGVhZGVyLWlubmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5oZWFkZXItaW5uZXIgaDIge1xyXG4gICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAubGlzdC1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMzAzMDMwO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcclxuICAtLWlvbi1jb2xvci1saWdodDM6ICNmZmZmZmY7XHJcbiAgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgfVxyXG4gIC5iZy1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuc2VudC1idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5zZW50LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1idG46aG92ZXIgeyBcclxuICAgIGJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmJ0bi1ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuICB9XHJcbiIsIjpob3N0IHtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjYjk5MDQ0O1xuICAtLWlvbi1jb2xvci1saWdodDM6ICNmZmZmZmY7XG59XG46aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMzAzMDMwO1xufVxuOmhvc3QgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbjpob3N0IC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuc2lnbnVwLWxvZ28ge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuc2lnbnVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyMjBweDtcbn1cbjpob3N0IC5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiA5MCU7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAubGlzdC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIDpob3N0IC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJnLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5zZW50LWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogI2I5OTA0NDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5zZW50LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnJlZ2lzdGVyLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5yZWdpc3Rlci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMjBweCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/signup/signup.ts ***!
    \****************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SignupPage =
    /*#__PURE__*/
    function () {
      function SignupPage(authService, navCtrl, alertService, modalCtrl, userData, router) {
        _classCallCheck(this, SignupPage);

        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.userData = userData;
        this.router = router;
        this.signup = {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          password: '',
          password_confirmation: '',
          is_term_accept: ''
        };
        this.submitted = false;
      }

      _createClass(SignupPage, [{
        key: "onSignup",
        value: function onSignup(form) {
          var _this = this;

          this.submitted = true;
          this.terms = 1;

          if (form.valid) {
            this.authService.register(this.signup.first_name, this.signup.last_name, this.signup.email, this.signup.phone, this.signup.password, this.signup.password_confirmation, this.terms).subscribe(function (data) {
              _this.apiresponse = data;

              if (_this.apiresponse.status == true) {
                _this.router.navigateByUrl('/login');

                _this.alertService.presentToast(_this.apiresponse.message);

                _this.alertService.removeLoading();
              } else {
                _this.alertService.presentToast(_this.apiresponse.message);

                _this.alertService.removeLoading();
              }
            }, function (error) {
              console.log(error);

              _this.alertService.removeLoading();
            }, function () {// this.dismissLogin();
              //this.navCtrl.navigateRoot('/following-up');
            });
          }
        }
      }, {
        key: "openTerms",
        value: function openTerms() {
          //debugger;
          this.router.navigateByUrl("/term-condition");
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.scss */
      "./src/app/pages/signup/signup.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map