(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discounts-discounts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/discounts/discounts.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/discounts/discounts.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Discount Codes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"gift\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You do not have any discount code(s) yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-grid>\n       <ion-row  *ngFor=\"let discount of discounts\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> Available: {{discount.total_available}} of ({{discount.total_created}})</small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong> {{discount.DiscountCodeTypeName}} </strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{discount.code}}</h6><br>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{discount.description}}</h6>\n            <h6 class=\"cmnt ion-float-right ion-text-end ion-no-margin\"  (click)=\"onStop(discount)\" *ngIf=\"discount.Status === 'Active'\" ><ion-icon color=\"mytheme\" style=\"font-size: medium;\" name=\"stop-circle\"></ion-icon></h6><br>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\" >\n              <span *ngIf=\"discount.split_deduction_value === '1'\">Split Discount : Yes</span>\n              <span *ngIf=\"discount.split_deduction_value !== '1'\">Split Discount : No</span>\n            </h6>\n            <h6 class=\"cmnt ion-float-right ion-text-end ion-no-margin\" (click)=\"onDelete(discount)\" *ngIf=\"discount.Status !== 'Active'\" ><ion-icon color=\"danger\" style=\"font-size: medium;\" name=\"trash\"></ion-icon></h6><br>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\" *ngIf=\"discount.DiscountDeductionTypeName === 'Amount'\">Would deduct {{discount.deduction_value | currency:'₦' }}  from the order amount</h6>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\" *ngIf=\"discount.DiscountDeductionTypeName !== 'Amount'\">Would deduct {{discount.deduction_value }}%  from the order amount</h6> \n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\"><strong>Status: {{discount.Status}}</strong></small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">Expiry Date: {{discount.expiry_date}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row > \n    </ion-grid> \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/discounts/discounts.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/discounts/discounts.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Discount Codes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"gift\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You do not have any discount code(s) yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-grid>\n       <ion-row  *ngFor=\"let discount of discounts\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> Available: {{discount.total_available}}</small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong> {{discount.DiscountCodeData.code}} </strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{discount.DiscountCodeData.description}}</h6><br>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\" *ngIf=\"discount.DiscountCodeData.DiscountDeductionTypeName === 'Amount'\">Would deduct {{discount.DiscountCodeData.deduction_value | currency:'₦' }}  from your order amount</h6>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\" *ngIf=\"discount.DiscountCodeData?.DiscountDeductionTypeName !== 'Amount'\">Would deduct {{discount.DiscountCodeData.deduction_value }}%  from your order amount</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\"><strong>Status: {{discount.status}}</strong></small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">Expiry Date: {{discount.DiscountCodeData.expiry_date}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row > \n    </ion-grid>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminwallet/discounts/discounts-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/adminwallet/discounts/discounts-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DiscountsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsPageRoutingModule", function() { return DiscountsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _discounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discounts.page */ "./src/app/adminwallet/discounts/discounts.page.ts");




const routes = [
    {
        path: '',
        component: _discounts_page__WEBPACK_IMPORTED_MODULE_3__["DiscountsPage"]
    }
];
let DiscountsPageRoutingModule = class DiscountsPageRoutingModule {
};
DiscountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiscountsPageRoutingModule);



/***/ }),

/***/ "./src/app/adminwallet/discounts/discounts.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/adminwallet/discounts/discounts.module.ts ***!
  \***********************************************************/
/*! exports provided: DiscountsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsPageModule", function() { return DiscountsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discounts-routing.module */ "./src/app/adminwallet/discounts/discounts-routing.module.ts");
/* harmony import */ var _discounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discounts.page */ "./src/app/adminwallet/discounts/discounts.page.ts");







let DiscountsPageModule = class DiscountsPageModule {
};
DiscountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscountsPageRoutingModule"]
        ],
        declarations: [_discounts_page__WEBPACK_IMPORTED_MODULE_6__["DiscountsPage"]]
    })
], DiscountsPageModule);



/***/ }),

/***/ "./src/app/adminwallet/discounts/discounts.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/adminwallet/discounts/discounts.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW53YWxsZXQvZGlzY291bnRzL2Rpc2NvdW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFlSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL2FkbWlud2FsbGV0L2Rpc2NvdW50cy9kaXNjb3VudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuLm1hcmdpbiB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY21udCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNlcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZpbHRlci1idG4ge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5idG4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLnJvdyB7XG4gICAgbWFyZ2luOiA2cHg7XG59XG4ucmF0ZS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLnJldi1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDZweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/adminwallet/discounts/discounts.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/adminwallet/discounts/discounts.page.ts ***!
  \*********************************************************/
