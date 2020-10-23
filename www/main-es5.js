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


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-header>\n        <ion-toolbar color=\"mytheme\">\n          <ion-row padding-horizontal align-items-center>\n            <ion-col size=\"3\" padding-vertical align-items-center>\n              <ion-avatar margin-vertical>\n                <img src=\"/assets/icon/logo.png\">\n              </ion-avatar>\n            </ion-col>\n            <ion-col padding-vertical align-items-center>\n              <div margin-vertical>\n                <h4 no-margin margin-start class=\"medium white\"><strong>Guest</strong></h4>\n                <h6 no-margin margin-start class=\"small white\">Create An Account</h6>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list class=\"ion-no-padding\">\n          <ion-list-header>\n            Shop\n          </ion-list-header>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list *ngIf=\"loggedIn\" lines=\"none\">\n          <ion-list-header>\n            Account\n          </ion-list-header>\n          <div *ngIf=\"userType === 'Admin'\">\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of adminPages; let i = index\">\n              <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </div>\n          <div *ngIf=\"userType === 'Customer'\">\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of customerPages; let i = index\">\n              <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </div>\n          <div *ngIf=\"userType === 'Seller'\">\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of sellerPages; let i = index\">\n              <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                detail=\"false\" [class.selected]=\"selectedIndex == i\">\n                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                <ion-label>{{ p.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </div>\n        </ion-list>\n\n        <ion-list *ngIf=\"!loggedIn\" lines=\"none\">\n          <ion-list-header>\n            Account\n          </ion-list-header>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/authenticate\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n              <ion-label>\n                Login\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/authenticate/register\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"person-add\"></ion-icon>\n              <ion-label>\n                Register\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n\n        <ion-list lines=\"none\">\n          <ion-list-header>\n            Theme\n          </ion-list-header>\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <ion-label>\n              Dark Mode\n            </ion-label>\n            <ion-toggle (ionChange)=\"updateDarkMode($event)\" slot=\"end\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>";
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
          [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~category-category-module~help-help-module~se~29d5e236"), __webpack_require__.e("authenticate-authenticate-module")]).then(__webpack_require__.bind(null,
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
          return __webpack_require__.e(
          /*! import() | cart-cart-module */
          "cart-cart-module").then(__webpack_require__.bind(null,
          /*! ./cart/cart.module */
          "./src/app/cart/cart.module.ts")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'search',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | search-search-module */
          [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~category-category-module~help-help-module~se~29d5e236"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null,
          /*! ./search/search.module */
          "./src/app/search/search.module.ts")).then(function (m) {
            return m.SearchPageModule;
          });
        }
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
        path: 'customerdashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customerdashboard-customerdashboard-module */
          "customerdashboard-customerdashboard-module").then(__webpack_require__.bind(null,
          /*! ./customerdashboard/customerdashboard.module */
          "./src/app/customerdashboard/customerdashboard.module.ts")).then(function (m) {
            return m.CustomerdashboardPageModule;
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


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #40A944;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 0 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-mytheme);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-mytheme);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzQwQTk0NDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn0iXX0= */";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, menu) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.menu = menu;
          this.selectedIndex = 0;
          this.loggedIn = false;
          this.dark = false;
          this.userType = '';
          this.appPages = [{
            title: 'Buy',
            url: '/home/tabs/buy',
            icon: 'home'
          }, {
            title: 'Search',
            url: '/search',
            icon: 'search'
          }, {
            title: 'Carts',
            url: '/cart',
            icon: 'cart'
          }];
          this.sellerPages = [{
            title: 'Dashboard',
            url: '/sellersdashboard',
            icon: 'home'
          }, {
            title: 'Profile',
            url: '/sellersprofile/tabs/profile',
            icon: 'search'
          }, {
            title: 'FynPay',
            url: '/sellerswallet/tabs/fynpay',
            icon: 'search'
          }, {
            title: 'Accounts',
            url: '/sellersaccounts/tabs/subscriptions',
            icon: 'search'
          }, {
            title: 'Inventory',
            url: '/sellersinventory/tabs/products',
            icon: 'search'
          }, {
            title: 'LogOut',
            url: '/authenticate',
            icon: 'log-in'
          }];
          this.adminPages = [{
            title: 'Dashboard',
            url: '/admindashboard',
            icon: 'home'
          }, {
            title: 'Profile',
            url: '/adminprofile/tabs/profile',
            icon: 'search'
          }, {
            title: 'FynPay',
            url: '/adminwallet/tabs/fynpay',
            icon: 'search'
          }, {
            title: 'Accounts',
            url: '/adminaccounts/tabs/subscriptions',
            icon: 'search'
          }, {
            title: 'Users',
            url: '/adminusers/tabs/sellers',
            icon: 'search'
          }, {
            title: 'Inventory',
            url: '/admininventory/tabs/products',
            icon: 'search'
          }, {
            title: 'Categories',
            url: '/admincategory/tabs/categories',
            icon: 'search'
          }, {
            title: 'LogOut',
            url: '/authenticate',
            icon: 'log-in'
          }];
          this.customerPages = [{
            title: 'Dashboard',
            url: '/customerdashboard',
            icon: 'home'
          }, {
            title: 'Profile',
            url: '/customerprofile/tabs/profile',
            icon: 'search'
          }, {
            title: 'FynPay',
            url: '/customerwallet/tabs/fynpay',
            icon: 'search'
          }, {
            title: 'Accounts',
            url: '/customeraccounts/tabs/discounts',
            icon: 'cart'
          }, {
            title: 'Orders',
            url: '/customerorders/tabs/orders',
            icon: 'cart'
          }, {
            title: 'WishList',
            url: '/customerorders/tabs/wishlist',
            icon: 'cart'
          }, {
            title: 'LogOut',
            url: '/authenticate',
            icon: 'log-in'
          }];
          this.initializeApp();
          this.dark;
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.checkLoginStatus();
            this.listenToEvents();
          }
        }, {
          key: "updateLoggedInStatus",
          value: function updateLoggedInStatus(loggedIn, userType) {
            var _this2 = this;

            setTimeout(function () {
              _this2.loggedIn = loggedIn;
              _this2.userType = userType;
            }, 300);
          }
        }, {
          key: "listenToEvents",
          value: function listenToEvents() {
            var _this3 = this;

            this.updateLoggedInStatus(false, ""); // this.events.subscribe('user:signup', () => {
            //   this.enableMenu(true, "");
            // });
            // this.events.subscribe('user:logout', () => {
            //   this.nav.setRoot('SignInPage');
            //   this.enableMenu(false, "");
            //   this.auth.logout();
            // });
            // this.events.subscribe('user:login', (usertype, Userfullname) => {
            //   this.Userfullname = Userfullname;
            //   this.usertype = usertype;
            //   this.enableMenu(true, usertype);
            // })

            window.addEventListener('user:login', function () {
              _this3.updateLoggedInStatus(true, '');
            });
            window.addEventListener('user:signup', function () {
              _this3.updateLoggedInStatus(true, '');
            });
            window.addEventListener('user:logout', function () {
              _this3.updateLoggedInStatus(false, '');
            });
          }
        }, {
          key: "logout",
          value: function logout() {// this.userData.logout().then(() => {
            //   return this.router.navigateByUrl('/app/tabs/schedule');
            // });
          }
        }, {
          key: "updateDarkMode",
          value: function updateDarkMode(event) {
            var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
            systemDark.addListener(this.colorTest);

            if (event.detail.checked) {
              document.body.setAttribute('data-theme', 'dark');
            } else {
              document.body.setAttribute('data-theme', 'light');
            }
          }
        }, {
          key: "colorTest",
          value: function colorTest(systemInitiatedDark) {
            if (systemInitiatedDark.matches) {
              document.body.setAttribute('data-theme', 'dark');
            } else {
              document.body.setAttribute('data-theme', 'light');
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
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
        production: false
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
      /*! /Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/FynGram/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map