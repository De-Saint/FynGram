(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashouts-cashouts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">CashOut Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"card\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>No one has made any request yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\">\n          <!-- <span class=\"white\">Continue</span> -->\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-list lines=\"none\">\n      <ion-item *ngFor=\"let cash of cashouts\">\n        <ion-grid>\n          <ion-row class=\"full ion-align-items-center card\">\n            <ion-col>\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"ion-no-margin\"><strong><strong>{{cash.cashUserName}}</strong></strong></p>\n                <h6 class=\"small mycolor ion-padding-start\">{{cash.status}}</h6>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.amount | currency:'₦'}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.bankName}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.account_number}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.account_type}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\"><small>{{cash.request_date}} {{cash.request_time}}</small></p>\n              </ion-row>\n            </ion-col>\n            <ion-row>\n              <ion-col *ngIf=\"cash.status === 'Pending'\">\n                <ion-icon name=\"checkmark-circle\" (click)=\"onProcess(cash, 'Approve', 'Approved')\" color=\"success\"\n                  class=\"item-icons\">\n                </ion-icon>\n              </ion-col>\n              <ion-col *ngIf=\"cash.status === 'Pending'\">\n                <ion-icon name=\"close-circle\" (click)=\"onProcess(cash, 'Reject', 'Rejected')\" color=\"danger\"\n                  class=\"item-icons\"></ion-icon>\n              </ion-col>\n              <ion-col *ngIf=\"cash.status !== 'Pending'\">\n                <ion-icon name=\"trash\" (click)=\"onDelete(cash)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">CashOut Requests</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"card\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not made any request yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Make a request</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n<div  *ngIf=\"show\">\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let cash of cashouts\" >\n     <ion-grid>\n      <ion-row class=\"full ion-align-items-center card\">\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <p class=\"ion-no-margin\"><strong><strong>{{cash.amount | currency:'₦'}}</strong></strong></p>\n            <h6 class=\"small mycolor ion-padding-start\">{{cash.status}}</h6>\n          </ion-row>\n           <ion-row>\n            <p class=\"ion-no-margin\">{{cash.bankName}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_number}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_type}}</p>\n          </ion-row>\n         <ion-row>\n            <p class=\"ion-no-margin\"><small>{{cash.request_date}} {{cash.request_time}}</small></p>\n          </ion-row>\n        </ion-col>\n         <ion-row>\n          <ion-col *ngIf=\"cash.status !== 'Pending'\">\n            <ion-icon name=\"trash\" (click)=\"onDelete(cash)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-row> \n     </ion-grid>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">CashOut Requests</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"card\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not made any request yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Make a request</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n<div  *ngIf=\"show\">\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let cash of cashouts\" >\n     <ion-grid>\n      <ion-row class=\"full ion-align-items-center card\">\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <p class=\"ion-no-margin\"><strong><strong>{{cash.amount | currency:'₦'}}</strong></strong></p>\n            <h6 class=\"small mycolor ion-padding-start\">{{cash.status}}</h6>\n          </ion-row>\n           <ion-row>\n            <p class=\"ion-no-margin\">{{cash.bankName}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_number}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_type}}</p>\n          </ion-row>\n         <ion-row>\n            <p class=\"ion-no-margin\"><small>{{cash.request_date}} {{cash.request_time}}</small></p>\n          </ion-row>\n        </ion-col>\n         <ion-row>\n          <ion-col *ngIf=\"cash.status !== 'Pending'\">\n            <ion-icon name=\"trash\" (click)=\"onDelete(cash)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-row> \n     </ion-grid>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CashoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function() { return CashoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/adminwallet/cashouts/cashouts.page.ts");




const routes = [
    {
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
    }
];
let CashoutsPageRoutingModule = class CashoutsPageRoutingModule {
};
CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts.module.ts ***!
  \*********************************************************/
/*! exports provided: CashoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function() { return CashoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashouts-routing.module */ "./src/app/adminwallet/cashouts/cashouts-routing.module.ts");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/adminwallet/cashouts/cashouts.page.ts");







let CashoutsPageModule = class CashoutsPageModule {
};
CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]
        ],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
    })
], CashoutsPageModule);



/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW53YWxsZXQvY2FzaG91dHMvY2FzaG91dHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbndhbGxldC9jYXNob3V0cy9jYXNob3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnN7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/adminwallet/cashouts/cashouts.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/adminwallet/cashouts/cashouts.page.ts ***!
  \*******************************************************/
