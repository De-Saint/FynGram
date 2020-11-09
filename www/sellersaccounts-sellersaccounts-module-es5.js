(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellersaccounts-sellersaccounts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/sellersaccounts.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/sellersaccounts.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersaccountsSellersaccountsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"transactions\">\n      <ion-label>Transactions</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"payments\">\n      <ion-label>Payments</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"subscriptions\">\n      <ion-label>Subscriptions</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/sellersaccounts/sellersaccounts-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/sellersaccounts/sellersaccounts-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SellersaccountsPageRoutingModule */

    /***/
    function srcAppSellersaccountsSellersaccountsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersaccountsPageRoutingModule", function () {
        return SellersaccountsPageRoutingModule;
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


      var _sellersaccounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sellersaccounts.page */
      "./src/app/sellersaccounts/sellersaccounts.page.ts");

      var routes = [{
        path: 'tabs',
        component: _sellersaccounts_page__WEBPACK_IMPORTED_MODULE_3__["SellersaccountsPage"],
        children: [{
          path: 'transactions',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | transactions-transactions-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("transactions-transactions-module")]).then(__webpack_require__.bind(null,
              /*! ./transactions/transactions.module */
              "./src/app/sellersaccounts/transactions/transactions.module.ts")).then(function (m) {
                return m.TransactionsPageModule;
              });
            }
          }]
        }, {
          path: 'payments',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | payments-payments-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("payments-payments-module")]).then(__webpack_require__.bind(null,
              /*! ./payments/payments.module */
              "./src/app/sellersaccounts/payments/payments.module.ts")).then(function (m) {
                return m.PaymentsPageModule;
              });
            }
          }]
        }, {
          path: 'subscriptions',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | subscriptions-subscriptions-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("subscriptions-subscriptions-module")]).then(__webpack_require__.bind(null,
              /*! ./subscriptions/subscriptions.module */
              "./src/app/sellersaccounts/subscriptions/subscriptions.module.ts")).then(function (m) {
                return m.SubscriptionsPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/sellersaccounts/tabs/subscriptions',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/sellersaccounts/tabs/subscriptions',
        pathMatch: 'full'
      }];

      var SellersaccountsPageRoutingModule = function SellersaccountsPageRoutingModule() {
        _classCallCheck(this, SellersaccountsPageRoutingModule);
      };

      SellersaccountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellersaccountsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersaccounts/sellersaccounts.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/sellersaccounts/sellersaccounts.module.ts ***!
      \***********************************************************/

    /*! exports provided: SellersaccountsPageModule */

    /***/
    function srcAppSellersaccountsSellersaccountsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersaccountsPageModule", function () {
        return SellersaccountsPageModule;
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


      var _sellersaccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sellersaccounts-routing.module */
      "./src/app/sellersaccounts/sellersaccounts-routing.module.ts");
      /* harmony import */


      var _sellersaccounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sellersaccounts.page */
      "./src/app/sellersaccounts/sellersaccounts.page.ts");

      var SellersaccountsPageModule = function SellersaccountsPageModule() {
        _classCallCheck(this, SellersaccountsPageModule);
      };

      SellersaccountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sellersaccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersaccountsPageRoutingModule"]],
        declarations: [_sellersaccounts_page__WEBPACK_IMPORTED_MODULE_6__["SellersaccountsPage"]]
      })], SellersaccountsPageModule);
      /***/
    },

    /***/
    "./src/app/sellersaccounts/sellersaccounts.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/sellersaccounts/sellersaccounts.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersaccountsSellersaccountsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNhY2NvdW50cy9zZWxsZXJzYWNjb3VudHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/sellersaccounts/sellersaccounts.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/sellersaccounts/sellersaccounts.page.ts ***!
      \*********************************************************/

    /*! exports provided: SellersaccountsPage */

    /***/
    function srcAppSellersaccountsSellersaccountsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersaccountsPage", function () {
        return SellersaccountsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SellersaccountsPage = /*#__PURE__*/function () {
        function SellersaccountsPage() {
          _classCallCheck(this, SellersaccountsPage);
        }

        _createClass(SellersaccountsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellersaccountsPage;
      }();

      SellersaccountsPage.ctorParameters = function () {
        return [];
      };

      SellersaccountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellersaccounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sellersaccounts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/sellersaccounts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sellersaccounts.page.scss */
        "./src/app/sellersaccounts/sellersaccounts.page.scss"))["default"]]
      })], SellersaccountsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sellersaccounts-sellersaccounts-module-es5.js.map