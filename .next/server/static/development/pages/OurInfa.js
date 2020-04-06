module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/OurInfastructure/Events.js":
/*!*******************************************!*\
  !*** ./common/OurInfastructure/Events.js ***!
  \*******************************************/
/*! exports provided: Events, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\common\\OurInfastructure\\Events.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Events extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-3732376400" + " " + "events",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "Events & Celebrations"), __jsx("div", {
      className: "jsx-3732376400" + " " + "inner_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, "PHOTO GALLERY"), __jsx("div", {
      className: "jsx-3732376400" + " " + "innermost_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, " At Spineor Conceptions, secret to excellence lies in the fun", __jsx("br", {
      className: "jsx-3732376400",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 112
      }
    }), "that we all have together from time-to-time."), __jsx("div", {
      className: "jsx-3732376400" + " " + "small_div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 18
      }
    }, "2020 2019 2018 2015 2014"), __jsx("div", {
      className: "jsx-3732376400" + " " + "image_section1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "image1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-3732376400" + " " + "image1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "rectangle1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "tag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 18
      }
    }, "International Women's Day 2020 "), __jsx("div", {
      className: "jsx-3732376400" + " " + "image_section2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "image2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "rectangle2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 18
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-3732376400" + " " + "image2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "image_section3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "image3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 18
      }
    }), __jsx("div", {
      className: "jsx-3732376400" + " " + "rectangle3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 18
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-3732376400" + " " + "image3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 18
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3732376400",
      __self: this
    }, ".image_section1.jsx-3732376400{position:absolute;width:300px;height:300px;left:378px;top:3184px;}.image1.jsx-3732376400{position:absolute;width:347px;height:326px;left:354px;top:3173px;background:url(sdf.jpg);}.rectangle1.jsx-3732376400{position:absolute;width:300px;height:300px;left:378px;top:3184px;background:#C4C4C4;}.image_section2.jsx-3732376400{position:absolute;width:300px;height:300px;left:679px;top:3184px;}.image2.jsx-3732376400{position:absolute;width:562px;height:562px;left:607px;top:3100px;background:url(IMG_2676.jpg);}.rectangle2.jsx-3732376400{position:absolute;width:300px;height:300px;left:679px;top:3184px;background:#C4C4C4;}.image3.jsx-3732376400{position:absolute;width:421px;height:421px;left:909px;top:3123px;background:url(IMG_2672.jpg);}.image_section3.jsx-3732376400{position:absolute;width:300px;height:300px;left:980px;top:3184px;}.rectangle3.jsx-3732376400{position:absolute;width:300px;height:300px;left:980px;top:3184px;background:#C4C4C4;}.tag.jsx-3732376400{position:absolute;width:257px;height:56px;left:378px;top:3478px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:308.7%;color:#000000;}.events.jsx-3732376400{position:absolute;width:464px;height:56px;left:412px;top:2948px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#333333;}.inner_header.jsx-3732376400{position:absolute;width:160px;height:21px;left:574px;top:3024px;font-family:Roboto;font-style:normal;font-weight:900;font-size:18px;line-height:21px;color:#184A88;}.innermost_header.jsx-3732376400{position:absolute;width:590px;height:50px;left:349px;top:3062px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:21px;text-align:center;color:#000000;}.small_div.jsx-3732376400{position:absolute;width:46px;height:280px;left:111px;top:3184px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:18px;line-height:308.7%;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxFdmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0I0QixBQUd1QyxBQU9BLEFBUUEsQUFRQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEFBT0EsQUFRQSxBQWFBLEFBYUEsQUFhQSxBQWNBLGtCQXpITixBQU9BLEFBUUEsQUFRQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEFBT0EsQUFRQSxBQWFBLEFBYUEsQUFhQSxBQWNELFdBQ0UsQ0ExSEEsQUFPQSxBQVFBLEFBUUEsQUFPQSxBQVFBLEFBUUEsQUFRQSxBQU9BLEFBUUQsQUFhQSxBQWFBLEFBYUEsWUF0Q0QsQUFhQSxBQWFBLEFBYUEsQUFjQSxDQTFIQSxBQU9BLEFBUUEsQUFRQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEFBT0EsVUFTQSxBQWFBLEFBYUEsQUFhQSxBQWNBLENBMUhBLEFBT0EsQUFRQSxBQVFBLEFBT0EsQUFRQSxBQVFBLEFBUUEsQUFPQSxVQVNRLEFBYUEsQUFhQSxBQWFBLEFBY0EsQ0ExSHZCLEFBTzRCLEFBUUwsQUFRdkIsQUFPaUMsQUFRVixBQVFVLEFBUWpDLEFBT3VCLGtCQVNELEFBYUEsQUFhQSxBQWFBLEFBY0EsQ0EzR3RCLEFBdUJBLEFBdUJBLEtBdERBLEtBdUJBLEFBZ0JBLE9Bd0J1QixBQWFBLEFBYUgsQUFhRyxBQWNGLGdCQTFCRixDQTJCQSxFQXJEQSxBQWFBLEFBMEJBLFlBWkUsQ0EyQkUsRUFyREEsQUFhRixBQTBCQSxjQVpILEdBYkEsQUEwQkksQUFjSixFQXJEQSxTQTJCbEIsR0FiQSxBQXdDQSxFQXJEQSxFQXVDa0IsY0FDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcbWVyZ2VkLWNvZGUgLW5hdlxcU3BpbmVvci1jb2RlXFxjb21tb25cXE91ckluZmFzdHJ1Y3R1cmVcXEV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzXCI+RXZlbnRzICYgQ2VsZWJyYXRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2hlYWRlclwiPlBIT1RPIEdBTExFUlk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJtb3N0X2hlYWRlclwiPiBBdCBTcGluZW9yIENvbmNlcHRpb25zLCBzZWNyZXQgdG8gZXhjZWxsZW5jZSBsaWVzIGluIHRoZSBmdW48YnIvPlxyXG4gICAgICAgICAgICAgICAgIHRoYXQgd2UgYWxsIGhhdmUgdG9nZXRoZXIgZnJvbSB0aW1lLXRvLXRpbWUuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbF9kaXZcIj4yMDIwIDIwMTkgMjAxOCAyMDE1IDIwMTQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Vfc2VjdGlvbjFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2UxXCIgc3JjPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnXCI+SW50ZXJuYXRpb25hbCBXb21lbidzIERheSAyMDIwIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Vfc2VjdGlvbjJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2UyXCIgc3JjPVwiXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX3NlY3Rpb24zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlM1wiIHNyYz1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5pbWFnZV9zZWN0aW9uMXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzc4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMTg0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uxe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzNTRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMxNzNweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoc2RmLmpwZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVjdGFuZ2xlMXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzc4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMTg0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZV9zZWN0aW9uMntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjc5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMTg0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTYycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NjJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MDdweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoSU1HXzI2NzYuanBnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZWN0YW5nbGUye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2NzlweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMxODRweDsgICBcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzRDNEM0OyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZTN7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MjFweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzEyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChJTUdfMjY3Mi5qcGcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlX3NlY3Rpb24ze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5ODBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMxODRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZWN0YW5nbGUze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5ODBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMxODRweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50YWd7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzc4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNDc4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwOC43JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ldmVudHN7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NjRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyOTQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDU3NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVybW9zdF9oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1OTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMzQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzMDYycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNtYWxsX2RpdntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMxODRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwOC43JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\common\\\\OurInfastructure\\\\Events.js */")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./common/OurInfastructure/Image.js":
