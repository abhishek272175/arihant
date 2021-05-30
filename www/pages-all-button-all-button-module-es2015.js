(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-button-all-button-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-button/all-button.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-button/all-button.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n   \r\n    <div class=\"center-content\">\r\n      <ion-buttons>\r\n        Switch 1\r\n        <a (click)=\"switcheson()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        Switch 2\r\n        <a (click)=\"switcheson2()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden2 ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff2()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof2  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        Switch 3\r\n        <a (click)=\"switcheson3()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden3 ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff3()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof3  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        Switch 4\r\n        <a (click)=\"switcheson4()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden4 ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff4()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof4  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        Switch all\r\n        <a (click)=\"switcheson5()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden5 ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff5()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof5  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n   \r\n  </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/all-button/all-button-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/all-button/all-button-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AllButtonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllButtonPageRoutingModule", function() { return AllButtonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _all_button_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-button.page */ "./src/app/pages/all-button/all-button.page.ts");




const routes = [
    {
        path: '',
        component: _all_button_page__WEBPACK_IMPORTED_MODULE_3__["AllButtonPage"]
    }
];
let AllButtonPageRoutingModule = class AllButtonPageRoutingModule {
};
AllButtonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllButtonPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/all-button/all-button.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/all-button/all-button.module.ts ***!
  \*******************************************************/
/*! exports provided: AllButtonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllButtonPageModule", function() { return AllButtonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _all_button_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-button-routing.module */ "./src/app/pages/all-button/all-button-routing.module.ts");
/* harmony import */ var _all_button_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-button.page */ "./src/app/pages/all-button/all-button.page.ts");







let AllButtonPageModule = class AllButtonPageModule {
};
AllButtonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_button_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllButtonPageRoutingModule"]
        ],
        declarations: [_all_button_page__WEBPACK_IMPORTED_MODULE_6__["AllButtonPage"]]
    })
], AllButtonPageModule);



/***/ }),

/***/ "./src/app/pages/all-button/all-button.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/all-button/all-button.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: auto;\n  min-height: 90vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .color-picker {\n  text-align: center;\n}\n:host .range-bar {\n  background: #808184;\n}\n:host ion-toggle {\n  width: 76px;\n  height: 76px;\n  --border-radius: 50%;\n  --handle-background-checked: transparent url('on-icon.png') no-repeat center / contain;\n  --handle-background: transparent url('off-icon.png') no-repeat center / contain;\n  --handle-width:200px;\n  --handle-height:200px;\n}\n:host .colorpick {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  --background: transparent;\n}\n:host ion-range {\n  padding: 10px 0;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #000000;\n}\n:host .range-bar {\n  background: #7a7268;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLWJ1dHRvbi9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXGFsbC1idXR0b25cXGFsbC1idXR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hbGwtYnV0dG9uL2FsbC1idXR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBOENNLDJCQUFBO0FDNUNOO0FEREk7RUFDSSxrRUFBQTtBQ0dSO0FERE07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1Y7QURETTtFQUNFLGFBQUE7RUFDRixvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEREk7RUFDSSxrQkFBQTtBQ0dSO0FEREs7RUFDRyxtQkFBQTtBQ0dSO0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0ZBQUE7RUFDQSwrRUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNBUjtBREVNO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQVI7QURFSztFQUNJLGFBQUE7QUNBVDtBREdNO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESVE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDRlo7QURJUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDSix5QkFBQTtBQ0ZSO0FESVE7RUFDSSxlQUFBO0FDRlo7QURJUTtFQUNJLGtCQUFBO0FDRlo7QURJUTtFQUNJLGNBQUE7QUNGWjtBRElRO0VBQ0ksY0FBQTtBQ0ZaO0FESVE7RUFFSSxtQkFBQTtBQ0haO0FES1E7RUFDSSxpQ0FBQTtBQ0haO0FES1E7RUFDSSxhQUFBO0VBQ0Esa0VBQUE7QUNIWjtBREtRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0haO0FES1E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNIWjtBREtRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtRO0VBQ0ksbUJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbC1idXR0b24vYWxsLWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgIC5jb2xvci1waWNrZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICAucmFuZ2UtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODA4MTg0O1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGlvbi10b2dnbGUge1xyXG4gICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgIGhlaWdodDogNzZweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vbi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XHJcbiAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29mZi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XHJcbiAgICAgICAgLS1oYW5kbGUtd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgLS1oYW5kbGUtaGVpZ2h0OjIwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb2xvcnBpY2sge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgLnRvcC1idG4ge1xyXG4gICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgIH1cclxuICAgICAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2M2OWI0O1xyXG4gICAgICAuZnJvbnQtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAubS1yZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFuZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYW5nZS1iYXIge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdhNzI2ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGFiLWJhcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI5MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbn0iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNjNjliNDtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxvZ28tYXJlYSB7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbjpob3N0IC5jb2xvci1waWNrZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAucmFuZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogIzgwODE4NDtcbn1cbjpob3N0IGlvbi10b2dnbGUge1xuICB3aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA3NnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb24taWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb2ZmLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgLS1oYW5kbGUtd2lkdGg6MjAwcHg7XG4gIC0taGFuZGxlLWhlaWdodDoyMDBweDtcbn1cbjpob3N0IC5jb2xvcnBpY2sge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuOmhvc3QgLnRvcC1idG4ge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuOmhvc3QgLmZyb250LWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAubS1yZ2h0IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1yYW5nZSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjpob3N0IC5yYW5nZS1iYXIge1xuICBiYWNrZ3JvdW5kOiAjN2E3MjY4O1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDExMHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1N2E4ZGQgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubGFiZWwtY29sb3Ige1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAyOTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/all-button/all-button.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/all-button/all-button.page.ts ***!
  \*****************************************************/
