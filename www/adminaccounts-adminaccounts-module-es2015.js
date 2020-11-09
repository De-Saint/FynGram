(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminaccounts-adminaccounts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/adminaccounts.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/adminaccounts.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"transactions\">\n      <ion-label>Transactions</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"payments\">\n      <ion-label>Payments</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"subscriptions\">\n      <ion-label>Subscriptions</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/adminaccounts/adminaccounts-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/adminaccounts/adminaccounts-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminaccountsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminaccountsPageRoutingModule", function() { return AdminaccountsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adminaccounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminaccounts.page */ "./src/app/adminaccounts/adminaccounts.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _adminaccounts_page__WEBPACK_IMPORTED_MODULE_3__["AdminaccountsPage"],
        children: [
            {
                path: 'transactions',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | transactions-transactions-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("transactions-transactions-module")]).then(__webpack_require__.bind(null, /*! ./transactions/transactions.module */ "./src/app/adminaccounts/transactions/transactions.module.ts")).then(m => m.TransactionsPageModule)
                    }
                ]
            },
            {
                path: 'payments',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | payments-payments-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("payments-payments-module")]).then(__webpack_require__.bind(null, /*! ./payments/payments.module */ "./src/app/adminaccounts/payments/payments.module.ts")).then(m => m.PaymentsPageModule)
                    }
                ]
            },
            {
                path: 'subscriptions',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | subscriptions-subscriptions-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("subscriptions-subscriptions-module")]).then(__webpack_require__.bind(null, /*! ./subscriptions/subscriptions.module */ "./src/app/adminaccounts/subscriptions/subscriptions.module.ts")).then(m => m.SubscriptionsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/adminaccounts/tabs/discounts',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/adminaccounts/tabs/discounts',
        pathMatch: 'full'
    },
];
let AdminaccountsPageRoutingModule = class AdminaccountsPageRoutingModule {
};
AdminaccountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminaccountsPageRoutingModule);



/***/ }),

/***/ "./src/app/adminaccounts/adminaccounts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/adminaccounts/adminaccounts.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminaccountsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminaccountsPageModule", function() { return AdminaccountsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adminaccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminaccounts-routing.module */ "./src/app/adminaccounts/adminaccounts-routing.module.ts");
/* harmony import */ var _adminaccounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminaccounts.page */ "./src/app/adminaccounts/adminaccounts.page.ts");







let AdminaccountsPageModule = class AdminaccountsPageModule {
};
AdminaccountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adminaccounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminaccountsPageRoutingModule"]
        ],
        declarations: [_adminaccounts_page__WEBPACK_IMPORTED_MODULE_6__["AdminaccountsPage"]]
    })
], AdminaccountsPageModule);



/***/ }),

/***/ "./src/app/adminaccounts/adminaccounts.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/adminaccounts/adminaccounts.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluYWNjb3VudHMvYWRtaW5hY2NvdW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/adminaccounts/adminaccounts.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/adminaccounts/adminaccounts.page.ts ***!
  \*****************************************************/
/*! exports provided: AdminaccountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminaccountsPage", function() { return AdminaccountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdminaccountsPage = class AdminaccountsPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminaccountsPage.ctorParameters = () => [];
AdminaccountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminaccounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adminaccounts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/adminaccounts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adminaccounts.page.scss */ "./src/app/adminaccounts/adminaccounts.page.scss")).default]
    })
], AdminaccountsPage);



/***/ })

}]);
//# sourceMappingURL=adminaccounts-adminaccounts-module-es2015.js.map