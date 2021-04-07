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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  /*\n   * iOS Only\n   */\n}\n:host ion-toolbar {\n  --background: #303030;\n  --color: white;\n}\n:host ion-toolbar ion-button,\n:host ion-toolbar ion-back-button,\n:host ion-toolbar ion-menu-button {\n  --color: white;\n}\n:host .about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n:host .about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n:host .about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n:host .about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n:host .about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n:host .about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n:host .about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n:host .about-info h3 {\n  margin-top: 0;\n}\n:host .about-info h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .about-info ion-list {\n  padding-top: 0;\n}\n:host .about-info p {\n  line-height: 130%;\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ion-color-dark);\n}\n:host .text-center {\n  text-align: center;\n}\n:host .about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n:host .ios .about-info {\n  --ion-padding: 19px;\n}\n:host .ios .about-info h3 {\n  font-weight: 700;\n}\n:host .header {\n  color: #b99044;\n}\n:host ion-title {\n  color: #b99044;\n  text-align: left;\n}\n:host .m-0 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxhYm91dFxcYWJvdXQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQW1GQTs7SUFBQTtBQy9FQTtBREhBO0VBRUUscUJBQUE7RUFDQSxjQUFBO0FDSUY7QUREQTs7O0VBR0UsY0FBQTtBQ0dGO0FEQUE7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUVBLFVBQUE7RUFFQSw2Q0FBQTtFQUFBLHFDQUFBO0FDSkY7QURPQTtFQUNFLG9EQUFBO0FDTEY7QURPQTtFQUNFLG1EQUFBO0FDTEY7QURPQTtFQUNFLG9EQUFBO0FDTEY7QURPQTtFQUNFLG9EQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDTkY7QURTQTtFQUNFLGFBQUE7QUNQRjtBRFVBO0VBQ0EsY0FBQTtFQUNRLGVBQUE7RUFDQSxnQkFBQTtBQ1JSO0FEVUE7RUFDRSxjQUFBO0FDUkY7QURXQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNURjtBRFdBO0VBQ0Usa0JBQUE7QUNURjtBRFdBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ1RGO0FEZ0JBO0VBQ0UsbUJBQUE7QUNkRjtBRGlCQTtFQUNFLGdCQUFBO0FDZkY7QURpQkE7RUFDRSxjQUFBO0FDZkY7QURpQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNmRjtBRGlCQTtFQUNFLFNBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbmlvbi10b29sYmFyIHtcclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxyXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXHJcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcclxufVxyXG4uYWJvdXQtaGVhZGVyIC5hdXN0aW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9hdXN0aW4uanBnKTtcclxufVxyXG4uYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvY2hpY2Fnby5qcGcpO1xyXG59XHJcbi5hYm91dC1oZWFkZXIgLnNlYXR0bGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIGgzIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIFxyXG59XHJcbi5hYm91dC1pbmZvIGgyIHtcclxuY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuLmFib3V0LWluZm8gaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBwIHtcclxuICBsaW5lLWhlaWdodDogMTMwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcclxufVxyXG5cclxuLypcclxuICogaU9TIE9ubHlcclxuICovXHJcblxyXG4uaW9zIC5hYm91dC1pbmZvIHtcclxuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xyXG59XHJcblxyXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjYjk5MDQ0O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubS0wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxufVxyXG4iLCI6aG9zdCB7XG4gIC8qXG4gICAqIGlPUyBPbmx5XG4gICAqL1xufVxuOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMzMDMwMzA7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbjpob3N0IGlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbjpob3N0IGlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLmFib3V0LWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuOmhvc3QgLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XG59XG46aG9zdCAuYWJvdXQtaGVhZGVyIC5hdXN0aW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZyk7XG59XG46aG9zdCAuYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcbn1cbjpob3N0IC5hYm91dC1oZWFkZXIgLnNlYXR0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xufVxuOmhvc3QgLmFib3V0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG59XG46aG9zdCAuYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuYWJvdXQtaW5mbyBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46aG9zdCAuYWJvdXQtaW5mbyBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuOmhvc3QgLmFib3V0LWluZm8gcCB7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG46aG9zdCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuOmhvc3QgLmlvcyAuYWJvdXQtaW5mbyB7XG4gIC0taW9uLXBhZGRpbmc6IDE5cHg7XG59XG46aG9zdCAuaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IC5oZWFkZXIge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgLm0tMCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

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