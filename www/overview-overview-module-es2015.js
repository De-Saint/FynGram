(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overview-overview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/overview/overview.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/overview/overview.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let i of product.image;\">\n            <img class=\"image\" [src]=\"i\">\n            <div class=\"product-image-overlay\"></div>\n          </ion-slide>\n        </ion-slides>\n        <ion-badge class=\"badge\">\n          <ion-icon name=\"images\"></ion-icon>{{product.image.length}}\n        </ion-badge>\n       <ion-row class=\"hover-buttons ion-justify-content-end\">\n          <ion-icon *ngIf=\"!liked\" size=\"small\" name=\"heart-empty\" class=\"fab ion-float-right\" (click)=\"like()\"></ion-icon>\n          <ion-icon *ngIf=\"liked\" size=\"small\" name=\"heart\" class=\"fab red ion-float-right\" (click)=\"like()\"></ion-icon>\n        </ion-row> \n      </ion-col>\n    </ion-row>\n    <div class=\"ion-padding\">\n  \n      <ion-row lines=\"none\" class=\"row\">\n        <ion-text class=\"name\">{{product.name}}</ion-text>\n      </ion-row>\n      <ion-row>\n        <ion-icon name=\"star\" color=\"mytheme\" *ngFor=\"let i of onOpen(product.rating)\"></ion-icon>\n        <ion-icon name=\"star-outline\" color=\"mytheme\" *ngFor=\"let i of onOpen(5-product.rating)\"></ion-icon>\n        <h6  class=\"rate ion-no-margin ion-padding-start\">({{product.store_rating}} store ratings)</h6>\n      </ion-row>\n      \n     \n      <div class=\"sep\"></div>\n      <ion-row class=\"full info\">\n        <ion-row>\n          <ion-col><strong>Sizing</strong></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <h6 class=\"ion-no-margin\">Too Small</h6>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"progress-outer\">\n              <div class=\"progress-inner\" [ngStyle]=\"{'width': product.sizing.small+'%'}\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <h6 class=\"ion-no-margin\">Just Right</h6>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"progress-outer\">\n              <div class=\"progress-inner\" [ngStyle]=\"{'width': product.sizing.okay+'%'}\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <h6 class=\"ion-no-margin\">Too Large</h6>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"progress-outer\">\n              <div class=\"progress-inner\" [ngStyle]=\"{'width': product.sizing.large+'%'}\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-row>\n      <div class=\"sep\"></div>\n      <div>\n        <ion-text><span class=\"ion-float-left ion-no-margin\"><strong>Sold By</strong></span></ion-text><br>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-avatar class=\"avatar\"><img [src]=\"product.image[0]\"></ion-avatar>\n          </ion-col>\n          <ion-col>\n            <ion-text><span  class=\"ion-float-left ion-no-margin\">{{product.sold_by}}</span></ion-text><br>\n            <ion-text>\n              <h6  class=\"ion-float-left ion-no-margin\">{{product.store_rating}} ratings</h6>\n            </ion-text><br>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"sep\"></div>\n      <ion-list lines=\"none\">\n        <ion-row class=\"full info\" (click)=\"toogle(0)\">\n          <ion-col size=\"9\">\n            <strong class=\"ion-float-left\">Item Specification</strong>\n          </ion-col>\n          <ion-col>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[0]\"></ion-icon>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[0]\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"full ion-margin-top\"  *ngIf=\"open[0]\">\n          <ion-col>\n            <span class=\"float-left\">{{product.specs}}</span>\n          </ion-col>\n        </ion-row>\n        <div class=\"sep\"></div>\n        <ion-row class=\"full info\" (click)=\"toogle(1)\">\n          <ion-col size=\"9\">\n            <strong class=\"ion-float-left\">Description</strong>\n          </ion-col>\n          <ion-col>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[1]\"></ion-icon>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[1]\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"full ion-margin-top\"  *ngIf=\"open[1]\">\n          <ion-col>\n            <span class=\"ion-float-left\">{{product.description}}</span>\n          </ion-col>\n        </ion-row>\n        <div class=\"sep\"></div>\n        <ion-row class=\"full info\" (click)=\"toogle(2)\">\n          <ion-col size=\"9\">\n            <strong class=\"ion-float-left\">Buyer Guarantee</strong>\n          </ion-col>\n          <ion-col>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[2]\"></ion-icon>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[2]\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\" *ngIf=\"open[2]\">\n          <ion-col>\n            <span class=\"ion-float-left\">{{product.buyer_guarantee}}</span>\n          </ion-col>\n        </ion-row>\n        <div class=\"sep\"></div>\n        <ion-row class=\"full info\" (click)=\"toogle(3)\">\n          <ion-col size=\"9\">\n            <strong class=\"ion-float-left\">Shipping Information</strong>\n          </ion-col>\n          <ion-col>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-down-circle-outline\" *ngIf=\"!open[3]\"></ion-icon>\n            <ion-icon class=\"ion-float-right\" name=\"chevron-up-circle-outline\" *ngIf=\"open[3]\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"full\" class=\"ion-margin-top\" *ngIf=\"open[3]\">\n          <ion-col>\n            <span class=\"ion-float-left\"><strong>Standard Shipping</strong> {{product.currency}}{{product.shipping}}</span>\n          </ion-col>\n        </ion-row>\n        <!-- <div class=\"sep\"></div> -->\n        <div *ngFor=\"let spon of product.sponsored\">\n        <!-- <div (touchstart)=\"remove()\" (touchend)=\"gainback()\" *ngFor=\"let spon of product.sponsored\"> -->\n          <ion-text>\n            <h5 class=\"ion-no-margin\" ><strong>Sponsored</strong></h5>\n          </ion-text>\n          <ion-row>\n            <ion-row class=\"container-outer\">\n              <div class=\"container-inner\">\n              <!-- <div  (click)=\"open_item(data)\" class=\"container-inner\"> -->\n                <img [src]=\"spon.image[0]\" class=\"spon-img\">\n                <ion-row>\n                  <ion-col *ngIf=\"spon.offer\" class=\"ion-no-padding\">\n                    <ion-text>\n                      <h4 class=\"price\"><span class=\"inline\">{{spon.currency}}{{spon.cost_price}}</span> \n                        <strong>{{spon.currency}}{{onCompute(spon.cost_price, spon.discount)}}</strong></h4>\n                    </ion-text>\n                  </ion-col>\n                  <ion-col *ngIf=\"!spon.offer\" class=\"ion-no-padding\">\n                    <ion-text>\n                      <h4 class=\"price\"><strong>{{spon.currency}}{{spon.cost_price}}</strong></h4>\n                    </ion-text>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-row>\n          </ion-row>\n        </div>\n  \n        <div class=\"sep\"></div>\n        <ion-row class=\"full info\">\n          <ion-row>\n            <ion-col><strong>Recent Reviews</strong></ion-col>\n          </ion-row>\n          <div *ngFor=\"let review of product.reviews\">\n            <ion-row>\n              <ion-col size=\"2\">\n                <ion-avatar class=\"avatar\"><img [src]=\"review.image\"></ion-avatar>\n              </ion-col>\n              <ion-col>\n                <ion-row class=\"full\">\n                  <ion-icon  name=\"star\" class=\"small-ico ion-float-right\" color=\"mytheme\" *ngFor=\"let i of fun.array(review.rating)\"></ion-icon>\n                  <ion-icon  name=\"star-outline\" class=\"small-ico ion-float-right\" color=\"mytheme\" *ngFor=\"let i of fun.array(5-review.rating)\"></ion-icon>\n                  <h6 class=\"ion-float-left ion-text-start ion-no-margin\"><strong>{{review.name}}</strong></h6><br>\n                </ion-row>\n                <ion-row class=\"full\">\n                  <h6  class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{review.comment}}</h6><br>\n                  <img *ngFor=\"let img of review.images\" [src]=\"img\" class=\"rev-img ion-float-left\">\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-row>\n  \n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/buy/productdetails/overview/overview-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/buy/productdetails/overview/overview-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OverviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageRoutingModule", function() { return OverviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.page */ "./src/app/home/buy/productdetails/overview/overview.page.ts");




const routes = [
    {
        path: '',
        component: _overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPage"]
    }
];
let OverviewPageRoutingModule = class OverviewPageRoutingModule {
};
OverviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OverviewPageRoutingModule);



