function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ssid-login-ssid-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ssid-login/ssid-login.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ssid-login/ssid-login.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSsidLoginSsidLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"top-btn\">\r\n        <img src=\"assets/img/images/logo-arihant-small.png\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!--<ion-buttons slot=\"end\">\r\n      <ion-button class=\"top-btn\">\r\n      <img src=\"assets/img/images/plus-icon.png\">\r\n      </ion-button>\r\n    </ion-buttons>-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n    <div>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"person\" class=\"m-rght\" slot=\"start\"></ion-icon>\r\n        <ion-label>SSID:</ion-label>\r\n        <ion-input value=\"XYZ\"></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"lock-closed\" class=\"m-rght\" slot=\"start\"></ion-icon>\r\n        <ion-label>Password:</ion-label>\r\n        <ion-input type=\"password\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"text-center\">\r\n        <ion-button (click)=\"deviceOptions()\" color=\"light2\" class=\"front-btn\"\r\n          >OK</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button (click)=\"home()\" tab=\"schedule\">\r\n        <img src=\"assets/img/images/home.png\" />\r\n        <ion-label class=\"label-color\">Home</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button> </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"profile()\" tab=\"about\">\r\n        <img src=\"assets/img/images/user.png\" />\r\n        <ion-label class=\"label-color\">Profile</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/ssid-login/ssid-login-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/ssid-login/ssid-login-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SsidLoginPageRoutingModule */

  /***/
  function srcAppPagesSsidLoginSsidLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SsidLoginPageRoutingModule", function () {
      return SsidLoginPageRoutingModule;
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


    var _ssid_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ssid-login.page */
    "./src/app/pages/ssid-login/ssid-login.page.ts");

    var routes = [{
      path: '',
      component: _ssid_login_page__WEBPACK_IMPORTED_MODULE_3__["SsidLoginPage"]
    }];

    var SsidLoginPageRoutingModule = function SsidLoginPageRoutingModule() {
      _classCallCheck(this, SsidLoginPageRoutingModule);
    };

    SsidLoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SsidLoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ssid-login/ssid-login.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/ssid-login/ssid-login.module.ts ***!
    \*******************************************************/

  /*! exports provided: SsidLoginPageModule */

  /***/
  function srcAppPagesSsidLoginSsidLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SsidLoginPageModule", function () {
      return SsidLoginPageModule;
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


    var _ssid_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ssid-login-routing.module */
    "./src/app/pages/ssid-login/ssid-login-routing.module.ts");
    /* harmony import */


    var _ssid_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ssid-login.page */
    "./src/app/pages/ssid-login/ssid-login.page.ts");

    var SsidLoginPageModule = function SsidLoginPageModule() {
      _classCallCheck(this, SsidLoginPageModule);
    };

    SsidLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ssid_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["SsidLoginPageRoutingModule"]],
      declarations: [_ssid_login_page__WEBPACK_IMPORTED_MODULE_6__["SsidLoginPage"]]
    })], SsidLoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/ssid-login/ssid-login.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/ssid-login/ssid-login.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSsidLoginSsidLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #83ad3f;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 0 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 60vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  border: 1px solid #83ad3f;\n  background: #83ad3f;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 18px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 40px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 150px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #83ad3f;\n  border: 1px solid #83ad3f;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3NpZC1sb2dpbi9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXHNzaWQtbG9naW5cXHNzaWQtbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zc2lkLWxvZ2luL3NzaWQtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBc0JNLDJCQUFBO0FDcEJOO0FEREk7RUFDSSxrRUFBQTtBQ0dSO0FERE07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1Y7QURETTtFQUNFLGVBQUE7RUFDRixvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHTjtBRERLO0VBQ0ksYUFBQTtBQ0dUO0FEQU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EsK0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRVI7QURBUTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7QUNFWjtBREFRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUdKLCtCQUFBO0FDRVI7QURBUTtFQUNJLGtCQUFBO0FDRVo7QURBUTtFQUNJLGNBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQVE7RUFDSSxpQ0FBQTtBQ0VaO0FEQVE7RUFDSSxhQUFBO0VBQ0Esa0VBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3NpZC1sb2dpbi9zc2lkLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5iZy1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28tYXJlYSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgICAgLnRvcC1idG4ge1xyXG4gICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgIH1cclxuICAgICAgLS1pb24tY29sb3ItbGlnaHQyOiAjODNhZDNmO1xyXG4gICAgICAuZnJvbnQtYnRuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODNhZDNmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4M2FkM2Y7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLmZyb250LWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogIzgzYWQzZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODNhZDNmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubS1yZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi10YWItYmFye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1N2E4ZGQgMCUsICM0NmEzZGMgMTAwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG59IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICM4M2FkM2Y7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA2MHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbjpob3N0IC50b3AtYnRuIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbjpob3N0IC5mcm9udC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODNhZDNmO1xuICBiYWNrZ3JvdW5kOiAjODNhZDNmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICB3aWR0aDogMTUwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICM4M2FkM2Y7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4M2FkM2Y7XG59XG46aG9zdCAubS1yZ2h0IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG59XG46aG9zdCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogI2UwZGNkOTtcbn1cbjpob3N0IGlvbi1pY29uIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XG59XG46aG9zdCBpb24tdGFiLWJhciB7XG4gIGhlaWdodDogMTEwcHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sYWJlbC1jb2xvciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/ssid-login/ssid-login.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/ssid-login/ssid-login.page.ts ***!
    \*****************************************************/

  /*! exports provided: SsidLoginPage */

  /***/
  function srcAppPagesSsidLoginSsidLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SsidLoginPage", function () {
      return SsidLoginPage;
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

    var SsidLoginPage =
    /*#__PURE__*/
    function () {
      function SsidLoginPage(events, authService, router) {
        _classCallCheck(this, SsidLoginPage);

        this.events = events;
        this.authService = authService;
        this.router = router;
      }

      _createClass(SsidLoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deviceOptions",
        value: function deviceOptions() {
          this.router.navigateByUrl('/add-device');
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigateByUrl('/home');
        }
      }, {
        key: "profile",
        value: function profile() {
          this.router.navigateByUrl('/profile');
        }
      }]);

      return SsidLoginPage;
    }();

    SsidLoginPage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SsidLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ssid-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ssid-login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ssid-login/ssid-login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ssid-login.page.scss */
      "./src/app/pages/ssid-login/ssid-login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], SsidLoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-ssid-login-ssid-login-module-es5.js.map