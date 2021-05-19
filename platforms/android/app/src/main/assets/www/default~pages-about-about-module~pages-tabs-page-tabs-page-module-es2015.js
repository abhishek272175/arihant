(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-about-module~pages-tabs-page-tabs-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>About us</ion-title>\r\n      <!--<ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"presentPopover($event)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>-->\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n\r\n  <div class=\"about-info\">\r\n    <div class=\"about-header\">\r\n      <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\r\n      <img src=\"assets/img/images/companyprofile.png\" alt=\"Ionic logo\">\r\n    </div>\r\n    <h2 class=\"ion-padding-start header m-0\">Company Profile</h2>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end\">\r\n      Compliances keep the World systematic, balanced & under control, but consume precious time and energy, which leave\r\n      people helpless.<br><br>\r\n\r\n\r\n      To keep with compliances, anyone may follow their own opinion or may have already consulted with others, but still\r\n      need mature assistance or consultancy from an experienced professional, who may be available at their requirement\r\n      time or not and may able to provide us the second opinion as a result of their consultancy or not.<br><br>\r\n\r\n\r\n      Also, the Digital World, demands the availability of professionals anywhere at any time to get second\r\n      opinion.<br><br>\r\n\r\n\r\n      To get all these requirements as a single solution, we need a platform which offers consultancy on digital\r\n      platform.<br><br>\r\n\r\n\r\n      So, here we WELCOME YOU at POCKET LAW CONSULTANCY PRIVATE LIMITED!<br><br>\r\n\r\n\r\n      We, a Start Up, provide you a platform that allows you to take second opinion in the field of Goods & Services Tax\r\n      Laws, Income Tax Laws & Customs Laws from anywhere at any time for minimizing your confusion and tension.<br><br>\r\n\r\n\r\n      Our services are beneficial for traders stuck in confusion, professionals with less time to explore laws, students\r\n      with curiosity, common man with little knowledge.<br><br>\r\n\r\n\r\n      If the second opinion provider agrees with the first, you can move forward with more confidence, or may make up\r\n      your mind to go with another solution.\r\n    </p>\r\n\r\n    <h2 class=\"ion-padding-top ion-padding-start header text-center\">Why Us</h2>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end text-center\">\r\n      Till now there is no such platform which provides service in the field of consultancy through interaction between\r\n      books and technology. The fear factors of Tax and Customs laws are making people vulnerable to costly procedures.\r\n      This is why we dedicatedly focused on offering valuable and fortune saving second opinion for income tax laws,\r\n      goods and services tax laws or customs law and Companies law situations.<br><br>\r\n\r\n\r\n      Pocket Law Consultancy Pvt. Ltd. is giving you an interactive online platform that makes it faster and easier to\r\n      give you second opinion for your query, with the help of our second opinion you have the right to question your\r\n      CA/Advocate advise and be sure with your decision before you proceed further.<br><br>\r\n\r\n\r\n      Pocket Law Consultancy Pvt. Ltd. has a clear objective to spread the awareness of right laws and help people to\r\n      make their Tax paying experience remarkable by having the right law based services of high quality, cost-effective\r\n      and on-demand for everyone's need for Taxation.\r\n    </p>\r\n    <h2 class=\"ion-padding-top ion-padding-start header text-center\">Mission</h2>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end text-center\">\r\n      To be the leading Second Opinion provider with a reputation of providing best piece of opinion. By making laws\r\n      understandable, keep you and your trade free from any penal procedures.\r\n    </p>\r\n    <h2 class=\"ion-padding-top ion-padding-start header text-center\">Vision</h2>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end text-center\">\r\n      To be the face who brings the laws into your pocket through our second opinion via connecting our expert knowledge\r\n      with the latest technology.\r\n    </p>\r\n  </div>\r\n  <br>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/about-popover/about-popover.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PopoverPage = class PopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    support() {
        // this.app.getRootNavs()[0].push('/support');
        this.popoverCtrl.dismiss();
    }
    close(url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <ion-list>
      <ion-item button (click)="close('https://ionicframework.com/getting-started')">
        <ion-label>Learn Ionic</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://ionicframework.com/docs/')">
        <ion-label>Documentation</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://showcase.ionicframework.com')">
        <ion-label>Showcase</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/ionic-team/ionic')">
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], PopoverPage);



/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");




const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");








let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]
        ],
        declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]],
    })
], AboutModule);



/***/ }),

