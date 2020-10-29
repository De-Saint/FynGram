(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellersdashboard-sellersdashboard-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersdashboard/sellersdashboard.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersdashboard/sellersdashboard.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersdashboardSellersdashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sellersdashboard/sellersdashboard-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/sellersdashboard/sellersdashboard-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SellersdashboardPageRoutingModule */

    /***/
    function srcAppSellersdashboardSellersdashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersdashboardPageRoutingModule", function () {
        return SellersdashboardPageRoutingModule;
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


      var _sellersdashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sellersdashboard.page */
      "./src/app/sellersdashboard/sellersdashboard.page.ts");

      var routes = [{
        path: '',
        component: _sellersdashboard_page__WEBPACK_IMPORTED_MODULE_3__["SellersdashboardPage"]
      }];

      var SellersdashboardPageRoutingModule = function SellersdashboardPageRoutingModule() {
        _classCallCheck(this, SellersdashboardPageRoutingModule);
      };

      SellersdashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellersdashboardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersdashboard/sellersdashboard.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/sellersdashboard/sellersdashboard.module.ts ***!
      \*************************************************************/

    /*! exports provided: SellersdashboardPageModule */

    /***/
    function srcAppSellersdashboardSellersdashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersdashboardPageModule", function () {
        return SellersdashboardPageModule;
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


      var _sellersdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sellersdashboard-routing.module */
      "./src/app/sellersdashboard/sellersdashboard-routing.module.ts");
      /* harmony import */


      var _sellersdashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sellersdashboard.page */
      "./src/app/sellersdashboard/sellersdashboard.page.ts");

      var SellersdashboardPageModule = function SellersdashboardPageModule() {
        _classCallCheck(this, SellersdashboardPageModule);
      };

      SellersdashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sellersdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersdashboardPageRoutingModule"]],
        declarations: [_sellersdashboard_page__WEBPACK_IMPORTED_MODULE_6__["SellersdashboardPage"]]
      })], SellersdashboardPageModule);
      /***/
    },

    /***/
    "./src/app/sellersdashboard/sellersdashboard.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/sellersdashboard/sellersdashboard.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersdashboardSellersdashboardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNkYXNoYm9hcmQvc2VsbGVyc2Rhc2hib2FyZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/sellersdashboard/sellersdashboard.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/sellersdashboard/sellersdashboard.page.ts ***!
      \***********************************************************/

    /*! exports provided: SellersdashboardPage */

    /***/
    function srcAppSellersdashboardSellersdashboardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersdashboardPage", function () {
        return SellersdashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SellersdashboardPage = /*#__PURE__*/function () {
        function SellersdashboardPage() {
          _classCallCheck(this, SellersdashboardPage);
        }

        _createClass(SellersdashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellersdashboardPage;
      }();

      SellersdashboardPage.ctorParameters = function () {
        return [];
      };

      SellersdashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellersdashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sellersdashboard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersdashboard/sellersdashboard.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sellersdashboard.page.scss */
        "./src/app/sellersdashboard/sellersdashboard.page.scss"))["default"]]
      })], SellersdashboardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sellersdashboard-sellersdashboard-module-es5.js.map