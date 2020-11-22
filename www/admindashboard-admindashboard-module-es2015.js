(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admindashboard-admindashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admindashboard/admindashboard.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admindashboard/admindashboard.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Sellers</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.sellers_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Customers</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.customer_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Added Address/es</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.address_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Added Discount Codes</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.discount_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Messages</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.message_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Products</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.product_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Transactions</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.transaction_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Payments</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.payment_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Orders</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.order_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Categories</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.category_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">CashOut Requests </h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.cashout_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Reviews & Ratings </h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.review_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-margin-top\">\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\">Shipping Companies </h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-text class=\"ion-float-right\">{{stats?.shipping_count}}</ion-text>\n    </ion-col>\n  </ion-item>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluZGFzaGJvYXJkL2FkbWluZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let AdmindashboardPage = class AdmindashboardPage {
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
AdmindashboardPage.ctorParameters = () => [
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }
];
AdmindashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admindashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admindashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admindashboard/admindashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admindashboard.page.scss */ "./src/app/admindashboard/admindashboard.page.scss")).default]
    })
], AdmindashboardPage);



/***/ })

}]);
//# sourceMappingURL=admindashboard-admindashboard-module-es2015.js.map