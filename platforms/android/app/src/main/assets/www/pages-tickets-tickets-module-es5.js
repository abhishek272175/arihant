function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tickets-tickets-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tickets/tickets.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tickets/tickets.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTicketsTicketsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Tickets</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n\t<div class=\"header-inner\">\r\n\t\t<h2>Ticket Management</h2>\r\n\t\t<p>Pocket Law is the leading Second Opinion provider with a reputation of providing best piece of opinion.\r\n\t\t\tCreate Your Ticket</p>\r\n\t</div>\r\n\r\n\t<div class=\"inner-page\">\r\n\t\t<ion-button *ngIf=\"(this.expdate >= this.curr_date)\" routerLink=\"/create-ticket\" class=\"btn-create\"\r\n\t\t\trouterDirection=\"forward\" type=\"submit\" color=\"light2\" expand=\"block\">Create Ticket</ion-button>\r\n\r\n\r\n\t\t<div class=\"card-package\" *ngIf=\"(this.expdate < this.curr_date)\">\r\n\t\t\t<h3><span class=\"pd-5\">\r\n\t\t\t\t\t<ion-icon name=\"card-outline\"></ion-icon>\r\n\t\t\t\t</span>You do not have any active package, please click below to start subscription.\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\r\n\t\t<br>\r\n\r\n\t\t<ion-button *ngIf=\"(this.expdate < this.curr_date)\" (click)=\"pkg()\" class=\"btn-create\" routerDirection=\"forward\"\r\n\t\t\ttype=\"submit\" color=\"light2\" expand=\"block\">Buy Package</ion-button>\r\n\r\n\t\t<div class=\"card-package\" *ngIf=\"(this.expdate >= this.curr_date)\">\r\n\t\t\t<br>\r\n\t\t\t<h3><span class=\"pd-5\">\r\n\t\t\t\t\t<ion-icon name=\"card-outline\"></ion-icon>\r\n\t\t\t\t</span>Package Expire on <span>({{this.expdate | date }})</span></h3>\r\n\t\t\t<br>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"table-inner\" *ngFor=\"let item of userinfo; index as i\">\r\n\t\t\t<ion-row class=\"brdr-row border-top\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"bg-yellow\">\r\n\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t#\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{i+1}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tTicket Id\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.ticketnum}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tTicket Subject\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.subject}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tTicket Message\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.message}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tStatus\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\t\t\t\t\t\t{{item.status}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tCreated At\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\r\n\t\t\t\t\t\t{{item.created_at | date: 'dd/MM/yyyy' }} - {{item.created_at | date: 'shortTime' }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"brdr-row\">\r\n\t\t\t\t<ion-col size=\"4\" class=\"p-0 bg-yellow\">\r\n\t\t\t\t\t<div class=\"info-content\">\r\n\t\t\t\t\t\tActions\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"8\" class=\"p-0\">\r\n\t\t\t\t\t<div class=\"info-content-center\">\r\n\r\n\t\t\t\t\t\t<ion-button shape=\"round\" class=\"query-btn\" [routerLink]=\"['/view-ticket/', item.id]\"\r\n\t\t\t\t\t\t\trouterDirection=\"forward\">View</ion-button>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/tickets/tickets-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/tickets/tickets-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: TicketsPageRoutingModule */

  /***/
  function srcAppPagesTicketsTicketsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsPageRoutingModule", function () {
      return TicketsPageRoutingModule;
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


    var _tickets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tickets.page */
    "./src/app/pages/tickets/tickets.page.ts");

    var routes = [{
      path: '',
      component: _tickets_page__WEBPACK_IMPORTED_MODULE_3__["TicketsPage"]
    }];

    var TicketsPageRoutingModule = function TicketsPageRoutingModule() {
      _classCallCheck(this, TicketsPageRoutingModule);
    };

    TicketsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TicketsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tickets/tickets.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/tickets/tickets.module.ts ***!
    \*************************************************/

  /*! exports provided: TicketsPageModule */

  /***/
  function srcAppPagesTicketsTicketsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function () {
      return TicketsPageModule;
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


    var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tickets-routing.module */
    "./src/app/pages/tickets/tickets-routing.module.ts");
    /* harmony import */


    var _tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tickets.page */
    "./src/app/pages/tickets/tickets.page.ts");

    var TicketsPageModule = function TicketsPageModule() {
      _classCallCheck(this, TicketsPageModule);
    };

    TicketsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tickets_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketsPageRoutingModule"]],
      declarations: [_tickets_page__WEBPACK_IMPORTED_MODULE_6__["TicketsPage"]]
    })], TicketsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tickets/tickets.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/tickets/tickets.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTicketsTicketsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light: #b99044;\n  --ion-color-light2: #b99044;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-page {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .bg-yellow {\n  background-color: #b99044;\n}\n:host .info {\n  padding: 3px 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: left;\n}\n:host .p-0 {\n  padding: 0;\n}\n:host .edit {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: right;\n}\n:host .info-content {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: left;\n}\n:host .brdr-row {\n  border-left: 1px solid #dddddd;\n  border-right: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n}\n:host .border-top {\n  border-top: 1px solid #dddddd;\n}\n:host .info-edit {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: right;\n}\n:host .info-content-center {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: left;\n  border-left: 1px solid #b99044;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .table-inner {\n  margin: 30px auto;\n  padding: 0;\n}\n:host .mt-15 {\n  margin-top: 15px;\n}\n:host .btn-create {\n  height: 48px;\n  color: #ffffff;\n  margin-bottom: 30px;\n  background-color: #b99044;\n}\n:host .query-btn {\n  --background: #303030;\n}\n:host .card-package {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 5px 10px;\n  margin: 5px 0;\n}\n:host .card-package h3 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0;\n  color: #303030;\n}\n:host .card-package h3 span {\n  color: #b99044;\n}\n:host .pd-5 {\n  padding-right: 5px;\n}\n:host .click-btn {\n  --background:#b99044;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlja2V0cy9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXHRpY2tldHNcXHRpY2tldHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90aWNrZXRzL3RpY2tldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBaUdJLDBCQUFBO0VBQ0EsMkJBQUE7QUMvRko7QURGSTtFQUNJLG9CQUFBO0FDSVI7QURGTTtFQUNFLGNBQUE7QUNJUjtBREZNO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FDSVI7QURETTtFQUNFLHFCQUFBO0FDR1I7QURETTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDR1I7QURETTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBRERNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dSO0FERE07RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0dSO0FEREk7RUFDSSx5QkFBQTtBQ0dSO0FEREk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dSO0FEREk7RUFDSSxVQUFBO0FDR1I7QURESTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHUjtBRERJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dSO0FEQUk7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNFUjtBREFJO0VBQ0ksNkJBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNDUjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDQ1I7QURDSTtFQUNFLGdCQUFBO0FDQ047QURJSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0ZOO0FESUk7RUFDRSxxQkFBQTtBQ0ZOO0FESUk7RUFDRSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0YsYUFBQTtBQ0ZKO0FESUM7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FESUE7RUFDVSxjQUFBO0FDRlY7QURJTTtFQUNJLGtCQUFBO0FDRlY7QURJTTtFQUNFLG9CQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aWNrZXRzL3RpY2tldHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDojMzAzMDMwO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIGgyIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1wYWdlIHtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmJnLXllbGxvdyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcclxuICAgIH1cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnAtMCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH0gXHJcbiAgICAuZWRpdCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5pbmZvLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmJyZHItcm93IHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5ib3JkZXItdG9wIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5pbmZvLWVkaXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5pbmZvLWNvbnRlbnQtY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICB9XHJcbiAgICAubWItMzAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaW5uZXIge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAubXQtMTUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAtLWlvbi1jb2xvci1saWdodDogI2I5OTA0NDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcclxuICAgIC5idG4tY3JlYXRlIHtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcclxuICAgIH1cclxuICAgIC5xdWVyeS1idG4ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMzMDMwMzA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1wYWNrYWdlIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuIC5jYXJkLXBhY2thZ2UgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMzAzMDMwO1xyXG59XHJcbi5jYXJkLXBhY2thZ2UgaDMgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjojYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5wZC01IHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuY2xpY2stYnRuIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDogI2I5OTA0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjYjk5MDQ0O1xufVxuOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGgyIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgcCB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAuaW5uZXItcGFnZSB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuaW5mbyB7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgLnAtMCB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCAuZWRpdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QgLmluZm8tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDlweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IC5icmRyLXJvdyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG46aG9zdCAuYm9yZGVyLXRvcCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuOmhvc3QgLmluZm8tZWRpdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDlweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAuaW5mby1jb250ZW50LWNlbnRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDlweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjk5MDQ0O1xufVxuOmhvc3QgLm1iLTMwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjpob3N0IC50YWJsZS1pbm5lciB7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLm10LTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbjpob3N0IC5idG4tY3JlYXRlIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5xdWVyeS1idG4ge1xuICAtLWJhY2tncm91bmQ6ICMzMDMwMzA7XG59XG46aG9zdCAuY2FyZC1wYWNrYWdlIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG46aG9zdCAuY2FyZC1wYWNrYWdlIGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzAzMDMwO1xufVxuOmhvc3QgLmNhcmQtcGFja2FnZSBoMyBzcGFuIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAucGQtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbjpob3N0IC5jbGljay1idG4ge1xuICAtLWJhY2tncm91bmQ6I2I5OTA0NDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tickets/tickets.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/tickets/tickets.page.ts ***!
    \***********************************************/

  /*! exports provided: TicketsPage */

  /***/
  function srcAppPagesTicketsTicketsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsPage", function () {
      return TicketsPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/events */
    "./src/app/services/events.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TicketsPage =
    /*#__PURE__*/
    function () {
      function TicketsPage(storage, authService, alertService, events, router) {
        _classCallCheck(this, TicketsPage);

        this.storage = storage;
        this.authService = authService;
        this.alertService = alertService;
        this.events = events;
        this.router = router;
      }

      _createClass(TicketsPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.authService.getToken().then(function (isLoggedIn) {
            _this.events.publish('toggleMenu', {});

            _this.storage.get('user_id').then(function (val) {
              _this.user_id = val;

              _this.authService.dashboard(_this.user_id).subscribe(function (data) {
                _this.apiresponse = data;
                _this.expdate = _this.apiresponse.enddate;
                _this.curr_date = _this.apiresponse.curr_date;

                _this.alertService.removeLoading();
              }, function (error) {
                console.log(error);

                _this.alertService.removeLoading();
              }, function () {// this.dismissLogin();
                //this.navCtrl.navigateRoot('/following-up');
              });
            });

            if (isLoggedIn != null) {
              _this.storage.get('user_id').then(function (val) {
                _this.user_id = val;

                _this.events.publish('toggleMenu', {});

                _this.alertService.presentLoading();

                _this.authService.ticket_list(_this.user_id).subscribe(function (result) {
                  _this.userinfo = result;

                  _this.alertService.removeLoading();
                });
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.events.publish('toggleMenu', {});
        }
      }, {
        key: "pkg",
        value: function pkg() {
          this.router.navigateByUrl('/package');
        }
      }]);

      return TicketsPage;
    }();

    TicketsPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _services_events__WEBPACK_IMPORTED_MODULE_5__["Events"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    TicketsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tickets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tickets.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tickets/tickets.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tickets.page.scss */
      "./src/app/pages/tickets/tickets.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _services_events__WEBPACK_IMPORTED_MODULE_5__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], TicketsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tickets-tickets-module-es5.js.map