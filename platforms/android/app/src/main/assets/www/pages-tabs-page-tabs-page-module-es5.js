function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapCanvas class=\"map-canvas\"></div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleFilterScheduleFilterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\r\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      Filter Sessions\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\r\n    <ion-list-header>Tracks</ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\r\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\r\n      <ion-label>{{track.name}}</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer translucent=\"true\" *ngIf=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleScheduleHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons *ngIf=\"!showSearchbar\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-segment *ngIf=\"ios\" [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\r\n      <ion-segment-button value=\"all\">\r\n        All\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"favorites\">\r\n        Favorites\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Schedule</ion-title>\r\n    <ion-searchbar *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" (ionCancel)=\"showSearchbar = false\" placeholder=\"Search\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"presentFilter()\">\r\n        <span *ngIf=\"ios\">Filter</span>\r\n        <span *ngIf=\"!ios\">\r\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\r\n        </span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"!ios\">\r\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\r\n      <ion-segment-button value=\"all\">\r\n        All\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"favorites\">\r\n        Favorites\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Schedule</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n      <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\"></ion-searchbar>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\r\n    <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\r\n      <ion-item-divider sticky>\r\n        <ion-label>\r\n          {{group.time}}\r\n        </ion-label>\r\n      </ion-item-divider>\r\n\r\n      <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem [attr.track]=\"session.tracks[0] | lowercase\"\r\n        [hidden]=\"session.hide\">\r\n        <ion-item routerLink=\"/app/tabs/schedule/session/{{session.id}}\">\r\n          <ion-label>\r\n            <h3>{{session.name}}</h3>\r\n            <p>\r\n              {{session.timeStart}} &mdash; {{session.timeEnd}}: {{session.location}}\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options>\r\n          <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\r\n            Favorite\r\n          </ion-item-option>\r\n          <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\"\r\n            *ngIf=\"segment === 'favorites'\">\r\n            Remove\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-item-group>\r\n  </ion-list>\r\n\r\n  <ion-list-header [hidden]=\"shownSessions > 0\">\r\n    No Sessions Found\r\n  </ion-list-header>\r\n\r\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"vimeo\" (click)=\"openSocial('Vimeo', fab)\">\r\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"instagram\" (click)=\"openSocial('Instagram', fab)\">\r\n        <ion-icon name=\"logo-instagram\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"twitter\" (click)=\"openSocial('Twitter', fab)\">\r\n        <ion-icon name=\"logo-twitter\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"facebook\" (click)=\"openSocial('Facebook', fab)\">\r\n        <ion-icon name=\"logo-facebook\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionDetailSessionDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleFavorite()\">\r\n        <ion-icon *ngIf=\"!isFavorite\" slot=\"icon-only\" name=\"star-outline\"></ion-icon>\r\n        <ion-icon *ngIf=\"isFavorite\" slot=\"icon-only\" name=\"star\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"shareSession()\">\r\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"session\" class=\"ion-padding\">\r\n    <h1>{{session.name}}</h1>\r\n    <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\r\n    <p>{{session.description}}</p>\r\n    <ion-text color=\"medium\">\r\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\r\n      <br /> {{session.location}}\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item (click)=\"sessionClick('watch')\" button>\r\n      <ion-label color=\"primary\">Watch</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\r\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\r\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('download video')\" button>\r\n      <ion-label color=\"primary\">Download Video</ion-label>\r\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\r\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerDetailSpeakerDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"speaker-detail\">\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-buttons *ngIf=\"speaker\" slot=\"end\">\r\n        <ion-button (click)=\"openContact(speaker)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button (click)=\"openSpeakerShare(speaker)\">\r\n          <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"speaker-background\">\r\n    <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\r\n    <h2>{{speaker?.name}}</h2>\r\n  </div>\r\n\r\n  <div class=\"ion-padding speaker-detail\">\r\n    <p>{{speaker?.about}} Say hello on social media!</p>\r\n\r\n    <hr>\r\n\r\n    <ion-chip color=\"twitter\" button (click)=\"openExternalUrl('https://twitter.com/' + speaker.twitter)\">\r\n      <ion-icon name=\"logo-twitter\"></ion-icon>\r\n      <ion-label>Twitter</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip color=\"dark\" button (click)=\"openExternalUrl('https://github.com/ionic-team/ionic')\">\r\n      <ion-icon name=\"logo-github\"></ion-icon>\r\n      <ion-label>GitHub</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-chip color=\"instagram\" button (click)=\"openExternalUrl('https://instagram.com/ionicframework')\">\r\n      <ion-icon name=\"logo-instagram\"></ion-icon>\r\n      <ion-label>Instagram</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerListSpeakerListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Speakers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Speakers</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\r\n        <ion-card class=\"speaker-card\">\r\n          <ion-card-header>\r\n            <ion-item detail=\"false\" lines=\"none\" class=\"speaker-item\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\r\n              <ion-avatar slot=\"start\">\r\n                <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name + ' profile picture'\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>{{speaker.name}}</h2>\r\n                <p>{{speaker.title}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list lines=\"none\">\r\n              <ion-item *ngFor=\"let session of speaker.sessions\" detail=\"false\" routerLink=\"/app/tabs/speakers/session/{{session.id}}\">\r\n                <ion-label>\r\n                  <h3>{{session.name}}</h3>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item detail=\"false\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\r\n                <ion-label>\r\n                  <h3>About {{speaker.name}}</h3>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsPageTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"speakers\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"location\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\">\r\n      <ion-icon name=\"information-circle\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/map/map-dark-style.js":
  /*!*********************************************!*\
    !*** ./src/app/pages/map/map-dark-style.js ***!
    \*********************************************/

  /*! exports provided: darkStyle */

  /***/
  function srcAppPagesMapMapDarkStyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "darkStyle", function () {
      return darkStyle;
    });

    var darkStyle = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#263c3f"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#6b9a76"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#38414e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#212a37"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9ca5b3"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#1f2835"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#f3d19c"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#2f3948"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#17263c"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#515c6d"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#17263c"
      }]
    }];
    /***/
  },

  /***/
  "./src/app/pages/map/map-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/map/map-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MapPageRoutingModule */

  /***/
  function srcAppPagesMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
      return MapPageRoutingModule;
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


    var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");

    var routes = [{
      path: '',
      component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }];

    var MapPageRoutingModule = function MapPageRoutingModule() {
      _classCallCheck(this, MapPageRoutingModule);
    };

    MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.module.ts ***!
    \*****************************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");
    /* harmony import */


    var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-routing.module */
    "./src/app/pages/map/map-routing.module.ts");

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
      declarations: [_map__WEBPACK_IMPORTED_MODULE_4__["MapPage"]]
    })], MapModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.scss":
  /*!************************************!*\
    !*** ./src/app/pages/map/map.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcbWFwXFxtYXAuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2hvdy1tYXAge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.ts":
  /*!**********************************!*\
    !*** ./src/app/pages/map/map.ts ***!
    \**********************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppPagesMapMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _map_dark_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-dark-style */
    "./src/app/pages/map/map-dark-style.js");

    var MapPage =
    /*#__PURE__*/
    function () {
      function MapPage(doc, confData, platform) {
        _classCallCheck(this, MapPage);

        this.doc = doc;
        this.confData = confData;
        this.platform = platform;
      }

      _createClass(MapPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var appEl, isDark, style, googleMaps, map, observer;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    appEl = this.doc.querySelector('ion-app');
                    isDark = false;
                    style = [];

                    if (appEl.classList.contains('dark-theme')) {
                      style = _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"];
                    }

                    _context.next = 6;
                    return getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw');

                  case 6:
                    googleMaps = _context.sent;
                    this.confData.getMap().subscribe(function (mapData) {
                      var mapEle = _this.mapElement.nativeElement;
                      map = new googleMaps.Map(mapEle, {
                        center: mapData.find(function (d) {
                          return d.center;
                        }),
                        zoom: 16,
                        styles: style
                      });
                      mapData.forEach(function (markerData) {
                        var infoWindow = new googleMaps.InfoWindow({
                          content: "<h5>".concat(markerData.name, "</h5>")
                        });
                        var marker = new googleMaps.Marker({
                          position: markerData,
                          map: map,
                          title: markerData.name
                        });
                        marker.addListener('click', function () {
                          infoWindow.open(map, marker);
                        });
                      });
                      googleMaps.event.addListenerOnce(map, 'idle', function () {
                        mapEle.classList.add('show-map');
                      });
                    });
                    observer = new MutationObserver(function (mutations) {
                      mutations.forEach(function (mutation) {
                        if (mutation.attributeName === 'class') {
                          var el = mutation.target;
                          isDark = el.classList.contains('dark-theme');

                          if (map && isDark) {
                            map.setOptions({
                              styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"]
                            });
                          } else if (map) {
                            map.setOptions({
                              styles: []
                            });
                          }
                        }
                      });
                    });
                    observer.observe(appEl, {
                      attributes: true
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.scss */
      "./src/app/pages/map/map.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], MapPage);

    function getGoogleMaps(apiKey) {
      var win = window;
      var googleModule = win.google;

      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&v=3.31");
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = function () {
          var googleModule2 = win.google;

          if (googleModule2 && googleModule2.maps) {
            resolve(googleModule2.maps);
          } else {
            reject('google maps not available');
          }
        };
      });
    }
    /***/

  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Material Design\n */\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n.md ion-list {\n  background: inherit;\n}\n/*\n * iOS\n */\n.ios ion-list-header {\n  margin-top: 10px;\n}\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcc2NoZWR1bGUtZmlsdGVyXFxzY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0FDQUY7QURJQTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsK0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIE1hdGVyaWFsIERlc2lnblxyXG4gKi9cclxuXHJcbi5tZCBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLm1kIGlvbi1jaGVja2JveCB7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4ubWQgaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBpT1NcclxuICovXHJcblxyXG4uaW9zIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmlvcyBpb24tbGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuIiwiLypcbiAqIE1hdGVyaWFsIERlc2lnblxuICovXG4ubWQgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLypcbiAqIGlPU1xuICovXG4uaW9zIGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pb3MgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
    \**********************************************************/

  /*! exports provided: ScheduleFilterPage */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function () {
      return ScheduleFilterPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var ScheduleFilterPage =
    /*#__PURE__*/
    function () {
      function ScheduleFilterPage(confData, config, modalCtrl, navParams) {
        _classCallCheck(this, ScheduleFilterPage);

        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
      }

      _createClass(ScheduleFilterPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.ios = this.config.get('mode') === "ios"; // passed in array of track names that should be excluded (unchecked)

          var excludedTrackNames = this.navParams.get('excludedTracks');
          this.confData.getTracks().subscribe(function (tracks) {
            tracks.forEach(function (track) {
              _this2.tracks.push({
                name: track.name,
                icon: track.icon,
                isChecked: excludedTrackNames.indexOf(track.name) === -1
              });
            });
          });
        }
      }, {
        key: "selectAll",
        value: function selectAll(check) {
          // set all to checked or unchecked
          this.tracks.forEach(function (track) {
            track.isChecked = check;
          });
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          // Pass back a new array of track names to exclude
          var excludedTrackNames = this.tracks.filter(function (c) {
            return !c.isChecked;
          }).map(function (c) {
            return c.name;
          });
          this.dismiss(excludedTrackNames);
        }
      }, {
        key: "dismiss",
        value: function dismiss(data) {
          // using the injected ModalController this page
          // can "dismiss" itself and pass back data
          this.modalCtrl.dismiss(data);
        }
      }]);

      return ScheduleFilterPage;
    }();

    ScheduleFilterPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule-filter.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule-filter.scss */
      "./src/app/pages/schedule-filter/schedule-filter.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ScheduleFilterPage);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SchedulePageRoutingModule */

  /***/
  function srcAppPagesScheduleScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function () {
      return SchedulePageRoutingModule;
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


    var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: '',
      component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }];

    var SchedulePageRoutingModule = function SchedulePageRoutingModule() {
      _classCallCheck(this, SchedulePageRoutingModule);
    };

    SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SchedulePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/schedule/schedule.module.ts ***!
    \***************************************************/

  /*! exports provided: ScheduleModule */

  /***/
  function srcAppPagesScheduleScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleModule", function () {
      return ScheduleModule;
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


    var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule-routing.module */
    "./src/app/pages/schedule/schedule-routing.module.ts");

    var ScheduleModule = function ScheduleModule() {
      _classCallCheck(this, ScheduleModule);
    };

    ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]],
      declarations: [_schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"], _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]],
      entryComponents: [_schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]]
    })], ScheduleModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/schedule/schedule.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleScheduleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n * Material Design uses the ripple for activated\n * so only style the iOS activated background\n */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxzY2hlZHVsZVxcc2NoZWR1bGUuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUFBO0VBQ0Esc0RBQUE7RUFDQSx3REFBQTtFQUVBLDBDQUFBO0FDQUY7O0FER0E7OztFQUFBOztBQUlBO0VBQ0UsMERBQUE7QUNBRjs7QURpQkU7RUFDRSwrQ0FBQTtFQUNBLGtCQUFBO0FDZEo7O0FEWUU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FET0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDSko7O0FERUU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESEU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FEUkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDV0o7O0FEYkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDZ0JKOztBRGxCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNxQko7O0FEdkJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQzBCSjs7QUQ1QkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDK0JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2ZmZik7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xyXG5cclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbn1cclxuXHJcbi8qXHJcbiAqIE1hdGVyaWFsIERlc2lnbiB1c2VzIHRoZSByaXBwbGUgZm9yIGFjdGl2YXRlZFxyXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcclxuICovXHJcbi5pb3MgaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XHJcbn1cclxuXHJcbiRjYXRlZ29yaWVzOiAoXHJcbiAgaW9uaWM6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcclxuICBhbmd1bGFyOiAjYWMyODJiLFxyXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXHJcbiAgdG9vbGluZzogI2ZlNGM1MixcclxuICBzZXJ2aWNlczogI2ZkOGIyZCxcclxuICBkZXNpZ246ICNmZWQwMzUsXHJcbiAgd29ya3Nob3A6ICM2OWJiN2IsXHJcbiAgZm9vZDogIzNiYzdjNCxcclxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxyXG4gIG5hdmlnYXRpb246ICM2NjAwY2NcclxuKTtcclxuXHJcbkBlYWNoICR0cmFjaywgJHZhbHVlIGluIG1hcC1yZW1vdmUoJGNhdGVnb3JpZXMpIHtcclxuICBpb24taXRlbS1zbGlkaW5nW3RyYWNrPScjeyR0cmFja30nXSBpb24tbGFiZWwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNmZmYpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxuICovXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1pb25pY10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1hbmd1bGFyXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYzI4MmI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1jb21tdW5pY2F0aW9uXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM4ZThkOTM7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz10b29saW5nXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZTRjNTI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1zZXJ2aWNlc10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmQ4YjJkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZGVzaWduXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZWQwMzU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz13b3Jrc2hvcF0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjliYjdiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Zm9vZF0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjM2JjN2M0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZG9jdW1lbnRhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYjE2YmUzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9bmF2aWdhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjYwMGNjO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/schedule/schedule.ts ***!
    \********************************************/

  /*! exports provided: SchedulePage */

  /***/
  function srcAppPagesScheduleScheduleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePage", function () {
      return SchedulePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SchedulePage =
    /*#__PURE__*/
    function () {
      function SchedulePage(alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
        _classCallCheck(this, SchedulePage);

        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
      }

      _createClass(SchedulePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSchedule();
          this.ios = this.config.get('mode') === 'ios';
        }
      }, {
        key: "updateSchedule",
        value: function updateSchedule() {
          var _this3 = this;

          // Close any open sliding items when the schedule updates
          if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
          }

          this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this3.shownSessions = data.shownSessions;
            _this3.groups = data.groups;
          });
        }
      }, {
        key: "presentFilter",
        value: function presentFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__["ScheduleFilterPage"],
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl,
                      componentProps: {
                        excludedTracks: this.excludeTracks
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    _context2.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _ref = _context2.sent;
                    data = _ref.data;

                    if (data) {
                      this.excludeTracks = data;
                      this.updateSchedule();
                    }

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(slidingItem, sessionData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.user.hasFavorite(sessionData.name)) {
                      _context3.next = 4;
                      break;
                    }

                    // Prompt to remove favorite
                    this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
                    _context3.next = 11;
                    break;

                  case 4:
                    // Add as a favorite
                    this.user.addFavorite(sessionData.name); // Close the open item

                    slidingItem.close(); // Create a toast

                    _context3.next = 8;
                    return this.toastCtrl.create({
                      header: "".concat(sessionData.name, " was successfully added as a favorite."),
                      duration: 3000,
                      buttons: [{
                        text: 'Close',
                        role: 'cancel'
                      }]
                    });

                  case 8:
                    toast = _context3.sent;
                    _context3.next = 11;
                    return toast.present();

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(slidingItem, sessionData, title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: 'Would you like to remove this session from your favorites?',
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler() {
                          // they clicked the cancel button, do not remove the session
                          // close the sliding item and hide the option buttons
                          slidingItem.close();
                        }
                      }, {
                        text: 'Remove',
                        handler: function handler() {
                          // they want to remove this session from their favorites
                          _this4.user.removeFavorite(sessionData.name);

                          _this4.updateSchedule(); // close the sliding item and hide the option buttons


                          slidingItem.close();
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openSocial",
        value: function openSocial(network, fab) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingCtrl.create({
                      message: "Posting to ".concat(network),
                      duration: Math.random() * 1000 + 500
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    _context5.next = 7;
                    return loading.onWillDismiss();

                  case 7:
                    fab.close();

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SchedulePage;
    }();

    SchedulePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleList', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.scss */
      "./src/app/pages/schedule/schedule.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]])], SchedulePage);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SessionDetailPageRoutingModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function () {
      return SessionDetailPageRoutingModule;
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


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");

    var routes = [{
      path: '',
      component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }];

    var SessionDetailPageRoutingModule = function SessionDetailPageRoutingModule() {
      _classCallCheck(this, SessionDetailPageRoutingModule);
    };

    SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SessionDetailModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function () {
      return SessionDetailModule;
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


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");
    /* harmony import */


    var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session-detail-routing.module */
    "./src/app/pages/session-detail/session-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SessionDetailModule = function SessionDetailModule() {
      _classCallCheck(this, SessionDetailModule);
    };

    SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]],
      declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]]
    })], SessionDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionDetailSessionDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n/* Favorite Icon\n * --------------------------------------------------------\n */\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty,\n.icon-heart {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.icon-heart-empty {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.icon-heart {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nh1 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxzZXNzaW9uLWRldGFpbFxcc2Vzc2lvbi1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUE7O0VBQUE7O0FBSUE7RUFDRSxrQkFBQTtBQ0FGOztBREdBOztFQUVFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBRUEsUUFBQTtFQUNBLFVBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFFQSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSw4REFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsU0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXNzaW9uLXRyYWNrLWlvbmljIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFuZ3VsYXIpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1jb21tdW5pY2F0aW9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbW11bmljYXRpb24pO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay10b29saW5nIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZXJ2aWNlcyk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWRlc2lnbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZXNpZ24pO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay13b3Jrc2hvcCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vZCk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWRvY3VtZW50YXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLW5hdmlnYXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XHJcbn1cclxuXHJcbi8qIEZhdm9yaXRlIEljb25cclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uc2hvdy1mYXZvcml0ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaWNvbi1oZWFydC1lbXB0eSxcclxuLmljb24taGVhcnQge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcblxyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLmljb24taGVhcnQtZW1wdHkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5pY29uLWhlYXJ0IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcblxyXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDA7XHJcbn0iLCIuc2Vzc2lvbi10cmFjay1pb25pYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWFuZ3VsYXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFuZ3VsYXIpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1jb21tdW5pY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stdG9vbGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9vbGluZyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXNlcnZpY2VzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZXJ2aWNlcyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRlc2lnbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVzaWduKTtcbn1cblxuLnNlc3Npb24tdHJhY2std29ya3Nob3Age1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdvcmtzaG9wKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZm9vZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vZCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRvY3VtZW50YXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay1uYXZpZ2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXZpZ2F0aW9uKTtcbn1cblxuLyogRmF2b3JpdGUgSWNvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLnNob3ctZmF2b3JpdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5LFxuLmljb24taGVhcnQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydC1lbXB0eSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.ts ***!
    \********************************************************/

  /*! exports provided: SessionDetailPage */

  /***/
  function srcAppPagesSessionDetailSessionDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function () {
      return SessionDetailPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SessionDetailPage =
    /*#__PURE__*/
    function () {
      function SessionDetailPage(dataProvider, userProvider, route) {
        _classCallCheck(this, SessionDetailPage);

        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
      }

      _createClass(SessionDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          this.dataProvider.load().subscribe(function (data) {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
              var sessionId = _this5.route.snapshot.paramMap.get('sessionId');

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data.schedule[0].groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var group = _step.value;

                  if (group && group.sessions) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      for (var _iterator2 = group.sessions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var session = _step2.value;

                        if (session && session.id === sessionId) {
                          _this5.session = session;
                          _this5.isFavorite = _this5.userProvider.hasFavorite(_this5.session.name);
                          break;
                        }
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.defaultHref = "/app/tabs/schedule";
        }
      }, {
        key: "sessionClick",
        value: function sessionClick(item) {
          console.log('Clicked', item);
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
          } else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
          }
        }
      }, {
        key: "shareSession",
        value: function shareSession() {
          console.log('Clicked share session');
        }
      }]);

      return SessionDetailPage;
    }();

    SessionDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-session-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./session-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./session-detail.scss */
      "./src/app/pages/session-detail/session-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SessionDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SpeakerDetailPageRoutingModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function () {
      return SpeakerDetailPageRoutingModule;
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


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");

    var routes = [{
      path: '',
      component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
    }];

    var SpeakerDetailPageRoutingModule = function SpeakerDetailPageRoutingModule() {
      _classCallCheck(this, SpeakerDetailPageRoutingModule);
    };

    SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SpeakerDetailModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function () {
      return SpeakerDetailModule;
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


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");
    /* harmony import */


    var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-detail-routing.module */
    "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SpeakerDetailModule = function SpeakerDetailModule() {
      _classCallCheck(this, SpeakerDetailModule);
    };

    SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]],
      declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]]
    })], SpeakerDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Speaker Background\n */\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n.speaker-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n/*\n * Speaker Details\n */\n.speaker-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxzcGVha2VyLWRldGFpbFxcc3BlYWtlci1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUlBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNGRjtBREtBOzs7RUFHRSxjQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBRUEscUNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUVBLDhDQUFBO0VBRUEsMEVBQUE7QUNSRjtBRFdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUNSRjtBRFdBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBRUEsWUFBQTtBQ1ZGO0FEYUE7RUFDRSx5SEFBQTtBQ1ZGO0FEYUE7RUFDRSw0Q0FBQTtBQ1ZGO0FEYUE7O0VBQUE7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLDhDQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogU3BlYWtlciBCYWNrZ3JvdW5kXHJcbiAqL1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIGlvbi1idXR0b24sXHJcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwZWFrZXItYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBoZWlnaHQ6IGNhbGMoMjUwcHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGltZyB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xyXG59XHJcblxyXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGgyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJvdHRvbTogMTBweDtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWQgLnNwZWFrZXItYmFja2dyb3VuZCB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcclxufVxyXG5cclxuLmlvcyAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggMTZweDtcclxufVxyXG5cclxuLypcclxuICogU3BlYWtlciBEZXRhaWxzXHJcbiAqL1xyXG5cclxuLnNwZWFrZXItZGV0YWlsIHAge1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5zcGVha2VyLWRldGFpbCBociB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcbiIsIi8qXG4gKiBTcGVha2VyIEJhY2tncm91bmRcbiAqL1xuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGNhbGMoMjUwcHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY292ZXIgdXJsKC9hc3NldHMvaW1nL3NwZWFrZXItYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdDtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZCAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcbn1cblxuLmlvcyAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XG59XG5cbi8qXG4gKiBTcGVha2VyIERldGFpbHNcbiAqL1xuLnNwZWFrZXItZGV0YWlsIHAge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnNwZWFrZXItZGV0YWlsIGhyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
    \********************************************************/

  /*! exports provided: SpeakerDetailPage */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function () {
      return SpeakerDetailPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var SpeakerDetailPage =
    /*#__PURE__*/
    function () {
      function SpeakerDetailPage(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
        _classCallCheck(this, SpeakerDetailPage);

        this.dataProvider = dataProvider;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
      }

      _createClass(SpeakerDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this6 = this;

          this.dataProvider.load().subscribe(function (data) {
            var speakerId = _this6.route.snapshot.paramMap.get('speakerId');

            if (data && data.speakers) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = data.speakers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var speaker = _step3.value;

                  if (speaker && speaker.id === speakerId) {
                    _this6.speaker = speaker;
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "openExternalUrl",
        value: function openExternalUrl(url) {
          this.inAppBrowser.create(url, '_blank');
        }
      }, {
        key: "openSpeakerShare",
        value: function openSpeakerShare(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Share ' + speaker.name,
                      buttons: [{
                        text: 'Copy Link',
                        handler: function handler() {
                          console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);

                          if (window.cordova && window.cordova.plugins.clipboard) {
                            window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                          }
                        }
                      }, {
                        text: 'Share via ...'
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context6.sent;
                    _context6.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openContact",
        value: function openContact(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var mode, actionSheet;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    mode = 'ios'; // this.config.get('mode');

                    _context7.next = 3;
                    return this.actionSheetCtrl.create({
                      header: 'Contact ' + speaker.name,
                      buttons: [{
                        text: "Email ( ".concat(speaker.email, " )"),
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: function handler() {
                          window.open('mailto:' + speaker.email);
                        }
                      }, {
                        text: "Call ( ".concat(speaker.phone, " )"),
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: function handler() {
                          window.open('tel:' + speaker.phone);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    actionSheet = _context7.sent;
                    _context7.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return SpeakerDetailPage;
    }();

    SpeakerDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
      }];
    };

    SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-detail.scss */
      "./src/app/pages/speaker-detail/speaker-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])], SpeakerDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SpeakerListPageRoutingModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function () {
      return SpeakerListPageRoutingModule;
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


    var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");

    var routes = [{
      path: '',
      component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]
    }];

    var SpeakerListPageRoutingModule = function SpeakerListPageRoutingModule() {
      _classCallCheck(this, SpeakerListPageRoutingModule);
    };

    SpeakerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: SpeakerListModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function () {
      return SpeakerListModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");
    /* harmony import */


    var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./speaker-list-routing.module */
    "./src/app/pages/speaker-list/speaker-list-routing.module.ts");

    var SpeakerListModule = function SpeakerListModule() {
      _classCallCheck(this, SpeakerListModule);
    };

    SpeakerListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerListPageRoutingModule"]],
      declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"]]
    })], SpeakerListModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerListSpeakerListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".speaker-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n/* Due to the fact the cards are inside of columns the margins don't overlap\n * properly so we want to remove the extra margin between cards\n */\n\nion-col:not(:last-of-type) .speaker-card {\n  margin-bottom: 0;\n}\n\n.speaker-card .speaker-item {\n  --min-height: 85px;\n}\n\n.speaker-card .speaker-item h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card .speaker-item p {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L0U6XFxnaXRodWJwcm9qZWN0XFxhcmloYW50L3NyY1xcYXBwXFxwYWdlc1xcc3BlYWtlci1saXN0XFxzcGVha2VyLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FERUE7O0VBQUE7O0FBR0E7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUVBLFVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSx3REFBQTtFQUVBLFVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVha2VyLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogRHVlIHRvIHRoZSBmYWN0IHRoZSBjYXJkcyBhcmUgaW5zaWRlIG9mIGNvbHVtbnMgdGhlIG1hcmdpbnMgZG9uJ3Qgb3ZlcmxhcFxyXG4gKiBwcm9wZXJseSBzbyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZXh0cmEgbWFyZ2luIGJldHdlZW4gY2FyZHNcclxuICovXHJcbmlvbi1jb2w6bm90KDpsYXN0LW9mLXR5cGUpIC5zcGVha2VyLWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSB7XHJcbiAgLS1taW4taGVpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gaDIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxufVxyXG5cclxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pb3MgaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tZCBpb24tbGlzdCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcbn0iLCIuc3BlYWtlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogRHVlIHRvIHRoZSBmYWN0IHRoZSBjYXJkcyBhcmUgaW5zaWRlIG9mIGNvbHVtbnMgdGhlIG1hcmdpbnMgZG9uJ3Qgb3ZlcmxhcFxuICogcHJvcGVybHkgc28gd2Ugd2FudCB0byByZW1vdmUgdGhlIGV4dHJhIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXG4gKi9cbmlvbi1jb2w6bm90KDpsYXN0LW9mLXR5cGUpIC5zcGVha2VyLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDg1cHg7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pb3MgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWQgaW9uLWxpc3Qge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgcGFkZGluZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
    \****************************************************/

  /*! exports provided: SpeakerListPage */

  /***/
  function srcAppPagesSpeakerListSpeakerListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function () {
      return SpeakerListPage;
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


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var SpeakerListPage =
    /*#__PURE__*/
    function () {
      function SpeakerListPage(confData) {
        _classCallCheck(this, SpeakerListPage);

        this.confData = confData;
        this.speakers = [];
      }

      _createClass(SpeakerListPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this7 = this;

          this.confData.getSpeakers().subscribe(function (speakers) {
            _this7.speakers = speakers;
          });
        }
      }]);

      return SpeakerListPage;
    }();

    SpeakerListPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }];
    };

    SpeakerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-list.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-list.scss */
      "./src/app/pages/speaker-list/speaker-list.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]])], SpeakerListPage);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsPageTabsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule/schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'schedule',
        children: [{
          path: '',
          component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"]
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }]
      }, {
        path: 'speakers',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-list/speaker-list.module */
            "./src/app/pages/speaker-list/speaker-list.module.ts")).then(function (m) {
              return m.SpeakerListModule;
            });
          }
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }, {
          path: 'speaker-details/:speakerId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-detail/speaker-detail.module */
            "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(function (m) {
              return m.SpeakerDetailModule;
            });
          }
        }]
      }, {
        path: 'map',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../map/map.module */
            "./src/app/pages/map/map.module.ts")).then(function (m) {
              return m.MapModule;
            });
          }
        }]
      }, {
        path: 'about',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../about/about.module */
            "./src/app/pages/about/about.module.ts")).then(function (m) {
              return m.AboutModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: TabsModule */

  /***/
  function srcAppPagesTabsPageTabsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
      return TabsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-page-routing.module */
    "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about/about.module */
    "./src/app/pages/about/about.module.ts");
    /* harmony import */


    var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../map/map.module */
    "./src/app/pages/map/map.module.ts");
    /* harmony import */


    var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../schedule/schedule.module */
    "./src/app/pages/schedule/schedule.module.ts");
    /* harmony import */


    var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../session-detail/session-detail.module */
    "./src/app/pages/session-detail/session-detail.module.ts");
    /* harmony import */


    var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../speaker-detail/speaker-detail.module */
    "./src/app/pages/speaker-detail/speaker-detail.module.ts");
    /* harmony import */


    var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../speaker-list/speaker-list.module */
    "./src/app/pages/speaker-list/speaker-list.module.ts");

    var TabsModule = function TabsModule() {
      _classCallCheck(this, TabsModule);
    };

    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"], _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"], _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"], _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerDetailModule"], _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__["SpeakerListModule"], _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"]]
    })], TabsModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
    \**********************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsPageTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs-page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    })], TabsPage);
    /***/
  },

  /***/
  "./src/app/providers/conference-data.ts":
  /*!**********************************************!*\
    !*** ./src/app/providers/conference-data.ts ***!
    \**********************************************/

  /*! exports provided: ConferenceData */

  /***/
  function srcAppProvidersConferenceDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceData", function () {
      return ConferenceData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-data */
    "./src/app/providers/user-data.ts");

    var ConferenceData =
    /*#__PURE__*/
    function () {
      function ConferenceData(http, user) {
        _classCallCheck(this, ConferenceData);

        this.http = http;
        this.user = user;
      }

      _createClass(ConferenceData, [{
        key: "load",
        value: function load() {
          if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
          } else {
            return this.http.get('assets/data/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
          }
        }
      }, {
        key: "processData",
        value: function processData(data) {
          var _this8 = this;

          // just some good 'ol JS fun with objects and arrays
          // build up the data by linking speakers to sessions
          this.data = data; // loop through each day in the schedule

          this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
              // loop through each session in the timeline group
              group.sessions.forEach(function (session) {
                session.speakers = [];

                if (session.speakerNames) {
                  session.speakerNames.forEach(function (speakerName) {
                    var speaker = _this8.data.speakers.find(function (s) {
                      return s.name === speakerName;
                    });

                    if (speaker) {
                      session.speakers.push(speaker);
                      speaker.sessions = speaker.sessions || [];
                      speaker.sessions.push(session);
                    }
                  });
                }
              });
            });
          });
          return this.data;
        }
      }, {
        key: "getTimeline",
        value: function getTimeline(dayIndex) {
          var _this9 = this;

          var queryText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var excludeTracks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) {
              return !!w.trim().length;
            });
            day.groups.forEach(function (group) {
              group.hide = true;
              group.sessions.forEach(function (session) {
                // check if this session should show or not
                _this9.filterSession(session, queryWords, excludeTracks, segment);

                if (!session.hide) {
                  // if this session is not hidden then this group should show
                  group.hide = false;
                  day.shownSessions++;
                }
              });
            });
            return day;
          }));
        }
      }, {
        key: "filterSession",
        value: function filterSession(session, queryWords, excludeTracks, segment) {
          var matchesQueryText = false;

          if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
              if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                matchesQueryText = true;
              }
            });
          } else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
          } // if any of the sessions tracks are not in the
          // exclude tracks then this session passes the track test


          var matchesTracks = false;
          session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
              matchesTracks = true;
            }
          }); // if the segment is 'favorites', but session is not a user favorite
          // then this session does not pass the segment test

          var matchesSegment = false;

          if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
              matchesSegment = true;
            }
          } else {
            matchesSegment = true;
          } // all tests must be true if it should not be hidden


          session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
        }
      }, {
        key: "getSpeakers",
        value: function getSpeakers() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.speakers.sort(function (a, b) {
              var aName = a.name.split(' ').pop();
              var bName = b.name.split(' ').pop();
              return aName.localeCompare(bName);
            });
          }));
        }
      }, {
        key: "getTracks",
        value: function getTracks() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.tracks.sort();
          }));
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.map;
          }));
        }
      }]);

      return ConferenceData;
    }();

    ConferenceData.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }];
    };

    ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], ConferenceData);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map