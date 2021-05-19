function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-adding-device-adding-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-adding/device-adding.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-adding/device-adding.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeviceAddingDeviceAddingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"top-btn\">\n      <img src=\"assets/img/images/logo-arihant-small.png\">\n    </ion-button>\n    </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-content\">\n  <div class=\"btn-box\">\n   \n    <div class=\"center-content\">\n      <h2>Adding Device ...</h2>\n      <ion-buttons>\n        <a (click)=\"switches()\" color=\"light2\" class=\"front-btn\" ><img src=\"assets/img/images/search.png\"></a>\n        <a (click)=\"addingDevice()\" color=\"light2\" class=\"front-btn\" ><img src=\"assets/img/images/rcloud.png\"></a>\n        <a (click)=\"addingDevice()\" color=\"light2\" class=\"front-btn\" ><img src=\"assets/img/images/refresh.png\"></a>\n       \n      </ion-buttons>\n     \n     \n     \n  </div>\n  </div>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button (click)=\"home()\" tab=\"schedule\" >\n        <img src=\"assets/img/images/home.png\">\n        <ion-label class=\"label-color\">Home</ion-label>\n      </ion-tab-button>\n      <ion-tab-button>\n        </ion-tab-button>\n      \n  \n        <ion-tab-button (click)=\"profile()\" tab=\"about\">\n        <img src=\"assets/img/images/user.png\">\n        <ion-label class=\"label-color\">Profile</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/device-adding/device-adding-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/device-adding/device-adding-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DeviceAddingPageRoutingModule */

  /***/
  function srcAppPagesDeviceAddingDeviceAddingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceAddingPageRoutingModule", function () {
      return DeviceAddingPageRoutingModule;
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


    var _device_adding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./device-adding.page */
    "./src/app/pages/device-adding/device-adding.page.ts");

    var routes = [{
      path: '',
      component: _device_adding_page__WEBPACK_IMPORTED_MODULE_3__["DeviceAddingPage"]
    }];

    var DeviceAddingPageRoutingModule = function DeviceAddingPageRoutingModule() {
      _classCallCheck(this, DeviceAddingPageRoutingModule);
    };

    DeviceAddingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeviceAddingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/device-adding/device-adding.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/device-adding/device-adding.module.ts ***!
    \*************************************************************/

  /*! exports provided: DeviceAddingPageModule */

  /***/
  function srcAppPagesDeviceAddingDeviceAddingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceAddingPageModule", function () {
      return DeviceAddingPageModule;
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


    var _device_adding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./device-adding-routing.module */
    "./src/app/pages/device-adding/device-adding-routing.module.ts");
    /* harmony import */


    var _device_adding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-adding.page */
    "./src/app/pages/device-adding/device-adding.page.ts");

    var DeviceAddingPageModule = function DeviceAddingPageModule() {
      _classCallCheck(this, DeviceAddingPageModule);
    };

    DeviceAddingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_adding_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceAddingPageRoutingModule"]],
      declarations: [_device_adding_page__WEBPACK_IMPORTED_MODULE_6__["DeviceAddingPage"]]
    })], DeviceAddingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/device-adding/device-adding.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/device-adding/device-adding.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeviceAddingDeviceAddingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 0 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 60vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  box-shadow: 1px 1px 7px #000000;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #e0dcd9;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV2aWNlLWFkZGluZy9FOlxcdml2ZWtfbmV3XFxhcmloYW50XFxhcHBcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxkZXZpY2UtYWRkaW5nXFxkZXZpY2UtYWRkaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV2aWNlLWFkZGluZy9kZXZpY2UtYWRkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXNCTSwyQkFBQTtBQ3BCTjtBRERJO0VBQ0ksa0VBQUE7QUNHUjtBRERNO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dWO0FERE07RUFDRSxlQUFBO0VBQ0Ysb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR047QURESztFQUNJLGFBQUE7QUNHVDtBREFNO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQ1E7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDQ1o7QURDUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFHSiwrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxjQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7QUNDWjtBRENRO0VBQ0ksaUNBQUE7QUNDWjtBRENRO0VBQ0ksYUFBQTtFQUNBLGtFQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDWjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURDUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLG1CQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXZpY2UtYWRkaW5nL2RldmljZS1hZGRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAubG9nby1hcmVhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgICAudG9wLWJ0biB7XHJcbiAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgfVxyXG4gICAgICAtLWlvbi1jb2xvci1saWdodDI6ICMzYzY5YjQ7XHJcbiAgICAgIC5mcm9udC1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5tLXJnaHQge1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggN3B4ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRhYi1iYXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG59IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICMzYzY5YjQ7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA2MHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbjpob3N0IC50b3AtYnRuIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbjpob3N0IC5mcm9udC1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzAwMDAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjMDAwMDAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDExMHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1N2E4ZGQgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubGFiZWwtY29sb3Ige1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAyOTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/device-adding/device-adding.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/device-adding/device-adding.page.ts ***!
    \***********************************************************/

  /*! exports provided: DeviceAddingPage */

  /***/
  function srcAppPagesDeviceAddingDeviceAddingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceAddingPage", function () {
      return DeviceAddingPage;
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

    var DeviceAddingPage =
    /*#__PURE__*/
    function () {
      function DeviceAddingPage(events, authService, router) {
        _classCallCheck(this, DeviceAddingPage);

        this.events = events;
        this.authService = authService;
        this.router = router;
      }

      _createClass(DeviceAddingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switches",
        value: function switches() {
          this.router.navigateByUrl('/single-button');
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

      return DeviceAddingPage;
    }();

    DeviceAddingPage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DeviceAddingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-adding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-adding.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device-adding/device-adding.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-adding.page.scss */
      "./src/app/pages/device-adding/device-adding.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DeviceAddingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-device-adding-device-adding-module-es5.js.map