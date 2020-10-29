(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashouts-cashouts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">CashOut Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Cashout Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>CashOut Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CashoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function() { return CashoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/adminwallet/cashouts/cashouts.page.ts");




const routes = [
    {
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
    }
];
let CashoutsPageRoutingModule = class CashoutsPageRoutingModule {
};
CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts.module.ts ***!
  \*********************************************************/
/*! exports provided: CashoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function() { return CashoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashouts-routing.module */ "./src/app/adminwallet/cashouts/cashouts-routing.module.ts");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/adminwallet/cashouts/cashouts.page.ts");







let CashoutsPageModule = class CashoutsPageModule {
};
CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]
        ],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
    })
], CashoutsPageModule);



/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlud2FsbGV0L2Nhc2hvdXRzL2Nhc2hvdXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts.page.ts ***!
  \*******************************************************/
/*! exports provided: CashoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPage", function() { return CashoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CashoutsPage = class CashoutsPage {
    constructor() { }
    ngOnInit() {
    }
};
CashoutsPage.ctorParameters = () => [];
CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashouts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashouts.page.scss */ "./src/app/adminwallet/cashouts/cashouts.page.scss")).default]
    })
], CashoutsPage);



/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CashoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function() { return CashoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/customerwallet/cashouts/cashouts.page.ts");




const routes = [
    {
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
    }
];
let CashoutsPageRoutingModule = class CashoutsPageRoutingModule {
};
CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts.module.ts":
/*!************************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts.module.ts ***!
  \************************************************************/
/*! exports provided: CashoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function() { return CashoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashouts-routing.module */ "./src/app/customerwallet/cashouts/cashouts-routing.module.ts");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/customerwallet/cashouts/cashouts.page.ts");







let CashoutsPageModule = class CashoutsPageModule {
};
CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]
        ],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
    })
], CashoutsPageModule);



/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts.page.scss":
/*!************************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyd2FsbGV0L2Nhc2hvdXRzL2Nhc2hvdXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts.page.ts ***!
  \**********************************************************/
/*! exports provided: CashoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPage", function() { return CashoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CashoutsPage = class CashoutsPage {
    constructor() { }
    ngOnInit() {
    }
};
CashoutsPage.ctorParameters = () => [];
CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashouts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashouts.page.scss */ "./src/app/customerwallet/cashouts/cashouts.page.scss")).default]
    })
], CashoutsPage);



/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CashoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function() { return CashoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/sellerswallet/cashouts/cashouts.page.ts");




const routes = [
    {
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
    }
];
let CashoutsPageRoutingModule = class CashoutsPageRoutingModule {
};
CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts.module.ts ***!
  \***********************************************************/
/*! exports provided: CashoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function() { return CashoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashouts-routing.module */ "./src/app/sellerswallet/cashouts/cashouts-routing.module.ts");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/sellerswallet/cashouts/cashouts.page.ts");







let CashoutsPageModule = class CashoutsPageModule {
};
CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]
        ],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
    })
], CashoutsPageModule);



/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvY2FzaG91dHMvY2FzaG91dHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts.page.ts ***!
  \*********************************************************/
/*! exports provided: CashoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPage", function() { return CashoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CashoutsPage = class CashoutsPage {
    constructor() { }
    ngOnInit() {
    }
};
CashoutsPage.ctorParameters = () => [];
CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashouts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashouts.page.scss */ "./src/app/sellerswallet/cashouts/cashouts.page.scss")).default]
    })
], CashoutsPage);



/***/ })

}]);
//# sourceMappingURL=cashouts-cashouts-module-es2015.js.map