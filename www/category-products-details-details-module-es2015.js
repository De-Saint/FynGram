(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-products-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/details/details.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/details/details.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToCart()\">\n        <ion-icon name=\"cart\" slot=\"icon-only\" class=\"white top-btn\" no-margin></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"onSearch()\">\n        <ion-icon name=\"search\" slot=\"icon-only\" class=\"white top-btn\" no-margin></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"mytheme\" class=\"segmenttoolbarSection\">\n    <ion-segment (ionChange)=\"segmentChanged()\" [(ngModel)]=\"segment\"  mode=\"md\" color=\"light\" id=\"dag\" class=\"segSection\">\n      <ion-segment-button value=\"0\" class=\"my-btn ion-no-margin ion-no-padding\">\n        <ion-text  class=\"text ion-padding-horizontal\">Overview</ion-text>\n      </ion-segment-button>\n      <ion-segment-button value=\"1\" class=\"my-btn ion-no-margin ion-no-padding\">\n        <ion-text  class=\"text ion-padding-horizontal\">Related</ion-text>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\" class=\"my-btn ion-no-margin ion-no-padding\"> \n        <ion-text  class=\"text ion-padding-horizontal\">Reviews</ion-text>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\"  pager=\"false\" [options]=\"slideOpts\">\n    <ion-slide>\n      <app-overview (notify)=\"onReviewClick($event)\" [product]=\"product\" [slider]=\"slider\"  class=\"slide\"></app-overview>\n    </ion-slide>\n    <ion-slide>\n      <app-related  class=\"slide\" [productId]=\"productId\"></app-related>\n    </ion-slide>\n    <ion-slide>\n      <app-review class=\"slide\" [product]=\"product\"></app-review>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer class=\"footer ion-align-items-center\"  *ngIf=\"segment == 0\">\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col class=\"ion-padding\">\n      <ion-text>\n        <h3  class=\"foot-highlight ion-no-margin\">{{ product?.PriceDetails?.selling_price | currency:'₦' }}</h3>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button (click)=\"onAddtoCart(product)\"  class=\"white foot-btn ion-float-right ion-no-margin\" color=\"light\"  expand=\"block\"><strong>Buy</strong></ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/overview/overview.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/overview/overview.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div>\n  <ion-row class=\"ion-no-padding\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let i of product?.ImageDetails3\">\n          <img class=\"image\" [src]=\"'data:image/png;base64,'+i.image_text\">\n          <div class=\"product-image-overlay\"></div>\n        </ion-slide>\n      </ion-slides>\n      <ion-badge class=\"badge\">\n        <ion-icon name=\"images\"></ion-icon>\n        {{product?.ImageDetails3.length}}\n      </ion-badge>\n      <ion-row class=\"hover-buttons ion-justify-content-end\">\n        <ion-icon *ngIf=\"!liked\" size=\"small\" name=\"heart-empty\" class=\"fab ion-float-right\" (click)=\"like(product)\">\n        </ion-icon>\n        <ion-icon *ngIf=\"liked\" size=\"small\" name=\"heart\" class=\"fab red ion-float-right\" (click)=\"like(product)\"></ion-icon>\n      </ion-row>\n    </ion-col> \n  </ion-row>\n  <div class=\"ion-padding\">\n    <ion-row lines=\"none\" class=\"row\">\n      <ion-text class=\"name\">{{product?.InfoDetails?.name}}</ion-text>\n    </ion-row>\n    <ion-row class=\"ion-float-left\">\n      <ion-icon name=\"star\" color=\"mytheme\" *ngFor=\"let i of computeRatings(product?.RatingDetails?.AverageRatings)\">\n      </ion-icon>\n      <ion-icon name=\"star-outline\" color=\"mytheme\"\n        *ngFor=\"let i of computeRatings2(product?.RatingDetails?.AverageRatings)\"></ion-icon>\n      <h6 class=\"rate ion-no-margin ion-padding-start\" (click)=\"goToReviews()\">\n        ({{product?.RatingDetails?.NumberOfRatings}} Reviews) </h6>\n    </ion-row>\n    <ion-row class=\"ion-float-right\">\n      <small class=\"ion-float-right ion-no-margin\"><strong>{{product?.RootCatName}}</strong></small>\n    </ion-row>\n    <div style=\"clear: both;\"></div>\n    <div class=\"sep\"></div>\n    <div>\n      <ion-text>\n        <span class=\"ion-float-left ion-no-margin\"><strong>Sold By</strong></span>\n      </ion-text>\n      <br>\n      <ion-text>\n        <span class=\"ion-float-left ion-no-margin\">{{product?.SellerDetails?.SellerUserName}}</span>\n      </ion-text>\n      <br>\n      <ion-text>\n        <h6 class=\"ion-float-left ion-no-margin\">{{product?.SellerDetails?.business_email}}</h6>\n      </ion-text><br>\n      <ion-text>\n        <h6 class=\"ion-float-left ion-no-margin\">{{product?.SellerDetails?.cac_number}}</h6>\n      </ion-text><br>\n    </div>\n    <div class=\"sep\"></div>\n    <ion-list lines=\"none\">\n      <ion-row class=\"full info\" (click)=\"toggle(0)\">\n        <ion-col size=\"9\">\n          <strong class=\"ion-float-left\">Item Specification</strong>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[0]\"></ion-icon>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[0]\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"full ion-margin-top\" *ngIf=\"open[0]\">\n        <ion-col>\n          <span class=\"ion-float-left\">{{product?.UnitDetails?.UnitName}}:   <span>{{product?.UnitDetails?.value}}</span></span>\n        </ion-col>\n      </ion-row>\n      <div class=\"sep\"></div>\n      <ion-row class=\"full info\" (click)=\"toggle(1)\">\n        <ion-col size=\"9\">\n          <strong class=\"ion-float-left\">Description</strong>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[1]\"></ion-icon>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[1]\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-top\" *ngIf=\"open[1]\">\n        <ion-col>\n          <span class=\"ion-float-left\">{{product?.InfoDetails?.description}}</span>\n        </ion-col>\n      </ion-row>\n      <div class=\"sep\"></div>\n      <ion-row class=\"full info\" (click)=\"toggle(2)\">\n        <ion-col size=\"9\">\n          <strong class=\"ion-float-left\">Buyer Guarantee</strong>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[2]\"></ion-icon>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[2]\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-top\" *ngIf=\"open[2]\">\n        <ion-col >\n          <span class=\"ion-text-left\">You can return this product within 7 working days for an exchange but return does\n            not cover perishable goods.</span>\n        </ion-col>\n      </ion-row>\n      <div class=\"sep\"></div>\n      <ion-row class=\"full info\" (click)=\"toggle(3)\">\n        <ion-col size=\"9\">\n          <strong class=\"ion-float-left\">Shipping Information</strong>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[3]\"></ion-icon>\n          <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[3]\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"full ion-no-margin-top\" *ngIf=\"open[3]\">\n        <ion-col>\n          <span class=\"ion-float-left\">Standard Shipping: <strong> {{product?.SellerDetails?.shipStartDate}} -\n              {{product?.SellerDetails?.shipEndDate}}</strong></span>\n        </ion-col>\n        <br>\n        <ion-col>\n          <small ion-text color=\"mytheme\">If the product is bought today - {{computeDate()}}</small>\n        </ion-col>\n      </ion-row>\n\n    </ion-list>\n  </div>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/related/related.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/related/related.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\n  <ion-text hidden>{{getProductId(productId)}}  </ion-text>\n  <ion-row>\n    <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let data of products\" (click)=\"open(data)\">\n      <div class=\"img-wrapper\" [style.background-image]=\"'url(data:image/png;base64,' + data?.FirstImage\">\n      </div>\n      <p class=\"ion-no-margin text-truncate\"><strong>{{data?.InfoDetails?.name}}</strong></p>\n      <p class=\"ion-no-margin\">\n        {{ data?.PriceDetails?.selling_price | currency:'₦' }}\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/review/review.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/review/review.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"ion-align-items-center ion-justify-content-center\">\n  <ion-col size=\"6\">\n    <ion-row class=\"ion-justify-content-center ion-margin-top\">\n      <ion-text>\n        <h6 class=\"small gray ion-text-center\" color=\"light\"><strong>OVERALL</strong> <br>\n          <span class=\"margin\">{{product?.RatingDetails?.AverageRatings}}</span></h6>\n        \n      </ion-text>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-text>\n        \n        <ion-icon name=\"star\" color=\"mytheme\" *ngFor=\"let i of computeRatings(product?.RatingDetails?.AverageRatings)\">\n        </ion-icon>\n        <ion-icon name=\"star-outline\" color=\"mytheme\"\n          *ngFor=\"let i of computeRatings2(product?.RatingDetails?.AverageRatings)\"></ion-icon>\n        <div class=\"margin rate-small\">{{product?.RatingDetails?.NumberOfRatings}} Reviews</div>\n      </ion-text>\n    </ion-row>\n  </ion-col>\n</ion-row>\n<div class=\"sep\"></div>\n<ion-grid>\n  <ion-row *ngFor=\"let review of product?.ReviewDetails\">\n    <ion-col>\n      <ion-row class=\"full block\">\n        <ion-text class=\"ion-float-right\">\n          <ion-icon name=\"star\" class=\"small-ico\" color=\"mytheme\" *ngFor=\"let i of computeRatings(review.rate_value)\">\n          </ion-icon>\n          <ion-icon name=\"star-outline\" class=\"small-ico\" color=\"mytheme\"\n            *ngFor=\"let i of computeRatings(5-review.rate_value)\"></ion-icon>\n          <small> {{review.rate_value}}</small>\n        </ion-text>\n        <ion-text class=\"ion-float-left\">\n          <h6 class=\"ion-text-start ion-no-margin\"><strong>{{review.reviewUsername}}</strong></h6>\n        </ion-text>\n      </ion-row>\n      <div style=\"clear: both;\"></div>\n      <ion-row class=\"full block\">\n        <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{review.comment}}</h6>\n      </ion-row>\n      <div style=\"clear: both;\"></div>\n      <ion-row class=\"full block\">\n        <small class=\"ion-float-left ion-text-start ion-no-margin\">{{review.date}}</small>\n        <small class=\"ion-float-right ion-text-end ion-no-margin\">{{review.time}}</small>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ "./src/app/home/category/products/details/details-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/category/products/details/details-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/home/category/products/details/details.page.ts");




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/home/category/products/details/details.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/category/products/details/details.module.ts ***!
  \******************************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../review/review.component */ "./src/app/home/category/products/review/review.component.ts");
