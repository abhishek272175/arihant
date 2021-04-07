(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Our Team</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"header-inner\">\r\n    <h2>Meet My Team</h2>\r\n    <p>Pocket Law is the best Law Firm. We solve your problems tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>\r\n  </div>\r\n  <div class=\"inner-content\">\r\n    <ion-card class=\"mb-10\">\r\n      <img src=\"assets/img/images/img-law.jpg\" />\r\n      <ion-card-header>\r\n        <ion-card-title>James Franklin</ion-card-title>\r\n        <ion-card-subtitle>Business Lawyer</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        Lawyer boluptatum deleniti atque res et quas molestias cepturi sint  eca ate non provident, similique sunt in ulpa modi tempora incidunt ut labore\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"mb-10\">\r\n      <img src=\"assets/img/images/img-law.jpg\" />\r\n      <ion-card-header>\r\n        <ion-card-title>Rebeca Luice</ion-card-title>\r\n        <ion-card-subtitle>Corporate Lawyer</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.Lawyer boluptatum deleniti atque res et quas molestias cepturi sint  eca ate non provident, similique sunt in ulpa modi tempora incidunt ut labore\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/team/team-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/team/team-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageRoutingModule", function() { return TeamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.page */ "./src/app/pages/team/team.page.ts");




const routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"]
    }
];
let TeamPageRoutingModule = class TeamPageRoutingModule {
};
TeamPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/team.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/team/team.module.ts ***!
  \*******************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-routing.module */ "./src/app/pages/team/team-routing.module.ts");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team.page */ "./src/app/pages/team/team.page.ts");







let TeamPageModule = class TeamPageModule {
};
TeamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamPageRoutingModule"]
        ],
        declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
    })
], TeamPageModule);



/***/ }),

/***/ "./src/app/pages/team/team.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/team/team.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-toolbar {\n  --background:#303030;\n}\n:host ion-title {\n  color: #b99044;\n}\n:host .sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  color: #ffffff;\n}\n:host .bg-content {\n  --background: #ffffff;\n}\n:host .header-inner {\n  text-align: center;\n  padding: 20px 20px;\n  margin: 0;\n}\n:host .header-inner h2 {\n  color: #b99044;\n  font-size: 15px;\n  font-weight: 500;\n}\n:host .header-inner h3 {\n  color: #303030;\n  font-size: 15px;\n  font-weight: 500;\n}\n:host .header-inner h3 span {\n  color: #b99044;\n}\n:host .header-inner p {\n  color: #303030;\n  font-size: 12px;\n  font-weight: 400;\n}\n:host .inner-content {\n  padding: 0 20px;\n}\n:host .mb-10 {\n  margin-bottom: 10px;\n}\n:host ion-card-title {\n  font-size: 15px;\n  color: #b99044;\n}\n:host ion-card-subtitle {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9FOlxcZ2l0aHVicHJvamVjdFxcYXJpaGFudC9zcmNcXGFwcFxccGFnZXNcXHRlYW1cXHRlYW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZWFtL3RlYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7QUNBUjtBREVNO0VBQ0UsY0FBQTtBQ0FSO0FERU07RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUNBUjtBREdNO0VBQ0UscUJBQUE7QUNEUjtBREdNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7QUNEUjtBREdNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0FDRFI7QURHSTtFQUNJLG1CQUFBO0FDRFI7QURHSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRE47QURHSTtFQUNFLGVBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMzMDMwMzA7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2I5OTA0NDtcclxuICAgICAgfVxyXG4gICAgICAuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgXHJcbiAgICAgIC5iZy1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItaW5uZXIgaDMgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNiOTkwNDQ7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1pbm5lciBwIHtcclxuICAgICAgICBjb2xvcjogIzMwMzAzMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgICAuaW5uZXItY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1iLTEwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjYjk5MDQ0O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICB9IiwiOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IzMwMzAzMDtcbn1cbjpob3N0IGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5iZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIGgyIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0IC5oZWFkZXItaW5uZXIgaDMge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmhlYWRlci1pbm5lciBoMyBzcGFuIHtcbiAgY29sb3I6ICNiOTkwNDQ7XG59XG46aG9zdCAuaGVhZGVyLWlubmVyIHAge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG46aG9zdCAubWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjYjk5MDQ0O1xufVxuOmhvc3QgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/team/team.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/team/team.page.ts ***!
  \*****************************************/
/*! exports provided: TeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPage", function() { return TeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamPage = class TeamPage {
    constructor() { }
    ngOnInit() {
    }
};
TeamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team.page.scss */ "./src/app/pages/team/team.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TeamPage);



/***/ })

}]);
//# sourceMappingURL=pages-team-team-module-es2015.js.map