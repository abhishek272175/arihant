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


    __webpack_exports__["default"] = "<ion-content class=\"bg-content\">\r\n  <div class=\"logo-area\">\r\n    <img src=\"assets/img/images/logo-arihant.png\" class=\"logo-margin\" />\r\n    <h1>Smart Solution</h1>\r\n  </div>\r\n  <div class=\"btn-box\">\r\n    <div class=\"input-box\">\r\n      <ion-row text-center>\r\n        <ion-col>\r\n          <ion-input\r\n            type=\"tel\"\r\n            #otp1\r\n            required\r\n            maxLength=\"1\"\r\n            (keyup)=\"otpController($event,otp2,'')\"\r\n          >\r\n          </ion-input>\r\n          <ion-input\r\n            type=\"tel\"\r\n            #otp2\r\n            required\r\n            maxLength=\"1\"\r\n            (keyup)=\"otpController($event,otp3,otp1)\"\r\n          >\r\n          </ion-input>\r\n          <ion-input\r\n            type=\"tel\"\r\n            #otp3\r\n            required\r\n            maxLength=\"1\"\r\n            (keyup)=\"otpController($event,otp4,otp2)\"\r\n          >\r\n          </ion-input>\r\n          <ion-input\r\n            type=\"tel\"\r\n            #otp4\r\n            required\r\n            maxLength=\"1\"\r\n            (keyup)=\"otpController($event,otp5,otp3)\"\r\n          >\r\n          </ion-input>\r\n          <ion-input\r\n            type=\"tel\"\r\n            #otp5\r\n            required\r\n            maxLength=\"1\"\r\n            (keyup)=\"otpController($event,otp6,otp4)\"\r\n          >\r\n          </ion-input>\r\n          <ion-input\r\n            type=\"tel\"\r\n            #otp6\r\n            required\r\n            maxLength=\"1\"\r\n            (keyup)=\"otpController($event,'',otp5)\"\r\n          >\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <ion-button (click)=\"googleLogin()\" color=\"light2\" class=\"front-btn\"\r\n        >OK</ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3a6ab4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .logo-margin {\n  margin-bottom: 25px;\n}\n:host .logo-area h1 {\n  color: #374051;\n  text-transform: capitalize;\n  font-size: 30px;\n  margin-bottom: 0;\n  margin-top: 0;\n  line-height: 44px;\n}\n:host .btn-box {\n  padding: 0 30px;\n}\n:host .front-btn {\n  border: 1px solid #3a6ab4;\n  background: #3a6ab4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 18px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 40px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 150px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3a6ab4;\n  border: 1px solid #3a6ab4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host .input-box {\n  background-color: #ffffff;\n  padding: 7px 0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  text-align: center;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host ion-input {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin: 0 2px;\n  --background: #ffffff;\n  --padding-start: 0px;\n  border-bottom: 2px solid #cdced0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZ2xlLW90cC9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXGdvb2dsZS1vdHBcXGdvb2dsZS1vdHAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29nbGUtb3RwL2dvb2dsZS1vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBc0JFLDJCQUFBO0FDcEJGO0FEREU7RUFDRSxrRUFBQTtBQ0dKO0FEREU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNFLG1CQUFBO0FDR0o7QURERTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0dKO0FEREU7RUFDRSxlQUFBO0FDR0o7QURBRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFHQSwrQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNFSjtBREFFO0VBQ0UsbUNBQUE7VUFBQSxrQ0FBQTtBQ0VKO0FEQUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBR0EsK0JBQUE7QUNFSjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURBRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDRUo7QURBRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nb29nbGUtb3RwL2dvb2dsZS1vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5iZy1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICB9XHJcbiAgLmxvZ28tYXJlYSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sb2dvLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICAubG9nby1hcmVhIGgxIHtcclxuICAgIGNvbG9yOiAjMzc0MDUxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuICAuYnRuLWJveCB7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgfVxyXG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNhNmFiNDtcclxuICAuZnJvbnQtYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2E2YWI0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuZnJvbnQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzNhNmFiNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTZhYjQ7XHJcbiAgfVxyXG4gIC5tLXJnaHQge1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gIH1cclxuICAudGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gIH1cclxuICAuaW5wdXQtYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NkY2VkMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICMzYTZhYjQ7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5sb2dvLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG46aG9zdCAubG9nby1hcmVhIGgxIHtcbiAgY29sb3I6ICMzNzQwNTE7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNhNmFiNDtcbiAgYmFja2dyb3VuZDogIzNhNmFiNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuOmhvc3QgLmZyb250LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjM2E2YWI0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2E2YWI0O1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgLmlucHV0LWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZGNlZDA7XG59Il19 */";
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
          this.router.navigateByUrl("/ssid-login");
        }
      }, {
        key: "otpController",
        value: function otpController(event, next, prev) {
          if (event.target.value.length < 1 && prev) {
            prev.setFocus();
          } else if (next && event.target.value.length > 0) {
            next.setFocus();
          } else {
            return 0;
          }
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
      selector: "app-google-otp",
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