(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscriptions-subscriptions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/subscriptions/subscriptions.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/subscriptions/subscriptions.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Subscriptions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/subscriptions/subscriptions.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/subscriptions/subscriptions.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Subscriptions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminaccounts/subscriptions/subscriptions-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/adminaccounts/subscriptions/subscriptions-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SubscriptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPageRoutingModule", function() { return SubscriptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscriptions.page */ "./src/app/adminaccounts/subscriptions/subscriptions.page.ts");




const routes = [
    {
        path: '',
        component: _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsPage"]
    }
];
let SubscriptionsPageRoutingModule = class SubscriptionsPageRoutingModule {
};
SubscriptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/adminaccounts/subscriptions/subscriptions.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/adminaccounts/subscriptions/subscriptions.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubscriptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPageModule", function() { return SubscriptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscriptions-routing.module */ "./src/app/adminaccounts/subscriptions/subscriptions-routing.module.ts");
/* harmony import */ var _subscriptions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscriptions.page */ "./src/app/adminaccounts/subscriptions/subscriptions.page.ts");







let SubscriptionsPageModule = class SubscriptionsPageModule {
};
SubscriptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionsPageRoutingModule"]
        ],
        declarations: [_subscriptions_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionsPage"]]
    })
], SubscriptionsPageModule);



/***/ }),

/***/ "./src/app/adminaccounts/subscriptions/subscriptions.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/adminaccounts/subscriptions/subscriptions.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluYWNjb3VudHMvc3Vic2NyaXB0aW9ucy9zdWJzY3JpcHRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/adminaccounts/subscriptions/subscriptions.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/adminaccounts/subscriptions/subscriptions.page.ts ***!
  \*******************************************************************/
/*! exports provided: SubscriptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPage", function() { return SubscriptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SubscriptionsPage = class SubscriptionsPage {
    constructor() { }
    ngOnInit() {
    }
};
SubscriptionsPage.ctorParameters = () => [];
SubscriptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscriptions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subscriptions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/subscriptions/subscriptions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subscriptions.page.scss */ "./src/app/adminaccounts/subscriptions/subscriptions.page.scss")).default]
    })
], SubscriptionsPage);



/***/ }),

/***/ "./src/app/sellersaccounts/subscriptions/subscriptions-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sellersaccounts/subscriptions/subscriptions-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SubscriptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPageRoutingModule", function() { return SubscriptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscriptions.page */ "./src/app/sellersaccounts/subscriptions/subscriptions.page.ts");




const routes = [
    {
        path: '',
        component: _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsPage"]
    }
];
let SubscriptionsPageRoutingModule = class SubscriptionsPageRoutingModule {
};
SubscriptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/sellersaccounts/subscriptions/subscriptions.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sellersaccounts/subscriptions/subscriptions.module.ts ***!
  \***********************************************************************/
/*! exports provided: SubscriptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPageModule", function() { return SubscriptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscriptions-routing.module */ "./src/app/sellersaccounts/subscriptions/subscriptions-routing.module.ts");
/* harmony import */ var _subscriptions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscriptions.page */ "./src/app/sellersaccounts/subscriptions/subscriptions.page.ts");







let SubscriptionsPageModule = class SubscriptionsPageModule {
};
SubscriptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionsPageRoutingModule"]
        ],
        declarations: [_subscriptions_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionsPage"]]
    })
], SubscriptionsPageModule);



/***/ }),

/***/ "./src/app/sellersaccounts/subscriptions/subscriptions.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sellersaccounts/subscriptions/subscriptions.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNhY2NvdW50cy9zdWJzY3JpcHRpb25zL3N1YnNjcmlwdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/sellersaccounts/subscriptions/subscriptions.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sellersaccounts/subscriptions/subscriptions.page.ts ***!
  \*********************************************************************/
/*! exports provided: SubscriptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPage", function() { return SubscriptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SubscriptionsPage = class SubscriptionsPage {
    constructor() { }
    ngOnInit() {
    }
};
SubscriptionsPage.ctorParameters = () => [];
SubscriptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscriptions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subscriptions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/subscriptions/subscriptions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subscriptions.page.scss */ "./src/app/sellersaccounts/subscriptions/subscriptions.page.scss")).default]
    })
], SubscriptionsPage);



/***/ })

}]);
//# sourceMappingURL=subscriptions-subscriptions-module-es2015.js.map