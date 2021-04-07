(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"inner-content\">\r\n\r\n\r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/avatar.jpg\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n          <p style=\"font-weight: 600; text-transform: capitalize;\">{{this.username}}</p>\r\n          <p>{{this.email}}</p>\r\n          <p>Joined {{this.created_at | date: 'dd/MM/yyyy'}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"card-package\" *ngIf=\"(this.expdate >= this.curr_date)\">\r\n     \r\n      <h3><span class=\"pd-5\">\r\n          <ion-icon name=\"card-outline\"></ion-icon>\r\n        </span>Package Expire on <span>({{this.expdate | date }})</span></h3>\r\n     \r\n    </div>\r\n\r\n    <div class=\"card-package\" *ngIf=\"(this.expdate < this.curr_date)\">\r\n      <h3><span class=\"pd-5\">\r\n        <ion-icon name=\"card-outline\"></ion-icon>\r\n      </span>You do not have any active package, please click below to start subscription.<br>\r\n        <ion-button (click)=\"pkg()\" type=\"submit\" shape=\"round\" size=\"small\" class=\"click-btn\">Buy Package\r\n        </ion-button>\r\n      </h3>\r\n    </div>\r\n\r\n    <div class=\"table-inner\" *ngFor=\"let item of packagedetails; index as i\">\r\n      <ion-row class=\"brdr-row border-top\">\r\n        <ion-col size=\"4\" class=\"bg-yellow\">\r\n          <div class=\"info\">\r\n            #\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"p-0\">\r\n          <div class=\"info-content-center\">\r\n            {{i+1}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"brdr-row\">\r\n        <ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n          <div class=\"info-content\">\r\n            Package Name\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"p-0\">\r\n          <div class=\"info-content-center\">\r\n            {{item.package_name}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"brdr-row\">\r\n        <ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n          <div class=\"info-content\">\r\n            Start Date\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"p-0\">\r\n          <div class=\"info-content-center\">\r\n            {{item.start_date | date }}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"brdr-row\">\r\n        <ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n          <div class=\"info-content\">\r\n            End Date\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"p-0\">\r\n          <div class=\"info-content-center\">\r\n            {{item.end_date | date }}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"brdr-row\">\r\n        <ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n          <div class=\"info-content\">\r\n            Amount(Rs)\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"p-0\">\r\n          <div class=\"info-content-center\">\r\n             {{item.totalAmount}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .inner-content {\n  padding: 20px;\n}\n:host .inner-card {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n  margin: 10px;\n}\n:host .inner-card h3 {\n  font-size: 18px;\n  font-weight: 400;\n  margin-bottom: 5px;\n}\n:host .inner-card p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .card-package {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n  margin: 10px;\n}\n:host .card-package h3 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0;\n  color: #303030;\n}\n:host .card-package h3 span {\n  color: #b99044;\n}\n:host .pd-5 {\n  padding-right: 5px;\n}\n:host .bg-yellow {\n  background-color: #b99044;\n}\n:host .info {\n  padding: 3px 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: left;\n}\n:host .p-0 {\n  padding: 0;\n}\n:host .edit {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: right;\n}\n:host .info-content {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: left;\n}\n:host .brdr-row {\n  border-left: 1px solid #dddddd;\n  border-right: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n}\n:host .border-top {\n  border-top: 1px solid #dddddd;\n}\n:host .info-edit {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: right;\n}\n:host .info-content-center {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: left;\n  border-left: 1px solid #b99044;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .table-inner {\n  margin: 10px;\n  padding: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n}\n:host .click-btn {\n  --background:#b99044;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO0FDQVI7QURFTTtFQUNFLGNBQUE7QUNBUjtBREVNO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FDQVI7QURFSTtFQUNJLHFCQUFBO0FDQVI7QURFTTtFQUNJLGFBQUE7QUNBVjtBREVNO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER007RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RWO0FER007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNEUjtBREdNO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER007RUFDSSxjQUFBO0FDRFY7QURHTTtFQUNJLGtCQUFBO0FDRFY7QURHTTtFQUNFLHlCQUFBO0FDRFI7QURHSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRFI7QURHSTtFQUNJLFVBQUE7QUNEUjtBREdJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RSO0FER0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRFI7QURJSTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0ZSO0FESUk7RUFDSSw2QkFBQTtBQ0ZSO0FESUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ0hSO0FES0k7RUFDSSxtQkFBQTtBQ0hSO0FES0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FDSFI7QURLSTtFQUNJLG9CQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuaW5uZXItY2FyZCBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1jYXJkIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLXBhY2thZ2Uge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwwLDAsLjA4KTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDsgXHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtcGFja2FnZSBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLXBhY2thZ2UgaDMgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjojYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5wZC01IHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuYmcteWVsbG93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgfVxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAucC0wIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfSBcclxuICAgIC5lZGl0IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmluZm8tY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuYnJkci1yb3cge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci10b3Age1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLmluZm8tZWRpdCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmluZm8tY29udGVudC1jZW50ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgIH1cclxuICAgIC5tYi0zMCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgfVxyXG4gICAgLmNsaWNrLWJ0biB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNiOTkwNDQ7XHJcbiAgICAgIH1cclxuXHJcbn0iLCI6aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMzAzMDMwO1xufVxuOmhvc3QgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG46aG9zdCAuaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCAuaW5uZXItY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbjpob3N0IC5pbm5lci1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG46aG9zdCAuaW5uZXItY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuY2FyZC1wYWNrYWdlIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuOmhvc3QgLmNhcmQtcGFja2FnZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzMwMzAzMDtcbn1cbjpob3N0IC5jYXJkLXBhY2thZ2UgaDMgc3BhbiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnBkLTUge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG46aG9zdCAuYmcteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5pbmZvIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCAucC0wIHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5lZGl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAuaW5mby1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgLmJyZHItcm93IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cbjpob3N0IC5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG46aG9zdCAuaW5mby1lZGl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0IC5pbmZvLWNvbnRlbnQtY2VudGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiOTkwNDQ7XG59XG46aG9zdCAubWItMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuOmhvc3QgLnRhYmxlLWlubmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuOmhvc3QgLmNsaWNrLWJ0biB7XG4gIC0tYmFja2dyb3VuZDojYjk5MDQ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let DashboardPage = class DashboardPage {
    constructor(storage, authService, alertService, router) {
        this.storage = storage;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.authService.getToken().then(isLoggedIn => {
            if (isLoggedIn != null) {
                this.storage.get('username').then((username) => {
                    this.username = username;
                });
                this.storage.get('email').then((email) => {
                    this.email = email;
                });
                this.storage.get('created_at').then((created_at) => {
                    this.created_at = created_at;
                });
                this.storage.get('user_id').then((val) => {
                    this.user_id = val;
                    this.alertService.presentLoading();
                    this.authService.dashboard(this.user_id).subscribe(data => {
                        this.apiresponse = data;
                        this.expdate = this.apiresponse.enddate;
                        this.curr_date = this.apiresponse.curr_date;
                        this.packagedetails = this.apiresponse.packagedetails;
                        this.alertService.removeLoading();
                    }, error => {
                        console.log(error);
                        this.alertService.removeLoading();
                    }, () => {
                        // this.dismissLogin();
                        //this.navCtrl.navigateRoot('/following-up');
                    });
                });
            }
        });
    }
    pkg() {
        this.router.navigateByUrl('/package');
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map