/* harmony import */ var _related_related_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../related/related.component */ "./src/app/home/category/products/related/related.component.ts");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../overview/overview.component */ "./src/app/home/category/products/overview/overview.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/home/category/products/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details.page */ "./src/app/home/category/products/details/details.page.ts");










let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_8__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_9__["DetailsPage"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"], _related_related_component__WEBPACK_IMPORTED_MODULE_2__["RelatedComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_1__["ReviewComponent"]],
        entryComponents: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"], _related_related_component__WEBPACK_IMPORTED_MODULE_2__["RelatedComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_1__["ReviewComponent"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/home/category/products/details/details.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/category/products/details/details.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  color: white !important;\n}\n\n.slide {\n  width: 100%;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white !important;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 21px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n  color: white !important;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.light-bg {\n  background: #f4f5f8;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.cut {\n  text-decoration: line-through;\n  display: inline-block;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.foot-highlight {\n  color: orange;\n  display: inline-block;\n  margin: auto;\n  margin-left: 9px;\n}\n\n.footer {\n  background-color: #0c0c0c;\n  color: #d2d2d2;\n}\n\n.foot-btn {\n  width: 100%;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFHSjs7QUFGSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUlSOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0FBT0o7O0FBTEE7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtBQVdKOztBQVRBO0VBQ0ksdUJBQUE7QUFZSjs7QUFWQTtFQUNJLGtCQUFBO0FBYUo7O0FBWkk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWNSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6bm9uZSAhaW1wb3J0YW50O1xuICAgIGlvbi10ZXh0e1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubGlnaHQtYmd7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cbi5teS1idG57XG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG4uaG9yLXNjcm9sbHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG4uY3V0IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmZvb3QtaGlnaGxpZ2h0IHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgICBjb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZvb3QtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiNkYWd7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uc2VnbWVudHRvb2xiYXJTZWN0aW9ue1xuICAgIC0tbWluLWhlaWdodDogMzBweDtcbiAgICAuc2VnU2VjdGlvbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XG4gICAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/category/products/details/details.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/category/products/details/details.page.ts ***!
  \****************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let DetailsPage = class DetailsPage {
    constructor(fun, loadingCtrl, shopService, activeRoute) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.shopService = shopService;
        this.activeRoute = activeRoute;
        this.segment = 0;
        this.index = 0;
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
    }
    ngOnInit() {
        this.activeRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('productId')) {
                return false;
            }
            this.productId = paramMap.get('productId');
            this.GetProductDetails(this.productId);
        });
    }
    onReviewClick(index) {
        this.index = index;
        this.slides.slideTo(index);
        this.content.scrollToTop();
        // this.drag();
    }
    goToCart() {
        this.fun.navigate('cart', false);
    }
    onSearch() {
        this.fun.navigate('search', false);
    }
    segmentChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slider.slideTo(this.segment);
        });
    }
    slideChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
        });
    }
    onAddtoCart(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.AddOption('Cart', product.id, product.PriceDetails.selling_price, String(1), 'Increase')
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.fun.presentToast(res.msg);
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    GetProductDetails(productId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetProductDetails(productId)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.product = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DetailsPage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['slides', { static: true },] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['Slides', { static: true },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['Content',] }]
};
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/home/category/products/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ }),

