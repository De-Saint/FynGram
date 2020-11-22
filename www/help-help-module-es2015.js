(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/help/help.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/help/help.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Help & Support</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\" slot=\"icon-only\" (click)=\"onOpen('cart')\" class=\"white\" margin></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <ion-item  lines=\"none\" *ngFor=\"let link of links; let i = index\" class=\"card ion-margin-bottom ion-margin-top\"\n  (click)=\"open(i)\" >\n    <ion-col>\n      <ion-text>\n        <h5 class=\"title ion-no-margin\" >{{link}}</h5>\n      </ion-text>\n    </ion-col>\n    <ion-col class=\"ion-float-right\" size=\"2\">\n      <ion-icon name=\"arrow-redo-circle-outline\" class=\"ion-float-right\"></ion-icon>\n    </ion-col>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/help/help-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/help/help-routing.module.ts ***!
  \**************************************************/
/*! exports provided: HelpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function() { return HelpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help.page */ "./src/app/home/help/help.page.ts");




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ "./src/app/home/help/help.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/help/help.module.ts ***!
  \******************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-routing.module */ "./src/app/home/help/help-routing.module.ts");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "./src/app/home/help/help.page.ts");







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })
], HelpPageModule);



/***/ }),

/***/ "./src/app/home/help/help.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/help/help.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  padding: 3px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n}\n\n.title {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/help/help.page.ts":
/*!****************************************!*\
  !*** ./src/app/home/help/help.page.ts ***!
  \****************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");




const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let HelpPage = class HelpPage {
    constructor(fun) {
        this.fun = fun;
        this.faqs = fun.faqs;
        this.links = Object.keys(this.faqs);
    }
    ngOnInit() {
    }
    onOpen(link) {
        this.fun.navigate(link);
    }
    open(i) {
        this.openLink(Object.values(this.faqs)[i]);
    }
    openLink(link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({
                url: link,
                toolbarColor: "#40A944"
            });
        });
    }
};
HelpPage.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"] }
];
HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/help/help.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./help.page.scss */ "./src/app/home/help/help.page.scss")).default]
    })
], HelpPage);



/***/ })

}]);
//# sourceMappingURL=help-help-module-es2015.js.map