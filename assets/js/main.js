/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroll)
/* harmony export */ });


// import DisableCover from 'controller/DisableCover';

/**
 * import Scroll from 'utils/Scroll';
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    _classCallCheck(this, Scroll);
  }
  _createClass(Scroll, null, [{
    key: "to",
    value:
    /**
     * @example Scroll.to(0,1,Power2.easeOut);
     */
    function to(y) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .3;
      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Power3.easeInOut;
      TweenMax.to([document.body, document.documentElement], time, {
        scrollTop: y,
        ease: ease
      });

      // DisableCover.timer(time);
    }

    /**
     * @example Scroll.set(0);
     */
  }, {
    key: "set",
    value: function set() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var tgt;
      if ('scrollingElement' in document) tgt = document.scrollingElement;else if ('WebkitAppearance' in document.documentElement.style) tgt = document.body;else tgt = document.documentElement;
      tgt.scrollTop = y;
    }
  }]);
  return Scroll;
}();


/***/ })
/******/ 	]);
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// import frag from "./../../assets/shader/main.frag?raw";
// import vert from "./../../assets/shader/main.vert?raw";
var main = /*#__PURE__*/function () {
  function main() {
    var _this = this;
    _classCallCheck(this, main);
    this.width = window.innerWidth;
    this.height = window.innerWidth;
    this.header = document.getElementById('header');
    this.toTop = document.getElementById('to-top');
    this.top = document.getElementById('top');
    this.menu = document.getElementById('menu');
    this.footer = document.getElementById('footer');
    this.qa = document.getElementsByClassName('q');
    this.qaFaq = document.getElementsByClassName('qa-faq');
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.scroller = document.body;
    this.scrollingElement = 'scrollingElement' in document ? document.scrollingElement : window.navigator.userAgent.indexOf('WebKit') != -1 ? body : document.documentElement || body.parentNode;
    gsap.registerPlugin(ScrollTrigger);
    this.init();
    this.animationScroll();
    for (var i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
    }
    for (var _i = 0; _i < this.qa.length; _i++) {
      this.qa[_i].addEventListener('click', this.triggerQa.bind(this));
    }
    for (var _i2 = 0; _i2 < this.scrollTrigger.length; _i2++) {
      this.scrollTrigger[_i2].addEventListener('click', this.toScroll.bind(this));
    }
    window.onresize = function () {
      _this.resizeEvent();
    };
    window.onscroll = function () {
      _this.scrollAnimation();
    };
  }
  _createClass(main, [{
    key: "detectHeight",
    value: function detectHeight() {
      for (var i = 0; i < this.qaFaq.length; i++) {
        var faq = this.qaFaq[i];
        var a = faq.getElementsByClassName('a')[0];
        var aInner = faq.getElementsByClassName('a__inner')[0];
        if (faq.classList.contains('active')) {
          a.setAttribute('style', "height: ".concat(aInner.clientHeight, "px"));
        }
      }
    }
  }, {
    key: "animationScroll",
    value: function animationScroll() {
      var addactive = document.getElementsByClassName('addactive');
      var _loop = function _loop() {
        var elm = addactive[i];
        var start = "top center+=".concat(window.innerHeight / 4);
        if (elm.classList.contains('first')) {
          start = "top center+=".concat(window.innerHeight / 2);
        }
        gsap.to(elm, {
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: elm,
            start: start,
            onEnter: function onEnter() {
              elm.classList.add('active');
              if (elm.classList.contains('show')) {
                setTimeout(function () {
                  elm.classList.add('nowillchange');
                }, 3000);
              }
            }
          }
        });
      };
      for (var i = 0; i < addactive.length; i++) {
        _loop();
      }
    }
  }, {
    key: "triggerQa",
    value: function triggerQa(e) {
      var elm;
      if (e instanceof HTMLElement) {
        elm = e;
      } else {
        elm = e.currentTarget;
      }
      var parent = elm.parentNode;
      var a = parent.getElementsByClassName('a')[0];
      var aInner = a.getElementsByClassName('a__inner')[0];
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
        a.setAttribute('style', "height: 0");
      } else {
        parent.classList.add('active');
        a.setAttribute('style', "height: ".concat(aInner.clientHeight, "px"));
      }
    }
  }, {
    key: "toScroll",
    value: function toScroll(e) {
      var elm = e.currentTarget;
      var target = document.getElementById(elm.getAttribute('data-target'));
      var elemRect = target.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      var top = elemRect.top + scrollY;
      top -= this.header.clientHeight;
      _utils_Scroll__WEBPACK_IMPORTED_MODULE_0__["default"].to(top, 2);
      if (elm.classList.contains('open')) {
        this.triggerQa(target.getElementsByClassName('q')[0]);
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.resizeEvent();
      window.scrollTo(0, 0);
      document.body.classList.add('loaded');
    }
  }, {
    key: "resizeEvent",
    value: function resizeEvent() {
      var vh = window.innerHeight * 0.01;
      // カスタム変数--vhの値をドキュメントのルートに設定
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      ScrollTrigger.refresh();
      this.detectHeight();
    }
  }, {
    key: "scrollAnimation",
    value: function scrollAnimation() {
      this.scrollY = this.scrollingElement.scrollTop;
      if (this.scrollY > this.height) {
        this.toTop.classList.add('active');
      } else {
        this.toTop.classList.remove('active');
      }
    }
  }]);
  return main;
}();
window.addEventListener("load", function () {
  new main();
});
})();

/******/ })()
;