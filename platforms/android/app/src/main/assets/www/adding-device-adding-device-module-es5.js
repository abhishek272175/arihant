function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adding-device-adding-device-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-device/adding-device.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-device/adding-device.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddingDeviceAddingDevicePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>adding-device</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/adding-device/adding-device-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/adding-device/adding-device-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AddingDevicePageRoutingModule */

  /***/
  function srcAppAddingDeviceAddingDeviceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/adding-device/adding-device.page.ts");

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
  "./src/app/adding-device/adding-device.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/adding-device/adding-device.module.ts ***!
    \*******************************************************/

  /*! exports provided: AddingDevicePageModule */

  /***/
  function srcAppAddingDeviceAddingDeviceModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/adding-device/adding-device-routing.module.ts");
    /* harmony import */


    var _adding_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./adding-device.page */
    "./src/app/adding-device/adding-device.page.ts");

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
  "./src/app/adding-device/adding-device.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/adding-device/adding-device.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddingDeviceAddingDevicePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGluZy1kZXZpY2UvYWRkaW5nLWRldmljZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/adding-device/adding-device.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/adding-device/adding-device.page.ts ***!
    \*****************************************************/

  /*! exports provided: AddingDevicePage */

  /***/
  function srcAppAddingDeviceAddingDevicePageTs(module, __webpack_exports__, __webpack_require__) {
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

    var AddingDevicePage =
    /*#__PURE__*/
    function () {
      function AddingDevicePage() {
        _classCallCheck(this, AddingDevicePage);
      }

      _createClass(AddingDevicePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddingDevicePage;
    }();

    AddingDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adding-device',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adding-device.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-device/adding-device.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adding-device.page.scss */
      "./src/app/adding-device/adding-device.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AddingDevicePage);
    /***/
  }
}]);
//# sourceMappingURL=adding-device-adding-device-module-es5.js.map