(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerprofile-customerprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/customerprofile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/customerprofile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"profile\">\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"address\">\n      <ion-label>Address</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"messages\">\n      <ion-label>Messages</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"reviews\">\n      <ion-label>Reviews</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/customerprofile/customerprofile-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customerprofile/customerprofile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerprofilePageRoutingModule", function() { return CustomerprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customerprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerprofile.page */ "./src/app/customerprofile/customerprofile.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _customerprofile_page__WEBPACK_IMPORTED_MODULE_3__["CustomerprofilePage"],
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/customerprofile/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'address',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | address-address-module */ "address-address-module").then(__webpack_require__.bind(null, /*! ./address/address.module */ "./src/app/customerprofile/address/address.module.ts")).then(m => m.AddressPageModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | messages-messages-module */ "messages-messages-module").then(__webpack_require__.bind(null, /*! ./messages/messages.module */ "./src/app/customerprofile/messages/messages.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: 'reviews',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | reviews-reviews-module */ "reviews-reviews-module").then(__webpack_require__.bind(null, /*! ./reviews/reviews.module */ "./src/app/customerprofile/reviews/reviews.module.ts")).then(m => m.ReviewsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/customerprofile/tabs/profile',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/customerprofile/tabs/profile',
        pathMatch: 'full'
    },
];
let CustomerprofilePageRoutingModule = class CustomerprofilePageRoutingModule {
};
CustomerprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerprofilePageRoutingModule);



/***/ }),

/***/ "./src/app/customerprofile/customerprofile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/customerprofile.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerprofilePageModule", function() { return CustomerprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _customerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerprofile-routing.module */ "./src/app/customerprofile/customerprofile-routing.module.ts");
/* harmony import */ var _customerprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerprofile.page */ "./src/app/customerprofile/customerprofile.page.ts");







let CustomerprofilePageModule = class CustomerprofilePageModule {
};
CustomerprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerprofilePageRoutingModule"]
        ],
        declarations: [_customerprofile_page__WEBPACK_IMPORTED_MODULE_6__["CustomerprofilePage"]]
    })
], CustomerprofilePageModule);



/***/ }),

/***/ "./src/app/customerprofile/customerprofile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/customerprofile/customerprofile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJvZmlsZS9jdXN0b21lcnByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customerprofile/customerprofile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/customerprofile/customerprofile.page.ts ***!
  \*********************************************************/
/*! exports provided: CustomerprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerprofilePage", function() { return CustomerprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CustomerprofilePage = class CustomerprofilePage {
    constructor() { }
    ngOnInit() {
    }
};
CustomerprofilePage.ctorParameters = () => [];
CustomerprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customerprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/customerprofile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customerprofile.page.scss */ "./src/app/customerprofile/customerprofile.page.scss")).default]
    })
], CustomerprofilePage);



/***/ })

}]);
//# sourceMappingURL=customerprofile-customerprofile-module-es2015.js.map