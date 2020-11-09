(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-new-new-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/new/new.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/new/new.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Add Address</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"addressForm\">\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Address Type</span></ion-text>\n        <ion-select formControlName=\"addresstype\" [interfaceOptions]=\"addresstypecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select address type\">\n          <ion-select-option *ngFor=\"let q of addresstypes\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">State</span></ion-text>\n        <ion-select formControlName=\"state\" [interfaceOptions]=\"statecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select State\" (ionChange)=\"onSelectState($event)\">\n          <ion-select-option *ngFor=\"let q of states\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">LGA</span></ion-text>\n        <ion-select formControlName=\"lga\" [interfaceOptions]=\"lgacustomAlertOptions\" class=\"input\"\n          placeholder=\"Select LGA\" (ionChange)=\"onSelectLga($event)\">\n          <ion-select-option *ngFor=\"let q of lgas\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Town</span></ion-text>\n        <ion-select formControlName=\"town\" [interfaceOptions]=\"towncustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Town\" (ionChange)=\"onSelectTown($event)\">\n          <ion-select-option *ngFor=\"let q of towns\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"showbustop\">\n        <ion-text><span class=\"label\">Bus Stop</span></ion-text>\n        <ion-select formControlName=\"busstop\" [interfaceOptions]=\"busstopcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Bus Stop\" (ionChange)=\"onSelectBusStop($event)\">\n          <ion-select-option *ngFor=\"let q of busstops\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col *ngIf=\"showstreet\">\n        <ion-text><span class=\"label\">Street</span></ion-text>\n        <ion-select formControlName=\"street\" [interfaceOptions]=\"streetcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Street\">\n          <ion-select-option *ngFor=\"let q of streets\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-row>\n        <ion-col >\n          <ion-text><span class=\"label\">Type your Bus Stop</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"busstop\" type=\"text\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-text><span class=\"label\">Type your Street</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"street\" type=\"text\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Close To</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"closeto\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">House Number</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"housenumber\" placeholder=\"Optional\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Phone Number (11 digits)</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"phone\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Postal Code</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"postal\" type=\"number\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Set To Default Address?</span></ion-text>\n        <ion-select formControlName=\"default\" [interfaceOptions]=\"defaultcustomAlertOptions\" class=\"input\"\n          >\n          <ion-select-option value=\"1\">Yes</ion-select-option>\n          <ion-select-option value=\"0\">No</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"mytheme\"  (click)=\"update()\"><span\n            class=\"white\"><strong>Save</strong></span></ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/new/new.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/new/new.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Add Address</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"addressForm\">\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Address Type</span></ion-text>\n        <ion-select formControlName=\"addresstype\" [interfaceOptions]=\"addresstypecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select address type\">\n          <ion-select-option *ngFor=\"let q of addresstypes\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">State</span></ion-text>\n        <ion-select formControlName=\"state\" [interfaceOptions]=\"statecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select State\" (ionChange)=\"onSelectState($event)\">\n          <ion-select-option *ngFor=\"let q of states\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">LGA</span></ion-text>\n        <ion-select formControlName=\"lga\" [interfaceOptions]=\"lgacustomAlertOptions\" class=\"input\"\n          placeholder=\"Select LGA\" (ionChange)=\"onSelectLga($event)\">\n          <ion-select-option *ngFor=\"let q of lgas\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Town</span></ion-text>\n        <ion-select formControlName=\"town\" [interfaceOptions]=\"towncustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Town\" (ionChange)=\"onSelectTown($event)\">\n          <ion-select-option *ngFor=\"let q of towns\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"showbustop\">\n        <ion-text><span class=\"label\">Bus Stop</span></ion-text>\n        <ion-select formControlName=\"busstop\" [interfaceOptions]=\"busstopcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Bus Stop\" (ionChange)=\"onSelectBusStop($event)\">\n          <ion-select-option *ngFor=\"let q of busstops\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col *ngIf=\"showstreet\">\n        <ion-text><span class=\"label\">Street</span></ion-text>\n        <ion-select formControlName=\"street\" [interfaceOptions]=\"streetcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Street\">\n          <ion-select-option *ngFor=\"let q of streets\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-row>\n        <ion-col >\n          <ion-text><span class=\"label\">Type your Bus Stop</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"busstop\" type=\"text\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-text><span class=\"label\">Type your Street</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"street\" type=\"text\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Close To</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"closeto\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">House Number</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"housenumber\" placeholder=\"Optional\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Phone Number (11 digits)</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"phone\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Postal Code</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"postal\" type=\"number\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"mytheme\"  (click)=\"update()\"><span\n            class=\"white\"><strong>Save</strong></span></ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/customerprofile/address/new/new-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customerprofile/address/new/new-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new.page */ "./src/app/customerprofile/address/new/new.page.ts");




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

/***/ "./src/app/customerprofile/address/new/new.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/address/new/new.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-routing.module */ "./src/app/customerprofile/address/new/new-routing.module.ts");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/customerprofile/address/new/new.page.ts");







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

