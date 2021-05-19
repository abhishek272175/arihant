(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tickets-tickets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tickets/tickets.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tickets/tickets.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Tickets</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n\t<div class=\"header-inner\">\r\n\t\t<h2>Ticket Management</h2>\r\n\t\t<p>Pocket Law is the leading Second Opinion provider with a reputation of providing best piece of opinion.\r\n\t\t\tCreate Your Ticket</p>\r\n\t</div>\r\n\r\n\t<div class=\"inner-page\">\r\n\t\t<ion-button *ngIf=\"(this.expdate >= this.curr_date)\" routerLink=\"/create-ticket\" class=\"btn-create\"\r\n\t\t\trouterDirection=\"forward\" type=\"submit\" color=\"light2\" expand=\"block\">Create Ticket</ion-button>\r\n\r\n\r\n\t\t<div class=\"card-package\" *ngIf=\"(this.expdate < this.curr_date)\">\r\n\t\t\t<h3><span class=\"pd-5\">\r\n\t\t\t\t\t<ion-icon name=\"card-outline\"></ion-icon>\r\n\t\t\t\t</span>You do not have any active package, please click below to start subscription.\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\r\n\t\t<br>\r\n\r\n\t\t<ion-button *ngIf=\"(this.expdate < this.curr_date)\" (click)=\"pkg()\" class=\"btn-create\" routerDirection=\"forward\"\r\n\t\t\ttype=\"submit\" color=\"light2\" expand=\"block\">Buy Package</ion-button>\r\n\r\n\t\t<div class=\"card-package\" *ngIf=\"(this.expdate >= this.curr_date)\">\r\n\t\t\t<br>\r\n\t\t\t<h3><span class=\"pd-5\">\r\n\t\t\t\t\t<ion-icon name=\"card-outline\"></ion-icon>\r\n\t\t\t\t</span>Package Expire on <span>({{this.expdate | date }})</span></h3>\r\n\t\t\t<br>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"table-inner\" *ngFor=\"let item of userinfo; index as i\">\r\n\t\t\t<ion-row class=\"brdr-row border-top\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"bg-yellow\">\r\n\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t#\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{i+1}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tTicket Id\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.ticketnum}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tTicket Subject\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.subject}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tTicket Message\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.message}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tStatus\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.status}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tCreated At\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\r\n\t\t\t\t\t\t{{item.created_at | date: 'dd/MM/yyyy' }} - {{item.created_at | date: 'shortTime' }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tActions\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\r\n\t\t\t\t\t\t<ion-button shape=\"round\" class=\"query-btn\" [routerLink]=\"['/view-ticket/', item.id]\"\r\n\t\t\t\t\t\t\trouterDirection=\"forward\">View</ion-button>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tickets/tickets-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tickets/tickets-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TicketsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageRoutingModule", function() { return TicketsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tickets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets.page */ "./src/app/pages/tickets/tickets.page.ts");




const routes = [
    {
        path: '',
        component: _tickets_page__WEBPACK_IMPORTED_MODULE_3__["TicketsPage"]
    }
];
let TicketsPageRoutingModule = class TicketsPageRoutingModule {
};
TicketsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TicketsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tickets/tickets.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tickets/tickets.module.ts ***!
  \*************************************************/
/*! exports provided: TicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function() { return TicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tickets-routing.module */ "./src/app/pages/tickets/tickets-routing.module.ts");
/* harmony import */ var _tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tickets.page */ "./src/app/pages/tickets/tickets.page.ts");







let TicketsPageModule = class TicketsPageModule {
};
TicketsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketsPageRoutingModule"]
        ],
        declarations: [_tickets_page__WEBPACK_IMPORTED_MODULE_6__["TicketsPage"]]
    })
], TicketsPageModule);



/***/ }),

