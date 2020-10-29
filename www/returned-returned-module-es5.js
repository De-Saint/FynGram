(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["returned-returned-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/returned/returned.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/returned/returned.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerordersReturnedReturnedPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Orders Returned</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customerorders/returned/returned-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/customerorders/returned/returned-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: ReturnedPageRoutingModule */

    /***/
    function srcAppCustomerordersReturnedReturnedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnedPageRoutingModule", function () {
        return ReturnedPageRoutingModule;
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


      var _returned_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./returned.page */
      "./src/app/customerorders/returned/returned.page.ts");

      var routes = [{
        path: '',
        component: _returned_page__WEBPACK_IMPORTED_MODULE_3__["ReturnedPage"]
      }];

      var ReturnedPageRoutingModule = function ReturnedPageRoutingModule() {
        _classCallCheck(this, ReturnedPageRoutingModule);
      };

      ReturnedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReturnedPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerorders/returned/returned.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/customerorders/returned/returned.module.ts ***!
      \************************************************************/

    /*! exports provided: ReturnedPageModule */

    /***/
    function srcAppCustomerordersReturnedReturnedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnedPageModule", function () {
        return ReturnedPageModule;
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


      var _returned_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./returned-routing.module */
      "./src/app/customerorders/returned/returned-routing.module.ts");
      /* harmony import */


      var _returned_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./returned.page */
      "./src/app/customerorders/returned/returned.page.ts");

      var ReturnedPageModule = function ReturnedPageModule() {
        _classCallCheck(this, ReturnedPageModule);
      };

      ReturnedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _returned_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnedPageRoutingModule"]],
        declarations: [_returned_page__WEBPACK_IMPORTED_MODULE_6__["ReturnedPage"]]
      })], ReturnedPageModule);
      /***/
    },

    /***/
    "./src/app/customerorders/returned/returned.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/customerorders/returned/returned.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerordersReturnedReturnedPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyb3JkZXJzL3JldHVybmVkL3JldHVybmVkLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/customerorders/returned/returned.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/customerorders/returned/returned.page.ts ***!
      \**********************************************************/

    /*! exports provided: ReturnedPage */

    /***/
    function srcAppCustomerordersReturnedReturnedPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnedPage", function () {
        return ReturnedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReturnedPage = /*#__PURE__*/function () {
        function ReturnedPage() {
          _classCallCheck(this, ReturnedPage);
        }

        _createClass(ReturnedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReturnedPage;
      }();

      ReturnedPage.ctorParameters = function () {
        return [];
      };

      ReturnedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-returned',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./returned.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/returned/returned.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./returned.page.scss */
        "./src/app/customerorders/returned/returned.page.scss"))["default"]]
      })], ReturnedPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=returned-returned-module-es5.js.map