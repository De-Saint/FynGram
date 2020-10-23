(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminusers-adminusers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/adminusers.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/adminusers.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminusersAdminusersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"sellers\">\n      <ion-label>Sellers</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"customers\">\n      <ion-label>Customers</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"shippings\">\n      <ion-label>Carriers</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/adminusers/adminusers-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/adminusers/adminusers-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AdminusersPageRoutingModule */

    /***/
    function srcAppAdminusersAdminusersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminusersPageRoutingModule", function () {
        return AdminusersPageRoutingModule;
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


      var _adminusers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adminusers.page */
      "./src/app/adminusers/adminusers.page.ts");

      var routes = [{
        path: 'tabs',
        component: _adminusers_page__WEBPACK_IMPORTED_MODULE_3__["AdminusersPage"],
        children: [{
          path: 'sellers',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | sellers-sellers-module */
              "sellers-sellers-module").then(__webpack_require__.bind(null,
              /*! ./sellers/sellers.module */
              "./src/app/adminusers/sellers/sellers.module.ts")).then(function (m) {
                return m.SellersPageModule;
              });
            }
          }]
        }, {
          path: 'customers',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | customers-customers-module */
              "customers-customers-module").then(__webpack_require__.bind(null,
              /*! ./customers/customers.module */
              "./src/app/adminusers/customers/customers.module.ts")).then(function (m) {
                return m.CustomersPageModule;
              });
            }
          }]
        }, {
          path: 'shippings',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | shipping-shipping-module */
              "shipping-shipping-module").then(__webpack_require__.bind(null,
              /*! ./shipping/shipping.module */
              "./src/app/adminusers/shipping/shipping.module.ts")).then(function (m) {
                return m.ShippingPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/adminusers/tabs/sellers',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/adminusers/tabs/sellers',
        pathMatch: 'full'
      }];

      var AdminusersPageRoutingModule = function AdminusersPageRoutingModule() {
        _classCallCheck(this, AdminusersPageRoutingModule);
      };

      AdminusersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminusersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminusers/adminusers.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/adminusers/adminusers.module.ts ***!
      \*************************************************/

    /*! exports provided: AdminusersPageModule */

    /***/
    function srcAppAdminusersAdminusersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminusersPageModule", function () {
        return AdminusersPageModule;
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


      var _adminusers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adminusers-routing.module */
      "./src/app/adminusers/adminusers-routing.module.ts");
      /* harmony import */


      var _adminusers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adminusers.page */
      "./src/app/adminusers/adminusers.page.ts");

      var AdminusersPageModule = function AdminusersPageModule() {
        _classCallCheck(this, AdminusersPageModule);
      };

      AdminusersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _adminusers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminusersPageRoutingModule"]],
        declarations: [_adminusers_page__WEBPACK_IMPORTED_MODULE_6__["AdminusersPage"]]
      })], AdminusersPageModule);
      /***/
    },

    /***/
    "./src/app/adminusers/adminusers.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/adminusers/adminusers.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminusersAdminusersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWludXNlcnMvYWRtaW51c2Vycy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/adminusers/adminusers.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/adminusers/adminusers.page.ts ***!
      \***********************************************/

    /*! exports provided: AdminusersPage */

    /***/
    function srcAppAdminusersAdminusersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminusersPage", function () {
        return AdminusersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AdminusersPage = /*#__PURE__*/function () {
        function AdminusersPage() {
          _classCallCheck(this, AdminusersPage);
        }

        _createClass(AdminusersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminusersPage;
      }();

      AdminusersPage.ctorParameters = function () {
        return [];
      };

      AdminusersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminusers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adminusers.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/adminusers.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adminusers.page.scss */
        "./src/app/adminusers/adminusers.page.scss"))["default"]]
      })], AdminusersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=adminusers-adminusers-module-es5.js.map