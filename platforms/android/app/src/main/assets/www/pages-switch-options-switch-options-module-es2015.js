(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-switch-options-switch-options-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switch-options/switch-options.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switch-options/switch-options.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>switch-options</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/switch-options/switch-options-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/switch-options/switch-options-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SwitchOptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchOptionsPageRoutingModule", function() { return SwitchOptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _switch_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch-options.page */ "./src/app/pages/switch-options/switch-options.page.ts");




const routes = [
    {
        path: '',
        component: _switch_options_page__WEBPACK_IMPORTED_MODULE_3__["SwitchOptionsPage"]
    }
];
let SwitchOptionsPageRoutingModule = class SwitchOptionsPageRoutingModule {
};
SwitchOptionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SwitchOptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/switch-options/switch-options.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/switch-options/switch-options.module.ts ***!
  \***************************************************************/
/*! exports provided: SwitchOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchOptionsPageModule", function() { return SwitchOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _switch_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switch-options-routing.module */ "./src/app/pages/switch-options/switch-options-routing.module.ts");
/* harmony import */ var _switch_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switch-options.page */ "./src/app/pages/switch-options/switch-options.page.ts");







let SwitchOptionsPageModule = class SwitchOptionsPageModule {
};
SwitchOptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _switch_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["SwitchOptionsPageRoutingModule"]
        ],
        declarations: [_switch_options_page__WEBPACK_IMPORTED_MODULE_6__["SwitchOptionsPage"]]
    })
], SwitchOptionsPageModule);



/***/ }),

/***/ "./src/app/pages/switch-options/switch-options.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/switch-options/switch-options.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N3aXRjaC1vcHRpb25zL3N3aXRjaC1vcHRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/switch-options/switch-options.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/switch-options/switch-options.page.ts ***!
  \*************************************************************/
/*! exports provided: SwitchOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchOptionsPage", function() { return SwitchOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SwitchOptionsPage = class SwitchOptionsPage {
    constructor() { }
    ngOnInit() {
    }
};
SwitchOptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-switch-options',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./switch-options.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switch-options/switch-options.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./switch-options.page.scss */ "./src/app/pages/switch-options/switch-options.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SwitchOptionsPage);



/***/ })

}]);
//# sourceMappingURL=pages-switch-options-switch-options-module-es2015.js.map