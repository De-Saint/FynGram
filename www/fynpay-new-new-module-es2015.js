(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fynpay-new-new-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/new/new.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/new/new.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Fund your FynPay Account</h3>\n  </ion-text>\n  <form [formGroup]=\"fundForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Enter the Amount</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"number\" placeholder=\"Amount\" formControlName=\"amount\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button  expand=\"block\" [disabled]=\"!fundForm.valid\" angular4-paystack [key]=\"public_key\" (paymentInit)=\"paymentInit()\"\n            [email]=\"userEmail\" [amount]=\"CalculatePercentage(fundForm.value.amount) * 100\" [ref]=\"random_id\" [channels]=\"channels\"\n            (close)=\"paymentCancel()\" (callback)=\"paymentDone($event)\" (click)=\"onPay()\" [metadata]=\"{ \n          custom_fields: \n          [ {\n            display_name: 'Customer Name', \n            variable_name: 'Customer Name', \n            value: userName } ,\n          {\n            display_name: 'Payment Type', \n            variable_name: 'Payment Type', \n            value: 'Fund FynPay Account' \n          }] \n        }\" color=\"mytheme\"><strong class=\"white\">Submit</strong>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/new/new.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/new/new.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Fund your FynPay Account</h3>\n  </ion-text>\n  <form [formGroup]=\"fundForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Enter the Amount</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"number\" placeholder=\"Amount\" formControlName=\"amount\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button  expand=\"block\" [disabled]=\"!fundForm.valid\" angular4-paystack [key]=\"public_key\" (paymentInit)=\"paymentInit()\"\n            [email]=\"userEmail\" [amount]=\"CalculatePercentage(fundForm.value.amount) * 100\" [ref]=\"random_id\" [channels]=\"channels\"\n            (close)=\"paymentCancel()\" (callback)=\"paymentDone($event)\" (click)=\"onPay()\" [metadata]=\"{ \n          custom_fields: \n          [ {\n            display_name: 'Customer Name', \n            variable_name: 'Customer Name', \n            value: userName } ,\n          {\n            display_name: 'Payment Type', \n            variable_name: 'Payment Type', \n            value: 'Fund FynPay Account' \n          }] \n        }\" color=\"mytheme\"><strong class=\"white\">Submit</strong>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/new/new.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/new/new.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Fund your FynPay Account</h3>\n  </ion-text>\n  <form [formGroup]=\"fundForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Enter the Amount</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"number\" placeholder=\"Amount\" formControlName=\"amount\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button  expand=\"block\" [disabled]=\"!fundForm.valid\" angular4-paystack [key]=\"public_key\" (paymentInit)=\"paymentInit()\"\n            [email]=\"userEmail\" [amount]=\"CalculatePercentage(fundForm.value.amount) * 100\" [ref]=\"random_id\" [channels]=\"channels\"\n            (close)=\"paymentCancel()\" (callback)=\"paymentDone($event)\" (click)=\"onPay()\" [metadata]=\"{ \n          custom_fields: \n          [ {\n            display_name: 'Customer Name', \n            variable_name: 'Customer Name', \n            value: userName } ,\n          {\n            display_name: 'Payment Type', \n            variable_name: 'Payment Type', \n            value: 'Fund FynPay Account' \n          }] \n        }\" color=\"mytheme\"><strong class=\"white\">Submit</strong>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/adminwallet/fynpay/new/new-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminwallet/fynpay/new/new-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new.page */ "./src/app/adminwallet/fynpay/new/new.page.ts");




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

/***/ "./src/app/adminwallet/fynpay/new/new.module.ts":
/*!******************************************************!*\
  !*** ./src/app/adminwallet/fynpay/new/new.module.ts ***!
  \******************************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-routing.module */ "./src/app/adminwallet/fynpay/new/new-routing.module.ts");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new.page */ "./src/app/adminwallet/fynpay/new/new.page.ts");








let NewPageModule = class NewPageModule {
};
NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_1__["Angular4PaystackModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _new_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewPageRoutingModule"]
        ],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_7__["NewPage"]]
    })
], NewPageModule);



/***/ }),

