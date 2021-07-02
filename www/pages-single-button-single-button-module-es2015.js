(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-single-button-single-button-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-button/single-button.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-button/single-button.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n    <div class=\"center-content\">\r\n      <ion-buttons>\r\n        Switch 1\r\n        <a\r\n          (click)=\"switcheson()\"\r\n          color=\"light2\"\r\n          class=\"front-btn\"\r\n          [hidden]=\"ishidden\"\r\n          ><img src=\"assets/img/images/on-icon.png\"\r\n        /></a>\r\n        <a\r\n          (click)=\"switchesoff()\"\r\n          color=\"light2\"\r\n          class=\"front-btn\"\r\n          [hidden]=\"ishiddenof\"\r\n          ><img src=\"assets/img/images/off-icon.png\"\r\n        /></a>\r\n      </ion-buttons>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-range\r\n          min=\"0\"\r\n          max=\"100\"\r\n          step=\"1\"\r\n          value=\"0\"\r\n          pin\r\n          snaps\r\n          color=\"primary\"\r\n        >\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"remove-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n        </ion-range>\r\n      </ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div class=\"color-picker\">\r\n              <div class=\"colorpick\" id=\"picker\"></div>\r\n              <div id=\"values\"></div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/single-button/single-button-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/single-button/single-button-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SingleButtonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleButtonPageRoutingModule", function() { return SingleButtonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _single_button_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-button.page */ "./src/app/pages/single-button/single-button.page.ts");




const routes = [
    {
        path: '',
        component: _single_button_page__WEBPACK_IMPORTED_MODULE_3__["SingleButtonPage"]
    }
];
let SingleButtonPageRoutingModule = class SingleButtonPageRoutingModule {
};
SingleButtonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleButtonPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/single-button/single-button.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/single-button/single-button.module.ts ***!
  \*************************************************************/
/*! exports provided: SingleButtonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleButtonPageModule", function() { return SingleButtonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _single_button_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-button-routing.module */ "./src/app/pages/single-button/single-button-routing.module.ts");
/* harmony import */ var _single_button_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-button.page */ "./src/app/pages/single-button/single-button.page.ts");







let SingleButtonPageModule = class SingleButtonPageModule {
};
SingleButtonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _single_button_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleButtonPageRoutingModule"]
        ],
        declarations: [_single_button_page__WEBPACK_IMPORTED_MODULE_6__["SingleButtonPage"]]
    })
], SingleButtonPageModule);



/***/ }),

