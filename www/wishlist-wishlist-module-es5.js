(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerordersWishlistWishlistPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Wishlist</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <button class=\"circle\">\n        <ion-icon name=\"cart\" size=\"large\"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-text><strong>Your wishlist is empty</strong></ion-text>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-button fill=\"clear\" color=\"mytheme\" (click)=\"browse()\">Continue Browsing</ion-button>\n    </ion-row>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-row class=\"ion-justify-content-center ion-margin-horizontal ion-margin-bottom ion-padding-top\">\n      <ion-text><strong class=\"text ion-text-center\">Item(s) in Wishlist {{wishlists?.product_count}}</strong>\n      </ion-text>\n    </ion-row>\n    <ion-list #slidingList>\n      <ion-item-sliding *ngFor=\"let item of wishdetails\" class=\"card ion-no-padding ion-no-margin\">\n        <ion-item lines=\"none\">\n          <ion-grid>\n            <ion-row class=\"container-outer\">\n              <ion-col size=\"3\" class=\"ion-text-center container-inner\">\n                <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+item.ProductDetails.FirstImage\" alt=\"\">\n                <ion-text color=\"danger\" class=\"small\" (click)=\"remove(item)\">Remove</ion-text>\n              </ion-col>\n              <ion-col size=\"6\" auto>\n                <h3 class=\"item-name ion-no-margin\">{{item.ProductDetails.InfoDetails?.name}}</h3>\n                <h5 class=\"item-def ion-no-margin\">Quantity:<strong><ion-text color=\"mytheme\">{{item.product_quantity}}</ion-text></strong></h5>\n                <h5 class=\"item-def ion-no-margin\">Price:\n                  {{ item.ProductDetails.PriceDetails?.selling_price | currency:'₦' }}</h5>\n                <h5 class=\"item-def ion-no-margin text-truncate\" style=\"max-width: 7.5em;\">\n                  {{item.ProductDetails.SellerDetails?.SellerUserName}}</h5>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-end\">\n                <ion-row class=\"ion-text-end ion-justify-content-end\">\n                  <h3 class=\"item-name ion-no-margin ion-text-end\">\n                    {{item.ProductDetails.PriceDetails?.selling_price | currency:'₦'}}\n                  </h3>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-end\">\n                  <ion-text color=\"mytheme\" class=\"small\" (click)=\"details(item)\">Detail</ion-text>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"remove(item)\">\n            <ion-icon name=\"trash\" size=\"large\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list> \n    <ion-row size=\"12\" class=\"ion-justify-content-center ion-margin-top\" disabled=\"true\">\n      <ion-button fill=\"outline\" color=\"mytheme\" (click)=\"browse()\">Continue Shopping</ion-button>\n    </ion-row>\n    <ion-row class=\"ion-margin\">\n      <ion-text><strong class=\"text\">WishList Summary</strong></ion-text>\n    </ion-row>\n    <div lines=\"none\" class=\"card ion-no-margin ion-padding-bottom\">\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Item Total</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text>{{wishlists?.amount | currency:'₦' }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Date</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text>{{wishlists?.date}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div> \n  </div> \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: WishlistPageRoutingModule */

    /***/
    function srcAppCustomerordersWishlistWishlistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function () {
        return WishlistPageRoutingModule;
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


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/customerorders/wishlist/wishlist.page.ts");

      var routes = [{
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
      }];

      var WishlistPageRoutingModule = function WishlistPageRoutingModule() {
        _classCallCheck(this, WishlistPageRoutingModule);
      };

      WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WishlistPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist.module.ts ***!
      \************************************************************/

    /*! exports provided: WishlistPageModule */

    /***/
    function srcAppCustomerordersWishlistWishlistModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function () {
        return WishlistPageModule;
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


      var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wishlist-routing.module */
      "./src/app/customerorders/wishlist/wishlist-routing.module.ts");
      /* harmony import */


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/customerorders/wishlist/wishlist.page.ts");

      var WishlistPageModule = function WishlistPageModule() {
        _classCallCheck(this, WishlistPageModule);
      };

      WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
      })], WishlistPageModule);
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerordersWishlistWishlistPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".white {\n  color: white;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.input {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  font-size: 0.9em !important;\n  padding-left: 1.2em !important;\n}\n\n.pad {\n  padding: 0 6px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n\n.full {\n  width: 100%;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7QUFRSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBU0o7O0FBUEE7RUFDSSxpQkFBQTtBQVVKOztBQVJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLGVBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7QUFlSjs7QUFiQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQWdCSjs7QUFkQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBaUJKOztBQWZFO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFrQko7O0FBaEJFO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFtQko7O0FBakJFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBb0JKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY2lyY2xle1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMS4yZW0gIWltcG9ydGFudDtcbn1cbi5wYWQge1xuICAgIHBhZGRpbmc6IDAgNnB4O1xufVxuLm1pZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG4uZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY3V0e1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uYmx1ZXtcbiAgICBjb2xvcjogYmx1ZTtcbn1cbi5zZXAge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiA2cHggMDtcbn1cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IC44MWVtO1xufVxuLnNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cbmRpdntcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG4uaXRlbS1uYW1lIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAuODFlbTtcbn1cbi5pdGVtLWRlZiB7XG4gICAgZm9udC1zaXplOiAuODFlbTtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLmNvbnRhaW5lci1vdXRlciB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIC5jb250YWluZXItaW5uZXIge1xuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNwb24taW1nIHtcbiAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogM3B4O1xuICB9XG4gIC50ZXh0LXRydW5jYXRlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/customerorders/wishlist/wishlist.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/customerorders/wishlist/wishlist.page.ts ***!
      \**********************************************************/

    /*! exports provided: WishlistPage */

    /***/
    function srcAppCustomerordersWishlistWishlistPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPage", function () {
        return WishlistPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../home/service/shop.service */
      "./src/app/home/service/shop.service.ts");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WishlistPage = /*#__PURE__*/function () {
        function WishlistPage(loadingCtrl, fun, router, authService, shopService) {
          _classCallCheck(this, WishlistPage);

          this.loadingCtrl = loadingCtrl;
          this.fun = fun;
          this.router = router;
          this.authService = authService;
          this.shopService = shopService;
          this.show = true;
        }

        _createClass(WishlistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetShopSavedItems(this.sid);
          }
        }, {
          key: "GetShopSavedItems",
          value: function GetShopSavedItems(sid) {
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
                      this.shopService.GetShopSavedItems(sid).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.wishlists = res.data;
                          _this.wishdetails = _this.wishlists.WishListProductDetails;
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
          key: "browse",
          value: function browse() {
            this.fun.navigate('/home', false);
          }
        }, {
          key: "remove",
          value: function remove(wishlist) {
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
                      this.fun.removeConform('product').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this3 = this;

                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context2.next = 5;
                                    break;
                                  }

                                  this.slidingList.closeSlidingItems();
                                  _context2.next = 4;
                                  return loading.present();

                                case 4:
                                  this.shopService.DeleteOption('SavedItems', String(wishlist.id), wishlist.ProductDetails.id).subscribe(function (resp) {
                                    loading.dismiss()["catch"](function () {});

                                    if (resp.code === 200) {
                                      _this3.fun.presentToast(resp.msg);

                                      _this3.sid = _this3.authService.currentUserDataValue.sid;

                                      _this3.GetShopSavedItems(_this3.sid);
                                    } else {
                                      _this3.fun.presentToast(resp.msg);
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 5:
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
        }, {
          key: "details",
          value: function details(wishlist) {
            this.fun.setNavLink('wishlist');
            this.router.navigate(['/', 'customerorders', 'tabs', 'wishlist', 'products', 'details', wishlist.ProductDetails.id]);
          }
        }]);

        return WishlistPage;
      }();

      WishlistPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]
        }];
      };

      WishlistPage.propDecorators = {
        slidingList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ['slidingList']
        }]
      };
      WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wishlist.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wishlist.page.scss */
        "./src/app/customerorders/wishlist/wishlist.page.scss"))["default"]]
      })], WishlistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=wishlist-wishlist-module-es5.js.map