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


    __webpack_exports__["default"] = ":host {\n  /*.bg-content {\n      --background: url(../../../assets/img/images/bg-login.jpg) no-repeat 100% 100%; \n    }*/\n}\n:host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .m-0 {\n  margin: 0;\n}\n:host .cont-inner {\n  max-width: 300px;\n  margin: 0 auto;\n}\n:host .single-pricing-table {\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);\n}\n:host .text-center {\n  text-align: center !important;\n}\n:host .pricing-head {\n  padding: 45px 20px;\n  background-color: #303030;\n  position: relative;\n}\n:host .pricing-head .price-cut {\n  position: relative;\n  z-index: 2;\n}\n:host .pricing-head .price-cut > s {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  font-family: \"Mada\", sans-serif;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n  margin-bottom: 0px;\n}\n:host .pricing-head .price {\n  position: relative;\n  z-index: 2;\n}\n:host .pricing-head .price::before {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  left: 24px;\n  height: 40px;\n  width: 180px;\n  background-color: #b99044;\n  z-index: -1;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n:host .pricing-head .price > h2 {\n  color: #fff;\n  font-size: 56px;\n  font-weight: 700;\n  font-family: \"Mada\", sans-serif;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n  margin-top: 10px;\n}\n:host .pricing-head .price > h2 > sup {\n  font-size: 26px;\n  margin-left: -10px;\n  position: relative;\n  top: -22px;\n}\n:host .pricing-head > h4 {\n  font-size: 15px;\n  color: #f1f1f1;\n  line-height: 36px;\n  font-weight: 500;\n  letter-spacing: 4px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n:host .pricing-head::after {\n  position: absolute;\n  content: \"\";\n  background-image: url('price-table.png');\n  bottom: -2px;\n  left: 0;\n  z-index: 2;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 35px;\n  background-size: cover;\n}\n:host .pricing-body {\n  padding: 50px 35px;\n  position: relative;\n  z-index: 9;\n  background-color: #f1f1f1;\n  padding-top: 30px;\n}\n:host ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n:host .pricing-body > ul > li {\n  font-size: 14px;\n  list-style: none;\n  color: #4d4d4d;\n  font-weight: 400;\n  line-height: 17px;\n  text-align: left;\n  margin-bottom: 10px;\n}\n:host .pricing-body > ul > li::before {\n  content: url('arrow.png');\n  color: #000;\n  display: inline-block;\n  margin-left: -1.3em;\n  width: 1.3em;\n}\n:host .pricing-footer > a {\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: uppercase;\n  display: block;\n  color: #c7c7c7;\n  background-color: #303030;\n  padding: 24px 50px;\n  text-decoration: none;\n}\n:host .pricing-footer > a:hover {\n  text-decoration: underline;\n}\n:host .mb-30 {\n  margin-bottom: 30px;\n}\n:host .mt-30 {\n  margin-top: 30px;\n}\n:host .single-pricing-table.pricing-active .pricing-head {\n  background-color: #b99044;\n}\n:host .single-pricing-table.pricing-active .pricing-head .price::before {\n  background-color: #303030;\n}\n:host .single-pricing-table.pricing-active .pricing-footer > a {\n  background-color: #b99044;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFja2FnZS9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXHBhY2thZ2VcXHBhY2thZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWNrYWdlL3BhY2thZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7O01BQUE7QUNHSjtBREFNO0VBQ0Usb0JBQUE7QUNFUjtBREFNO0VBQ0UsY0FBQTtBQ0VSO0FEQU07RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUNFUjtBREFNO0VBQ0UscUJBQUE7QUNFUjtBREFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNFUjtBREFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBTTtFQUNJLFNBQUE7QUNFVjtBREFNO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDRVY7QURBTTtFQUNFLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSwrQ0FBQTtBQ0VSO0FEQUk7RUFDSSw2QkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0osbUJBQUE7RUFDQSxZQUFBO0FDRUo7QURDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDUjtBRENJO0VBQ0ksMEJBQUE7QUNDUjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBRENJO0VBQ0kseUJBQUE7QUNDUjtBRENJO0VBQ0kseUJBQUE7QUNDUjtBRENJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWNrYWdlL3BhY2thZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLyouYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvYmctbG9naW4uanBnKSBuby1yZXBlYXQgMTAwJSAxMDAlOyBcclxuICAgICAgfSovXHJcbiAgICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIGgyIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWlubmVyIHAge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5tLTAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250LWlubmVyIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgICAuc2luZ2xlLXByaWNpbmctdGFibGUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctaGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogNDVweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnByaWNpbmctaGVhZCAucHJpY2UtY3V0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC5wcmljaW5nLWhlYWQgLnByaWNlLWN1dCA+IHMge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFkYScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1oZWFkIC5wcmljZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1oZWFkIC5wcmljZTo6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1oZWFkIC5wcmljZSA+IGgyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5wcmljaW5nLWhlYWQgLnByaWNlID4gaDIgPiBzdXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTIycHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1oZWFkID4gaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1oZWFkOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL3ByaWNlLXRhYmxlLnBuZyk7XHJcbiAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDM1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5wcmljaW5nLWJvZHkgPiB1bCA+IGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzRkNGQ0ZDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5wcmljaW5nLWJvZHkgPiB1bCA+IGxpOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9hcnJvdy5wbmcpO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS4zZW07XHJcbiAgICB3aWR0aDogMS4zZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNpbmctZm9vdGVyID4gYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogI2M3YzdjNztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHggNTBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1mb290ZXIgPiBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIC5tYi0zMCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5tdC0zMCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIC5zaW5nbGUtcHJpY2luZy10YWJsZS5wcmljaW5nLWFjdGl2ZSAucHJpY2luZy1oZWFkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgfVxyXG4gICAgLnNpbmdsZS1wcmljaW5nLXRhYmxlLnByaWNpbmctYWN0aXZlIC5wcmljaW5nLWhlYWQgLnByaWNlOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICB9XHJcbiAgICAuc2luZ2xlLXByaWNpbmctdGFibGUucHJpY2luZy1hY3RpdmUgLnByaWNpbmctZm9vdGVyID4gYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG59IiwiOmhvc3Qge1xuICAvKi5iZy1jb250ZW50IHtcbiAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL2JnLWxvZ2luLmpwZykgbm8tcmVwZWF0IDEwMCUgMTAwJTsgXG4gICAgfSovXG59XG46aG9zdCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMzAzMDMwO1xufVxuOmhvc3QgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QgLmJnLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDIge1xuICBjb2xvcjogI2I5OTA0NDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBwIHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5tLTAge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY29udC1pbm5lciB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLnNpbmdsZS1wcmljaW5nLXRhYmxlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuOmhvc3QgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46aG9zdCAucHJpY2luZy1oZWFkIHtcbiAgcGFkZGluZzogNDVweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAucHJpY2luZy1oZWFkIC5wcmljZS1jdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG46aG9zdCAucHJpY2luZy1oZWFkIC5wcmljZS1jdXQgPiBzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiTWFkYVwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbjpob3N0IC5wcmljaW5nLWhlYWQgLnByaWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuOmhvc3QgLnByaWNpbmctaGVhZCAucHJpY2U6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAyNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5OTA0NDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLnByaWNpbmctaGVhZCAucHJpY2UgPiBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1hZGFcIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuOmhvc3QgLnByaWNpbmctaGVhZCAucHJpY2UgPiBoMiA+IHN1cCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIycHg7XG59XG46aG9zdCAucHJpY2luZy1oZWFkID4gaDQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuOmhvc3QgLnByaWNpbmctaGVhZDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9wcmljZS10YWJsZS5wbmcpO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG46aG9zdCAucHJpY2luZy1ib2R5IHtcbiAgcGFkZGluZzogNTBweCAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuOmhvc3QgdWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuOmhvc3QgLnByaWNpbmctYm9keSA+IHVsID4gbGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5wcmljaW5nLWJvZHkgPiB1bCA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvYXJyb3cucG5nKTtcbiAgY29sb3I6ICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IC0xLjNlbTtcbiAgd2lkdGg6IDEuM2VtO1xufVxuOmhvc3QgLnByaWNpbmctZm9vdGVyID4gYSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjYzdjN2M3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBwYWRkaW5nOiAyNHB4IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0IC5wcmljaW5nLWZvb3RlciA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbjpob3N0IC5tYi0zMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG46aG9zdCAubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuOmhvc3QgLnNpbmdsZS1wcmljaW5nLXRhYmxlLnByaWNpbmctYWN0aXZlIC5wcmljaW5nLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnNpbmdsZS1wcmljaW5nLXRhYmxlLnByaWNpbmctYWN0aXZlIC5wcmljaW5nLWhlYWQgLnByaWNlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xufVxuOmhvc3QgLnNpbmdsZS1wcmljaW5nLXRhYmxlLnByaWNpbmctYWN0aXZlIC5wcmljaW5nLWZvb3RlciA+IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk5MDQ0O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
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