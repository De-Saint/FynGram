(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banks-banks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/banks.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/banks.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Bank Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/banks.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/banks.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Banks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/customerwallet/banks/banks-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/customerwallet/banks/banks-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: BanksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksPageRoutingModule", function() { return BanksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _banks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banks.page */ "./src/app/customerwallet/banks/banks.page.ts");




const routes = [
    {
        path: '',
        component: _banks_page__WEBPACK_IMPORTED_MODULE_3__["BanksPage"]
    }
];
let BanksPageRoutingModule = class BanksPageRoutingModule {
};
BanksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BanksPageRoutingModule);



/***/ }),

/***/ "./src/app/customerwallet/banks/banks.module.ts":
/*!******************************************************!*\
  !*** ./src/app/customerwallet/banks/banks.module.ts ***!
  \******************************************************/
/*! exports provided: BanksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksPageModule", function() { return BanksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banks-routing.module */ "./src/app/customerwallet/banks/banks-routing.module.ts");
/* harmony import */ var _banks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banks.page */ "./src/app/customerwallet/banks/banks.page.ts");







let BanksPageModule = class BanksPageModule {
};
BanksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__["BanksPageRoutingModule"]
        ],
        declarations: [_banks_page__WEBPACK_IMPORTED_MODULE_6__["BanksPage"]]
    })
], BanksPageModule);



/***/ }),

/***/ "./src/app/customerwallet/banks/banks.page.scss":
/*!******************************************************!*\
  !*** ./src/app/customerwallet/banks/banks.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyd2FsbGV0L2JhbmtzL2JhbmtzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/customerwallet/banks/banks.page.ts":
/*!****************************************************!*\
  !*** ./src/app/customerwallet/banks/banks.page.ts ***!
  \****************************************************/
/*! exports provided: BanksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksPage", function() { return BanksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BanksPage = class BanksPage {
    constructor() { }
    ngOnInit() {
    }
};
BanksPage.ctorParameters = () => [];
BanksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banks',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./banks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/banks.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./banks.page.scss */ "./src/app/customerwallet/banks/banks.page.scss")).default]
    })
], BanksPage);



/***/ }),

/***/ "./src/app/sellerswallet/banks/banks-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/sellerswallet/banks/banks-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BanksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksPageRoutingModule", function() { return BanksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _banks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banks.page */ "./src/app/sellerswallet/banks/banks.page.ts");




const routes = [
    {
        path: '',
        component: _banks_page__WEBPACK_IMPORTED_MODULE_3__["BanksPage"]
    }
];
let BanksPageRoutingModule = class BanksPageRoutingModule {
};
BanksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BanksPageRoutingModule);



/***/ }),

/***/ "./src/app/sellerswallet/banks/banks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sellerswallet/banks/banks.module.ts ***!
  \*****************************************************/
/*! exports provided: BanksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksPageModule", function() { return BanksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banks-routing.module */ "./src/app/sellerswallet/banks/banks-routing.module.ts");
/* harmony import */ var _banks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banks.page */ "./src/app/sellerswallet/banks/banks.page.ts");







let BanksPageModule = class BanksPageModule {
};
BanksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__["BanksPageRoutingModule"]
        ],
        declarations: [_banks_page__WEBPACK_IMPORTED_MODULE_6__["BanksPage"]]
    })
], BanksPageModule);



/***/ }),

/***/ "./src/app/sellerswallet/banks/banks.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/sellerswallet/banks/banks.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvYmFua3MvYmFua3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/sellerswallet/banks/banks.page.ts":
/*!***************************************************!*\
  !*** ./src/app/sellerswallet/banks/banks.page.ts ***!
  \***************************************************/
/*! exports provided: BanksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksPage", function() { return BanksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BanksPage = class BanksPage {
    constructor() { }
    ngOnInit() {
    }
};
BanksPage.ctorParameters = () => [];
BanksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banks',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./banks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/banks.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./banks.page.scss */ "./src/app/sellerswallet/banks/banks.page.scss")).default]
    })
], BanksPage);



/***/ })

}]);
//# sourceMappingURL=banks-banks-module-es2015.js.map