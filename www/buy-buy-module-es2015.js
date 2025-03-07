(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-buy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar  color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons>\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title class=\"white\">Fyngram</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onOpen('cart')\" >\n        <ion-icon name=\"cart\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar  color=\"mytheme\">\n    <ion-searchbar color=\"light\" (click)=\"onOpen('search')\"  placeholder=\"Search Fyngram\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Top Selling Products</ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let product of products\" class=\"container-inner\" (click)=\"open(product)\">\n        <img [src]=\"'data:image/png;base64,'+product.FirstImage\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{product.ProductName}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><small class=\"inline\"> {{ product.ProductPrice | currency:'₦' }}</small>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-slides [options]=\"slideOptsOne\">\n    <ion-slide>\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-img src=\"/assets/images/slider7.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-img src=\"/assets/images/slider12.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card  class=\"ion-no-padding ion-no-margin\">\n        <ion-img src=\"/assets/images/slider10.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n   </ion-slides>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Featured Products</ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let product of featuredProducts\" class=\"container-inner\" (click)=\"open(product)\">\n        <img [src]=\"'data:image/png;base64,'+product.FirstImage\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{product.ProductName}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><small class=\"inline\"> {{ product.ProductPrice | currency:'₦' }}</small>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-card class=\"ion-no-padding ion-no-margin\">\n    <img src=\"/assets/images/slider7.jpg\" />\n  </ion-card>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Recently Added Products </ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let product of recentProducts\" class=\"container-inner\" (click)=\"open(product)\">\n        <img [src]=\"'data:image/png;base64,'+product.FirstImage\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{product.ProductName}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><small class=\"inline\"> {{ product.ProductPrice | currency:'₦' }}</small>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-card class=\"ion-no-padding ion-no-margin\">\n    <img src=\"/assets/images/slider10.jpg\" />\n  </ion-card>\n  <ion-list-header>\n    <ion-label style=\"font-size: smaller;\" class=\"ion-no-margin ion-text-center \">Best Sellers' Products</ion-label>\n  </ion-list-header>\n  <ion-row>\n    <ion-row class=\"container-outer\">\n      <div *ngFor=\"let product of bestsellerProducts\" class=\"container-inner\" (click)=\"open(product)\">\n        <img [src]=\"'data:image/png;base64,'+product.FirstImage\" class=\"spon-img\">\n        <p class=\"ion-no-margin text-truncate\">{{product.ProductName}}</p>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-text ion-text-left><span class=\"price\"><small class=\"inline\"> {{ product.ProductPrice | currency:'₦' }}</small>\n              </span></ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-row>\n  <ion-slides [options]=\"slideOptsOne\">\n    <ion-slide>\n      <ion-card >\n        <ion-img src=\"/assets/images/slider7.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card >\n        <ion-img src=\"/assets/images/slider12.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n    <ion-slide> \n      <ion-card >\n        <ion-img src=\"/assets/images/slider10.jpg\"></ion-img>\n      </ion-card>\n    </ion-slide>\n   </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/buy/buy-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/buy/buy-routing.module.ts ***!
  \************************************************/
/*! exports provided: BuyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageRoutingModule", function() { return BuyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _buy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy.page */ "./src/app/home/buy/buy.page.ts");




const routes = [
    {
        path: '',
        component: _buy_page__WEBPACK_IMPORTED_MODULE_3__["BuyPage"]
    }
];
let BuyPageRoutingModule = class BuyPageRoutingModule {
};
BuyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyPageRoutingModule);



/***/ }),

/***/ "./src/app/home/buy/buy.module.ts":
/*!****************************************!*\
  !*** ./src/app/home/buy/buy.module.ts ***!
  \****************************************/
/*! exports provided: BuyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-routing.module */ "./src/app/home/buy/buy-routing.module.ts");
/* harmony import */ var _buy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buy.page */ "./src/app/home/buy/buy.page.ts");







let BuyPageModule = class BuyPageModule {
};
BuyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyPageRoutingModule"]
        ],
        declarations: [_buy_page__WEBPACK_IMPORTED_MODULE_6__["BuyPage"]]
    })
], BuyPageModule);



/***/ }),

