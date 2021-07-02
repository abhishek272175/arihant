(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-switches-switches-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switches/switches.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switches/switches.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n   \r\n    <div class=\"center-content\">\r\n      <ion-buttons>\r\n        Switch 1\r\n        <a (click)=\"switcheson()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        Switch 2\r\n        <a (click)=\"switcheson2()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden2 ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff2()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof2  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        Switch 3\r\n        <a (click)=\"switcheson3()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden3 ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff3()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof3  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n      <ion-buttons>\r\n        Switch all\r\n        <a (click)=\"switcheson4()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden4 ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff4()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof4  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n     \r\n      <ion-item lines=\"none\">\r\n        <ion-range min=\"0\" max=\"5\" step=\"1\" value=\"0\" pin snaps color=\"primary\">\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"remove-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\"  name=\"add-outline\"></ion-icon>\r\n        </ion-range>\r\n      </ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          \r\n          \r\n          <ion-col size=\"12\">\r\n            <div class=\"color-picker\">\r\n            <div class=\"colorpick\" id=\"picker\">\r\n            </div>\r\n            <div id=\"values\"></div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n     \r\n      \r\n     \r\n  </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/switches/switches-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/switches/switches-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SwitchesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchesPageRoutingModule", function() { return SwitchesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _switches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switches.page */ "./src/app/pages/switches/switches.page.ts");




const routes = [
    {
        path: '',
        component: _switches_page__WEBPACK_IMPORTED_MODULE_3__["SwitchesPage"]
    }
];
let SwitchesPageRoutingModule = class SwitchesPageRoutingModule {
};
SwitchesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SwitchesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/switches/switches.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/switches/switches.module.ts ***!
  \***************************************************/
/*! exports provided: SwitchesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchesPageModule", function() { return SwitchesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _switches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switches-routing.module */ "./src/app/pages/switches/switches-routing.module.ts");
/* harmony import */ var _switches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switches.page */ "./src/app/pages/switches/switches.page.ts");







let SwitchesPageModule = class SwitchesPageModule {
};
SwitchesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _switches_routing_module__WEBPACK_IMPORTED_MODULE_5__["SwitchesPageRoutingModule"]
        ],
        declarations: [_switches_page__WEBPACK_IMPORTED_MODULE_6__["SwitchesPage"]]
    })
], SwitchesPageModule);



/***/ }),

