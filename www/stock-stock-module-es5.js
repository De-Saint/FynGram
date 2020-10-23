(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/stock/stock.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/stock/stock.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdmininventoryStockStockPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Stock</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/stock/stock.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/stock/stock.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersinventoryStockStockPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Stock</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/admininventory/stock/stock-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/admininventory/stock/stock-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: StockPageRoutingModule */

    /***/
    function srcAppAdmininventoryStockStockRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function () {
        return StockPageRoutingModule;
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


      var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stock.page */
      "./src/app/admininventory/stock/stock.page.ts");

      var routes = [{
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
      }];

      var StockPageRoutingModule = function StockPageRoutingModule() {
        _classCallCheck(this, StockPageRoutingModule);
      };

      StockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StockPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admininventory/stock/stock.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/admininventory/stock/stock.module.ts ***!
      \******************************************************/

    /*! exports provided: StockPageModule */

    /***/
    function srcAppAdmininventoryStockStockModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockPageModule", function () {
        return StockPageModule;
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


      var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./stock-routing.module */
      "./src/app/admininventory/stock/stock-routing.module.ts");
      /* harmony import */


      var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stock.page */
      "./src/app/admininventory/stock/stock.page.ts");

      var StockPageModule = function StockPageModule() {
        _classCallCheck(this, StockPageModule);
      };

      StockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockPageRoutingModule"]],
        declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"]]
      })], StockPageModule);
      /***/
    },

    /***/
    "./src/app/admininventory/stock/stock.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/admininventory/stock/stock.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdmininventoryStockStockPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaW52ZW50b3J5L3N0b2NrL3N0b2NrLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/admininventory/stock/stock.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/admininventory/stock/stock.page.ts ***!
      \****************************************************/

    /*! exports provided: StockPage */

    /***/
    function srcAppAdmininventoryStockStockPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockPage", function () {
        return StockPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StockPage = /*#__PURE__*/function () {
        function StockPage() {
          _classCallCheck(this, StockPage);
        }

        _createClass(StockPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StockPage;
      }();

      StockPage.ctorParameters = function () {
        return [];
      };

      StockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./stock.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/stock/stock.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./stock.page.scss */
        "./src/app/admininventory/stock/stock.page.scss"))["default"]]
      })], StockPage);
      /***/
    },

    /***/
    "./src/app/sellersinventory/stock/stock-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/sellersinventory/stock/stock-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: StockPageRoutingModule */

    /***/
    function srcAppSellersinventoryStockStockRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function () {
        return StockPageRoutingModule;
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


      var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stock.page */
      "./src/app/sellersinventory/stock/stock.page.ts");

      var routes = [{
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
      }];

      var StockPageRoutingModule = function StockPageRoutingModule() {
        _classCallCheck(this, StockPageRoutingModule);
      };

      StockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StockPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/stock/stock.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/sellersinventory/stock/stock.module.ts ***!
      \********************************************************/

    /*! exports provided: StockPageModule */

    /***/
    function srcAppSellersinventoryStockStockModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockPageModule", function () {
        return StockPageModule;
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


      var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./stock-routing.module */
      "./src/app/sellersinventory/stock/stock-routing.module.ts");
      /* harmony import */


      var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stock.page */
      "./src/app/sellersinventory/stock/stock.page.ts");

      var StockPageModule = function StockPageModule() {
        _classCallCheck(this, StockPageModule);
      };

      StockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockPageRoutingModule"]],
        declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"]]
      })], StockPageModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/stock/stock.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/sellersinventory/stock/stock.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersinventoryStockStockPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNpbnZlbnRvcnkvc3RvY2svc3RvY2sucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/sellersinventory/stock/stock.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/sellersinventory/stock/stock.page.ts ***!
      \******************************************************/

    /*! exports provided: StockPage */

    /***/
    function srcAppSellersinventoryStockStockPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockPage", function () {
        return StockPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StockPage = /*#__PURE__*/function () {
        function StockPage() {
          _classCallCheck(this, StockPage);
        }

        _createClass(StockPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StockPage;
      }();

      StockPage.ctorParameters = function () {
        return [];
      };

      StockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./stock.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/stock/stock.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./stock.page.scss */
        "./src/app/sellersinventory/stock/stock.page.scss"))["default"]]
      })], StockPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=stock-stock-module-es5.js.map