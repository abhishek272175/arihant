function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-package-package-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/package/package.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/package/package.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPackagePackagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Our Packages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"header-inner\">\r\n    <h2>Choose your package</h2>\r\n    <p>Pocket Law is the leading Second Opinion provider with a reputation of providing best piece of opinion. Start by\r\n      selecting the package from below</p>\r\n  </div>\r\n  <div class=\"cont-inner\">\r\n\r\n    <ion-row *ngFor=\"let item of userinfo\">\r\n\r\n      <div [ngClass]=\"{'pricing-active' : item.id==2}\" class=\"single-pricing-table text-center mb-30 \">\r\n        <div class=\"pricing-head\">\r\n          <div class=\"price-cut\">\r\n            <s>&#8377; {{item.original_amount}}</s>\r\n          </div>\r\n          <div class=\"price\">\r\n            <h2><sup>&#8377;</sup>{{item.Amount}}</h2>\r\n          </div>\r\n          <h4>{{item.package_name}}</h4>\r\n        </div>\r\n\r\n        <div class=\"pricing-body\">\r\n          <ul>\r\n            <li *ngFor=\"let desc of item.Discription.split('.')\">{{desc}}</li>\r\n\r\n            <li *ngIf=\"(item.Totalmonths == 12)\">Client would be provided with:\r\n              <ol class=\"ordlist\" type=\"i\">\r\n                <li style=\"padding-top:12px;\">30 minutes video consultation - 6 times in a year</li>\r\n                <li style=\"list-style-type:none;\">OR</li>\r\n                <li>One to one consultation for 3 times in a year at our office.\r\n                  with our professional experts in the given duration.</li>\r\n              </ol>\r\n            </li>\r\n            <li *ngIf=\"(item.Totalmonths == 12)\" >Confirm Revert within 24 Hours</li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"pricing-footer\"><a href=\"javascript:void(0)\" (click)=\"checklogin_for_package(item.Amount,item.id)\"\r\n            routerDirection=\"forward\" data-amount=\"6999\" data-id=\"5\" class=\"btn btn-small buy_now\">Select Plan</a></div>\r\n      </div>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/package/package-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/package/package-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PackagePageRoutingModule */

  /***/
  function srcAppPagesPackagePackageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagePageRoutingModule", function () {
      return PackagePageRoutingModule;
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


    var _package_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./package.page */
    "./src/app/pages/package/package.page.ts");

    var routes = [{
      path: '',
      component: _package_page__WEBPACK_IMPORTED_MODULE_3__["PackagePage"]
    }];

    var PackagePageRoutingModule = function PackagePageRoutingModule() {
      _classCallCheck(this, PackagePageRoutingModule);
    };

    PackagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PackagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/package/package.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/package/package.module.ts ***!
    \*************************************************/

  /*! exports provided: PackagePageModule */

  /***/
  function srcAppPagesPackagePackageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagePageModule", function () {
      return PackagePageModule;
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


    var _package_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./package-routing.module */
    "./src/app/pages/package/package-routing.module.ts");
    /* harmony import */


    var _package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./package.page */
    "./src/app/pages/package/package.page.ts");

    var PackagePageModule = function PackagePageModule() {
      _classCallCheck(this, PackagePageModule);
    };

    PackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _package_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagePageRoutingModule"]],
      declarations: [_package_page__WEBPACK_IMPORTED_MODULE_6__["PackagePage"]]
    })], PackagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/package/package.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/package/package.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPackagePackagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  /*.bg-content {\n      --background: url(../../../assets/img/images/bg-login.jpg) no-repeat 100% 100%; \n    }*/\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .m-0 {\n  margin: 0;\n}\n:host .cont-inner {\n  max-width: 300px;\n  margin: 0 auto;\n}\n:host .single-pricing-table {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n}\n:host .text-center {\n  text-align: center !important;\n}\n:host .pricing-head {\n  padding: 45px 20px;\n  background-color: #303030;\n  position: relative;\n}\n:host .pricing-head .price-cut {\n  position: relative;\n  z-index: 2;\n}\n:host .pricing-head .price-cut > s {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: \"Mada\", sans-serif;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n  margin-bottom: 0px;\n}\n:host .pricing-head .price {\n  position: relative;\n  z-index: 2;\n}\n:host .pricing-head .price::before {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  left: 24px;\n  height: 40px;\n  width: 180px;\n  background-color: #b99044;\n  z-index: -1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n:host .pricing-head .price > h2 {\n  color: #fff;\n  font-size: 56px;\n  font-weight: 700;\n  font-family: \"Mada\", sans-serif;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n  margin-top: 10px;\n}\n:host .pricing-head .price > h2 > sup {\n  font-size: 26px;\n  margin-left: -10px;\n  position: relative;\n  top: -22px;\n}\n:host .pricing-head > h4 {\n  font-size: 15px;\n  color: #f1f1f1;\n  line-height: 36px;\n  font-weight: 500;\n  letter-spacing: 4px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n:host .pricing-head::after {\n  position: absolute;\n  content: \"\";\n  background-image: url('price-table.png');\n  bottom: -2px;\n  left: 0;\n  z-index: 2;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 35px;\n  background-size: cover;\n}\n:host .pricing-body {\n  padding: 50px 35px;\n  position: relative;\n  z-index: 9;\n  background-color: #f1f1f1;\n  padding-top: 30px;\n}\n:host ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n:host .pricing-body > ul > li {\n  font-size: 14px;\n  list-style: none;\n  color: #4d4d4d;\n  font-weight: 400;\n  line-height: 17px;\n  text-align: left;\n  margin-bottom: 10px;\n}\n:host .pricing-body > ul > li::before {\n  content: url('arrow.png');\n  color: #000;\n  display: inline-block;\n  margin-left: -1.3em;\n  width: 1.3em;\n}\n:host .pricing-footer > a {\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: uppercase;\n  display: block;\n  color: #c7c7c7;\n  background-color: #303030;\n  padding: 24px 50px;\n  text-decoration: none;\n}\n:host .pricing-footer > a:hover {\n  text-decoration: underline;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .mt-30 {\n  margin-top: 30px;\n}\n:host .single-pricing-table.pricing-active .pricing-head {\n  background-color: #b99044;\n}\n:host .single-pricing-table.pricing-active .pricing-head .price::before {\n  background-color: #303030;\n}\n:host .single-pricing-table.pricing-active .pricing-footer > a {\n  background-color: #b99044;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFja2FnZS9FOlxcdml2ZWtfbmV3XFxhcmloYW50XFxhcHBcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxwYWNrYWdlXFxwYWNrYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFja2FnZS9wYWNrYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztNQUFBO0FDR0o7QURBTTtFQUNFLG9CQUFBO0FDRVI7QURBTTtFQUNFLGNBQUE7QUNFUjtBREFNO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FDRVI7QURBTTtFQUNFLHFCQUFBO0FDRVI7QURBTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRVI7QURBTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQU07RUFDSSxTQUFBO0FDRVY7QURBTTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0VWO0FEQU07RUFDRSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0EsK0NBQUE7QUNFUjtBREFJO0VBQ0ksNkJBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNKLG1CQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ1I7QURDSTtFQUNJLDBCQUFBO0FDQ1I7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDSTtFQUNJLGdCQUFBO0FDQ1I7QURDSTtFQUNJLHlCQUFBO0FDQ1I7QURDSTtFQUNJLHlCQUFBO0FDQ1I7QURDSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFja2FnZS9wYWNrYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC8qLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL2JnLWxvZ2luLmpwZykgbm8tcmVwZWF0IDEwMCUgMTAwJTsgXHJcbiAgICAgIH0qL1xyXG4gICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgICAgLmJnLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgXHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICAubS0wIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuY29udC1pbm5lciB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLnNpbmdsZS1wcmljaW5nLXRhYmxlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIH1cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wcmljaW5nLWhlYWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDQ1cHggMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5wcmljaW5nLWhlYWQgLnByaWNlLWN1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1oZWFkIC5wcmljZS1jdXQgPiBzIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctaGVhZCAucHJpY2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctaGVhZCAucHJpY2U6OmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctaGVhZCAucHJpY2UgPiBoMiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYWRhJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1oZWFkIC5wcmljZSA+IGgyID4gc3VwIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctaGVhZCA+IGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctaGVhZDo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9wcmljZS10YWJsZS5wbmcpO1xyXG4gICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAzNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1ib2R5ID4gdWwgPiBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1ib2R5ID4gdWwgPiBsaTo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvYXJyb3cucG5nKTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEuM2VtO1xyXG4gICAgd2lkdGg6IDEuM2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljaW5nLWZvb3RlciA+IGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDUwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctZm9vdGVyID4gYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICAubWItMzAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubXQtMzAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuc2luZ2xlLXByaWNpbmctdGFibGUucHJpY2luZy1hY3RpdmUgLnByaWNpbmctaGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcclxuICAgIH1cclxuICAgIC5zaW5nbGUtcHJpY2luZy10YWJsZS5wcmljaW5nLWFjdGl2ZSAucHJpY2luZy1oZWFkIC5wcmljZTo6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gICAgfVxyXG4gICAgLnNpbmdsZS1wcmljaW5nLXRhYmxlLnByaWNpbmctYWN0aXZlIC5wcmljaW5nLWZvb3RlciA+IGEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIjpob3N0IHtcbiAgLyouYmctY29udGVudCB7XG4gICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9iZy1sb2dpbi5qcGcpIG5vLXJlcGVhdCAxMDAlIDEwMCU7IFxuICAgIH0qL1xufVxuOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGgyIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgcCB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAubS0wIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmNvbnQtaW5uZXIge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC5zaW5nbGUtcHJpY2luZy10YWJsZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbjpob3N0IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOmhvc3QgLnByaWNpbmctaGVhZCB7XG4gIHBhZGRpbmc6IDQ1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnByaWNpbmctaGVhZCAucHJpY2UtY3V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuOmhvc3QgLnByaWNpbmctaGVhZCAucHJpY2UtY3V0ID4gcyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1hZGFcIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG46aG9zdCAucHJpY2luZy1oZWFkIC5wcmljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbjpob3N0IC5wcmljaW5nLWhlYWQgLnByaWNlOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMjRweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5wcmljaW5nLWhlYWQgLnByaWNlID4gaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogXCJNYWRhXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbjpob3N0IC5wcmljaW5nLWhlYWQgLnByaWNlID4gaDIgPiBzdXAge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMnB4O1xufVxuOmhvc3QgLnByaWNpbmctaGVhZCA+IGg0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2YxZjFmMTtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0IC5wcmljaW5nLWhlYWQ6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvcHJpY2UtdGFibGUucG5nKTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuOmhvc3QgLnByaWNpbmctYm9keSB7XG4gIHBhZGRpbmc6IDUwcHggMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbjpob3N0IHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbjpob3N0IC5wcmljaW5nLWJvZHkgPiB1bCA+IGxpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCAucHJpY2luZy1ib2R5ID4gdWwgPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL2Fycm93LnBuZyk7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAtMS4zZW07XG4gIHdpZHRoOiAxLjNlbTtcbn1cbjpob3N0IC5wcmljaW5nLWZvb3RlciA+IGEge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2M3YzdjNztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgcGFkZGluZzogMjRweCA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCAucHJpY2luZy1mb290ZXIgPiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG46aG9zdCAubWItMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuOmhvc3QgLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbjpob3N0IC5zaW5nbGUtcHJpY2luZy10YWJsZS5wcmljaW5nLWFjdGl2ZSAucHJpY2luZy1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcbn1cbjpob3N0IC5zaW5nbGUtcHJpY2luZy10YWJsZS5wcmljaW5nLWFjdGl2ZSAucHJpY2luZy1oZWFkIC5wcmljZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbn1cbjpob3N0IC5zaW5nbGUtcHJpY2luZy10YWJsZS5wcmljaW5nLWFjdGl2ZSAucHJpY2luZy1mb290ZXIgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcbiAgY29sb3I6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/package/package.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/package/package.page.ts ***!
    \***********************************************/

  /*! exports provided: PackagePage */

  /***/
  function srcAppPagesPackagePackagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagePage", function () {
      return PackagePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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

    var PackagePage =
    /*#__PURE__*/
    function () {
      function PackagePage(authService, storage, router, navCtrl, modalCtrl, alertService) {
        _classCallCheck(this, PackagePage);

        this.authService = authService;
        this.storage = storage;
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
      }

      _createClass(PackagePage, [{
        key: "checklogin_for_package",
        value: function checklogin_for_package(amount, product_id) {
          var _this = this;

          //debugger;
          this.authService.getToken().then(function (isLoggedIn) {
            if (isLoggedIn != null) {
              _this.storage.get('email').then(function (val) {
                _this.email = val;
              });

              _this.storage.get('phone').then(function (val) {
                _this.phone = val;
              });

              _this.storage.get('username').then(function (val) {
                _this.username = val;
              });

              _this.payWithRazorpay(amount, product_id, _this.email, _this.phone, _this.username);
            } else {
              _this.router.navigateByUrl("/login");
            }
          });
        }
      }, {
        key: "payWithRazorpay",
        value: function payWithRazorpay(amount, product_id, email, phone, username) {
          var _this2 = this;

          var options = {
            description: 'Credits towards consultation',
            image: 'https://thepocketlaw.com/img/logo/logo.png',
            currency: "INR",
            key: "rzp_live_CNIZuyF7YLkfjo",
            amount: amount * 100,
            name: username,
            prefill: {
              email: email,
              contact: phone,
              name: username
            },
            theme: {
              color: '#F37254'
            },
            modal: {
              ondismiss: function ondismiss() {
                alert('dismissed');
              }
            }
          };

          var successCallback = function successCallback(payment_id) {
            _this2.authService.getToken().then(function (isLoggedIn) {
              if (isLoggedIn != null) {
                _this2.storage.get('user_id').then(function (val) {
                  _this2.user_id = val;

                  _this2.alertService.presentLoading();

                  _this2.authService.payment(_this2.user_id, payment_id, amount, product_id).subscribe(function (data) {
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
                  }, function () {
                    _this2.alertService.removeLoading();
                  });
                });
              }
            });
          };

          var cancelCallback = function cancelCallback(error) {
            _this2.alertService.presentToast("Your payment transaction failed");

            _this2.alertService.removeLoading();
          };

          RazorpayCheckout.open(options, successCallback, cancelCallback);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          this.alertService.presentLoading();
          this.authService.package_list().subscribe(function (result) {
            _this3.userinfo = result;

            _this3.alertService.removeLoading();
          });
          this.alertService.removeLoading();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//alert("sdsd");
        }
      }]);

      return PackagePage;
    }();

    PackagePage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    PackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-package',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./package.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/package/package.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./package.page.scss */
      "./src/app/pages/package/package.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])], PackagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-package-package-module-es5.js.map