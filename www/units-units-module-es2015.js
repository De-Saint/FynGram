(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["units-units-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/units/units.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/units/units.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Product Units</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"mail\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not added any product unit yet!</strong></ion-text>\n        \n      </ion-row>\n\n    </ion-grid>\n  </div>\n  <div *ngIf=\"show\">\n    <ion-grid>\n      <ion-row  *ngFor=\"let unit of units\" class=\"card\">\n        <ion-col>\n          <ion-row class=\"full block\">\n            <ion-text class=\"\">\n              <h6 class=\"ion-text-start ion-no-margin\"><strong>{{unit.name}}</strong></h6>\n            </ion-text>\n          </ion-row>\n          <div style=\"clear: both;\"></div>\n          <ion-row class=\"full block ion-margin-top\">\n            <h6 class=\"cmnt ion-float-left ion-text-start ion-no-margin\">{{unit.description}}</h6>\n          </ion-row>\n        </ion-col>\n      </ion-row >\n    </ion-grid> \n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/admincategory/units/units-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admincategory/units/units-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UnitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPageRoutingModule", function() { return UnitsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _units_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./units.page */ "./src/app/admincategory/units/units.page.ts");




const routes = [
    {
        path: '',
        component: _units_page__WEBPACK_IMPORTED_MODULE_3__["UnitsPage"]
    }
];
let UnitsPageRoutingModule = class UnitsPageRoutingModule {
};
UnitsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UnitsPageRoutingModule);



/***/ }),

/***/ "./src/app/admincategory/units/units.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admincategory/units/units.module.ts ***!
  \*****************************************************/
/*! exports provided: UnitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPageModule", function() { return UnitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _units_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./units-routing.module */ "./src/app/admincategory/units/units-routing.module.ts");
/* harmony import */ var _units_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./units.page */ "./src/app/admincategory/units/units.page.ts");







let UnitsPageModule = class UnitsPageModule {
};
UnitsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _units_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnitsPageRoutingModule"]
        ],
        declarations: [_units_page__WEBPACK_IMPORTED_MODULE_6__["UnitsPage"]]
    })
], UnitsPageModule);



/***/ }),

/***/ "./src/app/admincategory/units/units.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admincategory/units/units.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gray {\n  color: gray;\n}\n\n.margin {\n  margin: 3px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 6px;\n  background-color: #d2d2d2;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.btn {\n  margin: 3px;\n}\n\n.row {\n  margin: 6px;\n}\n\n.rate-small {\n  font-size: 15px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n}\n\n.block {\n  display: block;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.card {\n  padding: 3px;\n  margin: 6px 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5jYXRlZ29yeS91bml0cy91bml0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFlSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQWdCSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluY2F0ZWdvcnkvdW5pdHMvdW5pdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXkge1xuICAgIGNvbG9yOiBncmF5O1xufVxuLm1hcmdpbiB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4uY21udCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNlcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuLmZpbHRlci1idG4ge1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5idG4ge1xuICAgIG1hcmdpbjogM3B4O1xufVxuLnJvdyB7XG4gICAgbWFyZ2luOiA2cHg7XG59XG4ucmF0ZS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuLnJldi1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnNtYWxsLWljbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46IDZweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/admincategory/units/units.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admincategory/units/units.page.ts ***!
  \***************************************************/
/*! exports provided: UnitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPage", function() { return UnitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let UnitsPage = class UnitsPage {
    constructor(loadingCtrl, shopService) {
        this.loadingCtrl = loadingCtrl;
        this.shopService = shopService;
        this.show = true;
    }
    ngOnInit() {
        if (!this.units) {
            this.GetUnits();
        }
    }
    GetUnits() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.shopService.GetUnits().subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.units = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
                this.show = false;
            });
        });
    }
};
UnitsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"] }
];
UnitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-units',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./units.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admincategory/units/units.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./units.page.scss */ "./src/app/admincategory/units/units.page.scss")).default]
    })
], UnitsPage);



/***/ })

}]);
//# sourceMappingURL=units-units-module-es2015.js.map