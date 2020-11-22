(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validate-validate-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/validate/validate.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/validate/validate.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthenticateValidateValidatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n\n<ion-content ion-padding>\n  <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Account Validation</h3>\n  </ion-text>\n  <form [formGroup]=\"validateForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Type your verification code</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"text\" placeholder=\"Verification Code\" formControlName=\"code\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"onSubmit()\" [disabled]=\"!validateForm.valid\" color=\"mytheme\"><strong\n              class=\"white\">Submit</strong></ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/authenticate/validate/validate-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/authenticate/validate/validate-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: ValidatePageRoutingModule */

    /***/
    function srcAppAuthenticateValidateValidateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidatePageRoutingModule", function () {
        return ValidatePageRoutingModule;
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


      var _validate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./validate.page */
      "./src/app/authenticate/validate/validate.page.ts");

      var routes = [{
        path: '',
        component: _validate_page__WEBPACK_IMPORTED_MODULE_3__["ValidatePage"]
      }];

      var ValidatePageRoutingModule = function ValidatePageRoutingModule() {
        _classCallCheck(this, ValidatePageRoutingModule);
      };

      ValidatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ValidatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/authenticate/validate/validate.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/authenticate/validate/validate.module.ts ***!
      \**********************************************************/

    /*! exports provided: ValidatePageModule */

    /***/
    function srcAppAuthenticateValidateValidateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidatePageModule", function () {
        return ValidatePageModule;
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


      var _validate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./validate-routing.module */
      "./src/app/authenticate/validate/validate-routing.module.ts");
      /* harmony import */


      var _validate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./validate.page */
      "./src/app/authenticate/validate/validate.page.ts");

      var ValidatePageModule = function ValidatePageModule() {
        _classCallCheck(this, ValidatePageModule);
      };

      ValidatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _validate_routing_module__WEBPACK_IMPORTED_MODULE_5__["ValidatePageRoutingModule"]],
        declarations: [_validate_page__WEBPACK_IMPORTED_MODULE_6__["ValidatePage"]]
      })], ValidatePageModule);
      /***/
    },

    /***/
    "./src/app/authenticate/validate/validate.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/authenticate/validate/validate.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthenticateValidateValidatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlL3ZhbGlkYXRlL3ZhbGlkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUFFUjs7QUFDQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlL3ZhbGlkYXRlL3ZhbGlkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG4uaGVhZC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLnNtYWxsIHtcbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG4uaW5wdXQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufVxuLndoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/authenticate/validate/validate.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/authenticate/validate/validate.page.ts ***!
      \********************************************************/

    /*! exports provided: ValidatePage */

    /***/
    function srcAppAuthenticateValidateValidatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidatePage", function () {
        return ValidatePage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage;

      var ValidatePage = /*#__PURE__*/function () {
        function ValidatePage(fun, authService, loadingCtrl) {
          _classCallCheck(this, ValidatePage);

          this.fun = fun;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
          this.HAS_LOGGED_IN = 'hasLoggedIn';
          this.validateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
            })
          });
        }

        _createClass(ValidatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.validateForm.valid) {
                        _context.next = 3;
                        break;
                      }

                      this.fun.presentToast('Wrong Input!');
                      return _context.abrupt("return", false);

                    case 3:
                      _context.next = 5;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 5:
                      loading = _context.sent;
                      _context.next = 8;
                      return loading.present();

                    case 8:
                      this.authService.ValidateAccount(this.validateForm.value.code).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          var oldsid = _this.authService.currentUserDataValue.sid;

                          _this.authService.login(res.data.email, res.data.password, oldsid).subscribe(function (res) {
                            loading.dismiss()["catch"](function () {});

                            if (res.code === 200) {
                              _this.gotoHomePage(res.data);
                            }
                          }, function (error) {
                            loading.dismiss()["catch"](function () {});

                            _this.fun.presentToast(error);
                          });
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});

                        _this.fun.presentToast(error);
                      });

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "gotoHomePage",
          value: function gotoHomePage(data) {
            Storage.set({
              key: this.HAS_LOGGED_IN,
              value: 'true'
            });
            var name = this.authService.currentUserDataValue.name;
            var type = this.authService.currentUserDataValue.usertype;
            this.fun.presentToast('Welcome ' + name);
            this.fun.navigate('/home/tabs/buy', false);
            var event = new CustomEvent('user:login', {
              detail: {
                name: name,
                type: type
              }
            });
            return window.dispatchEvent(event);
          }
        }]);

        return ValidatePage;
      }();

      ValidatePage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      ValidatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-validate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./validate.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/validate/validate.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./validate.page.scss */
        "./src/app/authenticate/validate/validate.page.scss"))["default"]]
      })], ValidatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=validate-validate-module-es5.js.map