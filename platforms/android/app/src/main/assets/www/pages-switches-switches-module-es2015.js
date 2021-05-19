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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: auto;\n  min-height: 90vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .color-picker {\n  text-align: center;\n  max-width: 270px;\n  margin: auto;\n}\n:host .colorpick {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 0 auto 10px;\n}\n:host .range-bar {\n  background: #808184;\n}\n:host ion-toggle {\n  width: 76px;\n  height: 76px;\n  --border-radius: 50%;\n  --handle-background-checked: transparent url('on-icon.png') no-repeat center / contain;\n  --handle-background: transparent url('off-icon.png') no-repeat center / contain;\n  --handle-width:200px;\n  --handle-height:200px;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  --background: transparent;\n}\n:host ion-range {\n  padding: 10px 0;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #000000;\n}\n:host .range-bar {\n  background: #7a7268;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  width: 90%;\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3dpdGNoZXMvRTpcXHZpdmVrX25ld1xcYXJpaGFudFxcYXBwXFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcc3dpdGNoZXNcXHN3aXRjaGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3dpdGNoZXMvc3dpdGNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBa0RNLDJCQUFBO0FDaEROO0FEREk7RUFDSSxrRUFBQTtBQ0dSO0FERE07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1Y7QURETTtFQUNFLGFBQUE7RUFDRixvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEREk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0dSO0FEREk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR1I7QURESztFQUNHLG1CQUFBO0FDR1I7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzRkFBQTtFQUNBLCtFQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0FSO0FESUs7RUFDSSxhQUFBO0FDRlQ7QURLTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNIUjtBRE1RO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ0paO0FETVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0oseUJBQUE7QUNKUjtBRE1RO0VBQ0ksZUFBQTtBQ0paO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FETVE7RUFDSSxjQUFBO0FDSlo7QURNUTtFQUNJLGNBQUE7QUNKWjtBRE1RO0VBRUksbUJBQUE7QUNMWjtBRE9RO0VBQ0ksaUNBQUE7QUNMWjtBRE9RO0VBQ0ksYUFBQTtFQUNBLGtFQUFBO0FDTFo7QURPUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNMWjtBRE9RO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0xaO0FET1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0xaO0FET1E7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N3aXRjaGVzL3N3aXRjaGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5iZy1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28tYXJlYSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLXBpY2tlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbG9ycGljayB7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgLnJhbmdlLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzgwODE4NDtcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICBpb24tdG9nZ2xlIHtcclxuICAgICAgICB3aWR0aDogNzZweDtcclxuICAgICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb24taWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xyXG4gICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vZmYtaWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xyXG4gICAgICAgIC0taGFuZGxlLXdpZHRoOjIwMHB4O1xyXG4gICAgICAgIC0taGFuZGxlLWhlaWdodDoyMDBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgIC50b3AtYnRuIHtcclxuICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICB9XHJcbiAgICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNjNjliNDtcclxuICAgICAgLmZyb250LWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm0tcmdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhbmdlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFuZ2UtYmFyIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3YTcyNjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRhYi1iYXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxufSIsIjpob3N0IHtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2M2OWI0O1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubG9nby1hcmVhIHtcbiAgcGFkZGluZzogNTBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuOmhvc3QgLmNvbG9yLXBpY2tlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuOmhvc3QgLmNvbG9ycGljayB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xufVxuOmhvc3QgLnJhbmdlLWJhciB7XG4gIGJhY2tncm91bmQ6ICM4MDgxODQ7XG59XG46aG9zdCBpb24tdG9nZ2xlIHtcbiAgd2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNzZweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29uLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29mZi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gIC0taGFuZGxlLXdpZHRoOjIwMHB4O1xuICAtLWhhbmRsZS1oZWlnaHQ6MjAwcHg7XG59XG46aG9zdCAudG9wLWJ0biB7XG4gIGhlaWdodDogMTEwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5tLXJnaHQge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLXJhbmdlIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuOmhvc3QgLnJhbmdlLWJhciB7XG4gIGJhY2tncm91bmQ6ICM3YTcyNjg7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XG59XG46aG9zdCBpb24tdGFiLWJhciB7XG4gIGhlaWdodDogMTEwcHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sYWJlbC1jb2xvciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDI5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

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
        var colorPicker = _jaames_iro__WEBPACK_IMPORTED_MODULE_2__["default"].ColorPicker("#picker", { width: 150, color: "#ffffff" });
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
        selector: 'app-switches',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./switches.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switches/switches.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./switches.page.scss */ "./src/app/pages/switches/switches.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SwitchesPage);



/***/ })

}]);
//# sourceMappingURL=pages-switches-switches-module-es2015.js.map