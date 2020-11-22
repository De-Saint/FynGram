(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminusers-adminusers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/adminusers.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/adminusers.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"sellers\">\n      <ion-label>Sellers</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"customers\">\n      <ion-label>Customers</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"shippings\">\n      <ion-label>Carriers</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/adminusers/adminusers-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/adminusers/adminusers-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminusersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusersPageRoutingModule", function() { return AdminusersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adminusers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminusers.page */ "./src/app/adminusers/adminusers.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _adminusers_page__WEBPACK_IMPORTED_MODULE_3__["AdminusersPage"],
        children: [
            {
                path: 'sellers',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | sellers-sellers-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("sellers-sellers-module")]).then(__webpack_require__.bind(null, /*! ./sellers/sellers.module */ "./src/app/adminusers/sellers/sellers.module.ts")).then(m => m.SellersPageModule)
                    },
                    {
                        path: 'details/:sellerId',
                        loadChildren: () => Promise.all(/*! import() | sellers-details-details-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("sellers-details-details-module")]).then(__webpack_require__.bind(null, /*! ./sellers/details/details.module */ "./src/app/adminusers/sellers/details/details.module.ts")).then(m => m.DetailsPageModule)
                    },
                ]
            },
            {
                path: 'customers',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | customers-customers-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("customers-customers-module")]).then(__webpack_require__.bind(null, /*! ./customers/customers.module */ "./src/app/adminusers/customers/customers.module.ts")).then(m => m.CustomersPageModule)
                    },
                    {
                        path: 'details/:customerId',
                        loadChildren: () => Promise.all(/*! import() | customers-details-details-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("customers-details-details-module")]).then(__webpack_require__.bind(null, /*! ./customers/details/details.module */ "./src/app/adminusers/customers/details/details.module.ts")).then(m => m.DetailsPageModule)
                    },
                ]
            },
            {
                path: 'shippings',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | shipping-shipping-module */ "shipping-shipping-module").then(__webpack_require__.bind(null, /*! ./shipping/shipping.module */ "./src/app/adminusers/shipping/shipping.module.ts")).then(m => m.ShippingPageModule)
                    },
                    {
                        path: 'details/:shippingId',
                        loadChildren: () => Promise.all(/*! import() | shipping-details-details-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("shipping-details-details-module")]).then(__webpack_require__.bind(null, /*! ./shipping/details/details.module */ "./src/app/adminusers/shipping/details/details.module.ts")).then(m => m.DetailsPageModule)
                    },
                    {
                        path: 'new',
                        loadChildren: () => Promise.all(/*! import() | shipping-new-new-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"), __webpack_require__.e("shipping-new-new-module")]).then(__webpack_require__.bind(null, /*! ./shipping/new/new.module */ "./src/app/adminusers/shipping/new/new.module.ts")).then(m => m.NewPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/adminusers/tabs/sellers',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/adminusers/tabs/sellers',
        pathMatch: 'full'
    }
];
let AdminusersPageRoutingModule = class AdminusersPageRoutingModule {
};
AdminusersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminusersPageRoutingModule);



/***/ }),

/***/ "./src/app/adminusers/adminusers.module.ts":
/*!*************************************************!*\
  !*** ./src/app/adminusers/adminusers.module.ts ***!
  \*************************************************/
/*! exports provided: AdminusersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusersPageModule", function() { return AdminusersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adminusers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminusers-routing.module */ "./src/app/adminusers/adminusers-routing.module.ts");
/* harmony import */ var _adminusers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminusers.page */ "./src/app/adminusers/adminusers.page.ts");







let AdminusersPageModule = class AdminusersPageModule {
};
AdminusersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adminusers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminusersPageRoutingModule"]
        ],
        declarations: [_adminusers_page__WEBPACK_IMPORTED_MODULE_6__["AdminusersPage"]]
    })
], AdminusersPageModule);



/***/ }),

/***/ "./src/app/adminusers/adminusers.page.scss":
/*!*************************************************!*\
  !*** ./src/app/adminusers/adminusers.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWludXNlcnMvYWRtaW51c2Vycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/adminusers/adminusers.page.ts":
/*!***********************************************!*\
  !*** ./src/app/adminusers/adminusers.page.ts ***!
  \***********************************************/
/*! exports provided: AdminusersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminusersPage", function() { return AdminusersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdminusersPage = class AdminusersPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminusersPage.ctorParameters = () => [];
AdminusersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminusers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adminusers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/adminusers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adminusers.page.scss */ "./src/app/adminusers/adminusers.page.scss")).default]
    })
], AdminusersPage);



/***/ })

}]);
//# sourceMappingURL=adminusers-adminusers-module-es2015.js.map