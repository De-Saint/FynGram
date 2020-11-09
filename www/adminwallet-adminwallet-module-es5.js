(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminwallet-adminwallet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/adminwallet.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/adminwallet.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminwalletAdminwalletPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"fynpay\">\n      <ion-label>FynPay</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cashouts\">\n      <ion-label>CashOut</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"discounts\">\n      <ion-label>Discount</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/adminwallet/adminwallet-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/adminwallet/adminwallet-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AdminwalletPageRoutingModule */

    /***/
    function srcAppAdminwalletAdminwalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminwalletPageRoutingModule", function () {
        return AdminwalletPageRoutingModule;
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


      var _adminwallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adminwallet.page */
      "./src/app/adminwallet/adminwallet.page.ts");

      var routes = [{
        path: 'tabs',
        component: _adminwallet_page__WEBPACK_IMPORTED_MODULE_3__["AdminwalletPage"],
        children: [{
          path: 'fynpay',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | fynpay-fynpay-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("fynpay-fynpay-module")]).then(__webpack_require__.bind(null,
              /*! ./fynpay/fynpay.module */
              "./src/app/adminwallet/fynpay/fynpay.module.ts")).then(function (m) {
                return m.FynpayPageModule;
              });
            }
          }, {
            path: 'new',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | fynpay-new-new-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("default~buy-buy-module~cart-cart-module~cashouts-new-new-module~category-category-module~category-pr~a4914bc7"), __webpack_require__.e("default~checkout-checkout-module~fynpay-new-new-module"), __webpack_require__.e("fynpay-new-new-module")]).then(__webpack_require__.bind(null,
              /*! ./fynpay/new/new.module */
              "./src/app/adminwallet/fynpay/new/new.module.ts")).then(function (m) {
                return m.NewPageModule;
              });
            }
          }]
        }, {
          path: 'cashouts',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | cashouts-cashouts-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("cashouts-cashouts-module")]).then(__webpack_require__.bind(null,
              /*! ./cashouts/cashouts.module */
              "./src/app/adminwallet/cashouts/cashouts.module.ts")).then(function (m) {
                return m.CashoutsPageModule;
              });
            }
          }]
        }, {
          path: 'discounts',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | discounts-discounts-module */
              [__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("discounts-discounts-module")]).then(__webpack_require__.bind(null,
              /*! ./discounts/discounts.module */
              "./src/app/adminwallet/discounts/discounts.module.ts")).then(function (m) {
                return m.DiscountsPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/adminwallet/tabs/fynpay',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/adminwallet/tabs/fynpay',
        pathMatch: 'full'
      }];

      var AdminwalletPageRoutingModule = function AdminwalletPageRoutingModule() {
        _classCallCheck(this, AdminwalletPageRoutingModule);
      };

      AdminwalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminwalletPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminwallet/adminwallet.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/adminwallet/adminwallet.module.ts ***!
      \***************************************************/

    /*! exports provided: AdminwalletPageModule */

    /***/
    function srcAppAdminwalletAdminwalletModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminwalletPageModule", function () {
        return AdminwalletPageModule;
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


      var _adminwallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adminwallet-routing.module */
      "./src/app/adminwallet/adminwallet-routing.module.ts");
      /* harmony import */


      var _adminwallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adminwallet.page */
      "./src/app/adminwallet/adminwallet.page.ts");

      var AdminwalletPageModule = function AdminwalletPageModule() {
        _classCallCheck(this, AdminwalletPageModule);
      };

      AdminwalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _adminwallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminwalletPageRoutingModule"]],
        declarations: [_adminwallet_page__WEBPACK_IMPORTED_MODULE_6__["AdminwalletPage"]]
      })], AdminwalletPageModule);
      /***/
    },

    /***/
    "./src/app/adminwallet/adminwallet.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/adminwallet/adminwallet.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminwalletAdminwalletPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlud2FsbGV0L2FkbWlud2FsbGV0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/adminwallet/adminwallet.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/adminwallet/adminwallet.page.ts ***!
      \*************************************************/

    /*! exports provided: AdminwalletPage */

    /***/
    function srcAppAdminwalletAdminwalletPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminwalletPage", function () {
        return AdminwalletPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AdminwalletPage = /*#__PURE__*/function () {
        function AdminwalletPage() {
          _classCallCheck(this, AdminwalletPage);
        }

        _createClass(AdminwalletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminwalletPage;
      }();

      AdminwalletPage.ctorParameters = function () {
        return [];
      };

      AdminwalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminwallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adminwallet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/adminwallet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adminwallet.page.scss */
        "./src/app/adminwallet/adminwallet.page.scss"))["default"]]
      })], AdminwalletPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=adminwallet-adminwallet-module-es5.js.map