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


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaW52ZW50b3J5L29yZGVycy9vcmRlcnMucGFnZS5zY3NzIn0= */";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage() {
          _classCallCheck(this, OrdersPage);
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyb3JkZXJzL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIn0= */";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage() {
          _classCallCheck(this, OrdersPage);
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNpbnZlbnRvcnkvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MifQ== */";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage() {
          _classCallCheck(this, OrdersPage);
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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