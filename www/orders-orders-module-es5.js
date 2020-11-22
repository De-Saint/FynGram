(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/orders.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/orders.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdmininventoryOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not placed any order yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onShop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <ion-item lines=\"none\" *ngFor=\"let order of orders\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(order)\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\">Order Item(s) <strong>(#{{order.product_count}})</strong> </h5>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{order.reference}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{order.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-icon class=\"item-icon mycolor ion-float-right\" name=\"chevron-forward-circle\" mode=\"ios\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/orders.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/orders.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerordersOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not placed any order yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onShop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <ion-item lines=\"none\" *ngFor=\"let order of orders\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(order)\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\">Order Item(s) <strong>(#{{order.product_count}})</strong> </h5>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{order.reference}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{order.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-icon class=\"item-icon mycolor ion-float-right\" name=\"chevron-forward-circle\" mode=\"ios\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/orders.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/orders.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersinventoryOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not placed any order yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onShop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <ion-item lines=\"none\" *ngFor=\"let order of orders\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(order)\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\">Order Item(s) <strong>(#{{order.product_count}})</strong> </h5>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{order.reference}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{order.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-icon class=\"item-icon mycolor ion-float-right\" name=\"chevron-forward-circle\" mode=\"ios\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/admininventory/orders/orders-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/admininventory/orders/orders-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function srcAppAdmininventoryOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
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


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/admininventory/orders/orders.page.ts");

      var routes = [{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      };

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admininventory/orders/orders.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/admininventory/orders/orders.module.ts ***!
      \********************************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function srcAppAdmininventoryOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
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


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-routing.module */
      "./src/app/admininventory/orders/orders-routing.module.ts");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/admininventory/orders/orders.page.ts");

      var OrdersPageModule = function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      };

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "./src/app/admininventory/orders/orders.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/admininventory/orders/orders.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdmininventoryOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxTQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uc3Vie1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pdGVtLWljb257XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mdWxse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbn1cbi5pdGVtLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/admininventory/orders/orders.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/admininventory/orders/orders.page.ts ***!
      \******************************************************/

    /*! exports provided: OrdersPage */

    /***/
    function srcAppAdmininventoryOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/order.service */
      "./src/app/services/order.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(router, authService, loadingCtrl, orderService, fun) {
          _classCallCheck(this, OrdersPage);

          this.router = router;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
          this.orderService = orderService;
          this.fun = fun;
          this.show = true;
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (!this.orders) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetOrders(this.sid);
            }
          }
        }, {
          key: "open",
          value: function open(order) {
            this.router.navigate(['/', 'admininventory', 'tabs', 'orders', 'details', order.id]);
          }
        }, {
          key: "GetOrders",
          value: function GetOrders(sid) {
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
                      this.orderService.GetOrders(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.orders = res.data;
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
          key: "onShop",
          value: function onShop() {
            this.fun.navigate('home');
          }
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./orders.page.scss */
        "./src/app/admininventory/orders/orders.page.scss"))["default"]]
      })], OrdersPage);
      /***/
    },

    /***/
    "./src/app/customerorders/orders/orders-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/customerorders/orders/orders-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function srcAppCustomerordersOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
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


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/customerorders/orders/orders.page.ts");

      var routes = [{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      };

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerorders/orders/orders.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/customerorders/orders/orders.module.ts ***!
      \********************************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function srcAppCustomerordersOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
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


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-routing.module */
      "./src/app/customerorders/orders/orders-routing.module.ts");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/customerorders/orders/orders.page.ts");

      var OrdersPageModule = function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      };

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "./src/app/customerorders/orders/orders.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/customerorders/orders/orders.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerordersOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxTQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uc3Vie1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pdGVtLWljb257XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mdWxse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbn1cbi5pdGVtLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/customerorders/orders/orders.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/customerorders/orders/orders.page.ts ***!
      \******************************************************/

    /*! exports provided: OrdersPage */

    /***/
    function srcAppCustomerordersOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/order.service */
      "./src/app/services/order.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(router, authService, loadingCtrl, orderService, fun) {
          _classCallCheck(this, OrdersPage);

          this.router = router;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
          this.orderService = orderService;
          this.fun = fun;
          this.show = true;
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (!this.orders) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetOrders(this.sid);
            }
          }
        }, {
          key: "open",
          value: function open(order) {
            this.router.navigate(['/', 'customerorders', 'tabs', 'orders', 'details', order.id]);
          }
        }, {
          key: "GetOrders",
          value: function GetOrders(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.orderService.GetOrders(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.orders = res.data;
                          _this2.show = true;
                        } else {
                          _this2.show = false;
                        }
                      }, function (error) {
                        _this2.show = false;
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onShop",
          value: function onShop() {
            this.fun.navigate('home');
          }
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./orders.page.scss */
        "./src/app/customerorders/orders/orders.page.scss"))["default"]]
      })], OrdersPage);
      /***/
    },

    /***/
    "./src/app/sellersinventory/orders/orders-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/sellersinventory/orders/orders-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function srcAppSellersinventoryOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
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


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/sellersinventory/orders/orders.page.ts");

      var routes = [{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      };

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/orders/orders.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/sellersinventory/orders/orders.module.ts ***!
      \**********************************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function srcAppSellersinventoryOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
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


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-routing.module */
      "./src/app/sellersinventory/orders/orders-routing.module.ts");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/sellersinventory/orders/orders.page.ts");

      var OrdersPageModule = function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      };

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/orders/orders.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/sellersinventory/orders/orders.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersinventoryOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2ludmVudG9yeS9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLFNBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0FBVUoiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXJzaW52ZW50b3J5L29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnN1YntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaXRlbS1pY29ue1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZnVsbHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zbWFsbCB7XG4gICAgbWFyZ2luOiAwO1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDA7XG59XG4uaXRlbS1pY29uc3tcbiAgICBmb250LXNpemU6IDI0cHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/sellersinventory/orders/orders.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/sellersinventory/orders/orders.page.ts ***!
      \********************************************************/

    /*! exports provided: OrdersPage */

    /***/
    function srcAppSellersinventoryOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/order.service */
      "./src/app/services/order.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(router, authService, loadingCtrl, orderService, fun) {
          _classCallCheck(this, OrdersPage);

          this.router = router;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
          this.orderService = orderService;
          this.fun = fun;
          this.show = true;
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (!this.orders) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetOrders(this.sid);
            }
          }
        }, {
          key: "open",
          value: function open(order) {
            this.router.navigate(['/', 'sellersinventory', 'tabs', 'orders', 'details', order.id]);
          }
        }, {
          key: "GetOrders",
          value: function GetOrders(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      this.orderService.GetOrders(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this3.orders = res.data;
                          _this3.show = true;
                        } else {
                          _this3.show = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                        _this3.show = false;
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onShop",
          value: function onShop() {
            this.fun.navigate('home');
          }
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./orders.page.scss */
        "./src/app/sellersinventory/orders/orders.page.scss"))["default"]]
      })], OrdersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=orders-orders-module-es5.js.map