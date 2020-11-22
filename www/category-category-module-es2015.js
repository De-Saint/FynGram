(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/category.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/category.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Categories</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\" slot=\"icon-only\" (click)=\"onOpen('cart')\" class=\"white ion-margin\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  color=\"light\">\n  <ion-grid>\n    <ion-row >\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\"  *ngFor=\"let data of categories\"  (click)=\"open(data)\">\n        <div class=\"img-wrapper\" [style.background-image]=\"'url(data:image/png;base64,' + data.ImageText\">\n        </div>\n        <ion-text class=\"ion-text-left\"><span class=\"price\">\n          <strong>{{data.name}}</strong>\n        </span>\n      </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/category/category-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/category/category-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/home/category/category.page.ts");




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/home/category/category.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/category/category.module.ts ***!
  \**************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/home/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/home/category/category.page.ts");







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/home/category/category.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/category/category.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.img-wrapper {\n  min-height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0FBTUo7O0FBSkE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7QUFRSjs7QUFOQTtFQUNJLHVCQUFBO0FBU0o7O0FBUEE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtBQVlKOztBQVhJO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQWFSOztBQVZBO0VBQ0ksdUJBQUE7QUFhSjs7QUFWQTtFQUNJLGtCQUFBO0FBYUo7O0FBWkk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWNSOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBY0o7O0FBWkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBZUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5wcmljZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogM3B4O1xufVxuLmlubGluZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIC43NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5ob3Itc2Nyb2xse1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5zZWFyY2gtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4uaG9yLXNjcm9sbHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG4ubWVudSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubXktYnRue1xuICAgIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmJ0bi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRleHR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG59XG4jZGFne1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4uc2VnbWVudHRvb2xiYXJTZWN0aW9ue1xuICAgIC0tbWluLWhlaWdodDogMzBweDtcbiAgICAuc2VnU2VjdGlvbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XG4gICAgfVxufVxuLnRleHQtdHJ1bmNhdGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuLmltZy13cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/category/category.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/category/category.page.ts ***!
  \************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let CategoryPage = class CategoryPage {
    constructor(fun, loadingCtrl, shopService, router) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.shopService = shopService;
        this.router = router;
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
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
                console.log(res);
                if (res.code === 200) {
                    this.categories = res.data;
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    open(data) {
        this.router.navigate(['/', 'home', 'tabs', 'category', 'products', data.id]);
    }
    onOpen(link) {
        this.fun.navigate(link);
    }
};
CategoryPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/category.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.page.scss */ "./src/app/home/category/category.page.scss")).default]
    })
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map