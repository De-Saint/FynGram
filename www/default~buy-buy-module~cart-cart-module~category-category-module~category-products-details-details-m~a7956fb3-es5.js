(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3"], {
    /***/
    "./src/app/home/service/shop.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/home/service/shop.service.ts ***!
      \**********************************************/

    /*! exports provided: ShopService */

    /***/
    function srcAppHomeServiceShopServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopService", function () {
        return ShopService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ShopService = /*#__PURE__*/function () {
        function ShopService(http, nativeHttp, authService, platform) {
          _classCallCheck(this, ShopService);

          this.http = http;
          this.nativeHttp = nativeHttp;
          this.authService = authService;
          this.platform = platform;
        }

        _createClass(ShopService, [{
          key: "GetCategories",
          value: function GetCategories() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetRootCategories'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "GetTopSellingProducts",
          value: function GetTopSellingProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetTopSellingProducts'; // if (this.platform.is('android')) {
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

            var data = JSON.stringify({
              type: type
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); //}
          }
        }, {
          key: "GetRecentlyAddedProducts",
          value: function GetRecentlyAddedProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetRecentlyAddedProducts'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "GetFeaturedProducts",
          value: function GetFeaturedProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetFeaturedProducts'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "GetBestSellersProducts",
          value: function GetBestSellersProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetBestSellersProducts'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "GetCategoryProducts",
          value: function GetCategoryProducts(catid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetShopProductsByCategoryID'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              catid: catid
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "GetRelatedProducts",
          value: function GetRelatedProducts(productid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetRelatedProducts'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              productid: productid
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "AddOption",
          value: function AddOption(option, productid, price, quantity, action) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'AddOption';
            var sid = this.authService.currentUserDataValue.sid; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              sid: sid,
              option: option,
              productid: productid,
              price: price,
              quantity: quantity,
              action: action
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "CartDiscountCode",
          value: function CartDiscountCode(code) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'CartDiscountCode';
            var sid = this.authService.currentUserDataValue.sid; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              sid: sid,
              code: code
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "GetCartDefaultAddress",
          value: function GetCartDefaultAddress(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetCartDefaultAddress'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              sid: sid
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "processOrder",
          value: function processOrder(sid, paytype, shiptypeid, addressid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'PlaceOrder'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              sid: sid,
              paytype: paytype,
              shiptypeid: shiptypeid,
              addressid: addressid
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "getParameter",
          value: function getParameter() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetPaystackKey'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "UpdateOption",
          value: function UpdateOption(option, productid, price, quantity, action) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'UpdateOptions';
            var sid = this.authService.currentUserDataValue.sid; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              sid: sid,
              option: option,
              productid: productid,
              price: price,
              quantity: quantity,
              action: action
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "DeleteOption",
          value: function DeleteOption(option, optionid, productid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'DeleteOptions'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              option: option,
              optionid: optionid,
              productid: productid
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "GetUserCart",
          value: function GetUserCart(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetShopCart'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              sid: sid
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }, {
          key: "placeOrder",
          value: function placeOrder(sid, paytype, shiptypeid, addressid, amount, refcode, tcode) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'ValidatePaystackPayment'; // if (this.platform.is("android")) {
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

            var data = JSON.stringify({
              type: type,
              sid: sid,
              paytype: paytype,
              shiptypeid: shiptypeid,
              addressid: addressid,
              amount: amount,
              refcode: refcode,
              tcode: tcode
            });
            return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              return res;
            })); // }
          }
        }]);

        return ShopService;
      }();

      ShopService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }];
      };

      ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], ShopService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~buy-buy-module~cart-cart-module~category-category-module~category-products-details-details-m~a7956fb3-es5.js.map