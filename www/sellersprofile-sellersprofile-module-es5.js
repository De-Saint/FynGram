(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sellersprofile-sellersprofile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/sellersprofile.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/sellersprofile.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersprofileSellersprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"bottom\" class=\"ion-text-xl-center\">\n    <ion-tab-button tab=\"profile\">\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"address\">\n      <ion-label>Address</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"messages\">\n      <ion-label>Messages</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/sellersprofile/sellersprofile-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/sellersprofile/sellersprofile-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SellersprofilePageRoutingModule */

    /***/
    function srcAppSellersprofileSellersprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersprofilePageRoutingModule", function () {
        return SellersprofilePageRoutingModule;
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


      var _sellersprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sellersprofile.page */
      "./src/app/sellersprofile/sellersprofile.page.ts");

      var routes = [{
        path: 'tabs',
        component: _sellersprofile_page__WEBPACK_IMPORTED_MODULE_3__["SellersprofilePage"],
        children: [{
          path: 'profile',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | profile-profile-module */
              "profile-profile-module").then(__webpack_require__.bind(null,
              /*! ./profile/profile.module */
              "./src/app/sellersprofile/profile/profile.module.ts")).then(function (m) {
                return m.ProfilePageModule;
              });
            }
          }]
        }, {
          path: 'address',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | address-address-module */
              "address-address-module").then(__webpack_require__.bind(null,
              /*! ./address/address.module */
              "./src/app/sellersprofile/address/address.module.ts")).then(function (m) {
                return m.AddressPageModule;
              });
            }
          }]
        }, {
          path: 'messages',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | messages-messages-module */
              "messages-messages-module").then(__webpack_require__.bind(null,
              /*! ./messages/messages.module */
              "./src/app/sellersprofile/messages/messages.module.ts")).then(function (m) {
                return m.MessagesPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/sellersprofile/tabs/profile',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/sellersprofile/tabs/profile',
        pathMatch: 'full'
      }];

      var SellersprofilePageRoutingModule = function SellersprofilePageRoutingModule() {
        _classCallCheck(this, SellersprofilePageRoutingModule);
      };

      SellersprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellersprofilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/sellersprofile.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/sellersprofile/sellersprofile.module.ts ***!
      \*********************************************************/

    /*! exports provided: SellersprofilePageModule */

    /***/
    function srcAppSellersprofileSellersprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersprofilePageModule", function () {
        return SellersprofilePageModule;
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


      var _sellersprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sellersprofile-routing.module */
      "./src/app/sellersprofile/sellersprofile-routing.module.ts");
      /* harmony import */


      var _sellersprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sellersprofile.page */
      "./src/app/sellersprofile/sellersprofile.page.ts");

      var SellersprofilePageModule = function SellersprofilePageModule() {
        _classCallCheck(this, SellersprofilePageModule);
      };

      SellersprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sellersprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellersprofilePageRoutingModule"]],
        declarations: [_sellersprofile_page__WEBPACK_IMPORTED_MODULE_6__["SellersprofilePage"]]
      })], SellersprofilePageModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/sellersprofile.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/sellersprofile/sellersprofile.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersprofileSellersprofilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNwcm9maWxlL3NlbGxlcnNwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/sellersprofile/sellersprofile.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/sellersprofile/sellersprofile.page.ts ***!
      \*******************************************************/

    /*! exports provided: SellersprofilePage */

    /***/
    function srcAppSellersprofileSellersprofilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellersprofilePage", function () {
        return SellersprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SellersprofilePage = /*#__PURE__*/function () {
        function SellersprofilePage() {
          _classCallCheck(this, SellersprofilePage);
        }

        _createClass(SellersprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellersprofilePage;
      }();

      SellersprofilePage.ctorParameters = function () {
        return [];
      };

      SellersprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellersprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sellersprofile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/sellersprofile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sellersprofile.page.scss */
        "./src/app/sellersprofile/sellersprofile.page.scss"))["default"]]
      })], SellersprofilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sellersprofile-sellersprofile-module-es5.js.map