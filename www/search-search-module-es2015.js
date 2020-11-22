(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-input type=\"text\" placeholder=\"Search Fyngram\" [(ngModel)]=\"searchTerm\" class=\"search-bar\"\n        (ionChange)=\"onSearch()\"></ion-input>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <button class=\"circle\">\n        <ion-icon name=\"search\" size=\"large\"></ion-icon>\n      </button>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-text><strong>Type in the box above</strong></ion-text>\n    </ion-row>\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n      <ion-button fill=\"clear\" color=\"mytheme\" (click)=\"browse()\">Browse Products</ion-button>\n    </ion-row>\n  </div>\n  <ion-grid *ngIf=\"show\">\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let data of products\" (click)=\"open(data)\">\n        <div class=\"img-wrapper\" [style.background-image]=\"'url(data:image/png;base64,' + data.FirstImage\">\n        </div>\n        <p class=\"ion-no-margin text-truncate\"><strong>{{data.ProductName}}</strong></p>\n        <p class=\"ion-no-margin\">\n          {{ data.ProductPrice | currency:'₦' }}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n  padding-left: 0.5em !important;\n}\n\n.btn {\n  margin: 3px;\n  padding: 5px;\n  border: 0.5px solid #b4b4b4;\n  border-radius: 6px;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  font-size: 12px;\n  padding-right: 3px;\n}\n\n.view {\n  color: var(--ion-color-mytheme);\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 1px;\n  background-color: #d2d2d2;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked: none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.img-wrapper {\n  min-height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQU9GOztBQUxBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFRRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0FBVUY7O0FBUkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFZRjs7QUFWQTtFQUNFLFlBQUE7QUFhRjs7QUFWQTtFQUNFLHVCQUFBO0FBYUY7O0FBWEE7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQWNGOztBQVpBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQWdCRjs7QUFmRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFpQko7O0FBZEE7RUFDRSx1QkFBQTtBQWlCRjs7QUFkQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFpQkY7O0FBZkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7QUFvQkoiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMC41ZW0gIWltcG9ydGFudDtcbn1cbi5idG4ge1xuICBtYXJnaW46IDNweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmZpbHRlci1idG4ge1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4udmlldyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcbn1cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5jb250YWluZXItaW5uZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnNwb24taW1nIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDNweDtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiB1bnNldDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzcHg7XG59XG4uaW5saW5lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbn1cbi5iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uaG9yLXNjcm9sbCB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm1lbnUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5teS1idG4ge1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICBtYXJnaW46IDAgMTJweCAhaW1wb3J0YW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmJ0bi1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogbm9uZSAhaW1wb3J0YW50O1xuICBpb24tdGV4dCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbn1cbiNkYWcge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnRleHQtdHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubWlkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../home/service/shop.service */ "./src/app/home/service/shop.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let SearchPage = class SearchPage {
    constructor(fun, loadingCtrl, shopService, router) {
        this.fun = fun;
        this.loadingCtrl = loadingCtrl;
        this.shopService = shopService;
        this.router = router;
        this.show = false;
    }
    ngOnInit() {
    }
    browse() {
        this.fun.navigate('home');
    }
    onSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchvalue = this.searchTerm;
            if (searchvalue.trim() === '') {
                this.products = [];
                this.show = false;
            }
            else {
                if (String(searchvalue).length >= 3) {
                    if (searchvalue !== undefined) {
                        const loading = yield this.loadingCtrl.create({
                            cssClass: 'my-custom-class',
                            message: 'Please wait...',
                            mode: 'ios'
                        });
                        yield loading.present();
                        this.shopService.SearchProducts(searchvalue).subscribe(res => {
                            loading.dismiss().catch(() => { });
                            if (res.code === 200) {
                                this.products = res.data;
                                this.show = true;
                            }
                            else {
                                this.fun.presentToast(res.msg);
                                this.show = false;
                            }
                        }, error => {
                            loading.dismiss().catch(() => { });
                            this.show = false;
                        });
                    }
                }
            }
        });
    }
    open(data) {
        this.fun.setNavLink('search');
        this.router.navigate(['/', 'search', 'products', 'details', data.ProductID]);
    }
};
SearchPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")).default]
    })
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map