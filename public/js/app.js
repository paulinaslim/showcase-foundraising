/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/accordion-js/dist/accordion.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Accordion v3.3.4
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 *
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

!function(e){var t=0,n=function e(n,s){var i=this,r=this,o=!1;if(Array.isArray(n))return!!n.length&&n.map((function(t){return new e(t,s)}));var a={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},s);var e="string"==typeof n;this.container=e?document.querySelector(n):n,this.createDefinitions(),r.attachEvents()},createDefinitions:function(){var e=this,n=this.options,s=n.elementClass,i=n.openOnInit,r=n.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(u(s));this.elements=Array.from(r).filter((function(e){return e.classList&&e.classList.contains(s)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(n){n.classList.add("js-enabled"),e.generateIDs(n),e.setARIA(n),e.setTransition(n);var s=e.elements.indexOf(n);t++,i.includes(s)?e.showElement(n,!1):e.closeElement(n,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,s=n.duration,i=n.panelClass,r=e.querySelector(u(i)),o=l("transitionDuration");r.style[o]=t?null:"".concat(s,"ms")},generateIDs:function(e){var n=this.options,s=n.triggerClass,i=n.panelClass,r=e.querySelector(u(s)),o=e.querySelector(u(i));e.setAttribute("id",e.id||"ac-".concat(t)),r.setAttribute("id",r.id||"ac-trigger-".concat(t)),o.setAttribute("id",o.id||"ac-panel-".concat(t))},removeIDs:function(e){var t=this.options,n=t.triggerClass,s=t.panelClass,i=e.querySelector(u(n)),r=e.querySelector(u(s));e.id.startsWith("ac-")&&e.removeAttribute("id"),i.id.startsWith("ac-")&&i.removeAttribute("id"),r.id.startsWith("ac-")&&r.removeAttribute("id")},setARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.setAttribute("role","button"),r.setAttribute("aria-controls",o.id),r.setAttribute("aria-disabled",!1),r.setAttribute("aria-expanded",!1),o.setAttribute("role","region"),o.setAttribute("aria-labelledby",r.id)}},updateARIA:function(e,t){var n=t.ariaExpanded,s=t.ariaDisabled,i=this.options,r=i.ariaEnabled,o=i.triggerClass;if(r){var a=e.querySelector(u(o));a.setAttribute("aria-expanded",n),a.setAttribute("aria-disabled",s)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.removeAttribute("role"),r.removeAttribute("aria-controls"),r.removeAttribute("aria-disabled"),r.removeAttribute("aria-expanded"),o.removeAttribute("role"),o.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(u(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.collapse,o=n.beforeOpen;t&&o(e);var a=e.querySelector(u(s)),l=a.scrollHeight;e.classList.add(i),requestAnimationFrame((function(){requestAnimationFrame((function(){a.style.height=t?"".concat(l,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!r})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.beforeClose,o=e.querySelector(u(s)),a=o.scrollHeight;e.classList.remove(i),t?(r(e),requestAnimationFrame((function(){o.style.height="".concat(a,"px"),requestAnimationFrame((function(){o.style.height=0}))}))):o.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,s=t.collapse,i=e.classList.contains(n);if(!i||s)return i?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,s){t.classList.contains(n)&&s!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(s,i){s.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=i,t.closeElements(),t.focus(e,s),t.toggleElement(s))}))},handleKeydown:function(e){switch(e.key){case"ArrowUp":return this.focusPrevElement(e);case"ArrowDown":return this.focusNextElement(e);case"Home":return this.focusFirstElement(e);case"End":return this.focusLastElement(e);default:return null}},handleFocus:function(e){var t=e.currentTarget,n=this.elements.find((function(e){return e.contains(t)}));this.currFocusedIdx=this.elements.indexOf(n)},handleTransitionEnd:function(e){if(e.stopPropagation(),"height"===e.propertyName){var t=this.options,n=t.onOpen,s=t.onClose,i=e.currentTarget,r=parseInt(i.style.height),o=this.elements.find((function(e){return e.contains(i)}));r>0?(i.style.height="auto",n(o)):s(o)}}};this.attachEvents=function(){if(!o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.handleClick=a.handleClick.bind(a),a.handleKeydown=a.handleKeydown.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleTransitionEnd=a.handleTransitionEnd.bind(a),a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.addEventListener("click",a.handleClick),s.addEventListener("keydown",a.handleKeydown),s.addEventListener("focus",a.handleFocus),i.addEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.addEventListener("transitionend",a.handleTransitionEnd)})),o=!0}},this.detachEvents=function(){if(o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.removeEventListener("click",a.handleClick),s.removeEventListener("keydown",a.handleKeydown),s.removeEventListener("focus",a.handleFocus),i.removeEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.removeEventListener("transitionend",a.handleTransitionEnd)})),o=!1}},this.toggle=function(e){var t=a.elements[e];t&&a.toggleElement(t)},this.open=function(e){var t=a.elements[e];t&&a.showElement(t)},this.openAll=function(){var e=a.options,t=e.activeClass,n=e.onOpen;a.elements.forEach((function(e){e.classList.contains(t)||(a.showElement(e,!1),n(e))}))},this.close=function(e){var t=a.elements[e];t&&a.closeElement(t)},this.closeAll=function(){var e=a.options,t=e.activeClass,n=e.onClose;a.elements.forEach((function(e){e.classList.contains(t)&&(a.closeElement(e,!1),n(e))}))},this.destroy=function(){i.detachEvents(),i.openAll(),a.elements.forEach((function(e){a.removeIDs(e),a.removeARIA(e),a.setTransition(e,!0)})),o=!0},this.update=function(){a.createDefinitions(),i.detachEvents(),i.attachEvents()};var l=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=c(e),e="webkit".concat(e))},c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},u=function(e){return".".concat(CSS.escape(e))};a.init()}; true&&void 0!==module.exports?module.exports=n:e.Accordion=n}(window);