/***/ "./src/app/customerprofile/address/new/new.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/address/new/new.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  padding-left: 1.2em !important;\n  padding-right: 1.2em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL2FkZHJlc3MvbmV3L25ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJvZmlsZS9hZGRyZXNzL25ldy9uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMS4yZW0gIWltcG9ydGFudDtcbn1cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/customerprofile/address/new/new.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/customerprofile/address/new/new.page.ts ***!
  \*********************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/address.service */ "./src/app/services/address.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");








let NewPage = class NewPage {
    constructor(fun, addressService, loadingCtrl, router, authService) {
        this.fun = fun;
        this.addressService = addressService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.authService = authService;
        this.showbustop = true;
        this.showstreet = true;
        this.defaultcustomAlertOptions = {
            header: 'Select Default',
        };
        this.addresstypecustomAlertOptions = {
            header: 'Select Address Type',
        };
        this.statecustomAlertOptions = {
            header: 'Select State',
        };
        this.lgacustomAlertOptions = {
            header: 'Select LGA',
        };
        this.towncustomAlertOptions = {
            header: 'Select Town',
        };
        this.busstopcustomAlertOptions = {
            header: 'Select Bus Stop',
        };
        this.streetcustomAlertOptions = {
            header: 'Select Street',
        };
        this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addresstype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            lga: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            busstop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            closeto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            housenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)] }),
            postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            default: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        });
    }
    ngOnInit() {
        this.GetAddressTypes();
        this.GetStates();
    }
    GetAddressTypes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetAddressTypes().subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.addresstypes = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    GetStates() {
        this.addressService.GetStates().subscribe(res => {
            if (res.code === 200) {
                this.states = res.data;
            }
            else {
                this.fun.presentToast(res.msg);
            }
        }, error => {
        });
    }
    onSelectState(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetLga(String(event.detail.value)).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.lgas = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSelectLga(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetTowns(String(event.detail.value))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.towns = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSelectTown(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetBusStops(String(event.detail.value))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.busstops = res.data;
                    this.showbustop = true;
                }
                else {
                    this.showbustop = false;
                    this.showstreet = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSelectBusStop(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetStreets(String(event.detail.value))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.streets = res.data;
                    this.showstreet = true;
                }
                else {
                    this.showstreet = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.addressForm.valid) {
                this.fun.presentToast('Wrong Input!');
                return false;
            }
            if (this.addressForm.value.phone.length === 11) {
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.addressService.AddNewAddress(String(this.sid), String(this.addressForm.value.addresstype), this.addressForm.value.state, this.addressForm.value.lga, this.addressForm.value.town, this.addressForm.value.busstop, this.addressForm.value.street, this.addressForm.value.closeto, String(this.addressForm.value.housenumber), String(this.addressForm.value.phone), String(this.addressForm.value.postal), String(this.addressForm.value.default))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.router.navigate(['/', 'customerprofile', 'tabs', 'address']);
                        this.fun.presentToast(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                    this.fun.presentToast(error);
                });
            }
            else {
                this.fun.presentToast('Phone must be 11 digits, start with 070xxxxxxxx!');
            }
        });
    }
};
NewPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_6__["FunctionsService"] },
    { type: _services_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }
];
NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/new/new.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new.page.scss */ "./src/app/customerprofile/address/new/new.page.scss")).default]
    })
], NewPage);



