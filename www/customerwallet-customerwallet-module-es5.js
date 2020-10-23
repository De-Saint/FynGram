(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerwallet-customerwallet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/customerwallet.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/customerwallet.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerwalletCustomerwalletPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"fynpay\">\n      <ion-label>FynPay</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cashouts\">\n      <ion-label>CashOut</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"banks\">\n      <ion-label>Bank</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";
      /***/
    },

    /***/
    "./src/app/customerwallet/customerwallet-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/customerwallet/customerwallet-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CustomerwalletPageRoutingModule */

    /***/
    function srcAppCustomerwalletCustomerwalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerwalletPageRoutingModule", function () {
        return CustomerwalletPageRoutingModule;
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


      var _customerwallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customerwallet.page */
      "./src/app/customerwallet/customerwallet.page.ts");

      var routes = [{
        path: 'tabs',
        component: _customerwallet_page__WEBPACK_IMPORTED_MODULE_3__["CustomerwalletPage"],
        children: [{
          path: 'fynpay',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | fynpay-fynpay-module */
              "fynpay-fynpay-module").then(__webpack_require__.bind(null,
              /*! ./fynpay/fynpay.module */
              "./src/app/customerwallet/fynpay/fynpay.module.ts")).then(function (m) {
                return m.FynpayPageModule;
              });
            }
          }]
        }, {
          path: 'cashouts',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | cashouts-cashouts-module */
              "cashouts-cashouts-module").then(__webpack_require__.bind(null,
              /*! ./cashouts/cashouts.module */
              "./src/app/customerwallet/cashouts/cashouts.module.ts")).then(function (m) {
                return m.CashoutsPageModule;
              });
            }
          }]
        }, {
          path: 'banks',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | banks-banks-module */
              "banks-banks-module").then(__webpack_require__.bind(null,
              /*! ./banks/banks.module */
              "./src/app/customerwallet/banks/banks.module.ts")).then(function (m) {
                return m.BanksPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/customerwallet/tabs/fynpay',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/customerwallet/tabs/fynpay',
        pathMatch: 'full'
      }];

      var CustomerwalletPageRoutingModule = function CustomerwalletPageRoutingModule() {
        _classCallCheck(this, CustomerwalletPageRoutingModule);
      };

      CustomerwalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerwalletPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/customerwallet.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/customerwallet/customerwallet.module.ts ***!
      \*********************************************************/

    /*! exports provided: CustomerwalletPageModule */

    /***/
    function srcAppCustomerwalletCustomerwalletModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerwalletPageModule", function () {
        return CustomerwalletPageModule;
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


      var _customerwallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customerwallet-routing.module */
      "./src/app/customerwallet/customerwallet-routing.module.ts");
      /* harmony import */


      var _customerwallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customerwallet.page */
      "./src/app/customerwallet/customerwallet.page.ts");

      var CustomerwalletPageModule = function CustomerwalletPageModule() {
        _classCallCheck(this, CustomerwalletPageModule);
      };

      CustomerwalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customerwallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerwalletPageRoutingModule"]],
        declarations: [_customerwallet_page__WEBPACK_IMPORTED_MODULE_6__["CustomerwalletPage"]]
      })], CustomerwalletPageModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/customerwallet.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/customerwallet/customerwallet.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerwalletCustomerwalletPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyd2FsbGV0L2N1c3RvbWVyd2FsbGV0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/customerwallet/customerwallet.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/customerwallet/customerwallet.page.ts ***!
      \*******************************************************/

    /*! exports provided: CustomerwalletPage */

    /***/
    function srcAppCustomerwalletCustomerwalletPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerwalletPage", function () {
        return CustomerwalletPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CustomerwalletPage = /*#__PURE__*/function () {
        function CustomerwalletPage() {
          _classCallCheck(this, CustomerwalletPage);
        }

        _createClass(CustomerwalletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomerwalletPage;
      }();

      CustomerwalletPage.ctorParameters = function () {
        return [];
      };

      CustomerwalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerwallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customerwallet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/customerwallet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customerwallet.page.scss */
        "./src/app/customerwallet/customerwallet.page.scss"))["default"]]
      })], CustomerwalletPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customerwallet-customerwallet-module-es5.js.map