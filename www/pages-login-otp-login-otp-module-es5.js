function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-otp-login-otp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-otp/login-otp.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-otp/login-otp.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginOtpLoginOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"logo-area\">\r\n    <img src=\"assets/img/images/logo-arihant.png\" class=\"logo-margin\">\r\n    <h1>Smart Solution</h1>\r\n  </div>\r\n  <div class=\"btn-box\">\r\n    <ion-item lines=\"none\">\r\n     \r\n      <ion-input  type=\"number\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <div class=\"text-center\">\r\n    <ion-button (click)=\"googleLogin()\" color=\"light2\" class=\"front-btn\" >OK</ion-button>\r\n  </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/login-otp/login-otp-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/login-otp/login-otp-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LoginOtpPageRoutingModule */

  /***/
  function srcAppPagesLoginOtpLoginOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginOtpPageRoutingModule", function () {
      return LoginOtpPageRoutingModule;
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


    var _login_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-otp.page */
    "./src/app/pages/login-otp/login-otp.page.ts");

    var routes = [{
      path: '',
      component: _login_otp_page__WEBPACK_IMPORTED_MODULE_3__["LoginOtpPage"]
    }];

    var LoginOtpPageRoutingModule = function LoginOtpPageRoutingModule() {
      _classCallCheck(this, LoginOtpPageRoutingModule);
    };

    LoginOtpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginOtpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login-otp/login-otp.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login-otp/login-otp.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginOtpPageModule */

  /***/
  function srcAppPagesLoginOtpLoginOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginOtpPageModule", function () {
      return LoginOtpPageModule;
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


    var _login_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-otp-routing.module */
    "./src/app/pages/login-otp/login-otp-routing.module.ts");
    /* harmony import */


    var _login_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-otp.page */
    "./src/app/pages/login-otp/login-otp.page.ts");

    var LoginOtpPageModule = function LoginOtpPageModule() {
      _classCallCheck(this, LoginOtpPageModule);
    };

    LoginOtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginOtpPageRoutingModule"]],
      declarations: [_login_otp_page__WEBPACK_IMPORTED_MODULE_6__["LoginOtpPage"]]
    })], LoginOtpPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login-otp/login-otp.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login-otp/login-otp.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginOtpLoginOtpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3a6ab4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .logo-margin {\n  margin-bottom: 25px;\n}\n:host .logo-area h1 {\n  color: #374051;\n  text-transform: capitalize;\n  font-size: 30px;\n  margin-bottom: 0;\n  margin-top: 0;\n  line-height: 44px;\n}\n:host .btn-box {\n  padding: 0 30px;\n}\n:host .front-btn {\n  border: 1px solid #3a6ab4;\n  background: #3a6ab4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 18px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 40px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 150px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3a6ab4;\n  border: 1px solid #3a6ab4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tb3RwL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcbG9naW4tb3RwXFxsb2dpbi1vdHAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi1vdHAvbG9naW4tb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXNCTSwyQkFBQTtBQ3BCTjtBRERJO0VBQ0ksa0VBQUE7QUNHUjtBRERNO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dWO0FERE07RUFDSSxtQkFBQTtBQ0dWO0FERE07RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNHVjtBRERNO0VBQ0ksZUFBQTtBQ0dWO0FEQU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EsK0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRVI7QURBUTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7QUNFWjtBREFRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUdKLCtCQUFBO0FDRVI7QURBUTtFQUNJLGtCQUFBO0FDRVo7QURBUTtFQUNJLGNBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQVE7RUFDSSxpQ0FBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tb3RwL2xvZ2luLW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLW1hcmdpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEgaDEge1xyXG4gICAgICAgICAgY29sb3I6ICMzNzQwNTE7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNhNmFiNDtcclxuICAgICAgLmZyb250LWJ0biB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2E2YWI0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5mcm9udC1idG46aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICMzYTZhYjQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm0tcmdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuXHJcbn0iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNhNmFiNDtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxvZ28tYXJlYSB7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmxvZ28tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbjpob3N0IC5sb2dvLWFyZWEgaDEge1xuICBjb2xvcjogIzM3NDA1MTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cbjpob3N0IC5mcm9udC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2E2YWI0O1xuICBiYWNrZ3JvdW5kOiAjM2E2YWI0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICB3aWR0aDogMTUwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMzYTZhYjQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XG59XG46aG9zdCAubS1yZ2h0IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG59XG46aG9zdCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogI2UwZGNkOTtcbn1cbjpob3N0IGlvbi1pY29uIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login-otp/login-otp.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/login-otp/login-otp.page.ts ***!
    \***************************************************/

  /*! exports provided: LoginOtpPage */

  /***/
  function srcAppPagesLoginOtpLoginOtpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginOtpPage", function () {
      return LoginOtpPage;
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


    var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/events */
    "./src/app/services/events.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginOtpPage =
    /*#__PURE__*/
    function () {
      function LoginOtpPage(events, authService, router) {
        _classCallCheck(this, LoginOtpPage);

        this.events = events;
        this.authService = authService;
        this.router = router;
      }

      _createClass(LoginOtpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          this.router.navigateByUrl('/google-login');
        }
      }]);

      return LoginOtpPage;
    }();

    LoginOtpPage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginOtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-otp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-otp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-otp/login-otp.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-otp.page.scss */
      "./src/app/pages/login-otp/login-otp.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginOtpPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-otp-login-otp-module-es5.js.map