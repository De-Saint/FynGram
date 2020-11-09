(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customeraccounts-customeraccounts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/customeraccounts.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/customeraccounts.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"transactions\">\n      <ion-label>Transactions</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"payments\">\n      <ion-label>Payments</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"discounts\">\n      <ion-label>Discounts</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/customeraccounts/customeraccounts-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/customeraccounts/customeraccounts-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomeraccountsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeraccountsPageRoutingModule", function() { return CustomeraccountsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customeraccounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customeraccounts.page */ "./src/app/customeraccounts/customeraccounts.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _customeraccounts_page__WEBPACK_IMPORTED_MODULE_3__["CustomeraccountsPage"],
        children: [
            {
                path: 'transactions',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | transactions-transactions-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("transactions-transactions-module")]).then(__webpack_require__.bind(null, /*! ./transactions/transactions.module */ "./src/app/customeraccounts/transactions/transactions.module.ts")).then(m => m.TransactionsPageModule)
                    }
                ]
            },
            {
                path: 'payments',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | payments-payments-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("payments-payments-module")]).then(__webpack_require__.bind(null, /*! ./payments/payments.module */ "./src/app/customeraccounts/payments/payments.module.ts")).then(m => m.PaymentsPageModule)
                    }
                ]
            },
            {
                path: 'discounts',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | discounts-discounts-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("discounts-discounts-module")]).then(__webpack_require__.bind(null, /*! ./discounts/discounts.module */ "./src/app/customeraccounts/discounts/discounts.module.ts")).then(m => m.DiscountsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/customeraccounts/tabs/discounts',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/customeraccounts/tabs/discounts',
        pathMatch: 'full'
    }
];
let CustomeraccountsPageRoutingModule = class CustomeraccountsPageRoutingModule {
};
CustomeraccountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomeraccountsPageRoutingModule);



/***/ }),

/***/ "./src/app/customeraccounts/customeraccounts.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/customeraccounts/customeraccounts.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomeraccountsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeraccountsPageModule", function() { return CustomeraccountsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _customeraccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customeraccounts-routing.module */ "./src/app/customeraccounts/customeraccounts-routing.module.ts");
/* harmony import */ var _customeraccounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customeraccounts.page */ "./src/app/customeraccounts/customeraccounts.page.ts");







let CustomeraccountsPageModule = class CustomeraccountsPageModule {
};
CustomeraccountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customeraccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomeraccountsPageRoutingModule"]
        ],
        declarations: [_customeraccounts_page__WEBPACK_IMPORTED_MODULE_6__["CustomeraccountsPage"]]
    })
], CustomeraccountsPageModule);



/***/ }),

/***/ "./src/app/customeraccounts/customeraccounts.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/customeraccounts/customeraccounts.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyYWNjb3VudHMvY3VzdG9tZXJhY2NvdW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/customeraccounts/customeraccounts.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/customeraccounts/customeraccounts.page.ts ***!
  \***********************************************************/
/*! exports provided: CustomeraccountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeraccountsPage", function() { return CustomeraccountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CustomeraccountsPage = class CustomeraccountsPage {
    constructor() { }
    ngOnInit() {
    }
};
CustomeraccountsPage.ctorParameters = () => [];
CustomeraccountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customeraccounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customeraccounts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/customeraccounts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customeraccounts.page.scss */ "./src/app/customeraccounts/customeraccounts.page.scss")).default]
    })
], CustomeraccountsPage);



/***/ })

}]);
//# sourceMappingURL=customeraccounts-customeraccounts-module-es2015.js.map