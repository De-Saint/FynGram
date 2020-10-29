(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/reviews/reviews.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/reviews/reviews.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminprofileReviewsReviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/reviews/reviews.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/reviews/reviews.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerprofileReviewsReviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ReviewsPageRoutingModule */

    /***/
    function srcAppAdminprofileReviewsReviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function () {
        return ReviewsPageRoutingModule;
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


      var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/adminprofile/reviews/reviews.page.ts");

      var routes = [{
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
      }];

      var ReviewsPageRoutingModule = function ReviewsPageRoutingModule() {
        _classCallCheck(this, ReviewsPageRoutingModule);
      };

      ReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReviewsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews.module.ts ***!
      \********************************************************/

    /*! exports provided: ReviewsPageModule */

    /***/
    function srcAppAdminprofileReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function () {
        return ReviewsPageModule;
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


      var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reviews-routing.module */
      "./src/app/adminprofile/reviews/reviews-routing.module.ts");
      /* harmony import */


      var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/adminprofile/reviews/reviews.page.ts");

      var ReviewsPageModule = function ReviewsPageModule() {
        _classCallCheck(this, ReviewsPageModule);
      };

      ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsPageRoutingModule"]],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
      })], ReviewsPageModule);
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminprofileReviewsReviewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucHJvZmlsZS9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews.page.ts ***!
      \******************************************************/

    /*! exports provided: ReviewsPage */

    /***/
    function srcAppAdminprofileReviewsReviewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPage", function () {
        return ReviewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReviewsPage = /*#__PURE__*/function () {
        function ReviewsPage() {
          _classCallCheck(this, ReviewsPage);
        }

        _createClass(ReviewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReviewsPage;
      }();

      ReviewsPage.ctorParameters = function () {
        return [];
      };

      ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reviews.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/reviews/reviews.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reviews.page.scss */
        "./src/app/adminprofile/reviews/reviews.page.scss"))["default"]]
      })], ReviewsPage);
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ReviewsPageRoutingModule */

    /***/
    function srcAppCustomerprofileReviewsReviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function () {
        return ReviewsPageRoutingModule;
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


      var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/customerprofile/reviews/reviews.page.ts");

      var routes = [{
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
      }];

      var ReviewsPageRoutingModule = function ReviewsPageRoutingModule() {
        _classCallCheck(this, ReviewsPageRoutingModule);
      };

      ReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReviewsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews.module.ts ***!
      \***********************************************************/

    /*! exports provided: ReviewsPageModule */

    /***/
    function srcAppCustomerprofileReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function () {
        return ReviewsPageModule;
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


      var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reviews-routing.module */
      "./src/app/customerprofile/reviews/reviews-routing.module.ts");
      /* harmony import */


      var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/customerprofile/reviews/reviews.page.ts");

      var ReviewsPageModule = function ReviewsPageModule() {
        _classCallCheck(this, ReviewsPageModule);
      };

      ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsPageRoutingModule"]],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
      })], ReviewsPageModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerprofileReviewsReviewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJvZmlsZS9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews.page.ts ***!
      \*********************************************************/

    /*! exports provided: ReviewsPage */

    /***/
    function srcAppCustomerprofileReviewsReviewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPage", function () {
        return ReviewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReviewsPage = /*#__PURE__*/function () {
        function ReviewsPage() {
          _classCallCheck(this, ReviewsPage);
        }

        _createClass(ReviewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReviewsPage;
      }();

      ReviewsPage.ctorParameters = function () {
        return [];
      };

      ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reviews.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/reviews/reviews.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reviews.page.scss */
        "./src/app/customerprofile/reviews/reviews.page.scss"))["default"]]
      })], ReviewsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=reviews-reviews-module-es5.js.map