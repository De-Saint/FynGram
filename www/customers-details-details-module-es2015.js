(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/customers/details/details.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/customers/details/details.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onDelete(customer)\" >\n        <ion-icon name=\"trash\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{customer?.title}}. {{customer?.UserName}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Gender</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.gender}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Date Added</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Main Balance</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.WalletDetails?.MainBalance | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Pending Balance</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.WalletDetails?.PendingBalance | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Number</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.WalletDetails?.wallet_number}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\" *ngIf=\"customer?.BankDetails?.bankName\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Bank Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.BankDetails?.bankName}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Account Number</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.BankDetails?.account_number}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Account Type</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.BankDetails?.account_type}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Order</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.ordercount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Reviews</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.reviewcount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Address</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.addresscount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Payments</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.paymentcount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Messages</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.msgcount}}</h6>\n            <!-- <h6 class=\"title ion-no-margin\">{{shipping?.total_earnings | currency:'₦'}}</h6> -->\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Transactions</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.transactioncount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total CashOuts</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.cashoutcount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Discounts</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{customer?.discountcodecount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/adminusers/customers/details/details-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/adminusers/customers/details/details-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/adminusers/customers/details/details.page.ts");




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

/***/ "./src/app/adminusers/customers/details/details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/adminusers/customers/details/details.module.ts ***!
  \****************************************************************/
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
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/adminusers/customers/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/adminusers/customers/details/details.page.ts");







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

/***/ "./src/app/adminusers/customers/details/details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/adminusers/customers/details/details.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #5a5a5a !important;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\nimg {\n  width: 360px !important;\n  height: 225px !important;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW51c2Vycy9jdXN0b21lcnMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUFFSjs7QUFBRTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFERTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7QUFNSjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEU7RUFDRSxlQUFBO0FBUUo7O0FBTkU7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUFTSjs7QUFQRTtFQUNFLFdBQUE7QUFVSjs7QUFSRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBV0o7O0FBVEU7RUFDRSxpQkFBQTtBQVlKOztBQVZFO0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEU7RUFDRSxlQUFBO0FBY0o7O0FBWkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQWVKOztBQWJFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQWRFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBaUJKOztBQWZFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFrQko7O0FBaEJFO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFtQko7O0FBakJFO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFvQko7O0FBbEJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBcUJKOztBQWxCRTtFQUNFLGVBQUE7QUFxQkoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnVzZXJzL2N1c3RvbWVycy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCkgIWltcG9ydGFudDtcbiAgfVxuICAucHJvZHVjdC1pbWFnZS1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA3NSUsIHdoaXRlIDEwMCUpO1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDM2MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMjVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDhweCA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuZ3JheSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG4gIH1cbiAgLnN1YiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5jdXQge1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLmJsdWUge1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG4gIC5zZXAge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgfVxuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjgxZW07XG4gIH1cbiAgLnNlbGVjdCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gIH1cbiAgZGl2IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbiAgLml0ZW0tbmFtZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgfVxuICAuc21hbGwge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuODFlbTtcbiAgfVxuICAuaXRlbS1kZWYge1xuICAgIGZvbnQtc2l6ZTogMC44MWVtO1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG4gIH1cbiAgLmNvbnRhaW5lci1vdXRlciB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIC5jb250YWluZXItaW5uZXIge1xuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNwb24taW1nIHtcbiAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogM3B4O1xuICB9XG4gIC50ZXh0LXRydW5jYXRlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgXG4gIC5zbWFsbC1pY28ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/adminusers/customers/details/details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminusers/customers/details/details.page.ts ***!
  \**************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let DetailsPage = class DetailsPage {
    constructor(route, router, authService, loadingCtrl, fun) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('customerId')) {
                return false;
            }
            this.customerId = paramMap.get('customerId');
            this.customer = this.fun.getNavigationData(this.customerId);
            console.log(this.customer);
        });
    }
    onDelete(customer) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('customer').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.DeleteCustomer(String(customer.userid))
                        .subscribe(res => {
                        loading.dismiss().catch(() => { });
                        if (res.code === 200) {
                            this.fun.presentToast(res.msg);
                            this.router.navigate(['/', 'adminusers', 'tabs', 'customers']);
                        }
                        else {
                            this.fun.presentToast(res.msg);
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                    });
                }
            }));
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/customers/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/adminusers/customers/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=customers-details-details-module-es2015.js.map