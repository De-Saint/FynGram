(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["properties-properties-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/properties/properties.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/properties/properties.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdmincategoryPropertiesPropertiesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Properties</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let prop of properties\">\n    <ion-item>\n      <ion-label>{{prop.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/admincategory/properties/properties-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/admincategory/properties/properties-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PropertiesPageRoutingModule */

    /***/
    function srcAppAdmincategoryPropertiesPropertiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertiesPageRoutingModule", function () {
        return PropertiesPageRoutingModule;
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


      var _properties_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./properties.page */
      "./src/app/admincategory/properties/properties.page.ts");

      var routes = [{
        path: '',
        component: _properties_page__WEBPACK_IMPORTED_MODULE_3__["PropertiesPage"]
      }];

      var PropertiesPageRoutingModule = function PropertiesPageRoutingModule() {
        _classCallCheck(this, PropertiesPageRoutingModule);
      };

      PropertiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PropertiesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admincategory/properties/properties.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/admincategory/properties/properties.module.ts ***!
      \***************************************************************/

    /*! exports provided: PropertiesPageModule */

    /***/
    function srcAppAdmincategoryPropertiesPropertiesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertiesPageModule", function () {
        return PropertiesPageModule;
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


      var _properties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./properties-routing.module */
      "./src/app/admincategory/properties/properties-routing.module.ts");
      /* harmony import */


      var _properties_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./properties.page */
      "./src/app/admincategory/properties/properties.page.ts");

      var PropertiesPageModule = function PropertiesPageModule() {
        _classCallCheck(this, PropertiesPageModule);
      };

      PropertiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _properties_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropertiesPageRoutingModule"]],
        declarations: [_properties_page__WEBPACK_IMPORTED_MODULE_6__["PropertiesPage"]]
      })], PropertiesPageModule);
      /***/
    },

    /***/
    "./src/app/admincategory/properties/properties.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/admincategory/properties/properties.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdmincategoryPropertiesPropertiesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluY2F0ZWdvcnkvcHJvcGVydGllcy9wcm9wZXJ0aWVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/admincategory/properties/properties.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/admincategory/properties/properties.page.ts ***!
      \*************************************************************/

    /*! exports provided: PropertiesPage */

    /***/
    function srcAppAdmincategoryPropertiesPropertiesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertiesPage", function () {
        return PropertiesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../home/service/shop.service */
      "./src/app/home/service/shop.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PropertiesPage = /*#__PURE__*/function () {
        function PropertiesPage(shopService, loadingCtrl) {
          _classCallCheck(this, PropertiesPage);

          this.shopService = shopService;
          this.loadingCtrl = loadingCtrl;
          this.show = true;
        }

        _createClass(PropertiesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.properties) {
              this.GetProperties();
            }
          }
        }, {
          key: "GetProperties",
          value: function GetProperties() {
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
                      this.shopService.GetProperties().subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.properties = res.data;
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
        }]);

        return PropertiesPage;
      }();

      PropertiesPage.ctorParameters = function () {
        return [{
          type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }];
      };

      PropertiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-properties',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./properties.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/properties/properties.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./properties.page.scss */
        "./src/app/admincategory/properties/properties.page.scss"))["default"]]
      })], PropertiesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=properties-properties-module-es5.js.map