/***/ "./src/app/home/category/products/overview/overview.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/category/products/overview/overview.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\n.hover-buttons {\n  position: absolute;\n  bottom: -10px;\n  z-index: 10;\n  right: 15px;\n}\n\n.red {\n  color: red;\n}\n\n.price {\n  font-size: 15px;\n  float: left;\n  width: 100% !important;\n  text-align: center !important;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 12px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.row {\n  margin: 5px;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.progress-outer {\n  width: 96%;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n}\n\n.progress-inner {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: var(--ion-color-mytheme);\n}\n\n.info {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.name {\n  font-size: 18px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.avatar {\n  width: 53px;\n  height: 53px;\n}\n\n.avatar img {\n  height: 3em;\n  width: 4em;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n  transform: translateX(-16px);\n}\n\n.fab {\n  width: 25px;\n  height: 25px;\n  padding: 9px;\n  border-radius: 25px;\n  margin-left: 6px;\n  border: 0.6px solid rgba(0, 0, 0, 0.3);\n  background-color: white !important;\n}\n\n.rate {\n  color: var(--ion-color-mytheme) !important;\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n  display: block;\n}\n\nimg {\n  width: 360px !important;\n  height: 225px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFESjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFBQTtFQUNJLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFTSjs7QUFQQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQVdKOztBQVRBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtBQWFKOztBQVhBO0VBQ0ksZUFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFlSjs7QUFkSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBZ0JSOztBQWJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQWdCSjs7QUFkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0FBaUJKOztBQWZBO0VBQ0ksMENBQUE7RUFDQSxlQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBbUJKOztBQWpCQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7QUFvQkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NhdGVnb3J5L3Byb2R1Y3RzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcbiAgICAvLyBoZWlnaHQ6IDI3MHB4O1xufVxuLnByb2R1Y3QtaW1hZ2Utb3ZlcmxheXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA3NSUsd2hpdGUgMTAwJSk7XG59XG4uaG92ZXItYnV0dG9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMTVweDtcbn1cbi5yZWR7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5wcmljZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uaW5saW5lIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDhweCA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jbW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ucmV2LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4ucm93IHtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5zcG9uLWltZyB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY29udGFpbmVyLW91dGVyIHsgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXItaW5uZXIgeyBcbiAgICBtaW4td2lkdGg6IDEyMHB4OyBcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnByb2dyZXNzLW91dGVyIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5wcm9ncmVzcy1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn1cbi5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDUzcHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIHdpZHRoOiA0ZW07XG4gICAgfVxufVxuLnNlcCB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7XG59XG4uZmFiIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBib3JkZXI6IC42cHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5yYXRlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuaW1nIHtcbiAgICB3aWR0aDogMzYwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIyNXB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/category/products/overview/overview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/category/products/overview/overview.component.ts ***!
  \***********************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let OverviewComponent = class OverviewComponent {
    constructor(fun, shopService, authService, alertController, loadingCtrl) {
        this.fun = fun;
        this.shopService = shopService;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.slideOpts = {
            effect: 'flip'
        };
        this.open = [false, false, false, false];
        this.liked = false;
    }
    ngOnInit() { }
    goToReviews() {
        this.notify.emit(2);
    }
    toggle(i) {
        this.open[i] = !this.open[i];
    }
    remove() {
        this.slider.lockSwipes(true);
    }
    gainback() {
        this.slider.lockSwipes(false);
    }
    like(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.liked = !this.liked;
            if (this.like) {
                const usertype = this.authService.currentUserDataValue.usertype;
                if (usertype !== 'Guest') {
                    this.AddtoSavedItem(product);
                }
                else {
                    this.loginOrRegister();
                }
            }
        });
    }
    loginOrRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Wishlist!',
                message: 'Please, you need to Login or Register to add to WishList',
                buttons: [
                    {
                        text: 'Register',
                        cssClass: 'secondary',
                        handler: () => {
                            this.fun.navigate('/authenticate/register');
                        }
                    }, {
                        text: 'Login',
                        handler: () => {
                            this.fun.navigate('/authenticate');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.liked = !this.liked;
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    AddtoSavedItem(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.AddOption('SavedItems', product.id, product.PriceDetails.selling_price, String(1), 'Increase')
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.fun.presentToast(res.msg);
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    computeRatings(ratenumber) {
        return this.fun.array(parseInt(ratenumber));
    }
    computeRatings2(ratenumber) {
        return this.fun.array(5 - parseInt(ratenumber));
    }
    computeDate() {
        return this.fun.date(new Date());
    }
};
OverviewComponent.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
OverviewComponent.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    notify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
};
OverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-overview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/overview/overview.component.html")).default,
        inputs: ['slider', 'product',],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./overview.component.scss */ "./src/app/home/category/products/overview/overview.component.scss")).default]
    })
], OverviewComponent);



