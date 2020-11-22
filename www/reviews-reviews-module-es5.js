(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/reviews/reviews.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/reviews/reviews.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminprofileReviewsReviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"mail\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not reviewed any product!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n\n\n    <ion-grid>\n      <ion-row  *ngFor=\"let review of reviews\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <ion-icon name=\"star\" class=\"small-ico\" color=\"mytheme\"\n                *ngFor=\"let i of computeRatings(review.rate_value)\">\n              </ion-icon>\n              <ion-icon name=\"star-outline\" class=\"small-ico\" color=\"mytheme\"\n                *ngFor=\"let i of computeRatings(5-review.rate_value)\"></ion-icon>\n              <small> {{review.rate_value}}</small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong>{{review.reviewProductName}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{review.comment}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">{{review.date}} {{review.time}}</small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\" (click)=\"onDelete(review)\"><ion-icon color=\"danger\" name=\"trash\"></ion-icon></small>\n          </ion-row>\n        </ion-col>\n      </ion-row >\n    </ion-grid>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/reviews/reviews.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/reviews/reviews.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerprofileReviewsReviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"mail\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not reviewed any product!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n\n\n    <ion-grid>\n      <ion-row  *ngFor=\"let review of reviews\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <ion-icon name=\"star\" class=\"small-ico\" color=\"mytheme\"\n                *ngFor=\"let i of computeRatings(review.rate_value)\">\n              </ion-icon>\n              <ion-icon name=\"star-outline\" class=\"small-ico\" color=\"mytheme\"\n                *ngFor=\"let i of computeRatings(5-review.rate_value)\"></ion-icon>\n              <small> {{review.rate_value}}</small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong>{{review.reviewProductName}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{review.comment}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">{{review.date}}</small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">{{review.time}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row >\n    </ion-grid>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ReviewsPageRoutingModule */

    /***/
    function srcAppAdminprofileReviewsReviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function () {
        return ReviewsPageRoutingModule;
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


      var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/adminprofile/reviews/reviews.page.ts");

      var routes = [{
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
      }];

      var ReviewsPageRoutingModule = function ReviewsPageRoutingModule() {
        _classCallCheck(this, ReviewsPageRoutingModule);
      };

      ReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReviewsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews.module.ts ***!
      \********************************************************/

    /*! exports provided: ReviewsPageModule */

    /***/
    function srcAppAdminprofileReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function () {
        return ReviewsPageModule;
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


      var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reviews-routing.module */
      "./src/app/adminprofile/reviews/reviews-routing.module.ts");
      /* harmony import */


      var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/adminprofile/reviews/reviews.page.ts");

      var ReviewsPageModule = function ReviewsPageModule() {
        _classCallCheck(this, ReviewsPageModule);
      };

      ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsPageRoutingModule"]],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
      })], ReviewsPageModule);
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminprofileReviewsReviewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wcm9maWxlL3Jldmlld3MvcmV2aWV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFlSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucHJvZmlsZS9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuLm1hcmdpbiB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY21udCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNlcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZpbHRlci1idG4ge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5idG4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLnJvdyB7XG4gICAgbWFyZ2luOiA2cHg7XG59XG4ucmF0ZS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLnJldi1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDZweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/adminprofile/reviews/reviews.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/adminprofile/reviews/reviews.page.ts ***!
      \******************************************************/

    /*! exports provided: ReviewsPage */

    /***/
    function srcAppAdminprofileReviewsReviewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPage", function () {
        return ReviewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_reviews_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/reviews.service */
      "./src/app/services/reviews.service.ts");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReviewsPage = /*#__PURE__*/function () {
        function ReviewsPage(fun, authService, reviewsService, loadingCtrl) {
          _classCallCheck(this, ReviewsPage);

          this.fun = fun;
          this.authService = authService;
          this.reviewsService = reviewsService;
          this.loadingCtrl = loadingCtrl;
          this.show = true;
        }

        _createClass(ReviewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.reviews) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetUserReviewList(this.sid);
            }
          }
        }, {
          key: "computeRatings",
          value: function computeRatings(ratenumber) {
            return this.fun.array(parseInt(ratenumber));
          }
        }, {
          key: "computeRatings2",
          value: function computeRatings2(ratenumber) {
            return this.fun.array(5 - parseInt(ratenumber));
          }
        }, {
          key: "shop",
          value: function shop() {
            this.fun.navigate('home');
          }
        }, {
          key: "GetUserReviewList",
          value: function GetUserReviewList(sid) {
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
                      this.reviewsService.GetUserReviewList(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.reviews = res.data;
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
          value: function onDelete(review) {
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
                      this.fun.removeConform('review').then(function (res) {
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
                                  this.reviewsService.DeleteReview(String(review.id)).subscribe(function (resp) {
                                    loading.dismiss()["catch"](function () {});

                                    if (resp.code === 200) {
                                      _this3.fun.presentToast(resp.msg);

                                      _this3.sid = _this3.authService.currentUserDataValue.sid;

                                      _this3.GetUserReviewList(_this3.sid);
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

        return ReviewsPage;
      }();

      ReviewsPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _services_reviews_service__WEBPACK_IMPORTED_MODULE_3__["ReviewsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-reviews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reviews.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminprofile/reviews/reviews.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reviews.page.scss */
        "./src/app/adminprofile/reviews/reviews.page.scss"))["default"]]
      })], ReviewsPage);
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ReviewsPageRoutingModule */

    /***/
    function srcAppCustomerprofileReviewsReviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function () {
        return ReviewsPageRoutingModule;
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


      var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/customerprofile/reviews/reviews.page.ts");

      var routes = [{
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
      }];

      var ReviewsPageRoutingModule = function ReviewsPageRoutingModule() {
        _classCallCheck(this, ReviewsPageRoutingModule);
      };

      ReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReviewsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews.module.ts ***!
      \***********************************************************/

    /*! exports provided: ReviewsPageModule */

    /***/
    function srcAppCustomerprofileReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function () {
        return ReviewsPageModule;
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


      var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reviews-routing.module */
      "./src/app/customerprofile/reviews/reviews-routing.module.ts");
      /* harmony import */


      var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reviews.page */
      "./src/app/customerprofile/reviews/reviews.page.ts");

      var ReviewsPageModule = function ReviewsPageModule() {
        _classCallCheck(this, ReviewsPageModule);
      };

      ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsPageRoutingModule"]],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
      })], ReviewsPageModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerprofileReviewsReviewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL3Jldmlld3MvcmV2aWV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFlSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJvZmlsZS9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuLm1hcmdpbiB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY21udCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNlcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZpbHRlci1idG4ge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5idG4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLnJvdyB7XG4gICAgbWFyZ2luOiA2cHg7XG59XG4ucmF0ZS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLnJldi1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDZweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/customerprofile/reviews/reviews.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/customerprofile/reviews/reviews.page.ts ***!
      \*********************************************************/

    /*! exports provided: ReviewsPage */

    /***/
    function srcAppCustomerprofileReviewsReviewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsPage", function () {
        return ReviewsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_reviews_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/reviews.service */
      "./src/app/services/reviews.service.ts");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ReviewsPage = /*#__PURE__*/function () {
        function ReviewsPage(fun, authService, reviewsService, loadingCtrl) {
          _classCallCheck(this, ReviewsPage);

          this.fun = fun;
          this.authService = authService;
          this.reviewsService = reviewsService;
          this.loadingCtrl = loadingCtrl;
          this.show = true;
        }

        _createClass(ReviewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.reviews) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetUserReviewList(this.sid);
            }
          }
        }, {
          key: "computeRatings",
          value: function computeRatings(ratenumber) {
            return this.fun.array(parseInt(ratenumber));
          }
        }, {
          key: "computeRatings2",
          value: function computeRatings2(ratenumber) {
            return this.fun.array(5 - parseInt(ratenumber));
          }
        }, {
          key: "shop",
          value: function shop() {
            this.fun.navigate('home');
          }
        }, {
          key: "GetUserReviewList",
          value: function GetUserReviewList(sid) {
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
                      this.reviewsService.GetUserReviewList(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this4.reviews = res.data;
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

        return ReviewsPage;
      }();

      ReviewsPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _services_reviews_service__WEBPACK_IMPORTED_MODULE_3__["ReviewsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-reviews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reviews.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/reviews/reviews.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reviews.page.scss */
        "./src/app/customerprofile/reviews/reviews.page.scss"))["default"]]
      })], ReviewsPage);
      /***/
    },

    /***/
    "./src/app/services/reviews.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/reviews.service.ts ***!
      \*********************************************/

    /*! exports provided: ReviewsService */

    /***/
    function srcAppServicesReviewsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewsService", function () {
        return ReviewsService;
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

      var ReviewsService = /*#__PURE__*/function () {
        function ReviewsService(http, authService, platform) {
          _classCallCheck(this, ReviewsService);

          this.http = http;
          this.authService = authService;
          this.platform = platform;
        }

        _createClass(ReviewsService, [{
          key: "GetUserReviewList",
          value: function GetUserReviewList(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MReviewServlet';
            var type = 'GetUserReviewList';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "DeleteReview",
          value: function DeleteReview(reviewid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MReviewServlet';
            var type = 'DeleteReview';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                reviewid: reviewid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data2 = JSON.stringify({
                type: type,
                reviewid: reviewid
              });

              return this.http.post(url, _data2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }]);

        return ReviewsService;
      }();

      ReviewsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      ReviewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], ReviewsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=reviews-reviews-module-es5.js.map