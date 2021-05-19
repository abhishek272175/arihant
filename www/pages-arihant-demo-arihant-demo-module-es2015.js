(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-arihant-demo-arihant-demo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/arihant-demo/arihant-demo.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/arihant-demo/arihant-demo.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"bg-content\">\n  <div class=\"btn-box\">\n   \n    <div class=\"center-content\">\n      <ion-buttons>\n        <a (click)=\"switcheson()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden ><img src=\"assets/img/images/on-icon.png\"></a>\n        <a (click)=\"switchesoff()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof  ><img src=\"assets/img/images/off-icon.png\"></a>\n      </ion-buttons>\n     \n      <ion-item lines=\"none\">\n        <ion-range min=\"0\" max=\"5\" step=\"1\" value=\"0\" pin snaps color=\"primary\">\n         \n          <ion-icon slot=\"start\" size=\"small\" name=\"remove-outline\"></ion-icon>\n          <ion-icon slot=\"end\"  name=\"add-outline\"></ion-icon>\n        </ion-range>\n      </ion-item>\n      \n      \n     \n  </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/arihant-demo/arihant-demo-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/arihant-demo/arihant-demo-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ArihantDemoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArihantDemoPageRoutingModule", function() { return ArihantDemoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _arihant_demo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arihant-demo.page */ "./src/app/pages/arihant-demo/arihant-demo.page.ts");




const routes = [
    {
        path: '',
        component: _arihant_demo_page__WEBPACK_IMPORTED_MODULE_3__["ArihantDemoPage"]
    }
];
let ArihantDemoPageRoutingModule = class ArihantDemoPageRoutingModule {
};
ArihantDemoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArihantDemoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/arihant-demo/arihant-demo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/arihant-demo/arihant-demo.module.ts ***!
  \***********************************************************/
/*! exports provided: ArihantDemoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArihantDemoPageModule", function() { return ArihantDemoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _arihant_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arihant-demo-routing.module */ "./src/app/pages/arihant-demo/arihant-demo-routing.module.ts");
/* harmony import */ var _arihant_demo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arihant-demo.page */ "./src/app/pages/arihant-demo/arihant-demo.page.ts");







let ArihantDemoPageModule = class ArihantDemoPageModule {
};
ArihantDemoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _arihant_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArihantDemoPageRoutingModule"]
        ],
        declarations: [_arihant_demo_page__WEBPACK_IMPORTED_MODULE_6__["ArihantDemoPage"]]
    })
], ArihantDemoPageModule);



/***/ }),