/***/ }),

/***/ "./src/app/home/category/products/related/related.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/category/products/related/related.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked: none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.img-wrapper {\n  min-height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9yZWxhdGVkL3JlbGF0ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0FBTUo7O0FBSkU7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFPSjs7QUFMRTtFQUNFLFlBQUE7QUFRSjs7QUFORTtFQUNFLHVCQUFBO0FBU0o7O0FBUEU7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQVlKOztBQVhJO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQWFOOztBQVZFO0VBQ0UsdUJBQUE7QUFhSjs7QUFWRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFhSjs7QUFYRTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWNOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9yZWxhdGVkL3JlbGF0ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByaWNlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAzcHg7XG4gIH1cbiAgLmlubGluZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgfVxuICAuYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuaG9yLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5zZWFyY2gtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgfVxuICAuaG9yLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5tZW51IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICAubXktYnRuIHtcbiAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcbiAgICBtYXJnaW46IDAgMTJweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgbWluLWhlaWdodDogMjVweDtcbiAgfVxuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJ0bi1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBpb24tdGV4dCB7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuICAjZGFnIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgfVxuICBcbiAgLmltZy13cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiAgLnRleHQtdHJ1bmNhdGUge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG4gIFxuICAiXX0= */");

/***/ }),

/***/ "./src/app/home/category/products/related/related.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/category/products/related/related.component.ts ***!
  \*********************************************************************/
