function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-ticket-view-ticket-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-ticket/view-ticket.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-ticket/view-ticket.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesViewTicketViewTicketPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Tickets</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div *ngFor=\"let itemvie of ticket_view\">\r\n    <div class=\"header-inner\">\r\n      <h2>Ticket Details</h2>\r\n    </div>\r\n    <div class=\"inner-ticket\">\r\n      <h2>Ticket No : {{itemvie.ticketnum}}</h2>\r\n      <h2>Status: {{itemvie.status}}</h2>\r\n      <h2>Created at: {{itemvie.created_at | date}}</h2>\r\n    </div>\r\n    <div class=\"msg-box\">\r\n      <div class=\"table-inner\">\r\n        <ion-row class=\"brdr-row border-top\">\r\n          <ion-col size=\"2\" class=\"bg-grey\">\r\n            <div class=\"info-icon\">\r\n              <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"10\" class=\"bg-grey\">\r\n            <div class=\"info\">\r\n\r\n              <h2>{{itemvie.first_name}} {{itemvie.last_name}}</h2>\r\n              <p>{{itemvie.roles}}</p>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content\">\r\n              {{itemvie.subject}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content-center\">\r\n              {{itemvie.message}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"(itemvie.ticket_document !='' || itemvie.ticket_document == null )\">\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content\">\r\n              Attachment\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"(itemvie.ticket_document !='' || itemvie.ticket_document == null )\">\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content-center ptb-0\">\r\n              <a href=\"https://uat.thepocketlaw.com/uploads/ {{itemvie.ticket_document}}\" routerDirection=\"forward\"\r\n                data-amount=\"699\" data-id=\"2\" target=\"_blank\">View Attachment</a>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"msg-box\" *ngFor=\"let item of ticket_reply\">\r\n      <div class=\"table-inner\">\r\n        <ion-row class=\"brdr-row border-top\">\r\n          <ion-col size=\"2\" class=\"bg-grey\">\r\n            <div class=\"info-icon\">\r\n              <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"10\" class=\"bg-grey\">\r\n            <div class=\"info\">\r\n              <h2>{{item.first_name}} {{item.last_name}}</h2>\r\n              <p>{{item.roles}}</p>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content\">\r\n              {{item.subject}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content-center\">\r\n              {{item.message}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"(item.ticket_document !='' || item.ticket_document == null )\">\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content\">\r\n              Attachment\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"(item.ticket_document !='' || item.ticket_document == null)\">\r\n          <ion-col size=\"12\" class=\"p-0\">\r\n            <div class=\"info-content-center ptb-0\">\r\n              <a href=\"https://uat.thepocketlaw.com/uploads/{{item.ticket_document}}\" routerDirection=\"forward\"\r\n                data-amount=\"699\" data-id=\"2\" target=\"_blank\">View Attachment</a>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"reply\"  *ngIf=\"(itemvie.status == 'Open')\" >\r\n      <div class=\"reply-header\">\r\n        <h2>Reply Query</h2>\r\n      </div>\r\n\r\n      <form #signupForm=\"ngForm\" novalidate>\r\n        <div class=\"content-bg\">\r\n\r\n          <ion-input [hidden]=\"repview == false\" [(ngModel)]=\"signup.ticketnum\" value=\"{{itemvie.ticketnum}}\"\r\n            name=\"ticketnum\" type=\"text\" #ticketnum=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"></ion-input>\r\n\r\n          <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding bg-grey\">\r\n            <ion-item color=\"light\">\r\n              <ion-label position=\"floating\">Ticket Message</ion-label>\r\n              <ion-textarea [(ngModel)]=\"signup.message\" name=\"message\" type=\"text\" #message=\"ngModel\"\r\n                spellcheck=\"false\" autocapitalize=\"off\" required></ion-textarea>\r\n            </ion-item>\r\n            <ion-item color=\"light\">\r\n              <ion-button color=\"primary\" (click)=\"takePicture()\">Upload File</ion-button>\r\n              <img *ngIf=\"selectedImage\" [src]=\"DomSanitizer.bypassSecurityTrustUrl(selectedImage)\"\r\n                style=\"height: 50px; width: 70px;\" />\r\n            </ion-item>\r\n          </ion-list>\r\n          <div class=\"btn-box\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button (click)=\"onSignup()\" type=\"submit\" color=\"light2\" class=\"sent-btn\" expand=\"block\">Submit\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-button color=\"light3\" class=\"register-btn\" expand=\"block\">Cancel</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/view-ticket/view-ticket-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/view-ticket/view-ticket-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ViewTicketPageRoutingModule */

  /***/
  function srcAppPagesViewTicketViewTicketRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewTicketPageRoutingModule", function () {
      return ViewTicketPageRoutingModule;
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


    var _view_ticket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-ticket.page */
    "./src/app/pages/view-ticket/view-ticket.page.ts");

    var routes = [{
      path: '',
      component: _view_ticket_page__WEBPACK_IMPORTED_MODULE_3__["ViewTicketPage"]
    }];

    var ViewTicketPageRoutingModule = function ViewTicketPageRoutingModule() {
      _classCallCheck(this, ViewTicketPageRoutingModule);
    };

    ViewTicketPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewTicketPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/view-ticket/view-ticket.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/view-ticket/view-ticket.module.ts ***!
    \*********************************************************/

  /*! exports provided: ViewTicketPageModule */

  /***/
  function srcAppPagesViewTicketViewTicketModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewTicketPageModule", function () {
      return ViewTicketPageModule;
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


    var _view_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-ticket-routing.module */
    "./src/app/pages/view-ticket/view-ticket-routing.module.ts");
    /* harmony import */


    var _view_ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-ticket.page */
    "./src/app/pages/view-ticket/view-ticket.page.ts");

    var ViewTicketPageModule = function ViewTicketPageModule() {
      _classCallCheck(this, ViewTicketPageModule);
    };

    ViewTicketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewTicketPageRoutingModule"]],
      declarations: [_view_ticket_page__WEBPACK_IMPORTED_MODULE_6__["ViewTicketPage"]]
    })], ViewTicketPageModule);
    /***/
  },

  /***/
  "./src/app/pages/view-ticket/view-ticket.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/view-ticket/view-ticket.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesViewTicketViewTicketPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light: #ffffff;\n  --ion-color-secondary: #b99044;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-ticket {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .inner-ticket h2 {\n  font-size: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .msg-box {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .bg-grey {\n  background-color: #f8f8f8;\n}\n:host .info {\n  padding: 3px 10px;\n  color: #ffffff;\n  text-align: left;\n}\n:host .info h2 {\n  font-size: 14px;\n  color: #000000;\n  font-weight: 600;\n  margin: 0 0 5px 0;\n}\n:host .info p {\n  font-size: 12px;\n  font-weight: 500;\n  color: #000000;\n  margin: 0 0 5px 0;\n}\n:host .info-icon {\n  padding: 3px 10px;\n  color: #000000;\n  text-align: left;\n  font-size: 31px;\n}\n:host .p-0 {\n  padding: 0 !important;\n}\n:host .ptb-0 {\n  padding: 0 10px 10px 10px !important;\n}\n:host .edit {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: right;\n}\n:host .info-content {\n  padding: 10px;\n  color: #000000;\n  font-weight: 500;\n  font-size: 12px;\n  text-align: left;\n}\n:host .brdr-row {\n  border-left: 1px solid #dddddd;\n  border-right: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n}\n:host .border-top {\n  border-top: 1px solid #dddddd;\n}\n:host .info-edit {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: right;\n}\n:host .info-content-center {\n  padding: 10px;\n  color: #000000;\n  font-size: 12px;\n  text-align: left;\n  font-weight: 400;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .table-inner {\n  margin: 30px auto;\n  padding: 0;\n  border: 1px solid #dddddd;\n}\n:host .mt-15 {\n  margin-top: 15px;\n}\n:host .reply {\n  margin: 10px 20px;\n  padding: 0;\n}\n:host .reply-header {\n  margin: 0;\n  padding: 10px;\n}\n:host .reply-header h2 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n  margin-top: 0;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #b99044;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #b99044;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n:host .content-bg {\n  background-color: #303030;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host .native-textarea.sc-ion-textarea-md {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy10aWNrZXQvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFx2aWV3LXRpY2tldFxcdmlldy10aWNrZXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWV3LXRpY2tldC92aWV3LXRpY2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUE4SEksMEJBQUE7RUFxREUsOEJBQUE7RUFDRiwwQkFBQTtFQUNBLDJCQUFBO0FDaExKO0FESkk7RUFDSSxvQkFBQTtBQ01SO0FESk07RUFDRSxjQUFBO0FDTVI7QURKTTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBQ01SO0FESE07RUFDRSxxQkFBQTtBQ0tSO0FESE07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0tSO0FESE07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDS1I7QURITTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLUjtBREhNO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUNLVjtBREhNO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0tWO0FESE07RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0tWO0FESE07RUFDRSx5QkFBQTtBQ0tSO0FESE07RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tSO0FESEk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNLUjtBREhJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS1I7QURISTtFQUNJLGlCQUFBO0VBQ0osY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0tKO0FESEk7RUFDSSxxQkFBQTtBQ0tSO0FESEk7RUFDSSxvQ0FBQTtBQ0tSO0FESEk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDS1I7QURISTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLUjtBREZJO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDSVI7QURGSTtFQUNJLDZCQUFBO0FDSVI7QURGSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNJUjtBRERJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dSO0FEREk7RUFDSSxtQkFBQTtBQ0dSO0FEREk7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0dSO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEQUk7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNFUjtBREFJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNFUjtBREFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNFUjtBREFNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDRVI7QURBTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDRVI7QURBTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUs7RUFDRyxlQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0FDRVI7QURHSTtFQUNJLGNBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtBQ0RSO0FER007RUFDRSxjQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctdGlja2V0L3ZpZXctdGlja2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICBcclxuICAgICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItdGlja2V0IHtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItdGlja2V0IGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5tc2ctYm94IHtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgICAuYmctZ3JleSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgICAgfVxyXG4gICAgICAuaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5pbmZvIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgIH1cclxuICAgIC5pbmZvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgfVxyXG4gICAgLmluZm8taWNvbiB7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDMxcHg7XHJcbiAgICB9XHJcbiAgICAucC0wIHtcclxuICAgICAgICBwYWRkaW5nOjAgICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucHRiLTAge1xyXG4gICAgICAgIHBhZGRpbmc6MCAxMHB4IDEwcHggMTBweCAgICFpbXBvcnRhbnQ7XHJcbiAgICB9IFxyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuaW5mby1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuYnJkci1yb3cge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci10b3Age1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLmluZm8tZWRpdCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmluZm8tY29udGVudC1jZW50ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5tYi0zMCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC50YWJsZS1pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLm10LTE1IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xyXG4gICAgLnJlcGx5IHtcclxuICAgICAgICBtYXJnaW46MTBweCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucmVwbHktaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5yZXBseS1oZWFkZXIgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuc2VudC1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNlbnQtYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWdpc3Rlci1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgLnJlZ2lzdGVyLWJ0bjpob3ZlciB7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAuYnRuLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgfVxyXG4gICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNiOTkwNDQ7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcclxuICAgIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgICAgfVxyXG4gICAgICAubmF0aXZlLXRleHRhcmVhLnNjLWlvbi10ZXh0YXJlYS1tZCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgfVxyXG4gICAgfSIsIjpob3N0IHtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI2I5OTA0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMzMDMwMzA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcbn1cbjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XG59XG46aG9zdCBpb24tdGl0bGUge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHAge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmlubmVyLXRpY2tldCB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmlubmVyLXRpY2tldCBoMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAubXNnLWJveCB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuOmhvc3QgLmluZm8ge1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCAuaW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuOmhvc3QgLmluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuOmhvc3QgLmluZm8taWNvbiB7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAzMXB4O1xufVxuOmhvc3QgLnAtMCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbjpob3N0IC5wdGItMCB7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IC5lZGl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAuaW5mby1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IC5icmRyLXJvdyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG46aG9zdCAuYm9yZGVyLXRvcCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuOmhvc3QgLmluZm8tZWRpdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDlweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAuaW5mby1jb250ZW50LWNlbnRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAubWItMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuOmhvc3QgLnRhYmxlLWlubmVyIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG46aG9zdCAubXQtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuOmhvc3QgLnJlcGx5IHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCAucmVwbHktaGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgLnJlcGx5LWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuc2VudC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNiOTkwNDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAuc2VudC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5yZWdpc3Rlci1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAucmVnaXN0ZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I5OTA0NDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbjpob3N0IC5jb250ZW50LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG46aG9zdCAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgOmhvc3QgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAubmF0aXZlLXRleHRhcmVhLnNjLWlvbi10ZXh0YXJlYS1tZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/view-ticket/view-ticket.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/view-ticket/view-ticket.page.ts ***!
    \*******************************************************/

  /*! exports provided: ViewTicketPage */

  /***/
  function srcAppPagesViewTicketViewTicketPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewTicketPage", function () {
      return ViewTicketPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ViewTicketPage =
    /*#__PURE__*/
    function () {
      function ViewTicketPage(storage, activatedRoute, file, camera, DomSanitizer, webview, authService, navCtrl, alertService, modalCtrl, router) {
        _classCallCheck(this, ViewTicketPage);

        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.file = file;
        this.camera = camera;
        this.DomSanitizer = DomSanitizer;
        this.webview = webview;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.signup = {
          message: '',
          ticket_document: '',
          ticketnum: ''
        };
        this.myId = null;
        this.submitted = false;
        this.repview = false;
        this.optionss = {
          quality: 80,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.CAMERA,
          correctOrientation: true,
          targetWidth: 800,
          targetHeight: 800
        };
      }

      _createClass(ViewTicketPage, [{
        key: "takePicture",
        value: function takePicture() {
          var _this = this;

          this.camera.getPicture(this.optionss).then(function (imageData) {
            _this.selectedImage = _this.webview.convertFileSrc(imageData);
            ;

            _this.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
              entry.file(function (file) {
                console.log(file); //this.readFile(file);

                _this.documentimg = file;
              });
            });
          }, function (err) {// Handle error
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
          this.authService.ticket_view(this.myId).subscribe(function (data) {
            _this2.apiresponse = data;
            _this2.ticket_view = _this2.apiresponse.ticket_view;
            _this2.ticket_reply = _this2.apiresponse.ticket_reply;

            _this2.alertService.removeLoading();
          }, function (error) {
            console.log(error);

            _this2.alertService.removeLoading();
          }, function () {// this.dismissLogin();
            //this.navCtrl.navigateRoot('/following-up');
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup() {
          var _this3 = this;

          this.submitted = true;
          this.myId = this.activatedRoute.snapshot.paramMap.get('myid'); //alert(this.myId);

          if (this.signup.message != '') {
            //	debugger;
            var documentimg = this.documentimg;

            if (this.documentimg) {
              this.storage.get('user_id').then(function (user_id) {
                _this3.user_id = user_id;
                var documentimgreader = new FileReader();
                documentimgreader.readAsArrayBuffer(documentimg);

                documentimgreader.onloadend = function () {
                  var imgBlob = new Blob([documentimgreader.result], {
                    type: documentimg.type
                  });
                  var formData = new FormData();
                  formData.append('ticket_document', imgBlob, documentimg.name);
                  formData.append('message', _this3.signup.message);
                  formData.append('ticketnum', _this3.signup.ticketnum);
                  formData.append('ticket_id', _this3.myId);
                  formData.append('created_by', _this3.user_id);

                  _this3.alertService.presentLoading();

                  _this3.authService.ticket_reply(formData).subscribe(function (data) {
                    _this3.apiresponse = data;

                    if (_this3.apiresponse.status == true) {
                      _this3.router.navigateByUrl('/tickets');

                      _this3.alertService.presentToast(_this3.apiresponse.message);

                      _this3.alertService.removeLoading();
                    } else {
                      _this3.alertService.presentToast(_this3.apiresponse.message);

                      _this3.alertService.removeLoading();
                    }
                  }, function (error) {
                    console.log(error);

                    _this3.alertService.removeLoading();
                  }, function () {// this.dismissLogin();
                    //this.navCtrl.navigateRoot('/following-up');
                  });
                };
              });
            } else {
              var formData = new FormData();
              this.storage.get('user_id').then(function (user_id) {
                _this3.user_id = user_id;
                formData.append('message', _this3.signup.message);
                formData.append('ticketnum', _this3.signup.ticketnum);
                formData.append('ticket_id', _this3.myId);
                formData.append('created_by', _this3.user_id);

                _this3.alertService.presentLoading();

                _this3.authService.ticket_reply(formData).subscribe(function (data) {
                  _this3.apiresponse = data;

                  if (_this3.apiresponse.status == true) {
                    _this3.router.navigateByUrl('/tickets');

                    _this3.alertService.presentToast(_this3.apiresponse.message);

                    _this3.alertService.removeLoading();
                  } else {
                    _this3.alertService.presentToast(_this3.apiresponse.message);

                    _this3.alertService.removeLoading();
                  }
                }, function (error) {
                  console.log(error);

                  _this3.alertService.removeLoading();
                }, function () {// this.dismissLogin();
                  //this.navCtrl.navigateRoot('/following-up');
                });
              });
            }
          }
        }
      }]);

      return ViewTicketPage;
    }();

    ViewTicketPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ViewTicketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-ticket',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-ticket.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-ticket/view-ticket.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-ticket.page.scss */
      "./src/app/pages/view-ticket/view-ticket.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ViewTicketPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-view-ticket-view-ticket-module-es5.js.map