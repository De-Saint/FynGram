(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-shipping-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/shipping.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/shipping.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminusersShippingShippingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Shipping Companies</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\" >\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"  class=\"white top-btn ion-no-margin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  color=\"light\">\n  <div class=\"mid ion-padding\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added any product yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onAdd()\">\n          <span class=\"white\">Add Shipping Method</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-grid>\n      <ion-row  *ngFor=\"let ship of shippings\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong>{{ship.name}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{ship.delivery_interval}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">Date Added: {{ship.date_added}} </small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\" (click)=\"onDetails(ship)\"><ion-icon color=\"success\" size=\"12\" name=\"arrow-redo\"></ion-icon></small>\n          </ion-row>\n        </ion-col>\n      </ion-row >\n    </ion-grid>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/shipping-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/adminusers/shipping/shipping-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ShippingPageRoutingModule */

    /***/
    function srcAppAdminusersShippingShippingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShippingPageRoutingModule", function () {
        return ShippingPageRoutingModule;
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


      var _shipping_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shipping.page */
      "./src/app/adminusers/shipping/shipping.page.ts");

      var routes = [{
        path: '',
        component: _shipping_page__WEBPACK_IMPORTED_MODULE_3__["ShippingPage"]
      }];

      var ShippingPageRoutingModule = function ShippingPageRoutingModule() {
        _classCallCheck(this, ShippingPageRoutingModule);
      };

      ShippingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShippingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/shipping.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/adminusers/shipping/shipping.module.ts ***!
      \********************************************************/

    /*! exports provided: ShippingPageModule */

    /***/
    function srcAppAdminusersShippingShippingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShippingPageModule", function () {
        return ShippingPageModule;
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


      var _shipping_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shipping-routing.module */
      "./src/app/adminusers/shipping/shipping-routing.module.ts");
      /* harmony import */


      var _shipping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shipping.page */
      "./src/app/adminusers/shipping/shipping.page.ts");

      var ShippingPageModule = function ShippingPageModule() {
        _classCallCheck(this, ShippingPageModule);
      };

      ShippingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shipping_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShippingPageRoutingModule"]],
        declarations: [_shipping_page__WEBPACK_IMPORTED_MODULE_6__["ShippingPage"]]
      })], ShippingPageModule);
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/shipping.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/adminusers/shipping/shipping.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminusersShippingShippingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW51c2Vycy9zaGlwcGluZy9zaGlwcGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFlSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL2FkbWludXNlcnMvc2hpcHBpbmcvc2hpcHBpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuLm1hcmdpbiB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY21udCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNlcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZpbHRlci1idG4ge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5idG4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLnJvdyB7XG4gICAgbWFyZ2luOiA2cHg7XG59XG4ucmF0ZS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLnJldi1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDZweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/shipping.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/adminusers/shipping/shipping.page.ts ***!
      \******************************************************/

    /*! exports provided: ShippingPage */

    /***/
    function srcAppAdminusersShippingShippingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShippingPage", function () {
        return ShippingPage;
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


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ShippingPage = /*#__PURE__*/function () {
        function ShippingPage(router, loadingCtrl, authService) {
          _classCallCheck(this, ShippingPage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.authService = authService;
          this.show = true;
        }

        _createClass(ShippingPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (!this.shippings) {
              this.GetShippings();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "GetShippings",
          value: function GetShippings() {
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
                      this.authService.GetShippings().subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.shippings = res.data;
                          _this.show = true;
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
            this.router.navigate(['/', 'adminusers', 'tabs', 'shippings', 'new']);
          }
        }, {
          key: "onDetails",
          value: function onDetails(shipping) {
            this.router.navigate(['/', 'adminusers', 'tabs', 'shippings', 'details', shipping.id]);
          }
        }]);

        return ShippingPage;
      }();

      ShippingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }];
      };

      ShippingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-shipping',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./shipping.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/shipping.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./shipping.page.scss */
        "./src/app/adminusers/shipping/shipping.page.scss"))["default"]]
      })], ShippingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shipping-shipping-module-es5.js.map