(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["related-related-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/related/related.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/related/related.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeBuyProductdetailsRelatedRelatedPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card class=\"card ion-no-margin\"  (click)=\"open('data')\">\n        <ion-badge class=\"badge\" >data.discount}}%</ion-badge>\n        <!-- <img [src]=\"data.image[0]\" [alt]=\"data.name\"> -->\n        <ion-card-content>\n          <ion-card-title>\n            <ion-row>\n              <ion-col  class=\"ion-no-padding\">\n                <ion-text class=\"ion-text-left\"><span class=\"price\"><span class=\"inline\">data.currency}}data.cost_price}}</span> <strong>data.currency}}</strong></span></ion-text>\n              </ion-col>\n              <ion-col  class=\"ion-no-padding\">\n                <ion-text class=\"ion-text-left\"><span class=\"price\"><strong>data.currency}}data.cost_price}}</strong></span></ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ion-text-left ion-no-padding\">\n                <h6  class=\"subtitle ion-text-left\">data.bought}}+ bought this</h6>\n              </ion-col>\n            </ion-row>\n          </ion-card-title>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <!-- <ion-col *ngFor=\"let data of products;\" size=\"6\">\n      <ion-card class=\"card ion-no-margin\"  (click)=\"open(data)\">\n        <ion-badge class=\"badge\" *ngIf=\"data.offer\">{{data.discount}}%</ion-badge>\n        <img [src]=\"data.image[0]\" [alt]=\"data.name\">\n        <ion-card-content>\n          <ion-card-title>\n            <ion-row>\n              <ion-col *ngIf=\"data.offer\" class=\"ion-no-padding\">\n                <ion-text class=\"ion-text-left\"><span class=\"price\"><span class=\"inline\">{{data.currency}}{{data.cost_price}}</span> <strong>{{data.currency}}{{fun.calculate(data.cost_price, data.discount)}}</strong></span></ion-text>\n              </ion-col>\n              <ion-col *ngIf=\"!data.offer\" class=\"ion-no-padding\">\n                <ion-text class=\"ion-text-left\"><span class=\"price\"><strong>{{data.currency}}{{data.cost_price}}</strong></span></ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ion-text-left ion-no-padding\">\n                <h6  class=\"subtitle ion-text-left\">{{data.bought}}+ bought this</h6>\n              </ion-col>\n            </ion-row>\n          </ion-card-title>\n        </ion-card-content>\n      </ion-card>\n    </ion-col> -->\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/related/related-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/home/buy/productdetails/related/related-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: RelatedPageRoutingModule */

    /***/
    function srcAppHomeBuyProductdetailsRelatedRelatedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatedPageRoutingModule", function () {
        return RelatedPageRoutingModule;
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


      var _related_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./related.page */
      "./src/app/home/buy/productdetails/related/related.page.ts");

      var routes = [{
        path: '',
        component: _related_page__WEBPACK_IMPORTED_MODULE_3__["RelatedPage"]
      }];

      var RelatedPageRoutingModule = function RelatedPageRoutingModule() {
        _classCallCheck(this, RelatedPageRoutingModule);
      };

      RelatedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RelatedPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/related/related.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/home/buy/productdetails/related/related.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RelatedPageModule */

    /***/
    function srcAppHomeBuyProductdetailsRelatedRelatedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatedPageModule", function () {
        return RelatedPageModule;
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


      var _related_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./related-routing.module */
      "./src/app/home/buy/productdetails/related/related-routing.module.ts");
      /* harmony import */


      var _related_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./related.page */
      "./src/app/home/buy/productdetails/related/related.page.ts");

      var RelatedPageModule = function RelatedPageModule() {
        _classCallCheck(this, RelatedPageModule);
      };

      RelatedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _related_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatedPageRoutingModule"]],
        declarations: [_related_page__WEBPACK_IMPORTED_MODULE_6__["RelatedPage"]]
      })], RelatedPageModule);
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/related/related.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/home/buy/productdetails/related/related.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeBuyProductdetailsRelatedRelatedPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9idXkvcHJvZHVjdGRldGFpbHMvcmVsYXRlZC9yZWxhdGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYnV5L3Byb2R1Y3RkZXRhaWxzL3JlbGF0ZWQvcmVsYXRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5pbmxpbmUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbn1cbi5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTIsIDEyLCAuNzUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/related/related.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/home/buy/productdetails/related/related.page.ts ***!
      \*****************************************************************/

    /*! exports provided: RelatedPage */

    /***/
    function srcAppHomeBuyProductdetailsRelatedRelatedPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatedPage", function () {
        return RelatedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../functions.service */
      "./src/app/functions.service.ts");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../data.service */
      "./src/app/data.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RelatedPage = /*#__PURE__*/function () {
        function RelatedPage(fun, dataService) {
          _classCallCheck(this, RelatedPage);

          this.fun = fun;
          this.dataService = dataService;
          this.products = dataService.current_product;
        }

        _createClass(RelatedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "open",
          value: function open(data) {
            this.fun.update(data); // this.nav.navigateForward('/productdetail');
          }
        }]);

        return RelatedPage;
      }();

      RelatedPage.ctorParameters = function () {
        return [{
          type: _functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      };

      RelatedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-related',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./related.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/related/related.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./related.page.scss */
        "./src/app/home/buy/productdetails/related/related.page.scss"))["default"]]
      })], RelatedPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=related-related-module-es5.js.map