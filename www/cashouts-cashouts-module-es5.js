(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashouts-cashouts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminwalletCashoutsCashoutsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">CashOut Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"card\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>No one has made any request yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\">\n          <!-- <span class=\"white\">Continue</span> -->\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-list lines=\"none\">\n      <ion-item *ngFor=\"let cash of cashouts\">\n        <ion-grid>\n          <ion-row class=\"full ion-align-items-center card\">\n            <ion-col>\n              <ion-row class=\"ion-align-items-center\">\n                <p class=\"ion-no-margin\"><strong><strong>{{cash.cashUserName}}</strong></strong></p>\n                <h6 class=\"small mycolor ion-padding-start\">{{cash.status}}</h6>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.amount | currency:'₦'}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.bankName}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.account_number}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\">{{cash.account_type}}</p>\n              </ion-row>\n              <ion-row>\n                <p class=\"ion-no-margin\"><small>{{cash.request_date}} {{cash.request_time}}</small></p>\n              </ion-row>\n            </ion-col>\n            <ion-row>\n              <ion-col *ngIf=\"cash.status === 'Pending'\">\n                <ion-icon name=\"checkmark-circle\" (click)=\"onProcess(cash, 'Approve', 'Approved')\" color=\"success\"\n                  class=\"item-icons\">\n                </ion-icon>\n              </ion-col>\n              <ion-col *ngIf=\"cash.status === 'Pending'\">\n                <ion-icon name=\"close-circle\" (click)=\"onProcess(cash, 'Reject', 'Rejected')\" color=\"danger\"\n                  class=\"item-icons\"></ion-icon>\n              </ion-col>\n              <ion-col *ngIf=\"cash.status !== 'Pending'\">\n                <ion-icon name=\"trash\" (click)=\"onDelete(cash)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerwalletCashoutsCashoutsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">CashOut Requests</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"card\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not made any request yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Make a request</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n<div  *ngIf=\"show\">\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let cash of cashouts\" >\n     <ion-grid>\n      <ion-row class=\"full ion-align-items-center card\">\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <p class=\"ion-no-margin\"><strong><strong>{{cash.amount | currency:'₦'}}</strong></strong></p>\n            <h6 class=\"small mycolor ion-padding-start\">{{cash.status}}</h6>\n          </ion-row>\n           <ion-row>\n            <p class=\"ion-no-margin\">{{cash.bankName}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_number}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_type}}</p>\n          </ion-row>\n         <ion-row>\n            <p class=\"ion-no-margin\"><small>{{cash.request_date}} {{cash.request_time}}</small></p>\n          </ion-row>\n        </ion-col>\n         <ion-row>\n          <ion-col *ngIf=\"cash.status !== 'Pending'\">\n            <ion-icon name=\"trash\" (click)=\"onDelete(cash)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-row> \n     </ion-grid>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellerswalletCashoutsCashoutsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">CashOut Requests</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"card\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not made any request yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Make a request</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n<div  *ngIf=\"show\">\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let cash of cashouts\" >\n     <ion-grid>\n      <ion-row class=\"full ion-align-items-center card\">\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <p class=\"ion-no-margin\"><strong><strong>{{cash.amount | currency:'₦'}}</strong></strong></p>\n            <h6 class=\"small mycolor ion-padding-start\">{{cash.status}}</h6>\n          </ion-row>\n           <ion-row>\n            <p class=\"ion-no-margin\">{{cash.bankName}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_number}}</p>\n          </ion-row>\n          <ion-row>\n            <p class=\"ion-no-margin\">{{cash.account_type}}</p>\n          </ion-row>\n         <ion-row>\n            <p class=\"ion-no-margin\"><small>{{cash.request_date}} {{cash.request_time}}</small></p>\n          </ion-row>\n        </ion-col>\n         <ion-row>\n          <ion-col *ngIf=\"cash.status !== 'Pending'\">\n            <ion-icon name=\"trash\" (click)=\"onDelete(cash)\" color=\"danger\" class=\"item-icons\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-row> \n     </ion-grid>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminwallet/cashouts/cashouts-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/adminwallet/cashouts/cashouts-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CashoutsPageRoutingModule */

    /***/
    function srcAppAdminwalletCashoutsCashoutsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function () {
        return CashoutsPageRoutingModule;
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


      var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cashouts.page */
      "./src/app/adminwallet/cashouts/cashouts.page.ts");

      var routes = [{
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
      }];

      var CashoutsPageRoutingModule = function CashoutsPageRoutingModule() {
        _classCallCheck(this, CashoutsPageRoutingModule);
      };

      CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CashoutsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminwallet/cashouts/cashouts.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/adminwallet/cashouts/cashouts.module.ts ***!
      \*********************************************************/

    /*! exports provided: CashoutsPageModule */

    /***/
    function srcAppAdminwalletCashoutsCashoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function () {
        return CashoutsPageModule;
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


      var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cashouts-routing.module */
      "./src/app/adminwallet/cashouts/cashouts-routing.module.ts");
      /* harmony import */


      var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cashouts.page */
      "./src/app/adminwallet/cashouts/cashouts.page.ts");

      var CashoutsPageModule = function CashoutsPageModule() {
        _classCallCheck(this, CashoutsPageModule);
      };

      CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
      })], CashoutsPageModule);
      /***/
    },

    /***/
    "./src/app/adminwallet/cashouts/cashouts.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/adminwallet/cashouts/cashouts.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminwalletCashoutsCashoutsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW53YWxsZXQvY2FzaG91dHMvY2FzaG91dHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbndhbGxldC9jYXNob3V0cy9jYXNob3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnN7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/adminwallet/cashouts/cashouts.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/adminwallet/cashouts/cashouts.page.ts ***!
      \*******************************************************/

    /*! exports provided: CashoutsPage */

    /***/
    function srcAppAdminwalletCashoutsCashoutsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPage", function () {
        return CashoutsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CashoutsPage = /*#__PURE__*/function () {
        function CashoutsPage(router, loadingCtrl, fun, authService) {
          _classCallCheck(this, CashoutsPage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.fun = fun;
          this.authService = authService;
          this.show = true;
        }

        _createClass(CashoutsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserCashoutRequest(this.sid);
          }
        }, {
          key: "GetUserCashoutRequest",
          value: function GetUserCashoutRequest(sid) {
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
                      this.authService.GetCashoutRequests(String(sid)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.cashouts = res.data;
                          _this.show = true;
                        } else {
                          _this.show = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                        _this.show = false;
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
          value: function onDelete(request) {
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
                      this.fun.removeConform('cashout request').then(function (res) {
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
                                  this.authService.ProcessCashOut('Deleted', request.CashOutID).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this3.fun.presentToast(res.msg);

                                      _this3.sid = _this3.authService.currentUserDataValue.sid;

                                      _this3.GetUserCashoutRequest(_this3.sid);
                                    } else {
                                      _this3.fun.presentToast(res.msg);
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
          key: "onProcess",
          value: function onProcess(request, option, optiontext) {
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
                      this.fun.processRequest(option, 'cashout request').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this5 = this;

                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context4.next = 4;
                                    break;
                                  }

                                  _context4.next = 3;
                                  return loading.present();

                                case 3:
                                  this.authService.ProcessCashOut(optiontext, request.CashOutID).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this5.fun.presentToast(res.msg);

                                      _this5.sid = _this5.authService.currentUserDataValue.sid;

                                      _this5.GetUserCashoutRequest(_this5.sid);
                                    } else {
                                      _this5.fun.presentToast(res.msg);
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 4:
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

        return CashoutsPage;
      }();

      CashoutsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      };

      CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cashouts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminwallet/cashouts/cashouts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cashouts.page.scss */
        "./src/app/adminwallet/cashouts/cashouts.page.scss"))["default"]]
      })], CashoutsPage);
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/cashouts-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/customerwallet/cashouts/cashouts-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: CashoutsPageRoutingModule */

    /***/
    function srcAppCustomerwalletCashoutsCashoutsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function () {
        return CashoutsPageRoutingModule;
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


      var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cashouts.page */
      "./src/app/customerwallet/cashouts/cashouts.page.ts");

      var routes = [{
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
      }];

      var CashoutsPageRoutingModule = function CashoutsPageRoutingModule() {
        _classCallCheck(this, CashoutsPageRoutingModule);
      };

      CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CashoutsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/cashouts.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/customerwallet/cashouts/cashouts.module.ts ***!
      \************************************************************/

    /*! exports provided: CashoutsPageModule */

    /***/
    function srcAppCustomerwalletCashoutsCashoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function () {
        return CashoutsPageModule;
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


      var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cashouts-routing.module */
      "./src/app/customerwallet/cashouts/cashouts-routing.module.ts");
      /* harmony import */


      var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cashouts.page */
      "./src/app/customerwallet/cashouts/cashouts.page.ts");

      var CashoutsPageModule = function CashoutsPageModule() {
        _classCallCheck(this, CashoutsPageModule);
      };

      CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
      })], CashoutsPageModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/cashouts.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/customerwallet/cashouts/cashouts.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerwalletCashoutsCashoutsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvY2FzaG91dHMvY2FzaG91dHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcndhbGxldC9jYXNob3V0cy9jYXNob3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnN7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/cashouts.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/customerwallet/cashouts/cashouts.page.ts ***!
      \**********************************************************/

    /*! exports provided: CashoutsPage */

    /***/
    function srcAppCustomerwalletCashoutsCashoutsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPage", function () {
        return CashoutsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CashoutsPage = /*#__PURE__*/function () {
        function CashoutsPage(router, loadingCtrl, fun, authService) {
          _classCallCheck(this, CashoutsPage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.fun = fun;
          this.authService = authService;
          this.show = true;
        }

        _createClass(CashoutsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserCashoutRequest(this.sid);
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['/', 'customerwallet', 'tabs', 'cashouts', 'new']);
          }
        }, {
          key: "GetUserCashoutRequest",
          value: function GetUserCashoutRequest(sid) {
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
                      this.authService.GetCashoutRequests(String(sid)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this6.cashouts = res.data;
                          _this6.show = true;
                        } else {
                          _this6.show = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});

                        _this6.fun.presentToast(error);

                        _this6.show = false;
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
          value: function onDelete(request) {
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
                      this.fun.removeConform('cashout request').then(function (res) {
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
                                  this.authService.ProcessCashOut('Deleted', request.CashOutID).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this8.fun.presentToast(res.msg);

                                      _this8.sid = _this8.authService.currentUserDataValue.sid;

                                      _this8.GetUserCashoutRequest(_this8.sid);
                                    } else {
                                      _this8.fun.presentToast(res.msg);
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

        return CashoutsPage;
      }();

      CashoutsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      };

      CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cashouts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/cashouts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cashouts.page.scss */
        "./src/app/customerwallet/cashouts/cashouts.page.scss"))["default"]]
      })], CashoutsPage);
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/cashouts-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/cashouts-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CashoutsPageRoutingModule */

    /***/
    function srcAppSellerswalletCashoutsCashoutsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPageRoutingModule", function () {
        return CashoutsPageRoutingModule;
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


      var _cashouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cashouts.page */
      "./src/app/sellerswallet/cashouts/cashouts.page.ts");

      var routes = [{
        path: '',
        component: _cashouts_page__WEBPACK_IMPORTED_MODULE_3__["CashoutsPage"]
      }];

      var CashoutsPageRoutingModule = function CashoutsPageRoutingModule() {
        _classCallCheck(this, CashoutsPageRoutingModule);
      };

      CashoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CashoutsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/cashouts.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/cashouts.module.ts ***!
      \***********************************************************/

    /*! exports provided: CashoutsPageModule */

    /***/
    function srcAppSellerswalletCashoutsCashoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPageModule", function () {
        return CashoutsPageModule;
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


      var _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cashouts-routing.module */
      "./src/app/sellerswallet/cashouts/cashouts-routing.module.ts");
      /* harmony import */


      var _cashouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cashouts.page */
      "./src/app/sellerswallet/cashouts/cashouts.page.ts");

      var CashoutsPageModule = function CashoutsPageModule() {
        _classCallCheck(this, CashoutsPageModule);
      };

      CashoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cashouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashoutsPageRoutingModule"]],
        declarations: [_cashouts_page__WEBPACK_IMPORTED_MODULE_6__["CashoutsPage"]]
      })], CashoutsPageModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/cashouts.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/cashouts.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellerswalletCashoutsCashoutsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3dhbGxldC9jYXNob3V0cy9jYXNob3V0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnN3YWxsZXQvY2FzaG91dHMvY2FzaG91dHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mdWxse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbn1cbi5pdGVtLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/cashouts.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/cashouts.page.ts ***!
      \*********************************************************/

    /*! exports provided: CashoutsPage */

    /***/
    function srcAppSellerswalletCashoutsCashoutsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashoutsPage", function () {
        return CashoutsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CashoutsPage = /*#__PURE__*/function () {
        function CashoutsPage(router, loadingCtrl, fun, authService) {
          _classCallCheck(this, CashoutsPage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.fun = fun;
          this.authService = authService;
          this.show = true;
        }

        _createClass(CashoutsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetUserCashoutRequest(this.sid);
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['/', 'sellerswallet', 'tabs', 'cashouts', 'new']);
          }
        }, {
          key: "GetUserCashoutRequest",
          value: function GetUserCashoutRequest(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this9 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context9.sent;
                      _context9.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.GetCashoutRequests(String(sid)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this9.cashouts = res.data;
                          _this9.show = true;
                        } else {
                          _this9.show = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                        _this9.show = false;
                      });

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "onDelete",
          value: function onDelete(request) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this10 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context11.sent;
                      this.fun.removeConform('cashout request').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                          var _this11 = this;

                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context10.next = 4;
                                    break;
                                  }

                                  _context10.next = 3;
                                  return loading.present();

                                case 3:
                                  this.authService.ProcessCashOut('Deleted', request.CashOutID).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this11.fun.presentToast(res.msg);

                                      _this11.sid = _this11.authService.currentUserDataValue.sid;

                                      _this11.GetUserCashoutRequest(_this11.sid);
                                    } else {
                                      _this11.fun.presentToast(res.msg);
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 4:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return CashoutsPage;
      }();

      CashoutsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      };

      CashoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cashouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cashouts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/cashouts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cashouts.page.scss */
        "./src/app/sellerswallet/cashouts/cashouts.page.scss"))["default"]]
      })], CashoutsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cashouts-cashouts-module-es5.js.map