/*!******************************************!*\
  !*** ./common/OurInfastructure/Image.js ***!
  \******************************************/
/*! exports provided: Image, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\common\\OurInfastructure\\Image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Image extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2784737153" + " " + "outer_container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "images\\african4.png",
      className: "jsx-2784737153" + " " + "outer_container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2784737153" + " " + "freespace",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2784737153" + " " + "methodology",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-2784737153" + " " + "inner_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, "Delivering Higher", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 34
      }
    }), "Service Levels With ", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 38
      }
    }), "New It-Enabled", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 32
      }
    }), "Capabilities"), __jsx("div", {
      className: "jsx-2784737153" + " " + "para",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, "We're building powerful relationships here at Spineor. We share our", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 84
      }
    }), "experiences collectively and work together to create better products for", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 90
      }
    }), "our clients. We think we can attain the highest outcomes through ", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 84
      }
    }), "cooperation and apply our common understanding and abilities to each", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 87
      }
    }), "project. We think that the voice of everyone matters and that any person", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 92
      }
    }), "can come up with the finest thoughts. Spineor has a flat organizational", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 92
      }
    }), "structure that enables us to be more effective in constructing amazing", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 92
      }
    }), "products so that we can devote our time."), __jsx("p", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 67
      }
    }, "We believe the voice of all matters and the best ideas can come from", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 92
      }
    }), "any individual. Spineor has a flat organizational structure that allows us", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 99
      }
    }), "to be more efficient in building awesome products so that we can spend ", __jsx("br", {
      className: "jsx-2784737153",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 97
      }
    }), "our time.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2784737153",
      __self: this
    }, ".outer_container.jsx-2784737153{position:absolute;width:1300px;height:859px;left:1px;top:778px;}.methodology.jsx-2784737153{position:absolute;width:617px;height:399px;left:34px;top:1238px;background:#184A88;}.freespace.jsx-2784737153{position:absolute;width:699px;height:243px;left:602px;top:1394px;background:#FFFFFF;}.para.jsx-2784737153{position:absolute;width:567px;height:287px;left:693px;top:1466px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}.inner_text.jsx-2784737153{position:absolute;width:517px;height:234px;left:68px;top:1312px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#FFFFFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxJbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCLEFBR3VDLEFBUUMsQUFRSCxBQVFFLEFBYUEsa0JBcENMLEFBUUQsQUFRQSxBQVFBLEFBYUEsWUE1QkMsQUFRQSxBQVFBLEFBYUEsQ0FyQ0EsWUFTSCxBQVFDLEFBUUEsQUFhRCxDQXJDRCxTQUNDLEFBUUMsQUE2QkEsQ0FyQkEsQUFRQSxTQXRCZixDQU91QixBQTZCQSxDQXJCQSxBQVFBLGtCQWZ2QixBQTZCc0IsQ0FyQnRCLEFBUXNCLGlCQWNDLENBYkgsZ0JBQ0QsRUFhQSxhQVpFLEVBYUEsZUFaSCxFQWFBLFlBWmxCLEVBYUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcbWVyZ2VkLWNvZGUgLW5hdlxcU3BpbmVvci1jb2RlXFxjb21tb25cXE91ckluZmFzdHJ1Y3R1cmVcXEltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlcl9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyAgY2xhc3NOYW1lPVwib3V0ZXJfY29udGFpbmVyXCIgc3JjPVwiaW1hZ2VzXFxhZnJpY2FuNC5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyZWVzcGFjZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRob2RvbG9neVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBEZWxpdmVyaW5nIEhpZ2hlcjxici8+XHJcbiAgICAgICAgICAgICAgICAgU2VydmljZSBMZXZlbHMgV2l0aCA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIE5ldyBJdC1FbmFibGVkPGJyLz5cclxuICAgICAgICAgICAgICAgICAgQ2FwYWJpbGl0aWVzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBXZSdyZSBidWlsZGluZyBwb3dlcmZ1bCByZWxhdGlvbnNoaXBzIGhlcmUgYXQgU3BpbmVvci4gV2Ugc2hhcmUgb3VyPGJyLz5cclxuICAgICAgICAgICAgICAgICBleHBlcmllbmNlcyBjb2xsZWN0aXZlbHkgYW5kIHdvcmsgdG9nZXRoZXIgdG8gY3JlYXRlIGJldHRlciBwcm9kdWN0cyBmb3I8YnIvPlxyXG4gICAgICAgICAgICAgICAgICBvdXIgY2xpZW50cy4gV2UgdGhpbmsgd2UgY2FuIGF0dGFpbiB0aGUgaGlnaGVzdCBvdXRjb21lcyB0aHJvdWdoIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIGNvb3BlcmF0aW9uIGFuZCBhcHBseSBvdXIgY29tbW9uIHVuZGVyc3RhbmRpbmcgYW5kIGFiaWxpdGllcyB0byBlYWNoPGJyLz5cclxuICAgICAgICAgICAgICAgICAgIHByb2plY3QuIFdlIHRoaW5rIHRoYXQgdGhlIHZvaWNlIG9mIGV2ZXJ5b25lIG1hdHRlcnMgYW5kIHRoYXQgYW55IHBlcnNvbjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuIGNvbWUgdXAgd2l0aCB0aGUgZmluZXN0IHRob3VnaHRzLiBTcGluZW9yIGhhcyBhIGZsYXQgb3JnYW5pemF0aW9uYWw8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmUgdGhhdCBlbmFibGVzIHVzIHRvIGJlIG1vcmUgZWZmZWN0aXZlIGluIGNvbnN0cnVjdGluZyBhbWF6aW5nPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIHNvIHRoYXQgd2UgY2FuIGRldm90ZSBvdXIgdGltZS48L3A+PHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgV2UgYmVsaWV2ZSB0aGUgdm9pY2Ugb2YgYWxsIG1hdHRlcnMgYW5kIHRoZSBiZXN0IGlkZWFzIGNhbiBjb21lIGZyb208YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnkgaW5kaXZpZHVhbC4gU3BpbmVvciBoYXMgYSBmbGF0IG9yZ2FuaXphdGlvbmFsIHN0cnVjdHVyZSB0aGF0IGFsbG93cyB1czxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBtb3JlIGVmZmljaWVudCBpbiBidWlsZGluZyBhd2Vzb21lIHByb2R1Y3RzIHNvIHRoYXQgd2UgY2FuIHNwZW5kIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvdXIgdGltZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAub3V0ZXJfY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODU5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNzc4cHg7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWV0aG9kb2xvZ3l7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOTlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTIzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZnJlZXNwYWNle1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMzk0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYXJhe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTY3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyODdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2OTNweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE0NjZweDsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMzsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbm5lcl90ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMzRweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTMxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\common\\\\OurInfastructure\\\\Image.js */")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./common/OurInfastructure/Inspire.js":
