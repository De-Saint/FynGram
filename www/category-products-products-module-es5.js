(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-products-products-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/products.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/products.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeCategoryProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Products</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onOpen('cart')\" class=\"ion-no-margin ion-no-padding\">\n        <ion-icon name=\"cart\" slot=\"icon-only\" class=\"white top-btn \"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"onOpen('search')\" class=\"ion-no-margin\">\n        <ion-icon name=\"search\" slot=\"icon-only\" class=\"white top-btn\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button (click)=\"side_open()\" class=\"ion-no-margin\">\n        <ion-icon name=\"funnel-outline\" slot=\"icon-only\" class=\"white top-btn\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n   <ion-grid>\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let data of products\" (click)=\"open(data)\">\n        <div class=\"img-wrapper\" [style.background-image]=\"'url(data:image/png;base64,' + data.FirstImage\">\n        </div>\n        <p class=\"ion-no-margin text-truncate\"><strong>{{data.InfoDetails?.name}}</strong></p>\n        <p class=\"ion-no-margin\">\n          {{ data.PriceDetails?.selling_price | currency:'₦' }}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/category/products/products-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/home/category/products/products-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ProductsPageRoutingModule */

    /***/
    function srcAppHomeCategoryProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function () {
        return ProductsPageRoutingModule;
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


      var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./products.page */
      "./src/app/home/category/products/products.page.ts");

      var routes = [{
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
      }];

      var ProductsPageRoutingModule = function ProductsPageRoutingModule() {
        _classCallCheck(this, ProductsPageRoutingModule);
      };

      ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/category/products/products.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/home/category/products/products.module.ts ***!
      \***********************************************************/

    /*! exports provided: ProductsPageModule */

    /***/
    function srcAppHomeCategoryProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function () {
        return ProductsPageModule;
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


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./products-routing.module */
      "./src/app/home/category/products/products-routing.module.ts");
      /* harmony import */


      var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./products.page */
      "./src/app/home/category/products/products.page.ts");

      var ProductsPageModule = function ProductsPageModule() {
        _classCallCheck(this, ProductsPageModule);
      };

      ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsPageRoutingModule"]],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
      })], ProductsPageModule);
      /***/
    },

    /***/
    "./src/app/home/category/products/products.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/home/category/products/products.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeCategoryProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked: none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.img-wrapper {\n  min-height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0FBTUY7O0FBSkE7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFPRjs7QUFMQTtFQUNFLFlBQUE7QUFRRjs7QUFOQTtFQUNFLHVCQUFBO0FBU0Y7O0FBUEE7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVEE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQVlGOztBQVhFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVZBO0VBQ0UsdUJBQUE7QUFhRjs7QUFWQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFhRjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXRlZ29yeS9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDNweDtcbn1cbi5pbmxpbmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTIsIDEyLCAwLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5ob3Itc2Nyb2xsIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnNlYXJjaC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuLmhvci1zY3JvbGwge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ubWVudSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLm15LWJ0biB7XG4gIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uYnRuLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiBub25lICFpbXBvcnRhbnQ7XG4gIGlvbi10ZXh0IHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxufVxuI2RhZyB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4uaW1nLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4udGV4dC10cnVuY2F0ZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/category/products/products.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/home/category/products/products.page.ts ***!
      \*********************************************************/

    /*! exports provided: ProductsPage */

    /***/
    function srcAppHomeCategoryProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
        return ProductsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../service/shop.service */
      "./src/app/home/service/shop.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ProductsPage = /*#__PURE__*/function () {
        function ProductsPage(fun, loadingCtrl, shopService, router, activeRoute) {
          _classCallCheck(this, ProductsPage);

          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.shopService = shopService;
          this.router = router;
          this.activeRoute = activeRoute;
          this.slideOpts = {
            effect: 'flip',
            zoom: false
          };
        }

        _createClass(ProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activeRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('catId')) {
                _this.fun.navigate('home/tabs/category');

                return;
              }

              _this.catId = paramMap.get('catId');

              _this.GetCategoryProducts(_this.catId);
            });
          }
        }, {
          key: "open",
          value: function open(data) {
            this.router.navigate(['/', 'home', 'tabs', 'category', 'products', 'details', data.id]);
          }
        }, {
          key: "onOpen",
          value: function onOpen(link) {
            this.fun.navigate(link);
          }
        }, {
          key: "GetCategoryProducts",
          value: function GetCategoryProducts(catid) {
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
                      this.shopService.GetCategoryProducts(catid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.products = res.data;
                        } else {
                          _this2.fun.presentToast(res.msg);
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
        }]);

        return ProductsPage;
      }();

      ProductsPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./products.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/category/products/products.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./products.page.scss */
        "./src/app/home/category/products/products.page.scss"))["default"]]
      })], ProductsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=category-products-products-module-es5.js.map