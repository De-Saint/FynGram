(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/address.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/address.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerprofileAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Address</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\">\n        <ion-icon name=\"add-circle\" slot=\"icon-only\" class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"location\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added an address yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Add Address</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-list lines=\"none\">\n      <ion-item *ngFor=\"let add of addressess; let i = index;\">\n        <ion-row class=\"full ion-align-items-center\">\n          <ion-col size=\"2\">\n            <ion-icon name=\"location\" size=\"large\" color=\"mytheme\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-row class=\"ion-align-items-center\">\n              <p class=\"ion-no-margin\"><strong><strong>{{add.addresstypename}} Address</strong></strong></p>\n              <h6 class=\"small mycolor ion-padding-start\" *ngIf=\"add.default_address === '1'\">DEFAULT</h6>\n            </ion-row>\n            <ion-row>\n              <p class=\"ion-no-margin\">{{add.phone}}</p>\n            </ion-row>\n            <ion-row>\n              <p class=\"ion-no-margin\">{{add.address_line}} {{add.close_to}},\n                {{add.streetname}}</p>\n            </ion-row>\n            <ion-row>\n              <p class=\"ion-no-margin\">{{add?.busname}}, {{add?.townname}}</p>\n            </ion-row>\n            <ion-row>\n              <p class=\"ion-no-margin\">{{add?.lganame}}</p>\n            </ion-row>\n            <ion-row>\n              <p class=\"ion-no-margin\">{{add?.statename}}</p>\n            </ion-row>\n            <ion-row>\n              <p class=\"ion-no-margin\">{{add.postal_code}}</p>\n            </ion-row>\n          </ion-col>\n          <ion-row *ngIf=\"add.default_address !== '1'\">\n            <ion-col>\n              <ion-icon name=\"thumbs-up\" (click)=\"onSetDefault(add)\" class=\"mycolor item-icons\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <ion-icon name=\"trash\" (click)=\"onDelete(add)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/address.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/address.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersprofileAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Address</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"location\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added an address yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Add Address</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n<div  *ngIf=\"show\">\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let add of addressess; let i = index;\">\n      <ion-row class=\"full ion-align-items-center\">\n        <ion-col size=\"2\" >\n          <ion-icon name=\"location\" size=\"large\"  color=\"mytheme\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <p class=\"ion-no-margin\" ><strong><strong>{{add.addresstypename}} Address</strong></strong></p>\n            <h6 class=\"small mycolor ion-padding-start\" *ngIf=\"add.default_address === '1'\"  >DEFAULT</h6>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\" >{{add.phone}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\" >{{add.address_line}} {{add.close_to}},\n              {{add.streetname}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\" >{{add?.busname}}, {{add?.townname}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{add?.lganame}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{add?.statename}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\" >{{add.postal_code}}</p>\n          </ion-row>\n        </ion-col>\n        <ion-row >\n          <ion-col>\n            <ion-icon name=\"trash\" (click)=\"onDelete(add)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</div>\n\n   \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customerprofile/address/address-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/customerprofile/address/address-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AddressPageRoutingModule */

    /***/
    function srcAppCustomerprofileAddressAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function () {
        return AddressPageRoutingModule;
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


      var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./address.page */
      "./src/app/customerprofile/address/address.page.ts");

      var routes = [{
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
      }];

      var AddressPageRoutingModule = function AddressPageRoutingModule() {
        _classCallCheck(this, AddressPageRoutingModule);
      };

      AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddressPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/address/address.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/address/address.module.ts ***!
      \***********************************************************/

    /*! exports provided: AddressPageModule */

    /***/
    function srcAppCustomerprofileAddressAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressPageModule", function () {
        return AddressPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./address-routing.module */
      "./src/app/customerprofile/address/address-routing.module.ts");
      /* harmony import */


      var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./address.page */
      "./src/app/customerprofile/address/address.page.ts");

      var AddressPageModule = function AddressPageModule() {
        _classCallCheck(this, AddressPageModule);
      };

      AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
      })], AddressPageModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/address/address.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/address/address.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerprofileAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJvZmlsZS9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mdWxse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbn1cbi5pdGVtLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/customerprofile/address/address.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/customerprofile/address/address.page.ts ***!
      \*********************************************************/

    /*! exports provided: AddressPage */

    /***/
    function srcAppCustomerprofileAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
        return AddressPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/address.service */
      "./src/app/services/address.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddressPage = /*#__PURE__*/function () {
        function AddressPage(fun, loadingCtrl, authService, router, addressService) {
          _classCallCheck(this, AddressPage);

          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.authService = authService;
          this.router = router;
          this.addressService = addressService;
          this.show = true;
        }

        _createClass(AddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserAddress(this.sid);
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['/', 'customerprofile', 'tabs', 'address', 'new']);
          }
        }, {
          key: "GetUserAddress",
          value: function GetUserAddress(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

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
                      this.addressService.GetUserAddress(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.addressess = res.data;
                          _this.show = true;
                        } else {
                          _this.show = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onDelete",
          value: function onDelete(address) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context3.sent;
                      this.fun.removeConform('address').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this3 = this;

                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context2.next = 4;
                                    break;
                                  }

                                  _context2.next = 3;
                                  return loading.present();

                                case 3:
                                  this.addressService.DeleteUserAddresses(address.id).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this3.fun.presentToast(res.msg);

                                      _this3.show = true;
                                      _this3.sid = _this3.authService.currentUserDataValue.sid;

                                      _this3.GetUserAddress(_this3.sid);
                                    } else {
                                      _this3.fun.presentToast(res.msg);

                                      _this3.show = false;
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onSetDefault",
          value: function onSetDefault(address) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context5.sent;
                      this.fun.setConfirm('address').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this5 = this;

                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context4.next = 5;
                                    break;
                                  }

                                  _context4.next = 3;
                                  return loading.present();

                                case 3:
                                  this.sid = this.authService.currentUserDataValue.sid;
                                  this.addressService.MakeUserAddressDefault(this.sid, address.id).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this5.fun.presentToast(res.msg);

                                      _this5.show = true;
                                      _this5.sid = _this5.authService.currentUserDataValue.sid;

                                      _this5.GetUserAddress(_this5.sid);
                                    } else {
                                      _this5.fun.presentToast(res.msg);

                                      _this5.show = false;
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 5:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return AddressPage;
      }();

      AddressPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_address_service__WEBPACK_IMPORTED_MODULE_2__["AddressService"]
        }];
      };

      AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./address.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/address.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./address.page.scss */
        "./src/app/customerprofile/address/address.page.scss"))["default"]]
      })], AddressPage);
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/address-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/sellersprofile/address/address-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: AddressPageRoutingModule */

    /***/
    function srcAppSellersprofileAddressAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function () {
        return AddressPageRoutingModule;
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


      var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./address.page */
      "./src/app/sellersprofile/address/address.page.ts");

      var routes = [{
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
      }];

      var AddressPageRoutingModule = function AddressPageRoutingModule() {
        _classCallCheck(this, AddressPageRoutingModule);
      };

      AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddressPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/address.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/sellersprofile/address/address.module.ts ***!
      \**********************************************************/

    /*! exports provided: AddressPageModule */

    /***/
    function srcAppSellersprofileAddressAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressPageModule", function () {
        return AddressPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./address-routing.module */
      "./src/app/sellersprofile/address/address-routing.module.ts");
      /* harmony import */


      var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./address.page */
      "./src/app/sellersprofile/address/address.page.ts");

      var AddressPageModule = function AddressPageModule() {
        _classCallCheck(this, AddressPageModule);
      };

      AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
      })], AddressPageModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/address.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/sellersprofile/address/address.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersprofileAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3Byb2ZpbGUvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxTQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvc2VsbGVyc3Byb2ZpbGUvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZnVsbHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zbWFsbCB7XG4gICAgbWFyZ2luOiAwO1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDA7XG59XG4uaXRlbS1pY29uc3tcbiAgICBmb250LXNpemU6IDI0cHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/address.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/sellersprofile/address/address.page.ts ***!
      \********************************************************/

    /*! exports provided: AddressPage */

    /***/
    function srcAppSellersprofileAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
        return AddressPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/address.service */
      "./src/app/services/address.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddressPage = /*#__PURE__*/function () {
        function AddressPage(fun, loadingCtrl, authService, router, addressService) {
          _classCallCheck(this, AddressPage);

          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.authService = authService;
          this.router = router;
          this.addressService = addressService;
          this.show = true;
        }

        _createClass(AddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserAddress(this.sid);
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['/', 'sellersprofile', 'tabs', 'address', 'new']);
          }
        }, {
          key: "GetUserAddress",
          value: function GetUserAddress(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context6.sent;
                      _context6.next = 5;
                      return loading.present();

                    case 5:
                      this.addressService.GetUserAddress(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this6.addressess = res.data;
                          _this6.show = true;
                        } else {
                          _this6.show = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onDelete",
          value: function onDelete(address) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this7 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context8.sent;
                      this.fun.removeConform('address').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var _this8 = this;

                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context7.next = 4;
                                    break;
                                  }

                                  _context7.next = 3;
                                  return loading.present();

                                case 3:
                                  this.addressService.DeleteUserAddresses(address.id).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this8.fun.presentToast(res.msg);

                                      _this8.show = true;
                                      _this8.sid = _this8.authService.currentUserDataValue.sid;

                                      _this8.GetUserAddress(_this8.sid);
                                    } else {
                                      _this8.fun.presentToast(res.msg);

                                      _this8.show = false;
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 4:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return AddressPage;
      }();

      AddressPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_address_service__WEBPACK_IMPORTED_MODULE_2__["AddressService"]
        }];
      };

      AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./address.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/address.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./address.page.scss */
        "./src/app/sellersprofile/address/address.page.scss"))["default"]]
      })], AddressPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=address-address-module-es5.js.map