/*!********************************************!*\
  !*** ./common/OurInfastructure/Inspire.js ***!
  \********************************************/
/*! exports provided: Inspire, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inspire", function() { return Inspire; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\common\\OurInfastructure\\Inspire.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Inspire extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-1286561804" + " " + "outer_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, "We love to create and inspire"), __jsx("div", {
      className: "jsx-1286561804" + " " + "inner_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, "MEET OUR PEOPLE"), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-1286561804" + " " + "image1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "images/service.jpg",
      className: "jsx-1286561804" + " " + "image2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-1286561804" + " " + "image3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "images/employer.jpg",
      className: "jsx-1286561804" + " " + "image4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-1286561804" + " " + "image5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-1286561804" + " " + "image6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-1286561804" + " " + "image7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "rectangle8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1286561804" + " " + "image8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "",
      className: "jsx-1286561804" + " " + "image8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1286561804",
      __self: this
    }, ".outer_wrapper.jsx-1286561804{position:absolute;width:1299px;height:843px;left:0px;top:1925px;border:1px solid black;}.rectangle2.jsx-1286561804{position:absolute;width:400px;height:300px;left:534px;top:2067px;background:#C4C4C4;}.image2.jsx-1286561804{position:absolute;width:420px;height:315px;left:524px;top:2062px;background:url(working-for-an-owner-driven-business.png);}.rectangle3.jsx-1286561804{position:absolute;width:364px;height:364px;left:935px;top:2067px;background:#C4C4C4;}.image3.jsx-1286561804{position:absolute;width:621px;height:414px;left:838px;top:2035px;background:url(engineering-k4GI--621x414@LiveMint.jpg);}.rectangle4.jsx-1286561804{position:absolute;width:399px;height:399px;left:1px;top:2368px;background:#C4C4C4;}.image4.jsx-1286561804{position:absolute;width:438px;height:432px;left:0px;top:2361px;background:url(employer-danger-signs.jpg);}.rectangle5.jsx-1286561804{position:absolute;width:533px;height:400px;left:401px;top:2368px;background:#C4C4C4;}.image5.jsx-1286561804{position:absolute;width:714px;height:401px;left:327px;top:2367px;background:url(30353-employees-reuters.jpg);}.rectangle6.jsx-1286561804{position:absolute;width:364px;height:273px;left:935px;top:2432px;background:#C4C4C4;}.image6.jsx-1286561804{position:absolute;width:700px;height:343px;left:918px;top:2424px;background:url(image.png);}.rectangle7.jsx-1286561804{position:absolute;width:111px;height:62px;left:935px;top:2706px;background:#C4C4C4;}.image7.jsx-1286561804{position:absolute;width:144px;height:96px;left:914px;top:2695px;background:url(engineering-k4GI--621x414@LiveMint.jpg);}.rectangle8.jsx-1286561804{position:absolute;width:77px;height:62px;left:1110px;top:2706px;background:#C4C4C4;}.image8.jsx-1286561804{position:absolute;width:267px;height:150px;left:1187px;top:2617px;background:url(30353-employees-reuters.jpg);}.rectangle1.jsx-1286561804{position:absolute;width:533px;height:300px;left:0px;top:2067px;background:#C4C4C4;}.image1.jsx-1286561804{position:absolute;width:700px;height:343px;left:-73px;top:2055px;background:url(image.png);}.inner_header.jsx-1286561804{position:absolute;width:180px;height:21px;left:571px;top:2001px;font-family:Roboto;font-style:normal;font-weight:900;font-size:18px;line-height:21px;color:#184A88;}.header.jsx-1286561804{position:absolute;width:613px;height:56px;left:344px;top:1925px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#333333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxJbnNwaXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDNEIsQUFHdUMsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBYUEsa0JBcEpMLEFBUUQsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUQsQUFRQyxBQVFBLEFBUUEsQUFRSixBQWFJLFdBNUNBLENBaEdDLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUQsQUFRQSxBQWdCQyxBQVFBLEFBUUEsQUFRTCxBQWFJLENBckpDLFVBeUdELENBaEJELEFBUUEsQUF3Q0osQUFhSSxDQTdJQSxBQVFBLEFBUUEsQUFRQSxBQVFGLEFBUUEsQUFRRSxBQVFBLEFBUUEsQUFRQSxBQWdDQyxBQVFILEFBUUUsQ0FoSUYsUUF5Q0UsQUFRQSxBQXdFQSxDQXhIQSxBQXdGQSxBQVFBLEFBUUEsQUFnQ0osQUFhSSxDQTdJQSxBQVFBLEFBUUEsQUFRQSxBQXdCQSxBQVFBLEFBUUEsQUFRQSxBQWdEQSxDQWhCQSxRQXZFUSxBQVF1QixBQXdFdkIsQ0F2SHhCLEFBdUZ3QixBQVFvQyxBQVFwQyxBQWdDSixBQWFJLENBN0lBLEFBUXNDLEFBUXRDLEFBUW9DLEFBd0JwQyxBQVF5QixBQVF6QixBQVFPLEFBZ0RBLENBaEJrQixnQkF2RWhELEFBZ0ZBLENBaENBLEFBZ0JBLEFBZ0NrQixBQWFJLENBN0l0QixBQWdCQSxBQWdDQSxBQWdCQSxHQXhFQSxJQWdGQSxBQWdEQSxVQVNnQixBQWFPLElBdEd2QixJQWdCQSxDQWdEQSxPQTBCZSxFQTFDZixDQWhFQSxBQXVIbUIsRUF2SW5CLFVBMkhpQixHQWFJLGNBWlAsR0FhSSxXQVpsQixHQWFBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxJbnNwaXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3BpcmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyX3dyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICBXZSBsb3ZlIHRvIGNyZWF0ZSBhbmQgaW5zcGlyZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgTUVFVCBPVVIgUEVPUExFXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2UxXCIgc3JjPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0YW5nbGUyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZTJcIiBzcmM9XCJpbWFnZXMvc2VydmljZS5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlM1wiIHNyYz1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2U0XCIgc3JjPVwiaW1hZ2VzL2VtcGxveWVyLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2U1XCIgc3JjPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0YW5nbGU2XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZTZcIiBzcmM9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZTdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2U3XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlN1wiIHNyYz1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlOFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZThcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2U4XCIgc3JjPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm91dGVyX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NDNweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxOTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFja1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlY3RhbmdsZTJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjA2N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNDNEM0QzQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwNjJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwod29ya2luZy1mb3ItYW4tb3duZXItZHJpdmVuLWJ1c2luZXNzLnBuZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVjdGFuZ2xlM3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOTM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMDY3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZTN7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MjFweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDgzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChlbmdpbmVlcmluZy1rNEdJLS02MjF4NDE0QExpdmVNaW50LmpwZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVjdGFuZ2xlNHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjM2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNDNEM0QzQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2U0e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MzJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMzYxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGVtcGxveWVyLWRhbmdlci1zaWducy5qcGcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlY3RhbmdsZTV7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MzNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjM2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNDNEM0QzQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2U1e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzMjdweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIzNjdweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoMzAzNTMtZW1wbG95ZWVzLXJldXRlcnMuanBnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZWN0YW5nbGU2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNzNweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI0MzJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlNntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOTE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGltYWdlLnBuZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVjdGFuZ2xlN3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI3MDZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlN3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MTRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI2OTVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoZW5naW5lZXJpbmctazRHSS0tNjIxeDQxNEBMaXZlTWludC5qcGcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlY3RhbmdsZTh7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNzA2cHg7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlOHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTE4N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjYxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgzMDM1My1lbXBsb3llZXMtcmV1dGVycy5qcGcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlY3RhbmdsZTF7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MzNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwNjdweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlMXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTczcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGltYWdlLnBuZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5uZXJfaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDU3MXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMDAxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTkyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNwaXJlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\common\\\\OurInfastructure\\\\Inspire.js */")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Inspire);

