(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["review-review-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/review/review.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/review/review.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeBuyProductdetailsReviewReviewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n    <ion-col size=\"6\">\n      <ion-row class=\"ion-justify-content-center ion-margin-top\">\n        <ion-text><h6  class=\"small gray ion-text-center\" color=\"light\"><strong>OVERALL</strong></h6></ion-text>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <!-- <ion-text >\n          <span class=\"margin\"><strong>{{product.rating}}</strong></span>\n          <ion-icon name=\"star\" color=\"mytheme\" *ngFor=\"let i of fun.array(product.rating)\"></ion-icon>\n          <ion-icon name=\"star-outline\" color=\"mytheme\" *ngFor=\"let i of fun.array(5-product.rating)\"></ion-icon>\n          <div class=\"margin rate-small\">{{product.rating_count}} Ratings</div>\n        </ion-text> -->\n        <!-- <ion-text *ngIf=\"!bool\">\n          <span class=\"margin\"><strong>{{product.store_rate}}</strong></span>\n          <ion-icon name=\"star\" color=\"mytheme\" *ngFor=\"let i of fun.array(product.store_rate)\"></ion-icon>\n          <ion-icon name=\"star-outline\" color=\"mytheme\" *ngFor=\"let i of fun.array(5-product.store_rate)\"></ion-icon>\n          <div class=\"margin rate-small\">{{product.store_rating_count}} Ratings</div>\n        </ion-text> -->\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <div class=\"sep\"></div>\n  <ion-row align-items-center class=\"row\">\n    <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\">All</ion-text></ion-button>\n    <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\"><ion-icon name=\"image\"></ion-icon></ion-text></ion-button>\n    <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\">Top Rated</ion-text></ion-button>\n    <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\"><ion-icon name=\"star\"></ion-icon></ion-text></ion-button>\n    <!-- <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\"><ion-icon name=\"star\" *ngFor=\"let i of fun.array(4)\"></ion-icon></ion-text></ion-button>\n    <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\"><ion-icon name=\"star\" *ngFor=\"let i of fun.array(3)\"></ion-icon></ion-text></ion-button>\n    <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\"><ion-icon name=\"star\" *ngFor=\"let i of fun.array(2)\"></ion-icon></ion-text></ion-button>\n    <ion-button fill=\"outline\" no-padding no-margin color=\"medium\" class=\"btn\"><ion-text class=\"filter-btn\"><ion-icon name=\"star\" *ngFor=\"let i of fun.array(1)\"></ion-icon></ion-text></ion-button> -->\n  </ion-row>\n  <div>\n    <ion-item >\n    <!-- <ion-item *ngFor=\"let review of reviews\"> -->\n      <ion-row>\n        <!-- <ion-col size=\"2\"><ion-avatar class=\"avatar\"><img [src]=\"review.image\"></ion-avatar></ion-col> -->\n        <ion-col>\n          <!-- <ion-row class=\"full block\">\n            <ion-icon float-right name=\"star\" class=\"small-ico\" color=\"mytheme\" *ngFor=\"let i of fun.array(review.rating)\"></ion-icon>\n            <ion-icon float-right name=\"star-outline\" class=\"small-ico\" color=\"mytheme\" *ngFor=\"let i of fun.array(5-review.rating)\"></ion-icon>\n            <h6 float-left text-start no-margin><strong>review.name}}</strong></h6><br>\n          </ion-row> -->\n          <ion-row class=\"full block\">\n            <h6 float-left text-start no-margin class=\"cmnt\">review.comment}}</h6><br>\n            <!-- <img float-left *ngFor=\"let img of review.images\" [src]=\"img\" class=\"rev-img\"> -->\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </div>\n  <!-- <div *ngIf=\"!bool\">\n    <ion-item *ngFor=\"let review of product.store_reviews\">\n      <ion-row>\n        <ion-col size=\"2\"><ion-avatar class=\"avatar\"><img [src]=\"review.image\"></ion-avatar></ion-col>\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-icon float-right name=\"star\" class=\"small-ico\" color=\"mytheme\" *ngFor=\"let i of fun.array(review.rating)\"></ion-icon>\n            <ion-icon float-right name=\"star-outline\" class=\"small-ico\" color=\"mytheme\" *ngFor=\"let i of fun.array(5-review.rating)\"></ion-icon>\n            <h6 float-left text-start no-margin><strong>{{review.name}}</strong></h6><br>\n          </ion-row>\n          <ion-row class=\"full block\">\n            <h6 float-left no-margin class=\"cmnt\">{{review.comment}}</h6><br>\n            <img float-left *ngFor=\"let img of review.images\" [src]=\"img\" class=\"rev-img\">\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </div> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/review/review-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/home/buy/productdetails/review/review-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ReviewPageRoutingModule */

    /***/
    function srcAppHomeBuyProductdetailsReviewReviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewPageRoutingModule", function () {
        return ReviewPageRoutingModule;
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


      var _review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./review.page */
      "./src/app/home/buy/productdetails/review/review.page.ts");

      var routes = [{
        path: '',
        component: _review_page__WEBPACK_IMPORTED_MODULE_3__["ReviewPage"]
      }];

      var ReviewPageRoutingModule = function ReviewPageRoutingModule() {
        _classCallCheck(this, ReviewPageRoutingModule);
      };

      ReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReviewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/review/review.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/home/buy/productdetails/review/review.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ReviewPageModule */

    /***/
    function srcAppHomeBuyProductdetailsReviewReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function () {
        return ReviewPageModule;
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


      var _review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./review-routing.module */
      "./src/app/home/buy/productdetails/review/review-routing.module.ts");
      /* harmony import */


      var _review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./review.page */
      "./src/app/home/buy/productdetails/review/review.page.ts");

      var ReviewPageModule = function ReviewPageModule() {
        _classCallCheck(this, ReviewPageModule);
      };

      ReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _review_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewPageRoutingModule"]],
        declarations: [_review_page__WEBPACK_IMPORTED_MODULE_6__["ReviewPage"]]
      })], ReviewPageModule);
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/review/review.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/home/buy/productdetails/review/review.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeBuyProductdetailsReviewReviewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9idXkvcHJvZHVjdGRldGFpbHMvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9idXkvcHJvZHVjdGRldGFpbHMvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheSB7XG4gICAgY29sb3I6IGdyYXk7XG59XG4ubWFyZ2luIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5jbW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc2VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG59XG4uZmlsdGVyLWJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLmJ0biB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4ucm93IHtcbiAgICBtYXJnaW46IDZweDtcbn1cbi5yYXRlLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uYXZhdGFyIHtcbiAgICB3aWR0aDogMzNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG4ucmV2LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4uc21hbGwtaWNvIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/review/review.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/home/buy/productdetails/review/review.page.ts ***!
      \***************************************************************/

    /*! exports provided: ReviewPage */

    /***/
    function srcAppHomeBuyProductdetailsReviewReviewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewPage", function () {
        return ReviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReviewPage = /*#__PURE__*/function () {
        function ReviewPage() {
          _classCallCheck(this, ReviewPage);
        }

        _createClass(ReviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReviewPage;
      }();

      ReviewPage.ctorParameters = function () {
        return [];
      };

      ReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./review.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/review/review.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./review.page.scss */
        "./src/app/home/buy/productdetails/review/review.page.scss"))["default"]]
      })], ReviewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=review-review-module-es5.js.map