/***/ }),

/***/ "./resources/js/accordion.js":
/*!***********************************!*\
  !*** ./resources/js/accordion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener("DOMContentLoaded", function () {
  var accordionContainers = document.querySelectorAll(".accordion-container");
  accordionContainers.forEach(function (container) {
    new (accordion_js__WEBPACK_IMPORTED_MODULE_0___default())(container, {
      duration: 400,
      showMultiple: false
    });
    var firstPanel = container.querySelector(".ac-active .ac-panel");
    if (firstPanel) {
      firstPanel.style.visibility = "visible";
      firstPanel.style.height = "auto";
    }
  });
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./resources/js/accordion.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./resources/js/navbar.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./resources/js/form.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cookieConsent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookieConsent */ "./resources/js/cookieConsent.js");





document.addEventListener("DOMContentLoaded", function () {
  console.log("hallo cookies loaded");
  new _cookieConsent__WEBPACK_IMPORTED_MODULE_3__["default"]();
});

/***/ }),

/***/ "./resources/js/cookieConsent.js":
/*!***************************************!*\
  !*** ./resources/js/cookieConsent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JsCookieConsent)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



//! all attributes
//! data-jcc
//! data-jcc-disabled
//! data-jcc-script

//! data-jcc-detailcontent
//! data-jcc-detailtable
//! data-jcc-option

//! data-jcc-accept
//! data-jcc-refuse
//! data-jcc-details
//! data-jcc-savedetails

//! data-jcc-donottrack
//! data-jcc-donottrackclose
//! data-jcc-donottracktime

//! data-jcc-extmed
//! data-jcc-extmed-iframe
//! data-jcc-extmed-view
//! data-jcc-extmed-btn
var JsCookieConsent = /*#__PURE__*/function () {
  function JsCookieConsent() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JsCookieConsent);
    this.attrName = settings.attrName || "jcc";
    this.cookieconsentEl = document.querySelector("[data-".concat(this.attrName, "]"));
    this.extmedCookieName = "".concat(this.attrName, "-externalmedia");
    window["".concat(this.attrName)] = this;
    if (this.cookieconsentEl) {
      //create settings
      this.settings = {
        expireDays: settings.expireDays || 30,
        optionCookie: settings.optionCookie || "cookieoption",
        options: settings.options || {
          required: {},
          analysis: {},
          marketing: {}
        },
        doNotTrack: settings.doNotTrack || false,
        doNotTrackHideTime: settings.doNotTrackHideTime || 5000,
        doNotTrackAnimationTime: settings.doNotTrackAnimationTime || 2000
      };
      this.init();
      this.initEvents();

      //check if ExternalMedia option is set
      if (this.settings.options.externalmedia) {
        new ExternalMedia(this.attrName, this.settings.optionCookie, this.extmedCookieName);
      }
    } else {
      this.consoleMessage();
    }
  }
  return _createClass(JsCookieConsent, [{
    key: "init",
    value: function init() {
      this.domain = window.location.hostname;
      this.isIE = window.navigator.userAgent.includes("Trident");
      this.isDoNotTrackEnabled = false;

      //init DOM
      this.detailContent = this.cookieconsentEl.querySelector("[data-".concat(this.attrName, "-detailcontent]"));
      this.detailTable = this.cookieconsentEl.querySelector("[data-".concat(this.attrName, "-detailtable]"));
      this.isDisabled = document.querySelector("[data-".concat(this.attrName, "-disabled]"));
      this.cookieOptionInputs = Array.from(this.cookieconsentEl.querySelectorAll("[data-".concat(this.attrName, "-option]")));
      this.acceptBtns = Array.from(document.querySelectorAll("[data-".concat(this.attrName, "-accept]")));
      this.refuseBtns = Array.from(document.querySelectorAll("[data-".concat(this.attrName, "-refuse]")));
      this.detailsBtn = this.cookieconsentEl.querySelector("[data-".concat(this.attrName, "-details]"));
      this.saveDetailsBtn = this.cookieconsentEl.querySelector("[data-".concat(this.attrName, "-savedetails]"));
      this.changeCookieSettingsBtns = Array.from(document.querySelectorAll("[data-".concat(this.attrName, "-changeSettingsBtn]")));
      this.trackingScripts = Array.from(document.querySelectorAll("[data-".concat(this.attrName, "-script]")));

      //init element
      var cookie = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.settings.optionCookie);
      this.currentCookieOptions = {};
      try {
        if (cookie) this.currentCookieOptions = JSON.parse(cookie);
      } catch (error) {
        this.currentCookieOptions = {};
        cookie = false;
      }
      if (!cookie) {
        //init doNotTrack
        this.initDoNotTrack();
        if (!this.isDisabled && !this.isDoNotTrackEnabled) {
          //open cookieconsent
          this.cookieconsentEl.classList.remove("hidden");
        }
      } else {
        if (!this.isDoNotTrackEnabled) this.changeScriptTagType();
        this.removeCookies();
      }
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;
      if (this.acceptBtns) this.acceptBtns.forEach(function (btn) {
        return btn.addEventListener("click", _this.onAcceptBtnClick.bind(_this));
      });
      if (this.refuseBtns) this.refuseBtns.forEach(function (btn) {
        return btn.addEventListener("click", _this.onRefuseBtnClick.bind(_this));
      });
      if (this.changeCookieSettingsBtns) this.changeCookieSettingsBtns.forEach(function (btn) {
        return btn.addEventListener("click", _this.onChangeCookieSettingsBtnClick.bind(_this));
      });
      if (this.detailContent) {
        this.detailAccordion = new (accordion_js__WEBPACK_IMPORTED_MODULE_1___default())(this.detailContent, {
          duration: 350,
          activeClass: "is-open"
        });
        new (accordion_js__WEBPACK_IMPORTED_MODULE_1___default())(this.detailTable, {
          duration: 350,
          activeClass: "is-open"
        });
        this.detailsBtn && this.detailsBtn.addEventListener("click", this.onDetailsBtnClick.bind(this));
        this.saveDetailsBtn && this.saveDetailsBtn.addEventListener("click", this.onSaveDetailsBtnClick.bind(this));
      } else {
        this.consoleMessage("detailcontent");
      }
    }

    //Cookie Option
  }, {
    key: "setCookieOption",
    value: function setCookieOption(option) {
      if (option) {
        var expires = new Date();
        expires.setTime(expires.getTime() + 3600000 * 24 * this.settings.expireDays);
        js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.settings.optionCookie, option, {
          expires: expires
        });
        this.currentCookieOptions = option;
      } else {
        this.consoleMessage("cookie");
      }
    }
  }, {
    key: "createCookieOptionFromInputs",
    value: function createCookieOptionFromInputs() {
      var _this2 = this;
      var optionValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "inputValue";
      if (this.cookieOptionInputs.length) {
        var option = {};
        this.cookieOptionInputs.forEach(function (el) {
          var optionName = el.dataset["".concat(_this2.attrName, "Option")];
          if (!_this2.settings.options[optionName].required) {
            if (optionValue === "inputValue") {
              option[optionName] = el.checked;
            } else {
              option[optionName] = optionValue;
            }
          }
        });
        this.setCookieOption(option);
      } else {
        this.consoleMessage("option");
      }
    }

    //On btn clicks
  }, {
    key: "onAcceptBtnClick",
    value: function onAcceptBtnClick() {
      //Set CookieOption
      this.createCookieOptionFromInputs(true);
      //Load Scripts
      this.changeScriptTagType();
      //Close Cookie Consent
      this.closeCookieConsent();
      //Show ExternalMedia Elements
      this.showExternalMediaElements();
    }
  }, {
    key: "onRefuseBtnClick",
    value: function onRefuseBtnClick() {
      //Set CookieOption
      this.createCookieOptionFromInputs(false);
      //Remove Cookies
      this.removeCookies();
      //Load Scripts
      this.changeScriptTagType();
      //Close Cookie Consent
      this.closeCookieConsent();
    }
  }, {
    key: "onDetailsBtnClick",
    value: function onDetailsBtnClick() {
      if (this.detailContent) {
        this.detailAccordion.open(0);
        this.detailsBtn.classList.add("hidden");
        this.saveDetailsBtn.classList.remove("hidden");
      } else {
        this.consoleMessage("detailcontent");
      }
    }
  }, {
    key: "onSaveDetailsBtnClick",
    value: function onSaveDetailsBtnClick() {
      //Set CookieOption
      this.createCookieOptionFromInputs();
      //Remove Cookies
      this.removeCookies();
      //Load Scripts
      this.changeScriptTagType();
      //Close Cookie Consent
      this.closeCookieConsent();
    }
  }, {
    key: "onChangeCookieSettingsBtnClick",
    value: function onChangeCookieSettingsBtnClick() {
      var _this3 = this;
      if (this.cookieconsentEl.classList.contains("hidden")) {
        this.cookieconsentEl.classList.remove("hidden");
        this.onDetailsBtnClick();
        this.cookieOptionInputs.forEach(function (el) {
          var optionName = el.dataset["".concat(_this3.attrName, "Option")];
          var optionState = _this3.currentCookieOptions[optionName];
          if (optionState) {
            el.checked = true;
          }
        });
      }
    }

    //Close Cookie Consent
  }, {
    key: "closeCookieConsent",
    value: function closeCookieConsent() {
      this.cookieconsentEl.classList.add("hidden");
    }
  }, {
    key: "changeScriptTagType",
    value: function changeScriptTagType() {
      var _this4 = this;
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "javascript";
      var singleOptionToDisable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (this.trackingScripts.length) {
        this.trackingScripts.forEach(function (el) {
          var dataValue = el.dataset["".concat(_this4.attrName, "Script")];
          var option = _this4.currentCookieOptions[dataValue];
          if (dataValue === singleOptionToDisable && type === "plain") {
            el.type = "text/plain";
          } else if (singleOptionToDisable === "all" && type === "plain") {
            el.type = "text/plain";
          }
          if (option && type === "javascript") {
            var newScriptEl = document.createElement("script");
            for (var i = 0; i < el.attributes.length; i++) {
              var attribute = el.attributes[i];
              if (attribute.value !== "") {
                newScriptEl.setAttribute(attribute.name, attribute.value);
              }
              newScriptEl.setAttribute("type", "text/javascript");
            }
            newScriptEl.text = el.text;
            el.parentNode.insertBefore(newScriptEl, el);
            el.parentNode.removeChild(el);
          } else if (typeof option === "undefined" && type === "javascript") {
            _this4.consoleMessage("scriptoptionjavascript");
          }
        });

        //init all changed trackingScripts again (important for changeSettings function)
        this.trackingScripts = Array.from(document.querySelectorAll("[data-".concat(this.attrName, "-script]")));
      } else {
        this.consoleMessage("script");
      }
    }

    //Remove Cookies
  }, {
    key: "removeCookies",
    value: function removeCookies() {
      var _this5 = this;
      Object.keys(this.settings.options).forEach(function (key) {
        var settings = _this5.settings.options[key];
        var cookies = settings.cookies || 0;
        var isRequired = settings.required || false;
        var isAllowed = _this5.currentCookieOptions[key];
        if (!isRequired && cookies.length && !isAllowed) {
          cookies.forEach(function (cookie) {
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(cookie, {
              path: "",
              domain: _this5.isIE ? "" : _this5.domain
            });
          });
        } else if (!cookies) {
          _this5.consoleMessage("optionobjcookies");
        }
      });
    }

    //Do Not Track
  }, {
    key: "initDoNotTrack",
    value: function initDoNotTrack() {
      if (this.settings.doNotTrack) {
        if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || "msTrackingProtectionEnabled" in window.external) {
          // The browser supports Do Not Track!
          if (window.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.doNotTrack === "1" || navigator.msDoNotTrack === "1" || window.external.msTrackingProtectionEnabled()) {
            // Do Not Track is enabled!
            this.isDoNotTrackEnabled = true;
          }
        }
        if (this.isDoNotTrackEnabled) {
          this.doNotTrackEl = document.querySelector("[data-".concat(this.attrName, "-donottrack]"));
          this.doNotTrackTimeEl = document.querySelector("[data-".concat(this.attrName, "-donottracktime]"));
          if (this.doNotTrackEl) {
            this.doNotTrackEl.addEventListener("mouseout", this.resumeTimeout.bind(this));
            this.doNotTrackEl.addEventListener("mouseover", this.pauseTimeout.bind(this));
            this.doNotTrackElCloseBtn = this.doNotTrackEl.querySelector("[data-".concat(this.attrName, "-donottrackclose]"));
            this.doNotTrackElCloseBtn && this.doNotTrackElCloseBtn.addEventListener("click", this.onDoNotTrackElCloseBtnClick.bind(this));
            this.showDoNotTrackEl();
          } else {
            this.consoleMessage("donottrack");
          }
        }
      }
    }
  }, {
    key: "showDoNotTrackEl",
    value: function showDoNotTrackEl() {
      var _this6 = this;
      this.doNotTrackEl.classList.remove("hidden");
      this.createCookieOptionFromInputs(false);
      if (this.settings.doNotTrackHideTime !== -1) {
        this.doNotTrackTimeOut = new Timer(function () {
          _this6.hideDoNotTrackEl();
        }, this.settings.doNotTrackHideTime, this.doNotTrackTimeEl);
      }
    }
  }, {
    key: "hideDoNotTrackEl",
    value: function hideDoNotTrackEl() {
      var _this7 = this;
      this.doNotTrackEl.classList.add("is-animated");
      setTimeout(function () {
        _this7.doNotTrackEl.classList.add("hidden");
        _this7.doNotTrackEl.classList.remove("is-animated");
      }, this.settings.doNotTrackAnimationTime);
    }
  }, {
    key: "resumeTimeout",
    value: function resumeTimeout() {
      this.doNotTrackTimeOut && this.doNotTrackTimeOut.resume();
    }
  }, {
    key: "pauseTimeout",
    value: function pauseTimeout() {
      this.doNotTrackTimeOut && this.doNotTrackTimeOut.pause();
    }
  }, {
    key: "onDoNotTrackElCloseBtnClick",
    value: function onDoNotTrackElCloseBtnClick() {
      this.doNotTrackTimeOut && this.doNotTrackTimeOut.stop();
      this.hideDoNotTrackEl();
    }

    //An Function to Set Cookies with the CookieConsent-Script (please use this function whenever you need to set a cookie in your project)
  }, {
    key: "setCookie",
    value: function setCookie(option, cookiename) {
      var cookievalue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var expiresDays = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var ccOptions = this.settings.options;
      if (option && cookiename && expiresDays) {
        var expires = "";
        if (!ccOptions[option].session) {
          expires = new Date();
          expires.setTime(expires.getTime() + 3600000 * 24 * expiresDays);
        }
        js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(cookiename, cookievalue, {
          expires: expires
        });
      } else {
        console.error("CookieConsent can't create the cookie.");
      }
    }

    //Console messages for error calls
  }, {
    key: "consoleMessage",
    value: function consoleMessage() {
      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
      switch (error) {
        case "option":
          console.error("CookieConsent DOM not found: You must define an element with the attributes data-".concat(this.attrName, "-option!"));
          break;
        case "detailcontent":
          console.error("CookieConsent DOM not found: You must define an element with the attribute data-".concat(this.attrName, "-detailcontent!"));
          break;
        case "script":
          console.error("CookieConsent DOM not found: You must define an element with the attribute data-".concat(this.attrName, "-script!"));
          break;
        case "scriptoption":
          console.error("CookieConsent Option not found: The value from data-".concat(this.attrName, "-script was not declared as option!"));
          break;
        case "cookie":
          console.error("CookieConsent cookie could not be set!");
          break;
        case "optionobjcookies":
          console.error("CookieConsent Option not found: options-obj cookies was not set!");
          break;
        case "donottrack":
          console.error("CookieConsent \"Do not Track\" is enabled but can't find DOM: You must define an element with the attribute data-".concat(this.attrName, "-donottrack!"));
          break;
        default:
          console.error("CookieConsent DOM not found: You must define an element with the attribute data-".concat(this.attrName, "!"));
          break;
      }
    }
  }, {
    key: "showExternalMediaElements",
    value: function showExternalMediaElements() {
      Array.from(document.querySelectorAll("[data-".concat(this.attrName, "-extmed]"))).forEach(function (el) {
        console.log(el);
      });
    }
  }]);
}(); //Timer for "do-not-track"