/***/ }),

/***/ "./common/OurInfastructure/Knowmore.js":
/*!*********************************************!*\
  !*** ./common/OurInfastructure/Knowmore.js ***!
  \*********************************************/
/*! exports provided: Knowmore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Knowmore", function() { return Knowmore; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\common\\OurInfastructure\\Knowmore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Knowmore extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-1595209620" + " " + "outer_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1595209620" + " " + "outer_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, "Know more about ", __jsx("br", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 63
      }
    }), " our company"), __jsx("div", {
      className: "jsx-1595209620" + " " + "inner_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "READ MORE ABOUT US"), __jsx("div", {
      className: "jsx-1595209620" + " " + "paragraph",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, "Our people are our assets."), __jsx("p", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, " Detailing, scoping not just for current but for future helps us plan", __jsx("br", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 89
      }
    }), "and build scalable solutions."), __jsx("p", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 18
      }
    }, " Respecting every person we work with, our commitment to our ", __jsx("br", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 82
      }
    }), "work and to the society."), __jsx("p", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "We face new challenges every day but our commitment remains ", __jsx("br", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 84
      }
    }), "unchanged, and we continue to take determined steps into the ", __jsx("br", {
      className: "jsx-1595209620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 82
      }
    }), "future with every individual associated with us.")), __jsx("div", {
      className: "jsx-1595209620" + " " + "outer_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "jsx-1595209620" + " " + "inner_button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, "Download Whitepaper"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1595209620",
      __self: this
    }, ".outer_button.jsx-1595209620{position:absolute;width:254px;height:50px;left:844px;top:4103px;background:#184A88;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.inner_button.jsx-1595209620{position:absolute;width:157px;height:19px;left:902px;top:4118px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#FFFFFF;}.paragraph.jsx-1595209620{position:absolute;width:513px;height:247px;left:111px;top:3926px;font-family:Roboto;font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#333333;}.inner_header.jsx-1595209620{position:absolute;width:210px;height:21px;left:111px;top:3746px;font-family:Roboto;font-style:normal;font-weight:900;font-size:18px;line-height:21px;color:#184A88;}.outer_header.jsx-1595209620{position:absolute;width:384px;height:120px;left:111px;top:3781px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:48px;line-height:56px;color:#333333;}.outer_wrapper.jsx-1595209620{position:absolute;width:987px;height:427px;left:111px;top:3746px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxLbm93bW9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjRCLEFBR3VDLEFBV0EsQUFrQkEsQUFhQSxBQWFBLEFBYUEsa0JBbkVOLEFBV0MsQUFrQkQsQUFhQSxBQWFBLEFBYUEsWUFuRUEsQUFXQSxBQWtCQyxBQWFELEFBYUMsQUFhQSxZQW5FRixBQVdBLEFBK0JBLENBYkEsQUEwQkEsQUFhQSxVQW5FQSxBQVdBLEFBK0JBLENBYkEsQUEwQkEsQUFhQSxVQW5FUSxBQVdBLEFBK0JBLENBYkEsQUEwQkEsQUFhdkIsa0JBbkU2QixBQVdQLEFBK0JBLENBYkEsQUEwQkEsaUJBM0NDLEFBK0JILENBYkEsQUEwQkcsTUF2REcsU0EyQ1AsQ0FiQSxFQWxCQSxDQTRDQSxTQXZERyxFQTJDRCxDQWJBLEVBbEJBLENBNENBLFlBdkRyQixDQTJDa0IsQ0FiQSxFQWxCRCxDQTRDQyxVQVpsQixDQWJBLEdBMEJBLDJEQTVDdUIsNkZBQ0Qsa0JBQ0osY0FDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcbWVyZ2VkLWNvZGUgLW5hdlxcU3BpbmVvci1jb2RlXFxjb21tb25cXE91ckluZmFzdHJ1Y3R1cmVcXEtub3dtb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuZXhwb3J0IGNsYXNzIEtub3dtb3JlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlcl93cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyX2hlYWRlclwiPktub3cgbW9yZSBhYm91dCA8YnIvPiBvdXIgY29tcGFueTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9oZWFkZXJcIj5SRUFEIE1PUkUgQUJPVVQgVVM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5PdXIgcGVvcGxlIGFyZSBvdXIgYXNzZXRzLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiBEZXRhaWxpbmcsIHNjb3Bpbmcgbm90IGp1c3QgZm9yIGN1cnJlbnQgYnV0IGZvciBmdXR1cmUgaGVscHMgdXMgcGxhbjxici8+XHJcbiAgICAgICAgICAgICAgICAgYW5kIGJ1aWxkIHNjYWxhYmxlIHNvbHV0aW9ucy48L3A+XHJcbiAgICAgICAgICAgICAgICAgPHA+IFJlc3BlY3RpbmcgZXZlcnkgcGVyc29uIHdlIHdvcmsgd2l0aCwgb3VyIGNvbW1pdG1lbnQgdG8gb3VyIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIHdvcmsgYW5kIHRvIHRoZSBzb2NpZXR5LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5XZSBmYWNlIG5ldyBjaGFsbGVuZ2VzIGV2ZXJ5IGRheSBidXQgb3VyIGNvbW1pdG1lbnQgcmVtYWlucyA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHVuY2hhbmdlZCwgYW5kIHdlIGNvbnRpbnVlIHRvIHRha2UgZGV0ZXJtaW5lZCBzdGVwcyBpbnRvIHRoZSA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1dHVyZSB3aXRoIGV2ZXJ5IGluZGl2aWR1YWwgYXNzb2NpYXRlZCB3aXRoIHVzLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlcl9idXR0b25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfYnV0dG9uXCI+RG93bmxvYWQgV2hpdGVwYXBlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm91dGVyX2J1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4NDRweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQxMDNweDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbm5lcl9idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDExOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wYXJhZ3JhcGh7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MTNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzkyNnB4OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlubmVyX2hlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM3NDZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vdXRlcl9oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzODRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzc4MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm91dGVyX3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5ODdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzc0NnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLbm93bW9yZVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\common\\\\OurInfastructure\\\\Knowmore.js */")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Knowmore);