/***/ "./src/app/pages/arihant-demo/arihant-demo.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/arihant-demo/arihant-demo.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: auto;\n  min-height: 90vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .color-picker {\n  text-align: center;\n  max-width: 270px;\n}\n:host .range-bar {\n  background: #808184;\n}\n:host ion-toggle {\n  width: 76px;\n  height: 76px;\n  --border-radius: 50%;\n  --handle-background-checked: transparent url('on-icon.png') no-repeat center / contain;\n  --handle-background: transparent url('off-icon.png') no-repeat center / contain;\n  --handle-width:200px;\n  --handle-height:200px;\n}\n:host .colorpick {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  --background: transparent;\n}\n:host ion-range {\n  padding: 25px 0;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #000000;\n}\n:host .range-bar {\n  background: #7a7268;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  width: 90%;\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJpaGFudC1kZW1vL0U6XFx2aXZla19uZXdcXGFyaWhhbnRcXGFwcFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXGFyaWhhbnQtZGVtb1xcYXJpaGFudC1kZW1vLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXJpaGFudC1kZW1vL2FyaWhhbnQtZGVtby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFnRE0sMkJBQUE7QUM5Q047QURESTtFQUNJLGtFQUFBO0FDR1I7QURETTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHVjtBRERNO0VBQ0UsYUFBQTtFQUNGLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR047QURESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBRERLO0VBQ0csbUJBQUE7QUNHUjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNGQUFBO0VBQ0EsK0VBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDQVI7QURFTTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER0s7RUFDSSxhQUFBO0FDRFQ7QURJTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNGUjtBREtRO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ0haO0FES1E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0oseUJBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FES1E7RUFDSSxjQUFBO0FDSFo7QURLUTtFQUNJLGNBQUE7QUNIWjtBREtRO0VBRUksbUJBQUE7QUNKWjtBRE1RO0VBQ0ksaUNBQUE7QUNKWjtBRE1RO0VBQ0ksYUFBQTtFQUNBLGtFQUFBO0FDSlo7QURNUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKWjtBRE1RO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0paO0FETVE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0paO0FETVE7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FyaWhhbnQtZGVtby9hcmloYW50LWRlbW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAubG9nby1hcmVhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItcGlja2VyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcclxuICAgIH1cclxuICAgICAucmFuZ2UtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODA4MTg0O1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGlvbi10b2dnbGUge1xyXG4gICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgIGhlaWdodDogNzZweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vbi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XHJcbiAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29mZi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XHJcbiAgICAgICAgLS1oYW5kbGUtd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgLS1oYW5kbGUtaGVpZ2h0OjIwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb2xvcnBpY2sge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgIC50b3AtYnRuIHtcclxuICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICB9XHJcbiAgICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNjNjliNDtcclxuICAgICAgLmZyb250LWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm0tcmdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhbmdlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFuZ2UtYmFyIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3YTcyNjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRhYi1iYXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxufSIsIjpob3N0IHtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2M2OWI0O1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubG9nby1hcmVhIHtcbiAgcGFkZGluZzogNTBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuOmhvc3QgLmNvbG9yLXBpY2tlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbn1cbjpob3N0IC5yYW5nZS1iYXIge1xuICBiYWNrZ3JvdW5kOiAjODA4MTg0O1xufVxuOmhvc3QgaW9uLXRvZ2dsZSB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vbi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gIC0taGFuZGxlLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vZmYtaWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xuICAtLWhhbmRsZS13aWR0aDoyMDBweDtcbiAgLS1oYW5kbGUtaGVpZ2h0OjIwMHB4O1xufVxuOmhvc3QgLmNvbG9ycGljayB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG46aG9zdCAudG9wLWJ0biB7XG4gIGhlaWdodDogMTEwcHg7XG59XG46aG9zdCAuZnJvbnQtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5tLXJnaHQge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLXJhbmdlIHtcbiAgcGFkZGluZzogMjVweCAwO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNlMGRjZDk7XG59XG46aG9zdCBpb24taWNvbiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuOmhvc3QgLnJhbmdlLWJhciB7XG4gIGJhY2tncm91bmQ6ICM3YTcyNjg7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMGRjZDk7XG59XG46aG9zdCBpb24tdGFiLWJhciB7XG4gIGhlaWdodDogMTEwcHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sYWJlbC1jb2xvciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDI5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaW9uLWJ1dHRvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/arihant-demo/arihant-demo.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/arihant-demo/arihant-demo.page.ts ***!
  \*********************************************************/
/*! exports provided: ArihantDemoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArihantDemoPage", function() { return ArihantDemoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ArihantDemoPage = class ArihantDemoPage {
    constructor(events, authService, router) {
        this.events = events;
        this.authService = authService;
        this.router = router;
        this.ishidden = true;
        this.ishiddenof = false;
    }
    ngOnInit() {
    }
    switcheson() {
        this.ishidden = true;
        this.ishiddenof = false;
    }
    switchesoff() {
        this.ishiddenof = true;
        this.ishidden = false;
    }
};
ArihantDemoPage.ctorParameters = () => [
    { type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ArihantDemoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-arihant-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./arihant-demo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/arihant-demo/arihant-demo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./arihant-demo.page.scss */ "./src/app/pages/arihant-demo/arihant-demo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ArihantDemoPage);



/***/ })

}]);
//# sourceMappingURL=pages-arihant-demo-arihant-demo-module-es2015.js.map