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


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucHJvZmlsZS9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MifQ== */";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage() {
          _classCallCheck(this, MessagesPage);
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycHJvZmlsZS9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MifQ== */";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage() {
          _classCallCheck(this, MessagesPage);
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNwcm9maWxlL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJ9 */";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage() {
          _classCallCheck(this, MessagesPage);
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messages.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersprofile/messages/messages.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messages.page.scss */
        "./src/app/sellersprofile/messages/messages.page.scss"))["default"]]
      })], MessagesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=messages-messages-module-es5.js.map