(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["returned-returned-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/returned/returned.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/returned/returned.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Orders Returned</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"arrow-undo-circle\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not returned any product yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"shop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n\n    <ion-grid>\n      <ion-row *ngFor=\"let return of returns\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"ion-float-right\">\n              <small> {{return.time}} </small>\n            </ion-text>\n            <ion-text class=\"ion-float-left\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong> {{return.ProductName}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{return.name}}</h6><br>\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{return.SellerName}}</h6>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <small class=\"ion-float-left ion-text-start ion-no-margin\">Ordered Quantity: {{return.product_quantity}}</small>\n            <small class=\"ion-float-right ion-text-end ion-no-margin\">{{return.date}}</small>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/customerorders/returned/returned-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/customerorders/returned/returned-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ReturnedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnedPageRoutingModule", function() { return ReturnedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _returned_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./returned.page */ "./src/app/customerorders/returned/returned.page.ts");




const routes = [
    {
        path: '',
        component: _returned_page__WEBPACK_IMPORTED_MODULE_3__["ReturnedPage"]
    }
];
let ReturnedPageRoutingModule = class ReturnedPageRoutingModule {
};
ReturnedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReturnedPageRoutingModule);



/***/ }),

/***/ "./src/app/customerorders/returned/returned.module.ts":
/*!************************************************************!*\
  !*** ./src/app/customerorders/returned/returned.module.ts ***!
  \************************************************************/
/*! exports provided: ReturnedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnedPageModule", function() { return ReturnedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _returned_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./returned-routing.module */ "./src/app/customerorders/returned/returned-routing.module.ts");
/* harmony import */ var _returned_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./returned.page */ "./src/app/customerorders/returned/returned.page.ts");







let ReturnedPageModule = class ReturnedPageModule {
};
ReturnedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _returned_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnedPageRoutingModule"]
        ],
        declarations: [_returned_page__WEBPACK_IMPORTED_MODULE_6__["ReturnedPage"]]
    })
], ReturnedPageModule);



/***/ }),

/***/ "./src/app/customerorders/returned/returned.page.scss":
/*!************************************************************!*\
  !*** ./src/app/customerorders/returned/returned.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvcmV0dXJuZWQvcmV0dXJuZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVpBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBZUo7O0FBYkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFnQkoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcm9yZGVycy9yZXR1cm5lZC9yZXR1cm5lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheSB7XG4gICAgY29sb3I6IGdyYXk7XG59XG4ubWFyZ2luIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5jbW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uc2VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XG59XG4uZmlsdGVyLWJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLmJ0biB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4ucm93IHtcbiAgICBtYXJnaW46IDZweDtcbn1cbi5yYXRlLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uYXZhdGFyIHtcbiAgICB3aWR0aDogMzNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG4ucmV2LWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4uc21hbGwtaWNvIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5taWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDB2aDtcbiAgICBsZWZ0OiA1MCU7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogNnB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customerorders/returned/returned.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/customerorders/returned/returned.page.ts ***!
  \**********************************************************/
/*! exports provided: ReturnedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnedPage", function() { return ReturnedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let ReturnedPage = class ReturnedPage {
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
ReturnedPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] }
];
ReturnedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-returned',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./returned.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/returned/returned.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./returned.page.scss */ "./src/app/customerorders/returned/returned.page.scss")).default]
    })
], ReturnedPage);



/***/ })

}]);
//# sourceMappingURL=returned-returned-module-es2015.js.map