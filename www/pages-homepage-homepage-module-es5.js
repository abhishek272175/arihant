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


    __webpack_exports__["default"] = ":host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n  text-transform: uppercase;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: left;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-inner h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-inner h4 {\n  color: #303030;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .header-inner h4 span {\n  color: #b99044;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .header-services {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-services h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-services h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-services h4 {\n  color: #303030;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .header-services h4 span {\n  color: #b99044;\n}\n:host .header-services p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .header-team {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-team h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-team h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .header-team h4 {\n  color: #303030;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .header-team h4 span {\n  color: #b99044;\n}\n:host .header-team p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-content {\n  padding: 0 20px;\n}\n:host .query-btn {\n  --background:#0166b3;\n}\n:host .query-btn:hover {\n  --background:#ffffff;\n  color: #b99044;\n}\n:host .mb-10 {\n  margin-bottom: 10px;\n}\n:host .inner-card {\n  background-color: #303030;\n  padding: 30px;\n  margin: 20px;\n  text-align: left;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n}\n:host .inner-card h2 {\n  font-size: 16px;\n  font-weight: 500;\n  color: #b99044;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .inner-card h3 {\n  font-size: 14px;\n  font-weight: 400;\n  color: #ffffff;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .inner-card p {\n  font-size: 12px;\n  font-weight: 300;\n  color: #ffffff;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n:host .inner-card ul {\n  margin: 0 0 10px 0;\n  padding: 0 0 0 20px;\n}\n:host .inner-card ul li {\n  font-size: 12px;\n  font-weight: 300;\n  color: #b99044;\n  padding: 0 0 5px 0;\n}\n:host .history-bg {\n  background: url('bg.jpg') no-repeat 100% 100%;\n  background-size: cover;\n}\n:host .history {\n  padding: 10px 20px;\n  margin: 0;\n}\n:host .inner-frame {\n  background: url('frame1.png') no-repeat 100% 100%;\n  background-size: cover;\n  padding: 20px 0;\n  text-align: center;\n}\n:host .inner-frame h2 {\n  font-size: 14px;\n  color: #303030;\n  font-weight: 500;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n:host .inner-frame h3 {\n  font-size: 12px;\n  color: #303030;\n  font-weight: 500;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n:host .frame-cont {\n  padding: 10px;\n}\n:host .frame-cont h2 {\n  font-size: 14px;\n  color: #303030;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n:host .frame-cont p {\n  font-size: 12px;\n  color: #303030;\n  font-weight: 300;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n:host .inner-card-new {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n  padding: 20px;\n  margin: 10px;\n}\n:host .inner-card-new h3 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .inner-card-new p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .inner-card-new a {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n  color: #b99044;\n  text-decoration: none;\n}\n:host .mb-10 {\n  margin-bottom: 10px;\n}\n:host ion-card-title {\n  font-size: 15px;\n  color: #b99044;\n}\n:host ion-card-subtitle {\n  font-size: 14px;\n}\n:host .query-block {\n  margin: 0;\n  padding: 10px 0;\n}\n:host .query-block img {\n  width: 100%;\n  height: auto;\n}\n:host .query-block h2 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .query-block p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .bg-light-yellow {\n  background-color: #fffbf2;\n}\n:host .wrkngprcss {\n  width: 230px;\n  padding: 40px 15px;\n  border: 1px solid #000000;\n  margin: 0 auto;\n  border-radius: 100px;\n}\n:host .wrkngprcss h2 {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .single-working {\n  padding: 15px 15px;\n  margin: auto;\n  max-width: 180px;\n}\n:host .testinomials {\n  margin: 0;\n  padding: 0 0 10px 0;\n}\n:host .testinomials p {\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .testinomials h3 {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n:host .testinomials h3 span {\n  font-size: 10px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxob21lcGFnZVxcaG9tZXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQkFBQTtBQ0FSO0FERU07RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNBUjtBREVNO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FDQVI7QURHTTtFQUNFLHFCQUFBO0FDRFI7QURHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RSO0FER007RUFDRSxjQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRElNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNGUjtBRElNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRlI7QURJTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FESU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRlI7QURJTTtFQUNFLGNBQUE7QUNGUjtBRElNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FES007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0hSO0FES007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNIUjtBREtNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURLTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNIUjtBREtNO0VBQ0UsY0FBQTtBQ0hSO0FES007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSFI7QURNTTtFQUNFLGVBQUE7QUNKUjtBRE1JO0VBQ0Usb0JBQUE7QUNKTjtBRE1JO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FDSk47QURNSTtFQUNJLG1CQUFBO0FDSlI7QURNSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FDSlI7QURNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNKUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0pSO0FETUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSlI7QURNSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNKUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSlI7QURNSTtFQUNJLDZDQUFBO0VBQ0Esc0JBQUE7QUNKUjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDSlI7QURNTTtFQUNFLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE1NO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKVjtBRE1NO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDRSxtQkFBQTtBQ0pWO0FETUk7RUFDSSxhQUFBO0FDSlI7QURNSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pSO0FETUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSlI7QURNSTtFQUNJLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNKUjtBRE9NO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTFY7QURPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0xSO0FET007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNMUjtBRFFNO0VBQ0UsbUJBQUE7QUNOUjtBRFFJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNOTjtBRFFJO0VBQ0UsZUFBQTtBQ05OO0FEUUc7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ05MO0FEUUc7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ05MO0FEUUc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNOSjtBRFFHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTko7QURRRztFQUNFLHlCQUFBO0FDTkw7QURRRztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDTko7QURRRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ05KO0FEUUc7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ05KO0FEUUc7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7QUNOTDtBRFFHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTko7QURRRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ05KO0FEUUc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIGgzIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDQge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIGg0IHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgcCB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oZWFkZXItc2VydmljZXMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItc2VydmljZXMgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1zZXJ2aWNlcyBoMyB7XHJcbiAgICAgICAgY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLXNlcnZpY2VzIGg0IHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1zZXJ2aWNlcyBoNCBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLXNlcnZpY2VzIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGVhZGVyLXRlYW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItdGVhbSBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLXRlYW0gaDMge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci10ZWFtIGg0IHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci10ZWFtIGg0IHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItdGVhbSBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmlubmVyLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxuICAgIC5xdWVyeS1idG4ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IzAxNjZiMztcclxuICAgIH1cclxuICAgIC5xdWVyeS1idG46aG92ZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICB9XHJcbiAgICAubWItMTAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNhcmQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiNiOTkwNDQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNhcmQgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmlubmVyLWNhcmQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY2FyZCB1bCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItY2FyZCB1bCBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6I2I5OTA0NDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgNXB4IDA7XHJcbiAgICB9XHJcbiAgICAuaGlzdG9yeS1iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL2JnLmpwZykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLmhpc3Rvcnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLWZyYW1lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvZnJhbWUxLnBuZykgbm8tcmVwZWF0IDEwMCUgMTAwJTsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1mcmFtZSBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItZnJhbWUgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZyYW1lLWNvbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZnJhbWUtY29udCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5mcmFtZS1jb250IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5pbm5lci1jYXJkLW5ldyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMDgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuaW5uZXItY2FyZC1uZXcgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLWNhcmQtbmV3IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbm5lci1jYXJkLW5ldyBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5tYi0xMCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAucXVlcnktYmxvY2sge1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgIH1cclxuICAgLnF1ZXJ5LWJsb2NrIGltZyB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICB9XHJcbiAgIC5xdWVyeS1ibG9jayBoMiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgfVxyXG4gICAucXVlcnktYmxvY2sgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgfVxyXG4gICAuYmctbGlnaHQteWVsbG93IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmYyO1xyXG4gICB9XHJcbiAgIC53cmtuZ3ByY3NzIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICB9XHJcbiAgIC53cmtuZ3ByY3NzIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICB9XHJcbiAgIC5zaW5nbGUtd29ya2luZyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICB9XHJcbiAgIC50ZXN0aW5vbWlhbHMge1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xyXG4gICB9XHJcbiAgIC50ZXN0aW5vbWlhbHMgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgfVxyXG4gICAudGVzdGlub21pYWxzIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICB9XHJcbiAgIC50ZXN0aW5vbWlhbHMgaDMgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICB9XHJcbiAgIFxyXG5cclxuXHJcbiAgICB9IiwiOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOmhvc3QgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMiB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGgzIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDQge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoNCBzcGFuIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHAge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmhlYWRlci1zZXJ2aWNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuaGVhZGVyLXNlcnZpY2VzIGgyIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5oZWFkZXItc2VydmljZXMgaDMge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgLmhlYWRlci1zZXJ2aWNlcyBoNCB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuaGVhZGVyLXNlcnZpY2VzIGg0IHNwYW4ge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5oZWFkZXItc2VydmljZXMgcCB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAuaGVhZGVyLXRlYW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmhlYWRlci10ZWFtIGgyIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5oZWFkZXItdGVhbSBoMyB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuaGVhZGVyLXRlYW0gaDQge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmhlYWRlci10ZWFtIGg0IHNwYW4ge1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5oZWFkZXItdGVhbSBwIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuOmhvc3QgLnF1ZXJ5LWJ0biB7XG4gIC0tYmFja2dyb3VuZDojMDE2NmIzO1xufVxuOmhvc3QgLnF1ZXJ5LWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBjb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5tYi0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAuaW5uZXItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbjpob3N0IC5pbm5lci1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2I5OTA0NDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5pbm5lci1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5pbm5lci1jYXJkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmlubmVyLWNhcmQgdWwge1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG59XG46aG9zdCAuaW5uZXItY2FyZCB1bCBsaSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIHBhZGRpbmc6IDAgMCA1cHggMDtcbn1cbjpob3N0IC5oaXN0b3J5LWJnIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL2JnLmpwZykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbjpob3N0IC5oaXN0b3J5IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuaW5uZXItZnJhbWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvZnJhbWUxLnBuZykgbm8tcmVwZWF0IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuaW5uZXItZnJhbWUgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgLmlubmVyLWZyYW1lIGgzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5mcmFtZS1jb250IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbjpob3N0IC5mcmFtZS1jb250IGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5mcmFtZS1jb250IHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgLmlubmVyLWNhcmQtbmV3IHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuOmhvc3QgLmlubmVyLWNhcmQtbmV3IGgzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuaW5uZXItY2FyZC1uZXcgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgLmlubmVyLWNhcmQtbmV3IGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0IC5tYi0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IC5xdWVyeS1ibG9jayB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuOmhvc3QgLnF1ZXJ5LWJsb2NrIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCAucXVlcnktYmxvY2sgaDIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC5xdWVyeS1ibG9jayBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuYmctbGlnaHQteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJmMjtcbn1cbjpob3N0IC53cmtuZ3ByY3NzIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBwYWRkaW5nOiA0MHB4IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cbjpob3N0IC53cmtuZ3ByY3NzIGgyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCAuc2luZ2xlLXdvcmtpbmcge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxODBweDtcbn1cbjpob3N0IC50ZXN0aW5vbWlhbHMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG59XG46aG9zdCAudGVzdGlub21pYWxzIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC50ZXN0aW5vbWlhbHMgaDMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbjpob3N0IC50ZXN0aW5vbWlhbHMgaDMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
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