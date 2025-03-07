(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/transactions/transactions.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/transactions/transactions.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"swap-horizontal\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You do not have any transaction yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n   <div *ngIf=\"show\">\n    <ion-grid>\n      <ion-row  *ngFor=\"let transaction of transactions\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> {{transaction.amount  | currency:'₦' }}</small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong>{{transaction.NameOfTransaction}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{transaction.description}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\" ion-margin-top ion-float-left\">\n            <ion-text class=\"ion-float-right\"><small>{{transaction.date}} {{transaction.time}}</small></ion-text>\n          </ion-row>\n          <ion-row class=\" ion-margin-top ion-float-right\">\n            <ion-text class=\"ion-float-right\"  (click)=\"onDelete(transaction)\"><ion-icon color=\"danger\" name=\"trash\"></ion-icon></ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-row >\n    </ion-grid>\n  </div> \n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/transactions/transactions.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/transactions/transactions.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"swap-horizontal\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You do not have any transaction yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n   <div *ngIf=\"show\">\n    <ion-grid>\n      <ion-row  *ngFor=\"let transaction of transactions\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> {{transaction.amount  | currency:'₦' }}</small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong>{{transaction.NameOfTransaction}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{transaction.description}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">{{transaction.date}}</small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">{{transaction.time}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row >\n    </ion-grid>\n  </div> \n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/transactions/transactions.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/transactions/transactions.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"swap-horizontal\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You do not have any transaction yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n   <div *ngIf=\"show\">\n    <ion-grid>\n      <ion-row  *ngFor=\"let transaction of transactions\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> {{transaction.amount  | currency:'₦' }}</small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong>{{transaction.NameOfTransaction}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{transaction.description}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">{{transaction.date}}</small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">{{transaction.time}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row >\n    </ion-grid>\n  </div> \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function() { return TransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.page */ "./src/app/adminaccounts/transactions/transactions.page.ts");




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions.module.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions-routing.module */ "./src/app/adminaccounts/transactions/transactions-routing.module.ts");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "./src/app/adminaccounts/transactions/transactions.page.ts");







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
    })
], TransactionsPageModule);



/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5hY2NvdW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQWVKOztBQWJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBZ0JKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5hY2NvdW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmF5IHtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5tYXJnaW4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLmNtbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi5maWx0ZXItYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4uYnRuIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5yb3cge1xuICAgIG1hcmdpbjogNnB4O1xufVxuLnJhdGUtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5hdmF0YXIge1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMzNweDtcbn1cbi5yZXYtaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5zbWFsbC1pY28ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOiA2cHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/adminaccounts/transactions/transactions.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/adminaccounts/transactions/transactions.page.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/transaction.service */ "./src/app/services/transaction.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");






let TransactionsPage = class TransactionsPage {
    constructor(fun, loadingCtrl, authService, transactionService) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.show = true;
    }
    ngOnInit() {
        if (!this.transactions) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetRecentTransactions(this.sid);
        }
    }
    GetRecentTransactions(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.transactionService.GetRecentTransactions(sid).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.transactions = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.show = false;
            });
        });
    }
    shop() {
        this.fun.navigate('home');
    }
    onDelete(transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('transation').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.transactionService.DeleteTransaction(String(transaction.id))
                        .subscribe(resp => {
                        loading.dismiss().catch(() => { });
                        if (resp.code === 200) {
                            this.fun.presentToast(resp.msg);
                            this.sid = this.authService.currentUserDataValue.sid;
                            this.GetRecentTransactions(this.sid);
                        }
                        else {
                            this.fun.presentToast(resp.msg);
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                    });
                }
            }));
        });
    }
};
TransactionsPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] }
];
TransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transactions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/transactions/transactions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transactions.page.scss */ "./src/app/adminaccounts/transactions/transactions.page.scss")).default]
    })
], TransactionsPage);



