(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/products/products.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/products/products.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdmininventoryProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Products</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"mytheme\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-input type=\"text\" placeholder=\"Search Product\" [(ngModel)]=\"searchTerm\" class=\"search-bar\"\n        (ionChange)=\"onSearch()\"></ion-input>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added any product yet!</strong></ion-text>\n        <ion-text color=\"mytheme\" class=\"ion-margin-top\">\n          <span class=\"white\">Visit the website to add a product</span>\n        </ion-text>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div  *ngIf=\"show\">\n  <ion-item lines=\"none\" *ngFor=\"let product of products\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(product)\">\n    <ion-row class=\"container-outer\">\n      <ion-col size=\"2\" class=\"ion-text-center container-inner\">\n        <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+product.FirstImage\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{product.ProductName}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{product.Status}}</h6>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{product.ProductPrice | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/products/products.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/products/products.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersinventoryProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Products</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"mytheme\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-input type=\"text\" placeholder=\"Search Product\" [(ngModel)]=\"searchTerm\" class=\"search-bar\"\n        (ionChange)=\"onSearch()\"></ion-input>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added any product yet!</strong></ion-text>\n        <ion-text color=\"mytheme\" class=\"ion-margin-top\">\n          <span class=\"white\">Visit the website to add a product</span>\n        </ion-text>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <ion-item lines=\"none\" *ngFor=\"let product of products\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(product)\">\n    <ion-row class=\"container-outer\">\n      <ion-col size=\"2\" class=\"ion-text-center container-inner\">\n        <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+product.FirstImage\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{product.ProductName}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{product.Status}}</h6>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{product.ProductPrice | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/admininventory/products/products-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/admininventory/products/products-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: ProductsPageRoutingModule */

    /***/
    function srcAppAdmininventoryProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/admininventory/products/products.page.ts");

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
    "./src/app/admininventory/products/products.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/admininventory/products/products.module.ts ***!
      \************************************************************/

    /*! exports provided: ProductsPageModule */

    /***/
    function srcAppAdmininventoryProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/admininventory/products/products-routing.module.ts");
      /* harmony import */


      var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./products.page */
      "./src/app/admininventory/products/products.page.ts");

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
    "./src/app/admininventory/products/products.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/admininventory/products/products.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdmininventoryProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: white !important;\n}\n\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n  padding-left: 0.5em !important;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 15px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxTQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFUSTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBWUo7O0FBVkk7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnNlYXJjaC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW0gIWltcG9ydGFudDtcbiAgfVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnN1YntcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uaXRlbS1pY29ue1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZnVsbHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zbWFsbCB7XG4gICAgbWFyZ2luOiAwO1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDA7XG59XG4uaXRlbS1pY29uc3tcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4uY29udGFpbmVyLW91dGVyIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxuICAgIC5jb250YWluZXItaW5uZXIge1xuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zcG9uLWltZyB7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDNweDtcbiAgICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/admininventory/products/products.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/admininventory/products/products.page.ts ***!
      \**********************************************************/

    /*! exports provided: ProductsPage */

    /***/
    function srcAppAdmininventoryProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
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


      var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/product.service */
      "./src/app/services/product.service.ts");
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

      var ProductsPage = /*#__PURE__*/function () {
        function ProductsPage(router, loadingCtrl, productService, authService) {
          _classCallCheck(this, ProductsPage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.productService = productService;
          this.authService = authService;
          this.show = true;
        }

        _createClass(ProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (!this.products) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetProducts(this.sid);
            }
          }
        }, {
          key: "open",
          value: function open(product) {
            this.router.navigate(['/', 'admininventory', 'tabs', 'products', 'details', product.ProductID]);
          }
        }, {
          key: "GetProducts",
          value: function GetProducts(sid) {
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
                      this.productService.GetProducts(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.products = res.data;
                          _this.originalproducts = res.data;
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
          key: "onSearch",
          value: function onSearch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var searchvalue, loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      searchvalue = this.searchTerm;

                      if (!(searchvalue.trim() === '')) {
                        _context2.next = 5;
                        break;
                      }

                      this.products = this.originalproducts;
                      _context2.next = 14;
                      break;

                    case 5:
                      if (!(String(searchvalue).length >= 3)) {
                        _context2.next = 14;
                        break;
                      }

                      if (!(searchvalue !== undefined)) {
                        _context2.next = 14;
                        break;
                      }

                      _context2.next = 9;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 9:
                      loading = _context2.sent;
                      _context2.next = 12;
                      return loading.present();

                    case 12:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.productService.GetProductsByName(String(this.sid), searchvalue).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.products = res.data;
                          _this2.show = true;
                        } else {
                          _this2.products = _this2.originalproducts;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                        _this2.products = _this2.originalproducts;
                      });

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ProductsPage;
      }();

      ProductsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      };

      ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./products.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/products/products.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./products.page.scss */
        "./src/app/admininventory/products/products.page.scss"))["default"]]
      })], ProductsPage);
      /***/
    },

    /***/
    "./src/app/sellersinventory/products/products-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/sellersinventory/products/products-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ProductsPageRoutingModule */

    /***/
    function srcAppSellersinventoryProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/sellersinventory/products/products.page.ts");

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
    "./src/app/sellersinventory/products/products.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/sellersinventory/products/products.module.ts ***!
      \**************************************************************/

    /*! exports provided: ProductsPageModule */

    /***/
    function srcAppSellersinventoryProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/sellersinventory/products/products-routing.module.ts");
      /* harmony import */


      var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./products.page */
      "./src/app/sellersinventory/products/products.page.ts");

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
    "./src/app/sellersinventory/products/products.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/sellersinventory/products/products.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersinventoryProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: white !important;\n}\n\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n  padding-left: 0.5em !important;\n}\n\n.b .card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 15px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2ludmVudG9yeS9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVFGOztBQUxBO0VBQ0UsV0FBQTtBQVFGOztBQU5BO0VBQ0UsU0FBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBWUY7O0FBVkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQWFGOztBQVhBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFjRiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNpbnZlbnRvcnkvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMC41ZW0gIWltcG9ydGFudDtcbn1cbi5iIC5jYXJkIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zdWIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uaXRlbS1pY29uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLm1pZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDB2aDtcbiAgbGVmdDogNTAlO1xufVxuLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xufVxuLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnMge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uY29udGFpbmVyLW91dGVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uc3Bvbi1pbWcge1xuICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAzcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/sellersinventory/products/products.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/sellersinventory/products/products.page.ts ***!
      \************************************************************/

    /*! exports provided: ProductsPage */

    /***/
    function srcAppSellersinventoryProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
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


      var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/product.service */
      "./src/app/services/product.service.ts");
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

      var ProductsPage = /*#__PURE__*/function () {
        function ProductsPage(router, loadingCtrl, productService, authService) {
          _classCallCheck(this, ProductsPage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.productService = productService;
          this.authService = authService;
          this.show = true;
        }

        _createClass(ProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            if (!this.products) {
              this.sid = this.authService.currentUserDataValue.sid;
              this.GetProducts(this.sid);
            }
          }
        }, {
          key: "open",
          value: function open(product) {
            this.router.navigate(['/', 'sellersinventory', 'tabs', 'products', 'details', product.ProductID]);
          }
        }, {
          key: "GetProducts",
          value: function GetProducts(sid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

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
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      this.productService.GetProducts(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this3.products = res.data;
                          _this3.originalproducts = _this3.products;
                          _this3.show = true;
                        } else {
                          _this3.show = false;
                        }
                      }, function (error) {
                        _this3.show = false;
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var searchvalue, loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      searchvalue = this.searchTerm;

                      if (!(searchvalue.trim() === '')) {
                        _context4.next = 5;
                        break;
                      }

                      this.products = this.originalproducts;
                      _context4.next = 14;
                      break;

                    case 5:
                      if (!(String(searchvalue).length >= 3)) {
                        _context4.next = 14;
                        break;
                      }

                      if (!(searchvalue !== undefined)) {
                        _context4.next = 14;
                        break;
                      }

                      _context4.next = 9;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 9:
                      loading = _context4.sent;
                      _context4.next = 12;
                      return loading.present();

                    case 12:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.productService.GetProductsByName(String(this.sid), searchvalue).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});
                        console.log(res);

                        if (res.code === 200) {
                          _this4.products = res.data;
                          _this4.show = true;
                        } else {
                          _this4.products = _this4.originalproducts;
                          ;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                        _this4.products = _this4.originalproducts;
                      });

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ProductsPage;
      }();

      ProductsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      };

      ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./products.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/products/products.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./products.page.scss */
        "./src/app/sellersinventory/products/products.page.scss"))["default"]]
      })], ProductsPage);
      /***/
    },

    /***/
    "./src/app/services/product.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
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

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http, authService, platform) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.authService = authService;
          this.platform = platform;
        }

        _createClass(ProductService, [{
          key: "GetProducts",
          value: function GetProducts(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetProducts';

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
          key: "GetProductDetails",
          value: function GetProductDetails(productid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetProductDetails';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                productid: productid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data2 = JSON.stringify({
                type: type,
                productid: productid
              });

              return this.http.post(url, _data2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetProductsByName",
          value: function GetProductsByName(sid, searchvalue) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MProductServlet';
            var type = 'GetProductsByName';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                searchvalue: searchvalue
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data3 = JSON.stringify({
                type: type,
                sid: sid,
                searchvalue: searchvalue
              });

              return this.http.post(url, _data3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }]);

        return ProductService;
      }();

      ProductService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], ProductService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=products-products-module-es5.js.map