(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/customers/customers.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/customers/customers.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminusersCustomersCustomersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Customers</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"mytheme\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-input type=\"text\" placeholder=\"Search Customers\" [(ngModel)]=\"searchTerm\" class=\"search-bar\"\n        (ionChange)=\"onSearch()\"></ion-input>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let customer of customers\" (click)=\"onOpen(customer)\">\n      <ion-label>\n        <h2>{{customer.UserName}}</h2>\n        <h3>{{customer.phone}}</h3>\n        <p>{{customer.email}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/adminusers/customers/customers-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/adminusers/customers/customers-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: CustomersPageRoutingModule */

    /***/
    function srcAppAdminusersCustomersCustomersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersPageRoutingModule", function () {
        return CustomersPageRoutingModule;
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


      var _customers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customers.page */
      "./src/app/adminusers/customers/customers.page.ts");

      var routes = [{
        path: '',
        component: _customers_page__WEBPACK_IMPORTED_MODULE_3__["CustomersPage"]
      }];

      var CustomersPageRoutingModule = function CustomersPageRoutingModule() {
        _classCallCheck(this, CustomersPageRoutingModule);
      };

      CustomersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminusers/customers/customers.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/adminusers/customers/customers.module.ts ***!
      \**********************************************************/

    /*! exports provided: CustomersPageModule */

    /***/
    function srcAppAdminusersCustomersCustomersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersPageModule", function () {
        return CustomersPageModule;
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


      var _customers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customers-routing.module */
      "./src/app/adminusers/customers/customers-routing.module.ts");
      /* harmony import */


      var _customers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customers.page */
      "./src/app/adminusers/customers/customers.page.ts");

      var CustomersPageModule = function CustomersPageModule() {
        _classCallCheck(this, CustomersPageModule);
      };

      CustomersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customers_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomersPageRoutingModule"]],
        declarations: [_customers_page__WEBPACK_IMPORTED_MODULE_6__["CustomersPage"]]
      })], CustomersPageModule);
      /***/
    },

    /***/
    "./src/app/adminusers/customers/customers.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/adminusers/customers/customers.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminusersCustomersCustomersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n  padding-left: 0.5em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW51c2Vycy9jdXN0b21lcnMvY3VzdG9tZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW51c2Vycy9jdXN0b21lcnMvY3VzdG9tZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/adminusers/customers/customers.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/adminusers/customers/customers.page.ts ***!
      \********************************************************/

    /*! exports provided: CustomersPage */

    /***/
    function srcAppAdminusersCustomersCustomersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomersPage", function () {
        return CustomersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CustomersPage = /*#__PURE__*/function () {
        function CustomersPage(authService, router, fun, loadingCtrl) {
          _classCallCheck(this, CustomersPage);

          this.authService = authService;
          this.router = router;
          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.show = true;
        }

        _createClass(CustomersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (!this.customers) {
              this.GetCustomers();
            }

            this.searchTerm = '';
          }
        }, {
          key: "GetCustomers",
          value: function GetCustomers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.GetCustomers().subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.customers = res.data;
                          _this.originalcustomers = res.data;
                          _this.show = true;
                        } else {
                          _this.show = false;
                        }
                      }, function (error) {
                        _this.show = false;
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onOpen",
          value: function onOpen(customer) {
            this.fun.setNavigationData(customer.id, customer);
            this.router.navigate(['/', 'adminusers', 'tabs', 'customers', 'details', customer.id]);
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var searchvalue, loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      searchvalue = this.searchTerm;

                      if (!(searchvalue.trim() === '')) {
                        _context2.next = 5;
                        break;
                      }

                      this.customers = this.originalcustomers;
                      _context2.next = 13;
                      break;

                    case 5:
                      if (!(String(searchvalue).length >= 3)) {
                        _context2.next = 13;
                        break;
                      }

                      if (!(searchvalue !== undefined)) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.next = 9;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 9:
                      loading = _context2.sent;
                      _context2.next = 12;
                      return loading.present();

                    case 12:
                      this.authService.SearchCustomers(searchvalue).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.customers = res.data;
                          _this2.show = true;
                        } else {
                          _this2.customers = _this2.originalcustomers;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                        _this2.customers = _this2.originalcustomers;
                      });

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return CustomersPage;
      }();

      CustomersPage.ctorParameters = function () {
        return [{
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      CustomersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-customers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./customers.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/customers/customers.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./customers.page.scss */
        "./src/app/adminusers/customers/customers.page.scss"))["default"]]
      })], CustomersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customers-customers-module-es5.js.map