/***/ }),

/***/ "./common/OurInfastructure/banner.js":
/*!*******************************************!*\
  !*** ./common/OurInfastructure/banner.js ***!
  \*******************************************/
/*! exports provided: Banner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\common\\OurInfastructure\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Banner extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-4029196647" + " " + "inner_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }
    }, "Our Infrastructure"), __jsx("div", {
      className: "jsx-4029196647" + " " + "inner_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 16
      }
    }, "Our benefit is our team of skilled,", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 51
      }
    }), "hard-working and devoted staff ", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 48
      }
    }), "working to maintain the", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 40
      }
    }), "corporate ideals of excellence of", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 51
      }
    }), "Spineor Conceptions."), __jsx("div", {
      className: "jsx-4029196647" + " " + "button_outer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    }), __jsx("div", {
      className: "jsx-4029196647" + " " + "button_inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }
    }, "Get in touch"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4029196647",
      __self: this
    }, ".inner_header.jsx-4029196647{position:absolute;width:435px;height:186px;left:111px;top:298px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:70px;line-height:82px;color:#333333;}.inner_text.jsx-4029196647{position:absolute;width:515px;height:223px;left:656px;top:246px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}.button_outer.jsx-4029196647{position:absolute;width:158px;height:50px;left:658px;top:488px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button_inner.jsx-4029196647{position:absolute;width:86px;height:19px;left:692px;top:503px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxiYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0IyQixBQUdtQyxBQWFBLEFBYUEsQUFZQSxrQkFyQ04sQUFhQSxBQWFBLEFBWUQsV0FDQyxDQXRDQyxBQWFBLEFBYUQsV0FhRCxDQVpBLENBMUJBLEFBYUEsU0EwQkQsQ0FaQSxDQTFCQSxBQWFBLFFBMkJTLENBWkEsQ0EzQkEsQUFhQSxpQkEyQkQsQ0FaTyxDQTNCUCxBQWFBLGdCQTJCQyxFQXZDRixBQWFELE1BY00sVUFiUCxDQWJBLEFBdUNBLFdBWkcsR0FiRCxDQWJBLEFBdUNBLGNBWmxCLEVBYmUsQ0FiQSxBQXlDRCxhQTNCZCxDQWJBLDREQXlDb0IsNkZBQ0Qsa0JBRUosY0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxtZXJnZWQtY29kZSAtbmF2XFxTcGluZW9yLWNvZGVcXGNvbW1vblxcT3VySW5mYXN0cnVjdHVyZVxcYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgT3VyIEluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgIE91ciBiZW5lZml0IGlzIG91ciB0ZWFtIG9mIHNraWxsZWQsPGJyLz5cclxuICAgICAgICAgICAgICAgIGhhcmQtd29ya2luZyBhbmQgZGV2b3RlZCBzdGFmZiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgd29ya2luZyB0byBtYWludGFpbiB0aGU8YnIvPlxyXG4gICAgICAgICAgICAgICAgIGNvcnBvcmF0ZSBpZGVhbHMgb2YgZXhjZWxsZW5jZSBvZjxici8+XHJcbiAgICAgICAgICAgICAgICAgIFNwaW5lb3IgQ29uY2VwdGlvbnMuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9vdXRlclwiPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25faW5uZXJcIj5cclxuICAgICAgICAgICAgICAgR2V0IGluIHRvdWNoXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgIC5pbm5lcl9oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI5OHB4OyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgycHg7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMzsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmlubmVyX3RleHR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyM3B4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNjU2cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI0NnB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMzsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmJ1dHRvbl9vdXRlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNThweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDY1OHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0ODhweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODRBODg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5idXR0b25faW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDY5MnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MDNweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTg0QTg4O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\common\\\\OurInfastructure\\\\banner.js */")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Footer/Facebook.js":
/*!***************************************!*\
  !*** ./components/Footer/Facebook.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\components\\Footer\\Facebook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  viewBox: "-21 -21 682.66669 682.66669",
  xmlns: "http://www.w3.org/2000/svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 1
  }
}, __jsx("path", {
  d: "m604.671875 0h-569.375c-19.496094.0117188-35.30078125 15.824219-35.296875 35.328125v569.375c.0117188 19.496094 15.824219 35.300781 35.328125 35.296875h306.546875v-247.5h-83.125v-96.875h83.125v-71.292969c0-82.675781 50.472656-127.675781 124.222656-127.675781 35.324219 0 65.679688 2.632812 74.527344 3.808594v86.410156h-50.855469c-40.125 0-47.894531 19.066406-47.894531 47.050781v61.699219h95.9375l-12.5 96.875h-83.4375v247.5h162.796875c19.507813.003906 35.324219-15.804688 35.328125-35.3125 0-.003906 0-.007812 0-.015625v-569.375c-.007812-19.496094-15.824219-35.30078125-35.328125-35.296875zm0 0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 81
  }
})));

/***/ }),

