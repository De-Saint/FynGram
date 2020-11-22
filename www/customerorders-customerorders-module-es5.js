(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerorders-customerorders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/customerorders.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/customerorders.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerordersCustomerordersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"orders\">\n      <ion-label>Orders</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"wishlist\">\n      <ion-label>WishList</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"returned\">\n      <ion-label>Returned</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/customerorders/customerorders-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/customerorders/customerorders-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CustomerordersPageRoutingModule */

    /***/
    function srcAppCustomerordersCustomerordersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerordersPageRoutingModule", function () {
        return CustomerordersPageRoutingModule;
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


      var _customerorders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customerorders.page */
      "./src/app/customerorders/customerorders.page.ts");

      var routes = [{
        path: 'tabs',
        component: _customerorders_page__WEBPACK_IMPORTED_MODULE_3__["CustomerordersPage"],
        children: [{
          path: 'orders',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | orders-orders-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("common"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null,
              /*! ./orders/orders.module */
              "./src/app/customerorders/orders/orders.module.ts")).then(function (m) {
                return m.OrdersPageModule;
              });
            }
          }, {
            path: 'details/:orderId',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | orders-details-details-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("common"), __webpack_require__.e("orders-details-details-module")]).then(__webpack_require__.bind(null,
              /*! ./orders/details/details.module */
              "./src/app/customerorders/orders/details/details.module.ts")).then(function (m) {
                return m.DetailsPageModule;
              });
            }
          }]
        }, {
          path: 'wishlist',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | wishlist-wishlist-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852"), __webpack_require__.e("wishlist-wishlist-module")]).then(__webpack_require__.bind(null,
              /*! ./wishlist/wishlist.module */
              "./src/app/customerorders/wishlist/wishlist.module.ts")).then(function (m) {
                return m.WishlistPageModule;
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
                /*! ../home/category/products/details/details.module */
                "./src/app/home/category/products/details/details.module.ts")).then(function (m) {
                  return m.DetailsPageModule;
                });
              }
            }]
          }]
        }, {
          path: 'returned',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | returned-returned-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852"), __webpack_require__.e("returned-returned-module")]).then(__webpack_require__.bind(null,
              /*! ./returned/returned.module */
              "./src/app/customerorders/returned/returned.module.ts")).then(function (m) {
                return m.ReturnedPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/customerorders/tabs/orders',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/customerorders/tabs/orders',
        pathMatch: 'full'
      }];

      var CustomerordersPageRoutingModule = function CustomerordersPageRoutingModule() {
        _classCallCheck(this, CustomerordersPageRoutingModule);
      };

      CustomerordersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerordersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerorders/customerorders.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/customerorders/customerorders.module.ts ***!
      \*********************************************************/

    /*! exports provided: CustomerordersPageModule */

    /***/
    function srcAppCustomerordersCustomerordersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerordersPageModule", function () {
        return CustomerordersPageModule;
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


      var _customerorders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customerorders-routing.module */
      "./src/app/customerorders/customerorders-routing.module.ts");
      /* harmony import */


      var _customerorders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customerorders.page */
      "./src/app/customerorders/customerorders.page.ts");

      var CustomerordersPageModule = function CustomerordersPageModule() {
        _classCallCheck(this, CustomerordersPageModule);
      };

      CustomerordersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customerorders_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerordersPageRoutingModule"]],
        declarations: [_customerorders_page__WEBPACK_IMPORTED_MODULE_6__["CustomerordersPage"]]
      })], CustomerordersPageModule);
      /***/
    },

    /***/
    "./src/app/customerorders/customerorders.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/customerorders/customerorders.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerordersCustomerordersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyb3JkZXJzL2N1c3RvbWVyb3JkZXJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/customerorders/customerorders.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/customerorders/customerorders.page.ts ***!
      \*******************************************************/

    /*! exports provided: CustomerordersPage */

    /***/
    function srcAppCustomerordersCustomerordersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerordersPage", function () {
        return CustomerordersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CustomerordersPage = /*#__PURE__*/function () {
        function CustomerordersPage() {
          _classCallCheck(this, CustomerordersPage);
        }

        _createClass(CustomerordersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomerordersPage;
      }();

      CustomerordersPage.ctorParameters = function () {
        return [];
      };

      CustomerordersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerorders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customerorders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/customerorders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customerorders.page.scss */
        "./src/app/customerorders/customerorders.page.scss"))["default"]]
      })], CustomerordersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customerorders-customerorders-module-es5.js.map