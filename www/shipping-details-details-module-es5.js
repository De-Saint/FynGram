(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-details-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/details/details.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/details/details.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminusersShippingDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Name</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\"><strong>{{shipping?.name}}</strong></h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Phone</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.phone}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Interval</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.delivery_interval}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Email</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.email}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Date Added</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.date_added}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Fyngram Percentage</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.admin_shipping_percentage}} %</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Shipping Meth Percentage</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.shipping_method_percentage}} %</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Delivery/ies</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.number_of_delivery}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text>\n            <h6 class=\"title gray ion-no-margin\">Total Earnings</h6>\n          </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text>\n            <h6 class=\"title ion-no-margin\">{{shipping?.total_earnings | currency:'₦'}}</h6>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"card ion-margin-bottom ion-no-padding\">\n    <ion-col class=\"ion-justify-content-center\">\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onReset(shipping, 'reset')\">\n            <span class=\"white\">Reset Earning</span>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"danger\" class=\"ion-margin-top\" (click)=\"onDelete(shipping)\">\n            <span class=\"white\">Delete</span>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      \n    </ion-col>\n  </ion-item>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/details/details-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/adminusers/shipping/details/details-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function srcAppAdminusersShippingDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
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


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/adminusers/shipping/details/details.page.ts");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/details/details.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/adminusers/shipping/details/details.module.ts ***!
      \***************************************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function srcAppAdminusersShippingDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "./src/app/adminusers/shipping/details/details-routing.module.ts");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/adminusers/shipping/details/details.page.ts");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/details/details.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/adminusers/shipping/details/details.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminusersShippingDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  color: #5a5a5a !important;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\nimg {\n  width: 360px !important;\n  height: 225px !important;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.gray {\n  font-size: 15px;\n  color: #787878;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW51c2Vycy9zaGlwcGluZy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtBQUVKOztBQUFFO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUdKOztBQURFO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7QUFRSjs7QUFORTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQVNKOztBQVBFO0VBQ0UsV0FBQTtBQVVKOztBQVJFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFXSjs7QUFURTtFQUNFLGlCQUFBO0FBWUo7O0FBVkU7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFhSjs7QUFYRTtFQUNFLGVBQUE7QUFjSjs7QUFaRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBZUo7O0FBYkU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFnQko7O0FBZEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFpQko7O0FBZkU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWtCSjs7QUFoQkU7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQW1CSjs7QUFqQkU7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQW9CSjs7QUFsQkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFxQko7O0FBbEJFO0VBQ0UsZUFBQTtBQXFCSiIsImZpbGUiOiJzcmMvYXBwL2FkbWludXNlcnMvc2hpcHBpbmcvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2R1Y3QtaW1hZ2Utb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNzUlLCB3aGl0ZSAxMDAlKTtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAzNjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjI1cHggIWltcG9ydGFudDtcbiAgfVxuICAuYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbWluLXdpZHRoOiA0NXB4O1xuICAgIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgei1pbmRleDogOTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAwLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmdyYXkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICB9XG4gIC5zdWIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY3V0IHtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB9XG4gIC5ibHVlIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuICAuc2VwIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogNnB4IDA7XG4gIH1cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44MWVtO1xuICB9XG4gIC5zZWxlY3Qge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICB9XG4gIGRpdiB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG4gIC5pdGVtLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiByZ2IoMTIsIDEyLCAxMik7XG4gIH1cbiAgLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjgxZW07XG4gIH1cbiAgLml0ZW0tZGVmIHtcbiAgICBmb250LXNpemU6IDAuODFlbTtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICB9XG4gIC5jb250YWluZXItb3V0ZXIge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuICAuY29udGFpbmVyLWlubmVyIHtcbiAgICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5zcG9uLWltZyB7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDNweDtcbiAgfVxuICAudGV4dC10cnVuY2F0ZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIFxuICAuc21hbGwtaWNvIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/details/details.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/adminusers/shipping/details/details.page.ts ***!
      \*************************************************************/

    /*! exports provided: DetailsPage */

    /***/
    function srcAppAdminusersShippingDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
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


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(route, router, fun, authService, loadingCtrl) {
          _classCallCheck(this, DetailsPage);

          this.route = route;
          this.router = router;
          this.fun = fun;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('shippingId')) {
                return false;
              }

              _this.shippingId = paramMap.get('shippingId');

              _this.GetShippingDetails(_this.shippingId);
            });
          }
        }, {
          key: "GetShippingDetails",
          value: function GetShippingDetails(shippingId) {
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
                      this.authService.GetShippingDetails(String(shippingId)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.shipping = res.data;
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
          key: "onDelete",
          value: function onDelete(shipping) {
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
                      this.fun.removeConform('shipping method').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this4 = this;

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
                                  this.authService.DeleteShipping(String(shipping.id)).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this4.fun.presentToast(res.msg);

                                      _this4.router.navigate(['/', 'adminusers', 'tabs', 'shippings']);
                                    } else {
                                      _this4.fun.presentToast(res.msg);
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
        }, {
          key: "onReset",
          value: function onReset(shipping, option) {
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
                      this.fun.processRequest(option, 'shipping method').then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this6 = this;

                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!(res === 'ok')) {
                                    _context4.next = 4;
                                    break;
                                  }

                                  _context4.next = 3;
                                  return loading.present();

                                case 3:
                                  this.authService.ResetShipping(String(shipping.id)).subscribe(function (res) {
                                    loading.dismiss()["catch"](function () {});

                                    if (res.code === 200) {
                                      _this6.fun.presentToast(res.msg);

                                      _this6.GetShippingDetails(_this6.shippingId);
                                    } else {
                                      _this6.fun.presentToast(res.msg);
                                    }
                                  }, function (error) {
                                    loading.dismiss()["catch"](function () {});
                                  });

                                case 4:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/details/details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details.page.scss */
        "./src/app/adminusers/shipping/details/details.page.scss"))["default"]]
      })], DetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shipping-details-details-module-es5.js.map