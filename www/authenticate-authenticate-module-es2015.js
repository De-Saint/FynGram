(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authenticate-authenticate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/authenticate.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/authenticate.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons>\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title color=\"light\">Sign In</ion-title>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"ion-justify-content-center head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n<ion-content ion-padding>\n  <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Returning Customer</h3>\n  </ion-text>\n  <form [formGroup]=\"loginForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"email\" placeholder=\"Email\" name=\"email\" formControlName=\"email\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-text float-end color=\"mytheme\" (click)=\"onOpen('authenticate/forgot')\">\n            <h6 class=\"small ion-no-margin ion-text-end\">Forgot Password?</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"signin()\" color=\"mytheme\"><strong class=\"white\">Sign In</strong>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin\"></div>\n      <ion-row class=\"ion-margin-top\">\n        <ion-col>\n          <ion-button expand=\"block\" fill=\"outline\" (click)=\"onOpen('authenticate/register')\" color=\"mytheme\">\n            <strong>New? Create an Account</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-text class=\"ion-text-center ion-margin-top\">\n            <h6 class=\"small ion-no-margin \">\n              <a (click)=\"openLink('https://fyngram.com/FynGramShop/pages/shop/terms/terms.jsp')\"><strong>Terms of Use</strong></a>\n              <span style=\"color: gray !important;\"> and </span>\n              <a (click)=\"openLink('https://fyngram.com/FynGramShop/pages/shop/privacy/privacy.jsp')\"><strong>Privacy Policy</strong></a>\n            </h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/authenticate/authenticate-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/authenticate/authenticate-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatePageRoutingModule", function() { return AuthenticatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authenticate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticate.page */ "./src/app/authenticate/authenticate.page.ts");




const routes = [
    {
        path: '',
        component: _authenticate_page__WEBPACK_IMPORTED_MODULE_3__["AuthenticatePage"]
    },
    {
        path: 'forgot',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-forgot-module */ "forgot-forgot-module").then(__webpack_require__.bind(null, /*! ./forgot/forgot.module */ "./src/app/authenticate/forgot/forgot.module.ts")).then(m => m.ForgotPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "./src/app/authenticate/register/register.module.ts")).then(m => m.RegisterPageModule)
    },
    {
        path: 'reset',
        loadChildren: () => __webpack_require__.e(/*! import() | reset-reset-module */ "reset-reset-module").then(__webpack_require__.bind(null, /*! ./reset/reset.module */ "./src/app/authenticate/reset/reset.module.ts")).then(m => m.ResetPageModule)
    },
    {
        path: 'validate',
        loadChildren: () => __webpack_require__.e(/*! import() | validate-validate-module */ "validate-validate-module").then(__webpack_require__.bind(null, /*! ./validate/validate.module */ "./src/app/authenticate/validate/validate.module.ts")).then(m => m.ValidatePageModule)
    }
];
let AuthenticatePageRoutingModule = class AuthenticatePageRoutingModule {
};
AuthenticatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthenticatePageRoutingModule);



/***/ }),

/***/ "./src/app/authenticate/authenticate.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/authenticate/authenticate.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatePageModule", function() { return AuthenticatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticate-routing.module */ "./src/app/authenticate/authenticate-routing.module.ts");
/* harmony import */ var _authenticate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticate.page */ "./src/app/authenticate/authenticate.page.ts");







let AuthenticatePageModule = class AuthenticatePageModule {
};
AuthenticatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _authenticate_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticatePageRoutingModule"]
        ],
        declarations: [_authenticate_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticatePage"]]
    })
], AuthenticatePageModule);



/***/ }),

/***/ "./src/app/authenticate/authenticate.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/authenticate/authenticate.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n  color: var(--ion-color-mytheme);\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n:host(.button-solid) {\n  --background: var(--ion-color-mytheme, #40A944);\n  --color: var(--ion-color-primary-contrast, #fff);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlL2F1dGhlbnRpY2F0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtBQUFKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBSEk7RUFDSSxpQ0FBQTtFQUNBLCtCQUFBO0FBS1I7O0FBRkE7RUFDSSwwQ0FBQTtBQUtKOztBQUhBO0VBQ0ksd0JBQUE7QUFNSjs7QUFKQTtFQUNJLCtDQUFBO0VBQ0EsZ0RBQUE7QUFPSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZS9hdXRoZW50aWNhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xufVxuLmhlYWQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5pbnB1dCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xuICAgIH1cbn1cbi5idXR0b24tY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuOmhvc3QoLmJ1dHRvbi1zb2xpZCkge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUsICM0MEE5NDQpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/authenticate/authenticate.page.ts":
/*!***************************************************!*\
  !*** ./src/app/authenticate/authenticate.page.ts ***!
  \***************************************************/
/*! exports provided: AuthenticatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatePage", function() { return AuthenticatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");







const { Browser, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let AuthenticatePage = class AuthenticatePage {
    constructor(authService, fun, loadingCtrl) {
        this.authService = authService;
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        });
    }
    ngOnInit() {
    }
    signin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.fun.validateEmail(this.loginForm.value.email) && this.loginForm.value.password !== '') {
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                let oldsid;
                if (this.authService.currentUserDataValue) {
                    oldsid = this.authService.currentUserDataValue.sid;
                }
                this.authService.login(this.loginForm.value.email, this.loginForm.value.password, oldsid)
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.gotoHomePage(res.data);
                    }
                    else {
                        this.fun.presentToast(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                });
            }
            else {
                this.fun.presentToast('Wrong Input!');
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
        this.fun.navigate(link, true);
    }
    gotoHomePage(data) {
        Storage.set({ key: this.HAS_LOGGED_IN, value: 'true' });
        const name = this.authService.currentUserDataValue.name;
        const type = this.authService.currentUserDataValue.usertype;
        this.fun.presentToast('Welcome ' + name);
        if (type === 'Guest' || type === 'Customer') {
            this.fun.navigate('/home/tabs/buy', false);
        }
        else if (type === 'Seller') {
            this.fun.navigate('/sellersdashboard', false);
        }
        else if (type === 'Admin') {
            this.fun.navigate('/admindashboard', false);
        }
        const event = new CustomEvent('user:login', { detail: { name, type } });
        return window.dispatchEvent(event);
    }
};
AuthenticatePage.ctorParameters = () => [
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
AuthenticatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-authenticate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./authenticate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/authenticate.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./authenticate.page.scss */ "./src/app/authenticate/authenticate.page.scss")).default]
    })
], AuthenticatePage);



/***/ })

}]);
//# sourceMappingURL=authenticate-authenticate-module-es2015.js.map