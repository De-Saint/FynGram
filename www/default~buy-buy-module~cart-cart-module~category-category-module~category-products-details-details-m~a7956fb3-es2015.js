(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3"],{

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
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let ShopService = class ShopService {
    constructor(http, nativeHttp, authService, platform) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.authService = authService;
        this.platform = platform;
    }
    GetCategories() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetRootCategories';
        // if (this.platform.is("android")) {
        // const data = {
        //   type
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    GetTopSellingProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetTopSellingProducts';
        // if (this.platform.is('android')) {
        //   const data = {
        //     type
        //   };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        //}
    }
    GetRecentlyAddedProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetRecentlyAddedProducts';
        // if (this.platform.is("android")) {
        // const data = {
        //   type
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    GetFeaturedProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetFeaturedProducts';
        // if (this.platform.is("android")) {
        // const data = {
        //   type
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    GetBestSellersProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetBestSellersProducts';
        // if (this.platform.is("android")) {
        // const data = {
        //   type
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    GetCategoryProducts(catid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetShopProductsByCategoryID';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // catid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, catid });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    GetRelatedProducts(productid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetRelatedProducts';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // productid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, productid });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    AddOption(option, productid, price, quantity, action) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'AddOption';
        const sid = this.authService.currentUserDataValue.sid;
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // productid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    CartDiscountCode(code) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'CartDiscountCode';
        const sid = this.authService.currentUserDataValue.sid;
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // code
        //sid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, sid, code });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    GetCartDefaultAddress(sid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetCartDefaultAddress';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // code
        //sid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, sid });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    processOrder(sid, paytype, shiptypeid, addressid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'PlaceOrder';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // code
        //sid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    getParameter() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetPaystackKey';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // code
        //sid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    UpdateOption(option, productid, price, quantity, action) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'UpdateOptions';
        const sid = this.authService.currentUserDataValue.sid;
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // productid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    DeleteOption(option, optionid, productid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'DeleteOptions';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // optionid, productid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, option, optionid, productid });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    GetUserCart(sid) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'GetShopCart';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // sid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, sid });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
    placeOrder(sid, paytype, shiptypeid, addressid, amount, refcode, tcode) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
        const type = 'ValidatePaystackPayment';
        // if (this.platform.is("android")) {
        // const data = {
        //   type,
        // code
        //sid
        // };
        //   this.nativeHttp.setDataSerializer("json");
        //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
        //   return from(nativeCall).pipe(
        //     map(result => {
        // if(result.code === 200){
        //       return JSON.parse(result.data);
        //     })
        //   )
        // } else {
        const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid, amount, refcode, tcode });
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            return res;
        }));
        // }
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
    })
], ShopService);



/***/ })

}]);
//# sourceMappingURL=default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3-es2015.js.map