var Timer = /*#__PURE__*/function () {
  function Timer(callback, delay, timeEl) {
    _classCallCheck(this, Timer);
    this.delay = delay;
    this.callback = callback;
    this.timerId = delay;
    this.start = new Date();
    this.remaining = delay;
    this.timeEl = timeEl;
    this.progressPercent = 0;
    this.resume();
  }
  return _createClass(Timer, [{
    key: "pause",
    value: function pause() {
      window.clearTimeout(this.timerId);
      this.remaining -= new Date() - this.start;
      if (this.timeEl) window.clearInterval(this.progress);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.start = new Date();
      this.timerId = window.setTimeout(this.callback, this.remaining);
      if (this.timeEl) {
        this.progressInterval(this.remaining);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      window.clearTimeout(this.timerId);
      if (this.timeEl) window.clearInterval(this.progress);
    }
  }, {
    key: "progressInterval",
    value: function progressInterval(currentTime) {
      var _this8 = this;
      var progressPercent = 0;
      var time = 0;
      var startTime = new Date();
      this.progress = setInterval(function () {
        time = currentTime;
        time -= new Date() - startTime;
        if (time <= 0) {
          progressPercent = 100;
          clearInterval(_this8.progress);
        } else {
          progressPercent = (_this8.delay - time) / _this8.delay * 100;
        }
        _this8.timeEl.style.width = "".concat(progressPercent, "%");
      }, 10);
    }
  }]);
}(); // ExternalMedia Option
var ExternalMedia = /*#__PURE__*/_createClass(function ExternalMedia(attrName, optionCookieName, extmedCookieName) {
  _classCallCheck(this, ExternalMedia);
  Array.from(document.querySelectorAll("[data-".concat(attrName, "-extmed]"))).forEach(function (el) {
    return new ExternalMediaElement(el, attrName, optionCookieName, extmedCookieName);
  });
});
var ExternalMediaElement = /*#__PURE__*/function () {
  function ExternalMediaElement(el, attrName, optionCookieName, extmedCookieName) {
    _classCallCheck(this, ExternalMediaElement);
    this.cookiename = extmedCookieName;
    this.src = el.dataset["".concat(attrName, "Extmed")];
    this.iframe = el.querySelector("[data-".concat(attrName, "-extmed-iframe]"));
    this.view = el.querySelector("[data-".concat(attrName, "-extmed-view]"));
    this.btn = el.querySelector("[data-".concat(attrName, "-extmed-btn]"));
    var JCCcookie = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(optionCookieName);
    var optionCookie = JCCcookie ? JSON.parse(JCCcookie) : null;
    var externalMediaCookie = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.cookiename);
    if (optionCookie !== null && optionCookie !== void 0 && optionCookie.externalmedia || externalMediaCookie) {
      this.showIframe();
    }
    this.btn && this.btn.addEventListener("click", this.onBtnClick.bind(this));
  }
  return _createClass(ExternalMediaElement, [{
    key: "onBtnClick",
    value: function onBtnClick() {
      this.setExternalMediaCookie();
      this.showIframe();
    }
  }, {
    key: "showIframe",
    value: function showIframe() {
      this.iframe.src = this.src;
      this.view.classList.add("hidden");
      this.iframe.classList.remove("hidden");
    }
  }, {
    key: "setExternalMediaCookie",
    value: function setExternalMediaCookie() {
      js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.cookiename, true);
    }
  }]);
}();

