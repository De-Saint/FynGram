(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">CheckOut</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header color=\"light\">\n      <ion-label class=\"ion-no-margin ion-margin-bottom ion-margin-top ion-no-padding\">Select Delivery Method</ion-label>\n    </ion-list-header>\n    <ion-radio-group (ionChange)=\"onSelectShipType($event)\">\n      <ion-item>\n        <ion-label>\n          <ion-row class=\"full ion-align-items-center\">\n            <ion-col size=\"10\">\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"ion-no-margin\"><strong>Door Step Delivery</strong></p>\n              </ion-row>\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"small ion-no-margin\">Deliver to my door step</p>\n                <h6 class=\"small mycolor ion-padding-start ion-no-margin\">DEFAULT</h6>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n        <ion-radio slot=\"start\" value=\"1\" checked></ion-radio>\n      </ion-item>\n      <ion-item disabled=\"true\">\n        <ion-label>\n          <ion-row class=\"full ion-align-items-center\">\n            <ion-col size=\"10\">\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"ion-no-margin\"><strong>PickUp Center</strong></p>\n              </ion-row>\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"small ion-no-margin\">Select a pickup Center </p>\n                <h6 class=\"small mycolor ion-padding-start ion-no-margin\">PRIMARY</h6>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n        <ion-radio slot=\"start\" value=\"2\" checked></ion-radio>\n      </ion-item>\n\n    </ion-radio-group>\n  </ion-list>\n  <ion-list>\n    <ion-list-header color=\"light\" class=\"ion-justify-content-center\">\n      <ion-label class=\"ion-no-margin ion-margin-bottom ion-margin-top ion-no-padding\">Delivery Address</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <ion-row class=\"ion-align-items-center\">\n          <p class=\"ion-no-margin\"><strong>{{useraddress?.addresstypename}} Address</strong></p>\n          <h6 class=\"small mycolor ion-padding-start\" *ngIf=\"useraddress?.default_address === '1'\">Default</h6>\n        </ion-row>\n        <ion-row>\n          <p class=\"ion-no-margin ion-wrap\">{{useraddress?.address_line}} {{useraddress?.close_to}},\n            {{useraddress?.streetname}}</p>\n        </ion-row>\n        <ion-row>\n          <p class=\"ion-no-margin\">{{useraddress?.busname}}</p>\n        </ion-row>\n        <ion-row>\n          <p class=\"ion-no-margin\">{{useraddress?.townname}}</p>\n        </ion-row>\n        <ion-row>\n          <p class=\"ion-no-margin\">{{useraddress?.lganame}}</p>\n        </ion-row>\n        <ion-row>\n          <p class=\"ion-no-margin\">{{useraddress?.statename}}</p>\n        </ion-row>\n        <ion-row>\n          <p class=\"ion-no-margin\">{{useraddress?.phone}}</p>\n        </ion-row>\n        <ion-row>\n          <p class=\"ion-no-margin\">{{useraddress?.postal_code}}</p>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n    <ion-row class=\"ion-justify-content-center ion-padding-top ion-padding-bottom\">\n      <ion-text color=\"mytheme\" (click)=\"addAddress()\">\n        Use Another Address\n      </ion-text>\n    </ion-row>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-list-header color=\"light\" class=\"ion-justify-content-center\">\n      <ion-label class=\"ion-no-margin ion-margin-bottom ion-margin-top ion-no-padding\">Select Payment Method</ion-label>\n    </ion-list-header>\n    <ion-radio-group (ionChange)=\"onSelectPayMeth($event)\">\n      <ion-item>\n        <ion-label>\n          <ion-row class=\"full ion-align-items-center\">\n            <ion-col size=\"10\">\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"ion-no-margin\"><strong>Pay via FynPay?</strong></p>\n              </ion-row>\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"small ion-no-margin\">Pay from your FynPay Account </p>\n                <h6 class=\"small mycolor ion-padding-start ion-no-margin\"></h6>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n        <ion-radio slot=\"start\" value=\"fynpay\" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <ion-row class=\"full ion-align-items-center\">\n            <ion-col size=\"10\">\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"ion-no-margin\"><strong>Pay via PayStack?</strong></p>\n              </ion-row>\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"small ion-no-margin\">Pay with your Card Details </p>\n                <h6 class=\"small mycolor ion-padding-start ion-no-margin\"></h6>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n\n        <ion-radio slot=\"start\" value=\"paystack\" checked></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-list>\n    <div class=\"add-payment-div\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-icon name=\"lock-closed-sharp\" class=\"icon ion-margin-top\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <h5 class=\"ion-no-margin\" class=\"label\">Secure Payment</h5>\n            <h6 class=\"small\">Trusted by over 500 million shoppers</h6>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"mytheme\" (click)=\"onPlaceOrder()\" *ngIf=\"selectedPaymentMethod === 'fynpay' && shiptypeId !== undefined\">\n    <ion-title color=\"light\">Place Order</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf=\"selectedPaymentMethod === 'paystack' && shiptypeId !== undefined\" color=\"mytheme\"\n    angular4-paystack [key]=\"public_key\" (paymentInit)=\"paymentInit()\" [email]=\"userEmail\" [amount]=\"pay_amount * 100\"\n    [ref]=\"random_id\" [channels]=\"channels\" (close)=\"paymentCancel()\" (callback)=\"paymentDone($event)\"\n    (click)=\"onPay()\" [metadata]=\"{ \n    custom_fields: \n    [ {\n      display_name: 'Customer Name', \n      variable_name: 'Customer Name', \n      value: userName } ,\n    {\n      display_name: 'Payment Type', \n      variable_name: 'Payment Type', \n      value: 'Order Checkout Payment' \n    }] \n  }\">\n    <ion-title color=\"light\">Pay & Place Order</ion-title>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/checkout/checkout-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/checkout/checkout-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CheckoutPageRoutingModule */

    /***/
    function srcAppCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
        return CheckoutPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/checkout/checkout.page.ts");

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
      }];

      var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/checkout/checkout.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.module.ts ***!
      \*********************************************/

    /*! exports provided: CheckoutPageModule */

    /***/
    function srcAppCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
        return CheckoutPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var angular4_paystack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular4-paystack */
      "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout-routing.module */
      "./src/app/checkout/checkout-routing.module.ts");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/checkout/checkout.page.ts");

      var CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular4_paystack__WEBPACK_IMPORTED_MODULE_1__["Angular4PaystackModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_6__["CheckoutPageRoutingModule"]],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_7__["CheckoutPage"]]
      })], CheckoutPageModule);
      /***/
    },

    /***/
    "./src/app/checkout/checkout.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.small {\n  font-size: 9px;\n  color: #787878;\n}\n\n.icon {\n  font-size: 21px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n\n.add-payment-div {\n  border: 1px solid #ddd;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBS0o7O0FBSEE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuLmFkZC1wYXltZW50LWRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/checkout/checkout.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/checkout/checkout.page.ts ***!
      \*******************************************/

    /*! exports provided: CheckoutPage */

    /***/
    function srcAppCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
        return CheckoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../home/service/shop.service */
      "./src/app/home/service/shop.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      "./node_modules/sweetalert2/dist/sweetalert2.all.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

      var CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(fun, loadingCtrl, route, shopService, authService) {
          _classCallCheck(this, CheckoutPage);

          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.route = route;
          this.shopService = shopService;
          this.authService = authService;
          this.channels = ['card']; //Paystack Payment Methods

          this.random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
        }

        _createClass(CheckoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getUserAddress();
            this.getParameter();
            this.userName = this.authService.currentUserDataValue.name;
            this.userEmail = this.authService.currentUserDataValue.email;
            this.route.queryParams.subscribe(function (params) {
              _this.resp = params;
            });
          }
        }, {
          key: "addAddress",
          value: function addAddress() {}
        }, {
          key: "done",
          value: function done(msg) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Order', msg, 'success');
            this.fun.navigate('home', false);
          }
        }, {
          key: "getUserAddress",
          value: function getUserAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.shopService.GetCartDefaultAddress(this.sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.useraddress = res.data;
                        } else {
                          _this2.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSelectPayMeth",
          value: function onSelectPayMeth(event) {
            this.selectedPaymentMethod = event.detail.value;
            this.pay_amount = this.fun.CalculatePercentage(this.resp.totalamount);
          }
        }, {
          key: "onSelectShipType",
          value: function onSelectShipType(event) {
            this.shiptypeId = event.detail.value;
          }
        }, {
          key: "onPlaceOrder",
          value: function onPlaceOrder() {
            if (this.shiptypeId !== undefined) {
              if (this.selectedPaymentMethod !== undefined) {
                if (this.selectedPaymentMethod === 'fynpay') {
                  this.processOrder('FynPay', this.shiptypeId, this.useraddress.id);
                }
              } else {
                this.errorSwt('Please, select a Payment Method');
              }
            } else {
              this.errorSwt('Please, select a Shipping Method');
            }
          }
        }, {
          key: "errorSwt",
          value: function errorSwt(msg) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              title: 'CheckOut!',
              text: msg,
              timer: 2000,
              timerProgressBar: true,
              icon: 'error'
            });
          }
        }, {
          key: "processOrder",
          value: function processOrder(paytype, shiptypeId, addressid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.shopService.processOrder(String(this.sid), paytype, String(shiptypeId), String(addressid)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this3.done(res.msg);
                        } else {
                          _this3.errorSwt(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getParameter",
          value: function getParameter() {
            var _this4 = this;

            this.shopService.getParameter().subscribe(function (result) {
              _this4.public_key = result.data;
            });
          }
        }, {
          key: "paymentInit",
          value: function paymentInit() {}
        }, {
          key: "onPay",
          value: function onPay() {
            this.fun.presentToast('Please Wait ...');
          }
        }, {
          key: "paymentCancel",
          value: function paymentCancel() {
            this.errorSwt('You cancelled the payment!');
          }
        }, {
          key: "paymentDone",
          value: function paymentDone(ref) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(ref.status === 'success')) {
                        _context3.next = 10;
                        break;
                      }

                      _context3.next = 3;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 3:
                      loading = _context3.sent;
                      _context3.next = 6;
                      return loading.present();

                    case 6:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.shopService.placeOrder(String(this.sid), 'CheckOut Payment', String(this.shiptypeId), String(this.useraddress.id), String(this.resp.totalamount), String(ref.reference), String(ref.transaction)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this5.done(res.msg);
                        } else {
                          _this5.errorSwt(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      }); //  ( 

                      _context3.next = 11;
                      break;

                    case 10:
                      this.errorSwt('Please, the payment was not successful');

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CheckoutPage;
      }();

      CheckoutPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      };

      CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkout.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkout.page.scss */
        "./src/app/checkout/checkout.page.scss"))["default"]]
      })], CheckoutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=checkout-checkout-module-es5.js.map