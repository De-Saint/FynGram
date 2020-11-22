(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-header>\n        <ion-toolbar color=\"mytheme\">\n          <ion-row class=\"ion-padding-horizontal ion-align-items-center\">\n            <ion-col size=\"4\" class=\"ion-padding-vertical ion-align-items-center\">\n              <img src=\"/assets/icon/logo.png\">\n            </ion-col>\n            <ion-col class=\"ion-padding-vertical ion-align-items-center\">\n              <div class=\"ion-margin-vertical\" *ngIf=\"userType === 'Guest'\">\n                <h4 class=\"medium white ion-no-margin ion-margin-start\"><strong>Guest</strong></h4>\n                <ion-menu-toggle autoHide=\"false\">\n                  <a routerLink=\"/support\" class=\"small white ion-no-margin ion-margin-start\" routerLinkActive=\"active\"\n                    routerDirection=\"root\" detail=\"false\">Create An Account</a>\n                </ion-menu-toggle>\n                <h6 class=\"small white ion-no-margin ion-margin-start\">{{version}}</h6>\n              </div>\n              <div class=\"ion-margin-vertical\" *ngIf=\"userType === 'Admin'\">\n                <h4 class=\"medium white ion-no-margin ion-margin-start\"><strong>{{userName}}</strong></h4>\n                <h6 class=\"small white ion-no-margin ion-margin-start\">Admin</h6>\n                <h6 class=\"small white ion-no-margin ion-margin-start\">{{version}}</h6>\n              </div>\n              <div class=\"ion-margin-vertical\" *ngIf=\"userType === 'Seller'\">\n                <h4 class=\"medium white ion-no-margin ion-margin-start\"><strong>{{userName}}</strong></h4>\n                <h6 class=\"small white ion-no-margin ion-margin-start\">Seller</h6>\n                <h6 class=\"small white ion-no-margin ion-margin-start\">{{version}}</h6>\n              </div>\n              <div class=\"ion-margin-vertical\" *ngIf=\"userType === 'Customer'\">\n                <h4 class=\"medium white ion-no-margin ion-margin-start\"><strong>{{userName}}</strong></h4>\n                <h6 class=\"small white ion-no-margin ion-margin-start\">Customer</h6>\n                <h6 class=\"small white ion-no-margin ion-margin-start\">{{version}}</h6>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list *ngIf=\"loggedIn\" lines=\"none\">\n          <ion-list-header>\n            Shop & Account\n          </ion-list-header>\n          <div *ngIf=\"userType === 'Admin'\">\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of adminPages; let i = index\">\n              <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </div>\n          <div *ngIf=\"userType === 'Customer'\">\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of customerPages; let i = index\">\n              <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </div>\n          <div *ngIf=\"userType === 'Seller'\">\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of sellerPages; let i = index\">\n              <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </div>\n          <ion-menu-toggle autoHide=\"false\" *ngIf=\"userType !== 'Guest'\">\n            <ion-item button (click)=\"logout()\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n              <ion-label>\n                LogOut\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n\n        <ion-list *ngIf=\"!loggedIn\" lines=\"none\">\n          <ion-list-header>\n            Account\n          </ion-list-header>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list lines=\"none\">\n          <ion-list-header>\n            Theme\n          </ion-list-header>\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <ion-label>\n              Dark Mode\n            </ion-label>\n            <ion-toggle (ionChange)=\"updateDarkMode($event)\" color=\"mytheme\" slot=\"end\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'authenticate',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | authenticate-authenticate-module */
          [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("authenticate-authenticate-module")]).then(__webpack_require__.bind(null,
          /*! ./authenticate/authenticate.module */
          "./src/app/authenticate/authenticate.module.ts")).then(function (m) {
            return m.AuthenticatePageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | cart-cart-module */
          [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null,
          /*! ./cart/cart.module */
          "./src/app/cart/cart.module.ts")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'search',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | search-search-module */
            [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null,
            /*! ./search/search.module */
            "./src/app/search/search.module.ts")).then(function (m) {
              return m.SearchPageModule;
            });
          }
        }, {
          path: 'products',
          children: [{
            path: 'details/:productId',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | home-category-products-details-details-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852"), __webpack_require__.e("category-products-details-details-module")]).then(__webpack_require__.bind(null,
              /*! ./home/category/products/details/details.module */
              "./src/app/home/category/products/details/details.module.ts")).then(function (m) {
                return m.DetailsPageModule;
              });
            }
          }]
        }]
      }, {
        path: 'customeraccounts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customeraccounts-customeraccounts-module */
          "customeraccounts-customeraccounts-module").then(__webpack_require__.bind(null,
          /*! ./customeraccounts/customeraccounts.module */
          "./src/app/customeraccounts/customeraccounts.module.ts")).then(function (m) {
            return m.CustomeraccountsPageModule;
          });
        }
      }, {
        path: 'customerprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customerprofile-customerprofile-module */
          "customerprofile-customerprofile-module").then(__webpack_require__.bind(null,
          /*! ./customerprofile/customerprofile.module */
          "./src/app/customerprofile/customerprofile.module.ts")).then(function (m) {
            return m.CustomerprofilePageModule;
          });
        }
      }, {
        path: 'customerorders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customerorders-customerorders-module */
          "customerorders-customerorders-module").then(__webpack_require__.bind(null,
          /*! ./customerorders/customerorders.module */
          "./src/app/customerorders/customerorders.module.ts")).then(function (m) {
            return m.CustomerordersPageModule;
          });
        }
      }, {
        path: 'admindashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admindashboard-admindashboard-module */
          "admindashboard-admindashboard-module").then(__webpack_require__.bind(null,
          /*! ./admindashboard/admindashboard.module */
          "./src/app/admindashboard/admindashboard.module.ts")).then(function (m) {
            return m.AdmindashboardPageModule;
          });
        }
      }, {
        path: 'admininventory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admininventory-admininventory-module */
          "admininventory-admininventory-module").then(__webpack_require__.bind(null,
          /*! ./admininventory/admininventory.module */
          "./src/app/admininventory/admininventory.module.ts")).then(function (m) {
            return m.AdmininventoryPageModule;
          });
        }
      }, {
        path: 'adminusers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | adminusers-adminusers-module */
          "adminusers-adminusers-module").then(__webpack_require__.bind(null,
          /*! ./adminusers/adminusers.module */
          "./src/app/adminusers/adminusers.module.ts")).then(function (m) {
            return m.AdminusersPageModule;
          });
        }
      }, {
        path: 'adminaccounts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | adminaccounts-adminaccounts-module */
          "adminaccounts-adminaccounts-module").then(__webpack_require__.bind(null,
          /*! ./adminaccounts/adminaccounts.module */
          "./src/app/adminaccounts/adminaccounts.module.ts")).then(function (m) {
            return m.AdminaccountsPageModule;
          });
        }
      }, {
        path: 'adminprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | adminprofile-adminprofile-module */
          "adminprofile-adminprofile-module").then(__webpack_require__.bind(null,
          /*! ./adminprofile/adminprofile.module */
          "./src/app/adminprofile/adminprofile.module.ts")).then(function (m) {
            return m.AdminprofilePageModule;
          });
        }
      }, {
        path: 'sellersaccounts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sellersaccounts-sellersaccounts-module */
          "sellersaccounts-sellersaccounts-module").then(__webpack_require__.bind(null,
          /*! ./sellersaccounts/sellersaccounts.module */
          "./src/app/sellersaccounts/sellersaccounts.module.ts")).then(function (m) {
            return m.SellersaccountsPageModule;
          });
        }
      }, {
        path: 'sellersprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sellersprofile-sellersprofile-module */
          "sellersprofile-sellersprofile-module").then(__webpack_require__.bind(null,
          /*! ./sellersprofile/sellersprofile.module */
          "./src/app/sellersprofile/sellersprofile.module.ts")).then(function (m) {
            return m.SellersprofilePageModule;
          });
        }
      }, {
        path: 'sellersdashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sellersdashboard-sellersdashboard-module */
          "sellersdashboard-sellersdashboard-module").then(__webpack_require__.bind(null,
          /*! ./sellersdashboard/sellersdashboard.module */
          "./src/app/sellersdashboard/sellersdashboard.module.ts")).then(function (m) {
            return m.SellersdashboardPageModule;
          });
        }
      }, {
        path: 'sellersinventory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sellersinventory-sellersinventory-module */
          "sellersinventory-sellersinventory-module").then(__webpack_require__.bind(null,
          /*! ./sellersinventory/sellersinventory.module */
          "./src/app/sellersinventory/sellersinventory.module.ts")).then(function (m) {
            return m.SellersinventoryPageModule;
          });
        }
      }, {
        path: 'sellerswallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sellerswallet-sellerswallet-module */
          "sellerswallet-sellerswallet-module").then(__webpack_require__.bind(null,
          /*! ./sellerswallet/sellerswallet.module */
          "./src/app/sellerswallet/sellerswallet.module.ts")).then(function (m) {
            return m.SellerswalletPageModule;
          });
        }
      }, {
        path: 'adminwallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | adminwallet-adminwallet-module */
          "adminwallet-adminwallet-module").then(__webpack_require__.bind(null,
          /*! ./adminwallet/adminwallet.module */
          "./src/app/adminwallet/adminwallet.module.ts")).then(function (m) {
            return m.AdminwalletPageModule;
          });
        }
      }, {
        path: 'admincategory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admincategory-admincategory-module */
          "admincategory-admincategory-module").then(__webpack_require__.bind(null,
          /*! ./admincategory/admincategory.module */
          "./src/app/admincategory/admincategory.module.ts")).then(function (m) {
            return m.AdmincategoryPageModule;
          });
        }
      }, {
        path: 'customerwallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customerwallet-customerwallet-module */
          "customerwallet-customerwallet-module").then(__webpack_require__.bind(null,
          /*! ./customerwallet/customerwallet.module */
          "./src/app/customerwallet/customerwallet.module.ts")).then(function (m) {
            return m.CustomerwalletPageModule;
          });
        }
      }, {
        path: 'checkout',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | checkout-checkout-module */
          [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852"), __webpack_require__.e("default~checkout-checkout-module~fynpay-new-new-module"), __webpack_require__.e("checkout-checkout-module")]).then(__webpack_require__.bind(null,
          /*! ./checkout/checkout.module */
          "./src/app/checkout/checkout.module.ts")).then(function (m) {
            return m.CheckoutPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-mytheme-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-mytheme);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #333;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 0 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-mytheme);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-mytheme);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW15dGhlbWUtcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzMzMztcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"],
          Storage = _capacitor_core__WEBP.Storage,
          StatusBar = _capacitor_core__WEBP.StatusBar,
          SplashScreen = _capacitor_core__WEBP.SplashScreen;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, renderer, router, appVersion, authService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.renderer = renderer;
          this.router = router;
          this.appVersion = appVersion;
          this.authService = authService;
          this.selectedIndex = 0;
          this.loggedIn = false;
          this.userType = 'Guest';
          this.HAS_LOGGED_IN = 'hasLoggedIn';
          this.isStatusBarLight = true;
          this.appPages = [{
            title: 'Buy',
            url: '/home/tabs/buy',
            icon: 'basket'
          }, {
            title: 'Search',
            url: '/search',
            icon: 'search'
          }, {
            title: 'Cart',
            url: '/cart',
            icon: 'cart'
          }, {
            title: 'Login',
            url: '/authenticate',
            icon: 'log-in'
          }, {
            title: 'Register',
            url: '/authenticate/register',
            icon: 'person-add'
          }];
          this.sellerPages = [{
            title: 'Dashboard',
            url: '/sellersdashboard',
            icon: 'home'
          }, {
            title: 'Profile',
            url: '/sellersprofile/tabs/profile',
            icon: 'person-circle'
          }, {
            title: 'FynPay',
            url: '/sellerswallet/tabs/fynpay',
            icon: 'wallet'
          }, {
            title: 'Accounts',
            url: '/sellersaccounts/tabs/transactions',
            icon: 'cash'
          }, {
            title: 'Inventory',
            url: '/sellersinventory/tabs/products',
            icon: 'bag-add'
          }];
          this.adminPages = [{
            title: 'Dashboard',
            url: '/admindashboard',
            icon: 'home'
          }, {
            title: 'Profile',
            url: '/adminprofile/tabs/profile',
            icon: 'person-circle'
          }, {
            title: 'FynPay',
            url: '/adminwallet/tabs/fynpay',
            icon: 'wallet'
          }, {
            title: 'Accounts',
            url: '/adminaccounts/tabs/transactions',
            icon: 'cash'
          }, {
            title: 'Users',
            url: '/adminusers/tabs/sellers',
            icon: 'people-circle'
          }, {
            title: 'Inventory',
            url: '/admininventory/tabs/products',
            icon: 'bag-add'
          }, {
            title: 'Categories',
            url: '/admincategory/tabs/categories',
            icon: 'apps'
          }];
          this.customerPages = [{
            title: 'Buy',
            url: '/home/tabs/buy',
            icon: 'basket'
          }, {
            title: 'Search',
            url: '/search',
            icon: 'search'
          }, {
            title: 'Cart',
            url: '/cart',
            icon: 'cart'
          }, {
            title: 'Profile',
            url: '/customerprofile/tabs/profile',
            icon: 'person-circle'
          }, {
            title: 'FynPay',
            url: '/customerwallet/tabs/fynpay',
            icon: 'wallet'
          }, {
            title: 'Accounts',
            url: '/customeraccounts/tabs/transactions',
            icon: 'cash'
          }, {
            title: 'Orders',
            url: '/customerorders/tabs/orders',
            icon: 'cart'
          }, {
            title: 'WishList',
            url: '/customerorders/tabs/wishlist',
            icon: 'heart-circle'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.updateAppVersion();

              _this.changeStatusBar();

              _this.hideSplash();
            });
          }
        }, {
          key: "updateAppVersion",
          value: function updateAppVersion() {
            var _this2 = this;

            this.appVersion.getVersionNumber().then(function (version) {
              _this2.version = version;
            })["catch"](function () {});
          }
        }, {
          key: "changeStatusBar",
          value: function changeStatusBar() {
            StatusBar.show();
            StatusBar.setStyle({
              style: this.isStatusBarLight ? _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["StatusBarStyle"].Dark : _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["StatusBarStyle"].Light
            });
            this.isStatusBarLight = !this.isStatusBarLight; // Display content under transparent status bar (Android only)

            StatusBar.setOverlaysWebView({
              overlay: false
            });
            StatusBar.setBackgroundColor({
              color: "#40A944"
            });
          }
        }, {
          key: "hideSplash",
          value: function hideSplash() {
            SplashScreen.hide();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLoginStatus();
            this.listenToEvents();
          }
        }, {
          key: "updateLoggedInStatus",
          value: function updateLoggedInStatus(loggedIn, userType) {
            var _this3 = this;

            setTimeout(function () {
              _this3.loggedIn = loggedIn;
              _this3.userType = userType;
            }, 300);
          }
        }, {
          key: "checkLoginStatus",
          value: function checkLoginStatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _yield$Storage$get, value;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Storage.get({
                        key: this.HAS_LOGGED_IN
                      });

                    case 2:
                      _yield$Storage$get = _context.sent;
                      value = _yield$Storage$get.value;

                      if (value === 'true') {
                        if (this.authService.currentUserDataValue) {
                          this.userName = this.authService.currentUserDataValue.name;
                          this.userType = this.authService.currentUserDataValue.usertype;
                          this.updateLoggedInStatus(true, this.userType);
                        }
                      } else {
                        this.router.navigateByUrl('/home/tabs/buy');
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "listenToEvents",
          value: function listenToEvents() {
            var _this4 = this;

            window.addEventListener('user:login', function (e) {
              _this4.userName = e.detail.name;

              _this4.updateLoggedInStatus(true, e.detail.type);
            });
            window.addEventListener('user:guest', function (e) {
              _this4.updateLoggedInStatus(false, 'Guest');
            });
            window.addEventListener('user:logout', function () {
              _this4.updateLoggedInStatus(false, 'Guest');
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            this.authService.logout().then(function () {
              return _this5.router.navigateByUrl('/authenticate');
            });
          }
        }, {
          key: "updateDarkMode",
          value: function updateDarkMode(event) {
            if (event.detail.checked) {
              this.renderer.setAttribute(document.body, 'color-theme', 'dark');
            } else {
              this.renderer.setAttribute(document.body, 'color-theme', 'light');
            }
          }
        }, {
          key: "onRegister",
          value: function onRegister() {
            this.router.navigateByUrl('/authenticate/register');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_4__["AppVersion"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var angular4_paystack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular4-paystack */
      "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angular4_paystack__WEBPACK_IMPORTED_MODULE_13__["Angular4PaystackModule"].forRoot(''), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/authenticate/service/auth-service.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/authenticate/service/auth-service.service.ts ***!
      \**************************************************************/

    /*! exports provided: AuthServiceService */

    /***/
    function srcAppAuthenticateServiceAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthServiceService", function () {
        return AuthServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Storage;

      var AuthServiceService = /*#__PURE__*/function () {
        function AuthServiceService(nativeHttp, platform, http) {
          _classCallCheck(this, AuthServiceService);

          this.nativeHttp = nativeHttp;
          this.platform = platform;
          this.http = http;
          this.HAS_VISITED = 'hasVisited';
          this.currentUserDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('userData')));
          this.currentUserData = this.currentUserDataSubject.asObservable();
        }

        _createClass(AuthServiceService, [{
          key: "login",
          value: function login(emailphone, password, oldsid) {
            var _this6 = this;

            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';
            var type = 'Login';

            if (this.platform.is('android')) {
              var data = {
                emailphone: emailphone,
                password: password,
                oldsid: oldsid,
                type: type
              };
              this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
              this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
              this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
              this.nativeHttp.setDataSerializer('json');
              this.nativeHttp.setServerTrustMode('nocheck');
              var nativeCall = this.nativeHttp.post(url, data, {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
                var res = JSON.parse(result.data);
                sessionStorage.setItem('userData', JSON.stringify(res.data));

                _this6.currentUserDataSubject.next(res.data);

                return JSON.parse(result.data);
              }));
            } else {
              var _data = JSON.stringify({
                emailphone: emailphone,
                password: password,
                oldsid: oldsid,
                type: type
              });

              return this.http.post(url, _data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                if (res.code === 200) {
                  sessionStorage.setItem('userData', JSON.stringify(res.data));

                  _this6.currentUserDataSubject.next(res.data);
                }

                return res;
              }));
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this7 = this;

            return Storage.remove({
              key: 'hasLoggedIn'
            }).then(function () {
              Storage.remove({
                key: 'hasVisited'
              });
              window.dispatchEvent(new CustomEvent('user:logout'));

              _this7.currentUserDataSubject.next(null);

              sessionStorage.removeItem('userData');

              _this7.getIPAddress().subscribe(function (res) {
                _this7.SaveGuest(res.ip, res.city + ' ' + res.country_name).subscribe(function (res) {
                  Storage.set({
                    key: _this7.HAS_VISITED,
                    value: 'true'
                  });
                  var event = new CustomEvent('user:guest');
                  return window.dispatchEvent(event);
                });
              }, function (error) {});
            });
          }
        }, {
          key: "getIPAddress",
          value: function getIPAddress() {
            return this.http.get("https://ipapi.co/json/"); // const url = 'https://ip.seeip.org/geoip';
          }
        }, {
          key: "setHttpRequest",
          value: function setHttpRequest(link, data) {
            try {
              var url = link;
              alert(url); // this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
              // this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
              // this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
              // this.nativeHttp.setDataSerializer('json');
              // this.nativeHttp.setServerTrustMode('nocheck');

              var nativeCall = this.nativeHttp.get(url, data, {});
              alert(JSON.stringify(nativeCall));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
                var res = JSON.parse(result.data);
                alert('res ' + JSON.stringify(res));
                return JSON.parse(result.data);
              }));
            } catch (error) {
              alert('error ' + error);
              alert('error.status ' + error.status);
            }
          }
        }, {
          key: "nativeHttpRequest",
          value: function nativeHttpRequest(url, data) {
            try {
              this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
              this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
              this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
              this.nativeHttp.setDataSerializer('json');
              this.nativeHttp.setServerTrustMode('nocheck');
              var nativeCall = this.nativeHttp.post(url, data, {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
                return JSON.parse(result.data);
              }));
            } catch (error) {
              alert(error);
            }
          }
        }, {
          key: "SaveGuest",
          value: function SaveGuest(ipaddress, location) {
            var _this8 = this;

            var type = 'SaveGuest';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';
            var data = {
              ipaddress: ipaddress,
              location: location,
              type: type
            };

            if (this.platform.is('android')) {
              this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
              this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
              this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
              this.nativeHttp.setDataSerializer('json');
              this.nativeHttp.setServerTrustMode('nocheck');
              var nativeCall = this.nativeHttp.post(url, data, {});
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
                var res = JSON.parse(result.data);
                sessionStorage.setItem('userData', JSON.stringify(res.data));

                _this8.currentUserDataSubject.next(res.data);

                return JSON.parse(result.data);
              }));
            } else {
              return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                sessionStorage.setItem('userData', JSON.stringify(res.data));

                _this8.currentUserDataSubject.next(res.data);

                return res;
              }));
            }
          }
        }, {
          key: "ResetPassword",
          value: function ResetPassword(email) {
            var type = 'ResetPassword';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                email: email,
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data2 = JSON.stringify({
                email: email,
                type: type
              });

              return this.http.post(url, _data2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "PasswordRecovery",
          value: function PasswordRecovery(code, password) {
            var type = 'PasswordRecovery';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                code: code,
                password: password
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data3 = JSON.stringify({
                code: code,
                password: password,
                type: type
              });

              return this.http.post(url, _data3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "RegisterCustomer",
          value: function RegisterCustomer(firstname, lastname, title, gender, email, password, phone) {
            var type = 'RegisterCustomer';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                firstname: firstname,
                lastname: lastname,
                title: title,
                gender: gender,
                email: email,
                password: password,
                phone: phone,
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data4 = JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                title: title,
                gender: gender,
                email: email,
                password: password,
                phone: phone,
                type: type
              });

              return this.http.post(url, _data4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "ValidateAccount",
          value: function ValidateAccount(code) {
            var type = 'ValidateAccount';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                code: code,
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data5 = JSON.stringify({
                code: code,
                type: type
              });

              return this.http.post(url, _data5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetBanks",
          value: function GetBanks() {
            var type = 'GetBanks';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data6 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data6).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "CreateBankDetails",
          value: function CreateBankDetails(sid, bankid, accounttype, accountnumber) {
            var type = 'CreateBankDetails';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                bankid: bankid,
                accounttype: accounttype,
                accountnumber: accountnumber
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data7 = JSON.stringify({
                type: type,
                sid: sid,
                bankid: bankid,
                accounttype: accounttype,
                accountnumber: accountnumber
              });

              return this.http.post(url, _data7).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetBankDetails",
          value: function GetBankDetails(sid) {
            var type = 'GetBankDetails';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data8 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data8).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "DeleteBankDetails",
          value: function DeleteBankDetails(bankdetid) {
            var type = 'DeleteBankDetails';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                bankdetid: bankdetid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data9 = JSON.stringify({
                type: type,
                bankdetid: bankdetid
              });

              return this.http.post(url, _data9).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetWalletDetails",
          value: function GetWalletDetails(sid) {
            var type = 'GetWalletDetails';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data10 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "RequestCashOut",
          value: function RequestCashOut(sid, amount, pin) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';
            var type = 'NewCashoutRequest';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                amount: amount,
                pin: pin
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data11 = JSON.stringify({
                type: type,
                sid: sid,
                amount: amount,
                pin: pin
              });

              return this.http.post(url, _data11).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetCashoutRequests",
          value: function GetCashoutRequests(sid) {
            var type = 'GetCashoutRequests';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data12 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data12).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "ProcessCashOut",
          value: function ProcessCashOut(option, cashoutid) {
            var type = 'ProcessCashOut';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                option: option,
                cashoutid: cashoutid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data13 = JSON.stringify({
                type: type,
                option: option,
                cashoutid: cashoutid
              });

              return this.http.post(url, _data13).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetCustomerDiscountCodes",
          value: function GetCustomerDiscountCodes(sid) {
            var type = 'GetCustomerDiscountCodes';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data14 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data14).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetDiscountCodes",
          value: function GetDiscountCodes() {
            var type = 'GetDiscountCodes';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data15 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data15).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "ProcessDiscount",
          value: function ProcessDiscount(discountid, option) {
            var type = 'ProcessDiscount';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                discountid: discountid,
                option: option
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data16 = JSON.stringify({
                type: type,
                discountid: discountid,
                option: option
              });

              return this.http.post(url, _data16).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetUserDetails",
          value: function GetUserDetails(sid) {
            var type = 'GetUserDetails';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data17 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data17).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "UpdateProfile",
          value: function UpdateProfile(sid, firstname, lastname, opassword, npassword, phone) {
            var type = 'UpdateProfile';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                sid: sid,
                firstname: firstname,
                lastname: lastname,
                opassword: opassword,
                npassword: npassword,
                phone: phone,
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data18 = JSON.stringify({
                sid: sid,
                firstname: firstname,
                lastname: lastname,
                opassword: opassword,
                npassword: npassword,
                phone: phone,
                type: type
              });

              return this.http.post(url, _data18).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetShippings",
          value: function GetShippings() {
            var type = 'GetShippings';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data19 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data19).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetShippingDetails",
          value: function GetShippingDetails(shippingid) {
            var type = 'GetShippingDetails';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                shippingid: shippingid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data20 = JSON.stringify({
                type: type,
                shippingid: shippingid
              });

              return this.http.post(url, _data20).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "DeleteShipping",
          value: function DeleteShipping(shippingid) {
            var type = 'DeleteShipping';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                shippingid: shippingid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data21 = JSON.stringify({
                type: type,
                shippingid: shippingid
              });

              return this.http.post(url, _data21).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "DeleteCustomer",
          value: function DeleteCustomer(userid) {
            var type = 'DeleteCustomer';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                userid: userid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data22 = JSON.stringify({
                type: type,
                userid: userid
              });

              return this.http.post(url, _data22).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "ResetShipping",
          value: function ResetShipping(shippingid) {
            var type = 'ResetShipping';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                shippingid: shippingid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data23 = JSON.stringify({
                type: type,
                shippingid: shippingid
              });

              return this.http.post(url, _data23).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "NewShippingAddress",
          value: function NewShippingAddress(shippingid, name, interval, adminpercent, shippingpercent, option, phone, email) {
            var type = 'NewShippingAddress';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                shippingid: shippingid,
                name: name,
                interval: interval,
                adminpercent: adminpercent,
                shippingpercent: shippingpercent,
                option: option,
                phone: phone,
                email: email
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data24 = JSON.stringify({
                type: type,
                shippingid: shippingid,
                name: name,
                interval: interval,
                adminpercent: adminpercent,
                shippingpercent: shippingpercent,
                option: option,
                phone: phone,
                email: email
              });

              return this.http.post(url, _data24).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetCustomers",
          value: function GetCustomers() {
            var type = 'GetAllCustomers';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data25 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data25).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "SearchCustomers",
          value: function SearchCustomers(searchvalue) {
            var type = 'SearchCustomers';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                searchvalue: searchvalue
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data26 = JSON.stringify({
                type: type,
                searchvalue: searchvalue
              });

              return this.http.post(url, _data26).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "SearchSellers",
          value: function SearchSellers(searchvalue) {
            var type = 'SearchSellers';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                searchvalue: searchvalue
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data27 = JSON.stringify({
                type: type,
                searchvalue: searchvalue
              });

              return this.http.post(url, _data27).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetSellers",
          value: function GetSellers() {
            var type = 'GetAllSellers';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data28 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data28).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetStatDetails",
          value: function GetStatDetails(sid) {
            var type = 'GetStats';
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + 'MUserServlet';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.nativeHttpRequest(url, data);
            } else {
              var _data29 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data29).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "currentUserDataValue",
          get: function get() {
            return this.currentUserDataSubject.value;
          }
        }]);

        return AuthServiceService;
      }();

      AuthServiceService.ctorParameters = function () {
        return [{
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      AuthServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], AuthServiceService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // url: "http://localhost:8080/FynGramEngine/",
        // url: "https://www.fyngram.com/FynGramEngine/",
        url: "https://b7c2f3e67daa.ngrok.io/FynGramEngine/"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Fyngram/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map