/***/ }),

/***/ "./src/app/home/buy/productdetails/overview/overview.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/buy/productdetails/overview/overview.module.ts ***!
  \*********************************************************************/
/*! exports provided: OverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function() { return OverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview-routing.module */ "./src/app/home/buy/productdetails/overview/overview-routing.module.ts");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview.page */ "./src/app/home/buy/productdetails/overview/overview.page.ts");







let OverviewPageModule = class OverviewPageModule {
};
OverviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__["OverviewPageRoutingModule"]
        ],
        declarations: [_overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]]
    })
], OverviewPageModule);



/***/ }),

/***/ "./src/app/home/buy/productdetails/overview/overview.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/buy/productdetails/overview/overview.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\n.hover-buttons {\n  position: absolute;\n  bottom: -10px;\n  z-index: 10;\n  right: 15px;\n}\n\n.red {\n  color: red;\n}\n\n.price {\n  font-size: 15px;\n  float: left;\n  width: 100% !important;\n  text-align: center !important;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 12px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.row {\n  margin: 5px;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.progress-outer {\n  width: 96%;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n}\n\n.progress-inner {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: var(--ion-color-mytheme);\n}\n\n.info {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.name {\n  font-size: 18px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n  transform: translateX(-16px);\n}\n\n.fab {\n  width: 25px;\n  height: 25px;\n  padding: 9px;\n  border-radius: 25px;\n  margin-left: 6px;\n  border: 0.6px solid rgba(0, 0, 0, 0.3);\n  background-color: white !important;\n}\n\n.rate {\n  color: var(--ion-color-mytheme) !important;\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9idXkvcHJvZHVjdGRldGFpbHMvb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FBRko7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUFBO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxlQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWVKOztBQWJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQWdCSjs7QUFkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0FBaUJKOztBQWZBO0VBQ0ksMENBQUE7RUFDQSxlQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBbUJKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9idXkvcHJvZHVjdGRldGFpbHMvb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcbiAgICAvLyBoZWlnaHQ6IDI3MHB4O1xufVxuLnByb2R1Y3QtaW1hZ2Utb3ZlcmxheXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA3NSUsd2hpdGUgMTAwJSk7XG59XG4uaG92ZXItYnV0dG9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICByaWdodDogMTVweDtcbn1cbi5yZWR7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5wcmljZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uaW5saW5lIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDhweCA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jbW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ucmV2LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4ucm93IHtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5zcG9uLWltZyB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY29udGFpbmVyLW91dGVyIHsgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXItaW5uZXIgeyBcbiAgICBtaW4td2lkdGg6IDEyMHB4OyBcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnByb2dyZXNzLW91dGVyIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5wcm9ncmVzcy1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn1cbi5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLnNlcCB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDZweCAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7XG59XG4uZmFiIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBib3JkZXI6IC42cHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5yYXRlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/buy/productdetails/overview/overview.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/buy/productdetails/overview/overview.page.ts ***!
  \*******************************************************************/
/*! exports provided: OverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPage", function() { return OverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let OverviewPage = class OverviewPage {
    constructor(fun, dataService) {
        this.fun = fun;
        this.dataService = dataService;
        this.slideOpts = {
            effect: 'flip'
        };
        this.open = [false, false, false, false];
        this.liked = false;
        this.product = this.dataService.current_product;
    }
    ngOnInit() {
    }
    toogle(i) {
        this.open[i] = !this.open[i];
    }
    like() {
        console.log('like');
        this.liked = !this.liked;
    }
    onOpen(option) {
        this.fun.array(option);
    }
    onCompute(cost_price, discount) {
        this.fun.calculate(cost_price, discount);
    }
};
OverviewPage.ctorParameters = () => [
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
OverviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-overview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./overview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/productdetails/overview/overview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./overview.page.scss */ "./src/app/home/buy/productdetails/overview/overview.page.scss")).default]
    })
], OverviewPage);



/***/ })

}]);
//# sourceMappingURL=overview-overview-module-es2015.js.map