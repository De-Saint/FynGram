(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellers-sellers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/sellers.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/sellers.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminusersSellersSellersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Sellers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminusers/sellers/sellers-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/adminusers/sellers/sellers-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: SellersPageRoutingModule */

    /***/
    function srcAppAdminusersSellersSellersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersPageRoutingModule", function () {
        return SellersPageRoutingModule;
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


      var _sellers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sellers.page */
      "./src/app/adminusers/sellers/sellers.page.ts");

      var routes = [{
        path: '',
        component: _sellers_page__WEBPACK_IMPORTED_MODULE_3__["SellersPage"]
      }];

      var SellersPageRoutingModule = function SellersPageRoutingModule() {
        _classCallCheck(this, SellersPageRoutingModule);
      };

      SellersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminusers/sellers/sellers.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/adminusers/sellers/sellers.module.ts ***!
      \******************************************************/

    /*! exports provided: SellersPageModule */

    /***/
    function srcAppAdminusersSellersSellersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersPageModule", function () {
        return SellersPageModule;
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


      var _sellers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sellers-routing.module */
      "./src/app/adminusers/sellers/sellers-routing.module.ts");
      /* harmony import */


      var _sellers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sellers.page */
      "./src/app/adminusers/sellers/sellers.page.ts");

      var SellersPageModule = function SellersPageModule() {
        _classCallCheck(this, SellersPageModule);
      };

      SellersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sellers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersPageRoutingModule"]],
        declarations: [_sellers_page__WEBPACK_IMPORTED_MODULE_6__["SellersPage"]]
      })], SellersPageModule);
      /***/
    },

    /***/
    "./src/app/adminusers/sellers/sellers.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/adminusers/sellers/sellers.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminusersSellersSellersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWludXNlcnMvc2VsbGVycy9zZWxsZXJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/adminusers/sellers/sellers.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/adminusers/sellers/sellers.page.ts ***!
      \****************************************************/

    /*! exports provided: SellersPage */

    /***/
    function srcAppAdminusersSellersSellersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersPage", function () {
        return SellersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SellersPage = /*#__PURE__*/function () {
        function SellersPage() {
          _classCallCheck(this, SellersPage);
        }

        _createClass(SellersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellersPage;
      }();

      SellersPage.ctorParameters = function () {
        return [];
      };

      SellersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sellers.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/sellers.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sellers.page.scss */
        "./src/app/adminusers/sellers/sellers.page.scss"))["default"]]
      })], SellersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sellers-sellers-module-es5.js.map