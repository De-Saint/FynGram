(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/details/details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/details/details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Order Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.reference}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Status</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Items</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.product_count}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Date</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Time</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_time}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Cart</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.order_amount  | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Shipping</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.delivery_fees | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Discount</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">\n              <ion-text color=\"danger\">{{order?.discount_amount  | currency:'₦' }}</ion-text>\n            </h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.total_paid  | currency:'₦' }}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Seller</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.business_name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Packaging</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.shipEndDate}}</h6>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.shipStartDate}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.business_phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.business_email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Customer</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.CustomerDetails?.CustName}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.CustomerDetails?.CustPhone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.CustomerDetails?.CustEmail}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Method</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.PaymentDetails?.payment_method}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.PaymentDetails?.reference_code}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Address</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingTypeName}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.addresstypename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.phone}},\n          </h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.address_line}},\n            {{order?.ShippingAddressDetails?.close_to}},\n            {{order?.ShippingAddressDetails?.streetname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.busname}},\n            {{order?.ShippingAddressDetails?.townname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.lganame}},\n            {{order?.ShippingAddressDetails?.statename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.postal_code}}</h6>\n        </ion-text>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n \n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Products</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row *ngFor=\"let item of order?.HistoryDetails\">\n        <ion-col>\n          <ion-row class=\"container-outer\">\n            <ion-col size=\"3\" class=\"ion-text-center container-inner\">\n              <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+item.ProductDetails?.FirstImage\" alt=\"\">\n            </ion-col>\n            <ion-col size=\"9\" auto>\n              <h3 class=\"item-name ion-no-margin\">{{item.ProductDetails?.InfoDetails?.name}}</h3>\n              <h5 class=\"item-def ion-no-margin\">Quantity:<strong>\n                  <ion-text color=\"mytheme\">{{item.quantity}}</ion-text>\n                </strong></h5>\n              <h5 class=\"item-def ion-no-margin\">Price:\n                {{ item.ProductDetails?.PriceDetails?.selling_price   | currency:'₦' }}</h5>\n              <h5 class=\"item-def ion-no-margin text-truncate\" style=\"max-width: 7.5em;\">\n                {{item.ProductDetails?.SellerDetails?.SellerUserName}}</h5>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/details/details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/details/details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Order Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n<ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.reference}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Status</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Items</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.product_count}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Date</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Time</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_time}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Cart</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.order_amount  | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Shipping</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.delivery_fees | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Discount</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">\n              <ion-text color=\"danger\">{{order?.discount_amount  | currency:'₦' }}</ion-text>\n            </h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.total_paid  | currency:'₦' }}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Method</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.PaymentDetails?.payment_method}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.PaymentDetails?.reference_code}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Address</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingTypeName}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.addresstypename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.phone}},\n          </h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.address_line}},\n            {{order?.ShippingAddressDetails?.close_to}},\n            {{order?.ShippingAddressDetails?.streetname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.busname}},\n            {{order?.ShippingAddressDetails?.townname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.lganame}},\n            {{order?.ShippingAddressDetails?.statename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.postal_code}}</h6>\n        </ion-text>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Products</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row *ngFor=\"let item of order?.HistoryDetails\">\n        <ion-col>\n          <ion-row class=\"container-outer\">\n            <ion-col size=\"3\" class=\"ion-text-center container-inner\">\n              <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+item.ProductDetails?.FirstImage\" alt=\"\">\n            </ion-col>\n            <ion-col size=\"9\">\n              <h3 class=\"item-name ion-no-margin\">{{item.ProductDetails.InfoDetails?.name}}</h3>\n              <h5 class=\"item-def ion-no-margin\">Quantity:<strong>\n                  <ion-text color=\"mytheme\">{{item.quantity}}</ion-text>\n                </strong></h5>\n              <h5 class=\"item-def ion-no-margin\">Price:\n                {{ item.ProductDetails.PriceDetails?.selling_price   | currency:'₦' }}</h5>\n              <h5 class=\"item-def ion-no-margin text-truncate\" style=\"max-width: 7.5em;\">\n                {{item.ProductDetails.SellerDetails?.SellerUserName}}</h5>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <form [formGroup]=\"reviewForm\">\n    <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n      <ion-col>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">Product Review</h6>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-text>\n              <h6 class=\"title gray ion-no-margin\">Product</h6>\n            </ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-select [interfaceOptions]=\"productAlertOptions\" formControlName=\"product\" class=\"select\"\n              placeholder=\"Select\">\n              <ion-select-option *ngFor=\"let product of products\" [(value)]=\"product.productid\">\n                {{product.ProductDetails.InfoDetails?.name}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-text>\n              <h6 class=\"title gray ion-no-margin\">Rate Value</h6>\n            </ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-select placeholder=\"Select\" formControlName=\"ratevalue\" mode=\"ios\" interface=\"popover\"\n              [interfaceOptions]=\"customAlertOptions\" class=\"small-ico select\">\n              <ion-select-option value=\"1\">1 - Worse</ion-select-option>\n              <ion-select-option value=\"2\">2 - Poor</ion-select-option>\n              <ion-select-option value=\"3\">3 - Average </ion-select-option>\n              <ion-select-option value=\"4\">4 - Good</ion-select-option>\n              <ion-select-option value=\"5\">5 - Excellent</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row size=\"12\" class=\"ion-justify-content-center\">\n          <ion-textarea class=\"select\" rows=\"4\" cols=\"20\" formControlName=\"comment\" maxlength=\"100\"\n            placeholder=\"Enter any notes here...\">\n          </ion-textarea>\n        </ion-row>\n        <ion-row size=\"12\" class=\"ion-justify-content-center\">\n          <ion-button color=\"success\" class=\"ion-margin-top\" (click)=\"onSubmit()\">\n            <span class=\"white\">Rate Product</span>\n          </ion-button>\n        </ion-row>\n      </ion-col>\n\n    </ion-item>\n  </form>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\" *ngIf=\"order?.StatusDetails?.name !== 'Cancelled'\">\n    <ion-col>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\">\n        <ion-button color=\"danger\" class=\"ion-margin-top\" (click)=\"onCancel(order)\">\n          <span class=\"white\">Cancel Order</span>\n        </ion-button>\n      </ion-row>\n    </ion-col>\n  </ion-item>  \n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/details/details.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/details/details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Order Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.reference}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Status</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Items</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.product_count}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Date</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Order Time</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.booking_time}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Cart</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.order_amount  | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Shipping</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.delivery_fees | currency:'₦' }}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Discount</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">\n              <ion-text color=\"danger\">{{order?.discount_amount  | currency:'₦' }}</ion-text>\n            </h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{order?.total_paid  | currency:'₦' }}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Seller</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.business_name}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Packaging</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.shipEndDate}}</h6>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.shipStartDate}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.business_phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.SellerDetails?.business_email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Customer</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.CustomerDetails?.CustName}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.CustomerDetails?.CustPhone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.CustomerDetails?.CustEmail}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Method</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.PaymentDetails?.payment_method}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Reference</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{order?.PaymentDetails?.reference_code}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Address</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingTypeName}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.addresstypename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.phone}},\n          </h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.address_line}},\n            {{order?.ShippingAddressDetails?.close_to}},\n            {{order?.ShippingAddressDetails?.streetname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.busname}},\n            {{order?.ShippingAddressDetails?.townname}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.lganame}},\n            {{order?.ShippingAddressDetails?.statename}}</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title gray ion-no-margin\">{{order?.ShippingAddressDetails?.postal_code}}</h6>\n        </ion-text>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n \n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-text>\n          <h6 class=\"title ion-no-margin\">Products</h6>\n        </ion-text>\n      </ion-row>\n      <ion-row *ngFor=\"let item of order?.HistoryDetails\">\n        <ion-col>\n          <ion-row class=\"container-outer\">\n            <ion-col size=\"3\" class=\"ion-text-center container-inner\">\n              <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+item.ProductDetails?.FirstImage\" alt=\"\">\n            </ion-col>\n            <ion-col size=\"9\" auto>\n              <h3 class=\"item-name ion-no-margin\">{{item.ProductDetails?.InfoDetails?.name}}</h3>\n              <h5 class=\"item-def ion-no-margin\">Quantity:<strong>\n                  <ion-text color=\"mytheme\">{{item.quantity}}</ion-text>\n                </strong></h5>\n              <h5 class=\"item-def ion-no-margin\">Price:\n                {{ item.ProductDetails?.PriceDetails?.selling_price   | currency:'₦' }}</h5>\n              <h5 class=\"item-def ion-no-margin text-truncate\" style=\"max-width: 7.5em;\">\n                {{item.ProductDetails?.SellerDetails?.SellerUserName}}</h5>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #5a5a5a !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvb3JkZXJzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0FBU0Y7O0FBUEE7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGNBQUE7QUFZRjs7QUFWQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQWFGOztBQVhBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBY0Y7O0FBWkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWVGOztBQWJBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFnQkY7O0FBZEE7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFmQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWtCRjs7QUFmQTtFQUNFLGVBQUE7QUFrQkYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmludmVudG9yeS9vcmRlcnMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKSAhaW1wb3J0YW50O1xufVxuLmNhcmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmdyYXkge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG59XG4uc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmN1dCB7XG4gIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn1cbi5zZXAge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogNnB4IDA7XG59XG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44MWVtO1xufVxuLnNlbGVjdCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5kaXYge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uaXRlbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc21hbGwge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44MWVtO1xufVxuLml0ZW0tZGVmIHtcbiAgZm9udC1zaXplOiAwLjgxZW07XG4gIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG59XG4uY29udGFpbmVyLW91dGVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uc3Bvbi1pbWcge1xuICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAzcHg7XG59XG4udGV4dC10cnVuY2F0ZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc21hbGwtaWNvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */");

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
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let DetailsPage = class DetailsPage {
    constructor(loadingCtrl, orderService, route, fun) {
        this.loadingCtrl = loadingCtrl;
        this.orderService = orderService;
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
            this.GetOrderDetails(this.orderId);
        });
    }
    GetOrderDetails(orderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.orderService.GetProductDetails(orderId)
                .subscribe(res => {
                console.log(res);
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.order = res.data;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/admininventory/orders/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ }),

/***/ "./src/app/customerorders/orders/details/details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customerorders/orders/details/details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/customerorders/orders/details/details.page.ts");




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

