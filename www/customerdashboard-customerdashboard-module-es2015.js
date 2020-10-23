(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerdashboard-customerdashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdashboard/customerdashboard.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerdashboard/customerdashboard.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/customerdashboard/customerdashboard-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customerdashboard/customerdashboard-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerdashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdashboardPageRoutingModule", function() { return CustomerdashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customerdashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerdashboard.page */ "./src/app/customerdashboard/customerdashboard.page.ts");




const routes = [
    {
        path: '',
        component: _customerdashboard_page__WEBPACK_IMPORTED_MODULE_3__["CustomerdashboardPage"]
    }
];
let CustomerdashboardPageRoutingModule = class CustomerdashboardPageRoutingModule {
};
CustomerdashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerdashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/customerdashboard/customerdashboard.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/customerdashboard/customerdashboard.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomerdashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdashboardPageModule", function() { return CustomerdashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _customerdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerdashboard-routing.module */ "./src/app/customerdashboard/customerdashboard-routing.module.ts");
/* harmony import */ var _customerdashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerdashboard.page */ "./src/app/customerdashboard/customerdashboard.page.ts");







let CustomerdashboardPageModule = class CustomerdashboardPageModule {
};
CustomerdashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customerdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerdashboardPageRoutingModule"]
        ],
        declarations: [_customerdashboard_page__WEBPACK_IMPORTED_MODULE_6__["CustomerdashboardPage"]]
    })
], CustomerdashboardPageModule);



/***/ }),

/***/ "./src/app/customerdashboard/customerdashboard.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/customerdashboard/customerdashboard.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyZGFzaGJvYXJkL2N1c3RvbWVyZGFzaGJvYXJkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/customerdashboard/customerdashboard.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/customerdashboard/customerdashboard.page.ts ***!
  \*************************************************************/
/*! exports provided: CustomerdashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdashboardPage", function() { return CustomerdashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CustomerdashboardPage = class CustomerdashboardPage {
    constructor() { }
    ngOnInit() {
    }
};
CustomerdashboardPage.ctorParameters = () => [];
CustomerdashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerdashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customerdashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdashboard/customerdashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customerdashboard.page.scss */ "./src/app/customerdashboard/customerdashboard.page.scss")).default]
    })
], CustomerdashboardPage);



/***/ })

}]);
//# sourceMappingURL=customerdashboard-customerdashboard-module-es2015.js.map