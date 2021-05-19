(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-ticket-create-ticket-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-ticket/create-ticket.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-ticket/create-ticket.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Create Ticket</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg-content\">\r\n\t\r\n\t<div class=\"inner-page mt-15\">\r\n\t\t<ion-button routerLink=\"/tickets\" class=\"btn-create\"  routerDirection=\"forward\" type=\"submit\" color=\"light2\" expand=\"block\">All Tickets</ion-button>\r\n\t</div>\r\n    <div class=\"content-bg\">\r\n\t\t<div class=\"header-inner\">\r\n\t\t\t<h2>Create new ticket</h2>\r\n\t\t</div>\r\n\t\t<form  #signupForm=\"ngForm\" novalidate >\r\n\t\t\t<ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\">Ticket Subject</ion-label>\r\n\t\t\t\t\t<ion-input [(ngModel)]=\"signup.subject\"  name=\"subject\" type=\"text\" #subject=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"\r\n\t\t\t\t\trequired>\r\n\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t<ion-item color=\"light\">\r\n\t\t\t\t\t<ion-label position=\"floating\">Ticket Message</ion-label>\r\n\t\t\t\t\t<ion-textarea [(ngModel)]=\"signup.message\"  name=\"message\" type=\"text\" #message=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\"\r\n\t\t\t\t\trequired ></ion-textarea>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t\t<ion-item class=\"light\">\r\n\t\t\t\t\t<ion-button color=\"primary\" (click)=\"takePicture()\">Upload File</ion-button>\r\n\t\t\t\t\t<img *ngIf=\"selectedImage\" [src]=\"DomSanitizer.bypassSecurityTrustUrl(selectedImage)\" style=\"height: 50px; width: 70px;\"/>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t</ion-list>\r\n\t\t\t<div class=\"btn-box\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button  (click)=\"onSignup()\" type=\"submit\" color=\"light2\" class=\"sent-btn\" expand=\"block\">Create</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button color=\"light3\" class=\"register-btn\" expand=\"block\">Cancel</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/create-ticket/create-ticket-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/create-ticket/create-ticket-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CreateTicketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketPageRoutingModule", function() { return CreateTicketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_ticket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-ticket.page */ "./src/app/pages/create-ticket/create-ticket.page.ts");




const routes = [
    {
        path: '',
        component: _create_ticket_page__WEBPACK_IMPORTED_MODULE_3__["CreateTicketPage"]
    }
];
let CreateTicketPageRoutingModule = class CreateTicketPageRoutingModule {
};
CreateTicketPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateTicketPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/create-ticket/create-ticket.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-ticket/create-ticket.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateTicketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketPageModule", function() { return CreateTicketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _create_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-ticket-routing.module */ "./src/app/pages/create-ticket/create-ticket-routing.module.ts");
/* harmony import */ var _create_ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-ticket.page */ "./src/app/pages/create-ticket/create-ticket.page.ts");







let CreateTicketPageModule = class CreateTicketPageModule {
};
CreateTicketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateTicketPageRoutingModule"]
        ],
        declarations: [_create_ticket_page__WEBPACK_IMPORTED_MODULE_6__["CreateTicketPage"]]
    })
], CreateTicketPageModule);



/***/ }),

/***/ "./src/app/pages/create-ticket/create-ticket.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-ticket/create-ticket.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --ion-color-secondary: #b99044;\n  --ion-color-light: #303030;\n  --ion-color-light2: #b99044;\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-page {\n  margin: 0 20px;\n  padding: 0;\n}\n:host .bg-yellow {\n  background-color: #b99044;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .mt-30 {\n  margin-top: 30px;\n}\n:host .content-bg {\n  background-color: #303030;\n  margin: 20px;\n  padding: 20px;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n  width: 90%;\n  min-height: 330px;\n}\n:host .label-stacked.sc-ion-label-md-h, :host .label-floating.sc-ion-label-md-h {\n  color: #ffffff;\n}\n:host .native-input.sc-ion-input-md {\n  color: #ffffff;\n}\n:host ion-input {\n  color: #ffffff;\n}\n:host ion-textarea {\n  color: #ffffff;\n}\n:host .sent-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #b99044;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .sent-btn:hover {\n  background: #ffffff;\n  color: #b99044;\n}\n:host .register-btn {\n  border: 1px solid #b99044;\n  height: 45px;\n  background: #ffffff;\n  color: #b99044;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 16px;\n  border: 1px solid #b99044;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n:host .register-btn:hover {\n  background: #b99044;\n  color: #ffffff;\n}\n:host .btn-box {\n  padding: 20px 0;\n}\n:host .mt-15 {\n  margin-top: 15px;\n}\n:host .btn-create {\n  height: 48px;\n  color: #ffffff;\n  margin-bottom: 30px;\n  background-color: #b99044;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLXRpY2tldC9FOlxcdml2ZWtfbmV3XFxhcmloYW50XFxhcHBcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxjcmVhdGUtdGlja2V0XFxjcmVhdGUtdGlja2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlLXRpY2tldC9jcmVhdGUtdGlja2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQW9ESSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNsREo7QURISTtFQUNJLG9CQUFBO0FDS1I7QURITTtFQUNFLGNBQUE7QUNLUjtBREhNO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FDS1I7QURGSTtFQUNFLHFCQUFBO0FDSU47QURGSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNJUjtBREZNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSVI7QURGTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJUjtBREZNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNJUjtBREZJO0VBQ0kseUJBQUE7QUNJUjtBREZJO0VBQ0ksbUJBQUE7QUNJUjtBREZJO0VBQ0ksZ0JBQUE7QUNJUjtBREZJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDSVI7QURDSTtFQUNJLGNBQUE7QUNDUjtBRENNO0VBQ0UsY0FBQTtBQ0NSO0FEQ007RUFDRSxjQUFBO0FDQ1I7QURDTTtFQUNFLGNBQUE7QUNDUjtBRENNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNDUjtBRENNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDQ1I7QURDTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDQ1I7QURDTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0NSO0FEQ0s7RUFDRyxlQUFBO0FDQ1I7QURDSTtFQUNFLGdCQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLXRpY2tldC9jcmVhdGUtdGlja2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5iZy1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgIH1cclxuICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIGgyIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgcCB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLXBhZ2Uge1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYmcteWVsbG93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgfVxyXG4gICAgLm1iLTMwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLm10LTMwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMzBweDtcclxuICAgICAgfVxyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjYjk5MDQ0O1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQ6ICMzMDMwMzA7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodDI6ICNiOTkwNDQ7XHJcbiAgICAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCwgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLnNlbnQtYnRuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zZW50LWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAucmVnaXN0ZXItYnRuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWdpc3Rlci1idG46aG92ZXIgeyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIH1cclxuICAgIC5tdC0xNSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNyZWF0ZSB7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI2I5OTA0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMzMDMwMzA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0MjogI2I5OTA0NDtcbn1cbjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XG59XG46aG9zdCBpb24tdGl0bGUge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBwIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5pbm5lci1wYWdlIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCAuYmcteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5tYi0zMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG46aG9zdCAubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogOTAlO1xuICBtaW4taGVpZ2h0OiAzMzBweDtcbn1cbjpob3N0IC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oLCA6aG9zdCAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCBpb24taW5wdXQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IGlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLnNlbnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjYjk5MDQ0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLnNlbnQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAucmVnaXN0ZXItYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5OTA0NDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjk5MDQ0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLnJlZ2lzdGVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiOTkwNDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJ0bi1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG46aG9zdCAubXQtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuOmhvc3QgLmJ0bi1jcmVhdGUge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/create-ticket/create-ticket.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-ticket/create-ticket.page.ts ***!
  \***********************************************************/
