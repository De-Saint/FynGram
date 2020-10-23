(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admincategory-admincategory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/admincategory.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/admincategory.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"categories\">\n      <ion-label>Categories</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"properties\">\n      <ion-label>Properties</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"units\">\n      <ion-label>Units</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/admincategory/admincategory-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admincategory/admincategory-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AdmincategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincategoryPageRoutingModule", function() { return AdmincategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admincategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admincategory.page */ "./src/app/admincategory/admincategory.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _admincategory_page__WEBPACK_IMPORTED_MODULE_3__["AdmincategoryPage"],
        children: [
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | categories-categories-module */ "categories-categories-module").then(__webpack_require__.bind(null, /*! ./categories/categories.module */ "./src/app/admincategory/categories/categories.module.ts")).then(m => m.CategoriesPageModule)
                    }
                ]
            },
            {
                path: 'properties',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | properties-properties-module */ "properties-properties-module").then(__webpack_require__.bind(null, /*! ./properties/properties.module */ "./src/app/admincategory/properties/properties.module.ts")).then(m => m.PropertiesPageModule)
                    }
                ]
            },
            {
                path: 'units',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | units-units-module */ "units-units-module").then(__webpack_require__.bind(null, /*! ./units/units.module */ "./src/app/admincategory/units/units.module.ts")).then(m => m.UnitsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/admincategory/tabs/categories',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/admincategory/tabs/categories',
        pathMatch: 'full'
    }
];
let AdmincategoryPageRoutingModule = class AdmincategoryPageRoutingModule {
};
AdmincategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmincategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/admincategory/admincategory.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admincategory/admincategory.module.ts ***!
  \*******************************************************/
/*! exports provided: AdmincategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincategoryPageModule", function() { return AdmincategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admincategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admincategory-routing.module */ "./src/app/admincategory/admincategory-routing.module.ts");
/* harmony import */ var _admincategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admincategory.page */ "./src/app/admincategory/admincategory.page.ts");







let AdmincategoryPageModule = class AdmincategoryPageModule {
};
AdmincategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admincategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmincategoryPageRoutingModule"]
        ],
        declarations: [_admincategory_page__WEBPACK_IMPORTED_MODULE_6__["AdmincategoryPage"]]
    })
], AdmincategoryPageModule);



/***/ }),

/***/ "./src/app/admincategory/admincategory.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admincategory/admincategory.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluY2F0ZWdvcnkvYWRtaW5jYXRlZ29yeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admincategory/admincategory.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/admincategory/admincategory.page.ts ***!
  \*****************************************************/
/*! exports provided: AdmincategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmincategoryPage", function() { return AdmincategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdmincategoryPage = class AdmincategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
AdmincategoryPage.ctorParameters = () => [];
AdmincategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admincategory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admincategory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/admincategory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admincategory.page.scss */ "./src/app/admincategory/admincategory.page.scss")).default]
    })
], AdmincategoryPage);



/***/ })

}]);
//# sourceMappingURL=admincategory-admincategory-module-es2015.js.map