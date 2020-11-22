(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852"],{

/***/ "./src/app/home/service/shop.service.ts":
/*!**********************************************!*\
  !*** ./src/app/home/service/shop.service.ts ***!
  \**********************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let ShopService = class ShopService {
    constructor(http, authService, platform) {
        this.http = http;
        this.authService = authService;
        this.platform = platform;
    }
    GetCategories() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetRootCategories';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetTopSellingProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetTopSellingProducts';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetRecentlyAddedProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetRecentlyAddedProducts';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetFeaturedProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetFeaturedProducts';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetAppVersion() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetAppVersion';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetBestSellersProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetBestSellersProducts';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetCategoryProducts(catid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetShopProductsByCategoryID';
        if (this.platform.is('android')) {
            const data = {
                type, catid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, catid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetRelatedProducts(productid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetRelatedProducts';
        if (this.platform.is('android')) {
            const data = {
                type, productid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, productid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetProductDetails(productid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetProductDetails';
        if (this.platform.is('android')) {
            const data = {
                type, productid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, productid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    AddOption(option, productid, price, quantity, action) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'AddOption';
        const sid = this.authService.currentUserDataValue.sid;
        if (this.platform.is('android')) {
            const data = {
                type, sid, option, productid, price, quantity, action
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    CartDiscountCode(code) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'CartDiscountCode';
        const sid = this.authService.currentUserDataValue.sid;
        if (this.platform.is('android')) {
            const data = {
                type, sid, code
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid, code });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetCartDefaultAddress(sid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetCartDefaultAddress';
        if (this.platform.is('android')) {
            const data = {
                type, sid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    processOrder(sid, paytype, shiptypeid, addressid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'PlaceOrder';
        if (this.platform.is('android')) {
            const data = {
                type, sid, paytype, shiptypeid, addressid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    getParameter() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetPaystackKey';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    UpdateOption(option, productid, price, quantity, action) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'UpdateOptions';
        const sid = this.authService.currentUserDataValue.sid;
        if (this.platform.is('android')) {
            const data = {
                type, sid, option, productid, price, quantity, action
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    DeleteOption(option, optionid, productid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'DeleteOptions';
        if (this.platform.is('android')) {
            const data = {
                type, option, optionid, productid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, option, optionid, productid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetUserCart(sid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetShopCart';
        if (this.platform.is('android')) {
            const data = {
                type, sid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetShopSavedItems(sid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetShopSavedItems';
        if (this.platform.is('android')) {
            const data = {
                type, sid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    placeOrder(sid, paytype, shiptypeid, addressid, amount, refcode, tcode) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'ValidatePaystackPayment';
        if (this.platform.is('android')) {
            const data = {
                type, sid, paytype, shiptypeid, addressid, amount, refcode, tcode
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid, amount, refcode, tcode });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    fundWallet(sid, paytype, amount, refcode, tcode) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'ValidatePaystackPayment';
        if (this.platform.is('android')) {
            const data = {
                type, sid, paytype, amount, refcode, tcode
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid, paytype, amount, refcode, tcode });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetStockMovement(sid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'GetStockMovement';
        if (this.platform.is('android')) {
            const data = {
                type, sid
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, sid });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    SearchProducts(searchvalue) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
        const type = 'SearchProducts';
        if (this.platform.is('android')) {
            const data = {
                type, searchvalue
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type, searchvalue });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetProperties() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetProperties';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
    GetUnits() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetUnits';
        if (this.platform.is('android')) {
            const data = {
                type
            };
            return this.authService.nativeHttpRequest(url, data);
        }
        else {
            const data = JSON.stringify({ type });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                return res;
            }));
        }
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root'
    })
], ShopService);



/***/ })

}]);
//# sourceMappingURL=default~buy-buy-module~cart-cart-module~cashouts-new-new-module~categories-categories-module~categor~2f8db852-es2015.js.map