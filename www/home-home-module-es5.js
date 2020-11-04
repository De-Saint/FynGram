(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"buy\">\n      <ion-label>Buy</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"category\">\n      <ion-label>Categories</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"sell\">\n      <ion-label>Sell</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"help\">\n      <ion-label>Help</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: 'tabs',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [{
          path: 'buy',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | buy-buy-module */
              [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~cart-cart-module~category-category-module~ca~b9ebc255"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3"), __webpack_require__.e("buy-buy-module")]).then(__webpack_require__.bind(null,
              /*! ./buy/buy.module */
              "./src/app/home/buy/buy.module.ts")).then(function (m) {
                return m.BuyPageModule;
              });
            }
          }, {
            path: 'products',
            children: [{
              path: 'details/:productId',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | category-products-details-details-module */
                [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~cart-cart-module~category-category-module~ca~b9ebc255"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3"), __webpack_require__.e("category-products-details-details-module")]).then(__webpack_require__.bind(null,
                /*! ./category/products/details/details.module */
                "./src/app/home/category/products/details/details.module.ts")).then(function (m) {
                  return m.DetailsPageModule;
                });
              }
            }]
          }]
        }, {
          path: 'category',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | category-category-module */
              [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~cart-cart-module~category-category-module~ca~b9ebc255"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3"), __webpack_require__.e("category-category-module")]).then(__webpack_require__.bind(null,
              /*! ./category/category.module */
              "./src/app/home/category/category.module.ts")).then(function (m) {
                return m.CategoryPageModule;
              });
            }
          }, {
            path: 'products',
            children: [{
              path: 'details/:productId',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | category-products-details-details-module */
                [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~cart-cart-module~category-category-module~ca~b9ebc255"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3"), __webpack_require__.e("category-products-details-details-module")]).then(__webpack_require__.bind(null,
                /*! ./category/products/details/details.module */
                "./src/app/home/category/products/details/details.module.ts")).then(function (m) {
                  return m.DetailsPageModule;
                });
              }
            }, {
              path: ':catId',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | category-products-products-module */
                [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~cart-cart-module~category-category-module~ca~b9ebc255"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3"), __webpack_require__.e("category-products-products-module")]).then(__webpack_require__.bind(null,
                /*! ./category/products/products.module */
                "./src/app/home/category/products/products.module.ts")).then(function (m) {
                  return m.ProductsPageModule;
                });
              }
            }]
          }]
        }, {
          path: 'sell',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | sell-sell-module */
              [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~cart-cart-module~category-category-module~ca~b9ebc255"), __webpack_require__.e("sell-sell-module")]).then(__webpack_require__.bind(null,
              /*! ./sell/sell.module */
              "./src/app/home/sell/sell.module.ts")).then(function (m) {
                return m.SellPageModule;
              });
            }
          }]
        }, {
          path: 'help',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | help-help-module */
              [__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~cart-cart-module~category-category-module~ca~b9ebc255"), __webpack_require__.e("help-help-module")]).then(__webpack_require__.bind(null,
              /*! ./help/help.module */
              "./src/app/home/help/help.module.ts")).then(function (m) {
                return m.HelpPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/home/tabs/buy',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/home/tabs/buy',
        pathMatch: 'full'
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage() {
          _classCallCheck(this, HomePage);
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map