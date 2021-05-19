function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homepage-homepage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomepageHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Pocket Law</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n\t<ion-slides pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav\r\n\t\t(ionSlideDidChange)=\"SlideDidChange(sliderOne,slideWithNav)\">\r\n\t\t<ion-slide>\r\n\t\t\t<img src=\"assets/img/images/law_banner2.jpg\">\r\n\t\t</ion-slide>\r\n\r\n\t\t<ion-slide>\r\n\t\t\t<img src=\"assets/img/images/law_banner1.jpg\">\r\n\t\t</ion-slide>\r\n\r\n\r\n\t</ion-slides>\r\n\r\n\t<div class=\"header-inner\">\r\n\t\t<h2>About Pocket Law</h2>\r\n\t\t<h4>Expert Second Opinion on Tax & Custom Laws</h4>\r\n\t\t<p>Through our years of domain experience, we realized a lot of our referral clients have not been properly\r\n\t\t\tguided. The fear factors of Tax and Custom laws are making people vulnerable to costly procedures. This is\r\n\t\t\twhy we dedicatedly focused on offering valuable and fortune saving second opinion for income tax, goods and\r\n\t\t\tservices or custom law situations.</p>\r\n\r\n\t\t<h3>Why Us?</h3>\r\n\t\t<p>We dedicatedly focused on offering valuable and fortune saving second opinion for income tax laws, goods and\r\n\t\t\tservices tax laws or customs law and Companies law situations.</p>\r\n\r\n\t\t<h3>Vision</h3>\r\n\t\t<p>To be the face who brings the laws into your pocket through our second opinion via connecting our expert\r\n\t\t\tknowledge with the latest technology.</p>\r\n\r\n\t\t<h3>Mission</h3>\r\n\t\t<p>To be the leading Second Opinion provider with a reputation of providing best piece of opinion. By making\r\n\t\t\tlaws understandable, keep you and your trade free from any penal procedures.</p>\r\n\t</div>\r\n\t<div class=\"inner-card\">\r\n\t\t<h2>GST & Income Tax Query</h2>\r\n\t\t<h3>Have a query regarding GST or Income Tax ?</h3>\r\n\t\t<p>GST and Income Tax related queries are flooding over internet and for each query there are multiple experts –\r\n\t\t\tmany of them, however are not even qualified practitioners. At PocketLaw, we have dedicated qualified\r\n\t\t\texperts to answer your GST & Income Tax concerns which include;</p>\r\n\t\t<ul>\r\n\t\t\t<li>GST and Income Tax related complex issues</li>\r\n\t\t\t<li>Relevant section and case laws citation</li>\r\n\t\t\t<li>Cross questions related to all your fears for the law</li>\r\n\t\t\t<li>Guaranteed Answering of all the queries which are troubling you</li>\r\n\t\t</ul>\r\n\t\t<ion-button shape=\"round\" (click)=\"checklogin_for_package()\" class=\"query-btn\">Ask Your Query</ion-button>\r\n\t</div>\r\n\r\n\t<div class=\"header-services\">\r\n\t\t<h2>Our Services</h2>\r\n\t\t<h4>We Are Specialized in the Following Services</h4>\r\n\t</div>\r\n\t<div class=\"inner-content\">\r\n\t\t<div class=\"inner-card-new\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col Size=\"4\">\r\n\t\t\t\t\t<img src=\"assets/img/images/icon1.png\" alt=\"Ionic logo\">\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"8\">\r\n\t\t\t\t\t<h3>Goods & Services Tax Consultancy</h3>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<p>In now a day, GST Laws have replaced many indirect tax laws, which reduced compliance’s huge\r\n\t\t\t\t\t\tburden for traders. But at the same time frequent changes in this new law made it difficult for\r\n\t\t\t\t\t\ttraders to implement it.</p>\r\n\t\t\t\t\t<a (click)=\"home()\">Read More</a>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"inner-card-new\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col Size=\"4\">\r\n\t\t\t\t\t<img src=\"assets/img/images/icon3.png\" alt=\"Ionic logo\">\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"8\">\r\n\t\t\t\t\t<h3>Customs Law</h3>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<p>Customs Query are flooding over internet and for each query there are multiple experts – many of\r\n\t\t\t\t\t\tthem, however are not even qualified practitioners. </p>\r\n\t\t\t\t\t<a (click)=\"ourservices()\">Read More</a>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\t\t<div class=\"inner-card-new\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col Size=\"4\">\r\n\t\t\t\t\t<img src=\"assets/img/images/income.png\" alt=\"Ionic logo\">\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"8\">\r\n\t\t\t\t\t<h3>Income Tax Laws</h3>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<p>In recent scenario, Income tax Laws cover a big chunk of the Country, which may or may not be\r\n\t\t\t\t\t\taware of the stringent income tax laws.</p>\r\n\t\t\t\t\t<a (click)=\"ourservices()\">Read More</a>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\t\t<div class=\"inner-card-new\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col Size=\"4\">\r\n\t\t\t\t\t<img src=\"assets/img/images/company.png\" alt=\"Ionic logo\">\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"8\">\r\n\t\t\t\t\t<h3>Company Law</h3>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<p>Company Law compliances demand professional opinion, without which fine, penal or prosecutions\r\n\t\t\t\t\t\tprovisions attract.</p>\r\n\t\t\t\t\t<a (click)=\"ourservices()\">Read More</a>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t<div class=\"inner-content bg-light-yellow\">\r\n\t\t<div class=\"query-block\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<img src=\"assets/img/images/gstreturn2.png\" alt=\"Ionic logo\">\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<h2>GST Return</h2>\r\n\t\t\t\t\t<p>GST Compliances cost an average business more than 10 man-hours each month. It does not add to\r\n\t\t\t\t\t\tthe productive time and moreover, your in-house resource has to spend extra time in learning\r\n\t\t\t\t\t\tabout constant changes to avoid non-compliance and fines. PocketLaw offers you a zero-hassle one\r\n\t\t\t\t\t\tstop GST Return filing service, so that you can focus on your core business.</p>\r\n\t\t\t\t\t<ion-button shape=\"round\" (click)=\"checklogin_for_package()\" class=\"query-btn\">Ask Your Query\r\n\t\t\t\t\t</ion-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"inner-content bg-light-yellow\">\r\n\t\t<div class=\"query-block\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<img src=\"assets/img/images/incometaxreturn.png\" alt=\"Ionic logo\">\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col Size=\"12\">\r\n\t\t\t\t\t<h2>Income Tax Return</h2>\r\n\t\t\t\t\t<p>With each passing day, Income Tax laws are becoming stringent. Even for people who are paying\r\n\t\t\t\t\t\ttheir tax with honesty, the laws can get confusing. To avoid any situation of incorrect income\r\n\t\t\t\t\t\ttax business filing, connect with our expert CA team at Pocketlaw and benefit from their\r\n\t\t\t\t\t\treliable and profitable income tax return services.</p>\r\n\t\t\t\t\t<ion-button shape=\"round\" (click)=\"checklogin_for_package()\" class=\"query-btn\">Ask Your Query\r\n\t\t\t\t\t</ion-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\t<br>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/homepage/homepage-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/homepage/homepage-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: HomepagePageRoutingModule */

  /***/
  function srcAppPagesHomepageHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageRoutingModule", function () {
      return HomepagePageRoutingModule;
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


    var _homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/pages/homepage/homepage.page.ts");

    var routes = [{
      path: '',
      component: _homepage_page__WEBPACK_IMPORTED_MODULE_3__["HomepagePage"]
    }];

    var HomepagePageRoutingModule = function HomepagePageRoutingModule() {
      _classCallCheck(this, HomepagePageRoutingModule);
    };

    HomepagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomepagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/homepage/homepage.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/homepage/homepage.module.ts ***!
    \***************************************************/

  /*! exports provided: HomepagePageModule */

  /***/
  function srcAppPagesHomepageHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function () {
      return HomepagePageModule;
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


    var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homepage-routing.module */
    "./src/app/pages/homepage/homepage-routing.module.ts");
    /* harmony import */


    var _homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homepage.page */
    "./src/app/pages/homepage/homepage.page.ts");

    var HomepagePageModule = function HomepagePageModule() {
      _classCallCheck(this, HomepagePageModule);
    };

    HomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomepagePageRoutingModule"]],
      declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_6__["HomepagePage"]]
    })], HomepagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/homepage/homepage.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/homepage/homepage.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomepageHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n  text-transform: uppercase;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: left;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-inner h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-inner h4 {\n  color: #303030;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .header-inner h4 span {\n  color: #b99044;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .header-services {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-services h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-services h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-services h4 {\n  color: #303030;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .header-services h4 span {\n  color: #b99044;\n}\n:host .header-services p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .header-team {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-team h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-team h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-team h4 {\n  color: #303030;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .header-team h4 span {\n  color: #b99044;\n}\n:host .header-team p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-content {\n  padding: 0 20px;\n}\n:host .query-btn {\n  --background:#0166b3;\n}\n:host .query-btn:hover {\n  --background:#ffffff;\n  color: #b99044;\n}\n:host .mb-10 {\n  margin-bottom: 10px;\n}\n:host .inner-card {\n  background-color: #303030;\n  padding: 30px;\n  margin: 20px;\n  text-align: left;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n}\n:host .inner-card h2 {\n  font-size: 16px;\n  font-weight: 500;\n  color: #b99044;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .inner-card h3 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #ffffff;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .inner-card p {\n  font-size: 12px;\n  font-weight: 300;\n  color: #ffffff;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .inner-card ul {\n  margin: 0 0 10px 0;\n  padding: 0 0 0 20px;\n}\n:host .inner-card ul li {\n  font-size: 12px;\n  font-weight: 300;\n  color: #b99044;\n  padding: 0 0 5px 0;\n}\n:host .history-bg {\n  background: url('bg.jpg') no-repeat 100% 100%;\n  background-size: cover;\n}\n:host .history {\n  padding: 10px 20px;\n  margin: 0;\n}\n:host .inner-frame {\n  background: url('frame1.png') no-repeat 100% 100%;\n  background-size: cover;\n  padding: 20px 0;\n  text-align: center;\n}\n:host .inner-frame h2 {\n  font-size: 14px;\n  color: #303030;\n  font-weight: 500;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n:host .inner-frame h3 {\n  font-size: 12px;\n  color: #303030;\n  font-weight: 500;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n:host .frame-cont {\n  padding: 10px;\n}\n:host .frame-cont h2 {\n  font-size: 14px;\n  color: #303030;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .frame-cont p {\n  font-size: 12px;\n  color: #303030;\n  font-weight: 300;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n:host .inner-card-new {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n  margin: 10px;\n}\n:host .inner-card-new h3 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .inner-card-new p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .inner-card-new a {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n  color: #b99044;\n  text-decoration: none;\n}\n:host .mb-10 {\n  margin-bottom: 10px;\n}\n:host ion-card-title {\n  font-size: 15px;\n  color: #b99044;\n}\n:host ion-card-subtitle {\n  font-size: 14px;\n}\n:host .query-block {\n  margin: 0;\n  padding: 10px 0;\n}\n:host .query-block img {\n  width: 100%;\n  height: auto;\n}\n:host .query-block h2 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .query-block p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .bg-light-yellow {\n  background-color: #fffbf2;\n}\n:host .wrkngprcss {\n  width: 230px;\n  padding: 40px 15px;\n  border: 1px solid #000000;\n  margin: 0 auto;\n  border-radius: 100px;\n}\n:host .wrkngprcss h2 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .single-working {\n  padding: 15px 15px;\n  margin: auto;\n  max-width: 180px;\n}\n:host .testinomials {\n  margin: 0;\n  padding: 0 0 10px 0;\n}\n:host .testinomials p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .testinomials h3 {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .testinomials h3 span {\n  font-size: 10px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvRTpcXHZpdmVrX25ld1xcYXJpaGFudFxcYXBwXFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcaG9tZXBhZ2VcXGhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7QUNBUjtBREVNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDQVI7QURFTTtFQUNFLGdDQUFBO0VBQ0EsY0FBQTtBQ0FSO0FER007RUFDRSxxQkFBQTtBQ0RSO0FER007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0RSO0FER007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtBQ0RSO0FER007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRFI7QURJTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRlI7QURJTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FESU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRElNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZSO0FESU07RUFDRSxjQUFBO0FDRlI7QURJTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREtNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNIUjtBREtNO0VBQ0UsY0FBQTtF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QUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICBcclxuICAgICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMyB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIGg0IHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoNCBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGVhZGVyLXNlcnZpY2VzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLXNlcnZpY2VzIGgyIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItc2VydmljZXMgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1zZXJ2aWNlcyBoNCB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItc2VydmljZXMgaDQgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1zZXJ2aWNlcyBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhlYWRlci10ZWFtIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLXRlYW0gaDIge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci10ZWFtIGgzIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItdGVhbSBoNCB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItdGVhbSBoNCBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLXRlYW0gcCB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbm5lci1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAucXVlcnktYnRuIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiMwMTY2YjM7XHJcbiAgICB9XHJcbiAgICAucXVlcnktYnRuOmhvdmVyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgfVxyXG4gICAgLm1iLTEwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwwLDAsLjA4KTtcclxuICAgIH1cclxuICAgIC5pbm5lci1jYXJkIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjojYjk5MDQ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5pbm5lci1jYXJkIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5pbm5lci1jYXJkIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNhcmQgdWwge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNhcmQgdWwgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiNiOTkwNDQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDVweCAwO1xyXG4gICAgfVxyXG4gICAgLmhpc3RvcnktYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9iZy5qcGcpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5oaXN0b3J5IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1mcmFtZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL2ZyYW1lMS5wbmcpIG5vLXJlcGVhdCAxMDAlIDEwMCU7IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItZnJhbWUgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLWZyYW1lIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5mcmFtZS1jb250IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZyYW1lLWNvbnQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZnJhbWUtY29udCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY2FyZC1uZXcge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwwLDAsLjA4KTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmlubmVyLWNhcmQtbmV3IGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1jYXJkLW5ldyBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItY2FyZC1uZXcgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWItMTAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgLnF1ZXJ5LWJsb2NrIHtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICB9XHJcbiAgIC5xdWVyeS1ibG9jayBpbWcge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuICAgfVxyXG4gICAucXVlcnktYmxvY2sgaDIge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIH1cclxuICAgLnF1ZXJ5LWJsb2NrIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIH1cclxuICAgLmJnLWxpZ2h0LXllbGxvdyB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJmMjtcclxuICAgfVxyXG4gICAud3JrbmdwcmNzcyB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgfVxyXG4gICAud3JrbmdwcmNzcyBoMiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgfVxyXG4gICAuc2luZ2xlLXdvcmtpbmcge1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgfVxyXG4gICAudGVzdGlub21pYWxzIHtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcclxuICAgfVxyXG4gICAudGVzdGlub21pYWxzIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIH1cclxuICAgLnRlc3Rpbm9taWFscyBoMyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgfVxyXG4gICAudGVzdGlub21pYWxzIGgzIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgfVxyXG4gICBcclxuXHJcblxyXG4gICAgfSIsIjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XG59XG46aG9zdCBpb24tdGl0bGUge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMyB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGg0IHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDQgc3BhbiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBwIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5oZWFkZXItc2VydmljZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1zZXJ2aWNlcyBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuaGVhZGVyLXNlcnZpY2VzIGgzIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5oZWFkZXItc2VydmljZXMgaDQge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmhlYWRlci1zZXJ2aWNlcyBoNCBzcGFuIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuaGVhZGVyLXNlcnZpY2VzIHAge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmhlYWRlci10ZWFtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItdGVhbSBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuaGVhZGVyLXRlYW0gaDMge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgLmhlYWRlci10ZWFtIGg0IHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5oZWFkZXItdGVhbSBoNCBzcGFuIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuaGVhZGVyLXRlYW0gcCB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAuaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbjpob3N0IC5xdWVyeS1idG4ge1xuICAtLWJhY2tncm91bmQ6IzAxNjZiMztcbn1cbjpob3N0IC5xdWVyeS1idG46aG92ZXIge1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAubWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgLmlubmVyLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG46aG9zdCAuaW5uZXItY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuaW5uZXItY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuaW5uZXItY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5pbm5lci1jYXJkIHVsIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xufVxuOmhvc3QgLmlubmVyLWNhcmQgdWwgbGkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBwYWRkaW5nOiAwIDAgNXB4IDA7XG59XG46aG9zdCAuaGlzdG9yeS1iZyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9iZy5qcGcpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG46aG9zdCAuaGlzdG9yeSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmlubmVyLWZyYW1lIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL2ZyYW1lMS5wbmcpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmlubmVyLWZyYW1lIGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5pbm5lci1mcmFtZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuZnJhbWUtY29udCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAuZnJhbWUtY29udCBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuZnJhbWUtY29udCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5pbm5lci1jYXJkLW5ldyB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbjpob3N0IC5pbm5lci1jYXJkLW5ldyBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmlubmVyLWNhcmQtbmV3IHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5pbm5lci1jYXJkLW5ldyBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCAubWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAucXVlcnktYmxvY2sge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0IC5xdWVyeS1ibG9jayBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgLnF1ZXJ5LWJsb2NrIGgyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAucXVlcnktYmxvY2sgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmJnLWxpZ2h0LXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZjI7XG59XG46aG9zdCAud3JrbmdwcmNzcyB7XG4gIHdpZHRoOiAyMzBweDtcbiAgcGFkZGluZzogNDBweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG46aG9zdCAud3JrbmdwcmNzcyBoMiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLnNpbmdsZS13b3JraW5nIHtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG46aG9zdCAudGVzdGlub21pYWxzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xufVxuOmhvc3QgLnRlc3Rpbm9taWFscyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAudGVzdGlub21pYWxzIGgzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAudGVzdGlub21pYWxzIGgzIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/homepage/homepage.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/homepage/homepage.page.ts ***!
    \*************************************************/

  /*! exports provided: HomepagePage */

  /***/
  function srcAppPagesHomepageHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepagePage", function () {
      return HomepagePage;
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


    var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/events */
    "./src/app/services/events.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomepagePage =
    /*#__PURE__*/
    function () {
      function HomepagePage(events, authService, router) {
        _classCallCheck(this, HomepagePage);

        this.events = events;
        this.authService = authService;
        this.router = router;
      }

      _createClass(HomepagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.events.publish('toggleMenu', {});
        }
      }, {
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
        key: "ourservices",
        value: function ourservices() {
          this.router.navigateByUrl('/our-services');
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigateByUrl('/home');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.events.publish('toggleMenu', {});
        }
      }]);

      return HomepagePage;
    }();

    HomepagePage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.page.scss */
      "./src/app/pages/homepage/homepage.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], HomepagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-homepage-homepage-module-es5.js.map