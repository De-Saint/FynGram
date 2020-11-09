(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banks-new-new-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/new/new.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/new/new.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Add Bank Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  class=\"ion-padding\">\n  <form [formGroup]=\"bankForm\">\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Select Bank</span></ion-text>\n        <ion-select formControlName=\"bank\" [interfaceOptions]=\"bankcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select address type\">\n          <ion-select-option *ngFor=\"let q of banks\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Select Account Type?</span></ion-text>\n        <ion-select formControlName=\"accttype\" [interfaceOptions]=\"accounttypecustomAlertOptions\" class=\"input\"\n          >\n          <ion-select-option value=\"Savings\">Savings</ion-select-option>\n          <ion-select-option value=\"Current\">Current</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    \n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Enter Account Number</span></ion-text>\n        <ion-input class=\"input ion-padding-horizontal\" type=\"text\" formControlName=\"acctnumber\" ></ion-input>\n      </ion-col>\n     \n    </ion-row>\n\n  \n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"mytheme\"  (click)=\"onSubmit()\"><span\n            class=\"white\"><strong>Save</strong></span></ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/customerwallet/banks/new/new-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/customerwallet/banks/new/new-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new.page */ "./src/app/customerwallet/banks/new/new.page.ts");




const routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
    }
];
let NewPageRoutingModule = class NewPageRoutingModule {
};
NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewPageRoutingModule);



/***/ }),

/***/ "./src/app/customerwallet/banks/new/new.module.ts":
/*!********************************************************!*\
  !*** ./src/app/customerwallet/banks/new/new.module.ts ***!
  \********************************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-routing.module */ "./src/app/customerwallet/banks/new/new-routing.module.ts");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/customerwallet/banks/new/new.page.ts");







let NewPageModule = class NewPageModule {
};
NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"]
        ],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
    })
], NewPageModule);



/***/ }),

/***/ "./src/app/customerwallet/banks/new/new.page.scss":
/*!********************************************************!*\
  !*** ./src/app/customerwallet/banks/new/new.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvYmFua3MvbmV3L25ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvYmFua3MvbmV3L25ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufVxuLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customerwallet/banks/new/new.page.ts":
/*!******************************************************!*\
  !*** ./src/app/customerwallet/banks/new/new.page.ts ***!
  \******************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");







let NewPage = class NewPage {
    constructor(loadingCtrl, fun, router, authService) {
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.router = router;
        this.authService = authService;
        this.bankcustomAlertOptions = {
            header: 'Select Bank',
        };
        this.accounttypecustomAlertOptions = {
            header: 'Select Account Type',
        };
        this.bankForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required] }),
            accttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required] }),
            acctnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required] })
        });
    }
    ngOnInit() {
        this.GetBanks();
    }
    GetBanks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetBanks().subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.banks = res.data;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.bankForm.valid) {
                this.fun.presentToast('Wrong Input!');
                return false;
            }
            if (this.bankForm.value.acctnumber.length === 10) {
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.authService.CreateBankDetails(String(this.sid), String(this.bankForm.value.bank), this.bankForm.value.accttype, this.bankForm.value.acctnumber)
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.router.navigate(['/', 'customerwallet', 'tabs', 'banks']);
                        this.fun.presentToast(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                    this.fun.presentToast(error);
                });
            }
            else {
                this.fun.presentToast('Account Number must be 10 digits!');
            }
        });
    }
};
NewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }
];
NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/new/new.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new.page.scss */ "./src/app/customerwallet/banks/new/new.page.scss")).default]
    })
], NewPage);



/***/ })

}]);
//# sourceMappingURL=banks-new-new-module-es2015.js.map