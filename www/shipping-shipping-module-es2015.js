(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-shipping-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/shipping.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/shipping.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Shipping Companies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminusers/shipping/shipping-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/adminusers/shipping/shipping-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ShippingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPageRoutingModule", function() { return ShippingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shipping_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipping.page */ "./src/app/adminusers/shipping/shipping.page.ts");




const routes = [
    {
        path: '',
        component: _shipping_page__WEBPACK_IMPORTED_MODULE_3__["ShippingPage"]
    }
];
let ShippingPageRoutingModule = class ShippingPageRoutingModule {
};
ShippingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShippingPageRoutingModule);



/***/ }),

/***/ "./src/app/adminusers/shipping/shipping.module.ts":
/*!********************************************************!*\
  !*** ./src/app/adminusers/shipping/shipping.module.ts ***!
  \********************************************************/
/*! exports provided: ShippingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPageModule", function() { return ShippingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shipping_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping-routing.module */ "./src/app/adminusers/shipping/shipping-routing.module.ts");
/* harmony import */ var _shipping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping.page */ "./src/app/adminusers/shipping/shipping.page.ts");







let ShippingPageModule = class ShippingPageModule {
};
ShippingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shipping_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShippingPageRoutingModule"]
        ],
        declarations: [_shipping_page__WEBPACK_IMPORTED_MODULE_6__["ShippingPage"]]
    })
], ShippingPageModule);



/***/ }),

/***/ "./src/app/adminusers/shipping/shipping.page.scss":
/*!********************************************************!*\
  !*** ./src/app/adminusers/shipping/shipping.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWludXNlcnMvc2hpcHBpbmcvc2hpcHBpbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminusers/shipping/shipping.page.ts":
/*!******************************************************!*\
  !*** ./src/app/adminusers/shipping/shipping.page.ts ***!
  \******************************************************/
/*! exports provided: ShippingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPage", function() { return ShippingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ShippingPage = class ShippingPage {
    constructor() { }
    ngOnInit() {
    }
};
ShippingPage.ctorParameters = () => [];
ShippingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shipping.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/shipping.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shipping.page.scss */ "./src/app/adminusers/shipping/shipping.page.scss")).default]
    })
], ShippingPage);



/***/ })

}]);
//# sourceMappingURL=shipping-shipping-module-es2015.js.map