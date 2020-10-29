(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerordersWishlistWishlistPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Wishlist</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: WishlistPageRoutingModule */

    /***/
    function srcAppCustomerordersWishlistWishlistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function () {
        return WishlistPageRoutingModule;
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


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/customerorders/wishlist/wishlist.page.ts");

      var routes = [{
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
      }];

      var WishlistPageRoutingModule = function WishlistPageRoutingModule() {
        _classCallCheck(this, WishlistPageRoutingModule);
      };

      WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WishlistPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist.module.ts ***!
      \************************************************************/

    /*! exports provided: WishlistPageModule */

    /***/
    function srcAppCustomerordersWishlistWishlistModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function () {
        return WishlistPageModule;
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


      var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wishlist-routing.module */
      "./src/app/customerorders/wishlist/wishlist-routing.module.ts");
      /* harmony import */


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/customerorders/wishlist/wishlist.page.ts");

      var WishlistPageModule = function WishlistPageModule() {
        _classCallCheck(this, WishlistPageModule);
      };

      WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
      })], WishlistPageModule);
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerordersWishlistWishlistPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyb3JkZXJzL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist.page.ts ***!
      \**********************************************************/

    /*! exports provided: WishlistPage */

    /***/
    function srcAppCustomerordersWishlistWishlistPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPage", function () {
        return WishlistPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WishlistPage = /*#__PURE__*/function () {
        function WishlistPage() {
          _classCallCheck(this, WishlistPage);
        }

        _createClass(WishlistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WishlistPage;
      }();

      WishlistPage.ctorParameters = function () {
        return [];
      };

      WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wishlist.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wishlist.page.scss */
        "./src/app/customerorders/wishlist/wishlist.page.scss"))["default"]]
      })], WishlistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=wishlist-wishlist-module-es5.js.map