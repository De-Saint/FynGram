(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/categories/categories.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/categories/categories.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"apps\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added any category yet!</strong></ion-text>\n        <ion-text color=\"mytheme\" class=\"ion-margin-top\">\n          <span class=\"white\">Visit the website to a category</span>\n        </ion-text>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n <ion-item lines=\"none\" *ngFor=\"let category of categories\" class=\"card ion-margin-bottom ion-no-padding\"\n   >\n    <ion-row class=\"container-outer\">\n      <ion-col size=\"2\" class=\"ion-text-center container-inner\">\n        <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+category.ImageText\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{category.name}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{category.description}}</h6>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">Is Root Category: <strong>{{category.IsRoot}}</strong></h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-item> \n</ion-content>");

/***/ }),

/***/ "./src/app/admincategory/categories/categories-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admincategory/categories/categories-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/admincategory/categories/categories.page.ts");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/admincategory/categories/categories.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admincategory/categories/categories.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/admincategory/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/admincategory/categories/categories.page.ts");







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/admincategory/categories/categories.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/admincategory/categories/categories.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: white !important;\n}\n\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n  padding-left: 0.5em !important;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 15px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5jYXRlZ29yeS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxTQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFUSTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBWUo7O0FBVkk7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5jYXRlZ29yeS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnNlYXJjaC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW0gIWltcG9ydGFudDtcbiAgfVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnN1YntcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uaXRlbS1pY29ue1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZnVsbHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zbWFsbCB7XG4gICAgbWFyZ2luOiAwO1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDA7XG59XG4uaXRlbS1pY29uc3tcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4uY29udGFpbmVyLW91dGVyIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5jb250YWluZXItaW5uZXIge1xuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zcG9uLWltZyB7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDNweDtcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/admincategory/categories/categories.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/admincategory/categories/categories.page.ts ***!
  \*************************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let CategoriesPage = class CategoriesPage {
    constructor(loadingCtrl, shopService) {
        this.loadingCtrl = loadingCtrl;
        this.shopService = shopService;
        this.show = true;
    }
    ionViewWillEnter() {
        if (!this.categories) {
            this.getAllCategories();
        }
    }
    ngOnInit() {
    }
    getAllCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetCategories().subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.categories = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                this.show = false;
                loading.dismiss().catch(() => { });
            });
        });
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/admincategory/categories/categories.page.scss")).default]
    })
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map