/***/ "./src/app/pages/tickets/tickets.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/tickets/tickets.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-light: #b99044;\n  --ion-color-light2: #b99044;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-page {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .bg-yellow {\n  background-color: #b99044;\n}\n:host .info {\n  padding: 3px 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: left;\n}\n:host .p-0 {\n  padding: 0;\n}\n:host .edit {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: right;\n}\n:host .info-content {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: left;\n}\n:host .brdr-row {\n  border-left: 1px solid #dddddd;\n  border-right: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n}\n:host .border-top {\n  border-top: 1px solid #dddddd;\n}\n:host .info-edit {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: right;\n}\n:host .info-content-center {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: left;\n  border-left: 1px solid #b99044;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .table-inner {\n  margin: 30px auto;\n  padding: 0;\n}\n:host .mt-15 {\n  margin-top: 15px;\n}\n:host .btn-create {\n  height: 48px;\n  color: #ffffff;\n  margin-bottom: 30px;\n  background-color: #b99044;\n}\n:host .query-btn {\n  --background: #303030;\n}\n:host .card-package {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 5px 10px;\n  margin: 5px 0;\n}\n:host .card-package h3 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0;\n  color: #303030;\n}\n:host .card-package h3 span {\n  color: #b99044;\n}\n:host .pd-5 {\n  padding-right: 5px;\n}\n:host .click-btn {\n  --background:#b99044;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlja2V0cy9FOlxcdml2ZWtfbmV3XFxhcmloYW50XFxhcHBcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFx0aWNrZXRzXFx0aWNrZXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlja2V0cy90aWNrZXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQWlHSSwwQkFBQTtFQUNBLDJCQUFBO0FDL0ZKO0FERkk7RUFDSSxvQkFBQTtBQ0lSO0FERk07RUFDRSxjQUFBO0FDSVI7QURGTTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBQ0lSO0FERE07RUFDRSxxQkFBQTtBQ0dSO0FERE07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0dSO0FERE07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR1I7QURETTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBRERNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNHUjtBRERJO0VBQ0kseUJBQUE7QUNHUjtBRERJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBRERJO0VBQ0ksVUFBQTtBQ0dSO0FEREk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR1I7QURESTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBREFJO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDRVI7QURBSTtFQUNJLDZCQUFBO0FDRVI7QURBSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNFUjtBRENJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDQ1I7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDSTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0NSO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FESUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNGTjtBRElJO0VBQ0UscUJBQUE7QUNGTjtBRElJO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtFQUNGLGFBQUE7QUNGSjtBRElDO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNGSjtBRElBO0VBQ1UsY0FBQTtBQ0ZWO0FESU07RUFDSSxrQkFBQTtBQ0ZWO0FESU07RUFDRSxvQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGlja2V0cy90aWNrZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICBcclxuICAgICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItcGFnZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5iZy15ZWxsb3cge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5wLTAge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9IFxyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuaW5mby1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5icmRyLXJvdyB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLXRvcCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB9XHJcbiAgICAuaW5mby1lZGl0IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW5mby1jb250ZW50LWNlbnRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgfVxyXG4gICAgLm1iLTMwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWlubmVyIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm10LTE1IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLS1pb24tY29sb3ItbGlnaHQ6ICNiOTkwNDQ7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodDI6ICNiOTkwNDQ7XHJcbiAgICAuYnRuLWNyZWF0ZSB7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XHJcbiAgICB9XHJcbiAgICAucXVlcnktYnRuIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtcGFja2FnZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbiAuY2FyZC1wYWNrYWdlIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzMwMzAzMDtcclxufVxyXG4uY2FyZC1wYWNrYWdlIGgzIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6I2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAucGQtNSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNsaWNrLWJ0biB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfSIsIjpob3N0IHtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNiOTkwNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcbn1cbjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XG59XG46aG9zdCBpb24tdGl0bGUge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHAge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmlubmVyLXBhZ2Uge1xuICBtYXJnaW46IDAgMjBweDtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLmluZm8ge1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IC5wLTAge1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmVkaXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0IC5pbmZvLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCAuYnJkci1yb3cge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuOmhvc3QgLmJvcmRlci10b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcbn1cbjpob3N0IC5pbmZvLWVkaXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QgLmluZm8tY29udGVudC1jZW50ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2I5OTA0NDtcbn1cbjpob3N0IC5tYi0zMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG46aG9zdCAudGFibGUtaW5uZXIge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5tdC0xNSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG46aG9zdCAuYnRuLWNyZWF0ZSB7XG4gIGhlaWdodDogNDhweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAucXVlcnktYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xufVxuOmhvc3QgLmNhcmQtcGFja2FnZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDVweCAwO1xufVxuOmhvc3QgLmNhcmQtcGFja2FnZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzMwMzAzMDtcbn1cbjpob3N0IC5jYXJkLXBhY2thZ2UgaDMgc3BhbiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnBkLTUge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG46aG9zdCAuY2xpY2stYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiNiOTkwNDQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tickets/tickets.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tickets/tickets.page.ts ***!
  \***********************************************/
/*! exports provided: TicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPage", function() { return TicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events */ "./src/app/services/events.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let TicketsPage = class TicketsPage {
    constructor(storage, authService, alertService, events, router) {
        this.storage = storage;
        this.authService = authService;
        this.alertService = alertService;
        this.events = events;
        this.router = router;
    }
    ionViewWillEnter() {
        this.authService.getToken().then(isLoggedIn => {
            this.events.publish('toggleMenu', {});
            this.storage.get('user_id').then((val) => {
                this.user_id = val;
                this.authService.dashboard(this.user_id).subscribe(data => {
                    this.apiresponse = data;
                    this.expdate = this.apiresponse.enddate;
                    this.curr_date = this.apiresponse.curr_date;
                    this.alertService.removeLoading();
                }, error => {
                    console.log(error);
                    this.alertService.removeLoading();
                }, () => {
                    // this.dismissLogin();
                    //this.navCtrl.navigateRoot('/following-up');
                });
            });
            if (isLoggedIn != null) {
                this.storage.get('user_id').then((val) => {
                    this.user_id = val;
                    this.events.publish('toggleMenu', {});
                    this.alertService.presentLoading();
                    this.authService.ticket_list(this.user_id).subscribe((result) => {
                        this.userinfo = result;
                        this.alertService.removeLoading();
                    });
                });
            }
        });
    }
    ngOnInit() {
        this.events.publish('toggleMenu', {});
    }
    pkg() {
        this.router.navigateByUrl('/package');
    }
};
TicketsPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _services_events__WEBPACK_IMPORTED_MODULE_5__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TicketsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tickets.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tickets/tickets.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tickets.page.scss */ "./src/app/pages/tickets/tickets.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _services_events__WEBPACK_IMPORTED_MODULE_5__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], TicketsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tickets-tickets-module-es2015.js.map