function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-arihant-demo-arihant-demo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/arihant-demo/arihant-demo.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/arihant-demo/arihant-demo.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesArihantDemoArihantDemoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n   \r\n    <div class=\"center-content\">\r\n      <ion-buttons>\r\n        <a (click)=\"switcheson()\" color=\"light2\" class=\"front-btn\" [hidden]=ishidden ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"switchesoff()\" color=\"light2\" class=\"front-btn\" [hidden]=ishiddenof  ><img src=\"assets/img/images/off-icon.png\"></a>\r\n      </ion-buttons>\r\n     \r\n      <ion-item lines=\"none\">\r\n        <ion-range min=\"0\" max=\"5\" step=\"1\" value=\"0\" pin snaps color=\"primary\">\r\n         \r\n          <ion-icon slot=\"start\" size=\"small\" name=\"remove-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\"  name=\"add-outline\"></ion-icon>\r\n        </ion-range>\r\n      </ion-item>\r\n      \r\n      \r\n     \r\n  </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/arihant-demo/arihant-demo-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/arihant-demo/arihant-demo-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ArihantDemoPageRoutingModule */

  /***/
  function srcAppPagesArihantDemoArihantDemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArihantDemoPageRoutingModule", function () {
      return ArihantDemoPageRoutingModule;
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


    var _arihant_demo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./arihant-demo.page */
    "./src/app/pages/arihant-demo/arihant-demo.page.ts");

    var routes = [{
      path: '',
      component: _arihant_demo_page__WEBPACK_IMPORTED_MODULE_3__["ArihantDemoPage"]
    }];

    var ArihantDemoPageRoutingModule = function ArihantDemoPageRoutingModule() {
      _classCallCheck(this, ArihantDemoPageRoutingModule);
    };

    ArihantDemoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ArihantDemoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/arihant-demo/arihant-demo.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/arihant-demo/arihant-demo.module.ts ***!
    \***********************************************************/

  /*! exports provided: ArihantDemoPageModule */

  /***/
  function srcAppPagesArihantDemoArihantDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArihantDemoPageModule", function () {
      return ArihantDemoPageModule;
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


    var _arihant_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./arihant-demo-routing.module */
    "./src/app/pages/arihant-demo/arihant-demo-routing.module.ts");
    /* harmony import */


    var _arihant_demo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./arihant-demo.page */
    "./src/app/pages/arihant-demo/arihant-demo.page.ts");

    var ArihantDemoPageModule = function ArihantDemoPageModule() {
      _classCallCheck(this, ArihantDemoPageModule);
    };

    ArihantDemoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _arihant_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArihantDemoPageRoutingModule"]],
      declarations: [_arihant_demo_page__WEBPACK_IMPORTED_MODULE_6__["ArihantDemoPage"]]
    })], ArihantDemoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/arihant-demo/arihant-demo.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/arihant-demo/arihant-demo.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesArihantDemoArihantDemoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: auto;\n  min-height: 90vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .color-picker {\n  text-align: center;\n  max-width: 270px;\n}\n:host .range-bar {\n  background: #808184;\n}\n:host ion-toggle {\n  width: 76px;\n  height: 76px;\n  --border-radius: 50%;\n  --handle-background-checked: transparent url('on-icon.png') no-repeat center / contain;\n  --handle-background: transparent url('off-icon.png') no-repeat center / contain;\n  --handle-width:200px;\n  --handle-height:200px;\n}\n:host .colorpick {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  --background: transparent;\n}\n:host ion-range {\n  padding: 25px 0;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #000000;\n}\n:host .range-bar {\n  background: #7a7268;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  width: 90%;\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJpaGFudC1kZW1vL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcYXJpaGFudC1kZW1vXFxhcmloYW50LWRlbW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcmloYW50LWRlbW8vYXJpaGFudC1kZW1vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQWdETSwyQkFBQTtBQzlDTjtBRERJO0VBQ0ksa0VBQUE7QUNHUjtBRERNO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dWO0FERE07RUFDRSxhQUFBO0VBQ0Ysb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHTjtBRERJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0dSO0FEREs7RUFDRyxtQkFBQTtBQ0dSO0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0ZBQUE7RUFDQSwrRUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNBUjtBREVNO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQVI7QURHSztFQUNJLGFBQUE7QUNEVDtBRElNO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FES1E7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDSFo7QURLUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDSix5QkFBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QURLUTtFQUNJLGtCQUFBO0FDSFo7QURLUTtFQUNJLGNBQUE7QUNIWjtBREtRO0VBQ0ksY0FBQTtBQ0haO0FES1E7RUFFSSxtQkFBQTtBQ0paO0FETVE7RUFDSSxpQ0FBQTtBQ0paO0FETVE7RUFDSSxhQUFBO0VBQ0Esa0VBQUE7QUNKWjtBRE1RO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0paO0FETVE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSlo7QURNUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDSlo7QURNUTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXJpaGFudC1kZW1vL2FyaWhhbnQtZGVtby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYmctY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmZWZmIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvLWFyZWEge1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgIC5jb2xvci1waWNrZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xyXG4gICAgfVxyXG4gICAgIC5yYW5nZS1iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4MDgxODQ7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcblxyXG4gICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgd2lkdGg6IDc2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29uLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcclxuICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb2ZmLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcclxuICAgICAgICAtLWhhbmRsZS13aWR0aDoyMDBweDtcclxuICAgICAgICAtLWhhbmRsZS1oZWlnaHQ6MjAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbG9ycGljayB7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgLnRvcC1idG4ge1xyXG4gICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgIH1cclxuICAgICAgLS1pb24tY29sb3ItbGlnaHQyOiAjM2M2OWI0O1xyXG4gICAgICAuZnJvbnQtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAubS1yZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFuZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGRjZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYW5nZS1iYXIge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdhNzI2ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGFiLWJhcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VudGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI5MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG59IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICMzYzY5YjQ7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogOTB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG46aG9zdCAuY29sb3ItcGlja2VyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDI3MHB4O1xufVxuOmhvc3QgLnJhbmdlLWJhciB7XG4gIGJhY2tncm91bmQ6ICM4MDgxODQ7XG59XG46aG9zdCBpb24tdG9nZ2xlIHtcbiAgd2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNzZweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29uLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1hZ2VzL29mZi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gIC0taGFuZGxlLXdpZHRoOjIwMHB4O1xuICAtLWhhbmRsZS1oZWlnaHQ6MjAwcHg7XG59XG46aG9zdCAuY29sb3JwaWNrIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cbjpob3N0IC50b3AtYnRuIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbjpob3N0IC5mcm9udC1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLm0tcmdodCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tcmFuZ2Uge1xuICBwYWRkaW5nOiAyNXB4IDA7XG59XG46aG9zdCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCBpb24tbGFiZWwge1xuICBjb2xvcjogI2UwZGNkOTtcbn1cbjpob3N0IGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG46aG9zdCAucmFuZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogIzdhNzI2ODtcbn1cbjpob3N0IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcbn1cbjpob3N0IGlvbi10YWItYmFyIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTdhOGRkIDAlLCAjNDZhM2RjIDEwMCUpO1xufVxuOmhvc3QgLmxhYmVsLWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMjkwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/arihant-demo/arihant-demo.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/arihant-demo/arihant-demo.page.ts ***!
    \*********************************************************/

  /*! exports provided: ArihantDemoPage */

  /***/
  function srcAppPagesArihantDemoArihantDemoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArihantDemoPage", function () {
      return ArihantDemoPage;
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

    var ArihantDemoPage =
    /*#__PURE__*/
    function () {
      function ArihantDemoPage(events, authService, router) {
        _classCallCheck(this, ArihantDemoPage);

        this.events = events;
        this.authService = authService;
        this.router = router;
        this.ishidden = true;
        this.ishiddenof = false;
      }

      _createClass(ArihantDemoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switcheson",
        value: function switcheson() {
          this.ishidden = true;
          this.ishiddenof = false;
        }
      }, {
        key: "switchesoff",
        value: function switchesoff() {
          this.ishiddenof = true;
          this.ishidden = false;
        }
      }]);

      return ArihantDemoPage;
    }();

    ArihantDemoPage.ctorParameters = function () {
      return [{
        type: _services_events__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ArihantDemoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arihant-demo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arihant-demo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/arihant-demo/arihant-demo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arihant-demo.page.scss */
      "./src/app/pages/arihant-demo/arihant-demo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_events__WEBPACK_IMPORTED_MODULE_2__["Events"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ArihantDemoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-arihant-demo-arihant-demo-module-es5.js.map