(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellersprofile-sellersprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/sellersprofile.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/sellersprofile.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"profile\">\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"address\">\n      <ion-label>Address</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"messages\">\n      <ion-label>Messages</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/sellersprofile/sellersprofile-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sellersprofile/sellersprofile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SellersprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersprofilePageRoutingModule", function() { return SellersprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sellersprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sellersprofile.page */ "./src/app/sellersprofile/sellersprofile.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _sellersprofile_page__WEBPACK_IMPORTED_MODULE_3__["SellersprofilePage"],
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/sellersprofile/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'address',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | address-address-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("common"), __webpack_require__.e("address-address-module")]).then(__webpack_require__.bind(null, /*! ./address/address.module */ "./src/app/sellersprofile/address/address.module.ts")).then(m => m.AddressPageModule)
                    },
                    {
                        path: 'new',
                        loadChildren: () => Promise.all(/*! import() | address-new-new-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("common"), __webpack_require__.e("address-new-new-module")]).then(__webpack_require__.bind(null, /*! ./address/new/new.module */ "./src/app/sellersprofile/address/new/new.module.ts")).then(m => m.NewPageModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | messages-messages-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("messages-messages-module")]).then(__webpack_require__.bind(null, /*! ./messages/messages.module */ "./src/app/sellersprofile/messages/messages.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/sellersprofile/tabs/profile',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/sellersprofile/tabs/profile',
        pathMatch: 'full'
    },
];
let SellersprofilePageRoutingModule = class SellersprofilePageRoutingModule {
};
SellersprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellersprofilePageRoutingModule);



/***/ }),

/***/ "./src/app/sellersprofile/sellersprofile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/sellersprofile/sellersprofile.module.ts ***!
  \*********************************************************/
/*! exports provided: SellersprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersprofilePageModule", function() { return SellersprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sellersprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sellersprofile-routing.module */ "./src/app/sellersprofile/sellersprofile-routing.module.ts");
/* harmony import */ var _sellersprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sellersprofile.page */ "./src/app/sellersprofile/sellersprofile.page.ts");







let SellersprofilePageModule = class SellersprofilePageModule {
};
SellersprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sellersprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersprofilePageRoutingModule"]
        ],
        declarations: [_sellersprofile_page__WEBPACK_IMPORTED_MODULE_6__["SellersprofilePage"]]
    })
], SellersprofilePageModule);



/***/ }),

/***/ "./src/app/sellersprofile/sellersprofile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/sellersprofile/sellersprofile.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNwcm9maWxlL3NlbGxlcnNwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sellersprofile/sellersprofile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/sellersprofile/sellersprofile.page.ts ***!
  \*******************************************************/
/*! exports provided: SellersprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellersprofilePage", function() { return SellersprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SellersprofilePage = class SellersprofilePage {
    constructor() { }
    ngOnInit() {
    }
};
SellersprofilePage.ctorParameters = () => [];
SellersprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellersprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sellersprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/sellersprofile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sellersprofile.page.scss */ "./src/app/sellersprofile/sellersprofile.page.scss")).default]
    })
], SellersprofilePage);



/***/ })

}]);
//# sourceMappingURL=sellersprofile-sellersprofile-module-es2015.js.map