/***/ "./src/app/customerorders/orders/details/details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customerorders/orders/details/details.module.ts ***!
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
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/customerorders/orders/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/customerorders/orders/details/details.page.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/customerorders/orders/details/details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/customerorders/orders/details/details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #5a5a5a !important;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvb3JkZXJzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtBQVNGOztBQVBBO0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0FBVUY7O0FBUkE7RUFDRSxjQUFBO0FBV0Y7O0FBVEE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFZRjs7QUFWQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQWFGOztBQVhBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFjRjs7QUFaQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBZUY7O0FBYkE7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWdCRjs7QUFkQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlCRjs7QUFkQTtFQUNFLGVBQUE7QUFpQkYiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcm9yZGVycy9vcmRlcnMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApICFpbXBvcnRhbnQ7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uZ3JheXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbn1cbi5zdWJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmN1dHtcbiAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uYmx1ZXtcbiAgY29sb3I6IGJsdWU7XG59XG4uc2VwIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDZweCAwO1xufVxuLnRleHQge1xuICBmb250LXNpemU6IC44MWVtO1xufVxuLnNlbGVjdCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG5cbn1cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cbmRpdntcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IC44MWVtO1xufVxuLml0ZW0tZGVmIHtcbiAgZm9udC1zaXplOiAuODFlbTtcbiAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbn1cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXItaW5uZXIge1xuICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogM3B4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5zcG9uLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDNweDtcbn1cbi50ZXh0LXRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zbWFsbC1pY28ge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/customerorders/orders/details/details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/customerorders/orders/details/details.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");