/***/ "./src/app/pages/single-button/single-button.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/single-button/single-button.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: auto;\n  min-height: 90vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .color-picker {\n  text-align: center;\n  max-width: 270px;\n  margin: auto;\n}\n:host .range-bar {\n  background: #808184;\n}\n:host ion-toggle {\n  width: 76px;\n  height: 76px;\n  --border-radius: 50%;\n  --handle-background-checked: transparent\n    url('on-icon.png') no-repeat center / contain;\n  --handle-background: transparent\n    url('off-icon.png') no-repeat center / contain;\n  --handle-width: 200px;\n  --handle-height: 200px;\n}\n:host .colorpick {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  --background: transparent;\n}\n:host ion-range {\n  padding: 25px 0;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #000000;\n}\n:host .range-bar {\n  background: #7a7268;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  width: 90%;\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2luZ2xlLWJ1dHRvbi9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXHNpbmdsZS1idXR0b25cXHNpbmdsZS1idXR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaW5nbGUtYnV0dG9uL3NpbmdsZS1idXR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBaURFLDJCQUFBO0FDL0NGO0FEREU7RUFDRSxrRUFBQTtBQ0dKO0FEREU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREU7RUFDRSxtQkFBQTtBQ0dKO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0E7aURBQUE7RUFFQTtrREFBQTtFQUVBLHFCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRUo7QURDRTtFQUNFLGFBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxtQ0FBQTtVQUFBLGtDQUFBO0FDREo7QURHRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0RKO0FER0U7RUFDRSxlQUFBO0FDREo7QURHRTtFQUNFLGtCQUFBO0FDREo7QURHRTtFQUNFLGNBQUE7QUNESjtBREdFO0VBQ0UsY0FBQTtBQ0RKO0FER0U7RUFDRSxtQkFBQTtBQ0RKO0FER0U7RUFDRSxpQ0FBQTtBQ0RKO0FER0U7RUFDRSxhQUFBO0VBQ0Esa0VBQUE7QUNESjtBREdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREo7QURHRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDREo7QURHRTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2luZ2xlLWJ1dHRvbi9zaW5nbGUtYnV0dG9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuYmctY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XHJcbiAgfVxyXG4gIC5sb2dvLWFyZWEge1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuLWJveCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgLmNvbG9yLXBpY2tlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDI3MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAucmFuZ2UtYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICM4MDgxODQ7XHJcbiAgfVxyXG5cclxuICBpb24tdG9nZ2xlIHtcclxuICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50XHJcbiAgICAgIHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vbi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG4gICAgICB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb2ZmLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcclxuICAgIC0taGFuZGxlLXdpZHRoOiAyMDBweDtcclxuICAgIC0taGFuZGxlLWhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5jb2xvcnBpY2sge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRvcC1idG4ge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICB9XHJcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2M2OWI0O1xyXG4gIC5mcm9udC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAubS1yZ2h0IHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW9uLXJhbmdlIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICB9XHJcbiAgLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgLnJhbmdlLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2E3MjY4O1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xyXG4gIH1cclxuICBpb24tdGFiLWJhciB7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gIH1cclxuICAubGFiZWwtY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY2VudGVyLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogMjkwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmNlbnRlci1jb250ZW50IGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2VudGVyLWNvbnRlbnQgaW9uLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNjNjliNDtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxvZ28tYXJlYSB7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbjpob3N0IC5jb2xvci1waWNrZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMjcwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbjpob3N0IC5yYW5nZS1iYXIge1xuICBiYWNrZ3JvdW5kOiAjODA4MTg0O1xufVxuOmhvc3QgaW9uLXRvZ2dsZSB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50XG4gICAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29uLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbiAgICB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb2ZmLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgLS1oYW5kbGUtd2lkdGg6IDIwMHB4O1xuICAtLWhhbmRsZS1oZWlnaHQ6IDIwMHB4O1xufVxuOmhvc3QgLmNvbG9ycGljayB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCAudG9wLWJ0biB7XG4gIGhlaWdodDogMTEwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5tLXJnaHQge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLXJhbmdlIHtcbiAgcGFkZGluZzogMjVweCAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuOmhvc3QgLnJhbmdlLWJhciB7XG4gIGJhY2tncm91bmQ6ICM3YTcyNjg7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XG59XG46aG9zdCBpb24tdGFiLWJhciB7XG4gIGhlaWdodDogMTEwcHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sYWJlbC1jb2xvciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDI5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/single-button/single-button.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/single-button/single-button.page.ts ***!
  \***********************************************************/
/*! exports provided: SingleButtonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleButtonPage", function() { return SingleButtonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jaames_iro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jaames/iro */ "./node_modules/@jaames/iro/dist/iro.es.js");






let SingleButtonPage = class SingleButtonPage {
    constructor(events, authService, router) {
        this.events = events;
        this.authService = authService;
        this.router = router;
        this.colorcode = "";
        this.ishidden = true;
        this.ishiddenof = false;
    }
    ngOnInit() {
        let ref = this;
        var values = document.getElementById("values");
        var hexInput = document.getElementById("hexInput");
        var colorPicker = _jaames_iro__WEBPACK_IMPORTED_MODULE_5__["default"].ColorPicker("#picker", { width: 150, color: "#ffffff" });
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
    switches() {
        this.router.navigateByUrl('/switches');
    }
};
SingleButtonPage.ctorParameters = () => [
    { type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SingleButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-button.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single-button/single-button.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-button.page.scss */ "./src/app/pages/single-button/single-button.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SingleButtonPage);



/***/ })

}]);
//# sourceMappingURL=pages-single-button-single-button-module-es2015.js.map