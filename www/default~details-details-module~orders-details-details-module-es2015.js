(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~details-details-module~orders-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/details/details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/details/details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Order Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.reference}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Status</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Items</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.product_count}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Date</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Time</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_time}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Cart</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.order_amount  | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Shipping</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.delivery_fees | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Discount</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">\n              <ion-text color=\"danger\">{{order?.discount_amount  | currency:'₦' }}</ion-text>\n            </h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.total_paid  | currency:'₦' }}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Seller</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.SellerDetails?.business_name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Packaging</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.SellerDetails?.shipEndDate}}</h6>\n            <h6 class=\"title ion-no-margin\">{{order.SellerDetails?.shipStartDate}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.SellerDetails?.business_phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.SellerDetails?.business_email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Customer</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.CustomerDetails?.CustName}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.CustomerDetails?.CustPhone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.CustomerDetails?.CustEmail}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Method</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.PaymentDetails?.payment_method}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order.PaymentDetails?.reference_code}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Address</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingTypeName}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order.ShippingAddressDetails?.addresstypename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order.ShippingAddressDetails?.phone}},\n          </h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order.ShippingAddressDetails?.address_line}},\n            {{order.ShippingAddressDetails?.close_to}},\n            {{order.ShippingAddressDetails?.streetname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order.ShippingAddressDetails?.busname}},\n            {{order.ShippingAddressDetails?.townname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order.ShippingAddressDetails?.lganame}},\n            {{order.ShippingAddressDetails?.statename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order.ShippingAddressDetails?.postal_code}}</h6>\n        </ion-text>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Products</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row *ngFor=\"let item of products\">\n        <ion-col>\n          <ion-row class=\"container-outer\">\n            <ion-col size=\"3\" class=\"ion-text-center container-inner\">\n              <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+item.ProductDetails?.FirstImage\" alt=\"\">\n            </ion-col>\n            <ion-col size=\"9\" auto>\n              <h3 class=\"item-name ion-no-margin\">{{item.ProductDetails.InfoDetails?.name}}</h3>\n              <h5 class=\"item-def ion-no-margin\">Quantity:<strong>\n                  <ion-text color=\"mytheme\">{{item.quantity}}</ion-text>\n                </strong></h5>\n              <h5 class=\"item-def ion-no-margin\">Price:\n                {{ item.ProductDetails.PriceDetails?.selling_price   | currency:'₦' }}</h5>\n              <h5 class=\"item-def ion-no-margin text-truncate\" style=\"max-width: 7.5em;\">\n                {{item.ProductDetails.SellerDetails?.SellerUserName}}</h5>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/admininventory/orders/details/details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admininventory/orders/details/details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/admininventory/orders/details/details.page.ts");




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

/***/ "./src/app/admininventory/orders/details/details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admininventory/orders/details/details.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/admininventory/orders/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/admininventory/orders/details/details.page.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/admininventory/orders/details/details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admininventory/orders/details/details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #5a5a5a !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvb3JkZXJzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFIQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQU1BOztBQUpBO0VBQ0EsV0FBQTtBQU9BOztBQUxBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFRQTs7QUFOQTtFQUNBLGlCQUFBO0FBU0E7O0FBUEE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFVQTs7QUFQQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVVBOztBQVJBO0VBQ0EsZUFBQTtBQVdBOztBQVRBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZQTs7QUFWQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQWFBOztBQVhBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBY0E7O0FBWkE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWVBOztBQWJBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFnQkE7O0FBZEE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWlCQTs7QUFmQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWtCQTs7QUFmQTtFQUNBLGVBQUE7QUFrQkEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmludmVudG9yeS9vcmRlcnMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKSAhaW1wb3J0YW50O1xufVxuLmNhcmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZ3JheXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLnN1YntcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmN1dHtcbmNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG50ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5ibHVle1xuY29sb3I6IGJsdWU7XG59XG4uc2VwIHtcbmhlaWdodDogMXB4O1xuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xud2lkdGg6IDEwMHZ3O1xubWFyZ2luOiA2cHggMDtcbn1cbi50ZXh0IHtcbmZvbnQtc2l6ZTogLjgxZW07XG59XG4uc2VsZWN0IHtcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbmJvcmRlci1yYWRpdXM6IDNweDtcbmJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbnBhZGRpbmc6IDZweCAxMnB4O1xubWluLXdpZHRoOiAxMDAlO1xuXG59XG4uY2FyZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbm1hcmdpbi10b3A6IDlweDtcbn1cbmRpdntcbm1pbi13aWR0aDogMTAwJTtcbn1cbi5pdGVtLW5hbWUge1xuZm9udC1zaXplOiAxZW07XG5jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xufVxuLnNtYWxsIHtcbm1hcmdpbjogMDtcbmZvbnQtc2l6ZTogLjgxZW07XG59XG4uaXRlbS1kZWYge1xuZm9udC1zaXplOiAuODFlbTtcbmNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG59XG4uY29udGFpbmVyLW91dGVyIHtcbm92ZXJmbG93OiBzY3JvbGw7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC13cmFwOiBub3dyYXA7XG59XG4uY29udGFpbmVyLWlubmVyIHtcbm1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xubWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG5kaXNwbGF5OiBpbmxpbmU7XG5wYWRkaW5nOiAzcHg7XG5hbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5zcG9uLWltZyB7XG5taW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG5tYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG5tYXJnaW46IDNweDtcbn1cbi50ZXh0LXRydW5jYXRlIHtcbndoaXRlLXNwYWNlOiBub3dyYXA7XG5vdmVyZmxvdzogaGlkZGVuO1xudGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zbWFsbC1pY28ge1xuZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admininventory/orders/details/details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/admininventory/orders/details/details.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let DetailsPage = class DetailsPage {
    constructor(route, fun) {
        this.route = route;
        this.fun = fun;
        this.customAlertOptions = {
            header: 'Select Rate Value',
            translucent: true
        };
        this.productAlertOptions = {
            header: 'Select Product',
            translucent: true
        };
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('orderId')) {
                return false;
            }
            this.orderId = paramMap.get('orderId');
            // this.order = this.fun.getNavigationData(this.orderId);
            // this.products = this.order.HistoryDetails;
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/admininventory/orders/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=default~details-details-module~orders-details-details-module-es2015.js.map