(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellerswallet-sellerswallet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/sellerswallet.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/sellerswallet.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"fynpay\">\n      <ion-label>FynPay</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cashouts\">\n      <ion-label>CashOuts</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"banks\">\n      <ion-label>Banks</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/sellerswallet/sellerswallet-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/sellerswallet/sellerswallet-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SellerswalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerswalletPageRoutingModule", function() { return SellerswalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sellerswallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sellerswallet.page */ "./src/app/sellerswallet/sellerswallet.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _sellerswallet_page__WEBPACK_IMPORTED_MODULE_3__["SellerswalletPage"],
        children: [
            {
                path: 'fynpay',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | fynpay-fynpay-module */ "fynpay-fynpay-module").then(__webpack_require__.bind(null, /*! ./fynpay/fynpay.module */ "./src/app/sellerswallet/fynpay/fynpay.module.ts")).then(m => m.FynpayPageModule)
                    }
                ]
            },
            {
                path: 'cashouts',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | cashouts-cashouts-module */ "cashouts-cashouts-module").then(__webpack_require__.bind(null, /*! ./cashouts/cashouts.module */ "./src/app/sellerswallet/cashouts/cashouts.module.ts")).then(m => m.CashoutsPageModule)
                    }
                ]
            },
            {
                path: 'banks',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | banks-banks-module */ "banks-banks-module").then(__webpack_require__.bind(null, /*! ./banks/banks.module */ "./src/app/sellerswallet/banks/banks.module.ts")).then(m => m.BanksPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/sellerswallet/tabs/fynpay',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/sellerswallet/tabs/fynpay',
        pathMatch: 'full'
    },
];
let SellerswalletPageRoutingModule = class SellerswalletPageRoutingModule {
};
SellerswalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerswalletPageRoutingModule);



/***/ }),

/***/ "./src/app/sellerswallet/sellerswallet.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sellerswallet/sellerswallet.module.ts ***!
  \*******************************************************/
/*! exports provided: SellerswalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerswalletPageModule", function() { return SellerswalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sellerswallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sellerswallet-routing.module */ "./src/app/sellerswallet/sellerswallet-routing.module.ts");
/* harmony import */ var _sellerswallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sellerswallet.page */ "./src/app/sellerswallet/sellerswallet.page.ts");







let SellerswalletPageModule = class SellerswalletPageModule {
};
SellerswalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sellerswallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerswalletPageRoutingModule"]
        ],
        declarations: [_sellerswallet_page__WEBPACK_IMPORTED_MODULE_6__["SellerswalletPage"]]
    })
], SellerswalletPageModule);



/***/ }),

/***/ "./src/app/sellerswallet/sellerswallet.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/sellerswallet/sellerswallet.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvc2VsbGVyc3dhbGxldC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sellerswallet/sellerswallet.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/sellerswallet/sellerswallet.page.ts ***!
  \*****************************************************/
/*! exports provided: SellerswalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerswalletPage", function() { return SellerswalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SellerswalletPage = class SellerswalletPage {
    constructor() { }
    ngOnInit() {
    }
};
SellerswalletPage.ctorParameters = () => [];
SellerswalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellerswallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sellerswallet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/sellerswallet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sellerswallet.page.scss */ "./src/app/sellerswallet/sellerswallet.page.scss")).default]
    })
], SellerswalletPage);



/***/ })

}]);
//# sourceMappingURL=sellerswallet-sellerswallet-module-es2015.js.map