/*! exports provided: RelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedComponent", function() { return RelatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let RelatedComponent = class RelatedComponent {
    constructor(loadingCtrl, fun, router, shopService) {
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.router = router;
        this.shopService = shopService;
        this.thatThingHappened = false;
    }
    ngOnInit() {
        this.navlink = this.fun.getNavLink();
    }
    getProductId(productid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.thatThingHappened) {
                this.thatThingHappened = true;
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.shopService.GetRelatedProducts(productid).subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.products = res.data;
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                });
            }
        });
    }
    open(product) {
        this.fun.navigate('home', false);
        if (this.navlink === 'buy') {
            this.router.navigate(['/', 'home', 'tabs', 'buy', 'products', 'details', product.id]);
        }
        else if (this.navlink === 'wishlist') {
            this.router.navigate(['/', 'customerorders', 'tabs', 'wishlist', 'products', 'details', product.id]);
        }
        else if (this.navlink === 'search') {
            this.router.navigate(['/', 'search', 'products', 'details', product.id]);
        }
        else {
            this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 'details', product.id]);
        }
    }
};
RelatedComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
];
RelatedComponent.propDecorators = {
    productId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
RelatedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-related',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./related.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/related/related.component.html")).default,
        inputs: ['productId'],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./related.component.scss */ "./src/app/home/category/products/related/related.component.scss")).default]
    })
], RelatedComponent);



/***/ }),

/***/ "./src/app/home/category/products/review/review.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/category/products/review/review.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7QUFhSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2F0ZWdvcnkvcHJvZHVjdHMvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmF5IHtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5tYXJnaW4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLmNtbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi5maWx0ZXItYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4uYnRuIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5yb3cge1xuICAgIG1hcmdpbjogNnB4O1xufVxuLnJhdGUtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5hdmF0YXIge1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMzNweDtcbn1cbi5yZXYtaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5zbWFsbC1pY28ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/category/products/review/review.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/category/products/review/review.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ReviewComponent = class ReviewComponent {
    constructor(fun) {
        this.fun = fun;
    }
    ngOnInit() { }
    computeRatings(ratenumber) {
        return this.fun.array(parseInt(ratenumber));
    }
    computeRatings2(ratenumber) {
        return this.fun.array(5 - parseInt(ratenumber));
    }
};
ReviewComponent.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] }
];
ReviewComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ReviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/review/review.component.html")).default,
        inputs: ['product'],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./review.component.scss */ "./src/app/home/category/products/review/review.component.scss")).default]
    })
], ReviewComponent);



/***/ })

}]);
//# sourceMappingURL=category-products-details-details-module-es2015.js.map