(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/address.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/address.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/address.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/address.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/customerprofile/address/address-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customerprofile/address/address-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.page */ "./src/app/customerprofile/address/address.page.ts");




const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "./src/app/customerprofile/address/address.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/address/address.module.ts ***!
  \***********************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/customerprofile/address/address-routing.module.ts");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/customerprofile/address/address.page.ts");







let AddressPageModule = class AddressPageModule {
};
AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/customerprofile/address/address.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/address/address.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJvZmlsZS9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customerprofile/address/address.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/customerprofile/address/address.page.ts ***!
  \*********************************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddressPage = class AddressPage {
    constructor() { }
    ngOnInit() {
    }
};
AddressPage.ctorParameters = () => [];
AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./address.page.scss */ "./src/app/customerprofile/address/address.page.scss")).default]
    })
], AddressPage);



/***/ }),

/***/ "./src/app/sellersprofile/address/address-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/sellersprofile/address/address-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.page */ "./src/app/sellersprofile/address/address.page.ts");




const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "./src/app/sellersprofile/address/address.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/sellersprofile/address/address.module.ts ***!
  \**********************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/sellersprofile/address/address-routing.module.ts");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/sellersprofile/address/address.page.ts");







let AddressPageModule = class AddressPageModule {
};
AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/sellersprofile/address/address.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/sellersprofile/address/address.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNwcm9maWxlL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sellersprofile/address/address.page.ts":
/*!********************************************************!*\
  !*** ./src/app/sellersprofile/address/address.page.ts ***!
  \********************************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddressPage = class AddressPage {
    constructor() { }
    ngOnInit() {
    }
};
AddressPage.ctorParameters = () => [];
AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./address.page.scss */ "./src/app/sellersprofile/address/address.page.scss")).default]
    })
], AddressPage);



/***/ })

}]);
//# sourceMappingURL=address-address-module-es2015.js.map