/***/ "./components/Footer/Youtubesvg.js":
/*!*****************************************!*\
  !*** ./components/Footer/Youtubesvg.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\components\\Footer\\Youtubesvg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "30px",
  height: "30px",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 2
  }
}, "    ", __jsx("path", {
  d: "M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 9.3808594 6.2226562 L 10.529297 6.2226562 L 10.988281 8.375 C 11.105281 8.905 11.192047 9.3564687 11.248047 9.7304688 L 11.283203 9.7304688 C 11.322203 9.4624687 11.407969 9.0138125 11.542969 8.3828125 L 12.019531 6.2226562 L 13.167969 6.2226562 L 11.835938 10.970703 L 11.835938 13.248047 L 10.695312 13.248047 L 10.695312 10.970703 L 9.3808594 6.2226562 z M 14.494141 8.015625 C 14.874141 8.015625 15.17725 8.093 15.40625 8.25 C 15.63525 8.406 15.802203 8.6514219 15.908203 8.9824219 C 16.014203 9.3144219 16.068359 9.7565937 16.068359 10.308594 L 16.068359 11.054688 C 16.068359 11.602688 16.015109 12.041047 15.912109 12.373047 C 15.809109 12.705047 15.641156 12.949516 15.410156 13.103516 C 15.179156 13.257516 14.86475 13.332031 14.46875 13.332031 C 14.06175 13.332031 13.741766 13.254656 13.509766 13.097656 C 13.277766 12.941656 13.113625 12.699141 13.015625 12.369141 C 12.917625 12.039141 12.869141 11.601687 12.869141 11.054688 L 12.869141 10.308594 C 12.869141 9.7555937 12.924156 9.3125625 13.035156 8.9765625 C 13.147156 8.6435625 13.323547 8.3971406 13.560547 8.2441406 C 13.797547 8.0901406 14.108141 8.015625 14.494141 8.015625 z M 16.669922 8.1152344 L 17.824219 8.1152344 L 17.824219 11.884766 C 17.824219 12.113766 17.849391 12.277 17.900391 12.375 C 17.951391 12.473 18.034344 12.521484 18.152344 12.521484 C 18.252344 12.521484 18.348406 12.491688 18.441406 12.429688 C 18.533406 12.368688 18.602484 12.290312 18.646484 12.195312 L 18.646484 8.1152344 L 19.802734 8.1152344 L 19.802734 13.25 L 18.896484 13.25 L 18.796875 12.621094 L 18.771484 12.621094 C 18.526484 13.096094 18.158969 13.333984 17.667969 13.333984 C 17.327969 13.333984 17.074109 13.221047 16.912109 12.998047 C 16.750109 12.775047 16.669922 12.426172 16.669922 11.951172 L 16.669922 8.1152344 z M 14.46875 8.8125 C 14.31275 8.8125 14.202672 8.8964063 14.138672 9.0664062 C 14.074672 9.2374062 14.042969 9.507 14.042969 9.875 L 14.042969 11.474609 C 14.042969 11.854609 14.072766 12.127922 14.134766 12.294922 C 14.196766 12.461922 14.308703 12.546875 14.470703 12.546875 C 14.631703 12.545875 14.744594 12.462922 14.808594 12.294922 C 14.872594 12.127922 14.904297 11.853609 14.904297 11.474609 L 14.904297 9.875 C 14.904297 9.506 14.872594 9.2364062 14.808594 9.0664062 C 14.744594 8.8954063 14.63075 8.8125 14.46875 8.8125 z M 8.7773438 14.222656 L 21.222656 14.222656 C 22.200656 14.222656 23 15.022 23 16 L 23 22.222656 C 23 23.200656 22.200656 24 21.222656 24 L 8.7773438 24 C 7.7993437 24 7 23.200656 7 22.222656 L 7 16 C 7 15.022 7.7993437 14.222656 8.7773438 14.222656 z M 15.044922 16 L 15.044922 22.150391 L 15.849609 22.150391 L 15.949219 21.740234 L 15.970703 21.740234 C 16.046703 21.887234 16.158547 22.002891 16.310547 22.087891 C 16.461547 22.171891 16.6285 22.214844 16.8125 22.214844 C 17.1425 22.214844 17.383063 22.063766 17.539062 21.759766 C 17.695062 21.455766 17.773438 20.979984 17.773438 20.333984 L 17.773438 19.648438 L 17.771484 19.648438 C 17.771484 19.163438 17.742594 18.783766 17.683594 18.509766 C 17.624594 18.236766 17.529438 18.039016 17.398438 17.916016 C 17.267437 17.793016 17.084516 17.732422 16.853516 17.732422 C 16.673516 17.732422 16.506562 17.783766 16.351562 17.884766 C 16.195563 17.985766 16.075234 18.118203 15.990234 18.283203 L 15.984375 18.283203 L 15.984375 16 L 15.044922 16 z M 9.2109375 16.220703 L 9.2109375 17.003906 L 10.179688 17.003906 L 10.179688 22.150391 L 11.132812 22.150391 L 11.132812 17.003906 L 12.101562 17.003906 L 12.101562 16.220703 L 9.2109375 16.220703 z M 19.529297 17.734375 C 19.044297 17.734375 18.701953 17.883594 18.501953 18.183594 C 18.301953 18.483594 18.201172 18.958375 18.201172 19.609375 L 18.201172 20.365234 C 18.201172 20.997234 18.298188 21.464625 18.492188 21.765625 C 18.686187 22.066625 19.022906 22.21875 19.503906 22.21875 C 19.904906 22.21875 20.213594 22.119875 20.433594 21.921875 C 20.653594 21.724875 20.763672 21.424437 20.763672 21.023438 C 20.763672 20.957438 20.759859 20.905187 20.755859 20.867188 L 19.914062 20.816406 C 19.910062 21.080406 19.880172 21.269812 19.826172 21.382812 C 19.772172 21.495812 19.670391 21.552734 19.525391 21.552734 C 19.417391 21.552734 19.337156 21.521031 19.285156 21.457031 C 19.233156 21.394031 19.200594 21.291344 19.183594 21.152344 C 19.166594 21.013344 19.158203 20.805344 19.158203 20.527344 L 19.158203 20.306641 L 20.789062 20.306641 L 20.789062 19.566406 C 20.789062 19.109406 20.752688 18.750234 20.679688 18.490234 C 20.605687 18.231234 20.479781 18.041922 20.300781 17.919922 C 20.120781 17.796922 19.864297 17.734375 19.529297 17.734375 z M 11.810547 17.816406 L 11.810547 21.054688 C 11.810547 21.454687 11.878625 21.750453 12.015625 21.939453 C 12.152625 22.127453 12.362391 22.222656 12.650391 22.222656 C 13.065391 22.222656 13.377938 22.021141 13.585938 21.619141 L 13.605469 21.619141 L 13.689453 22.150391 L 14.453125 22.150391 L 14.455078 22.150391 L 14.455078 17.816406 L 13.480469 17.816406 L 13.480469 21.259766 C 13.442469 21.339766 13.384641 21.406031 13.306641 21.457031 C 13.229641 21.509031 13.1475 21.535156 13.0625 21.535156 C 12.9625 21.535156 12.893563 21.495109 12.851562 21.412109 C 12.808563 21.330109 12.787109 21.191047 12.787109 20.998047 L 12.787109 17.816406 L 11.810547 17.816406 z M 19.509766 18.394531 C 19.613766 18.394531 19.690234 18.423422 19.740234 18.482422 C 19.790234 18.541422 19.824797 18.641156 19.841797 18.785156 C 19.860797 18.929156 19.869141 19.141922 19.869141 19.419922 L 19.869141 19.730469 L 19.15625 19.730469 L 19.15625 19.419922 C 19.15625 19.136922 19.164641 18.924156 19.181641 18.785156 C 19.197641 18.646156 19.229297 18.547328 19.279297 18.486328 C 19.329297 18.426328 19.405766 18.394531 19.509766 18.394531 z M 16.414062 18.425781 C 16.514063 18.425781 16.590531 18.464016 16.644531 18.541016 C 16.697531 18.618016 16.736812 18.749594 16.757812 18.933594 C 16.778813 19.117594 16.789063 19.37875 16.789062 19.71875 L 16.789062 20.277344 C 16.789062 20.593344 16.777953 20.841531 16.751953 21.019531 C 16.725953 21.199531 16.681141 21.327344 16.619141 21.402344 C 16.557141 21.477344 16.477047 21.515625 16.373047 21.515625 C 16.292047 21.515625 16.218391 21.494031 16.150391 21.457031 C 16.082391 21.419031 16.026375 21.363109 15.984375 21.287109 L 15.984375 18.828125 C 16.017375 18.711125 16.074297 18.613109 16.154297 18.537109 C 16.234297 18.461109 16.320062 18.425781 16.414062 18.425781 z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 108
  }
})));

/***/ }),

/***/ "./components/Footer/footer.js":
/*!*************************************!*\
  !*** ./components/Footer/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Youtubesvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Youtubesvg */ "./components/Footer/Youtubesvg.js");
