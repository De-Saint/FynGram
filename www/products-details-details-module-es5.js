(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-details-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/products/details/details.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/products/details/details.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdmininventoryProductsDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Product Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let i of product?.ImageDetails3\">\n            <img class=\"image\" [src]=\"'data:image/png;base64,'+i.image_text\">\n            <div class=\"product-image-overlay\"></div>\n          </ion-slide>\n        </ion-slides>\n        <ion-badge class=\"badge\">\n          <ion-icon name=\"images\"></ion-icon>\n          {{product?.ImageDetails3.length}}\n        </ion-badge>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{product?.InfoDetails?.name}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Status</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.status}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Description</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.InfoDetails?.description}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Date Added</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Time Added</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.time}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Selling Price</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.PriceDetails?.selling_price | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Cost Price</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.PriceDetails?.cost_price | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.QuantityDetails?.total_quantity}} (Qty)</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Minimum</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.QuantityDetails?.minimum_quantity}} (Qty)</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Unit Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.UnitDetails?.UnitName}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Value</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.UnitDetails?.value}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Seller</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.business_name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.business_phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.business_email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Ratings</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n\n          <ion-icon name=\"star\" color=\"mytheme\"\n            *ngFor=\"let i of computeRatings(product?.RatingDetails?.AverageRatings)\">\n          </ion-icon>\n          <ion-icon name=\"star-outline\" color=\"mytheme\"\n            *ngFor=\"let i of computeRatings2(product?.RatingDetails?.AverageRatings)\">\n          </ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reviews</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.RatingDetails?.NumberOfRatings}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/products/details/details.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/products/details/details.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersinventoryProductsDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Product Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let i of product?.ImageDetails3\">\n            <img class=\"image\" [src]=\"'data:image/png;base64,'+i.image_text\">\n            <div class=\"product-image-overlay\"></div>\n          </ion-slide>\n        </ion-slides>\n        <ion-badge class=\"badge\">\n          <ion-icon name=\"images\"></ion-icon>\n          {{product?.ImageDetails3.length}}\n        </ion-badge>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{product?.InfoDetails?.name}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Status</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.status}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Description</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.InfoDetails?.description}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Date Added</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Time Added</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.time}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Selling Price</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.PriceDetails?.selling_price | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Cost Price</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.PriceDetails?.cost_price | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.QuantityDetails?.total_quantity}} (Qty)</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Minimum</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.QuantityDetails?.minimum_quantity}} (Qty)</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Unit Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.UnitDetails?.UnitName}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Value</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.UnitDetails?.value}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Seller</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.business_name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.business_phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.SellerDetails?.business_email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Ratings</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n\n          <ion-icon name=\"star\" color=\"mytheme\"\n            *ngFor=\"let i of computeRatings(product?.RatingDetails?.AverageRatings)\">\n          </ion-icon>\n          <ion-icon name=\"star-outline\" color=\"mytheme\"\n            *ngFor=\"let i of computeRatings2(product?.RatingDetails?.AverageRatings)\">\n          </ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reviews</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{product?.RatingDetails?.NumberOfRatings}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/admininventory/products/details/details-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/admininventory/products/details/details-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function srcAppAdmininventoryProductsDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
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


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/admininventory/products/details/details.page.ts");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admininventory/products/details/details.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/admininventory/products/details/details.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function srcAppAdmininventoryProductsDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "./src/app/admininventory/products/details/details-routing.module.ts");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/admininventory/products/details/details.page.ts");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "./src/app/admininventory/products/details/details.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/admininventory/products/details/details.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdmininventoryProductsDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: #5a5a5a !important;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\nimg {\n  width: 360px !important;\n  height: 225px !important;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvcHJvZHVjdHMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUFFRjs7QUFBQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUFHRjs7QUFEQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7QUFRRjs7QUFOQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQVNGOztBQVBBO0VBQ0UsV0FBQTtBQVVGOztBQVJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0FBWUY7O0FBVkE7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7QUFjRjs7QUFaQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBZUY7O0FBYkE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFpQkY7O0FBZkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQW1CRjs7QUFqQkE7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQW9CRjs7QUFsQkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFxQkY7O0FBbEJBO0VBQ0UsZUFBQTtBQXFCRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaW52ZW50b3J5L3Byb2R1Y3RzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCkgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LWltYWdlLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA3NSUsIHdoaXRlIDEwMCUpO1xufVxuaW1nIHtcbiAgd2lkdGg6IDM2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjI1cHggIWltcG9ydGFudDtcbn1cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogOHB4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB6LWluZGV4OiA5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZ3JheSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbn1cbi5zdWIge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY3V0IHtcbiAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuLnNlcCB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiA2cHggMDtcbn1cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAwLjgxZW07XG59XG4uc2VsZWN0IHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cbmRpdiB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbn1cbi5zbWFsbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjgxZW07XG59XG4uaXRlbS1kZWYge1xuICBmb250LXNpemU6IDAuODFlbTtcbiAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbn1cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXItaW5uZXIge1xuICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogM3B4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5zcG9uLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDNweDtcbn1cbi50ZXh0LXRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zbWFsbC1pY28ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/admininventory/products/details/details.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/admininventory/products/details/details.page.ts ***!
      \*****************************************************************/

    /*! exports provided: DetailsPage */

    /***/
    function srcAppAdmininventoryProductsDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../home/service/shop.service */
      "./src/app/home/service/shop.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(route, loadingCtrl, shopService, fun) {
          _classCallCheck(this, DetailsPage);

          this.route = route;
          this.loadingCtrl = loadingCtrl;
          this.shopService = shopService;
          this.fun = fun;
          this.slideOpts = {
            effect: 'flip'
          };
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('productId')) {
                return false;
              }

              _this.productId = paramMap.get('productId');

              _this.GetProductDetails(_this.productId);
            });
          }
        }, {
          key: "GetProductDetails",
          value: function GetProductDetails(productId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      this.shopService.GetProductDetails(productId).subscribe(function (res) {
                        console.log(res);
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.product = res.data;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "computeRatings",
          value: function computeRatings(ratenumber) {
            return this.fun.array(parseInt(ratenumber));
          }
        }, {
          key: "computeRatings2",
          value: function computeRatings2(ratenumber) {
            return this.fun.array(5 - parseInt(ratenumber));
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]
        }, {
          type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }];
      };

      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/products/details/details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details.page.scss */
        "./src/app/admininventory/products/details/details.page.scss"))["default"]]
      })], DetailsPage);
      /***/
    },

    /***/
    "./src/app/sellersinventory/products/details/details-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/sellersinventory/products/details/details-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function srcAppSellersinventoryProductsDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
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


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/sellersinventory/products/details/details.page.ts");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/products/details/details.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/sellersinventory/products/details/details.module.ts ***!
      \*********************************************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function srcAppSellersinventoryProductsDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "./src/app/sellersinventory/products/details/details-routing.module.ts");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/sellersinventory/products/details/details.page.ts");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "./src/app/sellersinventory/products/details/details.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/sellersinventory/products/details/details.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersinventoryProductsDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: #5a5a5a !important;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\nimg {\n  width: 360px !important;\n  height: 225px !important;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2ludmVudG9yeS9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtBQUVKOztBQUFFO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUdKOztBQURFO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7QUFRSjs7QUFORTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQVNKOztBQVBFO0VBQ0UsV0FBQTtBQVVKOztBQVJFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFXSjs7QUFURTtFQUNFLGlCQUFBO0FBWUo7O0FBVkU7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFhSjs7QUFYRTtFQUNFLGVBQUE7QUFjSjs7QUFaRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBZUo7O0FBYkU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFnQko7O0FBZEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFpQko7O0FBZkU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWtCSjs7QUFoQkU7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQW1CSjs7QUFqQkU7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQW9CSjs7QUFsQkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFxQko7O0FBbEJFO0VBQ0UsZUFBQTtBQXFCSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNpbnZlbnRvcnkvcHJvZHVjdHMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2R1Y3QtaW1hZ2Utb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNzUlLCB3aGl0ZSAxMDAlKTtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAzNjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjI1cHggIWltcG9ydGFudDtcbiAgfVxuICAuYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbWluLXdpZHRoOiA0NXB4O1xuICAgIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgei1pbmRleDogOTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmdyYXkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICB9XG4gIC5zdWIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY3V0IHtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIC5ibHVlIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuICAuc2VwIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogNnB4IDA7XG4gIH1cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44MWVtO1xuICB9XG4gIC5zZWxlY3Qge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICB9XG4gIGRpdiB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG4gIC5pdGVtLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiByZ2IoMTIsIDEyLCAxMik7XG4gIH1cbiAgLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjgxZW07XG4gIH1cbiAgLml0ZW0tZGVmIHtcbiAgICBmb250LXNpemU6IDAuODFlbTtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICB9XG4gIC5jb250YWluZXItb3V0ZXIge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuICAuY29udGFpbmVyLWlubmVyIHtcbiAgICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5zcG9uLWltZyB7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDNweDtcbiAgfVxuICAudGV4dC10cnVuY2F0ZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIFxuICAuc21hbGwtaWNvIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/sellersinventory/products/details/details.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/sellersinventory/products/details/details.page.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailsPage */

    /***/
    function srcAppSellersinventoryProductsDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../home/service/shop.service */
      "./src/app/home/service/shop.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(route, loadingCtrl, shopService, fun) {
          _classCallCheck(this, DetailsPage);

          this.route = route;
          this.loadingCtrl = loadingCtrl;
          this.shopService = shopService;
          this.fun = fun;
          this.slideOpts = {
            effect: 'flip'
          };
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('productId')) {
                return false;
              }

              _this3.productId = paramMap.get('productId');

              _this3.GetProductDetails(_this3.productId);
            });
          }
        }, {
          key: "GetProductDetails",
          value: function GetProductDetails(productId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.shopService.GetProductDetails(productId).subscribe(function (res) {
                        console.log(res);
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this4.product = res.data;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "computeRatings",
          value: function computeRatings(ratenumber) {
            return this.fun.array(parseInt(ratenumber));
          }
        }, {
          key: "computeRatings2",
          value: function computeRatings2(ratenumber) {
            return this.fun.array(5 - parseInt(ratenumber));
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]
        }, {
          type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }];
      };

      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/products/details/details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details.page.scss */
        "./src/app/sellersinventory/products/details/details.page.scss"))["default"]]
      })], DetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=products-details-details-module-es5.js.map