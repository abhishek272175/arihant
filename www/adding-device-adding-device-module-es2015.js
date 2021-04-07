(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adding-device-adding-device-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-device/adding-device.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adding-device/adding-device.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>adding-device</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/adding-device/adding-device-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/adding-device/adding-device-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddingDevicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingDevicePageRoutingModule", function() { return AddingDevicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adding_device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adding-device.page */ "./src/app/adding-device/adding-device.page.ts");




const routes = [
    {
        path: '',
        component: _adding_device_page__WEBPACK_IMPORTED_MODULE_3__["AddingDevicePage"]
    }
];
let AddingDevicePageRoutingModule = class AddingDevicePageRoutingModule {
};
AddingDevicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddingDevicePageRoutingModule);



/***/ }),

/***/ "./src/app/adding-device/adding-device.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/adding-device/adding-device.module.ts ***!
  \*******************************************************/
/*! exports provided: AddingDevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingDevicePageModule", function() { return AddingDevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _adding_device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adding-device-routing.module */ "./src/app/adding-device/adding-device-routing.module.ts");
/* harmony import */ var _adding_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adding-device.page */ "./src/app/adding-device/adding-device.page.ts");







let AddingDevicePageModule = class AddingDevicePageModule {
};
AddingDevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adding_device_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddingDevicePageRoutingModule"]
        ],
        declarations: [_adding_device_page__WEBPACK_IMPORTED_MODULE_6__["AddingDevicePage"]]
    })
], AddingDevicePageModule);



/***/ }),

/***/ "./src/app/adding-device/adding-device.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/adding-device/adding-device.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGluZy1kZXZpY2UvYWRkaW5nLWRldmljZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/adding-device/adding-device.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/adding-device/adding-device.page.ts ***!
  \*****************************************************/
/*! exports provided: AddingDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingDevicePage", function() { return AddingDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddingDevicePage = class AddingDevicePage {
    constructor() { }
    ngOnInit() {
    }
};
AddingDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adding-device',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adding-device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adding-device/adding-device.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adding-device.page.scss */ "./src/app/adding-device/adding-device.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddingDevicePage);



/***/ })

}]);
//# sourceMappingURL=adding-device-adding-device-module-es2015.js.map