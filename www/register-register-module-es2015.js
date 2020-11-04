(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/register/register.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/register/register.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header ion-padding class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons>\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title color=\"light\">Register</ion-title>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"ion-justify-content-center head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n\n<ion-content ion-padding>\n  <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">New Customer</h3>\n  </ion-text>\n  <form [formGroup]=\"registerForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-select interface=\"action-sheet\" placeholder=\"Select Title\"\n            class=\"select input ion-padding-horizontal ion-padding-vertical input\"\n            [interfaceOptions]=\"titlecustomAlertOptions\" formControlName='title'>\n            <ion-select-option value=\"Mr.\">Mr.</ion-select-option>\n            <ion-select-option value=\"Mrs.\">Mrs.</ion-select-option>\n            <ion-select-option value=\"Miss\">Miss</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input type=\"text\" placeholder=\"First Name\" formControlName=\"first_name\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-input type=\"text\" placeholder=\"Last Name\" formControlName=\"last_name\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-select interface=\"action-sheet\" placeholder=\"Select Gender\"\n            class=\"select input ion-padding-horizontal ion-padding-vertical input\"\n            [interfaceOptions]=\"gendercustomAlertOptions\" formControlName='gender'>\n            <ion-select-option value=\"Male\">Male</ion-select-option>\n            <ion-select-option value=\"Female\">Female</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"email\" placeholder=\"Email\" formControlName=\"email\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"tel\" placeholder=\"Phone 070xxxxxxxx\" formControlName=\"phone\"\n            class=\"input ion-padding-horizontal \"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input type=\"password\" placeholder=\"Password (Min:6)\" formControlName=\"password\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-input type=\"password\" placeholder=\"Confirm Password (Min:6)\" formControlName=\"password2\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item style=\"border-bottom: none !important;\">\n            <ion-checkbox color=\"mytheme\" formControlName=\"terms\" slot=\"start\"></ion-checkbox>\n            <ion-label color=\"mytheme\">I agree to the Terms & Conditions</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col>\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"!registerForm.valid\"\n            color=\"mytheme\"><strong class=\"white\">Create an\n              Account</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin\"></div>\n      <ion-row class=\"\">\n        <ion-col>\n          <ion-button type=\"submit\" expand=\"block\" color=\"mytheme\" (click)=\"onOpen('authenticate')\"><strong\n              class=\"white\">Have an\n              account? Sign in</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin\"></div>\n      <ion-row>\n        <ion-col>\n          <ion-text class=\"ion-text-center ion-margin-top\">\n            <h6 class=\"small ion-no-margin \">\n              <a (click)=\"openLink('https://fyngram.com/FynGramShop/pages/shop/terms/terms.jsp')\"><strong>Terms of Use</strong></a>\n              <span style=\"color: gray !important;\"> and </span>\n              <a (click)=\"openLink('https://fyngram.com/FynGramShop/pages/shop/privacy/privacy.jsp')\"><strong>Privacy Policy</strong></a>\n            </h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/authenticate/register/register-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/authenticate/register/register-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/authenticate/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/authenticate/register/register.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/authenticate/register/register.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/authenticate/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/authenticate/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/authenticate/register/register.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/authenticate/register/register.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n  color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.select {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\nion-label {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHVCQUFBO0FBRko7O0FBSUE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUk7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUFEUjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBREk7RUFDSSxpQ0FBQTtFQUNBLCtCQUFBO0FBR1I7O0FBR0E7RUFDSSx3QkFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSw4QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgICAvLyBtaW4taGVpZ2h0OiAyMXZoICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xufVxuLmhlYWQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5zbWFsbCB7XG4gICAgYXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi53aGl0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG4gICAgfVxufVxuLmJ1dHRvbi1jb2xvciB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvciA6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn1cbi5sb2dvIHtcbiAgICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG4uc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5pb24tbGFiZWx7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/authenticate/register/register.page.ts":
/*!********************************************************!*\
  !*** ./src/app/authenticate/register/register.page.ts ***!
  \********************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let RegisterPage = class RegisterPage {
    constructor(fun, authService, loadingCtrl, data) {
        this.fun = fun;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.data = data;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.titlecustomAlertOptions = {
            header: 'Select Title',
        };
        this.gendercustomAlertOptions = {
            header: 'Select Gender',
        };
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)] }),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)] }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)] }),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] })
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.registerForm.valid) {
                this.fun.presentToast('Wrong Input!');
                return false;
            }
            if (this.fun.validateEmail(this.registerForm.value.email)) {
                if (this.registerForm.value.phone.length === 11) {
                    if (this.registerForm.value.password === this.registerForm.value.password2) {
                        const loading = yield this.loadingCtrl.create({
                            cssClass: 'my-custom-class',
                            message: 'Please wait...',
                        });
                        yield loading.present();
                        this.authService.RegisterCustomer(this.registerForm.value.first_name, this.registerForm.value.last_name, this.registerForm.value.title, this.registerForm.value.gender, this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.phone)
                            .subscribe(res => {
                            loading.dismiss().catch(() => { });
                            if (res.code === 200) {
                                this.fun.navigate('authenticate/validate');
                                this.fun.presentToast(res.msg);
                            }
                        }, error => {
                            loading.dismiss().catch(() => { });
                            this.fun.presentToast(error);
                        });
                    }
                    else {
                        this.fun.presentToast('Password Mismatch!');
                    }
                }
                else {
                    this.fun.presentToast('Phone must be 11 digits, start with 070xxxxxxxx!');
                }
            }
            else {
                this.fun.presentToast('Invalid Email!');
            }
        });
    }
    openLink(link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({
                url: link,
                toolbarColor: "#40A944"
            });
        });
    }
    onOpen(link) {
        this.fun.navigate(link);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"] },
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/authenticate/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map