let DetailsPage = class DetailsPage {
    constructor(route, authService, orderService, loadingCtrl, fun) {
        this.route = route;
        this.authService = authService;
        this.orderService = orderService;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.customAlertOptions = {
            header: 'Select Rate Value',
            translucent: true
        };
        this.productAlertOptions = {
            header: 'Select Product',
            translucent: true
        };
        this.reviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            ratevalue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            product: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('orderId')) {
                return false;
            }
            this.orderId = paramMap.get('orderId');
            this.GetOrderDetails(this.orderId);
        });
    }
    GetOrderDetails(orderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.orderService.GetProductDetails(orderId)
                .subscribe(res => {
                console.log(res);
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.order = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onCancel(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('order').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.sid = this.authService.currentUserDataValue.sid;
                    this.orderService.UpdateOrderStatus(String(this.sid), String(order.id), String(3)).subscribe(res => {
                        loading.dismiss().catch(() => { });
                        if (res.code === 200) {
                            this.fun.presentToast(res.msg);
                            this.reviewForm.value.comment = '';
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                        this.fun.presentToast(error);
                    });
                }
            }));
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.sid = this.authService.currentUserDataValue.sid;
            this.orderService.ReviewProduct(String(this.sid), String(this.reviewForm.value.product), String(this.reviewForm.value.ratevalue), this.reviewForm.value.comment).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.fun.presentToast(res.msg);
                    this.reviewForm.value.comment = '';
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.fun.presentToast(error);
            });
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_6__["FunctionsService"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/customerorders/orders/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ }),

