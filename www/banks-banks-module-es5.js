(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banks-banks-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/banks.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/banks.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerwalletBanksBanksPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Bank Details</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!show\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"business\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added a bank detail yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Add Bank Details</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n<div  *ngIf=\"show\">\n  <ion-list lines=\"none\">\n     <ion-item >\n      <ion-row class=\"full ion-align-items-center\">\n        <ion-col size=\"2\" >\n          <ion-icon name=\"business\" size=\"large\"  color=\"mytheme\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <p class=\"ion-no-margin\" ><strong><strong>{{banks?.bankName}}</strong></strong></p>\n            <h6 class=\"small mycolor ion-padding-start\">DEFAULT</h6>\n          </ion-row>\n           <ion-row>\n            <p class=\"ion-no-margin\" >{{banks?.account_type}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\" >{{banks?.account_number}}</p>\n          </ion-row>\n        </ion-col>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"trash\" (click)=\"onDelete(banks)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-row>\n    </ion-item> \n  </ion-list>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/banks.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/banks.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellerswalletBanksBanksPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Bank Details</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!show\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"business\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added a bank detail yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Add Bank Details</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n<div  *ngIf=\"show\">\n  <ion-list lines=\"none\">\n     <ion-item >\n      <ion-row class=\"full ion-align-items-center\">\n        <ion-col size=\"2\" >\n          <ion-icon name=\"business\" size=\"large\"  color=\"mytheme\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <p class=\"ion-no-margin\" ><strong><strong>{{banks?.bankName}}</strong></strong></p>\n            <h6 class=\"small mycolor ion-padding-start\">DEFAULT</h6>\n          </ion-row>\n           <ion-row>\n            <p class=\"ion-no-margin\" >{{banks?.account_type}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\" >{{banks?.account_number}}</p>\n          </ion-row>\n        </ion-col>\n        <ion-row>\n          <ion-col>\n            <ion-icon name=\"trash\" (click)=\"onDelete(banks)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-row>\n    </ion-item> \n  </ion-list>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customerwallet/banks/banks-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/customerwallet/banks/banks-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: BanksPageRoutingModule */

    /***/
    function srcAppCustomerwalletBanksBanksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BanksPageRoutingModule", function () {
        return BanksPageRoutingModule;
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


      var _banks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./banks.page */
      "./src/app/customerwallet/banks/banks.page.ts");

      var routes = [{
        path: '',
        component: _banks_page__WEBPACK_IMPORTED_MODULE_3__["BanksPage"]
      }];

      var BanksPageRoutingModule = function BanksPageRoutingModule() {
        _classCallCheck(this, BanksPageRoutingModule);
      };

      BanksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BanksPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/banks/banks.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/customerwallet/banks/banks.module.ts ***!
      \******************************************************/

    /*! exports provided: BanksPageModule */

    /***/
    function srcAppCustomerwalletBanksBanksModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BanksPageModule", function () {
        return BanksPageModule;
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


      var _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./banks-routing.module */
      "./src/app/customerwallet/banks/banks-routing.module.ts");
      /* harmony import */


      var _banks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./banks.page */
      "./src/app/customerwallet/banks/banks.page.ts");

      var BanksPageModule = function BanksPageModule() {
        _classCallCheck(this, BanksPageModule);
      };

      BanksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__["BanksPageRoutingModule"]],
        declarations: [_banks_page__WEBPACK_IMPORTED_MODULE_6__["BanksPage"]]
      })], BanksPageModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/banks/banks.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/customerwallet/banks/banks.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerwalletBanksBanksPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvYmFua3MvYmFua3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcndhbGxldC9iYW5rcy9iYW5rcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnN7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/customerwallet/banks/banks.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/customerwallet/banks/banks.page.ts ***!
      \****************************************************/

    /*! exports provided: BanksPage */

    /***/
    function srcAppCustomerwalletBanksBanksPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BanksPage", function () {
        return BanksPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BanksPage = /*#__PURE__*/function () {
        function BanksPage(loadingCtrl, fun, authService, router) {
          _classCallCheck(this, BanksPage);

          this.loadingCtrl = loadingCtrl;
          this.fun = fun;
          this.authService = authService;
          this.router = router;
          this.show = true;
        }

        _createClass(BanksPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (!this.banks) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetBankDetails(this.sid);
            }
          }
        }, {
          key: "GetBankDetails",
          value: function GetBankDetails(sid) {
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
                      this.authService.GetBankDetails(String(sid)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.show = true;
                          _this.banks = res.data;
                        } else {
                          _this.show = false;
                        }
                      }, function (error) {
                        _this.show = false;
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
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['/', 'customerwallet', 'tabs', 'banks', 'new']);
          }
        }, {
          key: "onDelete",
          value: function onDelete(bank) {
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
                      this.fun.removeConform('bank details').then(function (res) {
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
                                  this.authService.DeleteBankDetails(bank.id).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this3.fun.presentToast(res.msg);

                                      _this3.show = true;
                                      _this3.sid = _this3.authService.currentUserDataValue.sid;

                                      _this3.GetBankDetails(_this3.sid);
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
        }]);

        return BanksPage;
      }();

      BanksPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BanksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-banks',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./banks.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/banks/banks.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./banks.page.scss */
        "./src/app/customerwallet/banks/banks.page.scss"))["default"]]
      })], BanksPage);
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/banks-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/sellerswallet/banks/banks-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: BanksPageRoutingModule */

    /***/
    function srcAppSellerswalletBanksBanksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BanksPageRoutingModule", function () {
        return BanksPageRoutingModule;
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


      var _banks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./banks.page */
      "./src/app/sellerswallet/banks/banks.page.ts");

      var routes = [{
        path: '',
        component: _banks_page__WEBPACK_IMPORTED_MODULE_3__["BanksPage"]
      }, {
        path: 'new',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | new-new-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./new/new.module */
          "./src/app/sellerswallet/banks/new/new.module.ts")).then(function (m) {
            return m.NewPageModule;
          });
        }
      }];

      var BanksPageRoutingModule = function BanksPageRoutingModule() {
        _classCallCheck(this, BanksPageRoutingModule);
      };

      BanksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BanksPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/banks.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/sellerswallet/banks/banks.module.ts ***!
      \*****************************************************/

    /*! exports provided: BanksPageModule */

    /***/
    function srcAppSellerswalletBanksBanksModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BanksPageModule", function () {
        return BanksPageModule;
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


      var _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./banks-routing.module */
      "./src/app/sellerswallet/banks/banks-routing.module.ts");
      /* harmony import */


      var _banks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./banks.page */
      "./src/app/sellerswallet/banks/banks.page.ts");

      var BanksPageModule = function BanksPageModule() {
        _classCallCheck(this, BanksPageModule);
      };

      BanksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _banks_routing_module__WEBPACK_IMPORTED_MODULE_5__["BanksPageRoutingModule"]],
        declarations: [_banks_page__WEBPACK_IMPORTED_MODULE_6__["BanksPage"]]
      })], BanksPageModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/banks.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/sellerswallet/banks/banks.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellerswalletBanksBanksPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3dhbGxldC9iYW5rcy9iYW5rcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvYmFua3MvYmFua3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mdWxse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbn1cbi5pdGVtLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/banks.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/sellerswallet/banks/banks.page.ts ***!
      \***************************************************/

    /*! exports provided: BanksPage */

    /***/
    function srcAppSellerswalletBanksBanksPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BanksPage", function () {
        return BanksPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BanksPage = /*#__PURE__*/function () {
        function BanksPage(loadingCtrl, fun, authService, router) {
          _classCallCheck(this, BanksPage);

          this.loadingCtrl = loadingCtrl;
          this.fun = fun;
          this.authService = authService;
          this.router = router;
          this.show = true;
        }

        _createClass(BanksPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (!this.banks) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetBankDetails(this.sid);
            }
          }
        }, {
          key: "GetBankDetails",
          value: function GetBankDetails(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.GetBankDetails(String(sid)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this4.show = true;
                          _this4.banks = res.data;
                        } else {
                          _this4.show = false;
                        }
                      }, function (error) {
                        _this4.show = false;
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['/', 'sellerswallet', 'tabs', 'banks', 'new']);
          }
        }, {
          key: "onDelete",
          value: function onDelete(bank) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

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
                      this.fun.removeConform('bank details').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var _this6 = this;

                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context5.next = 4;
                                    break;
                                  }

                                  _context5.next = 3;
                                  return loading.present();

                                case 3:
                                  this.authService.DeleteBankDetails(bank.id).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this6.fun.presentToast(res.msg);

                                      _this6.show = true;
                                      _this6.sid = _this6.authService.currentUserDataValue.sid;

                                      _this6.GetBankDetails(_this6.sid);
                                    } else {
                                      _this6.fun.presentToast(res.msg);

                                      _this6.show = false;
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 4:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return BanksPage;
      }();

      BanksPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      BanksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-banks',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./banks.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/banks.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./banks.page.scss */
        "./src/app/sellerswallet/banks/banks.page.scss"))["default"]]
      })], BanksPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=banks-banks-module-es5.js.map