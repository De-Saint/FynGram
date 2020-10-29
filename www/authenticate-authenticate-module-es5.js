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


      var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../data.service */
      "./src/app/data.service.ts");
      /* harmony import */


      var _functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../functions.service */
      "./src/app/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Browser;

      var AuthenticatePage = /*#__PURE__*/function () {
        function AuthenticatePage(authService, fun, data) {
          _classCallCheck(this, AuthenticatePage);

          this.authService = authService;
          this.fun = fun;
          this.data = data;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });
        }

        _createClass(AuthenticatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signin",
          value: function signin() {
            if (this.fun.validateEmail(this.loginForm.value.email) && this.loginForm.value.password !== '') {
              this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(function (res) {
                console.log(res);
              });
              this.fun.navigate('home', false);
            } else {
              this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
            }
          }
        }, {
          key: "openLink",
          value: function openLink(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(link);
                      _context.next = 3;
                      return Browser.open({
                        url: link,
                        toolbarColor: "#40A944"
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "onOpen",
          value: function onOpen(link) {
            this.fun.navigate(link, true);
          }
        }]);

        return AuthenticatePage;
      }();

      AuthenticatePage.ctorParameters = function () {
        return [{
          type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
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
    },

    /***/
    "./src/app/authenticate/service/auth-service.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/authenticate/service/auth-service.service.ts ***!
      \**************************************************************/

    /*! exports provided: AuthServiceService */

    /***/
    function srcAppAuthenticateServiceAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthServiceService", function () {
        return AuthServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var AuthServiceService = /*#__PURE__*/function () {
        function AuthServiceService(nativeHttp, platform, http) {
          _classCallCheck(this, AuthServiceService);

          this.nativeHttp = nativeHttp;
          this.platform = platform;
          this.http = http;
        }

        _createClass(AuthServiceService, [{
          key: "login",
          value: function login(emailphone, password) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ngrok + "MUserServlet";
            var type = "Login";

            if (this.platform.is("android")) {
              var data = {
                emailphone: emailphone,
                password: password,
                type: type
              };
              this.nativeHttp.setDataSerializer("json");
              var nativeCall = this.nativeHttp.get(url, data, {
                "Content-Type": "application/json"
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
                return JSON.parse(result.data);
              }));
            } else {
              var _data = JSON.stringify({
                emailphone: emailphone,
                password: password,
                type: type
              });

              return this.http.post(url, _data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
                return res;
              }));
            }
          }
        }]);

        return AuthServiceService;
      }();

      AuthServiceService.ctorParameters = function () {
        return [{
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      AuthServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], AuthServiceService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=authenticate-authenticate-module-es5.js.map