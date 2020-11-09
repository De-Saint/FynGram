(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authenticate-authenticate-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/authenticate.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/authenticate.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthenticateAuthenticatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons>\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title color=\"light\">Sign In</ion-title>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"ion-justify-content-center head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n<ion-content ion-padding>\n  <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Returning Customer</h3>\n  </ion-text>\n  <form [formGroup]=\"loginForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"email\" placeholder=\"Email\" name=\"email\" formControlName=\"email\"\n            class=\"input ion-padding-horizontal\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-input clearInput type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-text float-end color=\"mytheme\" (click)=\"onOpen('authenticate/forgot')\">\n            <h6 class=\"small ion-no-margin ion-text-end\">Forgot Password?</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-bottom\">\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"signin()\" color=\"mytheme\"><strong class=\"white\">Sign In</strong>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <div class=\"line ion-margin\"></div>\n      <ion-row class=\"ion-margin-top\">\n        <ion-col>\n          <ion-button expand=\"block\" fill=\"outline\" (click)=\"onOpen('authenticate/register')\" color=\"mytheme\">\n            <strong>New? Create an Account</strong></ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-text class=\"ion-text-center ion-margin-top\">\n            <h6 class=\"small ion-no-margin \">\n              <a (click)=\"openLink('https://fyngram.com/FynGramShop/pages/shop/terms/terms.jsp')\"><strong>Terms of Use</strong></a>\n              <span style=\"color: gray !important;\"> and </span>\n              <a (click)=\"openLink('https://fyngram.com/FynGramShop/pages/shop/privacy/privacy.jsp')\"><strong>Privacy Policy</strong></a>\n            </h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/authenticate/authenticate-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/authenticate/authenticate-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AuthenticatePageRoutingModule */

    /***/
    function srcAppAuthenticateAuthenticateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticatePageRoutingModule", function () {
        return AuthenticatePageRoutingModule;
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


      var _authenticate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authenticate.page */
      "./src/app/authenticate/authenticate.page.ts");

      var routes = [{
        path: '',
        component: _authenticate_page__WEBPACK_IMPORTED_MODULE_3__["AuthenticatePage"]
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-forgot-module */
          "forgot-forgot-module").then(__webpack_require__.bind(null,
          /*! ./forgot/forgot.module */
          "./src/app/authenticate/forgot/forgot.module.ts")).then(function (m) {
            return m.ForgotPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-register-module */
          "register-register-module").then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/authenticate/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'reset',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | reset-reset-module */
          "reset-reset-module").then(__webpack_require__.bind(null,
          /*! ./reset/reset.module */
          "./src/app/authenticate/reset/reset.module.ts")).then(function (m) {
            return m.ResetPageModule;
          });
        }
      }, {
        path: 'validate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | validate-validate-module */
          "validate-validate-module").then(__webpack_require__.bind(null,
          /*! ./validate/validate.module */
          "./src/app/authenticate/validate/validate.module.ts")).then(function (m) {
            return m.ValidatePageModule;
          });
        }
      }];

      var AuthenticatePageRoutingModule = function AuthenticatePageRoutingModule() {
        _classCallCheck(this, AuthenticatePageRoutingModule);
      };

      AuthenticatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthenticatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/authenticate/authenticate.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/authenticate/authenticate.module.ts ***!
      \*****************************************************/

    /*! exports provided: AuthenticatePageModule */

    /***/
    function srcAppAuthenticateAuthenticateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticatePageModule", function () {
        return AuthenticatePageModule;
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


      var _authenticate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./authenticate-routing.module */
      "./src/app/authenticate/authenticate-routing.module.ts");
      /* harmony import */


      var _authenticate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authenticate.page */
      "./src/app/authenticate/authenticate.page.ts");

      var AuthenticatePageModule = function AuthenticatePageModule() {
        _classCallCheck(this, AuthenticatePageModule);
      };

      AuthenticatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _authenticate_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticatePageRoutingModule"]],
        declarations: [_authenticate_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticatePage"]]
      })], AuthenticatePageModule);
      /***/
    },

    /***/
    "./src/app/authenticate/authenticate.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/authenticate/authenticate.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthenticateAuthenticatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n  color: var(--ion-color-mytheme);\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n:host(.button-solid) {\n  --background: var(--ion-color-mytheme, #40A944);\n  --color: var(--ion-color-primary-contrast, #fff);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlL2F1dGhlbnRpY2F0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtBQUFKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFKSTtFQUNJLGlDQUFBO0VBQ0EsK0JBQUE7QUFNUjs7QUFIQTtFQUNJLDBDQUFBO0FBTUo7O0FBSkE7RUFDSSx3QkFBQTtBQU9KOztBQUxBO0VBQ0ksK0NBQUE7RUFDQSxnREFBQTtBQVFKIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlL2F1dGhlbnRpY2F0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG4uaGVhZC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi53aGl0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG4gICAgfVxufVxuLmJ1dHRvbi1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn1cbi5sb2dvIHtcbiAgICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG46aG9zdCguYnV0dG9uLXNvbGlkKSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSwgIzQwQTk0NCk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/authenticate/authenticate.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/authenticate/authenticate.page.ts ***!
      \***************************************************/

    /*! exports provided: AuthenticatePage */

    /***/
    function srcAppAuthenticateAuthenticatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticatePage", function () {
        return AuthenticatePage;
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


      var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"],
          Browser = _capacitor_core__WEBP.Browser,
          Storage = _capacitor_core__WEBP.Storage;

      var AuthenticatePage = /*#__PURE__*/function () {
        function AuthenticatePage(authService, fun, loadingCtrl) {
          _classCallCheck(this, AuthenticatePage);

          this.authService = authService;
          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.HAS_LOGGED_IN = 'hasLoggedIn';
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
          });
        }

        _createClass(AuthenticatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signin",
          value: function signin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading, oldsid;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.fun.validateEmail(this.loginForm.value.email) && this.loginForm.value.password !== '')) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 3;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 3:
                      loading = _context.sent;
                      _context.next = 6;
                      return loading.present();

                    case 6:
                      if (this.authService.currentUserDataValue) {
                        oldsid = this.authService.currentUserDataValue.sid;
                      }

                      this.authService.login(this.loginForm.value.email, this.loginForm.value.password, oldsid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.gotoHomePage(res.data);
                        } else {
                          _this.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });
                      _context.next = 11;
                      break;

                    case 10:
                      this.fun.presentToast('Wrong Input!');

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openLink",
          value: function openLink(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Browser.open({
                        url: link,
                        toolbarColor: "#40A944"
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "onOpen",
          value: function onOpen(link) {
            this.fun.navigate(link, true);
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

            if (type === 'Guest' || type === 'Customer') {
              this.fun.navigate('/home/tabs/buy', false);
            } else if (type === 'Seller') {
              this.fun.navigate('/sellersdashboard', false);
            } else if (type === 'Admin') {
              this.fun.navigate('/admindashboard', false);
            }

            var event = new CustomEvent('user:login', {
              detail: {
                name: name,
                type: type
              }
            });
            return window.dispatchEvent(event);
          }
        }]);

        return AuthenticatePage;
      }();

      AuthenticatePage.ctorParameters = function () {
        return [{
          type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      AuthenticatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-authenticate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./authenticate.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/authenticate/authenticate.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./authenticate.page.scss */
        "./src/app/authenticate/authenticate.page.scss"))["default"]]
      })], AuthenticatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=authenticate-authenticate-module-es5.js.map