/***/ "./src/app/adminwallet/fynpay/new/new.page.scss":
/*!******************************************************!*\
  !*** ./src/app/adminwallet/fynpay/new/new.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW53YWxsZXQvZnlucGF5L25ldy9uZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQUVSOztBQUNBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbndhbGxldC9meW5wYXkvbmV3L25ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xufVxuLmhlYWQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5zbWFsbCB7XG4gICAgYXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmlucHV0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi53aGl0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminwallet/fynpay/new/new.page.ts":
/*!****************************************************!*\
  !*** ./src/app/adminwallet/fynpay/new/new.page.ts ***!
  \****************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let NewPage = class NewPage {
    constructor(fun, router, shopService, authService, loadingCtrl) {
        this.fun = fun;
        this.router = router;
        this.shopService = shopService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.channels = ['card']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        this.fundForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required] }),
        });
    }
    ngOnInit() {
        this.getParameter();
        this.userName = this.authService.currentUserDataValue.name;
        this.userEmail = this.authService.currentUserDataValue.email;
    }
    paymentInit() {
    }
    getParameter() {
        this.shopService.getParameter()
            .subscribe(result => {
            this.public_key = result.data;
        });
    }
    paymentCancel() {
        this.errorSwt('You cancelled the payment!');
    }
    onPay() {
        this.fun.presentToast('Please Wait ...');
    }
    paymentDone(ref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (ref.status === 'success') {
                //ref contains the response from paystack after successful payment
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.shopService.fundWallet(String(this.sid), 'Fund Wallet', String(this.fundForm.value.amount), String(ref.reference), String(ref.transaction))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.router.navigate(['/', 'adminwallet', 'tabs', 'fynpay']);
                        this.fun.presentToast(res.msg);
                    }
                    else {
                        this.errorSwt(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                });
            }
            else {
                this.errorSwt('Please, the payment was not successful');
            }
        });
    }
    CalculatePercentage(userAmt) {
        let addedPerc = (parseInt(userAmt) * 0.02);
        let newAmt = parseInt(userAmt) + addedPerc;
        if (parseInt(userAmt) >= 2500) {
            newAmt = parseInt(userAmt) + 100;
        }
        return newAmt;
    }
    errorSwt(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Fund Account!',
            text: msg,
            timer: 2000,
            timerProgressBar: true,
            icon: 'error'
        });
    }
};
NewPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/fynpay/new/new.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new.page.scss */ "./src/app/adminwallet/fynpay/new/new.page.scss")).default]
    })
], NewPage);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/new/new-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customerwallet/fynpay/new/new-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new.page */ "./src/app/customerwallet/fynpay/new/new.page.ts");




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

/***/ "./src/app/customerwallet/fynpay/new/new.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/customerwallet/fynpay/new/new.module.ts ***!
  \*********************************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-routing.module */ "./src/app/customerwallet/fynpay/new/new-routing.module.ts");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new.page */ "./src/app/customerwallet/fynpay/new/new.page.ts");








let NewPageModule = class NewPageModule {
};
NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_1__["Angular4PaystackModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _new_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewPageRoutingModule"]
        ],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_7__["NewPage"]]
    })
], NewPageModule);



/***/ }),

/***/ "./src/app/customerwallet/fynpay/new/new.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/customerwallet/fynpay/new/new.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvZnlucGF5L25ldy9uZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQUVSOztBQUNBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcndhbGxldC9meW5wYXkvbmV3L25ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xufVxuLmhlYWQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5zbWFsbCB7XG4gICAgYXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmlucHV0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi53aGl0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customerwallet/fynpay/new/new.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/customerwallet/fynpay/new/new.page.ts ***!
  \*******************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let NewPage = class NewPage {
    constructor(fun, router, shopService, authService, loadingCtrl) {
        this.fun = fun;
        this.router = router;
        this.shopService = shopService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.channels = ['card']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        this.fundForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required] }),
        });
    }
    ngOnInit() {
        this.getParameter();
        this.userName = this.authService.currentUserDataValue.name;
        this.userEmail = this.authService.currentUserDataValue.email;
    }
    paymentInit() {
    }
    getParameter() {
        this.shopService.getParameter()
            .subscribe(result => {
            this.public_key = result.data;
        });
    }
    paymentCancel() {
        this.errorSwt('You cancelled the payment!');
    }
    onPay() {
        this.fun.presentToast('Please Wait ...');
    }
    paymentDone(ref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (ref.status === 'success') {
                //ref contains the response from paystack after successful payment
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.shopService.fundWallet(String(this.sid), 'Fund Wallet', String(this.fundForm.value.amount), String(ref.reference), String(ref.transaction))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.router.navigate(['/', 'sellerswallet', 'tabs', 'fynpay']);
                        this.fun.presentToast(res.msg);
                    }
                    else {
                        this.errorSwt(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                });
            }
            else {
                this.errorSwt('Please, the payment was not successful');
            }
        });
    }
    errorSwt(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Fund Account!',
            text: msg,
            timer: 2000,
            timerProgressBar: true,
            icon: 'error'
        });
    }
    CalculatePercentage(userAmt) {
        let addedPerc = (parseInt(userAmt) * 0.02);
        let newAmt = parseInt(userAmt) + addedPerc;
        if (parseInt(userAmt) >= 2500) {
            newAmt = parseInt(userAmt) + 100;
        }
        return newAmt;
    }
};
NewPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/fynpay/new/new.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new.page.scss */ "./src/app/customerwallet/fynpay/new/new.page.scss")).default]
    })
], NewPage);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/new/new-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/new/new-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new.page */ "./src/app/sellerswallet/fynpay/new/new.page.ts");




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

