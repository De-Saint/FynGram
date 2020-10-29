(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admininventory-admininventory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/admininventory.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/admininventory.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"products\">\n      <ion-label>Products</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"orders\">\n      <ion-label>Orders</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"stock\">\n      <ion-label>Stock</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/admininventory/admininventory-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admininventory/admininventory-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdmininventoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmininventoryPageRoutingModule", function() { return AdmininventoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admininventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admininventory.page */ "./src/app/admininventory/admininventory.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _admininventory_page__WEBPACK_IMPORTED_MODULE_3__["AdmininventoryPage"],
        children: [
            {
                path: 'products',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | products-products-module */[__webpack_require__.e("default~authenticate-authenticate-module~buy-buy-module~buy-productdetails-productdetails-module~cat~4a608987"), __webpack_require__.e("common"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null, /*! ./products/products.module */ "./src/app/admininventory/products/products.module.ts")).then(m => m.ProductsPageModule)
                    }
                ]
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "./src/app/admininventory/orders/orders.module.ts")).then(m => m.OrdersPageModule)
                    }
                ]
            },
            {
                path: 'stock',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | stock-stock-module */ "stock-stock-module").then(__webpack_require__.bind(null, /*! ./stock/stock.module */ "./src/app/admininventory/stock/stock.module.ts")).then(m => m.StockPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/admininventory/tabs/products',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/admininventory/tabs/products',
        pathMatch: 'full'
    }
];
let AdmininventoryPageRoutingModule = class AdmininventoryPageRoutingModule {
};
AdmininventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmininventoryPageRoutingModule);



/***/ }),

/***/ "./src/app/admininventory/admininventory.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admininventory/admininventory.module.ts ***!
  \*********************************************************/
/*! exports provided: AdmininventoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmininventoryPageModule", function() { return AdmininventoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admininventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admininventory-routing.module */ "./src/app/admininventory/admininventory-routing.module.ts");
/* harmony import */ var _admininventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admininventory.page */ "./src/app/admininventory/admininventory.page.ts");







let AdmininventoryPageModule = class AdmininventoryPageModule {
};
AdmininventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admininventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmininventoryPageRoutingModule"]
        ],
        declarations: [_admininventory_page__WEBPACK_IMPORTED_MODULE_6__["AdmininventoryPage"]]
    })
], AdmininventoryPageModule);



/***/ }),

/***/ "./src/app/admininventory/admininventory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/admininventory/admininventory.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaW52ZW50b3J5L2FkbWluaW52ZW50b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admininventory/admininventory.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/admininventory/admininventory.page.ts ***!
  \*******************************************************/
/*! exports provided: AdmininventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmininventoryPage", function() { return AdmininventoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdmininventoryPage = class AdmininventoryPage {
    constructor() { }
    ngOnInit() {
    }
};
AdmininventoryPage.ctorParameters = () => [];
AdmininventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admininventory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admininventory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/admininventory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admininventory.page.scss */ "./src/app/admininventory/admininventory.page.scss")).default]
    })
], AdmininventoryPage);



/***/ })

}]);
//# sourceMappingURL=admininventory-admininventory-module-es2015.js.map