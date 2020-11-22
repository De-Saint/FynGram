(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellers-sellers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/sellers.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/sellers.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Sellers</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"mytheme\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-input type=\"text\" placeholder=\"Search Sellers\" [(ngModel)]=\"searchTerm\" class=\"search-bar\"\n        (ionChange)=\"onSearch()\"></ion-input>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let seller of sellers\" (click)=\"onOpen(seller)\">\n      <ion-label>\n        <h2>{{seller.business_name}}</h2>\n        <h3>{{seller.business_phone}}</h3>\n        <p>{{seller.business_email}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/adminusers/sellers/sellers-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminusers/sellers/sellers-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SellersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersPageRoutingModule", function() { return SellersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sellers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sellers.page */ "./src/app/adminusers/sellers/sellers.page.ts");




const routes = [
    {
        path: '',
        component: _sellers_page__WEBPACK_IMPORTED_MODULE_3__["SellersPage"]
    }
];
let SellersPageRoutingModule = class SellersPageRoutingModule {
};
SellersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellersPageRoutingModule);



/***/ }),

/***/ "./src/app/adminusers/sellers/sellers.module.ts":
/*!******************************************************!*\
  !*** ./src/app/adminusers/sellers/sellers.module.ts ***!
  \******************************************************/
/*! exports provided: SellersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersPageModule", function() { return SellersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sellers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sellers-routing.module */ "./src/app/adminusers/sellers/sellers-routing.module.ts");
/* harmony import */ var _sellers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sellers.page */ "./src/app/adminusers/sellers/sellers.page.ts");







let SellersPageModule = class SellersPageModule {
};
SellersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sellers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersPageRoutingModule"]
        ],
        declarations: [_sellers_page__WEBPACK_IMPORTED_MODULE_6__["SellersPage"]]
    })
], SellersPageModule);



/***/ }),

/***/ "./src/app/adminusers/sellers/sellers.page.scss":
/*!******************************************************!*\
  !*** ./src/app/adminusers/sellers/sellers.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n  padding-left: 0.5em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW51c2Vycy9zZWxsZXJzL3NlbGxlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnVzZXJzL3NlbGxlcnMvc2VsbGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbSAhaW1wb3J0YW50O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/adminusers/sellers/sellers.page.ts":
/*!****************************************************!*\
  !*** ./src/app/adminusers/sellers/sellers.page.ts ***!
  \****************************************************/
/*! exports provided: SellersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersPage", function() { return SellersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let SellersPage = class SellersPage {
    constructor(authService, router, fun, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!this.sellers) {
            this.GetSellers();
        }
        this.searchTerm = '';
    }
    GetSellers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetSellers()
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.sellers = res.data;
                    this.originalsellers = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                this.show = false;
                loading.dismiss().catch(() => { });
            });
        });
    }
    onOpen(seller) {
        this.fun.setNavigationData(seller.id, seller);
        this.router.navigate(['/', 'adminusers', 'tabs', 'sellers', 'details', seller.id]);
    }
    onSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchvalue = this.searchTerm;
            if (searchvalue.trim() === '') {
                this.sellers = this.originalsellers;
            }
            else {
                if (String(searchvalue).length >= 3) {
                    if (searchvalue !== undefined) {
                        const loading = yield this.loadingCtrl.create({
                            cssClass: 'my-custom-class',
                            message: 'Please wait...',
                            mode: 'ios'
                        });
                        yield loading.present();
                        this.authService.SearchSellers(searchvalue)
                            .subscribe(res => {
                            loading.dismiss().catch(() => { });
                            if (res.code === 200) {
                                this.sellers = res.data;
                                this.show = true;
                            }
                            else {
                                this.sellers = this.originalsellers;
                            }
                        }, error => {
                            loading.dismiss().catch(() => { });
                            this.sellers = this.originalsellers;
                        });
                    }
                }
            }
        });
    }
};
SellersPage.ctorParameters = () => [
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
SellersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-sellers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sellers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/sellers/sellers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sellers.page.scss */ "./src/app/adminusers/sellers/sellers.page.scss")).default]
    })
], SellersPage);



/***/ })

}]);
//# sourceMappingURL=sellers-sellers-module-es2015.js.map