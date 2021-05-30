function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-options-device-options-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-options/device-options.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-options/device-options.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeviceOptionsDeviceOptionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"top-btn\">\r\n      <img src=\"assets/img/images/logo-arihant-small.png\">\r\n    </ion-button>\r\n    </ion-buttons>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n   \r\n    <div class=\"center-content\">\r\n      <h2>Device options</h2>\r\n      <ion-buttons>\r\n        <img src=\"assets/img/images/smart-light.png\"> <ion-button (click)=\"deviceAdding()\" color=\"light2\" class=\"front-btn\" >smart light</ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        <img src=\"assets/img/images/smart-switch.png\"> <ion-button (click)=\"deviceAdding1()\" color=\"light2\" class=\"front-btn\" >smart switch</ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        <img src=\"assets/img/images/smart-fan.png\"> <ion-button (click)=\"deviceAdding2()\" color=\"light2\" class=\"front-btn\" >smart fan</ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        <img src=\"assets/img/images/demo.png\"> <ion-button (click)=\"deviceAdding3()\" color=\"light2\" class=\"front-btn\" >arihant demo</ion-button>\r\n      </ion-buttons>\r\n     \r\n     \r\n  </div>\r\n  </div>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button (click)=\"home()\" tab=\"schedule\" >\r\n        <img src=\"assets/img/images/home.png\">\r\n        <ion-label class=\"label-color\">Home</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button>\r\n        </ion-tab-button>\r\n      \r\n  \r\n        <ion-tab-button (click)=\"profile()\" tab=\"about\">\r\n        <img src=\"assets/img/images/user.png\">\r\n        <ion-label class=\"label-color\">Profile</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/device-options/device-options-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/device-options/device-options-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DeviceOptionsPageRoutingModule */

  /***/
  function srcAppPagesDeviceOptionsDeviceOptionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceOptionsPageRoutingModule", function () {
      return DeviceOptionsPageRoutingModule;
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


    var _device_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./device-options.page */
    "./src/app/pages/device-options/device-options.page.ts");

    var routes = [{
      path: '',
      component: _device_options_page__WEBPACK_IMPORTED_MODULE_3__["DeviceOptionsPage"]
    }];

    var DeviceOptionsPageRoutingModule = function DeviceOptionsPageRoutingModule() {
      _classCallCheck(this, DeviceOptionsPageRoutingModule);
    };

    DeviceOptionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeviceOptionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/device-options/device-options.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/device-options/device-options.module.ts ***!
    \***************************************************************/

  /*! exports provided: DeviceOptionsPageModule */

  /***/
  function srcAppPagesDeviceOptionsDeviceOptionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceOptionsPageModule", function () {
      return DeviceOptionsPageModule;
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


    var _device_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./device-options-routing.module */
    "./src/app/pages/device-options/device-options-routing.module.ts");
    /* harmony import */


    var _device_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-options.page */
    "./src/app/pages/device-options/device-options.page.ts");

    var DeviceOptionsPageModule = function DeviceOptionsPageModule() {
      _classCallCheck(this, DeviceOptionsPageModule);
    };

    DeviceOptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceOptionsPageRoutingModule"]],
      declarations: [_device_options_page__WEBPACK_IMPORTED_MODULE_6__["DeviceOptionsPage"]]
    })], DeviceOptionsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/device-options/device-options.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/device-options/device-options.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeviceOptionsDeviceOptionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 0 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 60vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  border: 1px solid #3c69b4;\n  background: #3c69b4;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: 30px;\n  box-shadow: 1px 1px 7px #000000;\n  width: 130px;\n}\n:host .front-btn:hover {\n  background: #ffffff;\n  color: #3c69b4;\n  border: 1px solid #3c69b4;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  max-width: 230px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n}\n:host .center-content ion-buttons img {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV2aWNlLW9wdGlvbnMvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxkZXZpY2Utb3B0aW9uc1xcZGV2aWNlLW9wdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXZpY2Utb3B0aW9ucy9kZXZpY2Utb3B0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFzQk0sMkJBQUE7QUNwQk47QURESTtFQUNJLGtFQUFBO0FDR1I7QURETTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHVjtBRERNO0VBQ0UsZUFBQTtFQUNGLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEREs7RUFDSSxhQUFBO0FDR1Q7QURBTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFHQSwrQkFBQTtFQUNBLFlBQUE7QUNFUjtBREFJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNFUjtBREFRO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ0VaO0FEQVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBR0osK0JBQUE7QUNFUjtBREFRO0VBQ0ksa0JBQUE7QUNFWjtBREFRO0VBQ0ksY0FBQTtBQ0VaO0FEQVE7RUFDSSxjQUFBO0FDRVo7QURBUTtFQUNJLGlDQUFBO0FDRVo7QURBUTtFQUNJLGFBQUE7RUFDQSxrRUFBQTtBQ0VaO0FEQVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRVo7QURBUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0VaO0FEQVE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQVE7RUFDSSxtQkFBQTtBQ0VaO0FEQVE7RUFDSSxpQkFBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV2aWNlLW9wdGlvbnMvZGV2aWNlLW9wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAubG9nby1hcmVhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgICAudG9wLWJ0biB7XHJcbiAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgfVxyXG4gICAgICAtLWlvbi1jb2xvci1saWdodDI6ICMzYzY5YjQ7XHJcbiAgICAgIC5mcm9udC1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYzY5YjQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNjNjliNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuZnJvbnQtYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjM2M2OWI0O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYzY5YjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tLXJnaHQge1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRhYi1iYXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNjNjliNDtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxvZ28tYXJlYSB7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDYwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuOmhvc3QgLnRvcC1idG4ge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuOmhvc3QgLmZyb250LWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYzY5YjQ7XG4gIGJhY2tncm91bmQ6ICMzYzY5YjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogMzBweDtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIHdpZHRoOiAxMzBweDtcbn1cbjpob3N0IC5mcm9udC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzNjNjliNDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjNjliNDtcbn1cbjpob3N0IC5tLXJnaHQge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbn1cbjpob3N0IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWljb24ge1xuICBjb2xvcjogI2UwZGNkOTtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcbn1cbjpob3N0IGlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxhYmVsLWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCB7XG4gIG1heC13aWR0aDogMjMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaW9uLWJ1dHRvbnMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/device-options/device-options.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/device-options/device-options.page.ts ***!
    \*************************************************************/

  /*! exports provided: DeviceOptionsPage */

  /***/
  function srcAppPagesDeviceOptionsDeviceOptionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceOptionsPage", function () {
      return DeviceOptionsPage;
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

    var DeviceOptionsPage =
    /*#__PURE__*/
    function () {
      function DeviceOptionsPage(events, authService, router) {
        _classCallCheck(this, DeviceOptionsPage);

        this.events = events;
        this.authService = authService;
        this.router = router;
      }

      _createClass(DeviceOptionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deviceAdding",
        value: function deviceAdding() {
          this.router.navigateByUrl('/device-adding');
        }
      }, {
        key: "deviceAdding1",
        value: function deviceAdding1() {
          this.router.navigateByUrl('/device-adding1');
        }
      }, {
        key: "deviceAdding2",
        value: function deviceAdding2() {
          this.router.navigateByUrl('/device-adding2');
        }
      }, {
        key: "deviceAdding3",
        value: function deviceAdding3() {
          this.router.navigateByUrl('/device-adding3');
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

      return DeviceOptionsPage;
    }();

    DeviceOptionsPage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DeviceOptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-options.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-options/device-options.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-options.page.scss */
      "./src/app/pages/device-options/device-options.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DeviceOptionsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-device-options-device-options-module-es5.js.map