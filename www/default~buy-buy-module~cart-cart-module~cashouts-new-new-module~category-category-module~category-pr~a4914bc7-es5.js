(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~buy-buy-module~cart-cart-module~cashouts-new-new-module~category-category-module~category-pr~a4914bc7"], {
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ShopService = /*#__PURE__*/function () {
        function ShopService(http, authService, platform) {
          _classCallCheck(this, ShopService);

          this.http = http;
          this.authService = authService;
          this.platform = platform;
        }

        _createClass(ShopService, [{
          key: "GetCategories",
          value: function GetCategories() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetRootCategories';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetTopSellingProducts",
          value: function GetTopSellingProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetTopSellingProducts';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data2 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetRecentlyAddedProducts",
          value: function GetRecentlyAddedProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetRecentlyAddedProducts';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data3 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetFeaturedProducts",
          value: function GetFeaturedProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetFeaturedProducts';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data4 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetBestSellersProducts",
          value: function GetBestSellersProducts() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetBestSellersProducts';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data5 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetCategoryProducts",
          value: function GetCategoryProducts(catid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetShopProductsByCategoryID';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                catid: catid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data6 = JSON.stringify({
                type: type,
                catid: catid
              });

              return this.http.post(url, _data6).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetRelatedProducts",
          value: function GetRelatedProducts(productid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetRelatedProducts';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                productid: productid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data7 = JSON.stringify({
                type: type,
                productid: productid
              });

              return this.http.post(url, _data7).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetProductDetails",
          value: function GetProductDetails(productid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetProductDetails';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                productid: productid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data8 = JSON.stringify({
                type: type,
                productid: productid
              });

              return this.http.post(url, _data8).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "AddOption",
          value: function AddOption(option, productid, price, quantity, action) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'AddOption';
            var sid = this.authService.currentUserDataValue.sid;

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                option: option,
                productid: productid,
                price: price,
                quantity: quantity,
                action: action
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data9 = JSON.stringify({
                type: type,
                sid: sid,
                option: option,
                productid: productid,
                price: price,
                quantity: quantity,
                action: action
              });

              return this.http.post(url, _data9).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "CartDiscountCode",
          value: function CartDiscountCode(code) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'CartDiscountCode';
            var sid = this.authService.currentUserDataValue.sid;

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                code: code
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data10 = JSON.stringify({
                type: type,
                sid: sid,
                code: code
              });

              return this.http.post(url, _data10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetCartDefaultAddress",
          value: function GetCartDefaultAddress(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetCartDefaultAddress';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data11 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data11).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "processOrder",
          value: function processOrder(sid, paytype, shiptypeid, addressid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'PlaceOrder';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                paytype: paytype,
                shiptypeid: shiptypeid,
                addressid: addressid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data12 = JSON.stringify({
                type: type,
                sid: sid,
                paytype: paytype,
                shiptypeid: shiptypeid,
                addressid: addressid
              });

              return this.http.post(url, _data12).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "getParameter",
          value: function getParameter() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetPaystackKey';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data13 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data13).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "UpdateOption",
          value: function UpdateOption(option, productid, price, quantity, action) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'UpdateOptions';
            var sid = this.authService.currentUserDataValue.sid;

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                option: option,
                productid: productid,
                price: price,
                quantity: quantity,
                action: action
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data14 = JSON.stringify({
                type: type,
                sid: sid,
                option: option,
                productid: productid,
                price: price,
                quantity: quantity,
                action: action
              });

              return this.http.post(url, _data14).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "DeleteOption",
          value: function DeleteOption(option, optionid, productid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'DeleteOptions';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                option: option,
                optionid: optionid,
                productid: productid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data15 = JSON.stringify({
                type: type,
                option: option,
                optionid: optionid,
                productid: productid
              });

              return this.http.post(url, _data15).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetUserCart",
          value: function GetUserCart(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetShopCart';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data16 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data16).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetShopSavedItems",
          value: function GetShopSavedItems(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetShopSavedItems';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data17 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data17).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "placeOrder",
          value: function placeOrder(sid, paytype, shiptypeid, addressid, amount, refcode, tcode) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'ValidatePaystackPayment';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                paytype: paytype,
                shiptypeid: shiptypeid,
                addressid: addressid,
                amount: amount,
                refcode: refcode,
                tcode: tcode
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data18 = JSON.stringify({
                type: type,
                sid: sid,
                paytype: paytype,
                shiptypeid: shiptypeid,
                addressid: addressid,
                amount: amount,
                refcode: refcode,
                tcode: tcode
              });

              return this.http.post(url, _data18).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "fundWallet",
          value: function fundWallet(sid, paytype, amount, refcode, tcode) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'ValidatePaystackPayment';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                paytype: paytype,
                amount: amount,
                refcode: refcode,
                tcode: tcode
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data19 = JSON.stringify({
                type: type,
                sid: sid,
                paytype: paytype,
                amount: amount,
                refcode: refcode,
                tcode: tcode
              });

              return this.http.post(url, _data19).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetStockMovement",
          value: function GetStockMovement(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MShopServlet';
            var type = 'GetStockMovement';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data20 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data20).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }]);

        return ShopService;
      }();

      ShopService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }];
      };

      ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root'
      })], ShopService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~buy-buy-module~cart-cart-module~cashouts-new-new-module~category-category-module~category-pr~a4914bc7-es5.js.map