(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/messages/messages.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/messages/messages.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminprofileMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"mail\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have no messages yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <div *ngFor=\"let item of messages\" class=\"card\">\n      <ion-row>\n        <ion-col>\n          <ion-row class=\"title\" text-left>\n            <strong> {{item.subject}}</strong>\n          </ion-row>\n          <ion-row class=\"ion-margin-top\" text-left>\n            {{item.body}}\n          </ion-row>\n          <ion-row class=\"time ion-margin-top ion-float-left\">\n            <ion-text class=\"ion-float-right\">{{item.date}} {{item.time}}</ion-text>\n          </ion-row>\n          <ion-row class=\"time ion-margin-top ion-float-right\">\n            <ion-text class=\"ion-float-right\"  (click)=\"onDelete(item)\"><ion-icon color=\"danger\" name=\"trash\"></ion-icon></ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/messages/messages.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/messages/messages.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerprofileMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"mail\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have no messages yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <div *ngFor=\"let item of messages\" class=\"card\">\n      <ion-row>\n        <ion-col>\n          <ion-row class=\"title\" text-left>\n            <strong> {{item.subject}}</strong>\n          </ion-row>\n          <ion-row class=\"ion-margin-top\" text-left>\n            {{item.body}}\n          </ion-row>\n          <ion-row class=\"time ion-margin-top ion-float-left\">\n            <ion-text class=\"ion-float-right\">{{item.date}}</ion-text>\n          </ion-row>\n          <ion-row class=\"time ion-margin-top ion-float-right\">\n            <ion-text class=\"ion-float-right\">{{item.time}}</ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/messages/messages.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/messages/messages.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersprofileMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"mail\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have no messages yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <div *ngFor=\"let item of messages\" class=\"card\">\n      <ion-row>\n        <ion-col>\n          <ion-row class=\"title\" text-left>\n            <strong> {{item.subject}}</strong>\n          </ion-row>\n          <ion-row class=\"ion-margin-top\" text-left>\n            {{item.body}}\n          </ion-row>\n          <ion-row class=\"time ion-margin-top ion-float-left\">\n            <ion-text class=\"ion-float-right\">{{item.date}}</ion-text>\n          </ion-row>\n          <ion-row class=\"time ion-margin-top ion-float-right\">\n            <ion-text class=\"ion-float-right\">{{item.time}}</ion-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/adminprofile/messages/messages-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/adminprofile/messages/messages-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: MessagesPageRoutingModule */

    /***/
    function srcAppAdminprofileMessagesMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
        return MessagesPageRoutingModule;
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


      var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages.page */
      "./src/app/adminprofile/messages/messages.page.ts");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
      }];

      var MessagesPageRoutingModule = function MessagesPageRoutingModule() {
        _classCallCheck(this, MessagesPageRoutingModule);
      };

      MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminprofile/messages/messages.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/adminprofile/messages/messages.module.ts ***!
      \**********************************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function srcAppAdminprofileMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
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


      var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./messages-routing.module */
      "./src/app/adminprofile/messages/messages-routing.module.ts");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "./src/app/adminprofile/messages/messages.page.ts");

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "./src/app/adminprofile/messages/messages.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/adminprofile/messages/messages.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminprofileMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar {\n  width: 45px;\n  height: 45px;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.time {\n  font-size: 12px;\n}\n\n.small {\n  font-size: 12px;\n}\n\n.card {\n  padding: 3px;\n  margin: 8px 16px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wcm9maWxlL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBS0o7O0FBRkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wcm9maWxlL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zbWFsbHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/adminprofile/messages/messages.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/adminprofile/messages/messages.page.ts ***!
      \********************************************************/

    /*! exports provided: MessagesPage */

    /***/
    function srcAppAdminprofileMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/messages.service */
      "./src/app/services/messages.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage(fun, loadingCtrl, authService, messagesService) {
          _classCallCheck(this, MessagesPage);

          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.authService = authService;
          this.messagesService = messagesService;
          this.show = true;
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.messages) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetMessages(this.sid);
            }
          }
        }, {
          key: "shop",
          value: function shop() {
            this.fun.navigate('home');
          }
        }, {
          key: "GetMessages",
          value: function GetMessages(sid) {
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
                      this.messagesService.GetMessages(sid, 'All').subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.messages = res.data;
                          _this.show = true;
                        } else {
                          _this.fun.presentToast(res.msg);

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
          key: "onDelete",
          value: function onDelete(message) {
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
                      this.fun.removeConform('message').then(function (res) {
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
                                  this.messagesService.DeleteMessage(String(message.id)).subscribe(function (resp) {
                                    loading.dismiss()["catch"](function () {});

                                    if (resp.code === 200) {
                                      _this3.fun.presentToast(resp.msg);

                                      _this3.sid = _this3.authService.currentUserDataValue.sid;

                                      _this3.GetMessages(_this3.sid);
                                    } else {
                                      _this3.fun.presentToast(resp.msg);
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

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]
        }];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messages.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/messages/messages.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messages.page.scss */
        "./src/app/adminprofile/messages/messages.page.scss"))["default"]]
      })], MessagesPage);
      /***/
    },

    /***/
    "./src/app/customerprofile/messages/messages-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/customerprofile/messages/messages-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MessagesPageRoutingModule */

    /***/
    function srcAppCustomerprofileMessagesMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
        return MessagesPageRoutingModule;
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


      var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages.page */
      "./src/app/customerprofile/messages/messages.page.ts");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
      }];

      var MessagesPageRoutingModule = function MessagesPageRoutingModule() {
        _classCallCheck(this, MessagesPageRoutingModule);
      };

      MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/messages/messages.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/customerprofile/messages/messages.module.ts ***!
      \*************************************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function srcAppCustomerprofileMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
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


      var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./messages-routing.module */
      "./src/app/customerprofile/messages/messages-routing.module.ts");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "./src/app/customerprofile/messages/messages.page.ts");

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/messages/messages.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/customerprofile/messages/messages.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerprofileMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar {\n  width: 45px;\n  height: 45px;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.time {\n  font-size: 12px;\n}\n\n.small {\n  font-size: 12px;\n}\n\n.card {\n  padding: 3px;\n  margin: 8px 16px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBS0o7O0FBSEE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zbWFsbHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/customerprofile/messages/messages.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/messages/messages.page.ts ***!
      \***********************************************************/

    /*! exports provided: MessagesPage */

    /***/
    function srcAppCustomerprofileMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/messages.service */
      "./src/app/services/messages.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage(fun, loadingCtrl, authService, messagesService) {
          _classCallCheck(this, MessagesPage);

          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.authService = authService;
          this.messagesService = messagesService;
          this.show = true;
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.messages) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetMessages(this.sid);
            }
          }
        }, {
          key: "shop",
          value: function shop() {
            this.fun.navigate('home');
          }
        }, {
          key: "GetMessages",
          value: function GetMessages(sid) {
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
                      this.messagesService.GetMessages(sid, 'All').subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this4.messages = res.data;
                          _this4.show = true;
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
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]
        }];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messages.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/messages/messages.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messages.page.scss */
        "./src/app/customerprofile/messages/messages.page.scss"))["default"]]
      })], MessagesPage);
      /***/
    },

    /***/
    "./src/app/sellersprofile/messages/messages-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/sellersprofile/messages/messages-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: MessagesPageRoutingModule */

    /***/
    function srcAppSellersprofileMessagesMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
        return MessagesPageRoutingModule;
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


      var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages.page */
      "./src/app/sellersprofile/messages/messages.page.ts");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
      }];

      var MessagesPageRoutingModule = function MessagesPageRoutingModule() {
        _classCallCheck(this, MessagesPageRoutingModule);
      };

      MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/messages/messages.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/sellersprofile/messages/messages.module.ts ***!
      \************************************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function srcAppSellersprofileMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
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


      var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./messages-routing.module */
      "./src/app/sellersprofile/messages/messages-routing.module.ts");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "./src/app/sellersprofile/messages/messages.page.ts");

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/messages/messages.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/sellersprofile/messages/messages.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersprofileMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar {\n  width: 45px;\n  height: 45px;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.time {\n  font-size: 12px;\n}\n\n.small {\n  font-size: 12px;\n}\n\n.card {\n  padding: 3px;\n  margin: 8px 16px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3Byb2ZpbGUvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFLSjs7QUFIQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0oiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXJzcHJvZmlsZS9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50aW1lIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc21hbGx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/sellersprofile/messages/messages.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/sellersprofile/messages/messages.page.ts ***!
      \**********************************************************/

    /*! exports provided: MessagesPage */

    /***/
    function srcAppSellersprofileMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/messages.service */
      "./src/app/services/messages.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage(fun, loadingCtrl, authService, messagesService) {
          _classCallCheck(this, MessagesPage);

          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.authService = authService;
          this.messagesService = messagesService;
          this.show = true;
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.messages) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetMessages(this.sid);
            }
          }
        }, {
          key: "shop",
          value: function shop() {
            this.fun.navigate('home');
          }
        }, {
          key: "GetMessages",
          value: function GetMessages(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

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
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                      this.messagesService.GetMessages(sid, 'All').subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this5.messages = res.data;
                          _this5.show = true;
                        } else {
                          _this5.show = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                        _this5.show = false;
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }, {
          type: _services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]
        }];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messages.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/messages/messages.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messages.page.scss */
        "./src/app/sellersprofile/messages/messages.page.scss"))["default"]]
      })], MessagesPage);
      /***/
    },

    /***/
    "./src/app/services/messages.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/messages.service.ts ***!
      \**********************************************/

    /*! exports provided: MessagesService */

    /***/
    function srcAppServicesMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
        return MessagesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessagesService = /*#__PURE__*/function () {
        function MessagesService(http, authService, platform) {
          _classCallCheck(this, MessagesService);

          this.http = http;
          this.authService = authService;
          this.platform = platform;
        }

        _createClass(MessagesService, [{
          key: "GetMessages",
          value: function GetMessages(sid, option) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MMessageServlet';
            var type = 'GetMessages';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                option: option
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data = JSON.stringify({
                type: type,
                sid: sid,
                option: option
              });

              return this.http.post(url, _data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "DeleteMessage",
          value: function DeleteMessage(messageid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MMessageServlet';
            var type = 'DeleteMessage';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                messageid: messageid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data2 = JSON.stringify({
                type: type,
                messageid: messageid
              });

              return this.http.post(url, _data2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }]);

        return MessagesService;
      }();

      MessagesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      MessagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], MessagesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=messages-messages-module-es5.js.map