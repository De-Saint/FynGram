(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <button class=\"circle\">\n        <ion-icon name=\"cart\" size=\"large\"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-text><strong>Your cart is empty</strong></ion-text>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-button fill=\"clear\" color=\"mytheme\" (click)=\"browse()\">Browse Products</ion-button>\n    </ion-row>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-row class=\"ion-justify-content-center ion-margin-horizontal ion-margin-bottom ion-padding-top\">\n      <ion-text><strong class=\"text ion-text-center\">Item(s) in Cart {{usercartcount}}</strong>\n      </ion-text>\n    </ion-row>\n    <ion-list #slidingList>\n      <ion-item-sliding *ngFor=\"let item of cart\" class=\"card ion-no-padding ion-no-margin\">\n        <ion-item lines=\"none\">\n          <ion-grid>\n            <ion-row class=\"container-outer\">\n              <ion-col size=\"3\" class=\"ion-text-center container-inner\">\n                <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+item.ProductDetails.FirstImage\" alt=\"\">\n                <ion-text color=\"danger\" class=\"small\" (click)=\"remove(item)\">Remove</ion-text>\n              </ion-col>\n              <ion-col size=\"6\" auto>\n                <h3 class=\"item-name ion-no-margin\">{{item.ProductDetails.InfoDetails?.name}}</h3>\n                <h5 class=\"item-def ion-no-margin\">Quantity:<strong><ion-text color=\"mytheme\">{{item.product_quantity}}</ion-text></strong></h5>\n                <h5 class=\"item-def ion-no-margin\">Price:\n                  {{ item.ProductDetails.PriceDetails?.selling_price | currency:'₦' }}</h5>\n                <h5 class=\"item-def ion-no-margin text-truncate\" style=\"max-width: 7.5em;\">\n                  {{item.ProductDetails.SellerDetails?.SellerUserName}}</h5>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-end\">\n                <ion-row class=\"ion-text-end ion-justify-content-end\">\n                  <h3 class=\"item-name ion-no-margin ion-text-end\">\n                    {{item.ProductDetails.PriceDetails?.selling_price | currency:'₦'}}\n                  </h3>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-end\">\n                  <ion-select placeholder=\"-\" mode=\"ios\" interface=\"popover\"\n                    (ionChange)=\"onQuantityChange($event, item)\" [interfaceOptions]=\"customAlertOptions\" class=\"select\">\n                    <ion-select-option value=\"1\">1</ion-select-option>\n                    <ion-select-option value=\"2\">2</ion-select-option>\n                    <ion-select-option value=\"3\">3</ion-select-option>\n                    <ion-select-option value=\"4\">4</ion-select-option>\n                    <ion-select-option value=\"5\">5</ion-select-option>\n                    <ion-select-option value=\"6\">6</ion-select-option>\n                    <ion-select-option value=\"7\">7</ion-select-option>\n                    <ion-select-option value=\"8\">8</ion-select-option>\n                    <ion-select-option value=\"9\">9</ion-select-option>\n                    <ion-select-option value=\"10\">10</ion-select-option>\n                    <ion-select-option value=\"11\">11</ion-select-option>\n                    <ion-select-option value=\"12\">12</ion-select-option>\n                  </ion-select>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"remove(item)\">\n            <ion-icon name=\"trash\" size=\"large\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-row size=\"12\" class=\"ion-justify-content-center ion-margin-top\" disabled=\"true\">\n      <ion-button fill=\"outline\" color=\"mytheme\" (click)=\"browse()\">Continue shopping</ion-button>\n    </ion-row>\n    <ion-row class=\"ion-margin\">\n      <ion-text><strong class=\"text\">Order Summary</strong></ion-text>\n    </ion-row>\n    <ion-item lines=\"none\" class=\"card ion-no-margin\">\n      <ion-row class=\"full\">\n        <ion-col size=\"9\">\n          <ion-input placeholder=\"Enter Promo Code\" class=\"ion-padding-left\" [(ngModel)]=\"code\" class=\"input\"></ion-input>\n        </ion-col>\n        <ion-col class=\"ion-align-self-center\" size=\"3\">\n          <ion-button fill=\"outline\" expand=\"block\" (click)=\"onApply()\" color=\"mytheme\"><span class=\"small\">Apply</span></ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <div lines=\"none\" class=\"card ion-no-margin ion-padding-bottom\">\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Item Total</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text>{{cartdetails?.amount | currency:'₦' }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Shipping</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text>{{cartdetails?.fees | currency:'₦'}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Discount</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text color=\"danger\">{{cartdetails?.discount_amount  | currency:'₦' }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Total</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text>{{cartdetails?.total_amount | currency:'₦'}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <div class=\"sep\"></div>\n      <ion-row>\n        <ion-col>\n          <ion-text class=\"item-def ion-text-start\">\n            <div class=\"pad\"> By tapping 'Checkout' you agree to the <a (click)=\"open_modal()\" class=\"mycolor\">Terms of\n                Use</a>\n\n            </div>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <div class=\"sep\"></div>\n      <ion-row>\n        <ion-col>\n          <ion-text class=\"item-def ion-text-start ion-padding-bottom\">\n            <div class=\"mycolor pad\">\n              7 Day Free Return and Refund. Does not include perishable items.\n            </div>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"show\" (click)=\"checkout()\">\n  <ion-toolbar color=\"success\">\n    <ion-title>Checkout</ion-title>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/cart/cart-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/cart/cart-routing.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  color: white;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.input {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  font-size: 0.9em !important;\n  padding-left: 1.2em !important;\n}\n\n.pad {\n  padding: 0 6px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n\n.full {\n  width: 100%;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: white;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7QUFVSjs7QUFSQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQWNKOztBQVpBO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0FBZUo7O0FBYkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWlCSjs7QUFmRTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBa0JKOztBQWhCRTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBbUJKOztBQWpCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQW9CSiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4uaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbSAhaW1wb3J0YW50O1xufVxuLnBhZCB7XG4gICAgcGFkZGluZzogMCA2cHg7XG59XG4ubWlkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jdXR7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5ibHVle1xuICAgIGNvbG9yOiBibHVlO1xufVxuLnNlcCB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDZweCAwO1xufVxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogLjgxZW07XG59XG4uc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xufVxuZGl2e1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cbi5pdGVtLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiByZ2IoMTIsIDEyLCAxMik7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IC44MWVtO1xufVxuLml0ZW0tZGVmIHtcbiAgICBmb250LXNpemU6IC44MWVtO1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG59XG4uY29udGFpbmVyLW91dGVyIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbiAgLmNvbnRhaW5lci1pbm5lciB7XG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuc3Bvbi1pbWcge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzcHg7XG4gIH1cbiAgLnRleHQtdHJ1bmNhdGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let CartPage = class CartPage {
    constructor(fun, router, loadingCtrl, authService, shopService, alertController) {
        this.fun = fun;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.shopService = shopService;
        this.alertController = alertController;
        this.customAlertOptions = {
            header: 'Select Quantity',
            translucent: true,
        };
        this.code = '';
        this.show = true;
    }
    ionViewWillEnter() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetUserCart(this.sid);
    }
    GetUserCart(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetUserCart(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.usercart = res.data;
                    this.usercartcount = this.usercart.product_count;
                    this.cart = this.usercart.CartProductDetails;
                    this.cartdetails = this.usercart;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                this.show = false;
                loading.dismiss().catch(() => { });
            });
        });
    }
    open_modal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const link = "https://fyngram.com/FynGramShop/pages/shop/terms/terms.jsp";
            yield Browser.open({
                url: link,
                toolbarColor: "#40A944"
            });
        });
    }
    onQuantityChange(event, details) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let quantity = 0;
            let action;
            const newQty = event.detail.value;
            const oldQty = details.product_quantity;
            if (parseInt(newQty) > parseInt(oldQty)) {
                quantity = parseInt(newQty) - parseInt(oldQty);
                action = 'Increase';
            }
            else if (parseInt(newQty) < parseInt(oldQty)) {
                quantity = parseInt(oldQty) - parseInt(newQty);
                action = 'Decrease';
            }
            else if (parseInt(newQty) === parseInt(oldQty)) {
                return false;
            }
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.UpdateOption('Cart', details.ProductDetails.id, details.ProductDetails.PriceDetails.selling_price, String(quantity), action)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.fun.presentToast(res.msg);
                    this.sid = this.authService.currentUserDataValue.sid;
                    this.GetUserCart(this.sid);
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    browse() {
        this.fun.navigate('/home', false);
    }
    remove(cart) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            this.fun.removeConform('product').then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res === 'ok') {
                    this.slidingList.closeSlidingItems();
                    yield loading.present();
                    this.shopService.DeleteOption('Cart', String(cart.cartid), cart.ProductDetails.id)
                        .subscribe(resp => {
                        loading.dismiss().catch(() => { });
                        if (resp.code === 200) {
                            this.fun.presentToast(resp.msg);
                            this.sid = this.authService.currentUserDataValue.sid;
                            this.GetUserCart(this.sid);
                        }
                        else {
                            this.fun.presentToast(resp.msg);
                        }
                    }, error => {
                        loading.dismiss().catch(() => { });
                    });
                }
            }));
        });
    }
    onApply() {
        if (this.code) {
            const usertype = this.authService.currentUserDataValue.usertype;
            if (usertype !== 'Guest') {
                this.onCompute(this.code);
            }
            else {
                this.loginOrRegister();
            }
        }
        else {
            this.fun.presentToast('Please, enter your discount code.');
        }
    }
    onCompute(code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.CartDiscountCode(code)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.sid = this.authService.currentUserDataValue.sid;
                    this.GetUserCart(this.sid);
                    this.fun.presentToast(res.msg);
                }
                else {
                    this.fun.presentToast(res.msg);
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    loginOrRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Discount Code!',
                message: 'Please, you need to Login or Register to use your Discount Code',
                buttons: [
                    {
                        text: 'Register',
                        cssClass: 'secondary',
                        handler: () => {
                            this.fun.navigate('/authenticate/register');
                        }
                    }, {
                        text: 'Login',
                        handler: () => {
                            this.fun.navigate('/authenticate');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            return false;
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    checkout() {
        this.router.navigate(['/checkout'], { queryParams: { 'totalamount': this.usercart.total_amount } });
    }
};
CartPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CartPage.propDecorators = {
    slidingList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['slidingList',] }]
};
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")).default]
    })
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map