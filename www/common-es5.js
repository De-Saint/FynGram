(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/new/new.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/new/new.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellerswalletBanksNewNewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Add Bank Details</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  class=\"ion-padding\">\n  <form [formGroup]=\"bankForm\">\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Select Bank</span></ion-text>\n        <ion-select formControlName=\"bank\" [interfaceOptions]=\"bankcustomAlertOptions\" class=\"input\"\n          placeholder=\"Select address type\">\n          <ion-select-option *ngFor=\"let q of banks\" [(value)]=\"q.id\">{{q.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Select Account Type?</span></ion-text>\n        <ion-select formControlName=\"accttype\" [interfaceOptions]=\"accounttypecustomAlertOptions\" class=\"input\"\n          >\n          <ion-select-option value=\"Savings\">Savings</ion-select-option>\n          <ion-select-option value=\"Current\">Current</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    \n\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Enter Account Number</span></ion-text>\n        <ion-input class=\"input ion-padding-horizontal\" type=\"text\" formControlName=\"acctnumber\" ></ion-input>\n      </ion-col>\n     \n    </ion-row>\n\n  \n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"mytheme\"  (click)=\"onSubmit()\"><span\n            class=\"white\"><strong>Save</strong></span></ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/new/new-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/sellerswallet/banks/new/new-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function srcAppSellerswalletBanksNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
        return NewPageRoutingModule;
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


      var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/sellerswallet/banks/new/new.page.ts");

      var routes = [{
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
      }];

      var NewPageRoutingModule = function NewPageRoutingModule() {
        _classCallCheck(this, NewPageRoutingModule);
      };

      NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/new/new.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/sellerswallet/banks/new/new.module.ts ***!
      \*******************************************************/

    /*! exports provided: NewPageModule */

    /***/
    function srcAppSellerswalletBanksNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
        return NewPageModule;
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


      var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-routing.module */
      "./src/app/sellerswallet/banks/new/new-routing.module.ts");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/sellerswallet/banks/new/new.page.ts");

      var NewPageModule = function NewPageModule() {
        _classCallCheck(this, NewPageModule);
      };

      NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"]],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
      })], NewPageModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/new/new.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/sellerswallet/banks/new/new.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellerswalletBanksNewNewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3dhbGxldC9iYW5rcy9uZXcvbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXJzd2FsbGV0L2JhbmtzL25ldy9uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcbn1cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/sellerswallet/banks/new/new.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/sellerswallet/banks/new/new.page.ts ***!
      \*****************************************************/

    /*! exports provided: NewPage */

    /***/
    function srcAppSellerswalletBanksNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPage", function () {
        return NewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NewPage = /*#__PURE__*/function () {
        function NewPage(loadingCtrl, fun, router, authService) {
          _classCallCheck(this, NewPage);

          this.loadingCtrl = loadingCtrl;
          this.fun = fun;
          this.router = router;
          this.authService = authService;
          this.bankcustomAlertOptions = {
            header: 'Select Bank'
          };
          this.accounttypecustomAlertOptions = {
            header: 'Select Account Type'
          };
          this.bankForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            accttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            acctnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            })
          });
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.GetBanks();
          }
        }, {
          key: "GetBanks",
          value: function GetBanks() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.GetBanks().subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.banks = res.data;
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.bankForm.valid) {
                        _context4.next = 3;
                        break;
                      }

                      this.fun.presentToast('Wrong Input!');
                      return _context4.abrupt("return", false);

                    case 3:
                      if (!(this.bankForm.value.acctnumber.length === 10)) {
                        _context4.next = 13;
                        break;
                      }

                      _context4.next = 6;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 6:
                      loading = _context4.sent;
                      _context4.next = 9;
                      return loading.present();

                    case 9:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.authService.CreateBankDetails(String(this.sid), String(this.bankForm.value.bank), this.bankForm.value.accttype, this.bankForm.value.acctnumber).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.router.navigate(['/', 'sellerswallet', 'tabs', 'banks']);

                          _this2.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});

                        _this2.fun.presentToast(error);
                      });
                      _context4.next = 14;
                      break;

                    case 13:
                      this.fun.presentToast('Account Number must be 10 digits!');

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return NewPage;
      }();

      NewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/banks/new/new.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.page.scss */
        "./src/app/sellerswallet/banks/new/new.page.scss"))["default"]]
      })], NewPage);
      /***/
    },

    /***/
    "./src/app/services/address.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/address.service.ts ***!
      \*********************************************/

    /*! exports provided: AddressService */

    /***/
    function srcAppServicesAddressServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddressService", function () {
        return AddressService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddressService = /*#__PURE__*/function () {
        function AddressService(http, authService, platform) {
          _classCallCheck(this, AddressService);

          this.http = http;
          this.authService = authService;
          this.platform = platform;
        }

        _createClass(AddressService, [{
          key: "GetUserAddress",
          value: function GetUserAddress(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'GetUserAddresses';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetAddressTypes",
          value: function GetAddressTypes() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'GetAddressTypes';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data2 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetStates",
          value: function GetStates() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'GetStates';

            if (this.platform.is('android')) {
              var data = {
                type: type
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data3 = JSON.stringify({
                type: type
              });

              return this.http.post(url, _data3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetLga",
          value: function GetLga(stateid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'GetLGAs';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                stateid: stateid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data4 = JSON.stringify({
                type: type,
                stateid: stateid
              });

              return this.http.post(url, _data4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetTowns",
          value: function GetTowns(lgaid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'GetTowns';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                lgaid: lgaid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data5 = JSON.stringify({
                type: type,
                lgaid: lgaid
              });

              return this.http.post(url, _data5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetBusStops",
          value: function GetBusStops(townid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'GetBusStops';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                townid: townid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data6 = JSON.stringify({
                type: type,
                townid: townid
              });

              return this.http.post(url, _data6).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetStreets",
          value: function GetStreets(busstopid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'GetStreets';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                busstopid: busstopid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data7 = JSON.stringify({
                type: type,
                busstopid: busstopid
              });

              return this.http.post(url, _data7).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "DeleteUserAddresses",
          value: function DeleteUserAddresses(addressid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'DeleteUserAddresses';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                addressid: addressid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data8 = JSON.stringify({
                type: type,
                addressid: addressid
              });

              return this.http.post(url, _data8).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "MakeUserAddressDefault",
          value: function MakeUserAddressDefault(sid, addressid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'MakeUserAddressDefault';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                addressid: addressid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data9 = JSON.stringify({
                type: type,
                sid: sid,
                addressid: addressid
              });

              return this.http.post(url, _data9).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "AddNewAddress",
          value: function AddNewAddress(sid, addresstype, state, lga, town, busstop, street, closeto, housenumber, phone, postal, defaultadd) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MAddressServlet';
            var type = 'AddNewAddress';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                addresstype: addresstype,
                state: state,
                lga: lga,
                town: town,
                busstop: busstop,
                street: street,
                closeto: closeto,
                housenumber: housenumber,
                phone: phone,
                postal: postal,
                defaultadd: defaultadd
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data10 = JSON.stringify({
                type: type,
                sid: sid,
                addresstype: addresstype,
                state: state,
                lga: lga,
                town: town,
                busstop: busstop,
                street: street,
                closeto: closeto,
                housenumber: housenumber,
                phone: phone,
                postal: postal,
                defaultadd: defaultadd
              });

              return this.http.post(url, _data10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }]);

        return AddressService;
      }();

      AddressService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      AddressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], AddressService);
      /***/
    },

    /***/
    "./src/app/services/order.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/order.service.ts ***!
      \*******************************************/

    /*! exports provided: OrderService */

    /***/
    function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(http, authService, platform) {
          _classCallCheck(this, OrderService);

          this.http = http;
          this.authService = authService;
          this.platform = platform;
        }

        _createClass(OrderService, [{
          key: "GetOrders",
          value: function GetOrders(sid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MOrderServlet';
            var type = 'GetOrders';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data11 = JSON.stringify({
                type: type,
                sid: sid
              });

              return this.http.post(url, _data11).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "ReviewProduct",
          value: function ReviewProduct(sid, productid, ratevalue, comment) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MOrderServlet';
            var type = 'ReviewProduct';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                productid: productid,
                ratevalue: ratevalue,
                comment: comment
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data12 = JSON.stringify({
                type: type,
                sid: sid,
                productid: productid,
                ratevalue: ratevalue,
                comment: comment
              });

              return this.http.post(url, _data12).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "UpdateOrderStatus",
          value: function UpdateOrderStatus(sid, orderid, statusid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MOrderServlet';
            var type = 'UpdateOrderStatus';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                sid: sid,
                orderid: orderid,
                statusid: statusid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data13 = JSON.stringify({
                type: type,
                sid: sid,
                orderid: orderid,
                statusid: statusid
              });

              return this.http.post(url, _data13).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }, {
          key: "GetProductDetails",
          value: function GetProductDetails(orderid) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'MOrderServlet';
            var type = 'GetOrderDetails';

            if (this.platform.is('android')) {
              var data = {
                type: type,
                orderid: orderid
              };
              return this.authService.nativeHttpRequest(url, data);
            } else {
              var _data14 = JSON.stringify({
                type: type,
                orderid: orderid
              });

              return this.http.post(url, _data14).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return res;
              }));
            }
          }
        }]);

        return OrderService;
      }();

      OrderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({
        providedIn: 'root'
      })], OrderService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map