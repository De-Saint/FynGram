(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/stock/stock.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/stock/stock.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Stock</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"arrow-undo-circle\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not returned any product yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n\n    <ion-grid>\n      <ion-row *ngFor=\"let return of returns\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> {{return.time}} </small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong> {{return.ProductName}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">\n              <ion-text color=\"danger\"  *ngIf=\"return.name === 'Product Returned'\">{{return.name}}</ion-text>\n              <ion-text  color=\"success\" *ngIf=\"return.name === 'Product Ordered'\">{{return.name}}</ion-text>\n              </h6><br>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{return.SellerName}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">Ordered Quantity: {{return.product_quantity}}</small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">{{return.date}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/stock/stock.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/stock/stock.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Stock</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"arrow-undo-circle\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not returned any product yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n\n    <ion-grid>\n      <ion-row *ngFor=\"let return of returns\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> {{return.time}} </small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong> {{return.ProductName}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">\n              <ion-text color=\"danger\"  *ngIf=\"return.name === 'Product Returned'\">{{return.name}}</ion-text>\n              <ion-text  color=\"success\" *ngIf=\"return.name === 'Product Ordered'\">{{return.name}}</ion-text>\n              </h6><br>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{return.SellerName}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">Ordered Quantity: {{return.product_quantity}}</small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">{{return.date}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admininventory/stock/stock-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/admininventory/stock/stock-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: StockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function() { return StockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.page */ "./src/app/admininventory/stock/stock.page.ts");




const routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
    }
];
let StockPageRoutingModule = class StockPageRoutingModule {
};
StockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockPageRoutingModule);



/***/ }),

/***/ "./src/app/admininventory/stock/stock.module.ts":
/*!******************************************************!*\
  !*** ./src/app/admininventory/stock/stock.module.ts ***!
  \******************************************************/
/*! exports provided: StockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/admininventory/stock/stock-routing.module.ts");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/admininventory/stock/stock.page.ts");







let StockPageModule = class StockPageModule {
};
StockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockPageRoutingModule"]
        ],
        declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"]]
    })
], StockPageModule);



/***/ }),

/***/ "./src/app/admininventory/stock/stock.page.scss":
/*!******************************************************!*\
  !*** ./src/app/admininventory/stock/stock.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvc3RvY2svc3RvY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVpBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBZUo7O0FBYkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFnQkoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmludmVudG9yeS9zdG9jay9zdG9jay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheSB7XG4gICAgY29sb3I6IGdyYXk7XG59XG4ubWFyZ2luIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5jbW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc2VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG59XG4uZmlsdGVyLWJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLmJ0biB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4ucm93IHtcbiAgICBtYXJnaW46IDZweDtcbn1cbi5yYXRlLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uYXZhdGFyIHtcbiAgICB3aWR0aDogMzNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG4ucmV2LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4uc21hbGwtaWNvIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogNnB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admininventory/stock/stock.page.ts":
/*!****************************************************!*\
  !*** ./src/app/admininventory/stock/stock.page.ts ***!
  \****************************************************/
/*! exports provided: StockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPage", function() { return StockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let StockPage = class StockPage {
    constructor(fun, shopService, loadingCtrl, authService) {
        this.fun = fun;
        this.shopService = shopService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.show = true;
    }
    ngOnInit() {
        if (!this.returns) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetStockMovement(this.sid);
        }
    }
    shop() {
        this.fun.navigate('home');
    }
    GetStockMovement(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetStockMovement(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.returns = res.data;
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
};
StockPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }
];
StockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stock.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/stock/stock.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stock.page.scss */ "./src/app/admininventory/stock/stock.page.scss")).default]
    })
], StockPage);



/***/ }),

/***/ "./src/app/sellersinventory/stock/stock-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/sellersinventory/stock/stock-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: StockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function() { return StockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.page */ "./src/app/sellersinventory/stock/stock.page.ts");




const routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
    }
];
let StockPageRoutingModule = class StockPageRoutingModule {
};
StockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StockPageRoutingModule);



/***/ }),

/***/ "./src/app/sellersinventory/stock/stock.module.ts":
/*!********************************************************!*\
  !*** ./src/app/sellersinventory/stock/stock.module.ts ***!
  \********************************************************/
/*! exports provided: StockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/sellersinventory/stock/stock-routing.module.ts");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/sellersinventory/stock/stock.page.ts");







let StockPageModule = class StockPageModule {
};
StockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockPageRoutingModule"]
        ],
        declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"]]
    })
], StockPageModule);



/***/ }),

/***/ "./src/app/sellersinventory/stock/stock.page.scss":
/*!********************************************************!*\
  !*** ./src/app/sellersinventory/stock/stock.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2ludmVudG9yeS9zdG9jay9zdG9jay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFlSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNpbnZlbnRvcnkvc3RvY2svc3RvY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuLm1hcmdpbiB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY21udCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNlcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZpbHRlci1idG4ge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5idG4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLnJvdyB7XG4gICAgbWFyZ2luOiA2cHg7XG59XG4ucmF0ZS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLnJldi1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDZweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/sellersinventory/stock/stock.page.ts":
/*!******************************************************!*\
  !*** ./src/app/sellersinventory/stock/stock.page.ts ***!
  \******************************************************/
/*! exports provided: StockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPage", function() { return StockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let StockPage = class StockPage {
    constructor(fun, shopService, loadingCtrl, authService) {
        this.fun = fun;
        this.shopService = shopService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.show = true;
    }
    ngOnInit() {
        if (!this.returns) {
            this.sid = this.authService.currentUserDataValue.sid;
            this.GetStockMovement(this.sid);
        }
    }
    shop() {
        this.fun.navigate('home');
    }
    GetStockMovement(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetStockMovement(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.returns = res.data;
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
};
StockPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }
];
StockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stock.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/stock/stock.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stock.page.scss */ "./src/app/sellersinventory/stock/stock.page.scss")).default]
    })
], StockPage);



/***/ })

}]);
//# sourceMappingURL=stock-stock-module-es2015.js.map