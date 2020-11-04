(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellersinventory-sellersinventory-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/sellersinventory.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/sellersinventory.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersinventorySellersinventoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"products\">\n      <ion-label>Products</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"orders\">\n      <ion-label>Orders</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"stock\">\n      <ion-label>Stock</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/sellersinventory/sellersinventory-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/sellersinventory/sellersinventory-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SellersinventoryPageRoutingModule */

    /***/
    function srcAppSellersinventorySellersinventoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersinventoryPageRoutingModule", function () {
        return SellersinventoryPageRoutingModule;
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


      var _sellersinventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sellersinventory.page */
      "./src/app/sellersinventory/sellersinventory.page.ts");

      var routes = [{
        path: 'tabs',
        component: _sellersinventory_page__WEBPACK_IMPORTED_MODULE_3__["SellersinventoryPage"],
        children: [{
          path: 'products',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | products-products-module */
              "products-products-module").then(__webpack_require__.bind(null,
              /*! ./products/products.module */
              "./src/app/sellersinventory/products/products.module.ts")).then(function (m) {
                return m.ProductsPageModule;
              });
            }
          }]
        }, {
          path: 'orders',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | orders-orders-module */
              "orders-orders-module").then(__webpack_require__.bind(null,
              /*! ./orders/orders.module */
              "./src/app/sellersinventory/orders/orders.module.ts")).then(function (m) {
                return m.OrdersPageModule;
              });
            }
          }]
        }, {
          path: 'stock',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | stock-stock-module */
              "stock-stock-module").then(__webpack_require__.bind(null,
              /*! ./stock/stock.module */
              "./src/app/sellersinventory/stock/stock.module.ts")).then(function (m) {
                return m.StockPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/sellersinventory/tabs/products',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/sellersinventory/tabs/products',
        pathMatch: 'full'
      }];

      var SellersinventoryPageRoutingModule = function SellersinventoryPageRoutingModule() {
        _classCallCheck(this, SellersinventoryPageRoutingModule);
      };

      SellersinventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellersinventoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/sellersinventory.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/sellersinventory/sellersinventory.module.ts ***!
      \*************************************************************/

    /*! exports provided: SellersinventoryPageModule */

    /***/
    function srcAppSellersinventorySellersinventoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersinventoryPageModule", function () {
        return SellersinventoryPageModule;
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


      var _sellersinventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sellersinventory-routing.module */
      "./src/app/sellersinventory/sellersinventory-routing.module.ts");
      /* harmony import */


      var _sellersinventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sellersinventory.page */
      "./src/app/sellersinventory/sellersinventory.page.ts");

      var SellersinventoryPageModule = function SellersinventoryPageModule() {
        _classCallCheck(this, SellersinventoryPageModule);
      };

      SellersinventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sellersinventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersinventoryPageRoutingModule"]],
        declarations: [_sellersinventory_page__WEBPACK_IMPORTED_MODULE_6__["SellersinventoryPage"]]
      })], SellersinventoryPageModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/sellersinventory.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/sellersinventory/sellersinventory.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersinventorySellersinventoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNpbnZlbnRvcnkvc2VsbGVyc2ludmVudG9yeS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/sellersinventory/sellersinventory.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/sellersinventory/sellersinventory.page.ts ***!
      \***********************************************************/

    /*! exports provided: SellersinventoryPage */

    /***/
    function srcAppSellersinventorySellersinventoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersinventoryPage", function () {
        return SellersinventoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SellersinventoryPage = /*#__PURE__*/function () {
        function SellersinventoryPage() {
          _classCallCheck(this, SellersinventoryPage);
        }

        _createClass(SellersinventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellersinventoryPage;
      }();

      SellersinventoryPage.ctorParameters = function () {
        return [];
      };

      SellersinventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellersinventory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sellersinventory.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/sellersinventory.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sellersinventory.page.scss */
        "./src/app/sellersinventory/sellersinventory.page.scss"))["default"]]
      })], SellersinventoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sellersinventory-sellersinventory-module-es5.js.map