/*! exports provided: DiscountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsPage", function() { return DiscountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





let DiscountsPage = class DiscountsPage {
    constructor(fun, loadingCtrl, authService) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!this.discounts) {
            this.GetDiscountCodes();
        }
    }
    shop() {
        this.fun.navigate('home');
    }
    GetDiscountCodes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetDiscountCodes().subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.discounts = res.data;
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
    onStop(discount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.processRequest('stop', 'discount code').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.ProcessDiscount(String(discount.id), 'Stopped')
                        .subscribe(resp => {
                        loading.dismiss().catch(() => { });
                        if (resp.code === 200) {
                            this.fun.presentToast(resp.msg);
                            this.GetDiscountCodes();
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
    onDelete(discount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('discount code').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    yield loading.present();
                    this.authService.ProcessDiscount(String(discount.id), 'Deleted')
                        .subscribe(resp => {
                        loading.dismiss().catch(() => { });
                        if (resp.code === 200) {
                            this.fun.presentToast(resp.msg);
                            this.GetDiscountCodes();
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
DiscountsPage.ctorParameters = () => [
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }
];
DiscountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-discounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discounts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/discounts/discounts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discounts.page.scss */ "./src/app/adminwallet/discounts/discounts.page.scss")).default]
    })
], DiscountsPage);



/***/ }),

/***/ "./src/app/customeraccounts/discounts/discounts-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/customeraccounts/discounts/discounts-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DiscountsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsPageRoutingModule", function() { return DiscountsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _discounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discounts.page */ "./src/app/customeraccounts/discounts/discounts.page.ts");




const routes = [
    {
        path: '',
        component: _discounts_page__WEBPACK_IMPORTED_MODULE_3__["DiscountsPage"]
    }
];
let DiscountsPageRoutingModule = class DiscountsPageRoutingModule {
};
DiscountsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiscountsPageRoutingModule);



/***/ }),

/***/ "./src/app/customeraccounts/discounts/discounts.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/customeraccounts/discounts/discounts.module.ts ***!
  \****************************************************************/
/*! exports provided: DiscountsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsPageModule", function() { return DiscountsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discounts-routing.module */ "./src/app/customeraccounts/discounts/discounts-routing.module.ts");
/* harmony import */ var _discounts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discounts.page */ "./src/app/customeraccounts/discounts/discounts.page.ts");







let DiscountsPageModule = class DiscountsPageModule {
};
DiscountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _discounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscountsPageRoutingModule"]
        ],
        declarations: [_discounts_page__WEBPACK_IMPORTED_MODULE_6__["DiscountsPage"]]
    })
], DiscountsPageModule);



/***/ }),

/***/ "./src/app/customeraccounts/discounts/discounts.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/customeraccounts/discounts/discounts.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJhY2NvdW50cy9kaXNjb3VudHMvZGlzY291bnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQWVKOztBQWJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBZ0JKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJhY2NvdW50cy9kaXNjb3VudHMvZGlzY291bnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmF5IHtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5tYXJnaW4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLmNtbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi5maWx0ZXItYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4uYnRuIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5yb3cge1xuICAgIG1hcmdpbjogNnB4O1xufVxuLnJhdGUtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5hdmF0YXIge1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMzNweDtcbn1cbi5yZXYtaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5zbWFsbC1pY28ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOiA2cHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/customeraccounts/discounts/discounts.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/customeraccounts/discounts/discounts.page.ts ***!
  \**************************************************************/
/*! exports provided: DiscountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountsPage", function() { return DiscountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





let DiscountsPage = class DiscountsPage {
    constructor(fun, loadingCtrl, authService) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!this.discounts) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetCustomerDiscountCodes(this.sid);
        }
    }
    shop() {
        this.fun.navigate('home');
    }
    GetCustomerDiscountCodes(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetCustomerDiscountCodes(String(sid)).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.discounts = res.data;
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
};
DiscountsPage.ctorParameters = () => [
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }
];
DiscountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-discounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discounts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/discounts/discounts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discounts.page.scss */ "./src/app/customeraccounts/discounts/discounts.page.scss")).default]
    })
], DiscountsPage);



/***/ })

}]);
//# sourceMappingURL=discounts-discounts-module-es2015.js.map