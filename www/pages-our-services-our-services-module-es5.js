function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-our-services-our-services-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-services/our-services.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-services/our-services.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOurServicesOurServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Our Services</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"header-inner\">\r\n    <h2>Services</h2>\r\n    <h3>We Are Specialized in the<br>Following Services</h3>\r\n  </div>\r\n  <div class=\"inner-content\">\r\n\r\n \r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/icon1.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n\r\n    <h3>Goods & Services Tax Consultancy</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>In now a day, GST Laws have replaced many indirect tax laws, which reduced compliance’s huge burden for traders. But at the same time frequent changes in this new law made it difficult for traders to implement it. Traders in-house resource has to spend extra time in learning about constant changes to avoid non-compliances and fines.<br><br>\r\n\r\n\r\n      To make GST compliances handy, our platform offers you second opinion in support of consultancy received earlier, so that you can focus on your core business.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/icon3.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n    <h3>Customs Law</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>Customs Query are flooding over internet and for each query there are multiple experts – many of them, however are not even qualified practitioners. At Pocket Law, we have dedicated qualified experts to answer your Customs complex issues.<br><br>\r\n\r\n\r\n      Custom law very much relevant now a day for importer as well as exporter, for start a business required very much technical opinion so that no room for any type error, which may be spoil business</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/income.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n    <h3>Income Tax Laws</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>In recent scenario, Income tax Laws cover a big chunk of the Country, which may or may not be aware of the stringent income tax laws. At our platform they can reaffirm their opinion by asking queries from our experts’ team.<br><br>\r\n\r\n\r\n      Therefore, subscribe to us without any second thought and be informed.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"inner-card\">\r\n      <ion-row>\r\n        <ion-col Size=\"4\">\r\n          <img src=\"assets/img/images/company.png\" alt=\"Ionic logo\">\r\n        </ion-col>\r\n        <ion-col Size=\"8\">\r\n    <h3>Company Law</h3>\r\n  </ion-col>\r\n  <ion-col Size=\"12\">\r\n    <p>Company Law compliances demand professional opinion, without which fine, penal or prosecutions provisions attract. Therefore, our platform provides professional opinion to support you and your opinion in regards of Company Law.</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    </div>\r\n    <div class=\"header-inner\">\r\n      <h3>YOUR RELIABLE CONSULTANCY FOR EXPERT AND WINNING SECOND OPINION ON LAWS AND CASES RELATED TO GOODS AND SERVICES TAX, INCOME TAX AND CUSTOMS</h3>\r\n      <p>We understand that few people fall on the wrong side of compliance pertaining to income tax, good & services tax and customs laws and most of the time there are ways to help them become compliant by following due diligence. However, all common individuals and even businesses are not always equipped with expert advisors. This is why, at Pocket Law, we have tailored services for each vertical so that everyone can have access to best advisors to help them out with income tax, good & services tax and customs laws related issues.</p>\r\n      <ion-button shape=\"round\" (click)=\"checklogin_for_package()\" class=\"query-btn\">Ask Your Query</ion-button>\r\n    </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/our-services/our-services-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/our-services/our-services-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OurServicesPageRoutingModule */

  /***/
  function srcAppPagesOurServicesOurServicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurServicesPageRoutingModule", function () {
      return OurServicesPageRoutingModule;
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


    var _our_services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./our-services.page */
    "./src/app/pages/our-services/our-services.page.ts");

    var routes = [{
      path: '',
      component: _our_services_page__WEBPACK_IMPORTED_MODULE_3__["OurServicesPage"]
    }];

    var OurServicesPageRoutingModule = function OurServicesPageRoutingModule() {
      _classCallCheck(this, OurServicesPageRoutingModule);
    };

    OurServicesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OurServicesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/our-services/our-services.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/our-services/our-services.module.ts ***!
    \***********************************************************/

  /*! exports provided: OurServicesPageModule */

  /***/
  function srcAppPagesOurServicesOurServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurServicesPageModule", function () {
      return OurServicesPageModule;
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


    var _our_services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./our-services-routing.module */
    "./src/app/pages/our-services/our-services-routing.module.ts");
    /* harmony import */


    var _our_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./our-services.page */
    "./src/app/pages/our-services/our-services.page.ts");

    var OurServicesPageModule = function OurServicesPageModule() {
      _classCallCheck(this, OurServicesPageModule);
    };

    OurServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _our_services_routing_module__WEBPACK_IMPORTED_MODULE_5__["OurServicesPageRoutingModule"]],
      declarations: [_our_services_page__WEBPACK_IMPORTED_MODULE_6__["OurServicesPage"]]
    })], OurServicesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/our-services/our-services.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/our-services/our-services.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOurServicesOurServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n}\n:host .header-inner h3 span {\n  color: #b99044;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n  text-align: justify;\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n:host .inner-content {\n  padding: 0 20px;\n}\n:host .inner-card {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n  margin: 10px;\n}\n:host .inner-card h3 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .inner-card p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .mb-10 {\n  margin-bottom: 10px;\n}\n:host ion-card-title {\n  font-size: 15px;\n  color: #b99044;\n}\n:host .query-btn {\n  --background:#0166b3;\n}\n:host .query-btn:hover {\n  --background:#ffffff;\n  color: #b99044;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3VyLXNlcnZpY2VzL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcb3VyLXNlcnZpY2VzXFxvdXItc2VydmljZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO0FDQVI7QURFTTtFQUNFLGNBQUE7QUNBUjtBREVNO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FDQVI7QURHTTtFQUNFLHFCQUFBO0FDRFI7QURHTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER007RUFDRSxjQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7QUNEUjtBREdNO0VBQ0UsZUFBQTtBQ0RSO0FER0k7RUFDSSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRFI7QURJTTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZWO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGUjtBRElNO0VBQ0ksbUJBQUE7QUNGVjtBRElNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNGUjtBRElNO0VBQ0Usb0JBQUE7QUNGUjtBRElNO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICBcclxuICAgICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMyB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMyBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxuICAgIC5pbm5lci1jYXJkIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5pbm5lci1jYXJkIGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1jYXJkIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5tYi0xMCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6I2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAucXVlcnktYnRuIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzAxNjZiMztcclxuICAgICAgfVxyXG4gICAgICAucXVlcnktYnRuOmhvdmVyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgfSIsIjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XG59XG46aG9zdCBpb24tdGl0bGUge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGgzIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDMgc3BhbiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBwIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG59XG46aG9zdCAuaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbjpob3N0IC5pbm5lci1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuOmhvc3QgLmlubmVyLWNhcmQgaDMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5pbm5lci1jYXJkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5tYi0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAucXVlcnktYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMTY2YjM7XG59XG46aG9zdCAucXVlcnktYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/our-services/our-services.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/our-services/our-services.page.ts ***!
    \*********************************************************/

  /*! exports provided: OurServicesPage */

  /***/
  function srcAppPagesOurServicesOurServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurServicesPage", function () {
      return OurServicesPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OurServicesPage =
    /*#__PURE__*/
    function () {
      function OurServicesPage(authService, router) {
        _classCallCheck(this, OurServicesPage);

        this.authService = authService;
        this.router = router;
      }

      _createClass(OurServicesPage, [{
        key: "checklogin_for_package",
        value: function checklogin_for_package() {
          var _this = this;

          //debugger;
          this.authService.getToken().then(function (isLoggedIn) {
            if (isLoggedIn != null) {
              _this.router.navigateByUrl("/tickets");
            } else {
              _this.router.navigateByUrl("/login");
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurServicesPage;
    }();

    OurServicesPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    OurServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-our-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./our-services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-services/our-services.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./our-services.page.scss */
      "./src/app/pages/our-services/our-services.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], OurServicesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-our-services-our-services-module-es5.js.map