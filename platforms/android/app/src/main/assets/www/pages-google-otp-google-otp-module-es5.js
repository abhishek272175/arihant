function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-google-otp-google-otp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-otp/google-otp.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-otp/google-otp.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGoogleOtpGoogleOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"logo-area\">\r\n    <img src=\"assets/img/images/logo-arihant.png\" class=\"logo-margin\">\r\n    <h1>Smart Solution</h1>\r\n  </div>\r\n  <div class=\"btn-box\">\r\n    <ion-item lines=\"none\">\r\n     \r\n      <ion-input  type=\"number\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <div class=\"text-center\">\r\n    <ion-button (click)=\"googleLogin()\" color=\"light2\" class=\"front-btn\" >OK</ion-button>\r\n  </div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/google-otp/google-otp-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/google-otp/google-otp-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: GoogleOtpPageRoutingModule */

  /***/
  function srcAppPagesGoogleOtpGoogleOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleOtpPageRoutingModule", function () {
      return GoogleOtpPageRoutingModule;
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


    var _google_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./google-otp.page */
    "./src/app/pages/google-otp/google-otp.page.ts");

    var routes = [{
      path: '',
      component: _google_otp_page__WEBPACK_IMPORTED_MODULE_3__["GoogleOtpPage"]
    }];

    var GoogleOtpPageRoutingModule = function GoogleOtpPageRoutingModule() {
      _classCallCheck(this, GoogleOtpPageRoutingModule);
    };

    GoogleOtpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GoogleOtpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/google-otp/google-otp.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/google-otp/google-otp.module.ts ***!
    \*******************************************************/

  /*! exports provided: GoogleOtpPageModule */

  /***/
  function srcAppPagesGoogleOtpGoogleOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleOtpPageModule", function () {
      return GoogleOtpPageModule;
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


    var _google_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./google-otp-routing.module */
    "./src/app/pages/google-otp/google-otp-routing.module.ts");
    /* harmony import */


    var _google_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./google-otp.page */
    "./src/app/pages/google-otp/google-otp.page.ts");

    var GoogleOtpPageModule = function GoogleOtpPageModule() {
      _classCallCheck(this, GoogleOtpPageModule);
    };

    GoogleOtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _google_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoogleOtpPageRoutingModule"]],
      declarations: [_google_otp_page__WEBPACK_IMPORTED_MODULE_6__["GoogleOtpPage"]]
    })], GoogleOtpPageModule);
    /***/
  },

  /***/
  "./src/app/pages/google-otp/google-otp.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/google-otp/google-otp.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGoogleOtpGoogleOtpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3a6ab4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .logo-margin {\n  margin-bottom: 25px;\n}\n:host .logo-area h1 {\n  color: #374051;\n  text-transform: capitalize;\n  font-size: 30px;\n  margin-bottom: 0;\n  margin-top: 0;\n  line-height: 44px;\n}\n:host .btn-box {\n  padding: 0 30px;\n}\n:host .front-btn {\n  border: 1px solid #3a6ab4;\n  background: #3a6ab4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 18px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 40px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 150px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3a6ab4;\n  border: 1px solid #3a6ab4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZ2xlLW90cC9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXGdvb2dsZS1vdHBcXGdvb2dsZS1vdHAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29nbGUtb3RwL2dvb2dsZS1vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBc0JNLDJCQUFBO0FDcEJOO0FEREk7RUFDSSxrRUFBQTtBQ0dSO0FERE07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1Y7QURETTtFQUNJLG1CQUFBO0FDR1Y7QURETTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0dWO0FERE07RUFDSSxlQUFBO0FDR1Y7QURBTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFHQSwrQkFBQTtFQUNBLFlBQUE7QUNFUjtBREFJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNFUjtBREFRO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ0VaO0FEQVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBR0osK0JBQUE7QUNFUjtBREFRO0VBQ0ksa0JBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQVE7RUFDSSxjQUFBO0FDRVo7QURBUTtFQUNJLGlDQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nb29nbGUtb3RwL2dvb2dsZS1vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAubG9nby1hcmVhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubG9nby1tYXJnaW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG4gICAgICAubG9nby1hcmVhIGgxIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzc0MDUxO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tYm94IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgfVxyXG4gICAgICAtLWlvbi1jb2xvci1saWdodDI6ICMzYTZhYjQ7XHJcbiAgICAgIC5mcm9udC1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNhNmFiNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuZnJvbnQtYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjM2E2YWI0O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tLXJnaHQge1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcclxuICAgICAgICB9XHJcblxyXG59IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICMzYTZhYjQ7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5sb2dvLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG46aG9zdCAubG9nby1hcmVhIGgxIHtcbiAgY29sb3I6ICMzNzQwNTE7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcbiAgYmFja2dyb3VuZDogIzNhNmFiNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuOmhvc3QgLmZyb250LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjM2E2YWI0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2E2YWI0O1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/google-otp/google-otp.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/google-otp/google-otp.page.ts ***!
    \*****************************************************/

  /*! exports provided: GoogleOtpPage */

  /***/
  function srcAppPagesGoogleOtpGoogleOtpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleOtpPage", function () {
      return GoogleOtpPage;
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

    var GoogleOtpPage =
    /*#__PURE__*/
    function () {
      function GoogleOtpPage(events, authService, router) {
        _classCallCheck(this, GoogleOtpPage);

        this.events = events;
        this.authService = authService;
        this.router = router;
      }

      _createClass(GoogleOtpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          this.router.navigateByUrl('/ssid-login');
        }
      }]);

      return GoogleOtpPage;
    }();

    GoogleOtpPage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    GoogleOtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-google-otp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-otp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-otp/google-otp.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-otp.page.scss */
      "./src/app/pages/google-otp/google-otp.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], GoogleOtpPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-google-otp-google-otp-module-es5.js.map