/*! exports provided: AllButtonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllButtonPage", function() { return AllButtonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AllButtonPage = class AllButtonPage {
    constructor(events, authService, router) {
        this.events = events;
        this.authService = authService;
        this.router = router;
        this.ishidden = true;
        this.ishiddenof = false;
        this.ishidden2 = true;
        this.ishiddenof2 = false;
        this.ishidden3 = true;
        this.ishiddenof3 = false;
        this.ishidden4 = true;
        this.ishiddenof4 = false;
        this.ishidden5 = true;
        this.ishiddenof5 = false;
        this.ishidden6 = true;
        this.ishiddenof6 = false;
    }
    ngOnInit() {
    }
    singleswitch() {
        this.router.navigateByUrl('/single-button');
    }
    switcheson() {
        this.ishidden = true;
        this.ishiddenof = false;
    }
    switcheson2() {
        this.ishidden2 = true;
        this.ishiddenof2 = false;
    }
    switcheson3() {
        this.ishidden3 = true;
        this.ishiddenof3 = false;
    }
    switcheson4() {
        this.ishidden4 = true;
        this.ishiddenof4 = false;
    }
    switcheson5() {
        this.ishidden5 = true;
        this.ishiddenof5 = false;
    }
    switcheson6() {
        this.ishidden6 = true;
        this.ishiddenof6 = false;
    }
    switchesoff() {
        this.ishiddenof = true;
        this.ishidden = false;
    }
    switchesoff2() {
        this.ishiddenof2 = true;
        this.ishidden2 = false;
    }
    switchesoff3() {
        this.ishiddenof3 = true;
        this.ishidden3 = false;
    }
    switchesoff4() {
        this.ishiddenof4 = true;
        this.ishidden4 = false;
    }
    switchesoff5() {
        this.ishiddenof5 = true;
        this.ishidden5 = false;
    }
    switchesoff6() {
        this.ishiddenof6 = true;
        this.ishidden6 = false;
    }
};
AllButtonPage.ctorParameters = () => [
    { type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AllButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-button.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-button/all-button.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-button.page.scss */ "./src/app/pages/all-button/all-button.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AllButtonPage);



/***/ })

}]);
//# sourceMappingURL=pages-all-button-all-button-module-es2015.js.map