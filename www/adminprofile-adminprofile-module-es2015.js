(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminprofile-adminprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/adminprofile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/adminprofile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"profile\">\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"messages\">\n      <ion-label>Messages</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"reviews\">\n      <ion-label>Reviews</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/adminprofile/adminprofile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/adminprofile/adminprofile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminprofilePageRoutingModule", function() { return AdminprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adminprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminprofile.page */ "./src/app/adminprofile/adminprofile.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _adminprofile_page__WEBPACK_IMPORTED_MODULE_3__["AdminprofilePage"],
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/adminprofile/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | messages-messages-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("messages-messages-module")]).then(__webpack_require__.bind(null, /*! ./messages/messages.module */ "./src/app/adminprofile/messages/messages.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: 'reviews',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | reviews-reviews-module */[__webpack_require__.e("default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~be8d2e4a"), __webpack_require__.e("reviews-reviews-module")]).then(__webpack_require__.bind(null, /*! ./reviews/reviews.module */ "./src/app/adminprofile/reviews/reviews.module.ts")).then(m => m.ReviewsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/adminprofile/tabs/profile',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/adminprofile/tabs/profile',
        pathMatch: 'full'
    },
];
let AdminprofilePageRoutingModule = class AdminprofilePageRoutingModule {
};
AdminprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminprofilePageRoutingModule);



/***/ }),

/***/ "./src/app/adminprofile/adminprofile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/adminprofile/adminprofile.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminprofilePageModule", function() { return AdminprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adminprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminprofile-routing.module */ "./src/app/adminprofile/adminprofile-routing.module.ts");
/* harmony import */ var _adminprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminprofile.page */ "./src/app/adminprofile/adminprofile.page.ts");







let AdminprofilePageModule = class AdminprofilePageModule {
};
AdminprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adminprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminprofilePageRoutingModule"]
        ],
        declarations: [_adminprofile_page__WEBPACK_IMPORTED_MODULE_6__["AdminprofilePage"]]
    })
], AdminprofilePageModule);



/***/ }),

/***/ "./src/app/adminprofile/adminprofile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/adminprofile/adminprofile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucHJvZmlsZS9hZG1pbnByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminprofile/adminprofile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/adminprofile/adminprofile.page.ts ***!
  \***************************************************/
/*! exports provided: AdminprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminprofilePage", function() { return AdminprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdminprofilePage = class AdminprofilePage {
    constructor() { }
    ngOnInit() {
    }
};
AdminprofilePage.ctorParameters = () => [];
AdminprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adminprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/adminprofile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adminprofile.page.scss */ "./src/app/adminprofile/adminprofile.page.scss")).default]
    })
], AdminprofilePage);



/***/ })

}]);
//# sourceMappingURL=adminprofile-adminprofile-module-es2015.js.map