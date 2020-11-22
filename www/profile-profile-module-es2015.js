(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/profile/profile.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/profile/profile.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"updateForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Title</small></ion-label>\n          <ion-input type=\"text\" placeholder=\"Title\" readonly formControlName=\"title\" value=\"{{details?.title}}\"\n          class=\"input ion-padding-horizontal\">\n        </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>First Name</small></ion-label>\n          <ion-input type=\"text\"  placeholder=\"First Name\" formControlName=\"first_name\" value=\"{{details?.firstname}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label><small>Last Name</small></ion-label>\n          <ion-input type=\"text\"  placeholder=\"Last Name\" formControlName=\"last_name\" value=\"{{details?.lastname}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Gender</small></ion-label>\n          <ion-input type=\"text\" placeholder=\"Gender\" readonly formControlName=\"gender\" value=\"{{details?.gender}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Email</small></ion-label>\n          <ion-input readonly type=\"email\" placeholder=\"Email\" formControlName=\"email\" value=\"{{details?.email}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Phone</small></ion-label>\n          <ion-input  type=\"tel\" placeholder=\"Phone 070xxxxxxxx\" formControlName=\"phone\" value=\"{{details?.phone}}\"\n            class=\"input ion-padding-horizontal \"></ion-input>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin-top\"></div>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Current Password</small></ion-label>\n          <ion-input type=\"password\" placeholder=\"Password (Min:6)\" formControlName=\"password\" \n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label><small>New Password</small></ion-label>\n          <ion-input type=\"password\" placeholder=\"New Password (Min:6)\" formControlName=\"password2\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col>\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"onSubmit()\"\n            color=\"mytheme\"><strong class=\"white\">Update Account</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin\"></div>\n      \n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/profile/profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/profile/profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"updateForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Title</small></ion-label>\n          <ion-input type=\"text\" placeholder=\"Title\" readonly formControlName=\"title\" value=\"{{details?.title}}\"\n          class=\"input ion-padding-horizontal\">\n        </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>First Name</small></ion-label>\n          <ion-input type=\"text\"  placeholder=\"First Name\" formControlName=\"first_name\" value=\"{{details?.firstname}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label><small>Last Name</small></ion-label>\n          <ion-input type=\"text\"  placeholder=\"Last Name\" formControlName=\"last_name\" value=\"{{details?.lastname}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Gender</small></ion-label>\n          <ion-input type=\"text\" placeholder=\"Gender\" readonly formControlName=\"gender\" value=\"{{details?.gender}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Email</small></ion-label>\n          <ion-input readonly type=\"email\" placeholder=\"Email\" formControlName=\"email\" value=\"{{details?.email}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Phone</small></ion-label>\n          <ion-input  type=\"tel\" placeholder=\"Phone 070xxxxxxxx\" formControlName=\"phone\" value=\"{{details?.phone}}\"\n            class=\"input ion-padding-horizontal \"></ion-input>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin-top\"></div>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Current Password</small></ion-label>\n          <ion-input type=\"password\" placeholder=\"Password (Min:6)\" formControlName=\"password\" \n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label><small>New Password</small></ion-label>\n          <ion-input type=\"password\" placeholder=\"New Password (Min:6)\" formControlName=\"password2\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col>\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"onSubmit()\"\n            color=\"mytheme\"><strong class=\"white\">Update Account</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin\"></div>\n      \n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/profile/profile.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/profile/profile.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"updateForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Title</small></ion-label>\n          <ion-input type=\"text\" placeholder=\"Title\" readonly formControlName=\"title\" value=\"{{details?.title}}\"\n          class=\"input ion-padding-horizontal\">\n        </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>First Name</small></ion-label>\n          <ion-input type=\"text\"  placeholder=\"First Name\" formControlName=\"first_name\" value=\"{{details?.firstname}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label><small>Last Name</small></ion-label>\n          <ion-input type=\"text\"  placeholder=\"Last Name\" formControlName=\"last_name\" value=\"{{details?.lastname}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Gender</small></ion-label>\n          <ion-input type=\"text\" placeholder=\"Gender\" readonly formControlName=\"gender\" value=\"{{details?.gender}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Email</small></ion-label>\n          <ion-input readonly type=\"email\" placeholder=\"Email\" formControlName=\"email\" value=\"{{details?.email}}\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Phone</small></ion-label>\n          <ion-input  type=\"tel\" placeholder=\"Phone 070xxxxxxxx\" formControlName=\"phone\" value=\"{{details?.phone}}\"\n            class=\"input ion-padding-horizontal \"></ion-input>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin-top\"></div>\n      <ion-row>\n        <ion-col>\n          <ion-label><small>Current Password</small></ion-label>\n          <ion-input type=\"password\" placeholder=\"Password (Min:6)\" formControlName=\"password\" \n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-label><small>New Password</small></ion-label>\n          <ion-input type=\"password\" placeholder=\"New Password (Min:6)\" formControlName=\"password2\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col>\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"onSubmit()\"\n            color=\"mytheme\"><strong class=\"white\">Update Account</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin\"></div>\n      \n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/adminprofile/profile/profile-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/adminprofile/profile/profile-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/adminprofile/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/adminprofile/profile/profile.module.ts":
/*!********************************************************!*\
  !*** ./src/app/adminprofile/profile/profile.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/adminprofile/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/adminprofile/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/adminprofile/profile/profile.page.scss":
/*!********************************************************!*\
  !*** ./src/app/adminprofile/profile/profile.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n  color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\nion-label {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx1QkFBQTtBQUZKOztBQUlBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBRFI7O0FBSUE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFBSTtFQUNJLGlDQUFBO0VBQ0EsK0JBQUE7QUFFUjs7QUFJQTtFQUNJLHdCQUFBO0FBREo7O0FBR0E7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSw4QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XG4gICAgLy8gbWluLWhlaWdodDogMjF2aCAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbn1cbi5oZWFkLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uc21hbGwge1xuICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5pbnB1dCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xuICAgIH1cbn1cbi5idXR0b24tY29sb3Ige1xuICAgIC8vIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuLnNlbGVjdCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuaW9uLWxhYmVse1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminprofile/profile/profile.page.ts":
/*!******************************************************!*\
  !*** ./src/app/adminprofile/profile/profile.page.ts ***!
  \******************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let ProfilePage = class ProfilePage {
    constructor(authService, loadingCtrl, fun) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)] }),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)] }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ disabled: true }, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11)] }),
        });
    }
    ngOnInit() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetUserDetails(this.sid);
    }
    GetUserDetails(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetUserDetails(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.details = res.data;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.updateForm.value.password !== null) {
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.authService.UpdateProfile(String(this.sid), String(this.updateForm.value.first_name), String(this.updateForm.value.last_name), String(this.updateForm.value.password), String(this.updateForm.value.password2), String(this.updateForm.value.phone))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.GetUserDetails(this.sid);
                        this.fun.presentToast(res.msg);
                    }
                    else {
                        this.fun.presentToast(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                    this.fun.presentToast(error);
                });
            }
            else {
                this.fun.presentToast('Your current password is needed to update your profile');
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/adminprofile/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/customerprofile/profile/profile-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customerprofile/profile/profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/customerprofile/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/customerprofile/profile/profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/profile/profile.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/customerprofile/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/customerprofile/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/customerprofile/profile/profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/profile/profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n  color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\nion-label {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx1QkFBQTtBQUZKOztBQUlBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBRFI7O0FBSUE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFBSTtFQUNJLGlDQUFBO0VBQ0EsK0JBQUE7QUFFUjs7QUFJQTtFQUNJLHdCQUFBO0FBREo7O0FBR0E7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSw4QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XG4gICAgLy8gbWluLWhlaWdodDogMjF2aCAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbn1cbi5oZWFkLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uc21hbGwge1xuICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5pbnB1dCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xuICAgIH1cbn1cbi5idXR0b24tY29sb3Ige1xuICAgIC8vIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuLnNlbGVjdCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuaW9uLWxhYmVse1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customerprofile/profile/profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/customerprofile/profile/profile.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let ProfilePage = class ProfilePage {
    constructor(authService, loadingCtrl, fun) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)] }),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)] }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ disabled: true }, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11)] }),
        });
    }
    ngOnInit() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetUserDetails(this.sid);
    }
    GetUserDetails(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetUserDetails(sid).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.details = res.data;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.updateForm.value.password !== null) {
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.authService.UpdateProfile(String(this.sid), String(this.updateForm.value.first_name), String(this.updateForm.value.last_name), String(this.updateForm.value.password), String(this.updateForm.value.password2), String(this.updateForm.value.phone))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.GetUserDetails(this.sid);
                        this.fun.presentToast(res.msg);
                    }
                    else {
                        this.fun.presentToast(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                    this.fun.presentToast(error);
                });
            }
            else {
                this.fun.presentToast('Your current password is needed to update your profile');
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/customerprofile/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/sellersprofile/profile/profile-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/sellersprofile/profile/profile-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/sellersprofile/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/sellersprofile/profile/profile.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/sellersprofile/profile/profile.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/sellersprofile/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/sellersprofile/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/sellersprofile/profile/profile.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/sellersprofile/profile/profile.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n  color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\nion-label {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3Byb2ZpbGUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHVCQUFBO0FBRko7O0FBSUE7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUk7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUFEUjs7QUFJQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUZKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUFJO0VBQ0ksaUNBQUE7RUFDQSwrQkFBQTtBQUVSOztBQUlBO0VBQ0ksd0JBQUE7QUFESjs7QUFHQTtFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLDhCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXJzcHJvZmlsZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xuICAgIC8vIG1pbi1oZWlnaHQ6IDIxdmggIWltcG9ydGFudDtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG4uaGVhZC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLnNtYWxsIHtcbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG4uaW5wdXQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufVxuLndoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvciA6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbiAgICB9XG59XG4uYnV0dG9uLWNvbG9yIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuLmxvZ28ge1xuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcbn1cbi5zZWxlY3Qge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cbmlvbi1sYWJlbHtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/sellersprofile/profile/profile.page.ts":
/*!********************************************************!*\
  !*** ./src/app/sellersprofile/profile/profile.page.ts ***!
  \********************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let ProfilePage = class ProfilePage {
    constructor(authService, loadingCtrl, fun) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)] }),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)] }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ disabled: true }, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { updateOn: 'blur', validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11)] }),
        });
    }
    ngOnInit() {
        if (!this.details) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserDetails(this.sid);
        }
    }
    GetUserDetails(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.authService.GetUserDetails(sid).subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.details = res.data;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.updateForm.value.password !== null) {
                const loading = yield this.loadingCtrl.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    mode: 'ios'
                });
                yield loading.present();
                this.sid = this.authService.currentUserDataValue.sid;
                this.authService.UpdateProfile(String(this.sid), String(this.updateForm.value.first_name), String(this.updateForm.value.last_name), String(this.updateForm.value.password), String(this.updateForm.value.password2), String(this.updateForm.value.phone))
                    .subscribe(res => {
                    loading.dismiss().catch(() => { });
                    if (res.code === 200) {
                        this.GetUserDetails(this.sid);
                        this.fun.presentToast(res.msg);
                    }
                    else {
                        this.fun.presentToast(res.msg);
                    }
                }, error => {
                    loading.dismiss().catch(() => { });
                    this.fun.presentToast(error);
                });
            }
            else {
                this.fun.presentToast('Your current password is needed to update your profile');
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/sellersprofile/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map