/* harmony import */ var _Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Facebook */ "./components/Footer/Facebook.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\components\\Footer\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Footer = () => {
  return __jsx("div", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1446935878" + " " + "footer-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1446935878" + " " + "quick-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Quick Links"), __jsx("div", {
    className: "jsx-1446935878" + " " + "service-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Services"), __jsx("div", {
    className: "jsx-1446935878" + " " + "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Contact"), __jsx("div", {
    className: "jsx-1446935878" + " " + "quick-links-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Home", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), "About", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), "Success", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), "Stories", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), "Insights", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), "Career", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), "Contact"), __jsx("div", {
    className: "jsx-1446935878" + " " + "service-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Open Source Implementation", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), "Scala Programming", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), "Restful API'S", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), "Automated Devops Deployment", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), "Big Data Analytics", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), "Native Apps Building"), __jsx("div", {
    className: "jsx-1446935878" + " " + "service-inner2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Full/Mean Stack Development", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), "Third Party Integrations", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), "Crypto Currency Development", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), "Java Programming", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), "Us Staffing"), __jsx("div", {
    className: "jsx-1446935878" + " " + "contact-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "+91(991)502-1146", __jsx("br", {
    className: "jsx-1446935878",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), "hr@spineor.com"), __jsx("div", {
    className: "jsx-1446935878" + " " + "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Copyright2020-Spineor.com"), __jsx("div", {
    className: "jsx-1446935878" + " " + "facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1446935878" + " " + "linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1446935878" + " " + "youtube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1446935878",
    __self: undefined
  }, ".footer-box.jsx-1446935878{position:absolute;width:1344px;height:434px;left:0px;top:5415px;background:#000000;}.quick-links.jsx-1446935878{position:absolute;width:125px;height:28px;left:94px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.service-links.jsx-1446935878{position:absolute;width:125px;height:28px;left:406px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.contact.jsx-1446935878{position:absolute;width:125px;height:28px;left:1044px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}.quick-links-inner.jsx-1446935878{position:absolute;width:129px;height:186px;left:94px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.service-inner.jsx-1446935878{position:absolute;width:258px;height:186px;left:406px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.service-inner2.jsx-1446935878{position:absolute;width:245px;height:155px;left:723px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.contact-inner.jsx-1446935878{position:absolute;width:154px;height:62px;left:1044px;top:147px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}.copyright.jsx-1446935878{position:absolute;width:149px;height:14px;left:615px;top:393px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;color:#DCDCDC;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tcG9uZW50c1xcRm9vdGVyXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVnQixBQUkyQixBQVNBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0Esa0JBMUdMLEFBU0QsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFjQSxZQWpHQSxBQWNBLEFBY0EsQUFjQyxBQWNBLEFBY0EsQUFjRCxBQWNBLENBM0dDLFdBVUgsQUFjQyxBQWNDLEFBd0RBLEFBY0QsQ0F4REQsQUFjQyxBQWNBLENBL0VGLFFBVUEsQ0FURSxBQXVCRixBQTRCQyxBQXdEQSxDQXRFRCxBQTRCQyxBQWNBLEFBY0EsT0FuRlMsQ0FjQSxDQWNBLEFBY0EsQUF3REEsQ0EzR0EsQUFpRUEsQUFjQSxBQWNBLGdCQW5GRCxDQWNBLENBY0EsQUFjQSxBQXdEQSxDQTNHdEIsQUFpRXNCLEFBY0EsQUFjQSxlQW5GRixDQWNBLENBY0EsQUFjRyxBQXdEQSxDQTFDQSxBQWNBLEFBY0EsYUFuRkosQ0FjQSxDQWNBLEdBY0EsQUF3REEsQ0ExQ0EsQUFjQSxBQWNBLFNBbkZFLENBY0EsQ0FjQSxHQWNBLEFBd0RBLENBMUNBLEFBY0EsQUFjQSxXQW5GSCxDQWNBLENBY0EsR0FjQSxBQXdEQSxDQTFDQSxBQWNBLEFBY0EsUUFuRmxCLENBY0EsQ0FjQSxHQWNBLEFBd0RBLENBMUNBLEFBY0EsQUFjQSIsImZpbGUiOiJDOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxtZXJnZWQtY29kZSAtbmF2XFxTcGluZW9yLWNvZGVcXGNvbXBvbmVudHNcXEZvb3RlclxcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFlvdXR1YmVzdmcgZnJvbSBcIi4vWW91dHViZXN2Z1wiXHJcbmltcG9ydCBGYWNlYm9vayBmcm9tIFwiLi9GYWNlYm9va1wiXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwicXVpY2stbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIFF1aWNrIExpbmtzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInNlcnZpY2UtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwicXVpY2stbGlua3MtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIEhvbWUgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgQWJvdXQgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgPGJyLz4gXHJcbiAgICAgICAgICAgICAgICBTdG9yaWVzXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIEluc2lnaHRzXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIENhcmVlclxyXG4gICAgICAgICAgICAgICAgPGJyLz4gXHJcbiAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInNlcnZpY2UtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIE9wZW4gU291cmNlIEltcGxlbWVudGF0aW9uIFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFNjYWxhIFByb2dyYW1taW5nXHJcbiAgICAgICAgICAgICAgICA8YnIvPiBcclxuICAgICAgICAgICAgICAgIFJlc3RmdWwgQVBJJ1MgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgQXV0b21hdGVkIERldm9wcyBEZXBsb3ltZW50IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIEJpZyBEYXRhIEFuYWx5dGljcyBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBOYXRpdmUgQXBwcyBCdWlsZGluZyBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwic2VydmljZS1pbm5lcjJcIj5cclxuICAgICAgICAgICAgICAgIEZ1bGwvTWVhbiBTdGFjayBEZXZlbG9wbWVudCBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBUaGlyZCBQYXJ0eSBJbnRlZ3JhdGlvbnNcclxuICAgICAgICAgICAgICAgIDxici8+IFxyXG4gICAgICAgICAgICAgICAgQ3J5cHRvIEN1cnJlbmN5IERldmVsb3BtZW50IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIEphdmEgUHJvZ3JhbW1pbmcgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgVXMgU3RhZmZpbmcgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRhY3QtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICs5MSg5OTEpNTAyLTExNDYgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgaHJAc3BpbmVvci5jb21cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBDb3B5cmlnaHQyMDIwLVNwaW5lb3IuY29tXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImZhY2Vib29rXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJsaW5rZWRpblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwieW91dHViZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFxyXG4gICAgLmZvb3Rlci1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTM0NHB4O1xyXG4gICAgICAgIGhlaWdodDogNDM0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHRvcDogNTQxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1aWNrLWxpbmtzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsZWZ0OiA5NHB4O1xyXG4gICAgICAgIHRvcDogODhweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1saW5rcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGVmdDogNDA2cHg7XHJcbiAgICAgICAgdG9wOiA4OHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsZWZ0OiAxMDQ0cHg7XHJcbiAgICAgICAgdG9wOiA4OHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdWljay1saW5rcy1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjlweDtcclxuICAgICAgICBoZWlnaHQ6IDE4NnB4O1xyXG4gICAgICAgIGxlZnQ6IDk0cHg7XHJcbiAgICAgICAgdG9wOiAxNDZweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTcwJTtcclxuICAgICAgICBjb2xvcjogI0VCRUJFQjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4NnB4O1xyXG4gICAgICAgIGxlZnQ6IDQwNnB4O1xyXG4gICAgICAgIHRvcDogMTQ2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XHJcbiAgICAgICAgY29sb3I6ICNFQkVCRUI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtaW5uZXIyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI0NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICAgICAgbGVmdDogNzIzcHg7XHJcbiAgICAgICAgdG9wOiAxNDZweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTcwJTtcclxuICAgICAgICBjb2xvcjogI0VCRUJFQjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNTRweDtcclxuICAgICAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICAgICAgbGVmdDogMTA0NHB4O1xyXG4gICAgICAgIHRvcDogMTQ3cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XHJcbiAgICAgICAgY29sb3I6ICNFQkVCRUI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNDlweDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgbGVmdDogNjE1cHg7XHJcbiAgICAgICAgdG9wOiAzOTNweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBjb2xvcjogI0RDRENEQztcclxuICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\components\\\\Footer\\\\footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/header.js":
/*!*************************************!*\
  !*** ./components/Header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\components\\Header\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => {
  return __jsx("div", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "nav-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "\\images\\spineor-logo.png",
    className: "jsx-2554541966" + " " + "spineor-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/About",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "ABOUT"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Service",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "service",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "SERVICES"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "SUCCESS STORIES"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/OurInfa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "insights",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "INSIGHTS"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "career",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "CAREER"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2554541966" + " " + "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "CONTACT"))), __jsx("div", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "jsx-2554541966" + " " + "quote-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "jsx-2554541966",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 51
    }
  }, "GET A QUOTE")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2554541966",
    __self: undefined
  }, ".nav-box.jsx-2554541966{position:absolute;width:1344px;height:74px;left:0px;top:0px;position:fixed;background:#FFFFFF;}.spineor-logo.jsx-2554541966{position:absolute;width:140px;height:41px;left:19px;top:16px;}.about.jsx-2554541966{position:absolute;width:45px;height:16px;left:480px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.service.jsx-2554541966{position:absolute;width:45px;height:16px;left:572px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.success.jsx-2554541966{position:absolute;width:122px;height:16px;left:686px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.insights.jsx-2554541966{position:absolute;width:45px;height:16px;left:852px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.career.jsx-2554541966{position:absolute;width:45px;height:16px;left:961px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.contact.jsx-2554541966{position:absolute;width:45px;height:16px;left:1060px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}.quote-button.jsx-2554541966{position:absolute;width:122px;height:40px;left:1158px;top:18px;background:#184A88;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;border-radius:2px;}a.jsx-2554541966{color:#FFFFFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tcG9uZW50c1xcSGVhZGVyXFxoZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURnQixBQUkyQixBQVVBLEFBUUEsQUFjQSxBQWNBLEFBY0EsQUFjQSxBQWNBLEFBY0EsQUFldkIsY0FBQyxJQXBIaUIsQUFVRCxBQVFELEFBY0EsQUFjQyxBQWNELEFBY0EsQUFjQSxBQWNDLFdBbkZBLEFBY0EsQUE0QkEsQUFjQSxBQWNBLENBOUVBLEFBb0NBLEFBd0RBLENBdEdBLFVBbUJELEFBY0EsQUE0QkEsQUFjQSxBQWNDLENBOUVGLEFBb0NDLEFBd0RDLENBdEdILFNBQ0QsQUFVQyxBQVFBLEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxDQWNBLE1BckdNLENBVW5CLEFBUXVCLEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxDQWNBLFlBckdBLEtBa0JELEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxDQWNDLFlBckd2QixJQWtCdUIsQUFjQSxBQTRCQSxBQWNBLENBNUJBLEFBMENBLEVBY0QsZ0JBbkZILEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxDQWNJLGFBbkZGLEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxLQWNGLFdBbkZELEFBY0EsQUE0QkEsQUFjQSxDQTVCQSxBQTBDQSxHQWNJLFVBbkZ0QixBQWNBLEFBNEJBLEFBY0EsQ0E1QkEsQUEwQ0EsT0FjQSIsImZpbGUiOiJDOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxtZXJnZWQtY29kZSAtbmF2XFxTcGluZW9yLWNvZGVcXGNvbXBvbmVudHNcXEhlYWRlclxcaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcIm5hdi1ib3hcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9IFwic3BpbmVvci1sb2dvXCIgc3JjPSBcIlxcaW1hZ2VzXFxzcGluZW9yLWxvZ28ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImFib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQUJPVVRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz4gICBcclxuICAgICAgICAgICAgPExpbmsgIGhyZWY9XCIvU2VydmljZVwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBTRVJWSUNFU1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3N1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU1VDQ0VTUyBTVE9SSUVTXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvT3VySW5mYVwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImluc2lnaHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSU5TSUdIVFNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJjYXJlZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBDQVJFRVJcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSBcInF1b3RlLWJ1dHRvblwiPjxhPkdFVCBBIFFVT1RFPC9hPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgXHJcbiAgICAubmF2LWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMzQ0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuc3BpbmVvci1sb2dvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgICBsZWZ0OiAxOXB4O1xyXG4gICAgICAgIHRvcDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogNDgwcHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDU3MnB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogNjg2cHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnNpZ2h0cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBsZWZ0OiA4NTJweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmVlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBsZWZ0OiA5NjFweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogMTA2MHB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuXHJcbiAgICAucXVvdGUtYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyMnB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsZWZ0OiAxMTU4cHg7XHJcbiAgICAgICAgdG9wOiAxOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxODRBODg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7ICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkZcclxuICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\components\\\\Header\\\\header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/header */ "./components/Header/header.js");
/* harmony import */ var _Footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/footer */ "./components/Footer/footer.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_Header_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }
  }), props.children, __jsx(_Footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/OurInfa/index.js":
/*!********************************!*\
  !*** ./pages/OurInfa/index.js ***!
  \********************************/
/*! exports provided: OurInfa, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurInfa", function() { return OurInfa; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_OurInfastructure_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/OurInfastructure/banner */ "./common/OurInfastructure/banner.js");
/* harmony import */ var _common_OurInfastructure_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/OurInfastructure/Image */ "./common/OurInfastructure/Image.js");
/* harmony import */ var _common_OurInfastructure_Inspire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/OurInfastructure/Inspire */ "./common/OurInfastructure/Inspire.js");
/* harmony import */ var _common_OurInfastructure_Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/OurInfastructure/Events */ "./common/OurInfastructure/Events.js");
/* harmony import */ var _common_OurInfastructure_Knowmore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/OurInfastructure/Knowmore */ "./common/OurInfastructure/Knowmore.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\pages\\OurInfa\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class OurInfa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx(_common_OurInfastructure_banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), __jsx(_common_OurInfastructure_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }), __jsx(_common_OurInfastructure_Inspire__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }), __jsx(_common_OurInfastructure_Events__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }), __jsx(_common_OurInfastructure_Knowmore__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (OurInfa);

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/OurInfa/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\merged-code -nav\Spineor-code\pages\OurInfa\index.js */"./pages/OurInfa/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=OurInfa.js.map