/***/ "./src/app/sellerswallet/fynpay/new/new.module.ts":
/*!********************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/new/new.module.ts ***!
  \********************************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-routing.module */ "./src/app/sellerswallet/fynpay/new/new-routing.module.ts");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new.page */ "./src/app/sellerswallet/fynpay/new/new.page.ts");








let NewPageModule = class NewPageModule {
};
NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_1__["Angular4PaystackModule"],
            _new_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewPageRoutingModule"]
        ],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_7__["NewPage"]]
    })
], NewPageModule);



/***/ }),

/***/ "./src/app/sellerswallet/fynpay/new/new.page.scss":
/*!********************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/new/new.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3dhbGxldC9meW5wYXkvbmV3L25ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBRVI7O0FBQ0E7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvZnlucGF5L25ldy9uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbn1cbi5oZWFkLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uc21hbGwge1xuICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5pbnB1dCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/sellerswallet/fynpay/new/new.page.ts":
/*!******************************************************!*\
  !*** ./src/app/sellerswallet/fynpay/new/new.page.ts ***!
  \******************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let NewPage = class NewPage {
    constructor(fun, router, shopService, authService, loadingCtrl) {
        this.fun = fun;
        this.router = router;
        this.shopService = shopService;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.channels = ['card']; //Paystack Payment Methods
        this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        this.fundForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required] }),
        });
    }
    ngOnInit() {
        this.getParameter();
        this.userName = this.authService.currentUserDataValue.name;
        this.userEmail = this.authService.currentUserDataValue.email;
    }
    paymentInit() {
    }
    getParameter() {
        this.shopService.getParameter()
            .subscribe(result => {
            this.public_key = result.data;
        });
    }
    paymentCancel() {
        this.errorSwt('You cancelled the payment!');
    }
    onPay() {
        this.fun.presentToast('Please Wait ...');
    }
    paymentDone(ref) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (ref.status === 'success') {
                //ref contains the response from paystack after successful payment
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.shopService.fundWallet(String(this.sid), 'Fund Wallet', String(this.fundForm.value.amount), String(ref.reference), String(ref.transaction))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.router.navigate(['/', 'sellerswallet', 'tabs', 'fynpay']);
                        this.fun.presentToast(res.msg);
                    }
                    else {
                        this.errorSwt(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                });
            }
            else {
                this.errorSwt('Please, the payment was not successful');
            }
        });
    }
    errorSwt(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Fund Account!',
            text: msg,
            timer: 2000,
            timerProgressBar: true,
            icon: 'error'
        });
    }
    CalculatePercentage(userAmt) {
        let addedPerc = (parseInt(userAmt) * 0.02);
        let newAmt = parseInt(userAmt) + addedPerc;
        if (parseInt(userAmt) >= 2500) {
            newAmt = parseInt(userAmt) + 100;
        }
        return newAmt;
    }
};
NewPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/fynpay/new/new.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new.page.scss */ "./src/app/sellerswallet/fynpay/new/new.page.scss")).default]
    })
], NewPage);



/***/ })

}]);
//# sourceMappingURL=fynpay-new-new-module-es2015.js.map