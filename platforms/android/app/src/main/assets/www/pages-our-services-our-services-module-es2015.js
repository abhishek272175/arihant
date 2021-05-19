(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-our-services-our-services-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-services/our-services.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-services/our-services.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Our Services</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"header-inner\">\r\n    <h2>Services</h2>\r\n    <h3>We Are Specialized in the<br>Following Services</h3>\r\n  </div>\r\n  <div class=\"inner-content\">\r\n\r\n \r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/icon1.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n\r\n    <h3>Goods & Services Tax Consultancy</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>In now a day, GST Laws have replaced many indirect tax laws, which reduced compliance’s huge burden for traders. But at the same time frequent changes in this new law made it difficult for traders to implement it. Traders in-house resource has to spend extra time in learning about constant changes to avoid non-compliances and fines.<br><br>\r\n\r\n\r\n      To make GST compliances handy, our platform offers you second opinion in support of consultancy received earlier, so that you can focus on your core business.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/icon3.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n    <h3>Customs Law</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>Customs Query are flooding over internet and for each query there are multiple experts – many of them, however are not even qualified practitioners. At Pocket Law, we have dedicated qualified experts to answer your Customs complex issues.<br><br>\r\n\r\n\r\n      Custom law very much relevant now a day for importer as well as exporter, for start a business required very much technical opinion so that no room for any type error, which may be spoil business</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/income.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n    <h3>Income Tax Laws</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>In recent scenario, Income tax Laws cover a big chunk of the Country, which may or may not be aware of the stringent income tax laws. At our platform they can reaffirm their opinion by asking queries from our experts’ team.<br><br>\r\n\r\n\r\n      Therefore, subscribe to us without any second thought and be informed.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/company.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n    <h3>Company Law</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>Company Law compliances demand professional opinion, without which fine, penal or prosecutions provisions attract. Therefore, our platform provides professional opinion to support you and your opinion in regards of Company Law.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    </div>\r\n    <div class=\"header-inner\">\r\n      <h3>YOUR RELIABLE CONSULTANCY FOR EXPERT AND WINNING SECOND OPINION ON LAWS AND CASES RELATED TO GOODS AND SERVICES TAX, INCOME TAX AND CUSTOMS</h3>\r\n      <p>We understand that few people fall on the wrong side of compliance pertaining to income tax, good & services tax and customs laws and most of the time there are ways to help them become compliant by following due diligence. However, all common individuals and even businesses are not always equipped with expert advisors. This is why, at Pocket Law, we have tailored services for each vertical so that everyone can have access to best advisors to help them out with income tax, good & services tax and customs laws related issues.</p>\r\n      <ion-button shape=\"round\" (click)=\"checklogin_for_package()\" class=\"query-btn\">Ask Your Query</ion-button>\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/our-services/our-services-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/our-services/our-services-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OurServicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesPageRoutingModule", function() { return OurServicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _our_services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-services.page */ "./src/app/pages/our-services/our-services.page.ts");




const routes = [
    {
        path: '',
        component: _our_services_page__WEBPACK_IMPORTED_MODULE_3__["OurServicesPage"]
    }
];
let OurServicesPageRoutingModule = class OurServicesPageRoutingModule {
};
OurServicesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OurServicesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/our-services/our-services.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/our-services/our-services.module.ts ***!
  \***********************************************************/
/*! exports provided: OurServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesPageModule", function() { return OurServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _our_services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./our-services-routing.module */ "./src/app/pages/our-services/our-services-routing.module.ts");
/* harmony import */ var _our_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-services.page */ "./src/app/pages/our-services/our-services.page.ts");







let OurServicesPageModule = class OurServicesPageModule {
};
OurServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _our_services_routing_module__WEBPACK_IMPORTED_MODULE_5__["OurServicesPageRoutingModule"]
        ],
        declarations: [_our_services_page__WEBPACK_IMPORTED_MODULE_6__["OurServicesPage"]]
    })
], OurServicesPageModule);



/***/ }),

/***/ "./src/app/pages/our-services/our-services.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/our-services/our-services.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n}\n:host .header-inner h3 span {\n  color: #b99044;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n  text-align: justify;\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n:host .inner-content {\n  padding: 0 20px;\n}\n:host .inner-card {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n  margin: 10px;\n}\n:host .inner-card h3 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .inner-card p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .mb-10 {\n  margin-bottom: 10px;\n}\n:host ion-card-title {\n  font-size: 15px;\n  color: #b99044;\n}\n:host .query-btn {\n  --background:#0166b3;\n}\n:host .query-btn:hover {\n  --background:#ffffff;\n  color: #b99044;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3VyLXNlcnZpY2VzL0U6XFx2aXZla19uZXdcXGFyaWhhbnRcXGFwcFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXG91ci1zZXJ2aWNlc1xcb3VyLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQkFBQTtBQ0FSO0FERU07RUFDRSxjQUFBO0FDQVI7QURFTTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBQ0FSO0FER007RUFDRSxxQkFBQTtBQ0RSO0FER007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0RSO0FER007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtBQ0RSO0FER007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtPQUFBLHVCQUFBO0FDRFI7QURHTTtFQUNFLGVBQUE7QUNEUjtBREdJO0VBQ0ksd0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RSO0FESU07RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGVjtBRElNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDRlI7QURJTTtFQUNJLG1CQUFBO0FDRlY7QURJTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRlI7QURJTTtFQUNFLG9CQUFBO0FDRlI7QURJTTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgXHJcbiAgICAgIC5iZy1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDMgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuaW5uZXItY2FyZCBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItY2FyZCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICAubWItMTAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgICAgLnF1ZXJ5LWJ0biB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMwMTY2YjM7XHJcbiAgICAgIH1cclxuICAgICAgLnF1ZXJ5LWJ0bjpob3ZlciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgIH0iLCI6aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMzAzMDMwO1xufVxuOmhvc3QgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMyB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGgzIHNwYW4ge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgcCB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuOmhvc3QgLmlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG46aG9zdCAuaW5uZXItY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbjpob3N0IC5pbm5lci1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuaW5uZXItY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAubWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnF1ZXJ5LWJ0biB7XG4gIC0tYmFja2dyb3VuZDojMDE2NmIzO1xufVxuOmhvc3QgLnF1ZXJ5LWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBjb2xvcjogI2I5OTA0NDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/our-services/our-services.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/our-services/our-services.page.ts ***!
  \*********************************************************/
/*! exports provided: OurServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesPage", function() { return OurServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OurServicesPage = class OurServicesPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    checklogin_for_package() {
        //debugger;
        this.authService.getToken().then(isLoggedIn => {
            if (isLoggedIn != null) {
                this.router.navigateByUrl("/tickets");
            }
            else {
                this.router.navigateByUrl("/login");
            }
        });
    }
    ngOnInit() {
    }
};
OurServicesPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OurServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-services.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-services/our-services.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./our-services.page.scss */ "./src/app/pages/our-services/our-services.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OurServicesPage);



/***/ })

}]);
//# sourceMappingURL=pages-our-services-our-services-module-es2015.js.map