/***/ "./src/app/pages/switches/switches.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/switches/switches.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: auto;\n  min-height: 90vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .color-picker {\n  text-align: center;\n  max-width: 270px;\n  margin: auto;\n}\n:host .colorpick {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 0 auto 10px;\n}\n:host .range-bar {\n  background: #808184;\n}\n:host ion-toggle {\n  width: 76px;\n  height: 76px;\n  --border-radius: 50%;\n  --handle-background-checked: transparent url('on-icon.png') no-repeat center / contain;\n  --handle-background: transparent url('off-icon.png') no-repeat center / contain;\n  --handle-width:200px;\n  --handle-height:200px;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  --background: transparent;\n}\n:host ion-range {\n  padding: 10px 0;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #000000;\n}\n:host .range-bar {\n  background: #7a7268;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  width: 90%;\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3dpdGNoZXMvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxzd2l0Y2hlc1xcc3dpdGNoZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zd2l0Y2hlcy9zd2l0Y2hlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFrRE0sMkJBQUE7QUNoRE47QURESTtFQUNJLGtFQUFBO0FDR1I7QURETTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHVjtBRERNO0VBQ0UsYUFBQTtFQUNGLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR047QURESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDR1I7QURESTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHUjtBRERLO0VBQ0csbUJBQUE7QUNHUjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNGQUFBO0VBQ0EsK0VBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDQVI7QURJSztFQUNJLGFBQUE7QUNGVDtBREtNO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hSO0FETVE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDSlo7QURNUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDSix5QkFBQTtBQ0pSO0FETVE7RUFDSSxlQUFBO0FDSlo7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURNUTtFQUNJLGNBQUE7QUNKWjtBRE1RO0VBQ0ksY0FBQTtBQ0paO0FETVE7RUFFSSxtQkFBQTtBQ0xaO0FET1E7RUFDSSxpQ0FBQTtBQ0xaO0FET1E7RUFDSSxhQUFBO0VBQ0Esa0VBQUE7QUNMWjtBRE9RO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0xaO0FET1E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTFo7QURPUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDTFo7QURPUTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3dpdGNoZXMvc3dpdGNoZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAubG9nby1hcmVhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItcGlja2VyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY29sb3JwaWNrIHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAucmFuZ2UtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODA4MTg0O1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGlvbi10b2dnbGUge1xyXG4gICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgIGhlaWdodDogNzZweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vbi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XHJcbiAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29mZi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XHJcbiAgICAgICAgLS1oYW5kbGUtd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgLS1oYW5kbGUtaGVpZ2h0OjIwMHB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgLnRvcC1idG4ge1xyXG4gICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgIH1cclxuICAgICAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2M2OWI0O1xyXG4gICAgICAuZnJvbnQtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAubS1yZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFuZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYW5nZS1iYXIge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdhNzI2ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGFiLWJhcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI5MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG59IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICMzYzY5YjQ7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogOTB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG46aG9zdCAuY29sb3ItcGlja2VyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDI3MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCAuY29sb3JwaWNrIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG59XG46aG9zdCAucmFuZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogIzgwODE4NDtcbn1cbjpob3N0IGlvbi10b2dnbGUge1xuICB3aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA3NnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb24taWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb2ZmLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgLS1oYW5kbGUtd2lkdGg6MjAwcHg7XG4gIC0taGFuZGxlLWhlaWdodDoyMDBweDtcbn1cbjpob3N0IC50b3AtYnRuIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbjpob3N0IC5mcm9udC1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tcmFuZ2Uge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG46aG9zdCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogI2UwZGNkOTtcbn1cbjpob3N0IGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG46aG9zdCAucmFuZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogIzdhNzI2ODtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcbn1cbjpob3N0IGlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxhYmVsLWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMjkwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/switches/switches.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/switches/switches.page.ts ***!
  \*************************************************/
/*! exports provided: SwitchesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchesPage", function() { return SwitchesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jaames_iro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jaames/iro */ "./node_modules/@jaames/iro/dist/iro.es.js");



let SwitchesPage = class SwitchesPage {
    constructor() {
        this.colorcode = "";
        this.ishidden = true;
        this.ishiddenof = false;
        this.ishidden2 = true;
        this.ishiddenof2 = false;
        this.ishidden3 = true;
        this.ishiddenof3 = false;
        this.ishidden4 = true;
        this.ishiddenof4 = false;
    }
    ngOnInit() {
        let ref = this;
        var values = document.getElementById("values");
        var hexInput = document.getElementById("hexInput");
        var colorPicker = _jaames_iro__WEBPACK_IMPORTED_MODULE_2__["default"].ColorPicker("#picker", {
            width: 150,
            color: "#ffffff",
        });
        colorPicker.on(["color:init", "color:change"], function (color) {
            values.innerHTML = [
                "hex: " + color.hexString,
            ].join("<br>");
        });
    }
    switcheson() {
        this.ishidden = true;
        this.ishiddenof = false;
    }
    switchesoff() {
        this.ishiddenof = true;
        this.ishidden = false;
    }
    switcheson2() {
        this.ishidden2 = true;
        this.ishiddenof2 = false;
    }
    switchesoff2() {
        this.ishiddenof2 = true;
        this.ishidden2 = false;
    }
    switcheson3() {
        this.ishidden3 = true;
        this.ishiddenof3 = false;
    }
    switchesoff3() {
        this.ishiddenof3 = true;
        this.ishidden3 = false;
    }
    switcheson4() {
        this.ishidden4 = true;
        this.ishiddenof4 = false;
    }
    switchesoff4() {
        this.ishiddenof4 = true;
        this.ishidden4 = false;
    }
};
SwitchesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-switches",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./switches.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switches/switches.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./switches.page.scss */ "./src/app/pages/switches/switches.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SwitchesPage);



/***/ })

}]);
//# sourceMappingURL=pages-switches-switches-module-es2015.js.map