(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-new-new-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/new/new.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/new/new.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerprofileAddressNewNewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Add Address</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"addressForm\">\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Address Type</span></ion-text>\n        <ion-select formControlName=\"addresstype\" [interfaceOptions]=\"addresstypecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select address type\">\n          <ion-select-option *ngFor=\"let q of addresstypes\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">State</span></ion-text>\n        <ion-select formControlName=\"state\" [interfaceOptions]=\"statecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select State\" (ionChange)=\"onSelectState($event)\">\n          <ion-select-option *ngFor=\"let q of states\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">LGA</span></ion-text>\n        <ion-select formControlName=\"lga\" [interfaceOptions]=\"lgacustomAlertOptions\" class=\"input\"\n          placeholder=\"Select LGA\" (ionChange)=\"onSelectLga($event)\">\n          <ion-select-option *ngFor=\"let q of lgas\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Town</span></ion-text>\n        <ion-select formControlName=\"town\" [interfaceOptions]=\"towncustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Town\" (ionChange)=\"onSelectTown($event)\">\n          <ion-select-option *ngFor=\"let q of towns\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"showbustop\">\n        <ion-text><span class=\"label\">Bus Stop</span></ion-text>\n        <ion-select formControlName=\"busstop\" [interfaceOptions]=\"busstopcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Bus Stop\" (ionChange)=\"onSelectBusStop($event)\">\n          <ion-select-option *ngFor=\"let q of busstops\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col *ngIf=\"showstreet\">\n        <ion-text><span class=\"label\">Street</span></ion-text>\n        <ion-select formControlName=\"street\" [interfaceOptions]=\"streetcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Street\">\n          <ion-select-option *ngFor=\"let q of streets\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-row>\n        <ion-col >\n          <ion-text><span class=\"label\">Type your Bus Stop</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"busstop\" type=\"text\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-text><span class=\"label\">Type your Street</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"street\" type=\"text\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Close To</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"closeto\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">House Number</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"housenumber\" placeholder=\"Optional\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Phone Number (11 digits)</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"phone\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Postal Code</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"postal\" type=\"number\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Set To Default Address?</span></ion-text>\n        <ion-select formControlName=\"default\" [interfaceOptions]=\"defaultcustomAlertOptions\" class=\"input\"\n          >\n          <ion-select-option value=\"1\">Yes</ion-select-option>\n          <ion-select-option value=\"0\">No</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"mytheme\"  (click)=\"update()\"><span\n            class=\"white\"><strong>Save</strong></span></ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/new/new.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/new/new.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersprofileAddressNewNewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Add Address</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"addressForm\">\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Address Type</span></ion-text>\n        <ion-select formControlName=\"addresstype\" [interfaceOptions]=\"addresstypecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select address type\">\n          <ion-select-option *ngFor=\"let q of addresstypes\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">State</span></ion-text>\n        <ion-select formControlName=\"state\" [interfaceOptions]=\"statecustomAlertOptions\" class=\"input\"\n          placeholder=\"Select State\" (ionChange)=\"onSelectState($event)\">\n          <ion-select-option *ngFor=\"let q of states\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">LGA</span></ion-text>\n        <ion-select formControlName=\"lga\" [interfaceOptions]=\"lgacustomAlertOptions\" class=\"input\"\n          placeholder=\"Select LGA\" (ionChange)=\"onSelectLga($event)\">\n          <ion-select-option *ngFor=\"let q of lgas\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Town</span></ion-text>\n        <ion-select formControlName=\"town\" [interfaceOptions]=\"towncustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Town\" (ionChange)=\"onSelectTown($event)\">\n          <ion-select-option *ngFor=\"let q of towns\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"showbustop\">\n        <ion-text><span class=\"label\">Bus Stop</span></ion-text>\n        <ion-select formControlName=\"busstop\" [interfaceOptions]=\"busstopcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Bus Stop\" (ionChange)=\"onSelectBusStop($event)\">\n          <ion-select-option *ngFor=\"let q of busstops\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col *ngIf=\"showstreet\">\n        <ion-text><span class=\"label\">Street</span></ion-text>\n        <ion-select formControlName=\"street\" [interfaceOptions]=\"streetcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select Street\">\n          <ion-select-option *ngFor=\"let q of streets\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-row>\n        <ion-col >\n          <ion-text><span class=\"label\">Type your Bus Stop</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"busstop\" type=\"text\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-text><span class=\"label\">Type your Street</span></ion-text>\n          <ion-input placeholder=\"if not in the list\" class=\"input\" formControlName=\"street\" type=\"text\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Close To</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"closeto\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">House Number</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"housenumber\" placeholder=\"Optional\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Phone Number (11 digits)</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"phone\"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-text><span class=\"label\">Postal Code</span></ion-text>\n        <ion-input class=\"input\" formControlName=\"postal\" type=\"number\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"mytheme\"  (click)=\"update()\"><span\n            class=\"white\"><strong>Save</strong></span></ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/customerprofile/address/new/new-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/customerprofile/address/new/new-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function srcAppCustomerprofileAddressNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
        return NewPageRoutingModule;
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


      var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/customerprofile/address/new/new.page.ts");

      var routes = [{
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
      }];

      var NewPageRoutingModule = function NewPageRoutingModule() {
        _classCallCheck(this, NewPageRoutingModule);
      };

      NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/address/new/new.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/address/new/new.module.ts ***!
      \***********************************************************/

    /*! exports provided: NewPageModule */

    /***/
    function srcAppCustomerprofileAddressNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
        return NewPageModule;
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


      var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-routing.module */
      "./src/app/customerprofile/address/new/new-routing.module.ts");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/customerprofile/address/new/new.page.ts");

      var NewPageModule = function NewPageModule() {
        _classCallCheck(this, NewPageModule);
      };

      NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"]],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
      })], NewPageModule);
      /***/
    },

    /***/
    "./src/app/customerprofile/address/new/new.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/customerprofile/address/new/new.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerprofileAddressNewNewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input {\n  border: 0.5px solid #d2d2d2;\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  padding-left: 1.2em !important;\n  padding-right: 1.2em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJwcm9maWxlL2FkZHJlc3MvbmV3L25ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcnByb2ZpbGUvYWRkcmVzcy9uZXcvbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMmVtICFpbXBvcnRhbnQ7XG59XG4ubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/customerprofile/address/new/new.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/customerprofile/address/new/new.page.ts ***!
      \*********************************************************/

    /*! exports provided: NewPage */

    /***/
    function srcAppCustomerprofileAddressNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPage", function () {
        return NewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../services/address.service */
      "./src/app/services/address.service.ts");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NewPage = /*#__PURE__*/function () {
        function NewPage(fun, addressService, loadingCtrl, router, authService) {
          _classCallCheck(this, NewPage);

          this.fun = fun;
          this.addressService = addressService;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.authService = authService;
          this.showbustop = true;
          this.showstreet = true;
          this.defaultcustomAlertOptions = {
            header: 'Select Default'
          };
          this.addresstypecustomAlertOptions = {
            header: 'Select Address Type'
          };
          this.statecustomAlertOptions = {
            header: 'Select State'
          };
          this.lgacustomAlertOptions = {
            header: 'Select LGA'
          };
          this.towncustomAlertOptions = {
            header: 'Select Town'
          };
          this.busstopcustomAlertOptions = {
            header: 'Select Bus Stop'
          };
          this.streetcustomAlertOptions = {
            header: 'Select Street'
          };
          this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addresstype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            lga: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            busstop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            closeto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            housenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]
            }),
            postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            "default": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
          });
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetAddressTypes();
            this.GetStates();
          }
        }, {
          key: "GetAddressTypes",
          value: function GetAddressTypes() {
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
                      this.addressService.GetAddressTypes().subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.addresstypes = res.data;
                        } else {
                          _this.fun.presentToast(res.msg);
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
        }, {
          key: "GetStates",
          value: function GetStates() {
            var _this2 = this;

            this.addressService.GetStates().subscribe(function (res) {
              if (res.code === 200) {
                _this2.states = res.data;
              } else {
                _this2.fun.presentToast(res.msg);
              }
            }, function (error) {});
          }
        }, {
          key: "onSelectState",
          value: function onSelectState(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.addressService.GetLga(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this3.lgas = res.data;
                        } else {
                          _this3.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onSelectLga",
          value: function onSelectLga(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

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
                      this.addressService.GetTowns(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this4.towns = res.data;
                        } else {
                          _this4.fun.presentToast(res.msg);
                        }
                      }, function (error) {
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
          key: "onSelectTown",
          value: function onSelectTown(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

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
                      this.addressService.GetBusStops(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this5.busstops = res.data;
                          _this5.showbustop = true;
                        } else {
                          _this5.showbustop = false;
                          _this5.showstreet = false;
                        }
                      }, function (error) {
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
        }, {
          key: "onSelectBusStop",
          value: function onSelectBusStop(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

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
                      this.addressService.GetStreets(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this6.streets = res.data;
                          _this6.showstreet = true;
                        } else {
                          _this6.showstreet = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this7 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (this.addressForm.valid) {
                        _context6.next = 3;
                        break;
                      }

                      this.fun.presentToast('Wrong Input!');
                      return _context6.abrupt("return", false);

                    case 3:
                      if (!(this.addressForm.value.phone.length === 11)) {
                        _context6.next = 13;
                        break;
                      }

                      _context6.next = 6;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 6:
                      loading = _context6.sent;
                      _context6.next = 9;
                      return loading.present();

                    case 9:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.addressService.AddNewAddress(String(this.sid), String(this.addressForm.value.addresstype), this.addressForm.value.state, this.addressForm.value.lga, this.addressForm.value.town, this.addressForm.value.busstop, this.addressForm.value.street, this.addressForm.value.closeto, String(this.addressForm.value.housenumber), String(this.addressForm.value.phone), String(this.addressForm.value.postal), String(this.addressForm.value["default"])).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this7.router.navigate(['/', 'customerprofile', 'tabs', 'address']);

                          _this7.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});

                        _this7.fun.presentToast(error);
                      });
                      _context6.next = 14;
                      break;

                    case 13:
                      this.fun.presentToast('Phone must be 11 digits, start with 070xxxxxxxx!');

                    case 14:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return NewPage;
      }();

      NewPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_6__["FunctionsService"]
        }, {
          type: _services_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerprofile/address/new/new.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.page.scss */
        "./src/app/customerprofile/address/new/new.page.scss"))["default"]]
      })], NewPage);
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/new/new-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/sellersprofile/address/new/new-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function srcAppSellersprofileAddressNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
        return NewPageRoutingModule;
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


      var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/sellersprofile/address/new/new.page.ts");

      var routes = [{
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
      }];

      var NewPageRoutingModule = function NewPageRoutingModule() {
        _classCallCheck(this, NewPageRoutingModule);
      };

      NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/new/new.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/sellersprofile/address/new/new.module.ts ***!
      \**********************************************************/

    /*! exports provided: NewPageModule */

    /***/
    function srcAppSellersprofileAddressNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
        return NewPageModule;
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


      var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-routing.module */
      "./src/app/sellersprofile/address/new/new-routing.module.ts");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/sellersprofile/address/new/new.page.ts");

      var NewPageModule = function NewPageModule() {
        _classCallCheck(this, NewPageModule);
      };

      NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"]],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
      })], NewPageModule);
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/new/new.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/sellersprofile/address/new/new.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersprofileAddressNewNewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input {\n  border: 0.5px solid #d2d2d2;\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  padding-left: 1.2em !important;\n  padding-right: 1.2em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3Byb2ZpbGUvYWRkcmVzcy9uZXcvbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNwcm9maWxlL2FkZHJlc3MvbmV3L25ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMS4yZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjJlbSAhaW1wb3J0YW50O1xufVxuLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/sellersprofile/address/new/new.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/sellersprofile/address/new/new.page.ts ***!
      \********************************************************/

    /*! exports provided: NewPage */

    /***/
    function srcAppSellersprofileAddressNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPage", function () {
        return NewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../services/address.service */
      "./src/app/services/address.service.ts");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NewPage = /*#__PURE__*/function () {
        function NewPage(fun, addressService, loadingCtrl, router, authService) {
          _classCallCheck(this, NewPage);

          this.fun = fun;
          this.addressService = addressService;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.authService = authService;
          this.showbustop = true;
          this.showstreet = true;
          this.defaultcustomAlertOptions = {
            header: 'Select Default'
          };
          this.addresstypecustomAlertOptions = {
            header: 'Select Address Type'
          };
          this.statecustomAlertOptions = {
            header: 'Select State'
          };
          this.lgacustomAlertOptions = {
            header: 'Select LGA'
          };
          this.towncustomAlertOptions = {
            header: 'Select Town'
          };
          this.busstopcustomAlertOptions = {
            header: 'Select Bus Stop'
          };
          this.streetcustomAlertOptions = {
            header: 'Select Street'
          };
          this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addresstype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            lga: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            town: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            busstop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            closeto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            housenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]
            }),
            postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
          });
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetAddressTypes();
            this.GetStates();
          }
        }, {
          key: "GetAddressTypes",
          value: function GetAddressTypes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this8 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context7.sent;
                      _context7.next = 5;
                      return loading.present();

                    case 5:
                      this.addressService.GetAddressTypes().subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this8.addresstypes = res.data;
                        } else {
                          _this8.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "GetStates",
          value: function GetStates() {
            var _this9 = this;

            this.addressService.GetStates().subscribe(function (res) {
              if (res.code === 200) {
                _this9.states = res.data;
              } else {
                _this9.fun.presentToast(res.msg);
              }
            }, function (error) {});
          }
        }, {
          key: "onSelectState",
          value: function onSelectState(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this10 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context8.sent;
                      _context8.next = 5;
                      return loading.present();

                    case 5:
                      this.addressService.GetLga(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this10.lgas = res.data;
                        } else {
                          _this10.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "onSelectLga",
          value: function onSelectLga(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this11 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context9.sent;
                      _context9.next = 5;
                      return loading.present();

                    case 5:
                      this.addressService.GetTowns(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this11.towns = res.data;
                        } else {
                          _this11.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "onSelectTown",
          value: function onSelectTown(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this12 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context10.sent;
                      _context10.next = 5;
                      return loading.present();

                    case 5:
                      this.addressService.GetBusStops(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this12.busstops = res.data;
                          _this12.showbustop = true;
                        } else {
                          _this12.showbustop = false;
                          _this12.showstreet = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "onSelectBusStop",
          value: function onSelectBusStop(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this13 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context11.sent;
                      _context11.next = 5;
                      return loading.present();

                    case 5:
                      this.addressService.GetStreets(String(event.detail.value)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this13.streets = res.data;
                          _this13.showstreet = true;
                        } else {
                          _this13.showstreet = false;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this14 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(this.addressForm.value.phone.length === 11)) {
                        _context12.next = 10;
                        break;
                      }

                      _context12.next = 3;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 3:
                      loading = _context12.sent;
                      _context12.next = 6;
                      return loading.present();

                    case 6:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.addressService.AddNewAddress(String(this.sid), String(this.addressForm.value.addresstype), this.addressForm.value.state, this.addressForm.value.lga, this.addressForm.value.town, this.addressForm.value.busstop, this.addressForm.value.street, this.addressForm.value.closeto, String(this.addressForm.value.housenumber), String(this.addressForm.value.phone), String(this.addressForm.value.postal), String(1)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this14.router.navigate(['/', 'sellersprofile', 'tabs', 'address']);

                          _this14.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});

                        _this14.fun.presentToast(error);
                      });
                      _context12.next = 11;
                      break;

                    case 10:
                      this.fun.presentToast('Phone must be 11 digits, start with 070xxxxxxxx!');

                    case 11:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }]);

        return NewPage;
      }();

      NewPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_6__["FunctionsService"]
        }, {
          type: _services_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/address/new/new.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.page.scss */
        "./src/app/sellersprofile/address/new/new.page.scss"))["default"]]
      })], NewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=address-new-new-module-es5.js.map