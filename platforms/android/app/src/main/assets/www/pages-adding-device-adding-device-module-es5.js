function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adding-device-adding-device-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adding-device/adding-device.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adding-device/adding-device.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddingDeviceAddingDevicePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"top-btn\">\r\n      <img src=\"assets/img/images/logo-arihant-small.png\">\r\n    </ion-button>\r\n    </ion-buttons>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n   \r\n    <div class=\"center-content\">\r\n      <h2>Adding Device ...</h2>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"addingDevice()\" color=\"light2\" class=\"front-btn\" ></ion-button><img src=\"assets/img/images/smart-light.png\"></ion-button>\r\n        <ion-button (click)=\"addingDevice()\" color=\"light2\" class=\"front-btn\" ></ion-button><img src=\"assets/img/images/smart-light.png\"></ion-button>\r\n        <ion-button (click)=\"addingDevice()\" color=\"light2\" class=\"front-btn\" ></ion-button><img src=\"assets/img/images/smart-light.png\"></ion-button>\r\n      </ion-buttons>\r\n     \r\n     \r\n     \r\n  </div>\r\n  </div>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"schedule\" >\r\n        <img src=\"assets/img/images/home.png\">\r\n        <ion-label class=\"label-color\">Schedule</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button>\r\n        </ion-tab-button>\r\n      \r\n  \r\n      <ion-tab-button tab=\"about\">\r\n        <img src=\"assets/img/images/user.png\">\r\n        <ion-label class=\"label-color\">About</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/adding-device/adding-device-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/adding-device/adding-device-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AddingDevicePageRoutingModule */

  /***/
  function srcAppPagesAddingDeviceAddingDeviceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddingDevicePageRoutingModule", function () {
      return AddingDevicePageRoutingModule;
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


    var _adding_device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adding-device.page */
    "./src/app/pages/adding-device/adding-device.page.ts");

    var routes = [{
      path: '',
      component: _adding_device_page__WEBPACK_IMPORTED_MODULE_3__["AddingDevicePage"]
    }];

    var AddingDevicePageRoutingModule = function AddingDevicePageRoutingModule() {
      _classCallCheck(this, AddingDevicePageRoutingModule);
    };

    AddingDevicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddingDevicePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/adding-device/adding-device.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/adding-device/adding-device.module.ts ***!
    \*************************************************************/

  /*! exports provided: AddingDevicePageModule */

  /***/
  function srcAppPagesAddingDeviceAddingDeviceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddingDevicePageModule", function () {
      return AddingDevicePageModule;
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


    var _adding_device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./adding-device-routing.module */
    "./src/app/pages/adding-device/adding-device-routing.module.ts");
    /* harmony import */


    var _adding_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./adding-device.page */
    "./src/app/pages/adding-device/adding-device.page.ts");

    var AddingDevicePageModule = function AddingDevicePageModule() {
      _classCallCheck(this, AddingDevicePageModule);
    };

    AddingDevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _adding_device_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddingDevicePageRoutingModule"]],
      declarations: [_adding_device_page__WEBPACK_IMPORTED_MODULE_6__["AddingDevicePage"]]
    })], AddingDevicePageModule);
    /***/
  },

  /***/
  "./src/app/pages/adding-device/adding-device.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/adding-device/adding-device.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddingDeviceAddingDevicePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 0 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 60vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  border: 1px solid #3c69b4;\n  background: #3c69b4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 30px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 130px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3c69b4;\n  border: 1px solid #3c69b4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  max-width: 230px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n}\n:host .center-content ion-buttons img {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkaW5nLWRldmljZS9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXGFkZGluZy1kZXZpY2VcXGFkZGluZy1kZXZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGRpbmctZGV2aWNlL2FkZGluZy1kZXZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBc0JNLDJCQUFBO0FDcEJOO0FEREk7RUFDSSxrRUFBQTtBQ0dSO0FERE07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1Y7QURETTtFQUNFLGVBQUE7RUFDRixvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHTjtBRERLO0VBQ0ksYUFBQTtBQ0dUO0FEQU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EsK0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRVI7QURBUTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7QUNFWjtBREFRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUdKLCtCQUFBO0FDRVI7QURBUTtFQUNJLGtCQUFBO0FDRVo7QURBUTtFQUNJLGNBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQVE7RUFDSSxpQ0FBQTtBQ0VaO0FEQVE7RUFDSSxhQUFBO0VBQ0Esa0VBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VaO0FEQVE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNFWjtBREFRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNFWjtBREFRO0VBQ0ksbUJBQUE7QUNFWjtBREFRO0VBQ0ksaUJBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGluZy1kZXZpY2UvYWRkaW5nLWRldmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgIC50b3AtYnRuIHtcclxuICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICB9XHJcbiAgICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNjNjliNDtcclxuICAgICAgLmZyb250LWJ0biB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNjNjliNDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2M2OWI0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgIH1cclxuICAgIC5mcm9udC1idG46aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICMzYzY5YjQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNjNjliNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm0tcmdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGFiLWJhcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxufSIsIjpob3N0IHtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2M2OWI0O1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubG9nby1hcmVhIHtcbiAgcGFkZGluZzogNTBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNjB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG46aG9zdCAudG9wLWJ0biB7XG4gIGhlaWdodDogMTEwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjNjliNDtcbiAgYmFja2dyb3VuZDogIzNjNjliNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgd2lkdGg6IDEzMHB4O1xufVxuOmhvc3QgLmZyb250LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjM2M2OWI0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2M2OWI0O1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDExMHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1N2E4ZGQgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubGFiZWwtY29sb3Ige1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAyMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/adding-device/adding-device.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/adding-device/adding-device.page.ts ***!
    \***********************************************************/

  /*! exports provided: AddingDevicePage */

  /***/
  function srcAppPagesAddingDeviceAddingDevicePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddingDevicePage", function () {
      return AddingDevicePage;
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

    var AddingDevicePage =
    /*#__PURE__*/
    function () {
      function AddingDevicePage(events, authService, router) {
        _classCallCheck(this, AddingDevicePage);

        this.events = events;
        this.authService = authService;
        this.router = router;
      }

      _createClass(AddingDevicePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addingDevice",
        value: function addingDevice() {
          this.router.navigateByUrl('/adding-device');
        }
      }]);

      return AddingDevicePage;
    }();

    AddingDevicePage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AddingDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adding-device',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adding-device.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adding-device/adding-device.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adding-device.page.scss */
      "./src/app/pages/adding-device/adding-device.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AddingDevicePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-adding-device-adding-device-module-es5.js.map