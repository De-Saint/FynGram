(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-productdetails-productdetails-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/productdetails.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/productdetails.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeBuyProductdetailsProductdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar mode=\"ios\" slot=\"top\" class=\"ion-text-xl-center\">\n    <ion-tab-button>\n      <ion-back-button class=\"ion-text-small\" color=\"light\" [defaultHref]=\"'/home/tabs/category/products/1'\" >\n      </ion-back-button>\n    </ion-tab-button>\n    <ion-tab-button tab=\"overview\">\n      <ion-label>Overview</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"related\">\n      <ion-label>Related</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"review\">\n      <ion-label>Reviews</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/productdetails-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/home/buy/productdetails/productdetails-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ProductdetailsPageRoutingModule */

    /***/
    function srcAppHomeBuyProductdetailsProductdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductdetailsPageRoutingModule", function () {
        return ProductdetailsPageRoutingModule;
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


      var _productdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./productdetails.page */
      "./src/app/home/buy/productdetails/productdetails.page.ts");

      var routes = [{
        path: 'tabs',
        component: _productdetails_page__WEBPACK_IMPORTED_MODULE_3__["ProductdetailsPage"],
        children: [{
          path: 'overview',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | overview-overview-module */
              "overview-overview-module").then(__webpack_require__.bind(null,
              /*! ./overview/overview.module */
              "./src/app/home/buy/productdetails/overview/overview.module.ts")).then(function (m) {
                return m.OverviewPageModule;
              });
            }
          }]
        }, {
          path: 'related',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | related-related-module */
              "related-related-module").then(__webpack_require__.bind(null,
              /*! ./related/related.module */
              "./src/app/home/buy/productdetails/related/related.module.ts")).then(function (m) {
                return m.RelatedPageModule;
              });
            }
          }]
        }, {
          path: 'review',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | review-review-module */
              "review-review-module").then(__webpack_require__.bind(null,
              /*! ./review/review.module */
              "./src/app/home/buy/productdetails/review/review.module.ts")).then(function (m) {
                return m.ReviewPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/home/tabs/buy/productdetails/tabs/overview',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/home/tabs/buy/productdetails/tabs/overview',
        pathMatch: 'full'
      }];

      var ProductdetailsPageRoutingModule = function ProductdetailsPageRoutingModule() {
        _classCallCheck(this, ProductdetailsPageRoutingModule);
      };

      ProductdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductdetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/productdetails.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/home/buy/productdetails/productdetails.module.ts ***!
      \******************************************************************/

    /*! exports provided: ProductdetailsPageModule */

    /***/
    function srcAppHomeBuyProductdetailsProductdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductdetailsPageModule", function () {
        return ProductdetailsPageModule;
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


      var _productdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./productdetails-routing.module */
      "./src/app/home/buy/productdetails/productdetails-routing.module.ts");
      /* harmony import */


      var _productdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./productdetails.page */
      "./src/app/home/buy/productdetails/productdetails.page.ts");

      var ProductdetailsPageModule = function ProductdetailsPageModule() {
        _classCallCheck(this, ProductdetailsPageModule);
      };

      ProductdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _productdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductdetailsPageRoutingModule"]],
        declarations: [_productdetails_page__WEBPACK_IMPORTED_MODULE_6__["ProductdetailsPage"]]
      })], ProductdetailsPageModule);
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/productdetails.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/home/buy/productdetails/productdetails.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeBuyProductdetailsProductdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".white {\n  color: white !important;\n}\n\n.slide {\n  width: 100%;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white !important;\n  text-decoration: none;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 21px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.light-bg {\n  background: #f4f5f8;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.cut {\n  text-decoration: line-through;\n  display: inline-block;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.foot-highlight {\n  color: orange;\n  display: inline-block;\n  margin: auto;\n  margin-left: 9px;\n}\n\n.footer {\n  background-color: #0c0c0c;\n  color: #d2d2d2;\n}\n\n.foot-btn {\n  width: 100%;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9idXkvcHJvZHVjdGRldGFpbHMvcHJvZHVjdGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtBQUdKOztBQUZJO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQUlSOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0FBT0o7O0FBTEE7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtBQVdKOztBQVRBO0VBQ0ksdUJBQUE7QUFZSjs7QUFWQTtFQUNJLGtCQUFBO0FBYUo7O0FBWkk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWNSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9idXkvcHJvZHVjdGRldGFpbHMvcHJvZHVjdGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbiAgICBpb24tdGV4dHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbn1cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubGlnaHQtYmd7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbn1cbi5teS1idG57XG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG4uaG9yLXNjcm9sbHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG4uY3V0IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmZvb3QtaGlnaGxpZ2h0IHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgICBjb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZvb3QtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiNkYWd7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uc2VnbWVudHRvb2xiYXJTZWN0aW9ue1xuICAgIC0tbWluLWhlaWdodDogMzBweDtcbiAgICAuc2VnU2VjdGlvbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/buy/productdetails/productdetails.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/home/buy/productdetails/productdetails.page.ts ***!
      \****************************************************************/

    /*! exports provided: ProductdetailsPage */

    /***/
    function srcAppHomeBuyProductdetailsProductdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductdetailsPage", function () {
        return ProductdetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../data.service */
      "./src/app/data.service.ts");
      /* harmony import */


      var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../functions.service */
      "./src/app/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProductdetailsPage = /*#__PURE__*/function () {
        function ProductdetailsPage(fun, dataService) {
          _classCallCheck(this, ProductdetailsPage);

          this.fun = fun;
          this.dataService = dataService;
          this.index = 0;
          this.segment = '';
          this.slideOpts = {
            effect: 'flip',
            zoom: false
          };
          this.data = [];
          this.product = dataService.current_product;
          this.data = dataService.item_tab;
          this.segment = this.data[0].title;
        }

        _createClass(ProductdetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "change",
          value: function change() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.slides.getActiveIndex().then(function (d) {
                        return _this.index = d;
                      });

                    case 2:
                      this.segment = this.data[this.index].title;
                      this.drag();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onReviewClick",
          value: function onReviewClick(index) {
            this.segment = this.data[index].title;
            this.index = index;
            this.slides.slideTo(index);
            this.content.scrollToTop();
            this.drag();
          }
        }, {
          key: "goToCart",
          value: function goToCart() {
            this.fun.navigate('cart', false);
          }
        }, {
          key: "update",
          value: function update(i) {
            this.slides.slideTo(i);
          }
        }, {
          key: "drag",
          value: function drag() {
            var distanceToScroll = 0;

            for (var index in this.data) {
              if (parseInt(index) < this.index) {
                distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24;
              }
            }

            document.getElementById('dag').scrollLeft = distanceToScroll;
          }
        }, {
          key: "seg",
          value: function seg(event) {
            this.segment = event.detail.value;
          }
        }]);

        return ProductdetailsPage;
      }();

      ProductdetailsPage.ctorParameters = function () {
        return [{
          type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      };

      ProductdetailsPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['Slides']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['Content']
        }],
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slider']
        }]
      };
      ProductdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-productdetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./productdetails.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/productdetails.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./productdetails.page.scss */
        "./src/app/home/buy/productdetails/productdetails.page.scss"))["default"]]
      })], ProductdetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=buy-productdetails-productdetails-module-es5.js.map