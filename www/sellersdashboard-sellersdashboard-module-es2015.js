(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellersdashboard-sellersdashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersdashboard/sellersdashboard.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersdashboard/sellersdashboard.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n \n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Messages</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.message_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Products</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.product_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Transactions</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.transaction_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Payments</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.payment_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Orders</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.order_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  \n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">CashOut Requests </h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.cashout_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n \n</ion-content>");

/***/ }),

/***/ "./src/app/sellersdashboard/sellersdashboard-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sellersdashboard/sellersdashboard-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SellersdashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersdashboardPageRoutingModule", function() { return SellersdashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sellersdashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sellersdashboard.page */ "./src/app/sellersdashboard/sellersdashboard.page.ts");




const routes = [
    {
        path: '',
        component: _sellersdashboard_page__WEBPACK_IMPORTED_MODULE_3__["SellersdashboardPage"]
    }
];
let SellersdashboardPageRoutingModule = class SellersdashboardPageRoutingModule {
};
SellersdashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellersdashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/sellersdashboard/sellersdashboard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/sellersdashboard/sellersdashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: SellersdashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersdashboardPageModule", function() { return SellersdashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sellersdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sellersdashboard-routing.module */ "./src/app/sellersdashboard/sellersdashboard-routing.module.ts");
/* harmony import */ var _sellersdashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sellersdashboard.page */ "./src/app/sellersdashboard/sellersdashboard.page.ts");







let SellersdashboardPageModule = class SellersdashboardPageModule {
};
SellersdashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sellersdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersdashboardPageRoutingModule"]
        ],
        declarations: [_sellersdashboard_page__WEBPACK_IMPORTED_MODULE_6__["SellersdashboardPage"]]
    })
], SellersdashboardPageModule);



/***/ }),

/***/ "./src/app/sellersdashboard/sellersdashboard.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/sellersdashboard/sellersdashboard.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2Rhc2hib2FyZC9zZWxsZXJzZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXJzZGFzaGJvYXJkL3NlbGxlcnNkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sellersdashboard/sellersdashboard.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/sellersdashboard/sellersdashboard.page.ts ***!
  \***********************************************************/
/*! exports provided: SellersdashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersdashboardPage", function() { return SellersdashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let SellersdashboardPage = class SellersdashboardPage {
    constructor(authService, loadingCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetStatDetails(this.sid);
    }
    GetStatDetails(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetStatDetails(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.stats = res.data;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
};
SellersdashboardPage.ctorParameters = () => [
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }
];
SellersdashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sellersdashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sellersdashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersdashboard/sellersdashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sellersdashboard.page.scss */ "./src/app/sellersdashboard/sellersdashboard.page.scss")).default]
    })
], SellersdashboardPage);



/***/ })

}]);
//# sourceMappingURL=sellersdashboard-sellersdashboard-module-es2015.js.map