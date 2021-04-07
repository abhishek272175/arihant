function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-ticket-create-ticket-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-ticket/create-ticket.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-ticket/create-ticket.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateTicketCreateTicketPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Create Ticket</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg-content\">\r\n\t\r\n\t<div class=\"inner-page mt-15\">\r\n\t\t<ion-button routerLink=\"/tickets\" class=\"btn-create\"  routerDirection=\"forward\" type=\"submit\" color=\"light2\" expand=\"block\">All Tickets</ion-button>\r\n\t</div>\r\n    <div class=\"content-bg\">\r\n\t\t<div class=\"header-inner\">\r\n\t\t\t<h2>Create new ticket</h2>\r\n\t\t</div>\r\n\t\t<form  #signupForm=\"ngForm\" novalidate >\r\n\t\t\t<ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\">Ticket Subject</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.subject\"  name=\"subject\" type=\"text\" #subject=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"\r\n\t\t\t\t\trequired>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\">Ticket Message</ion-label>\r\n\t\t\t\t\t<ion-textarea [(ngModel)]=\"signup.message\"  name=\"message\" type=\"text\" #message=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"\r\n\t\t\t\t\trequired ></ion-textarea>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t<ion-item class=\"light\">\r\n\t\t\t\t\t<ion-button color=\"primary\" (click)=\"takePicture()\">Upload File</ion-button>\r\n\t\t\t\t\t<img *ngIf=\"selectedImage\" [src]=\"DomSanitizer.bypassSecurityTrustUrl(selectedImage)\" style=\"height: 50px; width: 70px;\"/>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t</ion-list>\r\n\t\t\t<div class=\"btn-box\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button  (click)=\"onSignup()\" type=\"submit\" color=\"light2\" class=\"sent-btn\" expand=\"block\">Create</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button color=\"light3\" class=\"register-btn\" expand=\"block\">Cancel</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/create-ticket/create-ticket-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/create-ticket/create-ticket-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CreateTicketPageRoutingModule */

  /***/
  function srcAppPagesCreateTicketCreateTicketRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTicketPageRoutingModule", function () {
      return CreateTicketPageRoutingModule;
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


    var _create_ticket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-ticket.page */
    "./src/app/pages/create-ticket/create-ticket.page.ts");

    var routes = [{
      path: '',
      component: _create_ticket_page__WEBPACK_IMPORTED_MODULE_3__["CreateTicketPage"]
    }];

    var CreateTicketPageRoutingModule = function CreateTicketPageRoutingModule() {
      _classCallCheck(this, CreateTicketPageRoutingModule);
    };

    CreateTicketPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateTicketPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-ticket/create-ticket.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/create-ticket/create-ticket.module.ts ***!
    \*************************************************************/

  /*! exports provided: CreateTicketPageModule */

  /***/
  function srcAppPagesCreateTicketCreateTicketModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTicketPageModule", function () {
      return CreateTicketPageModule;
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


    var _create_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-ticket-routing.module */
    "./src/app/pages/create-ticket/create-ticket-routing.module.ts");
    /* harmony import */


    var _create_ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-ticket.page */
    "./src/app/pages/create-ticket/create-ticket.page.ts");

    var CreateTicketPageModule = function CreateTicketPageModule() {
      _classCallCheck(this, CreateTicketPageModule);
    };

    CreateTicketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateTicketPageRoutingModule"]],
      declarations: [_create_ticket_page__WEBPACK_IMPORTED_MODULE_6__["CreateTicketPage"]]
    })], CreateTicketPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-ticket/create-ticket.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/create-ticket/create-ticket.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateTicketCreateTicketPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-secondary: #b99044;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-page {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .bg-yellow {\n  background-color: #b99044;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .mt-30 {\n  margin-top: 30px;\n}\n:host .content-bg {\n  background-color: #303030;\n  margin: 20px;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n  width: 90%;\n  min-height: 330px;\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host ion-textarea {\n  color: #ffffff;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #b99044;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #b99044;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n:host .mt-15 {\n  margin-top: 15px;\n}\n:host .btn-create {\n  height: 48px;\n  color: #ffffff;\n  margin-bottom: 30px;\n  background-color: #b99044;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLXRpY2tldC9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXGNyZWF0ZS10aWNrZXRcXGNyZWF0ZS10aWNrZXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdGlja2V0L2NyZWF0ZS10aWNrZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBb0RJLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ2xESjtBREhJO0VBQ0ksb0JBQUE7QUNLUjtBREhNO0VBQ0UsY0FBQTtBQ0tSO0FESE07RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUNLUjtBREZJO0VBQ0UscUJBQUE7QUNJTjtBREZJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0lSO0FERk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJUjtBREZNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lSO0FERk07RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0lSO0FERkk7RUFDSSx5QkFBQTtBQ0lSO0FERkk7RUFDSSxtQkFBQTtBQ0lSO0FERkk7RUFDSSxnQkFBQTtBQ0lSO0FERkk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNJUjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FEQ007RUFDRSxjQUFBO0FDQ1I7QURDTTtFQUNFLGNBQUE7QUNDUjtBRENNO0VBQ0UsY0FBQTtBQ0NSO0FEQ007RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0NSO0FEQ007RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNDUjtBRENNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNDUjtBRENNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDQ1I7QURDSztFQUNHLGVBQUE7QUNDUjtBRENJO0VBQ0UsZ0JBQUE7QUNDTjtBRENJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtdGlja2V0L2NyZWF0ZS10aWNrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDojMzAzMDMwO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gICAgfVxyXG4gICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItcGFnZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5iZy15ZWxsb3cge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XHJcbiAgICB9XHJcbiAgICAubWItMzAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubXQtMzAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMzMHB4O1xyXG4gICAgICB9XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNiOTkwNDQ7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcclxuICAgIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgICAgfVxyXG4gICAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgICAgfVxyXG4gICAgICAuc2VudC1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNlbnQtYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWdpc3Rlci1idG4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgLnJlZ2lzdGVyLWJ0bjpob3ZlciB7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTkwNDQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAuYnRuLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgLm10LTE1IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5idG4tY3JlYXRlIHtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjYjk5MDQ0O1xuICAtLWlvbi1jb2xvci1saWdodDogIzMwMzAzMDtcbiAgLS1pb24tY29sb3ItbGlnaHQyOiAjYjk5MDQ0O1xufVxuOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHAge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmlubmVyLXBhZ2Uge1xuICBtYXJnaW46IDAgMjBweDtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLm1iLTMwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjpob3N0IC5tdC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG46aG9zdCAuY29udGVudC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiA5MCU7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xufVxuOmhvc3QgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgsIDpob3N0IC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuc2VudC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNiOTkwNDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAuc2VudC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5yZWdpc3Rlci1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTkwNDQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAucmVnaXN0ZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I5OTA0NDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYnRuLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbjpob3N0IC5tdC0xNSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG46aG9zdCAuYnRuLWNyZWF0ZSB7XG4gIGhlaWdodDogNDhweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/create-ticket/create-ticket.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/create-ticket/create-ticket.page.ts ***!
    \***********************************************************/

  /*! exports provided: CreateTicketPage */

  /***/
  function srcAppPagesCreateTicketCreateTicketPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTicketPage", function () {
      return CreateTicketPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var CreateTicketPage =
    /*#__PURE__*/
    function () {
      function CreateTicketPage(file, camera, DomSanitizer, webview, authService, navCtrl, alertService, modalCtrl, router, storage, userData) {
        _classCallCheck(this, CreateTicketPage);

        this.file = file;
        this.camera = camera;
        this.DomSanitizer = DomSanitizer;
        this.webview = webview;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.storage = storage;
        this.userData = userData;
        this.signup = {
          message: '',
          subject: '',
          documentId: '',
          status: '',
          created_by: ''
        };
        this.submitted = false;
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

      _createClass(CreateTicketPage, [{
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
        value: function ngOnInit() {}
      }, {
        key: "onSignup",
        value: function onSignup() {
          var _this2 = this;

          this.submitted = true;

          if (this.signup.message != '' && this.signup.subject != '') {
            var documentimg = this.documentimg;

            if (this.documentimg) {
              this.authService.getToken().then(function (isLoggedIn) {
                if (isLoggedIn != null) {
                  _this2.storage.get('user_id').then(function (val) {
                    _this2.utype = val;
                  });

                  var documentimgreader = new FileReader();
                  documentimgreader.readAsArrayBuffer(documentimg);

                  documentimgreader.onloadend = function () {
                    var imgBlob = new Blob([documentimgreader.result], {
                      type: documentimg.type
                    });
                    var formData = new FormData();
                    formData.append('documentId', imgBlob, documentimg.name);
                    formData.append('message', _this2.signup.message);
                    formData.append('subject', _this2.signup.subject);
                    formData.append('status', "Open");
                    formData.append('created_by', _this2.utype);

                    _this2.alertService.presentLoading();

                    _this2.authService.add_request(formData).subscribe(function (data) {
                      _this2.apiresponse = data;

                      if (_this2.apiresponse.status == true) {
                        _this2.router.navigateByUrl('/tickets');

                        _this2.alertService.presentToast(_this2.apiresponse.message);

                        _this2.alertService.removeLoading();
                      } else {
                        _this2.alertService.presentToast(_this2.apiresponse.message);

                        _this2.alertService.removeLoading();
                      }
                    }, function (error) {
                      console.log(error);

                      _this2.alertService.removeLoading();
                    }, function () {// this.dismissLogin();
                      //this.navCtrl.navigateRoot('/following-up');
                    });
                  };
                }
              });
            } else {
              this.storage.get('user_id').then(function (val) {
                _this2.utype = val;
                var formData = new FormData();
                formData.append('message', _this2.signup.message);
                formData.append('subject', _this2.signup.subject);
                formData.append('status', "Open");
                formData.append('created_by', _this2.utype);

                _this2.alertService.presentLoading();

                _this2.authService.add_request(formData).subscribe(function (data) {
                  _this2.apiresponse = data;

                  if (_this2.apiresponse.status == true) {
                    _this2.router.navigateByUrl('/tickets');

                    _this2.alertService.presentToast(_this2.apiresponse.message);

                    _this2.alertService.removeLoading();
                  } else {
                    _this2.alertService.presentToast(_this2.apiresponse.message);

                    _this2.alertService.removeLoading();
                  }
                }, function (error) {
                  console.log(error);

                  _this2.alertService.removeLoading();
                }, function () {// this.dismissLogin();
                  //this.navCtrl.navigateRoot('/following-up');
                });
              });
            }
          }
        }
      }]);

      return CreateTicketPage;
    }();

    CreateTicketPage.ctorParameters = function () {
      return [{
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
      }];
    };

    CreateTicketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-ticket',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-ticket.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-ticket/create-ticket.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-ticket.page.scss */
      "./src/app/pages/create-ticket/create-ticket.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]])], CreateTicketPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-create-ticket-create-ticket-module-es5.js.map