/*! exports provided: CashoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPage", function() { return CashoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let CashoutsPage = class CashoutsPage {
    constructor(router, loadingCtrl, fun, authService) {
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.authService = authService;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!this.cashouts) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserCashoutRequest(this.sid);
        }
    }
    GetUserCashoutRequest(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetCashoutRequests(String(sid))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.cashouts = res.data;
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
    onDelete(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('cashout request').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.ProcessCashOut('Deleted', request.CashOutID)
                        .subscribe(res => {
                        loading.dismiss().catch(() => { });
                        if (res.code === 200) {
                            this.fun.presentToast(res.msg);
                            this.sid = this.authService.currentUserDataValue.sid;
                            this.GetUserCashoutRequest(this.sid);
                        }
                        else {
                            this.fun.presentToast(res.msg);
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                    });
                }
            }));
        });
    }
    onProcess(request, option, optiontext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.processRequest(option, 'cashout request').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.ProcessCashOut(optiontext, request.CashOutID)
                        .subscribe(res => {
                        loading.dismiss().catch(() => { });
                        if (res.code === 200) {
                            this.fun.presentToast(res.msg);
                            this.sid = this.authService.currentUserDataValue.sid;
                            this.GetUserCashoutRequest(this.sid);
                        }
                        else {
                            this.fun.presentToast(res.msg);
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                    });
                }
            }));
        });
    }
};
CashoutsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }
];
CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashouts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashouts.page.scss */ "./src/app/adminwallet/cashouts/cashouts.page.scss")).default]
    })
], CashoutsPage);



/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CashoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function() { return CashoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/customerwallet/cashouts/cashouts.page.ts");




const routes = [
    {
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
    }
];
let CashoutsPageRoutingModule = class CashoutsPageRoutingModule {
};
CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts.module.ts":
/*!************************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts.module.ts ***!
  \************************************************************/
/*! exports provided: CashoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function() { return CashoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashouts-routing.module */ "./src/app/customerwallet/cashouts/cashouts-routing.module.ts");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/customerwallet/cashouts/cashouts.page.ts");







let CashoutsPageModule = class CashoutsPageModule {
};
CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]
        ],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
    })
], CashoutsPageModule);



/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts.page.scss":
/*!************************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvY2FzaG91dHMvY2FzaG91dHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcndhbGxldC9jYXNob3V0cy9jYXNob3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnN7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/customerwallet/cashouts/cashouts.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/customerwallet/cashouts/cashouts.page.ts ***!
  \**********************************************************/
/*! exports provided: CashoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPage", function() { return CashoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let CashoutsPage = class CashoutsPage {
    constructor(router, loadingCtrl, fun, authService) {
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.authService = authService;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!this.cashouts) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserCashoutRequest(this.sid);
        }
    }
    onAdd() {
        this.router.navigate(['/', 'customerwallet', 'tabs', 'cashouts', 'new']);
    }
    GetUserCashoutRequest(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetCashoutRequests(String(sid))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.cashouts = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.fun.presentToast(error);
                this.show = false;
            });
        });
    }
    onDelete(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('cashout request').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.ProcessCashOut('Deleted', request.CashOutID)
                        .subscribe(res => {
                        loading.dismiss().catch(() => { });
                        if (res.code === 200) {
                            this.fun.presentToast(res.msg);
                            this.sid = this.authService.currentUserDataValue.sid;
                            this.GetUserCashoutRequest(this.sid);
                        }
                        else {
                            this.fun.presentToast(res.msg);
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                    });
                }
            }));
        });
    }
};
CashoutsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }
];
CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashouts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashouts.page.scss */ "./src/app/customerwallet/cashouts/cashouts.page.scss")).default]
    })
], CashoutsPage);



/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CashoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function() { return CashoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/sellerswallet/cashouts/cashouts.page.ts");




const routes = [
    {
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
    }
];
let CashoutsPageRoutingModule = class CashoutsPageRoutingModule {
};
CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts.module.ts ***!
  \***********************************************************/
/*! exports provided: CashoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function() { return CashoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashouts-routing.module */ "./src/app/sellerswallet/cashouts/cashouts-routing.module.ts");
/* harmony import */ var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashouts.page */ "./src/app/sellerswallet/cashouts/cashouts.page.ts");







let CashoutsPageModule = class CashoutsPageModule {
};
CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]
        ],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
    })
], CashoutsPageModule);



/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3dhbGxldC9jYXNob3V0cy9jYXNob3V0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvY2FzaG91dHMvY2FzaG91dHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mdWxse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbn1cbi5pdGVtLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sellerswallet/cashouts/cashouts.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/sellerswallet/cashouts/cashouts.page.ts ***!
  \*********************************************************/
/*! exports provided: CashoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutsPage", function() { return CashoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let CashoutsPage = class CashoutsPage {
    constructor(router, loadingCtrl, fun, authService) {
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.authService = authService;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!this.cashouts) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserCashoutRequest(this.sid);
        }
    }
    onAdd() {
        this.router.navigate(['/', 'sellerswallet', 'tabs', 'cashouts', 'new']);
    }
    GetUserCashoutRequest(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetCashoutRequests(String(sid))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.cashouts = res.data;
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
    onDelete(request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('cashout request').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.ProcessCashOut('Deleted', request.CashOutID)
                        .subscribe(res => {
                        loading.dismiss().catch(() => { });
                        if (res.code === 200) {
                            this.fun.presentToast(res.msg);
                            this.sid = this.authService.currentUserDataValue.sid;
                            this.GetUserCashoutRequest(this.sid);
                        }
                        else {
                            this.fun.presentToast(res.msg);
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                    });
                }
            }));
        });
    }
};
CashoutsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }
];
CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashouts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashouts.page.scss */ "./src/app/sellerswallet/cashouts/cashouts.page.scss")).default]
    })
], CashoutsPage);



/***/ })

}]);
//# sourceMappingURL=cashouts-cashouts-module-es2015.js.map