/***/ "./src/app/pages/about/about.scss":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  /*\n   * iOS Only\n   */\n}\n:host ion-toolbar {\n  --background: #303030;\n  --color: white;\n}\n:host ion-toolbar ion-button,\n:host ion-toolbar ion-back-button,\n:host ion-toolbar ion-menu-button {\n  --color: white;\n}\n:host .about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n:host .about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n:host .about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n:host .about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n:host .about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n:host .about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n:host .about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n:host .about-info h3 {\n  margin-top: 0;\n}\n:host .about-info h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .about-info ion-list {\n  padding-top: 0;\n}\n:host .about-info p {\n  line-height: 130%;\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ion-color-dark);\n}\n:host .text-center {\n  text-align: center;\n}\n:host .about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n:host .ios .about-info {\n  --ion-padding: 19px;\n}\n:host .ios .about-info h3 {\n  font-weight: 700;\n}\n:host .header {\n  color: #b99044;\n}\n:host ion-title {\n  color: #b99044;\n  text-align: left;\n}\n:host .m-0 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvRTpcXHZpdmVrX25ld1xcYXJpaGFudFxcYXBwXFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcYWJvdXRcXGFib3V0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFtRkE7O0lBQUE7QUMvRUE7QURIQTtFQUVFLHFCQUFBO0VBQ0EsY0FBQTtBQ0lGO0FEREE7OztFQUdFLGNBQUE7QUNHRjtBREFBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxVQUFBO0VBRUEsNkNBQUE7RUFBQSxxQ0FBQTtBQ0pGO0FET0E7RUFDRSxvREFBQTtBQ0xGO0FET0E7RUFDRSxtREFBQTtBQ0xGO0FET0E7RUFDRSxvREFBQTtBQ0xGO0FET0E7RUFDRSxvREFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ05GO0FEU0E7RUFDRSxhQUFBO0FDUEY7QURVQTtFQUNBLGNBQUE7RUFDUSxlQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVBO0VBQ0UsY0FBQTtBQ1JGO0FEV0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDVEY7QURXQTtFQUNFLGtCQUFBO0FDVEY7QURXQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNURjtBRGdCQTtFQUNFLG1CQUFBO0FDZEY7QURpQkE7RUFDRSxnQkFBQTtBQ2ZGO0FEaUJBO0VBQ0UsY0FBQTtBQ2ZGO0FEaUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDZkY7QURpQkE7RUFDRSxTQUFBO0FDZkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5pb24tdG9vbGJhciB7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogIzMwMzAzMDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxyXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XHJcbn1cclxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZyk7XHJcbn1cclxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcclxufVxyXG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBoMyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBcclxufVxyXG4uYWJvdXQtaW5mbyBoMiB7XHJcbmNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmFib3V0LWluZm8gcCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIGlPUyBPbmx5XHJcbiAqL1xyXG5cclxuLmlvcyAuYWJvdXQtaW5mbyB7XHJcbiAgLS1pb24tcGFkZGluZzogMTlweDtcclxufVxyXG5cclxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaGVhZGVyIHtcclxuICBjb2xvcjogI2I5OTA0NDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiAjYjk5MDQ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm0tMCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbn1cclxuIiwiOmhvc3Qge1xuICAvKlxuICAgKiBpT1MgT25seVxuICAgKi9cbn1cbjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IGlvbi10b29sYmFyIGlvbi1idXR0b24sXG46aG9zdCBpb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG46aG9zdCBpb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cbjpob3N0IC5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvbWFkaXNvbi5qcGcpO1xufVxuOmhvc3QgLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuOmhvc3QgLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG46aG9zdCAuYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L3NlYXR0bGUuanBnKTtcbn1cbjpob3N0IC5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xufVxuOmhvc3QgLmFib3V0LWluZm8gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmFib3V0LWluZm8gaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmFib3V0LWluZm8gaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbjpob3N0IC5hYm91dC1pbmZvIHAge1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cbjpob3N0IC5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuOmhvc3QgLmlvcyAuYWJvdXQtaW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG46aG9zdCAuaGVhZGVyIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCBpb24tdGl0bGUge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IC5tLTAge1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");




let AboutPage = class AboutPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
            header: 'Select a Location'
        };
    }
    presentPopover(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                event
            });
            yield popover.present();
        });
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.scss */ "./src/app/pages/about/about.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-about-about-module~pages-tabs-page-tabs-page-module-es2015.js.map