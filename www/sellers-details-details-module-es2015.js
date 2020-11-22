(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellers-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/details/details.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/details/details.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onDelete(seller)\" >\n        <ion-icon name=\"trash\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{seller?.title}}. {{seller?.UserName}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Business</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{seller?.business_name}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.business_email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.business_phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">CAC</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.cac_number}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n \n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Gender</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.gender}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Date Added</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.date}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Shipping Min</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.shipping_days_min}} Days</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Shipping Max</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.shipping_days_max}} Days</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Main Balance</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.WalletDetails?.MainBalance | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Pending Balance</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.WalletDetails?.PendingBalance | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Number</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.WalletDetails?.wallet_number}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\" *ngIf=\"seller?.BankDetails?.bankName\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Bank Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.BankDetails?.bankName}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Account Number</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.BankDetails?.account_number}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Account Type</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.BankDetails?.account_type}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Order</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.ordercount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Reviews</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.reviewcount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Payments</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.paymentcount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Messages</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.msgcount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Transactions</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.transactioncount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total CashOuts</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{seller?.cashoutcount}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      \n\n    </ion-col>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/adminusers/sellers/details/details-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/adminusers/sellers/details/details-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/adminusers/sellers/details/details.page.ts");




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

/***/ "./src/app/adminusers/sellers/details/details.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminusers/sellers/details/details.module.ts ***!
  \**************************************************************/
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
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/adminusers/sellers/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/adminusers/sellers/details/details.page.ts");







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

/***/ "./src/app/adminusers/sellers/details/details.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/adminusers/sellers/details/details.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #5a5a5a !important;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\nimg {\n  width: 360px !important;\n  height: 225px !important;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW51c2Vycy9zZWxsZXJzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FBRUo7O0FBQUU7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBR0o7O0FBREU7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0FBTUo7O0FBSkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxFO0VBQ0UsZUFBQTtBQVFKOztBQU5FO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FBU0o7O0FBUEU7RUFDRSxXQUFBO0FBVUo7O0FBUkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVRFO0VBQ0UsaUJBQUE7QUFZSjs7QUFWRTtFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFWRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhFO0VBQ0UsZUFBQTtBQWNKOztBQVpFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFlSjs7QUFiRTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQWdCSjs7QUFkRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQWlCSjs7QUFmRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBa0JKOztBQWhCRTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBbUJKOztBQWpCRTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBb0JKOztBQWxCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXFCSjs7QUFsQkU7RUFDRSxlQUFBO0FBcUJKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW51c2Vycy9zZWxsZXJzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9kdWN0LWltYWdlLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDc1JSwgd2hpdGUgMTAwJSk7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMzYwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIyNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcGFkZGluZzogOHB4IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIG1pbi13aWR0aDogNDVweDtcbiAgICBib3JkZXI6IDAuNnB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jYXJkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICB9XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5ncmF5IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgfVxuICAuc3ViIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmN1dCB7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuICAuYmx1ZSB7XG4gICAgY29sb3I6IGJsdWU7XG4gIH1cbiAgLnNlcCB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDZweCAwO1xuICB9XG4gIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDAuODFlbTtcbiAgfVxuICAuc2VsZWN0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgfVxuICBkaXYge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuICAuaXRlbS1uYW1lIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xuICB9XG4gIC5zbWFsbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC44MWVtO1xuICB9XG4gIC5pdGVtLWRlZiB7XG4gICAgZm9udC1zaXplOiAwLjgxZW07XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgfVxuICAuY29udGFpbmVyLW91dGVyIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbiAgLmNvbnRhaW5lci1pbm5lciB7XG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuc3Bvbi1pbWcge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzcHg7XG4gIH1cbiAgLnRleHQtdHJ1bmNhdGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBcbiAgLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/adminusers/sellers/details/details.page.ts":
/*!************************************************************!*\
  !*** ./src/app/adminusers/sellers/details/details.page.ts ***!
  \************************************************************/
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
            if (!paramMap.has('sellerId')) {
                return false;
            }
            this.sellerId = paramMap.get('sellerId');
            this.seller = this.fun.getNavigationData(this.sellerId);
            console.log(this.seller);
        });
    }
    onDelete(seller) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('seller').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.DeleteCustomer(String(seller.userid))
                        .subscribe(res => {
                        loading.dismiss().catch(() => { });
                        if (res.code === 200) {
                            this.fun.presentToast(res.msg);
                            this.router.navigate(['/', 'adminusers', 'tabs', 'sellers']);
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/adminusers/sellers/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=sellers-details-details-module-es2015.js.map