/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function() { return TransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.page */ "./src/app/customeraccounts/transactions/transactions.page.ts");




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions.module.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions-routing.module */ "./src/app/customeraccounts/transactions/transactions-routing.module.ts");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "./src/app/customeraccounts/transactions/transactions.page.ts");







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
    })
], TransactionsPageModule);



/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJhY2NvdW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQWVKOztBQWJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBZ0JKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJhY2NvdW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmF5IHtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5tYXJnaW4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLmNtbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi5maWx0ZXItYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4uYnRuIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5yb3cge1xuICAgIG1hcmdpbjogNnB4O1xufVxuLnJhdGUtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5hdmF0YXIge1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMzNweDtcbn1cbi5yZXYtaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5zbWFsbC1pY28ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOiA2cHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/customeraccounts/transactions/transactions.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/customeraccounts/transactions/transactions.page.ts ***!
  \********************************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/transaction.service */ "./src/app/services/transaction.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");






let TransactionsPage = class TransactionsPage {
    constructor(fun, loadingCtrl, authService, transactionService) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.show = true;
    }
    ngOnInit() {
        if (!this.transactions) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetRecentTransactions(this.sid);
        }
    }
    GetRecentTransactions(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.transactionService.GetRecentTransactions(sid).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.transactions = res.data;
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
    shop() {
        this.fun.navigate('home');
    }
};
TransactionsPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] }
];
TransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transactions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/transactions/transactions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transactions.page.scss */ "./src/app/customeraccounts/transactions/transactions.page.scss")).default]
    })
], TransactionsPage);



/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TransactionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function() { return TransactionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions.page */ "./src/app/sellersaccounts/transactions/transactions.page.ts");




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions.module.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions-routing.module */ "./src/app/sellersaccounts/transactions/transactions-routing.module.ts");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.page */ "./src/app/sellersaccounts/transactions/transactions.page.ts");







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
    })
], TransactionsPageModule);



/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2FjY291bnRzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVpBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBZUo7O0FBYkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFnQkoiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXJzYWNjb3VudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheSB7XG4gICAgY29sb3I6IGdyYXk7XG59XG4ubWFyZ2luIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5jbW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc2VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG59XG4uZmlsdGVyLWJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLmJ0biB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4ucm93IHtcbiAgICBtYXJnaW46IDZweDtcbn1cbi5yYXRlLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uYXZhdGFyIHtcbiAgICB3aWR0aDogMzNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG4ucmV2LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4uc21hbGwtaWNvIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogNnB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sellersaccounts/transactions/transactions.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sellersaccounts/transactions/transactions.page.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/transaction.service */ "./src/app/services/transaction.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");






let TransactionsPage = class TransactionsPage {
    constructor(fun, loadingCtrl, authService, transactionService) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.show = true;
    }
    ngOnInit() {
        if (!this.transactions) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetRecentTransactions(this.sid);
        }
    }
    GetRecentTransactions(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.transactionService.GetRecentTransactions(sid).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.transactions = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.show = false;
            });
        });
    }
    shop() {
        this.fun.navigate('home');
    }
};
TransactionsPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] }
];
TransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transactions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/transactions/transactions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transactions.page.scss */ "./src/app/sellersaccounts/transactions/transactions.page.scss")).default]
    })
], TransactionsPage);



/***/ }),

/***/ "./src/app/services/transaction.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/transaction.service.ts ***!
  \*************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");







let TransactionService = class TransactionService {
    constructor(http, authService, platform) {
        this.http = http;
        this.authService = authService;
        this.platform = platform;
    }
    GetRecentTransactions(sid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MTransactionServlet';
        const type = 'GetRecentTransactions';
        if (this.platform.is('android')) {
            const data = {
                type, sid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                return res;
            }));
        }
    }
    DeleteTransaction(transactionid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MTransactionServlet';
        const type = 'DeleteTransaction';
        if (this.platform.is('android')) {
            const data = {
                type, transactionid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, transactionid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                return res;
            }));
        }
    }
};
TransactionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
TransactionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
    })
], TransactionService);



/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module-es2015.js.map