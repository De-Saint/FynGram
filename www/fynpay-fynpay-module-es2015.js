(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fynpay-fynpay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/fynpay.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/fynpay.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">FynPay Accounts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/fynpay.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/fynpay.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">FynPay Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/fynpay.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/fynpay.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">FynPay Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FynpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageRoutingModule", function() { return FynpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/adminwallet/fynpay/fynpay.page.ts");




const routes = [
    {
        path: '',
        component: _fynpay_page__WEBPACK_IMPORTED_MODULE_3__["FynpayPage"]
    }
];
let FynpayPageRoutingModule = class FynpayPageRoutingModule {
};
FynpayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FynpayPageRoutingModule);



/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay.module.ts ***!
  \*****************************************************/
/*! exports provided: FynpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageModule", function() { return FynpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fynpay-routing.module */ "./src/app/adminwallet/fynpay/fynpay-routing.module.ts");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/adminwallet/fynpay/fynpay.page.ts");







let FynpayPageModule = class FynpayPageModule {
};
FynpayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["FynpayPageRoutingModule"]
        ],
        declarations: [_fynpay_page__WEBPACK_IMPORTED_MODULE_6__["FynpayPage"]]
    })
], FynpayPageModule);



/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlud2FsbGV0L2Z5bnBheS9meW5wYXkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminwallet/fynpay/fynpay.page.ts":
/*!***************************************************!*\
  !*** ./src/app/adminwallet/fynpay/fynpay.page.ts ***!
  \***************************************************/
/*! exports provided: FynpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPage", function() { return FynpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FynpayPage = class FynpayPage {
    constructor() { }
    ngOnInit() {
    }
};
FynpayPage.ctorParameters = () => [];
FynpayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fynpay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fynpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/fynpay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fynpay.page.scss */ "./src/app/adminwallet/fynpay/fynpay.page.scss")).default]
    })
], FynpayPage);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: FynpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageRoutingModule", function() { return FynpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/customerwallet/fynpay/fynpay.page.ts");




const routes = [
    {
        path: '',
        component: _fynpay_page__WEBPACK_IMPORTED_MODULE_3__["FynpayPage"]
    }
];
let FynpayPageRoutingModule = class FynpayPageRoutingModule {
};
FynpayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FynpayPageRoutingModule);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay.module.ts":
/*!********************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay.module.ts ***!
  \********************************************************/
/*! exports provided: FynpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageModule", function() { return FynpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fynpay-routing.module */ "./src/app/customerwallet/fynpay/fynpay-routing.module.ts");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/customerwallet/fynpay/fynpay.page.ts");







let FynpayPageModule = class FynpayPageModule {
};
FynpayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["FynpayPageRoutingModule"]
        ],
        declarations: [_fynpay_page__WEBPACK_IMPORTED_MODULE_6__["FynpayPage"]]
    })
], FynpayPageModule);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay.page.scss":
/*!********************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyd2FsbGV0L2Z5bnBheS9meW5wYXkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customerwallet/fynpay/fynpay.page.ts":
/*!******************************************************!*\
  !*** ./src/app/customerwallet/fynpay/fynpay.page.ts ***!
  \******************************************************/
/*! exports provided: FynpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPage", function() { return FynpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FynpayPage = class FynpayPage {
    constructor() { }
    ngOnInit() {
    }
};
FynpayPage.ctorParameters = () => [];
FynpayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fynpay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fynpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/fynpay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fynpay.page.scss */ "./src/app/customerwallet/fynpay/fynpay.page.scss")).default]
    })
], FynpayPage);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FynpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageRoutingModule", function() { return FynpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/sellerswallet/fynpay/fynpay.page.ts");




const routes = [
    {
        path: '',
        component: _fynpay_page__WEBPACK_IMPORTED_MODULE_3__["FynpayPage"]
    }
];
let FynpayPageRoutingModule = class FynpayPageRoutingModule {
};
FynpayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FynpayPageRoutingModule);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay.module.ts ***!
  \*******************************************************/
/*! exports provided: FynpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPageModule", function() { return FynpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fynpay-routing.module */ "./src/app/sellerswallet/fynpay/fynpay-routing.module.ts");
/* harmony import */ var _fynpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fynpay.page */ "./src/app/sellerswallet/fynpay/fynpay.page.ts");







let FynpayPageModule = class FynpayPageModule {
};
FynpayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fynpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["FynpayPageRoutingModule"]
        ],
        declarations: [_fynpay_page__WEBPACK_IMPORTED_MODULE_6__["FynpayPage"]]
    })
], FynpayPageModule);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvZnlucGF5L2Z5bnBheS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sellerswallet/fynpay/fynpay.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/fynpay.page.ts ***!
  \*****************************************************/
/*! exports provided: FynpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FynpayPage", function() { return FynpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FynpayPage = class FynpayPage {
    constructor() { }
    ngOnInit() {
    }
};
FynpayPage.ctorParameters = () => [];
FynpayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fynpay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fynpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/fynpay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fynpay.page.scss */ "./src/app/sellerswallet/fynpay/fynpay.page.scss")).default]
    })
], FynpayPage);



/***/ })

}]);
//# sourceMappingURL=fynpay-fynpay-module-es2015.js.map