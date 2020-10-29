(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discounts-discounts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/discounts/discounts.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/discounts/discounts.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminwalletDiscountsDiscountsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Discount Codes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/discounts/discounts.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/discounts/discounts.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomeraccountsDiscountsDiscountsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Discount Codes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminwallet/discounts/discounts-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/adminwallet/discounts/discounts-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DiscountsPageRoutingModule */

    /***/
    function srcAppAdminwalletDiscountsDiscountsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountsPageRoutingModule", function () {
        return DiscountsPageRoutingModule;
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


      var _discounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./discounts.page */
      "./src/app/adminwallet/discounts/discounts.page.ts");

      var routes = [{
        path: '',
        component: _discounts_page__WEBPACK_IMPORTED_MODULE_3__["DiscountsPage"]
      }];

      var DiscountsPageRoutingModule = function DiscountsPageRoutingModule() {
        _classCallCheck(this, DiscountsPageRoutingModule);
      };

      DiscountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DiscountsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminwallet/discounts/discounts.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/adminwallet/discounts/discounts.module.ts ***!
      \***********************************************************/

    /*! exports provided: DiscountsPageModule */

    /***/
    function srcAppAdminwalletDiscountsDiscountsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountsPageModule", function () {
        return DiscountsPageModule;
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


      var _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./discounts-routing.module */
      "./src/app/adminwallet/discounts/discounts-routing.module.ts");
      /* harmony import */


      var _discounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./discounts.page */
      "./src/app/adminwallet/discounts/discounts.page.ts");

      var DiscountsPageModule = function DiscountsPageModule() {
        _classCallCheck(this, DiscountsPageModule);
      };

      DiscountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscountsPageRoutingModule"]],
        declarations: [_discounts_page__WEBPACK_IMPORTED_MODULE_6__["DiscountsPage"]]
      })], DiscountsPageModule);
      /***/
    },

    /***/
    "./src/app/adminwallet/discounts/discounts.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/adminwallet/discounts/discounts.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminwalletDiscountsDiscountsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlud2FsbGV0L2Rpc2NvdW50cy9kaXNjb3VudHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/adminwallet/discounts/discounts.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/adminwallet/discounts/discounts.page.ts ***!
      \*********************************************************/

    /*! exports provided: DiscountsPage */

    /***/
    function srcAppAdminwalletDiscountsDiscountsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountsPage", function () {
        return DiscountsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DiscountsPage = /*#__PURE__*/function () {
        function DiscountsPage() {
          _classCallCheck(this, DiscountsPage);
        }

        _createClass(DiscountsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DiscountsPage;
      }();

      DiscountsPage.ctorParameters = function () {
        return [];
      };

      DiscountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./discounts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/discounts/discounts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./discounts.page.scss */
        "./src/app/adminwallet/discounts/discounts.page.scss"))["default"]]
      })], DiscountsPage);
      /***/
    },

    /***/
    "./src/app/customeraccounts/discounts/discounts-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/customeraccounts/discounts/discounts-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: DiscountsPageRoutingModule */

    /***/
    function srcAppCustomeraccountsDiscountsDiscountsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountsPageRoutingModule", function () {
        return DiscountsPageRoutingModule;
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


      var _discounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./discounts.page */
      "./src/app/customeraccounts/discounts/discounts.page.ts");

      var routes = [{
        path: '',
        component: _discounts_page__WEBPACK_IMPORTED_MODULE_3__["DiscountsPage"]
      }];

      var DiscountsPageRoutingModule = function DiscountsPageRoutingModule() {
        _classCallCheck(this, DiscountsPageRoutingModule);
      };

      DiscountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DiscountsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customeraccounts/discounts/discounts.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/customeraccounts/discounts/discounts.module.ts ***!
      \****************************************************************/

    /*! exports provided: DiscountsPageModule */

    /***/
    function srcAppCustomeraccountsDiscountsDiscountsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountsPageModule", function () {
        return DiscountsPageModule;
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


      var _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./discounts-routing.module */
      "./src/app/customeraccounts/discounts/discounts-routing.module.ts");
      /* harmony import */


      var _discounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./discounts.page */
      "./src/app/customeraccounts/discounts/discounts.page.ts");

      var DiscountsPageModule = function DiscountsPageModule() {
        _classCallCheck(this, DiscountsPageModule);
      };

      DiscountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscountsPageRoutingModule"]],
        declarations: [_discounts_page__WEBPACK_IMPORTED_MODULE_6__["DiscountsPage"]]
      })], DiscountsPageModule);
      /***/
    },

    /***/
    "./src/app/customeraccounts/discounts/discounts.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/customeraccounts/discounts/discounts.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomeraccountsDiscountsDiscountsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyYWNjb3VudHMvZGlzY291bnRzL2Rpc2NvdW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/customeraccounts/discounts/discounts.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/customeraccounts/discounts/discounts.page.ts ***!
      \**************************************************************/

    /*! exports provided: DiscountsPage */

    /***/
    function srcAppCustomeraccountsDiscountsDiscountsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountsPage", function () {
        return DiscountsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DiscountsPage = /*#__PURE__*/function () {
        function DiscountsPage() {
          _classCallCheck(this, DiscountsPage);
        }

        _createClass(DiscountsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DiscountsPage;
      }();

      DiscountsPage.ctorParameters = function () {
        return [];
      };

      DiscountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./discounts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/discounts/discounts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./discounts.page.scss */
        "./src/app/customeraccounts/discounts/discounts.page.scss"))["default"]]
      })], DiscountsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=discounts-discounts-module-es5.js.map