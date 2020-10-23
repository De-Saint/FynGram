(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/transactions/transactions.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/transactions/transactions.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/transactions/transactions.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/transactions/transactions.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/transactions/transactions.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/transactions/transactions.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function() { return TransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.page */ "./src/app/adminaccounts/transactions/transactions.page.ts");




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions.module.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions-routing.module */ "./src/app/adminaccounts/transactions/transactions-routing.module.ts");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "./src/app/adminaccounts/transactions/transactions.page.ts");







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
    })
], TransactionsPageModule);



/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluYWNjb3VudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions.page.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransactionsPage = class TransactionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TransactionsPage.ctorParameters = () => [];
TransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transactions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/transactions/transactions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transactions.page.scss */ "./src/app/adminaccounts/transactions/transactions.page.scss")).default]
    })
], TransactionsPage);



/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function() { return TransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.page */ "./src/app/customeraccounts/transactions/transactions.page.ts");




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions.module.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions-routing.module */ "./src/app/customeraccounts/transactions/transactions-routing.module.ts");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "./src/app/customeraccounts/transactions/transactions.page.ts");







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
    })
], TransactionsPageModule);



/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyYWNjb3VudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions.page.ts ***!
  \********************************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransactionsPage = class TransactionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TransactionsPage.ctorParameters = () => [];
TransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transactions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/transactions/transactions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transactions.page.scss */ "./src/app/customeraccounts/transactions/transactions.page.scss")).default]
    })
], TransactionsPage);



/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function() { return TransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.page */ "./src/app/sellersaccounts/transactions/transactions.page.ts");




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions.module.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions-routing.module */ "./src/app/sellersaccounts/transactions/transactions-routing.module.ts");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "./src/app/sellersaccounts/transactions/transactions.page.ts");







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
    })
], TransactionsPageModule);



/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNhY2NvdW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions.page.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransactionsPage = class TransactionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TransactionsPage.ctorParameters = () => [];
TransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transactions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/transactions/transactions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transactions.page.scss */ "./src/app/sellersaccounts/transactions/transactions.page.scss")).default]
    })
], TransactionsPage);



/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module-es2015.js.map