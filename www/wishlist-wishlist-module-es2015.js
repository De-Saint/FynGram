(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Wishlist</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <button class=\"circle\">\n        <ion-icon name=\"cart\" size=\"large\"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-text><strong>Your wishlist is empty</strong></ion-text>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-button fill=\"clear\" color=\"mytheme\" (click)=\"browse()\">Continue Browsing</ion-button>\n    </ion-row>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-row class=\"ion-justify-content-center ion-margin-horizontal ion-margin-bottom ion-padding-top\">\n      <ion-text><strong class=\"text ion-text-center\">Item(s) in Wishlist {{wishlists?.product_count}}</strong>\n      </ion-text>\n    </ion-row>\n    <ion-list #slidingList>\n      <ion-item-sliding *ngFor=\"let item of wishdetails\" class=\"card ion-no-padding ion-no-margin\">\n        <ion-item lines=\"none\">\n          <ion-grid>\n            <ion-row class=\"container-outer\">\n              <ion-col size=\"3\" class=\"ion-text-center container-inner\">\n                <img class=\"spon-img\" [src]=\"'data:image/png;base64,'+item.ProductDetails.FirstImage\" alt=\"\">\n                <ion-text color=\"danger\" class=\"small\" (click)=\"remove(item)\">Remove</ion-text>\n              </ion-col>\n              <ion-col size=\"6\" auto>\n                <h3 class=\"item-name ion-no-margin\">{{item.ProductDetails.InfoDetails?.name}}</h3>\n                <h5 class=\"item-def ion-no-margin\">Quantity:<strong><ion-text color=\"mytheme\">{{item.product_quantity}}</ion-text></strong></h5>\n                <h5 class=\"item-def ion-no-margin\">Price:\n                  {{ item.ProductDetails.PriceDetails?.selling_price | currency:'₦' }}</h5>\n                <h5 class=\"item-def ion-no-margin text-truncate\" style=\"max-width: 7.5em;\">\n                  {{item.ProductDetails.SellerDetails?.SellerUserName}}</h5>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-end\">\n                <ion-row class=\"ion-text-end ion-justify-content-end\">\n                  <h3 class=\"item-name ion-no-margin ion-text-end\">\n                    {{item.ProductDetails.PriceDetails?.selling_price | currency:'₦'}}\n                  </h3>\n                </ion-row>\n                <ion-row class=\"ion-justify-content-end\">\n                  <ion-button fill=\"clear\" color=\"mytheme\" (click)=\"details(item)\">Details</ion-button>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"remove(item)\">\n            <ion-icon name=\"trash\" size=\"large\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list> \n    <ion-row size=\"12\" class=\"ion-justify-content-center ion-margin-top\" disabled=\"true\">\n      <ion-button fill=\"outline\" color=\"mytheme\" (click)=\"browse()\">Continue Shopping</ion-button>\n    </ion-row>\n    <ion-row class=\"ion-margin\">\n      <ion-text><strong class=\"text\">WishList Summary</strong></ion-text>\n    </ion-row>\n    <div lines=\"none\" class=\"card ion-no-margin ion-padding-bottom\">\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Item Total</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text>{{wishlists?.amount | currency:'₦' }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"full ion-padding-horizontal\">\n        <ion-col size=\"7\">\n          <ion-text>Date</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-text-end\">\n          <ion-text>{{wishlists?.date}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div> \n  </div> \n</ion-content>\n");

/***/ }),

/***/ "./src/app/customerorders/wishlist/wishlist-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/customerorders/wishlist/wishlist-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: WishlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function() { return WishlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/customerorders/wishlist/wishlist.page.ts");




const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
    }
];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {
};
WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WishlistPageRoutingModule);



/***/ }),

/***/ "./src/app/customerorders/wishlist/wishlist.module.ts":
/*!************************************************************!*\
  !*** ./src/app/customerorders/wishlist/wishlist.module.ts ***!
  \************************************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist-routing.module */ "./src/app/customerorders/wishlist/wishlist-routing.module.ts");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/customerorders/wishlist/wishlist.page.ts");







let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
    })
], WishlistPageModule);



/***/ }),

/***/ "./src/app/customerorders/wishlist/wishlist.page.scss":
/*!************************************************************!*\
  !*** ./src/app/customerorders/wishlist/wishlist.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  color: white;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.input {\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  font-size: 0.9em !important;\n  padding-left: 1.2em !important;\n}\n\n.pad {\n  padding: 0 6px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n\n.full {\n  width: 100%;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: blue;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #0c0c0c;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #787878;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 80px !important;\n  max-width: 80px !important;\n  display: inline;\n  padding: 3px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 60px !important;\n  max-height: 60px !important;\n  margin: 3px;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVFKOztBQU5BO0VBQ0ksaUJBQUE7QUFTSjs7QUFQQTtFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUVJLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFjSjs7QUFaRTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBZUo7O0FBYkU7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQWdCSjs7QUFkRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlCSiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyb3JkZXJzL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5pbnB1dCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtICFpbXBvcnRhbnQ7XG59XG4ucGFkIHtcbiAgICBwYWRkaW5nOiAwIDZweDtcbn1cbi5taWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmN1dHtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLmJsdWV7XG4gICAgY29sb3I6IGJsdWU7XG59XG4uc2VwIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogNnB4IDA7XG59XG4udGV4dCB7XG4gICAgZm9udC1zaXplOiAuODFlbTtcbn1cbi5zZWxlY3Qge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cbi5jYXJkIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG59XG5kaXZ7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuLml0ZW0tbmFtZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbn1cbi5zbWFsbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogLjgxZW07XG59XG4uaXRlbS1kZWYge1xuICAgIGZvbnQtc2l6ZTogLjgxZW07XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbn1cbi5jb250YWluZXItb3V0ZXIge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuICAuY29udGFpbmVyLWlubmVyIHtcbiAgICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5zcG9uLWltZyB7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDNweDtcbiAgfVxuICAudGV4dC10cnVuY2F0ZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/customerorders/wishlist/wishlist.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/customerorders/wishlist/wishlist.page.ts ***!
  \**********************************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");







let WishlistPage = class WishlistPage {
    constructor(loadingCtrl, fun, router, authService, shopService) {
        this.loadingCtrl = loadingCtrl;
        this.fun = fun;
        this.router = router;
        this.authService = authService;
        this.shopService = shopService;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (!this.wishlists) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetShopSavedItems(this.sid);
        }
    }
    GetShopSavedItems(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetShopSavedItems(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.wishlists = res.data;
                    this.wishdetails = this.wishlists.WishListProductDetails;
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
    browse() {
        this.fun.navigate('/home', false);
    }
    remove(wishlist) {
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
                    this.shopService.DeleteOption('SavedItems', String(wishlist.id), wishlist.ProductDetails.id)
                        .subscribe(resp => {
                        loading.dismiss().catch(() => { });
                        if (resp.code === 200) {
                            this.fun.presentToast(resp.msg);
                            this.sid = this.authService.currentUserDataValue.sid;
                            this.GetShopSavedItems(this.sid);
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
    details(wishlist) {
        this.fun.setNavLink('wishlist');
        this.router.navigate(['/', 'customerorders', 'tabs', 'wishlist', 'products', 'details', wishlist.ProductDetails.ProductID]);
    }
};
WishlistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
];
WishlistPage.propDecorators = {
    slidingList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['slidingList',] }]
};
WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/wishlist/wishlist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/customerorders/wishlist/wishlist.page.scss")).default]
    })
], WishlistPage);



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module-es2015.js.map