/***/ }),

/***/ "./src/app/sellersprofile/address/new/new-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/sellersprofile/address/new/new-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new.page */ "./src/app/sellersprofile/address/new/new.page.ts");




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

/***/ "./src/app/sellersprofile/address/new/new.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/sellersprofile/address/new/new.module.ts ***!
  \**********************************************************/
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
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-routing.module */ "./src/app/sellersprofile/address/new/new-routing.module.ts");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/sellersprofile/address/new/new.page.ts");







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

/***/ "./src/app/sellersprofile/address/new/new.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/sellersprofile/address/new/new.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  padding-left: 1.2em !important;\n  padding-right: 1.2em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3Byb2ZpbGUvYWRkcmVzcy9uZXcvbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvc2VsbGVyc3Byb2ZpbGUvYWRkcmVzcy9uZXcvbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMmVtICFpbXBvcnRhbnQ7XG59XG4ubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sellersprofile/address/new/new.page.ts":
/*!********************************************************!*\
  !*** ./src/app/sellersprofile/address/new/new.page.ts ***!
  \********************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/address.service */ "./src/app/services/address.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");








let NewPage = class NewPage {
    constructor(fun, addressService, loadingCtrl, router, authService) {
        this.fun = fun;
        this.addressService = addressService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.authService = authService;
        this.showbustop = true;
        this.showstreet = true;
        this.defaultcustomAlertOptions = {
            header: 'Select Default',
        };
        this.addresstypecustomAlertOptions = {
            header: 'Select Address Type',
        };
        this.statecustomAlertOptions = {
            header: 'Select State',
        };
        this.lgacustomAlertOptions = {
            header: 'Select LGA',
        };
        this.towncustomAlertOptions = {
            header: 'Select Town',
        };
        this.busstopcustomAlertOptions = {
            header: 'Select Bus Stop',
        };
        this.streetcustomAlertOptions = {
            header: 'Select Street',
        };
        this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addresstype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            lga: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            busstop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            closeto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            housenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)] }),
            postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
        });
    }
    ngOnInit() {
        this.GetAddressTypes();
        this.GetStates();
    }
    GetAddressTypes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetAddressTypes().subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.addresstypes = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    GetStates() {
        this.addressService.GetStates().subscribe(res => {
            if (res.code === 200) {
                this.states = res.data;
            }
            else {
                this.fun.presentToast(res.msg);
            }
        }, error => {
        });
    }
    onSelectState(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetLga(String(event.detail.value)).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.lgas = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSelectLga(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetTowns(String(event.detail.value))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.towns = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSelectTown(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetBusStops(String(event.detail.value))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.busstops = res.data;
                    this.showbustop = true;
                }
                else {
                    this.showbustop = false;
                    this.showstreet = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSelectBusStop(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.addressService.GetStreets(String(event.detail.value))
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.streets = res.data;
                    this.showstreet = true;
                }
                else {
                    this.showstreet = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (!this.addressForm.valid) {
            //   this.fun.presentToast('Wrong Input!');
            //   return false;
            // }
            if (this.addressForm.value.phone.length === 11) {
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.addressService.AddNewAddress(String(this.sid), String(this.addressForm.value.addresstype), this.addressForm.value.state, this.addressForm.value.lga, this.addressForm.value.town, this.addressForm.value.busstop, this.addressForm.value.street, this.addressForm.value.closeto, String(this.addressForm.value.housenumber), String(this.addressForm.value.phone), String(this.addressForm.value.postal), String(1))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.router.navigate(['/', 'sellersprofile', 'tabs', 'address']);
                        this.fun.presentToast(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                    this.fun.presentToast(error);
                });
            }
            else {
                this.fun.presentToast('Phone must be 11 digits, start with 070xxxxxxxx!');
            }
        });
    }
};
NewPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_6__["FunctionsService"] },
    { type: _services_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"] }
];
NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/new/new.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new.page.scss */ "./src/app/sellersprofile/address/new/new.page.scss")).default]
    })
], NewPage);



/***/ })

}]);
//# sourceMappingURL=address-new-new-module-es2015.js.map