/***/ }),

/***/ "./resources/js/form.js":
/*!******************************!*\
  !*** ./resources/js/form.js ***!
  \******************************/
/***/ (() => {

// resources/js/form.js

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".application-form");
  var successAlert = form.querySelector(".success");
  var dangerAlert = form.querySelector(".danger");
  var submitButton = form.querySelector(".button");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    var jsonData = {};
    formData.forEach(function (value, key) {
      return jsonData[key] = value;
    });
    console.log("form start");
    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
      },
      body: JSON.stringify(jsonData)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.errors) {
        console.log("Validation errors occurred", data.errors);
        dangerAlert.style.display = "block";
      } else {
        console.log("Form submitted successfully!");
        successAlert.style.display = "block";
        form.reset();
      }
    })["catch"](function (error) {
      console.error("Error:", error);
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

/***/ }),

/***/ "./resources/js/navbar.js":
/*!********************************!*\
  !*** ./resources/js/navbar.js ***!
  \********************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var formButton = document.querySelector(".btn-application");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  formButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#form").scrollIntoView({
      behavior: "smooth"
    });
  });
});

/***/ }),

/***/ "./resources/sass/components/form.scss":
/*!*********************************************!*\
  !*** ./resources/sass/components/form.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/components/hero.scss":
/*!*********************************************!*\
  !*** ./resources/sass/components/hero.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/components/nav.scss":
/*!********************************************!*\
  !*** ./resources/sass/components/nav.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/home.scss":
/*!**********************************!*\
  !*** ./resources/sass/home.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/settings/_variables.scss":
/*!*************************************************!*\
  !*** ./resources/sass/settings/_variables.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/settings/elements.scss":
/*!***********************************************!*\
  !*** ./resources/sass/settings/elements.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/settings/global.scss":
/*!*********************************************!*\
  !*** ./resources/sass/settings/global.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/settings/mixins.scss":
/*!*********************************************!*\
  !*** ./resources/sass/settings/mixins.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/settings/typo.scss":
/*!*******************************************!*\
  !*** ./resources/sass/settings/typo.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/components/about.scss":
/*!**********************************************!*\
  !*** ./resources/sass/components/about.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/components/cards.scss":
/*!**********************************************!*\
  !*** ./resources/sass/components/cards.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/components/cookieconsent.scss":
/*!******************************************************!*\
  !*** ./resources/sass/components/cookieconsent.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/components/footer.scss":
/*!***********************************************!*\
  !*** ./resources/sass/components/footer.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.mjs":
/*!***************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ api)
/* harmony export */ });
/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/footer": 0,
/******/ 			"css/cookieconsent": 0,
/******/ 			"css/cards": 0,
/******/ 			"css/about": 0,
/******/ 			"css/typo": 0,
/******/ 			"css/mixins": 0,
/******/ 			"css/global": 0,
/******/ 			"css/elements": 0,
/******/ 			"css/_variables": 0,
/******/ 			"css/home": 0,
/******/ 			"css/nav": 0,
/******/ 			"css/hero": 0,
/******/ 			"css/form": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfundraising_showcase"] = self["webpackChunkfundraising_showcase"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/components/about.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/components/cards.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/components/cookieconsent.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/components/footer.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/components/form.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/components/hero.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/components/nav.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/home.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/settings/_variables.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/settings/elements.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/settings/global.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/settings/mixins.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/footer","css/cookieconsent","css/cards","css/about","css/typo","css/mixins","css/global","css/elements","css/_variables","css/home","css/nav","css/hero","css/form"], () => (__webpack_require__("./resources/sass/settings/typo.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;