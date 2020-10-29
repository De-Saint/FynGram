(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admindashboard-admindashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admindashboard/admindashboard.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admindashboard/admindashboard.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admindashboard/admindashboard-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admindashboard/admindashboard-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdmindashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardPageRoutingModule", function() { return AdmindashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admindashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admindashboard.page */ "./src/app/admindashboard/admindashboard.page.ts");




const routes = [
    {
        path: '',
        component: _admindashboard_page__WEBPACK_IMPORTED_MODULE_3__["AdmindashboardPage"]
    }
];
let AdmindashboardPageRoutingModule = class AdmindashboardPageRoutingModule {
};
AdmindashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmindashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/admindashboard/admindashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admindashboard/admindashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: AdmindashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardPageModule", function() { return AdmindashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admindashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admindashboard-routing.module */ "./src/app/admindashboard/admindashboard-routing.module.ts");
/* harmony import */ var _admindashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admindashboard.page */ "./src/app/admindashboard/admindashboard.page.ts");







let AdmindashboardPageModule = class AdmindashboardPageModule {
};
AdmindashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admindashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmindashboardPageRoutingModule"]
        ],
        declarations: [_admindashboard_page__WEBPACK_IMPORTED_MODULE_6__["AdmindashboardPage"]]
    })
], AdmindashboardPageModule);



/***/ }),

/***/ "./src/app/admindashboard/admindashboard.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/admindashboard/admindashboard.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluZGFzaGJvYXJkL2FkbWluZGFzaGJvYXJkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admindashboard/admindashboard.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/admindashboard/admindashboard.page.ts ***!
  \*******************************************************/
/*! exports provided: AdmindashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardPage", function() { return AdmindashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdmindashboardPage = class AdmindashboardPage {
    constructor() { }
    ngOnInit() {
    }
};
AdmindashboardPage.ctorParameters = () => [];
AdmindashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admindashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admindashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admindashboard/admindashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admindashboard.page.scss */ "./src/app/admindashboard/admindashboard.page.scss")).default]
    })
], AdmindashboardPage);



/***/ })

}]);
//# sourceMappingURL=admindashboard-admindashboard-module-es2015.js.map