/*! exports provided: CreateTicketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketPage", function() { return CreateTicketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");












let CreateTicketPage = class CreateTicketPage {
    constructor(file, camera, DomSanitizer, webview, authService, navCtrl, alertService, modalCtrl, router, storage, userData) {
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
        this.signup = { message: '', subject: '', documentId: '', status: '', created_by: '' };
        this.submitted = false;
        this.optionss = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true,
            targetWidth: 800,
            targetHeight: 800,
        };
    }
    takePicture() {
        this.camera.getPicture(this.optionss).then((imageData) => {
            this.selectedImage = this.webview.convertFileSrc(imageData);
            ;
            this.file.resolveLocalFilesystemUrl(imageData).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    //this.readFile(file);
                    this.documentimg = file;
                });
            });
        }, (err) => {
            // Handle error
        });
    }
    ngOnInit() {
    }
    onSignup() {
        this.submitted = true;
        if (this.signup.message != '' && this.signup.subject != '') {
            let documentimg = this.documentimg;
            if (this.documentimg) {
                this.authService.getToken().then(isLoggedIn => {
                    if (isLoggedIn != null) {
                        this.storage.get('user_id').then((val) => {
                            this.utype = val;
                        });
                        const documentimgreader = new FileReader();
                        documentimgreader.readAsArrayBuffer(documentimg);
                        documentimgreader.onloadend = () => {
                            const imgBlob = new Blob([documentimgreader.result], {
                                type: documentimg.type
                            });
                            const formData = new FormData();
                            formData.append('documentId', imgBlob, documentimg.name);
                            formData.append('message', this.signup.message);
                            formData.append('subject', this.signup.subject);
                            formData.append('status', "Open");
                            formData.append('created_by', this.utype);
                            this.alertService.presentLoading();
                            this.authService.add_request(formData).subscribe(data => {
                                this.apiresponse = data;
                                if (this.apiresponse.status == true) {
                                    this.router.navigateByUrl('/tickets');
                                    this.alertService.presentToast(this.apiresponse.message);
                                    this.alertService.removeLoading();
                                }
                                else {
                                    this.alertService.presentToast(this.apiresponse.message);
                                    this.alertService.removeLoading();
                                }
                            }, error => {
                                console.log(error);
                                this.alertService.removeLoading();
                            }, () => {
                                // this.dismissLogin();
                                //this.navCtrl.navigateRoot('/following-up');
                            });
                        };
                    }
                });
            }
            else {
                this.storage.get('user_id').then((val) => {
                    this.utype = val;
                    const formData = new FormData();
                    formData.append('message', this.signup.message);
                    formData.append('subject', this.signup.subject);
                    formData.append('status', "Open");
                    formData.append('created_by', this.utype);
                    this.alertService.presentLoading();
                    this.authService.add_request(formData).subscribe(data => {
                        this.apiresponse = data;
                        if (this.apiresponse.status == true) {
                            this.router.navigateByUrl('/tickets');
                            this.alertService.presentToast(this.apiresponse.message);
                            this.alertService.removeLoading();
                        }
                        else {
                            this.alertService.presentToast(this.apiresponse.message);
                            this.alertService.removeLoading();
                        }
                    }, error => {
                        console.log(error);
                        this.alertService.removeLoading();
                    }, () => {
                        // this.dismissLogin();
                        //this.navCtrl.navigateRoot('/following-up');
                    });
                });
            }
        }
    }
};
CreateTicketPage.ctorParameters = () => [
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"] }
];
CreateTicketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-ticket',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-ticket.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-ticket/create-ticket.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-ticket.page.scss */ "./src/app/pages/create-ticket/create-ticket.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]])
], CreateTicketPage);



/***/ })

}]);
//# sourceMappingURL=pages-create-ticket-create-ticket-module-es2015.js.map