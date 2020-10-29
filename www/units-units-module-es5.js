(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["units-units-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/units/units.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/units/units.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdmincategoryUnitsUnitsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Product Units</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/admincategory/units/units-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/admincategory/units/units-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: UnitsPageRoutingModule */

    /***/
    function srcAppAdmincategoryUnitsUnitsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitsPageRoutingModule", function () {
        return UnitsPageRoutingModule;
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


      var _units_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./units.page */
      "./src/app/admincategory/units/units.page.ts");

      var routes = [{
        path: '',
        component: _units_page__WEBPACK_IMPORTED_MODULE_3__["UnitsPage"]
      }];

      var UnitsPageRoutingModule = function UnitsPageRoutingModule() {
        _classCallCheck(this, UnitsPageRoutingModule);
      };

      UnitsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UnitsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admincategory/units/units.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/admincategory/units/units.module.ts ***!
      \*****************************************************/

    /*! exports provided: UnitsPageModule */

    /***/
    function srcAppAdmincategoryUnitsUnitsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitsPageModule", function () {
        return UnitsPageModule;
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


      var _units_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./units-routing.module */
      "./src/app/admincategory/units/units-routing.module.ts");
      /* harmony import */


      var _units_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./units.page */
      "./src/app/admincategory/units/units.page.ts");

      var UnitsPageModule = function UnitsPageModule() {
        _classCallCheck(this, UnitsPageModule);
      };

      UnitsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _units_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnitsPageRoutingModule"]],
        declarations: [_units_page__WEBPACK_IMPORTED_MODULE_6__["UnitsPage"]]
      })], UnitsPageModule);
      /***/
    },

    /***/
    "./src/app/admincategory/units/units.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/admincategory/units/units.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdmincategoryUnitsUnitsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluY2F0ZWdvcnkvdW5pdHMvdW5pdHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/admincategory/units/units.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/admincategory/units/units.page.ts ***!
      \***************************************************/

    /*! exports provided: UnitsPage */

    /***/
    function srcAppAdmincategoryUnitsUnitsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitsPage", function () {
        return UnitsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UnitsPage = /*#__PURE__*/function () {
        function UnitsPage() {
          _classCallCheck(this, UnitsPage);
        }

        _createClass(UnitsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UnitsPage;
      }();

      UnitsPage.ctorParameters = function () {
        return [];
      };

      UnitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-units',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./units.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/units/units.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./units.page.scss */
        "./src/app/admincategory/units/units.page.scss"))["default"]]
      })], UnitsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=units-units-module-es5.js.map