/***/ "./src/app/home/buy/buy.page.scss":
/*!****************************************!*\
  !*** ./src/app/home/buy/buy.page.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked: none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\n.view {\n  color: var(--ion-color-mytheme);\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 1px;\n  background-color: #d2d2d2;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 110px;\n  max-width: 110px;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 120px;\n  max-height: 120px;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nion-toolbar .sc-ion-searchbar-ios-h {\n  padding-top: 1px !important;\n  padding-bottom: 1px !important;\n  height: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9idXkvYnV5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQUlGOztBQUhFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUZBO0VBQ0UsdUJBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVFGOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFTRjs7QUFQQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVUY7O0FBUkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFXRjs7QUFUQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBWUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2J1eS9idXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaG9yLXNjcm9sbCB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5tZW51IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubXktYnRuIHtcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcbiAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5idG4tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IG5vbmUgIWltcG9ydGFudDtcbiAgaW9uLXRleHQge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG59XG4jZGFnIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5zZWdtZW50dG9vbGJhclNlY3Rpb24ge1xuICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG4gIC5zZWdTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICB9XG59XG4udmlldyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXItaW5uZXIge1xuICBtaW4td2lkdGg6IDExMHB4O1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uc3Bvbi1pbWcge1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1hcmdpbjogM3B4O1xufVxuLnRleHQtdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmlvbi10b29sYmFyIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIHtcbiAgcGFkZGluZy10b3A6IDFweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/buy/buy.page.ts":
/*!**************************************!*\
  !*** ./src/app/home/buy/buy.page.ts ***!
  \**************************************/
/*! exports provided: BuyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPage", function() { return BuyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");









const { Storage, Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let BuyPage = class BuyPage {
    constructor(fun, router, appVersion, platform, alertCtrl, shopService, loadingCtrl, authService) {
        this.fun = fun;
        this.router = router;
        this.appVersion = appVersion;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.shopService = shopService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_VISITED = 'hasVisited';
        this.getVersionNumber();
    }
    onOpen(link) {
        this.fun.navigate(link);
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value } = yield Storage.get({ key: this.HAS_VISITED });
            if (!value) {
                this.getIP();
            }
            if (!this.products) {
                this.getTopSellingProducts();
                this.GetRecentlyAddedProducts();
                this.GetFeaturedProducts();
                this.GetBestSellersProducts();
            }
        });
    }
    getIP() {
        this.authService.getIPAddress().subscribe((res) => {
            this.authService.SaveGuest(res.ip, res.city + ' ' + res.country_name)
                .subscribe(res => {
                Storage.set({ key: this.HAS_VISITED, value: 'true' });
                this.fun.navigate('home', false);
                const event = new CustomEvent('user:guest');
                return window.dispatchEvent(event);
            });
        }, error => {
        });
    }
    open(product) {
        this.fun.setNavLink('buy');
        this.router.navigate(['/', 'home', 'tabs', 'buy', 'products', 'details', product.ProductID]);
    }
    getTopSellingProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetTopSellingProducts().subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.products = res.data;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    GetRecentlyAddedProducts() {
        this.shopService.GetRecentlyAddedProducts().subscribe(res => {
            if (res.code === 200) {
                this.recentProducts = res.data;
            }
            else {
                this.fun.presentToast(res.msg);
            }
        }, error => {
        });
    }
    GetFeaturedProducts() {
        this.shopService.GetFeaturedProducts().subscribe(res => {
            if (res.code === 200) {
                this.featuredProducts = res.data;
            }
        }, error => {
        });
    }
    GetBestSellersProducts() {
        this.shopService.GetBestSellersProducts().subscribe(res => {
            if (res.code === 200) {
                this.bestsellerProducts = res.data;
            }
        }, error => {
        });
    }
    getVersionNumber() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.platform.ready().then(() => {
                if (this.platform.is('android')) {
                    this.appVersion.getVersionNumber()
                        .then((version) => {
                        alert(version);
                        this.CheckAppVersion(version);
                    }).catch(() => {
                    });
                }
            });
        });
    }
    CheckAppVersion(appversion) {
        this.platform.ready().then(() => {
            this.shopService.GetAppVersion()
                .subscribe(result => {
                console.log(result);
                if (result.code === 200) {
                    const serverAppVersion = result.data;
                    if (this.platform.is('android')) {
                        if (String(appversion) !== String(serverAppVersion)) {
                            this.UpdateVersion();
                        }
                    }
                }
            }, error => {
            });
        });
    }
    UpdateVersion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Update Available!!',
                mode: 'ios',
                message: 'A new version of Fyngram App is available. Please update to the new version now!!!',
                buttons: [
                    {
                        text: 'Update Later',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Update Now',
                        handler: (ok) => {
                            console.log('Confirm Okay');
                            this.onUpdateNow();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    onUpdateNow() {
        this.openInAppStore('https://play.google.com/store/apps/details?id=com.fyngram.fynapp').then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
    openInAppStore(link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({
                url: link,
                toolbarColor: "#0f5656"
            });
        });
    }
};
BuyPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }
];
BuyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-buy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./buy.page.scss */ "./src/app/home/buy/buy.page.scss")).default]
    })
], BuyPage);



/***/ })

}]);
//# sourceMappingURL=buy-buy-module-es2015.js.map