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


    __webpack_exports__["default"] = ":host {\n  --ion-color-light: #ffffff;\n  --ion-color-secondary: #b99044;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-ticket {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .inner-ticket h2 {\n  font-size: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .msg-box {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .bg-grey {\n  background-color: #f8f8f8;\n}\n:host .info {\n  padding: 3px 10px;\n  color: #ffffff;\n  text-align: left;\n}\n:host .info h2 {\n  font-size: 14px;\n  color: #000000;\n  font-weight: 600;\n  margin: 0 0 5px 0;\n}\n:host .info p {\n  font-size: 12px;\n  font-weight: 500;\n  color: #000000;\n  margin: 0 0 5px 0;\n}\n:host .info-icon {\n  padding: 3px 10px;\n  color: #000000;\n  text-align: left;\n  font-size: 31px;\n}\n:host .p-0 {\n  padding: 0 !important;\n}\n:host .ptb-0 {\n  padding: 0 10px 10px 10px !important;\n}\n:host .edit {\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: right;\n}\n:host .info-content {\n  padding: 10px;\n  color: #000000;\n  font-weight: 500;\n  font-size: 12px;\n  text-align: left;\n}\n:host .brdr-row {\n  border-left: 1px solid #dddddd;\n  border-right: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n}\n:host .border-top {\n  border-top: 1px solid #dddddd;\n}\n:host .info-edit {\n  padding: 10px;\n  color: #303030;\n  text-transform: uppercase;\n  font-size: 9px;\n  text-align: right;\n}\n:host .info-content-center {\n  padding: 10px;\n  color: #000000;\n  font-size: 12px;\n  text-align: left;\n  font-weight: 400;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .table-inner {\n  margin: 30px auto;\n  padding: 0;\n  border: 1px solid #dddddd;\n}\n:host .mt-15 {\n  margin-top: 15px;\n}\n:host .reply {\n  margin: 10px 20px;\n  padding: 0;\n}\n:host .reply-header {\n  margin: 0;\n  padding: 10px;\n}\n:host .reply-header h2 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #000000;\n  margin-top: 0;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #b99044;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #b99044;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n:host .content-bg {\n  background-color: #303030;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host .native-textarea.sc-ion-textarea-md {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy10aWNrZXQvRTpcXHZpdmVrX25ld1xcYXJpaGFudFxcYXBwXFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcdmlldy10aWNrZXRcXHZpZXctdGlja2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlldy10aWNrZXQvdmlldy10aWNrZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBOEhJLDBCQUFBO0VBcURFLDhCQUFBO0VBQ0YsMEJBQUE7RUFDQSwyQkFBQTtBQ2hMSjtBREpJO0VBQ0ksb0JBQUE7QUNNUjtBREpNO0VBQ0UsY0FBQTtBQ01SO0FESk07RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUNNUjtBREhNO0VBQ0UscUJBQUE7QUNLUjtBREhNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNLUjtBREhNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tSO0FESE07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDS1I7QURITTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDS1Y7QURITTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNLVjtBREhNO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUNLVjtBREhNO0VBQ0UseUJBQUE7QUNLUjtBREhNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLUjtBREhJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS1I7QURISTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tSO0FESEk7RUFDSSxpQkFBQTtFQUNKLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLSjtBREhJO0VBQ0kscUJBQUE7QUNLUjtBREhJO0VBQ0ksb0NBQUE7QUNLUjtBREhJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0tSO0FESEk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDS1I7QURGSTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0lSO0FERkk7RUFDSSw2QkFBQTtBQ0lSO0FERkk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSVI7QURESTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHUjtBRERJO0VBQ0ksbUJBQUE7QUNHUjtBRERJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNHUjtBRERJO0VBQ0UsZ0JBQUE7QUNHTjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDRVI7QURBSTtFQUNJLFNBQUE7RUFDQSxhQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDRVI7QURBTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQU07RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0VSO0FEQU07RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNFUjtBREFLO0VBQ0csZUFBQTtBQ0VSO0FEQUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtBQ0VSO0FER0k7RUFDSSxjQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtBQ0RSO0FER007RUFDRSxjQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWV3LXRpY2tldC92aWV3LXRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgXHJcbiAgICAgIC5iZy1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgcCB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLXRpY2tldCB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLXRpY2tldCBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICAubXNnLWJveCB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmJnLWdyZXkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgIH1cclxuICAgICAgLmluZm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuaW5mbyBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICB9XHJcbiAgICAuaW5mbyBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgIH1cclxuICAgIC5pbmZvLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAzMXB4O1xyXG4gICAgfVxyXG4gICAgLnAtMCB7XHJcbiAgICAgICAgcGFkZGluZzowICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnB0Yi0wIHtcclxuICAgICAgICBwYWRkaW5nOjAgMTBweCAxMHB4IDEwcHggICAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxuICAgIC5lZGl0IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmluZm8tY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmJyZHItcm93IHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5ib3JkZXItdG9wIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5pbmZvLWVkaXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5pbmZvLWNvbnRlbnQtY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAubWItMzAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaW5uZXIge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5tdC0xNSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAtLWlvbi1jb2xvci1saWdodDogI2ZmZmZmZjtcclxuICAgIC5yZXBseSB7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnJlcGx5LWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucmVwbHktaGVhZGVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnNlbnQtYnRuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zZW50LWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAucmVnaXN0ZXItYnRuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWdpc3Rlci1idG46aG92ZXIgeyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWJnIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjYjk5MDQ0O1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQ6ICMzMDMwMzA7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodDI6ICNiOTkwNDQ7XHJcbiAgICAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtbWQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgIH1cclxuICAgIH0iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNiOTkwNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMzAzMDMwO1xuICAtLWlvbi1jb2xvci1saWdodDI6ICNiOTkwNDQ7XG59XG46aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMzAzMDMwO1xufVxuOmhvc3QgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBwIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5pbm5lci10aWNrZXQge1xuICBtYXJnaW46IDAgMjBweDtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5pbm5lci10aWNrZXQgaDIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLm1zZy1ib3gge1xuICBtYXJnaW46IDAgMjBweDtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cbjpob3N0IC5pbmZvIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgLmluZm8gaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cbjpob3N0IC5pbmZvIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cbjpob3N0IC5pbmZvLWljb24ge1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMzFweDtcbn1cbjpob3N0IC5wLTAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG46aG9zdCAucHRiLTAge1xuICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCAuZWRpdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QgLmluZm8tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCAuYnJkci1yb3cge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuOmhvc3QgLmJvcmRlci10b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcbn1cbjpob3N0IC5pbmZvLWVkaXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QgLmluZm8tY29udGVudC1jZW50ZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLm1iLTMwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjpob3N0IC50YWJsZS1pbm5lciB7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuOmhvc3QgLm10LTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbjpob3N0IC5yZXBseSB7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLnJlcGx5LWhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbjpob3N0IC5yZXBseS1oZWFkZXIgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLnNlbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLnNlbnQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAucmVnaXN0ZXItYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLnJlZ2lzdGVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiOTkwNDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG46aG9zdCAuY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuOmhvc3QgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIDpob3N0IC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtbWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */";
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