/***/ "./src/app/sellersinventory/orders/details/details-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sellersinventory/orders/details/details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/sellersinventory/orders/details/details.page.ts");




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

/***/ "./src/app/sellersinventory/orders/details/details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sellersinventory/orders/details/details.module.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/sellersinventory/orders/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/sellersinventory/orders/details/details.page.ts");







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

/***/ "./src/app/sellersinventory/orders/details/details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/sellersinventory/orders/details/details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #5a5a5a !important;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2ludmVudG9yeS9vcmRlcnMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0FBU0Y7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxlQUFBO0FBVUY7O0FBUkE7RUFDRSxjQUFBO0FBV0Y7O0FBVEE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFZRjs7QUFWQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQWFGOztBQVhBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFjRjs7QUFaQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBZUY7O0FBYkE7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWdCRjs7QUFkQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlCRjs7QUFkQTtFQUNFLGVBQUE7QUFpQkYiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXJzaW52ZW50b3J5L29yZGVycy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBjb2xvcjogcmdiKDkwLCA5MCwgOTApICFpbXBvcnRhbnQ7XG59XG4uY2FyZCB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5ncmF5IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLnN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jdXQge1xuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5ibHVlIHtcbiAgY29sb3I6IGJsdWU7XG59XG4uc2VwIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDZweCAwO1xufVxuLnRleHQge1xuICBmb250LXNpemU6IDAuODFlbTtcbn1cbi5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuZGl2IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODFlbTtcbn1cbi5pdGVtLWRlZiB7XG4gIGZvbnQtc2l6ZTogMC44MWVtO1xuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLmNvbnRhaW5lci1vdXRlciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAzcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnNwb24taW1nIHtcbiAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogM3B4O1xufVxuLnRleHQtdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNtYWxsLWljbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/sellersinventory/orders/details/details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sellersinventory/orders/details/details.page.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let DetailsPage = class DetailsPage {
    constructor(loadingCtrl, orderService, route, fun) {
        this.loadingCtrl = loadingCtrl;
        this.orderService = orderService;
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
            this.GetOrderDetails(this.orderId);
        });
    }
    GetOrderDetails(orderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.orderService.GetProductDetails(orderId)
                .subscribe(res => {
                console.log(res);
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.order = res.data;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/sellersinventory/orders/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=orders-details-details-module-es2015.js.map